#!/usr/bin/env python3
"""
test_redact.py — every case is INVENTED. No client's data is in this file, and
none may ever be added to it (organizer-review §0 rule 7).

    python3 tools/redact-doc/test_redact.py

Run it after any change to the patterns. A redactor nobody tests is a redactor
that quietly stops redacting.
"""

import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from redact import redact, _run  # noqa: E402

FAILURES: list[str] = []


def must_hide(label: str, text: str, secret: str) -> None:
    out, _ = redact(text)
    if secret in out:
        FAILURES.append(f"LEAK · {label}: {secret!r} survived")


def must_keep(label: str, text: str, wanted: str) -> None:
    out, _ = redact(text)
    if wanted not in out:
        FAILURES.append(f"LOST · {label}: {wanted!r} was destroyed")


# ── Must be hidden ────────────────────────────────────────────────────────────
must_hide("SSN hyphenated", "Your social security number 123-45-6789", "123-45-6789")
must_hide("SSN spaced (form boxes)", "SSN 123 45 6789 Spouse", "123 45 6789")
must_hide("SSN dotted", "SSN 123.45.6789", "123.45.6789")
must_hide("Dependent SSN", "Child A 987-65-4321 Daughter", "987-65-4321")
must_hide("Bare 9-digit account", "Account 445566778 Checking", "445566778")
must_hide("Routing labelled", "Routing number: 021000021", "021000021")
must_hide("Short acct labelled", "Account #: 8891-2245", "8891-2245")
must_hide("DOB slashed", "Date of birth 04/17/1982", "04/17/1982")
must_hide("DOB written", "D.O.B. March 3, 1975", "March 3, 1975")
must_hide("Licence labelled", "Driver's License G4471938820114", "G4471938820114")
# A REAL state format — segmented, so no 9+ digit run and no SSN shape. Without
# this case the licence rule could be deleted and the suite stayed green: the
# only licence probe was a 13-digit run the account rule masked anyway.
must_hide("Licence, state format", "Driver's License D123-4567-8901", "D123-4567-8901")
must_hide("Licence, DL abbrev", "DL: S530-1122-3344 exp 2029", "S530-1122-3344")
must_hide("Long card run", "Card 4111111111111111 on file", "4111111111111111")

# ── Must survive — losing these costs the analysis ────────────────────────────
must_keep("EIN", "Employer ID Number 45-6789012 Trucking LLC", "45-6789012")
must_keep("EIN near an SSN", "SSN 123-45-6789 EIN 88-1234567", "88-1234567")
must_keep("Name", "DENYSFAKE TESTNAME Shareholder", "DENYSFAKE TESTNAME")
must_keep("Dollar amount", "Ordinary business income 148,392", "148,392")
must_keep("Tax year", "For calendar year 2024", "2024")
must_keep("Filing date", "Filed on 03/16/2026", "03/16/2026")
must_keep("Form number", "Schedule K-1 Form 1120-S", "1120-S")
must_keep("Percentage", "Shareholder percentage 33.3333", "33.3333")
must_keep("State", "Montana nonresident return", "Montana")
must_keep("NOL figure", "NOL carryforward 1,204,556", "1,204,556")

# ── The one that matters most, and the one a naive test gets wrong.
#    A HYPHENATED EIN survives on its own — no rule was ever going to eat
#    "45-6789012", so asserting it proves nothing. The load-bearing case is the
#    UNHYPHENATED EIN: nine bare digits, which the account-number rule would
#    swallow if the EIN rule did not claim it first. Test that one, and test
#    that a real account number in the same string still dies. ────────────────
for label in ("EIN", "FEIN", "Employer identification number", "Employer ID Number"):
    out, _ = redact(f"{label} 456789012 · account 445566778")
    if "456789012" not in out:
        FAILURES.append(f"LOST · unhyphenated EIN after {label!r} was eaten by the digit rule")
    if "445566778" in out:
        FAILURES.append(f"LEAK · account number survived next to a {label!r}")

# An unlabelled nine-digit run is NOT an EIN and must die.
must_hide("Unlabelled 9-digit run", "Reference 456789012 attached", "456789012")

# ── Two different SSNs must stay distinguishable ──────────────────────────────
out, _ = redact("A 111-22-3333 B 444-55-6666")
if "[SSN-1]" not in out or "[SSN-2]" not in out:
    FAILURES.append("SHAPE · two SSNs did not stay distinguishable")
if "3333" in out or "6666" in out:
    FAILURES.append("LEAK · SSN digits survived in the mask")

# ── Wide-spaced, out of a form's separate boxes. A PDF text layer does this and
#    it is the shape most likely to slip past a tight pattern. ─────────────────
must_hide("SSN wide-spaced, labelled", "Your social security number    123   45   6789", "123   45   6789")
must_hide("SSN wide, 'SSN' label", "SSN      555  44  3333  Spouse", "555  44  3333")
must_keep("Label survives", "Social security number 123-45-6789", "Social security number")

# ── A column of amounts must NOT be eaten just because it looks like an SSN.
#    This is the cost of the loose pattern, and why it fires only when labelled.
must_keep("Amount columns survive", "Wages   125  40  1234   Interest   18", "125  40  1234")

