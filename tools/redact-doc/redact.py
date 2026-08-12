#!/usr/bin/env python3
"""
redact.py — read a client document and hand back a redacted text file.

The point of this tool is WHAT IT DOES NOT DO: it never prints the document's
text. It writes the redacted text to a file and prints only a count of what it
masked. So the identity block never enters the conversation, even by accident —
which is what makes reading a client's own document safe enough to do at all.

    python3 tools/redact-doc/redact.py <input.pdf|https://…> <output.txt>

Given a URL — Double's `get_file` presigned download link — it downloads to a
temporary file, redacts it, and **deletes the raw download before returning**,
whether it succeeded or failed. The undeleted original is the one artefact that
would outlive the job, so nothing is left to remember.

Exit codes
    0  redacted, output written
    2  the PDF has no text layer (a scan) — nothing was written
    3  unreadable / not a PDF / the download failed
    4  the redactor found something it does not know how to mask safely

What is masked, and why (JK Accounting Group, Lilian 2026-08-11):
    SSN / ITIN · bank routing and account numbers (incl. IBAN-style) ·
    dates of birth · driver's licence and other government-issued ID numbers ·
    the street line of an address (city and state are kept).

Text is Unicode-normalised FIRST. That is load-bearing, not tidying: a font
emitting a typographic hyphen or a zero-width space produces an SSN that looks
identical on the page and matches no ASCII pattern — including the guard's.

What is deliberately NOT masked, because Lilian ruled it is not sensitive:
    NAMES  — "Los nombres no son datos sensibles."
    EINs   — "Los números de EIN no son números sensibles porque son públicos."
An EIN is the one nine-digit number on a tax return that must survive: it is how
we identify which entity a K-1 or a W-2 came from, and losing it costs the whole
point of reading the return.

Masks are TAGS, not partial values: [SSN-1], [SSN-2], [ACCT-1]. The same number
always gets the same tag, so two values stay distinguishable — which is all the
analysis ever needed — while no digit of either is learned. An earlier version
emitted the last four digits; name-plus-last-four is the standard identity-
verification pair, and names are not masked here.
"""

import re
import sys
import unicodedata
from pathlib import Path

# ── Normalisation. This runs BEFORE any pattern, and it is load-bearing, not
#    tidying. Every SSN pattern below is written with ASCII separators; a PDF
#    font whose ToUnicode map emits a typographic hyphen (U+2010/2011) or a
#    zero-width space instead produces a run that looks identical on the page
#    and matches NOTHING — redactor and guard alike, because they share the
#    character class. A complete SSN then passes with the tool reporting "0
#    masked". Verified against a crafted PDF, 2026-08-12.
DASHES = dict.fromkeys(
    [0x2010, 0x2011, 0x2012, 0x2013, 0x2014, 0x2015, 0x2043, 0x2212, 0xFE63, 0xFF0D], "-"
)
INVISIBLE = dict.fromkeys([0x00AD, 0x200B, 0x200C, 0x200D, 0x2060, 0xFEFF], "")


def normalise(text: str) -> str:
    """Fold every look-alike separator to ASCII so one character class suffices."""
    # NFKC also folds fullwidth digits and various compatibility forms.
    return unicodedata.normalize("NFKC", text).translate({**DASHES, **INVISIBLE})

# ── Patterns, most specific first. Order matters: EIN must be claimed before
#    any generic nine-digit rule can eat it. ────────────────────────────────────

# An EIN is NN-NNNNNNN, and on a K-1 it is sometimes typed with no hyphen at
# all — which is a bare nine-digit run, and LONG_DIGITS below would eat it.
# Claiming it here is what stops that. Losing an EIN is not a privacy failure,
# it is an analysis failure: the EIN is how we tell WHICH entity a K-1 or a W-2
# came from, and a return full of unidentifiable entities answers nothing.
EIN = re.compile(
    r"\b\d{2}-\d{7}\b"
    r"|(?<=\bEIN\s)\s{0,10}\d{9}\b"
    r"|(?<=\bFEIN\s)\s{0,10}\d{9}\b"
    r"|(?i:(?<=employer\sidentification\snumber\s))\s{0,10}\d{9}\b"
    r"|(?i:(?<=employer\sid\snumber\s))\s{0,10}\d{9}\b"
)

