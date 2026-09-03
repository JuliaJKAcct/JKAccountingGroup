# AXDIGITAL LLC — Form 1120-S · 2025 — **ACCURACY REVIEW of a prepared return**

> **Status:** 🔴 **Nine corrections open — do not transmit until §4 is worked**
> **Client:** AXDIGITAL LLC · **EIN** 32-0613594 · Double client `706681`
> **Shareholder:** Oleksiy Bereznyak — sole shareholder, 100%, 100 shares, all year
> **Reviewed:** 2026-09-03 · **Requested by:** Julia
> **Return under review:** the prepared 2025 Form 1120-S PDF Julia supplied (preparer sign date
> on the copy: 2026-09-03; preparer of record on the Double project: Irina Jandieri)
> **Software:** ATX / TaxWise (© Universal Tax Systems Inc. on every statement page)

⚠️ **This is a REVIEW paper, not a preparation paper.** It records what the prepared return
says, what the books say, where the two disagree, and the fix for each. Nobody re-prepared this
return from scratch.

---

## 0 · The year in one paragraph

Amazon/eBay/Walmart e-commerce reseller, accrual basis, one shareholder-employee, one vehicle,
no inventory-free months. 2025 revenue **fell** against 2024 (net receipts 1,263,999 vs
1,577,872) while gross margin **improved sharply** (gross profit 343,361 vs 290,291 on a
smaller top line), so ordinary business income rose to **110,661** from an implied 2024 figure
in the same region. Inventory more than doubled (48,988 → 100,759). The owner drew **60,270**
and put nothing in. There is no debt to shareholders, no accumulated E&P, and no second
shareholder — so the entity-level picture is simple and the return's **totals are right**.

🔑 **The errors are not in the totals. They are in WHICH LINE the totals were typed on, and in
what the return therefore ASSERTS** — including two figures on the Schedule K-1 that the
owner's 1040 preparer would otherwise rely on.

---

## 1 · Source documents used

| # | Source | How it was reached | What it settled |
|---|---|---|---|
| 1 | **The prepared return** — 17-page 2025 1120-S PDF | supplied by Julia in the session | every figure reviewed below |
| 2 | **2025 P&L, accrual, Jan–Dec** | Double `get_profit_loss_report`, client 706681 | every income and expense line |
| 3 | **2025 balance sheet at 12/31/2025** | Double `get_balance_sheet_report` | Schedule L closing column, equity movement |
| 4 | **2024 balance sheet at 12/31/2024** | Double `get_balance_sheet_report` | Schedule L **opening** column, opening AAA |
| 5 | **2024 P&L, accrual** | Double `get_profit_loss_report` | ⭐ identified the K-1 box 17 AC figure as the **2024** number |
| 6 | **Payroll journal entries, account 111 (Wages), 2025** | Double `get_transactions` | 🔑 **one employee only** — cleared a suspected officer/employee split error |
| 7 | **Double file library** | `list_files` (77 files) | ⭐ **`2025 7004 EXT.pdf`** — the extension gate |
| 8 | **Double client properties + tax project** | `list_client_properties`, `list_projects` | project now `readyForReview`; Tax Return Type 1120-S |
| 9 | **Julia's Gmail** | `search_threads` — Turo, extension, 2025 tax return | ⭐ **Turo is the OWNER's activity, not the company's** |
| 10 | **Client Intelligence file** | [`axdigital.md`](../../client-intelligence/clients/axdigital.md) | context; its "Turo = company activity" line is now corrected |
| 11 | **2025 Form 1120-S + instructions** | `irs.gov/pub/irs-pdf/f1120s.pdf`, `i1120s.pdf` | item G wording · line 14b wording · the Nonstore-Retailer PBA rule |

⛔ **NOT opened: the filed 2024 Form 1120-S.** It was not needed — the 2024 *books* reproduce the
prepared return's entire opening column to the dollar (§5, tie-out 6), which corroborates the
prior year independently. **What that leaves unverified** is only the 2024 return's own
presentation choices (how it answered item G, which PBA code it used, how it split 1125-A). If
any of the §4 fixes are argued, pull the 2024 PDF through [`redact-doc`](../../../tools/redact-doc/).

---

## 2 · The extension gate — ✅ PASSED

| | |
|---|---|
| Original due date, calendar-year 1120-S for TY2025 | **2026-03-16** (Mar 15 fell on a Sunday) |
| Extension | ✅ **Filed** — `2025 7004 EXT.pdf` in Double's file library; corroborated by Julia to the client 2026-03-11: *"Filing extensions, like we discussed. It will give us until September."* |
| Extended due date | **2026-09-15** |
| Days of runway at review date (2026-09-03) | **12** |

🛑 **§6699 exposure if it slips:** the late-filing penalty runs per month × number of
shareholders (1 here). It is small in absolute terms but entirely avoidable. **The fixes in §4
are all inside the software; none of them requires anything from the client.**

---

## 3 · The forms, line by line — return vs books

### 3A · Page 1, income — lines 1a to 6