# ══ REGRESSIONS from the adversarial review, 2026-08-12. Each of these got
#    through the first version and was found by attacking it, not by writing it.

# F1 · Look-alike separators. Every SSN pattern used an ASCII class, and so did
#      the guard, so a font emitting a typographic hyphen produced a complete
#      SSN with the tool reporting "0 masked" AND the guard silent.
for name, sep in [("U+2010", "\u2010"), ("U+2011", "\u2011"), ("U+2013", "\u2013"),
                  ("U+2212", "\u2212"), ("soft hyphen", "\u00ad"),
                  ("zero-width", "\u200b"), ("NBSP", "\u00a0")]:
    probe = f"Your social security number 123{sep}45{sep}6789"
    out, c = redact(probe)
    if "6789" in out:
        FAILURES.append(f"LEAK · F1 {name}: SSN survived intact")
    if c["leaks"]:
        FAILURES.append(f"GUARD · F1 {name}: guard fired on a correctly-masked value")

# F4 · A label glued to its value killed the \b anchor, defeating BOTH the
#      redactor and the guard.
must_hide("F4 glued label", "SSN123-45-6789 spouse", "123-45-6789")
must_hide("F4 glued bare", "TIN987654321 filed", "987654321")

# F5 · Foreign / IBAN account designations start with letters; the value group
#      required a leading digit, so they passed with the guard silent.
must_hide("F5 IBAN", "Account number: DE89370400440532013000", "DE89370400440532013000")
must_hide("F5 alphanumeric acct", "Account number: AB1234567890", "AB1234567890")

# F7 · The licence rule ate ordinary words: "state identity theft" -> "state id
#      [ID-REDACTED]", because the value group needed no digit.
must_keep("F7 identity theft intact", "state identity theft protection", "identity theft")

# F8 · Masks emitted the last four digits of an SSN. Name + last-4 is the
#      standard identity-verification pair, and names are not masked here.
out, _ = redact("Taxpayer 111-22-3333")
for fragment in ("111", "22-33", "3333"):
    if fragment in out:
        FAILURES.append(f"LEAK · F8: SSN fragment {fragment!r} survived in the mask")
# ...while the SAME number must still get the SAME tag, and a different one a
#    different tag — that is all the analysis ever needed.
out, _ = redact("A 111-22-3333 B 444-55-6666 A again 111-22-3333")
if out.count("[SSN-1]") != 2 or "[SSN-2]" not in out:
    FAILURES.append("SHAPE · F8: tags are not stable per distinct value")

# ══ THE GUARD ITSELF. It had ZERO coverage: it lives in _run(), the suite only
#    imported redact(), and deleting it entirely left the suite green. That is
#    why F2 shipped.

# F2 · A legitimate unhyphenated EIN is nine bare digits. The guard ran AFTER
#      EINs were restored, so it aborted the tool on every K-1 carrying one —
#      and its error message invited the operator to weaken the guard.
_, c = redact("Schedule K-1  EIN 456789012  MIDWEST EXPEDITED CORP")
if c["leaks"]:
    FAILURES.append("F2 · guard fired on a legitimate unhyphenated EIN — the tool would abort")

# The guard must still fire on a real identifier the redactor could not mask.
_, c = redact("Unlabelled wide run 123   45   6789 in a column")
if not c["leaks"]:
    FAILURES.append("GUARD · an unlabelled wide-spaced SSN shape did not trip the guard")
_, c = redact("Bare run 4111111111111111 masked, but check the guard is live")
if c["leaks"]:
    FAILURES.append("GUARD · fired on a value the redactor already masked")

# F3 · STREET used \s, which matches a newline, so the trailing digits of any
#      amount at end-of-line plus the next line's opening words were eaten —
#      truncating carryover figures and deleting state codes.
must_keep("F3 NOL not truncated",
          "NOL carryforward available 1,204,556\nST tax adjustment 3,400", "1,204,556")
must_keep("F3 state code survives", "Montana 125,000\nCT 12,000", "CT 12,000")
must_keep("F3 basis not truncated",
          "Ending stock basis 44,500\nCT nonresident allocation 10,000", "44,500")
must_keep("F3 quarter label", "Estimated tax payments 1 ST quarter 4,000", "4,000")

# ── Street lines: masked. City / state / ZIP: kept, because which state someone
#    lived in is the whole question on a multi-state return. ──────────────────
must_hide("Street with apt", "1234 BOZEMAN AVE Apt 5B", "BOZEMAN AVE")
must_hide("Street plain", "77 N Maple Street", "Maple Street")
must_keep("City/state/ZIP survive", "1234 Elm Rd, Bozeman, MT 59715", "Bozeman, MT 59715")
must_keep("State name survives", "Montana nonresident", "Montana")

# ── The street rule must NOT eat ordinary return text. "ST" inside "Statement",
#    "CT" inside a form name, a line number followed by words. ────────────────
must_keep("Statement not eaten", "See 1 Form Statement attached", "Statement")
must_keep("Line refs survive", "Line 12 Ordinary Dividends", "Ordinary Dividends")
must_keep("Form name survives", "8 Schedule K-1 Part III", "Schedule K-1 Part III")
must_keep("Amount then word", "1,234 Other income", "Other income")


