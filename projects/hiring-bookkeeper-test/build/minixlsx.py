"""Minimal multi-sheet .xlsx writer (no third-party dependencies).

Supports: multiple worksheets, inline strings, numbers, bold/size/colour fonts,
fills, number formats, column widths, frozen panes. Enough for a bookkeeping
workbook; not a general-purpose library.
"""
import zipfile
from xml.sax.saxutils import escape


def attr(v):
    """Escape a value for use inside a double-quoted XML attribute."""
    return escape(str(v), {'"': "&quot;", "\n": "&#10;"})


def _col(n):
    s = ""
    while n >= 0:
        s = chr(n % 26 + 65) + s
        n = n // 26 - 1
    return s


class Style:
    def __init__(self, bold=False, size=11, color=None, fill=None, fmt=None,
                 align=None, border_bottom=False, italic=False, wrap=False):
        self.bold, self.size, self.color, self.fill = bold, size, color, fill
        self.fmt, self.align, self.border_bottom = fmt, align, border_bottom
        self.italic, self.wrap = italic, wrap

    def key(self):
        return (self.bold, self.size, self.color, self.fill, self.fmt,
                self.align, self.border_bottom, self.italic, self.wrap)


class Sheet:
    def __init__(self, name):
        self.name = name[:31]
        self.rows = []          # list of list of (value, Style|None)
        self.widths = {}        # col index -> width
        self.freeze = None      # e.g. "A2"

    def add(self, cells, style=None):
        out = []
        for c in cells:
            if isinstance(c, tuple):
                out.append(c)
            else:
                out.append((c, style))
        self.rows.append(out)

    def blank(self, n=1):
        for _ in range(n):
            self.rows.append([])

    def set_widths(self, widths):
        for i, w in enumerate(widths):
            self.widths[i] = w


