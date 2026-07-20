const fs = require("fs");
const path = require("path");
const {
  Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, TabStopType, TabStopPosition, ImageRun,
  Table, TableRow, TableCell, WidthType, ShadingType, VerticalAlign, Header, Footer, PageNumber,
  LevelFormat
} = require("docx");

// ---- Shared brand assets ----
// Logos live ONCE in the repo's brand/ foundation and are never duplicated into a
// project. Resolved from this file's location so the scripts work from any cwd
// (repo root: three levels up from projects/proposal-tool/generator-scripts/).
const BRAND_PNG_DIR = path.join(__dirname, "..", "..", "..", "brand", "logo", "png");
const LOGO_HORIZONTAL = path.join(BRAND_PNG_DIR, "JK-lockup-horizontal-2048.png");
const MEDALLION_PRIMARY = path.join(BRAND_PNG_DIR, "JK-medallion-primary-1024.png");
const MEDALLION_REVERSED = path.join(BRAND_PNG_DIR, "JK-medallion-reversed-1024.png");

// ---- JK Accounting Group brand tokens (from JK-Brand-Guide.md) ----
const BRAND = {
  teal: "123841",       // Petrol Teal - primary
  deepTeal: "0D2A31",
  bronze: "9C6A39",     // Warm Bronze - rare accent only
  ivory: "F6F3EC",
  ink: "22201A",
  muted: "6F6857",
  hairline: "C5BEAD",
};

const FONT_HEADING = "Source Serif 4";
const FONT_BODY = "IBM Plex Sans";
const FONT_MONO = "IBM Plex Mono";

const PAGE = {
  size: { width: 12240, height: 15840 },
  margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
};

const styles = {
  default: { document: { run: { font: FONT_BODY, size: 22, color: BRAND.ink } } },
  paragraphStyles: [
    { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 26, bold: true, font: FONT_HEADING, color: BRAND.teal },
      paragraph: { spacing: { before: 240, after: 160 }, outlineLevel: 0 } },
    { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 22, bold: true, font: FONT_HEADING, color: BRAND.teal },
      paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 1 } },
  ]
};

function p(text, opts = {}) {
  const { bold, italic, italics, underline, size, spacingAfter = 200, align, color, font } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter },
    children: [new TextRun({ text, bold, italics: italics ?? italic, underline: underline ? {} : undefined, size, color, font })]
  });
}

function pr(runs, opts = {}) {
  const { spacingAfter = 200, align } = opts;
  return new Paragraph({ alignment: align, spacing: { after: spacingAfter }, children: runs });
}

function h(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, bold: true, italics: true, size: 22, font: FONT_HEADING, color: BRAND.teal })] });
}

// Section label styled as a heading in the brand's serif, teal.
function sectionLabel(text) {
  return new Paragraph({
    spacing: { before: 220, after: 120 },
    children: [new TextRun({ text, bold: true, font: FONT_HEADING, color: BRAND.teal, size: 24 })]
  });
}

// Mono uppercase "kicker" label - the brand's signature small tracked tag.
function kicker(text) {
  return new Paragraph({
    spacing: { before: 60, after: 200 },
    children: [new TextRun({ text: text.toUpperCase(), font: FONT_MONO, size: 16, color: BRAND.bronze, bold: true })]
  });
}

// Thin bronze rule - the brand's single accent, used once per document (never as decoration elsewhere).
function bronzeRule() {
  return new Paragraph({
    spacing: { before: 80, after: 240 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BRAND.bronze, space: 1 } },
    children: [new TextRun("")]
  });
}

function hr() {
  return new Paragraph({
    spacing: { before: 100, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND.hairline, space: 1 } },
    children: [new TextRun("")]
  });
}

function logoImage(pngPath, widthPx = 260) {
  const data = fs.readFileSync(pngPath);
  // source is 2048x566
  const ratio = 566 / 2048;
  return new Paragraph({
    spacing: { after: 80 },
    children: [new ImageRun({
      type: "png",
      data,
      transformation: { width: widthPx, height: Math.round(widthPx * ratio) },
      altText: { title: "JK Accounting Group logo", description: "JK Accounting Group horizontal logo lockup", name: "JK logo" }
    })]
  });
}

// ---- GoProposal-style layout helpers (cover/contents/tables/header-footer) ----

// Big page-title heading (used for cover page client name, section divider pages).
function bigTitle(text, opts = {}) {
  const { color = BRAND.ink, size = 44, align = AlignmentType.CENTER, spacingAfter = 80 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter },
    children: [new TextRun({ text, size, font: FONT_HEADING, color })]
  });
}

