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
| SOP-2026-08-08-01 | Ecoorganic USA | `ecoorganic-bookkeeping-review.md` | The SOP's "Client snapshot" names only one owner; Client Intelligence and Double confirm **two** owner-shareholders, each drawing a K-1 — the snapshot should say so. | Client Intelligence file §2 (2026-07-30); Double contacts (2026-08-08) | Pending | |
| SOP-2026-08-08-02 | Ecoorganic USA | `ecoorganic-bookkeeping-review.md` | Payroll runs through **Gusto** — currently outside the SOP's scope (categorization only). Flagging for Julia to decide whether payroll belongs in the runbook. | Gmail, 2026-07-15 | Pending | |
| SOP-2026-08-08-03 | Sunoma Inc | `sunoma-bookkeeping-review.md` | Add the standing **monthly "Reconcile Sunoma/Magnum loans"** intercompany reconciliation to the close checklist — it's on the Double task list but not yet in the SOP. | Double activity log, 2026-07-27 / renamed 2026-08-03 | Pending | |
| SOP-2026-08-08-04 | SENSUSTECH LLC | `sensustech-bookkeeping-review.md` | Add the standing **monthly "Loan from Lumetro"** intercompany reconciliation to the close checklist, alongside the existing Brokerage JE. | Double activity log, 2026-08-07 | Pending | |
| SOP-2026-08-08-05 | Margate Plumbing | `margate-plumbing-bookkeeping-review.md` | Update the "Open decisions" row *"WF 8477 reconciliation stuck since a prior period"* — that bank account was **closed 2026-07-28** and a replacement account connected; update the reconciliation feed list / open-items table once confirmed with Maria. | Gmail, 2026-07-28 | Pending | |
| SOP-2026-08-08-06 | Magnum 152 | `magnum-152-bookkeeping-review.md` | Add **Davidson's Inc** and **Lipsey's** (both firearms wholesale distributors) as recognized firearms-inventory vendors in the reclass/vendor-reconciliation guidance, now that the firearms-retail component is better confirmed. | Gmail, 2026-08-03 | Pending | |
