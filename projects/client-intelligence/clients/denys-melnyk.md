# Denys Melnyk

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-11

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> EINs, dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.

## 1. Snapshot

- **Business name:** Denys Melnyk (individual — no registered business entity is engaged with us directly; his companies are separate S corporations we do not act for)
- **Entity type:** ⚠️ Individual. **Whether his 2025 activity belongs on a Schedule C at all is an open question** — the 2024 return says it does not. See §4 and §5.
- **Home state:** ⚠️ **He moves, and the states matter.** His **2024** return was filed as a **Montana resident** **plus an Illinois nonresident/part-year return** — most of his 2024 income was Illinois-sourced through his companies. He was in **Florida** by the time he became our client. Since the 2024 return was signed from a Montana address in **May 2025**, a **Montana part-year** return for 2025 is likely, and **Illinois** probably recurs while the companies operate there. **Establish the 2025 states month by month before concluding there is no state return** — getting this wrong is a filing failure, not a missed deduction.
- **Industry / what they do:** **Trucking / freight** — confirmed by the 2024 return, not inferred. He is a **shareholder in three S corporations**: **Midwest Expedited Corp**, **Midwest Truck Leasing LLC** and **AVDM Holdings Inc** (EINs are in Double and on the 2024 return, not here). The "Midwest" named in his Double note is **his own company**, not an outside payer.
- **Household / filing status:** **Married filing jointly in 2024.** ⚠️ **The 2025 status is NOT established** — it is fixed by the position on 31 December 2025 and must be asked, never carried forward (see §5). ⚠️ **Three sources also disagree about the children** — his **2024 return claimed one dependent daughter**, with Earned Income Credit *and* Additional Child Tax Credit (so she lived with them more than half of 2024); **what he sent us directly in Aug 2026** says *"married and have two children"* and that he pays **child support**; the **2025 organizer position is not usable and is being re-asked directly** (his answers are in Double, not here). Unresolved and worth real money — see §5. Names, dates of birth and SSNs are in **Double**, not here.
- **Primary language:** **Russian** — confirmed by Lilian, 2026-08-11. Write to him in Russian even though he completed the organizer in English.
- **Our engagement (services we provide):** Individual income tax — **Form 1040**, tax year **2025**. **First year with JK**; the 2024 return was prepared by another firm (a Chicago practice). ⚠️ **Whether this is really a Schedule C engagement is an open question** — see §4 and §5.
- **Fiscal year-end:** December 31
- **Accounting platform:** None — Double shows `platform: "none"` (no QuickBooks). His figures come from his own summary, not from books we keep. **We do not have the S corporations' books or their 1120-S returns either**, which is the gap that matters most.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer / primary contact | Double client (link below) |
| Spouse (also on the return) | Double client (link below) |

- **Double client:** https://app.doublehq.com/close?cid=764785
- **Double case note:** none — and deliberately so. See §5 ("What goes in the Double note").

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double (client portal) | Organizer, document delivery | n/a — firm platform | Client `cid=764785`; 2025 organizer `responsesVisibility: admins_only` |
| Health insurance marketplace | Possible Healthcare.gov coverage → Form 1095-A | _(pending)_ | **Unconfirmed** — see §5 |

- No QuickBooks, no bank feed, no payroll system. Everything we have came from the client directly.

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No (individual taxpayer).

### Payroll
- **Applies?** No — he has no payroll with us.
- ⚠️ **But he pays other drivers.** The Double note records fuel paid to drivers. If payments to any one person cross the 1099-NEC threshold, **he has an information-return obligation of his own**. Unconfirmed — ask.

### Bookkeeping & monthly close
- **Applies?** No. Double shows `Bookkeeping: N/A`. There is no monthly close; the Schedule C is built from what the client reports.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form **1040**; 2025 tax project `notStarted`, due **2026-04-15**. Double's `Tax Return Type` reads **`1040-SCH C`** — ⚠️ **and the 2024 return does not support that.** The only Schedule C on the 2024 return was his **wife's** (a tiny "business supportive services" activity); his own income came through **S-corporation K-1s**, a W-2 and a retirement distribution. Settle the return type before preparing anything — see §5.
- **State returns:** federal is not the whole job for this client. 2024 was federal + **Montana** (resident) + **Illinois** (Schedule NR). Expect state returns for 2025 and establish which ones early.
- **Our role:** We prepare the return.
- **Organizer status:** `JK 2025 1040 Organizer`, marked **completed 2026-08-04** at **100%**, and Double's `Organizer Status` property reads **Completed**. **It is not usable as filed** — see §5. Treat the "Completed" label as the client's sign-off, not as a statement that we have what we need.
- **Process notes (→ future SOP):** the working method for this client is in §5 — take his own summary as raw input, reclassify it, and re-ask only what is genuinely missing.