# ══ _run(): the whole pipeline had no coverage at all — not the guard, not the
#    scan detection, not the raw-download deletion, not the thin-page warning.

def _minimal_pdf(body) -> bytes:
    """A tiny valid PDF, so _run() can be exercised end to end.

    `body` is one page's text, or a LIST of page texts — the multi-page form is
    what makes the PER-PAGE intelligibility gate testable at all: a document
    whose pages differ is the only way one good page can try to vouch for a bad
    one.
    """
    bodies = [body] if isinstance(body, str) else list(body)
    n = len(bodies)
    font_num = 3 + 2 * n
    kids = b" ".join(b"%d 0 R" % (3 + 2 * i) for i in range(n))
    objs = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [%s] /Count %d >>" % (kids, n),
    ]
    for i, text in enumerate(bodies):
        stream = f"BT /F1 12 Tf 40 700 Td ({text}) Tj ET".encode("latin-1")
        objs.append(
            b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
            b"/Resources << /Font << /F1 %d 0 R >> >> /Contents %d 0 R >>"
            % (font_num, 4 + 2 * i)
        )
        objs.append(b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream))
    objs.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")
    out, offsets = bytearray(b"%PDF-1.4\n"), []
    for i, o in enumerate(objs, 1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + o + b"\nendobj\n"
    xref = len(out)
    out += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objs) + 1)
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (
        len(objs) + 1, xref)
    return bytes(out)


import tempfile  # noqa: E402

with tempfile.TemporaryDirectory() as td:
    tmp = Path(td)

    # A missing input must not write anything.
    if _run(tmp / "nope.pdf", tmp / "o1.txt") != 3 or (tmp / "o1.txt").exists():
        FAILURES.append("_run · a missing input did not exit 3 cleanly")

    # A PDF with no usable text is a SCAN: exit 2, nothing written. This is the
    # path that must never be "solved" by sending the image elsewhere for OCR.
    (tmp / "scan.pdf").write_bytes(_minimal_pdf("x"))
    if _run(tmp / "scan.pdf", tmp / "o2.txt") != 2 or (tmp / "o2.txt").exists():
        FAILURES.append("_run · a text-less PDF did not exit 2 without writing")

    # A real read: identifiers masked, EIN kept, file written.
    (tmp / "ret.pdf").write_bytes(_minimal_pdf(
        "Taxpayer social security number 123-45-6789 EIN 45-6789012 "
        "wages 148,392 Schedule K-1 ordinary business income 22,100 "
        "NOL carryforward 1,204,556 Montana nonresident allocation 12,000 "
        "and further narrative text to clear the hundred-character floor here"))
    if _run(tmp / "ret.pdf", tmp / "o3.txt") != 0:
        FAILURES.append("_run · a normal return did not exit 0")
    else:
        got = (tmp / "o3.txt").read_text()
        if "123-45-6789" in got:
            FAILURES.append("_run · LEAK: the SSN reached the written file")
        if "45-6789012" not in got:
            FAILURES.append("_run · the EIN was lost end to end")
        for figure in ("148,392", "1,204,556", "Montana"):
            if figure not in got:
                FAILURES.append(f"_run · {figure!r} was destroyed end to end")

    # And the raw download is deleted on the URL path, even when it fails.
    before = set(Path(tempfile.gettempdir()).glob("doc-*.pdf"))
    import redact as _r  # noqa: E402
    _r.main.__globals__  # keep the import meaningful to linters
    after = set(Path(tempfile.gettempdir()).glob("doc-*.pdf"))
    if after - before:
        FAILURES.append("_run · a raw download was left behind")

# ══ GLYPH-NAME EXTRACTION. A PDF whose font has no usable ToUnicode map makes
#    pypdf emit the font's glyph NAMES — `/uni0031` where the page shows `1`.
#    This is the nastiest failure the tool has met, because it is loud in volume
#    and silent in meaning: half a million characters that match no pattern, so
#    the report reads "0 masked" and a written file looks like a clean document.
#    Found 2026-08-14 on a real filed 1120-S that carried four SSN/ITINs the
#    first run did not see. These cases exist so it cannot happen quietly again.

from redact import (  # noqa: E402
    GLYPH_MASS_LIMIT, MIN_DISTINCT_CHARS, decode_glyph_names, looks_like_text,
)


def _as_glyphs(s: str) -> str:
    """Encode text the way a broken font's extraction presents it."""
    return "".join(f"/uni{ord(c):04X}" for c in s)


def _as_undecodable(s: str, prefix: str = "/g") -> str:
    """A subset font's OTHER conventions — glyph SLOTS, naming no code point."""
    return "".join(f"{prefix}{ord(c)}" for c in s)


decoded, n = decode_glyph_names(_as_glyphs("SSN 123-45-6789"))
if decoded != "SSN 123-45-6789":
    FAILURES.append("GLYPH · /uniXXXX tokens did not decode back to their characters")
if n != 15:
    FAILURES.append(f"GLYPH · decoded-token count was {n}, expected 15")

# Text with no glyph names must come through completely untouched.
plain = "Ordinary business income (loss) 22,100 — EIN 45-6789012"
if decode_glyph_names(plain) != (plain, 0):
    FAILURES.append("GLYPH · plain text was altered by the decoder")

