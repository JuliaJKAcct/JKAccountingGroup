# Preparing a Form 1040 (individual return) — the modular procedure

> **Status:** 🟡 **DRAFT — pending Lilian's sign-off.** Started 2026-08-18 from the first two 1040s
> the firm prepared with a session assisting. · **Owner:** Lilian
>
> ⬜ **No Atlas render yet.** [`sop-authoring`](../../.claude/skills/sop-authoring/) requires every
> SOP to ship with one, and its engine takes a hand-authored designed body rather than this
> Markdown. **Owed before this leaves draft.**
>
> 🛑 **This SOP is built to GROW.** A 1040 can carry dozens of forms and almost no client carries
> them all. So it is written as an **intake selector plus modules**: §0 asks what this client has,
> and you read only the modules it points to. **Every time the firm meets a form it has not
> documented, a module is added.** A stub marked ⬜ means *nobody has prepared one yet* — write it
> the first time you do.
>
> 🛑 **The standing rule of every tax-return SOP:** an answer that changes a figure is read off the
> **current-year form or instructions on irs.gov**, never from memory. The IRS renumbers lines and
> Congress moves amounts. **TY2025 renumbered page 2 of the 1040**: AGI is **11a/11b**, the standard
> deduction is **12e**, **13a** (QBI) and **13b** (Schedule 1-A) are new, and the EIC is **27a**.

## The process at a glance

```
§1 GATHER  →  §2 FILING STATUS (the gate)  →  §3 DEPENDANTS  →  the MODULES §0 selected
                                                                          ↓
                                              §20 TIE-OUT  →  §21 WORKING PAPER  →  file
```

**Two things decide more of this return than anything else, and both come before any figure:**
**the filing status** (§2) and **who claims which child** (§3). Get them wrong and every module
downstream is wrong.

---

## §0 · The intake selector — mark what this client has

Work down the list. Every ✅ points at the module you must read. Everything unmarked, skip.

