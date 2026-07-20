const { Paragraph, TextRun, AlignmentType } = require("docx");
const {
  p, pr, logoImage, kicker, bronzeRule, BRAND, FONT_HEADING, FONT_MONO,
  bigTitle, eyebrowLine, sectionDividerPage, contentsLine, twoColInfoTable,
  bundledFeeTable, bundledOneTimeTable, factsTable, ctaBlock, paramBox, pageBreak,
} = require("./common");

// ---------------------------------------------------------------------------
// Cover page — mirrors GoProposal's cover: centered logo, "Proposal for" +
// client name, proposal number, CREATED BY / CREATED FOR table.
// ---------------------------------------------------------------------------
function buildCover(o) {
  const { ImageRun } = require("docx");
  const fs = require("fs");
  const data = fs.readFileSync(o.logoPath);
  const ratio = 566 / 2048;
  const width = 320;
  const logo = new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 1400, after: 500 },
    children: [new ImageRun({
      type: "png", data,
      transformation: { width, height: Math.round(width * ratio) },
      altText: { title: "JK Accounting Group logo", description: "JK Accounting Group logo", name: "JK logo" }
    })]
  });

  const rows = [
    ["Julia Kononova", (o.clientContactName || "").toUpperCase()],
    ["Chief Executive Officer, MBA, EA", ""],
    [`e ${o.firmEmail || "julia@jkaccountinggroup.com"}`, `e ${o.clientEmail || ""}`],
    [`m. ${o.firmPhoneLine || ""}`, ""],
  ];

  return [
    logo,
    eyebrowLine("Proposal for"),
    bigTitle(o.clientName.toUpperCase(), { size: 40, spacingAfter: 40 }),
    p(`Proposal #${o.proposalNumber}`, { align: AlignmentType.CENTER, color: BRAND.muted, size: 20, spacingAfter: 400 }),
    twoColInfoTable("CREATED BY", "CREATED FOR", rows),
  ];
}

// ---------------------------------------------------------------------------
// Contents page
// ---------------------------------------------------------------------------
function buildContents() {
  return [
    pageBreak(),
    ...(function () { const b = []; b.push(new Paragraph({ children: [new TextRun({ text: "CONTENTS", bold: true, size: 34, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 160 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } })); return b; })(),
    contentsLine("Introduction", 3),
    contentsLine("Your Monthly Investment", 4),
    contentsLine("What Happens Next", 5),
    contentsLine("What's Included", 6),
    contentsLine("Engagement Terms", 7),
  ];
}

function buildIntroduction(o) {
  return [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "INTRODUCTION", bold: true, size: 34, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 160 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } }),
    p("Welcome to your proposal."),
    p(`We're glad to be presenting this to ${o.clientName} — thank you for the opportunity to work together.`),
    p(`This proposal outlines the accounting services we discussed, and once signed, also serves as our formal engagement letter — there's nothing further to sign separately.`),
  ];
}

function buildInvestment(o) {
  const out = [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "YOUR MONTHLY INVESTMENT", bold: true, size: 34, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 160 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } }),
    p("This section outlines your full-service accounting package and the single monthly fee associated with it. For a full explanation of everything included, see the WHAT'S INCLUDED section of this proposal."),
    p("Monthly Investment", { bold: true, spacingAfter: 100 }),
    bundledFeeTable("Full-Service Accounting Package", `${o.monthlyFeeDisplay}/mo`),
  ];
  if (o.investmentSummaryLine) {
    out.push(p(o.investmentSummaryLine, { spacingAfter: 160, color: BRAND.muted, italic: true, size: 20 }));
  }
  out.push(p(""));
  if (o.oneTimeFeeDisplay) {
    out.push(p("One-Time Onboarding", { bold: true, spacingAfter: 100 }));
    out.push(bundledOneTimeTable("Onboarding & Setup", o.oneTimeFeeDisplay));
    out.push(p(""));
  }
  out.push(p("Please Note", { bold: true, spacingAfter: 100 }));
  out.push(p("This proposal and this fee are based on the following being accurate:"));
  out.push(factsTable([
    ["Start Date", o.startDate],
    ["Year End", o.yearEnd],
    ["Annual Revenue", o.annualRevenue],
  ]));
  out.push(p("This proposal is valid for 30 days from the date above.", { spacingAfter: 200, italic: true, color: BRAND.muted, size: 18 }));
  return out;
}

