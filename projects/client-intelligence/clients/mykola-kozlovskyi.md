# Mykola Kozlovskyi

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-19

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

- **Business name:** Mykola Kozlovskyi — an **individual** client record _(Double `Account Type: Individual`, 2026-08-18)_
- **Entity type:** n/a — individual taxpayer. **Sole shareholder of [Kolo Florida Inc](./kolo-florida.md)** (an S corporation) **from 2025**, at 100% (§5)
- **Home state:** Florida — Sunny Isles Beach, Miami-Dade County _(2024 filed return, 2026-08-17)_
- **Industry / what they do:** n/a as an individual. His business activity reaches the 1040 through the S corporation; a 2024 Uber sole-proprietorship **did not continue into 2025** _(Lilian, 2026-08-18)_
- **Primary language:** **Russian — `Preferred language: Only Russian` in Double**, and the firm's whole correspondence with him is in Russian _(verified 2026-08-18)_
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, 2026-08-18)_. The firm's work for his **company** is a separate engagement on its own record
- **Fiscal year-end:** calendar year
- **Accounting platform:** none on this record — `platform: none`, correctly; the books that matter to his return are the company's

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client himself | Double client (link below) |
| **His ex-wife** — her own separate Double client, and the counterparty on every 2025 decision that has to match | [`liliia-hlebova-kozlovska.md`](./liliia-hlebova-kozlovska.md) · [Double cid 710644](https://app.doublehq.com/close?cid=710644) |
| His company | [`kolo-florida.md`](./kolo-florida.md) · [Double cid 706626](https://app.doublehq.com/close?cid=706626) |

- **Double client:** [app.doublehq.com/close?cid=709838](https://app.doublehq.com/close?cid=709838)
- **Double case note:** none — ordinary return preparation, not a tracked matter

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How he receives and returns documents | _(n/a — client's own portal login)_ | ⚠️ **His Double organizer for 2025 is a `draft` and was never published**, so there are no organizer responses under his own record. The household completed **one joint organizer of the legacy TaxDome generation** — a completed **PDF in the file library**, not a Double organizer entity (`list_organizers` returns none for her either) — and it sits on his ex-wife's record (§5) |
| Healthcare.gov / Marketplace | Health coverage → Form 1095-A → Form 8962 | _(n/a — client's own account)_ | The 2024 policy covered the whole household on **one** policy; the 2025 position is settled — the form is in hand and filed in Double, and the allocation is agreed at **80% his ex-wife / 20% him** (§6) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No on this record. His **company** files monthly Florida sales tax — see [`kolo-florida.md`](./kolo-florida.md).

### Payroll
- **Applies?** No. The company's payroll stopped, and his 2025 K-1 reports **no W-2 wages** from it _(the 2025 1120-S working paper, 2026-08-18)_.

### Bookkeeping & monthly close
- **Applies?** No — `Bookkeeping: N/A` on this record.

### Income tax
- **Applies?** **Yes — Form 1040**, and this is the whole engagement on this record.
- **Return type(s) & deadlines:** 1040, calendar year. **2024 was filed jointly with his ex-wife**; **2025 is the first year he files separately.** An **extension is on file for 2025**.
- **Our role:** the firm prepares and files. Assigned staff: **Lilian**.
- **Process notes (→ future SOP):**
  - **2025 tax project:** [`2025 Taxes`, cid 709838 / project 218726](https://app.doublehq.com/tax-return?cid=709838&projectId=218726) — status `inProgress` as at 2026-08-18, **ahead of his ex-wife's**, which is why the shared decisions in §5 have to be settled before his is finalised.
  - 🔑 **His return CANNOT be finished before the company's.** The K-1 and the Form 7203 both come off the 1120-S — see §5 and the working paper linked in §7.

### Licenses & other filings
- **Applies?** No on this record — the company's filings are on its own file.

## 5. Key facts & quirks

<!-- ORDER MATTERS: the client card renders only the FIRST FOUR bullets of this
     section. Keep live, consequential work at the top and let settled or
     historical items sink. See .claude/skills/client-intelligence/SKILL.md. -->

- 🔑 **HIS 1040 RUNS OFF THE COMPANY'S RETURN, AND THAT RETURN IS THE PREREQUISITE — a derivation, not a rule anyone stated.** For **2025 he is treated as the sole shareholder of [Kolo Florida Inc](./kolo-florida.md) at 100%**, so the 2025 K-1 (an ordinary **loss**, plus distributions) and the **Form 7203 filed with HIS 1040, not with the 1120-S**, both come off the company's return — which is why his cannot be finalised first. **The figures are in the working paper** (§7), **on `main`**; a session was still refining that company file on 2026-08-18, so re-read it rather than trusting a figure quoted from memory.
  ⚠️ **The 100% is a RULING BY LILIAN AGAINST THE PAPERS, not a plain fact, and it must be carried as one.** The other shareholder's 2024 K-1 shows **50 shares at year end and a full 50% allocation** *alongside* a ticked `Final K-1`. **Lilian ruled on 2026-08-17 that the `Final K-1` box governs** and he is out for 2025 — one K-1, box I = 1. The alternative reading (still a shareholder) is recorded in the working paper's decisions table. **If that ruling ever moves, this whole bullet moves with it.**
- 🔴 **2025 IS A SEPARATE-RETURN YEAR — and the joint organizer the household completed is wrong in a way that matters more on his return than on hers.** The household filled in **one** organizer while still married; it lives on **his ex-wife's** record and answers **"Married"**. Its **sources-of-income answer is "None of the above", which Lilian confirmed on 2026-08-18 is simply an error** — and on his return it is impossible on its face, because he has the S-corporation K-1. Because that one answer closed the branch for the whole household, **the organizer never asked for a single income document from either of them.** Do not read anything into what it does not contain.
- ✅ **THE MARKETPLACE POLICY IS AGREED WITH HIS EX-WIFE — 20% him / 80% her** _(Lilian, 2026-08-19 evening, replacing the 50/50 set earlier the same day)_. The 2024 joint return reconciled **Marketplace coverage on Form 8962**, and a return with advance payments is **rejected without it**. Filing separately, **Part IV requires an allocation percentage and every return sharing the policy must carry the same figures** — here the policy is shared by three returns, but **the adult daughter reported nothing from the form**, so the two parents take 100% between them and only one allocation is needed. ⓘ **The rules are pairwise in principle**: with his ex-wife it is the *divorced-during-the-year* situation, so the split is **by agreement — any percentages the two of them accept**; an even split is only that situation's no-agreement fallback. 🔑 **In money it is very nearly neutral**, because everyone's required contribution works out at zero — it is a **consistency** question. ⚠️ **One figure it does move, and it is keyed to FILING STATUS, not family size:** the repayment limitation on Form 8962 has a **smaller column for a single filer and a larger one for every other status**. He moved from head of household to single on 2026-08-19, so his limitation halved. **It does not bind on these figures; it would in a year the credit reconciles badly, and it is exactly the sort of number that gets copied forward from last year's return.** ✅ **The 2025 Form 1095-A is in hand and filed in Double**, covering **the whole household including all three minor children**.
- 🔴 **HE HAS NO EARNED INCOME IN 2025 — and SHE DOES, which is why every credit lands on her return.** The company paid **no W-2 wages** and there was **no Uber**; an S-corporation ordinary **loss** is not earned income and neither are distributions. **The earned income credit and the additional child tax credit both require it**, so on his return they are **zero** — while [his ex-wife's consulting income](./liliia-hlebova-kozlovska.md) reaches both. 🔴 **And from 2026-08-19 the question no longer arises at all: all three children lived with their mother and he lived alone**, so he has nobody to claim and the **Form 8332** the firm was about to recommend is moot. ⚠️ **A W-2 from another employer is still unconfirmed for him** — and it would now be his only payment line, since he has no withholding and no estimated payments at all. ⓘ **The net premium tax credit is a separate matter** — it is refundable and turns on **filing status**, not earned income.
- 🟠 **The 2024 carryovers are HIS, all of them.** The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and both arose from his K-1 and his Uber Schedule C — his ex-wife holds no interest in the company _(Lilian, 2026-08-17)_. **Nothing carries onto her return; everything carries onto his.** Take it as a decision recorded on both returns, not as a default.
- 📅 **2026 WILL BE THE COMPANY'S FINAL RETURN, and the liquidation lands on HIS 1040.** His 2025 K-1 is deliberately **not** marked `Final`; the company closed in 2026. **Gain or loss on liquidation is computed from his accumulated stock basis**, which is why the Form 7203 ending figure for 2025 is not just this year's paperwork — it is the opening number for the calculation that closes the whole investment. _(The company's 2025 working paper, §7, as at 2026-08-18.)_
- **No Uber in 2025** _(Lilian, 2026-08-18)_. 2024 carried a **Schedule C as an Uber driver** — reported gross with **no expenses claimed at all**, not even vehicle or telephone. ⚠️ If that activity is ever revived, the zero-expense treatment is the thing to question first.
- 🔴 **THE DEPENDANTS SPLIT — CLOSED 2026-08-19, AND NOT THE WAY THE FIRM HAD IT.** _(Lilian, confirmed: **all three minor children lived with their mother for the whole of 2025, and he lived alone**.)_ ⚠️ **This SUPERSEDES the 2026-08-18 analysis**, on which two of the three lived with him and the firm was about to recommend one signed **Form 8332**. **He claims nobody. She claims all three and every credit.** ⛔ **No Form 8332 is needed — there is nothing for him to release** — and none should be put to the parents. 🔑 **The lesson worth keeping:** the release the firm was about to ask for moves only the **child tax credit**; the **earned income credit follows residence and cannot be released on any form**. *Where a child sleeps and who claims a child are two different levers, and the residence one was worth many times the other here.* ⚠️ **And the joint organizer had said all along that all three lived with their mother.** The session treated that answer as wrong because several of the organizer's other answers were wrong; **it was right. A source that is unreliable about some things is not thereby unreliable about the thing in front of you.**
- **He works by email, in Russian, and he answers.** The firm's correspondence with him runs through his own address and he replies briefly and quickly; he is also the contact for the company's sales tax, annual report and permits. **He does not use the Double portal for this.**
- **He is the shareholder of record on the 2024 Form 7203**, which is what settles that the company's basis history is his and not the household's.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-08-19 (late)** — **His return acquired a dependency on the company's, and it came out of a
  review of the company's books, not of his.** Kolo's single shareholder-capital account was split
  into contributions and distributions for the 1120-S; the split itself reproduced exactly, but the
  work surfaced that a group of counter deposits is booked as **capital** on nothing but its
  classification and would be the company's **revenue** if they were takings. That reaches him
  through the K-1 loss, his Schedule E and his **2026 NOL carryforward** — **not** through his stock
  basis, which is unchanged either way. **His 1040 is now marked do-not-transmit until Lilian closes
  the company's item**, and the §4 line that said the 1120-S dependency was closed has been
  reopened. ⚠️ **Nothing of his was recomputed and no figure of his changed.** The mechanism and the
  amounts are in `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md` §3B and §6, and his own
  working paper carries the note in its header and §6. _(Worked by Lilian.)_
- **2026-08-17** — The **pre-return review of his ex-wife** established the household facts from the **2024 joint return** and flagged that he had no file of his own. Sources read that day: Double notes/files/properties/tax project for both, Julia's Gmail, Google Drive, Ping, the joint 2025 organizer and the 2024 filed return.
- **2026-08-18** — **File created**, under `CLAUDE.md`'s standing rule that a client worked on in a session gets a Client Intelligence file. ⓘ He does **not** meet the Double-based coverage test (`platform: none`, no bookkeeping cadence), so the file is not required by that test — it exists because the work happened. _(An earlier note left this "for Lilian to decide"; she was never asked, and the standing rule already settles it.)_
- **2026-08-18 (Lilian)** — Four rulings: **no Uber in 2025**; **the joint organizer's sources-of-income answer is an error**; his 2025 income is **the company K-1** from the 1120-S just completed; and the **2025 Form 4868 is not to be opened — the information is not in it.**
- **2026-08-18** — **Searched Double, Google Drive and Julia's Gmail for a 2025 Form 1095-A**, at Lilian's request. Not found; the candidate attachment was opened and is a member ID card. Details in the Outstanding item.
  ⓘ **How that card was identified, because it matters for the next document like it:** the file is a **scan with no text layer**, so [`redact-doc`](../../../tools/redact-doc/) correctly refuses it. Lilian instructed the session to open it anyway, and it was read by rasterising the pages and **looking at them** — a route with **no redaction whatever**. It answered the question in one step; it also means nothing on those pages was masked. See the open item below.

- **2026-08-18 (Lilian, later the same day)** — **His return became computable, and one of the session's own statements was corrected.**
  - 🟡 **Head of household — two tests of three, and the third is now ruled rather than evidenced.** He was **unmarried at 31 December 2025** ✅, the two middle daughters lived with him all year ✅, and **he paid his housing costs from his savings** — which answers **who** paid, and is precisely what Pub 501 Worksheet 1 asks (*what you paid*; the source of the money is irrelevant). ✅ **On the PERIOD, Lilian ruled on 2026-08-19 that they lived apart and that he has a different address** — which also disposes of a lease on his ex-wife's apartment that **names him as a co-tenant**. 🔴 **SUPERSEDED THE SAME EVENING** — no child lived with him at all, so the qualifying-person test fails and **he files as a single filer**. See the 2026-08-19 (evening) entry.
  - 🔴 **CORRECTED — the youngest daughter IS on the Marketplace policy.** The session had reported the policy as covering five people and her as not among them. **Form 1095-A Part II holds only five names; a sixth goes on a continuation page.** The session read that page, counted, and concluded — against the redactor's own printed warning that an absence in a partly-extracted document is not evidence. **Lilian caught it with the paper form in front of her.** **No figure changed.** ⓘ It also closes the "what coverage did she have" question: she was covered all year.
  - ✅ **The dependants analysis was run** at Lilian's request, on the real facts and on a hypothetical she posed to understand the mechanics. **The finding: residence and the claim are two different levers.** The earned income credit follows residence and cannot be released; a Form 8332 moves the child tax credit alone; and **one release exhausts the benefit.**
  - ⓘ **A correction to how the firm asked about the adult daughter.** Her already-filed return is not the firm's business — **one number is needed from her, the allocation percentage she claimed.**

- **2026-08-19 (Lilian)** — **A lease surfaced that names him, and it does not mean what it looks like.** The residential lease on **his ex-wife's** apartment, running from September 2025, **names him as a co-tenant**. ✅ **Lilian ruled that they lived apart and that he has a different address**, so head of household stands for both of them and the apartment is hers. ⚠️ **A lease in two names is not evidence that two people lived together** — read alone it would have taken head of household away from one of them, and it is the kind of document that looks decisive. **What is still thin is the evidence for January–August**, on both sides.

- **2026-08-19 (Lilian)** — 🔴 **SUPERSEDED THE SAME EVENING — see the entry below.** **The Form 8962 allocation was settled at 50 / 50** with his ex-wife. **The adult daughter filed her own return and reported nothing from the 1095-A**, so the two parents reconcile the whole policy between them — no gap, no overlap, and only **one** allocation to enter rather than two pairwise ones. 🔑 **An even split is the no-agreement default under Allocation Situation 1**, which is what made it defensible. ⓘ **The allocation percentage is very nearly neutral in money on both returns**; it is a consistency question.

- **2026-08-19 (Lilian, evening) — 🔴 A CHANGE OF PLAN THAT REWROTE HIS RETURN.** Lilian confirmed
  that **he lived alone for the whole of 2025** and that **all three minor children lived with their
  mother** — reversing the residence facts recorded the previous day, on which two of the three lived
  with him. **Both sets of facts came from her; the later one governs, and it is recorded as a
  correction rather than an overwrite.** What followed from it:
  - 🔴 **He files as a SINGLE filer.** Head of household needs a qualifying person who lived in his
    home more than half the year, and nobody did.
  - 🔴 **He claims no dependants at all**, so there is **no child tax credit on his return.** 🔑 **The
    general rule that exposes: an excess advance premium tax credit is an ADDITION TO TAX, not a
    payment adjustment — it survives unless a nonrefundable credit reaches it, and a taxpayer with
    no dependants and no tax has nothing to absorb it with.** ✅ **On his 2025 figures it does not
    bite**: Form 8962 is a **dollars-only** form, and once the Marketplace form is rounded as the
    instructions require there is no excess at all, so **he owes nothing and is owed nothing.**
    ⚠️ A first draft of the working paper carried cents and had him owing a dollar — **the mechanism
    is real, that balance was not** _(corrected in independent review, 2026-08-19)_.
  - ✅ **The Form 8962 allocation moved to 20% him / 80% her**, replacing the 50/50 set earlier the
    same day. ⓘ It divides the policy's cents exactly, where the halves did not.
  - ⚠️ **His Form 8962 repayment limitation halved**, because that limitation is keyed to **filing
    status** — a single filer takes the smaller column, every other status the larger one. **It is
    never reached on these figures, and it is exactly the sort of number that gets copied forward
    from last year's return.**
  - ⛔ **The Form 8332 recommendation is withdrawn** — there is nothing for him to release.
  - ✅ **Nothing on the company side moved by a cent** — the K-1, Form 7203, the ending stock basis
    that opens the company's final year, the unusable net operating loss and the QBI carryforward are
    all unchanged. **The entire difference is on page 2 of the 1040.**

### Tax year 2025 — the review

- **2026-08-19 (Lilian, in the software) — 🔑 THE NET OPERATING LOSS, AND THE FIGURE HIS FINAL YEAR
  RUNS ON.** Working the return in ATX, Lilian raised the **2024 net operating loss carried forward**
  and how it should appear. Three things came out of it:
  - ✅ **The carryforward IS listed on his return as a deduction**, and the working paper was revised
    to match. The instructions say to list a carryforward on Schedule 1, and **Form 172 line 23 then
    adds it back out of the current year's NOL** — so the prior loss can never enlarge this year's.
    ⚠️ **An earlier position in the firm's 1040 SOP said the opposite** — that entering it in a loss
    year "burns a deduction". **The statutory half of that was right and still is; the "burns it"
    half was wrong**, and the SOP has been corrected to say so. **In a LOSS year both entries are
    defensible and converge**; the instructions and the software break the tie. 🔴 **In a year WITH
    income they do not converge** — the deduction is capped at 80% of taxable income, and the SOP now
    leads with that. **No 2025 tax, credit or refund moves either way.**
  - 🔑 **The combined opening carryforward into 2026 is now recorded on the working paper.** Both
    halves — the 2024 loss and the 2025 loss — had been on the paper since 2026-08-17 **in separate
    sections, never added up.** That total is what his **final-year** return actually runs on, and it
    is the only asset this return produces. **The firm's SOP now requires the addition to be written
    down rather than left as two pieces.** ⚠️ **And the cap goes with it: a post-2017 carryforward
    shelters at most 80% of a year's taxable income**, so a fifth of whatever the liquidation
    produces stays taxable however large the carryforward. **Do not let anyone plan the final year
    believing it is sheltered outright.**
  - 🛑 **A defect was flagged in the software's Form 172: line 24 was showing ZERO**, which states
    that he has **no** net operating loss for 2025 — on a return whose entire purpose is to carry a
    large loss into the liquidation year. **A zero there is silent**, because a loss year produces no
    tax to be wrong about. The usual cause is line 1, which must be **AGI minus the standard
    deduction** (a negative number) and **not** the taxable-income line, which is floored at zero.
    ⓘ **A zero there is not always an error** — a loss disallowed under the excess-business-loss rule
    or by the basis / at-risk / passive gates can zero it legitimately. **His clears all four**, so
    on his return it is a defect. **Check it before filing.**
  - ✅ **And the instructions independently confirm the 2026-08-17 ruling that the loss is entirely
    his**: *"only the spouse who had the loss can take the NOL deduction."*

- **2026-08-19 (Lilian, in the software, later) — THE RETURN'S PAPERWORK, not its figures.** Three
  things came out of preparing his return in ATX, and none of them was a number:
  - 🛑 **An NOL carryover on Schedule 1 REQUIRES an attached explanation statement, and the return
    will not e-file without it.** The firm's analysis had given the return line by line and never
    mentioned it; **Lilian met it as a red error in the software and wrote the justification
    herself.** ⚠️ **Her standing instruction from it:** the analysis must be more specific about the
    level of detail — **a return is not finished when its figures are right, it is finished when it
    transmits.** The 1040 SOP now carries a section on the statements and attachments a return
    requires, and the tax-return skill's delivery standard now requires them to be **drafted**, not
    just flagged.
  - ✅ **The K-1 warning about the §1.1367-1(g) carryover default was analysed: nothing is missing
    from his K-1 input and the default is correct.** The warning is about nondeductible expenses in
    **excess of basis** being lost rather than carried; **his basis is nowhere near exhausted**, so
    the ordering cannot matter and ending basis is identical either way. ⛔ **Do not take the
    election** — it binds every future year for that company unless the IRS agrees to revoke, the
    prior year did not make it, and it buys nothing in the year before a liquidation. ⓘ **It is made
    by an attached statement, not by the Form 7203 checkbox**, which only reports one in effect.
  - ✅ **The `Comparison` warnings are all expected** — wages, self-employment tax, child tax credit,
    earned income credit and withholding *"reported on last year's return but not this year's"*.
    They are the software noticing a **joint return became a single one**. **Each has a recorded
    reason in the working paper.**

- **2026-08-19 (Lilian, in the software, later still) — THE ENTRY ROUTE: where a figure is actually
  TYPED, which is usually not the form it appears on.** Working his return, Lilian found that the
  analysis gave every line of a form and its arithmetic and **still could not be entered**, because
  most lines on a computed form arrive from a different screen. **Her instruction:** write for
  someone who knows nothing — not the tax, not the forms, not how figures move between them, not the
  arithmetic behind a number.
  - 🔴 **A DEFECT WAS FOUND IN THE PREPARED FORM 7203 AND IT FOOTED.** The nondeductible-expenses
    line was blank, so his **ending stock basis came out too high** — the figure that opens the
    company's final year and drives the whole liquidation calculation. **Nothing flagged it**: every
    total on the form added up. **The cause is that the line is not typed on Form 7203 at all** — it
    arrives from the **K-1 input screen, box 16 code C** — so there was nothing on the form to fix.
    🟠 **IDENTIFIED, NOT YET CONFIRMED CORRECTED.** The route to the fix is recorded on the working
    paper; **nobody has confirmed the re-read.** ⚠️ **Do not treat the basis as settled until the
    form has been re-read** — it is the figure the final year runs on.
  - ✅ **Now a standing part of the delivery standard** (the tax-return skill, part 8): every line
    table carries **where the number is entered**, marked as the software's route rather than an IRS
    fact, and says **"computed — do not type"** where that is the answer. **And the diagnostic that
    comes with it: a blank line on a computed form means a missing INPUT, not a missing entry on
    that form — a defect of that kind FOOTS, so nothing catches it.**

- **What gates the return.** ✅ **(1)** The **company's 1120-S**, which produces his K-1 and his Form 7203 — **completed and on `main`** _(2026-08-18)_. ✅ **(2)** The **Form 8962 / Marketplace allocation** — **settled 2026-08-19 at 20% him / 80% his ex-wife**.
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; his **Uber Schedule C** with no expenses claimed; his **K-1 from the S corporation**; a **Form 7203 in his name** carrying the stock-basis history; three dependants claimed for the child tax credit; **Marketplace coverage reconciled on Form 8962**; refundable **earned income credit** and **additional child tax credit** claimed, both resting on earned income; a **net operating loss** and a **QBI loss carryforward** generated; **no estimated payments**; **no state return** (Florida). ⓘ **The return does not say whose the single W-2 was** — the firm's own filename in Drive labels it as his.
- **Settled for 2025:** no Uber activity; income is the company K-1; the organizer's nil-income answer is an error; the 2024 carryovers are his; the Form 4868 is not to be opened.
- 🔴 **Corrected 2026-08-19:** the dependants split — **all three children lived with their mother, he lived alone**. He claims nobody and files as a **single filer**; the Form 8332 recommendation of 2026-08-18 is withdrawn.
- **Questions put to the client:** **none yet.**

### Outstanding items (CI-only — never in the SOP)

- ✅ **THE FORM 8962 ALLOCATION IS SETTLED — 20% him / 80% his ex-wife** _(Lilian, 2026-08-19 evening)_. The 2025 Form 1095-A is in hand and **filed in Double**: it is in his name and covers **six people** — both parents, all three minor daughters, and the adult eldest daughter. **She filed her own return and reported nothing from the form**, so the two parents reconcile the whole policy between them. 🔑 **Under Allocation Situation 1 the split is BY AGREEMENT — any percentages the two of them accept**; an even split is only the no-agreement fallback. ✅ **And it no longer depends on who claims which child, because nobody is releasing anyone.** ⓘ It also divides the policy's cents exactly, where the halves left a rounding residue on each side. ⚠️ **One thing on the form still wants an answer:** the second-lowest-cost-plan figure **jumps in September**, the signature of a household or address change reported to the Marketplace — **confirm what was reported and when**, because the form's own cover letter says an unreported change can make that column wrong.
- ✅ ~~Whether he signs ONE Form 8332.~~ ⛔ **MOOT from 2026-08-19** — no child lived with him, so there is nothing to release.
- 🟡 **Head of household — two tests of three, for both parents.** _(Residence and year-end settled 2026-08-18; the cost test is annual and January–August is unestablished on both sides — raised in review, 2026-08-19.)_ The two middle daughters lived with him all year, the youngest with her mother, and the eldest is an adult who filed her own return — so **each parent has their own qualifying child**, which is what the rule requires; both were unmarried at year end; and **he paid his home from his savings**. ⓘ **The reasoning is kept in his working paper** because it is the reusable part: the same child cannot give both parents HOH, two people cannot each pay more than half the cost of the *same* home, and "considered unmarried" for HOH is **not** the same test the earned income credit uses. 🔑 **And the stake was never the standard deduction — filing status is the PREMIUM-TAX-CREDIT gate.** Had the marriage not ended by 31 December, married filing separately could not have taken the credit at all. **His HOH is worth nothing in 2025** (no income to shelter) — **but it will matter in 2026**, the company's final year.
- Whether he had any **W-2** in 2025 from any source. The company reports none, and its payroll had stopped.
- 🟠 **WHO the company's 2025 `Contract Labor` payee was** — if it is his ex-wife, it is *additional* self-employment receipts of hers. The 1099 question is closed; the identity question is not.
- 🟠 **Material participation on the K-1 loss, recorded rather than inherited.** Basis is only the first of three gates; §469 is the third, and 2024's nonpassive treatment is the prior preparer's position, not the firm's.
- 🛑 **REOPENED 2026-08-19 — the company's 1120-S is not settled after all, and his return waits on it.** ~~It is on `main`~~ was true of the *file*, not of the *return*: on 2026-08-19 Kolo's working paper gained a **third blocker** — a group of counter deposits booked as capital contributions to his account on nothing but their classification. **If they were takings they are the company's revenue**, the company's loss shrinks, and with it his **K-1 loss, his Schedule E and the NOL he carries into 2026**. **His stock basis is unaffected either way.** ⚠️ **His return is not wrong today** and no figure of his was changed — it is a dependency. **But his 1040 must not be transmitted until Lilian closes that item**, and the company's return goes first regardless. ⓘ **What settles it:** either he confirms he made those three deposits (they are dated 23 May, 7 Jun and 20 Aug 2025) or the bank statement shows the money leaving a personal account of his. The figures are in `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md` §3B — **re-read that paper rather than quoting anything from memory.**
- ⚖️ **For Lilian to rule: may these pages name the marital circumstance at all?** The same open question carried on [his ex-wife's file](./liliia-hlebova-kozlovska.md). [`double-mcp`](../../../.claude/skills/double-mcp/) §2.2 lists a divorce and "living apart from a spouse" among the facts she has **not** ruled on for files that publish to the Knowledge Hub; its standing instruction is to write the *consequence* and ask. It is now on **two** published pages that also link the two people to each other, which raises the stakes rather than lowering them. Kept because §2.2 names **the filing status** among the tax facts a client file may carry, and here the filing status is the fact. ⓘ **The precise date the marriage ended is deliberately NOT written on either page** — it lives in the working papers, which are not published.
- 🔧 **A scan cannot be read safely today, and it came up twice in one session.** `redact-doc` reads PDFs with a text layer only; a photograph or a scan has to be looked at directly, which bypasses every mask. **An OCR route feeding the existing redaction patterns has been proposed to Lilian**, and on 2026-08-18 she ruled: *"por ahora deja todo como está"* — **leave it as it is for now; she will decide later.**
- ⛔ **The 2025 Form 4868 is NOT to be opened** — Lilian, 2026-08-18: the information is not in it. Recorded so no future session spends time on it.

### Information still needed

- [x] ~~Whether he will sign **one Form 8332**~~ — ⛔ **moot from 2026-08-19**: no child lived with him
- [ ] Whether he had a **W-2** from any source in 2025
- [ ] What was reported to the Marketplace in September 2025, and when
- [ ] Who the company's 2025 `Contract Labor` payee was
- [ ] Whether **material participation** on the S-corporation loss is established in writing
- [ ] What the 2025 **digital-asset transaction** on the joint organizer was, and whose it is
- [ ] His own **bank account** for a refund or payment — the joint organizer carried one household account and each of them now needs their own
- [x] ~~The 2025 Form 1095-A~~ — in hand and filed in Double
- [x] ~~His marital position on 31 December 2025~~ — **unmarried**; 🔴 **files as a SINGLE filer** _(corrected 2026-08-19 — no qualifying person lived with him, so head of household is unavailable)_
- [x] ~~The dependants split~~ — 🔴 **all three children lived with their mother; he claims nobody** _(Lilian, 2026-08-19, correcting 2026-08-18)_

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=709838](https://app.doublehq.com/close?cid=709838)
- **Double 2025 tax project:** [cid 709838 / project 218726](https://app.doublehq.com/tax-return?cid=709838&projectId=218726)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [MYKOLA KOZLOVSKYI](https://drive.google.com/drive/folders/1180Tn7k9m9hNdN2mol4xXezcxIbxMSx1)
- **His 2025 return working paper — where every figure lives:** `projects/tax-returns/mykola-kozlovskyi/2025-form-1040.md`
- **The company's working paper, behind his K-1 and Form 7203:** `projects/tax-returns/kolo-florida-inc/2025-form-1120s.md`
  ⓘ **Both are written as paths, not links, on purpose** — this page is published to the Knowledge Hub and a link into an unpublished folder resolves to nothing there
- **Related clients:** [`kolo-florida.md`](./kolo-florida.md) (his S corporation — he is its sole shareholder from 2025) · [`liliia-hlebova-kozlovska.md`](./liliia-hlebova-kozlovska.md) (his ex-wife; their 2025 returns share two decisions)
- **Related SOPs:** [`form-1120s-preparation.md`](../../sops/form-1120s-preparation.md) — the procedure behind his company's return