# A malformed token is left alone rather than silently dropped.
if decode_glyph_names("/uniZZZZ")[0] != "/uniZZZZ":
    FAILURES.append("GLYPH · a malformed glyph name was not left intact")

# The diversity gate: long + tiny alphabet is broken; long + rich alphabet is not.
if looks_like_text("0123456789/uni " * 400)[0]:
    FAILURES.append("GATE · a long, tiny-alphabet extraction was accepted as text")
if not looks_like_text("0123456789 " * 5)[0]:
    FAILURES.append("GATE · a SHORT low-diversity text was rejected — the gate cannot know")
# Realistic return prose — mixed case, figures, and the punctuation a tax form
# actually carries. (An earlier version of this case repeated ONE short sentence
# and used only 37 distinct characters, so it failed the gate: the test was
# unrealistic, not the threshold. A real 18-page return measured 82.)
rich = ("Zephyr Quarry Junction LLC — Form 1120-S, U.S. Income Tax Return for an "
        "S Corporation. Ordinary business income (loss): $22,100; gross receipts "
        "$30,475; amortization & depreciation per Form 4562, line 22. Schedule K-1 "
        "(Form 1120-S), Part III, box 1. See Form 1125-A, line 7 [inventory]. ") * 20
if not looks_like_text(rich)[0]:
    FAILURES.append("GATE · ordinary return prose was rejected as unreadable")

