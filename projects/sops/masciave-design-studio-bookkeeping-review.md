# Masciave Design Studio — Bookkeeping Runbook

> **Status:** In review (new — started 2026-09-01) · **Client:** MASCIAVE DESIGN STUDIO LLC (QBO via Double) · **Owner of SOP:** Lilian · **Last updated:** 2026-09-01
>
> **This file starts from ONE rule and is expected to grow.** Lilian gave the first
> categorization rule on 2026-09-01 — the recurring outside-service retainer that carries
> **no** project (rule 2 below) — and this runbook was created to hold it rather than let it
> die with the session. Everything else here is the operational context carried over from
> the client's Client Intelligence file so the rule reads in context. **It is not yet a
> complete runbook**, and the sections say so where they are thin.
>
> ⚖️ **In review — the RULE is hers, the RUNBOOK around it is not yet signed off.** Rules 1
> and 2 are Lilian's own instruction of 2026-09-01 and are settled. Everything else — the
> snapshot, the borrowed firm-wide rules, the checklist, the cadence — was assembled by a
> session from the client file and **awaits her approval**, which is the standing gate on any
> SOP. Remove this note once she signs it off; until then the Hub shows it as in review.
>
> The `.md` is the source of truth (maximum detail). Client figures, **vendor names**,
> account numbers and logins live in the firm's client systems (Google Drive / Double /
> QuickBooks) — never in this repo. Internal provenance — **stripped from the team-facing
> Hub view.**

## Client snapshot (operational, non-financial)

- **Interior design studio** (commercial + residential), Florida — Broward / Fort Lauderdale
  area. Work runs as **numbered design projects**, some for commercial / government clients.
- **Books:** QuickBooks Online, managed through **Double**. **Assigned bookkeeper: Lilian.**
- **Bookkeeping cadence: quarterly** *(Double)* — this runbook's checks run on that cycle,
  not monthly.
- **Entity / tax:** the firm files **Form 1120-S**. ⚠️ The company's federal classification is
  **contested with the IRS** (no Form 2553 on file as of the 2025-12-23 call) — that is a
  **tax-side matter**, tracked in the client's Double case note and Client Intelligence file.
  **It does not change how the books are kept**; do not try to resolve it from here.
- **Two bases, on purpose:** client-facing statements are on the **accrual** basis (so the
  owner sees A/R, A/P and customer deposits); the **tax return is filed on the cash** basis.
  The studio invoices heavily and collects slowly — accrual shows true performance, cash
  defers tax on what is not yet collected. **Don't "fix" one to match the other.**
- **Project-based / work in progress:** deposited-but-incomplete projects carry across
  year-end. This is *why* the reporting is accrual, and it is why rule 1 below matters.
- **Payroll:** **Gusto**, AutoPilot auto-run (biweekly), auto-debited — no manual run.
  Off-cycle runs do happen and appear in the feed like any other payroll debit.
- **Subcontractors:** the studio pays outside professionals (e.g. structural engineers) and
  collects **W-9s** → this drives the annual 1099 work.
- **Accountable plan:** home-office and vehicle-mileage costs are **reimbursed to the owner
  through a formal accountable plan**, tracked in a workbook in Drive — *not* run as a
  company rent or auto expense. A reimbursement in the feed is the accountable plan, not a
  new expense category to invent.
- **No QBO timesheet integration** (the owner decided per-project time entry wasn't worth it
  for a one-person shop) — so **the project tag on a cost is the only project-level data the
  books carry.** That is the whole weight behind rules 1 and 2.
- 🔒 **The client's own payees are written by ROLE, not by name** — *the permit-expediting
  service*, *the structural engineer* — and this is a deliberate choice, not an omission.
  A payee list is client data, it belongs in QuickBooks and Double, and this repo publishes
  to the Knowledge Hub; a role also survives a change of vendor, which a name does not
  *(firm rule, the `bookkeeping-sop` skill)*. **The role → name mapping lives in the QBO
  vendor list.** Don't "helpfully" fill the names back in — see the open-decisions log,
  where the question of naming this one vendor is registered for Lilian.

## Categorization rules

These override any QuickBooks auto-suggestion.

1. **A cost incurred FOR one project carries that project (the customer/project tag).**
   This is the studio's normal case and the reason the field exists: when the studio pays a
   contractor to do the drawings for one specific project, the expense is tagged with **that
   project / that client**, so the books can show what that job actually cost. Applies to
   subcontracted design and engineering work, project materials, permits pulled for one
   address, and anything else bought because a named job required it.
   - **The test is the reason for the spend, not the vendor.** The same vendor can be tagged
     on one charge and untagged on another — what decides it is whether the cost was incurred
     for one identifiable job.
   - Because there is **no timesheet integration**, an untagged job cost is not recoverable
     later from anywhere else. Tag it when you code it.
