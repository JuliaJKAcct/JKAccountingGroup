# Denys Melnyk

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-11

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.

## 1. Snapshot

- **Business name:** Denys Melnyk (individual — no registered business entity is engaged with us; the business activity is reported on Schedule C)
- **Entity type:** Individual / sole proprietor (Schedule C on Form 1040)
- **Home state:** Florida — **moved from Washington during 2025**. Both states tax neither wages nor business income, so a state return is likely unnecessary (confirm no income was sourced elsewhere).
- **Industry / what they do:** ⚠️ **Inferred, not confirmed with the client.** The expense pattern in the Double note — a single payer, fuel paid to other drivers, year-round travel with hotels and meals, vehicle finance, occupational insurance — reads as **freight / trucking or logistics contracting**. His payer is named **Midwest** in the note. Ask him directly; the Schedule C business description depends on it.
- **Household / filing status:** **Married** as of December 31. The client stated (Aug 2026) that he has **two children** and **pays child support**. Whether either child is claimable as his dependent is **unresolved** — his 2025 organizer answers "no dependents", which may well be correct if they live with the other parent. Names, dates of birth and SSNs are in **Double**, not here.
- **Primary language:** _(pending)_ — the organizer was completed in English; surname suggests UA/RU, unconfirmed.
- **Our engagement (services we provide):** Individual income tax — **Form 1040 with Schedule C**, tax year **2025**. **First year with JK**; the 2024 return was prepared by another firm.
- **Fiscal year-end:** December 31
- **Accounting platform:** None — Double shows `platform: "none"` (no QuickBooks). Schedule C figures come from the client's own summary, not from books we keep.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer / primary contact | Double client (link below) |
| Spouse (also on the return) | Double client (link below) |

- **Double client:** https://app.doublehq.com/close?cid=764785
- **Double case note:** none — and deliberately so. See §5 ("What goes in the Double note").

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double (client portal) | Organizer, document delivery | n/a — firm platform | Client `cid=764785`; 2025 organizer `responsesVisibility: admins_only` |
| Health insurance marketplace | Possible Healthcare.gov coverage → Form 1095-A | _(pending)_ | **Unconfirmed** — see §5 |

- No QuickBooks, no bank feed, no payroll system. Everything we have came from the client directly.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No (individual taxpayer).

### Payroll
- **Applies?** No — he has no payroll with us.
- ⚠️ **But he pays other drivers.** The Double note records fuel paid to drivers. If payments to any one person cross the 1099-NEC threshold, **he has an information-return obligation of his own**. Unconfirmed — ask.

### Bookkeeping & monthly close
- **Applies?** No. Double shows `Bookkeeping: N/A`. There is no monthly close; the Schedule C is built from what the client reports.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form **1040** with **Schedule C**. Double `Tax Return Type: 1040-SCH C`; 2025 tax project `notStarted`, due **2026-04-15**.
- **Our role:** We prepare the return.
- **Organizer status:** `JK 2025 1040 Organizer`, marked **completed 2026-08-04** at **100%**, and Double's `Organizer Status` property reads **Completed**. **It is not usable as filed** — see §5. Treat the "Completed" label as the client's sign-off, not as a statement that we have what we need.
- **Process notes (→ future SOP):** the working method for this client is in §5 — take his own summary as raw input, reclassify it, and re-ask only what is genuinely missing.

### Licenses & other filings
- **Applies?** _(pending — likely N/A for an individual)_

## 5. Key facts & quirks

**He sends his information by voice message, not through the organizer.** He marked
the 2025 organizer complete on 2026-08-04 with the entire income section empty, then
sent his actual income and expense summary **by voice** on 2026-08-05. Assume for this
client that **the organizer is not where his information lives** — check the Double
note first.

**The organizer's own logic hid the requests we need — and the logic is correct.** He
answered **"None of the above"** to the income-types question, which by design
suppresses the follow-ups (an organizer should not ask a client with no income for a
P&L). Because that one answer was wrong, the organizer never asked him for the payer's
1099, the Profit & Loss template, the home-office question or the whole vehicle block —
and still reported 100% complete. **Those questions have to be re-asked directly.** This
is a client mistake with a mechanical consequence, not a fault in the organizer.

**He classifies his own expenses, and some are not deductible as he lists them.** He
supplied a total received from the payer plus a list of amounts to subtract from it.
Handle it as raw input and reclassify:

- **Child support — not deductible.** It is in his list; it is simply dropped. Not an issue, just a correction.
- **Personal car insurance and the full car payment — not deductible as listed.** Only the business-use portion, and loan **principal** never; interest and depreciation, or the standard mileage rate instead.
- **Health insurance — not a Schedule C expense.** It belongs on Schedule 1 if it qualifies, limited to net self-employment profit, and it interacts with any premium tax credit.
- **Occupational insurance, work travel, fuel paid to drivers, phone** — plausible Schedule C, subject to the usual limits (meals at 50%; phone at its business share; fuel already inside the standard mileage rate if that method is used).

