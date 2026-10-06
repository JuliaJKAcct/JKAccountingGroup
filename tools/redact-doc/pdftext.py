# -*- coding: utf-8 -*-
"""A dependency-free PDF text extractor, used by `redact.py` when pypdf is not
available or comes back with nothing usable.

🛑 WHY THIS EXISTS. On 2026-10-06 a session was asked to read a filed 1120-S
and could not: `pypdf` was not installed and `pip install pypdf` panicked on
`cryptography.hazmat.bindings._rust` / `_cffi_backend`, which is the documented
failure in `redact.py`'s own error message. The whole read was blocked on a
package. This module removes that single point of failure — it uses nothing but
`re` and `zlib` from the standard library.

🔑 AND IT CARRIES FIVE LESSONS, EACH OF WHICH PRODUCED A SILENTLY WRONG READ
BEFORE IT WAS FOUND. They are written here because every one of them looked
like success:

  1. **PDF 1.7 OBJECT STREAMS.** Most objects in a modern PDF live compressed
     inside an `/ObjStm`, not at top level. Without unpacking them the file
     yields **zero pages** — which reads as "not a PDF" rather than "look
     harder".

  2. **PER-FONT ToUnicode CMAPS, NEVER MERGED.** A page uses several subset
     fonts and their code→character maps CONFLICT. Merging them decodes the
     labels (which are in the dominant font) and silently drops the AMOUNTS.
     The result is a 220,000-character file of a tax return with no numbers in
     it, and nothing in the output says so.

  3. **`Tf` LIVES OUTSIDE `BT`…`ET` IN SOME PRODUCERS.** ATX sets the font,
     then opens the text object. A reader that resets the active font per
     `BT` block therefore decodes every string with NO font — falling back to
     raw bytes, which on a subset font yields plausible-looking letters shifted
     by a constant and DROPS every digit. Track the font across the whole
     content stream; reset only the text position.

  4. **PAGE ORDER COMES FROM THE PAGE TREE'S `/Kids`, NEVER FROM OBJECT
     NUMBERS.** They often agree, which is the trap. This file also held one
     orphan `/Page` object outside the tree, so numbering by object put a
     phantom page 1 in front and shifted EVERY page reference by one.

  5. **THE GRAPHICS-STATE MATRIX.** A statements page stacks three separate
     blocks with `q … 1 0 0 1 0 -277 cm … Q`. Ignoring the CTM lands all three
     at the same coordinates, so three different tables interleave row by row
     and read as one incoherent table.

⚖️ WHAT IT DOES NOT DO: it has no AcroForm reader, so `redact.py` still prefers
pypdf where pypdf works — only pypdf can read a fillable PDF's typed field values.

🔴 WHAT IT EMITS, AND IT IS A SAFETY DECISION, NOT A FORMATTING ONE: rows of text
LAID OUT WITH SPACES at their horizontal position, top to bottom and left to
right — the same shape pypdf's layout mode produces, which is what the redaction
patterns in `redact.py` are calibrated against. ⛔ NOT delimited cells. See
`_lay_out()`: an earlier version emitted `40:label | 300:456 | 340:78` and that
DISARMED every context-gated rule in the redactor, letting a boxed social
security number through in clear with the report reading `0 SSN/ITIN`.

⛔ It prints nothing. `redact.py` owns every message and every gate.
"""
from __future__ import annotations

import re
import zlib
from pathlib import Path

# A word and the next can sit a point or two apart on the same visual line.
# Clustering must compare against the cluster's ANCHOR, not its last member:
# chaining collapses a densely packed page into a single row.
_ROW_TOLERANCE_PT = 2.5

# 🛑 A PDF LITERAL STRING MAY CONTAIN BALANCED, UNESCAPED PARENTHESES, and tax
#    forms are full of them: `(Ordinary business income (loss))`. A naive
#    `\(([^()]*)\)` pattern does not match such a string AT ALL, so the whole
#    `Tj` is skipped and the page comes out EMPTY - which then reads as "this is
#    a scan" rather than "the string pattern is wrong". Found by this tool's own
#    test suite on text reading "Ordinary business income (loss) <amount>".
def _literal(depth: int) -> bytes:
    """A literal-string body allowing `depth` levels of balanced nesting."""
    inner = rb"[^()\\]|\\."
    pat = rb"(?:" + inner + rb")*"
    for _ in range(depth):
        pat = rb"(?:" + inner + rb"|\(" + pat + rb"\))*"
    return pat


