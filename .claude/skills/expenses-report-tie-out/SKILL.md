---
name: expenses-report-tie-out
description: Produce a client-ready Expenses report that ties exactly to the Profit & Loss, starting from a QuickBooks "Transaction Detail by Account" export — by removing the account sections that are not expenses. Also use to diagnose why an expenses report does NOT match the P&L (totals differ, an amount is off, payroll/journal-entry lines are missing). Use when a client asks for an "Expenses report" / "expenses by account" that must agree with the P&L, when reconciling a transaction detail to the P&L expense total, or when someone asks why the expense total on one report differs from the P&L. Keeps the client's numbers out of the repo; the output .xlsx is delivered to the user, never committed.
---

# Expenses Report — tie it out to the P&L

Clients often ask for an **Expenses report**, and it has to agree with the number
on the **Profit & Loss**. The clean way to produce one is to start from the
QuickBooks **Transaction Detail by Account** export and **remove the account
sections that are not expenses** — keeping the original QuickBooks look and
landing on a grand total that equals the P&L "Total Expenses" to the penny.

This skill is a reusable bookkeeping engine: it is not tied to one client, and it
runs every quarter / whenever a client requests the report.

## Guardrails (do not skip)
- **The P&L is the source of truth.** The finished report must tie to the P&L
  "Total Expenses" for the same period and basis, **to the penny**. If it does
  not tie, it is wrong — do not send it. The helper script fails loudly when it
  does not tie (`--expect-total`).
- **Only delete, do not re-key.** Preserve QuickBooks' own layout, formatting,
  and figures. Remove whole non-expense account sections; never retype amounts or
  rebuild the sheet. (The one internal change the script makes is invisible —
  see "Why formulas must be frozen.")
- **Client numbers stay out of the repo.** The source export and the finished
  `.xlsx` contain client-specific figures — they live in Drive / QuickBooks and
  are delivered straight to the user. Only this method (no client data) is
  committed here.
- **English artifacts.** This skill and its script are in English; the client
  report keeps whatever QuickBooks produced.

## The one gotcha that causes the mismatch
A **Transaction Detail by Account** export filtered to transaction type
**"Expense" only** will **not** match the P&L, because **payroll is booked as a
Journal Entry** (Gusto posts wages and employer taxes via journal entries, not
bank "Expense" transactions). An Expense-only detail drops **Payroll Wages** and
**Payroll Tax** entirely, and often other Bill/Check/Journal-Entry postings too —
so it lands far below the P&L. **Always export with ALL transaction types.**

When you are handed an expenses report that "doesn't match the P&L," this is the
first thing to check. Diagnose by comparing the two account-by-account: the P&L
accounts that are missing or short in the detail are the ones posted by a
transaction type the detail excluded.

## Step 1 — Export the right report from QuickBooks
Reports → **Transaction Detail by Account** (or Report Center), then set:
- **Dates:** the exact period (e.g. a quarter, Apr 1 – Jun 30).
- **Accounting method:** match the P&L (usually **Accrual**).
- **Transaction type:** **All** — never filter to "Expense" (see the gotcha above).
- **Group by:** Account. No account filter (or filter to the expense accounts).

Export to **Excel (.xlsx)** so the QuickBooks formatting comes with it.

Also have the **P&L** for the same period open, so you know the target
"Total Expenses" figure and each expense account's subtotal.

## Step 2 — Decide what is NOT an expense (what gets removed)
A Transaction Detail lists **every** account, not just expenses. Remove every
section that is not an expense account. By type:

| Account type | Examples seen in these files | Keep? |
|---|---|---|
| Bank | `<Company> (####) - 1` operating account | ❌ remove |
| Accounts Receivable | `Accounts Receivable (A/R)` | ❌ remove |
| Accounts Payable | `Accounts Payable (A/P)` | ❌ remove |
| Credit card | `<Name> (####) - 1` card account | ❌ remove |
| Other current liability | `Used personal card` | ❌ remove |
| Equity / draws | `Distributions`, `Contributions` | ❌ remove |
| Income | `Sales`, other income | ❌ remove |
| **Expense** | Business Development, Legal & Professional Fees, Meals, Phone, Taxis, Travel, Auto (Gas / Other Auto), Office Expenses (Other Office / Software & Subscriptions), Payroll Expenses (Fee / Tax / Wages) | ✅ **keep** |

The sections you **keep** should be exactly the expense accounts listed on the
P&L. Cross-check the two lists — if the P&L shows an expense account you do not
see in the detail, stop and figure out why (usually the transaction-type filter
from Step 1).

> Watch for miscategorizations while you are here. A charge sitting under
> **Distributions** (an equity draw) that looks like a real business expense — or
> a personal charge sitting inside an expense account — is a bookkeeping question
> to raise with the team, separate from producing the report.

## Step 3 — Build the report (run the engine)
Use the helper. It freezes formulas, deletes the sections you name, re-derives the
grand TOTAL from the surviving transactions, preserves the footer, and verifies
the tie-out:

```bash
python .claude/skills/expenses-report-tie-out/scripts/build_expenses_report.py \
  --src  "Transaction Detail by Account.xlsx" \
  --out  "Expenses by Account.xlsx" \
  --remove "Example Co (1234) - 1" "Accounts Receivable (A/R)" \
           "J. Doe (5678) - 1" "Used personal card" \
           "Distributions" "Sales" \
  --expect-total 12345.67
```

- `--remove` — the EXACT column-A text of each non-expense account header.
- `--expect-total` — the P&L "Total Expenses". The script **exits non-zero** if
  the result does not tie, so a missed or wrong section cannot ship silently.

The script prints every surviving section subtotal — eyeball each one against the
P&L, not just the grand total.

### Why formulas must be frozen
The raw export computes every subtotal and the grand total with live formulas
(`=H7+H8+…`, and `TOTAL = H36+H56+…`). Deleting rows in Excel leaves those
formulas pointing at the wrong cells, so totals quietly go wrong. The script first
replaces each formula with its current value, then deletes — so the surviving
subtotals are stable and the grand TOTAL is recomputed from the remaining
transaction rows. Values and formatting look identical to the original; only the
under-the-hood formulas become fixed numbers. Mention this to the user: the
totals are now fixed values, not live formulas.

## Step 4 — Verify before delivering
- Grand TOTAL **equals** the P&L "Total Expenses" to the penny.
- **Every** kept section subtotal matches its P&L counterpart (catches a section
  that was partially removed or a stray non-expense line).
- **No** non-expense account remains (bank, A/R, A/P, cards, liabilities, equity,
  income).
- Formatting intact: column widths, bold "Total for …" rows, currency format,
  footer on its own row.

## Step 5 — Deliver (do not commit)
Send the finished `.xlsx` to the user (it is the client deliverable). **Do not**
commit it or anything with the client's figures. If a nicer client-facing version
is wanted, a branded PDF can be produced separately through the `impeccable` skill
and the brand system — the tie-out numbers stay the same.

## Notes & limits
- Rendering the `.xlsx` to PDF via LibreOffice may not work in every environment;
  verification is done by reading the workbook (values, subtotals, formatting),
  not by a visual render.
- The report header still reads "Transaction Detail by Account" (it *is* that
  report, filtered to expenses). Relabel it only if the user asks.
- If a client wants a summarized **Expenses by Account** (subtotals only, no
  transaction lines), that is the QuickBooks "Profit and Loss Detail" /
  "Account List" summary export — a different report; this skill is for the
  transaction-level detail that ties out.
