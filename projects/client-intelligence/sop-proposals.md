# SOP proposals — pending Lilian's approval

The **CI → SOP bridge**. Client Intelligence captures everything non-sensitive
automatically (no approval needed). But a client's **SOP** is different: **no SOP
change is ever made without Lilian's explicit approval.** So when a sweep (or a manual
enrichment) finds an Operating-zone fact that a client's SOP doesn't yet reflect, it
does **not** touch the SOP — it appends a **proposal** here for Lilian to approve or
reject. This file is the durable queue so proposals are never lost and never proposed
twice.

## How the loop works

1. **Propose (Claude / the weekend sweep).** Append each candidate to the **Queue**
   below as **Pending**, with a unique **ID**, the **client**, the **target SOP**, the
   **proposed change**, and its **source**. Before adding, check this file and do **not**
   re-add a candidate already listed in any status — so nothing is proposed twice. Only
   **Operating-zone** facts (§1–§5, §7) are eligible; CI-only §6 content (outstanding
   tasks, meeting follow-ups) is **never** a proposal.
2. **Notify (the email).** The weekend report lists the **Pending** items with their IDs.
3. **Decide (Lilian).** Tell Claude in any session, by ID — e.g.
   *"approve SOP-2026-07-25-01 and -02, reject -03 (already covered)."* You can also say
   *"approve all the Ecoorganic ones."* You never edit a file yourself.
4. **Apply (Claude).** For each **Approved** item, Claude edits the target SOP through the
   [`sop-authoring`](../../.claude/skills/sop-authoring/) skill (PR → independent review →
   merge), then sets the row to **Applied** with the PR link. **Rejected** rows stay
   recorded (with the reason) so the sweep never re-proposes them.

**ID format:** `SOP-YYYY-MM-DD-NN` — the run date plus a sequence number.
**Status flow:** `Pending` → `Approved` → `Applied`, or `Pending` → `Rejected`.

> A proposal only applies to a client that **has** an SOP. If a client has no SOP yet,
> the fact simply lives in the CI file until we write that SOP — it is not queued here.

## Queue

| ID | Client | Target SOP | Proposed change | Source | Status | Resolved (date · note / PR) |
|---|---|---|---|---|---|---|
| SOP-2026-07-23-01 | Best Broker Realty | `hollywood-broward-business-tax-receipt.md` | How a **category-change pay-the-difference** actually completes: pay the balance through the City's online payment center (a "City of Hollywood Treasury Department" reference-number confirmation — a different channel from the PayPal submission fee), then **reply to the reviewer to confirm** so they email the receipt. Added to §7 + a §5 pitfall. | Best Broker Realty City of Hollywood BTR thread (Jul 2026); Lilian's session | Applied | 2026-07-23 · Lilian approved in-session · PR #98 |
| SOP-2026-08-01-01 | Sunoma Inc | `sunoma-bookkeeping-review.md` | Add a monthly close step: **reconcile intercompany loans between Sunoma and Magnum 152** — a standing recurring Double closing task (due ~10th of the following month, assigned to Maria) that the SOP's close-process and categorization-rules sections don't currently mention. | Double tasks/activity log (task IDs 67909399 done Jul 27 2026 / 68593999 due Aug 10 2026) | Pending | |
| SOP-2026-08-01-02 | Mobilesource Corp | `mobilesource-bookkeeping-review.md` | Add a categorization rule: incoming **USDT/crypto (ACH-labeled) deposits** must be verified with the owner before booking, since the owner sometimes doesn't recognize the counterparty and the deposit must be traced/held rather than booked on receipt. | Gmail "USDT - DEPOSIT" / "PENDING TO CLEAR FROM USDT" threads, 2026-07-23 and 2026-07-29 | Pending | |
| SOP-2026-08-01-03 | Mobilesource Corp | `mobilesource-bookkeeping-review.md` | Note that occasional **off-cycle/bonus Gusto payroll runs** occur outside the standard biweekly Tuesday cycle and should follow the same GM-notification / CC-Julia pattern as the regular run. | Gmail, Gusto off-cycle bonus payroll confirmation, 2026-07-23 | Pending | |
| SOP-2026-08-01-04 | Margate Plumbing Inc | `margate-plumbing-bookkeeping-review.md` | Update the Client-snapshot bank list and the Open-items log (WF 8477 row): **WF 8477 was closed** in Jul 2026 and **replaced with a new Wells Fargo account** — the existing "WF 8477 reconciliation stuck since a prior period" open item is superseded by this account change, not merely resolved. | Gmail, 2026-07-28 | Pending | |
| SOP-2026-08-01-05 | Margate Plumbing Inc | `margate-plumbing-bookkeeping-review.md` | Add a categorization-rule note: customer payments run through **QuickBooks Payments**, and chargebacks/disputes (one reached Intuit's formal Pre-Arbitration process in Jul 2026) are a recurring reconciliation complication alongside the existing owner-managed-AR issue. | Gmail, 2026-07-21 to 2026-07-30 | Pending | |
| SOP-2026-08-01-06 | MAGNUM 152, INC | `magnum-152-bookkeeping-review.md` | Add to the ADP reconciliation step that **payroll runs on a weekly cycle** (not just "monthly reconciliation" of an unspecified pay frequency), so the reviewer knows how many ADP runs to expect per month. | Gmail, 2026-07-25 | Pending | |
| SOP-2026-08-01-07 | ECOORGANIC USA LLC | `ecoorganic-bookkeeping-review.md` | Add an open-decision item: a **"Vehicle repairs & supplies" expense category (FY2025)** may include the owner's personal Turo/car-rental activity (e.g. a personal vehicle) that doesn't belong on the company's books — pending Turo earnings/1099 access before reclassifying (likely to distributions). | Ping meeting "Ecoorganic tax prep," 2026-07-23 | Pending | |
| SOP-2026-08-01-08 | ECOORGANIC USA LLC | `ecoorganic-bookkeeping-review.md` | Add a pitfall/decision item: a **bank account appeared connected in QBO that the review team didn't recognize** (possibly the owner's personal account) — needs identification before any transactions from it are categorized. | Ping meeting "Ecoorganic review," 2026-07-22 (low-confidence transcript) | Pending | |
| SOP-2026-08-01-09 | ECOORGANIC USA LLC | `ecoorganic-bookkeeping-review.md` | The SOP's categorization rules only address 1099 subcontractor labor — add a rule for how **Gusto W-2 payroll** (wages, employer payroll taxes, Gusto sync entries) should be categorized/reviewed, now that the client runs W-2 payroll via Gusto. | Gmail (Gusto onboarding, Sept 2025) + Double client properties | Pending | |
