# Preparing a Form 1120-S (S-corporation return) — from QuickBooks to a filed return

> **Status:** 🟡 **DRAFT — in review with Lilian.** Written 2026-08-14 while preparing the
> firm's first 1120-S with a session assisting, and shaped by what a first-time preparer
> actually needed to be told. **Remove this note when Lilian signs it off.** ·
> **Owner:** Lilian · **Last updated:** 2026-08-14

> **Client data lives in the firm's systems, not here.** Names, EINs, figures, balances and
> filled-in worksheets belong in Google Drive / Double / QuickBooks. This SOP carries the
> **procedure and the line map** only — every amount below is a placeholder.

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
| **1** | **The Profit & Loss** | Page 1 income (lines 1a–5) and every deduction (lines 7–20) |
| **2** | **The Balance Sheet** at year end | 1125-A line 7 · box **F** total assets · the whole **end** column of Schedule L |
| **3** | **LAST year's FILED return** | 1125-A line 1 · the **beginning** column of Schedule L · M-2 line 1 · every convention (§3) |
| **4** | **The depreciation schedule** | Form 4562 → page 1 line 14 → M-1 line 6a |

⚠️ **Source 3 is a return, not a system.** When the books and the prior return disagree, the
prior return wins and the books get adjusted — never the other way round.

### How the numbers travel

```
  ┌─ P&L ──────────────┐   ┌─ BALANCE SHEET ────┐   ┌─ PRIOR RETURN ─────┐   ┌─ DEPR. SCHEDULE ─┐
  │ revenue, discounts │   │ inventory subtotal │   │ 1125-A line 7      │   │ cost, method,    │
  │ cost of sales      │   │ cash, fixed assets │   │ Sch L end column   │   │ life, in-service │
  │ every expense      │   │ liabilities,equity │   │ M-2 line 8         │   │ prior depr.      │
  └─────────┬──────────┘   └─────────┬──────────┘   └─────────┬──────────┘   └────────┬─────────┘
            │                        │                        │                       │
            │                        │  ┌─────────────────────┘                       │
            │                        │  │                                             │
            │                        ▼  ▼                                             ▼
            │              ┌────────────────────┐                          ┌──────────────────┐
            │              │  FORM 1125-A       │                          │  FORM 4562       │
            │              │  1 ← prior return  │                          │  depreciation    │
            │              │  7 ← balance sheet │                          └────────┬─────────┘
            │              │  2 = 8 + 7 − 1     │                                   │
            │              │  8 = 6 − 7 ────────┼──┐                                │
            │              └────────────────────┘  │                                │
            │                                      │                                │
            ▼                                      ▼                                ▼
  ┌───────────────────────────────────────────────────────────────────────────────────────┐
  │  FORM 1120-S, PAGE 1                                                                  │
  │   1a–1c  ← P&L revenue          2 ← 1125-A line 8        3 = 1c − 2                   │
  │   7–19   ← P&L expenses         14 ← Form 4562           20 = what is left over       │
  │   21 = sum 7…20                 22 = 6 − 21  ◄── THE NUMBER THE RETURN PRODUCES       │
  └───────────────────────────────────────┬───────────────────────────────────────────────┘
                                          │
              ┌───────────────────────────┴────────────────┐
              ▼                                            ▼
  ┌──────────────────────────┐                 ┌────────────────────────────┐
  │  SCHEDULE K              │                 │  SCHEDULE M-1              │
  │  1  ← page 1 line 22     │                 │  1  ← book net income      │
  │  4,9,11,12a ← P&L items  │                 │  3b ← non-deductible half  │
  │       that NEVER touched │                 │  6a ← depreciation the     │
  │       page 1             │                 │       books never recorded │
  │  16c ← non-deductible    │                 │  8  = 4 − 7                │
  │  18 = the reconciliation ◄─────────────────┼──  MUST EQUAL Sch K line 18│
  └────────────┬─────────────┘                 └────────────────────────────┘
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
3. **Non-deductible expenses** — Schedule K line **16c**, Schedule M-1 line **3b**, **and** as a
   reduction in Schedule M-2 and in each shareholder's basis.

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
- [ ] **Confirmation that Form 7004 (the extension) was filed**, if you are past 15 March.

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

**What this catches, in one real example (Kolo Florida, 2026-08-14).** The ending-inventory
line on the return did not equal the QuickBooks `Inventory` account. It equalled
`Total for Other Current Assets` — the `Inventory` account **plus a Shopify Clearing Account**.
Using the Inventory account alone broke the cost-of-goods schedule and drove **purchases
negative**, which is impossible. Nobody could have guessed that convention; reproducing the
prior year revealed it in ten minutes.

> ⚠️ **A number that reconciles is not the same as a number that is right.** Reproducing the
> prior year proves your **map** is right. It does not prove the underlying figures are — the
> client's cost basis, their inventory count, their classifications are separate questions.

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
account. The Kolo example above is `Inventory` **plus** the Shopify Clearing Account, which the
QuickBooks balance sheet already presents as one line: `Total for Other Current Assets`.

**Read line 7 off the balance sheet section that the PRIOR RETURN used** — §3 tells you which
one. Do not decide it from the account's name.

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
| **1c** | Balance | ƒ `= 1a − 1b` · ✅ **must equal the P&L's total income** |
| **2** | Cost of goods sold | 📖 Form 1125-A line 8 |
| **3** | Gross profit | ƒ `= 1c − 2` · ✅ **must equal the P&L's gross profit** |
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
| **7** | Compensation of officers | Salaries paid to shareholder-employees. Form 1125-E is required at **$500,000 or more** of total receipts |
| **8** | Salaries and wages | Everyone else's wages |
| **9** | Repairs and maintenance | |
| **10** | Bad debts | |
| **11** | Rents | Office, warehouse, storage, equipment rental |
| **12** | Taxes and licenses | **Payroll taxes + business licences + local taxes.** Not income tax |
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
  −  everything you placed on lines 7–18
  −  the non-deductible portion of any expense (see §9)
  =  line 20
```

