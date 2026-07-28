const { Paragraph, TextRun, LevelFormat } = require("docx");
const { p, pr, sectionLabel, kicker, hr, bronzeRule, logoImage, BRAND, FONT_HEADING } = require("./common");

// Builds the merged Proposal + Engagement Letter for JKA monthly retainer clients.
// Single bundled fee, no line-item breakdown, per Julia's bundling strategy.
function buildProposalBody(o) {
  const body = [];

  // Letterhead
  if (o.logoPath) {
    body.push(logoImage(o.logoPath, 260));
  } else {
    body.push(pr([new TextRun({ text: "JK Accounting Group", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })], { spacingAfter: 40 }));
  }
  body.push(kicker("Proposal & Engagement Letter"));
  body.push(p(o.firmAddressLine, { size: 18, spacingAfter: 20, color: BRAND.muted }));
  body.push(p(o.firmPhoneLine, { size: 18, spacingAfter: 120, color: BRAND.muted }));
  body.push(bronzeRule());

  body.push(p(o.date, { spacingAfter: 200 }));

  body.push(pr([
    new TextRun({ text: "Proposal for ", }),
    new TextRun({ text: o.clientName, bold: true, color: BRAND.teal }),
  ], { spacingAfter: 40 }));
  body.push(p(`Proposal #${o.proposalNumber}`, { size: 18, color: BRAND.muted, spacingAfter: 40 }));
  o.clientAddressLines.forEach(line => body.push(p(line, { spacingAfter: 40 })));
  body.push(p("", { spacingAfter: 100 }));
  body.push(p(`Prepared for: ${o.clientContactName}`, { spacingAfter: 40 }));
  body.push(p(`Prepared by: ${o.signerName}, ${o.signerTitle}`, { spacingAfter: 300 }));

  // Introduction
  body.push(sectionLabel("Welcome"));
  body.push(p(`Thank you for the opportunity to work with ${o.clientName}. This proposal outlines the accounting services we discussed, and once signed, also serves as our formal engagement letter — there's nothing further to sign separately.`));

  // Monthly investment - single bundled figure, no line items
  body.push(sectionLabel("Your Monthly Investment"));
  body.push(pr([
    new TextRun("Your monthly accounting package is "),
    new TextRun({ text: o.monthlyFeeDisplay, bold: true, size: 30, color: BRAND.bronze }),
    new TextRun(", covering the full scope described below as a single, predictable fee."),
  ]));
  body.push(p("What's included:", { bold: true, spacingAfter: 120 }));
  o.includedItems.forEach(item => {
    body.push(new Paragraph({
      numbering: { reference: "proposal-bullets", level: 0 },
      spacing: { after: 100 },
      children: [new TextRun(item)],
    }));
  });
  body.push(p(""));

  if (o.oneTimeFeeDisplay) {
    body.push(sectionLabel("One-Time Onboarding"));
    body.push(pr([
      new TextRun("Getting your books current and set up on our systems is a one-time investment of "),
      new TextRun({ text: o.oneTimeFeeDisplay, bold: true, color: BRAND.bronze }),
      new TextRun(", covering the items below."),
    ]));
    o.oneTimeItems.forEach(item => {
      body.push(new Paragraph({
        numbering: { reference: "proposal-bullets", level: 0 },
        spacing: { after: 100 },
        children: [new TextRun(item)],
      }));
    });
    body.push(p(""));
  }

  body.push(p("Please Note", { bold: true, spacingAfter: 120 }));
  body.push(p(`This proposal is based on the following being accurate: start date ${o.startDate}, fiscal year end ${o.yearEnd}, annual revenue ${o.annualRevenue}. This proposal is valid for 30 days from the date above.`));

  // What happens next
  body.push(sectionLabel("What Happens Next"));
  body.push(p("Moving over to us couldn't be simpler:"));
  const steps = [
    "Sign and return this Proposal & Engagement Letter to confirm your acceptance.",
    "We'll send your first invoice via QuickBooks, payable by ACH transfer. Future invoices arrive on the 1st of each month.",
    "We'll coordinate directly with your outgoing accountant to transfer everything needed — you won't have to manage that handoff.",
    "We'll set up or configure your accounting systems (QuickBooks Online and any supporting apps) to fit your business.",
    "We'll schedule your onboarding session to align on goals and walk you and your team through how we'll work together.",
  ];
  steps.forEach((s, i) => {
    body.push(pr([new TextRun({ text: `Step ${i + 1}. `, bold: true, color: BRAND.teal }), new TextRun(s)]));
  });

  // Engagement terms (merged from Letter of Engagement)
  body.push(sectionLabel("Engagement Terms"));
  body.push(p(`Dear ${o.clientContactName},`));
  body.push(p(`We are pleased to accept the instruction to act as your accountant for ${o.clientName}, and this section confirms the terms of our engagement. Signing this document below constitutes your agreement to both the proposal above and the terms below.`));

  body.push(p("1. Client Care", { bold: true, spacingAfter: 120 }));
  body.push(p(`The principal in charge of your engagement is ${o.signerName}. Please reach us at ${o.firmPhoneLine} with any questions about the services provided or the work in progress.`));

  body.push(p("2. Who We Are Acting For", { bold: true, spacingAfter: 120 }));
  body.push(p(`We are acting for all officers of ${o.clientName} as required. Any change to the authorized party representing the company must be given to us in writing and will not take effect until we acknowledge it in writing.`));

  body.push(p("3. Period of Engagement", { bold: true, spacingAfter: 120 }));
  body.push(p("This engagement covers the services described above on an ongoing monthly basis, beginning on the start date noted above, until either party terminates it as described below. Information we acquire in the course of this engagement is confidential and will not be disclosed except as required or permitted by law, or with your express consent."));

  body.push(p("4. Our Responsibility to You", { bold: true, spacingAfter: 120 }));
  body.push(p("We will proceed on the basis of the information you provide. We will not audit or review your financial statements or other records in accordance with generally accepted auditing standards, and this engagement should not be referred to as an audit or review. We will rely on the accuracy and completeness of what you provide; our engagement cannot be relied upon to disclose errors, fraud, or other illegal acts, though we will inform you of anything material that comes to our attention."));

  body.push(p("5. Your Responsibility to Us", { bold: true, spacingAfter: 120 }));
  body.push(p("You are responsible for the accuracy and completeness of the information and documentation you provide, for safeguarding your assets, for authorizing transactions, and for maintaining adequate internal controls. You are responsible for informing us promptly of any circumstances that may affect the advice or work we provide."));

  body.push(p("6. Fees", { bold: true, spacingAfter: 120 }));
  body.push(p("Our fees are charged in accordance with the monthly investment stated above. Monthly fees are due on the 1st of each month and will be automatically withdrawn via ACH from the account you provide. Any services requested outside the scope described above will be quoted and billed separately."));

  body.push(p("7. Limitation of Liability", { bold: true, spacingAfter: 120 }));
  body.push(p("Our maximum liability to you arising for any reason relating to services rendered under this engagement shall be limited to the amount of fees paid for the services giving rise to the claim. There are no third parties entitled to rely on the work performed under this engagement."));

  body.push(p("8. Ownership of Documents", { bold: true, spacingAfter: 120 }));
  body.push(p("All original documents you provide remain your property; we may retain copies for our records. Financial statements, tax returns, and supporting documents we produce will be owned by you upon delivery. All other work papers produced in connection with this engagement remain the property of the firm."));

  body.push(p("9. Termination", { bold: true, spacingAfter: 120 }));
  body.push(p("Either party may terminate this engagement at any time, without penalty, upon written notice. This letter supersedes any previous engagement letter between the parties and will remain effective until replaced."));

  body.push(bronzeRule());
  body.push(p(`We appreciate the opportunity to work with ${o.clientName}. Please sign and return this document to confirm your acceptance of the proposal and engagement terms above.`));

  body.push(p("Sincerely,", { spacingAfter: 300 }));
  body.push(p("JK Accounting Group Corp", { spacingAfter: 40, color: BRAND.teal, bold: true }));
  body.push(p(o.signerName, { spacingAfter: 40 }));
  body.push(p(o.signerTitle, { spacingAfter: 400 }));

  body.push(p("ACCEPTED AND AGREED:", { spacingAfter: 200 }));
  body.push(p(o.clientName, { bold: true, spacingAfter: 300, color: BRAND.teal }));
  body.push(p("Client Signature: _______________________________________", { spacingAfter: 200 }));
  body.push(p(`Client Representative: ${o.repName ? o.repName + " _______________________________________" : "_______________________________________"}`, { spacingAfter: 200 }));
  body.push(p(`Title: ${o.repTitle ? o.repTitle + " _______________________________________" : "_______________________________________"}`, { spacingAfter: 200 }));
  body.push(p("Date: _______________________________________", { spacingAfter: 200 }));

  return body;
}

module.exports = { buildProposalBody };
