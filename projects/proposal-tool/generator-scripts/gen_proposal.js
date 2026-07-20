const fs = require("fs");
const { Document, Packer, LevelFormat, AlignmentType } = require("docx");
const { PAGE, styles, LOGO_HORIZONTAL } = require("./common");
const { buildProposalBody } = require("./proposal_body");

const LOGO = LOGO_HORIZONTAL;

const templateOpts = {
  logoPath: LOGO,
  firmAddressLine: "Pembroke Pines, Florida",
  firmPhoneLine: "786-318-1505",
  date: "[Date]",
  clientName: "[Client / Entity Name]",
  proposalNumber: "[JKA####]",
  clientAddressLines: ["[Client Address Line 1]", "[Client Address Line 2]"],
  clientContactName: "[Client Contact Name]",
  monthlyFeeDisplay: "$[monthly amount]",
  includedItems: [
    "Full-service monthly bookkeeping — transaction recording, bank/credit card/PayPal reconciliations, and monthly financial statements (P&L and balance sheet).",
    "Preparation of your [entity type] year-end business tax return.",
    "Ongoing accounting advisory to help you stay compliant and informed on your numbers.",
    "[If applicable: 1099 contractor filing.]",
    "[If applicable: Sales tax return preparation and filing for [state(s)].]",
    "[If applicable: Owner payroll processing.]",
  ],
  oneTimeFeeDisplay: "$[one-time amount]",
  oneTimeItems: [
    "Cleaning up and truing up existing accounting records to a current, accurate state.",
    "Setting up and configuring your accounting systems.",
  ],
  startDate: "[Start Date]",
  yearEnd: "[Year End]",
  annualRevenue: "[Annual Revenue Range]",
  signerName: "Julia Kononova, MBA, EA",
  signerTitle: "CEO",
  repName: "",
  repTitle: "",
};

function build(opts, outPath) {
  const doc = new Document({
    styles,
    numbering: {
      config: [
        { reference: "proposal-bullets",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      ]
    },
    sections: [{
      properties: { page: PAGE },
      children: buildProposalBody(opts),
    }],
  });
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(outPath, buf);
    console.log("wrote", outPath);
  });
}

build(templateOpts, "JKA_Monthly_Proposal_Engagement_TEMPLATE.docx");