2. **The recurring permit-expediting retainer → `Legal and Professional Fees`, and NO
   project.** *(Lilian, 2026-09-01.)* The studio pays an outside permitting company a
   **regular, recurring fee** so that company works permits across the studio's clients. That
   one payment buys work on **several projects at once**, so there is **no single project it
   belongs to** — leave the customer/project field **empty**, and post it to **Legal and
   Professional Fees**.
   - **Why this is the exception and rule 1 is the rule:** rule 1 tags a cost because it can
     be traced to one job. This payment cannot — splitting it across projects would be an
     invention, and tagging it to any one of them would be wrong. Empty is the accurate
     answer, not a missing one.
   - **Every charge to this vendor follows this rule** — it is recurring, so expect it on
     every cycle, and it is not a judgement call each time.
   - *(to verify)* If the vendor ever bills the studio **for one named project** — a
     one-off, outside the retainer — that invoice is a rule-1 cost and carries the project.
     Not yet seen; ask Lilian before treating any charge that way.
   - **Which vendor:** the permit-expediting service, identified in the **QBO vendor list**
     (see the 🔒 note in the snapshot above).
3. **Owner-personal amounts are equity, never an expense** — money in → contribution, money
   out → distribution, posted to the specific equity sub-accounts. **Never** Sales or COGS.
   *(Firm-wide rule; stated here so a covering bookkeeper has it.)*
4. **Every transaction gets a payee/vendor**, except owner draws, owner contributions, and
   transfers. An unidentifiable bank descriptor goes to **triage** (*Ask My Accountant* /
   Uncategorized), never a guess.
5. **Accountable-plan reimbursements are the accountable plan** — a payment to the owner that
   matches the accountable-plan workbook is the reimbursement of home-office / mileage, not a
   new rent or auto expense, and not a distribution. Check the workbook in Drive before
   coding one. *(to verify — the exact account this posts to is not yet recorded here.)*

## Vendor & 1099 tracking — use Double

- The studio pays **outside professionals** (engineers, permitting, design subcontractors),
  so 1099 exposure is real and lives in exactly the accounts rule 2 feeds.
- Track every payee crossing the **$2,000** threshold (2026), collect a **W-9**, and sweep
  **across every labor / outside-services account** at year-end — including **Legal and
  Professional Fees**, which is where the permit retainer lands. A recurring vendor is the
  easiest one to miss precisely because nobody re-reads it.
- Use **Double**, which flags missing payees and 1099 readiness. The client already has a
  dedicated contractors/1099 folder in Drive.

## Chart of accounts conventions

- This client is one of the firm's **reference charts for the number-prefix grammar** — the
  account names carry their number.
- The firm's grammar — the account carries its number in its *name* — 100s assets ·
  200s liabilities · 300s equity · 400s income · 500s COGS · 600s opex ·
  800s other income · 901 depreciation · 997/998/999 triage.
- **`Legal and Professional Fees` is an operating expense (600s)** — it is not a job cost and
  does not belong in COGS, which is consistent with rule 2 leaving it untagged by project.
- **Parents never receive postings** — post to sub-accounts only.
- Renames / renumbers are safe; **merges and type changes on a year with activity are not.**

## Review checklist (what the reviewer verifies each cycle)

1. **Triage reads $0** — *Ask My Accountant* / Uncategorized is empty before the period is
   called closed. (Necessary, not sufficient — $0 does not mean the categories are right.)
2. **Every job cost carries its project** (rule 1) — spot-check the period's subcontracted
   design/engineering costs for an empty customer/project field.
3. **The permit-expediting retainer is in `Legal and Professional Fees` with no project**
   (rule 2) — and **every occurrence the period should contain is present.** ⚠️ **Count them,
   don't find one:** the review runs on a longer cycle than the fee does, so a quarter holds
   more than one charge and finding the first proves nothing about the rest. *(The fee's exact
   frequency is not yet recorded — see the decisions log.)* **A gap is a question, not a
   pass** — this client has a bank-feed history, and a period that stopped importing reads
   exactly like a quiet one.
4. **Owner-personal items sit in the equity sub-accounts**, not in expenses.
5. **Payroll** — the Gusto debits (including any off-cycle run) are all accounted for.
6. **1099 payees** — every vendor over **$2,000** has a W-9 recorded in Double.
7. **Accrual vs cash** — client-facing reporting is on the accrual basis; nothing has been
   "corrected" toward the cash-basis tax view.

## Open decisions log

| Item | Status |
|---|---|
| **Name the permit-expediting vendor in this runbook, or keep it by role?** Written by role per the firm rule (this repo publishes to the Hub). Lilian gave the name in the 2026-09-01 round; naming it is her call, and it is a one-line change | Pending |
| Confirm the exact **spelling of that vendor's name** against the QBO vendor list before anyone relies on a role→name mapping | Pending |
| **Lilian's sign-off on this runbook** — rules 1 and 2 are hers; the rest was assembled by a session and is unapproved. Header stays *In review* until she rules | Pending |
| **How often the retainer is charged** (monthly? per period?) — the reviewer checklist counts occurrences, so it cannot be run properly until this is known | To verify |
| Does the retainer vendor ever issue a **project-specific** invoice outside the recurring fee? If so it is a rule-1 cost (rule 2, *to verify*) | To verify |
| The **account an accountable-plan reimbursement posts to** is not recorded here | To verify |
| Whether project-tagged costs are also marked **Billable** in QBO, or tagged for cost tracking only | To verify |
| Confirm the **review cadence** this runbook runs on (Double says bookkeeping is quarterly) | To verify |
| The rest of the monthly/quarterly close (feeds reconciled, reporting pack, sales-tax hand-off) is **not yet written** — this runbook is one round old | Pending |