### Licenses & other filings
- **Applies?** _(pending — likely N/A for an individual)_

## 5. Key facts & quirks

> **Where this client's answers live.** His completed 2025 organizer is in Double
> (`organizerId 146070`, visibility `admins_only`) and **his answers are not repeated in this
> file** — organizer responses are never committed to the repo ([`double-mcp`](../../../.claude/skills/double-mcp/)
> §2.2, exposure point 2), and that bar covers what he answered, not only identifiers. What is
> recorded below is what the firm must **do** about it. Open the organizer in Double for the
> answers themselves.

**He sends his information by text message, not through the organizer.** He marked the 2025
organizer complete on 2026-08-04, then sent his actual income and expense summary **as a text
message on 2026-08-05**, which is where the usable material came from. Assume for this client that
**the organizer is not where his information lives** — check the Double note first, and expect the
substance to arrive as messages rather than uploads.

> **Reading the Double note's header:** it says `INFORMATION SENT BY CLIENT ... VIA VOICE`, which
> means **Google Voice** — the firm's texting channel with clients — **not** a voice recording.
> Confirmed by Lilian, 2026-08-11, after a session misread it. Worth writing as
> `VIA GOOGLE VOICE` in future notes; a teammate will make the same mistake.

**His organizer reports 100% complete, and we still have no answers to the questions that matter.**
An upstream answer in the income section meant the organizer never went on to request the 1099, the
Profit & Loss template, the home-office question or the vehicle block — **which is correct
behaviour**: there is no sense asking a client with no income to complete a P&L. So this is not an
organizer problem and not a client failing. It simply means **those questions are unanswered**, and
we have good reason to think they should have been — his 2024 return shows several income sources,
and what he sent us directly describes income and expenses for 2025. **So we put them to him
again** (§6).

**He classifies his own expenses, and some are not deductible as he lists them.** He
supplied a total received from the payer plus a list of amounts to subtract from it.
Handle it as raw input and reclassify:

- **Child support — not deductible.** It is in his list; it is simply dropped. Not an issue, just a correction.
- **Personal car insurance and the full car payment — not deductible as listed.** Only the business-use portion, and loan **principal** never; interest and depreciation, or the standard mileage rate instead.
- **Health insurance — not a Schedule C expense.** It belongs on Schedule 1 if it qualifies, limited to net self-employment profit, and it interacts with any premium tax credit.
- **Occupational insurance, work travel, fuel paid to drivers, phone** — plausible Schedule C, subject to the usual limits (meals at 50%; phone at its business share; fuel already inside the standard mileage rate if that method is used).

**Rent is monthly.** Lilian's determination, 2026-08-11 — read as an annual figure it is
implausibly small.

**Home office:** he completed the firm's Home Office Deduction template. The file sits in Double
under `JK Accounting Group > Others > 2025` — **not attached to the organizer**, which never
reached that question. **So do not chase him for it; it is already here.** He changed states
mid-2025, so any allocation probably has to cover two homes — and it only matters at all once the
Schedule C question above is settled.

**Rent or mortgage — establish which, and for which home.** His Double note says he pays **rent**, and no
Form 1098 is on file. Both can be true
(two properties, or the mid-year move), so this is a question, not a discrepancy to resolve on
paper. It also gates the home-office allocation.

**Health coverage — the one item that can block filing.** If his 2025 coverage came from
Healthcare.gov / the Marketplace, **Form 1095-A is required to file at all**: the premium tax
credit has to be reconciled on Form 8962 and the return is rejected without it. Nothing on file
establishes the coverage either way, so **confirm it early**. Everything else on this return can
proceed while we wait; this cannot.

**Estimated tax payments — ask in both directions.** Nothing indicates he made any. With income
outside withholding, expect self-employment or shareholder-level tax and a possible
**underpayment penalty**; raise it with him now rather than letting it appear at filing. If he did
pay and we never ask, he simply loses the credit.

**The prior-year return was prepared elsewhere, so the carryover check is not optional —
and reading it changed the entire engagement.** (Reviewed 2026-08-11 from the redacted copy
Lilian supplied; the client's own copy is in Double's file library. Figures stay out of the
repo — they are on the return and in Double.)