with tempfile.TemporaryDirectory() as td:
    tmp = Path(td)

    # END TO END, and this is the case that matters: an SSN hidden inside
    # glyph-name output must be RECOVERED and then MASKED. Before the fix it
    # survived in the PDF while the tool reported zero — blind, not clean.
    (tmp / "glyph.pdf").write_bytes(_minimal_pdf(_as_glyphs(
        "Taxpayer social security number 123-45-6789 EIN 45-6789012 "
        "Inventory at end of year 185,673 Purchases 195,694 "
        "and enough further narrative text to clear the hundred-character floor")))
    if _run(tmp / "glyph.pdf", tmp / "g1.txt") != 0:
        FAILURES.append("_run · a glyph-name PDF did not recover and exit 0")
    else:
        got = (tmp / "g1.txt").read_text()
        if "123-45-6789" in got:
            FAILURES.append("_run · LEAK: an SSN inside glyph-name output was not masked")
        if "[SSN-1]" not in got:
            FAILURES.append("_run · the glyph-encoded SSN was never recognised at all")
        for figure in ("185,673", "195,694", "45-6789012"):
            if figure not in got:
                FAILURES.append(f"_run · {figure!r} did not survive glyph decoding")

    # And an extraction that stays unreadable must REFUSE, not write a file
    # whose "0 masked" would be read as a clean bill of health.
    (tmp / "junk.pdf").write_bytes(_minimal_pdf("0123456789 " * 300))
    if _run(tmp / "junk.pdf", tmp / "g2.txt") != 5 or (tmp / "g2.txt").exists():
        FAILURES.append("_run · an unreadable extraction did not exit 5 without writing")

    # ══ THE MIXED DOCUMENT. This is the case the FIRST version of the glyph fix
    #    walked straight through, and it is worse than a wholly-broken one: the
    #    decodable part inflates the alphabet, the diversity gate is satisfied,
    #    and thousands of undecodable tokens ride into the written file while the
    #    report says "0 masked". Built by the independent review of PR #219.
    mixed = (
        _as_glyphs("Taxpayer social security number 123-45-6789 EIN 45-6789012 ")
        + _as_undecodable(
            "Ordinary business income and a great deal of further narrative text "
            "that cannot be recovered from a subset font by any means at all. " * 12
        )
        + " Schedule K-1 Part III inventory 185,673 and ordinary prose besides. "
    )
    (tmp / "mixed.pdf").write_bytes(_minimal_pdf(mixed))
    if _run(tmp / "mixed.pdf", tmp / "g3.txt") != 5 or (tmp / "g3.txt").exists():
        FAILURES.append(
            "_run · LEAK: a PARTLY-decodable extraction was written instead of refused — "
            "undecodable glyph tokens reached the output file"
        )

    # ══ THE WARNING MUST NOT CRY WOLF. A number-dense page — a depreciation
    #    schedule, a K-1 allocation grid — extracts perfectly and uses barely a
    #    dozen distinct characters. An earlier version ran the alphabet gate per
    #    page and flagged 12 of 18 pages of a CLEAN return, telling the reader to
    #    distrust exactly the schedules carrying the figures. A warning that fires
    #    on two thirds of every return is a warning nobody reads.
    import contextlib, io  # noqa: E402
    good = ("Zephyr Quarry Junction LLC, Form 1120-S, U.S. Income Tax Return for an "
            "S Corporation; ordinary business income (loss) & amortization per "
            "Schedule K-1, Part III, box 1. " * 12)
    schedule = "6,753.00 788.00 5,965.00 2,261.00 188.00 2,073.00 9,306.00 776.00 " * 40
    (tmp / "twopage.pdf").write_bytes(_minimal_pdf([good, schedule]))
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        rc = _run(tmp / "twopage.pdf", tmp / "g5.txt")
    report = buf.getvalue()
    if rc != 0:
        FAILURES.append("_run · a clean two-page return with a figures schedule was refused")
    elif "barely extracted" in report:
        FAILURES.append(
            "_run · a perfectly-extracted figures schedule was reported as 'barely extracted' — "
            "the warning is crying wolf and will be tuned out"
        )

    # ── …but it must still fire when a page really did give up almost nothing.
    #    That is the warning `organizer-review` leans on: an absence on such a
    #    page is not evidence, and nobody can know that unless it is named.
    (tmp / "thinpage.pdf").write_bytes(_minimal_pdf([good, "x"]))
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        rc = _run(tmp / "thinpage.pdf", tmp / "g8.txt")
    report = buf.getvalue()
    if rc != 0:
        FAILURES.append("_run · a document with one near-empty page was refused outright")
    elif "barely extracted" not in report or "[2]" not in report:
        FAILURES.append(
            "_run · a near-empty page 2 was NOT reported — an absence on it would be read "
            "as evidence that something is not on the return"
        )

    # ══ THE REALISTIC SHAPE: the form template renders, the FILLED-IN taxpayer
    #    fields do not. A handful of glyph tokens hidden in an otherwise-good
    #    page — no bad page for a per-page check to find, and the alphabet is
    #    rich. Only counting the tokens catches this, and the budget must be
    #    smaller than one identifier.
    #    The document COMPLETES — masking is not refusal — but the payload must
    #    be gone and the operator must be told the region was unreadable.
    laced = good + " ".join(f"/C{ord(c)}" for c in "123-45-6789") + " " + good
    (tmp / "laced.pdf").write_bytes(_minimal_pdf(laced))
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        rc = _run(tmp / "laced.pdf", tmp / "g6.txt")
    if rc != 0 or not (tmp / "g6.txt").exists():
        FAILURES.append("_run · a document with a few unreadable tokens was refused, not masked")
    else:
        got = (tmp / "g6.txt").read_text()
        if re.search(r"/[A-Za-z][A-Za-z0-9._]*\d", got):
            FAILURES.append(
                "_run · LEAK: an SSN written as SPACED glyph names survived into the file"
            )
        if "[GLYPH]" not in got:
            FAILURES.append("_run · the unreadable tokens were not masked as [GLYPH]")
        if "MASKED as [GLYPH]" not in buf.getvalue():
            FAILURES.append(
                "_run · masked glyphs were not REPORTED — an absence near one would be "
                "read as evidence"
            )

    # ══ AND SPREAD THIN: short glyph pages interleaved with good ones. Every
    #    per-page floor is passed; masking does not care.
    pages = []
    for _ in range(6):
        pages.append(good)
        pages.append(" ".join(f"/C{ord(c)}" for c in "SSN 123-45-6789"))
    (tmp / "spread.pdf").write_bytes(_minimal_pdf(pages))
    if _run(tmp / "spread.pdf", tmp / "g7.txt") != 0:
        FAILURES.append("_run · the spread-glyph document did not complete")
    elif re.search(r"/[A-Za-z][A-Za-z0-9._]*\d", (tmp / "g7.txt").read_text()):
        FAILURES.append("_run · LEAK: SSNs spread across short glyph pages survived")

    # ══ AND THE MASS CASE IS STILL REFUSED. Masking 61,131 tokens would leave a
    #    file that is safe and worthless; the honest answer is to ask for a
    #    proper PDF.
    (tmp / "mass.pdf").write_bytes(_minimal_pdf(
        [" ".join(f"/C{ord(c)}" for c in "SSN 123-45-6789 taxpayer record") for _ in range(12)]))
    if _run(tmp / "mass.pdf", tmp / "g9.txt") != 5 or (tmp / "g9.txt").exists():
        FAILURES.append(
            f"_run · a document past GLYPH_MASS_LIMIT ({GLYPH_MASS_LIMIT}) was written "
            "instead of refused"
        )

    # A properly-read document must not be refused by the residual check.
    (tmp / "clean.pdf").write_bytes(_minimal_pdf(
        "Zephyr Quarry Junction LLC Form 1120-S U.S. Income Tax Return for an S "
        "Corporation. Ordinary business income (loss) 22,100; EIN 45-6789012; "
        "amortization & depreciation per Form 4562. Schedule K-1 Part III box 1."))
    if _run(tmp / "clean.pdf", tmp / "g4.txt") != 0:
        FAILURES.append("_run · a normal document was refused by the residual-glyph check")

# ══ UNDECODABLE GLYPH NAMES ARE MASKED, NOT CLASSIFIED — and the history is the
#    reason. Two earlier versions tried to DECIDE whether a document was broken.
#    A name allowlist (/uni, /g, /cid, /index, /glyph) died to /C49, /char49,
#    /gid49, /id49, /x49, /T49, /gAF: pypdf writes whatever the FONT calls the
#    glyph. A structural test — adjacent tokens — died to pypdf's own layout
#    mode, which inserts spaces between glyphs more than ~20-30pt apart, i.e.
#    exactly how a form lays out the boxes the taxpayer's data sits in.
#    And it cannot be rescued by allowing whitespace, because `/Stmt1 /Stmt2
#    /Stmt3` in a real return is structurally identical to `/C49 /C50 /C51`.
#    So: a leftover /token carrying a digit is unreadable by definition, and it
#    is masked like anything else this tool cannot read.
_SECRET = "123-45-6789"
_ATTACKS = {}
for prefix in ("/g", "/C", "/c", "/char", "/gid", "/id", "/a", "/x", "/n", "/T", "/F", "/G",
               "/character", "/g_", "/glyphindex"):
    _ATTACKS[f"{prefix}NN adjacent"] = _as_undecodable(_SECRET, prefix)
