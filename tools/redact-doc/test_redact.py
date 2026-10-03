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
from redact import redact, normalise, _run  # noqa: E402

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

# F4 · The street-NAME token was [A-Z][A-Za-z0-9'.-]* — it had to START with a
#      letter — and the directional prefix was a single [NSEW]. So every NUMBERED
#      street leaked, which in South Florida is most addresses. Found 2026-10-03
#      when a client's home address came through this tool in clear while the
#      firm's own address, on the same page, was masked.
must_hide("F4 numbered street", "4521 SW 142nd Ct", "142nd Ct")
must_hide("F4 two-letter prefix", "9900 NE 2nd Avenue", "2nd Avenue")
must_hide("F4 numbered street + apt", "88 12th St Apt 3B", "12th St")
must_hide("F4 ordinal with suite", "1 SE 3rd Ave Suite 2900", "3rd Ave")
must_hide("F4 long numbered name", "11300 SW 160th Street", "160th Street")
# …and the widened pattern must still not eat a figure followed by a label.
must_keep("F4 ordinal quarter label", "Estimated tax payments 2 ND quarter 4,000", "4,000")
must_keep("F4 ordinal in prose", "the 4th quarter estimate 1,500", "1,500")
must_keep("F4 line ref with ordinal", "Line 3 RD party designee", "party designee")

# F5 · A PTIN printed in the preparer block came through in clear, because nothing
#      here looked for one. Only the PTIN is maskable by shape (P + 8 digits); an
#      EFIN is six bare digits and a signature PIN is five, so neither is - that
#      half is a FOLLOW-UPS question, not a pattern.
must_hide("F5 PTIN masked", "Preparer PTIN P01234567 Self-employed", "P01234567")
must_keep("F5 a form name is not a PTIN", "See Form P11 attached", "P11")
must_keep("F5 a figure is not a PTIN", "Line 9 is 12345678", "12345678")

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

# ── THE CROSS-LINE SSN SHAPE. SSN_LOOSE (the guard) only matches within ONE
#    line, because a column of figures collides with the shape across a line
#    break: an amount ending one row, then the next row's number gutter. That
#    narrowing was nearly a leak, so these four pin every branch of it.
_LABELLED_SPLIT = "Your social security number\n123 45\n   6789\n"
_GUTTER = "Add lines 22 and 23 .  .  . 230\n 24       1040 and\n"

# a LABELLED run split across lines must not reach the output. On a layout
# extraction a label routinely sits on its own line above its value, and
# SSN_LABELLED cannot cross a newline - this is the only net under it.
_ls_out, _ls_c = redact(normalise(_LABELLED_SPLIT))
if "6789" in _ls_out or "123" in _ls_out:
    FAILURES.append("CROSS-LINE · a labelled SSN split across lines reached the output")
if not _ls_c["cross_line"]:
    FAILURES.append("CROSS-LINE · a labelled split SSN was masked without being reported")

# an unlabelled gutter must NOT stop the job - refusing it is the false alarm
# this whole rule exists to avoid - but it IS masked, and it must be reported.
_out, _c = redact(normalise(_GUTTER))
if _c["leaks"]:
    FAILURES.append("CROSS-LINE · an unlabelled table gutter stopped the job (false alarm is back)")
if not _c["cross_line"]:
    FAILURES.append("CROSS-LINE · an unlabelled gutter was masked WITHOUT being counted — silently")

# and the one the narrowing must never cost: a wide-spaced SSN on ONE line.
if "123" in redact(normalise("SSN   123   45   6789"))[0]:
    FAILURES.append("CROSS-LINE · a wide-spaced one-line SSN was neither masked nor flagged")

# 🛑 EVERY GEOMETRY THAT DEFEATED AN EARLIER VERSION OF THIS RULE. Two attempts
#    were made to tell a split SSN from a table gutter — a label-proximity test
#    and a wide-column-gap test — and both leaked. The rule now MASKS every
#    cross-line run, so all of these must come out with no digits in the output.
for _name, _probe in [
    ("no label anywhere",       "DENYS MELNYK AND MARIIA K\n123 45\n   6789\nPage 3\n"),
    ("label 250 chars away",    "Your social security number" + "x" * 250 + "\n123 45\n   6789\n"),
    ("label 500 chars away",    "social security number" + "x" * 500 + "\n123 45\n     6789\n"),
    ("label AFTER the digits",  "\n123 45\n   6789\nsocial security number\n"),
    ("an unlisted spelling",    "Soc. Sec. No.\n123 45\n   6789\n"),
    ("unlabelled, WIDE gutter", "DENYS MELNYK\n123 45\n        6789\n"),
    ("exactly five spaces",     "DENYS MELNYK\n123 45\n     6789\n"),
    ("a three-line split",      "X\n123\n 45\n     6789\n"),
    ("a trailing hyphen",       "X\n123-45-\n     6789\n"),
    ("dot separators",          "X\n123.45.\n      6789\n"),
    ("a tab gutter",            "X\n123 45\n\t\t6789\n"),
]:
    _out, _c = redact(normalise(_probe))
    if "6789" in _out or "123" in _out:
        FAILURES.append(f"CROSS-LINE · a split SSN with {_name} reached the output")
    if not _c["cross_line"]:
        FAILURES.append(f"CROSS-LINE · a split SSN with {_name} was not reported")

