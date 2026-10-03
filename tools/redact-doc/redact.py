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
    5  the extraction is mostly unreadable — a font naming glyphs by their slot
       in a subset, or a text layer with too small an alphabet to be text.
       Nothing was written, and a "0 masked" report from such a file would have
       meant BLIND rather than clean

What is masked, and why (JK Accounting Group, Lilian 2026-08-11):
    SSN / ITIN · bank routing and account numbers (incl. IBAN-style) ·
    dates of birth · driver's licence and other government-issued ID numbers ·
    the street line of an address (city and state are kept).

    …and [GLYPH] — any leftover `/token` carrying a digit. Those come from a
    font with no usable Unicode map, and they are unreadable BY DEFINITION: no
    pattern in this file can tell whether one hides an SSN. Masking them is the
    only treatment that does not depend on guessing the font's naming scheme.
    The count is reported, because an absence near a [GLYPH] proves nothing.

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

FILLABLE FORM FIELDS (AcroForm) are read too, and go through the SAME masking
and the SAME refuse-to-write guard as page text. What someone types into a
fillable PDF — a W-9 filled in a viewer — is not page text, and
`extract_text()` never returns it: before 2026-09-29 a filled W-9 came out
identical to a blank one, with "0 SSN · 0 EIN" and exit 0. The values are
appended after the pages, in reading order, and the report says how many were
read, so a blind read shows as "0 of N" instead of passing for a clean one.
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


# ── Glyph-name recovery. A PDF whose font carries no usable ToUnicode CMap makes
#    pypdf fall back to emitting the font's own GLYPH NAMES instead of characters
#    — `/uni0031` where the page shows `1`. The page is perfectly legible to a
#    human and completely unreadable to every pattern in this file.
#
#    This is worse than a scan, and that is the whole reason it is handled here.
#    A scan yields nothing and trips the NO TEXT LAYER gate loudly. A glyph-name
#    dump yields HUGE volume — half a million characters of `/uniXXXX` — so it
#    sails through every volume-based check, redacts to "0 masked", and writes a
#    file whose emptiness reads as a clean bill of health. Verified 2026-08-14 on
#    a real filed 1120-S: 18 pages, 500,712 chars, 61,131 glyph tokens, and the
#    tool reported zero of everything including zero EINs.
#
#    `/uniXXXX` is Adobe's glyph-naming convention and XXXX is the Unicode code
#    point in hex, so decoding it is a faithful recovery, not a guess.
#
# ⚠️ DECODING IS ONLY HALF THE JOB, and the half that is easy to stop at.
#    `/uniXXXX` is one convention among several. pypdf writes the RAW glyph name
#    for any name it cannot map, and subset fonts routinely use `/g11`, `/cid49`,
#    `/G34` or `/index0031` — none of which name a code point, so none can be
#    decoded. Those are strictly worse than the case above, because a document
#    that is PARTLY decodable ends up with a rich-looking alphabet that disarms
#    the diversity gate below while thousands of undecodable tokens ride into the
#    written file. The [GLYPH] masking below is what handles that, and it is
#    the primary treatment — the diversity gate is the backstop, not the other
#    way round. _(Found by the independent review of PR #219, which built the
#    mixed document and walked it straight through the first version of this
#    fix, then defeated the next two versions as well.)_

# Adobe allows `uni` followed by SEVERAL 4-hex groups in one name. Matching
# `{4,6}` greedily eats the first group plus two digits of the second and leaves
# the remainder welded to a decoded character, so the groups are matched
# explicitly and decoded one at a time.
GLYPH_NAME = re.compile(r"/uni((?:[0-9A-Fa-f]{4})+)(?![0-9A-Fa-f])|/u([0-9A-Fa-f]{4,6})(?![0-9A-Fa-f])")

# ── Glyph names that CANNOT be decoded: MASK them, do not try to classify them.
#
# ⚠️ THREE ATTEMPTS FAILED HERE BEFORE THIS ONE. Read this before "improving" it.
#
#    Attempt 1 enumerated the conventions it knew — `/uni`, `/g`, `/cid`,
#    `/index`, `/glyph`. An independent review defeated it with `/C49`,
#    `/char49`, `/gid49`, `/id49`, `/x49`, `/T49`, `/gAF`. **pypdf writes
#    whatever the FONT calls the glyph**, so a list is only ever a list of the
#    attacks someone already thought of.
#
#    Attempt 2 tested the STRUCTURE — adjacent tokens, glyph-shaped. That failed
#    for a subtler reason: `extraction_mode="layout"` **inserts spaces between
#    glyphs positioned more than ~20-30pt apart**, which is exactly how a form
#    lays out its boxes. So the filled-in fields of a real return arrive already
#    separated, the adjacency test sees nothing, and an SSN is written out.
#
#    And the reason not to loosen the run to allow whitespace: `/Stmt1 /Stmt2
#    /Stmt3` in a real return and `/C49 /C50 /C51` in a broken one are
#    **structurally identical**. Slash-density and repeated-prefix counting were
#    both measured and both overlap between attacks and legitimate text. At nine
#    tokens — one SSN — the two populations are not separable.
#
# So stop classifying the document. **A leftover `/token` carrying a digit is,
# by definition, text that no redaction pattern in this file can read** — which
# is the exact condition this tool exists to refuse to pass on. Mask it like any
# other unreadable thing and report the count. A false positive then costs a
# mangled file path instead of a refused client return; no future encoding
# matters; and the tolerance question disappears, because there is no budget.
#
# The digit requirement is what keeps ordinary prose intact: `and/or`, `N/A`,
# `Sch A/B/C/D/E/F` and `12/31/2024` carry no slash-token with a digit in it.
# `[^\W\d_]` is "any Unicode LETTER" — not `[A-Za-z]`. A subset font may name its
# glyphs in any script, and pypdf decodes name objects through utf-8/gbk/latin1,
# so `/é49`, `/д49` and `/字49` are all reachable. With an ASCII-only class those
# pass through untouched and the code points sit in the file in plain decimal —
# no key needed to read them back.
GLYPH_TOKEN = re.compile(r"/[^\W\d_][\w.]{0,40}")