# SSN / ITIN: NNN-NN-NNNN, and the space- and dot-separated forms that a PDF
# text layer produces from a form's separate boxes.
SSN = re.compile(r"(?<!\d)\d{3}[-\s.]\d{2}[-\s.]\d{4}(?!\d)")

# The same shape with ANY run of separators. A form's boxes can extract with
# several spaces between them, and a column of figures can collide with it, so
# this is too loose to mask on blindly — but see SSN_LABELLED and GUARD below.
SSN_LOOSE = re.compile(r"(?<!\d)\d{3}[-\s.]{1,10}\d{2}[-\s.]{1,10}\d{4}(?!\d)")

# Loose shape, but only where the page says what it is. This is what catches a
# real SSN that extracted with wide spacing, without eating a table of amounts.
SSN_LABELLED = re.compile(
    r"(social\s*security\s*(?:no|num|number)?|\bSSN\b|\bITIN\b|"
    r"taxpayer\s+identif\w*\s*(?:no|num|number)?|\bTIN\b)"
    r"([^\n\d]{0,40})"
    r"((?<!\d)\d{3}[-\s.]{1,10}\d{2}[-\s.]{1,10}\d{4}(?!\d))",
    re.IGNORECASE,
)

# A bare run of 9+ digits. On a return this is an account number, a routing
# number, or an unformatted SSN. Never an EIN — that was claimed above.
LONG_DIGITS = re.compile(r"(?<!\d)\d{9,}(?!\d)")

# Dates of birth: only when the line says so. A date on its own is a tax date
# (period end, filing date, payment date) and masking those blinds the analysis.
DOB_CONTEXT = re.compile(
    r"(date\s+of\s+birth|birth\s*date|\bD\.?O\.?B\.?\b|born\s+on)"
    r"\W{0,20}"
    r"(\d{1,2}[/-]\d{1,2}[/-]\d{2,4}|[A-Z][a-z]{2,9}\s+\d{1,2},?\s+\d{4})",
    re.IGNORECASE,
)

# Driver's licence / state ID, when labelled. The formats vary by state far too
# much to catch unlabelled, which is a documented limit, not a solved problem.
LICENCE_CONTEXT = re.compile(
    r"(driver'?s?[^\S\n]*licen[cs]e|\bDL\b|state[^\S\n]+id(?:entification)?[^\S\n]+(?:no|num|number|#))"
    r"[^\S\n]{0,6}\W{0,4}((?=[A-Z0-9-]*\d)[A-Z0-9-]{5,20})",
    re.IGNORECASE,
)

# Bank account / routing, when labelled — catches the short account numbers the
# nine-digit rule cannot see.
ACCOUNT_CONTEXT = re.compile(
    r"(routing|account\s*(?:no|num|number|#)|acct)"
    r"[^\S\n]{0,4}\W{0,6}([A-Z]{0,4}[0-9][A-Z0-9\s-]{2,30}?)(?=\s{2,}|[^\w\s-]|$)",
    re.IGNORECASE,
)

# Street line only — number + name + suffix, plus any apartment/unit. The CITY,
# STATE and ZIP are deliberately left alone: which state someone lived in is the
# whole question on a multi-state return, and masking it would blind the work.
#
# Lilian's identity block does not name a home address, so this is not covered by
# her ruling either way. It is masked because losing it costs nothing and it is
# the one field on a return that points at where a person actually sleeps.
STREET = re.compile(
    r"(?<![\d,.])\d{1,6}[^\S\n]+"
    r"(?:[NSEW]\.?[^\S\n]+)?"
    r"(?:[A-Z][A-Za-z0-9'.-]*[^\S\n]+){0,4}"
    r"(?:STREET|ST|AVENUE|AVE|ROAD|RD|DRIVE|DR|LANE|LN|BOULEVARD|BLVD|COURT|CT|"
    r"CIRCLE|CIR|PLACE|PL|WAY|TERRACE|TER|PARKWAY|PKWY|HIGHWAY|HWY|TRAIL|TRL)"
    r"\b\.?"
    r"(?:[^\S\n]*,?[^\S\n]*(?:APT|APARTMENT|UNIT|STE|SUITE|#)\.?[^\S\n]*[A-Z0-9-]{1,8})?",
    re.IGNORECASE,
)


