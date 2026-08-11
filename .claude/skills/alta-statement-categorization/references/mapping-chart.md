# The standing categorization chart — ALTA line → bucket

The rule that decides everything else: **only our client's own column counts.**
An ALTA prints the buyer's and the seller's charges side by side. When our client
is the buyer, every seller-column figure is somebody else's cost and never enters
our basis — and the reverse when our client is the seller. Put the other party's
lines on the mapping chart marked *exclude* rather than dropping them, so the
reviewer can see nothing was missed.

The second rule: **the ALTA is never the whole story.** Rehab, carrying costs paid
outside closing, and improvements never appear on it. A workbook built only from
the two statements will understate basis. Always ask for the bank ledger.

---

## Buyer side — the four buckets

| Bucket | What lands here | Treatment | Template block |
|---|---|---|---|
| **Facilitative cost** | Everything paid to *acquire* the property: title, settlement/closing fee, recording, transfer stamps the buyer paid, survey, appraisal not required by a lender, attorney, broker fees the buyer paid, inspections, lien searches | Capitalize into the **basis of the building** (Reg. §1.263(a)-2 — facilitative costs are not deductible) | `1 - FACILITATIVE COSTS`, rows 18–45 |
| **Loan cost** | Points, origination, underwriting, credit report, flood determination, lender's title policy, mortgage doc stamps and intangible tax, appraisal *required by the lender* | Capitalize as a **separate loan intangible**, amortized over the loan term — not building basis | `2 - LOAN COSTS`, rows 49–76 |
| **Operating cost** | Prorated property taxes, prorated interest, homeowner's insurance premium, HOA dues | **Expensed** once the property is in service — but see the placed-in-service rule below | `3 - OPERATING COSTS`, rows 80–83 |
| **Escrow deposit** | Deposits into the lender's escrow/impound account for taxes, insurance, MI | **Current asset**, not a cost at all. Released when the lender pays the bill | `4 - ESCROW COSTS`, rows 87–90 |

**Reductions to amount due** (rows 46–53, column F/G) are not costs — they are how
the buyer funded the purchase: earnest money and deposits, loan funds, seller
credits, prorated taxes the *seller* owes the buyer, security deposits transferred.

### The placed-in-service rule that catches people
The template keys off `C7` (Placed in Service Date). If its **year differs from
the purchase year — including when C7 is blank** — the tool capitalizes the
operating costs into building basis instead of expensing them. That is the right
answer for a property that was bought but not yet in service, and it is the
default a flip should stay on. Leave `C7` blank deliberately, and say so in the
notes, so nobody later reads the blank as an oversight.

---

## Seller side — the three buckets

| Bucket | What lands here | Treatment |
|---|---|---|
| **Selling cost** | Commissions, transaction/processing fees, settlement fee (S), search fee, owner's title policy when the seller pays it, deed documentary stamps and transfer tax, recording of seller documents, notary, municipal lien/estoppel search, seller concessions credited to the buyer | **Reduces the amount realized** — the Form 4797 / Schedule D presentation, not a separate expense |
| **Operating cost** | Property taxes paid at closing, mortgage interest paid through closing, HOA dues | **Expensed** — or capitalized if the property never went into service |
| **Balance sheet** | Mortgage payoff (principal), escrow holdbacks retained by title, tenant security deposits transferred | Not costs. A payoff clears a liability; a holdback is a **receivable** until it is refunded or applied |

**Seller credits** — sale price, plus prorated taxes/rent/assessments the buyer
reimburses — are the other side of the proceeds calculation, not income lines.

### Selling costs and the journal entry
Because selling costs reduce the amount realized, the disposition journal entry
gets **no selling-cost line** — the gain or loss already absorbs them, and the
cash line is already net of them. If the books want them broken out, debit
Selling Costs and credit Gain on Sale by the same amount; net income is identical.

---

## Florida specifics worth knowing