Then **itemise** it in the attached statement. If your line 20 does not equal that subtraction,
you have either double-counted or dropped an account.

### 5D · Depreciation — line 14

- Comes from **Form 4562**, which you prepare from the client's depreciation schedule.
- **A full year for an asset placed in service last year is larger than its first part-year.**
  A beginner expecting "the same as last year" will understate the deduction.
- **No new assets this year means no new elections** — no §179 and no bonus depreciation
  decisions to make. Just continue the existing schedule.
- ⚠️ **If the books recorded no depreciation at all**, the deduction still belongs on the
  return. It becomes a book-to-tax difference on **Schedule M-1** (§9).

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
3. **Were Forms 1099 required, and were they filed?** Answer honestly; the firm usually knows
   because it prepares them.

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
| **17** | **§199A / QBI information** | Attach the statement. **A loss year still produces QBI information** — a negative amount that carries forward for the owner |
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
  employer-provided-meal deduction entirely. That is one filing season away — re-check before
  applying this to a 2026 return.
- **Depreciation the books never recorded.** It deducts on line 6a.

> 💡 **A quick sanity check on the prior year:** the gap between last year's book net income and
> last year's ordinary income *is* last year's M-1. If that gap is roughly half the prior year's meals,
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

---

## §11 · Schedule K-1 — one per shareholder

Each K-1 carries that shareholder's **percentage share** of every Schedule K line.

- **The percentage is ownership**, and if it changed during the year the allocation is done
  **per day, per share** — get help before attempting that by hand.
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

**Form 7203 is required** when a shareholder claims a loss, receives a **non-dividend**
distribution, disposes of stock, or receives a loan repayment from the company.

> 🔑 **It is filed with the SHAREHOLDER'S Form 1040 — not with the 1120-S.** It appears in this
> procedure because the corporate return is where you have the numbers to compute it, and
> because it decides whether the loss you just allocated is actually usable. **Prepare it here;
> it travels with the owner's personal return.** If the firm does not prepare that 1040, the
> figures still have to reach whoever does.

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
- [ ] Schedule M-2 beginning balance matches last year's ending balance
- [ ] The **K-1 percentages add to 100%**, and each Schedule K line equals the sum of that line
      across all K-1s
- [ ] **A Form 7203 exists for every shareholder who needs one** (§12)
- [ ] **Form 8879-CORP signed** before e-filing — ⚠️ **not Form 8879-S**, which was
      superseded from tax year 2022. Form 8879-CORP covers 1120, 1120-F and 1120-S
- [ ] **The e-file was ACCEPTED**, not merely transmitted. A rejected return is not a filed
      return — check the acknowledgement and, if it rejected, fix and resubmit before the
      deadline passes

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
| Wages & salary — shareholders | Page 1, line 7 |
| Wages & salary — staff | Page 1, line 8 |
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

  rearranged, for whichever one you don't know:
line 2  =  line 8 + line 7 − line 1          ← purchases (the usual unknown)
line 7  =  line 1 + line 2 − line 8          ← ending inventory
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

retained earnings  =  total equity per the books − capital stock
                      (only if that is the prior year's mapping — §8)
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
line 6  =  line 1 + line 2 + line 3 − line 4 − line 5
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
basis  =  stock purchased + capital contributed
          + their share of income in profitable years
          − their share of losses already deducted
          − distributions received

deductible loss this year  =  the LESSER of (their share of the loss)  and  (their basis)
suspended loss             =  their share of the loss − the deductible amount
```

⚠️ **Basis is per shareholder, never per company.** Two owners at the same ownership percentage
can have very different basis, so the same loss allocation can be fully deductible for one and
partly suspended for the other. §12.