# 🛑 AND EVERY WHITESPACE CHARACTER THAT IS NOT \n. The mask used to test for a
#    newline while the guard's separators were `[-\t .]`, so a run broken by any
#    OTHER whitespace fell between the two: matched by SSN_CROSS_LINE (so the
#    guard never saw it) and rejected by the newline test (so it was never
#    masked). Nine digits went to disk with exit 0 and "0 masked". A font's
#    ToUnicode map emitting one of these is exactly the case normalise() exists
#    for, so this is not hypothetical.
for _name, _sep in [
    ("carriage returns", "\r\r"), ("vertical tabs", "\v\v"), ("form feeds", "\f\f"),
    ("a form feed and a space", "\f "), ("a carriage return and a space", "\r "),
    ("U+2028 line separator", "\u2028\u2028"), ("U+2029 paragraph separator", "\u2029\u2029"),
    ("U+0085 NEL", "\u0085\u0085"), ("an ASCII file separator", "\x1c\x1c"),
    ("an ASCII unit separator", "\x1f\x1f"),
]:
    _p = f"MELNYK  DENYS\n412{_sep}78{_sep}3906\n"
    _o, _c = redact(normalise(_p))
    if "412" in _o and "3906" in _o:
        FAILURES.append(f"CROSS-LINE · an SSN separated by {_name} reached the output")

# ⚠️ And the deliberate cost: a real table gutter is masked too, and SAID SO.
_g_out, _g_c = redact(normalise("Add lines 22 and 23 .  .  . 230\n 24       1040 and\n"))
if "1040" in _g_out:
    FAILURES.append("CROSS-LINE · a table gutter was left unmasked — the rule is masking, not guessing")
if not _g_c["cross_line"]:
    FAILURES.append("CROSS-LINE · a masked table gutter was not reported, so nobody could check it")

# ══ FILLABLE FORM FIELDS (AcroForm). What a person types into a fillable PDF is
#    not page text, and extract_text() never returns it. On 2026-09-29 two filled
#    W-9s came out identical to the blank IRS form — exit 0, "0 SSN · 0 EIN" —
#    and nothing in the report said the read was blind. These cases pin the fix:
#    field values are read, masked like page text, guarded like page text, and
#    counted, so a blind read says "0 of N" instead of passing for a clean one.
#    Every name and number below is INVENTED.

