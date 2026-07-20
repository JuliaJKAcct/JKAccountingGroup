// Adds simple fillable text fields (signature name + date) to an existing proposal PDF,
// positioned over the printed "___" lines on the Agreement/signature page.
// Usage: node add_form_fields.js <input.pdf> <coords.json> <output.pdf> <fieldPrefix>
const fs = require("fs");
const { PDFDocument, rgb, StandardFonts } = require("pdf-lib");

async function main() {
  const [, , inPath, coordsPath, outPath, prefix] = process.argv;
  const coords = JSON.parse(fs.readFileSync(coordsPath, "utf8"));
  const pdfBytes = fs.readFileSync(inPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const page = pdfDoc.getPage(coords.page_index);
  const form = pdfDoc.getForm();
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  function addField(name, c, placeholder) {
    // pdfplumber's "top"/"bottom" are measured from the TOP of the page; pdf-lib/PDF
    // coordinates measure from the BOTTOM, so flip, then float the field a few points
    // above the printed underline so typed text sits on the line rather than through it.
    const yBottomOfLine = coords.page_height - c.bottom;
    const fieldHeight = 20;
    const y = yBottomOfLine + 1;
    const x = c.x0 + 2;
    const width = (c.x1 - c.x0) - 4;

    const field = form.createTextField(name);
    field.addToPage(page, { x, y, width, height: fieldHeight, borderWidth: 0, font });
    field.setFontSize(11);
    field.setText("");
  }

  addField(`${prefix}_signature`, coords.signature_field, "Type full name to sign");
  addField(`${prefix}_date`, coords.date_field, "Date");

  const out = await pdfDoc.save();
  fs.writeFileSync(outPath, out);
  console.log("wrote", outPath, "fields:", form.getFields().map(f => f.getName()));
}

main().catch(e => { console.error(e); process.exit(1); });