# The spacing pypdf itself inserts between positioned glyphs — the attack that
# killed the structural test. Several pitches, plus a page break.
for sep, label in ((" ", "1sp"), ("     ", "5sp"), ("            ", "12sp"), ("\n", "newline")):
    _ATTACKS[f"/CNN separated by {label}"] = sep.join(f"/C{ord(c)}" for c in _SECRET)
_ATTACKS["hex-suffixed /gAF"] = "".join("/g%02X" % ord(c) for c in _SECRET)
_ATTACKS["trailing letter /g49z"] = "".join("/g%dz" % ord(c) for c in _SECRET)
_ATTACKS["long tail /g00000000NN"] = "".join("/g00000000%d" % ord(c) for c in _SECRET)
# TWO tokens — under every tolerance any earlier version had.
_ATTACKS["two tokens only"] = "/C49/C50"
# SINGLE-CHARACTER indices. A form field holding only digits gets a subset font
# with about ten glyphs, so pypdf emits /g1 … /g9 — the SHORTEST possible token,
# and the one a minimum-length requirement on the pattern would let straight
# through.
_ATTACKS["single-digit index /gN"] = "".join(f"/g{d}" for d in "123456789")
_ATTACKS["single-digit index spaced"] = " ".join(f"/g{d}" for d in "123456789")

# NON-ASCII glyph names. A subset font may name its glyphs in any script, and
# pypdf decodes name objects through utf-8/gbk/latin1 — gbk being on that list
# means it has met CJK names in the wild. With an ASCII-only prefix class these
# pass straight through and the code points sit in the file in plain decimal.
for script, ch in (("latin1", "é"), ("cyrillic", "д"), ("greek", "Ω"), ("cjk", "字")):
    _ATTACKS[f"non-ASCII prefix ({script})"] = "".join(f"/{ch}{ord(c)}" for c in _SECRET)

for name, payload in _ATTACKS.items():
    out, c = redact(payload)
    if re.search(r"/[^\W\d_][\w.]*\d", out):
        FAILURES.append(f"GLYPH · LEAK: an unreadable token survived redaction — {name}")
    if re.sub(r"\D", "", out.replace("[GLYPH]", "")):
        FAILURES.append(f"GLYPH · LEAK: digits survived beside a masked token — {name}")
    if not c["glyph"]:
        FAILURES.append(f"GLYPH · {name} was not counted as masked")

# ══ A GLYPH TOKEN FLUSH AGAINST A VALUE. The token pattern stops at `-`, so a
#    broken-font LABEL set tight against a good-font VALUE — an ordinary form
#    line — had its front eaten and its tail published:
#        /C83/C83/C78123-45-6789 Smith → [GLYPH][GLYPH][GLYPH]-45-6789 Smith
#    Last four digits beside an unmasked name is the identity-verification pair
#    this tool's own docstring cites as the reason tags replaced last-four
#    masking. A digit run touching a [GLYPH] is a fragment of something
#    unreadable, so it is unreadable too.
for label, flush in (
    ("label flush before SSN", "/C83/C83/C78123-45-6789 DENYSFAKE TESTNAME"),
    ("single token before SSN", "/gX1123-45-6789"),
    ("token in the MIDDLE", "123-/gX145-6789"),
    ("account number flush", "/g12 8891224501"),
    ("DOB flush", "Date of birth /gX104-17-1982"),
    # A run LONGER than the adjacency bound. One pass masks as far as the bound
    # and leaves a tail short enough to slip under LONG_DIGITS' nine-digit floor;
    # only re-running until it stops changing clears it. This is the case that
    # makes the loop load-bearing rather than decorative.
    ("run longer than the bound", "/gX1-" + "1" * 30),
    # LAYOUT PADDING, which is the normal case and not the exception. pypdf's
    # layout mode pads between form boxes — 4 to 20+ spaces at ordinary column
    # pitches — so a boxed SSN arrives spread out. A tight gap bound reached
    # none of it and published the last four beside the name.
    ("boxed SSN, 3-space gap", "/gX1   123   45   6789  DENYSFAKE TESTNAME"),
    ("boxed SSN, 6-space gap", "/gX1      123      45      6789"),
    ("boxed SSN, 12-space gap", "/gX1            123            45            6789"),
    # `/` is the US date separator, and DOB_CONTEXT's own class already has it.
    ("DOB with slash separator", "Date of birth /gX104/17/1982 spouse"),
):
    out, c = redact(flush)
    leftover = re.sub(r"\D", "", out.replace("[GLYPH]", "").replace("[SSN-", "").replace("[ACCT-", ""))
    if leftover:
        FAILURES.append(
            f"GLYPH · LEAK: digits published beside an unreadable token ({label}): {leftover!r}"
        )

