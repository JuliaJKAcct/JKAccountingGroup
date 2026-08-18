# Preparing a Form 1120-S (S-corporation return) — from QuickBooks to a filed return

> **Status:** 🟡 **DRAFT — in review with Lilian.** Written 2026-08-14 while preparing the
> firm's first 1120-S with a session assisting, and shaped by what a first-time preparer
> actually needed to be told. **Remove this note when Lilian signs it off.** ·
> **Owner:** Lilian · **Last updated:** 2026-08-17

> **Client data lives in the firm's systems, not here.** Names, EINs, figures, balances and
> filled-in worksheets belong in Google Drive / Double / QuickBooks. This SOP carries the
> **procedure and the line map** only — every amount below is a placeholder.

> **The skill that maintains this, and that writes the next one:**
> [`tax-return-sop`](../../.claude/skills/tax-return-sop/). One SOP per form; this is the reference.

> **Who this is written for.** Someone preparing an S-corporation return **for the first
> time**, who knows bookkeeping but has not filled in a 1120-S. It explains *where each
> number comes from*, not just which box it goes in — because the boxes are the easy part.

---

## The process at a glance

```mermaid
flowchart TD
    A["① Gather · prior-year FILED return<br/>+ this year's and last year's QuickBooks"] --> B{"② Extension filed?<br/>(Form 7004)"}
    B -->|"No — and it is past 15 March"| B1["🛑 STOP. Tell Lilian.<br/>Penalties accrue per shareholder per month"]
    B -->|"Yes"| C["③ BUILD THE MAP<br/>Reproduce LAST year's return<br/>from LAST year's QuickBooks"]
    C --> D{"Does your reconstruction<br/>match what was filed?"}
    D -->|"No"| C1["Find out why.<br/>The difference IS the firm's convention"]
    C1 --> C
    D -->|"Yes — line by line"| E["④ Form 1125-A<br/>Cost of goods sold"]
    E --> F["⑤ Form 1120-S page 1<br/>Income, then deductions"]
    F --> G["⑥ Schedule B<br/>(answers can remove work)"]
    G --> H["⑦ Schedules L · M-1 · M-2"]
    H --> I["⑧ Schedule K<br/>the pass-through items"]
    I --> J["⑨ Form 7203 per shareholder<br/>BASIS — can the loss be deducted?"]
    J --> K["⑩ Schedule K-1 per shareholder"]
    K --> L{"⑪ Do the tie-out checks<br/>in §14 all pass?"}
    L -->|"No"| L1["Go back. A tie-out that fails<br/>is a mapping error, not a rounding one"]
    L1 --> E
    L -->|"Yes"| M["⑫ Review · sign · e-file<br/>Form 8879-CORP"]
    M --> N["✅ File the client's copy<br/>in Double · record it"]
```

---

## §0A · Where every number comes from, and where it goes

**Read this before anything else.** Almost every mistake on a first return is a number taken
from the wrong place, or a number that reached the right box by the wrong route. There are only
**four sources**, and everything else on the return is computed from them.

### The four sources

| # | Source | What it feeds |
|---|---|---|
| **1** | **The Profit & Loss** | Page 1 income (lines 1a, 1b, 5) and the deductions on lines 7–13, 15–18 and 20. ⚠️ **Not line 14** (Form 4562, source 4), **not line 4** (Form 4797), **not line 2** (Form 1125-A), **not line 19** (Form 7205) |
| **2** | **The Balance Sheet** at year end | 1125-A line 7 · box **F** total assets · the whole **end** column of Schedule L |
| **3** | **LAST year's FILED return** | 1125-A line 1 · the **beginning** column of Schedule L · M-2 line 1 · every convention (§3) |
| **4** | **The depreciation schedule** | Form 4562 → page 1 line 14 → M-1 line 6a |

⚠️ **Source 3 is a return, not a system.** When the books and the prior return disagree, the
prior return wins and the books get adjusted — never the other way round.

### How the numbers travel

```
  ┌─ P&L ──────────────┐  ┌─ BALANCE SHEET ────┐  ┌─ PRIOR RETURN ─────┐  ┌─ DEPR. SCHEDULE ─┐
  │ revenue, discounts │  │ inventory subtotal │  │ 1125-A line 1      │  │ cost, method,    │
  │ most expenses      │  │ cash, fixed assets │  │ Sch L BEGINNING col│  │ life, in-service │
  │ (NOT 2,4,14,19)    │  │ liabilities,equity │  │ M-2 line 1         │  │ prior depr.      │
  └─────────┬──────────┘  └─────────┬──────────┘  └─────────┬──────────┘  └────────┬─────────┘
            │                       │                       │                      │
            │                       │  ┌────────────────────┘                      │
            │                       ▼  ▼                                           ▼
            │             ┌────────────────────┐                         ┌──────────────────┐
            │             │  FORM 1125-A       │                         │  FORM 4562       │
            │             │  1 ← prior return  │                         │  depreciation    │
            │             │  7 ← balance sheet │                         └────────┬─────────┘
            │             │  6 = 1+2+3+4+5     │                                  │
            │             │  8 = 6 − 7         │                                  │
            │             │  (solve for 2 when │                                  │
            │             │   8 is the known — │                                  │
            │             │   §4, never both)  │                                  │
            │             └─────────┬──────────┘                                  │
            │                       │                                             │
            ▼                       ▼                                             ▼
  ┌──────────────────────────────────────────────────────────────────────────────────────┐
  │  FORM 1120-S, PAGE 1                                                                 │
  │   1a,1b,5 ← P&L        2 ← 1125-A line 8      3 = 1c − 2       4 ← Form 4797         │
  │   7–13,15–18 ← P&L    14 ← Form 4562         19 ← Form 7205   20 = what is left      │
  │   21 = sum 7…20        22 = 6 − 21   ◄── THE NUMBER THE RETURN PRODUCES              │
  └──────────────────────────────────────┬───────────────────────────────────────────────┘
                                         │
             ┌───────────────────────────┴────────────────┐
             ▼                                            ▼
  ┌──────────────────────────┐                ┌────────────────────────────┐
  │  SCHEDULE K              │                │  SCHEDULE M-1              │
  │  1  ← page 1 line 22     │                │  1  ← book net income      │
  │  4,9,11,12a ← P&L items  │                │  3b ← non-deductible T&E   │
  │       that NEVER touched │                │  6a ← depreciation the     │
  │       page 1             │                │       books never recorded │
  │  16c ← non-deductible    │                │  8  = 4 − 7                │
  │  18 = 1…10 − (11…12e+16f)◄────────────────┼──  MUST EQUAL Sch K line 18│
  └────────────┬─────────────┘                └────────────────────────────┘
               │
       ┌───────┴────────┬──────────────────────┐
       ▼                ▼                      ▼
  ┌──────────┐   ┌─────────────┐        ┌──────────────┐
  │ K-1 each │   │ SCHEDULE M-2│        │ FORM 7203    │
  │ = Sch K  │   │ 1 ← prior yr│        │ per SHAREHLDR│
  │   × their│   │ 4 ← the loss│        │ decides how  │
  │   share  │   │ 5 ← 16c     │        │ much of the  │
  └──────────┘   └─────────────┘        │ loss is USED │
                                        └──────────────┘
```

### The three places one number must appear twice

These are where a beginner's return most often fails to tie:

1. **Total assets** — box **F** on page 1 **and** Schedule L line 15 (end column).
2. **Ordinary business income** — page 1 line **22** **and** Schedule K line **1**.
3. **Non-deductible expenses** — Schedule K line **16c**, and again as a reduction in Schedule
   M-2 and in each shareholder's basis. ⚠️ **This one is a trail, not an identity.** M-1 line
   **3b** is *travel and entertainment* specifically; other non-deductibles go on line 3
   itemised, and line 3 also carries timing differences. Items 1 and 2 above are exact
   equalities; this one you follow rather than tie.

---

## §0B · What this return actually is

**An S-corporation normally pays no federal income tax.** It files an information return that
says: *this is what the business earned, and here is how it splits between the owners.* Each
owner then reports their share on their own 1040, through a **Schedule K-1**.

Three consequences a first-time preparer needs to hold on to:

1. **The point of the whole exercise is line 22 of page 1** — *ordinary business income
   (loss)* — plus the handful of items that must travel to the owners **separately** rather
   than inside line 22. Everything else is bookkeeping around those.
   ⚠️ **Line 22, not 21.** For tax years from 2023 the IRS inserted a new line 19 (the energy
   efficient commercial buildings deduction, Form 7205) and everything below it moved down by
   one. Anything you read — a checklist, a memory, an older SOP — that says "line 21" is
   describing **2022 or earlier**. Schedule K line 1 on the current form settles it: it says
   *"(page 1, line 22)"*.
2. **Some income and expenses never enter line 22.** Interest income, dividends, capital
   gains, §179, charitable contributions and a few others are **separately stated**: they go
   on **Schedule K** and straight to the K-1s, because each owner's own tax treatment of them
   differs. Sweeping them into line 22 is the classic beginner error.
3. **A loss is not automatically deductible by the owner.** It is limited by that owner's
   **basis** — §12. This is where a return that "looks finished" is often wrong.

> 🔑 **THE RULE THAT GOVERNS EVERYTHING BELOW: the return is not a copy of the P&L.**
> It is the P&L **regrouped** into the form's fixed categories, **plus** the adjustments where
> tax law and bookkeeping disagree. Every dollar in the books lands somewhere on the return —
> but almost never in the order QuickBooks shows it.

---

## §1 · Gather this before you start

You cannot prepare from the current year alone. **Half of this list is about the prior year**,
and that is deliberate — see §3.

- [ ] **The prior year's FILED return** (the whole package: federal, any state, the K-1s).
      Get it from the client's `Tax Return Filed` folder in Double.
      ⚠️ **Read it through the redactor** — `tools/redact-doc/` — never open the PDF directly.
      One year only. The rule and its limits are in the
      [`double-mcp`](../../.claude/skills/double-mcp/) skill.
- [ ] **This year's Profit & Loss** from QuickBooks — full year, **accrual** unless the client
      is on cash basis.
- [ ] **This year's Balance Sheet** as of the last day of the year.
- [ ] **LAST year's Profit & Loss and Balance Sheet.** Not optional. §3 is built on them.
- [ ] **The depreciation schedule** — the prior year's Form 4562 detail, or the fixed-asset
      register: cost, date placed in service, method, life, and depreciation taken so far.
- [ ] **Each shareholder's ownership percentage**, and whether it changed during the year.
- [ ] **Whether the shareholders put money in or took money out** during the year, and whether
      those were **capital contributions** or **loans** — they are not the same thing (§12).
      ⚠️ **Ask for the GROSS figures, not the account's net movement.** Books normally carry one
      equity account per shareholder and net everything inside it, so `+50,000` is equally
      consistent with *contributed 50,000, took nothing* and with *contributed 90,000, took
      40,000*. **Those two produce the same Schedule L and different everything else** —
      Schedule K 16d, the K-1's box 16 code D, M-2 line 7 and Form 7203 all need the two figures
      separately. Schedule L is the only one the net satisfies, which is why the gap survives so
      long unnoticed.
- [ ] **The GENERAL LEDGER for the year** — the one report that answers "what actually happened
      in this account", which no P&L or balance sheet can. Get it once, for every account, rather
      than returning for accounts one at a time.
- [ ] **Confirmation that Form 7004 (the extension) was filed**, if you are past 15 March.