| # | Does the client have… | If yes → read | Status |
|---|---|---|---|
| 1 | A **W-2** | [M1](#m1--w-2-wages) | ⬜ stub |
| 2 | **Self-employment** — 1099-NEC, 1099-K, consulting, gig work, a sole proprietorship | [M2 · Schedule C](#m2--schedule-c--self-employment) | ✅ written |
| 3 | A **Schedule K-1** from an S-corporation | [M3 · Schedule E + Form 7203](#m3--schedule-e-part-ii--an-s-corporation-k-1) | ✅ written |
| 4 | A **K-1 from a partnership** | M3B | ⬜ stub |
| 5 | **Marketplace / Healthcare.gov insurance** → a **Form 1095-A** | [M4 · Form 8962](#m4--form-1095-a--form-8962--the-premium-tax-credit) | ✅ written |
| 6 | **Children or other dependants** | [M5 · Schedule 8812](#m5--schedule-8812--child-tax-credit) | ✅ written |
| 7 | **Earned income** and a qualifying child | [M6 · Schedule EIC](#m6--schedule-eic--earned-income-credit) | ✅ written |
| 8 | A **net operating loss** carried forward | [M7 · NOL](#m7--net-operating-loss-carryforward) | ✅ written |
| 9 | **Digital assets** — crypto bought, sold, exchanged or received | [M8](#m8--digital-assets) | ✅ written |
| 10 | **Rental property** | M9 · Schedule E Part I | ⬜ stub |
| 11 | **Interest, dividends, or a brokerage 1099-B** | M10 · Schedule B / Schedule D / Form 8949 | ⬜ stub |
| 12 | **Retirement distributions** — 1099-R | M11 | ⬜ stub |
| 13 | **Foreign income, or a foreign account or asset** | M12 · Forms 2555 / 1116 / FinCEN 114 / 8938 | ⬜ stub |
| 14 | **Education costs** — 1098-T, student loan interest | M13 | ⬜ stub |
| 15 | **A home purchase, sale, or mortgage** — 1098 | M14 | ⬜ stub |
| 16 | **Itemized deductions** that beat the standard deduction | M15 · Schedule A | ⬜ stub |
| 17 | **A state filing requirement** | M16 | ⬜ stub. ⓘ Florida has **no individual income tax** — most of this firm's 1040s file federal only |
| 18 | **An ITIN applicant** in the household | the [`itin-w7-preparation`](../../.claude/skills/itin-w7-preparation/) skill | ✅ elsewhere |

⚠️ **Answer 2, 3 and 5 from documents, never from the organizer alone.** The firm's organizer stops
asking about income the moment someone answers "no sources of income", so **its silence is not
evidence**. _(Learned 2026-08-18: a household organizer answered "None of the above" for a couple
where one spouse held an S-corporation K-1 and the other had $20,200 of consulting income.)_

---

## §1 · Gather this before you start

- [ ] **The prior-year return** — the comparison base. Read it before anything else; it is the only
      place the client's own conventions and carryovers are written down.
- [ ] The **organizer**, and **everything the organizer did not ask for** (see §0's warning).
- [ ] Every **W-2, 1099, K-1, 1095-A, 1098** for the year.
- [ ] For a Schedule C: the **income figure and its source**, and the expense worksheets.
- [ ] The **filing-status facts** (§2) and the **residence facts per dependant** (§3).
- [ ] Bank details for the refund or payment — **one account per return**; a joint organizer
      completed before a separation carries only one.

---

## §2 · Filing status — the gate, and it is not just a bracket

**Decide this first.** It sets the standard deduction, the brackets, the credit phase-outs, and —
the part people miss — **whether the taxpayer may take the premium tax credit at all** (M4).

### The five statuses and the 2025 standard deduction

| Status | 2025 standard deduction |
|---|---|
| Single · Married filing separately | **$15,750** |
| Married filing jointly · Qualifying surviving spouse | **$31,500** |
| Head of household | **$23,625** |

_Verified against the 2025 Instructions for Form 1040, "Standard deduction amount increased",
2026-08-18._ ⚠️ These moved for 2025; do not carry 2024's figures forward.

### 🔑 Head of household — three tests, all required

1. **Unmarried on 31 December**, or **"considered unmarried"** — which Pub 501 states as **five
   tests, not one**. The spouse being out of the household for the **last six months** (§7703(b))
   is *necessary, not sufficient*.
2. **Paid more than half the cost of keeping up a home for the year.** Counts: rent, mortgage
   interest, real estate taxes, insurance on the home, repairs, utilities, **food eaten in the
   home**. Does **not** count: clothing, education, medical treatment, vacations, life insurance,
   transport, or the value of your own services. ⓘ **Pub 501 Worksheet 1 splits "the amount YOU
   paid" from "the amount OTHERS paid"** — money the taxpayer receives and then spends **does**
   count as theirs; what does not is an amount another person pays **directly**, or an amount paid
   out of funds received **in a child's name**.
3. **A qualifying person lived in the home more than half the year** — more than 182 nights.

### ⚠️ Three traps on head of household

- **The same child cannot give two taxpayers head of household.** Pub 501 Table 4 footnote:
  *"A person can't qualify more than one taxpayer to use the head of household filing status for
  the year."* Two separated parents can **both** be HOH — but only with **different** children.
- **Two people cannot each pay more than half the cost of the same home.** For any part of the year
  they shared one, only one of them was keeping it up.
- 🔴 **HOH can be the premium-tax-credit gate.** A **married filing separately** taxpayer is not an
  applicable taxpayer and **cannot take the PTC at all**, unless a victim of domestic abuse or
  spousal abandonment. **Exception 1** to that rule is meeting §7703(b) and filing as **head of
  household**. So where a couple separated but the divorce was not final at year end, HOH is not a
  bracket question — **it is the difference between claiming the credit and repaying the advance.**

---

## §2A · Gate — the extension

**A hard stop, and it cannot be repaired afterwards.** The individual return is due **15 April**;
**Form 4868** moves the filing deadline six months, to **15 October**.

- 🔴 **An extension extends the time to FILE, never the time to PAY.** Tax unpaid at 15 April accrues
  interest and the failure-to-pay penalty regardless.
- **Establish whether one was filed, and whether anything was paid with it** — a payment made with a
  4868 is a credit on the return and is easy to lose.
- **If none was filed and the date has passed, stop and tell Lilian.** Failure-to-file runs far
  heavier than failure-to-pay.
- ⚠️ **On a separated couple, check BOTH of them.** An extension filed jointly before the separation
  may not do for each of them separately.

## §3 · Dependants — and the split people miss

**Ask for facts, not conclusions.** The one table that settles everything: **each child, and the
number of nights spent in each parent's home during the year.**

### 🔑 What can be released, and what cannot

| Benefit | Follows | Releasable to the other parent? |
|---|---|---|
| **Head of household** | Residence | 🚫 **No** _(Pub 501 Table 4 fn 2)_ |
| **Earned income credit** | Residence | 🚫 **No** _(Pub 596 — only the custodial parent, if eligible)_ |
| **Dependent-care credit** | Residence | 🚫 **No** _(Pub 503)_ |
| **Child tax credit + the dependency** | The claim | ✅ **Yes — with a signed Form 8332** _(§152(e))_ |

🔑 **So the custodial parent can keep HOH and the EIC AND still hand the child tax credit to the
other parent.** That is the lever in a separated household, and it costs the custodial parent
nothing.

⚠️ **Ask for the facts, not the family-law paperwork.** Who lived where and for how many months —
not the custody order. A Form 8332 becomes unavoidable only if a **non-custodial** parent will
actually claim a child.

---

## M1 · W-2 wages

⬜ **Stub — write this the first time the firm prepares a 1040 with a W-2 in a session.** Should
cover: box 1 → line 1a; box 2 → line 25a; box 12 codes; multiple W-2s; excess social security
withheld across employers; and the household-employee and statutory-employee cases.

---

## M2 · Schedule C — self-employment

**The most common module for this firm's clients, and the one with the most traps.**

### Where each number comes from

| Line | Concept | Where it comes from |
|---|---|---|
| A | Principal business or profession | What they actually do, in plain words |
| B | Business code | From the Schedule C instructions' list — match the activity, not the job title |
| **1** | **Gross receipts or sales** | **Every dollar received for the work** — 1099-NECs, 1099-Ks, *and cash or transfers with no form at all*. ⚠️ **A 1099 is evidence, not the measure.** Income with no 1099 is still income |
| 4 · 33–42 | Cost of goods sold | Only for a business that sells goods. A service business leaves Part III empty |
| 8–27 | Expenses | Ordinary and necessary, and **substantiated** |
| **9** | Car and truck | Mileage log or actual costs. ⚠️ **A driver with zero vehicle expenses is a red flag, not a simple return** _(seen on a real 2024 Uber Schedule C)_ |
| **25** | Utilities | ⚠️ **Telephone: the business share of the taxpayer's OWN line.** A household account total on a multi-line plan is not deductible as such |
| **30** | **Business use of the home** | See below. The **actual** method is computed on **Form 8829**; the simplified method has no form, only a worksheet |
| **31** | **Net profit or (loss)** | ƒ line 7 − line 28 − line 30 → **Schedule 1 line 3** *and* **Schedule SE** |

### 🔑 Line 30 — the home office, and the two ways to compute it

**Both methods need the same two facts: the workspace area, and the total area of the home.**

| Method | Computation | When it wins |
|---|---|---|
| **Simplified** | **$5 per square foot**, maximum **300 ft²**. Part-year: average the monthly allowable square footage and **divide by 12** | A small workspace in a cheap home |
| **Actual** | **workspace ÷ total area** × (rent or mortgage interest + property taxes + insurance + utilities + repairs) for the months of business use | **A high rent.** It routinely wins by a multiple |

⚠️ **Compute BOTH and take the better. Do not default to simplified.** _(Real case, 2025: a 67 ft²
workspace in a 673 ft² rented home — actual **≈$912**, simplified **≈$112**. Eight times.)_

**Three limits and traps:**

1. 🔴 **§280A(c)(5) — the gross-income limit.** The deduction cannot exceed the business's gross
   income less its other expenses. **It cannot create or increase a loss.** So it **cannot be
   computed at all until the income is known.**
2. **The excess is not lost — it carries forward** _(Pub 587)_ — **but a carryover cannot be
   deducted in any year the simplified method is used.** A second reason not to default to
   simplified.
3. 🔴 **Regular AND exclusive use** (§280A(c)(1)) — **the commonest disallowance**. A space carved
   out of a family home is exactly what gets examined. **Establish how the space is used before
   claiming it.**

### Schedule SE — the tax people forget

| Line | Computation |
|---|---|
| 2 | Schedule C line 31 |
| **4a** | × **92.35%** (0.9235) — net earnings from self-employment |
| **12** | × **15.3%** (12.4% social security up to the wage base + 2.9% Medicare) → **Schedule 2 line 4** |
| **13** | **× 50% → Schedule 1 line 15**, an above-the-line deduction |

⚠️ **A Schedule C client with no income tax still owes self-employment tax.** The standard deduction
does not touch it.

### Qualified business income — Form 8995

QBI = Schedule C net profit **less** the deductible half of SE tax (and less self-employed health
insurance and retirement contributions, where present). The deduction is **20% of QBI**, but capped
at **20% of (taxable income before the QBI deduction − net capital gain)**.

🔑 **So a client whose standard deduction wipes out taxable income gets NO QBI deduction**, however
profitable the business. Compute it, expect zero, and do not chase it.

---

## M3 · Schedule E Part II — an S-corporation K-1

The K-1 comes off the company's **Form 1120-S** — see
[`form-1120s-preparation.md`](./form-1120s-preparation.md). **The company's return is a
prerequisite**: the shareholder's 1040 cannot be finished before it.

| From the K-1 | Goes to |
|---|---|
| Box 1 ordinary business income (loss) | Schedule E Part II, nonpassive column → Schedule 1 line 5 |
| Box 16 C nondeductible expenses · 16 D distributions | **Form 7203**, not the 1040 directly |
| Box 17 V §199A | Form 8995 |

### 🔴 A loss must clear THREE gates, in this order

1. **§1366(d) — basis.** Form 7203, filed **with the 1040**, not with the 1120-S.
2. **§465 — at risk.** Form 6198.
3. **§469 — passive activity.** Form 8582. Schedule E Part II has **separate passive and nonpassive
   columns** for exactly this reason.

⚠️ **Form 7203 answers gate 1 only.** "The loss is fully deductible" off a 7203 is a *basis*
conclusion. **Record material participation** rather than inheriting last year's column.

### Form 7203 — the mechanics that get done wrong

- **Line 1** is **last year's line 15**, copied. Never recomputed.
- **A loss never goes on lines 3a–3m** — line 3a says *"enter losses in Part III"*.
- **Order matters:** contributions → **distributions** (line 6) → nondeductible (8a) → **losses**
  (11). A distribution exceeding basis is a **capital gain** on Form 8949/Schedule D.
- **Line 15 is next year's line 1.** 🔑 On a company heading for a **final** return, line 15 is the
  opening figure of the **liquidation** gain/loss calculation — not this year's paperwork.
- **Box E — the §1.1367-1(g) election:** once made it binds every later year until the IRS consents
  to revoke. **If the prior year left it blank, leave it blank.**

---

## M4 · Form 1095-A → Form 8962 — the premium tax credit

🔴 **This form BLOCKS e-filing.** A return with advance payments and no Form 8962 is rejected.

### The two "families" that are not the same thing

| | What it is | What it drives |
|---|---|---|
| **Tax family** | The taxpayer, spouse, and **dependants** | **Household income** and **family size** → the federal poverty line percentage |
| **Coverage family** | The members of the tax family **enrolled** in the Marketplace plan and **not eligible for other minimum essential coverage** | The applicable **SLCSP** |

🔑 **A dependant can be in the tax family and NOT in the coverage family** — a child on Medicaid or
CHIP, for instance. **That child still raises the family size, which raises the poverty line, which
lowers the required contribution and RAISES the credit.** Do not drop them.

### The 2025 federal poverty line (48 states and DC)

| Family size | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| FPL | **15,060** | **20,440** | **25,820** | **31,200** | **36,580** |

_Verified against the 2025 Instructions for Form 8962, Table 1-1, 2026-08-18._ ⓘ These are the
**prior calendar year's** HHS guidelines — the ones in force when the client enrolled.

### 🔴 Household income below 100% of the poverty line

Normally that means **not an applicable taxpayer**. But there is an exception, and this firm's
clients hit it repeatedly: a taxpayer still qualifies if **the Marketplace estimated at enrollment
that household income would be at least 100% FPL**, **advance payments were made**, and they are
otherwise eligible. **Check it explicitly rather than assuming the credit is lost.**

### 🔴 A shared policy — when one 1095-A covers more than one tax family

Common after a separation: one policy, one recipient, and the people on it now file two or three
returns. **Form 8962 Part IV allocates it.** Which rule applies depends on a fact you must
establish first — **the date the marriage ended**:

| Situation | When it applies | Allocation | Which columns |
|---|---|---|---|
| **1** | Divorced or legally separated **during the year** | **By agreement — any percentage.** If they cannot agree, **50% each** | (e), (f) **and** (g) — ⚠️ **only for the months they were MARRIED** |
| **2** | **Married at year end**, filing separately | **50% each — not negotiable** | (e) and (g) only. 🔴 **Column (f) stays BLANK** — the SLCSP is *not* allocated; each taxpayer enters **the SLCSP for their own coverage family** on lines 12–23 |
| **3** | **No advance payments** were made | — | |
| **4** | Any other policy shared between two tax families | **By agreement — any percentage.** Failing agreement, the instructions' formula: **the number of individuals enrolled by one taxpayer who are in the OTHER taxpayer's tax family, divided by the total enrolled on that policy** | (e), (f) and (g) |

🔴 **Two things a session gets wrong here, and both change the numbers:**

- **Situation 4 is by AGREEMENT first.** The formula is only the fallback — and it is **not** "your
  own coverage family ÷ total enrolled". Read it again: it counts the individuals *one* taxpayer
  enrolled who belong to the *other's* tax family.
- **Allocation is PAIRWISE — per policy, per situation — not one percentage spread across
  everyone.** A policy shared by three tax families is **two allocations**, each under its own
  situation, and Situation 1 covers **only the married months** while the rest of the year is
  something else. Form 8962 line 34 contemplates **more than four allocations**, with a statement
  attached.

**And three rules that bind whatever is chosen:**

1. **One taxpayer's share and the other's must neither overlap nor leave a gap** for the same policy
   and the same months. ⚠️ *"Everyone's percentages add to 100%"* is a useful sanity check, **not a
   rule in the instructions** — and it does **not** hold for column (f) under Situation 2, where the
   SLCSP is not allocated at all.
2. **The figures each return carries must agree with the other's.** The classic mismatch that
   generates IRS notices.
3. ⚠️ **If the Marketplace was never told about the separation, column B (SLCSP) may be wrong for
   each of them.** The 1095-A cover letter says so itself: *"You had changes in your household that
   you didn't report to the Marketplace — like… getting married or divorced… Visit
   HealthCare.gov/tax-tool."* **Check it; do not assume the printed SLCSP fits the new coverage
   families.**

### The monthly computation

For each month: **PTC = the lesser of (a) the enrollment premium, or (b) the SLCSP minus the monthly
contribution amount** — each first multiplied by the allocation percentage.

⚠️ **Where SLCSP exceeds the enrollment premium, the credit is capped at the premium.** Money is not
made on a cheaper plan.

Then: **net PTC** (Schedule 3 line 9 → 1040 line 31) if the credit exceeds the advance, or **excess
advance repayment** (Schedule 2 line 1a) if the advance exceeds the credit.

🔑 **The net premium tax credit IS a refundable credit** — it reaches line 31 and the "total other
payments and refundable credits" line. A client with no earned income can still receive it.

⚠️ **The repayment of an excess advance is capped by Table 5** where household income is under 400%
of the poverty line. **Read the current Table 5** — the amounts are indexed.

---

## M5 · Schedule 8812 — child tax credit

| 2025 | Amount |
|---|---|
| Child tax credit per qualifying child | **$2,200** |
| Maximum **refundable** additional child tax credit per child | **$1,700** |
| Earned-income threshold for the refundable portion | **$2,500** |

_Verified against the 2025 Instructions for Form 1040, 2026-08-18._

- The **$2,200 is nonrefundable** — it can only reduce tax to zero.
- The **additional** child tax credit is refundable: **15% × (earned income − $2,500)**, capped at
  $1,700 per qualifying child **and** at the part of the $2,200 credit the nonrefundable calculation
  could not use.
- 🔴 **Both the ACTC and the EIC require EARNED income.** Wages and net self-employment earnings are
  earned income. **An S-corporation K-1 loss is not. Distributions are not. Interest is not.**
  ⚠️ *A client can have a large K-1 and still be worth nothing on either credit.*
- 🔴 **Earned income for a self-employed taxpayer starts at Schedule C line 31 — NOT at the 92.35%
  figure.** The Schedule 8812 **Earned Income Worksheet** takes line 2b from *"net profit or (loss)
  from **Schedule C, line 31**"* and subtracts *"the amount from **Schedule 1 (Form 1040), line
  15**"* — the deductible half of the SE tax. The 1040 instructions' **EIC Worksheet B** does the
  same from **Schedule SE Part I line 3** (also the net profit, *before* the 0.9235 multiplier) less
  **Schedule SE line 13**.
  **So: earned income = Schedule C line 31 − half the SE tax.** ⚠️ Using the 92.35% figure instead
  understates earned income and can cost a client real credit near a threshold.

---

## M6 · Schedule EIC — earned income credit

| 2025, one qualifying child, single or head of household | |
|---|---|
| Maximum credit | **$4,328** |
| AGI / earned income limit | **$50,434** |
| Investment income limit | **$11,950** |

_Verified against irs.gov's EITC tables, 2026-08-18. For other child counts and for joint filers,
read the table — do not extrapolate._

- The credit is the **lesser** of the amount from the table on **earned income** or on **AGI**.
- The child must have lived with the taxpayer **more than half the year** and have a valid SSN.
- 🚫 **The EIC cannot be released to the other parent** (§3).
- 🔴 **"Considered unmarried" for head of household is NOT the same test as for the EIC.** Pub 501:
  *"You may be considered unmarried for the purpose of using head of household status but not for
  other purposes, such as claiming the EIC. Different tests apply."* A separated taxpayer still
  married at year end needs **§32(d)(2)** separated-spouse relief for the EIC — **check it
  separately from the HOH decision.**
- The preparer must complete **Form 8867** (due diligence) — and it is a real penalty exposure.

---

## M7 · Net operating loss carryforward

- Post-2017 NOLs **carry forward indefinitely**.
- The deduction is limited to **80% of the excess (if any) of taxable income computed without the
  deductions for NOLs, qualified business income, and §250** _(Pub 536)_.
- 🔴 **So in a year with no positive taxable income, the allowable NOL deduction is ZERO and the
  whole carryforward rolls on.** Entering the carryforward anyway burns a deduction that is not
  allowed and **understates next year's opening NOL.**
- **On a separation, the NOL belongs to the spouse who generated it.** Do not carry it onto the
  other's return by default; record the decision on both.

---

## M8 · Digital assets

- The question on **page 1 of the 1040** must be answered on every return.
- **"Yes" means the detail is needed** — a sale, exchange or disposal is a capital transaction on
  **Form 8949 / Schedule D**, whether or not there was a gain. Digital assets received as payment
  or as a reward are **ordinary income**.
- ⚠️ **Ask for the platform statement.** The organizer asks the yes/no question and, if an earlier
  answer closed the income branch, **never asks for anything else**.

---

## §20 · Before you file — the tie-out checks

- [ ] **Filing status** supports every credit claimed — including **applicable-taxpayer status for
      the PTC** (M4).
- [ ] Each dependant is claimed on **exactly one** return.
- [ ] Where a policy is shared: the **allocation percentages across all returns total 100%**, and
      both returns carry the **same** figures.
- [ ] Schedule C line 31 = Schedule SE line 2, and half the SE tax reaches Schedule 1 line 15.
- [ ] The home-office deduction is **within the §280A(c)(5) limit**, and the space passes **regular
      and exclusive** use.
- [ ] A K-1 loss clears **all three** gates — basis, at-risk, passive.
- [ ] Form 7203 line 1 = **last year's line 15**.
- [ ] The NOL deduction respects the **80%** limit; any unused amount is carried forward.
- [ ] **Form 8867** is complete where EIC, CTC/ACTC, AOTC or HOH is claimed.
- [ ] The refund account belongs to **this** taxpayer.

## §21 · 🔑 Record the return in the working-paper archive

**Part of preparing the return, not an afterthought.** One file per return in
[`projects/tax-returns/<client-slug>/<year>-form-1040.md`](../tax-returns/), carrying every line,
where each figure came from, the decisions and who made them, and what is open at filing. The folder
[README](../tax-returns/README.md) is the authority on what may and may not be written there.

## §22 · Where things live

| | |
|---|---|
| The company return behind a K-1 | [`form-1120s-preparation.md`](./form-1120s-preparation.md) |
| The working papers | [`projects/tax-returns/`](../tax-returns/) |
| What the firm knows about a client | [`projects/client-intelligence/`](../client-intelligence/) |
| The pre-return review | the [`organizer-review`](../../.claude/skills/organizer-review/) skill |
| How to extend this SOP | the [`tax-return-sop`](../../.claude/skills/tax-return-sop/) skill |

## §23 · Update this SOP when…

- **A module marked ⬜ is prepared for the first time** — write it, from the return you just did.
- **A form appears that §0 does not list** — add a row and a module.
- **The IRS renumbers a line or moves an amount** — every figure in this SOP carries the date it was
  verified. Re-verify against irs.gov; never carry a number forward from memory.
- **A trap bites.** The traps in here are all from real returns; that is the only reason to trust
  them.