// "Proposal for" style small teal label above a big title.
function eyebrowLine(text, opts = {}) {
  const { align = AlignmentType.CENTER, size = 28 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: 40 },
    children: [new TextRun({ text, size, font: FONT_HEADING, color: BRAND.teal })]
  });
}

// Section-divider page: big teal heading + hairline rule + intro sentence.
function sectionDividerPage(title, introText) {
  const out = [
    new Paragraph({ spacing: { before: 2400, after: 0 }, children: [new TextRun("")] }),
    new Paragraph({
      spacing: { after: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BRAND.teal, space: 4 } },
      children: [new TextRun({ text: title.toUpperCase(), bold: true, size: 40, font: FONT_HEADING, color: BRAND.teal })]
    }),
  ];
  if (introText) out.push(p(introText, { spacingAfter: 200 }));
  return out;
}

// Dotted-leader contents line: "LABEL ..................... N"
function contentsLine(label, pageNum) {
  return new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX, leader: "dot" }],
    spacing: { after: 160 },
    children: [
      new TextRun({ text: label.toUpperCase(), font: FONT_MONO, size: 18, color: BRAND.ink }),
      new TextRun({ text: `\t${pageNum}`, font: FONT_MONO, size: 18, color: BRAND.muted }),
    ]
  });
}

function shadedCell(text, opts = {}) {
  const { fill = null, color = BRAND.ink, bold = false, align = AlignmentType.LEFT, width, size = 20 } = opts;
  return new TableCell({
    width: width ? { size: width, type: WidthType.PERCENTAGE } : undefined,
    shading: fill ? { fill, type: ShadingType.CLEAR, color: "auto" } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 100, bottom: 100, left: 150, right: 150 },
    children: [new Paragraph({ alignment: align, children: [new TextRun({ text, color, bold, size, font: FONT_BODY })] })]
  });
}

// Two-column "CREATED BY / CREATED FOR" style table (cover page).
function twoColInfoTable(leftHeader, rightHeader, rows) {
  const headerRow = new TableRow({
    children: [
      shadedCell(leftHeader, { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 50 }),
      shadedCell(rightHeader, { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 50 }),
    ]
  });
  const dataRows = rows.map(([l, r], i) => new TableRow({
    children: [
      shadedCell(l || "", { fill: i % 2 === 0 ? BRAND.ivory : "FFFFFF", width: 50 }),
      shadedCell(r || "", { fill: i % 2 === 0 ? BRAND.ivory : "FFFFFF", width: 50 }),
    ]
  }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, ...dataRows] });
}

// "Your Investment" bundled-fee table — ONE line item + total, never itemized. Mirrors the
// GoProposal FEES table's visual format (teal header, dark total bar) without the dollar breakdown.
function bundledFeeTable(serviceLabel, monthlyDisplay) {
  const headerRow = new TableRow({
    children: [
      shadedCell("SERVICES", { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 70 }),
      shadedCell("FEE / MONTH", { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 30, align: AlignmentType.RIGHT }),
    ]
  });
  const dataRow = new TableRow({
    children: [
      shadedCell(serviceLabel, { fill: BRAND.ivory, width: 70 }),
      shadedCell(monthlyDisplay, { fill: BRAND.ivory, width: 30, align: AlignmentType.RIGHT, bold: true }),
    ]
  });
  const totalRow = new TableRow({
    children: [
      shadedCell("TOTAL", { fill: BRAND.deepTeal, color: "FFFFFF", bold: true, width: 70 }),
      shadedCell(monthlyDisplay, { fill: BRAND.deepTeal, color: "FFFFFF", bold: true, width: 30, align: AlignmentType.RIGHT }),
    ]
  });
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, dataRow, totalRow] });
}

// One-time fee variant of the bundled table (used only if a one-time onboarding fee applies).
function bundledOneTimeTable(serviceLabel, feeDisplay) {
  const headerRow = new TableRow({
    children: [
      shadedCell("ONE-TIME SERVICES", { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 70 }),
      shadedCell("COST", { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 30, align: AlignmentType.RIGHT }),
    ]
  });
  const dataRow = new TableRow({
    children: [
      shadedCell(serviceLabel, { fill: BRAND.ivory, width: 70 }),
      shadedCell(feeDisplay, { fill: BRAND.ivory, width: 30, align: AlignmentType.RIGHT, bold: true }),
    ]
  });
  const totalRow = new TableRow({
    children: [
      shadedCell("TOTAL", { fill: BRAND.deepTeal, color: "FFFFFF", bold: true, width: 70 }),
      shadedCell(feeDisplay, { fill: BRAND.deepTeal, color: "FFFFFF", bold: true, width: 30, align: AlignmentType.RIGHT }),
    ]
  });
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headerRow, dataRow, totalRow] });
}

