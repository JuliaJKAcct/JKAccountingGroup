# Magnum 152 — Monthly Bookkeeping & Close Runbook

> **Status:** Active · **Client:** MAGNUM 152, INC (QBO via Double) · **Owner of SOP:** Maria · **Last updated:** 2026-07-21
>
> **In review (2026-07-21).** First draft, built from Maria Fernanda's Drive
> "doc guide" as the exemplar for the six Maria-owned clients. **Reviewer: Julia /
> Maria** — the process content will be reviewed by Maria (who runs it) and is
> expected to change. Remove this note once signed off. This blockquote is internal
> provenance and is **stripped from the team-facing Hub view.**
>
> This file holds the **procedure and rules only** and keeps the **maximum detail**
> (the source of truth). Working papers with client figures (bank statements, Bravo
> reports, JE workbooks, reconciliations) and **all logins/passwords** live in the
> firm's client systems (Google Drive / Double / QuickBooks) — **never in this repo.**
> Where a value is sensitive, this file points to where it lives (a Drive link).

## Client snapshot (operational, non-financial)

- **Multi-store pawn / jewelry business** — Maria's guide categorizes it as "guns and
  jewelry sales (pawn shop)". Currently **two active stores — MS1 (Griffin)** and
  **MS2 (Miami)**; MS3 was sold in 2024 and MS4 in 2025 (legacy MS4 costs still surface).
- **Entity / tax:** S-corp, files **Form 1120-S**; **1099 preparation** is part of the
  engagement; **sales tax N/A**; annual report **no**.
- **Owner group:** same owner (and administrative assistant) as a **sister company in the
  same pawn group** — managed together, books kept **distinct**.
- **Bank & card feeds** (reconcile every one; last-4 only): **PayPal 1015** (sync broken →
  monthly JE, not a live feed), **TD Bank ×5** (5100, US1 2873, US2 5093, US3 5085,
  US4 3178), **Amex** CC, **Chase ×2** (2054, 2055), **Capital One ×2** (4850, 1395).
- **Systems:** QuickBooks Online (via Double) · **Bravo** (store POS + inventory, the
  monthly source reports) · **SaasAnt** (import / consolidate the store GL into QBO) ·
  **ADP** (payroll — run by the owner group, JK reconciles).
- **Payroll:** **run by the owner group in ADP — not by JK.** JK only reconciles it and
  renames the ADP journal entries.
- **Reporting cadence:** reports go to the client **quarterly / on request** — Magnum
  does **not** get a monthly report. It is the slowest of the pawn group to close; pull
  Bravo reports in the first 3–5 days of the next month and start early.
- **Logins & the full walkthrough:** Maria's doc guide in Drive (linked in *Reference
  material*). Contact names/emails/phones live in the Double client.

## Monthly close process

The close runs in one pass, in order. Each step links to Maria's screen-by-screen
walkthrough (or the working file) in Drive — the sensitive detail lives there, not here.

