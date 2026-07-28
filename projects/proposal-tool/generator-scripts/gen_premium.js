const fs = require("fs");
const { Document, Packer, LevelFormat, AlignmentType } = require("docx");
const { PAGE, styles, blankHeader, blankFooter, centeredFooter, MEDALLION_PRIMARY, MEDALLION_REVERSED } = require("./common");
const { buildCover, buildMainBody, buildClosing, buildTermsAndConditions } = require("./premium_proposal_body");

const MEDALLION = MEDALLION_PRIMARY;
const MEDALLION_REV = MEDALLION_REVERSED;

const templateOpts = {
  medallionPath: MEDALLION,
  medallionReversedPath: MEDALLION_REV,
  firmPhoneLine: "786-318-1505",
  firmEmail: "julia@jkaccountinggroup.com",
  date: "[Date]",
  clientName: "[Client / Entity Name]",
  kickerTop: "Proposal",
  proposalSubtitle: "[One-line description of engagement]",
  proposalNumber: "[JKA####]",
  clientContactName: "[Client Contact Name]",
  clientEmail: "[client email]",
  signerTitle: "Chief Executive Officer, MBA, EA",
  introParagraphs: [
    "Welcome to your proposal.",
    "[Context paragraph — why this engagement, what's changed, what you're solving for.]",
    "[Closing paragraph — what this proposal covers and the outcome we're aiming for together.]",
  ],
  benefits: [
    { kicker: "[Benefit 1 kicker]", title: "[Benefit 1 title]", text: "[Benefit 1 description]" },
    { kicker: "[Benefit 2 kicker]", title: "[Benefit 2 title]", text: "[Benefit 2 description]" },
    { kicker: "[Benefit 3 kicker]", title: "[Benefit 3 title]", text: "[Benefit 3 description]" },
  ],
  priceKicker: "Monthly Investment — All Inclusive",
  monthlyFeeDisplay: "$[amount]",
  standardRateDisplay: "$[standard amount]",
  discountText: "[X]% discount (–$[amount]) for [reason]",
  investmentBodyText: "Covers everything in the What's Included section — as a single fixed monthly payment, with nothing billed separately during the year.",
  investmentNotes: [],
  investmentClosingNote: "Fee is reviewed annually for inflation. This proposal is valid for 30 days.",
  includedCategories: [
    { title: "[Category 1]", bullets: ["[Item]", "[Item]"] },
    { title: "[Category 2]", bullets: ["[Item]", "[Item]"] },
  ],
  steps: [
    "Review this proposal and sign the agreement below.",
    "We'll send your first monthly invoice via QuickBooks, payable by ACH; future invoices arrive on the 1st of each month.",
    "We'll set up your accounting systems and coordinate any handoff needed.",
    "We'll hold a kickoff session to align on goals and reporting.",
  ],
  repName: "",
  closingQuoteLines: ["«Knowing is not enough, we must apply.", "Willing is not enough, we must do.»"],
  closingAttribName: "Bruce Lee",
  closingAttribSubtitle: "Actor & Martial Artist",
};

function build(opts, outPath) {
  const doc = new Document({
    background: { color: "F6F3EC" },
    styles,
    numbering: {
      config: [
        { reference: "included-bullets",
          levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      ]
    },
    sections: [
      {
        properties: { page: opts._page || PAGE, titlePage: true },
        headers: { default: blankHeader(), first: blankHeader() },
        footers: { default: blankFooter(), first: blankFooter() },
        children: buildCover(opts),
      },
      {
        properties: { page: PAGE },
        headers: { default: blankHeader() },
        footers: { default: centeredFooter(opts.proposalNumber) },
        children: buildMainBody(opts),
      },
      {
        properties: { page: { ...PAGE, margin: { top: 0, right: 0, bottom: 0, left: 0, header: 0, footer: 0, gutter: 0 } } },
        headers: { default: blankHeader() },
        footers: { default: blankFooter() },
        children: buildClosing(opts),
      },
      {
        properties: { page: PAGE },
        headers: { default: blankHeader() },
        footers: { default: centeredFooter(opts.proposalNumber) },
        children: buildTermsAndConditions(opts),
      },
    ],
  });
  Packer.toBuffer(doc).then(buf => {
    fs.writeFileSync(outPath, buf);
    console.log("wrote", outPath);
  });
}

build(templateOpts, "JKA_Monthly_Proposal_Engagement_TEMPLATE_premium.docx");