# ⚠️ And the digits TOUCHING a masked token. `GLYPH_TOKEN` stops at `-`, so a
# broken-font label set flush against a good-font value — an ordinary form line —
# used to have its front eaten and its tail published:
#
#     /C83/C83/C78123-45-6789 Smith  →  [GLYPH][GLYPH][GLYPH]-45-6789 Smith
#
# That is the last four digits beside an unmasked name: precisely the
# identity-verification pair this file's own docstring gives as the reason tags
# replaced last-four masking. A digit run touching a [GLYPH] is a fragment of
# something the tool could not read, so it is unreadable too and gets masked.
# ⚠️ NOT length-bounded, and an earlier version's bound was worse than useless.
# It looked like protection against swallowing a numeric table, but the loop
# below re-runs to a fixed point, so a bound only changed how many passes it
# took to eat the same characters — while implying a limit that did not exist.
# What actually stops the run is a character outside the class: a COMMA ends it,
# so a formatted table (`6,753.00 788.00`) is safe by construction. An
# unformatted run adjacent to a glyph is over-masked, which is the correct way
# to fail.
#
# ⚠️ THE GAP BOUND IS 20, NOT 2, AND THE SLASH IS IN THE CLASS. Both were found
#    the same way: `extraction_mode="layout"` PADS between form boxes — 4 to 20+
#    spaces at ordinary column pitches — so a boxed SSN arrives as
#    `[GLYPH]   45   6789`, and a two-character gap reached none of it. Boxed
#    fields are padded BY CONSTRUCTION; the tight-set case this rule was written
#    for is the rarer one. And `/` is the US date separator, so without it a
#    date of birth published its day and year.
#    ⓘ The bound of 20 is calibrated to real form geometry, not picked. Boxed
#    SSN fields were run end to end at column pitches of 30, 45, 60, 90 and
#    120pt: no digits survive at any of them. Only at 160pt — 2.2 inches between
#    groups, wider than the whole field on a real form — does a group get
#    through. **Do not shrink it back.**
GLYPH_ADJACENT = re.compile(
    r"\[GLYPH\][-./\s]{0,20}\d[\d\s./\-]*"
    r"|\d[\d\s./\-]*[-./\s]{0,20}(?=\[GLYPH\])"
)

# ⚠️ And the rest of a thousands-separated figure. The run above stops at a
# comma, which keeps a formatted table alive — but it stops INSIDE the adjacent
# number, and what it leaves is not visibly a fragment:
#
#     /Form4562  1,204,556 carryforward   →   [GLYPH],204,556 carryforward
#
# That reads as a number. Everywhere else in this tool over-masking is safe
# precisely BECAUSE the reader can see something was removed; `[GLYPH],392`
# reads as 392, and losing a leading `1,` is a factor-of-1000 error that will
# never send anyone back to the PDF. This output feeds return preparation, where
# figures are read off it and corroborated arithmetically. **A removed figure
# fails loudly; a wrong one does not.** So the adjacent figure goes whole.
GLYPH_COMMA_TAIL = re.compile(r"\[GLYPH\](?:,\d{3})+(?:\.\d+)?")

# The one case still worth REFUSING rather than masking: a document that is
# mostly wreckage. Masking 61,131 tokens produces a file that is technically
# safe and analytically worthless, and the honest answer there is "ask for a
# proper PDF", not a page of [GLYPH]. Unambiguous and loud, unlike any of the
# thresholds this replaced.
GLYPH_MASS_LIMIT = 100

# Lone surrogates are not encodable as UTF-8. `chr()` will happily produce one
# from `/uniD800`, and the failure would then land on dst.write_text() AFTER the
# file was opened — breaking the "nothing was written" contract with a traceback.
SURROGATES = range(0xD800, 0xE000)


def decode_glyph_names(text: str) -> tuple[str, int]:
    """Turn `/uniXXXX` glyph names back into the characters they name.

    Returns the decoded text and how many tokens were decoded, so the caller can
    say the extraction went through this path rather than pretending it didn't.
    """
    n = 0

    def sub(m: re.Match) -> str:
        nonlocal n
        body = m.group(1) or m.group(2)
        groups = (
            [body[i : i + 4] for i in range(0, len(body), 4)] if m.group(1) else [body]
        )
        out = []
        for g in groups:
            try:
                code = int(g, 16)
            except ValueError:
                return m.group(0)
            if code in SURROGATES or code > 0x10FFFF:
                return m.group(0)
            out.append(chr(code))
        n += len(groups)
        return "".join(out)

    return GLYPH_NAME.sub(sub, text), n


# ── The intelligibility gate. Every check in this tool used to measure the
#    VOLUME of extracted text; none measured whether it was text at all.
#
#    Natural English — even the number-dense English of a tax return — draws on
#    a wide alphabet: upper and lower case, punctuation, digits. A failed
#    character-level extraction draws on a tiny one. The real 1120-S above used
#    27 distinct characters across 500,712, because it was four token shapes
#    repeated. A page of ordinary prose passes 60 easily.
#
#    So: refuse the file rather than write a misleadingly empty one.
#
#    The gate is LENGTH-AWARE on purpose. A 200-character document may honestly
#    use a small alphabet and proves nothing either way; a 70,000-character one
#    using 27 characters is broken beyond argument. Applying the rule only above
#    a floor keeps it from firing on the short documents where it cannot know —
#    those are already covered by the per-page "barely extracted" warning.
#
#    CALIBRATION, because the first version got this wrong in the safe-looking
#    direction. Two measured points bracket it: the real broken 1120-S came in at
#    **27**, and a realistic ALL-CAPS tax-package extraction — a perfectly good
#    document — came in at **39**. A threshold of 40 therefore REFUSED a real
#    return by one character, and told the operator to go and ask for a different
#    PDF. 30 sits clear of both. _(Independent review of PR #219.)_
#
#    And note what this gate is now FOR: it is the backstop for encoding failures
#    that leave no glyph names behind. The direct detector for the glyph case is
#    the [GLYPH] masking above, which does not care about alphabet size at all.
MIN_DISTINCT_CHARS = 30
DIVERSITY_MIN_LEN = 2_000


def looks_like_text(text: str) -> tuple[bool, int]:
    """Is this natural text, or the wreckage of a failed extraction?"""
    distinct = len(set(text))
    if len(text) < DIVERSITY_MIN_LEN:
        return True, distinct
    return distinct >= MIN_DISTINCT_CHARS, distinct

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

# The same shape with ANY run of separators ON ONE LINE. A form's boxes can
# extract with several spaces between them, and a column of figures can collide
# with it, so this is too loose to mask on blindly — but see SSN_LABELLED and
# GUARD below.
#
# 🛑 The separator class is `[-\t .]`, NOT `[-\s.]`, and the difference is the
# whole of a false alarm this cost an afternoon (2026-09-24, Melnyk's finished
# 1040). With `\s` the run may span a NEWLINE, and then the three groups are on
# two different visual lines of a layout extraction — which makes them, BY
# CONSTRUCTION, different values. What triggered it was Schedule 8812 Part II-B:
# an amount ending one line, then the next line's number gutter and the literal
# "1040" of "1040 and 1040-SR filers". Shape `NNN\n NN       NNNN`. Nothing was
# wrong with the document and nothing was wrong with refusing — the pattern was.
# ⚠️ A real SSN still cannot slip through here: on a layout extraction it is one
# field on one line, wide spacing included, and that is exactly what this still
# catches. Everything the wider pattern below matches and this one does not is
# MASKED and REPORTED, so the narrowing is never silent.
SSN_LOOSE = re.compile(r"(?<!\d)\d{3}[-\t .]{1,10}\d{2}[-\t .]{1,10}\d{4}(?!\d)")