def _fillable_pdf(text: str, fields: list, rotate: int = 0, unplaced: list = (),
                  xfa: bool = False, twice: tuple = ()) -> bytes:
    """One page of `text` plus AcroForm widgets.

    A field is a dict: t (name), v (value; a str, or a /Name for a box), rect,
    ft ("/Tx" default, "/Btn"), tu (tooltip), ff (/Ff flags), maxlen, as_
    (appearance state), on (the box's on-state, which gives it an /AP), kids
    (for a radio group: a list of (rect, on-state)). `unplaced` fields are in
    the form but on no page; `xfa` adds an /XFA entry; field names in `twice`
    are listed twice in the page's /Annots.
    """
    def lit(s: str) -> bytes:
        return b"(" + s.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)").encode("latin-1") + b")"

    def val(v) -> bytes:
        return v.encode() if v.startswith("/") else lit(v)

    objs: list[bytes] = [b"", b"", b"", b"", b"", b""]  # 1-6 are filled in below
    annots, top = [], []

    def add(o: bytes) -> int:
        objs.append(o)
        return len(objs)

    def ap(on: str) -> bytes:
        return b" /AP << /N << %s 5 0 R /Off 5 0 R >> >>" % on.encode()

    for f, placed in [(f, True) for f in fields] + [(f, False) for f in unplaced]:
        common = b"/FT %s /T %s" % (f.get("ft", "/Tx").encode(), lit(f["t"]))
        if f.get("v") is not None:
            common += b" /V " + val(f["v"])
        if f.get("tu"):
            common += b" /TU " + lit(f["tu"])
        if f.get("ff"):
            common += b" /Ff %d" % f["ff"]
        if f.get("maxlen"):
            common += b" /MaxLen %d" % f["maxlen"]
        if "kids" in f:  # a radio group: the field is the parent, the widgets are kids
            parent = add(b"")
            kid_refs = []
            for rect, on in f["kids"]:
                k = add(b"<< /Type /Annot /Subtype /Widget /Parent %d 0 R /Rect [%s] /P 3 0 R%s >>"
                        % (parent, " ".join(map(str, rect)).encode(), ap(on)))
                kid_refs.append(k)
                if placed:
                    annots.append(k)
            objs[parent - 1] = b"<< %s /Ff %d /Kids [%s] >>" % (
                common, 1 << 15, b" ".join(b"%d 0 R" % k for k in kid_refs))
            top.append(parent)
            continue
        w = b"<< /Type /Annot /Subtype /Widget %s /Rect [%s] /P 3 0 R" % (
            common, " ".join(map(str, f["rect"])).encode())
        if f.get("as_"):
            w += b" /AS " + f["as_"].encode()
        if f.get("on"):
            w += ap(f["on"])
        n = add(w + b" >>")
        top.append(n)
        if placed:
            annots.append(n)
            if f["t"] in twice:
                annots.append(n)

    stream = b"BT /F1 12 Tf 40 700 Td " + lit(text) + b" Tj ET"
    refs = lambda ns: b" ".join(b"%d 0 R" % n for n in ns)  # noqa: E731
    objs[0] = b"<< /Type /Catalog /Pages 2 0 R /AcroForm 6 0 R >>"
    objs[1] = b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>"
    objs[2] = (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Rotate %d "
               b"/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R /Annots [%s] >>"
               % (rotate, refs(annots)))
    objs[3] = b"<< /Length %d >>\nstream\n%s\nendstream" % (len(stream), stream)
    objs[4] = b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
    objs[5] = b"<< /Fields [%s]%s >>" % (refs(top), b" /XFA []" if xfa else b"")
    out, offsets = bytearray(b"%PDF-1.4\n"), []
    for i, o in enumerate(objs, 1):
        offsets.append(len(out))
        out += b"%d 0 obj\n" % i + o + b"\nendobj\n"
    xref = len(out)
    out += b"xref\n0 %d\n0000000000 65535 f \n" % (len(objs) + 1)
    for off in offsets:
        out += b"%010d 00000 n \n" % off
    out += b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (len(objs) + 1, xref)
    return bytes(out)


def _run_quiet(src: Path, dst: Path) -> tuple[int, str]:
    """_run() with stdout AND stderr captured — the report is part of what is tested."""
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
        rc = _run(src, dst)
    return rc, buf.getvalue()


# The template a blank IRS W-9 extracts as — invented wording, the real header shape.
_W9_TEXT = ("Form W-9 (Rev. March 2024) Department of the Treasury Internal Revenue Service "
            "Request for Taxpayer Identification Number and Certification. Name of entity or "
            "individual; business name; federal tax classification; address; Part I Taxpayer "
            "Identification Number; social security number; employer identification number.")
_PAYEE = "ZEPHYRFAKE TESTPAYEE"
_BUSINESS = "QUARRY TESTWORKS LLC"


_COMB = (1 << 24) | (1 << 23)  # comb + do-not-spellcheck — the real W-9's TIN boxes


def _w9_fields(name=_PAYEE, ssn=("123", "45", "6789"), ein=("", ""), street="1234 Elm Rd"):
    """A W-9 laid out like the real one: the SSN in three comb boxes on ONE row, the EIN in two."""
    return [
        {"t": "f1_01", "v": name, "rect": (59, 660, 576, 674)},
        {"t": "f1_02", "v": _BUSINESS if name else "", "rect": (59, 636, 576, 650)},
        {"t": "c1_1", "ft": "/Btn", "v": "/1" if name else "/Off", "as_": "/1" if name else "/Off",
         "on": "/1", "tu": "Individual/sole proprietor", "rect": (73, 604, 81, 612)},
        {"t": "c1_2", "ft": "/Btn", "v": "/Off", "as_": "/Off", "on": "/2", "rect": (180, 604, 188, 612)},
        {"t": "f1_07", "v": street, "rect": (59, 492, 388, 506)},
        {"t": "f1_08", "v": "Bozeman, MT 59715" if name else "", "rect": (59, 468, 388, 482)},
        {"t": "f1_11", "v": ssn[0], "ff": _COMB, "maxlen": 3, "rect": (418, 396, 461, 420)},
        {"t": "f1_12", "v": ssn[1], "ff": _COMB, "maxlen": 2, "rect": (475, 396, 504, 420)},
        {"t": "f1_13", "v": ssn[2], "ff": _COMB, "maxlen": 4, "rect": (518, 396, 576, 420)},
        {"t": "f1_14", "v": ein[0], "ff": _COMB, "maxlen": 2, "rect": (418, 348, 446, 372)},
        {"t": "f1_15", "v": ein[1], "ff": _COMB, "maxlen": 7, "rect": (461, 348, 562, 372)},
    ]


