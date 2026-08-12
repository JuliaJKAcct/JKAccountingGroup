---
name: alta-statement-categorization
description: Turn ALTA settlement statements into a categorized, reconciled Excel workbook for a real estate purchase and/or sale — every closing line sorted into the right bucket (facilitative cost capitalized to basis, loan cost amortized, operating cost expensed, escrow deposit, selling cost reducing the amount realized) and a filing-ready gain/loss. Use when someone hands over a purchase and/or sale ALTA (or HUD-1 / Closing Disclosure) for a property and wants it prefilled into the HUD tool, categorized, tied out, or turned into a Schedule D / Form 4797 number or a journal entry. Also use to fold post-closing carrying costs from a bank ledger into basis for a property that never went into service (a flip, or a rental venture that never launched), and to read a scanned ALTA. Client figures are delivered to the user, never committed.
---

# ALTA settlement statements — categorize, prefill, tie out

An ALTA settlement statement is a two-column document: the buyer's charges and
the seller's charges, printed side by side on the same rows. The whole job is
deciding, line by line, **which column is our client's** and **which bucket each
line belongs in** — because that decision is what separates basis from a
deduction, and a deduction from a balance-sheet item.

The engine builds the sheets a given deal needs: the blank master template, a
prefilled Purchase tab, and then either **the in-service path** (a Depreciation
tab — land split off the appraisal, MACRS from the placed-in-service date) or
**the disposition path** (a Sale tab, a tiered Carrying Costs schedule, and a
Form 8949 / Schedule D summary with a cash tie-out) — plus a mapping chart
showing where every line went. A rental that is later sold uses both.

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
- **Establish whether the property went into service, and when.** It decides
  whether costs are expensed or capitalized, and whether anything depreciates.
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
  for a property not yet in service. Say in the notes that the blank is deliberate.
  Then ask **why** it never went into service (see below) — a flip and an aborted
  rental venture are both "never placed in service" and are taxed differently.
- **Escrow holdbacks** (a utility-bill escrow, a repair holdback) are a
  **receivable**, not an expense. They clear when refunded or applied.
- **Prorated taxes** go on whichever side reimburses. The direction matters more
  than the amount: a buyer debit is the buyer's own tax cost; a seller credit is
  the buyer reimbursing the seller for a prepaid period.

## Step 3b — In service? Then depreciation, not capitalization

A property that **went into service** is the mirror image of one that didn't, and
this is the fork that changes the most numbers:

|  | Never in service | In service |
|---|---|---|
| Operating costs | Capitalized into basis | **Expensed** from the in-service date |
| Carrying costs | All capitalized | Capitalized only **up to** that date |
| Land/building split | Cosmetic | **Drives the deduction every year** |
| Depreciation | None | MACRS from the in-service month |

Add a `depreciation` block (see `references/example-deal-inservice.json`) and the
engine builds the schedule. Three things to get right:

- **The appraisal gives you a RATIO, not dollars.** County assessed values are
  usually well below what was paid. Take only the land-to-building *proportion*
  and apply it to the actual cost basis, so the two parts always add back to what
  was really paid. The sheet carries a `should be $0` check that proves they do.
- **27.5 or 39 years?** Do not infer it from the word "rental," and do not infer
  it from the billing cycle — a weekly *rate* is not a weekly *stay*. The class
  turns on whether units are used on a **transient** basis, which practice keys to
  a **30-day average occupancy**; the separate **7-day** figure is the §469 test
  for whether it is a rental activity at all. Co-living billed weekly with
  months-long stays is 27.5-year residential. Getting it wrong costs a third of
  the deduction every year — see `references/mapping-chart.md`.
- **Mid-month convention.** Real property is treated as placed in service in the
  middle of its month whatever the actual day, so October gives 2.5 months in year
  one. The engine computes `(12 − month + 0.5) / 12 ÷ life` rather than pasting the
  IRS table, and prints the year-1 rate so it can be tied to **Table A-6** (27.5)
  or **A-7a** (39). October on 27.5 years is 0.7576%, matching the table's 0.758%.

**What never enters the building basis:** land, loan costs (they amortize over the
loan term as a separate intangible), and escrow deposits (an asset until the
lender spends them). A depreciation figure that quietly includes any of those is
the most common way this goes wrong.

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

Two runnable specs with invented figures document every key by example — copy one
to the scratchpad and edit: `references/example-deal.json` (bought and sold, the
disposition path) and `references/example-deal-inservice.json` (bought and placed
in service, the depreciation path).

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

## Three things to raise, never to decide alone

- **Why did it never go into service?** A **flip** is inventory — ordinary loss,
  fully deductible. A **rental venture that never launched** (permits refused,
  financing died) was never used in a trade or business, so it is not §1231: it is
  a capital asset reported on **Form 8949**, feeding Schedule D. Establish the
  intended use before picking a form.
- **Which costs may enter basis.** For an aborted venture, costs of the *property*
  capitalize, but the *business's* overhead is a §195 start-up cost of a business
  that never began — no deduction, no amortization, and a stretch to call it basis.
  That argues for a narrower basis than a flip. Show both totals; don't choose one
  silently. `references/mapping-chart.md` has the full split.
- **Which form the rent goes on.** Schedule E by default; Schedule C only for
  hotel-style services; Form 8825 if the owner is a partnership or S-corp. A
  single-member LLC is disregarded and goes straight to the owner's Schedule E.
- **The $3,000 wall.** An individual's net capital loss is capped at $3,000 a year
  against ordinary income, the rest carried forward. A $40,000 capital loss takes
  over a decade to absorb; the same loss as ordinary is deductible now. Say this
  out loud — it is usually the largest number in the conversation.
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

**Update this skill when** a property type needs a recovery period the engine
doesn't carry (land improvements at 15 years, cost-segregation components),
when a new reason for "never placed in service" turns up,
when a new ALTA line has no obvious bucket (add it to
`references/mapping-chart.md`), when a state's customs differ from the Florida
notes, when the blank template in `assets/` is revised, or when a deal shape
appears that the spec can't express — an installment sale, a 1031 exchange, a
seller-financed note, or a partial disposition.