// "Please Note" facts table — teal label cells, ivory value cells (Start Date / Year End / Revenue).
function factsTable(rows) {
  const dataRows = rows.map(([l, r]) => new TableRow({
    children: [
      shadedCell(l, { fill: BRAND.teal, color: "FFFFFF", bold: true, width: 35, align: AlignmentType.RIGHT }),
      shadedCell(r, { fill: BRAND.ivory, width: 65 }),
    ]
  }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: dataRows });
}

// Bronze CTA block - the single-accent highlight, used once (What Happens Next / sign-off prompt).
// Built as a single-cell table (not a bordered Paragraph) — docx.js emits paragraph borders (pBdr)
// in a fixed top/bottom/left/right order that fails strict OOXML validation; table cell borders
// (tcBorders) serialize correctly in the order given, so the boxed look is built that way instead.
function ctaBlock(lines) {
  const cellBorders = {
    top: { style: BorderStyle.SINGLE, size: 4, color: BRAND.bronze },
    left: { style: BorderStyle.SINGLE, size: 4, color: BRAND.bronze },
    bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND.bronze },
    right: { style: BorderStyle.SINGLE, size: 4, color: BRAND.bronze },
  };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({
      children: [new TableCell({
        borders: cellBorders,
        shading: { fill: BRAND.bronze, type: ShadingType.CLEAR, color: "auto" },
        verticalAlign: VerticalAlign.CENTER,
        margins: { top: 200, bottom: 200, left: 200, right: 200 },
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: lines.map((t, i) => new TextRun({ text: t, break: i === 0 ? 0 : 1, bold: i === 0, color: "FFFFFF", size: i === 0 ? 24 : 18, font: FONT_HEADING }))
        })]
      })]
    })]
  });
}

// Parameter callout box (grey/ivory) — mirrors GoProposal's "Transactions per month = X" boxes.
// Scope/volume parameters only, never dollar figures (bundling rule). Table-based for the same
// border-serialization reason as ctaBlock above.
function paramBox(pairs) {
  const cellBorders = {
    top: { style: BorderStyle.SINGLE, size: 2, color: BRAND.hairline },
    left: { style: BorderStyle.SINGLE, size: 2, color: BRAND.hairline },
    bottom: { style: BorderStyle.SINGLE, size: 2, color: BRAND.hairline },
    right: { style: BorderStyle.SINGLE, size: 2, color: BRAND.hairline },
  };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({
      children: [new TableCell({
        borders: cellBorders,
        shading: { fill: BRAND.ivory, type: ShadingType.CLEAR, color: "auto" },
        margins: { top: 120, bottom: 120, left: 150, right: 150 },
        children: pairs.map(([k, v]) => new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: `${k} = `, color: BRAND.ink, size: 20 }),
            new TextRun({ text: `${v}`, bold: true, color: BRAND.ink, size: 20 }),
          ]
        }))
      })]
    })]
  });
}

// Page header for interior pages: "Proposal #JKA-XXXX" left, small logo right.
function pageHeader(proposalNumber, logoPath) {
  const children = [new TextRun({ text: `Proposal #${proposalNumber}`, size: 16, color: BRAND.muted, font: FONT_MONO })];
  const table = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
      insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    },
    rows: [new TableRow({
      children: [
        new TableCell({ width: { size: 70, type: WidthType.PERCENTAGE }, verticalAlign: VerticalAlign.CENTER,
          children: [new Paragraph({ children })] }),
        new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, verticalAlign: VerticalAlign.CENTER,
          children: [logoImage(logoPath, 110)] }),
      ]
    })]
  });
  return new Header({ children: [table] });
}

// Footer bar: solid teal band, white "Page X of Y" right-aligned — mirrors GoProposal's bottom bar.
function pageFooter() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        shading: { fill: BRAND.teal, type: ShadingType.CLEAR, color: "auto" },
        spacing: { before: 40, after: 40 },
        children: [
          new TextRun({ text: "Page ", color: "FFFFFF", size: 18, font: FONT_MONO }),
          new TextRun({ children: [PageNumber.CURRENT], color: "FFFFFF", size: 18, font: FONT_MONO }),
          new TextRun({ text: " of ", color: "FFFFFF", size: 18, font: FONT_MONO }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], color: "FFFFFF", size: 18, font: FONT_MONO }),
        ]
      })
    ]
  });
}