| Line | Concept | On the return | Per the books | Verdict |
|---|---|---|---|---|
| **1a** | Gross receipts or sales | 1,314,262 | 1,318,696 (sum of the positive income accounts) | ⚠️ **presentation** — see below |
| **1b** | Less returns and allowances | 50,263 | 54,697 (the three contra accounts) | ⚠️ same |
| **1c** | Balance | **1,263,999** | **1,263,999.53** | ✅ **correct** |
| **2** | Cost of goods sold (Form 1125-A) | **920,639** | **920,638.99** | ✅ total correct — 🔴 **but see §3B, the line it sits on is wrong** |
| **3** | Gross profit | **343,360** | 343,360.54 | ✅ |
| **4** | Net gain (loss), Form 4797 | — | none | ✅ zero, correctly |
| **5** | Other income | **515** | 514.44 (Credit card rewards 507.57 + Sales Tax Allowance 6.87) | ✅ amount — 🔴 **but see §4-D, the LABEL is wrong** |
| **6** | Total income | **343,875** | ƒ 343,360 + 515 | ✅ |

**The 1a/1b presentation point.** The books carry three contra-income accounts. The preparer put
**two** of them in returns and allowances (Amazon Refunds 48,821.50 + Amazon Promotions 1,441.20
= 50,262.70 → 50,263) and **netted the third** — Refunds to customers 4,434.01 — straight into
gross receipts. **Line 1c is unaffected and correct**, so this changes no tax. If they want
internal consistency: 1a = **1,318,696**, 1b = **54,697**.

### 3B · 🔴 Form 1125-A — the error that propagates

| Line | Concept | On the return | What it should be | |
|---|---|---|---|---|
| **1** | Inventory at beginning of year | 48,988 | 48,988 (books: Amazon Inventory at 12/31/2024 = 48,988.30) | ✅ |
| **2** | **Purchases** | ⛔ **blank** | **890,835** | 🔴 |
| **3** | **Cost of labor** | 🔴 **972,410** | **0** | 🔴 |
| **4** | Additional §263A costs | — | 0 | ✅ |
| **5** | **Other costs** (attach schedule) | ⛔ blank | **81,575** *(preferred split)* | 🟡 |
| **6** | Total | 1,021,398 | 1,021,398 — **unchanged** | ✅ |
| **7** | Inventory at end of year | 100,759 | 100,759 (books: 100,758.78) | ✅ |
| **8** | Cost of goods sold | **920,639** | **920,639 — unchanged** | ✅ |

**Why 972,410 cannot be cost of labor.** The company's *entire* wage expense for 2025 is
**53,076.87** — one employee, the owner (source 6; 23 pay periods × 2,307.69, one net-pay line,
one set of employer taxes per run). 972,410 is a **derived purchases plug**:
`920,639 + 100,759 − 48,988 = 972,410`. It is inventory purchases, typed on the labor line.

**The preferred decomposition**, from the books:

| Component | Books | Goes to |
|---|---|---|
| Amazon COGS 533,321.33 + Supplies & materials 305,742.64 = product cost relieved | 839,064 | ƒ purchases = 839,064 + 100,759 − 48,988 = **890,835** → **line 2** |
| Amazon FBA Fees 34,310.62 + eBay Selling Fees 12,610.36 + Shipping 34,654.04 | **81,575** | **line 5, Other costs** (with the schedule) |
| | 972,410 | ✓ reconciles |

ⓘ The fee/shipping components sit in COGS as a **book convention carried from 2024** — leave the
convention alone; gross profit and taxable income are identical either way.

### 3C · Page 1, deductions — lines 7 to 22

Every line ties. **Every line not listed is zero**, and the zeros are stated because a table of
only the used lines is a trap.

| Line | Concept | Return | Books | ✓ |
|---|---|---|---|---|
| **7** | Compensation of officers (1125-E) | 53,077 | Payroll expenses → Wages 53,076.87 | ✅ |
| **8** | Salaries and wages | **0** | **0 — correct.** Only one employee exists and he is the officer | ✅ |
| **9** | Repairs and maintenance | 175 | 175.00 | ✅ |
| **10** | Bad debts | 0 | none | ✅ |
| **11** | Rents | 13,130 | Home office → Rent 13,129.89 | ✅ amount — 🟡 **see §4-I, the characterisation** |
| **12** | Taxes and licenses | 4,435 | Payroll taxes 4,291.40 + Business licences 143.75 = 4,435.15 | ✅ |
| **13** | Interest | 2,654 | Business loan interest 2,654.16 | ✅ |
| **14** | Depreciation from 4562 | 0 | no depreciation expense — sole asset fully depreciated | ✅ |
| **15** | Depletion | 0 | — | ✅ |
| **16** | Advertising | 1,000 | Advertising & marketing 1,000.00 | ✅ |
| **17** | Pension, profit-sharing | 3,692 | 401K Match 3,692.40 (Human Interest, 20 periods × 184.62) | ✅ |
| **18** | Employee benefit programs | 0 | — | ✅ |
| **19** | Form 7205 energy deduction | 0 | — | ✅ |
| **20** | Other deductions (statement) | 155,051 | see below — sums exactly | ✅ |
| **21** | Total deductions | **233,214** | ƒ sums to 233,214 | ✅ |
| **22** | **Ordinary business income** | **110,661** | ƒ 343,875 − 233,214 | ✅ |

**The line-20 statement, against the books** — all fifteen rows tie:

