---
name: shopify-year-end-inventory
description: Establish a Shopify client's year-end inventory figure for their tax return (Form 1125-A / Schedule C Part III) — where the number lives, how to pull it, and the two gates it must pass before it may be used. Use when preparing a return for a client who sells through Shopify, when someone asks "where do I find the inventory at year end for a Shopify store?", when a Shopify inventory number disagrees with the books or with the prior-year return, or when reconciling a Shopify store's sales against a client's actual revenue. Encodes the finding that Shopify's `ending_inventory_value` is NOT a cost basis — it is units multiplied by whatever sits in the variant's "Cost per item" field, which clients routinely fill with a pricing formula, fill inconsistently, or leave empty. Read-only on the client's store; client figures are delivered in chat, never committed.
---

# Shopify year-end inventory — get the figure, then prove it

A Shopify store will hand you a year-end inventory number in about thirty seconds. **That
number is usually wrong for tax purposes, and it is wrong in a way that looks entirely
convincing.** This skill is the procedure for getting it and then earning the right to use it.

## Why this skill exists

Shopify's `ending_inventory_value` is computed as:

```
units on hand at the snapshot date  ×  the variant's "Cost per item" field
```

**"Cost per item" is a free-text field the merchant fills in.** Shopify does not validate it,
does not derive it from purchase orders, and does not require it. So the reported "value" is
only as good as that field — and on the first client the firm checked it was not good at all.

> **Kolo Florida (the pilot, Aug 2026).** The store reported a year-end inventory value roughly
> **1.74× larger** than the ending inventory on the prior year's filed 1120-S. Pulling `price`
> and `unitCost` for eight variants across four price tiers — from the cheapest accessory in the
> catalogue to the most expensive vanity, a range of more than a hundred to one — every single one
> came back at **exactly 30.0% of its own retail price**. That is a
> spreadsheet formula someone applied across the catalogue, not eight coincidental supplier
> prices. Meanwhile *other* variants carried `unitCost: null` and were silently contributing
> **zero** to the same total. The figure was inflated and incomplete at the same time.

Nobody at the firm had done anything wrong; the number simply presents itself as authoritative.
**The two gates below exist so it never gets that benefit of the doubt again.**

## Guardrails

