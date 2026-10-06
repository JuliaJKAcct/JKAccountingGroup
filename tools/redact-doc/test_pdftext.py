# -*- coding: utf-8 -*-
"""Tests for `pdftext.py`, the dependency-free extractor.

⛔ EVERY FIGURE IN THIS FILE IS INVENTED. The fixtures pair realistic FORM-LINE
LABELS with made-up amounts on purpose: a label is what makes the test readable, and a
real amount would put a client's figure in `tools/`, where `CLAUDE.md`'s two-data-homes
rule does not allow one. The tests only assert that a string round-trips through the
extractor, so the digits carry no meaning at all.

🔑 EVERY CASE HERE PINS A FAILURE THAT ONCE LOOKED LIKE SUCCESS. That is the
point of the file: each of these produced output — a file of plausible length,
exit 0, a sober report — with the figures missing, or on the wrong page, or
three tables interleaved. None of them announced itself.

Run: `python3 tools/redact-doc/test_pdftext.py`. No dependencies.
"""
from __future__ import annotations

import re
import sys
import tempfile
import zlib
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import pdftext  # noqa: E402

FAILURES: list[str] = []


def _build(objs: dict[int, bytes], root: int = 1) -> bytes:
    """Assemble numbered objects into a PDF. `objs` values are complete bodies."""
    out = bytearray(b"%PDF-1.7\n")
    offsets: dict[int, int] = {}
    for num in sorted(objs):
        offsets[num] = len(out)
        out += b"%d 0 obj\n" % num + objs[num] + b"\nendobj\n"
    xref = len(out)
    top = max(objs) + 1
    out += b"xref\n0 %d\n0000000000 65535 f \n" % top
    for num in range(1, top):
        out += b"%010d 00000 n \n" % offsets.get(num, 0)
    out += b"trailer\n<< /Size %d /Root %d 0 R >>\nstartxref\n%d\n%%%%EOF\n" % (top, root, xref)
    return bytes(out)


def _stream_obj(body_dict: bytes, payload: bytes, compress: bool = False) -> bytes:
    data = zlib.compress(payload) if compress else payload
    extra = b" /Filter /FlateDecode" if compress else b""
    return b"<< " + body_dict + b" /Length %d" % len(data) + extra + b" >>\nstream\n" + data + b"\nendstream"


def _tounicode(pairs: dict[int, str]) -> bytes:
    """A minimal CMap stream mapping 2-byte codes to characters."""
    rows = b"".join(
        b"<%04X> <%s>\n" % (code, ch.encode("utf-16-be").hex().upper().encode())
        for code, ch in pairs.items()
    )
    return (b"/CIDInit /ProcSet findresource begin 12 dict begin begincmap\n"
            b"1 begincodespacerange\n<0000> <FFFF>\nendcodespacerange\n"
            b"%d beginbfchar\n" % len(pairs) + rows + b"endbfchar\nendcmap\nend end")


def _hex(text: str, table: dict[int, str]) -> bytes:
    rev = {v: k for k, v in table.items()}
    return "".join(f"{rev[c]:04X}" for c in text).encode()