| Statement row | Return | Book account(s) |
|---|---|---|
| Travel | 6,098 | Travel: Airfare 2,279.65 + Hotels 3,818.74 |
| Meals subject to 50% / less disallowed / total | 306 / 153 / **153** | Meals: with clients 50.00 + travel 255.73 = 305.73 |
| Automobile and truck | 3,964 | Vehicle: gas 2,011.15 + repairs 1,952.99 |
| Bank charges | 3,054 | Bank fees & service charges 3,054.14 |
| Insurance | 1,037 | Insurance 1,036.82 |
| Legal and professional fees | 15,584 | Legal & Professional 15,584.00 (incl. Accounting fees 10,484) |
| Office expenses | 8,118 | Office: supplies 542.96 + shipping/postage 5,904.35 + software 1,670.67 |
| Parking fees and tolls | 108 | Vehicle: Parking & tolls 107.96 |
| Supplies | 681 | Supplies & materials 680.81 |
| Amazon Seller Fees and Charges | 88,255 | 88,254.73 |
| Amazon Shipping Fees | 1,050 | 1,050.32 |
| Outside Services | 21,560 | **Contract labor 21,560.00** ← the 1099 trigger |
| Payroll Processing Fee | 633 | Payroll expenses (parent) 633.00 — Gusto @ 55/mo |
| QuickBooks Payments Fees | 4,499 | 4,499.23 |
| General business expenses | 257 | 257.14 |
| **Total** | **155,051** | ✓ |

### 3D · Schedule B — the answers, and whether each is right

Yes/No column positions were read off the PDF's glyph coordinates (the No column sits at x≈515–519,
Yes at x≈495) and cross-checked against four questions whose answer cannot be anything but No.

| Line | Question | Answered | Verdict |
|---|---|---|---|
| **1** | Accounting method | **Accrual** | ✅ — Double reports both statements on an **Accrual** basis; AR 8,704 and inventory 100,759 are real |
| **2a/2b** | Business activity / product | ONLINE SALES / PRODUCT | ✅ |
| **B (pg 1)** | PBA code **449210** *(Electronics & Appliance Retailers)* | — | ✅ **defensible.** The 2025 instructions tell Nonstore Retailers to *"select the PBA associated with their primary line of products sold"* — so an online seller of electronics uses 449210, not a catch-all. **Confirm electronics really is the primary line**; if it is not, change it |
| **3** | Shareholder a disregarded entity/trust/estate/nominee | No | ✅ |
| **4a / 4b** | 20%/50% ownership of a corporation / partnership | No / No | ✅ |
| **5a / 5b** | Restricted stock / options outstanding | No / No | ✅ |
| **6** | Form 8918 material advisor | No | ✅ |
| **7** | Publicly offered OID instruments | unchecked | ✅ |
| **8** | Net unrealized built-in gain | blank | ✅ — never a C corporation |
| **9** | §163(j) real-property/farming election | No | ✅ |
| **10** | §163(j) conditions triggering Form 8990 | No | ✅ — receipts far below the threshold; **correctly no Form 8990**, so the 2,654 interest deduction survives |
| **11** | Total receipts AND assets both under $250,000 | **No** | ✅ — receipts 1.31M. Schedules L and M-1 are therefore **required**, and both are completed |
| **12** | Non-shareholder debt cancelled/forgiven | No | ✅ |
| **13** | QSub election terminated | No | ✅ |
| **14a** | Payments requiring Form(s) 1099 | **Yes** | ✅ — Contract labor 21,560 |
| **14b** | Did/will file them | **Yes** | ✅ *corroborated:* two `AXDIGITAL LLC_1099_*.pdf` in Double's library. Confirm they are **2025** copies, not 2024 |
| **15** | Qualified Opportunity Fund | No | ✅ |
| **16** | Digital assets received or disposed of | No | ✅ — nothing in the ledger |

### 3E · Schedule K and the Schedule K-1

| Line | Return | Verdict |
|---|---|---|
| K-1 / K box **1** Ordinary business income | 110,661 | ✅ = page 1 line 22 |
| K lines 2–13g | all zero | ✅ correct — no rentals, no portfolio income, no credits, no §179, no charitable |
| K **14a** report international items | unchecked | ✅ |
| K **14b** qualified for the K-2 exception | ⛔ **unchecked, no statement** | 🔴 **§4-F** |
| K **15a–15f** AMT items | zero | ✅ |
| K **16c** Nondeductible expenses | 153 | ✅ = the disallowed half of meals |
| K **16d** Distributions | 60,270 | ✅ = the owner-draws movement exactly (§3G) |
| K **16e** Repayment of shareholder loans | zero | ✅ — there are none |
| K **17d / K-1 box 17 code AC** §448(c) gross receipts | 🔴 **1,577,872** | 🔴 **that is the 2024 figure — §4-B** |
| K-1 box 17 code V — §199A ordinary income | 110,661 | ✅ |
| K-1 box 17 code V — **§199A W-2 wages** | 🔴 **1,025,487** | 🔴 **§4-A** |
| K-1 box 17 code V — §199A UBIA | 66,325 | ✅ — Durango placed in service 2022-04-26, so the 10-year depreciable period runs to 2032; the asset being fully depreciated does **not** end UBIA |
| K-1 items D/H (shares) | 100 / 100, 100.000000% | ✅ |
| K-1 item I (loans from shareholder) | blank both ends | ✅ |
| K **18** Income (loss) reconciliation | 110,661 | ✅ |

### 3F · Schedule L — balance sheet

