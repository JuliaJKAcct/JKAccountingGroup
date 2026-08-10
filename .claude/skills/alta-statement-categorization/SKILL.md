---
name: alta-statement-categorization
description: Turn ALTA settlement statements into a categorized, reconciled Excel workbook for a real estate purchase and/or sale — every closing line sorted into the right bucket (facilitative cost capitalized to basis, loan cost amortized, operating cost expensed, escrow deposit, selling cost reducing the amount realized) and a filing-ready gain/loss. Use when someone hands over a purchase and/or sale ALTA (or HUD-1 / Closing Disclosure) for a property and wants it prefilled into the HUD tool, categorized, tied out, or turned into a Schedule D / Form 4797 number or a journal entry. Also use to fold post-closing carrying costs from a bank ledger into basis for a property that never went into service (a flip), and to read a scanned ALTA. Client figures are delivered to the user, never committed.
---

# ALTA settlement statements — categorize, prefill, tie out

An ALTA settlement statement is a two-column document: the buyer's charges and
the seller's charges, printed side by side on the same rows. The whole job is
deciding, line by line, **which column is our client's** and **which bucket each
line belongs in** — because that decision is what separates basis from a
deduction, and a deduction from a balance-sheet item.

The engine builds up to six sheets: the blank master template, a prefilled
Purchase tab, a Sale/disposition tab, a tiered Carrying Costs schedule, a
Schedule D summary with a cash tie-out, and a mapping chart showing where every
line went.

## Guardrails (do not skip)

- **The statement is the source of truth, and it must tie to the penny.** Every
  "Reconciliation (should be $0)" cell has to be $0.00 and the journal entry has
  to balance. `verify_alta_workbook.py` enforces this and exits non-zero. **If it
  fails, do not deliver.**
- **Only our client's column enters our client's numbers.** Seller-paid items are
  never in a buyer's basis, and vice versa. Put the other side's lines on the
  mapping chart marked *exclude* — visible, not silently dropped.
- **Client figures stay out of the repo.** The deal spec and the finished `.xlsx`
  both carry the client's numbers. Write them to the scratchpad and deliver the
  workbook to the user. Only the method, the blank template and the example spec
  are committed.
- **Never write amounts by row number.** The spec addresses template rows by
  their printed label; an unknown label is a hard error listing the valid ones.
- **Read `references/mapping-chart.md` before categorizing.** It holds the four
  buyer buckets, the three seller buckets, the Florida specifics, and where the
  odd lines go.

## Step 1 — Read the statements

```bash
python .claude/skills/alta-statement-categorization/scripts/read_alta.py \
  --file purchase.pdf --render pages/
```

A scanned ALTA has no text layer. **Do not OCR it** — render the pages and read
them with vision, which handles the column layout far better.

**Column position carries the meaning, and text extraction flattens it.** Never
infer a side from the order the numbers came out. Reconstruct it from the
arithmetic and check against the printed Subtotals/Totals:

```
seller debits + due to seller  = seller credits
buyer credits + due from buyer = buyer debits
```

If those don't hold to the penny, the reading is wrong. Fix it before going on.

## Step 2 — Establish who our client is, on each statement

Ask this explicitly, because it flips for the same property. On a flip the same
entity is the **buyer** on the first statement and the **seller** on the second.
The property address being identical is the tell that the two statements are one
round trip, and the sale tab should then link its basis to the purchase tab
rather than restating it.

## Step 3 — Categorize

Work through `references/mapping-chart.md`. The judgment calls that actually
recur:

- **Placed in service.** If the property never became operational, leave
  `placed_in_service` null. The template keys off it: a blank or mismatched year
  capitalizes the operating costs into basis instead of expensing them — correct
  for a property held for resale. Say in the notes that the blank is deliberate.
- **Escrow holdbacks** (a utility-bill escrow, a repair holdback) are a
  **receivable**, not an expense. They clear when refunded or applied.
- **Prorated taxes** go on whichever side reimburses. The direction matters more
  than the amount: a buyer debit is the buyer's own tax cost; a seller credit is
  the buyer reimbursing the seller for a prepaid period.

