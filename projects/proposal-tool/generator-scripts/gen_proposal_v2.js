const fs = require("fs");
const { Document, Packer } = require("docx");
const { PAGE, styles, pageHeader, pageFooter, blankHeader, blankFooter, LOGO_HORIZONTAL } = require("./common");
const { buildCover, buildMainBody } = require("./gopro_proposal_body");

const LOGO = LOGO_HORIZONTAL;

const templateOpts = {
  logoPath: LOGO,
  firmAddressLine: "Pembroke Pines, Florida",
  firmPhoneLine: "786-318-1505",
  firmEmail: "julia@jkaccountinggroup.com",
  date: "[Date]",
  clientName: "[Client / Entity Name]",
  proposalNumber: "[JKA####]",
  clientContactName: "[Client Contact Name]",
  clientEmail: "[client email]",
  monthlyFeeDisplay: "$[monthly amount]",
  oneTimeFeeDisplay: null,
  startDate: "[Start Date]",
  yearEnd: "[Year End]",
  annualRevenue: "[Annual Revenue Range]",
  recordingFrequency: "[Monthly / Bi-weekly / Weekly]",
  bankFeeds: "[Connected / Manual]",
  numLocations: "[#]",
  numAccounts: "[#]",
  includesSalesTax: true,
  salesTaxFrequency: "[Monthly / Quarterly]",
  salesTaxStates: "[#]",
  includes1099: true,
  includesYearEndPlanning: false,
  taxPrepNarrative: "We prepare your year-end business tax return ([entity type]). This fee is bundled into your monthly accounting cost to create a single, predictable expense.",
  signerName: "Julia Kononova, MBA, EA",
  signerTitle: "CEO",
  repName: "",
  repTitle: "",
};

function build(opts, outPath) {
  const doc = new Document({
    styles,
    sections: [
      {
        properties: { page: opts._page || PAGE, titlePage: true },
        headers: { default: blankHeader(), first: blankHeader() },
        footers: { default: blankFooter(), first: blankFooter() },
        children: buildCover(opts),
      },
      {
        properties: { page: PAGE },
        headers: { default: pageHeader(opts.proposalNumber, opts.logoPath) },
        footers: { default: pageFooter() },
        children: buildMainBody(opts),
      },
    ],
  });
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(outPath, buf);
    console.log("wrote", outPath);
  });
}

build(templateOpts, "JKA_Monthly_Proposal_Engagement_TEMPLATE_v2.docx");