| Line | Concept | Return, beginning | Books 12/31/2024 | Return, end | Books 12/31/2025 | ✓ |
|---|---|---|---|---|---|---|
| 1 | Cash | 7,583 | 7,582.59 | 2,361 | 2,361.37 | ✅ |
| 2a/2b | Trade A/R (no allowance) | 11,898 | 11,898.10 | 8,704 | 8,704.00 | ✅ |
| 3 | Inventories | 48,988 | 48,988.30 | 100,759 | 100,758.78 | ✅ |
| 4,5 | Govt obligations, tax-exempt securities | — | none | — | none | ✅ |
| 6 | Other current assets | 2,640 | 2,639.58 | 15,800 | 15,800.84 *(Carried 15,800.49 + Pending 1.71 − Reserved 1.36)* | ✅ |
| 7 | **Loans to shareholders** | — | none | — | none | ✅ **stated, not omitted** |
| 8,9 | Mortgage/RE loans, other investments | — | none | — | none | ✅ |
| 10a/10b | Depreciable assets / accum. depr. | 66,325 / (66,325) | same | 66,325 / (66,325) | same | ✅ net 0 |
| 11–14 | Depletable, land, intangibles, other | — | none | — | none | ✅ |
| **15** | **Total assets** | **71,109** | 71,108.57 | **127,624** | 127,624.99 | ✅ |
| 16 | Accounts payable | — | **no A/P account exists in the ledger** | — | same | 🟡 see note |
| 17 | Notes payable < 1 yr | — | none | — | none | ✅ |
| 18 | Other current liabilities | 986 | 985.73 | **7,263** | **7,265.02** | 🟡 **§4-H, off by 2** |
| 19 | **Loans from shareholders** | — | none | — | none | ✅ **stated** |
| 20, 21 | Notes ≥ 1 yr, other liabilities | — | none | — | none | ✅ |
| **22** | **Capital stock** | — | **100.00** | ⛔ **blank** | **100.00** | 🟡 **§4-H** |
| 23 | Additional paid-in capital | — | none | — | none | ✅ |
| 24 | Retained earnings | 70,123 | 70,122.84 *(all equity)* | 120,361 | 120,359.97 *(all equity)* | 🟡 absorbs the 100 |
| 25, 26 | Equity adjustments, treasury stock | — | none | — | none | ✅ |
| **27** | **Total liabilities and equity** | **71,109** | ✓ | **127,624** | ✓ | ✅ balances |

🟡 **Accounts payable is genuinely absent from the chart of accounts**, so a blank line 16 reflects
the books. For an accrual-basis reseller with 890,835 of purchases that is unusual — the Amazon/A2X
model settles through the platform rather than through trade payables, which explains it — but it
is worth one sentence of confirmation with the bookkeeper that no year-end supplier bill is unrecorded.

### 3G · Schedule M-1 and M-2

**M-1 — why it exists:** the company's *books* and its *tax return* measure the same year and
disagree, because a few things the books expensed are not deductible. M-1 walks from one to the
other so the IRS can see the bridge.

| Line | Concept | Return | Source | Meaning |
|---|---|---|---|---|
| 1 | Net income (loss) per books | **110,508** | Books net income 110,507.13 | what the owner's own P&L says he made |
| 2 | Income on Sch K not on books | 0 | — | nothing |
| 3b | **Expenses on books not deducted** — travel and entertainment | **153** | the disallowed 50% of meals 305.73 | the company spent it; tax law says half of a meal is not a deduction |
| 4 | Add lines 1–3 | 110,661 | ƒ | |
| 5, 6, 7 | Book income not on K / deductions not on books | 0 | — | nothing |
| 8 | **Income (loss), Sch K line 18** | **110,661** | ƒ line 4 − line 7 | ✅ ties to page 1 line 22 |

ⓘ 110,507.13 + 152.87 = 110,660.00 exactly; the return shows 110,508 → 110,661. That **$1** is the
software rounding each line before adding. **The software's figure is the one that gets filed** —
a computed form must agree with its own printed arithmetic.

**M-2 — why it exists:** an S corporation's owner pays tax on profit he may never have received in
cash. The AAA is the running tally of *profit already taxed to him*, so that when cash finally
comes out it can be identified as money the IRS has already had its turn at.

| Line | Concept | Return | Source | What the movement MEANS |
|---|---|---|---|---|
| 1 | Balance at beginning | **70,123** | ✅ books' total equity at 12/31/2024 = 70,122.84 | profit taxed in 2024 and left in the company |
| 2 | Ordinary income, page 1 line 22 | **110,661** | ƒ | this year's profit — taxed to him now, whether or not he took it |
| 3 | Other additions | 0 | no owner contributions in 2025 | — |
| 4 | Loss from page 1 line 22 | 0 | profitable year | — |
| 5 | **Other reductions** | **153** | K line 16c | money the company really spent that never becomes a deduction — it still leaves the pot |
| 6 | Combine 1–5 | **180,631** | ƒ | |
| 7 | **Distributions** | **60,270** | K line 16d | cash out to the owner |
| 8 | **Balance at end** | **120,361** | ƒ 180,631 − 60,270 | ✅ |

**Columns (b), (c), (d) are all zero and correctly so:** no previously-taxed income, **no
accumulated E&P** (the entity has never been a C corporation), no other adjustments account.

