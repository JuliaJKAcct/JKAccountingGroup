# MASCIAVE DESIGN STUDIO LLC

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-01

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering bookkeeper needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** MASCIAVE DESIGN STUDIO LLC
- **Entity type:** LLC — the firm files Form **1120-S** _(Double)_. 🔴 **BUT THE IRS DOES NOT AGREE.** On **2025-12-23** the IRS confirmed there is **no Form 2553 associated with any of this company's EINs**, so **to the IRS it is still a C-corp**. See §5 — this is unresolved and it is the most consequential fact on this client.
- 🔴 **What was ACTUALLY FILED for 2024 is a Form 1120 — a C-corporation return** _(read from `Tax Return Filed/2024` in Double, 2026-09-05, on Lilian's ask while working another client)_. The document carries **Schedule C (Dividends and Special Deductions)**, **Tax Computation and Payment** and **Schedule G (Form 1120)**, and **no Schedule K-1** — all C-corporation-only. ✅ **This is consistent with the IRS finding above, not a contradiction of it**: the firm files 1120-S, the IRS has no Form 2553, and the 2024 return went in as an 1120. ⚠️ **So "the firm files Form 1120-S" describes the intent, not the 2024 filing.**
- 🔑 **NO PAYROLL RAN IN 2024, and the owner's pay went on the officer-compensation line.** Page 1 **line 13, Salaries and wages, is BLANK**; **line 12, Compensation of officers, is populated and is the largest deduction on the return.** The amount was then picked up on the **owner's own personal return**, where the self-employment tax was paid. _(Lilian, 2026-09-05, confirming the technique; verified against the filed return by mapping each amount to its line.)_ ⚠️ **The Gusto payroll references in §4 and §6 all come from 2026 sweeps — they do NOT describe 2024**, and an earlier session wrongly inferred from them that 2024 had real payroll.
- ⚠️ **A §199A worksheet exists in an ATX file for this client showing an 1120-S with QBI and W-2 wages** — ⛔ **it cannot be the filed 2024 return, because a Form 1120 has no §199A at all.** **Which year or which file it belongs to is NOT established.** _(Raised 2026-09-05; worth settling before it is used as a precedent again.)_
- **Home state:** **Florida** (Broward / Fort Lauderdale area) _(Gmail — high confidence)_
- **Industry / what they do:** **Interior design studio** (commercial + residential; the owner holds IIDA · ASID · CPTED credentials). Work runs as numbered design **projects**, some for commercial / government REIT clients. _(Gmail)_
- **Primary language:** **English** (all business correspondence). _(Gmail)_ Double's own `Preferred language` client property reads **Bilingual (EN/ES)** _(Double client properties, 2026-08-15)_ — noted, not a contradiction (correspondence being in English doesn't rule out bilingual capability).
- **Our engagement (services we provide):** Bookkeeping (**quarterly** per Double — ⚠️ but see §4, the cadence is unsettled); **income tax (the firm files Form 1120-S — but see §1, the IRS does not accept that classification)**; **sales tax (quarterly, FL DOR)**; **payroll via Gusto (automatic)**; **1099 preparation**; annual-report filing. The firm also prepares the **owner's personal return** (a linked individual client in Double). **Assigned bookkeeper: Lilian.** _(Double + Gmail, 2026-07-20)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706696](https://app.doublehq.com/close?cid=706696)
- **Double case note:** `CASE · IRS — two EINs, one to cancel, and no S-election on any` — note **491846**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Sales-tax portal | Filing sales tax (quarterly) | _(pending — Drive link)_ | _(jurisdiction pending)_ |
| Payroll (automatic) | Payroll | _(pending — Drive link)_ | Provider: **Gusto** (AutoPilot auto-run) _(Gmail, 2026-07-21/22)_ |
| Other recurring vendors (non-sensitive reference) | Software/services billed monthly | Recurring-expense watchlist (Drive, see §7) | Verizon (phone), Comcast/Xfinity (internet), Microsoft 365, QuickBooks Online subscription, and the owner's health plan through Florida Blue all appear on the client's recurring-payment watchlist _(Drive — Recurring Watchlist doc)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — **quarterly** _(Double)_
- **Jurisdiction(s):** _(pending)_
- **Process notes (→ future SOP):** the recurring quarterly sales-tax task's due date was moved from the 1st to the **5th day** of the filing month _(Double activity log, 2026-07-20)_.

