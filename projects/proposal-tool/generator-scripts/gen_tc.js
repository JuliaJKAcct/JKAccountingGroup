const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, HeadingLevel } = require("docx");
const { PAGE, styles, p, pr, sectionLabel, kicker, bronzeRule, logoImage, BRAND, FONT_HEADING, LOGO_HORIZONTAL } = require("./common");

const body = [];

body.push(logoImage(LOGO_HORIZONTAL, 220));
body.push(kicker("Terms and Conditions Addendum"));
body.push(bronzeRule());

body.push(new Paragraph({ heading: HeadingLevel.HEADING_1, alignment: "center",
  children: [new TextRun({ text: "TERMS AND CONDITIONS ADDENDUM", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })] }));
body.push(p("JK Accounting Group Corp", { align: "center", bold: true, spacingAfter: 40, color: BRAND.teal }));
body.push(p("This Addendum is incorporated by reference into, and forms part of, the Engagement Letter between JK Accounting Group Corp (“firm,” “we,” “us,” or “our”) and the client identified in that Engagement Letter (“you” or “your”).", { spacingAfter: 300 }));

const sections = [
  ["1. Document Retention", "We will retain our work papers and copies of your tax returns for seven (7) years from the date of filing. After seven years, our work papers and files will no longer be available. We are not responsible for any physical deterioration, data loss, or catastrophic event that may shorten the time during which our records will be available. Our working papers and files are not a substitute for your own original records. When any records are returned to you, it is your responsibility to retain and protect them for possible future use, including examination by governmental or regulatory agencies."],
  ["2. Communication with the IRS", "The IRS permits you to authorize us to discuss, on a limited basis, aspects of your return for one year after the return's due date. Your consent to such a discussion is evidenced by checking a box on the tax return. Unless you tell us otherwise, we will check that box authorizing the IRS to discuss the return with us."],
  ["3. Accountant-Client Privilege", "Internal Revenue Code §7525 provides a limited confidentiality privilege covering certain tax advice embodied in taxpayer communications with federally authorized tax practitioners in certain limited situations. These protections are limited in several important respects. For example, this privilege does not apply to your records, which you are required to keep in support of your tax return. In addition, the privilege does not apply to state tax issues, state tax proceedings, private civil litigation proceedings, or criminal proceedings. While we will cooperate with you with respect to the privilege, asserting the privilege is your responsibility. Inadvertent disclosure of otherwise privileged information may result in a waiver of the privilege. Please contact us immediately if you have any questions or need further information about this matter."],
  ["4. Limitation of Liability", "Our maximum liability to you arising for any reason relating to services rendered under the Engagement Letter and this Addendum shall be limited to the amount of fees you paid for the services giving rise to the claim. If any dispute arises between the parties, the parties agree first to try in good faith to settle the dispute through non-binding mediation. The costs of mediation shall be shared equally by the parties. The Internal Revenue Code and regulations impose preparation and disclosure standards with noncompliance penalties on both the preparer of a tax return and the taxpayer. If we determine that we would be subject to a preparer penalty for a strategy or position taken on your tax return, you agree to either adequately disclose that position on the return or change the position to one that would not subject us to penalty. If you do not choose to change your position or adequately disclose so as to eliminate, in our sole opinion, our exposure to the preparer penalty, we, in our sole discretion and at any time, may withdraw from the engagement without completing or delivering tax returns to you. Such withdrawal will complete our engagement, and you will be obligated to compensate us for all time expended and to reimburse us for all out-of-pocket expenses through the date of our withdrawal."],
  ["5. Confidentiality", "Each party agrees to maintain the confidentiality of the other party's non-public information disclosed in connection with this engagement, except as required by law, court order, or applicable professional standards, or as needed to perform the services described in the Engagement Letter."],
  ["6. Termination of Engagement", "Either party may terminate this relationship with thirty (30) days' written notice to the other, including email notification, provided that such notice has been received. During the 30-day termination period, projects in process shall be completed if possible, and no other work shall be undertaken unless the parties agree in writing to specific terms for the additional work. We further reserve the right to determine any possible refund for tax preparation services not yet completely filed because of the ongoing work and preparation that takes place for the upcoming filing."],
  ["7. Force Majeure", "Neither party shall be liable for any delay or failure to perform its obligations under this Agreement resulting from causes beyond its reasonable control, including but not limited to acts of God, natural disaster, government action, labor dispute, or failure of third-party systems or utilities."],
  ["8. Assignment", "Neither party may assign this Agreement, in whole or in part, without the prior written consent of the other party, except that we may use subcontractors or staff under our supervision to perform the services described herein."],
  ["9. Notices", "Any notice required or permitted under this Agreement shall be in writing and delivered by email, hand delivery, or certified mail to the addresses on file for each party. Notice is effective upon receipt."],
  ["10. Electronic Signatures", "The parties agree that this Agreement, the Engagement Letter, and any related documents may be executed by electronic signature (including signatures collected through DocuSign or a similar platform), and that such electronic signatures shall have the same legal effect as original handwritten signatures."],
  ["11. Severability", "If any provision of this Agreement is held invalid or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid or unenforceable provision shall be deemed modified to the minimum extent necessary to make it enforceable."],
  ["12. Governing Law", "Regardless of where the client is domiciled and regardless of where the Engagement Letter is physically signed, this Agreement shall be deemed to have been entered into at JK Accounting Group Corp's office located in Broward County, Florida, which shall be the exclusive jurisdiction for resolving disputes related to this Agreement. This Agreement shall be interpreted and governed in accordance with the laws of the State of Florida, without reference to its conflict-of-laws principles."],
  ["13. Entire Agreement; Amendment", "This Addendum, together with the Engagement Letter it accompanies, constitutes the entire agreement between the parties regarding the services described and supersedes all prior oral or written representations or commitments. This Agreement may be amended only by a written instrument signed by both parties. Each party states that it has read this Agreement, has had the opportunity to obtain the advice of counsel, and executes this Agreement voluntarily and with full knowledge of its legal significance."],
];

sections.forEach(([label, text]) => {
  body.push(sectionLabel(label));
  body.push(p(text));
});

const doc = new Document({
  styles,
  sections: [{ properties: { page: PAGE }, children: body }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("JKA_Terms_and_Conditions_Addendum.docx", buf);
  console.log("wrote addendum");
});