# ── 1 · OBJECT STREAMS ───────────────────────────────────────────────────────
# Lesson 1: in a PDF 1.7 file most objects live compressed inside an /ObjStm.
# Reading only top-level objects yields ZERO PAGES, which reads as "not a PDF".
def case_object_streams() -> None:
    inner = {2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
             3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
                 b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
             5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"}
    parts, offsets, pos = [], [], 0
    for num in sorted(inner):
        offsets.append(b"%d %d" % (num, pos))
        parts.append(inner[num])
        pos += len(inner[num]) + 1
    header = b" ".join(offsets) + b"\n"
    payload = header + b" ".join(parts)
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        4: _stream_obj(b"", b"BT /F1 12 Tf 40 700 Td (Gross receipts 777,111) Tj ET"),
        6: _stream_obj(b"/Type /ObjStm /N %d /First %d" % (len(inner), len(header)),
                       payload, compress=True),
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "objstm.pdf"
        p.write_bytes(_build(objs))
        pages, orphans = pdftext.extract_pages(p)
    if len(pages) != 1:
        FAILURES.append(f"OBJSTM · a page inside an /ObjStm was not found ({len(pages)} pages)")
    elif "777,111" not in pages[0]:
        FAILURES.append("OBJSTM · the page was found but its text did not come through")


# ── 2 · PER-FONT CMAPS ───────────────────────────────────────────────────────
# Lesson 2, the one that cost the most: two subset fonts whose ToUnicode maps
# CONFLICT. Merging them decodes whichever font won and silently corrupts the
# other — on a real return that meant every label and NO amounts.
def case_per_font_cmaps() -> None:
    labels = {i + 1: c for i, c in enumerate("Grosreciptal ")}        # font A
    digits = {i + 1: c for i, c in enumerate("0123456789,")}          # font B, SAME codes
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /FA 6 0 R /FB 8 0 R >> >> /Contents 4 0 R >>"),
        4: _stream_obj(b"", b"/FA 10 Tf BT 40 700 Td <" + _hex("Gross receipts", labels) +
                           b"> Tj ET /FB 10 Tf BT 300 700 Td <" + _hex("777,111", digits) +
                           b"> Tj ET"),
        6: b"<< /Type /Font /Subtype /Type0 /BaseFont /A /Encoding /Identity-H /ToUnicode 7 0 R /DescendantFonts [] >>",
        7: _stream_obj(b"", _tounicode(labels)),
        8: b"<< /Type /Font /Subtype /Type0 /BaseFont /B /Encoding /Identity-H /ToUnicode 9 0 R /DescendantFonts [] >>",
        9: _stream_obj(b"", _tounicode(digits)),
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "fonts.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    text = "\n".join(pages)
    if "Gross receipts" not in text:
        FAILURES.append("CMAP · the label font did not decode")
    if "777,111" not in text:
        FAILURES.append("CMAP · THE AMOUNT DID NOT DECODE — the two fonts' maps were merged, "
                        "which is the failure that produced a return with no figures in it")


# ── 3 · Tf OUTSIDE BT…ET ─────────────────────────────────────────────────────
# Lesson 3: ATX sets the font, THEN opens the text object. A reader that resets
# the active font per BT decodes with no font at all — which on a subset font
# yields shifted letters and DROPS EVERY DIGIT, while still looking like text.
def case_font_outside_text_object() -> None:
    alphabet = sorted(set("Ordinary income" + "44,222"))
    table = {i + 1: c for i, c in enumerate(alphabet)}
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /F1 6 0 R >> >> /Contents 4 0 R >>"),
        # the Tf is OUTSIDE every BT block, exactly as the producer writes it
        4: _stream_obj(b"", b"/F1 10 Tf\nBT 40 700 Td <" + _hex("Ordinary income", table) +
                           b"> Tj ET\nBT 300 700 Td <" + _hex("44,222", table) + b"> Tj ET"),
        6: b"<< /Type /Font /Subtype /Type0 /BaseFont /A /Encoding /Identity-H /ToUnicode 7 0 R /DescendantFonts [] >>",
        7: _stream_obj(b"", _tounicode(table)),
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "tf.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    text = "\n".join(pages)
    if "Ordinary income" not in text or "44,222" not in text:
        FAILURES.append("Tf-OUTSIDE-BT · a font set before BT was lost, so the strings decoded "
                        f"with no font at all (got {text[:80]!r})")


# ── 4 · PAGE ORDER FROM /Kids, AND ORPHAN PAGES ──────────────────────────────
# Lesson 4: object numbers usually agree with document order, which is the trap.
# Here they deliberately do not, and one /Page sits outside the tree.
def case_page_order_and_orphans() -> None:
    def page(num, contents, text):
        return {num: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
                      b" /Resources << /Font << /F1 9 0 R >> >> /Contents %d 0 R >>" % contents),
                contents: _stream_obj(b"", b"BT /F1 12 Tf 40 700 Td (" + text + b") Tj ET")}
    objs = {1: b"<< /Type /Catalog /Pages 2 0 R >>",
            2: b"<< /Type /Pages /Kids [7 0 R 5 0 R 3 0 R] /Count 3 >>",
            9: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"}
    objs.update(page(3, 4, b"THIRD"))
    objs.update(page(5, 6, b"SECOND"))
    objs.update(page(7, 8, b"FIRST"))
    objs.update(page(11, 12, b"ORPHAN"))          # a /Page that no /Kids lists
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "order.pdf"
        p.write_bytes(_build(objs))
        pages, orphans = pdftext.extract_pages(p)
    order = [t.strip() for t in pages]
    if order != ["FIRST", "SECOND", "THIRD"]:
        FAILURES.append(f"PAGE ORDER · pages came out in object order, not document order: {order}")
    if orphans != [11]:
        FAILURES.append(f"ORPHAN · a /Page outside the page tree was not reported as skipped: {orphans}")
    if any("ORPHAN" in t for t in pages):
        FAILURES.append("ORPHAN · a page outside the page tree was INCLUDED, which shifts every "
                        "page number after it")


# ── 5 · THE GRAPHICS-STATE MATRIX ────────────────────────────────────────────
# Lesson 5: a statements page stacks separate blocks with `q … cm … Q`. Ignore
# the matrix and three different tables land on the same rows and interleave.
def case_ctm_translation() -> None:
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
        4: _stream_obj(b"", (b"q 1 0 0 1 0 0 cm BT /F1 10 Tf 40 700 Td (TOP BLOCK) Tj ET Q\n"
                             b"q 1 0 0 1 0 -300 cm BT /F1 10 Tf 40 700 Td (MIDDLE BLOCK) Tj ET Q\n"
                             b"q 1 0 0 1 0 -600 cm BT /F1 10 Tf 40 700 Td (BOTTOM BLOCK) Tj ET Q")),
        5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "ctm.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    rows = [r for r in pages[0].split("\n") if r.strip()]
    labels = [r.strip() for r in rows]
    if labels != ["TOP BLOCK", "MIDDLE BLOCK", "BOTTOM BLOCK"]:
        FAILURES.append("CTM · the q/cm/Q translations were ignored, so separate blocks landed on "
                        f"the same rows: {labels}")


# ── 6 · NESTED PARENTHESES IN A LITERAL STRING ───────────────────────────────
# `(Ordinary business income (loss))` is legal and ubiquitous on tax forms. A
# string pattern that cannot match it skips the whole Tj, so the page comes out
# EMPTY — and an empty page reads as "this is a scan".
def case_nested_parentheses() -> None:
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
        4: _stream_obj(b"", b"BT /F1 10 Tf 40 700 Td (Ordinary business income (loss) 44,222) Tj ET\n"
                            b"BT /F1 10 Tf 40 680 Td (An escaped \\(paren\\) too) Tj ET"),
        5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "paren.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    text = "\n".join(pages)
    if "Ordinary business income (loss) 44,222" not in text:
        FAILURES.append(f"NESTED PARENS · a balanced unescaped pair was not matched, so the whole "
                        f"string was dropped (got {text[:90]!r})")
    if "(paren)" not in text:
        FAILURES.append("ESCAPED PARENS · an escaped parenthesis did not survive decoding")


# ── 7 · ROW CLUSTERING MUST NOT CHAIN ────────────────────────────────────────
# A value sits a point or two off its label, so rows are clustered. Comparing
# against the cluster's LAST member instead of its anchor chains a densely
# packed page into ONE row — which is how three statements became one table.
def case_row_clustering_does_not_chain() -> None:
    lines = []
    y = 700.0
    for i in range(40):                      # 40 rows, each 2pt below the last
        lines.append(b"BT /F1 8 Tf 40 %.1f Td (ROW%d) Tj ET" % (y, i))
        y -= 2.0
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
        4: _stream_obj(b"", b"\n".join(lines)),
        5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "rows.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    rows = [r for r in pages[0].split("\n") if r.strip()]
    if len(rows) < 15:
        FAILURES.append(f"ROW CLUSTERING · 40 rows 2pt apart collapsed into {len(rows)} — the "
                        "clustering chained instead of comparing against its anchor")
    if "ROW0" not in pages[0] or "ROW39" not in pages[0]:
        FAILURES.append("ROW CLUSTERING · a row was lost entirely")


# ── 8 · REFUSALS ─────────────────────────────────────────────────────────────
def case_refusals() -> None:
    with tempfile.TemporaryDirectory() as td:
        p = Path(td)
        (p / "notpdf.bin").write_bytes(b"this is not a PDF at all")
        try:
            pdftext.extract_pages(p / "notpdf.bin")
            FAILURES.append("REFUSAL · a non-PDF was not refused")
        except ValueError:
            pass
        (p / "nopages.pdf").write_bytes(_build({1: b"<< /Type /Catalog >>"}))
        try:
            pdftext.extract_pages(p / "nopages.pdf")
            FAILURES.append("REFUSAL · a PDF with no page objects was not refused")
        except ValueError:
            pass


# ── 9 · 🔴 THE REDACTOR MUST BE ABLE TO SEE WHAT THIS EXTRACTOR EMITS ─────────
# The single most important case in this file, and the one that was missing.
# An earlier version rendered each row as coordinate-prefixed cells —
# `40:label | 300:456 | 340:78 | 380:1234` — which DISARMED every context-gated
# rule in `redact.py`: a boxed social security number came through IN CLEAR with
# the report reading `0 SSN/ITIN` and exit 0, and `ACCOUNT_CONTEXT` masked the X
# COORDINATE while leaving the account number beside it.
# ⛔ Every value below is INVENTED.
def case_redactor_can_read_the_output() -> None:
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "_r", str(Path(__file__).resolve().parent / "redact.py"))
    r = importlib.util.module_from_spec(spec)
    sys.modules["_r"] = r
    try:
        spec.loader.exec_module(r)
    except SystemExit:
        pass

    # a boxed SSN and a split street line, each run at its own x position
    rows = [
        b"BT /F1 9 Tf 40 700 Td (Your social security number) Tj ET",
        b"BT /F1 9 Tf 300 700 Td (456) Tj ET",
        b"BT /F1 9 Tf 340 700 Td (78) Tj ET",
        b"BT /F1 9 Tf 380 700 Td (1234) Tj ET",
        b"BT /F1 9 Tf 40 680 Td (Home address \\(number and street\\)) Tj ET",
        b"BT /F1 9 Tf 300 680 Td (8812) Tj ET",
        b"BT /F1 9 Tf 360 680 Td (MAPLE STREET) Tj ET",
    ]
    objs = {
        1: b"<< /Type /Catalog /Pages 2 0 R >>",
        2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
            b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
        4: _stream_obj(b"", b"\n".join(rows)),
        5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    }
    with tempfile.TemporaryDirectory() as td:
        p = Path(td) / "boxed.pdf"
        p.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(p)
    text = "\n".join(pages)
    masked, counts = r.redact(text)

    if "456" in masked and "1234" in masked and counts["ssn_itin"] == 0:
        FAILURES.append("REDACTOR BLIND · a BOXED social security number survived redaction of this "
                        "extractor's output, and the report said 0 SSN/ITIN. The row format has "
                        "defeated the redactor — see _lay_out()'s note")
    elif counts["ssn_itin"] == 0:
        FAILURES.append(f"REDACTOR BLIND · the boxed SSN was not counted as one "
                        f"(counts={ {k: v for k, v in counts.items() if v} })")
    if "8812" in masked and counts["street"] == 0:
        FAILURES.append("REDACTOR BLIND · a split street line survived redaction and was not counted")
    # and the mask must land on the VALUE, never on a coordinate left in the text
    if "[ACCT-" in masked or "[SSN-" not in masked:
        FAILURES.append(f"REDACTOR BLIND · the masking landed oddly: {masked.strip()[:120]!r}")


