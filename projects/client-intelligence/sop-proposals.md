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
| SOP-2026-07-25-01 | Best Broker Realty / Pro Title Agency | `hollywood-broward-business-tax-receipt.md` | Add to the §7 email map (City section): once the LBTR issues, expect an additional **automated** email — *"Print Your Local Business Tax Receipt #&lt;ID&gt;"* from `paybusinesstaxreceipt@hollywoodfl.org`, distinct from the personal "BUSINESS TAX APPLICATION #&lt;ID&gt;..." thread with the reviewer; separately, the reviewer may also send a personal follow-up email with the license/receipt PDF directly attached (subject pattern "License: &lt;BTR#&gt; for &lt;BUSINESS&gt; Document"). Not currently covered in the SOP. | Best Broker Realty Gmail, 2026-07-23 (two separate emails observed on the completed filing) | Pending | |
| SOP-2026-07-25-02 | Ecoorganic USA | `ecoorganic-bookkeeping-review.md` | New categorization rule: truck/vehicle-rental charges (e.g. U-Haul) for moving tools/materials to a job site → **"Shipping and deliveries"**, not COGS materials/Supplies. Not present in the SOP's current rules 1–11. | Ecoorganic USA Ping meeting "Ecoorganic review," 2026-07-22 | Pending | |
| SOP-2026-07-25-03 | Mobilesource Corp | `mobilesource-bookkeeping-review.md` | Buyback root-cause addendum (Categorization rules #2 / Monthly close step 4): QuickBooks duplicates the payment entry when a buyback deposit payout is made to a customer — the duplicate is what lands in Uncategorized expenses. | Mobilesource Corp Gmail "BuyBack 2026" thread, 2026-07-20→22 | Pending | |
| SOP-2026-07-25-04 | Mobilesource Corp | `mobilesource-bookkeeping-review.md` | Off-cycle payroll addendum (Payroll / Monthly close step 3): a shift reported after the regular biweekly Gusto run has already processed is corrected via a separate off-cycle "Bonus" payroll run rather than held for the next cycle. | Mobilesource Corp Gmail, 2026-07-17→24 | Pending | |
| SOP-2026-07-25-05 | Sunoma Inc | `sunoma-bookkeeping-review.md` | New categorization rule for donated store inventory: when store inventory is donated to charity, book the charitable contribution at **fair market value** (not original cost), and hold the entry until the charity's written donation receipt is on file — tie to the existing Inventory-adjustment JE step. SOP checked — no existing donation/charity guidance. | Sunoma Inc Gmail "Donated items" thread, 2026-07-20→23 | Pending | |
| SOP-2026-07-25-06 | Margate Plumbing | `margate-plumbing-bookkeeping-review.md` | Add to the AR-corrections guidance: the client accepts QuickBooks Payments (Intuit merchant services) on invoices, and customer payment disputes/chargebacks on that channel are a recurring AR-matching complication; mitigation is to uncheck the invoice payment-options toggle when merchant processing isn't wanted. Borderline — more a collections/support process than a close step — flagged for Lilian's judgment. | Margate Plumbing Gmail "Re: Your Business Owes a Balance on its Intuit Quickbooks Payments Account," 2026-07-21 | Pending | |
| SOP-2026-07-25-07 | Magnum 152 | `magnum-152-bookkeeping-review.md` | The SOP's bank-feed list and monthly-review checklist show a single "Amex CC," but Double's close-checklist tasks for the 2026-07 cycle show **four** distinct Amex-related reconciliation tasks (two "Amex Checking," one "Amex Credit Card," one "American Express Credit Card"). Proposed: expand the Amex line to match the detail already given for TD Bank (×5) and Chase (×2). | Magnum 152 Double activity log, 2026-07-22→23 | Pending | |
