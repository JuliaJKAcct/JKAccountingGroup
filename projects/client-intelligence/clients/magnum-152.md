# MAGNUM 152, INC

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-08-29

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

- **Business name:** MAGNUM 152, INC
- **Entity type:** Corporation — **S-corp** (files Form **1120-S**) _(Double)_
- **Home state:** **Florida** (Broward / Palm Beach) _(Gmail — high confidence)_
- **Industry / what they do:** **Pawn shop / jewelry + firearms retail** — Maria's guide categorizes it as "guns and jewelry sales (pawn shop)". Runs as a multi-store pawn group (trade names **US Pawn**, **Lucky Pawn**, **Auto Pawn**). Currently **2 active stores — MS1 (Griffin) and MS2 (Miami)**; MS3 was sold in 2024 and MS4 in 2025. _(Maria's doc guide, Drive; Gmail)_
- **Primary language:** English (all correspondence). _(Gmail; owner name likely RU/UA — English used throughout)_
- **Our engagement (services we provide):** Monthly bookkeeping; **income tax (Form 1120-S)**; **1099 preparation**. Sales tax N/A; annual report **no**. **Payroll runs on the owner group's side via ADP** (not JK) — JK does the **ADP reconciliation** into the books. **Assigned bookkeeper: Maria.** _(Double + Gmail + Maria's doc guide, 2026-07-21)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** QuickBooks Online (via Double)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. Open the Double client to get the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact (also owns Sunoma Inc, plus a separate individual/personal Double client) | Double client (link below) |
| Administrative assistant (sends monthly bills, reclass records) | Double client (link below) |
| Additional portal contact — financial-access only (bank/store-account related) | Double client (link below) _(Double, 2026-08-01)_ |

- **Double client:** [app.doublehq.com/close?cid=706693](https://app.doublehq.com/close?cid=706693)

## 3. Systems & access

Credentials for **every** system below (Bravo, SaasAnt, ADP, banks) live in
**Maria's doc guide** in Drive (§7) — never copied here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | Maria's doc guide (§7) | Managed through Double |
| **Bravo (Bravo Pawn Systems)** | Store POS / inventory reports — pulled ~monthly and saved to Drive | Maria's doc guide (§7) | Recurring access/login friction |
| **SaasAnt** | Import / consolidate GL into QBO | Maria's doc guide (§7) | Recurring SaaS cost on JK's side |
| **ADP (RUN / Accountant Connect)** | Payroll (run by owner group) → JK reconciles it into the books | Maria's doc guide (§7) | JK does the reconciliation, not the payroll run; **payroll runs weekly** _(Gmail, 2026-07-25)_ |
| Bank & cards | Reconciliation | Maria's doc guide (§7) | **TD Bank ×5** (5100, 2873, 5093, 5085, 3178), **Chase CC ×2**, **Capital One ×2**, **Amex CC**, **PayPal** (sync broken → monthly JE) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** **Not on JK's side** — the owner group runs **payroll via ADP** ("US Pawn"), on a **weekly** pay cycle. JK's role is limited to the monthly **ADP reconciliation** and renaming the ADP journal entries in QBO. _(Maria's doc guide, Gmail; pay-cycle confirmed Gmail 2026-07-25)_

### Bookkeeping & monthly close
- **Applies?** Yes — **monthly close**, but **reports go to the client quarterly / on request** (no monthly report needed). This is the group's most time-consuming close; recommendation is to pull Bravo reports in the first 3–5 days of the next month and start early. _(Maria's doc guide, master plan)_
- **Process notes (→ future SOP):** the month-end sequence Maria documented —
  1. **Bank reconciliation** of every feed (TD Bank ×5, Chase CC ×2, Capital One ×2, Amex CC). **PayPal 1015 sync is broken → booked via a monthly JE**, not a live feed.
  2. **Bravo reports** — download each store's reports from Bravo and save them to the client's Drive folder.
  3. **Monthly JEs, per store** — create the store-level JEs; **consolidate the GL via SaasAnt**. Includes: miscellaneous/disbursement JE, cash-on-hand adjustment, inventory adjustment, Pirate Shipping, insurance, Kabbage loan.
  4. **Vendor reconciliation** — Merch adj, US Pawn adj, Scrap adj.
  5. **Performance report vs QBO.**
  6. **ADP reconciliation**, then **rename the ADP JEs** to the house naming.
  7. **Reclass records** from the admin assistant.
  8. **Monthly checklist** of standing reclasses (non-sensitive rules): Comcast (by account number), FPL (check the site against TD statements), **split Bravo across the active stores**, distribute ReadyRefresh / Waste Management / Gearfire between MS1 & MS2, rent per store, auto expenses / meals / interest / dues & subscriptions → **ADMIN class**, Amex Amazon / Dollar General / Publix → reclass to the store that incurred them, large disbursement repairs/signage → **Leasehold Improvement**, payroll-benefit health insurance → split by class.