def _tagger(prefix: str):
    """Give each DISTINCT value a stable tag: SSN-1, SSN-2, …

    The earlier version emitted the last four digits. That is the standard
    identity-verification pair once a name sits beside it — and names are not
    masked here, by Lilian's ruling. A tag keeps two different numbers
    distinguishable, which is all the analysis ever needed, and leaks nothing.
    """
    seen: dict[str, str] = {}

    def tag(value: str) -> str:
        key = re.sub(r"\D", "", value)
        if key not in seen:
            seen[key] = f"{prefix}-{len(seen) + 1}"
        return seen[key]

    return tag


def redact(text: str) -> tuple[str, dict]:
    """Return (redacted_text, counts). Never returns the original.

    counts["leaks"] carries the guard's verdict — the identifier-shaped runs
    that survived. It is computed while EINs are still parked behind
    placeholders, because a legitimate unhyphenated EIN is nine bare digits and
    would otherwise trip the guard on every K-1 the firm reads. That collision
    made the two features mutually exclusive and aborted the tool on valid
    documents, whose error message then invited the operator to weaken the
    guard. Order is the whole fix.
    """
    text = normalise(text)
    counts: dict = {"ssn_itin": 0, "long_digits": 0, "dob": 0, "licence": 0,
                    "account": 0, "street": 0, "ein_kept": 0, "leaks": []}

    # Park EINs behind a placeholder so no later rule can touch them, then put
    # them back at the very end.
    eins: list[str] = []

    def _park_ein(m: re.Match) -> str:
        eins.append(m.group(0))
        counts["ein_kept"] += 1
        return f"\x00EIN{len(eins) - 1}\x00"

    text = EIN.sub(_park_ein, text)

    def _dob(m: re.Match) -> str:
        counts["dob"] += 1
        return f"{m.group(1)} [DOB-REDACTED]"

    def _licence(m: re.Match) -> str:
        counts["licence"] += 1
        return f"{m.group(1)} [ID-REDACTED]"

    tag_ssn, tag_acct, tag_num = _tagger("SSN"), _tagger("ACCT"), _tagger("NUM")

    def _account(m: re.Match) -> str:
        counts["account"] += 1
        return f"{m.group(1)} [{tag_acct(m.group(2))}]"

    def _street(m: re.Match) -> str:
        counts["street"] += 1
        return "[STREET-REDACTED]"

    def _ssn(m: re.Match) -> str:
        counts["ssn_itin"] += 1
        return f"[{tag_ssn(m.group(0))}]"

    def _ssn_labelled(m: re.Match) -> str:
        counts["ssn_itin"] += 1
        return f"{m.group(1)}{m.group(2)}[{tag_ssn(m.group(3))}]"

    def _long(m: re.Match) -> str:
        counts["long_digits"] += 1
        return f"[{tag_num(m.group(0))}]"

    # Context rules before the bare-digit rule, so a labelled number is masked
    # as what it actually is.
    text = DOB_CONTEXT.sub(_dob, text)
    text = LICENCE_CONTEXT.sub(_licence, text)
    text = ACCOUNT_CONTEXT.sub(_account, text)
    text = STREET.sub(_street, text)
    text = SSN_LABELLED.sub(_ssn_labelled, text)
    text = SSN.sub(_ssn, text)
    text = LONG_DIGITS.sub(_long, text)

    counts["leaks"] = SSN_LOOSE.findall(text) + LONG_DIGITS.findall(text)

    text = re.sub(r"\x00EIN(\d+)\x00", lambda m: eins[int(m.group(1))], text)
    return text, counts


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__.strip())
        return 3

    arg, dst = sys.argv[1], Path(sys.argv[2])
    downloaded: Path | None = None

    if arg.startswith(("http://", "https://")):
        import subprocess
        import tempfile

        downloaded = Path(tempfile.mkstemp(suffix=".pdf", prefix="doc-")[1])
        # -sS: quiet but still report errors. --fail: a 403/404 must not be
        # written to disk as an HTML error page and then "read" as a PDF.
        proc = subprocess.run(
            ["curl", "-sS", "--fail", "-L", "--max-time", "120", "-o", str(downloaded), arg],
            capture_output=True,
            text=True,
        )
        if proc.returncode != 0:
            downloaded.unlink(missing_ok=True)
            # The URL is a credential — never echo it back, not even on failure.
            print(
                f"ERROR: download failed (curl exit {proc.returncode}). "
                "A Double link expires; get a fresh one with get_file.",
                file=sys.stderr,
            )
            return 3
        src = downloaded
    else:
        src = Path(arg)

    try:
        return _run(src, dst)
    finally:
        # The raw document never survives this call, on any path out.
        if downloaded is not None:
            downloaded.unlink(missing_ok=True)