# The same shape with ANY whitespace between the groups, not just a space or a
# tab. 🛑 THE DIFFERENCE BETWEEN THE TWO PATTERNS IS THE SET THAT GETS MASKED —
# and it is wider than "broken by a newline", which is what an earlier version
# tested for. A run separated by \r, \v, \f, U+0085, U+2028, U+2029 or
# \x1c-\x1f fell between the two and reached disk. Never compare against \n;
# compare against SSN_LOOSE itself.
SSN_CROSS_LINE = re.compile(
    r"(?<!\d)\d{3}[-\s.]{1,10}\d{2}[-\s.]{1,10}\d{4}(?!\d)")

# ⓘ HISTORY, kept because three attempts were made and two of them leaked.
#    There is no label vocabulary here any more and there is no geometric test.
#    A cross-line run is simply MASKED. What was tried and why it failed:
#      1. narrow the guard's separators to one line - silently PASSED a split
#         SSN, which is how a 1040 prints a label above its value;
#      2. refuse a cross-line run when an SSN/ITIN/TIN label sits within 160
#         characters before it - measured on this firm's own 29-page 1040,
#         32 of its 33 SSN sites have their nearest label FURTHER away than
#         that and 14 have none within 400, because continuation-page headers
#         print the number with no caption at all;
#      3. add "a wide column gap after the break" as evidence of a table
#         gutter - defeated by `123-45-\n     6789` (a trailing hyphen cannot
#         be a gutter), by a three-line split where a wide SECOND gap excused
#         a narrow first one, and by any unlabelled SSN padded with 5 spaces.
#    The lesson is in the shape of the problem, not in the patterns: the two
#    cases are not distinguishable from the text alone, so the tool stops
#    guessing and pays the over-masking cost instead.

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
# ⚠️ 2026-10-03: the street-NAME token used to be [A-Z][A-Za-z0-9'.-]*, which
# requires the token to START with a letter — so every NUMBERED street leaked:
# the "<n> SW 5th St" / "<n> NE 2nd Ave" shape, which in South Florida is most
# addresses. Found when a client's home address came through this tool in clear
# while the firm's own address, on the same page, was masked. The directional
# prefix had the same shape of bug: [NSEW] matches "N" but not "SW" or "NE".
# (Examples are deliberately written without a house number — a real one would
#  put the very thing this rule masks into the repo. See test_redact.py F4.)
STREET = re.compile(
    r"(?<![\d,.])\d{1,6}[^\S\n]+"
    r"(?:[NSEW]{1,2}\.?[^\S\n]+)?"
    r"(?:(?:[A-Z][A-Za-z0-9'.-]*|\d{1,4}(?:ST|ND|RD|TH))[^\S\n]+){0,4}"
    r"(?:STREET|ST|AVENUE|AVE|ROAD|RD|DRIVE|DR|LANE|LN|BOULEVARD|BLVD|COURT|CT|"
    r"CIRCLE|CIR|PLACE|PL|WAY|TERRACE|TER|PARKWAY|PKWY|HIGHWAY|HWY|TRAIL|TRL)"
    r"\b\.?"
    r"(?:[^\S\n]*,?[^\S\n]*(?:APT|APARTMENT|UNIT|STE|SUITE|#)\.?[^\S\n]*[A-Z0-9-]{1,8})?",
    re.IGNORECASE,
)


# A PREPARER TAX IDENTIFICATION NUMBER. The firm's identity block names "PTIN,
# EFIN, signature PIN", and a return prints all three - a 2026-10-03 read put the
# firm's own PTIN into a session in clear because nothing here looked for it.
# Only the PTIN is maskable BY SHAPE: it is P + 8 digits and nothing else on a
# return looks like that. An EFIN is six bare digits and a signature PIN is five,
# so neither can be masked without eating ordinary figures - see FOLLOW-UPS.
PTIN = re.compile(r"\bP\d{8}\b")


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
                    "account": 0, "street": 0, "ein_kept": 0, "glyph": 0,
                    "ptin": 0,
                    "leaks": [], "cross_line": []}

    # Undecodable glyph names go FIRST, before any other rule can see them. They
    # are unreadable by construction, so they are masked rather than judged —
    # see the long note at GLYPH_TOKEN for the three approaches this replaces.
    def _mask_glyph(m: re.Match) -> str:
        if not any(c.isdigit() for c in m.group(0)):
            return m.group(0)  # `/or`, `/A`, `/Schedule` — ordinary text
        counts["glyph"] += 1
        return "[GLYPH]"

    text = GLYPH_TOKEN.sub(_mask_glyph, text)

    # Then the digits welded to those tokens — see GLYPH_ADJACENT.
    #
    # ⓘ ONE PASS IS ENOUGH, and that is a property of the pattern, not luck. Each
    #   alternative extends maximally, and a substitution only shortens the text
    #   — it can never bring distant digits into contact across a character that
    #   is outside the class, because that character stays where it is. An
    #   earlier version looped "just in case"; no input could distinguish it, and
    #   an unpinned branch that no test can reach is a liability, not insurance.
    text, n = GLYPH_ADJACENT.subn("[GLYPH]", text)
    counts["glyph"] += n

    # …and the thousands-separated remainder of whatever it stopped inside, so a
    # masked figure never comes back as a smaller well-formed one.
    text, n = GLYPH_COMMA_TAIL.subn("[GLYPH]", text)
    counts["glyph"] += n

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

    def _ptin(m: re.Match) -> str:
        counts["ptin"] += 1
        return "[PTIN-REDACTED]"

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
    text = PTIN.sub(_ptin, text)
    text = SSN_LABELLED.sub(_ssn_labelled, text)
    text = SSN.sub(_ssn, text)
    text = LONG_DIGITS.sub(_long, text)

    # ⓘ The SSN_LOOSE half is the live one — it hunts the wide-spaced shape the
    #   redactor masks only when labelled. The LONG_DIGITS half is **unreachable
    #   by construction**: it runs immediately after LONG_DIGITS.sub above, and
    #   no substitution in between can create a fresh 9+ digit run — every mask
    #   this file emits ([GLYPH], [SSN-n], [ACCT-n], [STREET-REDACTED]) contains
    #   no digits and none of them joins two runs. It is belt-and-braces, kept
    #   because it costs nothing and the ordering above has been got wrong once
    #   already. **Its silence is not evidence of anything** — do not read a
    #   clean guard as confirmation that the digit rules ran.
    counts["leaks"] = SSN_LOOSE.findall(text) + LONG_DIGITS.findall(text)

    # Same shape, broken by a newline. USUALLY a table gutter - but not always,
    # and the difference is whether the page SAYS what the digits are.
    #
    # 🛑 The narrowing that let these through was nearly a leak. On a layout
    #    extraction a label routinely sits on its OWN line above its value:
    #        Your social security number
    #        123 45
    #           6789
    #    SSN_LABELLED cannot reach it (its gap is `[^\n\d]{0,40}`, which stops at
    #    a newline) and SSN allows only one separator per gap. Before the
    #    narrowing, SSN_LOOSE caught it and the job REFUSED to write.
    #
    # 🛑 TWO LATER ATTEMPTS TO TELL THE TWO CASES APART BOTH LEAKED, and the
    #    second one is why this rule no longer tries.
    #      · gate on a label within 160 characters before the run - defeated:
    #        of the 33 SSN sites in this firm's own 29-page 1040, 32 have their
    #        nearest label further away than that and 14 have none within 400.
    #        Continuation-page headers print the number with no caption at all.
    #      · add "a wide column gap after the break" as positive evidence of a
    #        gutter - defeated by `123-45-\n     6789` (a trailing hyphen cannot
    #        be a gutter), by a three-line split where a wide SECOND gap excuses
    #        a narrow first one, and by any unlabelled SSN padded with 5 spaces.
    #
    # ✅ SO THE RUN IS MASKED, NOT PASSED AND NOT REFUSED. Masking a column of
    #    figures costs three numbers out of a redacted working copy, which the
    #    report names and a human can check against the PDF in seconds. Passing
    #    an SSN costs an SSN. This file's own doctrine settles which way to err:
    #    "A false alarm here is cheap ... A miss is not recoverable."
    #    The job still completes, so a legitimate gutter never blocks the work.
    for m in SSN_CROSS_LINE.finditer(text):
        run = m.group(0)
        # 🛑 THE TEST IS "SSN_LOOSE DID NOT ALREADY SEE THIS", NOT "there is a
        #    newline in it". Those are not the same set, and the difference was
        #    a leak: SSN_LOOSE's separators are `[-\t .]` while this pattern's
        #    are `[-\s.]`, so a run broken by \r, \v, \f, U+0085, U+2028,
        #    U+2029 or \x1c-\x1f matched HERE (keeping it out of the guard) and
        #    failed a `"\n" in run` test (keeping it out of the mask) - and nine
        #    digits went to disk with exit 0 and "0 masked". A font's ToUnicode
        #    map emitting one of those is exactly what normalise() exists for.
        if not SSN_LOOSE.fullmatch(run):
            counts["cross_line"].append(run)
    if counts["cross_line"]:
        def _cross(m: re.Match) -> str:
            run = m.group(0)
            if SSN_LOOSE.fullmatch(run):
                return run                      # one-line: the digit rules had it
            return f"[{tag_ssn(re.sub(r'[^0-9]+', ' ', run))}]"
        text = SSN_CROSS_LINE.sub(_cross, text)

    text = re.sub(r"\x00EIN(\d+)\x00", lambda m: eins[int(m.group(1))], text)
    return text, counts


