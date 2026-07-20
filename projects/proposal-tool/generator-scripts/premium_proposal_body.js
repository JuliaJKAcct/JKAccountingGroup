const { Paragraph, TextRun, AlignmentType } = require("docx");
const {
  p, pr, kicker, bronzeRule, BRAND, FONT_HEADING,
  bigTitle, eyebrowLine, contentsLine, twoColInfoTable, pageBreak,
  medallionImage, sectionHeader, benefitBlock, priceCard, discountLine,
  notesRows, bulletCategory, stepLine, closingQuoteSection, medallionLogoPathReversed,
} = require("./common");

// ---------------------------------------------------------------------------
// Cover page
// ---------------------------------------------------------------------------
function buildCover(o) {
  const rows = [
    ["Julia Kononova", (o.clientContactName || "").toUpperCase()],
    [o.signerTitle || "Chief Executive Officer, MBA, EA", ""],
    [`e ${o.firmEmail || "julia@jkaccountinggroup.com"}`, `e ${o.clientEmail || ""}`],
    [`m. ${o.firmPhoneLine || ""}`, ""],
  ];
  return [
    medallionImage(o.medallionPath, 220),
    kicker(o.kickerTop || "Proposal"),
    bigTitle(o.clientName, { size: 40, spacingAfter: 20 }),
    p(o.proposalSubtitle || "", { align: AlignmentType.CENTER, color: BRAND.muted, size: 22, spacingAfter: 100 }),
    p(`Proposal #${o.proposalNumber}`, { align: AlignmentType.CENTER, color: BRAND.bronze, size: 18, spacingAfter: 400 }),
    twoColInfoTable("PREPARED BY", "PREPARED FOR", rows),
  ];
}

// ---------------------------------------------------------------------------
// Contents page
// ---------------------------------------------------------------------------
function buildContents(o) {
  return [
    pageBreak(),
    ...sectionHeader("Overview", "Contents"),
    contentsLine("Introduction", 3),
    contentsLine("What You Get", 4),
    contentsLine("Your Investment", 5),
    contentsLine("What's Included", 6),
    contentsLine("What's Next", 7),
  ];
}

function buildIntroduction(o) {
  return [
    pageBreak(),
    ...sectionHeader("Welcome", "Introduction"),
    ...(o.introParagraphs || []).map(t => p(t)),
  ];
}

function buildWhatYouGet(o) {
  const out = [pageBreak(), ...sectionHeader("Why JK", "What You Get")];
  (o.benefits || []).forEach((b, i) => {
    out.push(benefitBlock({ kickerText: b.kicker, title: b.title, text: b.text, highlight: i === 0 }));
    out.push(p("", { spacingAfter: 160 }));
  });
  return out;
}

function buildInvestment(o) {
  const out = [
    pageBreak(),
    ...sectionHeader("Investment", "Your Investment"),
    priceCard(o.priceKicker || "Monthly Investment — All Inclusive", o.monthlyFeeDisplay, "/mo"),
    p(""),
  ];
  if (o.standardRateDisplay && o.discountText) {
    out.push(discountLine(o.standardRateDisplay, o.discountText));
  }
  if (o.investmentBodyText) out.push(p(o.investmentBodyText, { spacingAfter: 160 }));
  if (o.investmentNotes && o.investmentNotes.length) {
    out.push(...notesRows(o.investmentNotes));
    out.push(p(""));
  }
  if (o.investmentClosingNote) out.push(p(o.investmentClosingNote, { color: BRAND.muted, size: 18, italic: true }));
  return out;
}

function buildWhatsIncluded(o) {
  const out = [pageBreak(), ...sectionHeader("Scope of Services", "What's Included")];
  (o.includedCategories || []).forEach(cat => {
    out.push(...bulletCategory(cat.title, cat.bullets));
  });
  return out;
}

function buildWhatsNext(o) {
  const out = [
    pageBreak(),
    ...sectionHeader("Next Steps", "What's Next"),
  ];
  (o.steps || []).forEach((s, i) => out.push(stepLine(i + 1, s)));
  out.push(p(""));
  out.push(new Paragraph({ children: [new TextRun({ text: "Agreement", bold: true, size: 24, font: FONT_HEADING, color: BRAND.ink })], spacing: { before: 160, after: 100 } }));
  out.push(p("By signing below, you agree to the services and fees outlined in this proposal.", { spacingAfter: 300 }));
  out.push(kicker(`On Behalf of ${o.clientName}`));
  out.push(p("_______________________________________", { spacingAfter: 40 }));
  out.push(p("Signature", { color: BRAND.muted, size: 18, spacingAfter: 300 }));
  out.push(p(o.repName || o.clientContactName, { bold: true, spacingAfter: 300 }));
  out.push(p("_______________________________________", { spacingAfter: 40 }));
  out.push(p("Date", { color: BRAND.muted, size: 18, spacingAfter: 300 }));
  out.push(p(`This proposal is valid for 30 days from ${o.date}.`, { color: BRAND.muted, size: 18, italic: true }));
  return out;
}

function buildMainBody(o) {
  return [
    ...buildContents(o),
    ...buildIntroduction(o),
    ...buildWhatYouGet(o),
    ...buildInvestment(o),
    ...buildWhatsIncluded(o),
    ...buildWhatsNext(o),
  ];
}

function buildClosing(o) {
  return [closingQuoteSection(o.medallionReversedPath, o.closingQuoteLines, o.closingAttribName, o.closingAttribSubtitle)];
}