function blankHeader() { return new Header({ children: [new Paragraph({ children: [new TextRun("")] })] }); }
function blankFooter() { return new Footer({ children: [new Paragraph({ children: [new TextRun("")] })] }); }

function pageBreak() {
  return new Paragraph({ children: [new TextRun({ break: 1 })], pageBreakBefore: true });
}

// ---- Premium layout helpers (premium-reference format) ----

// Square medallion logo (1024x1024 source, e.g. JK-medallion-primary-1024.png).
function medallionImage(pngPath, widthPx = 200) {
  const data = fs.readFileSync(pngPath);
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [new ImageRun({
      type: "png",
      data,
      transformation: { width: widthPx, height: widthPx },
      altText: { title: "JK Accounting Group medallion", description: "JK Accounting Group circular medallion logo", name: "JK medallion" }
    })]
  });
}

// Kicker + big serif heading + hairline rule — the repeating section-open pattern
// used on every interior page in the premium layout.
function sectionHeader(kickerText, title) {
  return [
    kicker(kickerText),
    new Paragraph({
      spacing: { after: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND.hairline, space: 8 } },
      children: [new TextRun({ text: title, bold: true, size: 36, font: FONT_HEADING, color: BRAND.teal })]
    }),
  ];
}

// A "What You Get" benefit block: colored left accent bar (table cell, not a paragraph
// border, for the same border-serialization reason noted on ctaBlock/paramBox) + kicker +
// bold subheading + description paragraph. `highlight` gives it a faint ivory-on-ivory card feel.
function benefitBlock({ kickerText, title, text, highlight = false }) {
  // Fixed-layout table with explicit dxa column widths — a percentage width on a very
  // narrow column gets overridden by Word/LibreOffice's autofit under AUTO layout, which
  // is why the accent bar must use TableLayoutType.FIXED + columnWidths instead.
  const contentWidth = PAGE.size.width - PAGE.margin.left - PAGE.margin.right; // 9360 dxa
  const barWidth = 90;
  return new Table({
    width: { size: contentWidth, type: WidthType.DXA },
    columnWidths: [barWidth, contentWidth - barWidth],
    rows: [new TableRow({
      children: [
        new TableCell({
          width: { size: barWidth, type: WidthType.DXA },
          shading: { fill: BRAND.teal, type: ShadingType.CLEAR, color: "auto" },
          children: [new Paragraph({ children: [new TextRun("")] })]
        }),
        new TableCell({
          width: { size: contentWidth - barWidth, type: WidthType.DXA },
          shading: highlight ? { fill: BRAND.ivory, type: ShadingType.CLEAR, color: "auto" } : undefined,
          margins: { top: 160, bottom: 160, left: 220, right: 220 },
          children: [
            new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: kickerText.toUpperCase(), font: FONT_MONO, size: 15, color: BRAND.bronze, bold: true })] }),
            new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: title, bold: true, size: 24, font: FONT_HEADING, color: BRAND.ink })] }),
            new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text, size: 20, color: BRAND.ink })] }),
          ]
        }),
      ]
    })]
  });
}

// Huge bronze-mono price card, bordered box (single-cell table, safe border pattern).
function priceCard(kickerText, priceDisplay, unitLabel) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({
      children: [new TableCell({
        borders: {
          top: { style: BorderStyle.SINGLE, size: 3, color: BRAND.hairline },
          left: { style: BorderStyle.SINGLE, size: 3, color: BRAND.hairline },
          bottom: { style: BorderStyle.SINGLE, size: 3, color: BRAND.hairline },
          right: { style: BorderStyle.SINGLE, size: 3, color: BRAND.hairline },
        },
        shading: { fill: BRAND.ivory, type: ShadingType.CLEAR, color: "auto" },
        margins: { top: 260, bottom: 260, left: 260, right: 260 },
        children: [
          new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: kickerText.toUpperCase(), font: FONT_MONO, size: 16, color: BRAND.bronze, bold: true })] }),
          new Paragraph({ children: [
            new TextRun({ text: priceDisplay, bold: true, size: 64, font: FONT_MONO, color: BRAND.bronze }),
            new TextRun({ text: ` ${unitLabel}`, size: 22, color: BRAND.muted }),
          ] }),
        ]
      })]
    })]
  });
}

// "Standard rate $X/mo x includes Y% discount (-$Z) for <reason>" anchor line.
function discountLine(standardRateDisplay, discountText) {
  return pr([
    new TextRun({ text: `Standard rate ${standardRateDisplay}/mo`, color: BRAND.muted, size: 20 }),
    new TextRun({ text: " · includes ", color: BRAND.muted, size: 20 }),
    new TextRun({ text: discountText, bold: true, color: BRAND.teal, size: 20 }),
  ], { spacingAfter: 120 });
}