# ── Fillable form fields (AcroForm). What a person types into a fillable PDF
#    lives in the field dictionaries (`/V`), OUTSIDE the page content stream —
#    and `extract_text()` reads only the content stream. So a filled form
#    extracted as its own blank template, and the redactor had nothing to mask.
#    Found 2026-09-29 on two filled W-9s from a client's Double folder: both
#    exited 0, reported "0 SSN · 0 EIN", and their text was identical, character
#    for character, to the blank W-9 on irs.gov. The report gave no hint the
#    read was blind.
#
#    The values are appended to the raw text BEFORE redact() runs, so every
#    pattern and the final guard see them exactly as they see page text. They
#    are laid out in READING ORDER — per page, top to bottom, one line per row
#    of fields, left to right — because that is the only order in which the
#    patterns' own assumptions hold (a value's neighbours are the ones beside
#    it on the page).
#
# ⚠️ VALUES ONLY — NO LABELS BETWEEN THEM, and that is deliberate. A field's
#    printed label is already in the page text above. Interleaving labels here
#    would put LETTERS between the segments of a split identifier, and letters
#    are what stop SSN_CROSS_LINE from seeing `123 / 45 / 6789` as one number.
#    The one exception is a checkbox's tooltip (`/TU`): a box carries no digits
#    of its own, and "[X]" alone says nothing.

# 🛑 THE SPLIT TIN — the reason this cannot be "just append /V". A form does not
#    hold an SSN in one field. The IRS W-9 (Rev. March 2024) holds it in THREE
#    comb fields of 3, 2 and 4 digits on one row, and the EIN in TWO of 2 and 7.
#    Appended naively those become `123   45   6789` — which SSN (one separator
#    per gap) does not mask and SSN_LOOSE then refuses, so every filled W-9
#    would exit 4 — or three separate lines that nothing recognises at all.
#
#    So on each row, EVERY run of adjacent digit-only fields whose digits total
#    exactly NINE is found — nine is an SSN, an ITIN and an EIN however a form
#    cuts its boxes — and every field inside ANY such run is masked. Runs that
#    overlap are masked as ONE span, written as bare digits for LONG_DIGITS. A
#    run that overlaps no other keeps its shape: 3·2·4 is written `NNN-NN-NNNN`
#    (masked, counted as SSN); 2·7 is written `NN-NNNNNNN` (KEPT and counted as
#    EIN, per Lilian's ruling) — but only with evidence that the boxes are a
#    TIN: comb boxes whose MaxLen is each piece's length (how the W-9 builds
#    them), or a tooltip or name saying EIN/TIN. It is the one join that writes
#    a value unmasked, so it is the one that has to be earned.
#
# ⚠️ WHY "EVERY RUN", NOT "THE FIRST RUN". The first version joined greedily from
#    the left, and that was a leak: `2024 | 123 | 45 | 6789` joined
#    `2024 · 123 · 45` (also nine digits) and wrote `6789` in clear with the
#    guard silent — where WITHOUT any join the guard would have refused. An
#    identifier made of whole fields IS one of these runs, so a field outside
#    every run cannot be part of one, and a field inside any run is never
#    written. (Found by the independent review of PR #485.)
# ⚠️ ONLY EXACTLY NINE. Dollars and cents in two boxes (`1500` · `00`) must stay
#    two values: welded they read as 150000, and a wrong figure never sends
#    anyone back to the PDF. A masked span keeps its column count with
#    ⟨joined⟩ placeholders, so the value after it is not read as the wrong column.
TIN_DIGITS = 9
SSN_SHAPE, EIN_SHAPE = (3, 2, 4), (2, 7)
JOINED = "⟨joined⟩"

# 🛑 AND NO BARE NINE-DIGIT FIELD VALUE MAY FOLLOW WHITESPACE. The EIN rules
#    keep nine digits that come right after "EIN", "FEIN" or "Employer
#    identification number" — and a field row can put exactly that before a
#    value that is NOT an EIN: an UNCHECKED "[ ] EIN" box beside the number,
#    or at the end of the row above. The digits were parked as an EIN, kept in
#    clear, and hidden from the guard. (Found in round 2 of the review of PR
#    #485.) So a digit-only field value of nine or more digits is written as
#    `#123456789`: LONG_DIGITS still masks it, no EIN rule can claim it. The
#    only EIN a field can yield is the evidenced 2·7 join below.
BARE_MARK = "#"

