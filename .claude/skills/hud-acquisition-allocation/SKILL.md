---
name: hud-acquisition-allocation
description: Turn a real-estate closing package into the acquisition entry a return can be built on — split the purchase price between LAND and BUILDING, capitalise the right closing costs, expense the rest, and prove every figure back to the settlement statement. Use when someone hands over a HUD-1 or ALTA settlement statement, a closing disclosure, or a warranty deed and asks for "the HUD tool", an acquisition allocation, a land/building split, a depreciable basis, or the opening journal entry for a property an entity bought. Drives the Bodner & Clark "HUD Tool v3 (Investor)" workbook the firm's property clients use. Encodes the four-bucket model (building basis · loan basis · expensed now · escrow), the settlement-statement-to-cell map, the three reconciliations that must land on exactly $0 before anything is delivered, and the traps that have actually bitten — a buyer CREDIT booked as a cost, a printed sub-detail that disagrees with the charged column, and an assessor card read for two numbers while the rest of it said the entity had already SOLD the property. 🛑 Carries the gate the workbook cannot apply itself: was the property ever PLACED IN SERVICE? A buy-renovate-sell has no depreciation at all, and the tool will compute a schedule for one without complaint. Client figures are delivered in the filled workbook and never committed.
---

# HUD acquisition allocation — split the price, then prove it

A settlement statement plus a property card will give you a depreciation schedule in about ten
minutes. **Most of the risk in this job is not arithmetic** — the workbook's formulas are sound
and they tie themselves. The risk is upstream: coding a credit as a cost, splitting on the wrong
year's assessment, and computing depreciation for a property that was never a rental.

## Why this skill exists

The firm's property clients — the Vitaliy Vasyutyk group is the first, and it forms a new
single-purpose LLC every season — buy a parcel, and each first return needs the same three
things: **a land/building split, a depreciable basis, and an opening journal entry that
balances.** The inputs are always the same two documents and the traps are always the same.

> **Zumfi 1 LLC (the pilot, Sept 2026).** A cash purchase of a 1968 single-family house in
> Chattanooga, closed August 2025. The settlement statement coded cleanly and all three
> reconciliations landed on zero the first time. **The county property card, fetched purely to
> get the two assessment numbers, turned out to say the LLC had sold the property eleven months
> later** — to a named individual buyer, for nearly double what it paid. Nothing in the closing
> package hinted at it, and the split that had just been computed was a split of a **current**
> assessment that post-dated both a probable renovation and the resale. **Read the whole card.**

## Guardrails

- **Read-only on everything.** This skill computes and hands over a workbook. It writes nothing
  to Double, nothing to the client's systems, and no dollar figure into this repo.
- **The filled workbook goes to the user, never into git.** Client figures live in the workbook,
  in Double and in Drive. If figures must be written down in the repo at all, the only place is a
  [`projects/tax-returns/`](../../../projects/tax-returns/) working paper — see CLAUDE.md.
- **The client-intelligence file still gets the FACTS** (what was bought, where, when, cash or
  financed, what the card revealed) — no dollar figures, per the two-data-homes rule. That write
  is unprompted and part of finishing the job.
