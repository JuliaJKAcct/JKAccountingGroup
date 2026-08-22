# GOSSIP MIAMI LLC — Form 1120-S · 2025 SHORT PERIOD (1 January – 29 October 2025)

> **Status:** 🟡 **In preparation — not filed, not transmitted** · **Prepared by:** Lilian (session-assisted, 2026-08-21) · **Reviewed by:** _(pending)_
> **Client Intelligence:** [`clients/gossip-miami.md`](../../client-intelligence/clients/gossip-miami.md)
> **Procedure:** [`sops/form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) · entry point [`tax-return-sop`](../../../.claude/skills/tax-return-sop/) §4A
> **EIN:** 99-2586917 — **retained by the new owner after the sale**, so both 2025 short periods are one taxpayer.

> ⛔ **No SSN/ITIN, no bank or card numbers, no home addresses, no dates of birth, no logins.**

> 🛑 **THIS RETURN RESTS ON AN ASSUMPTION THAT NOBODY HAS CONFIRMED.**
> Everything below assumes the **S election terminated on 30 October 2025** because the buyer is not a
> US citizen or resident. **That fact is unverified.** Julia instructed the firm to prepare the short-period
> return on that basis and was unavailable to confirm the underlying fact _(relayed by Lilian, 2026-08-21)_.
> **If the buyer turns out to be a US person, there is ONE full-year 1120-S and this entire cut is wrong.**
> Confirm before anything is transmitted.

---

## 0 · The year in one paragraph

Gossip Miami LLC is a North Miami Beach beauty salon, taxed as an S corporation since 1 January 2024,
owned 50/50 by two members. On **29 October 2025 they signed, and at 12:01 a.m. on 30 October 2025 they
completed, the sale of 100% of the membership interests to a single individual buyer.** The company was
**not** wound up — it continues under the buyer, with the **same EIN**, the same lease and the same Florida
sales-tax certificate. Nothing about the sale itself goes on this return: the sellers sold *interests*, so
the gain is theirs personally and belongs on their 1040s. What the sale does to this return is **end the
tax year early**: on the assumption above, 2025 splits into an **S short period (1 Jan – 29 Oct)** reported
here, and a **C short period (30 Oct – 31 Dec)** which is the buyer's Form 1120 and is not ours. It is also
the first year the company is big enough to owe a balance sheet on the return.

---

## 1 · Source documents used

| Document | Basis | Date pulled | Notes |
|---|---|---|---|
| Profit & Loss 2025 (full year) | **Accrual** (per the export footer) | 2026-08-21, from Double `Others > 2025 > Financial docs for tax prep` | Built by Maria from bank/card activity + quarterly Vagaro true-ups |
| Balance Sheet at 31 Dec 2025 | Accrual | same | Reproduced exactly by the ledger split below — a hard validation of the data |
| **General Ledger 2025** (2,404 rows) | Accrual | same | ⚠️ The **only** source that can be cut at 29 October. Every figure in §3 comes from splitting it |
| Prior-year **filed** return — 2024 Form 1120-S package | Cash | 2026-08-21, Double `Tax Return Filed > 2024`, read through `tools/redact-doc/` | The authority for the opening AAA, the conventions, and the shareholder facts |
| Membership Interest Purchase Agreement + Assignment | — | 2026-08-21, Double `Others > 2025 > Purchase and sell agreements` | Fixes the cut-off date at 12:01 a.m. 30 Oct 2025 |
| 2025 Form 1120-S and its instructions | — | 2026-08-21, irs.gov | Pulled to verify item G/H wording, the termination due date, the Schedule L rule and Schedule B Q11 |
| Depreciation schedule / Form 4562 | — | — | **Does not exist.** The company has never carried fixed assets on its books or on the 2024 return — see §6 |
| 2025 Business Tax Organizer (Double) | — | 2026-08-21 | **Published 2026-06-29, ZERO answers.** Contributes nothing |

---

## 1A · 🛑 THE EXTENSION GATE — checked, and it is not clean

**The SOP makes this the first hard stop, before any figure, because it cannot be fixed later.** It was
missed in the first draft of this working paper and is recorded here in full.

| Question | Answer |
|---|---|
| What is the due date of **this** return? | 🔑 **Not 15 March.** The 2025 instructions, quoted: *"If the S corporation election was terminated … during the tax year and the corporation reverts to a C corporation, file Form 1120-S for the S corporation's short year **by the due date (including extensions) of the C corporation's short year return**."* The C short period ends **31 December 2025**, so the unextended date is **15 April 2026**, extended **15 October 2026** |
| Was a Form 7004 filed? | ✅ **A `7004 2025 Ext.pdf` is in Double** (`Tax Return Filed > 2025`) and Double's `Ext. Filed` property is ticked |
| 🔴 **Does that 7004 actually extend THIS return?** | ⛔ **NOT ESTABLISHED.** It was filed before anyone here knew the year would be cut, so it was almost certainly filed as an ordinary **calendar-year 1120-S** extension. Whether an extension keyed that way covers a **short period ending 29 October**, and whether the extension that governs is the **C short period's** — which only the **buyer** could have filed — has not been checked |
| Where does that leave us today (**21 August 2026**)? | 🟡 **Probably inside the window, on the reading that the extended date is 15 October 2026 — with roughly eight weeks left.** ⛔ **If no valid extension covers it, the return is already late**, and the S-corporation late-filing penalty runs **per shareholder, per month** |

🛠️ **Fix, before anything else on this return:** open the `7004 2025 Ext.pdf` and read **which form and
which period** it names, and establish whether the buyer extended the C short period. **If either is
wrong, tell Julia the same day** — this is the one item where a week costs money.

---

## 2 · Adjusting entries made before preparing

| # | Entry | Amount | Why | Who decided |
|---|---|---|---|---|
| 1 | **None posted to the books.** | — | Every difference between the books and this return is handled as a **tax adjustment on Schedule M-1**, not as a journal entry. The books stay as Maria built them | Session, 2026-08-21 |

⚠️ **Two book items that a reviewer will ask about and that were deliberately NOT adjusted in the ledger:**
**(1)** the **accrued rent** — it *is* in the numbers below, as an M-1 add-back (§4 decision 2); and **(2)** the
**post-sale personal card spending** left inside Entertainment Meals — which ⚠️ **does NOT touch any figure on
this return**, because it falls after 29 October and lands in the C short period (§4 decision 4). It is recorded
here because it is evidence about how the whole meals account should be read, **not** because it moves a line.

---

## 3 · The forms, line by line

**Legend:** 📖 read from a report · ƒ calculated · 🔒 carried from the prior return
**Amounts:** the *Value* column is **whole dollars, as typed**. Cents appear in the source column where the
derivation needs them. Totals are computed by the software from rounded lines, so a **±$1** difference
against the exact arithmetic is normal and is not an error.

### 🧭 The order of preparation — and the one circularity

```
①  Header + Schedule B            (the accounting method decides everything below)
        ↓
②  Page 1 lines 1a–6   INCOME     ← from the general ledger, cut at 29 Oct
        ↓
③  Page 1 lines 7–22   DEDUCTIONS ← same cut, PLUS the two tax adjustments
        ↓  line 22
④  Schedule K line 1              ← page 1 line 22, unchanged
        ↓
⑤  Schedule L      the balance sheet          ⚠️ see the date question in §4 decision 6
        ↓
⑥  Schedule M-1    book income → Schedule K   ← needs BOTH ③ and the book net income
        ↓
⑦  Schedule M-2    the AAA                    ← needs ③, the nondeductible figure, AND ⑧
        ↓ ⇄
⑧  Distributions   Schedule K line 16d        ← from the shareholder ledger, NOT the balance sheet
        ↓
⑨  Two Schedules K-1, 50% each + Statement A (§199A)
```

> ⚠️ **The circularity is between ⑦ and ⑧.** Schedule M-2 line 7 cannot exceed what line 6 leaves —
> so you must compute the AAA **before** you know how much of the distributions actually lands on M-2,
> and you must know the distributions **before** you can see whether they exceed it. Compute line 6
> first, then cap line 7 against it. On this return it bites: see §4 decision 5.

---

### 3.1 · Page 1 — header

| Item | Answer | Why · where it came from | 🛠️ Where it is ENTERED |
|---|---|---|---|
| Tax year boxes | **beginning 01-01-2025, ending 10-29-2025** | 🔴 **The single most important entry on the return.** The pre-printed line reads *"For calendar year 2025 or tax year beginning ___, 2025, ending ___"* — a short period is stated **here** and nowhere else. Leave it blank and the return claims to be a full calendar year | ✅ typed — the software's return-header / filing-period screen, **not** the form face |
| Name / address | GOSSIP MIAMI LLC, North Miami Beach FL | 🔒 2024 return | ✅ typed |
| **A** S election effective date | **01-01-2024** | 🔒 2024 return item A, corroborated by the Form 2553 in that package | ✅ typed |
| **B** Business activity code | **812112** | 🔒 2024 return (beauty salons) | ✅ typed |
| **C** Schedule M-3 attached | **No** — leave unchecked | M-3 starts at $10 million of total assets | ✅ |
| **D** EIN | **99-2586917** | 🔒 2024 return — **and confirmed by the sellers as unchanged after the sale** | ✅ typed |
| **E** Date incorporated | **02-01-2023** | 🔒 2024 return | ✅ typed |
| **F** Total assets | **29,901** | 📖 Schedule L line 15 column (d). The instruction is explicit: *"If the corporation is required to complete Schedule L, include total assets reported on Schedule L, line 15, column (d), on page 1, item F."* ⚠️ Becomes **35,522** if §4 decision 6 flips to the 29 October column | **computed — do not type** (it follows Schedule L) |
| **G** *"Is the corporation electing to be an S corporation beginning with this tax year?"* | 🔴 **No** | The election began **1 Jan 2024**, not this year. ⚠️ **The 2024 return answered YES and was right to** — that was the first S year. Copying 2024 here would be wrong, and a `Yes` obliges you to attach Form 2553 | ✅ typed — **answer it, never leave it blank** |
| **H(1)** Final return | 🛑 **DO NOT CHECK** | Verified against the 2025 instructions, quoted: *"If this is the corporation's final return and **it will no longer exist**, check the 'Final return' box."* **This company continues to exist** under the buyer | ✅ |
| **H(5)** S election termination | ✅ **CHECK IT** | Same instruction: *"If the corporation has terminated its S election, check the 'S election termination' box."* This is the box that describes this return | ✅ typed |
| **H(2) (3) (4)** | unchecked | No name change, no address change, not an amendment | ✅ |
| **I** Number of shareholders during any part of the tax year | **2** | The two selling members, per the **filed 2024 K-1s** (50 shares each, neither marked Final). ⚠️ **The buyer is NOT counted** — he became a shareholder on 30 October, *after* this short period ended. 🔴 **And a contradiction that has to be seen by whoever signs:** the 2025 sale agreement names a **third** person among the sellers/members — someone the 2024 return shows ceased to be an owner in 2024. **The filed return governs and the answer is 2**, but the disagreement is real and is §6 finding 13 | ✅ typed |
| **J(1) (2)** | unchecked | No §465 aggregation, no §469 grouping — reproduces 2024 | ✅ |

### 3.2 · Page 1 — income (lines 1a–6)

| Line | Concept | Value | Where it came from | 🛠️ Where it is ENTERED |
|---|---|---|---|---|
| **1a** | Gross receipts or sales | **390,056** | ƒ `Sales 362,042.48 + card-surcharge income 8,659.84 + Tips 29,064.57 − discounts 9,711.10 = 390,055.79`. 🔴 **The tips are in here and their payout has not been located — §6 finding 2.** ⚠️ **Discounts go INSIDE 1a, not on 1b** — 1b is returns and allowances, and the 2024 return also left it empty | ✅ typed |
| **1b** | Less returns and allowances | **0** | 📖 There is no refunds-to-customers account. Reproduces 2024 | ✅ (leave blank) |
| **1c** | Balance | **390,056** | ƒ `= 1a − 1b` | **computed — do not type** |
| **2** | Cost of goods sold | **0** | 📖 No Form 1125-A. The salon is a service business; the small product cost is **already netted inside revenue** by the Vagaro entries (*"In-House Product Sales net of business cost"*). Reproduces the 2024 convention exactly — 2024 also showed no COGS. ⚠️ **§6 finding 11** — a presentation to raise, not to change unilaterally | ✅ (leave blank) |
| **3** | Gross profit | **390,056** | ƒ `= 1c − 2` | **computed — do not type** |
| **4** | Net gain (loss), Form 4797 | **0** | 🔴 **Deliberately blank, and this is the line everyone expects to carry the sale.** It does not. The members sold their **membership interests**; the company sold nothing, so there is no asset disposition on this return | ✅ (leave blank) |
| **5** | Other income (loss) | **0** | 📖 No interest, no dividends, no other trade-or-business income in the ledger | ✅ (leave blank) |
| **6** | **Total income** | **390,056** | ƒ `= 3 + 4 + 5` · ✅ must equal the P&L's `Total for Income` for 1 Jan – 29 Oct | **computed — do not type** |

> ⚠️ **What line 1a is NOT.** It is not the full-year P&L figure (391,368.88) — that includes **1,313.09**
> banked after the cut, which belongs to the C short period (§4 decision 3). And it is **not complete**:
> October carries no cash sales, tips, surcharge or discounts at all, because there is no Vagaro export
> for Q4 (§6, finding 1). **This figure is understated by an amount nobody has measured.**

### 3.3 · Page 1 — deductions (lines 7–22)

| Line | Concept | Value | Where it came from | 🛠️ Where it is ENTERED |
|---|---|---|---|---|
| **7** | Compensation of officers | **0** | 📖 **No payroll was run in 2025** — no wage accounts, no payroll-tax accounts, no W-2s. Reproduces 2024. ⚠️ See §6 finding 6 (reasonable compensation) | ✅ (leave blank) |
| **8** | Salaries and wages | **0** | 📖 Same. ⚠️ **`Contractors` is NOT wages** — it is contract labour and belongs on line 20 | ✅ (leave blank) |
| **9** | Repairs and maintenance | **0** | 📖 No such account | ✅ |
| **10** | Bad debts | **0** | 📖 No receivables | ✅ |
| **11** | **Rents** | **51,202** | ƒ `Rent account 56,838.00 − the 5,636.00 accrued and never paid = 51,202.00`. 📖 Nine monthly payments actually left the bank (February's was accrued, not paid). **Cash method — §4 decision 2** | ✅ typed |
| **12** | Taxes and licenses | **1,168** | 📖 `License and permits` 1,168.40 — the municipal permit renewals. ⚠️ **No sales tax here**: the company uses the net method, so tax collected never touched the P&L | ✅ typed |
| **13** | Interest | **0** | 📖 No loan or card interest was charged to expense | ✅ |
| **14** | Depreciation | **0** | 📖 **No fixed assets exist on the books, and none were on the 2024 return.** ⚠️ §6 finding 5 — the 2024 purchase schedule listed salon equipment, and none of it was ever capitalised | ✅ (leave blank) |
| **15** | Depletion | **0** | Not applicable | ✅ |
| **16** | **Advertising** | **3,630** | 📖 `Advertising` 3,630.16. ⚠️ **Has its own line — do not leave it inside other deductions** | ✅ typed |
| **17** | Pension, profit-sharing | **0** | 📖 None | ✅ |
| **18** | Employee benefit programs | **0** | 📖 None — there are no employees | ✅ |
| **19** | Energy efficient commercial buildings (Form 7205) | **0** | Not applicable. ⚠️ It exists only to remind you that **lines 20/21/22 are one lower on any pre-2023 checklist** | ✅ |
| **20** | **Other deductions** (statement) | **282,605** | ƒ the itemised statement below | ✅ typed — **on the statement/detail screen, which totals to line 20**; the line itself usually will not accept a number |
| **21** | Total deductions | **338,606** | ƒ `= sum of lines 7–20`. In cents **338,605.95 → 338,606**. ⚠️ Adding the *rounded* lines instead gives **338,605** — the other branch, below | **computed — do not type** |
| **22** | 🎯 **Ordinary business income (loss)** | 🔴 **51,450 or 51,451 — read it off the keyed return, see below** | ƒ `= line 6 − line 21`. **Cents branch: 390,056 − 338,606 = 51,450.** **Rounded-lines branch: 390,056 − 338,605 = 51,451.** → **carries to Schedule K line 1** | **computed — do not type** |

> 🔴 **THE ONE-DOLLAR PROBLEM, AND THE RULE THAT SETTLES IT — read this before keying.**
> Rounding each line and then adding gives **51,451**; keeping cents to the end gives **51,450**. Which one
> appears depends on whether the software holds cents internally (most do) or totals what you typed.
> ⚠️ **Neither figure is wrong. What WOULD be wrong is mixing them.**
> 🛠️ **So: key page 1 first, read line 22 off the screen, and make that figure the one that appears on
> Schedule K line 1, Schedule K line 18, Schedule M-1 line 8, Schedule M-2 line 2 and — halved — on the two
> K-1s, whose box 1 amounts must SUM to it exactly.** If line 22 comes out 51,451, the K-1 halves are
> **25,726 / 25,725**, and Schedule M-1 line 3 becomes **6,904** so that line 4 still reaches line 22.
> ⚠️ **And put the odd dollar in the right place on the M-1.** On the 51,451 branch it belongs on **line 1,
> net income per books (44,548)** — the dollar is created by rounding the *deductions*, which flow through book
> income too. ⛔ **It does NOT go on line 3:** line 3 is `5,636 + 1,267 = 6,903`, and its 3b component must stay
> equal to Schedule K line 16c. **Everything below is written on the 51,450 branch; if the software gives
> 51,451, shift line 1 and line 22 — nothing else.**

#### Statement to attach — Form 1120-S, line 20, Other deductions

| Description | Amount |
|---|---|
| Independent contractor ⚠️ *(a related party is inside it — §6 finding 12; and this is where the TIPS PAYOUT would sit if it was made at all — §6 finding 2)* | 248,630 |
| Supplies and materials | 20,097 |
| Bank charges | 3,206 |
| Utilities | 2,834 |
| Software | 2,523 |
| Legal and professional | 1,389 |
| **Meals (50% of 2,533.44 — §274(n))** | **1,267** |
| Insurance | 970 |
| Internet | 798 |
| Dues and subscriptions | 704 |
| Travel | 105 |
| Security | 64 |
| Automobile and truck | 18 |
| **TOTAL** | **282,605** |

> 🔑 **How line 20 was built, and the check that proves nothing was dropped:**
> `total book expenses for the period 345,508.67 − lines 11/12/16 as filed (51,202.00 + 1,168.40 + 3,630.16)
> − the accrued rent 5,636.00 − the disallowed half of meals 1,266.72 = 282,605.39`. ✅ It agrees.

### 3.4 · Schedule B — every question, with the answer and the reason

| # | Question | Answer | Why |
|---|---|---|---|
| **1** | Accounting method | 🔴 **a — Cash** | 🔒 The 2024 filed return checked **Cash**. A method change needs Form 3115; consistency is itself a tax position. **This one answer drives lines 11, 1a and the M-1** — §4 decisions 2 and 3 |
| **2a / 2b** | Business activity / product or service | **BEAUTY SALON** / **SERVICE** | 🔒 2024 return, verbatim |
| **3** | Any shareholder a disregarded entity, trust, estate or nominee? | **No** | Both K-1s in the 2024 package show entity type **Individual** |
| **4a / 4b** | Own 20%+ of a corporation / 20%+ of a partnership? | **No / No** | Nothing in the ledger or the agreements |
| **5a / 5b** | Restricted stock / options outstanding? | **No / No** | An LLC with two members and no such instruments |
| **6** | Form 8918 material advisor? | **No** | |
| **7** | Publicly offered debt with OID? | unchecked | |
| **8** | Net unrealized built-in gain (former C corporation) | **blank** | 🔴 **Load-bearing:** the company has **never been a C corporation** before this year, so there is **no accumulated E&P** — which is why the excess distributions in §4 decision 5 cannot be a dividend |
| **9** | §163(j) election for a real property or farming business? | **No** | |
| **10** | Excess business interest / receipts over **$31 million** / tax shelter? | **No** | ⚠️ The 2025 form says **$31 million** — 2024 said $30 million. Neither is close. **No Form 8990** |
| **11** | Receipts **and** assets both under $250,000? | 🔴 **No** | The form requires **both**: *"(a) total receipts … less than $250,000"* **and** *"(b) total assets at the end of the tax year … less than $250,000."* Receipts are 390,056. → **Schedules L and M-1 are REQUIRED.** ⚠️ 2024 answered **Yes** and filed neither — **this is the first year they exist**, so there is no prior-year Schedule L to reproduce |
| **12** | Non-shareholder debt cancelled or forgiven? | **No** | |
| **13** | QSub election terminated or revoked? | **No** | |
| **14a** | Payments requiring Forms 1099? | 🔴 **Yes** | Tested against the ledger, as a fact must be: 248,630 of contract labour, many individual payees, several far above the $600 floor |
| **14b** | Did or will the corporation file them? | 🛑 **See §4 decision 7 — this one is not ours to answer alone** | No 1099s were filed and the firm has not been engaged to file them. **"Yes" here would be a false statement on a signed return** |
| **15** | Intend to self-certify as a Qualified Opportunity Fund? | **No** | ⚠️ The 2025 wording changed from 2024's *"Is the corporation attaching Form 8996…"* |
| **16** | Received or disposed of a digital asset? | **No** | Tested against the ledger — no crypto activity of any kind in 2,404 rows. ⚠️ That is *our* search, not the client's confirmation |
| **17** | Reserved for future use | — | New empty line on the 2025 form |

### 3.5 · Schedule K — the pass-through items

| Line | Concept | Value | Where it came from | 🛠️ Where it is ENTERED |
|---|---|---|---|---|
| **1** | Ordinary business income (loss) | **51,450** | ƒ page 1 line 22, unchanged | **computed — do not type** |
| **2–15** | rentals, interest, dividends, royalties, capital gains, §179, contributions, credits, AMT | **all blank** | 📖 None exist. ⚠️ A blank here is a **fact about the entity**, not an omission: this company earns one kind of income | ✅ |
| **16a / 16b** | Tax-exempt interest / other tax-exempt income | **0** | None | ✅ |
| **16c** | **Nondeductible expenses** | **1,267** | ƒ the disallowed half of meals, 1,266.72. **Flows twice more**: it reduces the AAA on M-2 line 5, and it reduces each shareholder's basis on Form 7203 | ✅ typed |
| **16d** | **Distributions** | **42,517** | 📖 the **Draw** account's movement 1 Jan – 29 Oct = 42,516.65. 🛑 **Read off the shareholder ledger, never the balance sheet** — §4 decision 5 | ✅ typed |
| **16e** | Repayment of loans from shareholders | **0** | The owner ATM deposits went **in**, not out; nothing was repaid in the period | ✅ |
| **16f** | Foreign taxes | **0** | | ✅ |
| **17a / 17b / 17c** | Investment income / expenses / dividends from AE&P | **0** | 17c is 0 **because there is no accumulated E&P** (Schedule B item 8) | ✅ |
| **17d** | Other items — **code AC, Gross receipts for §448(c)** | **390,056** | ƒ line 1c. 🔒 Reproduces the 2024 convention, which attached exactly this statement. ⚠️ For the §448(c) *test* a short period is annualised; the figure **reported** is the actual short-period receipts | ✅ typed (statement) |
| **18** | Income (loss) reconciliation | **51,450** | ƒ `lines 1–10 − (11–12e + 16f)` = 51,450 · ✅ **must equal Schedule M-1 line 8** | **computed — do not type** |

### 3.6 · Schedule L — the balance sheet ⚠️ *(read §4 decision 6 before filling the end column)*

| Line | Concept | Beginning (1 Jan 2025) | **End — at 31 Dec** *(the instruction's default)* | *(alternative: at 29 Oct)* | Where it came from |
|---|---|---|---|---|---|
| **1** | Cash | **987** | **0** | *5,621* | 📖 the running balance of the company's TD business checking account at that date |
| **6** | Other current assets *(statement: undeposited cash sales)* | 0 | **29,901** | *29,901* | 📖 the `Cash Sales` account — Vagaro takings recorded but never banked. ⚠️ §4 decision 8 |
| **15** | **Total assets** | **987** | **29,901** | *35,522* | ƒ → **page 1 item F** |
| **16** | Accounts payable | 0 | 0 | *0* | 📖 the A/P account is nil at every date |
| **18** | Other current liabilities *(statement: company credit card 407 + accrued rent 5,636)* | 0 | **5,975** | *6,043* | 📖 the company credit-card balance + the accrued-rent liability |
| **19** | **Loans from shareholders** | 0 | **25,140** | *24,440* | 📖 the `Loan from Owners` account — owner cash deposited into the company. ⚠️ §4 decision 9 |
| **22** | Capital stock | 0 | 0 | *0* | An LLC issued no stock; the 2024 return recorded none |
| **23** | Additional paid-in capital | 0 | 0 | *0* | See line 24 — the sweep convention |
| **24** | **Retained earnings** | **987** | **(1,214)** | *5,039* | ƒ **all equity swept into one line**: draw + contributions + prior retained earnings + the period's book net income |
| **27** | **Total liabilities and shareholders' equity** | **987** | **29,901** | *35,522* | ✅ **equals line 15 at every date** |

> 🔑 **Two validations worth recording.** (1) The 31 December column reproduces **exactly** the Balance Sheet
> Maria delivered (total equity −1,213.50, total assets 29,901.03) — so the ledger split is arithmetically
> sound. (2) The opening column balances at 987 on its own.
> 🔴 **But the opening column does not tie to the tax history, and cannot.** 2024 filed **no** Schedule L, and
> its AAA closed at **(26,783)** while the books open at **+987** — a gap of **27,770** that is a bookkeeping
> plug, not a transaction. **State it; do not force either side to the other.** §6 finding 4.

### 3.7 · Schedule M-1 — book income → return income

| Line | Concept | Value | Where it came from |
|---|---|---|---|
| **1** | Net income (loss) per books | **44,547** | ƒ the ledger cut at 29 Oct: income 390,055.79 − book expenses 345,508.67 = 44,547.12 |
| **2** | Income on Schedule K not on the books | 0 | none |
| **3** | **Expenses on the books not on Schedule K** | **6,903** | ƒ `accrued rent 5,636.00 + disallowed half of meals 1,266.72` |
| **3b** | *of which* travel and entertainment | **1,267** | 🔑 **The meals half goes on 3b specifically**; the accrued rent is a **timing** difference and goes on line 3 itemised |
| **4** | Add lines 1 through 3 | **51,450** | ƒ |
| **5 / 6 / 7** | Income on books not on K / deductions on K not on books | 0 | none |
| **8** | Income (loss) — Schedule K line 18 | **51,450** | ƒ `= line 4 − line 7` · ✅ **ties to Schedule K line 18 exactly** |

### 3.8 · Schedule M-2 — the AAA 🛑 *the trap on this return*

| Line | Concept | Column (a) AAA | Where it came from |
|---|---|---|---|
| **1** | Balance at beginning of tax year | **(26,783)** | 🔒 **2024 filed return, Schedule M-2 line 8.** The only figure on this return that comes from the prior year, and it is not negotiable |
| **2** | Ordinary income from page 1, line 22 | **51,450** | ƒ |
| **3** | Other additions | **0** | Capital contributions do **not** enter the AAA on the textbook convention, and the 2024 return put nothing here |
| **4** | Loss from page 1, line 22 | 0 | It is an income year |
| **5** | Other reductions | **(1,267)** | ƒ the nondeductible meals — Schedule K line 16c |
| **6** | Combine lines 1 through 5 | **23,400** | ƒ `−26,783 + 51,450 − 1,267` |
| **7** | **Distributions** | 🔴 **23,400 — CAPPED, not 42,517** | 🛑 The AAA cannot be driven negative by distributions. **The excess 19,117 is not entered on Schedule M-2 at all** |
| **8** | Balance at end of tax year | **0** | ƒ `= line 6 − line 7` |

> 🛑 **This is the single most misread part of this return, so read it twice.** Schedule K line 16d says
> **42,517** and Schedule M-2 line 7 says **23,400**, and *both are right*. The K-1 reports what the
> shareholders actually received; the AAA only absorbs what it has room for. **Do not "fix" the difference,
> and do not copy 42,517 into line 7.**
> 🔑 **And the consequence that leaves this return:** the **19,117 excess** is not taxed here — it is tested
> against each shareholder's **own stock basis** on their Form 7203, which lives on their 1040 and not on
> this return. **Because there is no accumulated E&P (Schedule B item 8), it cannot be a dividend** — it is a
> return of basis, and a capital gain only if it exceeds basis. §8B.
> ✅ **The firm's netting policy was tested and does NOT apply**
> ([1120-S SOP §5C-v](../../sops/form-1120s-preparation.md)): gate 1 requires contributions to **exceed**
> distributions, and here contributions are 2,021.45 against distributions of 42,516.65. **Gate 1 fails →
> both halves are reported GROSS.** ⚠️ **A caveat on how gate 1 was tested:** the SOP applies it *per shareholder*,
> and the books hold only pooled totals (§6 finding 10), so it was tested entity-wide. **The conclusion is safe
> anyway, because gate 3 fails independently** — the AAA before distributions is smaller than the distributions,
> exactly the case the SOP warns is *not* neutral. **No per-shareholder split could rescue netting here.**

### 3.9 · Schedule K-1 — box by box, both shareholders

**Two K-1s, identical in shape, 50% each.** The selling members held 50 shares each for the whole of this
short period, so there is no per-day arithmetic *within* it — the short period **is** the mechanism that
splits the year.

| Part / box | Shareholder 1 | Shareholder 2 | Why · where it lands on their 1040 |
|---|---|---|---|
| **Final K-1** checkbox | 🔴 **CHECKED** | 🔴 **CHECKED** | They sold their entire interest and the S election ended — neither will receive another K-1 from this company. ⚠️ §4 decision 10: the instruction's only explicit sentence about this box pairs it with the *Final return* box, which we are **not** ticking |
| Amended K-1 | unchecked | unchecked | |
| **A** Corporation's EIN | 99-2586917 | 99-2586917 | The same EIN the buyer kept |
| **B** Corporation's name/address | GOSSIP MIAMI LLC | same | |
| **C** IRS Center | E-FILE | E-FILE | 🔒 2024 convention |
| **D** Corporation's total shares — beginning / end | 100 / 100 | 100 / 100 | 🔒 2024 return. "End" means end of **this short period** |
| **E** Shareholder's identifying number | *(from the client file in Double — never written here)* | same | ⛔ Never in the repo |
| **F1** Shareholder name/address | Makalendra | Bogopolska | 🔒 2024 K-1s |
| **F3** Type of entity | Individual | Individual | 🔒 2024 K-1s → also the answer to Schedule B question 3 |
| **G** Current year allocation percentage | **50.00000%** | **50.00000%** | 🔑 **A ruling, not a fact, in most sale years — but not here.** Because the year was *cut* at the sale, both held 50% for every day of this short period, so 50% is the plain arithmetic |
| **H** Shareholder's shares — beginning / end | 50 / 50 | 50 / 50 | They still held them on 29 October; the transfer was 12:01 a.m. on the 30th |
| **I** Loans from shareholder — beginning / end | *(see below)* | *(see below)* | 🔴 **24,440 of shareholder loans sit on Schedule L line 19 and must be split between the two K-1s here** — whose money it was has never been established (§4 decision 9). **Do not leave this at zero by default** |
| **Box 1** Ordinary business income | **25,725** | **25,725** | ƒ 50% of 51,450 → their **Schedule E, Part II**, line 28 — *not* Schedule C, and not subject to self-employment tax |
| **Boxes 2–15** | blank | blank | Blank because the entity has no such items — see Schedule K |
| **Box 16 code C** Nondeductible expenses | **633** | **634** | ƒ 50% of 1,267 (the odd dollar to either; the two must sum to Schedule K). 🔑 **Reduces stock basis on Form 7203 and is deducted nowhere** |
| **Box 16 code D** Distributions | **21,258** | **21,259** | ƒ 50% of 42,517. 🔴 **This 50/50 split is an ASSUMPTION, not a reading.** The books carry **one pooled `Draw` account** with no per-shareholder detail, and [SOP §5C-iii](../../sops/form-1120s-preparation.md) says a shareholder-level question is never answered from a pooled figure. **§6 finding 10 — ask for the split before filing**; the same paper refuses to assume it for the shareholder loans (item I) and for basis (§8B), and it should not assume it here either. 🛠️ On the 1040 side it is typed on the **K-1 input screen at box 16 code D**, never on Form 7203 itself |
| **Box 17 code AC** Gross receipts for §448(c) | **195,028** | **195,028** | ƒ 50% of 390,056. 🔒 Exactly the 2024 convention (that year: 108,672 each of 217,344) |
| **Box 17 code V** §199A information | **STMT** | **STMT** | Points to Statement A below |
| **Boxes 18 / 19** more than one activity | unchecked | unchecked | One activity |

#### Statement A — QBI pass-through reporting (§199A), one per shareholder

| Item | Amount | Note |
|---|---|---|
| Ordinary business income (loss) | **25,725** each | |
| W-2 wages | **0** | 🔴 **Load-bearing.** Zero wages means the shareholder's §199A deduction is capped by the wage limitation once their taxable income passes the threshold — **their** return, but caused by **this** entity |
| UBIA of qualified property | **0** | No fixed assets on the books (§6 finding 5) |
| SSTB? | **No** | 🔒 The 2024 return answered No. A beauty salon is not a specified service trade or business |

---

## 4 · Decisions taken, and the alternative

| # | Decision | Chosen | The alternative, and what it moves | Who decided · when |
|---|---|---|---|---|
| **1** | 🛑 **Is the S election gone at all?** | **Assume YES — prepare the short period** | If the buyer is a US person the election survived: **one full-year 1120-S**, three K-1s, and this entire working paper is re-cut. **Nothing here is safe to transmit until this is confirmed** | **Julia**, relayed by Lilian · 2026-08-21. ⚠️ Julia unavailable to confirm the underlying fact |
| **2** | Accounting method, and the accrued rent | **Cash — the 5,636 accrued rent is NOT deducted** | Accrual would deduct it: line 11 → 56,838, **line 22 → 45,814**, and M-1 line 3 loses 5,636. But the method is the one on the 2024 filed return and changing it needs Form 3115 | Session, from the 2024 return · 2026-08-21 |
| **3** | The receipts banked after the cut (1,313.09) | **They belong to the C short period — excluded here** | 🔑 **Lilian's reading — that they were services performed before the sale and merely collected later — is the ACCRUAL answer, and it is sound reasoning.** On the **cash** method the year they fall in is the year the money arrived. Including them: line 1a → 391,369, **line 22 → 52,763**. ⚠️ **The count in the outgoing email does not match the ledger: the email says THREE, the ledger holds FIVE receipts on THREE DATES** — two on 31 Oct, two on 20 Nov, one on 4 Dec. Dates were probably counted rather than transactions, **but that is our inference and nobody has confirmed it**, so **re-ask naming all five with their dates and amounts** instead of assuming the client knew which we meant. On the merits the **31 Oct pair are card settlements two days after the cut and are the likeliest to be pre-sale services**; 20 Nov and 4 Dec are harder to call | Session, from decision 2 · **Lilian to overrule if she prefers accrual** |
| **4** | Meals and entertainment (2,533.44) | **50% deductible under §274(n)** — 1,267 deducted, 1,267 to K 16c | **(a)** Treat as entertainment / personal → **0% deductible**, line 22 → 52,717 and K 16c → 2,533. **(b)** Argue the coffee-bar consumables are *food made available to the general public* → **100%**, line 22 → 50,183 and K 16c → 0. ⚠️ **And a fact that pushes toward (a):** the November–December charges on this card (DoorDash, cafés, a liquor store) are **after the sale**, on a card the client told us became personal — those are not company expenses at all. They fall in the C period, so they do not touch this return, but they colour how the whole account should be read | Session default · **Julia to rule** |
| **5** | Distributions — presentation | **GROSS: K 16d = 42,517, M-2 line 7 capped at 23,400** | The firm's netting policy was **tested and fails gate 1** (contributions 2,021 < distributions 42,517). Netting was never available here | [1120-S SOP §5C-v](../../sops/form-1120s-preparation.md) · 2026-08-21 |
| **6** | ⚠️ **Which date the Schedule L end column carries** | 🔵 **31 December** — *the instruction's default, and the only reading a source we could actually read supports* | The instruction verified today: *"the year-end balance sheet should generally agree with the books and records at the end of the **C short year**. However, if the corporation elected under section 1362(e)(3) … the year-end balance sheet should agree with the books and records at the end of the **S short year**."* 🔑 **Our cut is forced by the sale, not made by an (e)(3) election, so the exception's literal words do not reach it** — which is why the default is taken. **The alternative is the 29 October column**, computed in full in §3.6; it changes item F to 35,522 and line 24 to 5,039. ⚠️ **It is the more intuitive presentation and may well be the right one** — it turns on the §1362(e) question in §9 that the network blocked | 🔵 **Chosen on the verified instruction; revisit when §1362(e) can be read** (§6 finding 7) |
| **7** | Schedule B question 14b (were the 1099s filed?) | 🛑 **Not answered in this working paper** | The truthful answer today is **No** — none were filed and the firm was not engaged to file them. Answering **Yes** would be a false statement on a signed return. The alternative is to **file them late before the return goes out**, which makes Yes true and starts a separate piece of work | 🔴 **Julia — scope and answer** |
| **8** | The 29,901 of undeposited cash sales | **Left as an asset, per the books** | If, as the sale covenant suggests (all company accounts emptied before closing), the owners kept that cash, it is really a **distribution**: assets → 5,621, distributions → 72,418, and the M-2 cap bites far harder. **Nobody has asked the client** | 🟡 open — asked below |
| **9** | The 24,440 of owner ATM deposits | **Left as `Loans from shareholders`, per the books** | The client asked (2026-08-11) that owner deposits be treated as **contributions**. As contributions: Schedule L line 19 → 0, contributions → 26,461 — and the netting policy's gate 1 **still fails**. ⚠️ There is also a real chance these are the **same cash** the owners took out (a round trip, [SOP §5C-iv](../../sops/form-1120s-preparation.md)) | 🟡 open — **Julia/Lilian + the client** |
| **10** | `Final K-1` on both K-1s | **Ticked** | The instruction's only explicit sentence about this box attaches it to a *final return*, which we are not filing. But these shareholders receive no further K-1 from this company, and the firm's own rule ([SOP §3A](../../sops/form-1120s-preparation.md)) reads a ticked box as "that shareholder is out" — which is exactly true | Session · 2026-08-21, flagged for review |

---

## 5 · Tie-out checks

| # | Check | Result |
|---|---|---|
| 1 | Page 1 line 22 **=** Schedule K line 1 | ✅ 51,450 = 51,450 |
| 2 | Schedule K line 18 **=** Schedule M-1 line 8 | ✅ 51,450 = 51,450 |
| 3 | Page 1 item F **=** Schedule L line 15 column (d) | ✅ **29,901** on the instruction's default column; **35,522** if decision 6 flips |
| 4 | Schedule L total assets **=** total liabilities + equity, in **every** column | ✅ 987 opening · 29,901 at 31 Dec · 35,522 at 29 Oct |
| 5 | The 31 Dec column reproduces Maria's delivered Balance Sheet | ✅ equity (1,213.50), assets 29,901.03 — exact |
| 6 | Line 20 rebuilt from total book expenses less every line placed elsewhere | ✅ 282,605.39 |
| 7 | S period + C period **=** the full-year P&L, line by line | ✅ every account |
| 8 | K-1 boxes 1, 16c, 16d, 17AC each sum to their Schedule K total | ✅ (odd dollars allocated) |
| 9 | M-2 line 7 **≤** M-2 line 6 | ✅ capped at 23,400 — **the cap is deliberate, not an error** |
| 10 | Book-to-tax equity reconciliation *(the check that proves the whole model)* | ✅ book retained earnings 5,038.60 vs uncapped AAA (19,116.53) — difference 24,155.13 = opening plug 27,769.68 − accrued rent 5,636.00 + contributions 2,021.45 |
| 11 | 🛑 **Fields that must be ANSWERED, not computed** — the short-period dates in the header, item G, H(1), H(5), item I, Schedule B 1/2/11/14a/14b/16, `Final K-1` | ⚠️ **Every one is decided above. The software will flag none of them** |
| 12 | 🛑 **Print the return and read the FORM LIST before transmitting** | ⚠️ **Not done — the return has not been keyed.** Expect no Form 4797, no Schedule D, no Form 1125-A, no Form 4562, no Form 8990. **A blank one of any of those means a figure was keyed on the wrong line and then moved** |
| 13 | 🔴 **Recompute line 22 by hand off the printed form after keying** | ⚠️ **Not done — the return has not been keyed.** Check the branch you are on: **cents → `390,056 − 338,606 = 51,450`**; **rounded lines → `390,056 − 338,605 = 51,451`**. Both are internally consistent; **a line 22 matching neither means a mistyped input.** A computed form always agrees with itself, so this is the only check that catches one |

---

## 6 · Open at filing

1. 🔴 **October revenue is understated, and October is entirely inside this period.** January–September revenue was built from quarterly **Vagaro** true-ups; **there is no Vagaro export for Q4**, so October carries only what reached the bank — **no cash sales, no tips, no card-surcharge income, no discounts**. The expenses for October are complete, because they are bank-fed. 🛠️ **Fix:** get the Vagaro **Sales Summary and In-House Product Sales Summary for 1–29 October 2025** from the client (or from the buyer, who now holds the account), and rebuild October the way Q1–Q3 were built. **What it moves:** line 1a up, line 22 up, both K-1s up, and the AAA cap in §3.8.
   🔑 **Corroborated 2026-08-22 by the payout ratio, which is a one-division test** *(now written into [SOP §5B-i part 5](../../sops/form-1120s-preparation.md))*: contract labour divided by revenue runs **56.1% · 67.6% · 66.6%** in the three trued-up quarters and **76.7% in October**. October did not become less profitable — its costs are complete and its revenue is not.
   📏 **Size of the gap, as an ESTIMATE and labelled as one:** the cash proportion of revenue ran between **8% and 26%** across the three quarters, so October's missing cash is roughly **2,000–8,400**; add missing tips of roughly **3,000–3,700** and surcharge of **800–1,100**, less missing discounts of roughly **700–1,600**. **Range: about 4,000 to 12,000.** ⛔ **Do not put an estimate on the return** — it is here to show the size of what is unresolved.
2. 🔴 **Tips are income here, and the offsetting payout has never been located.** The 29,065 of tips is
   in line 1a because the company collected it. If the money was passed to the workers, that payout must
   be deducted somewhere — and `Contractors` **contains no journal entries at all** (133 checks and 114
   bank payments), so the payout is either inside those bank payments or it is not in the books.
   🛠️ **Fix:** ask Maria whether the worker payments include tips. **What it moves:** if the payout is
   genuinely absent, ordinary income is **overstated by up to the whole 29,065** — the largest single
   uncertainty on this return, and it runs in the opposite direction to finding 1.
3. 🔴 **The buyer's US-person status** — decision 1. Everything rests on it.
4. 🟠 **The opening equity does not tie to the tax history** — books open at +987, the 2024 AAA closed at (26,783), a 27,770 gap that is a plug. It does not stop the return (Schedule L is "per books" and the AAA is carried from the filed return), but a reviewer will ask, and the answer is in tie-out 10.
5. 🟠 **No fixed assets, ever.** The 2024 purchase agreement's schedule listed salon equipment; none of it is on the books or on the 2024 return, so depreciation is 0 and UBIA for §199A is 0. **Raise with Julia** — do not capitalise anything unilaterally on a short-period return.
6. 🟡 **Reasonable compensation.** An income year with the owners drawing money and **no payroll at all**. Mitigating: they sold in October and the salon runs on contractors. The position has to be **written down** whether or not anything changes.
7. 🟠 **Which date Schedule L ends on.** Taken as **31 December**, because that is what the instruction we could read prescribes by default (decision 6). 🛠️ **Fix:** read §1362(e) and Reg. §1.1362-3 on a machine the network does not block; if a forced closing of the books is treated like an (e)(3) election, **flip to the 29 October column** — both are computed in §3.6, and the change moves item F, Schedule L and tie-outs 3 and 4, and nothing else.
8. 🟡 **Who engages and who signs.** An officer of the corporation signs, and after 30 October the only member is the buyer, who is not our client. The 2025 engagement letter was signed by the sellers in March, before any of this was known.
9. 🟡 **Florida.** Not researched today. The S short period is unlikely to need an F-1120; the **C short period will**, and that is the buyer's. **Verify before telling anyone there is no state filing.**
10. 🔴 **The distributions are split 50/50 off ONE pooled `Draw` account.** No per-shareholder ledger exists.
   🛠️ **Fix:** ask Maria (or the client) which withdrawals belonged to which member. **What it moves:** K-1
   box 16D on both K-1s, and therefore each shareholder's Form 7203 and any capital gain under the line-6
   Note. **If the split cannot be established, say so on the return rather than presenting a guess as a
   reading.** The same gap covers the **24,440 of shareholder loans**, which Schedule L reports in total and
   K-1 item I has to report per shareholder.
11. 🟡 **No Form 1125-A, and the product cost is netted inside revenue.** The Vagaro entries book product
   sales *"net of business cost"*, so cost of goods sold never appears. It reproduces 2024 exactly and the
   amounts are small, but it is a presentation the firm should decide on deliberately rather than inherit.
   **Raise with Julia; do not change it unilaterally on a short-period return.**
12. 🟠 **A related party sits inside the Contractors line.** Payments to **Marat Boxing LLC** — the company
   owned by one shareholder's husband — are booked as contract labour inside the 248,630. It touches three
   things at once: **Schedule B 14a/14b** (a 1099 may be owed to it), **finding 6** (money reaching the
   owners' household while no salary was paid), and the possibility that some of it is really a
   **distribution**. **Nobody has asked what the payments were for.**
13. 🟠 **The sale agreement names a third seller** who the filed 2024 return shows was no longer an owner.
   Item I is answered **2** from the filed return, which governs — but whoever signs should know the
   documents disagree.
14. 🔴 **The opening AAA of (26,783) is taken from a 2024 return whose ACCEPTANCE has never been confirmed.**
   The 2024 package in Drive is an outside firm's and states it would be e-filed only once a signed
   Form 8879-CORP came back; a signed 8879-CORP dated **7 February 2025** is in the package, but **an IRS transcript
   or e-file acknowledgement has never been obtained**. 🛠️ **Fix:** pull the transcript. **What it moves:**
   if 2024 was never accepted, the opening AAA, the shareholders' basis history and a per-shareholder
   per-month late-filing penalty are all in play — and this return's line 1 of Schedule M-2 rests on it.
15. ⓘ **Not established, and stated as the bounded search it was:** the sale documents, the ledger, the 2024 return and Julia's mailbox were read. **Lilian's and Maria's mailboxes, Sunbiz's current filings and QuickBooks itself were not.**

---

## 7 · Carry into next year

- **The C short period (30 Oct – 31 Dec 2025) is a Form 1120** for the same EIN — **the buyer's return, not ours**, unless the firm is engaged for it. Its opening balance sheet is this return's closing one, and everything the ledger split assigns to the C column belongs to it: receipts 1,313.09, the post-sale card spending, the November owner deposits.
- **The AAA closes at zero**, and 19,117 of distributions never entered it.
- **There is no next S year.** On the assumption in force, the company is a C corporation from 30 October 2025, and a new S election would face the five-year rule of §1362(g).
- **The Florida sales-tax certificate continues with the entity under the buyer.** The Q4 2025 and 2026 DR-15s are not the sellers' obligation.

---

## 8 · 🔗 What flows to ANOTHER return — the handoff

⛔ **The sellers' 1040s are NOT prepared here.** This section leaves them ready. Each is its own request, on its own day, with its own review.

### 8A · The tables to carry across

| What travels | Amount | Where it is TYPED on the recipient's 1040 |
|---|---|---|
| K-1 box 1 — ordinary business income | 25,725 each | K-1 input screen → **Schedule E, Part II, line 28**. Not self-employment income |
| K-1 box 16 code C — nondeductible expenses | 633 / 634 | K-1 input screen → 🔴 **Form 7203 line 8a**, *"Nondeductible expenses"* — verified against the form itself. ⚠️ **Not line 12**, and the order matters: **distributions (line 6) come off BEFORE nondeductible expenses (line 8a)** |
| K-1 box 16 code D — distributions | 21,258 / 21,259 | 🛠️ **K-1 input screen, box 16 code D → Form 7203 line 6.** Most of Form 7203 cannot be typed on Form 7203 |
| K-1 box 17 code AC — §448(c) gross receipts | 195,028 each | Informational; feeds the Form 8990 test |
| Statement A — §199A: income 25,725, **W-2 wages 0, UBIA 0**, not an SSTB | — | **Form 8995 / 8995-A**. The zeros are what cap the deduction above the threshold |
| 🔴 **The sale of the membership interest itself** | price and each seller's share — **in the agreement, not on this return** | **Form 8949 / Schedule D**, and it is *their* transaction. The company's return reports none of it |

### 8B · 🔴 What this side CANNOT supply

- **Each shareholder's beginning stock basis.** Form 7203 is filed with the **1040**, so the opening figure is last year's Form 7203 line 15 — and **2024 was prepared by an outside firm**, so the firm may not hold it. Without it, nobody can tell whether the **19,117 of distributions in excess of the AAA** is a tax-free return of basis or a **capital gain**.
  🔑 **The form states the mechanism on its own face, under line 6:** *"If line 6 is larger than line 5, subtract line 5 from line 6 and report the result as a capital gain on Form 8949 and Schedule D."* So the test is against **stock basis**, not against the AAA — which is why the M-2 cap in §3.8 settles nothing for the shareholders.
- **What each seller paid for her interest in 2024** — the basis for both the distribution test and the gain on sale. The 2024 agreement was a joint purchase with instalments payable by one member only; **the split between them is not on any return we hold. Ask; never assume half each.**
- **The instalment obligation still running to October 2027** and how it interacts with the 2025 sale.
- Anything about the buyer.

### 8C · What must MATCH on both returns

- **Distributions are reported GROSS** (§4 decision 5). If a 1040 is prepared elsewhere, say so in writing — a K-1 showing 21,258 against a Form 7203 built on a netted figure is a mismatch nobody catches.
- **The nondeductible expenses figure** must be the same on the K-1, the AAA and Form 7203.
- **Whatever is decided about the undeposited cash and the owner loans** (decisions 8 and 9) changes the K-1s, so it must be settled **before** either 1040 is started.

### 8D · Before the other return is started

- **This return is FILED and ACCEPTED** — a K-1 from an unfiled return can still move, and on this one three separate open items (October revenue, decisions 4 and 8) would move it.
- **§6 items 1, 2 and 3 are closed** — the October revenue, the tips payout, and the buyer's US-person status. ⓘ *(Renumbered 2026-08-22 when the tips finding was inserted; this line used to read "1 and 2" and would have quietly dropped the buyer's status, which is the item everything else rests on.)*

---

## 9 · What was verified against primary sources today, and what was not

| Verified 2026-08-21 against irs.gov | |
|---|---|
| 2025 Form 1120-S — item G wording, all five item H boxes, lines 1a–22 numbering, Schedule B Q1–Q17, Schedule K line numbering | ✅ pulled and read |
| Instructions — item H: *"If this is the corporation's final return and it will no longer exist…"* | ✅ quoted |
| Instructions — *"file Form 1120-S for the S corporation's short year by the due date (including extensions) of the C corporation's short year return"* | ✅ quoted |
| Instructions — the Schedule L end-of-year rule on a terminated election | ✅ quoted (decision 6) |
| Instructions — Schedule B Q11 needs **both** receipts and assets under $250,000 | ✅ quoted |

| 🔴 **NOT verified — the network blocked every legal-text source** | |
|---|---|
| **§1362(e)(6)(D)** — the rule that a sale of 50% or more of the stock **forces** the closing-of-the-books allocation instead of the pro rata default | ⛔ law.cornell.edu, uscode.house.gov, ecfr.gov and govinfo.gov are **blocked by the network egress proxy**. The Form 1120-S instructions only cross-reference *"section 1362(e) and Regulations section 1.1362-3"* without reproducing them |
| **Reg. §1.1362-3** — same | ⛔ same |
| **Florida F-1120** filing requirement for either short period | ⛔ not researched |

🛑 **What that means in practice, stated honestly:** the *cut date* is not in doubt — Julia instructed the
closing-of-the-books split and the sale document fixes 30 October. What is **unverified from a primary
source** is whether that split is **mandatory** or **elective**, and if elective, **whether an election
statement must be attached to this return.** ⚠️ **Check that before filing**, from the Code or the
regulation on a machine that can reach them. If an election statement is required and is missing, it is the
kind of omission that is invisible on the face of the return.

---

## 10 · Statements and attachments this return needs

| Attachment | Status | Why |
|---|---|---|
| **Line 20 — Other deductions itemisation** | ✅ drafted in §3.3 | Required by the line itself |
| **Schedule K line 17d — §448(c) gross receipts** | ✅ figure ready (390,056) | Reproduces the 2024 convention |
| **Statement A — §199A**, one per shareholder | ✅ drafted in §3.9 | Attaches to each K-1 |
| **Schedule L line 6 / line 18 detail** | ✅ ready (undeposited cash; card + accrued rent) | Both lines say "attach statement" |
| **Schedule K-3 notification** | 🟡 reproduce 2024's | 2024 attached a notification that no K-3 would be issued (no foreign activity, all shareholders US persons). ⚠️ **The wording may need care this year given decision 1** |
| 🔴 **A §1362(e)(3) election statement** | ⛔ **UNKNOWN — see §9** | If the closing-of-the-books split is elective rather than mandatory here, the election is made by a statement attached to the return. **Nobody has confirmed which** |
| **Form 2553** | ❌ not attached | Only required if item G is **Yes**, and it is No |