# ── 10 · MALFORMED OPERATORS MUST NOT DESTROY THE DOCUMENT ───────────────────
# `[-\d.]+` matches `..`, `-`, `1.2.3`, `--5`, and float("9"*400) is inf, whose
# product with 0 is nan. Each of these once raised out of the whole read.
def case_malformed_operators() -> None:
    bad = [b"1.2.3 0 0 1 0 0 cm", b".. .. .. .. .. .. cm", b"- 700 Td",
           (b"9" * 400) + b" 0 0 1 0 0 cm", b"--5 700 Td"]
    for i, op in enumerate(bad):
        objs = {
            1: b"<< /Type /Catalog /Pages 2 0 R >>",
            2: b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
            3: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
                b" /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>"),
            4: _stream_obj(b"", op + b"\nBT /F1 10 Tf 40 700 Td (SURVIVES) Tj ET"),
            5: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        }
        with tempfile.TemporaryDirectory() as td:
            f = Path(td) / f"bad{i}.pdf"
            f.write_bytes(_build(objs))
            try:
                pages, _ = pdftext.extract_pages(f)
            except Exception as exc:
                FAILURES.append(f"MALFORMED · {op[:24]!r} raised {type(exc).__name__} out of the "
                                "whole read instead of being skipped")
                continue
        if "SURVIVES" not in "\n".join(pages):
            FAILURES.append(f"MALFORMED · {op[:24]!r} swallowed the page's real text")


