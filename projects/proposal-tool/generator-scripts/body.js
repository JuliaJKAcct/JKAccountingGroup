const { Paragraph, TextRun, AlignmentType } = require("docx");
const { p, pr, sectionLabel, kicker, hr, bronzeRule, logoImage, BRAND, FONT_HEADING } = require("./common");

// Builds the full body of the tax-prep engagement letter.
// opts fields are plain strings already resolved (either real values or bracket placeholders).
function buildLetterBody(o) {
  const body = [];

  // Letterhead — JK Accounting Group brand: horizontal lockup logo, mono kicker, thin bronze rule.
  if (o.logoPath) {
    body.push(logoImage(o.logoPath, 260));
  } else {
    body.push(pr([new TextRun({ text: "JK Accounting Group", bold: true, size: 26, font: FONT_HEADING, color: BRAND.teal })], { spacingAfter: 40 }));
  }
  body.push(kicker("Tax Preparation Engagement Letter"));
  body.push(p(o.firmAddressLine, { size: 18, spacingAfter: 20, color: BRAND.muted }));
  body.push(p(o.firmPhoneLine, { size: 18, spacingAfter: 120, color: BRAND.muted }));
  body.push(bronzeRule());

  body.push(p(o.date, { spacingAfter: 200 }));

  body.push(p(o.clientName, { bold: true, spacingAfter: 40, color: BRAND.teal }));
  o.clientAddressLines.forEach(line => body.push(p(line, { bold: true, spacingAfter: 40 })));
  body.push(p("", { spacingAfter: 200 }));

  body.push(pr([
    new TextRun("JK Accounting Group Corp (“firm,” “we,” “us,” or “our”) is pleased to provide "),
    new TextRun({ text: o.clientName, bold: true }),
    new TextRun(" (“you” or “your”) with the professional services described below. This letter, and the attached "),
    new TextRun({ text: "Terms and Conditions Addendum", italics: true }),
    new TextRun(" and any other attachments incorporated herein (collectively, “Agreement”), confirm our understanding of the terms and objectives of our engagement and the nature and limitations of the services we will provide. The engagement between you and our firm will be governed by the terms of this Agreement.")
  ]));

  body.push(sectionLabel("Engagement Objective and Scope"));
  body.push(p(`We will prepare the following federal and state tax return${o.multiReturn ? "s" : ""} for the year ended ${o.taxYearEnd}:`));
  o.returnLines.forEach(line => body.push(p(line, { spacingAfter: 80, align: undefined })));
  body.push(p(""));
  body.push(p("We will not prepare any tax returns other than those identified above, without your written request, and our written consent to do so. We will rely upon the completeness and accuracy of the information and representations you provide to us to prepare your tax returns. We have not been engaged to and will not prepare financial statements. We will not audit or otherwise verify the data you submit to us, although we may ask you to clarify certain information."));
  body.push(p("We will prepare the above-referenced tax returns solely for filing with the Internal Revenue Service (“IRS”) and applicable state and local tax authorities. Our work is not intended to benefit or influence any third party, either to obtain credit or for any other purpose."));
  body.push(p("You agree to indemnify and hold us harmless with respect to any and all claims arising from the use of the tax returns for any purpose other than filing with the IRS, state and local tax authorities regardless of the nature of the claim, including the negligence of any party."));
  body.push(p("Our engagement does not include any procedures designed to detect errors, fraud, or theft. Therefore, our engagement cannot be relied upon to disclose such matters. In addition, we are not responsible for identifying or communicating deficiencies in your internal controls. You are responsible for developing and implementing internal controls applicable to your operations."));
  body.push(p("This engagement is limited to the professional services outlined above."));

  body.push(sectionLabel("Firm Responsibilities"));
  body.push(p("Unless otherwise noted, we will perform our services in accordance with U.S. Treasury Department Circular 230 (“Circular 230”). It is our duty to perform services with the same standard of care that a reasonable tax return preparer would exercise in this type of engagement. It is your responsibility to safeguard your assets and maintain accurate records pertaining to transactions. We will not hold your property in trust for you, or otherwise accept fiduciary duties in the performance of the engagement."));
  body.push(p("JK Accounting Group Corp, in its sole professional judgment, reserves the right to refuse to take any action that could be construed as making management decisions or performing management functions on your behalf."));

  body.push(p("Arguable positions", { underline: true, spacingAfter: 120 }));
  body.push(p("We will use our professional judgment to resolve questions in your favor where a tax law is unclear, provided that we have a reasonable belief that there is substantial authority for doing so. If there are conflicting interpretations of the law, we will explain the possible positions that may be taken on your return. We will follow the position you request, provided it is consistent with our understanding of tax reference materials. Tax reference materials include, but are not limited to, the Internal Revenue Code (“IRC”), tax regulations, Revenue Rulings, Revenue Procedures, Private Letter Rulings, court cases, and similar state and local guidance. If the IRS, state or local tax authorities later contest the position you select, additional tax, penalties, and interest may be assessed. We assume no liability, and you hereby release us from any liability, including but not limited to, additional tax, penalties, interest, and related professional fees you may incur."));

  body.push(p("Bookkeeping assistance", { underline: true, spacingAfter: 120 }));
  body.push(p(`We may deem it necessary to provide you with accounting and bookkeeping assistance (“cleanup”) solely for the purpose of preparing the tax returns identified above. In the event we conclude that such services are necessary, we will advise you in writing before the work is performed. This optional cleanup work is billed at ${o.cleanupRate}, separate from the tax preparation fee described below, and only if it turns out to be needed. You agree to pay for those required services.`));

  body.push(p("Prior year review", { underline: true, spacingAfter: 120 }));
  body.push(p("Our review of the prior year's tax return will necessarily be limited and may not find all errors. We will, however, bring to your attention any errors that we find. If you ask us to prepare amended tax returns and address any other matters arising as a result of any error, and we agree to amend the returns, we will confirm this engagement in a separate agreement."));

  body.push(p("Estimated tax payments", { underline: true, spacingAfter: 120 }));
  body.push(p(`You may be required to make quarterly estimated tax payments. Updating recommended payments to more closely reflect your actual current year's income is not within the scope of this engagement. If you would like us to provide this service, and we agree to do so, we will confirm this update in a separate agreement.`));

  body.push(p("Tax planning and advisory consultations", { underline: true, spacingAfter: 120 }));
  body.push(p(`Tax planning and advisory consultation services are not within the scope of this engagement. During the course of preparing the tax returns identified above, we may bring to your attention potential tax savings strategies for you to consider as a possible means of reducing your taxes in subsequent tax years. However, we have no responsibility to do so, and will take no action with respect to such recommendations, as the responsibility for implementation remains with you, the taxpayer. If you ask us to provide tax planning or advisory consultation services, and we agree to provide them to you, such services will be billed separately at ${o.consultRate} and confirmed in a separate agreement.`));

  body.push(p("Government inquiries", { underline: true, spacingAfter: 120 }));
  body.push(p("This engagement does not include responding to inquiries by any governmental agency or tax authority. If your tax return is selected for examination or audit, you may request our assistance in responding to such an inquiry. If you ask us to represent you, and we agree to represent you, we will confirm this engagement in a separate agreement."));

  body.push(p("Third-party requests", { underline: true, spacingAfter: 120 }));
  body.push(p("We will not respond to any request from banks, mortgage brokers or others for verification of any information reported on these tax returns. We do not communicate with third parties or provide them with copies of tax returns."));

  body.push(sectionLabel("Client Responsibilities"));
  body.push(p("You will provide us with a trial balance and other supporting data necessary to prepare your tax returns. You must provide us with accurate and complete information. Income from all sources, including those outside of the U.S., is required."));

  body.push(p("Documentation", { underline: true, spacingAfter: 120 }));
  body.push(p("You are responsible for maintaining adequate documentation to substantiate the accuracy and completeness of your tax returns. You should retain all documents that provide evidence and support for reported income, credits, deductions, and other information on your returns, as required under applicable tax laws and regulations. You represent that you have such documentation and can produce it if necessary, to respond to any audit or inquiry by tax authorities. You agree to hold our firm harmless from any liability, including but not limited to, additional tax, penalties, interest and professional fees resulting from the disallowance of tax deductions due to inadequate documentation."));

  body.push(p("Personal expenses", { underline: true, spacingAfter: 120 }));
  body.push(p("You are responsible for ensuring that personal expenses, if any, are segregated from business expenses and that expenses such as meals, travel, vehicle use, gifts, and related expenses are supported by documentation and records required by the IRS and other tax authorities. At your written request, we are available to provide you with written answers to your questions on the types of supporting records required."));

  body.push(p("State and local filing obligations", { underline: true, spacingAfter: 120 }));
  body.push(p("You are responsible for determining your tax filing obligations with any state or local tax authorities, including, but not limited to, income, franchise, sales, use, property or unclaimed property taxes. If upon review of the information you have provided to us, including information that comes to our attention, we believe that you may have additional filing obligations, we will notify you. You acknowledge that the scope of our services under this Agreement does not include any services related to your compliance with tax obligations other than those identified in the Engagement Objective and Scope section of this Agreement. If you ask us to prepare any other returns, and we agree to do so, we will confirm this engagement in a separate agreement."));

  body.push(p("U.S. filing obligations related to foreign investments", { underline: true, spacingAfter: 120 }));
  body.push(p("Based on the information you provide, you may have additional filing obligations including but not limited to: ownership of or an officer relationship with respect to certain foreign corporations (Form 5471); a foreign-owned U.S. entity or domestic disregarded entity (Form 5472); a foreign entity engaged in a U.S. trade or business (Form 5472); a U.S. transferor of property to a foreign corporation (Form 926); a U.S. person with an interest in a foreign trust (Forms 3520 and 3520-A); a U.S. person with interests in a foreign partnership (Form 8865); a U.S. person with interests in a foreign disregarded entity (Form 8858); or a statement of specified foreign assets (Form 8938)."));
  body.push(p("You are responsible for informing us of all foreign assets owned directly or indirectly, including but not limited to financial accounts with foreign institutions, other foreign non-account investments, and ownership of any foreign entities, regardless of amount. If upon review of the information you have provided to us, including information that comes to our attention, we believe that you may have additional filing obligations, we will notify you."));
  body.push(p("Failure to timely file the required forms may result in substantial civil and/or criminal penalties. By your signature below, you agree to provide us with complete and accurate information regarding any foreign investments in which you have a direct or indirect interest, or over which you have signature authority, during the above referenced tax year."));
  body.push(p("The foreign reporting requirements are very complex. If you have any questions regarding the application of the reporting requirements for your foreign interests or activities, please ask us and we will respond in writing. Only advice that is in writing may be relied upon. We assume no liability for penalties associated with the failure to file or untimely filing of any of these forms."));

  body.push(p("Foreign filing obligations", { underline: true, spacingAfter: 120 }));
  body.push(p("You are responsible for complying with the tax filing requirements of any other country. You acknowledge and agree that we have no responsibility to raise these issues with you and that foreign filing obligations are not within the scope of this engagement."));

  body.push(p("Virtual currency", { underline: true, spacingAfter: 120 }));
  body.push(p("The IRS considers virtual currency (e.g., Bitcoin) as property for U.S. federal income tax purposes. As such, any transactions in, or transactions that use, virtual currency are subject to the same general tax principles that apply to other property transactions."));
  body.push(p("If you had virtual currency activity during the tax year, you may be subject to tax consequences associated with such transactions and may have additional reporting obligations. You agree to provide us with complete and accurate information regarding any transactions in, or transactions that have used, virtual currency during the applicable tax year."));

  body.push(p("Ultimate responsibility", { underline: true, spacingAfter: 120 }));
  body.push(p("You have final responsibility for the accuracy of your tax returns. We will provide you with a copy of your electronic tax returns and accompanying schedules and statements for review prior to filing with the IRS, state and local tax authorities, as applicable. You agree to review and examine them carefully for accuracy and completeness."));
  body.push(p(`You will be required to verify and sign a completed ${o.efileForm}, before your returns can be filed electronically.`));
  body.push(p("In the event that you do not wish to have your tax returns filed electronically, please contact our firm. Additional procedures will apply. You will be responsible for reviewing the paper returns for accuracy, signing them, and filing them timely with the tax authorities."));

  body.push(sectionLabel("Timing of the Engagement"));
  body.push(p(`We expect to begin our services upon receipt of this executed Agreement, your ${o.priorInfoLabel}, and other supporting data.`));
  body.push(p("Our services will conclude upon the earlier of: (a) the filing and acceptance of your tax returns by the appropriate tax authorities and mailing or delivery of non-electronically filed tax returns (if any) to you for your review and your filing with the appropriate tax authorities, (b) written notification by either party that the engagement is terminated, or (c) one (1) year from the execution date of this Agreement."));

  body.push(sectionLabel("Extensions of Time to File Tax Returns"));
  body.push(p(`The original filing due date for your return${o.multiReturn ? "s is" : " is"} ${o.filingDueDate}. Due to the high volume of tax returns prepared by our firm, you must provide the information needed to prepare the tax return${o.multiReturn ? "s" : ""} no later than ${o.infoByDate}. Failure to do so may result in the inability to complete your return${o.multiReturn ? "s" : ""} by the original filing due date${o.multiReturn ? "s" : ""}.`));
  body.push(p("It may become necessary to apply for an extension of the filing deadline if there are unresolved issues or delays in processing, or if we do not receive all of the necessary information from you on a timely basis. Applying for an extension of time to file may extend the time available for a government agency to undertake an audit of your return or may extend the statute of limitations to file a legal action. All taxes owed are due by the original filing due date. Additionally, extensions may affect your liability for penalties and interest or compliance with governmental or other deadlines."));
  body.push(p("To the extent you wish to engage our firm to apply for extensions of time to file tax returns on your behalf, you must notify us of this request in writing. Our firm will not file these applications unless we receive an executed copy of this Agreement and your express written authorization to file for an extension. In some cases, your signature may be required on such applications prior to filing. Failure to timely request an extension of time to file can result in penalties for failure to file tax returns, which accrue from the original due date of the returns, and can be substantial."));

  body.push(sectionLabel("Penalties and Interest Charges"));
  body.push(p("Federal, state, and local tax authorities impose various penalties and interest charges for non-compliance with tax laws and regulations including failure to file or late filing of returns, and underpayment of taxes. You, as the taxpayer, remain responsible for the payment of all tax, penalties, and interest charges imposed by tax authorities."));

  body.push(sectionLabel("Professional Fee"));
  body.push(pr([
    new TextRun("Our professional fee for the tax return preparation outlined above is "),
    new TextRun({ text: o.prepFee, bold: true, color: BRAND.bronze }),
    new TextRun(". This fee is based upon the complexity of the work to be performed and our professional time, as well as out-of-pocket expenses, and depends upon the timely delivery, availability, quality, and completeness of the information you provide to us. This fee is invoiced upon completion of the engagement, prior to release of the completed tax return(s)."),
  ]));
  body.push(p(`If bookkeeping or accounting cleanup work is needed to complete the return(s) (see Bookkeeping assistance above), that work is billed separately at ${o.cleanupRate}. Any tax planning or advisory consultations outside the scope of this engagement are billed separately at ${o.consultRate} under a separate agreement.`));
  body.push(p("You agree that you will deliver all records requested and respond to all inquiries made by our staff to complete this engagement on a timely basis. You agree to pay all fees and expenses incurred whether or not we prepare the tax returns."));
  body.push(p("We require that all outstanding invoices be paid prior to releasing the completed tax returns. We do not release incomplete tax returns."));

  body.push(hr());

  body.push(p(`We appreciate the opportunity to be of service to ${o.clientName}. Please date and execute this Agreement, and the attached Terms and Conditions Addendum, and return them to us to acknowledge your acceptance. We will not initiate services until we receive the executed Agreement.`));

  body.push(p("Very truly yours,", { spacingAfter: 400 }));
  body.push(p("JK Accounting Group Corp", { spacingAfter: 40 }));
  body.push(p(o.signerName, { spacingAfter: 40 }));
  body.push(p(o.signerTitle, { spacingAfter: 400 }));

  body.push(p("ACCEPTED:", { spacingAfter: 200 }));
  body.push(p(o.repName || o.clientName, { bold: true, italics: true, spacingAfter: 300 }));
  body.push(p("Client Signature: _______________________________________", { italics: true, spacingAfter: 200 }));
  body.push(p(`Client Representative: ${o.repName ? o.repName + " _______________________________________" : "_______________________________________"}`, { italics: true, spacingAfter: 200 }));
  body.push(p(`Title of Representative: ${o.repTitle ? o.repTitle + " _______________________________________" : "_______________________________________"}`, { italics: true, spacingAfter: 200 }));
  body.push(p("Date: _______________________________________", { italics: true, spacingAfter: 200 }));

  return body;
}

module.exports = { buildLetterBody };
