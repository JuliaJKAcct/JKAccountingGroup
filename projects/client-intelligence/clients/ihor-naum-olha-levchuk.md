# Ihor Naum & Olha Levchuk

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-07-30

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering preparer needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** Ihor Naum & Olha Levchuk — an individual (joint) client record, not a company. The couple's companies have their own files (see §7 Related clients).
- **Entity type:** Individual / sole proprietor — Form 1040 with Schedule C _(Double: Account Type = Individual, Tax Return Type = 1040-SCH C, 2026-07-30)_.
- **Home state:** _(pending — conflicting signals: the related entities are Florida companies, but `aura-remodeling.md` infers Illinois from the owner's area code. Confirm from Double, since the IRS replies by mail.)_
- **Industry / what they do:** Personal tax clients. Their business activity runs through the related entities in §7 (remodeling / construction). Note the Schedule C is not yet tied to a specific entity — see §6.
- **Primary language:** Ukrainian _(the couple's company correspondence is in Ukrainian; the firm also uses Russian — see `aura-remodeling.md`)_.
- **Our engagement (services we provide):** Individual income tax only — Form 1040 with Schedule C — plus the one-off U.S. residency certification in §4. Bookkeeping N/A; no Form 1099 work; no annual report _(Double properties)_.
- **Fiscal year-end:** December 31
- **Accounting platform:** None — `platform: "none"` in Double on this individual record; the related companies carry their own books.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer / primary contact | Double client (link below) |
| Spouse (joint filer) | Double client (link below) |
| Assigned staff (firm) | **Lilian Gonzalez** _(Double property)_ |

- **Double client:** [app.doublehq.com/close?cid=710637](https://app.doublehq.com/close?cid=710637)

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double (client portal) | Tax project, documents, organizer status | _(n/a — firm login)_ | Client record `cid=710637` |
| TaxDome (legacy) | Where the 2025 organizer and the signed e-file authorization were collected before the Double migration | _(n/a — firm login)_ | Organizer "2025 individual Tax Organizer" |
| **MyFax** (myfax.com) | Sending forms to the IRS by fax; **holds the transmission proof** | _(n/a — firm login)_ | MyFax Central → Inbox → **Sent** folder; confirmations also arrive by email from `NoReply@myfax.com` |
| **Pay.gov** | Paying IRS user fees (e.g. the Form 8802 fee) | _(n/a — firm login)_ | Payment confirmations arrive by email from `notification@pay.gov` |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — individual taxpayers.

### Payroll
- **Applies?** No.

### Bookkeeping & monthly close
- **Applies?** No — Bookkeeping = N/A in Double. Our work here is tax preparation and filings, not a monthly close.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form 1040 (joint) with Schedule C; calendar year, due April 15.
- **Our role:** We prepare and file the return.
- **Organizer status:** Completed _(Double)_ — the 2025 organizer was completed by the client in TaxDome on 2026-02-16, with supporting documents uploaded the same day.
- **Current status:** 2025 return filed — Double tax project "2025 Taxes", status `filed`, filed 2026-05-25 (due date 2026-04-15; e-file authorization signed by both spouses 2026-03-03). Whether an extension was on file is not recorded — see §6.
- **Process notes (→ future SOP):** the 2025 organizer round covered car miles, home-office deduction and a gas-expense review; a Form 1095-A was provided.

### Licenses & other filings
- **Applies?** No — individual taxpayers; no business licence or annual report is filed on this record. Any licensing obligation sits on the related company files in §7.

### U.S. residency certification — Form 8802 → Form 6166

A one-off filing, not a recurring obligation, but an **open matter** as of this file's date.

- **What it is:** Form 8802 applies for Form 6166, the IRS letter certifying U.S. tax residency — used to claim income-tax-treaty benefits or a VAT exemption abroad.
- **Who and what was requested:** filed in the name of **Ihor Naum as an individual — NOT in a company's name** · country: **Ukraine** · certification years: **2023 and 2024** _(Lilian, 2026-07-30)_.
- **Our role:** the firm prepared and transmitted the application and paid the IRS user fee; the client is handling the status call to the IRS (see §5 and §6).
- **How it was filed (2026-05-06):** user fee paid electronically through Pay.gov first, then the application faxed to the IRS at 877-824-9110 (fax filing is only permitted when the fee is paid electronically; a fee paid by check must be mailed).
- **Evidence on file #1 — Pay.gov payment confirmation:** "User Fees for U.S. Residency Certification", 2026-05-06 (email from `notification@pay.gov`).
- **Evidence on file #2 — fax:** "Form 8802 – Ihor Naum", 2026-05-06 21:11 GMT, 5 pages, 215 s, successful _(MyFax)_.
- **Evidence on file #3 — fax:** "Form 8802 WITH payment confirmation – Ihor Naum", 2026-05-06 21:36 GMT, 5 pages, 217 s, successful — the complete package (application + proof of the Pay.gov payment) _(MyFax)_.
- **Where the evidence lives:** Gmail (search `from:myfax.com "Successful transmission"`) and MyFax Central → Inbox → Sent, where the transmitted document itself can also be downloaded.
- **Status as of 2026-07-30:** no response from the IRS; roughly 12 weeks elapsed, past both the IRS's 45-day guidance and the realistic 6–10-week range. No Form 6166 received.

## 5. Key facts & quirks

- **Owner group.** Ihor and Olha are the principals behind the firm's related company clients — see §7 "Related clients". Personal / 1040 facts belong in this file; company-operations facts belong in each company's file. _(Gmail + Florida DWC notice, 2026-07-30)_
- **The couple files jointly** — the 2025 e-file authorization was signed by both spouses.
- **The Form 6166 is personal, not corporate.** The certification was requested for Ihor Naum as an individual, not for any related company. The applicant of record is the person, so the IRS follow-up and any Form 2848 must be for the **individual** taxpayer — a company 2848 does not cover this application.
- **Legacy TaxDome spelling.** TaxDome carries the first name as "Ihour Naum"; Double and the tax return use "Ihor Naum". Search both spellings when hunting for documents.

### How to check the status of the Form 8802 (the durable know-how)

There is **no per-applicant online tracker** for Form 8802 and no case number. The
status is established in this order:

1. **Confirm the fee was actually collected** — Pay.gov → *Payment Activity*, or the card/bank statement. A collected fee is not proof the application arrived (Pay.gov charges independently), but a **non**-collected fee is a red flag.
2. **Keep the fax transmission proof** — the MyFax confirmation is the only evidence of filing. It lives in Gmail and in MyFax Central → Inbox → Sent, where the transmitted document can also be downloaded. MyFax can also export fax activity to CSV/Excel for a formal log.
3. **Compare against the IRS queue** — the IRS publishes, on its *Processing status for tax forms* page, the month of Form 8802 applications currently being processed. A fax dated later than that month means the application is simply still in line.
4. **Call the IRS** — 267-941-1000 (not toll-free), choosing the "U.S. residency" option; Mon–Fri, 6:00 a.m.–11:00 p.m. Eastern. This is the number the Form 8802 instructions themselves give, unchanged across the 2016, 2020 and October-2024 revisions.
5. **Have ready for that call** — the taxpayer's name and TIN, the exact fax date/time and page count, the Pay.gov confirmation number, and the year(s) and country(ies) requested. A Form 2848 must be on file for the firm to be told anything; the taxpayer calling in person must instead pass IRS identity authentication.

Watch-outs that go with the above:

- **Numbers that do NOT serve this purpose:** 800-829-1040 (general individual line), 866-860-4259 (Practitioner Priority Service — account matters only), and fax 681-247-3101 (international account issues, not Form 8802).
- **Never re-fax a duplicate.** A second copy opens a second file and delays processing further; the two 2026-05-06 transmissions above are exactly the situation to raise with the IRS rep.
- **Certification depends on the return for the certified year being on file.** Where it is not, Form 8802 requires a penalties-of-perjury statement instead. An application filed against a year with neither is a common reason nothing comes back — so when chasing a silent 8802, check the certified years first.
- **The IRS answers by mail only** — never email. Before escalating, rule out that a letter (or the Form 6166 itself) already reached the address on the application.
- **If a delay causes real economic harm** (e.g. foreign withholding because the 6166 is missing), the escalation route is the Taxpayer Advocate Service via Form 911. There is no expedite process for Form 8802.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- _(2026-02-16)_ — Client completed the 2025 individual Tax Organizer in TaxDome and uploaded supporting documents. _(TaxDome notifications)_
- _(2026-03-03)_ — E-file authorization signed by both spouses in TaxDome. _(TaxDome)_
- _(2026-05-06)_ — **Form 8802 filed.** IRS user fee paid through Pay.gov, then the application faxed to the IRS (877-824-9110) twice about 25 minutes apart — the second transmission being the complete package including the payment confirmation. Both transmissions reported successful by MyFax. _(Pay.gov + MyFax confirmations, Gmail)_
- _(2026-05-25)_ — 2025 tax return filed (Double tax project "2025 Taxes" → `filed`). _(Double)_
- _(2026-07-30, Lilian)_ — File created. Researched how to obtain the status of a Form 8802 filed by fax and recorded the method in §5. Located and verified the filing evidence in Gmail / MyFax (Pay.gov confirmation + both fax confirmations, 2026-05-06). Confirmed the IRS contact number (267-941-1000, "U.S. residency" option) against three revisions of the Form 8802 instructions. Lilian sent the client, by WhatsApp, everything needed to prove the fax was sent with the complete documentation — the client will place the status call to the IRS themselves.
- _(2026-07-30, Lilian)_ — Confirmed the application's scope: the certification was requested for Ukraine, tax years 2023 and 2024, in Ihor Naum's own name — not a company's.

### Outstanding items (CI-only — never in the SOP)

- **Client is calling the IRS** (267-941-1000, "U.S. residency" option) about the Form 8802 filed 2026-05-06 — awaiting their report back.
- Ask the client to raise the possible duplicate from the two 2026-05-06 transmissions, so the IRS processes only the complete package.
- Confirm the **2023 and 2024 returns were on file** when the application was transmitted (or that a penalties-of-perjury statement was attached) — this is the most common reason an 8802 stalls.
- Confirm a **Form 2848 for Ihor Naum as an individual** is on file (a company 2848 does not cover this application), so the firm can call directly if the client's own call doesn't resolve it.
- Watch for IRS mail — either the Form 6166 itself or a letter requesting more information; ask the client to forward anything that arrives.
- Archive the filing evidence in the client's Drive folder as one PDF (Pay.gov receipt + both MyFax confirmations + the transmitted document from MyFax → Sent), rather than leaving it only in Gmail/MyFax.

### Information still needed

- [x] Which country and tax year(s) the Form 6166 was requested for — **Ukraine, 2023 and 2024**, in Ihor Naum's own name _(Lilian, 2026-07-30)_.
- [ ] Home state and the current mailing address on the Form 8802 — the related entities are Florida companies but `aura-remodeling.md` infers Illinois; confirm from Double, since the IRS replies by mail.
- [ ] Which entity (if any) the Schedule C activity belongs to — `aura-remodeling.md` infers AURA REMODELING LLC is a two-owner LLC filing Form 1065, which would reach the 1040 by K-1 rather than Schedule C. One of the two readings is wrong.
- [ ] Whether an extension (Form 4868) was filed for 2025 — the return was filed 2026-05-25, after the April 15 deadline.
- [ ] Google Drive folder link for this individual client (§7).
- [ ] Confirm the ownership/officer roles in the related entities (§7) — currently inferred from correspondence and a Florida DWC exemption notice.

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710637](https://app.doublehq.com/close?cid=710637)
- **Double tax project (2025):** [2025 Taxes](https://app.doublehq.com/tax-return?cid=710637&projectId=219325)
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related clients:** [`aura-remodeling.md`](./aura-remodeling.md) (the couple are its two principals), [`kolo-florida.md`](./kolo-florida.md) (Ihor holds a Florida workers'-comp Certificate of Election to be Exempt for it) — same owner group.
- **Related SOPs:** none — Lilian decided (2026-07-30) that the Form 8802 process does not warrant its own SOP; the know-how lives in §5 of this file.