- 🔴 **The Shopify value never goes on a return until Gate 1 and Gate 2 both pass.** If either
  fails, Shopify gives you **units and a cross-check** — the *valuation* has to come from
  somewhere else (supplier invoices, the client's own cost sheet, a physical count).
- 🔴 **Read-only on the client's store, always.** Never `set-inventory`, `update-product`,
  `bulk-update-product-status`, or any `graphql_mutation`. We are reading a client's live
  commerce system; an accidental write changes what they sell and at what price.
- **The prior-year return governs the current year's opening figure.** Line 1 of this year's
  Form 1125-A is line 7 of last year's, whatever any system says.
- **Client figures stay out of the repo** — deliver them in chat. Ratios, multiples, and
  observations about *how a field is populated* are fine to write down; dollar amounts are not.
- **Confirm which store you are connected to before reading anything.** The MCP connects to one
  shop at a time.

## Step 0 — Confirm the store and its shape

```
get-shop-info          → name, domain, plan, currency
graphql_query          → locations { name isActive address { city province } }
```

Two things to establish:

- **The plan.** The Inventory report family — including the month-end snapshot — needs the
  **Shopify** plan or higher. On **Basic** it is not there, and the whole route below changes:
  you are down to current levels plus the client's own records.
- **The locations.** More than one location means stock may sit somewhere that is not the
  client's, or that a second entity operates. A single location is one less thing to reconcile.

## Step 1 — Pull the snapshot

**In the admin UI**, for the client to see it themselves:
Analytics → Reports → **Inventory** → **"Month-end inventory snapshot"**.

**Through the MCP**, which is faster and gives you the whole series at once:

```
FROM inventory
SHOW ending_inventory_units, ending_inventory_value
TIMESERIES month SINCE <two years back> UNTIL <year end>
```

Pull **two full years**, never just the one you need. The series is where Gate 2 lives, and the
prior year-end is the beginning-inventory cross-check.

Per-item detail, when you need to see what is driving the total:

```
FROM inventory
SHOW ending_inventory_units, ending_inventory_value
GROUP BY product_variant_title, product_title
SINCE <YYYY-12-01> UNTIL <YYYY-12-31>
ORDER BY ending_inventory_value DESC LIMIT 25
```

## Step 2 — GATE 1: is "Cost per item" actually a cost?

**Run this before quoting any value to anyone.** Pull `price` alongside `unitCost` for **at
least eight variants spread across the price range** — cheap accessories through to the most
expensive item:

```graphql
{ products(first: 8, query: "<a broad term>") {
    edges { node { title variants(first: 3) { edges { node {
      sku price inventoryItem { tracked unitCost { amount } }
    } } } } } } }
```

Compute `unitCost ÷ price` for each, and read the result:

| What you see | What it means | What to do |
|---|---|---|
| **An identical ratio across every product** (30%, 40%, a third…) | A formula was applied across the catalogue. **This is not a cost.** | ⛔ The value is unusable. Units only. Say so plainly. |
| **`unitCost: null` on some variants** | Those contribute **$0** to the total while holding real units | ⛔ The total is understated for them and cannot be repaired by scaling |
| **Ratios that scatter** (28%, 41%, 33%, 19%…) | Plausibly real supplier costs | ✅ Proceed — but tie **two or three** to an actual supplier invoice before relying on it |
| **Every ratio identical AND some nulls** | Both failure modes at once, as at Kolo | ⛔ Units only |

⚠️ **A convincing-looking round number is not evidence of a real cost.** At the pilot client the
implied unit costs landed on clean values — the kind that look exactly like invoice prices — and
every one of them was simply 30% of a round retail price. **Roundness is what a formula produces,
not what a supplier quotes.**

## Step 3 — GATE 2: are the units real?

Shopify decrements inventory **only** when a Shopify order is fulfilled, or when a human adjusts
it by hand. Anything the client sells off-platform — wholesale, phone, walk-in, a second
storefront — leaves the count untouched. So the units are an **upper bound** until proven
otherwise.

Read the monthly series for these signatures:

- **A flat line, then a step.** Months of near-zero movement followed by a large single-month
  drop is a **physical count or bulk correction**, not selling. It proves the count was *wrong*
  right up until that month — including at your year end. *(At Kolo the count moved barely a
  hundred units across a whole year, then fell by roughly three thousand in one month.)*
- **Units that barely move while sales happen.** Off-platform sales, unadjusted.
- **Zeros or negatives at the start of the series.** That is the date inventory tracking was
  switched on. **Before it, the snapshot is meaningless** — do not report it as "zero inventory".
- **`tracked: false` variants.** Excluded from the snapshot entirely. If the client physically
  holds them, they are missing from the number.

**Cross-check the store's order volume against the client's actual revenue.** If the store took
a few dozen orders in a year while the warehouse holds thousands of units, the store is a small
part of the business and its inventory is not being driven by its sales. That gap is itself the
finding.

## Step 4 — Separate what the client actually OWNS

**Not everything listed in a store is the client's inventory.** A store can list another
company's products and pass the order straight through — the client is an intermediary, the
goods never belong to them, and **none of it is inventory on their return**.

*(Kolo does exactly this for a related company's kitchen units and doors — Lilian, Aug 2026.)*

Two tells, and **neither one is proof**:

- `tracked: false` — the merchant is not counting it because they do not hold it
- `unitCost: null` — no cost was ever entered because none was ever paid

**Confirm the arrangement with the client.** The field state is a hint about intent, not a
statement of ownership — and it cuts both ways: goods the client *does* own can be untracked
through simple neglect, and consignment goods can be tracked because it was convenient.

Ask directly: **"which of these product lines do you buy and hold, and which do you pass through
from someone else?"**

## Step 5 — Anchor on the prior-year return

**Get the prior year's ending inventory from the filed return, not from a system.** It is line 7
of that year's Form 1125-A (or Schedule C line 41 for a sole proprietor), and it *is* this year's
line 1.

When the prior-year return and Shopify disagree — they usually will —

- **the return governs**, and
- **the size and direction of the gap tells you what is wrong with the Shopify number**, which is
  exactly what Gates 1 and 2 are for. A Shopify value 1.7× the return is a valuation problem
  (Gate 1); matching values on very different unit counts is a units problem (Gate 2).

**Never split the difference, and never average the two.** One of them is right about something
and the job is to find out which.

## Step 6 — The mix-preserving cross-check (an estimate, never the figure)

When the prior-year return figure is trusted and Shopify's valuation is at least a *consistent*
formula, scaling the return figure by the ratio of the two Shopify values preserves the product
mix:

```
estimate  =  prior-year return ending inventory  ×  ( Shopify value at this year end
                                                    ÷ Shopify value at last year end )
```

This is better than scaling by unit count, because units treat a cheap bracket and an expensive
vanity as equal. **It is an order-of-magnitude sanity check to tell you whether a proposed figure is in the
right country — it is not a number to put on a return**, and it inherits every error in the cost
field. Label it as an estimate every single time you show it.

## What to ask the client

1. **Did you take a physical inventory count at year end?** If yes, that count beats every
   system, and the rest of this is a cross-check.
2. **Where does "Cost per item" in Shopify come from?** The answer to this is Gate 1 in one
   sentence.
3. **Which product lines do you buy and hold, versus pass through from another company?** (Step 4)
4. **Do you sell anywhere other than the Shopify store?** Wholesale, phone, in person, a second
   platform.
5. **Is there stock in transit at year end** — paid for, shipped, not yet received? It belongs in
   inventory if title has passed, and Shopify knows nothing about it.

## What Shopify cannot tell you — regardless of the gates

- **Historical cost.** Shopify applies the variant's **current** "Cost per item" to every
  historical snapshot. *(Verified at Kolo across two year-ends: implied unit costs came back
  identical **to the cent** on nearly every item across a full year of trading, which is only
  possible if one cost value is being applied to both dates. One item did not behave
  this way and was not explained; treat a mismatch as worth investigating, not as proof of
  layering.)* **So a cost change made today silently rewrites last year's reported value.**
- **A costing method.** There is no FIFO, no LIFO, no specific identification, no
  lower-of-cost-or-market. One cost, one multiplication.
- **Goods in transit**, or anything held off-platform.
- **Anything before tracking was enabled** on that store.

## The revenue trap that rides along

While you are in here, know that **Shopify's sales figures are not the client's revenue** either,
for two separate reasons — and both bite on the same return:

- **Off-platform sales are simply absent.** If the client also sells wholesale or in person, the
  store's totals are a fraction of the business.
- **`gross_sales`, `net_sales` and `total_sales` are three different numbers.** Gross is before
  discounts and returns; net is after; total adds shipping and tax. A large gap between gross and
  net is discounts or refunds and is worth explaining before it reaches the P&L.

```
FROM sales SHOW orders, gross_sales, discounts, sales_reversals, net_sales,
                shipping_charges, taxes, total_sales
TIMESERIES month SINCE <year start> UNTIL <year end>
```

## Where the books actually live

**A Shopify→QuickBooks integration does not sync inventory.** It syncs sales, payouts, fees and
tax. So the `Inventory Asset` balance in QuickBooks is only meaningful if a human maintains it or
the client runs QuickBooks' own inventory module with purchases recorded as items. **Check it
rather than assuming it either way** — and if purchases were expensed as bought, the year-end
inventory adjusting entry is ours to make.

⚠️ **A client may not be reachable through Double at all.** `get_client(clientId)` returning
`platform: "none"` means QuickBooks is not connected, and Double's `get_balance_sheet_report` /
`get_profit_loss_report` refuse with *"This tool is unavailable for None clients."* The books
then have to be opened in QuickBooks directly. See the [`double-mcp`](../double-mcp/) skill §1.

## The delivery

- **In chat**, with the gates stated: which passed, which failed, and what the number therefore
  is and is not.
- **Never present a figure without saying which gate it rests on.** "Shopify reports X" and
  "the year-end inventory is X" are different sentences and only one of them is usually true.
- Findings about the client — how the cost field is populated, what is passed through rather than
  owned, whether inventory is maintained — go into their
  [`client-intelligence`](../client-intelligence/) file in the same session, **without the dollar
  figures**.

## Update this skill when…

- **A second Shopify client is worked** — record whether the "Cost per item" field was a formula
  there too. Two clients would make it a pattern worth leading with; one is a warning.
- **A client's cost field passes Gate 1** — the skill currently has no worked example of the
  happy path, and what a *real* cost distribution looks like is worth writing down.
- **Shopify changes how `ending_inventory_value` is computed**, or starts keeping historical cost
  layers — the "what Shopify cannot tell you" section is the part that would go stale.
- **A client is found on the Basic plan** — the snapshot route does not exist there and the
  fallback has never been worked out. Write it down when it is.
- **The firm settles a house method for valuing a Shopify client's inventory** (supplier invoices
  vs physical count vs client cost sheet) — that decision belongs in an SOP, and this skill should
  point at it rather than leave the choice open.
- **A §471(c) position is taken for a Shopify client** — small-business taxpayers can elect to
  treat inventory as non-incidental materials and supplies or follow their book method, which
  changes what this whole procedure is for. It is a method election and has to stay consistent
  with the prior year; record how it was handled.