- **Nothing here is a tax conclusion.** This skill says where each number comes from and what to
  ask. Where it names a treatment question — dealer property, §263A, recapture, §164(d) — it is
  naming the question. 🛑 **Any answer that changes a figure is read off current authority, not
  from memory** (CLAUDE.md's pull-the-PDF rule).

## The four-bucket model — the whole of it

Every dollar on a settlement statement lands in exactly one of four buckets, and the workbook's
four numbered sections **are** those buckets:

| § | Bucket | What it does | Typical members |
|---|---|---|---|
| **1** | **Facilitative → building basis** | Capitalised, depreciated with the building | title, escrow/closing fee, recording, transfer tax/stamps, survey, broker fee, attorney, wire fee |
| **2** | **Loan costs → loan basis** | Capitalised, **amortised over the loan term** — not the building's life | points, origination, appraisal *required by the lender*, credit report, flood cert, mortgage stamps/intangible tax |
| **3** | **Operating costs** | **Expensed immediately** | property taxes actually **paid** at closing, prorated (daily) interest, the insurance premium, HOA dues |
| **4** | **Escrow deposits** | A **current asset** — the lender is holding the client's money | insurance, mortgage insurance and tax reserves deposited with the lender |

🔴 **And a fifth block that is NOT a bucket: "Reductions to Amount Due."** Earnest money, loan
proceeds, seller credits, security deposits, prorated rent and **prorated taxes credited by the
seller** all sit here. **These are how the deal was FUNDED, not what it COST.** Miscoding one as
a §1–§4 cost is the single most common way to break this workbook.

## Step 0 — Establish what you are actually looking at

1. **Which statement form?** A **HUD-1** (sections J/K, lines 100–1400), an **ALTA Settlement
   Statement**, or a **Closing Disclosure** (post-2015 consumer loans). They carry the same
   information in different boxes. People call all three "the HUD" — read the header, don't
   assume the line numbers.
2. **Is there a lender?** Box F blank, HUD line 202 blank and the 800/900/1000 blocks empty
   means a **cash purchase**. Then §2, §3 and §4 are all zero, and that is **an answer, not an
   omission** — say so in the delivery or it reads as unfinished work.
3. **Read the deed alongside it.** It confirms the buying entity's exact legal name and state,
   the legal description, and the stated consideration. A consideration that disagrees with the
   contract sales price is a finding, not a rounding difference.
4. **Whose costs are these?** The statement has a buyer column and a seller column. **Only the
   buyer's column is ours.** A charge in the seller's column is the seller's, however tempting.

## Step 1 — Header

| Workbook | Take it from |
|---|---|
| LLC Name | the deed's grantee / statement §D — the **exact** registered name |
| EIN | Double's `EIN / Tax ID` property, the SS-4, or ask. Often simply absent |
| Property street / city-state-zip | statement §G |
| **Property Type** | **`Residential` or `Non-Residential` — this picks 27.5 vs 39 years.** Corroborate it (Step 3), never eyeball it |
| Purchase Date | the **settlement date**, not the deed's execution date when they differ |
| **Placed in Service Date** | ⛔ **NOT in any closing document. Ask.** See Step 5 |
| Contract Purchase Price | statement line 101 |

## Step 2 — Code the charges

Work down the buyer's column and place every charged line. **Do not skip a line because it looks
small** — the total is what proves the coding.

**HUD-1 → workbook, the mapping that recurs:**

| HUD-1 line | Charge | Bucket |
|---|---|---|
| 700–704 | commission / broker fees charged to the buyer | §1 |
| 801–811 | anything payable in connection with the loan | §2 |
| 901 | prorated / daily interest | §3 |
| 903 | hazard insurance premium | §3 |
| 1001–1008 | reserves deposited with the lender | §4 |
| 1101 | settlement or closing fee | §1 |
| 1108 / 1110 | title insurance — **owner's** coverage | §1 |
| 1109 | title insurance — **lender's** coverage | §2 |
| 1111 | wire fee | §1 |
| 1201 | recording fees (deed) | §1 |
| 1202/1203 | city/county and state tax stamps, transfer tax | §1 |
| 1203 | **mortgage** stamps / intangible tax | §2 |
| 1301–1305 | survey, pest inspection and the rest — read each one | §1 or §2 |
| 201 | deposit / earnest money | **Reductions** |
| 202 | principal amount of new loan | **Reductions** |
| 210–212 | **taxes UNPAID by seller, credited to buyer** | **Reductions** 🔴 |
| 106–108 | taxes **PAID IN ADVANCE** by seller, reimbursed to them | §3 — the buyer really did pay this |

🔴 **Lines 106–108 and 210–212 look alike and go to opposite places.** *Paid in advance by
seller* means the seller already paid the county and the buyer is repaying them — a real cost
this year. *Unpaid by seller* means the seller hands the buyer cash and the buyer will pay the
county later — a credit and a **liability**, not an expense. Getting this backwards overstates
the deduction and breaks reconciliation 2.

⚠️ **The printed sub-detail can disagree with the charged column.** The pilot's line 1201 read
`Deed $18.00` in its descriptive text while the buyer's column charged a different, smaller
figure. **The column governs.** The proof is Step 4: if the sub-detail were right the total
would not tie.

## Step 3 — The land/building split

**No closing document contains it.** It comes from the county assessor's property card, and it
is the one input a session usually cannot fetch itself.

⚠️ **On the firm's cloud environments, county assessor sites are blocked by the network egress
policy** (`assessor.hamiltontn.gov` and every other county site tried, Sept 2026). **Ask for the
card as a PDF or a screenshot.** Never invent a split, and never fall back on a rule of thumb —
"20% land" is not a method, it is a number waiting to be disallowed.

**The workbook takes the card's raw LAND and BUILDING values and uses only their RATIO**, which
it then applies to the actual purchase price. So the card's absolute values need not equal what
was paid, and usually will not.

**Four checks before you use the card:**

1. ✅ **Right parcel.** Match the card's **legal description** against the deed's, word for word —
   lot, subdivision, unit, plat book and page. The address alone is not enough.
2. ✅ **The card's own arithmetic.** `land + building + extra features = total`. If the card
   carries an **Extra Features** value, decide where it goes rather than dropping it — it is
   usually an improvement, not land.
3. ✅ **The classification corroborates Step 1's Property Type.** In Tennessee the assessed value
   is **25% of the appraisal for residential** and **40% for commercial**; `assessed ÷ total`
   therefore confirms which one the county thinks it is. Other states have their own ratios —
   check rather than transplant this one.
4. 🔴 **WHICH YEAR is this card?** A card fetched today is the **current** assessment. The
   defensible split is the ratio **for the year of acquisition**. When the property has been
   renovated, reassessed or resold since, the current card describes a different building from
   the one that was bought. **Say which year the card is, and if it is not the acquisition year,
   say so in the delivery and offer to pull the right one.**

### 🛑 And READ THE WHOLE CARD

This is the pilot's lesson and it is the reason this section is not three lines long. The card is
fetched for two numbers, so two numbers are what gets read. **The rest of it is a free public
record of what happened to this property**, and on the very first use it carried:

- a **current owner who was not our client** — the entity had sold it;
- the **sale date and price** on the way out;
- our client named as the **grantor**;
- the sale's **book and page** reference, enough to pull the deed.

**Check, every time: is the owner still our client?** If not, the engagement in front of you is
not only an acquisition — there is a **disposal** on a later return, and whoever asked for this
may not know it yet.

## Step 4 — The three reconciliations ARE the proof

The workbook has three "pull from settlement statement" cells. Enter the statement's own totals
and all three differences must read **exactly $0.00**:

| Check | Workbook | HUD-1 |
|---|---|---|
| 1 | total due from buyer at closing | line 120 — gross amount due from buyer |
| 2 | total paid by buyer at closing | line 220 — total paid by/for buyer |
| 3 | cash to close from buyer | line 303 — cash from buyer |

⛔ **Do not deliver on a non-zero.** A non-zero is not a rounding issue — it means a charge is in
the wrong bucket, is missing, or was entered in the Reductions block by mistake. Find it.

ⓘ These three tie **independently of the land/building split**, so they can be cleared before the
assessor card arrives — which is exactly how to sequence the work when the card is being chased.

Then two more, free:

- **§1's total equals the statement's total settlement charges** (HUD line 1400) on a cash deal
  where every charge is facilitative. When there is a loan it equals 1400 **minus** what went to
  §2/§3/§4 — compute it, don't assume it.
- **The acquisition journal entry balances** — the workbook totals debits and credits and shows
  the difference. It should be zero.

## Step 5 — 🛑 The gate the workbook cannot apply: was it ever placed in service?

The workbook computes a depreciation schedule the moment it has a building basis. **It has no
idea whether the property is depreciable at all.**

**Depreciation starts when the property is ready AND available for its intended use — not when
it was bought.** For a house acquired to rent, that is when it was habitable and actually on the
market to tenants. A renovation between closing and first tenant moves the date, sometimes into
a later tax year.

🔴 **And if the entity bought, renovated and SOLD without ever renting it, the question is not
*when* depreciation starts — it is whether there is any.** Property held for sale is not
depreciable, and the whole character of the return changes: what looks like a §1231 asset with
recapture may be **inventory, and the gain ordinary**. The tells, all visible here:

- a short hold, especially under a year;
- a large spread between purchase and sale;
- a group whose stated business is renovation;
- no rent anywhere in the books;
- a sibling entity that holds and one that flips.

⛔ **A session must not decide this.** Establish the facts, put the question, and say plainly
that the depreciation half of the workbook is provisional until it is answered. **The land /
building allocation is still worth having either way** — it is the acquisition entry and the
balance sheet — but a depreciation schedule handed over without this question asked is a defect.

### ⚖️ THE TOOL'S OWN FOUR SECTIONS ARE THE DECISION RULE — use them

_(Julia, 2026-09-13, when a draft had capitalised the carrying costs of a flip: **"reference the HUD tool… you should be
using that as guidance to know whether you can expense something or not."**)_

The section headings are not labels, they are the answer:

| § | Heading, verbatim | So |
|---|---|---|
| 1 | *FACILITATIVE COSTS — **Added to Basis of Building*** | capitalise |
| 2 | *LOAN COSTS — **Added to Basis of Loan*** | capitalise, amortise over the loan |
| 3 | *OPERATING COSTS — **Expensed Immediately*** | **expense** |
| 4 | *ESCROW COSTS — **Deposits to Escrow Account*** | an asset |

🔑 **§3's four lines settle the argument that comes up on every held property: `Property Taxes Paid` ·
`Prorated Interest (Daily Interest)` · `Homeowners Insurance Premium` · `HOA/Condo Fees Paid`.** Those are
**expensed**, and they are expensed **even on a flip that is being renovated for sale**.

⚠️ **Do not reason your way past this into a §263A capitalisation argument.** A session did exactly that and was
corrected. **Costs not named in the tool are placed by CHARACTER**: utilities go with §3 *(operating, same
character as the named four)*; travel and lodging during the acquisition go with §1 *(facilitative)*, as do the
**inspection** (`B39`) and the **wire fee** (`B34`), which the tool lists in §1 **by name**.

⛔ **And a renovation is not in the tool at all** — it is an improvement to the asset and capitalises regardless.

### 🔴 If it IS a flip: §263A, and the trap that the LOSS itself springs

Verified against the **2025 Form 1065 instructions** (irs.gov, 2026-09-13) — re-read them for the year you are working.

1. **§263A generally requires capitalising** costs for real property **acquired for resale** and real property
   **produced** (renovated) for sale. A flip is squarely inside it.
2. Those costs **"aren't deductible until the property to which the costs relate is sold, used, or otherwise
   disposed of."** So they sit on the balance sheet until the sale year.
3. **There is an exception:** a **small business taxpayer** may adopt a method **not** to capitalise under
   **§263A(i)**. For 2025 that is average annual gross receipts **≤ $31 million** for the prior three years
   **and not a tax shelter** under §448(d)(3). A small property LLC clears the receipts half easily.
4. 🛑 **The second half is where it bites. A "syndicate" IS a tax shelter, and a syndicate is a partnership
   where MORE THAN 35% OF THE LOSSES for the tax year are allocated to limited partners or limited
   entrepreneurs** — a limited entrepreneur being someone who does not actively participate in management.
5. **A tax shelter loses the small-business exemptions** — §263A(i), §471(c), §163(j)(3), §460(e)(1)(B) — **and
   the cash method.**

🔑 **Read 3–5 together and the shape is: the test turns on how the LOSS is allocated, so reporting a loss is
what switches the test on.** Expense more → bigger loss → more of it allocated to any inactive member → the
entity becomes a syndicate → §263A becomes mandatory → the deductions disappear anyway. **The bigger the loss
you reach for, the more likely you lose the right to it.**

⚠️ **So check who actually participates before expensing carrying costs on a flip partnership**, and note that
the §448 regulations allow an **annual election to test the syndicate question on the PRIOR year's
allocations** instead of the current year's — made on the **timely filed original return including
extensions**, so it is still open while a return is on extension.

ⓘ **And most of the time this is a small question**, because the purchase and the renovation capitalise by
their nature rather than by election — often 95%+ of the spend. What is actually in play is only the carrying
costs and bank charges. **Say that out loud**: it stops a discussion about "can we take a loss" from feeling
bigger than the dollars involved.

### Property tax: the closing proration is NOT the year-end liability

🛑 **A closing proration tells you what the SELLER owed. It never tells you what the COMPANY owes at year end.**
Two different numbers, and only the second belongs on a balance sheet.

1. **Pull the county's own record** *(the Trustee / collector site)* for the actual bill, and **check whether it
   was ever PAID**. A property bought mid-year is routinely still unpaid at 31 December.
2. **The payable is the WHOLE unpaid bill**, not the closing credit — the company owes the taxing authority the
   lot, and the credit merely funded part of it.
3. **Apportion under §164(d)**: the seller bears the days up to the sale date, the company the rest. The
   company's share is the §3 expense. **The closing figure was an estimate** — it is set before the bill exists —
   so expect a small true-up, which adjusts the property cost.
4. 🔑 **If the county record is missing a year, a LATER closing statement often carries it.** On the pilot, the
   2025 city bill was nowhere to be found until the **2026 ALTA** showed both years' bills being paid out of the
   sale — and the same statement's 2026 proration, run backwards, gave the city bill's amount, **with the county
   proration as the control that proved the method.**

### 🔴 CHANGE THE MAILING ADDRESS AFTER EVERY CLOSING

**A title company prorates the tax at closing. It does NOT redirect the bill.** Two different jobs, and only the
first happens automatically. ⚠️ On the pilot, the county was **still mailing to the late former owner** months
after the sale, so **both 2025 bills went unpaid until the next closing cleared them — with interest on each.**
**Add it to the post-closing checklist for every property, county AND city.**

### Schedule L is usually NOT required — check before building one

Form 1065 **Schedule B question 4**: answer Yes if **all four** hold — total receipts **< $250,000**, total
assets at year end **< $1,000,000**, K-1s filed and furnished by the due date **including extensions**, and no
Schedule M-3 requirement. Then *"the partnership is not required to complete Schedules L, M-1, and M-2; item F
on page 1 of Form 1065; or item L on Schedule K-1."*

**Prepare the balance sheet anyway** — the year the property sells needs the opening figures — but say plainly
that it is not a filing requirement, so nobody spends a day reconciling something the return will not carry.

### 🔴 A PARTNER WITH NO CAPITAL HAS NO BASIS — and on a CASH purchase there is no debt to give him any

**§704(d) allows a partner's share of loss only up to his outside basis.** On a cash-purchase property partnership
there is **no entity debt**, so a partner who contributed nothing has **zero basis** and **his share of the loss is
suspended at his own level** — the K-1 still reports it, but he cannot deduct it.

⚠️ **This is the NORMAL case here, not an edge case**, because these deals are routinely all-cash and one partner
routinely brings only the work. **Check it every time a property partnership reports a loss**, and check it
separately from §704(b): the substantial-economic-effect question is about whether the ALLOCATION stands, and the
basis question is about whether the partner can USE it. **A draft flagged §704(b) and missed §704(d) entirely** —
caught only by an independent review.

ⓘ And where a partner takes a profit share for services with no capital, note the **profits-interest vs capital-interest**
question (Rev. Proc. 93-27 / §83) — a pure profits interest is generally not taxable on receipt; a capital interest is.

### Two habits the same review is worth keeping

🔑 **Say which figures are OBSERVED, which are DERIVED and which are ASSUMED — on the deliverable, not just in your
head.** The review's sharpest structural criticism was that residuals were presented as facts. A short
*"proven vs assumed"* tab costs nothing and is what makes the rest trustworthy. ⚠️ **In particular, reconcile a
derived figure against any observed figure that speaks to it** — on the pilot a back-solved tax base was never
checked against the one payment actually recorded for it, and there turned out to be **three** candidate numbers in
the file, none of them a bill.

⚠️ **And when you commission an independent review, give it the RULINGS as well as the documents.** A third of the
pilot's findings re-opened questions the signer had already decided, because the reviewer had the source files but
not the conversation. ⛔ **Judge each finding on whether it survives that context — not on how confidently it is
written.** Where it correctly describes a ruling as an assumption, the fix is usually not to change the number but
to make the deliverable **read as a ruling** rather than as an observed fact.

## What to ask

Group these and send once, per [`method.md`](../../../projects/pre-return-review/method.md):

1. **Was the property rented?** If yes — **from what date was it available to tenants?** If no —
   what was it bought for, and what happened to it?
2. **Was work done on it between closing and first use?** How much, and when did it finish?
   (Improvements are their own basis addition with their own in-service date; repairs to get a
   property ready for first use are generally not a current deduction.)
3. **The EIN**, if the firm does not hold it.
4. **The prior year's depreciation schedule**, if the entity already owned anything.
5. **If the card shows a disposal:** the closing package for the sale, and whether any other
   entity in the group was involved.

## The delivery

- **The filled workbook goes to the user** via the file tool, named for the entity, the property
  and the closing date. ⛔ **Never committed.**
- **In chat**, say: what was filled and the line it came from; the split with **both percentages**;
  the land basis and the depreciable building basis; the **annual depreciation**; the three
  reconciliations and that they are zero; every open input, named; and the flags.
- **State the conventions the workbook applies rather than letting them pass as computation** —
  the two worth naming every time: it loads **100% of facilitative costs onto the building and
  none onto land**, and it books a seller tax credit as a **payable** rather than as a
  purchase-price adjustment.
- **Then the client-intelligence write**, unprompted — facts, no figures.

## Update this skill when…

- **The year changes.** §263A's small-business threshold is indexed and the Schedule B question 4 figures can move — **re-read the current Form 1065 and its instructions** rather than trusting the numbers quoted above.
- **A financed purchase runs through it.** The pilot was all cash, so §2 and §4 have never been
  exercised on real data and the loan-cost mapping above is from the workbook's own labels, not
  from a statement the firm has coded.
- **An ALTA statement or a Closing Disclosure runs through it** — add its box map beside the
  HUD-1's, since the line numbers do not carry over.
- **A property outside Tennessee runs through it** — Step 3's 25%/40% corroboration is a
  Tennessee rule and needs its local equivalent.
- **Julia or Lilian rules on the placed-in-service / dealer-property question** for this group.
  Write the ruling in, so the next session does not have to reason (CLAUDE.md: *a permission —
  and a treatment — is settled by asking, never by reasoning*).
- **The firm decides where an acquisition allocation is recorded durably.** Today the figures
  live only in the delivered workbook; a [`projects/tax-returns/`](../../../projects/tax-returns/)
  working paper is the repo's only sanctioned home for them.
- **The county egress block lifts**, or a route to assessor data becomes available — Step 3's
  "ask a person" changes.
- **Bodner & Clark ship a new version of the workbook.** It is dated in its own footer and the
  firm does not control it; re-read the cell references before trusting this map.