- **Deed documentary stamps** are $0.70 per $100 of price ($0.60 in Miami-Dade),
  customarily **seller-paid**. Palm Beach and Broward custom also puts the
  **owner's title policy on the seller** — so a Florida buyer often has no title
  insurance in basis at all. Do not "fix" that; it is correct.
- **Non-ad valorem assessments** prorate separately from county taxes and often
  run on a different period (an Oct–Sep district year against a Jan–Dec tax year).
  Two proration lines with two different date ranges is normal, not an error.
- **TNOC** is a Termination of Notice of Commencement — a recording charge that
  shows up when there was open permitted work. Its presence is a hint that
  **rehab happened**; go looking for those costs.

---

## Lines with no obvious home

| ALTA line | Where it goes | Why |
|---|---|---|
| Ancillary title charges | Doc Preparation / Endorsement / Guaranty Fees | Catch-all the title agent uses for endorsements and doc prep |
| Certificate of status reimbursement | Other | A state good-standing certificate for an entity buyer |
| Real estate processing / transaction fee | Broker Fees \| Commissions | A brokerage fee under another name — same bucket |
| Utility bill escrow | Escrow holdback (balance sheet) | Title holds it pending final meter reads; **not** an expense |
| Wire fee, courier fee | Facilitative (buyer) / Selling cost (seller) | Small, but they are costs of the transaction |
| Gift funds | Exclude | The buyer's funding source; irrelevant to the seller |

When a line genuinely has no home, put it in **Other** and write what it was in
the mapping chart's *Tax Treatment* column. Never invent a template row.

---

## When the property never went into service

A property that never became operational has **no operating expenses** — the
costs of holding it are costs of the asset, not of a business. That means:

- No depreciation, no placed-in-service date, no §1250 recapture.
- Carrying costs — taxes, insurance, utilities, pest control, security — are
  **capitalized into basis**, not expensed.
- Post-closing costs from the bank ledger belong in basis too. Build the
  `carrying_costs` sheet and grade them, because they are the part nobody has
  documentation for. See SKILL.md §4.

### Ask WHY it never went into service — the answer moves numbers

"Never placed in service" is not one situation. Establish the intended use, because
it decides both the reporting form and which costs may enter basis:

| Intended use | Character of the result | Reported on |
|---|---|---|
| **Held for resale** (a flip, dealer) | Inventory — **ordinary** loss, fully deductible | Schedule C / Form 4797 ordinary |
| **A rental business that never launched** — permits refused, financing died | Never used in a trade or business, so **not §1231**. A capital asset held for profit | **Form 8949 Part I or II** → Schedule D |
| **Held for appreciation** | Capital asset | **Form 8949** → Schedule D |

Form 8949 is the detail form; Schedule D is the summary it feeds. Saying "it goes
on Schedule D" is right but incomplete — the transaction is itemized on 8949, and
the box (A/B/C) depends on whether basis was reported on a 1099-B. A real estate
sale normally produces a **1099-S**, not a 1099-B, so it lands in **box C**
(short-term) or **box F** (long-term).

**A venture that never began splits the costs in two**, and this is the part worth
arguing carefully:

- Costs of **the property** — utilities, insurance, property taxes, survey,
  appraisal, securing the building — were incurred to acquire and hold the asset
  that was ultimately sold, so they capitalize into its basis.
- Costs of **the business** that never commenced — office rent, consulting,
  software, phone, travel to look at other opportunities — are **§195 start-up
  costs**. A business that never began gets no §195 deduction and no amortization,
  and pushing them into the property's basis is a stretch: they bought no part of
  the house.

So an aborted venture generally argues for a **narrower** basis than a flip would,
even though both are "never placed in service." Grade the costs, show the preparer
both totals, and let them decide — do not quietly fold entity overhead into basis.

**The deductibility consequence is worth stating out loud.** An individual's net
capital loss is capped at **$3,000 a year** against ordinary income, with the rest
carried forward. A $40,000 capital loss takes over a decade to absorb; the same
$40,000 as an ordinary loss is deductible now. Same facts, very different refund —
which is exactly why the dealer/investor question deserves a real answer rather
than a default.