1. **Bank reconciliation.** Reconcile each feed. **PayPal 1015 is not a live feed** —
   record it with the **monthly PayPal JE** instead of matching. Follow the bank-feed
   handling rules (see *Categorization rules*) — they prevent this client's recurring
   errors. Reference: [Reconciliation walkthrough](https://drive.google.com/drive/folders/1rkwfOr3iPFU8psLcT724mU7gGt_0SuoA) · [Bank-feed categorizing](https://drive.google.com/drive/folders/1ARBuAqJ1fNfTKcKonS5OZ99BUUA5HTrj)
2. **Bravo reports → per-store journal entries.** Log in to Bravo, download each active
   store's reports and **save them to the client's Drive folder**, then create the
   **monthly JEs per store** (MS1 Griffin, MS2 Miami). Reference: [Bravo reports (save here)](https://drive.google.com/drive/folders/1UTjiX27I0zq9wYvSknpjYZVFqRO3a0nr) · [Bravo walkthrough](https://drive.google.com/drive/folders/1DlmWAYrU1Z7w6fgqBjyydHRRFucXn2Qw)
3. **Consolidate the GL with SaasAnt.** Import / consolidate the per-store general ledger
   into QBO. Reference: [GL consolidation sheet](https://docs.google.com/spreadsheets/d/1r4Aa4VHV8Y6B8YZju-fYxiLU3UhYjAe33U9ffYVkMfM/edit)
4. **Other journal entries.** Book the recurring set: cash-on-hand adjustment, inventory
   adjustment, miscellaneous / disbursement, Pirate Shipping, insurance, and the Kabbage
   loan (see the full list below). Reference: [Cash-on-Hand / Inventory sheet](https://docs.google.com/spreadsheets/d/1EpYin2lyUwcrGy3jBBLGrJNCA9YuydhNP0lvXxP2MDI/edit) · [Insurance](https://drive.google.com/drive/folders/1k3TI4t1eLI4hxVmWTbxY34pyHFjjGREt) · [Other-JE walkthrough](https://drive.google.com/drive/folders/1_emYRkzo-fDBXLwoMjQ8xi2TMoy3UzE_)
5. **Vendor reconciliation.** Reconcile Merch adj, US Pawn adj, Scrap adj. Reference: [Vendor reconciliation files](https://drive.google.com/drive/folders/1OlsdH1T8fiKLD1a1uUb-iPBew2IJBbvK) · [Vendor walkthrough](https://drive.google.com/drive/folders/1euoDcP-XAwIgV5hlGqoQvmxfEJuUXqzU)
6. **Payroll (ADP).** Payroll is run by the owner group in ADP; **reconcile ADP** into the
   books and **rename the ADP journal entries** to the house naming (`ADP MM-DD-YY` +
   `MM-DD-YY PayrollClear`). Reference: [ADP reconciliation](https://drive.google.com/drive/folders/1dAc7AAVuVdamzQwnlIMWrdZJx43j2gCP) · [Rename ADP JEs](https://drive.google.com/drive/folders/1ZX4x-hynCwm8gnfeji2DQiaa8ifppYzg)
7. **Reclass checklist.** Work the standing reclasses (see *Categorization rules*). Reference: [Reclass records](https://drive.google.com/drive/folders/1DeIBWAJUBuDQybz1NAaJkCR9xNPegLyy) · [Reclass walkthrough](https://drive.google.com/drive/folders/16cwvAjXoCrpYzonYDk-YUzb-FONTTheq)
8. **Performance report vs QBO.** Produce the Performance Report vs QBO as the final
   tie-out that the store numbers agree with the books. Reference: [Performance sheet](https://docs.google.com/spreadsheets/d/1AGyS8_6FjnKIk8jJPvzVEuw0N3WQzrWylTrfe6G7Cb8/edit) · [Performance walkthrough](https://drive.google.com/drive/folders/1DPfqaZ1sVeO5IrjmeHMmanklTJFV49oE)
9. **Close gate.** The triage / **Uncategorized** accounts must read **$0** before the
   month is called closed — a balance there means something is still unsorted. A $0 triage
   is necessary, **not** sufficient (the coding still has to be right). Then deliver only
   if it's the quarter or the client asks. Reference: [Monthly checklist walkthrough](https://drive.google.com/drive/folders/12pJQ0LphSI-jPbpZbcyh7eapJ1QPueX3)

### The recurring journal-entry set

- **PayPal (1015) monthly JE** — because the feed sync is broken.
- **Per-store Bravo JEs** — one per active store (MS1, MS2).
- **Cash-on-Hand adjustment** — from the store cash counts.
- **Inventory adjustment** — from Bravo inventory.
- **Miscellaneous / Disbursement JE** — owner disbursement expenses.
- **Pirate Shipping** — shipping costs.
- **Insurance** — from the insurance documents in Drive.
- **Kabbage loan** — loan activity (uses the Amex login).
- **ADP payroll JEs** — reconciled + renamed.
- *(On hold: one "Alla Trost" JE, pending information — do not book until Julia confirms.)*

## Categorization rules

These override any QuickBooks auto-suggestion. Store **class** (MS1 / MS2 / ADMIN) is
confirmed at month-end from the administrative assistant's bills.

1. **PayPal 1015 has no working feed.** Never wait for it to sync — it is booked with the
   monthly PayPal JE.
2. **Don't match open JE balances for vendors against payments — always categorize.**
   Matching hides the real activity on this client.
3. **TD Bank check images don't attach in QBO.** Pull the image from the bank and use the
   **vendor** to decide the account; the store class is known only at month-end, from the
   admin's bills. (Some vendors always resolve to one class — e.g. gun-show purchases →
   ADMIN.)
4. **Amex payments** → book as a **credit-card payment from TD Bank**, then match in TD
   Bank (filter by date, match the most recent payment).
5. **Amex expenses** → determine which store they belong to. Meals, subscriptions, and
   automobile → **ADMIN** always (most already have rules); Amazon-type purchases need the
   store identified by who made them.
6. **Standing monthly reclasses:** Comcast (by account number); FPL (check the FPL site
   against the TD statements); Bravo split across the active stores; ReadyRefresh, Waste
   Management, and Gearfire split between MS1 and MS2; rent to the correct store/landlord;
   Automobile / Meals / Interest / Dues & Subscriptions → **ADMIN**; Amex Amazon / Dollar
   General / Publix → the store that incurred the charge; large disbursement repairs or
   store signage → **Leasehold Improvement**; payroll-benefit health insurance → split by
   class.
7. **1099 preparation** is part of the engagement — use Double to track payees and W-9s.

## Monthly review checklist (what the reviewer verifies)

1. Every feed reconciled (PayPal 1015 via JE; TD ×5; Amex; Chase ×2; Capital One ×2).
2. Bravo reports downloaded and saved to Drive; per-store JEs booked (MS1, MS2).
3. GL consolidated via SaasAnt.
4. Other JEs booked (cash-on-hand, inventory, disbursement, Pirate Shipping, insurance, Kabbage).
5. Vendor reconciliation done (Merch, US Pawn, Scrap).
6. ADP reconciled and the ADP JEs renamed to the house naming.
7. Standing reclass checklist complete (see rule 6).
8. Performance Report vs QBO produced and tied out.
9. **Close gate:** triage / Uncategorized accounts read **$0**.
10. Reports sent only if it's the quarter or the client asked (no monthly send).

## Open items log

| Item | Status |
|---|---|
| WF/TD reconciliation items stuck from a prior period (e.g. a specific vendor payment) | Pending |
| "Alla Trost" JE — awaiting information before booking | On hold |
| Recurring **Bravo access loss** — request a dedicated login from Julia | Pending |
| Uncat items to resolve (e.g. LINCOLN AFS FORDCREDIT; sale of store 4) | Pending |

## Reference material (Maria's step folders)

Maria's screen-by-screen walkthroughs live in Drive, one folder per step of the close —
plus the master process sheet and the full doc guide (which holds all logins).

- **[Magnum Process — master sheet](https://docs.google.com/spreadsheets/d/1EZ09dbUNiYRrJSXnyL_9TyAgkdOPKUWzOT84r6PWv8U/edit)** — the whole close as a checklist.
- **[Maria's Magnum doc guide](https://docs.google.com/document/d/1XGUch-7eAhLEGBFM4e5ashmp8Wz8q-j1bwwWnlnJkpg/edit)** — the full write-up + every credential.
- [0 · Bank feed — categorizing](https://drive.google.com/drive/folders/1ARBuAqJ1fNfTKcKonS5OZ99BUUA5HTrj)
- [1 · Bank reconciliation](https://drive.google.com/drive/folders/1rkwfOr3iPFU8psLcT724mU7gGt_0SuoA)
- [2 · Bravo reports](https://drive.google.com/drive/folders/1DlmWAYrU1Z7w6fgqBjyydHRRFucXn2Qw)
- [3 · Other JE](https://drive.google.com/drive/folders/1_emYRkzo-fDBXLwoMjQ8xi2TMoy3UzE_)
- [4 · Vendor reconciliation](https://drive.google.com/drive/folders/1euoDcP-XAwIgV5hlGqoQvmxfEJuUXqzU)
- [5 · Performance Report vs QBO](https://drive.google.com/drive/folders/1DPfqaZ1sVeO5IrjmeHMmanklTJFV49oE)
- [6 · ADP reconciliation](https://drive.google.com/drive/folders/1dAc7AAVuVdamzQwnlIMWrdZJx43j2gCP)
- [7 · Reclass records](https://drive.google.com/drive/folders/16cwvAjXoCrpYzonYDk-YUzb-FONTTheq)
- [8 · Rename ADP JEs](https://drive.google.com/drive/folders/1ZX4x-hynCwm8gnfeji2DQiaa8ifppYzg)
- [9 · Monthly checklist](https://drive.google.com/drive/folders/12pJQ0LphSI-jPbpZbcyh7eapJ1QPueX3)