_LITERAL = _literal(4)          # four levels; deeper nesting does not occur in practice

_TOKENS = re.compile(
    rb"/([\w.]+)\s+[-\d.]+\s+Tf"                                               # 1  set font
    rb"|BT"                                                                    #    begin text
    rb"|([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+cm"  # 2-7 concat matrix
    rb"|(?<![A-Za-z0-9])q(?![A-Za-z0-9])"                                      #    push state
    rb"|(?<![A-Za-z0-9])Q(?![A-Za-z0-9])"                                      #    pop state
    rb"|([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+Tm"  # 8-13 text matrix
    rb"|([-\d.]+)\s+([-\d.]+)\s+Td"                                            # 14-15 text displacement
    rb"|<([0-9A-Fa-f]*)>\s*Tj"                                                 # 16 hex string
    rb"|\((" + _LITERAL + rb")\)\s*Tj"                                         # 17 literal string
    rb"|\[(.*?)\]\s*TJ",                                                       # 18 string array
    re.S,
)

_ARRAY_PART = re.compile(rb"<([0-9A-Fa-f]*)>|\((" + _LITERAL + rb")\)")


_MAX_INFLATE = 64 * 1024 * 1024     # 64 MiB per stream; a return is a few hundred KB


def _num(raw: bytes) -> float:
    """A PDF number, or 0.0.

    ⚠️ `[-\d.]+` in the token pattern matches plenty of things `float()` will not:
    `..`, `-`, `1.2.3`, `--5`. One of those anywhere in any content stream used to
    raise out of the whole document. And `float(b"9" * 400)` is `inf`, whose
    product with 0 is `nan` — which then became a dictionary key and raised a
    `KeyError: nan` two hundred lines later, with nothing naming the cause.
    """
    try:
        v = float(raw)
    except (ValueError, TypeError):
        return 0.0
    return v if -1e7 < v < 1e7 else 0.0


def _stream(body: bytes) -> bytes | None:
    m = re.search(rb"stream\r?\n", body)
    if not m:
        return None
    end = body.find(b"endstream", m.end())
    raw = body[m.end():end if end != -1 else len(body)]
    try:
        # ⛔ BOUNDED. `zlib.decompress` with no limit turns a 306 KB file into
        #    300 MB of RAM — a decompression bomb, and this tool is pointed at
        #    documents the firm did not create.
        return zlib.decompressobj().decompress(raw, _MAX_INFLATE)
    except Exception:
        return raw            # an uncompressed stream, or a filter we do not handle


def _objects(data: bytes) -> dict[int, bytes]:
    """Every indirect object, INCLUDING the ones compressed inside /ObjStm (lesson 1)."""
    objs: dict[int, bytes] = {}
    for m in re.finditer(rb"(\d+)\s+(\d+)\s+obj(.*?)endobj", data, re.S):
        objs[int(m.group(1))] = m.group(3)
    for num in list(objs):
        body = objs[num]
        if b"/ObjStm" not in body:
            continue
        s = _stream(body)
        mn, mf = re.search(rb"/N\s+(\d+)", body), re.search(rb"/First\s+(\d+)", body)
        if not (s and mn and mf):
            continue
        count, first = int(mn.group(1)), int(mf.group(1))
        header = s[:first].split()
        for i in range(count):
            try:
                onum, off = int(header[2 * i]), int(header[2 * i + 1])
            except (IndexError, ValueError):
                break
            try:
                end = int(header[2 * i + 3]) + first if 2 * i + 3 < len(header) else len(s)
            except (IndexError, ValueError):
                end = len(s)
            # ⚠️ A NEGATIVE offset would slice from the END of the stream and hand
            #    back a wrong object body instead of raising — silently wrong is
            #    the one outcome this file exists to avoid.
            if off < 0 or end < 0:
                continue
            objs.setdefault(onum, s[first + off:end])
    return objs