// Simple status rows ("Included" / "separate engagement") with a thin bottom hairline —
// single-side border so it doesn't hit the docx.js multi-side pBdr ordering bug.
function notesRows(rows) {
  return rows.map(([label, status, positive]) => new Paragraph({
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    spacing: { after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND.hairline, space: 8 } },
    children: [
      new TextRun({ text: label, size: 20, color: BRAND.ink }),
      new TextRun({ text: `\t${status}`, bold: true, size: 20, color: positive ? BRAND.teal : BRAND.ink }),
    ]
  }));
}

// Compact bullet category for the single-page "What's Included" (title + tight bullets).
function bulletCategory(title, bullets) {
  const out = [new Paragraph({ spacing: { before: 160, after: 100 }, children: [new TextRun({ text: title, bold: true, size: 24, font: FONT_HEADING, color: BRAND.ink })] })];
  bullets.forEach(b => out.push(new Paragraph({
    numbering: { reference: "included-bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text: b, size: 20 })]
  })));
  return out;
}

// Step line for the trimmed "What's Next" page: "Step N   description" (no CTA block).
function stepLine(n, text) {
  return pr([
    new TextRun({ text: `Step ${n}   `, bold: true, color: BRAND.teal }),
    new TextRun(text),
  ], { spacingAfter: 140 });
}

// Full-bleed-style closing quote page: zero-margin section + a dark, page-height table cell.
function closingQuoteSection(logoPath, quoteLines, attribName, attribSubtitle) {
  const cell = new TableCell({
    verticalAlign: VerticalAlign.CENTER,
    shading: { fill: BRAND.deepTeal, type: ShadingType.CLEAR, color: "auto" },
    margins: { top: 1200, bottom: 1200, left: 1200, right: 1200 },
    children: [
      medallionImage(logoPath, 160),
      new Paragraph({ spacing: { before: 500, after: 300 }, alignment: AlignmentType.CENTER, children: quoteLines.map((l, i) => new TextRun({ text: l, break: i === 0 ? 0 : 1, italics: true, size: 32, font: FONT_HEADING, color: "FFFFFF" })) }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 }, children: [new TextRun({ text: attribName, bold: true, size: 24, font: FONT_HEADING, color: "FFFFFF" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: attribSubtitle.toUpperCase(), size: 15, font: FONT_MONO, color: BRAND.bronze, bold: true })] }),
    ]
  });
  const table = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({ height: { value: 15840, rule: "atLeast" }, children: [cell] })]
  });
  return table;
}

function medallionLogoPathReversed() { return MEDALLION_REVERSED; }

// Centered footer bar: "Proposal #XXXX · Page X of Y" — no header on interior pages
// in the premium layout (matches the premium reference).
function centeredFooter(proposalNumber) {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        shading: { fill: BRAND.deepTeal, type: ShadingType.CLEAR, color: "auto" },
        spacing: { before: 40, after: 40 },
        children: [
          new TextRun({ text: `Proposal #${proposalNumber} · Page `, color: "FFFFFF", size: 16, font: FONT_MONO }),
          new TextRun({ children: [PageNumber.CURRENT], color: "FFFFFF", size: 16, font: FONT_MONO }),
          new TextRun({ text: " of ", color: "FFFFFF", size: 16, font: FONT_MONO }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], color: "FFFFFF", size: 16, font: FONT_MONO }),
        ]
      })
    ]
  });
}

module.exports = {
  PAGE, styles, p, pr, h, sectionLabel, kicker, hr, bronzeRule, logoImage,
  BRAND, FONT_HEADING, FONT_BODY, FONT_MONO,
  TextRun, Paragraph, AlignmentType, TabStopType, TabStopPosition,
  bigTitle, eyebrowLine, sectionDividerPage, contentsLine, twoColInfoTable,
  bundledFeeTable, bundledOneTimeTable, factsTable, ctaBlock, paramBox,
  pageHeader, pageFooter, blankHeader, blankFooter, pageBreak,
  medallionImage, sectionHeader, benefitBlock, priceCard, discountLine,
  notesRows, bulletCategory, stepLine, closingQuoteSection, medallionLogoPathReversed,
  centeredFooter,
  LOGO_HORIZONTAL, MEDALLION_PRIMARY, MEDALLION_REVERSED,
  Table, TableRow, TableCell, WidthType, ShadingType, VerticalAlign, LevelFormat,
};
