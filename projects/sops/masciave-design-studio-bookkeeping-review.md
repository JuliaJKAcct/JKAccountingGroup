# Masciave Design Studio — Bookkeeping Runbook

> **Status:** In review (new — started 2026-09-01) · **Client:** MASCIAVE DESIGN STUDIO LLC (QBO via Double) · **Owner of SOP:** Lilian · **Last updated:** 2026-09-01
>
> **This file starts from ONE rule and is expected to grow.** Lilian gave the first
> categorization rule on 2026-09-01 — the regular payment to an outside company that carries
> **no** project (rule 2 below) — and this runbook was created to hold it rather than let it
> die with the session. Everything else here is the operational context carried over from
> the client's Client Intelligence file so the rule reads in context. **It is not yet a
> complete runbook**, and the sections say so where they are thin.
>
> ⚖️ **In review — the RULE is hers, the RUNBOOK around it is not yet signed off.** Rules 1
> and 2 are Lilian's own instruction of 2026-09-01 and are settled, and in a second round the
> same day she **named the vendor** (*Permit Cleaners*) and **settled the account** (650 — this
> client's chart has no sub-accounts under it). Everything else — the snapshot, the borrowed
> firm-wide rules, the checklist, the cadence — was assembled by a session from the client file
> and **awaits her approval**, which is the standing gate on any SOP. Remove this note once she signs it off; until then the Hub page's status chip, its
> printed cover and its text export all say **In review** — the card in the Hub grid still says
> *Active*, like every SOP card, which is a firm-wide Hub question rather than this runbook's.
>
> The `.md` is the source of truth (maximum detail). Client figures, **bank and card account
> numbers** and logins live in the firm's client systems (Google Drive / Double / QuickBooks) —
> never in this repo. **Vendor names too, with ONE named exception Lilian ruled on** — see the
> 🔒 note in the snapshot. ⓘ **A chart-of-accounts code like `650` is not one of those
> numbers**: it is the procedure — which account the money goes to — and it belongs here.
> Internal provenance — **stripped from the team-facing Hub view.**

## Client snapshot (operational, non-financial)

- **Interior design studio** (commercial + residential), Florida — Broward / Fort Lauderdale
  area. Work runs as **numbered design projects**, some for commercial / government clients.
- **Books:** QuickBooks Online, managed through **Double**. **Assigned bookkeeper: Lilian.**
- ⚠️ **Bookkeeping cadence — UNSETTLED, and the two records disagree.** Double's client
  property says **quarterly**, and that is what the engagement line records. But the client's
  own Double activity shows **month-end close work**: a *June 2026 month-end close* marked Done
  on 2026-07-20, and three bank-account reconciliation tasks moving on 2026-08-24. **Both are
  written down here rather than one being picked** — ask Lilian (open decisions). Until then,
  **work the period you are handed** and don't infer anything else from the cadence. ⓘ It does
  **not** affect rule 2: that charge has no expected count in any period (see rule 2).
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
- 🔒 **The client's own payees are written by ROLE, not by name** — *the structural engineer*,
  *the design subcontractor* — and this is a deliberate choice, not an omission. A payee list
  is client data, it belongs in QuickBooks and Double, and this repo publishes to the Knowledge
  Hub; a role also survives a change of vendor, which a name does not *(firm rule, the
  `bookkeeping-sop` skill)*. **The role → name mapping lives in the QBO vendor list.** Don't
  "helpfully" fill the other names in.
  ✅ **ONE payee is named here, because Lilian said to name it: `Permit Cleaners` (rule 2),
  2026-09-01** — *"Se llama Permit Cleaners, ponlo con nombre en el SOP."* Asked, answered,
  written down. **It is a ruling for this vendor in this runbook, not a new general licence**:
  the rule above still governs every other payee, here and in every other client's runbook.
  _(Same shape as the Ecoorganic retail-chain permission of 2026-08-26 — she grants these one
  at a time, and a session may rely on one that is written down, never widen it by reasoning.)_
  **Where the name may travel:** this runbook, its Hub page, and the client's own Client
  Intelligence file and index rows — the documents *about this client*. ⛔ **Not into a
  firm-wide skill or a general procedure**, where a client's payee has no business being and
  where the next reader would take it as the general rule loosening.

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
   - ⚠️ **Ask the owner question FIRST (rules 3 and 5).** An accountable-plan mileage
     reimbursement for a trip to one job site looks exactly like a rule-1 cost and is not one:
     tag it and a reimbursement ends up sitting in that project's job costs.
2. **Money sent to `Permit Cleaners` → `650.Legal & Professional Fees`, and NO project.**
   *(Lilian, 2026-09-01 — settled, both halves.)* **Permit Cleaners** is a permitting company
   the studio pays **regularly** so that it works permits **across the studio's different
   clients**. That one payment buys work on **several projects at once**, so there is **no
   single project it belongs to** — post it to **`650.Legal & Professional Fees`** and leave
   the customer/project field **empty**.
   - **Why this is the exception and rule 1 is the rule:** rule 1 tags a cost because it can
     be traced to one job. This payment cannot — splitting it across projects would be an
     invention, and tagging it to any one of them would be wrong. Empty is the accurate
     answer, not a missing one.
   - **Every charge to Permit Cleaners follows this rule.** It is not a judgement call each
     time, and it does not depend on the amount.
   - 🛑 **Do NOT expect a fixed amount or a fixed rhythm, and never treat a change in either
     as an anomaly.** *(Lilian, 2026-09-01: "no te puedo decir el monto que se paga ni la
     frecuencia con que se paga, porque eso depende de las necesidades de nuestra clienta y lo
     que acuerde con esa compañía.")* **This is recorded as a deliberate absence, not a gap to
     be filled** — what the bookkeeper needs is *how it is categorized and what the expense
     is*, and that is all of it. So: **no expected count per period, no "one is missing"
     alarm** — the charge appears when the client and Permit Cleaners agree that it should.
   - **The account:** in **this client's chart** `650.Legal & Professional Fees` **has no
     sub-accounts**, so it is the posting account itself — the firm-standard `650.1 Accountant`
     / `650.2 Legal` do not exist here, and the *parents never receive postings* rule (see
     *Chart of accounts*) does not bite. **Confirmed by Lilian against the client's own chart,
     2026-09-01.** ⚠️ Search QBO with the ampersand (`Legal & Professional Fees`), not "and".
   - *(to verify)* If Permit Cleaners ever bills the studio **for one named project** — a
     one-off, outside the regular arrangement — that invoice is a rule-1 cost and carries the
     project. Not yet seen; ask Lilian before treating any charge that way.
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

- The studio pays **outside professionals** (engineers, permitting, design subcontractors), so
  1099 exposure is real — and it is **not confined to one account.** Most of it sits in the
  **project-tagged** subcontract and professional accounts of rule 1; rule 2 adds one more
  account to sweep, it does not replace them.
- Track every payee crossing the **$2,000** threshold (2026), collect a **W-9**, and sweep
  **across every labor / outside-services account** at year-end — including
  **`650.Legal & Professional Fees`**, which is where Permit Cleaners lands. A regular vendor is the easiest
  one to miss precisely because nobody re-reads it.
- Use **Double**, which flags missing payees and 1099 readiness. The client already has a
  dedicated contractors/1099 folder in Drive.

## Chart of accounts conventions

- This client is one of the firm's **reference charts for the number-prefix grammar** — the
  account names carry their number.
- The firm's ranges: 100s assets · 200s liabilities · 300s equity · 400s income ·
  500s COGS · 600s opex · 800s other income · 901 depreciation · 997/998/999 triage.
- **`650.Legal & Professional Fees` is an operating expense (600s)** — it is not a job cost
  and does not belong in COGS, which is consistent with rule 2 leaving it untagged by project.
  **In this client's chart it has no sub-accounts**, so it is posted to directly.
- **Parents never receive postings** — post to sub-accounts only. ✅ **This chart tells you
  which accounts those are**: a true parent carries the description
  ***"THIS IS A PARENT CATEGORY, ONLY USE SUBACCOUNTS"*** (e.g. `660.Payroll Expenses` and
  `660.1 Officer Compensation`, both also locked). **An account with no children and no such
  note is a posting account** — don't infer a parent from the firm standard, which is the
  template every client is adapted from, not a description of any one client's chart.
- Renames / renumbers are safe; **merges and type changes on a year with activity are not.**

## Review checklist (what the reviewer verifies each cycle)

1. **Triage reads $0** — *Ask My Accountant* / Uncategorized is empty before the period is
   called closed. (Necessary, not sufficient — $0 does not mean the categories are right.)
2. **The period actually imported.** Every connected feed carries transactions running to the
   end of the period. ⚠️ **A stopped feed reads exactly like a quiet month**, and this client
   has an open question about its Double bank-feed connection (a June 2026 support ticket).
   This is the check that makes *"no expected count"* in item 4 safe: nothing there is never
   allowed to mean *nothing imported*.
3. **Every job cost carries its project** (rule 1) — spot-check the period's subcontracted
   design/engineering costs for an empty customer/project field.
4. **Every `Permit Cleaners` charge in the period sits in `650.Legal & Professional Fees`
   with no customer/project** (rule 2). ⛔ **There is no expected count and no expected
   amount** — both follow what the client agrees with that company, so a period holding more,
   fewer or none of these charges is **not, by itself, a finding**. What this item checks is
   the **coding of the ones that are there**. ⓘ Two things it does *not* excuse: the period's
   feeds still have to be complete (item 2), and the **year's total to this vendor is still
   read against the 1099 threshold** (item 7) — that is a different question from expecting a
   rhythm.
5. **Owner-personal items sit in the equity sub-accounts**, not in expenses.
6. **Payroll** — the Gusto debits (including any off-cycle run) are all accounted for.
7. **1099 payees** — every vendor at **$2,000 or more** (**≥**, not over) has a W-9 recorded in Double.
8. **Accrual vs cash** — client-facing reporting is on the accrual basis; nothing has been
   "corrected" toward the cash-basis tax view.

## Open decisions log

| Item | Status |
|---|---|
| **Name the vendor, or keep it by role?** → **RESOLVED 2026-09-01, Lilian: name it.** `Permit Cleaners`, in this runbook. A ruling for this vendor, not a general licence (see the 🔒 note) | Resolved |
| **Which sub-account the charge posts to?** → **RESOLVED 2026-09-01, Lilian, from the client's own chart: `650.Legal & Professional Fees` has NO sub-accounts**, so it is posted to directly. The firm standard's `650.1` / `650.2` do not exist here | Resolved |
| **How often is it charged, and how much?** → **CLOSED 2026-09-01, Lilian: deliberately not recorded.** Both follow what the client agrees with Permit Cleaners. The reviewer checks the coding, never the count | Resolved |
| **Confirm the exact string `Permit Cleaners` against the QBO vendor list** before anyone relies on it as a search key. It arrived in a message, and Lilian's dictation is not always faithful; the checklist and the 1099 sweep are both keyed on it, so a wrong string makes both silently unrunnable | To verify |
| **Lilian's sign-off on this runbook** — rules 1 and 2 are hers, and she settled the name and the account; the rest was assembled by a session and is unapproved. Header stays *In review* until she rules | Pending |
| **The review cadence** — Double's property says quarterly, the client's own close tasks in Double have run monthly. Both recorded in the snapshot; Lilian settles it | Pending |
| Does **Permit Cleaners** ever issue a **project-specific** invoice, outside the regular arrangement? If so it is a rule-1 cost and carries the project (rule 2, *to verify*) | To verify |
| The **account an accountable-plan reimbursement posts to** is not recorded here | To verify |
| Whether project-tagged costs are also marked **Billable** in QBO, or tagged for cost tracking only | To verify |
| The rest of the monthly/quarterly close (feeds reconciled, reporting pack, sales-tax hand-off) is **not yet written** — this runbook is one round old | Pending |