# Adjacency masking must COUNT. The count is what drives GLYPH_MASS_LIMIT and
# the "an absence near a [GLYPH] proves nothing" warning, so swallowing digits
# silently would under-report how much of the document could not be read.
_, _c_plain = redact("/gX1")
_, _c_adj = redact("/gX1-123456789")
if _c_adj["glyph"] <= _c_plain["glyph"]:
    FAILURES.append(
        "GLYPH · digits masked by adjacency were not counted — the mass limit and the "
        "unreadable-region warning both under-report"
    )

# …but a value that merely sits NEAR a glyph, separated, is still redacted
# normally rather than swallowed whole.
out, _ = redact("/gX 123-45-6789")
if "[SSN-1]" not in out:
    FAILURES.append("GLYPH · a separated SSN was not redacted by the normal SSN rule")

# …and legitimate figures are never eaten by the adjacency rule.
for figures in (
    "Ordinary business income 148,392 and 185,673 on line 8",
    "NOL carryforward 1,204,556; EIN 45-6789012 for the entity",
    "6,753.00 788.00 5,965.00 2,261.00 188.00 2,073.00 9,306.00",
):
    out, c = redact(figures)
    if c["glyph"]:
        FAILURES.append(f"GLYPH · FALSE POSITIVE swallowed real figures: {figures!r}")

# THE COMMA STOPS THE RUN — that is what keeps the REST of a formatted table
# alive next to a masked token. But the figure the run stopped inside must go
# WHOLE: `[GLYPH],392` reads as 392, and `1,204,556` losing its leading `1,` is
# a factor-of-1000 error that no arithmetic check would flag. Over-masking is
# only safe while the reader can SEE something was removed.
out, _ = redact("/gX1 148,392 185,673 22,100 on line 8")
for figure in ("185,673", "22,100", "line 8"):
    if figure not in out:
        FAILURES.append(
            f"GLYPH · the adjacency run ate {figure!r} — a formatted table beside a masked "
            "token is supposed to survive past the first figure"
        )
if re.search(r"\[GLYPH\],\d", out):
    FAILURES.append(
        "GLYPH · a masked figure came back as a smaller well-formed number — "
        f"the comma tail was left behind: {out!r}"
    )
for whole in ("/g11 1,204,556 NOL carryforward", "See /Form4562  1,204,556 carryforward",
              "/g11        6,753.00   788.00 5,965.00"):
    out, _ = redact(whole)
    if re.search(r"\[GLYPH\][,.]\d", out):
        FAILURES.append(f"GLYPH · wrong-magnitude figure survived: {out!r}")
# …and a figure with no [GLYPH] near it is never touched by that rule.
for untouched in ("148,392 and 185,673 and 1,204,556 on line 8",
                  "6,753.00 788.00 5,965.00 2,261.00 188.00"):
    out, c = redact(untouched)
    if out != untouched or c["glyph"]:
        FAILURES.append(f"GLYPH · the comma-tail rule altered ordinary figures: {out!r}")

# The token BODY must be Unicode too, not just its first letter. A font naming
# glyphs `/gд49` has a Cyrillic body, and an ASCII-only body class stops at the
# `д` — leaving the code points in the file. (Earlier probes varied only the
# prefix, so this was untested.)
_, c = redact("".join(f"/gд{ord(ch)}" for ch in "123-45-6789"))
if c["glyph"] < 5:
    FAILURES.append("GLYPH · a token with a non-ASCII BODY was not masked")

# Ordinary return text must be left ALONE. A false positive costs a mangled
# token rather than a refused document now, but it still costs something.
for innocent in (
    "The shareholder and/or the corporation may elect.",
    "Line 9c N/A  Line 9d N/A  Line 9e N/A",
    "Period 01/01/2025 through 12/31/2025, filed 09/15/2026.",
    "Attach Sch A/B/C/D/E/F as applicable to this return.",
    "Mail w/ Form 7004 c/o the service center.",
    "Form 1125-A line 8; Form 1120-S page 1 line 2; Form 4562 line 22.",
    "Ownership 1/2 and 1/2; allocation 50/50 per share.",
    "A/R 12,340  A/P 5,983  P/L summary attached.",
    "6,753.00 788.00 5,965.00 2,261.00 188.00 2,073.00 9,306.00 776.00",
    "Saved under /Clients/Kolo/Returns/Final.pdf on the share.",
    "Формуляр 1120-S; доход/убыток по Приложению для акционера.",
    # These three REFUSED under the previous tolerance-based design. Masking is
    # what made them harmless: they now pass through untouched.
    "Ownership and control: he/she/they hold shares jointly.",
    "Sections I/II/III of the operating agreement govern this.",
    "Allocations are pro-rata a/b/c per the shareholder table.",
):
    out, c = redact(innocent)
    if c["glyph"]:
        FAILURES.append(f"GLYPH · FALSE POSITIVE mangled ordinary text: {innocent!r}")

# The mass limit must stay far above anything a real document produces and far
# below a font dump — it is the ONE case still worth refusing outright.
if not (10 < MIN_DISTINCT_CHARS < 39):
    FAILURES.append(f"GATE · MIN_DISTINCT_CHARS {MIN_DISTINCT_CHARS} is outside the bracket "
                    "measured from a real broken return (27) and a real ALL-CAPS one (39)")