> ⚠️ **Check the BASIS printed on every export, and check that they agree with each other.**
> QuickBooks reports carry cash-or-accrual as a per-report toggle, and the footer is the only
> place it is stated. A general ledger exported on **cash** while the P&L and balance sheet were
> exported on **accrual** is a different set of books, and nothing in the file warns you.
> **Compare account totals across the two before relying on either.** They coincide only for a
> client with no receivables and no payables — which is common enough in this practice to make
> the mismatch look harmless right up until the year it is not. And keep §6's separate point in
> view: **the report's basis is a toggle; the entity's tax accounting method is what was elected
> and filed.** The two answer different questions.

### Intake questions for the client

Ask these **before** you start, not when you are stuck:

1. Did the business **buy or sell any equipment or vehicles** this year?
2. Did any shareholder **put money in or take money out**? Was it a loan or a contribution?
3. Are there **loans to or from the company** — and did they change?
4. Did the company **take a physical inventory count** at year end?
5. Did anything change about the **business itself** — a new state, a new line of business, a
   closed location, a shareholder joining or leaving?
6. Are there **financial accounts outside the United States**?
7. Were **Forms 1099** required, and were they filed?

---

## §2 · Gate: the extension

**Check this first, because it cannot be fixed later.**

The 1120-S for a calendar year is due **15 March** of the following year (the next business day
if that is a weekend or holiday). **Form 7004** extends it **six months**, to **15 September**.

- The firm files 7004 for **most clients as a matter of course** *(Lilian, 2026-08-14)* — but
  **confirm it for this client**, do not assume.
- ⚠️ **The extension extends the FILING, not the paying.** An S-corp usually owes no federal
  tax, so this is rarely a money problem — but it is not a rule you get to ignore.
- 🛑 **If no extension was filed and the deadline has passed, stop and tell Lilian.** The
  late-filing penalty on an S-corp is charged **per shareholder, per month** and climbs fast.
  Confirm the current rate against the IRS instructions rather than quoting one from memory.

---

## §3 · 🔑 BUILD THE MAP FROM THE PRIOR YEAR — before you fill in anything

**This is the most important section in this SOP, and it is the step a beginner skips.**

Every firm, and every client, has conventions about how the books map onto the form: which
QuickBooks account feeds which line, what gets grouped, what is netted. **Those conventions are
not written down anywhere. They are encoded in last year's filed return.**

So before touching this year:

1. Open **last year's P&L and Balance Sheet**, and **last year's filed return**.
2. **Reconstruct last year's page 1 from last year's P&L**, on paper or in a spreadsheet.
3. **Compare, line by line, against what was actually filed.**
4. **Every difference is information.** Do not "fix" it and do not average it — find out *why*
   it is different. That reason is the convention you must repeat.
5. Only when your reconstruction reproduces the filed return do you have a trustworthy map.

**What this catches, in one real example (a Shopify client, 2026-08-14).** The ending-inventory
line on the return did not equal the QuickBooks `Inventory` account. It equalled
`Total for Other Current Assets` — the `Inventory` account **plus a Shopify Clearing Account**.
Using the Inventory account alone broke the cost-of-goods schedule and drove **purchases
negative**, which is impossible. Nobody could have guessed that convention; reproducing the
prior year revealed it in ten minutes.

> ⚠️ **A number that reconciles is not the same as a number that is right.** Reproducing the
> prior year proves your **map** is right. It does not prove the underlying figures are — the
> client's cost basis, their inventory count, their classifications are separate questions.

### 🔑 3A · With more than one owner, CHECK EVERY PRIOR-YEAR K-1 FOR THE "FINAL K-1" BOX

**Firm rule (Lilian, Aug 2026).** Before you decide how many shareholders this year has, open
**each** Schedule K-1 from the prior return and look at the **`Final K-1`** checkbox at the top
right.

**A ticked `Final K-1` means that shareholder is out.** It is the previous preparer's explicit
statement that it was that person's last K-1 from this company — so **this year they are not a
shareholder, they get no K-1, and they are not counted in page 1 box I.** You do not need to
reconstruct the sale, find the transfer document, or reason it out from the balance sheet: the
prior return already answered it, and answering it any other way risks contradicting a filed
position.

**Do this before anything shareholder-related** — it decides box I, how many K-1s exist, how many
Forms 7203 you prepare, and whether the year needs a per-day allocation at all. A two-owner company
whose second K-1 was final last year is a **one-owner company this year**, allocating 100%, with no
per-day arithmetic to do.

⚠️ **Two things the box does not tell you, and neither one changes the answer above:**

- **The departed shareholder's capital account may still be sitting on the balance sheet.** Books
  do not clear themselves. Under the sweep-into-retained-earnings convention (§8A) this changes no
  figure — the equity total is what it is — but it is worth knowing whose money it is, because the
  buyer's **outside basis** (what they paid for the shares) is not in the company's books at all,
  and it decides the gain or loss when the company eventually liquidates.
