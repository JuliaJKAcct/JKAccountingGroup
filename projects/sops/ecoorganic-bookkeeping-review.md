# Ecoorganic — Monthly Bookkeeping & Review Runbook

> **Status:** Active · **Client:** ECOORGANIC USA LLC (QBO) · **Owner of SOP:** Lilian · **Started:** Jul 2026
>
> Born from the July 2026 cleanup of the client's books. A staff bookkeeper does
> the monthly work; Claude acts as the **independent reviewer** using the rules
> below. This file holds the *procedure and rules only* — working papers with
> client figures (audit workbooks, categorization sheets, reconciliations) live
> in the firm's client systems (Drive / Double / QuickBooks), never in this repo.

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
2. **Gas-station threshold:** a charge **≥ $30** at a gas station (Sunoco,
   Shell, Gulf, Citgo, Exxon, Mobil, Wawa, …) is fuel → Auto: Gas & Fuel. Under
   $30 it is most likely food/snacks → falls under the meals policy (rule 3).
3. **Meals policy: PENDING (Julia + Lilian).** Until defined, park food /
   restaurant / grocery charges (or post to the Meals holding account and
   redistribute once the policy lands — Lilian's call, made per batch). Expected
   split: client meals (50%) / crew–jobsite meals / owner personal → equity.
4. **Every transaction gets a vendor/payee**, except owner draws, owner
   contributions, and transfers. Unknown bank descriptors: identify the business
   online first (this works — e.g. CWPM LLC resolved to a CT waste hauler);
   check the QBO vendor list; propose creating the vendor if missing. Never
   guess — an unidentifiable descriptor goes to *Ask My Accountant* (triage).
5. **Cash withdrawals default to owner draws** (consistent 2025 precedent),
   *unless* there is evidence cash paid workers — then stop and ask the client
   (1099 exposure).
6. **Transfers with the owner's personal account (…2935):** money in → Owner's
   Contribution; money out → Owner's Pay & Personal Expenses. Never Sales,
   never COGS (a recurring 2026 error this rule exists to prevent).
7. **Personal ACH pulls named to the owner** (e.g. his personal Capital One
   card autopay) → Owner's Pay & Personal Expenses.
8. **IRS `USATAXPYMT` pulls under the owner's name** are his personal federal
   tax → Owner's Pay & Personal Expenses, never a business tax expense.
9. **Job costs go to COGS, not opex:** foam/spray materials (Foam Pro, Spray
   Alliance, Everchem, IDI, The Spray Market) → COGS Materials; installation
   subcontractors (paid by Zelle/check/wire) → COGS Subcontractor Labor —
   collect a W-9 from every new one and keep the 1099 list current; job-site
   disposal (CWPM, BPM Recycling) → COGS Job Disposal.
10. **Vehicle financing (Hyundai Motor Finance, Ally): PENDING** the client's
    lease-vs-loan answer (the HMF account is under the owner's personal name —
    it may not be a business vehicle at all). Do not expense installments
    blindly; park in triage until resolved.
11. **Parent accounts never receive postings**, and the triage/uncategorized
    accounts (997 / 998 / 999 family) must be **$0 at every month-end close**.

## Chart of accounts conventions

- Masciave/Aura-style grammar: number prefixes in the account *name* — 100s
  assets · 200s liabilities · 300s equity · 400s income · 500s COGS · 600s
  opex · 800s other income · 901 depreciation · 997/998/999 triage.
- Parents are grouping-only; transactions post to sub-accounts.
- **2025 is closed.** Safety rules: renames/renumbers only (retroactive and
  harmless); **never merge** accounts that have 2025 activity (reclassify 2026
  and deactivate instead); **never change the type** of an account with 2025
  activity (create a new account and reclassify 2026 into it).
- People and companies are **vendors, not accounts** — no more person-named
  expense sub-accounts.

## Monthly review checklist (what the reviewer verifies)

1. Bank feed fully processed; book balance ties to the bank statement.
2. Triage accounts (997/998/999 family) at $0.
3. No postings to parent accounts.
4. Every transaction has a payee, except draws/contributions/transfers.
5. Checks and deposits carry evidence (image reviewed; customer assigned).
6. Vendor→account consistency: one vendor, one account, unless the split is
   explained (e.g. the gas threshold).
7. Meals and sub-$30 gas-station charges handled per the (pending) policy.
8. New recurring vendors/subscriptions flagged; new payees have W-9s if they
   are subcontractors.
9. Overdraft/NSF fees tracked in their own sub-account and totalled for the
   client conversation.
10. No new activity in frozen accounts; any exception is escalated.

## Open decisions log

| # | Decision | Owner | Status |
|---|---|---|---|
| 1 | Meals policy (client / crew / personal split) | Julia + Lilian | Pending |
| 2 | Hyundai Motor Finance & Ally: lease vs loan vs personal | Client | Pending |
| 3 | Which disconnected bank/card accounts are closed | Client | Pending |
| 4 | Identity/role of recurring payee "Maria Eugenia Jara" | Client | Pending |
| 5 | What "Laundry" purchases are (workwear vs personal) | Client | Pending |
| 6 | Blanket rule: obvious personal retail → Owner's Pay & Personal | Client | Proposed |

When a decision lands, update the rule above, note the date, and reclassify the
parked transactions in one batch.
