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
    SSN / ITIN · bank routing and account numbers · dates of birth ·
    driver's licence and other government-issued ID numbers.

What is deliberately NOT masked, because Lilian ruled it is not sensitive:
    NAMES  — "Los nombres no son datos sensibles."
    EINs   — "Los números de EIN no son números sensibles porque son públicos."
An EIN is the one nine-digit number on a tax return that must survive: it is how
we identify which entity a K-1 or a W-2 came from, and losing it costs the whole
point of reading the return.

The masks keep their shape (SSN-****, ACCT-****#4321) so a reader can still tell
two different numbers apart without learning either one.
"""

import re
import sys
from pathlib import Path

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
SSN = re.compile(r"\b\d{3}[-\s.]\d{2}[-\s.]\d{4}\b")

# The same shape with ANY run of separators. A form's boxes can extract with
# several spaces between them, and a column of figures can collide with it, so
# this is too loose to mask on blindly — but see SSN_LABELLED and GUARD below.
SSN_LOOSE = re.compile(r"\b\d{3}[-\s.]{1,10}\d{2}[-\s.]{1,10}\d{4}\b")

# Loose shape, but only where the page says what it is. This is what catches a
# real SSN that extracted with wide spacing, without eating a table of amounts.
SSN_LABELLED = re.compile(
    r"(social\s*security\s*(?:no|num|number)?|\bSSN\b|\bITIN\b|"
    r"taxpayer\s+identif\w*\s*(?:no|num|number)?|\bTIN\b)"
    r"([^\n\d]{0,40})"
    r"(\d{3}[-\s.]{1,10}\d{2}[-\s.]{1,10}\d{4})",
    re.IGNORECASE,
)

# A bare run of 9+ digits. On a return this is an account number, a routing
# number, or an unformatted SSN. Never an EIN — that was claimed above.
LONG_DIGITS = re.compile(r"\b\d{9,}\b")

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
    r"(driver'?s?\s*licen[cs]e|\bDL\b|state\s+id(?:entification)?)"
    r"\W{0,20}([A-Z0-9-]{5,20})",
    re.IGNORECASE,
)

# Bank account / routing, when labelled — catches the short account numbers the
# nine-digit rule cannot see.
ACCOUNT_CONTEXT = re.compile(
    r"(routing|account\s*(?:no|num|number|#)|acct)"
    r"\W{0,20}([0-9][0-9-]{3,20})",
    re.IGNORECASE,
)


def _tail(digits: str, keep: int = 4) -> str:
    """Last `keep` digits, so two different numbers stay distinguishable."""
    only = re.sub(r"\D", "", digits)
    return only[-keep:] if len(only) > keep else "*" * len(only)


def redact(text: str) -> tuple[str, dict]:
    """Return (redacted_text, counts). Never returns the original."""
    counts = {"ssn_itin": 0, "long_digits": 0, "dob": 0, "licence": 0, "account": 0, "ein_kept": 0}

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

    def _account(m: re.Match) -> str:
        counts["account"] += 1
        return f"{m.group(1)} ACCT-****{_tail(m.group(2))}"

    def _ssn(m: re.Match) -> str:
        counts["ssn_itin"] += 1
        return f"SSN-***-**-{_tail(m.group(0))}"

    def _ssn_labelled(m: re.Match) -> str:
        counts["ssn_itin"] += 1
        return f"{m.group(1)}{m.group(2)}SSN-***-**-{_tail(m.group(3))}"

    def _long(m: re.Match) -> str:
        counts["long_digits"] += 1
        return f"NUM-****{_tail(m.group(0))}"

    # Context rules before the bare-digit rule, so a labelled number is masked
    # as what it actually is.
    text = DOB_CONTEXT.sub(_dob, text)
    text = LICENCE_CONTEXT.sub(_licence, text)
    text = ACCOUNT_CONTEXT.sub(_account, text)
    text = SSN_LABELLED.sub(_ssn_labelled, text)
    text = SSN.sub(_ssn, text)
    text = LONG_DIGITS.sub(_long, text)

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

    # The last line of defence, and it is DELIBERATELY STRICTER than the redactor:
    # it hunts the loose NNN?NN?NNNN shape with any spacing, which the redactor
    # only masks when the page labels it. So a real SSN that extracted with wide
    # spacing stops the job instead of slipping through.
    #
    # A false alarm here is cheap — read the report, tighten the pattern, re-run.
    # A miss is not recoverable, because by then it is in the transcript.
    leaked = SSN_LOOSE.findall(redacted) + LONG_DIGITS.findall(redacted)
    if leaked:
        shapes = sorted({re.sub(r"\d", "N", s) for s in leaked})
        print(
            f"REFUSING TO WRITE: {len(leaked)} identifier-shaped run(s) survived "
            f"redaction, in {len(shapes)} shape(s): {', '.join(shapes[:5])}.\n"
            "Nothing was written and nothing was printed. Either the patterns "
            "missed a real identifier, or a column of figures collided with the "
            "shape — inspect the PDF by hand and decide which, then fix "
            "tools/redact-doc/ before reading this document.",
            file=sys.stderr,
        )
        return 4

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(redacted, encoding="utf-8")

    # The ONLY thing this tool ever prints about the document's contents.
    print(f"redacted → {dst}  ({len(pages)} pages, {len(redacted):,} chars)")
    print(
        "  masked: "
        f"{counts['ssn_itin']} SSN/ITIN · "
        f"{counts['account']} labelled account/routing · "
        f"{counts['long_digits']} bare 9+ digit runs · "
        f"{counts['dob']} dates of birth · "
        f"{counts['licence']} licence/state ID"
    )
    print(f"  kept:   {counts['ein_kept']} EIN (public — Lilian, 2026-08-11)")
    print("  names are NOT masked, by the same ruling.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