class _Doc:
    def __init__(self, data: bytes):
        self.objs = _objects(data)
        self._cmaps: dict[int, tuple[dict[int, str], bool]] = {}

    # ---- fonts -------------------------------------------------------------
    def cmap(self, font_obj: int) -> tuple[dict[int, str], bool]:
        """One font's ToUnicode map, cached. NEVER merged with another's (lesson 2)."""
        if font_obj in self._cmaps:
            return self._cmaps[font_obj]
        body = self.objs.get(font_obj, b"")
        cm: dict[int, str] = {}
        m = re.search(rb"/ToUnicode\s+(\d+)\s+\d+\s+R", body)
        if m:
            s = _stream(self.objs.get(int(m.group(1)), b"")) or b""
            for blk in re.findall(rb"beginbfchar(.*?)endbfchar", s, re.S):
                for a, b in re.findall(rb"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", blk):
                    try:
                        cm[int(a, 16)] = bytes.fromhex(b.decode()).decode("utf-16-be", "ignore")
                    except Exception:
                        pass
            for blk in re.findall(rb"beginbfrange(.*?)endbfrange", s, re.S):
                for a, b, c in re.findall(
                    rb"<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>", blk
                ):
                    lo, hi, start = int(a, 16), int(b, 16), int(c, 16)
                    for i in range(lo, min(hi, lo + 65535) + 1):
                        try:
                            cm[i] = chr(start + (i - lo))
                        except ValueError:
                            pass
        two_byte = b"/Identity-H" in body or b"/Type0" in body or any(k > 255 for k in cm)
        self._cmaps[font_obj] = (cm, two_byte)
        return self._cmaps[font_obj]

    def page_fonts(self, page_body: bytes) -> dict[str, int]:
        res = page_body
        m = re.search(rb"/Resources\s+(\d+)\s+\d+\s+R", page_body)
        if m:
            res = self.objs.get(int(m.group(1)), b"")
        out: dict[str, int] = {}
        mf = re.search(rb"/Font\s*<<(.*?)>>", res, re.S)
        if mf:
            for name, ref in re.findall(rb"/([\w.]+)\s+(\d+)\s+\d+\s+R", mf.group(1)):
                out[name.decode()] = int(ref)
            return out
        mf2 = re.search(rb"/Font\s+(\d+)\s+\d+\s+R", res)
        if mf2:
            fb = self.objs.get(int(mf2.group(1)), b"")
            for name, ref in re.findall(rb"/([\w.]+)\s+(\d+)\s+\d+\s+R", fb):
                out[name.decode()] = int(ref)
        return out

    # ---- pages -------------------------------------------------------------
    def pages(self) -> tuple[list[tuple[bytes, list[int]]], list[int]]:
        """Pages IN DOCUMENT ORDER, plus any orphan page objects skipped (lesson 4)."""
        found: dict[int, tuple[bytes, list[int]]] = {}
        for num, body in self.objs.items():
            if not (b"/Type" in body and b"/Page" in body and b"/Contents" in body):
                continue
            m = re.search(rb"/Contents\s+(\d+)\s+\d+\s+R", body)
            if m:
                found[num] = (body, [int(m.group(1))])
                continue
            m2 = re.search(rb"/Contents\s*\[(.*?)\]", body, re.S)
            if m2:
                found[num] = (body, [int(x) for x in re.findall(rb"(\d+)\s+\d+\s+R", m2.group(1))])
        kids: list[int] = []
        for num, body in self.objs.items():
            if b"/Type" in body and b"/Pages" in body:
                mk = re.search(rb"/Kids\s*\[(.*?)\]", body, re.S)
                if mk:
                    kids = [int(x) for x in re.findall(rb"(\d+)\s+\d+\s+R", mk.group(1))]
                if kids:
                    break
        if not kids:
            return [found[n] for n in sorted(found)], []
        orphans = sorted(n for n in found if n not in kids)
        return [found[n] for n in kids if n in found], orphans