🔑 **The trap to name, because it is the classic confusion:** the **AAA belongs to the company**;
**basis belongs to the person**. The AAA decides *presentation* on this return. **Basis decides
whether a distribution is taxable**, and it lives on the owner's return, not this one.

### 3H · 🔴 DISTRIBUTIONS vs BASIS — the block that produces no error message

```
Total distributed to the owner in 2025 ................ 60,270
   → Oleksiy Bereznyak, 100%, against HIS OWN basis ... 60,270
(entity-level screen only:)
   AAA available before distributions (M-2 line 6) .... 180,631
   Distributions as a share of it .....................  33%
```

1. **Did money reach the owner?** ✅ Yes — **60,270**, read off the **gross debit movement in the
   Owner draws account** (174,517.92 at 12/31/2025 less 114,247.92 at 12/31/2024), not off the
   reported line. Owner investments did **not** move (13,919.72 both ends), so **there are no
   contributions to net against distributions** and the firm's §5C-v netting policy **does not
   arise** — the gross figure and the net figure are the same. Reported gross at 60,270: correct.
2. **His own basis before the distribution** — 🛑 **this return cannot tell you.** It is
   **Form 7203 line 15 from his 2024 Form 1040**, filed with his *individual* return, **not with
   the company's.** Do not substitute the company's capital-account balance for it.
3. **Is the distribution larger than his basis?** **Very unlikely, and unproven.** 2025 income
   (110,661) exceeds 2025 distributions (60,270) by 50,391, and the S election has only run since
   1/1/2024 with a large profit in each year. But *unlikely* is not *checked*.
4. **Entity level:** 60,270 is far below the 180,631 pool, so the AAA never goes negative and
   M-2 line 8 is unconstrained. ✅

⚠️ **The pool comparison is a SCREEN. It says how alarmed to be; it never clears anybody.**
The answer comes from his 7203 when the 1040 is prepared — see §8.

### 3I · Form 4562 and the vehicle

| Item | Value | Verdict |
|---|---|---|
| Sole asset | 2020 Dodge Durango, placed in service **2022-04-26**, basis **66,325** | |
| Method | 5.0 yr, 200DB, HY | |
| Prior depreciation / §179 / bonus | 66,325 — **fully written off before 2025** | ✅ consistent with the books |
| 2025 depreciation | **0** → line 22 = 0, page 1 line 14 = 0 | ✅ |
| §199A UBIA | 66,325 | ✅ still inside the 10-year depreciable period (to 2032) |
| Part V line 24a — evidence to support business use? | **Yes** | |
| Part V line **24b** — is the evidence **written**? | 🔴 **No** | 🔴 **§4-G** |
| Business miles / commuting / other personal | **20,549 / 0 / 0** = 100% business | 🟡 **§4-G** |
| Section B lines **34, 35, 36** | ⛔ **all blank** | 🔴 **§4-G** |

---

## 4 · 🔴 THE FINDINGS, each with its fix

Ordered by consequence. **A–C reach the owner's 1040. D–F are assertions the return makes.
G–I are exposure and presentation.**

### A · 🔴 §199A W-2 wages overstated by 972,410 — and it is ONE fix, not two

- **What the return says:** K-1 box 17 code V, *Section 199A W-2 wages* = **1,025,487**.
- **What is true:** the company's only W-2 wages in 2025 are **53,077**.
- **The mechanism, proved by arithmetic:** `972,410 (1125-A line 3) + 53,077 (page 1 line 7) =
  1,025,487`. The software builds §199A wages from *officer compensation + salaries and wages +
  1125-A cost of labor*. The mis-keyed purchases figure walked straight into the K-1.
- 🛠️ **THE FIX — do it upstream, on Form 1125-A, and do NOT override the wage figure by hand.**
  Move **972,410 off line 3 (Cost of labor)** — preferably as **890,835 to line 2 (Purchases)** and
  **81,575 to line 5 (Other costs)** with its schedule (§3B). §199A wages then recompute to
  **53,077** on their own.
- ✅ **How to know it worked:** K-1 box 17 code V shows W-2 wages **53,077**; Form 1125-A line 6
  is still **1,021,398** and line 8 still **920,639**; page 1 line 2 is unchanged; ordinary income
  is still **110,661**. **Nothing else on the return may move.**
- **What it costs if left:** the QBI wage limitation on Oleksiy's 1040 would be computed off a
  wage base nineteen times too large. Whether that changes his refund depends on whether his
  taxable income is above the §199A phase-in threshold — but it is a **materially false figure on
  a signed K-1** either way, and his 1040 preparer has no way to know.

### B · 🔴 K-1 box 17 code AC carries the 2024 gross receipts

- **What the return says:** *Gross receipts for section 448(c)* = **1,577,872**.
- **What is true:** **1,577,871.66 is the 2024 total income per the books, to the cent.** The field
  was rolled over from last year's return and never refreshed.
- 🛠️ **The fix:** replace with the **2025** figure — **1,263,999** (page 1 line 1c, the same
  net-of-returns basis the 2024 figure was computed on). If the firm prefers to include other
  income, **1,264,514**; be consistent with whichever convention 2024 used.
- **Consequence:** the shareholder uses this to test his own §448(c)/§163(j) small-business
  position. At this scale nothing changes — but it is wrong by **313,873** on a signed K-1.

### C · 🟡 Confirm the officer/employee split is really 100/0 — ✅ **CHECKED, IT IS**

