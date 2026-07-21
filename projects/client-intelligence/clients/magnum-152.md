# MAGNUM 152, INC

> **Status:** Active · **Owner:** Maria · **Last updated:** 2026-07-21

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

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
| Owner / primary contact (also owns Sunoma Inc) | Double client (link below) |
| Administrative assistant (sends monthly bills, reclass records) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706693](https://app.doublehq.com/close?cid=706693)

## 3. Systems & access

Credentials for **every** system below (Bravo, SaasAnt, ADP, banks) live in
**Maria's doc guide** in Drive (§7) — never copied here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | Maria's doc guide (§7) | Managed through Double |
| **Bravo (Bravo Pawn Systems)** | Store POS / inventory reports — pulled ~monthly and saved to Drive | Maria's doc guide (§7) | Recurring access/login friction |
| **SaasAnt** | Import / consolidate GL into QBO | Maria's doc guide (§7) | Recurring SaaS cost on JK's side |
| **ADP (RUN / Accountant Connect)** | Payroll (run by owner group) → JK reconciles it into the books | Maria's doc guide (§7) | JK does the reconciliation, not the payroll run |
| Bank & cards | Reconciliation | Maria's doc guide (§7) | **TD Bank ×5** (5100, 2873, 5093, 5085, 3178), **Chase CC ×2**, **Capital One ×2**, **Amex CC**, **PayPal** (sync broken → monthly JE) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — **N/A** _(Double)_

### Payroll
- **Applies?** **Not on JK's side** — the owner group runs **payroll via ADP** ("US Pawn"). JK's role is limited to the monthly **ADP reconciliation** and renaming the ADP journal entries in QBO. _(Maria's doc guide, Gmail)_

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

### Licenses & other filings
- **Annual report:** No _(Double)_
- **Firearms (if carried):** possible FFL / firearms-compliance angle _(low confidence — the "guns and jewelry" categorization + a firearms wholesaler's statements)_.

## 5. Key facts & quirks

- **Pawn/jewelry owner-group (with Sunoma Inc):** same owner, same administrative assistant. Managed together; **keep the books distinct**. _(Double, Drive)_
- **2 active stores** — MS1 (Griffin), MS2 (Miami). MS3 sold 2024, MS4 sold 2025 — old MS4 costs (rent, some payroll benefits) still surface in the checklist. _(Maria's doc guide)_
- **PayPal 1015 feed sync is broken** — recorded via a **monthly journal entry** instead of a live feed.
- **Bank-feed handling rules:** do **not** match open JE balances for vendors with payments — always categorize; **TD Bank check images aren't attaching in QBO** — pull images from the bank and use the vendor to pick the account; the store **class** is confirmed at month-end from the admin's bills; Amex payments are booked as CC payments from TD Bank, then matched by most-recent payment/date.
- **SaasAnt** is used for GL consolidation into QBO; **Bravo** for store POS/inventory; **ADP** for payroll (owner-run).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-21 — **Integrated Maria Fernanda's "doc guide"** (Drive → *Mafer's Clients process / 1. Magnum*): full month-end process, bank-feed map, systems (Bravo / SaasAnt / ADP), store structure, and reclass checklist captured into the Operating zone (non-sensitive only; credentials/dollar figures left in Drive). Tutorials/step folders linked in §7. _(Maria's doc guide)_
- 2026-07-20 — Profile built from Double properties + a Ping/Gmail/Drive enrichment sweep. Ping had **no indexed meetings**; Double has no notes yet.

### Outstanding items (CI-only — never in the SOP)
- **Legal matter (resolved ~Jul 19–21):** owner requested TD Bank statements to trace wire transfers to an outside attorney's firm; JK located and delivered them. _(Gmail)_
- **Inventory-donation tax treatment** — JK advised on the deduction at fair market value (~Jul 10–13; essentially resolved). _(Gmail)_
- A missing prior-period (**Apr 2024**) expense report for the sibling **Auto Pawn** entity — confirm received. _(Gmail)_
- **Open in Maria's guide:** Uncat items (LINCOLN AFS FORDCREDIT; sale of store 4); pending "Alla Trost" JE (waiting on info). _(Maria's doc guide)_

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
