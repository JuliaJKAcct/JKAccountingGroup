# Kolo Florida Inc

> **Status:** 🛑 **CLOSED — the company has closed; only the final 2025 Form 1120-S remains** (Lilian, 2026-08-17) · **Owner:** Lilian · **Last updated:** 2026-08-19

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering bookkeeper needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** Kolo Florida Inc
- **Entity type:** Corporation (Inc) — S-corporation, files **Form 1120-S** _(Double client property "Tax Return Type", 2026-08-01)_
- **Home state:** Florida — **Lauderhill, Broward County** _(Gmail: City of Lauderhill Certificate of Use / zoning correspondence, 2025)_
- **Industry / what they do:** Retail / e-commerce — imports and sells merchandise through the Shopify storefront **"Kolo House"**; leases a warehouse in Broward County, FL for inventory. A 2024 local zoning application was initially denied because "wholesale" use wasn't permitted at the site; it was resubmitted describing retail sales to customers and approved. _(Gmail, 2024–2026 correspondence, 2026-08-01)_
- **Primary language:** Russian — the firm's correspondence with the client's primary contact is conducted in Russian _(Gmail, 2026-08-01; tentative, confirm)_
- **Our engagement (services we provide):** Bookkeeping (Quarterly), Sales Tax (Monthly filing), Income Tax (Form 1120-S), 1099 Preparation, Annual Report. **Payroll is NOT a firm service for this client** — the client self-manages payroll through Gusto _(Double client properties, 2026-08-01)_
- **Fiscal year-end:** _(pending — confirm)_
- **Accounting platform:** QuickBooks Online — but ⚠️ **not reachable through Double.**
  `get_client(706626)` returns `platform: "none"` _(re-checked 2026-08-17)_, so Double's financial
  reports refuse the client outright (*"This tool is unavailable for None clients"*) — verified by
  calling one, not inferred from the property. **The cause is settled: the QuickBooks was
  disconnected when the company closed** _(Lilian, 2026-08-17)_, so this is the wind-down and not a
  configuration fault to chase. ⚠️ **There is no second route.** The firm's own
  `Intuit_QuickBooks` MCP connector is authorised on **JK Accounting Group's** books, not on a
  client's — checked the same day. **Every remaining figure has to be exported by Lilian by hand.**

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — also has a separate individual/personal-1040 Double client with the firm |
| Corporate officer (holds a Workers' Comp exemption alongside the owner) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706626](https://app.doublehq.com/close?cid=706626)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Managed through Double |
| Gusto | Client's own payroll platform — **not** a firm-managed service; the firm is copied on Gusto's automated due/late/invoice notices | _(n/a — client's own account)_ | Weekly pay periods; notices land in the firm's inbox _(Gmail, 2026-08-01)_ |
| Shopify | E-commerce storefront "Kolo House" — **kolo.house**, admin `kolo-miami.myshopify.com`, on the **Shopify plan** (so the whole Inventory report family, including the month-end snapshot, is available) | _(n/a — client's own account)_ | Billing notices land in the firm's inbox _(Gmail, 2026-08-01)_. **Reachable from a Claude session through the Shopify MCP** — verified live 2026-08-14. Inventory **is** tracked on the bath/shower lines — **both the KOLO and the BAI-branded ones**, which matters (see §5 on the MegaBAI question) — at a **single location** (`"KOLO" — Lauderdale Lakes, FL` (street address in Double, not here)). ⛔ **But its "Cost per item" field is a formula, not a cost — see §5.** Tracking begins **August 2024**; before that the snapshot reads zero or negative and is unusable. Figures stay in Shopify, never here. |
| Florida DOR e-Services | Sales-tax filing portal | _(n/a — firm-managed filing)_ | Returns/payments post to the account's Secure Message Center; confirmation e-mails follow _(Gmail, 2026-08-01)_ |
| GovFile | Files the Florida Annual Report | _(n/a — third-party filing service)_ | Annual filing notice each spring _(Gmail, 2026-08-01)_ |
| TaxDome (legacy) | Where an earlier business-information organizer was completed before/alongside the Double migration | _(n/a — firm login)_ | "2026 Kolo Florida Business information changes" organizer, completed 2026-04-22 _(Gmail/Double activity log, 2026-08-01)_ |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** Yes — filed **monthly** through the Florida DOR e-Services portal _(Double client property "Sales Tax" = Monthly, 2026-08-01)_. The firm's internal Double recurring task "Monthly Sales tax" is scheduled around the **5th** of each month (changed from the 1st on 2026-07-20). Filing confirmations arrive by e-mail from the Florida DOR e-Services system. _(Double activity log + Gmail, 2026-08-01)_
- **Cadence — settled by Lilian, 2026-08-11: MONTHLY.** The Drive recurring-expense watchlist (2026-07-07) and some 2025 correspondence describe it as quarterly; that is stale and should not be relied on.
- 🛑 **ENDING: the July 2026 return is the LAST sales-tax filing the firm makes for this client.** Lilian files it herself; after that the sales-tax account is closed as part of the wind-down (§5). _(Lilian, 2026-08-11.)_

### Payroll
- 🛑 **STOPPED — no payrolls have been run since. Settled by Lilian, 2026-08-14.** Everything below is **historical**, not a live obligation.
- **Applies?** **Never a firm service for this client** — Double's "Payroll" property is N/A. While it ran, the client operated its own **weekly** payroll through **Gusto**; the firm was copied on Gusto's automated "payroll due"/"payroll late" reminders and monthly invoice-paid confirmations, but never processed payroll for this client. A recurring lateness pattern showed up in those notices (payroll was flagged "1 day late" most weeks). _(Double property + Gmail, 2026-08-01; stopped per Lilian, 2026-08-14)_

### Bookkeeping & monthly close
- **Applies?** Yes — **Quarterly** _(Double client property "Bookkeeping", 2026-08-01)_. As of mid-2026 the client was under an active bookkeeping **cleanup** (many transactions still uncategorized per the Drive recurring-watchlist note); Lilian resolved six client transaction questions in Double on 2026-07-29 as part of that cleanup. _(Drive + Double activity log, 2026-08-01)_

### Income tax
- **Applies?** Yes — **Form 1120-S** (S-corporation) _(Double client property, 2026-08-01)_.
- The firm also prepares this client's **Form 1099s** (Double property "1099 Preparation" = true). _(2026-08-01)_
- A "2025 Business Tax Organizer" for this client was **reverted to draft** in Double on 2026-07-31 — status open, see §6. _(Double activity log, 2026-08-01)_

### Licenses & other filings
- **Applies?** Yes — a Florida **workers'-compensation Certificate of Election to be Exempt** is on file for this company for **both** principals (not just one): separate Division of Workers' Compensation expiration notices for each of them landed the same day, 2026-06-29, so the exemption has a renewal cycle to watch for each. _(Florida DWC notices via Gmail, 2026-07-30 / confirmed both principals 2026-08-01)_
- **What & when:** _(pending — confirm the exemption's expiration date and who renews it, us or the client)_
- **Florida Annual Report** — required (Double client property "Annual Report" = true); filed each spring through the third-party **GovFile** service. _(Gmail, 2026-08-01)_
- **Local business registration** — the company registered an occupational license / Commercial Certificate of Use with its home city for the leased warehouse space (application filed mid-2024, approved after a wholesale-use denial was resubmitted as retail). _(Gmail, 2026-08-01)_

## 5. Key facts & quirks

<!-- ORDER MATTERS: the client card renders only the FIRST FOUR bullets of this
     section. Keep live, consequential work at the top and let settled or
     historical items sink. See .claude/skills/client-intelligence/SKILL.md. -->

- 🛑 **THE COMPANY HAS CLOSED — and with it went the only read path to the books.** Lilian
  (2026-08-11): Kolo is **no longer our client**; the company is going to close. **Closed as of
  2026-08-17**, and **QuickBooks was disconnected as part of it** — so `platform: "none"` is not a
  configuration glitch to chase, it is the wind-down (§1). **Every remaining figure for the 2025
  return has to be exported by Lilian by hand.** The work left is the **final 2025 Form 1120-S**
  and the account closures; **nothing here is a live recurring obligation** without checking it
  against the wind-down list in §6 first.
- 🧾 **The 1125-A "purchases" figure is REAL, and it is the pass-through door business — settled
  from the 2025 general ledger, 2026-08-17.** No inventory merchandise was bought in 2025 (Lilian),
  and the `Inventory` account has **exactly one entry all year**: the 31-Dec journal relieving it
  for units sold. But `COGS` carries **two invoices from `United Porte`**, in April and August,
  posted **straight to cost of sales without ever touching Inventory** — which is correct for goods
  the client resells as an intermediary and never warehouses (the door line, §5). Together they are
  **exactly** the goods-side residual in Form 1125-A line 2. **Both statements were true**: the
  owner meant *we did not restock*, the ledger meant *goods cost was incurred*. **Nothing needs
  correcting, and line 2 is right.** The rest of line 2 is the artifact — Shopify selling fees plus
  the clearing account's growth, both consequences of the 2024 convention (§5 rule 1/2).
- ✅ **The 2025 physical inventory count IS reflected — through the unit quantity, not an
  adjusting entry** _(Lilian, 2026-08-17)_. The `Inventory` account's only movement all year is the
  31-Dec relief for units sold, so ending inventory is opening minus cost of sales to the cent —
  but the count is what **established the unit quantity** inside that entry. So the **book figure is the
  right one** for Form 1125-A line 7 and Schedule L line 3, and there is no missing correction.
  _(Asked because the alternative — a count whose findings were never posted — would have left the
  errors it found sitting in the number going on the return. It did not.)_
- ✅ **The two `United Porte` charges ARE purchases, and cost of goods sold is where they belong**
  _(Lilian, 2026-08-17)_. Booked straight to COGS without passing through `Inventory`, they are
  **exactly** the goods-side residual in 1125-A line 2 — which is therefore a real purchases figure,
  not an artifact. Settled on the record so the question "the client bought nothing, why does the
  return show purchases?" has a written answer next year.
- 🧾 **`Taxes Paid` was 100% SALES TAX, and the entry behind it was posted TWICE — Lilian confirmed
  the duplicate and deleted one, 2026-08-17.** The account held nothing but two identical 31-Dec
  journal entries, `Dr Taxes Paid / Cr Channel Sales Tax Payable`, both captioned *"clear
  residual sales tax payable (overpayment) to zero"*. **The duplicate was provable from the entry's
  own description**: with one copy the sales-tax family nets to **zero**, as intended; with
  two it lands on the **opposite sign** — not zero at all. **Read the sales-tax accounts as a
  family** (the parent carried a **debit** balance from the year's remittances while the sub-account carried
  the tax collected): neither shows the overpayment alone. 💵 **Kolo really did overpay
  Florida** — the amount is small but real, and worth reclaiming **before the FL DOR account is closed** in the wind-down,
  and note that **claiming the refund and deducting the write-off are mutually exclusive**. General
  rule now in [SOP §5C-ii](../../sops/form-1120s-preparation.md).
- 🔁 **The 31-Dec Shopify reconciliation is ONE compound entry, and it balances to the cent.** All
  year QuickBooks sees only the **net payouts** — a single bank number with gross sales, discounts,
  refunds, shipping, sales tax collected and Shopify's fees all buried inside it. At year end the
  whole year is decomposed from Shopify's own reports, with the **Clearing Account as the balancing
  figure**: gross sales − discounts − refunds + shipping + sales tax collected − selling fees = **what actually
  reached the bank** ✓ — it cross-foots to the cent, and the figures live in QuickBooks. 🔑 It also
  settles the method question: sales tax collected goes to a **liability**, never to revenue — so
  the books are on the **net method** and remitting the tax is not a deduction. And because COGS,
  the unit count and the ending inventory come out of this same entry and the same
  reports, the entry cross-checking exactly is a good signal about the books generally.
- 💸 **Why 2024 reported NO distributions and 2025 reports real ones — settled from the 2024 general
  ledger, 2026-08-17, and the 2024 return is right.** The 2024 equity account did carry debits, but **almost all of it is a single round trip** — a deposit of a near-identical amount three days
  earlier — and a further outflow left the same day a larger deposit arrived.
  Netting those is correct. Against that the owner was a **very large net contributor**: a start-up year in which he funded
  the company distributed nothing. **2025 is the
  economic opposite** — a wind-down with 52 outflows spread over nine months, none with the 2024
  pairing signature, and including **personal consumption** (Publix, KFC, Exxon, Amazon Prime,
  Walmart) that cannot be netted against anything. ⚠️ **Do not read the blank 2024 line 7 as a
  convention to repeat**: the convention was *net the round trips*, and applying that same rule to
  2025 gives a real distributions figure. General rule now in
  [SOP §5C-iv](../../sops/form-1120s-preparation.md).
- 🏗️ **The 2024 capitalisation was IN KIND, by journal entry — which is why the equity accounts are
  so large.** one owner's account carries four July-2024 journal entries — **inventory**, an amount equal to the
  **whole fixed-asset register** (all three assets), an amount equal to the **Security Deposit**, and
  one more. The other owner's **entire** capital account is one journal entry with no bank activity
  at all. **The owners bought the assets, the inventory
  and the deposit personally and contributed them.** Useful context for basis: these are
  contributions, not purchases by the company.
- 🗂️ **One equity account per shareholder holds contributions and distributions netted together.**
  Normal bookkeeping, and correct — the balance sheet only needs the net. **The ANALYSIS still needs
  the gross halves**, so an S-corp return cannot be prepared from the balance sheet for this client:
  **open the shareholder ledger and total debits and credits separately.** This is the single step
  that nearly went missing on the 2025 return.
  🔴 **What the 2025 RETURN then does with them was decided on 2026-08-20: it reports them NET** —
  one contribution and no distributions. **The gross split is still how the figure is built and the
  only record of what each side is made of; it is no longer how the return presents it.** 🔵 **And it IS the general rule now** — Julia decided on 2026-08-20 that where a shareholder's
  contributions exceed their distributions the two are netted and distributions reported at zero, at
  least for S-corp owners who took no reasonable salary. It is the firm's
  [1120-S SOP](../../sops/form-1120s-preparation.md) **§5C-v**, with one hard boundary: **never where
  there is accumulated E&P.** ⚠️ **Splitting the account gross stays mandatory** — the policy's own
  test cannot be applied to a net figure.
- ☕ **`Refreshments (Tax Review)` is office water and coffee — a judgment call, not a fact.** All
  thirteen 2025 charges are `Primo Water`, "WATER COFFEE DELIVERY". The account's own name is the
  bookkeeper flagging it for exactly this decision. **The firm's working position is 50%**, with
  `Meals`, on the post-TCJA reading that §274(n) reaches food and beverages provided on premises;
  treating it as office supplies at 100% is the more aggressive alternative. **Lilian decides** —
  it moves M-1 line 3b, Schedule K 16c, M-2 line 5 and page 1 line 20.
- 💰 **The Security Deposit was EXPENSED TO RENT, and that stands — Lilian's decision, 2026-08-17.**
  The 2025 general ledger names the entry: `12/31/2025 · Journal Entry · "Move security deposit to
  rent expense"`, landing in **Store Rent**. Julia made it. **Lilian reviewed it and
  ruled it correct — do not reverse it**, and do not re-raise it. So 2025 rent carries the deposit in
  full, the deposit is **off** the balance sheet, Schedule L line 6 runs from the prior-year figure
  **to zero**,
  and there is no book/tax difference to reconcile because the treatment is the same on both sides.
  ⓘ **The underlying facts, recorded because they are what the position rests on:** the landlord
  kept the deposit when the company moved to a **different warehouse of his own**, it became the
  deposit on the new lease, and it is refundable when they vacate. A session reading only those
  facts would reach for an asset; **the firm's position is the expense, and this bullet exists so
  the question is not reopened every time someone reads the file.**
- ⛔ **Shopify's inventory VALUE is not a cost basis — the "Cost per item" field is a flat
  30%-of-retail formula.** Checked across eight variants spanning four price tiers, from the
  cheapest accessory to the most expensive vanity: **every one came back at exactly 30.0% of its
  own retail price.** That is a formula applied across the catalogue, not eight supplier
  prices agreeing by chance. Other
  variants carry **no cost at all** and contribute **zero** to the same total — so the number is
  inflated and incomplete at once. **Shopify gives this client units, not value.** The valuation
  has to come from supplier invoices, the client's cost sheet, or a physical count. _(Established
  2026-08-14 when the Shopify figure came out ~1.74× the ending inventory on the filed 2024
  1120-S — Lilian knew the prior-year number and questioned it, which is the only reason this was
  caught.)_
- 🔴 **BASIS IS THE LIVE RISK ON THE 2025 RETURN — the two shareholders' equity accounts are
  wildly unequal.** Equity sits in one named account per principal (Double holds the names, per
  §2). One of them funded almost the entire business and **put in a further large contribution
  during 2025**; the other's account has **not moved since 2024** and is a small fraction of the
  first. Meanwhile the company has now run **two consecutive loss years**, the second much larger
  than the first. If the loss is allocated by share percentage while contributions are that
  lopsided, **the smaller shareholder's basis will not carry his share** and part of his loss is
  suspended rather than deducted. **Form 7203 per shareholder is not optional here.** First
  question: are those accounts **capital contributions or shareholder loans** — they behave
  differently for basis. _(2026-08-14.)_
- ✅ **THE 1125-A METHOD IS DECODED — three rules, and they reproduce the 2024 return exactly.**
  With the 2024 QuickBooks reports in hand (2026-08-14) the whole schedule ties to the cent:
  1. **Line 7 (ending inventory) = the balance sheet's `Total for Other Current Assets`** — which
     is the `Inventory` account **plus the Shopify Clearing Account**, not the Inventory account
     alone.
  2. **Line 8 (COGS) = the P&L's `Total for Cost of Goods Sold`** — the `COGS` account **plus
     `Shopify Selling Fees`**.
  3. **Line 2 (purchases) is the plug** that makes line 1 + line 2 − line 7 = line 8.

  ⚠️ **Rule 1 is the one a session will get wrong**, because "inventory" reads as the Inventory
  account. Using it alone breaks the schedule and makes purchases come out **negative**.
- ✅ **The COGS estimate is applied consistently across both years — the base did NOT move.**
  Cost of goods sold runs at about **31% of the `Shopify Sales` account** (the gross sales figure)
  in each year. An earlier reading of this file suspected the base had changed; that was wrong, and
  the cause was that **2024 has no discount accounts at all** — `Channel Discount` and `Channel
  Refund Adjustment` first appear in 2025 — so 2024's gross and net coincide while 2025's diverge
  sharply. Measure the ratio against `Shopify Sales`, never against total income.
  ⓘ **How Lilian describes the method, and it fits:** cost is *estimated* at **30% of the selling
  price** because the true cost of the goods is not known (2026-08-14). That estimate is what
  drives **cost of goods sold** (rule 2). Ending inventory is **observed** off the balance sheet
  (rule 1) and **purchases** is the figure that falls out (rule 3) — so nobody ever values the
  stock directly, and nobody ever counts the purchases directly either.
  ⚠️ **Which means the ending inventory is NOT independent evidence of what the goods cost.** It
  is a balance carried forward and reduced by an estimate. A session that reads the schedule
  backwards will "derive" a true cost from it and be wrong — that error was made here on
  2026-08-14 and caught in review. _(2026-08-14.)_
  🔎 **Unresolved, and it may matter more than it looks:** Shopify's "Cost per item" is a flat
  **30% of retail** (bullet 2) and the books' cost of goods sold runs at about **31% of Shopify
  Sales** (this bullet). Those are almost certainly **the same policy applied in two places**
  rather than two independent facts — in which case the entire Form 1125-A rests on that one
  assumption, and calling the Shopify figure unusable while accepting the book figure needs a
  reason. **Not established either way; ask before treating them as independent.** _(Raised by the
  independent review, 2026-08-14.)_
- 🟡 **No depreciation was recorded in 2025 — the RETURN is settled, the BOOKS are still owed.**
  The 2025 P&L has no depreciation line at all, and the balance sheet's accumulated depreciation
  still equals the **2024 Form 4562** figure exactly — so nothing was added. There are fixed assets
  on the books (computer equipment, furniture, a floor scrubber). _(2026-08-14.)_ ✅ **Resolved for
  the return, 2026-08-18:** the deduction is claimed on the 2025 Form 4562 and page 1 line 14.
  What remains is the **journal entry into QuickBooks**, blocked only by lost access — see the §6
  log and the working paper (`projects/tax-returns/kolo-florida-inc/2025-form-1120s.md`). ⓘ **2024 DID
  record its depreciation** (a single 31-December entry), which is why both Schedule L conventions
  coincided that year and only diverge in 2025 — so the 2025 return is **not** inconsistent with
  2024, and the clean fix was always an entry rather than a change to the return.
- ⚠️ **Officer compensation is effectively nil in 2025** where 2024 carried a real salaries line.
  Two shareholder-employees. Reasonable-compensation exposure — weaker than usual because the year
  is a large loss and the business is winding down, but it must be a decision, not an oversight.
  See the [`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/).
- ⚠️ **`Form 7203` (shareholder basis) was not found in the extracted 2024 return — but pages 8
  and 10 did not extract, so this is NOT established as absent.** It matters because 2024 closed
  in an ordinary business **loss**: whether the shareholders could deduct it turns on basis.
  Check the PDF by hand. _(2026-08-14.)_
- 🔢 **2025 return — the two figures that were blocking it are settled.** The **2025 depreciation
  is on ATX's Form 4562** and reconciles exactly to ATX's Schedule L accumulated depreciation less
  the book figure carried from 2024 *(confirmed by Lilian, 2026-08-14)*. And the account named
  `Payroll Expenses` in 2025 is **the Gusto subscription, not wages** — so **page 1 line 8 is
  zero** and that fee belongs in other deductions. ⚠️ **The 2024 return took the `Wages & Salary`
  CHILD account to line 8 and `Payroll Tax` to line 12 — never the `Payroll Expenses` parent
  subtotal.** Repeat that mapping. _(Figures live in QuickBooks and ATX.)_
- ✅ **PAYROLL STOPPED — settled by Lilian, 2026-08-14: "la nómina paró, no se corrieron más
  payrolls."** So the near-zero payroll on the 2025 P&L is the fact, not a gap in the books. §3/§4
  describe the weekly Gusto payroll in the past tense for this reason — the due/late notices in the
  firm's inbox belong to the period when it ran.
- **2024 was the first year with activity on this basis** — the filed return opens with **zero**
  beginning inventory and a **zero** beginning balance sheet, and the only return in Double's
  `Tax Return Filed` tree is 2024. _(Whether earlier returns exist elsewhere was not
  investigated.)_ Purchases that year were large and cost of goods sold was small: the company
  bought stock and sold very little of it, which is why almost the whole balance sheet is
  inventory.
- **Two Schedule K-1s** on the 2024 return — two shareholders, consistent with the two principals
  holding workers'-comp exemptions below.
- ⚠️ **The Security Deposit came off the balance sheet during 2025** — it was carried all through
  2024 and is **zero** at 31 Dec 2025, with no matching write-off visible as its own expense line.
  The likely explanation is that the landlord applied it against rent, which would already sit
  inside the rent figure. **Confirm what happened to it** before the balance sheet is transcribed.
  _(2026-08-14.)_
- ⚠️ **Rent is the whole story of the 2025 loss** — store rent plus storage rent is roughly
  **four fifths of every expense**, against revenue a fraction of its size, and it **more than
  doubled** from 2024. With the company winding down, **whether that lease is still running is the
  largest remaining exposure after the inventory itself.** _(2026-08-14.)_
- 🔧 **That PDF needs the fixed redactor.** `KOLOFLORIDAINC.pdf` carries a font with no Unicode
  map, so a text extraction returns glyph names rather than characters. Read through
  [`tools/redact-doc/`](../../../tools/redact-doc/) at its 2026-08-14 version or later, which
  decodes them; an older copy reports "0 masked" on this file and that means **blind, not clean**.
- 🛑 **The July 2026 sales-tax return is the last one the firm files** (§4). Lilian files it herself.
- ⚠️ **Most of the business does NOT go through the Shopify store — the storefront is a small
  fraction of it.** Across the whole of 2025 the store took **fewer than 50 orders**, several months
  ran at one or two, and **December 2025 was zero**, while the warehouse held over eleven thousand
  units. So a Shopify sales report is **not** this company's revenue, and anyone reading one as such
  will understate the year badly. Consistent with the retail/wholesale zoning history below. _(Shopify
  analytics, read 2026-08-14. Order counts are a volume fact; the money stays in Shopify/QuickBooks
  per the two-data-homes rule.)_
- **Retail, not wholesale.** A 2024 zoning application for the warehouse location was denied
  because "wholesale" use isn't allowed there; resubmitting it as **retail sales to customers** got
  it approved. That framing mattered for licensing and may matter again on the way out.
- **Shopify carries ONE cost per variant and applies it to every historical snapshot** — implied
  unit costs came back identical to the cent at both the 2024 and 2025 year ends on nearly every
  item. So editing a cost today silently rewrites what a past year "reported". _(One item did not
  behave this way and was not explained; 2026-08-14.)_
- **Kolo is an INTERMEDIARY for some product lines — those goods are not its inventory.** The
  kitchen units and the doors belong to **another company**; when a customer orders one through
  Kolo, that other store ships it directly. **That is why they are untracked, and it is correct
  that they are** — they must not appear in year-end inventory. _(Lilian, 2026-08-14.)_
- ⚠️ **Shopify's inventory is NOT maintained day to day — read its unit counts as an upper bound.**
  Shopify decrements only when a *Shopify* order ships or someone adjusts by hand, and this company
  sells mostly off-platform (above). The signature is in the monthly series: through all of 2025 the
  store-wide count drifted down by barely a hundred units, then in **July 2026** it dropped by roughly
  three thousand in a single month — the shape of a physical count or a bulk correction, not of
  selling. **For a year-end inventory figure the snapshot is the starting point; a physical count beats
  it.** _(Shopify month-end inventory snapshot series, read 2026-08-14.)_
- **The workers'-comp exemption covers BOTH principals** — separate Division of Workers'
  Compensation expiration notices for each of them landed the same day, 2026-06-29.
- **Dual engagement:** the corporate client (1120-S) and a **separate individual 1040 engagement**
  for the same owner, under a different Double client id. **Closing the company does not
  automatically end the personal engagement** — a distinction to keep straight through the wind-down.
- Business was informally called "Kolo Inc" in early intake correspondence (Jan 2026) before
  settling on "Kolo Florida Inc."
- **Low confidence — to confirm:** mid-2024 correspondence links Kolo to a seemingly related entity,
  "MegaBAI Florida Corp" (shared contacts, an inventory move into Kolo's warehouse, MegaBAI winding
  down around late 2024). Unconfirmed; no CI file exists for it.
  🔎 **Corroborated, not settled, 2026-08-14:** several **BAI-branded** products sit inside Kolo's
  *tracked* Shopify inventory (e.g. "BAI 8044 LED 34-inch Bathroom Mirror", "BAI 0811 Wall Hung
  34-inch Bathroom Vanity"), among its largest lines by value at both the 2024 and 2025 year ends.
  That is consistent with the 2024 inventory move into Kolo's warehouse — **and it raises a
  question for the return:** these are tracked, unlike the intermediary lines above, so on the
  face of it they are being treated as Kolo's own stock. Whether Kolo bought them or is holding
  them for someone is **not established here** — ask before the inventory figure is fixed.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
- 2026-07-20 — Profile started from the Double record (Kolo Florida Inc, QBO); confirmed by Lilian
  as the client she called "Colo". No Double notes and no indexed Ping meetings.
- 2026-07-25 — Coverage-gap sweep: full historical Gmail pass back to 2025-08. Filled most of
  §1/§3/§4, found the Drive folder and the recurring-expense watchlist.
- 2026-07-30 — Linked into the owner group (§7); recorded the workers'-comp exemption from a Florida
  DWC expiration notice.
- 2026-08-01 — Weekly sweep: cleared the Gmail full-history gap; established the Shopify storefront,
  the leased Broward warehouse and the 2024 zoning history.
- 2026-08-08 — Weekend sweep: confirmed the Lauderhill location, the sales-tax due-day change (1st →
  5th), and that the 2025 Business Tax Organizer had been reverted to draft on 2026-07-31.
- 2026-08-11 — **Lilian: the company is closing and Kolo is no longer our client.** Account closures
  (sales tax, Gusto, and the rest) run over the coming days; the **July 2026 sales-tax return is the
  last filing**. Also settled the long-standing cadence question — **sales tax is monthly**, and the
  quarterly note in the Drive watchlist is stale. File switched to wind-down. _(Worked by Lilian.)_
- 2026-08-14 — **Lilian started the 2025 Form 1120-S.** The opening question was where a Shopify
  store's year-end inventory actually lives. Established from the live Shopify connection: the
  **month-end inventory snapshot** (Analytics → Reports → Inventory) carries units **and** value at
  cost for **31 Dec 2025 and 31 Dec 2024** — the dates Form 1125-A needs. ⛔ **The VALUE side of
  that was reported to her as usable and it is not — corrected the same day, see the next entry.**
  Two findings from this pass did hold, both now in §5: the Shopify store is a **small fraction** of
  the company's sales, and its inventory is **not maintained day to day**. Separately, Double reports
  Kolo's QuickBooks as **not connected** (§1), so the books cannot be read through Double at all.
  _(Worked by Lilian.)_
- 2026-08-14 — **The Shopify inventory VALUE was found to be unusable, and Lilian is the reason it
  was caught.** She knew the filed 2024 1120-S reported a materially lower ending inventory and
  asked how the Shopify figure had been derived. It had not been derived at all — it was Shopify's
  own `ending_inventory_value` taken at face value. Testing the field underneath showed a flat
  **30%-of-retail formula** across every price tier, with nulls elsewhere (§5). **The units survive;
  the valuation does not.** She also explained the intermediary arrangement behind the untracked
  kitchen and door lines (§5), and asked for the lesson to be made reusable — the firm has other
  Shopify clients. Both findings and the two gates that would have caught this before it reached a
  return are now the
  [`shopify-year-end-inventory` skill](../../../.claude/skills/shopify-year-end-inventory/).
  _(Worked by Lilian.)_
- 2026-08-14 — **The 2024 filed 1120-S was read for the 2025 preparation** (`JK Accounting Group >
  Tax Return Filed > 2024 > KOLOFLORIDAINC.pdf`, through the redactor, that one year only). It
  settled the valuation question: the 2024 ending inventory was **not** a 30%-of-retail estimate
  but the residual of actual purchases, and the whole Form 1125-A reconciles internally (§5). It
  also produced the beginning-inventory figure that governs 2025, the two-shareholder structure,
  and the open Form 7203 question. **The read also exposed a real hole in the firm's own
  redactor** — this PDF's font emits glyph names rather than characters, so the first pass
  reported "0 masked" while four SSN/ITINs sat unrecognised in the file. The tool was fixed the
  same day (decode + an intelligibility gate that refuses to write rather than report a
  misleading zero), with tests and a mutation check. _(Worked by Lilian.)_
- 2026-08-14 — **Lilian supplied the 2025 QuickBooks P&L and balance sheet** (accrual, exported
  the same day) and preparation of the 2025 Form 1125-A began. The books turn out to implement the
  firm's COGS estimate consistently *within* the year, but four things block the return and all
  four looked like blockers: payroll, no depreciation recorded, officer compensation nil, and the
  books apparently not tying to the 2024 return at 1 January. ⚠️ **Two of those four were wrong —
  read the next entry before acting on this one.** Requested from Lilian: the QuickBooks balance
  sheet at 31 Dec 2024, the inventory account's 2025 ledger detail, and confirmation that nothing
  was purchased in 2025. _(Worked by Lilian.)_
- 2026-08-14 — **The 2024 QuickBooks reports closed every open question about method, and the 2025
  Form 1125-A now ties to the cent.** Lilian also settled that **payroll stopped** and set the
  scope: *the 2024 return is closed, Julia prepared it, and it is not to be reviewed* — it is the
  reference for how 2025 is built, nothing more. Two things this file had recorded as problems were
  **wrong and are struck**: the books do tie to the 2024 return at 1 January (the ending-inventory
  line includes the Shopify Clearing Account — §5 rule 1), and the COGS base never moved (2024
  simply had no discount accounts — §5). What remains live for 2025 is **shareholder basis**,
  **2025 depreciation**, the **security deposit**, and the **rent commitment**. _(Worked by
  Lilian.)_
- 2026-08-18 — **The prepared 2025 return was read back page by page, and it is NOT ready to
  transmit — two things must happen first.** ⓘ Every figure and tie-out is correct, the page-1
  line 15/16 placement is fixed, and **QBI/§199A is properly reported** (Schedule K 17d statement
  and K-1 box 17 code V — a **loss** year still produces QBI information, which carries forward
  against the shareholder's future QBI). What is wrong is not arithmetic:
  **(a) 🛑 Schedule B 14a is answered "No" and the ledger says otherwise.** A by-payee sweep of the
  2025 General Ledger found **three payees over the $600 threshold** — the **landlord**, the
  **storage/logistics provider**, and one **individual paid by Zelle** out of `Contract Labor`.
  ⚠️ **The belief that nothing reached $600 came from looking at `Contract Labor` alone; RENT is
  the bigger exposure** and is a 1099-MISC box 1 item. Two things decide exemption and neither is
  the account name: **an LLC is *not* automatically exempt** (only one taxed as a corporation is —
  the **W-9** proves it), and **Zelle issues no 1099-K, so it does not relieve the payer.**
  **W-9s settle 14a**, but not which form each payee gets.
  ⚠️ **The storage payee FORKS and must not be assumed.** The instructions expressly except
  *"merchandise, telegrams, telephone, freight, **storage**, and similar items"*, so **storing the
  client's inventory is excepted**, a **lease of identified space** is box-1 rent, and
  **predominantly fulfilment work is on neither list** (pointing to a 1099-NEC). **The signed
  agreement decides — its premises clause and its fee schedule.** The caption `Storage Rent` is
  evidence of nothing, and neither is a payee's name.
  ✅ **The Contract Labor payee is SETTLED — no 1099 is owed on it** (Lilian, 2026-08-18, checked
  outside the ledger), so that account produces no reportable payee. ⓘ **Only the conclusion is
  recorded, not the reason** — if the same payee reappears it must be re-decided, not copied.
  ⚠️ **14a is still Yes**: the **landlord** and the **storage provider** carry it, untouched by this.
  ✅ **The firm's own fee is EXEMPT — settled 2026-08-18.** Lilian confirmed JK Accounting Group is
  a **corporation**, now recorded in [`firm-identity.md`](../../sops/firm-identity.md). The reason
  is the payee's classification, not that the payment is "professional fees".
  **(b) 🛑 Seven of the twenty pages are BLANK forms that do not belong to this business** — a
  **Form T (Timber) Forest Activities Schedule**, a Form 4797 and a Schedule D, all empty. The
  Form T is a trace of the line-15 *Depletion* mis-key: the figure was corrected, **the form it
  pulled in stayed attached.** Delete all three in ATX before e-filing; no figure changes.
  Smaller: the signature title still reads **`MEMBER`** (LLC language on a corporation), and
  Schedule B 2b says `SERVICE` for a company that sells goods. _(Worked by Lilian.)_
- 2026-08-18 — **QuickBooks access has been LOST, and one journal entry is waiting on it.** Lilian
  asked the client for access; the likeliest cause is the subscription lapsing when the store
  closed. ✅ **Nothing is lost** — every report needed for the return was exported first. What is
  owed is the **2025 depreciation journal entry**, which the books never got: one debit to
  Depreciation and **three separate credits, one per accumulated-depreciation account** (the chart
  carries one per asset), because Schedule L 10b, each asset's net book value and the **gain or
  loss on disposal** are all built from them. The complete entry with its per-asset split is
  written out in the working paper (`projects/tax-returns/kolo-florida-inc/2025-form-1120s.md`) —
  **post it as written the moment access returns.** ⚠️ **It does not block the 2025 return** (page 1
  line 14 carries the deduction either way) **and it does not block the 2026 return either** — the
  per-asset accumulated figures already live in the ATX register and in the working paper's table.
  What is at risk is the **books**: if the entry is never posted, QuickBooks and the return
  disagree permanently, and the balance sheet a liquidation is worked from is the wrong one. _(Worked by Lilian.)_
- 2026-08-18 — **2024 was a SHORT TAX YEAR, and that is what the depreciation method turns on.**
  The company was incorporated **30 May 2024**, so its first tax year ended 31 December without
  ever being a full twelve months. 🔑 **The rule that matters, verbatim from Pub 946 ch. 4:**
  *"You cannot use the MACRS percentage tables to determine depreciation for a short tax year."*
  So the percentage tables are not merely a poor benchmark for this company — they were never
  available, and the register's **remaining-basis** computation (adjusted basis at the start of the
  year × the applicable rate) is the required method. **That is the convention 2025 follows and
  2026 must keep.**
  ⓘ **What the arithmetic establishes, and what it does not.** A full-year 200DB figure ×
  **3.5/12** reproduces the 2024 filed figures **exactly on all three assets** — which identifies
  the convention the prior return used, and that is all it identifies. It does **not** establish
  that the fraction was right, because reproducing a filed number only tells you which method
  produced it. **We take no position on the 2024 return either way** — it is closed, Julia prepared
  it, and it is out of scope. The 2025 figures are unaffected: they run off the accumulated
  depreciation actually claimed, which is a fact off the filed return.
  ⚠️ **One thing for Lilian to decide, and only because 2026 is the FINAL return.** Pub 946 counts
  a short year in **whole months, including a partial one** *("if the short tax year includes part
  of a month, you generally include the full month")* — its own example treats a company
  incorporated **15 March** as having a **10**-month year. Counted that way Kolo's first year is
  **8** months, not 7. **This is flagged, not acted on**, because the year it affects is closed;
  it is here because **disposal gain or loss on liquidation is computed from accumulated
  depreciation**, so it is worth her eye before the final return, not before this one.
  _(Worked by Lilian.)_
- 2026-08-18 — **The 2025 Form 1120-S is prepared, and the whole working paper is now in the repo.**
  Lilian filled the return in ATX from the figures this session produced, and the filed copy was
  read back and checked line by line: **every tie-out passes** — Box F = Schedule L 15 = 27, M-1
  line 8 = Schedule K 18, M-2 line 8 = Schedule L 24, and Form 7203 line 6 below line 5 (no
  distribution above basis, loss fully deductible). Three items were left open at filing: a
  **page-1 line 15/16 placement** to confirm on screen, the **signature title**, and the
  **1099 question** on Contract Labor. ⚠️ **A presentation choice worth knowing:** ATX put the
  return on a **tax-basis** Schedule L — accumulated depreciation carries the 2025 figure and M-1
  line 1 is the matching adjusted number with no line 6a — so **the filed Schedule L does not
  equal QuickBooks** by the year's depreciation. Internally consistent, and deliberate.
  🔑 **Everything — every line, every figure, every decision and the carry-forward into the 2026
  FINAL return — is in `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md`.**
  That file exists because this session gets deleted; **the figures live there and not here**, which
  is the split the new folder establishes. _(Worked by Lilian.)_
- 2026-08-17 — **The 2024 filed return was read a second time and closed six open questions at
  once** (through the redactor, that one year only): 1125-A line 9a is **Cost**; ownership was
  **50/50**; the shareholder money is **contributed capital, not loans** (Schedule L line 19 blank
  *and* both K-1 loan boxes blank); and the header constants. It also produced the Schedule L
  equity convention that a session would otherwise have guessed wrong — **a small capital-stock figure with
  both shareholders' capital swept into line 24 Retained earnings**, which forces the contributions
  through **M-2 line 3** for L-24 to keep agreeing with M-2-8. All four are now §5/§8A material in
  the [SOP](../../sops/form-1120s-preparation.md). ⚠️ **What it did NOT settle is when Ihor Naum
  left** — his 2024 K-1 is marked **`Final`** while box H shows him still holding **50 of 100
  shares at 31 Dec 2024** and box G gives him a full **50%**. The two point opposite ways. _(Worked
  by Lilian. Per her standing instruction the 2024 return is **not** being reviewed — this is §3's
  build-the-map-from-the-prior-year read, and the ambiguity is reported because 2025 inherits it.)_
- 2026-08-17 — **Three facts from Lilian that change the return, and one that closes the client.**
  (a) **The company has CLOSED**, and its QuickBooks is disconnected as a result — so there is no
  longer any read path to the books from a session (§1, Outstanding). (b) **The security deposit
  was never lost**: the landlord carried it to a *new* warehouse under the same landlord and it is
  refundable on exit. ⛔ **The conclusion drawn from that — that the books zeroing it was an error
  to reverse — was SUPERSEDED the same day: Lilian ruled the entry STANDS. See §5.** (c) **No
  merchandise was bought in 2025, but a physical inventory count was taken** because the prior
  inventory carried errors. ⛔ **ALSO SUPERSEDED, see §5:** the figure that fell out of 1125-A
  line 2 turned out to be **two real `United Porte` purchase invoices** booked straight to cost of
  sales, so it **is** evidence of purchases — and the count is reflected through the **unit
  quantity**, not a missing adjustment. _(Worked by Lilian.)_
- 2026-08-17 — **The 2025 general ledger arrived and settled every remaining figure.** ⚠️ The first
  export came out **Cash Basis** while the P&L and balance sheet were **Accrual**; the two were
  compared account by account before anything was relied on — **identical to the cent**, because
  this client has no receivables and no payables — and Lilian re-sent the accrual copy anyway.
  What it settled: the security-deposit write-off went to **Store Rent** — which Lilian then ruled
  **correct and standing** (§5), so it is not reversed; the
  1125-A line-2 residual is **two `United Porte` invoices booked straight to cost of sales**, the
  pass-through door line, so **nothing needs correcting and both "we bought nothing" and the
  ledger were right**; **one owner took real distributions** against a larger figure of
  contributions, which the netted account had been hiding _(⚠️ **and on 2026-08-20 Lilian decided the
  RETURN reports them net anyway** — the discovery stands, the presentation changed)_; **Ihor's account did not move at all**;
  and `Refreshments (Tax Review)` is **Primo Water office water and coffee**, which makes it a
  judgment call rather than a fact. It also surfaced what the books do **not** contain: **no entry
  anywhere for the physical inventory count.** All nine forms were recomputed from it and delivered
  in chat. Four lessons went into the [SOP](../../sops/form-1120s-preparation.md) — the
  pass-through case in §4, the gross-not-net rule for shareholder accounts, asking for the general
  ledger up front, and checking the basis printed on every export. _(Worked by Lilian.)_
- 2026-08-20 — **THE SHAREHOLDER'S BASIS FORM WAS READ BACK ON THE PERSONAL RETURN AND IS STILL
  WRONG — for the second time, from a different cause.** The first was a missing input; this one is a
  **transposition in a typed input**. ✅ Everything else on that form is now correct, including the
  netted presentation. 🔑 **Both errors produced a form that footed perfectly**, because a computed
  line always agrees with whatever fed it. ⛔ **The company's own return has not been read back at
  all**, and the equivalent figure on its Schedule M-2 must be checked digit by digit for the same
  keystroke — there it would show up as the accumulated-adjustments balance no longer agreeing with
  the balance sheet.
- 2026-08-20 — **THE RETURN REPORTS THE SHAREHOLDER ACCOUNT NET — JULIA's decision, relayed by
  Lilian, and it is FIRM POLICY rather than a ruling on this one return.** Where a shareholder's
  contributions for the year exceed their distributions, the two are netted and distributions
  reported at zero — *"at least"* for S-corporation owners who took no reasonable salary. **This
  company is the pilot**, and the rule is written up as
  [1120-S SOP §5C-v](../../sops/form-1120s-preparation.md) with **five gates** that must all pass
  first. Here the money in
  and the money out are netted, so the 2025 return shows **one contribution and no distributions**
  rather than the two directions separately. ✅ **The books support the figure** — a single named
  capital account, and the net is the ledger's own total for it. ✅ **Arithmetically neutral**: the
  accumulated-adjustments balance, every line of the balance sheet and the shareholder's ending stock
  basis are identical either way, and **no tax moves on either return** — ⚠️ **a neutrality that
  depends on there being no accumulated E&P**, since with it a distribution above the AAA would be a
  dividend and the netting would suppress that ordering. 🔴 **What it costs, recorded so nobody signs
  it unaware:** the return **asserts that no distributions were made** when money did reach the
  shareholder, and his own basis form asserts a contribution smaller than what he contributed —
  **two statutory lines, on two signed returns.** ⛔ **"The prior year reported no distributions" is
  NOT support for it**, and was struck from a first draft: that is exactly the inference this client's
  own analysis forbids and the firm's SOP states as doctrine — a blank prior-year line is a *result*,
  not a convention, and 2024's came from netting round trips in a start-up year while 2025 is a
  wind-down whose outflows include personal spending that cannot be netted against anything.
  ⚠️ **It reverses the 2026-08-19 position**, and the conflict with the firm's SOP — a rule that came
  from this very client — was resolved the same day: 🔵 **Julia made it the general rule** (SOP
  §5C-v), scoped to owners whose contributions exceed their distributions and who took no reasonable
  salary, and barred where there is accumulated E&P. **This client is the pilot.** 🛑 **The ATX file predates the decision** and
  still carries the gross figures; **three fields must be re-keyed before transmission**, now the
  fourth blocker on this return. _(Worked by Lilian.)_
- 2026-08-19 — **The shareholder capital account was split again, from scratch, and it held.**
  Lilian asked for the contributions and the distributions to be separated out of the single
  `Mykola Kozlovskiy` account in the 2025 general ledger — the same question answered on 2026-08-17,
  re-run from the export alone without reading the working paper first. **Both figures reproduced to
  the cent**, tie to the ledger's own account total and to the printed closing balance, and 100% of
  the account's lines are accounted for on one side or the other — which re-verifies the arithmetic
  and the split, though not how any individual line was classified. Two things the second pass added,
  now in the working paper (`projects/tax-returns/kolo-florida-inc/2025-form-1120s.md` §3B): the
  split is broken out **by month and by the nature of each side**, and a soft spot was named on the
  **contribution** side — three counter deposits with no transfer trail are booked as capital on
  nothing but their classification, and would be **revenue** if they were takings. 🛑 **That item is
  now a third blocker on the return, not a footnote**: the independent review of the change caught
  that the first draft had dismissed it using basis headroom, which is the wrong test — basis decides
  whether a *distribution* is taxable, not whether a *receipt* is income. Reclassified, it is a large
  share of the year's gross receipts and reaches the owner's own return. **Lilian has to close it,**
  either by confirming he made those three deposits or from the bank statement. The distributions
  themselves are **95% straight transfers to the owner's own personal accounts**, and the two items
  still open beside them are under 4% of the total. _(Worked by Lilian.)_

### Wind-down — what has to be closed (CI-only)
- [ ] **Florida sales-tax account** — file July 2026 (Lilian), then close the FL DOR account.
- [ ] **Gusto subscription** — the client's own payroll platform; cancel.
- [ ] The remaining systems in §3 — Shopify, the Florida DOR e-Services access, GovFile, TaxDome
      (legacy) — decide for each whether it closes with the company or belongs to the owner.
- [ ] **City of Lauderhill Certificate of Use / BTR** (valid through 2026-09-30) — confirm whether a
      closing business must notify the city rather than simply let it lapse.
- [ ] **Both principals' workers'-comp exemptions** — no renewal needed if the company closes;
      confirm nothing has to be filed to withdraw them.
- [ ] **Final 1120-S and the 2025 organizer** (reverted to draft 2026-07-31) — settle what the final
      return needs, including whether it is a short/final-year return.
- [ ] **The owner's individual 1040 engagement continues** — confirm with Lilian and keep it distinct.
- [ ] **Double record** — archive it once the closures are done (and drop this client from the
      weekend sweep scope at that point, not before).

### Outstanding items (CI-only — never in the SOP)
<!-- This exact heading is what the client-card render looks up. Renaming it makes
     every row below vanish from the team's view. -->

**Blocking the 2025 Form 1120-S** — ⚠️ **QuickBooks is gone, so every remaining figure has to be
exported by Lilian.** The company has closed and its QBO is disconnected (§1), confirmed
2026-08-17 from both routes: Double returns `platform: "none"` and refuses the reports outright
(*"This tool is unavailable for None clients"*), and the firm's own Intuit QuickBooks connector is
authorised on **JK Accounting Group**, not on a client. There is no read path left.

- [x] **2025 General Ledger — RECEIVED 2026-08-17**, and it closed four rows at once. ⚠️ The first
      export came out **Cash Basis** while the P&L and balance sheet were **Accrual**; every account
      total matched to the cent (no receivables, no payables), and Lilian re-sent the accrual copy.
      Checked, not assumed.
- [x] **`Security Deposit` → credited to Store Rent** by a 31-Dec journal entry (Julia's).
      **Lilian ruled it correct on 2026-08-17 — it stands, do not reverse** (§5).
- [x] **`Inventory` → one entry all year**, the cost-of-sales relief. The line-2 residual is two
      `United Porte` invoices in COGS — the pass-through door line, correctly booked (§5). ✅ And the physical count **is** reflected —
      through the unit quantity inside that entry, not a separate adjusting entry (§5).
- [x] **`Mykola Kozlovskiy` → 79 movements, contributions in and distributions out.** **There WERE
      distributions**, netted inside the account exactly as suspected — **that is a fact about the
      BOOKS and it stands.** 🔴 **What the 2025 return reports is a separate decision taken
      2026-08-20: NET — one contribution, no distributions**, so Schedule K 16d, K-1 box 16D and
      M-2 line 7 all carry zero and Form 7203 line 2 carries the net. The loss stays **fully
      deductible** and nothing came near basis, so no capital gain either way.
- [x] **`Ihor Naum` → zero movement in 2025.** Beginning balance only.
- [x] **`Refreshments (Tax Review)` → 50%, decided by Lilian 2026-08-17.** Primo Water office
      water/coffee (§5) joins `Meals` in the food-and-beverage base, half of the combined figure disallowed.
- [x] **Ihor Naum is OUT for 2025 — settled by Lilian, 2026-08-17.** His 2024 K-1 carries a ticked
      **`Final K-1`**, which is the prior preparer's explicit statement that it was his last one.
      So **box I = 1, one K-1 at 100%, one Form 7203.** The box governs; the 50-shares-at-year-end
      reading on the same K-1 was raised and she ruled on it. ⓘ **No figure moves** — the equity
      sweep convention (§5) puts every capital account inside Schedule L line 24 regardless of
      whose it is, so his capital sitting untouched on the 2025 balance sheet changes nothing on
      this return. It may matter in **2026**, the final year: whatever Mykola paid him for the
      shares is Mykola's **outside** basis, is nowhere in the company's books, and decides the gain
      or loss on liquidation. The general rule is now
      [SOP §3A](../../sops/form-1120s-preparation.md).
- [ ] **Are the BAI-branded lines Kolo's own stock?** They are tracked, unlike the intermediary
      kitchen/door lines, and they are among the largest lines by value (§5).
- [ ] **Is the warehouse lease still running?** Four fifths of 2025's expenses and the largest
      remaining exposure of the wind-down after the inventory (§5).
- [ ] Fiscal year-end
- [ ] Confirm (or rule out) the "MegaBAI Florida Corp" relationship in §5
- [x] Industry / what they do — **retail e-commerce via the Shopify store "KOLO HOUSE"** plus a
      leased Broward warehouse _(2026-08-01)_
- [x] Which recurring services we provided — bookkeeping (quarterly), sales tax (monthly), income
      tax (1120-S), 1099 prep, annual report; payroll was **never** a firm service _(2026-08-01)_
- [x] Sales-tax cadence — **monthly**, settled by Lilian 2026-08-11

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706626](https://app.doublehq.com/close?cid=706626)
- **Related clients:** [`ihor-naum-olha-levchuk.md`](./ihor-naum-olha-levchuk.md) (one of
  the individuals holds a Florida workers'-comp Certificate of Election to be Exempt for
  this company), [`aura-remodeling.md`](./aura-remodeling.md) — same owner group.
- **Google Drive folder (sensitive vault):** [Kolo Florida Inc folder](https://drive.google.com/drive/folders/1iK4p0Zrht0fCpvRtqRxYtbwikvYPkceO) _(best candidate — other similarly-titled folders also exist; confirm canonical with Julia)_
- **Recurring-expense watchlist:** [Kolo Florida — Recurring Watchlist (Google Doc)](https://docs.google.com/document/d/1cGgStq2Yd6dluxC8IhaCkYAbdM22VdXs1ej1qsgJRRQ/edit)
- **Related SOPs:** _(pending — none yet)_
