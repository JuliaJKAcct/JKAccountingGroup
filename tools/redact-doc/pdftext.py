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

⚖️ WHAT IT DOES NOT DO: it has no layout mode and no AcroForm reader, so
`redact.py` still prefers pypdf where pypdf works. It returns plain rows of
`x:text` cells ordered top-to-bottom, left-to-right, which is enough for the
redaction patterns and enough to read a return off.

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
#    test suite on text reading "Ordinary business income (loss) 22,100".
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


def _stream(body: bytes) -> bytes | None:
    m = re.search(rb"stream\r?\n", body)
    if not m:
        return None
    end = body.find(b"endstream", m.end())
    raw = body[m.end():end if end != -1 else len(body)]
    try:
        return zlib.decompress(raw)
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
            end = int(header[2 * i + 3]) + first if 2 * i + 3 < len(header) else len(s)
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


def _page_text(doc: _Doc, page_body: bytes, content: list[int]) -> str:
    fonts = doc.page_fonts(page_body)
    stream = b"".join((_stream(doc.objs.get(c, b"")) or b"") for c in content)
    if not stream:
        return ""
    ctm = (1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
    stack: list[tuple[float, float, float, float, float, float]] = []
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
            ctm = mul(tuple(float(m.group(i)) for i in range(2, 8)), ctm)
        elif tok == b"q":
            stack.append(ctm)
        elif tok == b"Q":
            ctm = stack.pop() if stack else (1.0, 0.0, 0.0, 1.0, 0.0, 0.0)
        elif tok == b"BT":
            x = y = 0.0
        elif m.group(8) is not None:                                  # Tm
            x, y = float(m.group(12)), float(m.group(13))
        elif m.group(14) is not None:                                 # Td
            x += float(m.group(14))
            y += float(m.group(15))
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
                items.append((a * x + c * y + e, b * x + d * y + f, text))

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
        out.append(" | ".join(f"{ix:.0f}:{t.strip()}" for ix, t in sorted(rows[row_y])))
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
    return [_page_text(doc, body, content) for body, content in pages], orphans