- **He is an S-corporation shareholder, not a contractor.** The 2024 Schedule E carries
  **three** S-corp K-1s: **Midwest Expedited Corp** (a very large loss), **Midwest Truck
  Leasing LLC** and **AVDM Holdings Inc**. The "Midwest" that "sent him" money in the summary
  he sent us is **his own company**.
- **⚠️ So the money he described may not be Schedule C income at all.** Money out of your own
  S corp is normally **W-2 wages and shareholder distributions** — a distribution is not income
  to the extent of basis, and reduces it; anything beyond basis **is** taxable gain, which is one
  more reason the basis question below has to be answered. And the expenses he listed
  (occupational insurance, road trips, fuel paid to drivers, phone) look like **corporate**
  expenses that the S corps very likely already deducted on their own 1120-S returns.
  **Deducting them again on his 1040 would double-count them.**
  Nothing should be prepared until this is settled — it is the difference between the right
  return and a wrong one.
- **A large net operating loss carried forward from 2024** (Form 172). Post-2017 NOLs carry
  forward indefinitely and offset up to **80% of taxable income**. It is big enough to absorb
  most or all of his 2025 income. **Preparing 2025 without it would cost him badly** — this
  single item is why reading a prior return prepared elsewhere is mandatory.
- **A small suspended passive loss** also carries forward (Form 8582, prior-years' unallowed).
- **⚠️ Verify basis before relying on the NOL.** The big S-corp loss was deducted as
  **nonpassive**, i.e. in full, which requires sufficient stock and debt basis, and the "basis
  computation required" box does not appear ticked. Not our return and not an accusation — but
  if basis was short, part of that loss should have been suspended instead of deducted, and the
  carryforward figure would change. Check before building on it.
- **Sale of business property in 2024** (Form 4797, an ordinary recapture gain) — assets were
  disposed of. Ask whether anything continued into 2025 or was sold on installments.
- **An early retirement distribution in 2024**, with the 10% penalty on part of it (Form 5329,
  partial exception claimed). **Nobody has asked whether he took another one in 2025** — the
  organizer's retirement questions were never reached. If he drew again there is another 1099-R
  and another penalty.
- **He had W-2 wages in 2024, with withholding.** An S-corp shareholder-employee generally must
  take reasonable wages, so **expect a 2025 W-2 too**, and ask for it — nothing in what he has
  sent us accounts for one.
- **Health insurance for a >2% S-corp shareholder has its own route.** It is not a Schedule C
  expense and not a plain Schedule 1 deduction: to be deductible above the line the premiums
  generally have to be paid or reimbursed by the corporation **and included in his W-2 wages**.
  Settle this with the W-2 question, not separately.

**The dependent question is worth real money, and the three sources disagree.** His 2024 return
claimed **one dependent daughter** with both the **Earned Income Credit** and the **Additional
Child Tax Credit** — and **EIC cannot be claimed by a non-custodial parent at all**, so as of 2024
she lived with them more than half the year. (The child tax credit alone would not prove that: it
can be released to a non-custodial parent on Form 8332. The residency conclusion rests on the EIC.)
What he sent us in Aug 2026 says **two children** and **child support**. The 2025 organizer position is not usable and is
being re-asked directly — his answers are in Double, not here.

⚠️ **The question underneath all of this is his filing status, and nobody has asked it.** A
dependant that drops off, a first mention of child support and a move between states are three
small puzzles separately — together they may mean **the marriage ended**. Filing status is fixed by
the position on **31 December 2025**, and it changes the standard deduction, the brackets and most
credits — it bars Married Filing Separately from several outright — and probably the state return.
It is worth more than the dependant line that raised it.
**Ask the situation, not a yes/no**, because a married-or-divorced binary misses the three cases
that would actually decide this return: **widowed**, **legally separated under a decree** (unmarried
at year end), and **married but living apart**, where §7703(b) can treat him as unmarried and, with
a qualifying child in the home, open **Head of Household** — which is exactly where child support
plus two moves points. So: **married / separated (since when, and did his spouse live in the home at
any point in the last six months) / divorced (decree date) / widowed (date)**. Never infer it, and
do not carry 2024's status forward because nothing said otherwise.

**One reading fits all three sources: two children — one living with them (the one claimed in 2024)
and one who does not (the child support).** That would make the 2025 dependant position simply an
oversight. It is worth stating because **he is married to the same spouse he was in 2024**, so any
change in that daughter's status needs an explanation the marriage does not supply. But other
readings fit too — custody may have switched, the resident child may be the other one, or the
question was simply misread. **Ask; do not assume.** Nothing in it is alarming on its own —
circumstances change and he is not an accountant — but it has to be settled **per child**: who
they live with now, and for how many months of 2025. If nothing actually changed, what is on file today would cost him the **Child Tax Credit**. (EIC is a separate question:
it was available in 2024 on a deeply negative AGI, and looks unlikely for 2025 if his income is
materially higher — confirm once the Midwest question is settled rather than assuming either way.)

**Establish what he and his wife each actually do**, in words that can go on a return — the
occupation fields we hold for both are not usable as they stand. Correct them in Double.

**Confirm how he wants a refund paid** — bank details for direct deposit, or a paper check. We do
not have banking details for him. Worth one question rather than an assumption.

**What goes in the Double note — and what does not.** Lilian's instruction, 2026-08-11:
this client's Double note carries **what the client gives us and what the team needs in
order to work** — his figures, his statements, where his documents are. It does **not**
carry our review analysis or our findings. Those stay in this file. Adding them would
turn a working note into something else, and she decides case by case whether any
particular finding earns a place there.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- _(2026-07-21)_ — Client created in Double; `JK 2025 1040 Organizer` created and published the same day.
- _(2026-08-04)_ — Client marked the organizer **complete (100%)** and uploaded a copy of his **2024 return** (prepared by another firm).
- _(2026-08-05)_ — Client sent his income and expense summary as a **text message (Google Voice)**, not through the portal.
- _(2026-08-06, Lilian)_ — Captured that summary in the Double note **"2025 Tax Preparation - P&L and other info"**. The client's completed **Home Office Deduction template** was filed in Double under `Others > 2025`.
- _(2026-08-11, Lilian)_ — **First full organizer review** — the pilot case for the organizer-review tooling. Established: the organizer is 100% "complete" and unusable as filed; an upstream answer in the income section meant the requests below it were never made; two documents genuinely outstanding (1095-A, 1098) versus two already supplied **outside** the organizer and therefore not to be chased (the home-office template, and the P&L figures from his text message). Client file created the same day. Findings deliberately kept out of the Double note (§5).
- _(2026-08-11, Lilian)_ — **Read the 2024 return** (redacted copy supplied by Lilian; prepared by another firm). It reframed the engagement: he is an **S-corporation shareholder in three trucking entities**, not a contractor; there is a **large NOL carried forward** into 2025; **Montana and Illinois** returns were filed for 2024, and neither state has come up for 2025; and his 2024 return **claimed a dependent daughter with EIC and the child tax credit**, which needs re-establishing for 2025. The organizer, at 100% complete, disclosed **none** of it — every material fact came from the prior return and the Double note. §1, §4, §5 and §6 rewritten accordingly.

### Tax year 2025 — the review

_So this year can be answered later without anyone's memory. Records the questions and, as they
come back, the answers he gives **us** — never what he ticked in the organizer (§5)._

- **What gates the return:** (1) what the money from Midwest Expedited actually was — wages, a
  distribution, or a K-1 share; (2) whether the three S corporations have filed their own 1120-S
  returns, since no K-1 exists until they do; (3) health coverage, because Marketplace coverage
  makes Form 1095-A a condition of filing at all.
- **Established from the 2024 return** (prepared elsewhere): shareholder in three S corporations;
  a large NOL carried forward; a suspended passive loss; an S-corp loss deducted in full, so basis
  needs checking; a sale of business property; an early retirement distribution with the penalty;
  W-2 wages; **Montana resident + Illinois nonresident** returns; **one dependent daughter** with
  EIC and the additional child tax credit; the only Schedule C was his wife's.
- **Open with the client** — see the re-ask list below. **Answers get ticked and appended here
  with their date** as they arrive.
- **Decided so far:** rent is treated as monthly _(Lilian, 2026-08-11)_. The review findings stay
  out of his Double note _(Lilian, 2026-08-11)_. Contact him in **Russian**.
- **Unresolved and load-bearing:** his **filing status on 31 December 2025**. Everything about the
  household — dependants, credits, probably the state return — hangs on it, and it has not been
  asked.

### Outstanding items (CI-only — never in the SOP)

_Checkboxes on purpose: they are what the Knowledge Hub's client card skips, and they let an
answer be ticked and dated in place when it arrives._

The re-ask list for the client, in priority order:

- [ ] **What the money from Midwest Expedited actually was** — wages, a shareholder distribution, or
  a K-1 share. Whether there is a Schedule C at all depends on the answer.
- [ ] **Whether each S corporation has filed its own 2025 return (Form 1120-S), and who prepares it.**
  **This gates everything else** — in practice the shareholder has no K-1 until the entity's return
  is prepared and filed. For a calendar-year S corp the 2025 Form 1120-S was due **16 March 2026**
  (the 15th fell on a Sunday), extendable to **15 September 2026**; the late-filing penalty runs
  **per shareholder, per month, capped at 12 months**. A company that has not filed is its own
  problem to raise with him now.
- [ ] **The three S corporations' 2025 K-1s** — Midwest Expedited Corp, Midwest Truck Leasing LLC,
  AVDM Holdings Inc. If any of them stopped, we need **which one, and the date it closed or he
  left**. A company that closed *during* 2025 still issues a 2025 K-1; only an exit or closure in
  a **prior** year removes it.
- [ ] **Whether the S corps' own 1120-S returns are filed**, and by whom — his 1040 cannot be
  finished before those K-1s exist.
- [ ] **Form 1095-A** — blocks filing if the coverage is Marketplace.
- [ ] **His 2025 W-2** — expected from his own S corp; nothing he has sent accounts for one.
- [ ] **The whole income block**, re-asked directly: which income types he actually had in 2025. The
  organizer never got as far as asking.
- [ ] **Which states he lived and worked in during 2025**, month by month — Montana and Illinois are
  both live possibilities his organizer never mentions.
- [ ] **Any 2025 retirement distribution** — he took one in 2024 and the question was never asked for 2025.
- [ ] **Rent or mortgage?** — and the Form 1098 if there is a mortgage.
- [ ] **Vehicle** — mileage log (start, end, business miles), date placed in service, purchase/finance agreement. Without these there is no vehicle deduction by either method.
- [ ] **Filing status on 31 December 2025** — ask the **situation**, not a yes/no: married / separated (since when, and did his spouse live in the home at any point in the last six months) / divorced (decree date) / widowed (date). Everything about the household hangs on it, it may open Head of Household if §7703(b) applies **and** the rest of the §2(b) tests are met (see §5), and it must never be carried forward from 2024 by default.
- [ ] **The children** — how many, and whether either lived with him during 2025 and for how many months. His 2024 return claimed one daughter with EIC and the child tax credit, and that needs re-establishing for 2025. Determines whether the Child Tax Credit is available.
  ⚠️ **Ask facts, not documents.** The firm does not ask clients for custody orders, decrees or a signed Form 8332 _(Lilian, 2026-08-11)_. Form 8332 stays internal knowledge for how we **treat** his answer, and is raised **only if his answer makes it unavoidable** — a non-custodial parent claiming a child does need one signed and attached to the return (§152(e)), so the request can become necessary. It is simply never how we open.
- [ ] **Basis in the S corporations** — needed before relying on the 2024 NOL carryforward (§5).
- [ ] **Form 4797 follow-through** — whether any 2024 asset disposal continued into 2025.
- [ ] **Estimated payments** — confirm none were made, so the penalty is expected rather than discovered.
- [ ] **2024 carryovers and elections** — read from the prior return (see §5).
- [ ] **Profit & Loss** — the summary he sent is the substitute; decide whether to have him complete the firm's template as a written record.

### Information still needed

- [x] Primary language — **Russian** _(Lilian, 2026-08-11)_. His channel is settled too: **text message, not the portal** — worth sending him the Double portal guide with the question list.
- [x] What his work actually is — **trucking / freight, through three S corporations he holds shares in** _(2024 return, 2026-08-11)_. The earlier "inferred from his expense pattern" reading is superseded.
- [ ] Whether the drivers he paid were paid **by him personally or by one of the S corps** — that decides who, if anyone, owes the 1099-NECs.
- [ ] Which of the three S corporations are **still active** in 2025, and who prepares their 1120-S returns.
- [ ] Whether he owes **1099-NECs** to the drivers he paid.
- [ ] Whether the health coverage is **Marketplace** (drives the 1095-A requirement).
- [ ] Assigned staff in Double — no `Assigned Staff` property is set on this client.
- [ ] Google Drive folder, if one exists.

## 7. Links

- **Double client:** https://app.doublehq.com/close?cid=764785
- **Double tax project (2025):** https://app.doublehq.com/tax-return?cid=764785&projectId=234191
- **Double case note:** none — by Lilian's instruction (§5), the review analysis stays out of Double. The working note on this client is **"2025 Tax Preparation - P&L and other info"** (client-supplied figures only).
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** none yet.