class Workbook:
    def __init__(self):
        self.sheets = []
        self._styles = {}
        self._order = []
        self.style(Style())  # index 0 = default

    def sheet(self, name):
        s = Sheet(name)
        self.sheets.append(s)
        return s

    def style(self, st):
        k = st.key()
        if k not in self._styles:
            self._styles[k] = len(self._order)
            self._order.append(st)
        return self._styles[k]

    # ---------- xml ----------
    def _styles_xml(self):
        fmts, fmt_ids = [], {}
        nid = 164
        for st in self._order:
            if st.fmt and st.fmt not in fmt_ids:
                fmt_ids[st.fmt] = nid
                fmts.append(f'<numFmt numFmtId="{nid}" formatCode="{attr(st.fmt)}"/>')
                nid += 1
        fonts, font_ids = [], {}
        for st in self._order:
            k = (st.bold, st.size, st.color, st.italic)
            if k not in font_ids:
                font_ids[k] = len(fonts)
                col = f'<color rgb="FF{st.color}"/>' if st.color else '<color theme="1"/>'
                fonts.append(f'<font><sz val="{st.size}"/>{col}<name val="Calibri"/>'
                             f'{"<b/>" if st.bold else ""}{"<i/>" if st.italic else ""}</font>')
        fills, fill_ids = ['<fill><patternFill patternType="none"/></fill>',
                           '<fill><patternFill patternType="gray125"/></fill>'], {}
        for st in self._order:
            if st.fill and st.fill not in fill_ids:
                fill_ids[st.fill] = len(fills)
                fills.append(f'<fill><patternFill patternType="solid">'
                             f'<fgColor rgb="FF{st.fill}"/><bgColor indexed="64"/></patternFill></fill>')
        borders = ['<border><left/><right/><top/><bottom/><diagonal/></border>',
                   '<border><left/><right/><top/><bottom style="thin">'
                   '<color rgb="FF9AA5B1"/></bottom><diagonal/></border>']
        xfs = []
        for st in self._order:
            fid = font_ids[(st.bold, st.size, st.color, st.italic)]
            flid = fill_ids.get(st.fill, 0)
            nfid = fmt_ids.get(st.fmt, 0)
            bid = 1 if st.border_bottom else 0
            al = ''
            if st.align or st.wrap:
                a = f' horizontal="{st.align}"' if st.align else ''
                w = ' wrapText="1"' if st.wrap else ''
                al = f'<alignment{a}{w} vertical="top"/>'
            aa = ' applyAlignment="1"' if al else ''
            xfs.append(f'<xf numFmtId="{nfid}" fontId="{fid}" fillId="{flid}" borderId="{bid}" '
                       f'applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1"'
                       f'{aa}>{al}</xf>')
        return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
                f'<numFmts count="{len(fmts)}">{"".join(fmts)}</numFmts>'
                f'<fonts count="{len(fonts)}">{"".join(fonts)}</fonts>'
                f'<fills count="{len(fills)}">{"".join(fills)}</fills>'
                f'<borders count="{len(borders)}">{"".join(borders)}</borders>'
                '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>'
                f'<cellXfs count="{len(xfs)}">{"".join(xfs)}</cellXfs>'
                '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>'
                '</styleSheet>')

    def _sheet_xml(self, sh):
        parts = []
        for r, row in enumerate(sh.rows, start=1):
            if not row:
                parts.append(f'<row r="{r}"/>')
                continue
            cells = []
            for c, (val, st) in enumerate(row):
                if val is None or val == "":
                    if st is None:
                        continue
                    cells.append(f'<c r="{_col(c)}{r}" s="{self.style(st)}"/>')
                    continue
                sid = self.style(st) if st else 0
                if isinstance(val, (int, float)) and not isinstance(val, bool):
                    cells.append(f'<c r="{_col(c)}{r}" s="{sid}"><v>{val}</v></c>')
                else:
                    cells.append(f'<c r="{_col(c)}{r}" s="{sid}" t="inlineStr">'
                                 f'<is><t xml:space="preserve">{escape(str(val))}</t></is></c>')
            parts.append(f'<row r="{r}">{"".join(cells)}</row>')
        cols = ""
        if sh.widths:
            cols = "<cols>" + "".join(
                f'<col min="{i+1}" max="{i+1}" width="{w}" customWidth="1"/>'
                for i, w in sorted(sh.widths.items())) + "</cols>"
        pane = ""
        if sh.freeze:
            row = int(sh.freeze[1:])
            pane = (f'<sheetViews><sheetView workbookViewId="0">'
                    f'<pane ySplit="{row-1}" topLeftCell="{sh.freeze}" activePane="bottomLeft" state="frozen"/>'
                    f'</sheetView></sheetViews>')
        else:
            pane = '<sheetViews><sheetView workbookViewId="0"/></sheetViews>'
        return ('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">'
                f'{pane}{cols}<sheetData>{"".join(parts)}</sheetData></worksheet>')

    def save(self, path):
        n = len(self.sheets)
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr("[Content_Types].xml",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">'
                '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>'
                '<Default Extension="xml" ContentType="application/xml"/>'
                '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>'
                + "".join(f'<Override PartName="/xl/worksheets/sheet{i+1}.xml" '
                          f'ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>'
                          for i in range(n))
                + '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>'
                '</Types>')
            z.writestr("_rels/.rels",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>'
                '</Relationships>')
            z.writestr("xl/workbook.xml",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" '
                'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>'
                + "".join(f'<sheet name="{attr(s.name)}" sheetId="{i+1}" r:id="rId{i+1}"/>'
                          for i, s in enumerate(self.sheets))
                + '</sheets></workbook>')
            z.writestr("xl/_rels/workbook.xml.rels",
                '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
                '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">'
                + "".join(f'<Relationship Id="rId{i+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet{i+1}.xml"/>'
                          for i in range(n))
                + f'<Relationship Id="rId{n+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>'
                '</Relationships>')
            for i, s in enumerate(self.sheets):
                z.writestr(f"xl/worksheets/sheet{i+1}.xml", self._sheet_xml(s))
            z.writestr("xl/styles.xml", self._styles_xml())