**Rent is monthly.** Lilian's determination, 2026-08-11 — read as an annual figure it is
implausibly small.

**Home office:** he completed the firm's Home Office Deduction template. The file sits
in Double under `JK Accounting Group > Others > 2025` — **it is not attached to the
organizer**, because that question was never shown to him. He changed states mid-2025,
so the allocation probably has to cover two homes.

**Rent vs. mortgage — unresolved.** The organizer claims **mortgage interest and
property taxes**; the Double note says he pays **rent**. He marked the Form 1098 request
"not applicable" and uploaded nothing. Both can be true (two properties, or a move), but
it has to be asked.

**Form 1095-A is the one hard blocker.** He answered **"Yes"** to buying health
insurance from Healthcare.gov / the Marketplace **and** marked that same question "not
applicable", uploading nothing. If the coverage is Marketplace, the **1095-A is required
to file at all** — the premium tax credit has to be reconciled on Form 8962. Everything
else on this return can proceed while we wait; this cannot.

**No estimated tax payments.** He did not tick "Estimated taxes", so the organizer never
asked for dates and amounts — read that as "paid none". With self-employment income and
no withholding, expect self-employment tax and an **underpayment penalty**; raise it with
him rather than letting it surface at filing.

**The prior-year return was prepared elsewhere, so the carryover check is not optional.**
He uploaded his own 2024 return into the organizer and it is also in Double's file
library. Because the firm did not prepare it, read it for **capital loss carryover, NOL,
depreciation and Section 179 basis, foreign tax credit carryover, passive loss
carryovers, and any 2024 overpayment applied to 2025** — none of which anyone here would
otherwise know about.

**Two fields need correcting before the return.** His occupation is entered as
"Employed", which conflicts with contractor income; the spouse's occupation field
contains a non-answer.

**No direct deposit.** He declined it, so any refund would arrive as a paper check.
Probably deliberate, worth one confirming question.

**What goes in the Double note — and what does not.** Lilian's instruction, 2026-08-11:
this client's Double note carries **what the client gives us and what the team needs in
order to work** — his figures, his statements, where his documents are. It does **not**
carry our review analysis or our findings. Those stay in this file. Adding them would
turn a working note into something else, and she decides case by case whether any
particular finding earns a place there.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- _(2026-07-21)_ — Client created in Double; `JK 2025 1040 Organizer` created and published the same day.
- _(2026-08-04)_ — Client marked the organizer **complete (100%)** and uploaded a copy of his **2024 return** (prepared by another firm).
- _(2026-08-05)_ — Client sent his income and expense summary **by voice message**, not through the portal.
- _(2026-08-06, Lilian)_ — Captured that summary in the Double note **"2025 Tax Preparation - P&L and other info"**. The client's completed **Home Office Deduction template** was filed in Double under `Others > 2025`.
- _(2026-08-11, Lilian)_ — **First full organizer review** — the pilot case for the organizer-review tooling. Established: the organizer is 100% "complete" and unusable as filed; the income-types answer suppressed eight downstream document requests; two documents genuinely missing (1095-A, 1098) versus two already supplied outside the organizer (home-office template, the P&L data by voice). Client file created the same day. Findings deliberately kept out of the Double note (§5).

### Outstanding items (CI-only — never in the SOP)

The re-ask list for the client, in priority order:

- **Form 1095-A** — blocks filing if the coverage is Marketplace.
- **The payer's 1099** — nothing on file supports the amount he reported.
- **The whole income block**, re-asked directly: which income types he actually had in 2025 (the organizer never asked, because of the "None of the above" answer).
- **Rent or mortgage?** — and the Form 1098 if there is a mortgage.
- **Vehicle** — mileage log (start, end, business miles), date placed in service, purchase/finance agreement. Without these there is no vehicle deduction by either method.
- **Children / custody** — how many, who they live with, whether a Form 8332 release exists. Determines whether any dependent credit is available.
- **Estimated payments** — confirm none were made, so the penalty is expected rather than discovered.
- **2024 carryovers and elections** — read from the prior return (see §5).
- **Profit & Loss** — his voice summary is the substitute; decide whether to have him complete the firm's template as a written record.

### Information still needed

- [ ] Primary language and preferred communication channel (he defaults to voice messages).
- [ ] What his work actually is — the industry in §1 is **inferred from his expense pattern**, not confirmed.
- [ ] Whether he owes **1099-NECs** to the drivers he paid.
- [ ] Whether the health coverage is **Marketplace** (drives the 1095-A requirement).
- [ ] Assigned staff in Double — no `Assigned Staff` property is set on this client.
- [ ] Google Drive folder, if one exists.

## 7. Links

- **Double client:** https://app.doublehq.com/close?cid=764785
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=764785&projectId=234191
- **Double case note:** none — by Lilian's instruction (§5), the review analysis stays out of Double. The working note on this client is **"2025 Tax Preparation - P&L and other info"** (client-supplied figures only).
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** none yet.