- **Categorization quirks / quirks:** _(see §5)_

### Income tax
- **Applies?** Yes — **Form 1120-S** _(Double)_; **1099 preparation** included.
- **2025 return:** the Double tax project itself still reads `notStarted` (re-checked live 2026-08-29), and the "JK 2025 Business Tax Organizer - Magnum 152" is still reverted to **draft**. **But a "Magnum152_2025_TaxLiability_Report_v4.xlsx" was created in Drive 2026-08-24/25** — the "v4" naming means at least three prior iterations exist — so estimate work on the 2025 return is actively under way even though Double's own status fields haven't moved. Worth knowing before assuming "not started" means no work has happened. _(Double `list_projects`, 2026-08-29; Drive, 2026-08-25)_

### Licenses & other filings
- **Annual report:** No _(Double)_
- **Firearms (if carried):** possible FFL / firearms-compliance angle — **confidence raised**: the group has active vendor accounts with **Davidson's Inc** and **Lipsey's**, both firearms wholesale distributors, confirming a firearms-retail component. _(Gmail, 2026-08-03; low-to-medium confidence — not confirmed against an actual FFL license)_.

## 5. Key facts & quirks

- **Pawn/jewelry owner-group (with Sunoma Inc):** same owner, same administrative assistant. Managed together; **keep the books distinct**. _(Double, Drive)_
- **2 active stores** — MS1 (Griffin), MS2 (Miami). MS3 sold 2024, MS4 sold 2025 — old MS4 costs (rent, some payroll benefits) still surface in the checklist. _(Maria's doc guide)_
- 🔴 **Open mapping error with a sales-tax angle — the "Gunshow tender" in Bravo is mapped incorrectly to the sales-tax account.** Julia flagged this to Igor and Luis on 2026-08-20 and asked for a new, dedicated Cash-on-Hand account for visibility; Igor said he'd discuss with Luis "next week" — no reply as of a 2026-08-27 reminder. Still unresolved. A strong SOP-proposal candidate for the monthly reclass checklist. _(Gmail "Bravo - Gunshow Tender Issues," 2026-08-20 → 2026-08-27)_
- **PayPal 1015 feed sync is broken** — recorded via a **monthly journal entry** instead of a live feed.
- **Bank-feed handling rules:** do **not** match open JE balances for vendors with payments — always categorize; **TD Bank check images aren't attaching in QBO** — pull images from the bank and use the vendor to pick the account; the store **class** is confirmed at month-end from the admin's bills; Amex payments are booked as CC payments from TD Bank, then matched by most-recent payment/date.
- **SaasAnt** is used for GL consolidation into QBO; **Bravo** for store POS/inventory; **ADP** for payroll (owner-run).
- The owner's Double footprint spans **three** client records: Magnum 152, Sunoma (the sister pawn company), and a separate individual/personal record (not a bookkeeping engagement) — useful context for future owner-group sweeps.
- **Two distinct Amex checking sub-accounts confirmed by task name** — "Amex Checking 2672" and "Amex Checking 2941," both reconciled as separate close-checklist line items. Corroborates (with concrete last-4s) the already-pending SOP-2026-07-25-07 candidate about expanding the single "Amex CC" bank-feed line. _(Double activity log, 2026-08-10)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Ping had **no indexed meetings**; Double has no notes yet.
- 2026-07-21 — **Integrated Maria Fernanda's "doc guide"** (Drive → *Mafer's Clients process / 1. Magnum*): full month-end process, bank-feed map, systems (Bravo / SaasAnt / ADP), store structure, and reclass checklist captured into the Operating zone (non-sensitive only; credentials/dollar figures left in Drive). Tutorials/step folders linked in §7. _(Maria's doc guide)_
- 2026-07-25 — Incremental sweep: confirmed the July close cycle ran to completion (bank/card reconciliations, Bravo reports, JEs, vendor recon, performance report, ADP, reclass — all Done 2026-07-22→23). Softened the inventory-donation status (still open, not resolved — see below). Flagged an Amex bank-feed-count gap in the SOP as a proposal candidate.
- 2026-08-01 — Weekly incremental sweep (baseline 2026-07-20 → 2026-08-01): Double activity log shows the **Jul-2026 monthly close checklist completed in Double** (per-account bank/CC tasks, uncategorized/duplicate-vendor checks, 1099 prep, financial reports) on 2026-07-23, and the **2025 Form 1120-S tax project moved to In Progress** with its Business Tax Organizer reverted to draft on 2026-07-31. Gmail surfaced a weekly ADP payroll cadence, a Comcast/FPL credential request to the administrative assistant, and a Davidsons (firearms/ammo distributor) vendor relationship. Ping had no legible Magnum-specific meeting content this period (org-wide semantic search returned only unrelated/garbled hits). _(Double, Gmail, Ping — 2026-08-01)_
- 2026-08-08 — Incremental sweep (baseline 2026-07-20). Double activity log showed normal monthly-close task completions (bank feeds, Bravo JEs, reclasses, ADP reconciliation) through 2026-08-06, plus a **2025 Taxes project status toggle** (Not Started → In Progress by Lilian on 7/31, back to Not Started by Julia on 8/4) and a **"JK 2025 Business Tax Organizer - Magnum 152" reverted to draft** by Lilian on 7/31 — noted here as an observed status change only (Organizer Status property itself still reads "N/A (BK client)"). Gmail (via "US Pawn") surfaced vendor-account activity with two firearms distributors (see §5). No new Double notes. Ping had no legible new content for the client or the owner post-baseline. Drive folder link reconfirmed unchanged; a credentials spreadsheet in that folder surfaced an unsolicited content preview in the search results — none of it was used or copied anywhere (two-data-homes rule). QuickBooks MCP is scoped to the firm's own company (not client-specific) — not usable here.
- 2026-08-15 — Incremental sweep (baseline 2026-08-08). Double activity log showed the routine
  close continuing (Vendor Reconciliation, Performance Report vs QBO, Disbursement expenses,
  Monthly Journal Entries, Bravo reports all Done Aug 10–11), including two named sub-tasks —
  "Amex Checking 2672" and "Amex Checking 2941" — that corroborate the still-Pending
  SOP-2026-07-25-07 proposal with concrete account identifiers (added to §5; not re-proposed,
  since that proposal is already queued). Client properties re-confirmed unchanged. Gmail (via
  "Magnum 152"/"US Pawn") surfaced only a routine weekly ADP payroll-due reminder (already-known
  weekly cadence) and the firm's own SaasAnt subscription invoice (not a client fact). No new
  Double notes. Ping had no legible new content for the client or the owner post-baseline.
- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** Double activity log: 0 entries. New facts and chase-pass results in §5/outstanding items above.
- 2026-08-29 — **Incremental sweep (baseline 2026-08-22→2026-08-29).** Double: 0 activity-log entries since baseline; properties unchanged (Organizer Status still "N/A (we have QBO access)"); `list_projects` re-confirms the 2025 tax project still `notStarted`. Drive: a **"Magnum152_2025_TaxLiability_Report_v4.xlsx"** was created 2026-08-24/25 (added to §4) — active estimate work despite the project's status field not moving; the shared "Magnum Process" doc guide was also edited 2026-08-24/25 (a 2024 comment thread resolved, routine). Gmail: reading the FULL "Open Items for Magnum and Sunoma" thread (2026-08-19 → 2026-08-25) surfaced a **correction to last week's conclusion** on the Comcast/FPL item (see below), a new open **Bravo "Gunshow tender" mapping issue** (added to §5), and confirmation that most of the vendor-login list was resupplied by 2026-08-20 (Silencer Shop MS1 excepted — see below). ⚠️ **That same thread's later messages (chasing "TD Bank Statements," forwarded 2026-08-27 as "TD PAPER WORK") are about a DIFFERENT entity — "7806 Miami LLC"** — not Magnum, not Sunoma. 7806 Miami LLC appears in this owner group's correspondence (also named in a Jan-2026 Alla Trost loan-interest thread and in a 2026-08-27 Zoom recap task, "remind him about 7806 for tax return filing") but has **no client-intelligence file and did not appear in the project README's Clients index** — flagged for Julia/Lilian's awareness; out of scope for this sweep, not actioned here. Chase pass on all outstanding items — results below.

### Outstanding items (CI-only — never in the SOP)
- 🔴 **Open mapping error — Bravo "Gunshow tender" mis-mapped to the sales-tax account** (new this window; see §5 for detail) — UNRESOLVED, 9 days since Julia's original flag (2026-08-20), 2 days since her 2026-08-27 reminder with no reply yet.
- **Inventory-donation tax treatment** — STILL OPEN. CHASED this run: a targeted search found no update; now ~37 days pending since 2026-07-23, no deadline known.
- **2025 Business Tax Organizer** reverted to draft 2026-07-31 — STILL OPEN, now 29 days, no update found; see the countervailing Drive evidence in §4 (a v4 tax-liability estimate already exists).
- A missing prior-period (**Apr 2024**) expense report for the sibling **Auto Pawn** entity — STILL OPEN, now ~62 days pending since the 2026-06-28 ask; not separately re-chased this run (same search as on [`sunoma-inc.md`](./sunoma-inc.md) covers it; nothing new found there either).
- ✅ **Comcast / FPL login credentials — CORRECTION: this was actually answered 2026-08-19, not "still open" as the 2026-08-22 sweep concluded.** Reading the full thread (rather than the snippet) shows Igor replied **the same day** (2026-08-19) with the requested Comcast/FPL logins inline, and Maria confirmed "Received, Thanks Igor" on 2026-08-20, at which point only the Silencer Shop (MS1) vendor login remained not working. **Both versions, for the record:** the 2026-08-22 sweep read this as still open based on a partial view of the thread; the full thread read on 2026-08-29 shows it was answered within the window it was asked. Treat as **settled** — Comcast/FPL credentials arrived 2026-08-19.
- **Silencer Shop (MS1) vendor login** — Igor sent a fresh set of credentials 2026-08-20 after the first set didn't work; not independently confirmed working since. Low priority, not re-chased this run.
- **Open in Maria's guide:** Uncat items (LINCOLN AFS FORDCREDIT; sale of store 4); pending "Alla Trost" JE — not chased this run (budget; no targeted search run for these specific line items).
- **Legal matter:** resolved. _(Gmail)_

### Information still needed
- [ ] Fiscal year-end; confirm the pawn-group structure
- [ ] Confirm whether firearms inventory / FFL compliance applies

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706693](https://app.doublehq.com/close?cid=706693)
- **Google Drive folder (sensitive vault):** [MAGNUM 152 folder](https://drive.google.com/drive/folders/1dLNC_dbkASqtwMJNkna8zv-dDvcNTbxM)
- **Maria's process guide (Drive):** [Magnum doc guide](https://docs.google.com/document/d/1XGUch-7eAhLEGBFM4e5ashmp8Wz8q-j1bwwWnlnJkpg/edit) — full month-end process + all credentials (sensitive; do not copy into repo)
- **Process step folders / tutorials (Drive):** [Magnum Tutorials](https://drive.google.com/drive/folders/1ejnEIkjPrR1aU4aV36DbP7w1RsLwpESt) (numbered step folders: bank feed, reconciliation, Bravo, JEs, vendor recon, performance report, ADP, reclass, monthly checklist)
- **Related client:** [`sunoma-inc.md`](./sunoma-inc.md) (same pawn/jewelry owner group)
- **Related SOPs:** [`../../sops/magnum-152-bookkeeping-review.md`](../../sops/magnum-152-bookkeeping-review.md) — Monthly Bookkeeping & Close runbook (bookkeeping-sop skill; rendered in the Hub; in review)