# ── 11 · ONE BAD PAGE MUST NOT TAKE THE OTHERS DOWN ──────────────────────────
def case_one_bad_page_is_isolated() -> None:
    def pg(num, cnum, payload):
        return {num: (b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]"
                      b" /Resources << /Font << /F1 9 0 R >> >> /Contents %d 0 R >>" % cnum),
                cnum: _stream_obj(b"", payload)}
    objs = {1: b"<< /Type /Catalog /Pages 2 0 R >>",
            2: b"<< /Type /Pages /Kids [3 0 R 5 0 R 7 0 R] /Count 3 >>",
            9: b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"}
    objs.update(pg(3, 4, b"BT /F1 10 Tf 40 700 Td (PAGE ONE) Tj ET"))
    objs.update(pg(5, 6, b"\xff\xfe\x00 garbage ]]]] TJ (((("))
    objs.update(pg(7, 8, b"BT /F1 10 Tf 40 700 Td (PAGE THREE) Tj ET"))
    with tempfile.TemporaryDirectory() as td:
        f = Path(td) / "mixed.pdf"
        f.write_bytes(_build(objs))
        pages, _ = pdftext.extract_pages(f)
    if len(pages) != 3:
        FAILURES.append(f"ISOLATION · expected 3 pages, got {len(pages)}")
        return
    if "PAGE ONE" not in pages[0] or "PAGE THREE" not in pages[2]:
        FAILURES.append("ISOLATION · a malformed middle page destroyed the readable ones")


for _case in (case_object_streams, case_per_font_cmaps, case_font_outside_text_object,
              case_page_order_and_orphans, case_ctm_translation, case_nested_parentheses,
              case_row_clustering_does_not_chain, case_refusals,
              case_redactor_can_read_the_output, case_malformed_operators,
              case_one_bad_page_is_isolated):
    try:
        _case()
    except Exception as exc:  # noqa: BLE001 — a crashing case is a failing case
        FAILURES.append(f"{_case.__name__} · raised {type(exc).__name__}: {exc}")

if FAILURES:
    print(f"FAILED — {len(FAILURES)} problem(s):")
    for f in FAILURES:
        print("  " + f)
    sys.exit(1)

print("PASS — the six extraction lessons, the row layout the redactor needs, malformed\n       operators, page isolation, row clustering and the refusals.")
