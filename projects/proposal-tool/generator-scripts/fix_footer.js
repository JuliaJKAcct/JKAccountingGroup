// Fixes the "Page X of Y" footer: Word/LibreOffice render the PAGE/NUMPAGES field
// RESULT text in the document's default ink color instead of the white set on the
// surrounding run, so the page numbers are invisible against the dark teal footer bar.
// This repaints the whole footer bar fresh with static, correctly-colored text —
// sidestepping the field-recalculation styling bug entirely.
// Usage: node fix_footer.js <input.pdf> <bars.json> <output.pdf> <proposalNumber>
const fs = require("fs");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function main() {
  const [, , inPath, barsPath, outPath, proposalNumber] = process.argv;
  const info = JSON.parse(fs.readFileSync(barsPath, "utf8"));
  const pdfBytes = fs.readFileSync(inPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const font = await pdfDoc.embedFont(StandardFonts.Courier);
  const DEEP_TEAL = rgb(13 / 255, 42 / 255, 49 / 255);
  const WHITE = rgb(1, 1, 1);
  const totalPages = info.total_pages;

  info.bars.forEach(bar => {
    const page = pdfDoc.getPage(bar.page_index);
    const yBottom = bar.page_height - bar.bottom;
    const yTop = bar.page_height - bar.top;
    const height = yTop - yBottom;

    // Repaint the bar solid to erase the old (invisibly dark) field-result text.
    page.drawRectangle({ x: bar.x0, y: yBottom, width: bar.x1 - bar.x0, height, color: DEEP_TEAL });

    const pageNum = bar.page_index + 1;
    const text = `Proposal #${proposalNumber} · Page ${pageNum} of ${totalPages}`;
    const size = 8;
    const textWidth = font.widthOfTextAtSize(text, size);
    const x = bar.x0 + ((bar.x1 - bar.x0) - textWidth) / 2;
    const y = yBottom + (height - size) / 2 + 1.5;
    page.drawText(text, { x, y, size, font, color: WHITE });
  });

  const out = await pdfDoc.save();
  fs.writeFileSync(outPath, out);
  console.log("wrote", outPath, "fixed", info.bars.length, "footers");
}

main().catch(e => { console.error(e); process.exit(1); });