with tempfile.TemporaryDirectory() as td:
    tmp = Path(td)

    # ── THE CASE THAT WAS BLIND: a filled W-9 with the SSN in three boxes. The
    #    name must come through, the SSN must be masked AS AN SSN, the report
    #    must count the fields — and must never print a value.
    (tmp / "w9.pdf").write_bytes(_fillable_pdf(_W9_TEXT, _w9_fields()))
    rc, report = _run_quiet(tmp / "w9.pdf", tmp / "f1.txt")
    if rc != 0:
        FAILURES.append(f"FIELDS · a filled W-9 did not exit 0 (got {rc})")
    else:
        got = (tmp / "f1.txt").read_text()
        for wanted, why in ((_PAYEE, "the payee name"), (_BUSINESS, "the business name"),
                            ("Bozeman, MT 59715", "city/state/ZIP"), ("[SSN-1]", "the SSN tag"),
                            ("[X] Individual/sole proprietor", "the checked box and its tooltip"),
                            ("[ ]", "the unchecked box")):
            if wanted not in got:
                FAILURES.append(f"FIELDS · {why} is missing from a filled W-9's output")
        for leak in ("6789", "123-45", "Elm Rd"):
            if leak in got:
                FAILURES.append(f"FIELDS · LEAK: {leak!r} from a form field reached the written file")
        if "fields: 8 of 11 fillable form field(s)" not in report:
            FAILURES.append("FIELDS · the report did not count 8 of 11 field values")
        if "1 SSN/ITIN" not in report:
            FAILURES.append("FIELDS · the three-box SSN was not counted as ONE SSN")
        for value in (_PAYEE, "6789", "Elm"):
            if value in report:
                FAILURES.append(f"FIELDS · LEAK: the report printed a field value ({value!r})")
        if "no SSN, ITIN or EIN" in report or "NONE of its" in report:
            FAILURES.append("FIELDS · a filled W-9 with an SSN was flagged as blank or blind")

    # ── The EIN in two boxes (2 · 7) is KEPT, hyphenated, and counted as an EIN.
    (tmp / "w9e.pdf").write_bytes(_fillable_pdf(
        _W9_TEXT, _w9_fields(ssn=("", "", ""), ein=("12", "3456789"))))
    rc, report = _run_quiet(tmp / "w9e.pdf", tmp / "f2.txt")
    if rc != 0 or "12-3456789" not in (tmp / "f2.txt").read_text():
        FAILURES.append("FIELDS · an EIN in two boxes was not kept as NN-NNNNNNN")
    elif "1 EIN" not in report:
        FAILURES.append("FIELDS · an EIN in two boxes was kept but not counted")

    # ── THE GUARD. Masking bypassed — the SSN pattern neutered — and the field
    #    value must still stop the job: refuse, write nothing, print no digits.
    #    This is what proves field values reach the guard and not just the masker.
    import redact as _rmod  # noqa: E402
    _real_ssn = _rmod.SSN
    _rmod.SSN = re.compile(r"(?!x)x")  # matches nothing
    try:
        rc, report = _run_quiet(tmp / "w9.pdf", tmp / "f3.txt")
    finally:
        _rmod.SSN = _real_ssn
    if rc != 4 or (tmp / "f3.txt").exists():
        FAILURES.append(f"FIELDS · GUARD: with masking bypassed a field SSN was not refused (exit {rc})")
    if "6789" in report:
        FAILURES.append("FIELDS · GUARD: the refusal printed the digits it refused")

    # ── THE BLIND READ MADE VISIBLE. A known IRS form with fillable fields and no
    #    values is blank OR unreadable — the output cannot tell which, so it says so.
    (tmp / "w9blank.pdf").write_bytes(_fillable_pdf(
        _W9_TEXT, _w9_fields(name="", ssn=("", "", ""), street="")))
    rc, report = _run_quiet(tmp / "w9blank.pdf", tmp / "f4.txt")
    if rc != 0:
        FAILURES.append("FIELDS · a blank W-9 was refused — blank is a valid document")
    elif "IRS Form W-9, and NONE of its 11" not in report or "fields: 0 of 11" not in report:
        FAILURES.append("FIELDS · a W-9 whose fields yielded nothing was not flagged as blank-or-blind")

    # ── A W-9 WITH values but no TIN is incomplete or half-read — also said.
    (tmp / "w9notin.pdf").write_bytes(_fillable_pdf(_W9_TEXT, _w9_fields(ssn=("", "", ""))))
    rc, report = _run_quiet(tmp / "w9notin.pdf", tmp / "f5.txt")
    if rc != 0 or "no SSN, ITIN or EIN was found" not in report:
        FAILURES.append("FIELDS · a W-9 with no tax ID was not flagged")

    # ── …and neither warning fires on a fillable form that is not an IRS form.
    (tmp / "other.pdf").write_bytes(_fillable_pdf(
        "Zephyr Quarry Junction LLC internal intake sheet, filled by the client at onboarding, "
        "listing contacts and the services requested this year.",
        [{"t": "a", "v": "", "rect": (59, 660, 576, 674)}]))
    rc, report = _run_quiet(tmp / "other.pdf", tmp / "f6.txt")
    if rc != 0 or "NONE of its" in report or "Form W-9" in report:
        FAILURES.append("FIELDS · a blank non-IRS fillable form raised the IRS warning")

    # ── A PDF with no fields at all SAYS so — silence would read as "looked, found nothing".
    (tmp / "plain.pdf").write_bytes(_minimal_pdf(
        "Zephyr Quarry Junction LLC Form 1120-S ordinary business income 22,100 and enough "
        "narrative text to clear the hundred-character floor comfortably here."))
    rc, report = _run_quiet(tmp / "plain.pdf", tmp / "f7.txt")
    if rc != 0 or "fields: none" not in report:
        FAILURES.append("FIELDS · a PDF with no fillable fields did not say so in the report")

    # ── SHAPES THE TIN JOIN MUST GET RIGHT, both ways.
    _row = lambda *vals: [{"t": f"r{i}", "v": v, "rect": (60 + 80 * i, 500, 130 + 80 * i, 514)}  # noqa: E731
                          for i, v in enumerate(vals)]
    _filler = ("Zephyr Quarry Junction LLC client worksheet with boxed entries for the amounts "
               "and identifiers requested by the preparer this season.")
    for label, fields, secret, wanted in (
        # Dollars and cents in two boxes must NOT be welded: 150000 is a wrong
        # figure, and a wrong figure never sends anyone back to the PDF.
        ("dollars and cents stay apart", _row("1500", "00"), None, "1500   00"),
        # Nine single-digit boxes: every pattern here needs digit GROUPS, so
        # spaced single digits would pass all of them. Joined, LONG_DIGITS has it.
        ("nine single-digit boxes", _row(*"123456789"), "123456789", "[NUM-1]"),
        # Any other nine-digit split is masked whole — a ZIP+4 in 5 · 4 boxes too, by design.
        ("an unhyphenated 3-3-3 split", _row("123", "456", "789"), "456", "[NUM-1]"),
    ):
        (tmp / "shape.pdf").write_bytes(_fillable_pdf(_filler, fields))
        rc, _ = _run_quiet(tmp / "shape.pdf", tmp / "f8.txt")
        got = (tmp / "f8.txt").read_text() if rc == 0 else ""
        (tmp / "f8.txt").unlink(missing_ok=True)
        if rc != 0 or wanted not in got:
            FAILURES.append(f"FIELDS · {label}: expected {wanted!r} in the output (exit {rc})")
        if secret and re.search(r"(?<!\d)" + r"\D{0,3}".join(secret) + r"(?!\d)", got):
            FAILURES.append(f"FIELDS · LEAK · {label}: the digits reached the written file")

    # ── THE SAME SSN ON THREE ROWS — boxes stacked, nothing between them. Not
    #    joined (different rows), so the cross-line rule is the net, and it holds
    #    only because field LABELS are never interleaved with the values.
    stacked = [{"t": f"s{i}", "v": v, "rect": (418, 500 - 30 * i, 476, 514 - 30 * i)}
               for i, v in enumerate(("123", "45", "6789"))]
    (tmp / "stack.pdf").write_bytes(_fillable_pdf(_filler, stacked))
    rc, _ = _run_quiet(tmp / "stack.pdf", tmp / "f9.txt")
    if rc == 0 and "6789" in (tmp / "f9.txt").read_text():
        FAILURES.append("FIELDS · LEAK: an SSN split across three rows of fields reached the file")

    # ── A ROTATED PAGE. Boxes stacked vertically in the file are ONE row on the
    #    screen of a page turned 90°; read in file order they would come out
    #    `6789 / 45 / 123`, which no pattern recognises.
    turned = [{"t": f"t{i}", "v": v, "rect": (100, 400 + 60 * i, 130, 450 + 60 * i)}
              for i, v in enumerate(("123", "45", "6789"))]
    (tmp / "rot.pdf").write_bytes(_fillable_pdf(_filler, turned, rotate=90))
    rc, report = _run_quiet(tmp / "rot.pdf", tmp / "f10.txt")
    got = (tmp / "f10.txt").read_text() if rc == 0 else ""
    if rc != 0 or "6789" in got or "[SSN-1]" not in got:
        FAILURES.append(f"FIELDS · a three-box SSN on a ROTATED page was not read as one SSN (exit {rc})")

    # ── A FIELD ON NO PAGE still holds a value, and still gets read and counted.
    (tmp / "unpl.pdf").write_bytes(_fillable_pdf(
        _filler, _row("PLACEDFAKE"), unplaced=[{"t": "ghost", "v": "UNPLACEDFAKE 123-45-6789",
                                               "rect": (0, 0, 0, 0)}]))
    rc, report = _run_quiet(tmp / "unpl.pdf", tmp / "f11.txt")
    got = (tmp / "f11.txt").read_text() if rc == 0 else ""
    if "UNPLACEDFAKE" not in got or "fields: 2 of 2" not in report:
        FAILURES.append("FIELDS · a field whose widget is on no page was not read and counted")
    if "6789" in got:
        FAILURES.append("FIELDS · LEAK: an SSN in an unplaced field reached the file")

    # ── A BOX'S VALUE IS A NAME like /1 — a slash-token with a digit, exactly what
    #    GLYPH_TOKEN masks as unreadable. It must be written [X], never as itself.
    (tmp / "box.pdf").write_bytes(_fillable_pdf(_filler, [
        {"t": "b", "ft": "/Btn", "v": "/3", "as_": "/3", "on": "/3", "rect": (73, 604, 81, 612)}]))
    rc, report = _run_quiet(tmp / "box.pdf", tmp / "f12.txt")
    got = (tmp / "f12.txt").read_text() if rc == 0 else ""
    if "[X]" not in got or "[GLYPH]" in got or "MASKED as [GLYPH]" in report:
        FAILURES.append("FIELDS · a checkbox's /N value was emitted as a token instead of [X]")

    # ── A RADIO GROUP shares one /V across its kids: only the kid whose on-state
    #    IS that value is chosen. Getting this wrong ticks every box in the group.
    (tmp / "radio.pdf").write_bytes(_fillable_pdf(_filler, [
        {"t": "grp", "ft": "/Btn", "v": "/2",
         "kids": [((73, 604, 81, 612), "/1"), ((180, 604, 188, 612), "/2")]}]))
    rc, report = _run_quiet(tmp / "radio.pdf", tmp / "f13.txt")
    got = (tmp / "f13.txt").read_text() if rc == 0 else ""
    if "[ ]   [X]" not in got or "fields: 1 of 1" not in report:
        FAILURES.append("FIELDS · a radio group did not mark exactly its chosen kid")

    # ── A PUSH BUTTON ("Print", "Clear form") is machinery, not a field, and a
    #    value holding NUL must not forge redact()'s `\x00EIN<n>\x00` placeholder
    #    — with no EIN parked, restoring one would crash mid-job.
    (tmp / "misc.pdf").write_bytes(_fillable_pdf(_filler, [
        {"t": "print", "ft": "/Btn", "ff": 1 << 16, "rect": (500, 700, 560, 720), "v": None},
        {"t": "note", "v": "FAKE\x00EIN0\x00TAIL", "rect": (59, 660, 576, 674)}]))
    try:
        rc, report = _run_quiet(tmp / "misc.pdf", tmp / "f14.txt")
    except Exception as exc:  # noqa: BLE001
        rc, report = -1, f"{type(exc).__name__}"
    if rc != 0:
        FAILURES.append(f"FIELDS · a NUL in a field value broke the run ({report if rc == -1 else rc})")
    elif "fields: 1 of 1" not in report:
        FAILURES.append("FIELDS · a push button was counted as a fillable field")

    # ── IF THE FIELD READER ITSELF FAILS, the page text is still safe to write —
    #    but the report must say the fields were NOT read, and must not quote the
    #    exception, whose message can carry document text.
    _real_reader = _rmod.read_form_fields

    def _broken(_reader):
        raise RuntimeError("FAKE-VALUE 123-45-6789")

    _rmod.read_form_fields = _broken
    try:
        rc, report = _run_quiet(tmp / "w9.pdf", tmp / "f15.txt")
    finally:
        _rmod.read_form_fields = _real_reader
    if rc != 0 or "COULD NOT BE READ (RuntimeError)" not in report:
        FAILURES.append("FIELDS · a failed field read was not reported as such")
    if "FAKE-VALUE" in report or "6789" in report:
        FAILURES.append("FIELDS · LEAK: the report quoted the field reader's exception message")

    # ══ FROM THE INDEPENDENT REVIEW OF PR #485 — each of these got through the
    #    first version of the field reader.

    # R1 · THE GREEDY JOIN. It took the FIRST nine-digit run from the left, so a
    #      digit-only field before the SSN boxes pulled part of the SSN into the
    #      wrong run and the rest was written in clear — with the guard silent,
    #      where WITHOUT any join it would have refused.
    for label, vals, secret in (
        ("a year before the SSN boxes", ("2024", "123", "45", "6789"), "6789"),
        ("date boxes before the SSN boxes", ("04", "17", "1982", "123", "45", "6789"), "6789"),
        ("a year before nine single-digit boxes", ("2024", *"123456789"), "6789"),
        ("a year before two SSNs", ("2024", "123", "45", "6789", "987", "65", "4321"), "4321"),
    ):
        (tmp / "greedy.pdf").write_bytes(_fillable_pdf(_filler, _row(*vals)))
        rc, _ = _run_quiet(tmp / "greedy.pdf", tmp / "r1.txt")
        got = (tmp / "r1.txt").read_text() if rc == 0 else ""
        (tmp / "r1.txt").unlink(missing_ok=True)
        tail = r"\D{0,12}".join(secret)
        if rc == 0 and re.search(r"(?<!\d)" + tail + r"(?!\d)", got):
            FAILURES.append(f"FIELDS · R1 LEAK · {label}: {secret!r} reached the written file")
    # …and the SSN on its own is still read as an SSN, not merely masked.
    (tmp / "greedy.pdf").write_bytes(_fillable_pdf(_filler, _row("123", "45", "6789")))
    rc, report = _run_quiet(tmp / "greedy.pdf", tmp / "r1b.txt")
    if rc != 0 or "1 SSN/ITIN" not in report:
        FAILURES.append("FIELDS · R1 · three SSN boxes alone were not counted as one SSN")

    # R2 · MASKS THAT NEED A LABEL. A value is written alone, so DOB_CONTEXT and
    #      friends can never fire on it; the field's OWN tooltip or name must.
    #      Includes a DOB split into three boxes, which no page rule would see.
    labelled = [
        {"t": "a1", "tu": "Date of birth (MM/DD/YYYY)", "v": "04/17/1982", "rect": (59, 660, 300, 674)},
        {"t": "a2", "tu": "Driver's license number", "v": "D123-4567-8901", "rect": (59, 630, 300, 644)},
        {"t": "a3", "tu": "Account number", "v": "12345678", "rect": (59, 600, 300, 614)},
        {"t": "applicant_dob_mm", "v": "07", "rect": (59, 570, 80, 584)},
        {"t": "applicant_dob_dd", "v": "22", "rect": (90, 570, 110, 584)},
        {"t": "applicant_dob_yyyy", "v": "1979", "rect": (120, 570, 160, 584)},
        {"t": "a4", "tu": "Passport number", "v": "N/A", "rect": (59, 540, 300, 554)},
    ]
    (tmp / "lab.pdf").write_bytes(_fillable_pdf(_filler, labelled))
    rc, report = _run_quiet(tmp / "lab.pdf", tmp / "r2.txt")
    got = (tmp / "r2.txt").read_text() if rc == 0 else ""
    for secret in ("04/17/1982", "4567-8901", "12345678", "1979"):
        if secret in got:
            FAILURES.append(f"FIELDS · R2 LEAK: a labelled field value {secret!r} reached the file")
    if "4 dates of birth" not in report or "1 licence" not in report or "1 labelled account" not in report:
        FAILURES.append("FIELDS · R2 · label-masked field values were not counted in the report")
    if "N/A" not in got:
        FAILURES.append("FIELDS · R2 · a digit-free value under an ID label was masked — nothing to hide")

    # R3 · A WIDGET LISTED TWICE in /Annots put its value in the row twice —
    #      `123 45 45 6789` — which is no nine-digit run, so nothing masked it.
    (tmp / "dup.pdf").write_bytes(_fillable_pdf(_W9_TEXT, _w9_fields(), twice=("f1_12",)))
    rc, report = _run_quiet(tmp / "dup.pdf", tmp / "r3.txt")
    got = (tmp / "r3.txt").read_text() if rc == 0 else ""
    if rc != 0 or "6789" in got or "[SSN-1]" not in got:
        FAILURES.append(f"FIELDS · R3 · a widget listed twice broke the SSN join (exit {rc})")

    # R4 · XFA IS NOT READ, AND MUST SAY SO. An XFA-only form (empty /Fields)
    #      reported "no fillable form fields" — a blind read passing for clean.
    (tmp / "xfa.pdf").write_bytes(_fillable_pdf(_filler, [], xfa=True))
    rc, report = _run_quiet(tmp / "xfa.pdf", tmp / "r4.txt")
    if rc != 0 or "XFA form data, which this tool does NOT read" not in report:
        FAILURES.append("FIELDS · R4 · an XFA-only form did not say its data was not read")
    if "no fillable form fields" in report:
        FAILURES.append("FIELDS · R4 · an XFA-only form was reported as having no fillable fields")
    # …and a form carrying BOTH, whose fields WERE read, still says XFA was not —
    #    the real IRS W-9 is built this way.
    (tmp / "xfa2.pdf").write_bytes(_fillable_pdf(_W9_TEXT, _w9_fields(), xfa=True))
    rc, report = _run_quiet(tmp / "xfa2.pdf", tmp / "r4b.txt")
    if rc != 0 or "also carries XFA form data, which this tool does NOT read" not in report:
        FAILURES.append("FIELDS · R4 · a filled form that also carries XFA did not say XFA was not read")

    # R5 · 2·7 IS THE ONE JOIN THAT WRITES A VALUE UNMASKED, so it needs evidence.
    #      Two amount boxes `50 | 1250000` are not an EIN.
    (tmp / "amt.pdf").write_bytes(_fillable_pdf(_filler, _row("50", "1250000", "5556")))
    rc, report = _run_quiet(tmp / "amt.pdf", tmp / "r5.txt")
    got = (tmp / "r5.txt").read_text() if rc == 0 else ""
    if "50-1250000" in got or "1 EIN" in report:
        FAILURES.append("FIELDS · R5 · two plain amount boxes were kept and counted as an EIN")
    if "⟨joined⟩   5556" not in got:
        FAILURES.append("FIELDS · R5 · a masked span lost its column count — 5556 shifted a column")

    # R6 · A WALK CUT SHORT BY ITS SAFETY CAP must be reported, not look complete.
    _real_cap = _rmod.MAX_FIELD_NODES
    _rmod.MAX_FIELD_NODES = 1
    try:
        rc, report = _run_quiet(tmp / "unpl.pdf", tmp / "r6.txt")
    finally:
        _rmod.MAX_FIELD_NODES = _real_cap
    if "could NOT be read" not in report:
        FAILURES.append("FIELDS · R6 · a field walk stopped by its node cap was not reported")

    # ══ ROUND 2 OF THE REVIEW. A bare nine-digit value after a cell ending in
    #    "EIN" was CLAIMED by the EIN rule — kept in clear and hidden from the
    #    guard — though the box saying EIN was the UNCHECKED one.
    _box = lambda t, x, tu, on: {"t": t, "ft": "/Btn", "tu": tu, "on": "/1",  # noqa: E731
                                 "v": "/1" if on else "/Off", "as_": "/1" if on else "/Off",
                                 "rect": (x, 500, x + 8, 514)}
    _digits = lambda vals, y=500, x0=200: [  # noqa: E731
        {"t": f"d{y}_{i}", "v": v, "rect": (x0 + 30 * i, y, x0 + 25 + 30 * i, y + 14)}
        for i, v in enumerate(vals)]
    for label, fields, secret in (
        ("an unchecked EIN box before nine single-digit boxes",
         [_box("k1", 60, "SSN", True), _box("k2", 120, "EIN", False), *_digits("123456789")],
         "123456789"),
        ("'Employer identification number' before a 5 · 4 split",
         [_box("k3", 60, "Employer identification number", False), *_digits(("12345", "6789"))],
         "123456789"),
        ("an unchecked EIN box before ONE nine-digit field",
         [_box("k4", 60, "EIN", False), *_digits(("123456789",))], "123456789"),
        ("an EIN box ending the row ABOVE a nine-digit field",
         [_box("k5", 400, "EIN", False), *_digits(("123456789",), y=470, x0=60)], "123456789"),
    ):
        (tmp / "claim.pdf").write_bytes(_fillable_pdf(_filler, fields))
        rc, report = _run_quiet(tmp / "claim.pdf", tmp / "r7.txt")
        got = (tmp / "r7.txt").read_text() if rc == 0 else ""
        (tmp / "r7.txt").unlink(missing_ok=True)
        if secret in got or "1 EIN" in report:
            FAILURES.append(f"FIELDS · R7 LEAK · {label}: the EIN rule claimed a field value")

    # …and camelCase names label a field as well as underscored ones do.
    (tmp / "camel.pdf").write_bytes(_fillable_pdf(_filler, [
        {"t": "SpouseDOB", "v": "04/17/1982", "rect": (59, 660, 300, 674)},
        {"t": "BankAcctNo", "v": "12345678", "rect": (59, 630, 300, 644)}]))
    rc, report = _run_quiet(tmp / "camel.pdf", tmp / "r8.txt")
    got = (tmp / "r8.txt").read_text() if rc == 0 else ""
    if "04/17/1982" in got or "12345678" in got:
        FAILURES.append("FIELDS · R8 LEAK · a camelCase field name did not label its value")

    # …and the standing limit — unlabelled fields are masked by shape alone — is
    #    SAID whenever field values were read, because on an IRS form it is every field.
    rc, report = _run_quiet(tmp / "w9.pdf", tmp / "r9.txt")
    if "masked by their SHAPE, or by the field's own tooltip or name" not in report:
        FAILURES.append("FIELDS · the unlabelled-field limit was not stated when values were read")
    rc, report = _run_quiet(tmp / "plain.pdf", tmp / "r10.txt")
    if "masked by their SHAPE" in report:
        FAILURES.append("FIELDS · the unlabelled-field note printed on a PDF with no fields")

if FAILURES:
    print(f"FAILED — {len(FAILURES)} problem(s):")
    for f in FAILURES:
        print("  " + f)
    sys.exit(1)

print("PASS — all cases redacted or preserved as intended.")