Raised because the client file records a Human Interest 401(k) "with at least one enrolled
employee" and an open work-authorisation/W-2 question for a Ukrainian worker. **Cleared:** every
2025 payroll journal entry is identical — one *Regular Wages* line of 2,307.69, one net-pay debit,
employer SS of 143.08 (= 6.2%) and Medicare of 33.46 (= 1.45%) on that one figure. 23 periods ×
2,307.69 = **53,076.87 exactly**. **One employee. Line 8 = 0 is right and Form 1125-E is right.**

ⓘ Julia's 2026-01-12 preview to the client quoted a **W-2 of 41,231**. That was a January
estimate on a partial year; the final books say 53,077. **The 1040 must use the actual W-2.**

### D · 🔴 The line-5 statement asserts a §481(a) accounting-method change that did not happen

- **What the return says:** the Other income statement is headed *"Section 481(a) adjustments due
  to a change in a method of accounting"*, listing Cash Rewards 508 and Sales Tax 7.
- **What is true:** those are **Credit card rewards 507.57** and **Sales Tax Allowance 6.87** —
  ordinary other income. **No method change occurred and no Form 3115 was filed or is on the return.**
- 🛠️ **The fix:** re-key the two items as plain **Other income** on the line-5 statement (in ATX,
  the *Other income* detail worksheet, not the §481(a) section). Amount stays **515**.
- **Consequence:** a return that announces a method change without the Form 3115 that authorises
  it is an invitation to correspondence, for $515 of income.

### E · 🔴 Item G answered Yes — the return claims 2025 is the first S year

- **What the return says:** item **G**, *"Is the corporation electing to be an S corporation
  beginning with this tax year?"* → **Yes**.
- **What is true:** item **A** on the same page says the S election is effective **1/1/2024**
  (Form 2553 filed May 2024 — `2024 - 05 - MAY - IRS S CORP ELECTION` in Double). **2025 is the
  second S year.** The wording was read off the current-year form from irs.gov.
- 🛠️ **The fix:** answer **No**. Nothing else changes.
- **Consequence:** contradicts item A on its own page, the 2553 on file, and the 2024 return.

### F · 🔴 Schedule K line 14b unchecked, with no exception statement

- The 2025 instructions, verbatim: *"Check the box on line 14b if you satisfy an exception to
  filing Schedule K-2 (Form 1120-S). **Attach a statement to explain your qualification for the
  exception.**"* And, for the domestic filing exception, *"you must provide notification to the
  shareholder either through an attachment to the Schedule K-1 or a separate statement **prior to
  filing** the Form 1120-S."*
- **Here:** no K-2/K-3 is attached, 14b is unchecked, no statement, no shareholder notification.
- 🛠️ **The fix, in order:** confirm the exception is met (sole **US-person** shareholder, no foreign
  taxes in the ledger, no foreign-source income — foreign *purchases* alone do not create items of
  international tax relevance) → **check 14b** → **attach the qualification statement** → **give the
  shareholder the notification before transmitting.** The notification step is the one that is
  easy to skip and is required to be done *first*.

### G · 🔴 The vehicle: three blanks and one unhelpful answer

- **Line 24b = No** — "is the evidence written?" — sitting beside a claim of **100% business use,
  20,549 business miles, 0 commuting, 0 other personal**, on the **sole shareholder's** SUV.
  A written mileage log is what §274(d) requires; answering No on a signed return concedes its
  absence and makes the 100% claim the first thing an examiner looks at.
- **Section B lines 34, 35 and 36 are blank** — was the vehicle available for personal use off
  duty? was it used primarily by a more-than-5% owner? is another vehicle available for personal
  use? **Line 35 is plainly Yes**, and 36 is answerable (the owner personally runs several Turo
  vehicles — §4-J).
- 🛠️ **The fix:** ask the client for the 2025 mileage log **before transmitting**; if one exists,
  change 24b to **Yes**; answer 34/35/36 from the facts. If no written log exists, 24b stays No
  and **the 100%/zero-personal split should be revisited with the client rather than filed as is.**
  ⓘ The 2026-08-26 document request already asked for *"the mileage details for … the Dodge listed
  on the AX Digital"* — **the answer may already be in the client's reply of 2026-08-27.**

### H · 🟡 Two small Schedule L presentation items

| | Return | Books | Fix |
|---|---|---|---|
| Line 18, the Fundbox loan | **7,201**, spelled **"Fundox"** | **Fundbox Loan 7,202.62** | correct to **7,203** and fix the spelling |
| Line 18 total | 7,263 | 7,265.02 | follows from the above |
| Line 22 Capital stock | **blank** | **100.00** | put **100** on line 22 and reduce line 24 to **120,260** |

Line 27 still foots to 127,624 either way — the balance sheet balances today only because the
errors offset. Worth two minutes.

### I · 🟡 "Home office → Rent" 13,130 reported on line 11, Rents — confirm the mechanism

The books post this to an account literally named **Home office → Rent** (13,129.89 in 2025;
10,394.34 in 2024, so the treatment is an established convention, not new). A
`Home Office Deduction.xlsx` sits in Double's file library, so it is supported. **But the two
possible mechanisms have opposite consequences on the owner's 1040:**