def _decode(raw: bytes, cm: dict[int, str], two_byte: bool) -> str:
    if two_byte:
        return "".join(cm.get(raw[i] << 8 | raw[i + 1], "") for i in range(0, len(raw) - 1, 2))
    return "".join(cm.get(b, chr(b) if 32 <= b < 127 else "") for b in raw)


# ── HOW A ROW IS RENDERED, AND IT IS A SAFETY DECISION, NOT A FORMATTING ONE ──
#
# 🛑 THIS FUNCTION EXISTS BECAUSE AN EARLIER VERSION DISARMED THE REDACTOR.
#    It emitted each row as coordinate-prefixed cells — `40:label | 300:456 |
#    340:78 | 380:1234` — which reads well for a human and is CATASTROPHIC for
#    `redact.py`, whose patterns are calibrated against pypdf's LAYOUT mode:
#      • `SSN` separates groups with `[-\s.]`, so `456 | 340:78 | 380:1234` is
#        not an SSN to it. A boxed social security number — three boxes, three
#        positioned runs, which is how many fillable IRS forms lay one out —
#        came through IN CLEAR with the report reading `0 SSN/ITIN` and exit 0.
#      • `ACCOUNT_CONTEXT` masked the X COORDINATE and left the account number
#        beside it: `40:Account number [ACCT-1]:4471982`. A leak AND a false
#        success in the same line, which is worse than either.
#      • `STREET` needs `\d{1,6}` adjacent to the street name, so a boxed
#        address split across runs stopped matching.
#    🔑 A label and its value sit at different x positions BY DEFINITION — that
#    is what a form is — so this was not an edge case; it disarmed every
#    context-gated rule in the redactor on every real return.
#
# ✅ SO THE ROW IS LAID OUT WITH SPACES, reproducing layout mode, and every
#    pattern in `redact.py` keeps working unchanged. ⛔ Do not "improve" this
#    back into delimited cells without re-calibrating every pattern in that file
#    — and `test_pdftext.py` pins it with an invented SSN that must come out
#    masked.
_PT_PER_COL = 5.0          # ~5pt per character at the 8-10pt fonts a return uses
# ⛔ AND A CEILING, because padding to a coordinate is a space BOMB without one.
#    A US Letter page is 612pt — about 122 columns — and a stray `cm` carrying a
#    large translation is an ordinary accident, not an attack: one such operator
#    turned a 751-byte PDF into an 8 MB output file, and 2,000 runs at x=9999999
#    produced 4 billion characters at 7.6 GB of RSS. Same class as the
#    decompression bomb `_MAX_INFLATE` bounds, and an order of magnitude worse.
_MAX_COL = 400             # generous for any real page, including landscape


def _lay_out(cells: "list[tuple[float, str]]") -> str:
    parts: list[str] = []
    width = 0                       # characters written so far, NOT len(parts)
    for x, text in cells:
        text = text.strip()
        if not text:
            continue
        col = min(_MAX_COL, int(max(0.0, x) / _PT_PER_COL))
        if col > width:
            parts.append(" " * (col - width))
            width = col
        elif parts:
            parts.append(" ")       # never let two runs collide into one token
            width += 1
        parts.append(text)
        width += len(text)
    return "".join(parts).rstrip()