function buildWhatHappensNext(o) {
  const steps = [
    "Sign and return this Proposal & Engagement Letter to confirm your acceptance.",
    "We'll send your first invoice via QuickBooks, payable by ACH transfer. Future invoices arrive on the 1st of each month.",
    "We'll coordinate directly with your outgoing accountant to transfer everything needed — you won't have to manage that handoff.",
    "We'll set up or configure your accounting systems (QuickBooks Online and any supporting apps) to fit your business.",
    "We'll schedule your onboarding session to align on goals and walk you and your team through how we'll work together.",
  ];
  const out = [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "WHAT HAPPENS NEXT?", bold: true, size: 34, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 160 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } }),
    p("Moving over to us couldn't be simpler:"),
  ];
  steps.forEach((s, i) => {
    out.push(pr([new TextRun({ text: `STEP ${i + 1} — `, bold: true, color: BRAND.teal }), new TextRun(s)], { spacingAfter: 160 }));
  });
  out.push(ctaBlock(["SIGN & RETURN TO GET STARTED", `Proposal #${o.proposalNumber}`]));
  out.push(p(`This proposal is valid for 30 days from ${o.date}.`, { align: AlignmentType.CENTER, color: BRAND.muted, size: 18, italic: true }));
  return out;
}

function buildIncludedDivider() {
  return [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "WHAT'S INCLUDED", bold: true, size: 40, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 200 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } }),
    p("Here is a full explanation of the services included in your monthly accounting package."),
  ];
}

function buildServiceDetails(o) {
  const out = [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "PROFESSIONAL BOOKKEEPING SERVICES", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 140 } }),
    p("Recording Accounting Transactions", { bold: true, spacingAfter: 80 }),
    paramBox([
      ["Recording Frequency", o.recordingFrequency || "Weekly"],
      ["Bank Feeds", o.bankFeeds || "Connected"],
      ["Number of Locations", o.numLocations || "1"],
    ]),
    p("We record all bank, credit card, and PayPal activity on a recurring basis so your books stay current and reconciled throughout the month, not just at year end."),
    p("Reconcile Bank, Credit Card & PayPal Accounts", { bold: true, spacingAfter: 80 }),
    paramBox([["Number of Accounts", o.numAccounts || "—"]]),
    p("Each connected account is reconciled monthly to confirm your reported cash position is accurate and to catch any unauthorized or unexpected activity early."),
    p("Prepare Financial Statements", { bold: true, spacingAfter: 80 }),
    p("You'll receive a standard set of financial statements each month: a balance sheet (assets, liabilities, and equity as of the report date) and a profit & loss statement (revenue, expenses, and results of operations for the period)."),

    new Paragraph({ children: [new TextRun({ text: "TAX & COMPLIANCE SERVICES", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })], spacing: { before: 200, after: 140 } }),
    p("Business Year-End Tax Preparation", { bold: true, spacingAfter: 80 }),
    p(o.taxPrepNarrative || "We prepare your year-end federal and state business tax returns. This fee is bundled into your monthly accounting cost to create a single, predictable expense."),
  ];
  if (o.includesSalesTax) {
    out.push(p("Sales Tax Filing", { bold: true, spacingAfter: 80 }));
    out.push(paramBox([
      ["Filing Frequency", o.salesTaxFrequency || "Monthly"],
      ["Number of States", o.salesTaxStates || "1"],
    ]));
    out.push(p("We prepare and file your sales and use tax returns on time, for as many states as required, and manage the full paperwork and payment process."));
  }
  if (o.includes1099) {
    out.push(p("1099 Filing", { bold: true, spacingAfter: 80 }));
    out.push(p("We review payments to contractors, prepare a summary for your review, issue approved 1099s, and submit the required copies to the IRS."));
  }
  out.push(new Paragraph({ children: [new TextRun({ text: "ADVISORY SERVICES", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })], spacing: { before: 200, after: 140 } }));
  out.push(p("Accounting Advisory Services", { bold: true, spacingAfter: 80 }));
  out.push(p("Ongoing recommendations, options, and strategies to help you and your business achieve its financial and operational goals — while staying compliant with vendor documentation, sales & payroll tax, and general IRS requirements."));
  if (o.includesYearEndPlanning) {
    out.push(p("Pre-Year-End Tax Planning Review", { bold: true, spacingAfter: 80 }));
    out.push(p("Before your fiscal year closes, we review your position and flag any planning moves worth making, so there are no surprises at filing time."));
  }
  return out;
}

