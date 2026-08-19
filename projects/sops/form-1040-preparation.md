# Preparing a Form 1040 (individual return) — the modular procedure

> **Status:** 🟡 **DRAFT — pending Lilian's sign-off.** Started 2026-08-18 from the first two 1040s
> the firm prepared with a session assisting; extended the same day with the **credit mechanics**
> (§3, M5, M6) and the **Form 1095-A continuation-page trap** (M4), and on **2026-08-19** with the
> home-office **IN/OUT rule**, the **first-landline** limit, the two **lease** traps, the **Form 8829
> line map**, the **two-dates** rule (M2), the **Form 8962 filling order + Part IV**, **line 34**,
> the **divorced-parents procedure**, the **below-100%-FPL checkbox** (M4) and the **Dependents-tab
> rule for Schedule EIC** (M6).
> · **Owner:** Lilian
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
where one spouse held an S-corporation K-1 and the other had a year of consulting income the
organizer therefore never asked about.)_

---

## §1 · Gather this before you start

- [ ] **The prior-year return** — the comparison base. Read it before anything else; it is the only
      place the client's own conventions and carryovers are written down.
- [ ] The **organizer**, and **everything the organizer did not ask for** (see §0's warning).
- [ ] Every **W-2, 1099, K-1, 1095-A, 1098** for the year.
- [ ] For a Schedule C: the **income figure and its source**, and the expense worksheets.
- [ ] **For a home office: the LEASE (or mortgage statement) and the insurance policy on the home.**
      🔴 **The lease is not optional** — it is what tells you whether the "rent" the client reported
      is the whole rent or their **share**, and who else is on it. See M2's home-office module.
- [ ] ⚠️ **Expect a client-uploads folder to contain IDENTITY DOCUMENTS** — passports, licences,
      immigration papers — alongside the tax ones. Open what you need, record nothing from the rest.
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
   out of funds received **in a child's name**. 🔑 **The SOURCE of the taxpayer's own money is
   irrelevant** — savings, a gift already received, a loan: if they paid it, they paid it. A client
   with no income for the year can still satisfy this test.
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

### 🔑 Price the levers before you ask the parents for anything

**Two different things get confused every time: where a child LIVES, and who CLAIMS the child.** They
are worth very different money, and only one of them can be chosen.

| Lever | What moves | Typical worth | Can it be chosen? |
|---|---|---|---|
| **Residence** | HOH · **EIC** · dependent-care | **Large** — a second EIC child can be worth thousands | 🚫 **No.** It is a fact about the year |
| **The claim (Form 8332)** | Child tax credit + dependency | **Small** — bounded by the payer's Schedule 8812 ceiling | ✅ Yes |

**Run this before drafting a single question to the family:**

1. **Which parent has earned income?** Credits that pay cash — the EIC and the ACTC — need it. A
   parent with only a K-1 loss, only investment income, or no income at all **cannot use a child at
   all**, however many they claim.
2. **Compute that parent's Schedule 8812 15% ceiling.** It tells you **how many** releases are worth
   asking for. Usually the answer is **one**.
3. **Then ask for exactly that many Forms 8332** — and say plainly that signing costs the other
   parent nothing, because **the custodial parent keeps head of household after releasing**
   _(Pub 501 Table 4 fn 2)_.

⚠️ **Never present a residence hypothetical as an option.** Where the children lived is a fact of the
year. Modelling one to *explain how the credits behave* is fine and often the clearest way to answer
"why is this worth so little?" — **filing on one is not.**

### 🔴 The residence FACT can change after you have priced the levers. Re-price, do not patch.

**Establish where each child actually lived before building anything on top of it — and treat a
change in that answer as a new return, not an adjustment.**
_(Live case, 2026-08-18 → 2026-08-19: the firm was told two of three children lived with the father,
priced the levers, and was one message away from recommending a signed Form 8332 worth a few hundred
dollars. The next day the client confirmed **all three had lived with the mother all year and the
father had lived alone.** The 8332 became meaningless; the mother's refund roughly doubled; the
father lost head of household, lost every dependant, and went from owing nothing to owing a balance.
**Not one income figure moved.**)_

Three things that case is worth remembering for:

1. 🔑 **The unreleasable lever is usually the big one.** The Form 8332 moved the child tax credit; the
   children's actual residence moved the **earned income credit**, which is several times larger and
   **cannot be released on any form**. **Price the residence facts first, and be sure of them before
   you price anything else.**
2. 🔴 **A CHANGE OF DEPENDANTS TOUCHES FAR MORE THAN THE CREDIT LINES.** Re-derive, on **both**
   returns: **filing status** (a parent with no resident child cannot be head of household),
   **Schedule 8812's Part II-B routing** (three children crosses the $5,100 branch), **Form 8962
   lines 1, 4 and 5** (tax family size and the poverty line), **Form 8962 line 28** (the repayment
   limitation follows filing status), and **whether any nonrefundable credit is still there to absorb
   an excess advance premium tax credit.** ⚠️ **Patching only the EIC and the CTC will leave a wrong
   return that foots.**
3. ⚠️ **A source that is wrong about some things is NOT thereby wrong about the thing in front of
   you.** The joint organizer had said all along that all three children lived with their mother for
   twelve months. **That answer was overridden because several of the organizer's OTHER answers were
   demonstrably wrong** — and it turned out to be correct. **Discredit an answer on its own evidence,
   never by association with its neighbours.**

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

⚠️ **Compute BOTH and take the better. Do not default to simplified.** _(Real case, 2025: a small workspace in a
high-rent home — the actual method came out roughly **eight times** the simplified one.)_

#### 🔴 The home office is NOT written on Schedule C — it is computed on FORM 8829

**Schedule C line 30 only receives a number.** The whole computation lives on **Form 8829,
*Expenses for Business Use of Your Home*, filed with the Schedule C.** Its own header carries a rule
people miss: *"Use a **separate Form 8829 for each home** you used for business during the year."*

🛠️ **In ATX you do not open Form 8829 directly — you fill in the *Home Office Expenses* worksheet,
and ATX builds the 8829 from it.** _(Lilian, 2026-08-19.)_ Same for the software's date fields: they
feed the form, they are not on it.

⚠️ **There is a circularity, and it catches everyone.** Form 8829 **line 8** asks for **Schedule C
line 29** — the tentative profit *before* the home office. So the order is:

```
Schedule C Parts I & II, everything EXCEPT line 30
        ↓  line 29
Form 8829  (line 8 ← Sch C line 29)
        ↓  line 36
Schedule C line 30  →  line 31
```

**Form 8829, line by line** — the map for an ordinary rented-home office:

| Part | Line | What it is | Where the number comes from |
|---|---|---|---|
| I | **1** | Area used **regularly and exclusively** for business | The client's measurement, in ft² |
| I | **2** | Total area of home | " |
| I | **3** | Divide line 1 by line 2, **as a percentage** | ƒ 1 ÷ 2 |
| I | **7** | **Business percentage** | = line 3 (lines 4–6 are daycare only) |
| II | **8** | **Amount from Schedule C, line 29** — *plus any gain from the business use of the home, minus any loss from the trade or business not derived from it* | 🔑 the circular input — and the §280A(c)(5) ceiling, built into the form. The two adjustments are usually nil, but they are in the line's own text |
| II | 9 · 10 · 11 | Casualty losses · deductible mortgage interest · real estate taxes | **0 for a renter** |
| II | 12 – 15 | Subtotals; **line 15 = the ceiling that survives** | ƒ 8 − 14 |
| II | **18** | **Insurance** — column (b) | Homeowner's **or renter's (HO-4)** policy, pro-rated |
| II | **19** | **Rent** — column (b) | 🔑 **what THIS taxpayer paid** — see the lease rule below |
| II | **20** | Repairs and maintenance — column (b) | Whole-home repairs |
| II | **21** | **Utilities** — column (b) | Electricity, gas, water, sewer, trash. ⛔ **not the internet** — *the firm's position, see the IN/OUT section below; Pub 587 does not name it* |
| II | 22 | Other expenses — column (b) | HOA fees live here |
| II | **23** | Add lines 16 through 22 | ƒ |
| II | **24** | **Multiply line 23 column (b) by line 7** | ƒ — this is the actual computation |
| II | 25 | Carryover of prior year operating expenses | From last year's line 43 |
| II | **26** | Add line 23 column (a), line 24, and line 25 | ƒ — the total the ceiling is tested against |
| II | **27** | **Allowable operating expenses — the SMALLER of line 15 or line 26** | 🔑 **this is where §280A(c)(5) actually bites** |
| II | **28** | Subtract line 27 from line 15 | ƒ — the room left for casualty losses and depreciation |
| II | 29 – 33 | Casualty losses · **depreciation** | **0 for a renter** — no depreciation, so nothing to recapture on moving out |
| II | **36** | **Allowable expenses → Schedule C line 30** | ƒ 34 − 35 |
| III | 37 – 42 | Depreciation of the home | **Blank for a renter** |
| IV | **43 · 44** | **Carryover to next year** | ƒ 26 − 27 · ƒ 32 − 33 |

⚠️ **Columns (a) and (b) are not what a beginner expects.** **(a) Direct expenses** = costs of the
**business part of the home only**, deducted at **100%** (painting just that room). **(b) Indirect
expenses** = costs of the **whole home**, deducted at the line-7 percentage. Most entries are (b).

⚠️ **Line 3 asks for a percentage, and how many decimals survive is a software convention, not a
form rule** — the printed box is blank with a trailing `%`. A percentage rounded to two decimals
gives a different answer from the full fraction — usually a dollar, occasionally more. **Let the
software carry it**, and if you are checking by hand, expect the wobble.

#### 📅 The two DATES — and neither Schedule C nor Form 8829 asks for one

**A recurring question, and the answer surprises people. Nothing in the Schedule C package asks for a
business start DATE:**

| Where | What it actually asks | A date? |
|---|---|---|
| **Schedule C, line H** | *"If you started or acquired this business during [year], check here"* | ❌ **A checkbox. No date.** |
| **Form 8829** | — | ❌ **No date field anywhere on the form** |
| Form 4562 | *"Date placed in service"* | ✅ but only if something is being **depreciated** — not a renter's home office |
| Simplified-method worksheet | **Number of months**, not a date | ❌ |

⚠️ **Scoped deliberately: this is about the RETURN.** The **Form SS-4** does ask — line 11,
*"Date business started or acquired"* — but that is the **EIN application**, not the return. See
[`ein-application-irs.md`](./ein-application-irs.md). Forms 1065 and 1120-S carry a date in item E as
well. **Schedule C and Form 8829 do not.**

🛠️ **So a date field on THIS screen belongs to the SOFTWARE, not the IRS.** ATX's Home Office
worksheet carries the date business use of the home began, and that is what drives the part-year
proration onto line 24. The IRS only ever sees the result.

🔑 **THE BUSINESS AND THE HOME OFFICE RUN ON TWO DIFFERENT CLOCKS, and that is perfectly normal.**
A business that started **1 January** with a home office only from **1 September** is a completely
ordinary pattern — someone goes self-employed and moves mid-year. Pub 587 is explicit: *"You cannot
deduct expenses for the business use of your home incurred during any part of the year you did not
use your home for business purposes."*

- **The business start date** governs the line-H checkbox, §195 start-up costs, and which months of
  **business** expenses count.
- **The home-office start date** governs **only Form 8829**.
- ⚠️ **Two consequences worth chasing.** If the business ran before the home office existed, there
  are **business expenses in those earlier months** (phone, internet, mileage) that nobody has asked
  for. And if there was a workspace at a **previous home**, that is a **second Form 8829** — the
  form's own header says one per home.

#### 🔑 What goes INTO the computation — and what emphatically does not

**The test is simple: does the cost scale with the FLOOR AREA of the home?** If it does, it is an
indirect home-office expense and gets the business-use percentage. If it does not, it is an ordinary
business expense at **its own** business-use percentage.

| ✅ IN the worksheet — **indirect**, at the floor-area % | ⛔ OUT of the worksheet — ordinary Schedule C expenses |
|---|---|
| Rent, or mortgage interest + property taxes | **Telephone** — at its own business % |
| Electricity, gas, water, sewer, trash | **Internet** — at its own business % |
| **Insurance on the home — including a RENTER'S policy (HO-4)** | Software, subscriptions — at their own business % |
| HOA fees | **Mileage** — standard rate × business miles (line 9) |
| Cleaning, repairs and maintenance of the whole home | Supplies, professional fees — usually 100% |

⚠️ **Do not call the right-hand column "direct expenses".** On **Form 8829** and in Pub 587,
*direct expenses* means expenses for the **business part of the home**, deductible at **100%** — the
opposite of what the right column is. The right column is *not a home-office expense at all*.

⛔ **THE FIRST PHONE LINE INTO THE RESIDENCE IS NEVER DEDUCTIBLE — not even in part.** Pub 587:
*"the basic local telephone service charge, including taxes, for the first telephone landline into
your home is a nondeductible personal expense."* The Schedule C instructions repeat it and add that
**additional** business costs above that base rate can be deducted. ⓘ **A mobile plan is not that
line** — §262(b) reaches the first *landline* — which is why a cell-phone bill can be split by
business use while a home landline's base rate cannot.

ⓘ **The internet is a POSITION, not a citation — say so when someone asks.** Pub 587 **never
mentions the internet**, and its stated default runs the other way: *"Generally, the business
percentage for utilities is the same as the percentage of your home used for business."* Deducting
it at actual business use on line 25 is a common and defensible position, reasoning by analogy from
the telephone rule, because bandwidth does not scale with floor area. **Pub 587's insurance
treatment, by contrast, IS explicit** — including the rule that a premium covering a period past the
tax-year end is deducted only for the part covering the year.

- 🔴 **A cost may never be in BOTH places.** Moving the internet out of the worksheet and onto
  line 25 is right; leaving it in both is double-counting. _(Live case, 2026-08-19: inside the
  worksheet the internet was worth about an eighth of what it is worth at its real business-use
  percentage — the floor-area share is a **floor**, not a fair split, for anything that does not
  scale with area.)_
- ✅ **Renter's insurance IS deductible through the home office.** Pub 587 lists *insurance on the
  home* among the indirect expenses, and a tenant's HO-4 policy is that insurance. It is small —
  tens of dollars a year — and it is routinely reported as **zero** on a client worksheet by someone
  who does not think of it as a housing cost. **If the client rents, ask for the policy.**
- ⚠️ **Take only the months of business use.** An annual premium gets pro-rated; so does everything
  else on the left-hand column.

#### 🔴 Reconcile the client's "rent" against the LEASE — two different traps live here

**Ask for the lease, and read it beside the worksheet.** Two things go wrong, and they pull in
opposite directions:

1. **The figure the client calls "rent" may be their SHARE, not the lease amount.** Using the lease
   figure would then overstate the deduction. **Only what THIS taxpayer paid enters THEIR
   computation.**
2. **A lease in two names is NOT evidence that two people lived together.** Separating couples stay
   on one lease for months after one of them moves out. ⚠️ **This one is dangerous because it looks
   decisive**: read alone it appears to prove a shared home, which would take **head of household**
   away from one of them. **It is a question for the client, never a conclusion.**

_(Both surfaced on the same document, 2026-08-19: a lease naming two ex-spouses at a materially
higher rent than the figure the client had reported. The rent was her share; they lived apart. Either error alone
would have changed a return.)_

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

### 🔴 READ EVERY PAGE OF THE FORM BEFORE COUNTING WHO IS COVERED

**Form 1095-A Part II holds only FIVE covered individuals** (lines 16–20). A sixth person goes on a
**continuation page**, whose Part III is normally **blank** — because the monthly totals on page 1
already cover everyone on the policy.

- 🛑 **Never conclude "X is not on the policy" from one page.** Count the covered individuals across
  **all** pages, and reconcile that count against the client's household.
- ⚠️ **A partly-extracted document proves nothing by its silence.** [`redact-doc`](../../tools/redact-doc/)
  prints how many pages it could not extract and says so in as many words; a scanned or image-only
  page comes back empty and looks exactly like a page with nothing on it.
- 🔑 **The consequence is not cosmetic.** Someone reported as uncovered turns into an invented
  question ("what coverage did this child have — Medicaid? CHIP?") put to a client who never had one.

_(2026-08-18: a session read page 5, counted five names, and reported the youngest child as not on
the policy. She was on page 7. Lilian caught it with the paper form in front of her. **No figure
changed** — Part III already covered all six.)_

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

### 🔴 Household income below 100% of the poverty line — and the CHECKBOX that saves the credit

Normally that means **not an applicable taxpayer**. But there is an exception, and this firm's
clients hit it repeatedly. The instructions state it as five requirements, **all** of which must
hold:

> *"**Estimated household income at least 100% of the federal poverty line.** You may qualify for the
> PTC if your household income is less than 100% of the federal poverty line and you meet all of the
> following requirements: • **No one can claim you as a dependent** for the year. • **You or an
> individual in your tax family enrolled in a qualified health plan** through a Marketplace. • **The
> Marketplace estimated at the time of enrollment that your household income would be at least 100%
> of the federal poverty line** for your family size. • **APTC was paid** for the coverage of 1 or
> more months. • **You otherwise qualify as an applicable taxpayer** (except for the federal poverty
> line percentage)."*

🔑 **This is not a computation — it is a BOX somebody has to tick**, and the software carries it as a
worksheet behind Part I. In ATX it is *"Part I (8962) — HI below 100% of Federal Poverty Level"*,
**box A**, with those same five conditions as sub-items _(Lilian, 2026-08-19)_.

⛔ **THOSE ARE THE SOFTWARE'S BOXES, NOT THE FORM'S — and the form has a box A of its own that means
something completely different.** Form 8962's printed **box A** at the top reads *"You cannot take
the PTC if your filing status is married filing separately unless you qualify for an exception. See
instructions. If you qualify, check the box."* **Ticking that one asserts a
married-filing-separately exception**, which is a false statement on a signed return for a client
who is simply below the poverty line. ⚠️ **Nothing about the below-100% exception is printed on Form
8962 at all** — it is a qualification test that lives in the instructions and in the software's
worksheet. **Untick it and the
whole credit disappears; the calculation gives no warning, because a taxpayer under 100% simply is
not an applicable taxpayer.**

⚠️ **Two things void the exception**, both in the instructions: **no APTC was paid at all**, or the
taxpayer *"with intentional or reckless disregard for the facts, provided incorrect information to a
Marketplace."*

⛔ **It is also an E-FILE GATE.** The software's own message: *"Per the IRS, check box A and/or box B
must be marked for e-file. If taxpayer does not meet all requirements for the box, do not check the
box and paper file the return."* **So the choice is not tick-or-not — it is tick, or paper file.**

ⓘ **Box B is the other route:** an **alien lawfully present in the United States** who is not
eligible for Medicaid **because of immigration status**. Its conditions are different — there is no
Marketplace-estimate requirement and no APTC requirement. **Read both before ticking either**, and
note that this client base makes box B a live possibility, not a curiosity.

### 🔑 The order Form 8962 is actually filled in — it is NOT top to bottom

| Step | Line | What it says, and what it means |
|---|---|---|
| 1 | **9** | *"Are you allocating policy amounts with another taxpayer…?"* → **Yes → "Skip to Part IV"**. The allocation is settled **before** any monthly figure is written |
| 2 | **Part IV, line 30** | The allocation itself — see the column map below |
| 3 | **10** | 🔴 **ALWAYS "No" once Part IV has been completed** — this is not a judgement call. The 2025 instructions repeat it throughout Table 4 and the Part IV heading: *"If you complete Part IV, check 'No' on line 10, skip line 11, and continue to Lines 12 Through 23."* **An allocated return cannot use the annual line at all**, whatever the monthly figures did. ⓘ *(Line 11 is otherwise the annual shortcut, available only where the enrolment premium, the SLCSP and the advance were the same in all twelve months.)* |
| 3b | **34** | **Yes** once every required allocation is on lines 30–33 — the completeness question that closes Part IV. 🔑 **Its "Yes" text IS the instruction for lines 12–23** |
| 4 | **10** | 🔴 **ALWAYS "No" once Part IV has been completed** *(see the row above — this is not a judgement call)* |
| 5 | **12–23** | The **monthly** calculation, one row per month, on the **allocated** amounts |
| 6 | **24 – 29** | Totals, then either a **net PTC** (line 26 → Schedule 3 line 9) or an **excess repayment** (line 27 → line 29 → **Schedule 2 line 1a**) |

**Each monthly row runs the same way:** **(c)** is the monthly contribution amount from line 8b;
**(d) = (b) − (c)**; **(e) = the LESSER of (a) and (d)**.

#### 🔑 Line 34 — the completeness question that closes Part IV, and prints its own procedure

**Part IV ends at line 34: *"Have you completed all policy amount allocations?"*** Tick **Yes** once
every required allocation is on lines 30–33. **A "No" does not disable anything — it means there are
MORE than four allocations**, and the instructions then require a statement attached to the return
carrying the same information as lines 30–33, columns (a)–(g).

⚠️ **In ATX, leaving line 34 unticked leaves the percentages inert** _(Lilian, 2026-08-19)_ — **that
is the software enforcing the tick, not the form.**

**And read the "Yes" text, because it IS the instruction for lines 12–23**, printed on the face of
the form:

> *"**Yes.** Multiply the amounts on Form 1095-A by the allocation percentages entered by policy.
> Add all allocated policy amounts and non-allocated policy amounts from Forms 1095-A, if any, to
> compute a combined total for each month. **Enter the combined total for each month on lines 12–23,
> columns (a), (b), and (f).** Compute the amounts for lines 12–23, columns (c)–(e), and continue to
> line 24."*

🔑 **So lines 12–23 carry the ALLOCATED amounts — the 1095-A figures already multiplied by the
percentage — not the full ones.** ⚠️ **The software may ask differently.** A package with a shared-
policy worksheet takes the full 1095-A plus the percentages and does the multiplication itself.
**The check that works either way: line 12 column (a) should be about the allocation percentage of
1095-A line 21 column A.** If it equals the 1095-A, the percentage never got applied.

#### 🔴 Why the annual line 11 is barred here — and what it costs when it slips through

Averaging a year hides the months where the **benchmark plan** was cheaper than the client's own
premium. A small illustration, with **invented** figures:

| | Monthly premium | Monthly SLCSP | (e) = lesser |
|---|---|---|---|
| Jan–Aug *(8 months)* | 1,000 | **900** | **900** ⟵ the SLCSP caps it |
| Sep–Dec *(4 months)* | **1,000** | 1,200 | **1,000** ⟵ the premium caps it |
| **Monthly total (line 24)** | | | **11,200** |
| *Annual shortcut:* (a) 12,000 vs (d) 12,000 → lesser | 12,000 | 12,000 | **12,000** ⟵ **800 too much** |

⛔ **Every figure in that table is invented**, chosen to make the arithmetic obvious. ⓘ **It assumes
the monthly contribution amount (c) is zero**, as it is for a client at or below 150% of the poverty
line, so **(d) = (b)**. With a contribution the gap narrows — the *direction* always holds, the
number does not.

**Both figures are "the lesser of (a) and (d)". Only the monthly one is right**, because the test has
to be applied *month by month*. ⚠️ **The error runs in the client's favour**, which is exactly why it
survives a self-review.

⚠️ **And there is a worse failure mode than using line 11: filling it and leaving 12–23 empty.** Line
24 reads from the monthly rows, so it comes out **zero**, the entire advance becomes excess, and the
return repays the **line 28 limitation** instead of a few dollars. _(Seen live, 2026-08-19: a
repayment of the **full Table 5 limitation** where the right answer was a couple of dollars. The
software's error message named the rule.)_

#### 👨‍👩‍👧 The procedure for DIVORCED PARENTS who shared one 1095-A

The commonest shared-policy case in this practice. In order:

| # | Where | Do this |
|---|---|---|
| 1 | **Line 9** | **Yes.** The full question is *"Are you allocating policy amounts with another taxpayer **or do you want to use the alternative calculation for year of marriage**?"*, and its Yes branch is *"Skip to Part IV… **or Part V**, Alternative Calculation for Year of Marriage."* ⓘ The year-of-marriage half is **Part V** and does not apply here. 🔑 **It asks whether the POLICY is split**, not whether they are divorced |
| 2 | **Part IV, line 30** | (a) policy number from **1095-A line 2** · (b) **the OTHER taxpayer's SSN** — each return names the other · (c)/(d) the month range · (e)(f)(g) the percentage **as a decimal to two places** — `0.50`, not `50`; but **`100`** for a full allocation and **`-0-`** for a nil one |
| 3 | **Line 34** | **Yes** once every allocation is entered — and follow its printed text, which is the instruction for lines 12–23 |
| 4 | **Line 10** | **No** — forced by having completed Part IV |
| 5 | **Lines 12–23** | The 1095-A monthly amounts **× the percentage** |
| 6 | **Both returns** | The **same** percentages and the **same** figures. This is the real risk in a shared policy — not the money |

🔑 **Which situation applies turns on ONE fact: the date the marriage ended** — see the table below.
**Divorced during the year → Situation 1 → the split is by agreement, and 50/50 is its own
no-agreement default**, which makes 50/50 the easiest position to defend and the one to reach for
unless there is a reason not to.

⚠️ **A person on the policy who is in NEITHER return's tax family** — an adult child who files
separately — **may take 0%.** The remaining taxpayers then account for 100% between them, which is
what the IRS reconciles against, and **one allocation on line 30 carries it.**
🔴 **That is NOT the general rule** — it holds only *because* the third person's share is nil. Where
two other tax families each take a real share, **the allocation is pairwise and Part IV needs one
line per allocation** (see *Allocation is PAIRWISE* below). ⓘ And note the instructions tell a
0% taxpayer to **complete Part IV entering `-0-`**, not to leave it blank.

🔑 **Which of (a) or (d) binds can change during the year, and it tells you something.** While the
SLCSP is the smaller, the *benchmark plan* caps the credit. When the SLCSP rises above the actual
premium, the **premium** caps it — **the credit never exceeds what the insurance actually cost.**

⚠️ **Line 28, the repayment limitation, is keyed to FILING STATUS — not to family size, and not to
income except through the poverty-line band.** The **Form 8962 instructions, Table 5** put it more
plainly than the revenue procedure does:

| Form 8962 line 5 | **Filing status of Single** | **Any other filing status** |
|---|---|---|
| Less than 200 | **$375** | **$750** |
| At least 200, less than 300 | $975 | $1,950 |
| At least 300, less than 400 | $1,625 | $3,250 |
| 400 or more | *leave line 28 blank — there is no limitation, repay all of line 27* | |

_Verified against the 2025 Instructions for Form 8962, Table 5, and Rev. Proc. 2024-40 §.07,
2026-08-19._

🔴 **"Single" is one status, and every other status — head of household, joint, separate, surviving
spouse — takes the larger column.** The revenue procedure states the same rule the other way round
(*"unmarried individuals other than surviving spouses and heads of household"*), which is how it gets
misread. **A head of household takes the $750 column.**

🔴 **And it MOVES when a client's filing status moves.** _(Live case, 2026-08-19: a change in where
the children lived took a taxpayer from head of household to Single, and his limitation halved from
750 to 375 — on the same income, the same policy and the same allocation.)_ ⚠️ **It is exactly the
kind of number that gets copied forward from last year's return.** It does not bind unless the excess
is large — **which is the reason it goes unnoticed until the year it matters.**

### 🔴 A shared policy — when one 1095-A covers more than one tax family

Common after a separation: one policy, one recipient, and the people on it now file two or three
returns. **Form 8962 Part IV allocates it.** Which rule applies depends on a fact you must
establish first — **the date the marriage ended**:

| Situation | When it applies | Allocation | Which columns |
|---|---|---|---|
| **1** | Divorced or legally separated **during the year** | **By agreement — any percentage.** If they cannot agree, **50% each** | (e), (f) **and** (g) — ⚠️ **only for the months they were MARRIED** |
| **2** | **Married at year end**, filing separately | **50% each — not negotiable** | (e) and (g) only. 🔴 **Column (f) stays BLANK** — the SLCSP is *not* allocated; each taxpayer enters **the SLCSP for their own coverage family** on lines 12–23. ⚠️ **A taxpayer who cannot take the PTC at all still has to allocate and REPAY the advance** — read the Situation 2 instructions for which columns they complete |
| **3** | **No advance payments** were made | Enrolment premiums in proportion to each taxpayer's coverage family's SLCSP | **Column (e) only** |
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

#### What the allocation percentage IS, and the Part IV column map

**The Marketplace issues ONE Form 1095-A per policy, and the IRS receives one.** When the people on
it file more than one return, each return must state **what share of that policy it is claiming**, so
the shares cover it without gap or overlap. The percentage is applied to the **monthly** amounts —
that is the form's own caption: *"Allocation percentage applied to monthly amounts."*

| Part IV, line 30 | What goes in it |
|---|---|
| **(a)** Policy Number | From **Form 1095-A, line 2** |
| **(b)** SSN of other taxpayer | The other taxpayer's — each return names the other |
| **(c)** Allocation start month · **(d)** stop month | The months the allocation covers. Under **Situation 1** that is the months they were **married** |
| **(e)** **Premium Percentage** | The share of column **A** — the premium actually paid |
| **(f)** **SLCSP Percentage** | The share of column **B** — the benchmark plan |
| **(g)** **Advance Payment Percentage** | The share of column **C** — what the government already paid |

ⓘ **Part IV holds FOUR allocations on the face of the form** (lines 30–33). **Line 34** asks *"Have
you completed all policy amount allocations?"* — a **No** is what sends you to the instructions for
more than four.

🔑 **Three percentages, not one, because they do not always agree.** Under **Situation 2** column
**(f) is left BLANK** — the SLCSP is not allocated at all, and each taxpayer enters the SLCSP for
their **own** coverage family. Under Situations 1 and 4 all three usually carry the same agreed
number. 

💡 **50/50 between two ex-spouses is the strongest split available under Situation 1**, because it is
also the **no-agreement default** — it needs no justification beyond the instruction itself. Compare
a "proportional" split derived from who was enrolled: defensible, but it **depends on which parent
claims which child**, so a later Form 8332 changes it. **An agreed 50/50 does not**, which decouples
two decisions that otherwise have to be made in the right order.

⚠️ **A person on the policy who claims 0%** — an adult on someone else's policy who files their own
return — is common, and it is covered above under the divorced-parents procedure. **Note it, do not
chase it: they have forgone whatever credit their share carried, and that is their return.**

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

🔴 **An excess advance repayment is NOT the end of the story — it can be wiped out by a
nonrefundable credit.** Schedule 2 line 1a → line 3 → **Form 1040 line 17 → line 18**, which the
**child tax credit on line 19** then reduces. **See M5** before writing "owed" on a return that has
children and nil taxable income.

🔑 **The net premium tax credit IS a refundable credit** — it reaches line 31 and the "total other
payments and refundable credits" line. A client with no earned income can still receive it.

⚠️ **The repayment of an excess advance is capped by Table 5** where household income is under 400%
of the poverty line. **Read the current Table 5** — the amounts are indexed.

### 🔑 When the contribution amount is ZERO, the allocation is nearly neutral

For 2025 the **applicable figure is 0.0000 up to 150% of the poverty line**, so the required
contribution is **zero** and the monthly credit is simply the lesser of the allocated premium and the
allocated SLCSP. **Whatever percentages the parties choose, each one's credit almost exactly equals
their own advance**, and the excess to repay across the whole policy comes to a few dollars.

- 🔑 **So the allocation becomes a CONSISTENCY question, not a money question** — pick the split that
  is easiest to defend (usually **who was enrolled, counted by tax family**), get everyone to carry
  the same figures, and stop optimising.
- ⚠️ **The neutrality collapses if any one of them is not an applicable taxpayer** — a
  married-filing-separately return, or the below-100% exception failing. That person **repays their
  allocated advance** instead, subject to Table 5. **Establish everyone's filing status before
  calling it neutral.**
- ⚠️ **Verify the applicable figure for the year you are filing.** The enhanced schedule that puts it
  at 0.0000 is a legislated one and does **not** run forever.

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
- 🔴 **THE NONREFUNDABLE CREDIT REACHES FURTHER THAN "THE TAX" — read page 2 in order.** The 2025
  Form 1040 runs **17 = Schedule 2 line 3** (which carries the **excess advance premium tax credit
  repayment** from Schedule 2 line 1a) → **18 = 16 + 17** → **19 = the child tax credit** → **22 = 18
  − 21** → **23 = other taxes, including self-employment tax** → **24 = 22 + 23**. So the
  nonrefundable child tax credit **absorbs an excess advance premium tax credit repayment**, and only
  **line 23 escapes it**. ⚠️ **"There is no tax to offset, so the credit is worth zero" is FALSE
  whenever there is an excess advance** — and it is the mistake a nil-taxable-income return invites.
  🔑 **Check it against the client's own prior year**: a return with nil income tax and an excess
  advance will show that same amount sitting on line 19.
  🔴 **AND THE CONVERSE, which is the half that bites: a client with NO dependants has nothing to
  absorb it with.** The excess advance is an **addition to tax on line 18**; it survives all the way
  to line 24 unless a **nonrefundable** credit reaches it. ⚠️ **So the same excess is harmless on a
  return with children and a real balance due on a return without them** — a nil-income taxpayer
  with no dependants **owes it**. _(Live case, 2026-08-19: a change in where the children lived took
  a taxpayer from two dependants to none, and a return that owed nothing came to owe money without a
  single income figure changing.)_ _(Caught in review, 2026-08-19, on two
  returns at once — and the prior-year table in the same working paper had been demonstrating the
  mechanism all along.)_
- 🔑 **TWO CEILINGS, and knowing which one binds is the whole game.** With a modest earned income the
  **15% ceiling** binds from the second child onwards, so **child #2 adds only the difference and
  child #3 adds nothing at all**. Work out which ceiling binds **before** telling a separated couple
  how many Forms 8332 to sign. _(Live case, 2026-08-18: an earned income in the high teens put the 15%
  ceiling just above one child's 1,700 cap — so one child gave the full 1,700, a second added only
  the difference, and a third added nothing at all.)_
- 🔴 **THREE OR MORE CHILDREN SENDS YOU INTO PART II-B — and the form says so in one easy-to-miss
  line.** After line 20, Schedule 8812 prints: *"Next. On line 16b, is the amount **$5,100 or more**?
  … **Yes.** If line 20 is equal to or more than line 17, skip Part II-B and enter the amount from
  line 17 on line 27. **Otherwise, go to line 21.**"* 🔑 **$5,100 is 3 × $1,700, so the branch is "do
  you have three or more qualifying children?" written as a dollar amount** — and the 2026 threshold
  moves with the per-child figure. **Part II-B exists to give a large family the benefit of its
  PAYROLL taxes where the 15% formula gives less**, and it runs:

  | Line | What goes in it |
  |---|---|
  | 21 | Social security and Medicare **withheld** — Form(s) W-2 boxes 4 and 6 |
  | 22 | **Schedule 1 line 15** (half the SE tax) + Schedule 2 lines 5, 6 and 13 — 🔑 *the self-employed taxpayer's substitute for line 21* |
  | 23 | 21 + 22 |
  | 24 | 🔴 **1040 line 27a (the EIC) + Schedule 3 line 11** — the credits already received |
  | 25 | 23 − 24, not below zero |
  | 26 | the **larger** of line 20 or line 25 |
  | 27 | the **smaller** of line 17 or line 26 → 1040 line 28 |

  🔴 **Line 24 subtracts the client's own earned income credit**, so **Part II-B almost never helps a
  client who is receiving a large EIC** — which is most three-child clients at this income level.
  ⚠️ **Complete it anyway.** The answer usually comes back as the same line 20 figure, but a part the
  form routes you into and you skipped is a defect on a filed return. _(Live case, 2026-08-19: three
  children, no W-2, an EIC several times the half-SE-tax figure — Part II-B produced zero on line 25
  and the ordinary 15% figure won. It still had to be filled in.)_
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

### The 2025 parameters — all of them, so nobody extrapolates

| Item (2025) | 0 children | 1 child | 2 children | 3+ children |
|---|---|---|---|---|
| **Earned income amount** — where the maximum is reached | 8,490 | **12,730** | **17,880** | 17,880 |
| **Maximum credit** | 649 | **4,328** | **7,152** | **8,046** |
| Threshold phaseout — single / HOH | 10,620 | **23,350** | 23,350 | 23,350 |
| Completed phaseout — single / HOH | 19,104 | **50,434** | **57,310** | **61,555** |
| Threshold phaseout — MFJ | 17,730 | 30,470 | 30,470 | 30,470 |
| Completed phaseout — MFJ | 26,214 | 57,554 | 64,430 | 68,675 |
| **Investment income limit** | **11,950** | | | |

_Verified against **Rev. Proc. 2024-40 §.06** on irs.gov, 2026-08-18 — the authority, not the summary
pages. **Read the current year's revenue procedure; every figure here is indexed.**_

- The credit is the **lesser** of the amount from the table on **earned income** or on **AGI**.
- 🔴 **READ THE AMOUNT OFF THE PRINTED EIC TABLE — do not compute it from the phase-in rate.** The
  table (1040 instructions, and **Pub 596**) figures each **$50 bracket at its MIDPOINT**, so the
  credit for earned income of 16,885 is the figure for the **16,850–16,900** row — computed on
  16,875, not on 16,885. ⓘ **The rate formula gets you within a few dollars and is the right way to
  understand the shape**, but the number that goes on line 27a is the table's. _(2025 example,
  verified 2026-08-19: the 16,850–16,900 row reads **170 / 4,328 / 6,750 / 7,594** for 0 / 1 / 2 / 3+
  children.)_
