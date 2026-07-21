# Ecoorganic — Monthly Bookkeeping & Review Runbook

> **Status:** Active · **Client:** ECOORGANIC USA LLC (QBO) · **Owner of SOP:** Lilian · **Started:** Jul 2026 · **Last revised:** 2026-07-21
>
> Born from the July 2026 cleanup of the client's books. A staff bookkeeper does
> the monthly work; Claude acts as the **independent reviewer** using the rules
> below. This file holds the *procedure and rules only* — working papers with
> client figures (audit workbooks, categorization sheets, reconciliations) live
> in the firm's client systems (Drive / Double / QuickBooks), never in this repo.
>
> **Cleanup in progress — rules are being validated, not assumed (Jul 2026).**
> The firm recently took this client over, so we are still learning how the
> business actually runs and how the books were kept before us. The rules below
> are being **checked against the client's own history as the cleanup proceeds**;
> treat anything tagged _(to verify)_ as provisional until confirmed, and expect
> thresholds and categories to change as we learn. Nothing here assumes the prior
> bookkeeping was correct — the goal is to make it correct, not to preserve what
> was done. When a rule changes, the reviewer updates it here, dates it, and
> reclassifies the affected transactions in one batch.

## Client snapshot (operational, non-financial)

- Spray-foam insulation contractor, Connecticut. Owner: Artem Markarian.
- Books in QuickBooks Online, managed through Double.
- **Only one live bank feed: Chase checking (…8310).** All other bank and card
  accounts are disconnected; which of them are actually closed is **pending
  client confirmation** — until then they are frozen (rename-only, no new
  postings, no cleanup).
- Check- and cash-heavy business; many Zelle payments to subcontractors.
- Owner's personal Chase checking is **…2935** — transfers with it are equity
  moves, never income or cost (rule 6).

## Categorization rules

These override any QuickBooks auto-suggestion. During the cleanup we verified
QBO's suggestions are frequently wrong for this client — never accept them
blindly.

1. **Checks and deposits are never assumed.** Download the check/deposit image
   from the bank; the payee and memo decide the category. Every deposit must
   carry a customer (or the owner, for contributions) — **no nameless postings
   to Sales**.
2. **Gas-station threshold — $25 (updated 2026-07-21).** At a gas station /
   convenience store (Sunoco, Shell, Gulf, Citgo, Exxon, Pilot, Cumberland
   Farms, 7-Eleven, …):
   - **≥ $25** → fuel → *Auto Expenses: Vehicle gas and fuel* (a real business
     fill-up).
   - **< $25** → **Owner's distribution** — *not* a business expense. **Why:** a
     small charge at a gas station is almost always a snack, drink, or quick food
     run — not a tank of fuel — so it doesn't qualify as a business gas expense;
     it's personal and belongs in owner distributions. A QBO bank rule is already
     set up to route these automatically. *(This replaces the earlier $30 line
     and the old "small gas → meals holding" handling.)*
   - *Reviewer watch:* historically these small charges were scattered — many
     convenience charges (7-Eleven, Cumberland Farms) were coded to **Meals**,
     some sub-$25 fuel to **Gas & Fuel**, and a few to the **Auto Expenses
     parent**. Applying this rule means reclassifying those to distributions, so
     check Meals and the Auto Expenses parent — not just Gas & Fuel.
3. **Meals policy: PENDING (Julia + Lilian)** — this covers **genuine restaurant
   / meal charges**, not the small gas-station charges, which rule 2 now sends
   straight to distributions. Until the policy is defined, post restaurant / meal
   charges to the **Meals** account — which today doubles as the holding bucket
   (there is no separate holding account) — and redistribute in one batch once
   the policy lands. Never leave them in the holding/uncategorized accounts —
   those must still be $0 at close (rule 11). Expected split: client meals (50%
   deductible) / crew–jobsite meals / owner personal → distributions.
4. **Every transaction gets a vendor/payee**, except owner draws, owner
   contributions, and transfers. Unknown bank descriptors: identify the business
   online first (this works — e.g. CWPM LLC resolved to a CT waste hauler);
   check the QBO vendor list; propose creating the vendor if missing. Never
   guess — an unidentifiable descriptor goes to *Ask My Accountant* (triage).