## Step 4 — Go past the ALTA

**The statements are never the whole basis.** Rehab, improvements and carrying
costs paid outside closing never appear on them, so a workbook built only from
the two ALTAs understates basis and overstates the gain. Ask for the bank ledger.

When the property never went into service, there are no operating expenses — every
cost from acquisition to disposition is a cost of the property. Feed those into
`carrying_costs`, graded into tiers, because this is the part with the weakest
documentation:

| Tier | Meaning |
|---|---|
| **A** | Directly the property — utilities, insurance, pest control, survey, appraisal |
| **B** | Entity overhead — accounting, bank fees, software, phone. A judgment call |
| **C** | Needs support — out-of-area travel, transfers with no payee |
| **D** | Dated **after the sale** — cannot be a cost of this property |

`include` picks which tiers land in basis. Grading them makes the choice visible
on the record instead of buried in a total. Two checks worth running every time:
**filter the ledger to the right entity** (a group export often carries several),
and **anything dated after the closing is Tier D**.

## Step 5 — Build, then verify

```bash
python .claude/skills/alta-statement-categorization/scripts/build_alta_workbook.py \
  --spec /path/to/scratchpad/deal.json --out "Client - ALTA.xlsx"

python .claude/skills/alta-statement-categorization/scripts/verify_alta_workbook.py \
  --file "Client - ALTA.xlsx"
```

`references/example-deal.json` is a runnable spec with invented figures — copy it
to the scratchpad and edit. Every spec key is documented there by example.

**Verification is not optional.** openpyxl writes formulas but never evaluates
them, so a workbook can look perfect and be arithmetically broken — a mistyped
cross-reference, a total that misses a row. The verifier recalculates with a real
engine (`pip install formulas`) and fails on anything that isn't zero. It has
already caught a live bug: a cross-sheet reference stored as text, which silently
dropped $24,074.88 of basis while every cell still *looked* right.

> LibreOffice headless is not reliable in this container — it fails to load even
> valid workbooks. Use the `formulas` engine, not `soffice --convert-to`.

### The cash tie-out
The Schedule D sheet proves the answer against cash the workbook never used:

```
proceeds received − paid at purchase − carrying costs = net cash out of the deal
net cash out − Schedule D gain/(loss) = escrow holdback + any unexplained shortfall
```

The residual must be $0.00. This is the strongest check available, because it
catches a cost that was counted twice or missed entirely — neither of which the
per-sheet reconciliations can see.

## Step 6 — Deliver

Send the `.xlsx` to the user. **Do not commit it or the spec.** State the
open items plainly — unexplained proceeds shortfalls, unidentified transfers, a
missing land/building split, whether rehab exists — rather than burying them.

## Two things to raise, never to decide alone

- **Dealer or investor?** Same numbers, very different outcome. Inventory gives an
  **ordinary** loss, fully deductible. A capital asset goes to **Schedule D**, and
  an individual's net capital loss is capped at **$3,000 a year** against ordinary
  income with the rest carried forward. Surface it; the preparer decides.
- **Holding period.** Count the days. A flip that ran 358 days is short-term by a
  week, and nobody notices without the count in front of them.

## Notes & limits

- Built for the **ALTA Settlement Statement** (2015). A HUD-1 or a Closing
  Disclosure carries the same information under different line numbers — the
  buckets are unchanged; the labels are not.
- The template's own acquisition journal entry cannot balance until the
  land/building split (`C11`/`C12`) is entered, because its Building and Land
  lines return text while the split is blank. With no depreciation the split
  changes no tax number — for a property held for resale, post the whole basis to
  one "Real Estate Held for Resale" account instead.
- One purchase and one sale per workbook. A property sold in pieces needs a
  separate pass per disposition.

---

**Update this skill when** a new ALTA line has no obvious bucket (add it to
`references/mapping-chart.md`), when a state's customs differ from the Florida
notes, when the blank template in `assets/` is revised, or when a deal shape
appears that the spec can't express — an installment sale, a 1031 exchange, a
seller-financed note, or a partial disposition.