function buildEngagementTerms(o) {
  return [
    pageBreak(),
    new Paragraph({ children: [new TextRun({ text: "ENGAGEMENT TERMS", bold: true, size: 34, font: FONT_HEADING, color: BRAND.teal })], spacing: { after: 160 }, border: { bottom: { style: "single", size: 8, color: BRAND.teal, space: 4 } } }),
    p(`Dear ${o.clientContactName},`),
    p(`We are pleased to accept the instruction to act as your accountant for ${o.clientName}, and this section confirms the terms of our engagement. Signing this document constitutes your agreement to both the proposal above and the terms below.`),

    p("1. Client Care", { bold: true, spacingAfter: 100 }),
    p(`The principal in charge of your engagement is ${o.signerName}. Please reach us at ${o.firmPhoneLine} with any questions about the services provided or work in progress.`),

    p("2. Who We Are Acting For", { bold: true, spacingAfter: 100 }),
    p(`We are acting for all officers of ${o.clientName} as required. Any change to the authorized party representing the company must be given to us in writing and will not take effect until we acknowledge it in writing.`),

    p("3. Period of Engagement", { bold: true, spacingAfter: 100 }),
    p("This engagement covers the services described above on an ongoing monthly basis, beginning on the start date noted above, until either party terminates it as described below. Information we acquire in the course of this engagement is confidential and will not be disclosed except as required or permitted by law, or with your express consent."),

    p("4. Our Responsibility to You", { bold: true, spacingAfter: 100 }),
    p("We will proceed on the basis of the information you provide. We will not audit or review your financial statements or other records in accordance with generally accepted auditing standards, and this engagement should not be referred to as an audit or review."),

    p("5. Your Responsibility to Us", { bold: true, spacingAfter: 100 }),
    p("You are responsible for the accuracy and completeness of the information and documentation you provide, for safeguarding your assets, for authorizing transactions, and for maintaining adequate internal controls."),

    p("6. Fees", { bold: true, spacingAfter: 100 }),
    p("Our fees are charged in accordance with the monthly investment stated above. Monthly fees are due on the 1st of each month and will be automatically withdrawn via ACH from the account you provide. Any services requested outside the scope described above will be quoted and billed separately."),

    p("7. Limitation of Liability", { bold: true, spacingAfter: 100 }),
    p("Our maximum liability to you arising for any reason relating to services rendered under this engagement shall be limited to the amount of fees paid for the services giving rise to the claim."),

    p("8. Ownership of Documents", { bold: true, spacingAfter: 100 }),
    p("All original documents you provide remain your property. Financial statements, tax returns, and supporting documents we produce will be owned by you upon delivery. All other work papers remain the property of the firm."),

    p("9. Termination", { bold: true, spacingAfter: 100 }),
    p("Either party may terminate this engagement at any time, without penalty, upon written notice. This letter supersedes any previous engagement letter between the parties."),

    bronzeRule(),
    p(`We appreciate the opportunity to work with ${o.clientName}. Please sign and return this document to confirm your acceptance of the proposal and engagement terms above.`),
    p("Sincerely,", { spacingAfter: 300 }),
    p("JK Accounting Group Corp", { spacingAfter: 40, color: BRAND.teal, bold: true }),
    p(o.signerName, { spacingAfter: 40 }),
    p(o.signerTitle, { spacingAfter: 400 }),
    p("ACCEPTED AND AGREED:", { spacingAfter: 200 }),
    p(o.clientName, { bold: true, spacingAfter: 300, color: BRAND.teal }),
    p("Client Signature: _______________________________________", { spacingAfter: 200 }),
    p(`Client Representative: ${o.repName ? o.repName + " _______________________________________" : "_______________________________________"}`, { spacingAfter: 200 }),
    p(`Title: ${o.repTitle ? o.repTitle + " _______________________________________" : "_______________________________________"}`, { spacingAfter: 200 }),
    p("Date: _______________________________________", { spacingAfter: 200 }),
  ];
}

function buildMainBody(o) {
  return [
    ...buildContents(),
    ...buildIntroduction(o),
    ...buildInvestment(o),
    ...buildWhatHappensNext(o),
    ...buildIncludedDivider(),
    ...buildServiceDetails(o),
    ...buildEngagementTerms(o),
  ];
}

module.exports = { buildCover, buildMainBody };
