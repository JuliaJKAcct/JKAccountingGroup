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