# /Ff bits (PDF 32000-1, tables 226 and 228). Bit positions are 1-based.
FF_RADIO = 1 << 15
FF_PUSHBUTTON = 1 << 16
FF_COMB = 1 << 24

# Evidence, from a field's own tooltip or name, that its boxes hold an EIN/TIN.
TIN_LABEL = re.compile(
    r"(?<![A-Za-z])(?:F?EIN|TIN)(?![A-Za-z])|employer\s*id|taxpayer\s*id", re.IGNORECASE)

# ── Masks that need a LABEL. On a page, DOB_CONTEXT, LICENCE_CONTEXT and
#    ACCOUNT_CONTEXT read the words printed beside a value. A field value is
#    written alone (see above), so those rules can never fire on it — the review
#    of PR #485 put `04/17/1982` in a field whose tooltip said "Date of birth",
#    and it came out verbatim. So a field whose OWN tooltip or name says what it
#    is gets masked here, whole, and counted with the page's counts. A value with
#    no digit (`N/A`, `None`) is left alone: none of these identifiers lacks one.
LABEL_MASKS = (
    ("dob", "[DOB-REDACTED]", re.compile(
        r"date\s*of\s*birth|birth\s*date|(?<![A-Za-z])D\.?O\.?B\.?(?![A-Za-z])", re.IGNORECASE)),
    ("licence", "[ID-REDACTED]", re.compile(
        r"driver'?s?\s*licen[cs]e|(?<![A-Za-z])DL(?![A-Za-z])|passport|"
        r"state\s*(?:issued\s*)?id(?:entification)?(?![A-Za-z])|(?<![A-Za-z])visa(?![A-Za-z])",
        re.IGNORECASE)),
    ("account", "[ACCT-REDACTED]", re.compile(
        r"account\s*(?:no|num|number|#)|(?<![A-Za-z])acct(?![A-Za-z])|routing|"
        r"(?<![A-Za-z])(?:IBAN|ABA)(?![A-Za-z])|card\s*(?:no|num|number)", re.IGNORECASE)),
)

# A field tree is a graph from an untrusted file. Bound every walk.
MAX_TREE_DEPTH = 64
MAX_FIELD_NODES = 20_000

_DIGITS_ONLY = re.compile(r"[0-9]+")

# An IRS form says so on its first page: "Department of the Treasury Internal
# Revenue Service", beside "Form W-9" / "Form 1040" / "Form SS-4".
IRS_AGENCY = re.compile(r"Internal\s+Revenue\s+Service", re.IGNORECASE)
IRS_FORM_ID = re.compile(r"\bForm\s+(W-\d+[A-Z]*(?:-[A-Z]+)?|SS-\d+|\d{3,4}(?:-[A-Z]{1,3})?)\b")


def irs_form(first_page: str) -> str | None:
    """Which IRS form this is — "W-9", "1040" — or None. Page 1 only."""
    text = normalise(first_page)
    if not IRS_AGENCY.search(text):
        return None
    m = IRS_FORM_ID.search(text)
    return m.group(1) if m else "unidentified"


def _obj(x):
    """Resolve an indirect reference; pass anything else through."""
    return x.get_object() if hasattr(x, "get_object") else x


def _key(node) -> tuple | int:
    ref = getattr(node, "indirect_reference", None)
    return (ref.idnum, ref.generation) if ref is not None else id(node)


def _lineage(node):
    """The node, then its /Parent chain — bounded, because a cycle is possible."""
    seen = set()
    while node is not None and len(seen) < MAX_TREE_DEPTH and _key(node) not in seen:
        seen.add(_key(node))
        yield node
        node = _obj(node.get("/Parent"))


def _inherited(node, name: str):
    for n in _lineage(node):
        if name in n:
            return _obj(n[name])
    return None


def _terminal(widget):
    """The FIELD a widget belongs to — itself when merged (it has /T), else its parent."""
    if "/T" in widget or widget.get("/Parent") is None:
        return widget
    return _obj(widget["/Parent"])


def _field_name(widget) -> str:
    """The fully-qualified field name — every /T up the /Parent chain."""
    return ".".join(reversed([str(n["/T"]) for n in _lineage(widget) if "/T" in n]))


def _as_text(v) -> str:
    """A field value as plain text. Never a name object's slash — see _render."""
    from pypdf.generic import ArrayObject, ByteStringObject, NameObject, StreamObject

    v = _obj(v)
    if v is None:
        return ""
    if isinstance(v, NameObject):
        return str(v)[1:]
    if isinstance(v, ArrayObject):
        return ", ".join(t for t in (_as_text(x) for x in v) if t)
    if isinstance(v, StreamObject):  # a rich-text value
        return v.get_data().decode("utf-8", "replace")
    if isinstance(v, ByteStringObject):
        return bytes(v).decode("latin-1")
    return str(v)


def _on_states(widget) -> set[str]:
    ap = _obj(widget.get("/AP"))
    states: set[str] = set()
    if ap is not None:
        for kind in ("/N", "/D"):
            d = _obj(ap.get(kind))
            if hasattr(d, "keys"):
                states.update(str(k) for k in d.keys())
    states.discard("/Off")
    return states


def _render(widget) -> tuple[str | None, bool | None, bool, str | None]:
    """(text to emit, carries a value?, TIN evidence?, label mask applied) for
    one widget. "carries a value?" is None for a push button, which is part of
    the form's machinery and holds no data.

    A checkbox's value is a NAME — `/1`, `/Yes` — and a slash-name carrying a
    digit is exactly what GLYPH_TOKEN masks as unreadable. So a box is written
    as [X] or [ ], never as its value.
    """
    ft = _inherited(widget, "/FT")
    flags = int(_inherited(widget, "/Ff") or 0)
    value = _inherited(widget, "/V")

    if ft == "/Btn":
        if flags & FF_PUSHBUTTON:
            return None, None, False, None  # a button, not data — not a field
        on, state = _on_states(widget), _obj(widget.get("/AS"))
        if on:
            # /V decides when present (a radio group shares one /V across its
            # kids); a widget whose own on-state is not /V is the unchosen kid.
            checked = str(value) in on if value is not None else (
                state is not None and str(state) in on)
        else:
            chosen = state if state is not None else value
            checked = chosen is not None and str(chosen) != "/Off"
        label = _clean(_as_text(_inherited(widget, "/TU")))
        box = "[X]" if checked else "[ ]"
        return (f"{box} {label}" if label else box), checked, False, None

    if ft == "/Sig":
        if value is None:
            return None, False, False, None
        return "[digital signature]", True, False, None

    text = _clean(_as_text(value).replace("\r\n", "\n").replace("\r", "\n"))
    if not text:
        return None, False, False, None
    label = _words(f"{_clean(_as_text(_inherited(widget, '/TU')))} {_field_name(widget)}")
    if any(c.isdigit() for c in text):
        for kind, mask, pattern in LABEL_MASKS:
            if pattern.search(label):
                return mask, True, False, kind
    maxlen = _inherited(widget, "/MaxLen")
    comb = bool(flags & FF_COMB) and maxlen is not None and int(maxlen) == len(text)
    return text, True, comb or bool(TIN_LABEL.search(label)), None