def _run(src: Path, dst: Path) -> int:
    if not src.is_file():
        print(f"ERROR: no such file: {src}", file=sys.stderr)
        return 3

    try:
        from pypdf import PdfReader
    except ImportError:
        print("ERROR: pypdf is not installed (pip install pypdf)", file=sys.stderr)
        return 3

    try:
        reader = PdfReader(str(src))
        pages = [p.extract_text(extraction_mode="layout") or "" for p in reader.pages]
    except Exception as exc:  # noqa: BLE001 — the reason matters more than the type
        print(f"ERROR: could not read as PDF: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 3

    raw = "\n\n".join(f"--- page {i + 1} ---\n{t}" for i, t in enumerate(pages))

    if len(re.sub(r"\W", "", raw)) < 100:
        print(
            f"NO TEXT LAYER: {len(pages)} page(s), effectively no extractable text.\n"
            "This is a scan. It needs OCR, and OCR is NOT set up here — do not\n"
            "work around this by sending the image somewhere. Ask for a text PDF.",
            file=sys.stderr,
        )
        return 2

    redacted, counts = redact(raw)

    # The last line of defence, and it is DELIBERATELY STRICTER than the
    # redactor: it hunts the loose NNN?NN?NNNN shape with any spacing, which the
    # redactor only masks when the page labels it. So a real SSN that extracted
    # with wide spacing stops the job instead of slipping through.
    #
    # A false alarm here is cheap — read the report, tighten the pattern, re-run.
    # A miss is not recoverable, because by then it is in the transcript.
    #
    # The verdict comes from redact(), which computes it while EINs are still
    # parked. Do NOT recompute it here: a legitimate unhyphenated EIN is nine
    # bare digits and would abort every K-1 the firm reads.
    if counts["leaks"]:
        shapes = sorted({re.sub(r"\d", "N", s) for s in counts["leaks"]})
        print(
            f"REFUSING TO WRITE: {len(counts['leaks'])} identifier-shaped run(s) "
            f"survived redaction, in {len(shapes)} shape(s): {', '.join(shapes[:5])}.\n"
            "Nothing was written and nothing was printed. Either the patterns "
            "missed a real identifier, or a column of figures collided with the "
            "shape — inspect the PDF by hand and decide which, then fix "
            "tools/redact-doc/ before reading this document.",
            file=sys.stderr,
        )
        return 4

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(redacted, encoding="utf-8")

    # ⚠️ Pages a PDF's text layer would not give up — rotated text, an
    # uninterpretable font, a scanned insert in an otherwise digital document.
    # This number is the reason an ABSENCE in the output is not evidence of an
    # absence in the return: a form can be sitting on a page that did not
    # extract. Reported here so the reader cannot fail to see it.
    thin = [i + 1 for i, p in enumerate(pages) if len(re.sub(r"\W", "", p)) < 200]

    # The ONLY thing this tool ever prints about the document's contents.
    print(f"redacted → {dst}  ({len(pages)} pages, {len(redacted):,} chars)")
    if thin:
        print(
            f"  ⚠️  {len(thin)} of {len(pages)} pages barely extracted: {thin}\n"
            "      Text was there and did not come through (rotated, or a font\n"
            "      pypdf cannot read). DO NOT report 'X is not on the return'\n"
            "      from this output — say the extraction was incomplete and name\n"
            "      these pages. An absence here is not evidence."
        )
    print(
        "  masked: "
        f"{counts['ssn_itin']} SSN/ITIN · "
        f"{counts['account']} labelled account/routing · "
        f"{counts['long_digits']} bare 9+ digit runs · "
        f"{counts['street']} street lines · "
        f"{counts['dob']} dates of birth · "
        f"{counts['licence']} licence/state ID"
    )
    print(f"  kept:   {counts['ein_kept']} EIN (public — Lilian, 2026-08-11)")
    print("  names are NOT masked, by the same ruling.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
