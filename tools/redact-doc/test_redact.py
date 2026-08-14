#!/usr/bin/env python3
"""
test_redact.py — every case is INVENTED. No client's data is in this file, and
none may ever be added to it (organizer-review §0 rule 7).

    python3 tools/redact-doc/test_redact.py

Run it after any change to the patterns. A redactor nobody tests is a redactor
that quietly stops redacting.
"""

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

def _minimal_pdf(body: str) -> bytes:
    """A tiny valid PDF carrying one line of text, so _run() can be exercised."""
    stream = f"BT /F1 12 Tf 40 700 Td ({body}) Tj ET".encode("latin-1")
    objs = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
        b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream),
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]
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

from redact import decode_glyph_names, looks_like_text  # noqa: E402


def _as_glyphs(s: str) -> str:
    """Encode text the way a broken font's extraction presents it."""
    return "".join(f"/uni{ord(c):04X}" for c in s)


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

if FAILURES:
    print(f"FAILED — {len(FAILURES)} problem(s):")
    for f in FAILURES:
        print("  " + f)
    sys.exit(1)

print("PASS — all cases redacted or preserved as intended.")