5. **Cash out / withdrawals — investigate, never assume (updated 2026-07-21).**
   Do **not** blanket these to owner draws (the old "cash always = draws" default
   is retired). Cash here can pay subcontractors, which carries 1099 exposure we
   must not miss. First tell the two cases apart:
   - **ATM / over-the-counter cash withdrawal:** ask the owner what the cash was
     used for. It may be personal (→ distributions) *or* cash paid to a worker
     (→ Subcontractor Labor — see rule 9 — with 1099 exposure, get a W-9). Don't
     guess.
   - **Transfer to another bank account:** check whether we recognize the
     destination account — pull how prior transfers to that *same* account were
     categorized (Double history / `get_similar_transactions`). A known
     **contractor's** account → subcontractor labor (1099); the owner's
     **personal** account (…2935) → distributions (rule 6). If the account is
     unknown, ask the client before posting.
6. **Transfers with the owner's personal account (…2935):** money **in** →
   **Owner's contribution**; money **out** → **Owner's distribution**. Post to
   those two specific equity accounts — **not** the *Owner's Equity* parent
   (where these are currently being lumped, which loses the contribution-vs-draw
   split) — and **never** to Sales or **Cost of Goods Sold** (a recurring 2026
   error: some …2935 transfers are still landing in COGS; this rule exists to
   catch them).
7. **Personal ACH pulls named to the owner** (e.g. his personal Capital One
   card autopay) → Owner's distribution.
8. **IRS `USATAXPYMT` pulls under the owner's name** are his personal federal
   tax → Owner's distribution, never a business tax expense.
9. **Job costs to COGS, not opex — _(to verify: provenance unconfirmed)_.**
   This rule carried over from the prior cleanup notes and has **not yet been
   re-checked** against how this client's own books have historically treated
   job costs. Before relying on it, confirm against the client's history (past
   categorizations) and how the return is filed. As drafted: foam/spray
   materials (Foam Pro, Spray Alliance, Everchem, IDI, The Spray Market) → COGS
   Materials; installation subcontractors (paid by Zelle/check/wire) → COGS
   Subcontractor Labor — collect a W-9 from every new one and keep the 1099 list
   current; job-site disposal (CWPM, BPM Recycling) → COGS Job Disposal.
   **COA reality check:** this client's chart currently has a **single *Cost of
   Goods Sold* account** (plus *Shipping*) — the Materials / Subcontractor Labor
   / Job Disposal sub-accounts named above **do not exist yet**. In practice,
   materials are split today between COGS (specialist foam/insulation
   distributors, e.g. IDI, Spray Alliance) and *Supplies & Materials* (opex,
   e.g. Home Depot and other hardware/big-box). Confirm whether that
   COGS-vs-opex split is intentional before building sub-accounts or
   reclassifying.
10. **Vehicle financing (Hyundai Motor Finance, Ally): PENDING** the client's
    lease-vs-loan answer (the HMF account is under the owner's personal name —
    it may not be a business vehicle at all). Do not expense installments
    blindly; park in triage until resolved.
11. **Parent accounts never receive postings.** And the **holding /
    "uncategorized" accounts** — today that's *Ask My Accountant*, *Uncategorized
    Income*, *Uncategorized Expense* (and, once we renumber the chart, the
    997/998/999 family) — must read **$0 before we call a month closed**. These
    accounts are only temporary parking spots for "not sorted yet"; a balance
    still sitting in them means transactions are still un-categorized, so the
    month isn't actually done. This zero-balance check is the **close gate** (see
    the review checklist). **Necessary but not sufficient:** a $0 triage balance
    only means nothing is *un*-categorized — it does **not** mean the categories
    are *right*. Wrong-but-confident coding (gas booked to Meals, owner transfers
    to COGS) leaves triage at $0 while the books are still wrong, so the close
    gate is a floor, not the whole review.

## Vendor & 1099 tracking — use Double

Double is the working tool for the vendor side of these rules — lean on it:

