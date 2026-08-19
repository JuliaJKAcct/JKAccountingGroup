# LILIIA HLEBOVA KOZLOVSKA

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

- **Business name:** Liliia Hlebova Kozlovska — an **individual** client record, not a company _(Double `Account Type: Individual`, 2026-08-17)_
- **Entity type:** n/a — individual taxpayer. She holds **no interest in Kolo Florida Inc**, her ex-husband's S corporation (§5). ⓘ That is the only company checked; no roster-wide check was run
- **Home state:** Florida — **Sunny Isles Beach, Miami-Dade County** _(2025 organizer + 2024 filed return, 2026-08-17)_
- **Industry / what they do:** **Self-employed — consulting services**, from 2025 _(Lilian, 2026-08-18)_. She files a **Schedule C**; the 2025 organizer's "no income" answer was simply wrong
- **Primary language:** **Russian** — the household's correspondence with the firm is conducted in Russian. ⓘ Inferred from the family's correspondence and from the ex-husband's Double record (`Preferred language: Only Russian`); **her own Double record carries no language property** _(2026-08-17)_
- **Our engagement (services we provide):** **Income tax only** — Form 1040 _(Double properties: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-08-17)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** none — `platform: none` in Double, and correctly so; there is no business to keep books for

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client herself | Double client (link below) |
| **Her ex-husband** — a separate Double client of the firm, and the counterparty on every 2025 decision that has to match | [Double client, cid 709838](https://app.doublehq.com/close?cid=709838) |

- **Double client:** [app.doublehq.com/close?cid=710644](https://app.doublehq.com/close?cid=710644)
- **Double case note:** none — this is ordinary return preparation, not a tracked matter

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How she receives and returns documents | _(n/a — client's own portal login)_ | Her 2025 organizer is the **legacy TaxDome generation** — a completed PDF in the file library, **not** a Double organizer entity (`list_organizers` returns none). It cannot be read with the organizer tools; it is read as a document |
| Healthcare.gov / Marketplace | Health coverage → Form 1095-A → Form 8962 | _(n/a — client's own account)_ | The single largest item on this return, and the one that gates filing (§4, §5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — individual taxpayer, no business.

### Payroll
- **Applies?** No.

### Bookkeeping & monthly close
- **Applies?** No — `Bookkeeping: N/A` in Double.

### Income tax
- **Applies?** **Yes — Form 1040**, and this is the whole engagement.
- **Return type(s) & deadlines:** 1040, calendar year. **2024 was filed jointly with her ex-husband**; **2025 is the first year she files separately** (§5).
- **Our role:** the firm prepares and files. Assigned staff: **Lilian**.
- **Process notes (→ future SOP):**
  - **2025 tax project:** [`2025 Taxes`, cid 710644 / project 219331](https://app.doublehq.com/tax-return?cid=710644&projectId=219331) — status `notStarted` as at 2026-08-17. Her ex-husband's own 2025 project was already `inProgress` on the same date, so **his return is ahead of hers** and the shared decisions in §5 have to be settled before his is finalised.
  - **An extension exists for 2025** — a Form 4868 sits in both her and his Double file libraries. **Its contents have not been read**; whether it carries an estimated liability or a payment is open (§6).
  - Organizer status is hand-maintained by Lilian and reads **Completed** for 2025 — but see §5: "Completed" here does not mean workable.

### Licenses & other filings
- **Applies?** No.

## 5. Key facts & quirks

<!-- ORDER MATTERS: the client card renders only the FIRST FOUR bullets of this
     section. Keep live, consequential work at the top and let settled or
     historical items sink. See .claude/skills/client-intelligence/SKILL.md. -->

- 🔴 **THE MARKETPLACE POLICY IS WHAT GATES THIS RETURN, and it cannot be settled on her side alone.** She had **Marketplace coverage** in both 2024 and 2025, reconciled on **Form 8962**, and the return is **rejected without it**. ✅ **The 2025 Form 1095-A arrived on 2026-08-18, and is now filed in Double** — **one policy covering the whole household and shared by THREE separate returns**, hers, her ex-husband's and her adult daughter's. **All three of the minor children are covered on it**, including the youngest _(established 2026-08-18)_, so there is no separate Medicaid/CHIP question to chase. ⚠️ **The form lists only five covered people per page** — the sixth is on a continuation page, and reading page one and counting is exactly how this file first got it wrong. See §6. In 2024 the household was covered on **one policy** and answered "no allocation". **Filing separately, that route is gone:** Part IV requires an **allocation percentage**, every return sharing the policy must carry the **same** figures, and between them the shares must cover the policy exactly — **no overlap and no gap** for the same months, which in practice means the three add to **100%**. ⓘ **The rules are pairwise** — the pair *her ↔ her ex-husband* runs under the divorced-during-the-year situation (**by agreement**), the pair with the adult daughter under a different one. 🔑 **In money it is very nearly neutral** here, because everyone's required contribution works out at zero, so **this is a consistency question, not a money question** — but it still cannot be filed until the three agree.
- ✅ **DEPENDANTS: SETTLED IN PRINCIPLE, AND THE ARITHMETIC IS COUNTER-INTUITIVE.** She has **earned income** and her ex-husband has **none**, so the credits that pay out in cash are reachable on her return and unreachable on his. But **residence is not transferable**: head of household, the **earned income credit** and the dependent-care credit follow where a child actually lives, and only the **child tax credit and the dependency** move on a signed **Form 8332**. Two of the three minor children live with him. 🔑 **So the household's only lever is a Form 8332 — and ONE of them is worth having, a second is worth nothing**, because Schedule 8812 caps the refundable child credit at a percentage of *her* earned income and one released child already reaches that ceiling. **Do not ask the parents for three forms to collect one form's worth of money.** _(Analysis run 2026-08-18 at Lilian's request; the figures are in the working paper.)_
- ✅ **HER HOME-OFFICE AND EXPENSE POSITION IS SETTLED — and two of its inputs are not what they look like** _(Lilian, 2026-08-19)_. **The rent she pays is a SHARE**: the lease on her apartment names **both her and her ex-husband**, at a materially higher figure than the one she reports, and **they lived apart** — only her share is deductible, and the lease must never be read as proof of a shared home. **The renter's insurance is hers and belongs IN the home-office computation** (Pub 587 counts insurance on the home as an indirect expense), even though her own worksheet reported it as zero. **The telephone and the internet belong OUT of it** — they do not scale with the size of the workspace, so they are deducted at their own business-use percentage, which she set at **80%** for the internet. ⚠️ **The telephone percentage is still open**, and so are the worksheet's blanks (HOA, water/sewer/trash, cleaning, repairs) and **mileage, which has never once been asked for.**

- ✅ **HER 2025 INCOME IS SETTLED: consulting services, self-employed, reported on a Schedule C** _(Lilian, 2026-08-18)_. **This is the fact the whole return was waiting on**, and it changes the shape of it — self-employment income is **earned income**, which is what the earned income credit and the additional child tax credit require, and it is what makes the home-office worksheet a deduction rather than a curiosity. ⚠️ **It also brings self-employment tax**, which the standard deduction does not touch. The figures are in the working paper. _(What follows is the history of how it was open, kept because the next client will look the same.)_ ⓘ The organizer said none, and Lilian said that was wrong: The organizer answers **"None of the above"** to sources of income. On the **2024 joint return** the Uber Schedule C and the K-1 are unambiguously **her ex-husband's** (both forms name him), but **the return does not say whose the single W-2 was** — only the firm's own filename in Drive labels it as his. So "her 2024 income was nil" is **an inference, not something the return establishes**. On **2026-08-17 Lilian stated the "no income" reading is incorrect and that the information is in one of the documents she supplied.** ⚠️ **It was not found there.** All four were read in full that day (see §6) and none carries an income figure. **Do not prepare on the organizer's answer, and do not assume nil** — this is the open question at the top of §6.
  🔑 **And there is now evidence pointing the same way.** On **2026-08-14** Julia passed on a **home-office worksheet** from the client — floor area, workspace area, rent, electricity and internet for **September–December 2025** — together with the year's telephone cost. **Nobody collects square footage and utilities for a taxpayer with no business.** ⚠️ **It cannot be used until the income is known**, because §280A(c)(5) caps a home-office deduction at the business's gross income less its other expenses; and the two datasets disagree about timing — the **workspace runs four months, the telephone twelve**. Figures are in the working paper (`projects/tax-returns/liliia-hlebova-kozlovska/2025-form-1040.md`), never here.
- 🟡 **2025 IS A SEPARATE-RETURN YEAR, AND THE FILING STATUS IS HEAD OF HOUSEHOLD — two of the three tests settled** _(Lilian, 2026-08-18)_. She was **unmarried at 31 December 2025** ✅ and the youngest daughter lived with her all year ✅. ⚠️ **The third test — paying more than half the cost of keeping up a home — is measured over the WHOLE year, and only her own tenancy from September is documented**; if the household shared a home until the separation, only one of them was keeping it up. ⓘ **It is worth nothing in money** (the alternative produces the same result) — **but it is what would be transcribed onto a filed return, so settle who paid for January–August.** **The organizer is unusable on this point and must be corrected before anything is prepared**: it still answers **"Married"**, and answers **"No"** to *"did you live apart from your spouse for the last 6 months of the tax year?"*. 2024 was a **joint** return; 2025 is her **first separate** one. 🔑 **Why this mattered far more than a bracket:** filing status is the **premium-tax-credit eligibility gate** — a married-filing-separately return **cannot take the credit at all** — so the year-end position decided whether a large advance credit was repayable. ⓘ The precise timing sits in the working paper, not on this page. ⚠️ **Naming the marital circumstance here is still not settled** — see the open item in §6.
- 🔴 **SHE HAS NO CONNECTION TO KOLO FLORIDA INC — so none of the 2024 carryovers are hers.** _(Lilian, 2026-08-17, and the papers agree: the 2024 Form 7203 names **her ex-husband** as the shareholder.)_ The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and **both arose entirely from his** K-1 from [Kolo Florida Inc](./kolo-florida.md) and his Uber Schedule C. **Nothing carries forward onto her 2025 return.** ⚠️ **Record the decision on both returns rather than leaving it implicit** — taken by default on hers, the carryforward would be duplicated or lost.
- ⚠️ **"Organizer Status: Completed" is true and useless here.** The 2025 organizer reads **66/66** and is a completed PDF on file, yet several sections are part-answered (*General Dependent information* 1 of 6, *Address* 6 of 7, *Sources of income & Uploads* 2 of 3), one dependant's whole section is blank, and the marital status is wrong. **Treat the column as "the client pressed submit", never as "we can work this."**
- ⚠️ **She uploads documents to the wrong questions, and it is systematic enough to check every time.** On the 2025 organizer a **residential lease renewal and two photos** are attached to the question asking for her **driver's licence** — so the licence is, as far as the organizer shows, **not on file**. ✅ **And it cost the firm a real gap:** the file she attached to the **1095-A** question was opened on 2026-08-18 and is **an insurance member ID card**, not the form. Nobody would have caught that from the filename. **Open what is attached before recording that a document is in hand.**
- **Three dependants, all of them the couple's own children, all under 17 at the end of 2025.** All three were claimed on the **2024 joint** return for the child tax credit, each with twelve months in the home. On the 2025 organizer she declares **three** and completed only **two** — the **youngest** has an entirely blank section, and she is the dependant Lilian's June 2026 Double note flags as missing. **Their names are in Double, not here** (§2).
- **Nobody can claim HER as a dependent** _(Lilian, 2026-08-17)_ — the 2025 organizer answers **"Yes"** to that question and **the answer is wrong**; correct it to **No**. Lilian's instruction is that this was not the client's mistake; **why it reads "Yes" is still open** (§6), so do not re-ask the client and do not treat the organizer's answer as evidence of anything.
- **The household separated during 2025, and a document in the file places her in her own tenancy by September 2025.** ⓘ That dates a *policy*, not a move — it narrows the window rather than settling it, and it does not answer the 31-December question the filing status actually turns on. The document is in `JK Accounting Group > Others > 2025`.
- 🟠 **She HAS had employment income, from a firm client that has since closed — and the dates make this a LEAD on the open income question, not an explanation of its absence.** In **April 2024** Julia emailed her a **W-2 from [Megabai](./megabai.md)** — which is an **April-2024 delivery of a tax-year-2023 form**, so it says nothing about 2024 or 2025 by itself. Megabai's Florida reemployment-tax (payroll) account was wound down with a **requested** effective date at the end of Q3 2024, and ⚠️ **`megabai.md` records the last quarter actually filed as unsettled (Q2 vs Q3 2024)** — so payroll may have run later than assumed. **Check whether she was on that payroll in 2024, and whether anything replaced it in 2025**, before accepting any nil answer.
- **The household telephone account is in her name, and the firm holds its 2025 cost month by month** in the Double note *"2025 Tax return - info"*, with the carrier screenshots in `JK Accounting Group > Others > 2025`. ⚠️ **It is not deductible against nothing** — whether it belongs on any return depends entirely on the open income question.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-06-22 (Lilian)** — Double note *"2025 Tax return"* created, and a Double comment raised to Julia: information missing for one dependant — the youngest.
- **2026-06-27 (Lilian)** — Emailed Julia a five-point read on the 2025 return: no income source reported; the dependants split with her ex-husband needs deciding; the joint organizer left only **one** bank account so each of them now needs their own; a question about whether she changed her surname after the divorce; and a belief that the 1095-A had been forgotten this year. **Three of the five still stand** — the **1095-A arrived on 2026-08-18** and the **dependants split has been analysed** and is now a decision for the parents. ⚠️ The 1095-A one was recorded as closed on 2026-08-17 and **re-opened on 2026-08-18** when the attachment was actually opened, then closed for real the same day — see the log below.
- **2026-08-17 (Lilian)** — Double note *"2025 Tax return - info"* created, recording the household's 2025 telephone cost month by month. Four documents uploaded to `JK Accounting Group > Others > 2025`: `app LILIIA HLEBOVA-KOZLOVSKA.pdf`, `PC+Quote+-+PL+10+24 (11).pdf`, `IMG_3868.HEIC`, `IMG_3869.HEIC`.
- **2026-08-17 (Lilian)** — **Pre-return review run** (the [`organizer-review`](../../../.claude/skills/organizer-review/) skill). Sources read: this file (it did not exist — created by this review), Double notes, files, properties and tax project for her **and** for her ex-husband, Julia's Gmail, Google Drive, Ping, the **2025 organizer**, and the **2024 filed return** through [`tools/redact-doc/`](../../../tools/redact-doc/). Ping held nothing on this client; Drive held only empty folders in her name.
  - ⓘ **Method note, so the negative is not read as bigger than it is:** the Gmail sweep was by client and owner names and by both known addresses as `from:`/`to:`. It returned overwhelmingly **Kolo** correspondence with her ex-husband and **almost no direct correspondence with her**. That is a claim about those searches, not about the world.
  - ⓘ **A scope correction worth keeping:** `Tax Return Filed` holds two PDFs whose names differ only by a trailing **`_1`** — the plain one sits in the **2023** folder, the `_1` one in the **2024** folder. Same-looking names, **different years**. Only the **2024** one was opened, per the one-year rule. A session that matches on the name alone will open the wrong return; the folder path is the only thing that distinguishes them.
- **2026-08-17 (Lilian)** — Read the four `Others > 2025` documents in full, including eleven scanned pages the redactor could not extract. **They are two things, and neither is income:** two screenshots of her own mobile-carrier account (the substantiation for the telephone note), and one complete **renter's-insurance package** — application, primary-residence affirmation and payment coupon. Reported back to Lilian; the income question stays open.

- **2026-08-17** — **Independent review of PR #225.** It blocked the first draft on two things and both were fixed here: the three children and the ex-husband were named in full on a file that auto-publishes to the Knowledge Hub, and a layer of circumstance detail (an insurance policy's dates, the telephone carrier, apartment numbers, a stated occupation, the refundable credits received) was carrying no work while going to a page that circulates. It also caught the reasoning error that mattered most — **the Megabai W-2 was an April-2024 delivery of a 2023 form**, so the first draft had used it to explain the absence of income when it is in fact a lead on it (§5).

- **2026-08-18 (Lilian)** — **Searched for the 2025 Form 1095-A at her request, and established it is not on file.** Searched: **Double** (every file in her library and her ex-husband's, folder by folder), **Google Drive** (files titled `1095`, plus a folder-by-folder walk of both household client folders and every subfolder — Drive turned out to be an exact mirror of Double here), and **Julia's Gmail** (the term `1095`; both household addresses as `from:`/`to:`; everything naming either surname since 2026-01-01). **What those searches produced was the 2024 Form 1095-A and nothing for 2025** — a statement about those searches, not proof the document does not exist anywhere. ⚠️ **The file attached to the organizer's 1095-A question turned out to be a health-insurance member ID card** — which the review of 2026-08-17 had flagged as unconfirmed, and is now settled. 🔑 **The card does give us the carrier**, a Marketplace insurer, so the form downloads from Healthcare.gov or that carrier's member portal and the client can be told exactly where to get it.
  ⓘ **How it was identified, because it matters for the next one:** the file is a **scan with no text layer**, so [`redact-doc`](../../../tools/redact-doc/) correctly refused it. Lilian instructed the session to open it anyway, and it was read by rasterising the pages and **looking at them** — a route with **no redaction whatever**.
- **2026-08-18 (Lilian)** — Three things settled on her ex-husband's side that bear on hers: **no Uber activity in 2025**; **the joint organizer's sources-of-income answer is an error**, not a fact about either of them; and his 2025 income is the **company K-1** from the 1120-S just completed. She also ruled that the **2025 Form 4868 is not to be opened** — the information is not in it.

- **2026-08-18 (Lilian, later the same day)** — **The return became computable, and three of the session's own statements were corrected.**
  - 🟡 **Filing status: head of household, on two of the three tests** — she was **unmarried at 31 December 2025** and the youngest daughter lived with her all year. ⚠️ **The cost-of-keeping-up-a-home test is annual and the months before the separation are unestablished on both sides** _(raised in review, 2026-08-19)_. **Her ex-husband is separately head of household** on his own two children, and **he paid his home from his savings**, which is what Pub 501 Worksheet 1 asks (*what you paid*, not where the money was earned).
  - 🔴 **CORRECTED — the youngest daughter IS covered on the Marketplace policy.** The session had reported her as *not* on it, having read the page that lists five covered people and counted. **Form 1095-A Part II holds only five names; a sixth goes on a continuation page** whose Part III is blank. **Lilian caught it with the paper form in front of her.** ⚠️ The redactor's own output had warned that pages were only partly extracted and that *an absence there is not evidence* — the warning was printed and not followed. **No figure changed**; the annual totals already covered everyone.
  - ✅ **The dependants question was analysed at Lilian's request**, including a hypothetical she posed to understand how the credits behave. **The finding: moving a child's RESIDENCE and moving a child's CLAIM are two different levers worth very different money** — the earned income credit follows residence and cannot be released at all, while a Form 8332 moves only the child tax credit. And the 8332's reach is short: **one release reaches her Schedule 8812 ceiling, so a second is worth nothing.**
  - ✅ **The Form 1095-A is now filed in Double** _(Lilian)_.
  - ⓘ **A correction to how the firm asked about the adult daughter.** The session had framed her already-filed return as something to investigate; Lilian's answer — *"no entiendo por qué necesitas la información de [la hija mayor]… es una persona adulta que hizo su declaración de impuestos por su cuenta"* — is the right one. **The firm needs exactly one number from her: the allocation percentage her return claimed.** Nothing else about another adult's return is this engagement's business.

- **2026-08-19 (Lilian)** — **The expense side was reworked, and a document nobody had opened changed two positions.**
  - 🔑 **Her rent is a SHARE, and the lease is in both names.** The lease on her apartment runs from September 2025 and **names her and her ex-husband as tenants** — but **they lived apart and he has a different address** _(Lilian's ruling)_. **Only her share enters the home-office computation.** ⚠️ **A lease in two names is not evidence that two people lived together** — read alone it would have taken head of household away from one of them.
  - ✅ **The renter's insurance is hers, is for that apartment, and IS a home-office cost.** Pub 587 lists insurance on the home among the indirect expenses. The client's own worksheet had reported it as **zero** while the firm held the policy.
  - 🔑 **The telephone and the internet came OUT of the home-office worksheet.** They do not depend on the **size** of the workspace, so they are deducted directly at their **own business-use percentage** — Lilian set the internet at **80%**. ⚠️ **The telephone percentage is still hers to set.**
  - ✅ **One phone, one plan change — not two lines.** Corrects this file's earlier reading of the carrier screenshots.
  - 🔴 **A date this file had been repeating does not exist in any document.** "Her own tenancy from 12 September" appears in no document the firm has read: the insurance policy starts in late **August** and the lease on **1 September**, and those are the two dated documents on file. Struck.
  - ⚠️ **Her `Client uploaded documents` folder holds identity documents.** One file opened in this sweep turned out to be a **driver's licence**; it was deleted immediately and nothing from it was recorded. **Expect them in that folder and do not record them.**
  - 🟠 **Still never asked for: MILEAGE.** For someone self-employed this is routinely the second-largest deduction after the home office, and nothing was found in Double, Drive or Julia's Gmail in the searches of 2026-08-18 and 2026-08-19.

### Tax year 2025 — the review

- **What gates the return.** **(1)** The **Form 8962 / Marketplace allocation percentage**, which cannot be settled without her ex-husband and their adult daughter and which blocks e-filing outright — the only input either return is still waiting on. ⓘ **(2) Her 2025 income is no longer a gate** _(settled 2026-08-18: consulting services, Schedule C — §5)_; what remains open is the **substantiation** for it.
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; the household's income was a single W-2, an **Uber Schedule C in her ex-husband's name with no expenses claimed at all**, and a **K-1 from Kolo Florida Inc, also his**; three dependants, all claimed for the child tax credit; refundable **earned income credit** and **additional child tax credit** both claimed — **both require earned income**, and the only earned income the return identifies by name is his; **Marketplace coverage reconciled on Form 8962**; a **net operating loss** and a **QBI loss carryforward** generated, both his; **no estimated payments**; **no state return** (Florida). ⚠️ **What the return does NOT establish is whose the W-2 was** — see §5.
- **What changed in the organizer, 2024 → 2025.** Marital status still answered *Married* (wrong). Digital assets moved from **No** to **Yes** — and because "no income" closed that branch, **no detail was ever requested**, so a disposal may be unreported. Coverage still Marketplace. Direct deposit moved from a savings account to a checking account at a different bank, with the "name on the account" field filled in with the product name rather than a name.
- **Questions put to the client:** **none yet — nothing has been sent.** The list was drafted 2026-08-17 and held pending the income answer and the dependants decision. Drafted, in order: how things stood at home during 2025 and on 31 December; who lived in the home and for how many months; whether she had any income in 2025; what the telephone and renter's-insurance costs relate to; whether the Marketplace policy was shared with her ex-husband in 2025; how the two of them agreed to split it; and what the digital-asset transaction actually was. A request for the youngest dependant's details is held back with the dependants analysis.
- **Decided:** she carries **no** NOL and **no** QBI carryforward (Lilian). **Nobody can claim her as a dependent**; the organizer's "Yes" is corrected to **No** (Lilian). **Analysed 2026-08-18:** the dependants split — residence settled, and the claim recommended as **ONE Form 8332**; it is now the parents' decision, not the firm's question.
- ⚠️ **REVERSED on 2026-08-18, and the reversal is the lesson.** The review of 2026-08-17 recorded the 1095-A as *"not missing — a file **is** attached to that question"*, and hedged it: *"it still has to be opened and confirmed, because this client attaches documents to the wrong questions."* **Opening it settled it the other way — it is an insurance member ID card.** So Lilian's June-2026 point 5 stands after all: the 1095-A was never sent. **A filename sitting against the right question is not the document**, and the only reason this never became a false "we already have it" is that the claim was written with its check attached to it.

### Outstanding items (CI-only — never in the SOP)

- 🟡 **Her filing status — head of household, two tests of three.** Unmarried at 31 December 2025 ✅ and the youngest daughter resident all year ✅ _(Lilian, 2026-08-18)_; **the cost-of-keeping-up-a-home test runs over the whole year and January–August is unestablished for both parents.** ✅ **The married-filing-separately branch, which would have barred the premium tax credit outright, IS closed** — she is simply unmarried. ⓘ Worth $0 in money; it is an accuracy question.
- 🟠 **The Form 8962 allocation percentage, agreed across the three returns.** ⚠️ **Her adult daughter has already filed** — the firm needs **one number from her: the percentage her return claimed.** A split following who was enrolled, by tax family, was proposed on 2026-08-18. ⓘ **The form itself is in hand and filed in Double**; this is the last input either return is waiting on.
- 🟠 **The dependants split — analysed 2026-08-18, now a decision for the two parents, not a question for the firm.** Residence is settled and is **not** transferable. **The recommendation is ONE Form 8332 from her ex-husband, for one of his two children**: it adds to her refundable child credit, **costs him nothing at all** (his return is identical whether he claims two children, one, or none — he has no earned income and no tax), and **he keeps head of household even after signing**, because the parent the children live with keeps it _(Pub 501 Table 4 note 2)_. **A second release adds nothing** — her Schedule 8812 ceiling is already reached. **Put one question to them, not three.**
- 🟠 **Where she lived January–August 2025, and what it cost.** Only her own tenancy from September is documented, and head of household is tested over the **whole year**.
- Why the organizer reads **"Yes"** to *"can anyone else claim you as a dependent?"* when the answer is No — Lilian says it was not the client's error. Recorded so the correction is traceable; **not** to be put to the client.
- Whether she changed her surname (Lilian's June 2026 question, still open) — it decides the name on the return and on the e-file.
- Her own bank details for a refund. The joint organizer carried one household account; each of them now needs their own, and the "name on the account" field on hers is unusable as answered.
- Her **driver's licence** is not attached where the organizer asked for it.
- ⚖️ **For Lilian to rule: may this page name the marital circumstance at all?** [`double-mcp`](../../../.claude/skills/double-mcp/) §2.2 lists **"living apart from a spouse"** and a divorce among the facts she has **not** ruled on for a file that publishes to the Knowledge Hub, and its standing instruction is to write the *consequence* and ask. The counter-argument, and the reason the word is currently kept: §2.2 names **"the filing status"** among the tax facts a client file **may** carry, and here the filing status *is* the fact. **Raised by the independent review of PR #225, 2026-08-17.**
- **Feed two facts back into [`kolo-florida.md`](./kolo-florida.md)** — that a **2024 Form 7203 exists on the shareholder's personal 1040** (that file lists the 7203 as an open question, looking at the 1120-S), and a return cross-link to this file. ⓘ **Deliberately not done in PR #225:** another session was rewriting `kolo-florida.md` the same day, and a parallel edit there is how two sessions write contradictory guidance.
- ✅ ~~Which document carries her 2025 income?~~ **Answered 2026-08-18: consulting services, self-employed** _(Lilian)_. ⚠️ **But nothing on file substantiates it** — no 1099 and no other income document was found in Double, Drive or Julia's Gmail that day. **Get the substantiation onto the file.** ⓘ **The `Contract Labor` lead was NOT the answer** — that payment is separate and much smaller, and **it stays open**: if the payee is her, it is *additional* Schedule C receipts on top. Lilian stated on 2026-08-17 that the "no income" reading is wrong and that the information is in one of the documents she supplied; all four were read and none carries an income figure. **Asked, unanswered.** Nothing should be prepared until this is settled.
- 🟡 ~~Head of household for both parents.~~ **Two tests of three, for both, 2026-08-18.** Each parent has **their own** qualifying child — the youngest with her all year, the two middle daughters with their father all year — which is what the *"the same child cannot serve both parents"* rule requires; both were unmarried at year end. ⚠️ **The cost test is the open half** — it is annual, and the months before the separation are unaccounted for on both sides. ⓘ **The reasoning is kept in the working papers because it is the reusable part**, in particular that two people cannot each pay more than half the cost of the *same* home, and that "considered unmarried" for head of household is **not** the same test as the separated-spouse relief the earned income credit uses.
- ⛔ ~~Read `2025 4868 Ext.pdf`.~~ **Ruled out by Lilian, 2026-08-18: the information is not in it.** Recorded so no future session spends time on it — an extension form is the obvious place to look for a 2025 estimate, and it is empty here.
- ✅ ~~Open the file attached to the organizer's 1095-A question and confirm it is the 1095-A.~~ **Done 2026-08-18 — it is an insurance member ID card, not the form.**
- ✅ ~~Her ex-husband has no Client Intelligence file.~~ **Created 2026-08-18: [`mykola-kozlovskyi.md`](./mykola-kozlovskyi.md).**

### Information still needed

- [ ] The **allocation percentage** her adult daughter's already-filed return claimed — one number, and the three shares must cover the policy exactly between them
- [ ] Whether her ex-husband will sign **one Form 8332**
- [ ] **Substantiation for her 2025 income** — no 1099 or other income document is on file
- [ ] Who the company's 2025 `Contract Labor` payee was — **if it is her, it is additional Schedule C receipts**
- [ ] The **business-use percentage of her phone** — it is one phone with a plan change, not two lines
- [ ] The home-office **blanks** (HOA, water/sewer/trash, cleaning, repairs), and evidence the workspace is used **regularly AND exclusively** for the business
- [ ] **Where she lived January–August 2025 and what it cost** — only her own tenancy from September is documented, while the telephone runs all twelve months
- [ ] The **digital-asset transaction** of 2025 — what it was, and the platform statement
- [ ] The **youngest dependant's** details for 2025
- [ ] Her own **bank account** for the refund
- [ ] Her **driver's licence**
- [ ] Whether the surname changed
- [ ] Whether she was on Megabai's payroll in 2024, and what replaced it in 2025 (§5)
- [x] ~~Her marital position on 31 December 2025~~ — **unmarried**; head of household
- [x] ~~Her 2025 income~~ — consulting services, Schedule C
- [x] ~~The 2025 Form 1095-A itself~~ — in hand and filed in Double

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710644](https://app.doublehq.com/close?cid=710644)
- **Double 2025 tax project:** [cid 710644 / project 219331](https://app.doublehq.com/tax-return?cid=710644&projectId=219331)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [Julia's copy](https://drive.google.com/drive/folders/1Rknuy4zygVIynqO0b3TMFYyIHgs4XQNv) · [Maria's copy](https://drive.google.com/drive/folders/1GvrzbbyIgSKf20VauBGRJGi7jqZKQkaW)
- **Her 2025 return working paper — where every figure lives:** `projects/tax-returns/liliia-hlebova-kozlovska/2025-form-1040.md`. **The only place the firm keeps return figures**, and deliberately not published — written as a path, not a link, because this page IS published and a link there resolves to nothing.
- **Related clients:** [`mykola-kozlovskyi.md`](./mykola-kozlovskyi.md) (her ex-husband — their 2025 returns share two decisions) · [`kolo-florida.md`](./kolo-florida.md) (his S corporation — **she has no interest in it**) · [`megabai.md`](./megabai.md) (closed; the source of a past W-2 of hers)
- **Related SOPs:** none yet