def _page_text(doc: _Doc, page_body: bytes, content: list[int]) -> str:
    fonts = doc.page_fonts(page_body)
    stream = b"".join((_stream(doc.objs.get(c, b"")) or b"") for c in content)
    if not stream:
        return ""
    ctm = (1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    stack: list = []
    x = y = 0.0
    font: int | None = None          # tracked across the WHOLE stream (lesson 3)
    items: list[tuple[float, float, str]] = []

    def mul(m, n):
        a, b, c, d, e, f = m
        A, B, C, D, E, F = n
        return (a * A + b * C, a * B + b * D, c * A + d * C, c * B + d * D,
                e * A + f * C + E, e * B + f * D + F)

    for m in _TOKENS.finditer(stream):
        tok = m.group(0)
        if m.group(1) is not None:
            font = fonts.get(m.group(1).decode())
        elif m.group(2) is not None:                                  # cm (lesson 5)
            ctm = mul(tuple(_num(m.group(i)) for i in range(2, 8)), ctm)
        elif tok == b"q":
            # ⚠️ THE FONT IS PART OF THE GRAPHICS STATE, not just the matrix. A
            #    producer writing `q /F2 Tf … Q` leaves F1 in force after the Q,
            #    and decoding the next string with F2 is lesson 2's failure mode
            #    arriving silently. Save and restore both.
            stack.append((ctm, font))
        elif tok == b"Q":
            # ⚠️ AN UNBALANCED `Q` MUST NOT CLEAR THE FONT. Restoring `None` here
            #    makes every later string decode with no font at all, and on a
            #    subset font the codes fall below 0x20 and the text VANISHES —
            #    lesson 3 arriving by the other door. And it is not a hand-made
            #    file: `/Contents [A B]` is concatenated, so if A is unreachable
            #    its `q` is gone while B's `Q` remains. Restore the matrix only.
            if stack:
                ctm, font = stack.pop()
            else:
                ctm = (1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
        elif tok == b"BT":
            x = y = 0.0
        elif m.group(8) is not None:                                  # Tm
            x, y = _num(m.group(12)), _num(m.group(13))
        elif m.group(14) is not None:                                 # Td
            x += _num(m.group(14))
            y += _num(m.group(15))
        else:
            cm_, two = doc.cmap(font) if font is not None else ({}, False)
            if m.group(16) is not None:
                text = _decode(bytes.fromhex(m.group(16).decode()), cm_, two)
            elif m.group(17) is not None:
                text = _decode(re.sub(rb"\\(.)", rb"\1", m.group(17)), cm_, two)
            else:
                parts = []
                for h in _ARRAY_PART.finditer(m.group(18)):
                    parts.append(
                        _decode(bytes.fromhex(h.group(1).decode()), cm_, two)
                        if h.group(1) is not None
                        else _decode(re.sub(rb"\\(.)", rb"\1", h.group(2)), cm_, two)
                    )
                text = "".join(parts)
            if text.strip():
                a, b, c, d, e, f = ctm
                dx, dy = a * x + c * y + e, b * x + d * y + f
                # a non-finite coordinate cannot be sorted or used as a row key
                if dx == dx and dy == dy and abs(dx) < 1e7 and abs(dy) < 1e7:
                    items.append((dx, dy, text))

    if not items:
        return ""
    anchors: dict[float, float] = {}
    cluster: list[float] = []
    for row_y in sorted({round(iy, 1) for _, iy, _ in items}, reverse=True):
        if cluster and abs(cluster[0] - row_y) <= _ROW_TOLERANCE_PT:
            cluster.append(row_y)
        else:
            for v in cluster:
                anchors[v] = cluster[0]
            cluster = [row_y]
    for v in cluster:
        anchors[v] = cluster[0]
    rows: dict[float, list[tuple[float, str]]] = {}
    for ix, iy, text in items:
        rows.setdefault(anchors[round(iy, 1)], []).append((ix, text))
    out = []
    for row_y in sorted(rows, reverse=True):
        out.append(_lay_out(sorted(rows[row_y])))
    return "\n".join(out)


def extract_pages(path: str | Path) -> tuple[list[str], list[int]]:
    """One string per page, in document order, plus the orphan page objects skipped.

    Raises on anything that is not a readable PDF; `redact.py` turns that into
    its own error. Never prints.
    """
    data = Path(path).read_bytes()
    if not data.startswith(b"%PDF"):
        raise ValueError("not a PDF (no %PDF header)")
    doc = _Doc(data)
    pages, orphans = doc.pages()
    if not pages:
        raise ValueError("no page objects found (an encrypted or unusual PDF)")
    # ⚠️ PER PAGE. Without this, one malformed operator on page 14 takes pages
    #    1-13 down with it and the whole read reports as "not a PDF".
    out = []
    for body, content in pages:
        try:
            out.append(_page_text(doc, body, content))
        except Exception:
            out.append("")        # `redact.py` reports a page that came out empty
    return out, orphans