- 🔑 **The shape of the credit is a triangle with a flat top**: it rises at a fixed rate to the
  *earned income amount*, sits at the maximum until the *threshold phaseout*, then falls. **Know
  which of the three zones the client is in before quoting what a deduction is worth** — see the
  warning below.
- The child must have lived with the taxpayer **more than half the year** and have a valid SSN.
- 🚫 **The EIC cannot be released to the other parent** (§3).
- 🔴 **"Considered unmarried" for head of household is NOT the same test as for the EIC.** Pub 501:
  *"You may be considered unmarried for the purpose of using head of household status but not for
  other purposes, such as claiming the EIC. Different tests apply."* A separated taxpayer still
  married at year end needs **§32(d)(2)** separated-spouse relief for the EIC — **check it
  separately from the HOH decision.**
- 🔴 **A DEDUCTION CAN COST A CLIENT MONEY — WORK OUT THE SIGN BEFORE YOU CHASE ONE.** On the rising
  side of the triangle an extra dollar of Schedule C deduction reduces earned income, and therefore
  the EIC *and* the ACTC.

  🔑 **Start from the fact that a dollar of deduction is NOT a dollar of earned income.** It cuts
  Schedule C line 31 by 1.00, which cuts the deductible half of the SE tax by
  0.5 × 92.35% × 15.3% = **0.0706** — and earned income is line 31 **minus** that half, so it falls
  by **0.9294**. Everything below follows from that one number.

  | Per $1 of extra Schedule C deduction | 1 child | 2 children | **3+ children** |
  |---|---|---|---|
  | §32 phase-in rate | 34% | 40% | **45%** |
  | EIC lost — ƒ rate × 0.9294 | −31.6¢ | −37.2¢ | **−41.8¢** |
  | ACTC lost *(only where the **15% ceiling** binds, not the per-child cap)* | −13.9¢ | −13.9¢ | **−13.9¢** |
  | SE tax saved — ƒ 92.35% × 15.3% | +14.1¢ | +14.1¢ | **+14.1¢** |
  | **Net, in the phase-in zone** | **≈ −31¢** | **≈ −37¢** | **≈ −42¢** |

  ✅ **In the FLAT zone the EIC does not move**, so the same dollar is roughly **neutral** (or a small
  gain where the ACTC's per-child cap binds rather than the 15% ceiling). 🔴 **In the phase-OUT zone a
  deduction gains** at the phaseout rate. **Three zones, three signs.**

  ⚠️ **This inverts the instinct that a bigger deduction is always better**, and it decides how hard
  to chase an unsubstantiated expense — **and the sign can flip on facts that have nothing to do with
  the expense.** _(Live case, 2026-08-19: the same client, the same income and the same expenses,
  went from **one** qualifying child to **three** when the residence facts were corrected. With one
  child she was on the flat top and deductions were worth ~+14¢; with three she was 995 below the
  three-child earned-income amount and the identical deductions were worth ~−42¢. **Nothing about
  the expenses changed.**)_

  ✅ **What this does NOT license.** A deduction the client is entitled to still goes on the return —
  correctness is not negotiable, and an unhelpful deduction is not an optional one. **What changes is
  the SALES PITCH:** stop telling the client that the missing mileage log and the blank utility lines
  are money on the table, and **redirect the chase to the receipts side**, where the same rate works
  in their favour.

- 🔑 **THE TAX FAMILY SIZE ON FORM 8962 MOVES WHEN THE DEPENDANTS MOVE — and it moves line 4 with it.**
  Line 1 is the tax family (taxpayer, spouse, dependants claimed) and line 4 is the poverty line
  **for that size**, so gaining dependants **raises** line 4 and therefore **lowers** line 5, the
  percentage. ⚠️ **A client can move FURTHER below 100% of the poverty line by claiming more
  children** — the poverty line rises faster than their income. **Usually no dollar effect** (the
  applicable figure is 0.0000 everywhere at or below 150%, and the repayment limitation is flat below
  200%), **but it puts more weight on whichever below-100% exception the return is relying on.**
  **Re-derive lines 1, 4 and 5 whenever the dependants change; do not carry them over.**
- 🔑 **THE FORM ITSELF TELLS YOU WHY the dependants grid is where the EIC lives.** The 2025 Form 1040
  page 1 **Dependents** grid carries, per child: **(3) SSN · (4) Relationship · (5) "Check if lived
  with you more than half of 2025" — (a) Yes and (b) "And in the U.S." · (6) full-time student /
  permanently and totally disabled · (7) Credits: Child tax credit *or* Credit for other
  dependents.** ⚠️ **Columns (3) and (5) ARE the EIC's residence and SSN tests**, and column (7) is
  the choice between the $2,200 credit and the $500 one. **Get the grid right and Schedule EIC and
  Schedule 8812 both follow; get it wrong and you will hunt for the error on the wrong form.**
  ⓘ Four dependants fit on the grid; **more than four has its own checkbox and instructions**.
- 🛠️ **In ATX: ENTER THE CHILDREN ON THE 1040's DEPENDENTS TAB, NOT ON SCHEDULE EIC** _(Lilian, 2026-08-19,
  from ATX)_. Schedule EIC's own screen **will not take the Social Security number** and **will not
  let you tick that the child lived in the United States** — the fields are not editable there. Fill
  the dependants in on the **Form 1040 → Dependents** tab and they **flow automatically into Schedule
  EIC's *Qualifying Child* tab.** ⚠️ **The symptom of getting this wrong is a validation error on
  Schedule EIC**, not a blank form, so it is easy to lose time hunting on the wrong screen.
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
- [ ] **Form 8962 line 10** — **"No" whenever Part IV was completed**, or any monthly figure changed; lines **12–23** were used, not the annual line 11
- [ ] **Form 8829 line 8 traces to Schedule C line 29** (plus/minus the two adjustments in that line's own text), and Schedule C line 30 = **Form 8829 line 36**
- [ ] One **Form 8829 per home** used for business during the year
- [ ] **No cost appears BOTH in the home-office worksheet and on line 25** — the internet and the telephone are the usual double-count.
- [ ] The **rent used is what THIS taxpayer paid**, reconciled against the lease — not the lease amount, where it is a share.
- [ ] Where a policy is shared: the shares **cover the policy with no overlap and no gap** for the
      same months — in the ordinary case they add to **100%** — and every return sharing it carries
      the **same** figures. ⚠️ **Not column (f) under Situation 2**, which is not allocated at all.
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