def _words(label: str) -> str:
    """`SpouseDOB` → `Spouse DOB`, `bank_acct_no` → `bank acct no`: field NAMES
    are written as identifiers, and the label patterns need word boundaries."""
    label = re.sub(r"(?<=[a-z])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])", " ", label)
    return re.sub(r"[_.\[\]0-9]+", " ", label)


def _clean(text: str) -> str:
    # NUL is stripped because redact() parks EINs behind `\x00EIN<n>\x00`
    # placeholders — a value must never be able to forge one.
    return normalise(text).replace("\x00", "").strip()


def _join_row(cells: list[tuple[str, bool]]) -> str:
    """One row of (value, TIN evidence), with split TINs found and joined.

    See SSN_SHAPE for why every nine-digit run is found, not just the first.
    """
    texts = [t for t, _ in cells]
    digit = [bool(_DIGITS_ONLY.fullmatch(t)) for t in texts]
    runs = []  # every [a, b) of adjacent digit-only fields totalling exactly nine digits
    for a in range(len(texts)):
        total = 0
        for b in range(a, len(texts)):
            if not digit[b]:
                break
            total += len(texts[b])
            if total >= TIN_DIGITS:
                if total == TIN_DIGITS and b > a:
                    runs.append((a, b + 1))
                break
    spans: list[list[int]] = []  # [start, end, runs merged into it]
    for a, b in runs:  # generated in order of a, so one pass merges overlaps
        if spans and a < spans[-1][1]:
            spans[-1][1] = max(spans[-1][1], b)
            spans[-1][2] += 1
        else:
            spans.append([a, b, 1])
    out, i = [], 0
    for a, b, merged in spans:
        out.extend(texts[i:a])
        seg = texts[a:b]
        shape = tuple(len(t) for t in seg)
        if merged == 1 and (shape == SSN_SHAPE
                            or (shape == EIN_SHAPE and all(ok for _, ok in cells[a:b]))):
            out.append("-".join(seg))
        else:
            out.append("".join(seg))  # nine+ bare digits: LONG_DIGITS masks it whole
            out.extend([JOINED] * (b - a - 1))
        i = b
    out.extend(texts[i:])
    # Three spaces, like a layout extraction's gap between boxes.
    return "   ".join(_unclaimable(t) for t in out)


def _unclaimable(value: str) -> str:
    """Mark a bare 9+ digit value so no EIN rule can claim it — see BARE_MARK."""
    if _DIGITS_ONLY.fullmatch(value) and len(value) >= TIN_DIGITS:
        return BARE_MARK + value
    return value


def _placed(widget, rotate: int) -> tuple[float, float, float]:
    """(x, y-centre, height) of a widget in DISPLAY space, so rows read as a person sees them."""
    x1, y1, x2, y2 = (float(n) for n in widget["/Rect"])
    x1, x2 = sorted((x1, x2))
    y1, y2 = sorted((y1, y2))
    cx, cy = (x1 + x2) / 2, (y1 + y2) / 2
    rotate %= 360
    if rotate == 90:
        return y1, -cx, x2 - x1
    if rotate == 180:
        return -x2, -cy, y2 - y1
    if rotate == 270:
        return -y2, cx, x2 - x1
    return x1, cy, y2 - y1


def _rows(entries: list[tuple[float, float, float, str, bool]]) -> list[str]:
    """Group (x, y-centre, height, text, TIN evidence) into rows, top to bottom, left to right."""
    entries = sorted(entries, key=lambda e: (-e[1], e[0]))
    rows: list[list[tuple]] = []
    for e in entries:
        if rows:
            first = rows[-1][0]
            if abs(first[1] - e[1]) <= max(1.0, 0.5 * min(first[2], e[2])):
                rows[-1].append(e)
                continue
        rows.append([e])
    return [_join_row([(e[3], e[4]) for e in sorted(r, key=lambda e: e[0])]) for r in rows]


