# Chart of Accounts — Firm Standard

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-07

> The firm's **one numbering system** for every client's books. We do **not** force
> a single chart of accounts on everyone — clients are in different niches — but we
> **do** keep the same *skeleton* so any bookkeeper can read any client's books, and
> the tax mapping is consistent. What changes per client is which accounts are
> *active* and the niche-specific sub-accounts you add. The editable master template
> lives at [`assets/S-Corp-COA-master.xlsx`](./assets/S-Corp-COA-master.xlsx).

## The system — number ranges

Each account's **class is its number range**. The range and its meaning never change.

| Range | Class | What it holds |
|---|---|---|
| **100–199** | Assets | Bank, receivables, loans to shareholders, fixed assets, K-1 ownership |
| **200–299** | Liabilities | Payroll liabilities, customer deposits, sales tax payable, loans/LOC |
| **300–399** | Equity | Opening balance, shareholder capital (common stock, APIC, distributions), retained earnings |
| **400–499** | Income | Net sales (by revenue stream), K-1 income |
| **500–599** | Cost of Goods Sold | Direct/job costs of what is sold |
| **600–799** | Operating expenses | Advertising, auto, fees, meals, insurance, office, legal, subcontractors, payroll, rent, software, travel… |
| **800–899** | Other income | Interest, insurance proceeds, card rewards, sale of assets, K-1 separately-stated income |
| **900–989** | Other expense (below the line) | Depreciation, amortization, §179, charitable, nondeductible, K-1 deductions |
| **990–999** | Triage & holding | `998` transactions > $2,500 to review for capitalization · `999` uncategorized |

## The rules (this is what keeps every client organized)

1. **One backbone, many niches.** The ranges above are fixed for every client. Adapt
   *within* them — don't invent a parallel scheme.
2. **Parent categories hold nothing.** An account marked *"parent — use sub-accounts"*
   is grouping-only. Always post to a **sub-account**, never the parent.
3. **Sub-accounts use decimals + `Parent:Child` names** — e.g. `605.2
   Advertising:Website Expense`. Add a new sub-account with the next free decimal.
4. **Leave gaps.** Numbers jump (605, 610, 612 …) on purpose, so you can insert a new
   account without renumbering the whole chart.
5. **Every account keeps its QBO Type + Detail Type** (both are columns in the master
   file). That mapping is what drives the tax return — don't drop it.
6. **Adapt per niche, don't reinvent:**
   - Revenue → sub-accounts under **400 Net Sales**, one per revenue stream.
   - Job/product costs → **500 COGS** (add sub-accounts as needed).
   - Niche operating costs → the closest **600–799** parent. Only add a *new* number
     when nothing existing fits.
7. **People & companies are vendors, not accounts.** No person-named expense accounts.
8. **Triage discipline.** `998` and `999` must be cleared to **$0 at every close**.
9. **Closed years are frozen.** For a client whose prior year is closed: renames /
   renumbers only; never merge or change the type of an account with prior-year
   activity (create a new one and reclassify the current year into it).

## Adapting for a specific client (the short version)

1. Import [`assets/S-Corp-COA-master.xlsx`](./assets/S-Corp-COA-master.xlsx) into the
   client's QuickBooks (or start from an existing client on the same system).
2. **Activate** the accounts the client actually uses; **deactivate** the rest (don't
   delete — keeps the numbering stable).
3. **Rename** the flagged accounts (e.g. `190.1 …(RENAME)`) to the client's reality.
4. **Add niche sub-accounts** under the right parent, following rules 3–6.
5. Record any client-specific quirks in that client's bookkeeping SOP — not here.

> **Entity note:** the master is built for an **S-corp** (officer compensation, K-1
> ownership, distributions). For an LLC/Schedule-C or a partnership, the same ranges
> apply — swap the 300 Equity and officer-payroll accounts for the entity's
> equivalents. A per-entity variant of the master can be added under `assets/` later.

## Where this lives

- **Readable standard + rules:** this file.
- **Editable master template:** [`assets/S-Corp-COA-master.xlsx`](./assets/S-Corp-COA-master.xlsx) (125 accounts).
- **Designed, browsable view:** the **Knowledge Hub** renders the full account list
  by class (expandable), generated from the master — open the "Chart of Accounts —
  Firm Standard" card in the Hub's Bookkeeping section.

## Working on this / notes for AI

- The master `.xlsx` is the **source of truth** for the account list. The Hub's
  `coa-standard.json` is generated from it (re-derive when the master changes).
- Keep this standard **client-agnostic** — no client names, figures, or niche
  specifics. Those belong in each client's bookkeeping SOP.
- This standard feeds the (future) **bookkeeping-SOP skill**: every client
  bookkeeping runbook references these ranges and rules instead of restating them.
