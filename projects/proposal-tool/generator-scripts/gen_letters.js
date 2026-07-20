const fs = require("fs");
const { Document, Packer } = require("docx");
const { PAGE, styles, LOGO_HORIZONTAL } = require("./common");
const { buildLetterBody } = require("./body");

const LOGO = LOGO_HORIZONTAL;

const masterOpts = {
  logoPath: LOGO,
  firmAddressLine: "Pembroke Pines, Florida",
  firmPhoneLine: "786-318-1505",
  date: "[Date]",
  clientName: "[Client Name / Entity Name]",
  clientAddressLines: ["[Client Address Line 1]", "[Client Address Line 2]"],
  multiReturn: false,
  taxYearEnd: "[December 31, 20__]",
  returnLines: [
    "[Select applicable return(s):]",
    "☐ Form 1040 U.S. Individual Income Tax Return",
    "☐ Form 1120 U.S. Corporation Income Tax Return",
    "☐ Form 1120-S U.S. Income Tax Return for an S Corporation",
    "☐ Form 1065 U.S. Return of Partnership Income",
    "☐ [Other: _______________________]",
  ],
  cleanupRate: "$60/hr",
  consultRate: "$150/hr",
  efileForm: "Form 8879 (or the applicable variant — 8879-C for Form 1120, 8879-S for Form 1120-S, 8879-PE for Form 1065), IRS e-file Signature Authorization",
  priorInfoLabel: "[prior year-end] trial balance",
  filingDueDate: "[April 15, 20__ for individual/C-corp returns; March 15, 20__ for S-corp/partnership returns]",
  infoByDate: "[date]",
  prepFee: "$[amount], estimated based on the return(s) selected above",
  signerName: "Julia Kononova, MBA, EA",
  signerTitle: "CEO",
};

function build(opts, outPath, title) {
  const doc = new Document({
    styles,
    sections: [{
      properties: { page: PAGE },
      children: buildLetterBody(opts),
    }],
  });
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(outPath, buf);
    console.log("wrote", outPath);
  });
}

build(masterOpts, "JKA_Tax_Prep_Engagement_Letter_TEMPLATE.docx", "master");