def read_form_fields(reader) -> tuple[str, dict]:
    """Every fillable field's value, as text laid out in reading order.

    Returns (text, stats). stats: "fields" = fillable fields found, "values" =
    how many carried a value, "errors" = widgets that could not be read or a
    walk cut short, "xfa" = the form also carries XFA data (which is NOT read),
    "masked" = values masked here by their own label (see LABEL_MASKS).
    Never prints anything: the caller reports counts only.
    """
    stats = {"fields": 0, "values": 0, "errors": 0, "xfa": False,
             "masked": {kind: 0 for kind, _, _ in LABEL_MASKS}}
    fields: set = set()
    filled: set = set()
    seen_widgets: set = set()
    blocks: list[str] = []

    # Values that cannot be put on a row — no usable /Rect, or no page at all.
    # They are still read; losing one here would be the blind read again.
    unplaced: list[str] = []

    for n, page in enumerate(reader.pages, 1):
        entries = []
        try:
            annots = _obj(page.get("/Annots")) or []
            rotate = int(page.rotation or 0)  # inherited from the page tree
        except Exception:  # noqa: BLE001 — a broken page is counted, not fatal
            stats["errors"] += 1
            continue
        for ref in annots:
            try:
                w = _obj(ref)
                if w is None or w.get("/Subtype") != "/Widget":
                    continue
                # A widget listed twice would put its value in a row twice —
                # `123 45 45 6789` — and break the nine-digit runs. Once only.
                if _key(w) in seen_widgets:
                    continue
                seen_widgets.add(_key(w))
                text, has_value, tin_ok, masked = _render(w)
                if has_value is None:
                    continue
                if masked:
                    stats["masked"][masked] += 1
                field = _key(_terminal(w))
                fields.add(field)
                if has_value:
                    filled.add(field)
            except Exception:  # noqa: BLE001
                stats["errors"] += 1
                continue
            if text is None:
                continue
            try:
                entries.append((*_placed(w, rotate), text, tin_ok))
            except Exception:  # noqa: BLE001 — no geometry is not a reason to drop a value
                if has_value:
                    unplaced.append(_unclaimable(text))
        if entries:
            blocks.append(f"--- form fields · page {n} ---\n" + "\n".join(_rows(entries)))

    # A field whose widget sits on no page's /Annots still holds a value. The
    # page walk above never meets it, so walk the form's own tree for those —
    # otherwise a value could go unread with the count still looking complete.
    try:
        acro = _obj(_obj(reader.trailer["/Root"]).get("/AcroForm"))
    except Exception:  # noqa: BLE001
        acro, stats["errors"] = None, stats["errors"] + 1
    if acro is not None:
        stats["xfa"] = "/XFA" in acro
        stack = [(_obj(f), 0) for f in (_obj(acro.get("/Fields")) or [])]
        visited: set = set()
        while stack and len(visited) < MAX_FIELD_NODES:
            node, depth = stack.pop()
            try:
                if node is None or _key(node) in visited:
                    continue
                if depth > MAX_TREE_DEPTH:
                    stats["errors"] += 1  # cut short — never silently
                    continue
                visited.add(_key(node))
                kids = [_obj(k) for k in (_obj(node.get("/Kids")) or [])]
                if any("/T" in k for k in kids):  # an intermediate node, not a field
                    stack.extend((k, depth + 1) for k in kids)
                    continue
                widgets = kids or [node]
                if any(_key(w) in seen_widgets for w in widgets):
                    continue
                field = _key(node)
                for w in widgets:
                    text, has_value, _, masked = _render(w)
                    if has_value is None:
                        continue
                    fields.add(field)
                    if masked:
                        stats["masked"][masked] += 1
                    if has_value:
                        filled.add(field)
                        unplaced.append(_unclaimable(text))
            except Exception:  # noqa: BLE001
                stats["errors"] += 1
        if stack:
            stats["errors"] += 1  # the node cap stopped the walk: part of the form was not read
    if unplaced:
        blocks.append("--- form fields · not placed on any page ---\n" + "\n".join(unplaced))

    stats["fields"], stats["values"] = len(fields), len(filled)
    return "\n\n".join(blocks), stats


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
        print(
            "ERROR: pypdf is not installed.\n"
            "    pip install pypdf\n"
            "⚠️  In a fresh cloud session `import pypdf` can still fail afterwards with\n"
            "    ModuleNotFoundError: No module named '_cffi_backend'. That is the system\n"
            "    cryptography package missing its backend, not a problem with this tool:\n"
            "    pip install --upgrade cffi\n"
            "    (An 'ERROR: Cannot uninstall cryptography ... installed by debian' line\n"
            "     while doing this is expected and harmless — pypdf imports anyway.)",
            file=sys.stderr,
        )
        return 3

    try:
        reader = PdfReader(str(src))
        pages = [p.extract_text(extraction_mode="layout") or "" for p in reader.pages]
    except Exception as exc:  # noqa: BLE001 — the reason matters more than the type
        print(f"ERROR: could not read as PDF: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 3

    # Recover glyph-name output BEFORE anything measures these pages, so the
    # per-page "barely extracted" count below reflects the real text and not the
    # inflated length of `/uniXXXX` tokens.
    pages, glyphs = zip(*(decode_glyph_names(t) for t in pages)) if pages else ((), ())
    pages, glyphs_decoded = list(pages), sum(glyphs)

    raw = "\n\n".join(f"--- page {i + 1} ---\n{t}" for i, t in enumerate(pages))

    if len(re.sub(r"\W", "", raw)) < 100:
        print(
            f"NO TEXT LAYER: {len(pages)} page(s), effectively no extractable text.\n"
            "This is a scan. It needs OCR, and OCR is NOT set up here — do not\n"
            "work around this by sending the image somewhere. Ask for a text PDF.",
            file=sys.stderr,
        )
        return 2

    # ⚠️ THE PRIMARY DETECTOR. Glyph-name output that could not be decoded — the
    # `/g11`, `/cid49`, `/index0031` conventions — carries no code point, so it
    # survives decoding untouched and matches none of the redaction patterns.
    # Worse, on a document that is only PARTLY decodable the successful decodes
    # inflate the alphabet and walk the diversity gate below straight past it.
    # This check does not care about the alphabet: it counts the wreckage
    # directly. A handful of tokens is tolerated (a real return can mention a
    # PDF internal in an attachment); a systemic failure is thousands.
    # ⚠️ Volume is not intelligibility. Everything above this line measures how
    # MUCH came out; this measures whether what came out is text. Without it a
    # character-level extraction failure produces a large file that redacts to
    # "0 masked" — and "0 masked" is exactly what a clean document looks like.
    readable, distinct = looks_like_text(raw)
    if not readable:
        print(
            f"UNREADABLE EXTRACTION: {len(pages)} page(s), {len(raw):,} chars, but only "
            f"{distinct} distinct characters (expected >= {MIN_DISTINCT_CHARS}).\n"
            "The text layer came out at the character level — a font with no usable\n"
            "ToUnicode map, or a similar encoding failure. Nothing was written.\n"
            "⚠️  DO NOT re-run and trust a '0 masked' report from this file: on this\n"
            "    input the patterns cannot match anything, so zero means BLIND, not\n"
            "    clean. Ask for a properly generated PDF from the tax software.",
            file=sys.stderr,
        )
        return 5

    # Fillable-form values, appended BEFORE redact() so every pattern and the
    # guard below treat them exactly like page text. They join AFTER the two
    # gates above on purpose: those judge the PDF's text layer, and a field
    # value — a PDF text string, no font involved — cannot vouch for a scan.
    try:
        field_text, fields = read_form_fields(reader)
    except Exception as exc:  # noqa: BLE001 — reported below; the page text is still safe to write
        field_text = ""
        fields = {"fields": 0, "values": 0, "errors": 0, "xfa": False, "failed": type(exc).__name__}
    if field_text:
        raw = f"{raw}\n\n{field_text}"
    form = irs_form(pages[0]) if pages else None

    redacted, counts = redact(raw)
    for kind, n in fields.get("masked", {}).items():
        counts[kind] += n  # masked by the field's own label, before redact() saw it

    # A document that is mostly wreckage is refused rather than masked: a page
    # of [GLYPH] is safe and useless, and saying so is more honest than handing
    # it over. Everything below that line is masked and merely reported.
    if counts["glyph"] > GLYPH_MASS_LIMIT:
        print(
            f"UNREADABLE EXTRACTION: {counts['glyph']:,} unreadable slash-token(s) — past the\n"
            f"limit of {GLYPH_MASS_LIMIT}, so masking them would leave a file that is safe and\n"
            "worthless. Nothing was written.\n"
            "⚠️  LOOK AT THE PDF BEFORE ASKING FOR ANOTHER ONE. Two different documents\n"
            "    land here:\n"
            "      • a font naming glyphs by their slot in a subset (`/g11`, `/C49`,\n"
            "        `/cid49`) — nothing to recover, and a '0 masked' report from it would\n"
            "        mean BLIND rather than clean. Ask the tax software for a proper PDF.\n"
            "      • a perfectly good document that simply carries many slash-tokens — a\n"
            "        long attachment index or a block of form references. Nothing is wrong\n"
            "        with it; this tool just cannot tell the two apart at this volume.",
            file=sys.stderr,
        )
        return 5

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
    #
    # ⚠️ This measures VOLUME per page and nothing else, deliberately.
    # An earlier version also ran the alphabet gate here, and it cried wolf on
    # every real return: a depreciation schedule uses 14 distinct characters, a
    # K-1 allocation grid 11, an all-caps label page 28 — all perfectly extracted.
    # It flagged 12 of 18 pages of a clean return and told the reader to distrust
    # exactly the schedules carrying the figures, which is how a warning that
    # matters gets tuned out. The mixed-extraction case it was meant to catch is
    # caught by masking every unreadable token, which does not need a warning.
    thin = [i + 1 for i, p in enumerate(pages) if len(re.sub(r"\W", "", p)) < 200]

    # The ONLY thing this tool ever prints about the document's contents.
    print(f"redacted → {dst}  ({len(pages)} pages, {len(redacted):,} chars)")
    if glyphs_decoded:
        print(
            f"  ⚠️  {glyphs_decoded:,} glyph-name token(s) were decoded back to text —\n"
            "      this PDF's font carries no usable Unicode map. The recovery is\n"
            "      faithful (/uniXXXX names its own code point), but layout and\n"
            "      spacing come out worse than usual, so read column alignment with\n"
            "      suspicion and prefer a figure you can corroborate."
        )
    if thin:
        print(
            f"  ⚠️  {len(thin)} of {len(pages)} pages barely extracted: {thin}\n"
            "      Text was there and did not come through (rotated, or a font\n"
            "      pypdf cannot read). DO NOT report 'X is not on the return'\n"
            "      from this output — say the extraction was incomplete and name\n"
            "      these pages. An absence here is not evidence."
        )
    if counts["glyph"]:
        print(
            f"  ⚠️  {counts['glyph']} undecodable glyph-name token(s) were MASKED as [GLYPH].\n"
            "      That text could not be read by this tool — and therefore could not be\n"
            "      checked for identifiers either. Whatever was there is gone, safely, but\n"
            "      an ABSENCE anywhere near a [GLYPH] proves nothing. If they cluster where\n"
            "      a figure should be, ask for a properly generated PDF instead of\n"
            "      concluding the figure is missing."
        )
    print(
        "  masked: "
        f"{counts['ssn_itin']} SSN/ITIN · "
        f"{counts['account']} labelled account/routing · "
        f"{counts['long_digits']} bare 9+ digit runs · "
        f"{counts['street']} street lines · "
        f"{counts['ptin']} PTIN · "
        f"{counts['dob']} dates of birth · "
        f"{counts['licence']} licence/state ID"
    )
    print(f"  kept:   {counts['ein_kept']} EIN (public — Lilian, 2026-08-11)")
    # ⚠️ Printed EVERY time, including "none", so the absence of this line can
    # never be mistaken for "the tool looked and found nothing".
    if fields.get("failed"):
        # The type only: an exception's message can quote the document.
        print(
            f"  fields: ⚠️  COULD NOT BE READ ({fields['failed']}) — anything typed into this\n"
            "          PDF's form fields is missing from the output; an absence is not evidence."
        )
    elif fields["fields"]:
        print(
            f"  fields: {fields['values']} of {fields['fields']} fillable form field(s) carried "
            "a value — read and masked like page text"
        )
    else:
        kind = "AcroForm" if fields["xfa"] else "fillable"
        print(f"  fields: none — this PDF has no {kind} form fields")
    print("  names are NOT masked, by the same ruling.")
    if fields["values"]:
        # ⚠️ The page rules for dates of birth and ID numbers read the label
        #    printed BESIDE a value; a field value never has one. IRS forms give
        #    their fields no tooltip and names like `f1_10` (W-9 and W-7 checked,
        #    2026-09-29), so on them this is the normal case, not the edge.
        print(
            "  ⚠️  Field values are masked by their SHAPE, or by the field's own tooltip or name.\n"
            "      A date of birth, passport or licence number in a field with neither — every\n"
            "      field on an IRS form — is NOT masked. Treat such values as present."
        )
    if fields["errors"]:
        print(
            f"  ⚠️  {fields['errors']} form field(s) could NOT be read. Whatever was typed into\n"
            "      them is missing from the output — an absence there is not evidence."
        )
    # 🔑 THE BLIND READ THIS SECTION EXISTS FOR. A filled W-9 once came out
    #    identical to a blank one with exit 0. Now a form that HAS fields and
    #    yielded no values says so — it is blank, or its values live somewhere
    #    this tool does not read, and the output cannot tell those apart.
    # XFA is a second, XML copy of a form's data that some software writes
    # INSTEAD of field values. It is not read, so its presence is always said.
    if fields["xfa"] and fields["values"]:
        print(
            "  ⓘ  This PDF also carries XFA form data, which this tool does NOT read. It is\n"
            "      usually a copy of the fields above — but a value missing here may be there."
        )
    elif fields["xfa"]:
        print(
            "  ⚠️  This PDF carries XFA form data, which this tool does NOT read — and no field\n"
            "      value was read. Whatever was typed into it may live ONLY there, so an\n"
            "      absence in this output is not evidence. A person opens the file."
        )
    if form and fields["fields"] and not fields["values"]:
        print(
            f"  ⚠️  This reads as IRS Form {form}, and NONE of its {fields['fields']} fillable\n"
            "      field(s) carried a value. Either it was never filled in, or its values are\n"
            "      stored where this tool cannot read them.\n"
            "      DO NOT report it as blank from this output — a person opens the file."
        )
    # ⓘ A hint, not a proof: a 9+ digit account number on line 6 counts as
    #   "something TIN-shaped" and silences this even when Part I is empty.
    elif form == "W-9" and not (counts["ssn_itin"] or counts["ein_kept"]
                                or counts["long_digits"] or counts["cross_line"]):
        print(
            "  ⚠️  This reads as a Form W-9, and no SSN, ITIN or EIN was found on it. A completed\n"
            "      W-9 always carries one: either Part I was left empty, or the tax ID sits where\n"
            "      this tool cannot read it. A person checks the file before anyone relies on it."
        )
    if counts.get("cross_line"):
        shapes = sorted({re.sub(r"\d", "N", x).replace("\n", "\\n")
                         for x in counts["cross_line"]})
        print(
            f"  ⚠️  {len(counts['cross_line'])} run(s) matched the SSN shape across a LINE BREAK and were\n"
            "      MASKED as [SSN-n]. Some of these are NOT identifiers — a column of figures\n"
            "      collides with the shape when an amount ends one row and the next row's\n"
            "      number gutter follows. They are masked anyway: two attempts to tell the\n"
            "      two cases apart both leaked, and losing three numbers out of a working\n"
            "      copy is cheaper than writing out an SSN. CHECK THESE AGAINST THE PAGE —\n"
            "      if a figure you need is inside one, read it off the PDF:\n"
            + "".join(f"        {sh}\n" for sh in shapes[:5])
        )
    return 0


if __name__ == "__main__":
    sys.exit(main())