// ---------------------------------------------------------------------------
// Terms and Conditions — same firm-standard clauses as the standalone
// JKA_Terms_and_Conditions_Addendum.docx, appended at the end of the proposal
// PDF per Julia's request (2026-07-09) rather than sent only as a separate file.
// ---------------------------------------------------------------------------
const TC_SECTIONS = [
  ["1. Document Retention", "We will retain our work papers and copies of your tax returns for seven (7) years from the date of filing. After seven years, our work papers and files will no longer be available. We are not responsible for any physical deterioration, data loss, or catastrophic event that may shorten the time during which our records will be available. Our working papers and files are not a substitute for your own original records. When any records are returned to you, it is your responsibility to retain and protect them for possible future use, including examination by governmental or regulatory agencies."],
  ["2. Communication with the IRS", "The IRS permits you to authorize us to discuss, on a limited basis, aspects of your return for one year after the return's due date. Your consent to such a discussion is evidenced by checking a box on the tax return. Unless you tell us otherwise, we will check that box authorizing the IRS to discuss the return with us."],
  ["3. Accountant-Client Privilege", "Internal Revenue Code §7525 provides a limited confidentiality privilege covering certain tax advice embodied in taxpayer communications with federally authorized tax practitioners in certain limited situations. These protections are limited in several important respects. For example, this privilege does not apply to your records, which you are required to keep in support of your tax return. In addition, the privilege does not apply to state tax issues, state tax proceedings, private civil litigation proceedings, or criminal proceedings. While we will cooperate with you with respect to the privilege, asserting the privilege is your responsibility. Inadvertent disclosure of otherwise privileged information may result in a waiver of the privilege. Please contact us immediately if you have any questions or need further information about this matter."],
  ["4. Limitation of Liability", "Our maximum liability to you arising for any reason relating to services rendered under this proposal and this Addendum shall be limited to the amount of fees you paid for the services giving rise to the claim. If any dispute arises between the parties, the parties agree first to try in good faith to settle the dispute through non-binding mediation. The costs of mediation shall be shared equally by the parties. The Internal Revenue Code and regulations impose preparation and disclosure standards with noncompliance penalties on both the preparer of a tax return and the taxpayer. If we determine that we would be subject to a preparer penalty for a strategy or position taken on your tax return, you agree to either adequately disclose that position on the return or change the position to one that would not subject us to penalty. If you do not choose to change your position or adequately disclose so as to eliminate, in our sole opinion, our exposure to the preparer penalty, we, in our sole discretion and at any time, may withdraw from the engagement without completing or delivering tax returns to you. Such withdrawal will complete our engagement, and you will be obligated to compensate us for all time expended and to reimburse us for all out-of-pocket expenses through the date of our withdrawal."],
  ["5. Confidentiality", "Each party agrees to maintain the confidentiality of the other party's non-public information disclosed in connection with this engagement, except as required by law, court order, or applicable professional standards, or as needed to perform the services described in this proposal."],
  ["6. Termination of Engagement", "Either party may terminate this relationship with thirty (30) days' written notice to the other, including email notification, provided that such notice has been received. During the 30-day termination period, projects in process shall be completed if possible, and no other work shall be undertaken unless the parties agree in writing to specific terms for the additional work. We further reserve the right to determine any possible refund for tax preparation services not yet completely filed because of the ongoing work and preparation that takes place for the upcoming filing."],
  ["7. Force Majeure", "Neither party shall be liable for any delay or failure to perform its obligations under this Agreement resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disaster, government action, labor dispute, or failure of third-party systems or utilities."],
  ["8. Assignment", "Neither party may assign this Agreement, in whole or in part, without the prior written consent of the other party, except that we may use subcontractors or staff under our supervision to perform the services described herein."],
  ["9. Notices", "Any notice required or permitted under this Agreement shall be in writing and delivered by email, hand delivery, or certified mail to the addresses on file for each party. Notice is effective upon receipt."],
  ["10. Electronic Signatures", "The parties agree that this Agreement, this proposal, and any related documents may be executed by electronic signature (including signatures collected through DocuSign or a similar platform), and that such electronic signatures shall have the same legal effect as original handwritten signatures."],
  ["11. Severability", "If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid or unenforceable provision shall be deemed modified to the minimum extent necessary to make it enforceable."],
  ["12. Governing Law", "Regardless of where the client is domiciled and regardless of where this proposal is physically signed, this Agreement shall be deemed to have been entered into at JK Accounting Group Corp's office located in Broward County, Florida, which shall be the exclusive jurisdiction for resolving disputes related to this Agreement. This Agreement shall be interpreted and governed in accordance with the laws of the State of Florida, without reference to its conflict-of-laws principles."],
  ["13. Entire Agreement; Amendment", "This Addendum, together with the proposal it accompanies, constitutes the entire agreement between the parties regarding the services described and supersedes all prior oral or written representations or commitments. This Agreement may be amended only by a written instrument signed by both parties. Each party states that it has read this Agreement, has had the opportunity to obtain the advice of counsel, and executes this Agreement voluntarily and with full knowledge of its legal significance."],
];

function buildTermsAndConditions(o) {
  const out = [
    pageBreak(),
    ...sectionHeader("Legal", "Terms and Conditions"),
    p(`This section is incorporated by reference into, and forms part of, the proposal between JK Accounting Group Corp ("firm," "we," "us," or "our") and ${o.clientName} ("you" or "your").`, { spacingAfter: 200 }),
  ];
  TC_SECTIONS.forEach(([label, text]) => {
    out.push(new Paragraph({ spacing: { before: 160, after: 80 }, children: [new TextRun({ text: label, bold: true, size: 22, font: FONT_HEADING, color: BRAND.ink })] }));
    out.push(p(text, { size: 19, spacingAfter: 140 }));
  });
  return out;
}

module.exports = { buildCover, buildMainBody, buildClosing, buildTermsAndConditions };