| If it is… | Company side | **Owner's 1040** |
|---|---|---|
| an **accountable-plan reimbursement** of home-office costs | deductible — better shown as office expense than "Rents" | **not income to him**, nothing to report |
| **rent paid to the shareholder** for space in his home | deductible as Rents, as filed | 🔴 **taxable rental income on his Schedule E** — and **§280A(c)(6) denies him any offsetting deduction** for the home expenses |

🛠️ **Ask which it is, and get the answer in writing.** Do not change the presentation on your own
initiative — the prior year did the same thing. **But whichever it is, §8 must say so**, because
if it is rent the owner has 13,130 of income his 1040 must pick up.

### J · ✅ Turo — asked, and answered: it is **NOT** this company's

Raised because the Client Intelligence file recorded Turo as an AXDIGITAL business line, and the
2026-08-26 document request asks for *"the mileage details for every Turo vehicle"* — while the
2025 books hold **no Turo income account, no Turo vehicle, and one fixed asset**.

**Resolved from Gmail:** the request itself distinguishes *"every **Turo vehicle**"* from *"the
Dodge listed on **the AX Digital**"*; the tracking spreadsheet is titled *"Доходы_Расходы Turo
**Oleksiy**"*; the 2024 mileage thread asks the owner personally, per car (Mercedes GLE 350,
Toyota Avalon); and on 2026-01-12, against Julia's **1040** preview, he replies *"As for Turo —
yes, we had big losses in 2025."*

✅ **Turo is Oleksiy's personal activity and belongs on his 1040, not on this 1120-S.** Nothing
is missing from this return. **The client file has been corrected.** → §8.

---

## 5 · Tie-out checks

| # | Check | Result |
|---|---|---|
| 1 | Page 1 line 1c = books total income | ✅ 1,263,999 = 1,263,999.53 |
| 2 | Page 1 line 2 = books COGS section | ✅ 920,639 = 920,638.99 |
| 3 | 1125-A line 8 = page 1 line 2 | ✅ 920,639 |
| 4 | Page 1 line 21 = sum of lines 7–20 | ✅ 233,214 |
| 5 | Page 1 line 22 = Sch K line 1 = Sch K line 18 = K-1 box 1 | ✅ 110,661 throughout |
| 6 | ⭐ Sch L **opening** column = books at 12/31/2024 | ✅ every line, and total 71,109 = 71,108.57 |
| 7 | Sch L closing assets = closing liabilities + equity | ✅ 127,624 both sides |
| 8 | Sch L line 15 = page 1 item F (total assets) | ✅ 127,624 |
| 9 | M-1 line 8 = Sch K line 18 | ✅ 110,661 |
| 10 | M-2 line 1 = books equity at 12/31/2024 | ✅ 70,123 = 70,122.84 |
| 11 | M-2 line 8 = Sch L line 24 | ✅ 120,361 |
| 12 | M-2 line 7 = K line 16d = K-1 box 16D = **gross owner-draw movement** | ✅ 60,270 four ways |
| 13 | K line 16c = M-1 line 3b = K-1 box 16C = 50% of book meals | ✅ 153 |
| 14 | 1125-E line 4 = page 1 line 7 = books Wages | ✅ 53,077 |
| 15 | 4562 line 22 = page 1 line 14 | ✅ 0 |
| 16 | Statement basis = Schedule B line 1 | ✅ both **Accrual** |
| 17 | **1125-A line 3 vs actual payroll** | 🔴 **FAILS — 972,410 vs 53,077** |
| 18 | **K-1 code AC vs 2025 gross receipts** | 🔴 **FAILS — carries the 2024 figure** |
| 19 | **§199A W-2 wages vs actual W-2 wages** | 🔴 **FAILS — consequence of 17** |
| 20 | Sch L line 18 + line 22 vs books | 🟡 off by 2 / capital stock omitted |
| 21 | **Fields that must be ANSWERED, not computed** | 🔴 item G wrong; K 14b, 1125-A 9e & 9f, 4562 34/35/36 blank |

### 🔄 The mirror scan — money out that came back

**Run at ACCOUNT level on the 2025 P&L and balance sheet. NOT run transaction-by-transaction on
every expense account** — this is a review of a prepared return, no journal entry is being made,
and the deep scan was not commissioned. Naming the search rather than claiming the world:

```
Amazon Sales          829,693.16 gross in
  Amazon Refunds      -48,821.50  |  Amazon Promotions  -1,441.20   -> already captured as contra-income
  Amazon Reimbursement  8,388.90  -> Amazon paying for lost/damaged stock; income in 2024 AND 2025 (consistent)
Refunds to customers   -4,434.01  -> netted into line 1a rather than shown on 1b (see 3A). Total unaffected.
Amazon Reserved Balances  -1.36   -> credit balance in an asset account; immaterial
CORP card 6868          -188.19   -> debit balance in a liability; netted with card 7904 (+250.59) to 62.40
Exchange Gain or Loss     -0.01   -> immaterial
```

✅ **The three contra-income accounts are the mirrors, and the return already handles them
correctly** — refunds reduce revenue rather than being buried. **No orphan credit was found at
account level.** ⚠️ A transaction-level scan of the Amazon/A2X postings was **not** performed and
would be the place to look if a deeper cut is ever wanted.

---

## 6 · Open at filing

1. 🔴 **The nine fixes in §4** — none needs anything from the client except §4-G (the mileage log,
   which may already have arrived on 2026-08-27).