### Payroll
- **Applies?** Yes — **automatic** _(Double)_
- **Provider / frequency:** **Gusto**, AutoPilot auto-run (biweekly pay periods observed) — auto-debits the client's account, no manual run needed _(Gmail, 2026-07-21/22)_

### Bookkeeping & monthly close
- **Applies?** Yes. ⚠️ **Cadence UNSETTLED — two records disagree, both recorded.** Double's
  client property says **quarterly** _(Double)_, and that is what the engagement line in §1
  repeats. But this client's own Double activity shows **month-end close work**: a *June 2026
  month-end close* marked Done on 2026-07-20, and three bank-account reconciliation tasks
  moving on 2026-08-24. Not resolved by a session — **ask Lilian at the point of use**
  (open in the runbook's decisions log and in `FOLLOW-UPS.md` row 65).
- **Runbook:** [`masciave-design-studio-bookkeeping-review.md`](../../sops/masciave-design-studio-bookkeeping-review.md) — created **2026-09-01** from Lilian's first categorization rule (money sent to **Permit Cleaners** → `650.Legal & Professional Fees`, no customer/project). Thin on purpose, **In review**, and marked where it is; the categorization rules live there, not here.

### Income tax
- **Applies?** Yes — the firm files **Form 1120-S** _(Double)_. ⚠️ **The IRS does not accept that classification** — no Form 2553 on file, confirmed 2025-12-23 (§5). Until that is settled the return type is **contested, not established**.
- **Our role:** We prepare income tax _(Double)_; **1099 preparation** included.
- **Process notes (→ future SOP) — what the IRS said while the EIN matter ran:**
  - ⚠️ **The IRS will NOT confirm an EIN cancellation in writing while it is in progress.** Lilian pressed for a letter or an email and was told the only letter they ever send is one confirming the number is **already** cancelled. The stated window is **up to 30 calendar days**, after which the only option is to call. **So no news here genuinely means no news.**
  - ⚠️ **The IRS agent on 2025-12-23 refused to reissue transcripts older than five years**, saying the system will not produce one for a return filed more than five years ago. Transcripts for **2021 and 2022** were sent on the old EIN and the earlier ones were not. _(One agent's statement on one call — recorded as said, not verified as a standing rule.)_ For anything before 2021 on this company, the firm's own copies are the only source.
- **Organizer status:** Completed _(Double client property, checked 2026-08-01)_.

### Licenses & other filings
- **Annual report:** Yes — we handle it _(Double)_

## 5. Key facts & quirks

- 🔴 **NO FORM 2553 EXISTS ON ANY OF THIS COMPANY'S EINs — THE IRS TREATS IT AS A C-CORP WHILE THE FIRM FILES AN 1120-S.** Confirmed by the IRS on **2025-12-23**. Nothing in any source the firm can reach records this being fixed. **This is the first thing to settle on this client**, and it decides whether the 1120-S filings are valid at all.
- 🔴 **HOW THE SECOND EIN CAME TO EXIST — the IRS created it itself.** When the company filed as a **C-corp**, **the IRS did not recognise the LLC's existing EIN and issued a new one.** That is the origin of the duplicate, and it means neither number was the client's mistake. Recorded at the onboarding consult, **2025-12-04**. ⚠️ **The same note says the S-election WAS filed but "not processed until August 2025"** — which does not sit easily beside the 2025-12-23 call finding no Form 2553 on any EIN. **Both are recorded; the fact is unsettled** and an IRS transcript is what settles it. ⓘ A third EIN, `50-0247307`, traces to a **company the client's father created in 2013** and appeared on Sunbiz — the IRS says it does not exist _(2025-12-12)_. _(TaxDome notes, migrated — filed under Masciave Design; notes dated 2025-12-04 and 2025-12-12.)_
- 🔴 **THE COMPANY HAS TWO ACTIVE EINs, AND THE IRS FILED RETURNS UNDER BOTH.** `99-2753726` carries the Form 1120 for **2023 and 2024**; `46-2647838` carries Form 1120 filings running from **April 2013 to 2022**. ⚠️ **The notes say "Form 1120", which sits oddly against the firm filing 1120-S for those same years** — either the note is using "1120" loosely for the series, or the IRS genuinely has C-corp returns posted, which would be a much larger finding. **Reconcile against an IRS transcript before relying on either reading.** A third, `50-0247307`, is **not active and does not appear in IRS records at all**. The firm chose to **keep `99-2753726` and cancel `46-2647838`**; the cancellation was requested on **2026-01-14** and, per the IRS, they will **merge the information from both numbers into the one kept** so nothing is lost.
- **Two-basis reporting (Double "Reporting & Tax Basis" note, confirmed 2026-07-20):** client-facing statements are on the **accrual** basis (so the owner sees A/R, A/P and customer deposits), but the **tax return is filed on the cash** basis — the studio invoices heavily and collects slowly, so accrual shows true monthly performance while cash defers tax on invoices not yet collected.
- **Project-based / work-in-progress:** deposited-but-incomplete projects carry across year-end — the reason for accrual reporting. Owner supplies monthly receipts / CC statements + per-project descriptions.
- Pays **subcontractors** (e.g. structural engineers) and collects W-9s → drives the 1099 work.
- **No QBO timesheet integration** (owner decided manual per-project entry wasn't worth it for a one-person shop).
- The firm's chart-of-accounts grammar is described as "**Masciave/Aura-style**" (number-prefixed account names) — this client is a reference for that COA convention (see [`../../sops/ecoorganic-bookkeeping-review.md`](../../sops/ecoorganic-bookkeeping-review.md)). _(firm/SOP knowledge)_
- As an **S-corp**, watch reasonable-compensation / owner-payroll at year-end.
- **Accountable plan (S-corp status):** home-office and vehicle-mileage costs are reimbursed to the owner through a formal accountable plan rather than run as a rent/company expense — tracked in a dedicated accountable-plan workbook (Drive). _(Drive — accountable-plan workbook, 2026-07-20 sweep)_
- Q2 2026 client-facing financial reports were delivered to the owner on schedule. _(Gmail, 2026-07-20)_
- An **off-cycle Gusto payroll run** was processed 2026-08-20, in addition to the regular biweekly AutoPilot run — (Gmail, 2026-08-20; no dollar figure recorded).
- A **client-portal transaction question was resolved** by Lilian on 2026-08-20 — (Double activity log, 2026-08-22).
- The **accountable-plan workbook** ("2026 Accountable Plan 2026 - Masciave.xlsx") was updated 2026-08-20 — (Google Drive, 2026-08-22).
- ✅ **RESOLVED 2026-08-29 — the "Studio Passwords" document IS the credentials link.** Located directly in Julia's Drive, inside the vault folder already linked in §7 (file ID confirmed, content not opened). Added to §7 below; the "credentials Drive link" item is closed.
- 🧾 **HOW A COST IS TIED TO A JOB — and the one regular payment that deliberately is NOT.** _(Lilian, 2026-09-01.)_ The studio's costs are read **by project**: when it pays a contractor for work on one specific project — the drawings for that project, say — the transaction is **tagged with that project / that client**, so the books show what the job cost. **The exception is `Permit Cleaners`**, a permitting company the studio pays **regularly** so that it works permits across **several** of the studio's clients at once; that charge goes to **`650.Legal & Professional Fees`** and carries **no** customer/project. Empty is the accurate answer there, not a missing one. ⓘ Three things Lilian settled the same day: the vendor **is named** in the runbook (her explicit instruction — *"Se llama Permit Cleaners, ponlo con nombre en el SOP"*, which is a ruling for this vendor, not a general one); **`650.Legal & Professional Fees` has NO sub-accounts in this client's chart**, so it is posted to directly (the firm standard's `650.1`/`650.2` do not exist here); and the **amount and the frequency are deliberately not recorded** — both follow what the client agrees with that company, so a period with more, fewer or none of these charges is **not** a finding. ⓘ There is also **no QBO timesheet integration** on this client, so the project tag is the only project-level data the books hold — which is what gives the rule its weight. Full rule + the reviewer checks: the bookkeeping runbook (§4).
- **A second client-portal transaction question was resolved 2026-08-24** — a distinct event from the 2026-08-20 one above (Double activity log entry dated 2026-08-24, separate `entityId`). Also on 2026-08-24: the **"Accountable Plan" task was marked Done** (from Not Started), and three bank-account reconciliation tasks (Chase Credit Card, Business Savings, Business Free Checking) moved to In Progress — ordinary close-cycle progress. _(Double activity log, 2026-08-24, read 2026-08-29)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double's **structured client properties** (Assigned Staff = Lilian; S-corp / 1120-S; quarterly bookkeeping, sales tax and design-studio profile). The COA-grammar note in §5 comes from **firm/SOP knowledge**, not the Double properties.
- 2026-07-20 — **Ping / Gmail / Double-note enrichment sweep:** established the interior-design profile (IIDA/ASID/CPTED), FL (Broward) location, Gusto payroll, FL DOR quarterly sales tax, and confirmed the accrual-books / cash-tax reporting basis from the Double note. Ping had **no indexed meetings**; facts are from Gmail + the Double note. Ping + Gmail now swept (see sweep-state).
- 2026-07-25 — Incremental sweep: confirmed payroll provider (Gusto AutoPilot, biweekly) and the linked personal-client relationship (710615). June 2026 month-end close moved to Done (2026-07-20), including the Chase Credit Card reconciliation task. Q2 2026 financial reports sent to the client 2026-07-20 (acknowledged same day). Sales Tax task recurrence changed from the 1st to the 5th of the month.
- 2026-08-01 — **Weekly incremental sweep (baseline 2026-07-20, inclusive):** confirmed Gusto as the payroll provider and its AutoPilot auto-run cadence from Gmail; picked up the quarterly sales-tax task's due-day change (1st → 5th) from the Double activity log; confirmed via Double's portal-contact record that the same contact is linked to both this company (706696) and the individual client (710615), resolving the prior open question about that link; found (via Drive) the client's accountable-plan workbook and recurring-expense watchlist, which name the non-sensitive recurring vendors and the accountable-plan mechanism (no dollar figures pulled in). Ping org-wide search for "Masciave" / the owner's name again returned **no legible, on-topic indexed meetings** for this client — same as the prior sweep. No SOP exists yet for this client, so no SOP-proposal candidates were queued.
- 2026-08-08 — **Weekend sweep (incremental, from 2026-07-20):** no new Double note since the one already on file. Double client properties confirm **Organizer Status: Completed** and the Sales Tax task recurrence change (both added to §4). Portal contacts confirm the **linked personal client (Double 710615) shares the same portal contact as this company** — the §6 open question is resolved (see below). Ping org-wide meeting search returned no relevant/legible content for this client; Gmail turned up only routine Gusto AutoPilot payroll-run notices and the already-known Q2-financials exchange from 07-20 — nothing new to record.
- 2026-08-13 — **The EIN and S-election matter written up.** _(Lilian's iCloud notes, migrated — folder "Masciave Design"; notes dated 2025-12-23 and 2026-01-14.)_ The EINs, the agents and the exact windows are in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2025-12-23 — IRS call.** Established that the company has **two active EINs plus a third that is not active**, with Form 1120 filings sitting on both active ones, and — the finding that matters — that **no Form 2553 is associated with any of them, so the IRS treats the company as a C-corp.** The IRS's route for the duplicate: choose one EIN and call to request cancellation of the other, with a Form 2848 POA. It also refused to reissue transcripts for returns filed more than **five years** ago.
  - **2026-01-14 — IRS call.** The **cancellation request went in to the BMF Entity unit**. The IRS said it will **merge the information from both EINs into the one kept**, gave **up to 30 calendar days**, and confirmed **no acknowledgement is issued while it is in progress** — the only letter they send is one saying the number is already cancelled. Transcripts were **resent** to the company's Coral Springs address after the client reported never receiving the first mailing.
- **Nothing after 2026-01-14 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — these files were built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_
- 2026-08-13 — **TaxDome notes read (Phase 2).** Three notes — two of them substantive, and they supply the **origin** of the EIN mess this file already described. **2025-12-04 (onboarding consult):** when the company filed as a C-corp, **the IRS did not recognise the LLC's EIN and created a new one** — so the duplicate was the IRS's doing. The same note records the S-election as **filed but not processed until August 2025**, which does not sit easily beside the 2025-12-23 finding of no 2553 on any EIN; both are recorded and the fact is unsettled. It also lists what the firm asked the client for at onboarding: the executed 2553, the 2024 personal return, sales-tax correspondence, the new EIN letter and a transcript of the accepted C-corp return, plus a POA for **both** EINs. **2025-12-12:** the third EIN traces to a **company the client's father created in 2013**; two estimated tax payments had been made. _(TaxDome notes, migrated — filed under Masciave Design.)_ _(Worked by Lilian.)_
- 2026-08-15 — **Weekend sweep (incremental, from 2026-08-08):** Double (`list_client_properties`,
  `list_notes`, `list_contacts`, `list_activity_log` from 2026-08-08 — empty) shows both existing
  notes (the EIN case note 491846, last updated 2026-08-13, and the reporting/tax-basis note) still
  current, no update since. Owner contact confirmed as **Alejandra Pallisso**; the `Preferred
  language` property reads Bilingual (EN/ES), added to §1. Gmail (`in:inbox`/`in:sent`, business
  name + "Pallisso", after:2026/08/08) returned nothing but the firm's automated weekly CI-sweep
  digest. Ping client-scoped semantic search returned no results specific to this client — all hits
  were unrelated noise from other clients' meetings, including internal ASTPS coaching calls. Google
  Drive full-text search for the business name, modified after 2026-08-08, returned only an
  unrelated internal hours spreadsheet. **No update found on the EIN case note's open items** (the
  2553 filing, the cancellation confirmation, or the transcript arrival) — the case remains open as
  of 2026-01-14/08-13, nothing after that is recorded anywhere the firm can reach. No SOP exists yet
  for this client, so no SOP-proposal candidates were queued.

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** New facts folded into §5. No update on the EIN/S-election case note (491846) — still last touched 2026-01-14/08-13 IRS-side, no hard deadline recorded but the unresolved S-election carries ongoing filing-validity risk. Deeper Double bank-feed history and FL sales-tax county confirmation not chased this run (budget).
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double `list_activity_log` (from 2026-08-22): a second client-portal transaction question resolved (2026-08-24), the "Accountable Plan" task marked Done, and three bank-account reconciliation tasks moved to In Progress — all 2026-08-24, folded into §5. `list_notes` unchanged (both existing notes untouched since 2026-08-13). Google Drive: located the "Studio Passwords" document directly (resolving the credentials-link item, content not opened) and, while confirming folder structure, found a **third** Drive folder named "Masciave Design Studio" (owned by Maria, created 2026-05-11) not previously recorded. Gmail (business name + "Pallisso" + EIN numbers + "Form 2553", after:2026/08/22) and Ping (org-wide) both found nothing on the EIN/S-election case — still open, no movement since 2026-01-14/08-13. Not chased this run (budget): the Double bank-feed support-ticket resolution beyond the activity log; the exact FL sales-tax county/registration (no registry-lookup tool).
- 2026-09-01 — **First bookkeeping rule captured, and the client's bookkeeping runbook created.** Lilian gave the categorization rule for the recurring permit-expediting retainer (→ `Legal and Professional Fees`, **no** customer/project, because the fee buys work across several of the studio's clients) together with the general convention it is the exception to (a cost incurred for one project **carries that project**). Written into §5 above and into a new SOP, [`masciave-design-studio-bookkeeping-review.md`](../../sops/masciave-design-studio-bookkeeping-review.md), which did not exist before — it is one round old, says so, and is marked **In review** until Lilian signs it off (rules 1 and 2 are hers and are settled; the runbook assembled around them is not). The vendor was recorded **by role** and the naming question put to Lilian. ⚠️ **Superseded the same day — see the next entry:** she named it (`Permit Cleaners`), settled the account (`650.Legal & Professional Fees`, no sub-accounts in this client's chart) and ruled the amount and frequency out of the record. _(Worked by Lilian.)_
- 2026-09-01 — **Lilian settled the three open questions on that rule, same day, from the client's own chart.** (a) **Name the vendor:** `Permit Cleaners` goes in the runbook by name — *"Se llama Permit Cleaners, ponlo con nombre en el SOP."* Recorded as a ruling for this vendor in this runbook, **not** a general relaxation of the firm's role-not-vendor rule. (b) **The account:** she checked the client's chart of accounts and **`650.Legal & Professional Fees` carries no sub-accounts**, so the categorization posts there directly — the firm standard's `650.1 Accountant` / `650.2 Legal` are template accounts this client does not have. The same chart marks its real parents with the description *"THIS IS A PARENT CATEGORY, ONLY USE SUBACCOUNTS"* (660 Payroll Expenses and 660.1 Officer Compensation), so the chart itself says which accounts may not be posted to. (c) **Amount and frequency: deliberately not recorded** — *"eso depende de las necesidades de nuestra clienta y lo que acuerde con esa compañía"* — so the reviewer checks the coding of the charges that exist and never their count. _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)
- **Abnormal Comcast charge** flagged in the July 2026 mid-month recurring-expense review — STILL OPEN, **~6 weeks** pending, no deadline. A search of Gmail bounded `after:2026/08/22`, on 2026-08-29, for "Comcast Masciave" again found nothing specific.
- Confirm the **Double bank-feed connection** was fully resolved after a June 2026 support ticket — not chased beyond the activity-log check this run, which showed no bank-feed-related entries (only the three reconciliation tasks moved to In Progress on 2026-08-24, see §5).
- Confirm the exact **FL sales-tax county / registration** — not chased this run (no registry-lookup tool available).
- ~~Clarify the linked personal client (Double 710615)~~ — **resolved 2026-08-01:** Double's portal-contact record confirms the same contact carries both clientIds (706696 + 710615), i.e. it is the owner's individual 1040 engagement.
- **Duplicate Google Drive folders — now THREE folders named "Masciave Design Studio" exist**, not two: the vault folder linked in §7 (created 2025-12-10); a second (created 2026-05-09, last modified 2025-12-12, contents not opened); and a **third, newly found 2026-08-29**, owned by `mariaf@jkaccountinggroup.com`, created 2026-05-11 (contents not opened). A separate, differently-named `MASCIAVE DESIGN STUDIO LLC_contractors_1099` folder also exists and is not part of this count (its name indicates a deliberate, distinct purpose). Metadata alone cannot establish which of the three general folders is canonical.
- **EIN / no-Form-2553 case (note 491846) — still no movement found.** Chased 2026-08-29: Gmail (business name + "Pallisso" + "Form 2553" + both EINs, after:2026/08/22) and Ping (org-wide, "Masciave Design Studio Pallisso EIN S-election IRS") both returned nothing on-topic — the case remains at its 2026-01-14/2026-08-13 state, still unresolved, no hard deadline but ongoing filing-validity risk (see §5/§6 log).

### Information still needed
- [ ] Fiscal year-end; exact FL sales-tax county / registration
- [x] Credentials Drive link — **done 2026-08-29: the "Studio Passwords" document, in the vault folder (§7)**


## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706696](https://app.doublehq.com/close?cid=706696)
- **Double case note:** `CASE · IRS — two EINs, one to cancel, and no S-election on any` — note **491846**
- **Google Drive folder (sensitive vault):** [Drive folder](https://drive.google.com/drive/folders/1syx1fHdE1tCE0BFFsSgmPxT_QhHRdG-1)
- **Credentials document (found 2026-08-29, content not opened):** ["Studio Passwords"](https://docs.google.com/document/d/18VDPCHAecghAde_dZYzmIFxkQCZcxSyo53Z0tSu9WFg/edit) — inside the vault folder above
- **Recurring-expense watchlist (Drive):** [watchlist doc](https://docs.google.com/document/d/1zJ974hLR2p1pl1zIJT1R2WY4SwWLrX6iDguMHm4CGps/edit) — non-sensitive vendor list, no dollar figures repeated here. 🔁 **If `Permit Cleaners` is ever added to it, carry it as VARIABLE — no expected amount, no expected frequency** _(Lilian, 2026-09-01)_, or the twice-monthly recurring-expense check will flag it as missing or abnormal every run.
- **Related SOPs:** [`masciave-design-studio-bookkeeping-review.md`](../../sops/masciave-design-studio-bookkeeping-review.md) — the bookkeeping runbook (started 2026-09-01)