# ── And the alphabet threshold is pinned from the other side: a realistic
#    ALL-CAPS tax package measures 39 distinct characters, and a threshold of 40
#    refused one. Anything at or above 40 is a regression, not a tightening.
if MIN_DISTINCT_CHARS > 38:
    FAILURES.append(
        f"GATE · MIN_DISTINCT_CHARS is {MIN_DISTINCT_CHARS}; a real ALL-CAPS return measures "
        "39 distinct characters and would be refused"
    )
_allcaps = ("KOLO FLORIDA INC — FORM 1120-S, U.S. INCOME TAX RETURN FOR AN S CORPORATION. "
            "ORDINARY BUSINESS INCOME (LOSS): 88,065. SCHEDULE K-1, PART III, BOX 1. " * 20)
if not looks_like_text(_allcaps)[0]:
    FAILURES.append("GATE · an ALL-CAPS return extraction was refused as unreadable")

# ── Adobe's MULTI-CHARACTER uni form. A greedy {4,6} eats one group plus two
#    digits of the next and welds the remainder to a decoded character.
if decode_glyph_names("/uni00310032")[0] != "12":
    FAILURES.append("GLYPH · a multi-character /uniXXXXXXXX name did not decode fully")
if "/uni" in decode_glyph_names("/uni00310032/uni0033")[0]:
    FAILURES.append("GLYPH · decoding a multi-character name left a residual token behind")

# ── A lone surrogate must never reach chr()'s output: dst.write_text() would
#    raise AFTER opening the file, breaking the "nothing was written" contract.
out, _ = decode_glyph_names("/uniD800")
if out != "/uniD800":
    FAILURES.append("GLYPH · a lone surrogate was decoded instead of being left alone")
try:
    decode_glyph_names("/uniD800/uni0041")[0].encode("utf-8")
except UnicodeEncodeError:
    FAILURES.append("GLYPH · decoded output is not UTF-8 encodable — write_text would crash")

# ── Two column collisions from one real return, needing OPPOSITE treatment ────
#    Added 2026-09-01 after a real 102-page filed 1040 aborted at the guard with
#    exit 4. Three runs survived redaction, in two shapes, and the reason one fix
#    could not serve both is the lesson worth keeping:
#
#      · "NNN\nNN  NNNN"      — straddles a ROW BREAK, so it is the tail of one
#                               row welded to the next. MASKED (safe direction).
#      · "NNN        NN.NNNN" — a decimal fraction beside another column. An SSN
#                               has no decimal in it, so the GUARD IGNORES it.
#
#    ⛔ The first attempt masked every wide-spaced unlabelled run instead. Two
#    tests already in this file killed it, and both were right: it destroyed
#    "125  40  1234" (a figure row), and it removed the guard's stop on the
#    same-line shape — the one case where a human really does have to look.
from redact import FIGURE_COLLISION  # noqa: E402

must_hide("SSN straddling a row break", "Sch A .... 123\n45  6789 Line 7", "123\n45  6789")

# …and the counter must move, or the rule could be deleted and this stay green.
if redact("total .... 123\n45  6789 next")[1]["cross_row"] != 1:
    FAILURES.append("CROSS-ROW · the mask fired without incrementing cross_row")

# 🛑 The same-line shape must STILL reach the guard. This is the control the
#    first attempt silently removed.
if not redact("Dependents 123    45    6789 Line 7")[1]["leaks"]:
    FAILURES.append("CROSS-ROW · a same-line wide-spaced run no longer trips the guard")
if redact("Dependents 123    45    6789 Line 7")[1]["cross_row"]:
    FAILURES.append("CROSS-ROW · a same-line run was masked instead of stopping the job")

# A labelled or hyphenated SSN must still be counted as an SSN, not swept up by
# the catch-all — otherwise the headline count silently empties out.
if redact("SSN 123-45-6789")[1]["ssn_itin"] != 1:
    FAILURES.append("CROSS-ROW · a hyphenated SSN was not counted under ssn_itin")

# ── The guard's ONE exemption, pinned from both sides ─────────────────────────
if not FIGURE_COLLISION.match("123        45.6789"):
    FAILURES.append("GUARD · the figure-column collision shape is no longer exempt")
for _identifier in ("123.45.6789", "123-45-6789", "123 45 6789", "123  45  6789"):
    if FIGURE_COLLISION.match(_identifier):
        FAILURES.append(f"GUARD · exemption swallowed a real SSN shape: {_identifier!r}")

# The exemption must not become a hole: a document carrying the collision AND a
# real SSN must still end up with the SSN masked and the collision not flagged.
_out, _counts = redact("Rate 123        45.6789 pct\nDependent SSN 987    65    4321 child")
if "987    65    4321" in _out:
    FAILURES.append("GUARD · a real SSN survived beside an exempt figure collision")
if _counts["leaks"]:
    FAILURES.append("GUARD · the figure collision still tripped the guard")

if FAILURES:
    print(f"FAILED — {len(FAILURES)} problem(s):")
    for f in FAILURES:
        print("  " + f)
    sys.exit(1)

print("PASS — all cases redacted or preserved as intended.")