2. 🟡 **§4-I** — is the home-office 13,130 a reimbursement or rent? **Affects his 1040.**
3. 🟡 **§4-D(2b)** — confirm the two 1099 PDFs in Double are the **2025** copies.
4. 🟡 **PBA code 449210** — confirm electronics is genuinely the primary product line.
5. 🟡 **No accounts payable at all** on an accrual return with 890,835 of purchases — one sentence
   of confirmation from the bookkeeper that nothing is unrecorded.
6. ⏳ **12 days to the extended due date (2026-09-15).**

---

## 7 · Carry into next year

- **Opening 2026 Schedule L = the 2025 closing column above**, once §4-H is applied
  (capital stock **100**, retained earnings **120,260**, other current liabilities **7,263**).
- **Opening AAA for 2026 = 120,361.**
- **Item G will be No again** — it is No for every year after 2024.
- **The Durango contributes UBIA of 66,325 until 2032** even though it is fully depreciated and
  produces no depreciation deduction. **Do not delete the asset.**
- ⚠️ **The K-1 box 17 code AC field does not roll forward correctly.** It carried 2024's number into
  2025 (§4-B). **Check it every year.**
- ⚠️ **1125-A line 3 vs line 2** — check that purchases are on line 2 before anything else.

---

## 8 · 🔗 THE HANDOFF — what flows to Oleksiy Bereznyak's 2025 Form 1040

⛔ **Reviewing the company is not preparing the owner's return.** The 1040 is a separate request
on a separate day. This section exists so that day does not repeat this work.

### 8A · The tables to carry across — **after the §4 fixes, not before**

| From the K-1 | Amount | Where it is typed on the 1040 |
|---|---|---|
| Box 1 — Ordinary business income | **110,661** | K-1 (1120-S) input → flows to Schedule E, Part II, non-passive column |
| Box 16 code C — Nondeductible expenses | **153** | Form 7203 — reduces stock basis; no income effect |
| Box 16 code D — Distributions | **60,270** | Form 7203 — tested against his stock basis |
| Box 17 code V — §199A ordinary income | **110,661** | QBI worksheet / Form 8995 or 8995-A |
| Box 17 code V — **§199A W-2 wages** | 🔴 **53,077, NOT 1,025,487** | QBI worksheet — **use the corrected K-1** |
| Box 17 code V — §199A UBIA | **66,325** | QBI worksheet |
| Box 17 code AC — §448(c) gross receipts | 🔴 **1,263,999, NOT 1,577,872** | informational |
| **His W-2 from the company** | **53,077** wages *(book accrual; use the actual W-2 boxes)* | Form 1040 line 1a |

### 8B · 🔴 What this side CANNOT supply

- **His opening stock basis** — **Form 7203 line 15 from his 2024 Form 1040**, filed with his
  *individual* return. ⛔ **It is not on the company's 2024 return in any form**, and the company's
  capital-account balance is **not** a substitute. If no 7203 exists — which is the *ordinary* case,
  not an edge one — it must be **reconstructed**, and that is **separate work with its own time,
  scoped rather than absorbed silently.**
- **His Turo activity** (§4-J) — his own books, and he told Julia there were **big losses in 2025**.
- **Form 1095-A / premium tax credit** — a `Form1095a_2024.pdf` exists in Double; the 2025 one will
  be needed.
- **His 2025 estimated payments** — `2025 EST Tax Payment Beneznyak.pdf` in Double.

### 8C · What must MATCH on both returns

- Distributions **60,270** on this K-1 = the distributions line on his Form 7203.
- §199A wages **53,077** on this K-1 = the W-2 wages on his QBI worksheet **and** his actual W-2.
- If §4-I turns out to be **rent**, the **13,130** deducted here is **13,130 of Schedule E income**
  on his 1040 — and §280A(c)(6) blocks the offsetting deduction.

### 8D · Before his 1040 is transmitted

Run the distributions-vs-basis test **for real** with his 7203 in hand (§3H step 2). Distributions
of 60,270 against a year of 110,661 of income look comfortable, **but comfort is a screen, not the
test.**

---

## 9 · Decisions taken in this review, and the alternative

| Decision | Alternative not taken | Why |
|---|---|---|
| Did **not** open the filed 2024 Form 1120-S through the redactor | pulling it | The 2024 **books** reproduce the opening column to the dollar, so the prior year is corroborated independently. What that leaves unverified is named in §1 |
| Kept the FBA/selling/shipping fees inside COGS | moving them to line 20 | It is the established 2024 convention and taxable income is identical. **Reproduce conventions; do not improve them mid-stream** |
| Recommended fixing 1125-A rather than overriding the §199A wage field | typing 53,077 over the wage figure | An override leaves the wrong 972,410 on line 3, where it stays wrong and re-breaks next year |
| Recommended the 890,835 / 81,575 split | simply moving 972,410 to line 2 | Both are correct and both fix §199A. The split is what the books actually say; the single move is the **minimum** acceptable fix |
| Raised the home-office characterisation as a **question** | re-presenting it as office expense | It is an established prior-year convention and the answer is the client's, not ours |

---

*Review by Claude, at Julia's request, 2026-09-03. Figures from Double (QuickBooks) reports for
FY2025 and FY2024, the client's payroll journal entries, and the prepared return PDF. No filing
was made and nothing was changed in Double or in the return.*
