# Coastal Ridge Builders LLC — bookkeeper test package

Everything needed to run the practical assessment described in
*Overseas Accountant Practical Interview Test*. The company, the bank, the customers,
the vendors and every figure are fictional. **No client data appears anywhere in this
package.**

---

## What to send the candidate

| Send | File |
|---|---|
| ✅ | `06_Candidate_Brief.html` — the task sheet |
| ✅ | `01_Chart_of_Accounts.csv` |
| ✅ | `02_QuickBooks_Reports_Jun-Aug_2026.xlsx` |
| ✅ | `03_Bank_Feed_Checking_4471_Aug_2026.csv` |
| ✅ | `04_Bank_Feed_Visa_2210_Aug_2026.csv` |
| ✅ | `05_Bank_Statements_Jun-Aug_2026.html` |
| ⛔ | **`ANSWER_KEY_evaluator_only.html` — never** |
| ⛔ | `07_All_Transactions_for_Import.csv`, `08_Opening_Balances_06-01-2026.csv` — build files, not candidate files |

`03b_…Jun-Aug_2026.csv` holds all three months of checking activity; send it only if you
want the candidate to reconcile June and July as well.

---

## How to run it — two routes

### Route A · on the exports (recommended)

Send the six files above. The candidate works in Excel or Google Sheets. Everything the
exercise needs is there: the general ledger, the financial statements, the agings, the
July reconciliation report and the bank statements.

Nothing to set up, works for any candidate anywhere, and the exercise tests the same
skills. **This is how the assessment was designed to run.**

### Route B · rebuilt inside a live QuickBooks Online company

Use this only if you specifically want to watch someone navigate QBO.

There is no such thing as a QuickBooks file you can hand someone. QBO has no company-file
import, a desktop `.QBW` needs their own licence, and Intuit's own sample company
(`qbo.intuit.com/redir/testdrive`) is read-only and resets. So the file has to be
**built** in a QBO account you own, then shared with the candidate as an accountant user.

1. Open a QBO Plus trial. Company name **Coastal Ridge Builders LLC**, industry
   *Construction / General Contractor*, fiscal year January.
2. **Settings → Account and settings → Advanced** — turn on account numbers, and set the
   accounting method to Accrual.
3. Import `01_Chart_of_Accounts.csv` (*Settings → Chart of accounts → Import*). Add one
   account QBO will not let you import: **Customer Deposits**, Other Current Liability —
   the candidate needs somewhere to put finding 2.1. Leave it at zero.
4. Enter the 6/1/2026 opening balances from `08_Opening_Balances_06-01-2026.csv` as a
   single journal entry dated **05/31/2026**.
5. Load the transactions. `07_All_Transactions_for_Import.csv` is a flat debit/credit file
   sized for a bulk importer — **SaasAnt Transactions Online** or **Transaction Pro
   Importer** (roughly $30 for a month, cancel after). QBO's own importer only handles
   customers, vendors, the chart of accounts and invoices, so it cannot do this alone.
   Import in this order so the sub-ledgers land correctly:
   invoices → payments → deposits → bills → bill payments → checks and expenses →
   credit-card charges → journal entries.
6. **Banking → Upload transactions** — load `03_Bank_Feed_Checking_4471_Aug_2026.csv` to
   the checking account and `04_Bank_Feed_Visa_2210_Aug_2026.csv` to the Visa. Leave every
   item **unmatched in the For review tab.** Do not accept them; matching them is the
   candidate's job.
7. Reconcile **July only**, so the file carries a completed July reconciliation. Then edit
   check 2113 down from 8,400.00 to 4,800.00 — this is what creates the beginning-balance
   discrepancy, and it must be done *after* July is reconciled or the seeded issue does
   not exist.
8. Invite the candidate as an **accountant user** for the session, and remove them
   afterwards. Duplicate the company before each new candidate, or restore it, since the
   first candidate's corrections stay in the file.

Budget two to three hours for the first build. Route A takes none.

---

## What is seeded

21 issues: 8 in the bank reconciliation, 13 in the month-end close. Everything visible on
the financial statements is a symptom of one of them — nothing is decorative.

The books tie out exactly. Debits equal credits in every entry, the balance sheet balances
at all three month-ends, the sub-ledgers agree with their control accounts, and the
reconciliation resolves to the cent. **Every discrepancy the candidate finds is deliberate.**

Full detail, with the correct fix and the journal entry for each, is in
`ANSWER_KEY_evaluator_only.html`.

---

## Rebuilding or changing the test

The package is generated, not hand-made — see [`../build/`](../build/). To change a figure,
edit `books.py` and re-run:

```
cd build
python3 engine.py        # posts everything and asserts all 34 design targets
python3 report.py        # workbook + CSVs
python3 statements.py    # bank statements
python3 docs.py          # candidate brief + answer key
```

`engine.py` fails loudly if a change breaks the balance sheet, a sub-ledger, a monthly
gross margin or the reconciliation proof. If it prints `0 failed`, the books are sound.

To seed a **different** set of issues for a second candidate — so the answers cannot be
passed on — change the amounts and dates in `books.py` and re-run. The asserts keep the
books honest while you do it.