- **Every payment shows its payee.** Double surfaces transactions that are
  missing a vendor at a glance, so it's how we enforce "every transaction gets a
  vendor" (rule 4). Reviewer: scan Double for blank-payee transactions.
- **1099 readiness.** Double flags each payee who has crossed the **$2,000**
  threshold that triggers a 1099 (current threshold for 2026 payments), and lets
  us mark whether the **W-9 is on file** and the payee's info is complete. Keep
  these current as new subcontractors are paid (rules 5, 9), so 1099 season is
  clean.
- **Reviewer 1099 sweep — don't let subs hide.** Subcontractor labor is
  currently scattered across *Outside services*, *Contract labor*, and even
  *Auto Expenses: Vehicles repair* rather than one labor account. Each close,
  list **every individual or LLC paid ≥ $2,000** across all of those accounts
  (Zelle payments especially) and confirm a W-9 is on file — a payee parked in
  "Outside services" is the easiest 1099 to miss.

## Chart of accounts conventions

- **The number-prefix chart of accounts is the target, not the first step.**
  This client is **not renumbered yet.** We adopt the numbering **gradually** —
  only after we understand the business and have worked down the backlog of
  unclassified transactions. **Classify first, restructure the chart second;**
  don't reorganize the chart ahead of understanding it.
- Masciave/Aura-style grammar (the target): number prefixes in the account
  *name* — 100s assets · 200s liabilities · 300s equity · 400s income · 500s
  COGS · 600s opex · 800s other income · 901 depreciation · 997/998/999 triage.
- Parents are grouping-only; transactions post to sub-accounts.
- **2025 is closed.** Safety rules: renames/renumbers only (retroactive and
  harmless); **never merge** accounts that have 2025 activity (reclassify 2026
  and deactivate instead); **never change the type** of an account with 2025
  activity (create a new account and reclassify 2026 into it).
- People and companies are **vendors, not accounts** — no more person-named
  expense sub-accounts.
- Overdraft/NSF bank fees post to their **own sub-account under Bank Fees**
  (kept separate from ordinary service charges) so the running total is visible
  for the cash-management conversation with the client.

## Monthly review checklist (what the reviewer verifies)

1. Bank feed fully processed; book balance ties to the bank statement.
2. **Close gate:** holding/uncategorized accounts (*Ask My Accountant*,
   *Uncategorized Income/Expense*) at $0 — nothing left un-sorted.
3. No postings to parent accounts.
4. Every transaction has a payee, except draws/contributions/transfers.
5. Checks and deposits carry evidence (image reviewed; customer assigned).
6. Vendor→account consistency: one vendor, one account, unless the split is
   explained (e.g. the gas threshold).
7. Sub-$25 gas-station charges routed to distributions (rule 2); genuine
   restaurant/meal charges handled per the (pending) meals policy.
8. New recurring vendors/subscriptions flagged; **every individual/LLC paid
   ≥ $2,000 (across Outside services, Contract labor, Auto repair, and Zelle) has
   a W-9 on file and is queued for a 1099.**
9. Overdraft/NSF fees tracked in their own sub-account and totalled for the
   client conversation.
10. No new activity in frozen accounts; any exception is escalated.

## Open decisions log

| # | Decision | Owner | Status |
|---|---|---|---|
| 1 | Meals policy for **genuine restaurant/meal** charges (client / crew / personal split) — small gas-station charges already resolved to distributions, rule 2 | Julia + Lilian | Pending |
| 2 | Hyundai Motor Finance & Ally: lease vs loan vs personal | Client | Pending |
| 3 | Which disconnected bank/card accounts are closed | Client | Pending |
| 4 | Identity/role of a recurring individual payee (name on file in the firm's client systems) | Client | Pending |
| 5 | What "Laundry" purchases are (workwear vs personal) | Client | Pending |
| 6 | Blanket rule: obvious personal retail → Owner's distribution | Client | Proposed |
| 7 | **Job costs → COGS vs opex** — verify rule 9 against the client's history and filing before relying on it | Julia | To verify |

When a decision lands, update the rule above, note the date, and reclassify the
parked transactions in one batch.