- **The rest of the prior return may not agree with the box.** A truly final K-1 would normally
  show zero shares at end of year and a below-full allocation percentage. If it shows the
  shareholder still holding shares at 31 December, **note it and move on — the box governs.**
  Report the inconsistency to Lilian rather than resolving it yourself, and never as a criticism
  of a closed return (§3's rule above).

> 🛑 **Reproducing the prior year is NOT auditing it.** A filed return is closed. You are
> reading it as an answer key to learn the conventions, not to find fault with it. If you do
> spot something that looks wrong, raise it with Lilian — do not change this year's approach on
> your own initiative, because consistency between years is itself a tax position.

---

## §4 · Form 1125-A — cost of goods sold

**Fill this in first.** Its line 8 feeds page 1. The form points there itself — it says *"Enter here and on Form **1120**,
page 1, line 2, **or the appropriate line of your tax return**"*, and for an S-corp the
appropriate line is page 1 line 2. Skip it entirely if the client sells no
goods.

| Line | What it is | Formula, or where you read it |
|---|---|---|
| **1** | Inventory at beginning of year | 📖 **read** · `= line 7 of LAST year's 1125-A`. The prior return governs — never a system, never a recalculation |
| **2** | Purchases | 📖 read **if the books track them** · ƒ **calculated** `= line 8 + line 7 − line 1` when they do not — see 4A |
| **3** | Cost of labor | 📖 read · direct production labour only. Most retail and e-commerce clients have none |
| **4** | Additional §263A costs | 📖 read · almost always blank for a small business taxpayer |
| **5** | Other costs | 📖 read · whatever the firm's convention puts in cost of sales beyond purchases |
| **6** | Total | ƒ `= line 1 + line 2 + line 3 + line 4 + line 5` |
| **7** | Inventory at end of year | 📖 **read** off the **balance sheet** — but read the trap in 4B |
| **8** | **Cost of goods sold** | ƒ `= line 6 − line 7` → carry to **page 1, line 2** |

### The identity — and how to use it

```
line 1  +  line 2  −  line 7  =  line 8
```

> ⚠️ **That is the SHORT form, and it holds only while lines 3, 4 and 5 are all zero.** The form
> itself is `line 8 = line 6 − line 7` where `line 6 = lines 1+2+3+4+5`. So **before using any
> rearrangement below, look at lines 3, 4 and 5 and confirm they are empty** — line 5 in particular
> is *"whatever the firm's convention puts in cost of sales beyond purchases"* and is not always
> blank.
>
> 🛑 **The one that bites is solving for PURCHASES.** `line 2 = line 8 + line 7 − line 1`
> **overstates purchases by (line 3 + line 4 + line 5)** whenever any of them is populated — and
> unlike the negative-purchases case below, **this error comes out looking perfectly plausible**,
> so nothing catches it. The full form is `line 2 = line 8 + line 7 − line 1 − line 3 − line 4 −
> line 5`.

You will usually **know three of the four** and solve for the fourth. Rearranged, every version of
it:

```
line 8  =  line 1 + line 2 − line 7        ← cost of goods sold, when purchases are known
line 2  =  line 8 + line 7 − line 1        ← PURCHASES, when cost of goods sold is known
line 7  =  line 1 + line 2 − line 8        ← ending inventory, when both others are known
line 1  =  line 8 + line 7 − line 2        ← only ever a CHECK; line 1 is copied, never solved
```

Which one is the unknown depends on how the client's books work:

- **Purchases recorded to an asset account** (perpetual): you know 1, 2 and 7 → **solve for line 8**.
- **Purchases expensed, cost of sales estimated** (periodic): you know 1, 7 and 8 → **solve for
  line 2**.

> 💡 **Why "purchases" is so often the one you solve for.** In a periodic setup nobody ever adds
> up the purchase invoices for the year — the bookkeeping records what was *bought* into an asset
> account and what was *sold* as an estimate, and the return needs a purchases figure that is
> consistent with both. Solving for it guarantees the schedule balances. **It is a derived figure,
> not a measured one** — which is exactly why an ending inventory read off the wrong account
> shows up here as an impossible number.

🛑 **If the figure you solve for comes out NEGATIVE, your map is wrong.** Negative purchases are
not a thing. Go back to §3 — you are almost certainly reading the wrong account into line 7.

### ⚠️ The line 7 trap

**"Inventory at end of year" is not automatically the account called `Inventory`.**

On some clients the return's inventory line is a **subtotal** covering more than that one
account. The Shopify example above is `Inventory` **plus** the Shopify Clearing Account, which the
QuickBooks balance sheet already presents as one line: `Total for Other Current Assets`.

**Read line 7 off the balance sheet section that the PRIOR RETURN used** — §3 tells you which
one. Do not decide it from the account's name.

### ⚠️ What a SOLVED line 2 actually contains — and why it is not "what they bought"

**The most reasonable objection a preparer can raise is: "but the client bought nothing this year,
so why is there a number in purchases?"** It deserves a real answer, because the instinct behind it
is right and the conclusion is wrong.

**Line 2 is not a claim about purchase invoices.** When you solve for it, it is *whatever makes the
schedule balance* given the other three. And you are not free to override it: put a zero in line 2
while keeping the prior year's line 1, the books' line 7 and the books' line 8, and the schedule
does not add up. **The identity has four slots and three of them are locked** — line 1 by the prior
return, line 7 by the balance sheet (which Schedule L line 3 must also equal), line 8 by the P&L.
Whichever one you refuse to move, another one absorbs the difference.

So a solved line 2 is a **measurement**, not an assertion — and what it measures is:

```
line 2  =  (value that entered inventory-land from anywhere other than a sale)
```

**Decompose it before you accept it.** When the client's line 7 and line 8 are subtotals covering
more than one account (the trap above), split the solved figure along the same seams:

```
line 2  =  [ COGS acct + ending Inventory acct − beginning Inventory acct ]   ← the GOODS side
         + [ the other accounts swept into lines 7 and 8 ]                    ← the ARTIFACT side
```

The artifact side has nothing to do with buying anything — it is the year's movement in whatever
non-inventory account the convention parks inside line 7, plus whatever non-purchase cost the
convention parks inside line 8. It can easily be the **majority** of a small solved line 2.

_(The pilot: a Shopify client whose line 7 includes the Shopify **Clearing Account** and whose line
8 includes **Shopify Selling Fees**. In a year the client bought no stock, a small solved line 2 decomposed to
**roughly two thirds artifact** — selling fees plus the clearing account's growth — and one third on
the goods side. Most of "purchases" was not goods.)_

**Then ask what the goods side means.** If the client truly bought nothing, the Inventory account
should have fallen by exactly the cost of goods sold. A residual says one of three things, and they
are worth telling apart:

1. **Goods really were bought — and often they never touched the inventory account at all.** The
   important case is **pass-through / drop-shipped stock**: goods the client buys and has shipped
   straight to the customer. Their cost is posted **directly to cost of sales**, correctly, because
   they never sit in a warehouse. **Cost of sales therefore rises with no matching inventory
   movement — which is exactly the shape that surfaces in line 2.** Also here: a small reorder,
   freight capitalised into stock, a customer return put back on the shelf.
2. **The cost-of-sales estimate is off** — where cost of sales is a *percentage of sales* rather
   than a measured cost, it will never agree with the goods movement by construction.
3. **Something was posted to Inventory that is not stock** — a reclass, a correction, a plug.

**Ask for the inventory account's ledger detail — and the cost-of-sales account's as well.** One
without the other cannot separate case 1 from case 3, because case 1 leaves no trace in the
inventory account at all. The residual is small; the reason it exists is not.

> 🗣️ **"The client bought nothing this year" and "there are purchases in the ledger" are BOTH
> usually true, and neither person is wrong.** The client means *we did not restock the warehouse*.
> The ledger means *goods cost was incurred*. Between them sits the pass-through business, which
> is invisible from the inventory account and obvious from the cost-of-sales account. **Ask which
> one they mean before you treat the discrepancy as an error** — and, once resolved, write down
> which vendors are pass-through, because the same question returns every year.
>
> _(Pilot: the entire goods-side residual turned out to be **two invoices from one vendor**,
> booked straight to cost of sales, for the product line the client resells as an intermediary. The
> owner's "nothing was purchased" was accurate about her own inventory and the ledger was accurate
> about the return. Nothing needed correcting.)_

⚠️ **A physical count that produced no journal entry is not in the books.** When a client says
they counted the stock and corrected errors, check that an adjusting entry actually exists. If the
inventory account's only movement all year is the cost-of-sales relief, then **ending inventory is
just opening inventory minus cost of sales** — arithmetic, not a count — and whatever the count
found is still wrong on the balance sheet you are about to put on Schedule L. The count may
instead have been used to *set* the unit quantity inside the year-end entry, which is fine; **ask
which, rather than assuming the count reached the books.**

🔑 **The sign is the alarm, and this is the whole diagnostic.** A **negative** line 2 is impossible
and means the map is wrong — go back to §3. A **small positive** line 2 is the healthy outcome:
the map is right, and the number is now a question about the books rather than about the return.
_(Same client, same year: reading line 7 off the `Inventory` account alone instead of the subtotal
produced a **negative** line 2. Reading it off the subtotal produced a **small positive** one. One
is a stop sign and the other is a lead.)_

### Line 9 — the checkboxes

- **9a — the valuation method.** ⚠️ **Six boxes on the current form, not three.** The old three
  are cost · lower of cost or market · other; the November 2024 revision added **non-incidental
  materials and supplies**, **the AFS §471(c) method** and **the non-AFS §471(c) method**, for
  tax years beginning after 2023. Those last three are exactly the small-business inventory
  methods our clients are most likely on. **Copy what was ticked last year — but check whether
  a box now exists that did not exist then**, and if so raise it rather than ticking it
  yourself. Changing the method is a formal election, not a preference.
- **9b–9d** — subnormal goods, LIFO. Normally all "no" for these clients.
- **9e — do the §263A rules apply?** Normally **no** for a small business taxpayer.
- **9f — did the method of determining quantities, cost or valuation change?** If you answer
  "yes" here you have a problem to escalate, not a box to tick.

---

## §5 · Form 1120-S page 1

### 5A · Header

| Box | What goes in it | Source |
|---|---|---|
| Name, address | The company | Prior return |
| **A** | S election effective date | Prior return |
| **B** | Business activity code | Prior return |
| **C** | Schedule M-3 attached? | No — M-3 starts at **$10 million** of total assets |
| **D** | Employer identification number | Prior return, or the client's Double record |
| **E** | Date incorporated | Prior return |
| **F** | **Total assets** | 📖 **read** off the balance sheet — the `Total for Assets` line. **It is not a calculation.** But it has two free cross-checks, and both must hold: `= current assets + fixed assets + other assets`, **and** `= total liabilities + total equity`. ⚠️ **It goes in TWO places on the return** — here in the header **and** on **Schedule L line 15** (end-of-year column) — and they must be the same number. It is also what the $250,000 question in Schedule B measures (§6) |
| **H(1)** | 🛑 **Final return** | **Only tick this if this is the LAST year the company exists.** A company that closes *next* year is not a final return *this* year. Ticking it early tells the IRS the entity is gone |
| **H(2)–(5)** | Name change · address change · amended · S election termination | Normally all unticked |
| **I** | Number of shareholders | Count the K-1s |

### 5B · Income — lines 1 to 6

| Line | What it is | Formula, or where you read it |
|---|---|---|
| **1a** | Gross receipts or sales | ƒ `= sales revenue accounts − discounts given + shipping income charged to customers` |
| **1b** | Returns and allowances | 📖 read · the refunds-to-customers account |
| **1c** | Balance | ƒ `= 1a − 1b` · ✅ equals the P&L's total income **less anything in it that belongs on Schedule K** (interest, dividends, capital gains) |
| **2** | Cost of goods sold | 📖 Form 1125-A line 8 |
| **3** | Gross profit | ƒ `= 1c − 2` · ✅ equals the P&L's gross profit **only when line 2 equals the P&L's cost of sales** — in the periodic case (§4) it comes off the 1125-A instead |
| **4** | Net gain (loss), Form 4797 | 📖 read · gain or loss on selling business equipment. Zero in most years |
| **5** | Other income (loss) | 📖 read · **trade-or-business income only** — see the warning below |
| **6** | Total income | ƒ `= 3 + 4 + 5` |

> ⚠️ **Line 5 is NOT "everything else on the P&L".** Interest income, dividends and capital
> gains are **portfolio income** and go on **Schedule K**, not here. If you put bank interest
> on line 5 you have understated Schedule K and overstated ordinary income.

### 5C · Deductions — lines 7 to 21

**The mapping rule, which is the whole skill:** lines 7 to 19 are **named categories the IRS
wants to see separately**. Line 20 is **everything left over**. So you work **top down** — place
each expense that has its own line, then group the remainder.

| Line | Category | Typical QuickBooks accounts |
|---|---|---|
| **7** | Compensation of officers | Salaries paid to **officers** — not to every shareholder-employee (§5C-i). Form 1125-E is required at **$500,000 or more** of total receipts |
| **8** | Salaries and wages | Everyone else's wages — **and only actual wages**. See 5C-i |
| **9** | Repairs and maintenance | |
| **10** | Bad debts | |
| **11** | Rents | Office, warehouse, storage, equipment rental |
| **12** | Taxes and licenses | **Taxes the COMPANY BEARS** — including **state** income/PTE tax on the corporation; **federal** income tax never — payroll taxes, business licences, local taxes. Not income tax, and ⚠️ **not sales tax collected from customers** — see 5C-ii |
| **13** | Interest | Loan and credit-card interest. Often sits under "other expenses" in the P&L |
| **14** | Depreciation | **From Form 4562** — see §5D |
| **15** | Depletion | Rare |
| **16** | **Advertising** | ⚠️ Has its own line. Do not leave it in "other deductions" |
| **17** | Pension, profit-sharing plans | |
| **18** | Employee benefit programs | Health insurance, other benefits |
| **19** | Energy efficient commercial buildings deduction | Form 7205. **Normally blank** — but it is why the lines below moved |
| **20** | **Other deductions** | **The remainder** — attach a statement itemising it |
| **21** | Total deductions | ƒ `= sum of lines 7 through 20` |
| **22** | **Ordinary business income (loss)** | ƒ `= line 6 − line 21`. **This is the number the return exists to produce** |

**How to build line 20 without missing anything:**

```
total expenses per the P&L
  −  everything you placed on lines 7–19
  −  the non-deductible portion of any expense (see §9)
  =  line 20
```

Then **itemise** it in the attached statement. If your line 20 does not equal that subtraction,
you have either double-counted or dropped an account.

### 5C-iii · 🛑 Distributions hide inside ONE capital account per shareholder

**The books almost always carry a single equity account per shareholder, holding contributions and
distributions netted together.** That is normal, correct bookkeeping — nothing requires the split,
and the balance sheet only ever needs the net.

**But the return needs both halves, and only Schedule L is satisfied by the net:**

| Where it goes | Net enough? |
|---|---|
| Schedule L equity | ✅ yes — one figure |
| **Schedule K line 16d** · **K-1 box 16 code D** | ❌ **gross distributions** |
| **Schedule M-2 line 7** | ❌ **gross distributions** — a line of its own, *after* the combine |
| **Form 7203** | ❌ **both**, and distributions come off basis BEFORE losses (§12) |

🔑 **So you cannot prepare an S-corp return from the balance sheet. Open the shareholder's ledger
and total the debits and the credits separately.** A net movement of `+50,000` is equally consistent
with *contributed 50,000, took nothing* and with *contributed 90,000, took 40,000* — and those two
produce a different Form 7203, a different M-2, and a different K-1.

### 5C-iv · ⚠️ A debit in a capital account is not automatically a distribution

Total the debits, then **look at them**. They divide into three kinds, and only the last two are
distributions:

1. **ROUND TRIPS — money in and straight back out.** Look for an outflow sitting beside an inflow
   of similar size within a few days, or on the same day. That is the owner moving funds, not
   taking profit: a deposit of 50,000 followed three days later by a withdrawal of 49,000 is a
   a **contribution of 1,000**, not a contribution of 50,000 plus a distribution of 49,000. **Netting
   those is right.**
2. **Transfers to the owner's personal accounts** with no matching inflow. Distributions —
   ⚠️ **unless the company carries a shareholder loan**, in which case a payment out may be a
   **repayment of that loan**, which is **Schedule K line 16e**, not 16d, and reduces **debt
   basis** rather than stock basis. §1's intake question about loans to or from the company is
   what tells you; **a repayment misclassified as a distribution also loses the taxable gain that
   arises when prior losses had already reduced debt basis.**
3. **PERSONAL SPENDING on the company card or account** — groceries, fuel, a restaurant, a
   personal subscription. 🔑 **These are the ones that settle the question**, because they cannot
   be netted against anything: nobody round-trips a supermarket run. **A bookkeeper who posts them
   to the owner's equity account instead of an expense account has already classified them
   correctly** — and has kept a personal expense out of your deductions.

🛑 **AND THIS IS WHY A BLANK SCHEDULE M-2 LINE 7 LAST YEAR IS NOT PRECEDENT.** §3 says repeat the prior year's
conventions — but read what the convention actually *was*. "The prior return showed no
distributions" is not a convention; it is a **result**. The convention behind it might have been
*net the round trips*, which is a rule you can apply again, and applying it to a different year can
correctly produce a very different answer.

**A start-up year and a wind-down year are economically opposite, and the return should show it.**
An owner funding a new company is a large net contributor whose few outflows are usually round
trips; the same owner in the closing year is drawing money out systematically and buying groceries
with it. **Same account, same convention, opposite result.** Do not carry a zero forward because
last year had one, and do not treat the difference as evidence that one of the two returns is
wrong.

### 5C-ii · ⚠️ Line 12 is tax the COMPANY bears — sales tax collected is not one

**Line 12 is `Taxes and licenses`, and an account named `Taxes Paid` is not automatically it.**
The test is not the account's name — it is **who the tax belonged to**.

| What it is | Line 12? |
|---|---|
| The employer's share of payroll taxes | ✅ yes |
| Business licences, local occupational taxes, state franchise tax | ✅ yes |
| Sales tax **collected from customers and remitted** | ❌ **no — it was never the company's** |
| **State** income or PTE tax on the corporation | ✅ yes |
| **Federal** income tax | ❌ no |

**Why sales tax is different: the company is a collection agent, not a taxpayer.** The money
belonged to the customer and passed through to the state. **Check which method the books use, and
the return follows it:**

- **Net method** (the normal one) — tax collected is credited to a **liability**, never to
  revenue. It is not income, so remitting it is **not a deduction**. Nothing about it reaches the
  P&L or the return at all.
- **Gross method** — tax collected is inside revenue. Then the remittance *is* deducted, because
  the receipt was included. **Both, or neither. Never one without the other.**

**How to tell in one look:** find the year's sales tax collected and see which account it was
credited to. A **liability** account means net method.

🔎 **Then ask what an amount sitting in a sales-tax expense account actually IS.** Under the net
method, a debit there did not come from remitting the tax — something else put it there, and it is
usually one of two things:

1. **A genuine overpayment the company bore** — it paid the state more than it collected, out of
   its own money. That is a real cost. ⚠️ **But before deducting it, ask whether it is
   RECOVERABLE.** An overpayment the state will refund is a **receivable, not an expense**;
   writing it off says the company has given up on it. **The deduction and the refund claim are
   mutually exclusive** — decide which, and if the entity is closing, decide it *before* the
   state account is closed, because afterwards the choice is made for you.
2. **A plug** — a residual somebody wrote off to make the payable balance.

**Read the sales-tax accounts as a FAMILY, not one at a time**, parent and sub-accounts together.
A negative (debit) balance across the family is the overpayment, stated by the ledger itself with
no arithmetic needed. _(Pilot: the parent sat at a **debit** balance after the year's remittances while the sub-account
carried the tax collected — the two netting to the overpayment, which **neither account showed
alone.**)_

🛑 **And check a clean-up entry against its own description.** One that says it clears a balance
**to zero** is a testable claim: recompute the balance it leaves. _(Same client: the entry was
posted **twice**, and the tell was that with one copy the family nets to zero — as the entry said
it would — while with two it lands on the **opposite sign**. The entry failed its own stated
purpose by exactly one copy of itself.)_

### 5C-i · ⚠️ Line 8 is WAGES — not the "payroll" accounts

**A QuickBooks account called `Payroll Expenses` is not automatically wages**, and this is the
single easiest way to put a number on line 8 that should never have been there.

What actually lands where:

| What it really is | Where it goes |
|---|---|
| Gross wages paid to non-officer employees | **Line 8** |
| Gross wages paid to an **OFFICER** | **Line 7** — the line is *Compensation of officers* |
| Gross wages paid to a shareholder-employee who is **not an officer** | **Line 8**. ⚠️ Shareholder-employee and officer are not the same thing; they coincide in a one-owner company and not always otherwise |
| The employer's share of **payroll taxes** | **Line 12** (taxes and licenses) |
| The **payroll platform's fee** — Gusto, ADP, a subscription | **Line 20**, other deductions. It is a service the company bought |

> 🔑 **THE TEST THAT SETTLES IT — and state it in full, because the short version misleads.**
> Wages are reported to the IRS on **W-2s** and the quarterly **941s**, and the return has to
> agree with them. But the agreement is not with line 8 alone:
>
> ```
> total W-2 wages  =  line 7 (officer compensation)
>                   +  line 8 (salaries and wages)
>                   +  1125-A line 3 (cost of labor, if any)
>                   −  any employment credits claimed
> ```
>
> ⚠️ **Comparing W-2s to line 8 by itself will look wrong whenever an officer is on payroll** —
> and a preparer who "fixes" that by moving officer compensation onto line 8 has undone the very
> rule this section teaches. **A company that ran no payroll at all shows zero on both 7 and 8** —
> not the balance of an account whose name happens to contain the word "payroll".

⚠️ **And watch the parent-versus-child trap.** In QuickBooks `Payroll Expenses` is often a
**parent** with `Wages & Salary` and `Payroll Tax` underneath it. Line 8 takes the **`Wages &
Salary` child**; the payroll tax goes to line 12. **Taking the parent's `Total for…` line puts
the payroll taxes on the wages line and empties line 12.** Reproducing the prior year (§3) shows
you which one that client's return used.

_(Worked example: a client's 2024 return took the `Wages & Salary` child to line 8 and the
`Payroll Tax` child to line 12 — never the parent subtotal. In 2025 the same client had stopped
payroll, so the parent carried only a platform subscription and **line 8 was correctly zero**.)_

> 📝 **Name it `Payroll Fees` on the line 20 statement, and merge it with any account already
> called that.** Firm convention (Lilian, Aug 2026). The line 20 statement is free text, so the
> platform fee needs a caption — and "payroll" anywhere near line 8 is what caused the problem in
> the first place. A client whose chart already carries a `Payroll Fees` account **combines the
> two into one line**: the platform's subscription and the platform's fees are the same kind of
> cost, and two near-identical captions on the same statement invite the next preparer to move
> one of them back to line 8.

### 5D · Depreciation — line 14

- Comes from **Form 4562**, which you prepare from the client's depreciation schedule.
- **A full year for an asset placed in service last year is larger than its first part-year.**
  A beginner expecting "the same as last year" will understate the deduction.
- **No new assets this year means no new elections** — no §179 and no bonus depreciation
  decisions to make. Just continue the existing schedule.
- ⚠️ **If the books recorded no depreciation at all**, the deduction still belongs on the
  return. On a **book-basis** Schedule L it becomes a book-to-tax difference on **Schedule M-1**
  line 6a (§9); on a **tax-basis** one it is already inside Schedule L and M-1 line 1 instead.
  **Pick one — see the fork below.**

> 🖥️ **IN ATX: enter the assets in the `Fixed Assets` tab — NOT on Form 4562 itself.**
> Standing reminder (Lilian, Aug 2026), and it applies **every time this form comes up**. The
> 4562 in ATX is a **computed output**: it is assembled from the asset register, and typing into
> it either refuses or produces a figure the register does not support, which then disagrees with
> Schedule L line 10b. **Add or edit each asset in `Fixed Assets` — cost, date placed in service,
> method, life — and let ATX write the 4562, page 1 line 14 and the accumulated-depreciation
> figure from it.**
>
> 🔎 **A book/tax depreciation difference that appears SUDDENLY is usually a MISSING ENTRY, not a
> tax position — ask why the gap exists before building the bridge.** Depreciation is normally
> posted to the books by a year-end journal entry. When it is posted, book and tax agree and there
> is nothing to reconcile; when nobody posts it, a difference appears out of nowhere. **Open the
> books and look for the entry before deciding it is a permanent feature of this client.**
> _(Pilot: the prior year had a single 31-December entry debiting a `Depreciation` expense account
> and crediting the three accumulated-depreciation accounts — book and tax matched exactly. The
> following year, with the company winding down, the entry was simply never made and the account
> is not in the P&L at all. Nothing about the client changed; the bookkeeping did.)_
>
> ⚠️ **And the corollary, which is the trap: a prior year showing NO difference does not tell you
> which convention it used — it tells you the two figures coincided.** A blank M-1 line 6a can mean
> *there was no difference* or *nobody recorded anything*, and only the books distinguish them. So
> a prior return with book depreciation equal to tax depreciation is **silent** on the fork below;
> do not read it as evidence either way.
>
> ✅ **The cleanest resolution is usually a journal entry, not a return decision.** Post the year's
> depreciation to the books and the fork disappears — Schedule L matches the books again, M-1
> line 1 is genuinely *per books*, and there is no difference left to reconcile. It is also what
> should have happened anyway.

#### The entry itself — and it is broken out per asset

**Firm rule (Lilian, Aug 2026).** The chart of accounts carries **one accumulated-depreciation
account per fixed asset**, so the entry is **not** a single credit — it is **one credit line per
asset**, each for that asset's own share of the year's deduction:

```
31 December <year>
  Dr  Depreciation (expense)                       <the year's total>
      Cr  Accumulated depreciation — <asset 1>         <asset 1's share>
      Cr  Accumulated depreciation — <asset 2>         <asset 2's share>
      Cr  Accumulated depreciation — <asset 3>         <asset 3's share>
```

⚠️ **A single lump credit is wrong even though it totals correctly.** Each asset's accumulated
depreciation has to stand on its own, because that is what **Schedule L line 10b** is built from,
what the **net book value per asset** on the balance sheet depends on, and — the one that costs
money — what the **gain or loss on disposal** is computed from when an asset is sold or the company
liquidates. Lump it, and the year an asset leaves you cannot say what its basis was.

🛑 **If the entity's FIRST year was a SHORT year, the MACRS percentage tables are off the table —
literally.** Pub 946 ch. 4 opens: *"**You cannot use the MACRS percentage tables to determine
depreciation for a short tax year.** A short tax year is any tax year with less than 12 full
months."* A company incorporated mid-year has one, so **every** figure that year and every figure
derived from it afterwards comes from the **remaining-basis** computation (adjusted basis at the
start of the year × the applicable rate — Pub 946's *"simplified method"*), never from Table A-1.
⚠️ **Checking a later year against the table will therefore show a "discrepancy" that is not one**,
and Pub 946 counts a short year in **whole months, counting a partial month as whole** — its own
example treats a corporation incorporated **15 March** as having a **10**-month year.

🔑 **Where the per-asset amounts come from: the tax software's fixed-asset register, NOT the
printed Form 4562.** The filed 4562 shows the **total** on line 17 or line 22 — the split lives in
the asset list (ATX: the `Fixed Assets` tab). ⚠️ **The asset-detail statement that prints with the
return may only carry cost, date placed in service and recovery period** — enough to identify the
assets, not enough to split the deduction. **Open the register.**

##### ❓ Why the ASSET accounts are not in this entry

**Everyone preparing their first one expects the asset account to be credited** — write the
computer down, credit `Computer Equipment`. **It must not be, and the reason is what makes
Schedule L fillable at all.**

🔑 **The asset account holds ORIGINAL COST and never moves until the asset LEAVES the company.**
Depreciation goes to a second account beside it — a **contra-asset**, `Accumulated depreciation`,
which accumulates everything written off so far. The two are always read as a pair:

```
  <Asset> ........................  cost      ← set once. NEVER changes.
  Accumulated depreciation ....... (taken)    ← grows every year
                                   ───────
  Net book value                    the rest  ← what the balance sheet shows
```

**Credit the asset directly and you destroy three things at once:**

1. **The cost disappears**, and with it any way to tell a cheap old asset from an expensive
   nearly-written-off one — both collapse to the same small number.
2. **Gain or loss on disposal becomes unprovable**, because it is `proceeds − (cost − accumulated)`
   and you no longer hold either input separately.
3. 🛑 **Schedule L cannot be completed.** Line **10a** asks for *cost* and line **10b** asks for
   *accumulated depreciation* — **two separate figures the form demands side by side.** Net them
   into one account and there is nothing to put on 10b.

ⓘ **So the entry has exactly two kinds of line and no asset account among them:** one **debit** to
the depreciation *expense* (page 1 line 14, reducing this year's income), and one **credit per
asset** to that asset's *accumulated depreciation* (balance sheet, never reversed).

📌 **The asset accounts move on DISPOSAL, and then both sides go together** — credit the asset for
its full original cost, debit the accumulated depreciation for everything taken, and the difference
and the two are cleared together. **That is the entry a final return needs**, and it is the reason
the per-asset split above is not a formality.

🛑 **But the books entry is NOT the tax computation.** On a **sale**, gain = amount realized −
adjusted basis, and **selling expenses go on the BASIS side** — Form 4797 line 21 is *"Cost or
other basis **plus expense of sale**"* — while line 22 uses **depreciation allowed or allowable**,
the *tax* figure, which equals the contra account only when the books carried tax depreciation.
Scrapping or abandonment is an ordinary loss on **Form 4797 line 10**. ⛔ **On a LIQUIDATION there
are no proceeds and §336(a) deems a sale at FAIR MARKET VALUE** — do not compute a full write-off
loss because no cash came in.
⚠️ **And read §336(d)(1) properly, because relatedness alone does NOT disallow a loss.** The test is
**related person (§267)** *AND* **(the distribution is not pro rata *OR* the property is
disqualified)** — *disqualified* meaning acquired in a **§351** transaction or as a **contribution
to capital** within the **5 years** before the distribution. 🔑 **In a single-shareholder S
corporation the middle prong cannot be met** — one owner at 100% makes every distribution pro rata
— **so the whole question collapses to how the assets were ACQUIRED.** Purchased assets are not
disqualified; contributed ones are.

**If the register is unreachable** — the client cancelled the subscription, the engagement ended —
**record the entry as a pending instruction in the return's working paper (§15A) with the total,
the account names and the amounts left blank**, so whoever regains access can post it without
rebuilding the analysis. **It does not block the return**: the deduction is already on page 1 line
14 either way. It is the *books* that are waiting.

> **Then check where the number lands — and WHICH check applies depends on a fork you have to
> settle deliberately (§9):**
>
> - **Tax-basis Schedule L** (what tax software usually does, driving 10b from its own register):
>   **10b must move by exactly the line 14 figure**, retained earnings is net of it, and there is
>   **no** M-1 line 6a depreciation adjustment. ⚠️ The filed Schedule L will then **not equal
>   QuickBooks** by the year's depreciation.
> - **Book-basis Schedule L** (the literal reading of *"per Books"*): **10b does not move at all**,
>   Schedule L matches the books, and the depreciation appears as an **M-1 line 6a** adjustment.
>
> **Both reach the same M-1 line 8.** What is not allowed is mixing them. **Repeat whichever the
> prior return used**, and if the prior year's book and tax depreciation happened to coincide —
> so the prior return does not reveal which — say so in the working paper (§15A) rather than
> leaving the next preparer to guess.

---

## §6 · Schedule B — the questions

⚠️ **The question numbers move between tax years. Find each one by its wording, not its
number.**

Most are yes/no facts about the company. Three are worth calling out:

1. **Accounting method** — accrual or cash. ⚠️ **Take it from the PRIOR RETURN, not from
   QuickBooks.** A QuickBooks report's basis is a per-report toggle someone can flip; the
   entity's *tax* accounting method is what was elected and filed, and it carries forward. If
   the report basis and the prior return disagree, that is a question for Lilian, not something
   to resolve by looking at a footer.
2. 🟢 **"Are total receipts AND total assets both under $250,000?"** If **yes**, you are **not
   required** to complete **Schedule L** or **Schedule M-1**.
   - **The firm's practice is to complete them anyway** when the prior year did, because they
     give continuity between years and the balance sheet is your best proof that nothing was
     mapped wrong.
   - ⚠️ **Being excused from Schedule M-1 does not remove the adjustments themselves.** A
     non-deductible expense still changes line 22 whether or not you disclose the
     reconciliation.
3. **Were Forms 1099 required, and were they filed?** Answer honestly — but **do not answer it from
   memory or from the client's recollection.** Run the test in §6B.

### 6B · 🛑 The 1099 question (14a/14b) — run it off the ledger, BY PAYEE

**This is a Yes/No that a signed return asserts under penalties of perjury, and it is answered
wrong more often than any other question on Schedule B.** Four mistakes cause almost all of it.

🔑 **The test is per PAYEE for the year, not per account and not per payment.** Group the ledger's
transactions by the **`Name` / vendor column** and total each payee across the whole year. **Four
$200 payments to one person is a 1099; one $500 payment to each of four people is not.** An
account total tells you nothing either way.

⛔ **Mistake 1 — looking only at `Contract Labor`.** The question is about **all** Forms 1099. The
biggest exposure is usually **RENT**, which is **1099-MISC box 1** at $600+ paid in a trade or
business, and people skip it because they think "1099 = contractors". Sweep **every** account that
can carry a reportable payment: contract labor, professional fees, rent, commissions, and any
"other/uncategorized" bucket.

⛔ **Mistake 2 — asking what the payment WAS instead of who RECEIVED it.** The exemption is about
the **payee's tax classification**, never the kind of service. **Professional fees are among the
most commonly reportable payments there are** — an accountant, a consultant, a designer, a
bookkeeper all get a 1099-NEC at $600+ **unless the payee is a corporation.** So "it's professional
fees, it doesn't need one" is backwards reasoning that happens to land right only when the payee
happens to be incorporated.
⛔ **And an LLC is not a corporation.** It may be taxed as a sole proprietorship, partnership
**or** corporation, and only the last is exempt. **The name cannot tell you — the W-9 does.** By
contrast `Inc` / `Corp` in the payee name is a reliable signal, and government bodies are exempt.

⛔ **Mistake 3 — assuming an electronic payment shifts the duty.** Card and third-party-network
payments (PayPal, Venmo-for-business, a marketplace) are reported by the **processor** on a 1099-K,
so the payer is relieved. **Zelle is NOT one of them** — it is bank-to-bank, issues no 1099-K, and
**the payer's own 1099 obligation stands in full.** A ledger full of Zelle payments is a ledger
full of live 1099 duties.

⛔ **Mistake 4 — reading the account NAME instead of the arrangement.** The instructions except
*"payments for **merchandise, telegrams, telephone, freight, storage, and similar items**"*, and
they also make **rent** of $600+ reportable in box 1. **So an account called `Storage Rent` sits on
top of a genuine fork, and it has more than two branches.** Storing the client's **inventory** — no
identified space, a bill that moves with volume — is **excepted**. A **lease of identified space**
is **box 1 rent**. **Predominantly fulfilment work** (pick/pack, kitting, returns) is on **neither**
list: the exception names *storage*, not order fulfilment, so treat it conservatively as a service
on the **1099-NEC**. A contract that genuinely does both, separately priced, is **prorated**.
**What decides it is the signed agreement — its title, its premises clause and its fee schedule —
read with one full invoice showing how the charge is computed**, never the chart of accounts.
⛔ **And a payee's NAME is not evidence either** — `LLC` is not a usable signal of tax status. The same trap runs the other way:
freight and merchandise are excepted no matter how large.

**The rest of the exception list, because people rebuild it from memory and get it short:**
corporations *(but see the five carve-outs below)* · **merchandise, freight, storage and similar** ·
rent paid to a **real-estate agent or property manager** (*they* file, not you) · **tax-exempt
organizations** · the **United States, a state, D.C., a U.S. territory or a foreign government** ·
wages to employees (those are a W-2).

🛑 **Six things are reportable EVEN WHEN THE PAYEE IS A CORPORATION**, and writing the exemption
as "corporations, except legal fees" is how the list gets lost:

| Reportable to a corporation | Where |
|---|---|
| **Attorneys' fees** for the attorney's own services | **1099-NEC box 1** (§6041A(a)(1)) |
| **Gross proceeds paid to an attorney** — a settlement, *not* their fee | 1099-MISC **box 10** (§6045(f)) |
| **Medical and health care payments** | 1099-MISC **box 6** |
| Substitute payments in lieu of dividends or tax-exempt interest | 1099-MISC box 8 |
| Cash purchases of **fish for resale** | 1099-MISC box 11 |
| Payments by a **federal executive agency** for services | 1099-NEC box 1 — *never a private client's problem, but it is on the list* |

⚠️ **The medical one is the practical trap.** A business paying an incorporated clinic, physician
or lab **must** issue a 1099-MISC, and it is skipped constantly because "it's a corporation" feels
like the end of the analysis.

⚠️ **Check the threshold for the YEAR you are filing.** It was **$600** through **TY2025**; the
One Big Beautiful Bill Act raised it to **$2,000 for payments made after 31 December 2025**, i.e.
from **TY2026**, with inflation indexing after that. Applying the new figure to an older year, or
the old figure to a newer one, flips the answer.

**Two things that are NOT payments and must be excluded before you conclude anything:** a
**journal entry** sitting in an expense account (a reclass, an accrual, a deposit moved to rent) is
not cash to a payee, and a **transaction with no vendor** needs identifying rather than counting —
it is as likely to be an internal entry as a real payment.

📌 **How you actually PROVE a payee is exempt: Form W-9, LINE 3a** *(a line, not a box — and it was
renumbered from `3` when line 3b was added in the Rev. March 2024 form)*. That is where the payee
declares its federal tax classification, in **seven** boxes: individual/sole proprietor ·
C corporation · S corporation · partnership · trust/estate · LLC · **Other**.

🛑 **The LLC rule has an exception that covers the commonest case you will actually see.** The form
says to check `LLC` and enter `C`, `S` or `P` — *"**unless it is a disregarded entity. A disregarded
entity should instead check the appropriate box for the tax classification of its owner.**"* So a
**single-member LLC** comes back with **`Individual/sole proprietor`** ticked and **no LLC letter at
all** — that is a correctly completed W-9, **not a malformed one**, and that payee is **NOT exempt.**
Reading it as an error is how a required 1099 gets skipped.

**A W-9 on file is what defends the decision not to file**; a name in the ledger is not.

📌 **What "look before you ask" means here:** the ledger answers *whether the threshold is met* — it does **not** answer whether the payee is exempt.
Ask the client only for the **W-9s** the test actually turns on.

### 6A · 🛑 The §163(j) pair — the question whose POLARITY was reversed in TY2019

**This is the one Schedule B answer that changes a number on page 1 — and the trap is that the
question was rewritten, so half of what is written about it online describes the opposite form.**

Two consecutive questions cover the **§163(j) business-interest limitation**. On the current form —
and on every revision from **TY2019** onward — they read:

- **Question 9** — *"Did the corporation have an election under section 163(j) for any real
  property trade or business or any farming business in effect during the tax year?"* → for these
  clients, **No**.
- **Question 10** — *"Does the corporation satisfy **one or more** of the following?"*, with
  **three** sub-parts:
  - **a** owns a pass-through entity with current or prior-year carryover **excess business
    interest expense**
  - **b** aggregate average annual gross receipts under §448(c) for the 3 preceding years are
    **MORE THAN $31 million** *(TY2025 figure — it is indexed, check it each year)* and the
    corporation has business interest expense
  - **c** is a **tax shelter** and has business interest expense

  → for these clients, **No**.

🛑 **READ THE FOLLOWING SENTENCE OFF THE FORM, NOT FROM MEMORY.** It says:

> *If "Yes," complete and attach **Form 8990**, Limitation on Business Interest Expense Under
> Section 163(j).*

**"Yes" TRIGGERS Form 8990. It does not exempt you from it.** Answering **No** is what leaves the
interest fully deductible on page 1 line 13.

> ⚠️ **The TY2018 form asked the OPPOSITE question**, and this is the single most likely thing to
> get wrong here. Verbatim from `f1120s--2018.pdf` — *"Does the corporation satisfy one of the
> following conditions **and** the corporation doesn't own a pass-through entity with current year,
> or prior year carryover, excess business interest expense?"*, with sub-part **(a)** *"aggregate
> average annual gross receipts … **don't exceed** $25 million, and the corporation isn't a tax
> shelter"* and sub-part **(b)** interest only from an electing real property or farming business
> or certain utilities — ending **"If 'No,' complete and attach Form 8990."**
>
> **Same question number, opposite meaning: there, "No" triggered the form; here, "Yes" does.**
> **TY2019 is the revision that flipped it**, and Form 1065's Q24 flipped in the same one, so the
> old wording is on **no form still in use** — there is nowhere left to go looking for it. A
> preparer who answers the current Q10 "Yes" because that is what the old form wanted has just
> attached Form 8990 and limited a deduction that was never limited.
>
> 🛑 **The general rule: for any question whose answer changes a figure, open the current-year PDF
> from irs.gov and read the question and its "If Yes" sentence off the form.** §0B already says
> this about page-1 line numbers; it is just as true here. **And when you make a claim about an
> OLDER form, pull that year too** — `irs.gov/pub/irs-prior/f1120s--<year>.pdf`.
>
> _(This paragraph has been wrong twice, and it is worth knowing how. First it stated the polarity
> backwards — caught 2026-08-17 by pulling the current form. The correction then dated the flip to
> **2023** and quoted the old ending as *"the corporation is not required to file Form 8990"* —
> both invented, because only the **current** PDF had been checked and the rest came from memory.
> The real flip is **TY2019**, four filing seasons earlier, and that quoted sentence has never
> appeared on a Form 1120-S. Caught 2026-08-18 by fetching TY2018/2019/2021/2022 from the IRS
> prior-year archive. **The shape of the trap was right both times; the detail supplied from memory
> was wrong both times.** Anyone amending a TY2019–TY2022 return under the "pre-2023" wording would
> have hit the very error this section exists to prevent, in the mirror direction.)_

**And it still fails by omission.** Leave Q10 **unanswered** and the software assumes the
limitation applies, wants Form 8990, and **the interest expense never reaches line 13.** Nothing
errors, nothing is flagged, the return is simply smaller.

⚠️ **You will meet this from the other direction.** In ATX, clicking the line 13 *Interest* field
does not open a plain input — it opens a worksheet, and this block is inside it. **That is not a
detour to click past on the way to typing a number: it is the gate.** Answer the pair, then
re-check that line 13 actually carries the number.

**The lesson worth more than the two questions:** on this return some Schedule B answers are not
disclosure — **they are switches.** Treat an unanswered question as a deduction you have not yet
claimed.

---

## §7 · Schedule K — what travels to the owners

Schedule K is the company's **total** of every item the owners report themselves. Each K-1 is
one owner's slice of it.

| Line | Item | Where it comes from |
|---|---|---|
| **1** | Ordinary business income (loss) | Page 1, line 22 |
| **2–3** | Rental income | Rare for these clients |
| **4** | Interest income | The P&L's interest income — the one you kept OFF page 1 line 5 |
| **5** | Dividends | |
| **7–8** | Capital gains | |
| **11** | Section 179 deduction | Only if elected this year |
| **12a** | Charitable contributions | Cash contributions (noncash is 12b) |
| **16c** | **Non-deductible expenses** | The disallowed half of meals, fines, and similar. ⚠️ Easy to forget — it reduces basis and AAA |
| **9** | Net §1231 gain (loss) | ⚠️ **Separately stated.** Only the *ordinary* part of a Form 4797 gain goes on page 1 line 4 (Part II, line 17); a net §1231 gain comes here instead |
| **14a/14b** | **Schedules K-2 / K-3** | Attach K-2 if there is any foreign activity — or tick the exception box. ⚠️ **This is what §1's foreign-accounts question is for.** Omitting them carries per-shareholder penalties, so do not skip it because the client "has nothing foreign" without confirming |
| **16d** | Distributions | Money paid out to shareholders during the year |
| **17d** | **§199A / QBI information** — Schedule K line 17d *Other items and amounts*; on the K-1 it is **box 17, code V** | Attach the statement. **A loss year still produces QBI information** — a negative amount that carries forward for the owner |
| **18** | **Income (loss) reconciliation** | ƒ `= lines 1 through 10, less lines 11 through 12e and 16f`. **This is what Schedule M-1 reconciles to** — not page 1's ordinary income (§9) |

---

## §8 · Schedule L — the balance sheet

Two columns: **beginning of year** and **end of year**.

1. 🔑 **The beginning column is COPIED from last year's filed return. It is never
   recalculated.** If it does not match, stop — you have found either a mapping change or an
   error, and both need Lilian before you go on.
2. **The end column comes from the year-end balance sheet.** Total assets must agree with it
   to the dollar.
3. 🔑 **The heading says "per Books" and it means it.** If the books did not record something —
   depreciation, an accrual — Schedule L shows the books' figure, and the difference goes on
   **Schedule M-1**. Do not "correct" the balance sheet to tax figures.
4. **Equity mapping is a convention, not a calculation.** How the client's capital accounts are
   split between *capital stock*, *additional paid-in capital* and *retained earnings* on the
   form is whatever the prior return did. **Repeat it**, or the two years cannot be compared.

### 8A · ⚠️ The named shareholder accounts do NOT map to the line their name suggests

The books usually carry **one equity account per shareholder, under that person's name**. The
form has no such line, so every return has to decide where they go — and **the obvious guesses
are usually not what the prior return did.**

The three candidates, and what choosing each one *asserts*:

| Where they could go | What it means |
|---|---|
| **Line 19** — *Loans from shareholders* | The money is **debt**. It supports losses through **debt basis**, and it is a liability the company owes back |
| **Line 23** — *Additional paid-in capital* | The money is **contributed capital**, shown as its own equity line |
| **Line 24** — *Retained earnings* | The named accounts are **swept in with accumulated earnings**, and the form shows no separate contribution line at all |

🔑 **Read the prior return's lines 19, 22, 23 and 24 before you fill in any of them** — and read
the prior year's **K-1 box for *Loans from shareholder*** as the cross-check. A blank line 19
**and** blank K-1 loan boxes together say the money was treated as **contributed capital, not
debt** — which also settles §12's first question for you, and it is the fastest way to answer it.

⚠️ **The sweep-into-retained-earnings convention has a consequence on Schedule M-2, and it is the
part that breaks.** If the prior return put the shareholder accounts inside **line 24**, then
line 24 is no longer "accumulated earnings" — it is *earnings plus contributed capital*. For it
to keep agreeing with **M-2 line 8** (which §10 says it should), the contributions have to be
running through **M-2 line 3, other additions**. Check whether the prior return did that.

**If it did, repeat it — and know that it is not what the AAA is meant to hold.** Capital
contributions increase *basis*, not the AAA (§10). Raise it with Lilian rather than fixing it
silently: consistency with the prior year is itself a tax position (§15), and the difference is
usually invisible until the company makes a **distribution**, which is the one thing the AAA
actually decides.

_(Pilot: the prior return showed a nominal **capital stock** figure, line 23 blank, line 19 blank,
and two shareholders' **entire capital** inside line 24. A session
that assumed line 23 would have produced a Schedule L that did not balance, and one that assumed
line 19 would have turned equity into debt and changed both shareholders' basis analysis.)_

### 8B · A refundable deposit that "disappears" is usually a bookkeeping error, not an expense

When an asset like a **security deposit** goes to zero during the year with no matching expense
line, the instinct is to treat it as written off. **Ask what actually happened first**, because
the common answer is that nothing did.

A deposit that was **transferred to a new lease with the same landlord** is still an asset — the
company will still get it back. The books wrote it off; the facts did not. **That is a journal
entry, not a Schedule M-1 adjustment**, because a refundable deposit is an asset for books *and*
for tax and there is no book/tax difference to reconcile.

**Find the credit side before you conclude anything** — pull the account's ledger detail and see
what it was written off against. If it went to **rent**, then rent, the loss, Schedule L's
other-current-assets line and Schedule L's total assets are all carrying it.

🛑 **Then STOP and take it to Lilian — do not reverse it yourself.** Whether a deposit that has
moved to a new lease is an asset or an expense is a **position**, and positions are hers. A
session that finds the entry, reasons correctly that the deposit still exists, and quietly posts
the reversal has changed a filed-return figure on its own authority. **Present the entry, the
facts and the consequence; let her rule; then compute from her answer.** _(This happened: a
session recommended reversing exactly such an entry, and Lilian — who knew who had made it and
why — ruled that it stood. The analysis was sound and the decision was not the session's to
make.)_

---

## §9 · Schedule M-1 — where the books and the return disagree

This is the bridge: **book net income in at the top, the return's total income out at the
bottom.** If you understand this schedule, you understand why the return is not a copy of the
P&L.

| Line | What it does |
|---|---|
| **1** | Net income (loss) **per books** — straight off the P&L |
| **2** | Income on the return that the books did not record |
| **3** | **Expenses in the books that the return does not allow** — the common one is **3b, the 50% of meals that is not deductible** |
| **4** | Subtotal |
| **5** | Income in the books that is not on the return |
| **6** | **Deductions on the return that the books did not record** — the common one is **6a, depreciation** the bookkeeping never posted |
| **7** | Subtotal |
| **8** | **Result — must equal Schedule K line 18**, not page 1 line 22 (see below) |

> ⚠️ **M-1 line 8 is NOT page 1's ordinary income, and this trips people who assume it is.**
> The form says line 8 goes to **Schedule K, line 18** — which combines the ordinary income
> **and every separately stated item** (interest, dividends, capital gains, §179, charitable
> contributions). The two are equal **only when there are no separately stated items at all**.
> The moment the company has so much as bank interest, they differ — and a beginner who forces
> them to agree has misstated the return. **Reconcile M-1 to Schedule K line 18.**

**The two adjustments you will meet on nearly every small return:**

- **Meals at 50%** — the usual case. Half is not deductible: it adds back on M-1 line 3b **and**
  appears on Schedule K line 16c.
  ⚠️ **Not everything in a meals account is 50%.** Company recreational or social events for
  employees (§274(e)(4)) and meals *sold* to customers stay **100%** deductible. Look at what is
  actually in the account before halving it.
  ⏳ **And this rule has an expiry:** for tax years beginning after **2025**, §274(o) removes the
  employer-provided-meal deduction entirely. That is one filing season away — ⚠️ **It does NOT touch the ordinary 50% business- and travel-meal deduction**, which continues —
  do not read it as "meals stop being deductible". Re-check before applying this to a 2026 return.
- **Depreciation the books never recorded.** It deducts on line 6a.

> 💡 **A quick sanity check on the prior year:** the gap between last year's book net income and
> last year's **Schedule K line 18** *is* last year's M-1. If that gap is roughly half the prior year's meals,
> you have just confirmed both the convention and your understanding of it.

---

## §10 · Schedule M-2 — the AAA

The **Accumulated Adjustments Account** tracks the income the company has been taxed on but not
yet distributed. It matters when distributions are made — it decides whether they are tax-free.

1. **Beginning balance = last year's ending balance**, from the filed return. Copy it.
2. Add the year's income, **or** subtract the year's loss — in **column (a)**, the AAA column.
3. Subtract **non-deductible expenses** (the same figure as Schedule K line 16c).
4. Subtract **distributions**.
5. **AAA can go negative from losses.** It cannot be driven negative *by distributions*.
6. ⚠️ **Shareholder capital contributions do NOT increase AAA.** They increase *basis* (§12).
   Two different accounts that beginners merge.
7. ⚠️ **Nor does tax-exempt income.** It increases *basis* (§12's formula) but goes to the
   **Other Adjustments Account**, not the AAA. Same trap, different direction.

---

## §11 · Schedule K-1 — one per shareholder

Each K-1 carries that shareholder's **percentage share** of every Schedule K line.

- **How many K-1s there are was settled back in §3A**, by the `Final K-1` boxes on last year's
  K-1s. A shareholder whose prior-year K-1 was marked final gets **no K-1 this year** and is not
  counted in page 1 box I.
- **The percentage is ownership**, and if it changed during the year the allocation is done
  **per day, per share** — get help before attempting that by hand.
- ✅ **Tick `Final K-1` on any shareholder who left THIS year** — it is how next year's preparer
  will know, and §3A is the other half of the same habit. The box is the return's memory.
- ⚠️ **The S-corp K-1 has no capital account analysis** (that is the partnership K-1). Do not
  go looking for it.
- Box 16c and the §199A statement travel to the owner too — an owner whose K-1 is missing the
  QBI statement cannot complete their own return.

---

## §12 · Form 7203 — basis, and why a loss may not be deductible

**This is the part of an S-corp return that beginners omit, and it is often the part that
changes the answer.**

A shareholder can only deduct losses up to their **basis** in the company. Roughly:

```
  what they put IN (stock purchased + capital contributed)
+  their share of income in profitable years
+  their share of tax-exempt income
−  distributions they received            ← these come off FIRST
−  their share of non-deductible expenses  ← the Schedule K 16c figure
−  their share of losses already deducted  ← these come off LAST
=  stock basis
```

**The order matters, not just the arithmetic.** Distributions reduce basis *before* losses do,
so a shareholder who took money out has less room left for the loss than a straight subtraction
would suggest.

**And this is STOCK basis only.** A shareholder who lent the company money also has **debt
basis**, which can absorb losses after stock basis is exhausted — and is restored in its own
order before stock basis is. That is why question 1 below matters.

A loss beyond that is **suspended** — carried forward until basis is restored, not deducted now.

> 🛑 **And the failure that is NOT a deferral: a distribution above stock basis is a TAXABLE
> CAPITAL GAIN on the shareholder's 1040.** Every other basis problem here postpones a deduction;
> this one creates income the shareholder has to report. It is why §10 says the AAA decides
> whether distributions are tax-free. **If a shareholder took distributions in a loss year, check
> this before anything else.**

**Form 7203 is required** when a shareholder claims a loss, receives a **non-dividend**
distribution, disposes of stock, or receives a loan repayment from the company.

> 🔑 **It is filed with the SHAREHOLDER'S Form 1040 — not with the 1120-S.** It appears in this
> procedure because the corporate return is where you have the numbers to compute it, and
> because it decides whether the loss you just allocated is actually usable. **Prepare it here;
> it travels with the owner's personal return.** If the firm does not prepare that 1040, the
> figures still have to reach whoever does.

### The form, line by line — and the order is built into it

**You do not have to remember the ordering: the form enforces it.** Part I runs down the page in
the sequence §1.1367-1(f) requires, which is why reading it top to bottom is the safest way to
prepare it.

| Line | What it is | Where it comes from |
|---|---|---|
| **1** | Stock basis at the **beginning** of the corporation's tax year | 🔒 **line 15 of LAST year's Form 7203**, copied. If there is no prior 7203, build it from the capital account less prior losses and non-deductibles, and say in the file that it was derived |
| **2** | Basis from capital contributions / additional stock acquired | 📖 the **gross credits** in that shareholder's capital account (§5C-iii) |
| **3a–3m** | Income items that increase basis | ⚠️ **A LOSS DOES NOT GO HERE.** Line 3a says *"enter losses in Part III"*. 3k is tax-exempt income |
| **4** | Add lines 3a through 3m | ƒ |
| **5** | **Stock basis before distributions** — add lines 1, 2 and 4 | ƒ |
| **6** | **Distributions** (excluding dividend distributions) | 📖 the **gross debits** — the same figure as Schedule K 16d and K-1 box 16D |
| **7** | **Stock basis after distributions** — line 5 − line 6 | ƒ ⚠️ if zero or less, enter **-0-**, skip lines 8–14 and put -0- on line 15 |
| **8a–8c** | Non-deductible expenses · depletion · business credits | 8a is the Schedule K **16c** figure |
| **9** | Add lines 8a through 8c | ƒ |
| **10** | **Stock basis before loss and deduction items** — line 7 − line 9 | ƒ |
| **11** | Allowable loss and deduction items | ƒ **from Part III, line 47 column (c)** |
| **12** | Debt basis restoration | Only where there is debt basis (Part II) |
| **13** | Other items that decrease stock basis | |
| **14** | Add lines 11, 12 and 13 | ƒ |
| **15** | **Stock basis at the END of the year** | ƒ line 10 − line 14 → **next year's line 1** |

🛑 **The note printed under line 6 is the whole risk, stated by the form:** *"If line 6 is larger
than line 5, subtract line 5 from line 6 and report the result as a **capital gain on Form 8949
and Schedule D**."* That is the one basis failure that creates income rather than postponing a
deduction — and the form catches it for you **only if line 6 carries the real gross distributions**
(§5C-iii).

**Part II — Shareholder Debt Basis.** Zero for a shareholder who only contributed capital. The
prior year's **Part II and the K-1's *Loans from shareholder* boxes together** are the fastest
answer to §12A's first question below.

**Part III — Allowable Loss and Deduction Items.** Where the loss actually goes, and ⚠️ **the
columns are not the order you would guess**: **(a)** this year's losses and deductions · **(b)**
carryover from **last year's column (e)** · **(c) allowable against STOCK basis** — which feeds
line 11 · **(d) allowable against DEBT basis**, which feeds line 30 · **(e)** what **carries
forward**.

🛑 **Column (d) is not "disallowed".** It is loss allowed against *debt* basis. Keying the
disallowed amount there reduces debt basis by a loss that was never allowed, and the error is
invisible until it reaches next year's opening figures. **The carryforward is column (e).**

### Two header boxes that must match the prior year

- **Box D — how the stock was acquired** (original shareholder · purchased · inherited · gift ·
  other). A fact about that shareholder; it does not change year to year.
- ⚠️ **Box E — the §1.1367-1(g) election.** It reverses part of the ordering, letting losses reduce
  basis **before** non-deductible expenses. **Once made it binds every later year until the IRS
  consents to a revocation** — so this box is copied from the prior year, never decided afresh.
  If the prior year left it blank, leave it blank.

### The two questions to settle before you compute it

1. **Was money the shareholder put in a CAPITAL CONTRIBUTION or a LOAN?** Both can support
   losses, but they are tracked separately (stock basis vs debt basis) and restored in a
   different order. The books may not distinguish them — **ask**.
2. **Are the shareholders' contributions proportionate to their ownership?** If one owner
   funded the business and the other did not, **their basis is very different even at identical
   ownership percentages** — so the same loss allocation can be fully deductible for one and
   partly suspended for the other. Check each shareholder separately. Never assume symmetry.

---

## §13 · State

- **Florida does not tax S-corporations' income**, so there is normally no Form F-1120 for a
  Florida S-corp with no federal taxable income. **Confirm per client** rather than assuming.
- The **Florida Annual Report** is a completely separate filing on its own calendar and is not
  part of this return.
- If the company operated in **another state**, that state may require a return regardless.
  Check where the business actually had activity, not just where it is registered.

---

## §14 · Before you file — the tie-out checks

**Do not file until every one of these passes.** A check that fails is a mapping error, not a
rounding difference.

- [ ] 1125-A: **line 6 − line 7 = line 8**
- [ ] 1125-A line 8 **equals** page 1 line 2
- [ ] Page 1: **1a − 1b = 1c** · and 1c equals the P&L's total income **less anything in the
      P&L's income section that belongs on Schedule K instead** (interest, dividends, capital
      gains). If the client has none of those, they are simply equal
- [ ] Page 1: **1c − 2 = 3** · and 3 equals the P&L's gross profit **only if line 2 equals the
      P&L's cost of sales**. In the periodic case (§4) line 2 comes off the 1125-A instead, so
      compare deliberately rather than assuming
- [ ] Page 1: **6 − 21 = 22**
- [ ] Line 20 equals total expenses **less** everything placed on lines 7–19 **less**
      non-deductible amounts
- [ ] Schedule L: the **beginning column matches last year's filed ending column exactly**
- [ ] Schedule L: **total assets = total liabilities and equity**, and total assets equals the
      year-end balance sheet
- [ ] Schedule M-1 **line 8 equals Schedule K line 18**
- [ ] Schedule **M-2 line 8** equals **Schedule L line 24** — ⚠️ **conditional, not universal**: it holds only where the prior return ran capital contributions through **M-2 line 3** (§8A). Where it did not, the two are not meant to agree, and forcing them is the error
- [ ] Schedule M-2 beginning balance matches last year's ending balance
- [ ] The **K-1 percentages add to 100%**, and each Schedule K line equals the sum of that line
      across all K-1s
- [ ] **A Form 7203 exists for every shareholder who needs one** (§12)
- [ ] **Form 8879-CORP signed** before e-filing — ⚠️ **not Form 8879-S**, which was
      superseded from tax year 2022. Form 8879-CORP covers 1120, 1120-F and 1120-S
- [ ] **The e-file was ACCEPTED**, not merely transmitted. A rejected return is not a filed
      return — check the acknowledgement and, if it rejected, fix and resubmit before the
      deadline passes
- [ ] 🛑 **PRINT THE WHOLE RETURN AND LOOK AT THE FORM LIST — delete every blank form that got
      attached.** A form attaches itself the moment its parent line is touched, and **fixing the
      line does not detach the form**. So a number keyed on the wrong line, then moved, leaves its
      form behind — silently, and it transmits with the return.
      _(Real one: a figure keyed on page 1 line **15, Depletion**, instead of line 16 pulled in
      **Form T (Timber), the Forest Activities Schedule** — four blank pages of a forestry form on
      a bathroom-fixture retailer's return. The figure was corrected; Form T stayed. The same copy
      also carried a blank **Form 4797** and a blank **Schedule D**, asserting asset sales that
      never happened — seven of twenty pages were empty forms.)_
      **Deleting them changes no figure**, and leaving them in invites a question you have no
      reason to answer.

---

## §15 · Common pitfalls

Each of these has bitten a real return.

1. 🛑 **Treating the P&L's net income as ordinary business income.** It is not. The difference is Schedule M-1,
   and on a small return it is usually the meals disallowance and unrecorded depreciation.
2. 🛑 **Reading "inventory" as the account called Inventory.** §4's trap. Check what the prior
   return used.
3. 🛑 **Leaving advertising, rent or interest inside "other deductions" (line 20).** They have their own
   lines. The return is still arithmetically correct, but it does not match the prior year and
   nobody can compare the two.
4. 🛑 **Putting bank interest on page 1 line 5** instead of Schedule K.
5. 🛑 **Recalculating the Schedule L beginning column** instead of copying it.
6. 🛑 **Correcting the books on Schedule L** — it is "per books" on purpose.
7. 🛑 **Skipping Form 7203** because the loss "obviously" flows through. It may not (§12).
8. 🛑 **Ticking "final return" a year early** because the client is winding down.
9. 🛑 **Zero officer compensation without a decision.** A shareholder who works in the business
   is expected to take a reasonable salary. It may be defensible not to in a heavy loss year —
   but that must be a documented decision, not an oversight. See the
   [`reasonable-compensation`](../../.claude/skills/reasonable-compensation/) skill.
10. 🛑 **Changing a method because it looks wrong.** Valuation method, equity mapping, the
    grouping of accounts — consistency with the prior year is itself a tax position. Raise it
    with Lilian; do not fix it silently.

---

## §15A · 🔑 Record the return in the working-paper archive — this is part of preparing it

**Every return the firm prepares gets a file in
[`projects/tax-returns/`](../tax-returns/)** — one per return, recording what went on each line,
where each figure came from, what was decided and why, and what carries into next year.

**Write it AS you prepare, not afterwards.** The value is entirely in the sourcing, and sourcing
reconstructed a week later is exactly what the archive exists to replace.

**Why it is not optional:** a return prepared with a session's help produces hours of reasoning —
the derivations, the conventions decoded from the prior year, the traps, the judgement calls —
and **the session is deleted.** The filed PDF survives; the reasoning does not. Next year's
preparer, or the same one in twelve months, otherwise starts from the same blank page.

⛔ **It is the one place in the repo that holds client dollar figures — and the limit is absolute:**
never an SSN or ITIN, a bank or card number, a home address, a date of birth, or a login. The EIN
and shareholder names are fine. Read [the folder README](../tax-returns/README.md) before the first
file.

**The split with Client Intelligence:** what the firm *knows about the client* (obligations,
systems, history, decisions that outlive this return) goes in
[`client-intelligence/`](../client-intelligence/), which holds **no figures**. The figures for one
return go here. Cross-link them.

---

## §16 · Where things live

| What | Where |
|---|---|
| The client's prior-year filed return | Double → `JK Accounting Group > Tax Return Filed > <year>` |
| Reading that return safely | [`tools/redact-doc/`](../../tools/redact-doc/) — never open the PDF directly |
| The rules for reading client documents at all | [`double-mcp`](../../.claude/skills/double-mcp/) skill |
| What the firm knows about this client | [`projects/client-intelligence/clients/`](../client-intelligence/clients/) |
| Blank IRS forms and instructions | [irs.gov](https://www.irs.gov) — search the form number |
| A Shopify client's inventory figure | the [`shopify-year-end-inventory`](../../.claude/skills/shopify-year-end-inventory/) skill — **the number Shopify reports is usually not a cost basis** |
| Owner salary questions | the [`reasonable-compensation`](../../.claude/skills/reasonable-compensation/) skill |
| Which clients are ready to prepare | the [`tax-season-readiness`](../../.claude/skills/tax-season-readiness/) skill |

---

## Appendix A · Intake sheet

Copy this into the client's folder in Drive or Double and fill it in there. **Filled copies
never come back to the repo.**

```
CLIENT: <name>                              TAX YEAR: <year>
PREPARER: <name>                            DATE STARTED: <date>

EXTENSION
  Form 7004 filed?            [ ] yes  [ ] no      date: ______
  Original deadline: 15 Mar   Extended: 15 Sep

DOCUMENTS IN HAND
  [ ] prior-year filed return (year: ____)
  [ ] P&L this year          [ ] P&L last year
  [ ] Balance sheet this year [ ] Balance sheet last year
  [ ] depreciation schedule
  [ ] accounting basis:  [ ] accrual  [ ] cash

SHAREHOLDERS
  name ______________________  ownership ____%  contributed this year? ______
  name ______________________  ownership ____%  contributed this year? ______
  Contributions are:  [ ] capital  [ ] loans  [ ] not established — ASK

CLIENT ANSWERS (§1)
  equipment bought/sold? ______   money in/out? ______   loans changed? ______
  physical inventory count? ______   business changes? ______
  foreign accounts? ______   1099s required/filed? ______

MAP VERIFIED AGAINST PRIOR YEAR (§3)
  [ ] page 1 reproduced from last year's P&L and matches what was filed
  differences found and explained: ________________________________________

OPEN ITEMS BLOCKING THE RETURN
  1. ______________________________________________________________________
  2. ______________________________________________________________________

TIE-OUT CHECKS (§14)        [ ] all pass        date: ______
```

---

## Appendix B · The QuickBooks → 1120-S line map

The quick reference. **Confirm it against the prior year (§3) before you rely on it** — the
right-hand column is the firm's usual convention, not a rule of the form.

| QuickBooks account (typical name) | Goes to |
|---|---|
| Sales / product income | Page 1, line 1a |
| Discounts given | Reduces line 1a |
| Customer refunds / returns | Page 1, line 1b |
| Cost of goods sold accounts | Form 1125-A — line **2** (purchases), **3** (labor) or **5** (other costs). ⚠️ **Never "line 8"** — line 8 is computed (6 − 7), so no account feeds it directly |
| Channel / marketplace selling fees | ⚠️ **Client-specific.** Selling fees are not ordinarily inventoriable, so they usually belong in **other deductions**. One client's prior return puts them in cost of sales — **check §3 before copying either treatment** |
| Inventory (balance sheet) | 1125-A line 7 — ⚠️ check the subtotal used, §4 |
| `Wages & Salary` — **officers** | Page 1, line 7 (§5C-i) |
| `Wages & Salary` — staff | Page 1, line 8 — the **child** account, never a `Payroll Expenses` parent total (§5C-i) |
| `Payroll Expenses` / `Payroll Fees` **when they are the platform's fee** (Gusto, ADP) | Page 1, line 20 — a service bought, **not** wages (§5C-i) |
| Payroll tax | Page 1, line 12 |
| Business licences & fees, local taxes | Page 1, line 12 |
| Rent — any kind | Page 1, line 11 |
| Interest charge / loan interest | Page 1, line 13 |
| Advertising & promotional | Page 1, line 16 |
| Depreciation | Page 1, line 14 — from Form 4562, **not** from the books |
| Meals | Page 1, line 20 at **50%**; the other half → M-1 line 3b + Sch K 16c |
| Everything else | Page 1, line 20 + itemised statement |
| Interest income | **Schedule K line 4** — never page 1 |
| Gain/loss on equipment sold | ⚠️ **Split.** Only the **ordinary** part (Form 4797 Part II, line 17) goes to page 1 line 4. A net **§1231 gain is separately stated on Schedule K line 9** — the exact error §0B exists to prevent |
| Bank accounts (balance sheet) | Schedule L, cash |
| Credit cards payable | Schedule L, accounts payable — per the prior year's mapping |
| Sales tax payable | Schedule L, other current liabilities |
| Fixed assets, accumulated depreciation | Schedule L lines 10a / 10b — **per books** |
| Shareholder capital accounts | Schedule L equity — **per the prior year's mapping**, §8 |

---

## Appendix C · Every formula on this return, in one place

> ⚠️ **This appendix is SHORTHAND. The body governs.** Every formula here has conditions,
> exceptions and hedges stated where it is explained — the meals 50%, the discounts treatment,
> the equity mapping, the tie-outs. **If this block and a section disagree, the section is
> right.** _(An earlier version of this appendix carried three superseded formulas after the
> body was corrected and the fixes did not propagate — which is exactly the failure a
> quick-reference invites.)_

Two kinds of number go on a tax return, and telling them apart is most of the skill:

- 📖 **READ** — you look it up somewhere and copy it. The risk is reading the **wrong source**.
- ƒ **CALCULATED** — it falls out of other numbers. The risk is that a wrong input **still
  produces a plausible-looking result**.

**A calculated figure that comes out impossible — negative purchases, a balance sheet that does
not balance — is a gift.** It tells you the map is wrong. The dangerous case is the wrong figure
that looks fine, which is why §14's tie-out checks exist.

### Form 1125-A

```
line 6  =  line 1 + line 2 + line 3 + line 4 + line 5
line 8  =  line 6 − line 7

  rearranged, for whichever one you don't know
  (these three assume lines 3, 4 and 5 are zero — the usual case for these clients;
   if they are not, carry them through):
line 2  =  line 8 + line 7 − line 1          ← purchases (the usual unknown)
line 7  =  line 1 + line 2 − line 8          ← ending inventory
line 1  =  line 8 + line 7 − line 2          ← beginning inventory — a CHECK, never a plug:
                                               it must equal the prior return's line 7 (§3)
```

### Form 1120-S, page 1

```
line 1a =  sales revenue − discounts given + shipping income charged
line 1c =  line 1a − line 1b
line 3  =  line 1c − line 2
line 6  =  line 3 + line 4 + line 5

line 20 =  total expenses per the P&L
             − everything placed on lines 7 through 19
             − the non-deductible portion of any expense
line 21 =  sum of lines 7 through 20
line 22 =  line 6 − line 21
```

### Meals

```
deductible half   =  meals expense × 50%      → page 1, line 20
disallowed half   =  meals expense × 50%      → Sch M-1 line 3b AND Sch K line 16c
```

### Schedule L

```
line 15 (total assets)      =  sum of every asset line
line 27 (total liab+equity) =  sum of every liability and equity line
line 15  MUST EQUAL  line 27

retained earnings  =  total equity per the books
                      − capital stock (line 22)
                      − additional paid-in capital (line 23)
                      − any adjustments (25) or treasury stock (26)
                      ⚠️ ONLY if that is the prior year's mapping — §8
```

### Schedule K

```
line 18  =  lines 1 through 10
            − (lines 11 through 12e + line 16f)

  this is what Schedule M-1 reconciles to — NOT page 1 line 22
```

### Schedule M-1

```
line 4  =  line 1 + line 2 + line 3
line 7  =  line 5 + line 6
line 8  =  line 4 − line 7
line 8  MUST EQUAL  Schedule K line 18   ← NOT page 1 line 22
```

### Schedule M-2 (AAA)

```
line 6  =  COMBINE lines 1 through 5        ← the form's own word, and it matters:
                                              line 4 (loss) and line 5 (other reductions)
                                              are ENTERED AS NEGATIVES. Type them positive
                                              and subtract them too and you have halved
                                              the AAA — a silent, plausible-looking error.
line 8  =  line 6 − line 7 (distributions)

  where line 1 = LAST year's line 8, copied
```

### Schedule K-1 — each shareholder

```
their box  =  the matching Schedule K line × their ownership percentage

  and across all shareholders:
  sum of the K-1s for any line  MUST EQUAL  that Schedule K line
  the percentages               MUST TOTAL  100%
```

### Form 7203 — basis

```
stock basis  =  stock purchased + capital contributed
             +  their share of income in profitable years
             +  their share of tax-exempt income
             −  distributions received                     ← FIRST
             −  their share of non-deductible expenses     (the Sch K 16c figure)
             −  their share of losses already deducted     ← LAST

deductible loss this year  =  the LESSER of (their share of the loss) and (their basis)
suspended loss             =  their share of the loss − the deductible amount
```

**The ordering is part of the formula.** Distributions come off *before* losses, so a shareholder
who took money out has less room left for the loss than a straight subtraction suggests. **This is
STOCK basis only** — a shareholder who lent the company money also has **debt basis**. Full
treatment in §12.

⚠️ **Basis is per shareholder, never per company.** Two owners at the same ownership percentage
can have very different basis, so the same loss allocation can be fully deductible for one and
partly suspended for the other. §12.
