# LILIIA HLEBOVA KOZLOVSKA

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-18

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
- **Industry / what they do:** n/a — individual taxpayer, no business. What she does for a living is bound up with the open income question in §6; do not record it as settled from the organizer
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

- 🔴 **2025 IS A SEPARATE-RETURN YEAR, AND THE ORGANIZER'S FILING STATUS IS WRONG — correct it before anything is prepared.** _(Lilian, 2026-08-17: the marriage ended, so the 2025 status is **divorced**.)_ The organizer still answers **"Married"**, and answers **"No"** to *"did you live apart from your spouse for the last 6 months of the tax year?"* — the answer a Head-of-Household branch would turn on. **Both are unusable as filed.** 2024 was a **joint** return; 2025 is her **first separate** one. **The date is missing and it is a prerequisite**, because the status is fixed by her position at **31 December 2025**: not found in the sources searched — Double notes, files and properties for her and for her ex-husband, Julia's Gmail, Google Drive, Ping, the 2025 organizer and the 2024 return. ⓘ The earliest internal record is a note by Maria on the firm's bookkeeping client list, **2026-05-29**. ⚠️ **Naming the marital circumstance on this page is not settled** — see the open item in §6.
- 🔴 **SHE HAS NO CONNECTION TO KOLO FLORIDA INC — so none of the 2024 carryovers are hers.** _(Lilian, 2026-08-17, and the papers agree: the 2024 Form 7203 names **her ex-husband** as the shareholder.)_ The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and **both arose entirely from his** K-1 from [Kolo Florida Inc](./kolo-florida.md) and his Uber Schedule C. **Nothing carries forward onto her 2025 return.** ⚠️ **Record the decision on both returns rather than leaving it implicit** — taken by default on hers, the carryforward would be duplicated or lost.
- 🔴 **THE MARKETPLACE POLICY IS WHAT GATES THIS RETURN, and it cannot be settled on her side alone.** She had **Marketplace coverage** in both 2024 and 2025, reconciled on **Form 8962**, and the return is **rejected without it**. 🔴 **The 2025 Form 1095-A is NOT on file** — established 2026-08-18, see §6. In 2024 the household was covered on **one policy for five people** and answered "no allocation". Filing separately, that route is gone: if she and her ex-husband shared a policy in 2025, **Part IV requires an allocation percentage they both agree on**, and **both returns must carry the same figure**. The dependants split changes the tax family size, which changes the calculation — so **the 8962 and the dependants decision are one decision, not two**.
- 🔴 **HER 2025 INCOME IS UNRESOLVED — the organizer says none, and Lilian says that is wrong.** The organizer answers **"None of the above"** to sources of income. On the **2024 joint return** the Uber Schedule C and the K-1 are unambiguously **her ex-husband's** (both forms name him), but **the return does not say whose the single W-2 was** — only the firm's own filename in Drive labels it as his. So "her 2024 income was nil" is **an inference, not something the return establishes**. On **2026-08-17 Lilian stated the "no income" reading is incorrect and that the information is in one of the documents she supplied.** ⚠️ **It was not found there.** All four were read in full that day (see §6) and none carries an income figure. **Do not prepare on the organizer's answer, and do not assume nil** — this is the open question at the top of §6.
  🔑 **And there is now evidence pointing the same way.** On **2026-08-14** Julia passed on a **home-office worksheet** from the client — floor area, workspace area, rent, electricity and internet for **September–December 2025** — together with the year's telephone cost. **Nobody collects square footage and utilities for a taxpayer with no business.** ⚠️ **It cannot be used until the income is known**, because §280A(c)(5) caps a home-office deduction at the business's gross income less its other expenses; and the two datasets disagree about timing — the **workspace runs four months, the telephone twelve**. Figures are in the working paper (`projects/tax-returns/liliia-hlebova-kozlovska/2025-form-1040.md`), never here.
- ⚠️ **"Organizer Status: Completed" is true and useless here.** The 2025 organizer reads **66/66** and is a completed PDF on file, yet several sections are part-answered (*General Dependent information* 1 of 6, *Address* 6 of 7, *Sources of income & Uploads* 2 of 3), one dependant's whole section is blank, and the marital status is wrong. **Treat the column as "the client pressed submit", never as "we can work this."**
- ⚠️ **She uploads documents to the wrong questions, and it is systematic enough to check every time.** On the 2025 organizer a **residential lease renewal and two photos** are attached to the question asking for her **driver's licence** — so the licence is, as far as the organizer shows, **not on file**. ✅ **And it cost the firm a real gap:** the file she attached to the **1095-A** question was opened on 2026-08-18 and is **an insurance member ID card**, not the form. Nobody would have caught that from the filename. **Open what is attached before recording that a document is in hand.**
- **Three dependants, all of them the couple's own children, all under 17 at the end of 2025.** All three were claimed on the **2024 joint** return for the child tax credit, each with twelve months in the home. On the 2025 organizer she declares **three** and completed only **two** — the **youngest** has an entirely blank section, and she is the dependant Lilian's June 2026 Double note flags as missing. **Their names are in Double, not here** (§2).
- **IF her 2025 earned income really is nil, dependants are worth nothing to her directly — their value on this return is then the 8962.** ⚠️ **That premise is exactly what §6's top open item disputes**, so this bullet is conditional, not a conclusion. The refundable credits the household received for 2024 (earned income credit and the additional child tax credit) both **require earned income**, and the only earned income the 2024 return identifies by name is her ex-husband's. On that premise a child moved onto her return produces **no refundable credit**; what it does change is the **tax family size on Form 8962**. That is the axis the dependants analysis has to run on. _(Deferred by Lilian, 2026-08-17 — see §6.)_
- **Nobody can claim HER as a dependent** _(Lilian, 2026-08-17)_ — the 2025 organizer answers **"Yes"** to that question and **the answer is wrong**; correct it to **No**. Lilian's instruction is that this was not the client's mistake; **why it reads "Yes" is still open** (§6), so do not re-ask the client and do not treat the organizer's answer as evidence of anything.
- **The household separated during 2025, and a document in the file places her in her own tenancy by September 2025.** ⓘ That dates a *policy*, not a move — it narrows the window rather than settling it, and it does not answer the 31-December question the filing status actually turns on. The document is in `JK Accounting Group > Others > 2025`.
- 🟠 **She HAS had employment income, from a firm client that has since closed — and the dates make this a LEAD on the open income question, not an explanation of its absence.** In **April 2024** Julia emailed her a **W-2 from [Megabai](./megabai.md)** — which is an **April-2024 delivery of a tax-year-2023 form**, so it says nothing about 2024 or 2025 by itself. Megabai's Florida reemployment-tax (payroll) account was wound down with a **requested** effective date at the end of Q3 2024, and ⚠️ **`megabai.md` records the last quarter actually filed as unsettled (Q2 vs Q3 2024)** — so payroll may have run later than assumed. **Check whether she was on that payroll in 2024, and whether anything replaced it in 2025**, before accepting any nil answer.
- **The household telephone account is in her name, and the firm holds its 2025 cost month by month** in the Double note *"2025 Tax return - info"*, with the carrier screenshots in `JK Accounting Group > Others > 2025`. ⚠️ **It is not deductible against nothing** — whether it belongs on any return depends entirely on the open income question.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-06-22 (Lilian)** — Double note *"2025 Tax return"* created, and a Double comment raised to Julia: information missing for one dependant — the youngest.
- **2026-06-27 (Lilian)** — Emailed Julia a five-point read on the 2025 return: no income source reported; the dependants split with her ex-husband needs deciding; the joint organizer left only **one** bank account so each of them now needs their own; a question about whether she changed her surname after the divorce; and a belief that the 1095-A had been forgotten this year. **All five still stand.** ⚠️ The 1095-A one was recorded as closed on 2026-08-17 and **re-opened on 2026-08-18** when the attachment was actually opened — see the log below.
- **2026-08-17 (Lilian)** — Double note *"2025 Tax return - info"* created, recording the household's 2025 telephone cost month by month. Four documents uploaded to `JK Accounting Group > Others > 2025`: `app LILIIA HLEBOVA-KOZLOVSKA.pdf`, `PC+Quote+-+PL+10+24 (11).pdf`, `IMG_3868.HEIC`, `IMG_3869.HEIC`.
- **2026-08-17 (Lilian)** — **Pre-return review run** (the [`organizer-review`](../../../.claude/skills/organizer-review/) skill). Sources read: this file (it did not exist — created by this review), Double notes, files, properties and tax project for her **and** for her ex-husband, Julia's Gmail, Google Drive, Ping, the **2025 organizer**, and the **2024 filed return** through [`tools/redact-doc/`](../../../tools/redact-doc/). Ping held nothing on this client; Drive held only empty folders in her name.
  - ⓘ **Method note, so the negative is not read as bigger than it is:** the Gmail sweep was by client and owner names and by both known addresses as `from:`/`to:`. It returned overwhelmingly **Kolo** correspondence with her ex-husband and **almost no direct correspondence with her**. That is a claim about those searches, not about the world.
  - ⓘ **A scope correction worth keeping:** `Tax Return Filed` holds two PDFs whose names differ only by a trailing **`_1`** — the plain one sits in the **2023** folder, the `_1` one in the **2024** folder. Same-looking names, **different years**. Only the **2024** one was opened, per the one-year rule. A session that matches on the name alone will open the wrong return; the folder path is the only thing that distinguishes them.
- **2026-08-17 (Lilian)** — Read the four `Others > 2025` documents in full, including eleven scanned pages the redactor could not extract. **They are two things, and neither is income:** two screenshots of her own mobile-carrier account (the substantiation for the telephone note), and one complete **renter's-insurance package** — application, primary-residence affirmation and payment coupon. Reported back to Lilian; the income question stays open.

- **2026-08-17** — **Independent review of PR #225.** It blocked the first draft on two things and both were fixed here: the three children and the ex-husband were named in full on a file that auto-publishes to the Knowledge Hub, and a layer of circumstance detail (an insurance policy's dates, the telephone carrier, apartment numbers, a stated occupation, the refundable credits received) was carrying no work while going to a page that circulates. It also caught the reasoning error that mattered most — **the Megabai W-2 was an April-2024 delivery of a 2023 form**, so the first draft had used it to explain the absence of income when it is in fact a lead on it (§5).

- **2026-08-18 (Lilian)** — **Searched for the 2025 Form 1095-A at her request, and established it is not on file.** Searched: **Double** (every file in her library and her ex-husband's, folder by folder), **Google Drive** (files titled `1095`, plus a folder-by-folder walk of both household client folders and every subfolder — Drive turned out to be an exact mirror of Double here), and **Julia's Gmail** (the term `1095`; both household addresses as `from:`/`to:`; everything naming either surname since 2026-01-01). **What those searches produced was the 2024 Form 1095-A and nothing for 2025** — a statement about those searches, not proof the document does not exist anywhere. ⚠️ **The file attached to the organizer's 1095-A question turned out to be a health-insurance member ID card** — which the review of 2026-08-17 had flagged as unconfirmed, and is now settled. 🔑 **The card does give us the carrier**, a Marketplace insurer, so the form downloads from Healthcare.gov or that carrier's member portal and the client can be told exactly where to get it.
  ⓘ **How it was identified, because it matters for the next one:** the file is a **scan with no text layer**, so [`redact-doc`](../../../tools/redact-doc/) correctly refused it. Lilian instructed the session to open it anyway, and it was read by rasterising the pages and **looking at them** — a route with **no redaction whatever**.
- **2026-08-18 (Lilian)** — Three things settled on her ex-husband's side that bear on hers: **no Uber activity in 2025**; **the joint organizer's sources-of-income answer is an error**, not a fact about either of them; and his 2025 income is the **company K-1** from the 1120-S just completed. She also ruled that the **2025 Form 4868 is not to be opened** — the information is not in it.

### Tax year 2025 — the review

- **What gates the return.** Two things. **(1)** The **Form 8962 / Marketplace allocation**, which cannot be settled without her ex-husband and which blocks e-filing outright. **(2)** Her **2025 income**, which the organizer reports as nil and which Lilian says is wrong (§5).
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; the household's income was a single W-2, an **Uber Schedule C in her ex-husband's name with no expenses claimed at all**, and a **K-1 from Kolo Florida Inc, also his**; three dependants, all claimed for the child tax credit; refundable **earned income credit** and **additional child tax credit** both claimed — **both require earned income**, and the only earned income the return identifies by name is his; **Marketplace coverage reconciled on Form 8962**; a **net operating loss** and a **QBI loss carryforward** generated, both his; **no estimated payments**; **no state return** (Florida). ⚠️ **What the return does NOT establish is whose the W-2 was** — see §5.
- **What changed in the organizer, 2024 → 2025.** Marital status still answered *Married* (wrong). Digital assets moved from **No** to **Yes** — and because "no income" closed that branch, **no detail was ever requested**, so a disposal may be unreported. Coverage still Marketplace. Direct deposit moved from a savings account to a checking account at a different bank, with the "name on the account" field filled in with the product name rather than a name.
- **Questions put to the client:** **none yet — nothing has been sent.** The list was drafted 2026-08-17 and held pending the income answer and the dependants decision. Drafted, in order: how things stood at home during 2025 and on 31 December; who lived in the home and for how many months; whether she had any income in 2025; what the telephone and renter's-insurance costs relate to; whether the Marketplace policy was shared with her ex-husband in 2025; how the two of them agreed to split it; and what the digital-asset transaction actually was. A request for the youngest dependant's details is held back with the dependants analysis.
- **Decided:** she carries **no** NOL and **no** QBI carryforward (Lilian). **Nobody can claim her as a dependent**; the organizer's "Yes" is corrected to **No** (Lilian). **Not decided:** the dependants split, deliberately deferred by Lilian to be analysed on its own.
- ⚠️ **REVERSED on 2026-08-18, and the reversal is the lesson.** The review of 2026-08-17 recorded the 1095-A as *"not missing — a file **is** attached to that question"*, and hedged it: *"it still has to be opened and confirmed, because this client attaches documents to the wrong questions."* **Opening it settled it the other way — it is an insurance member ID card.** So Lilian's June-2026 point 5 stands after all: the 1095-A was never sent. **A filename sitting against the right question is not the document**, and the only reason this never became a false "we already have it" is that the claim was written with its check attached to it.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **The 2025 Form 1095-A is not on file, and it blocks e-filing.** Not found in the searches run on 2026-08-18 — Double, Google Drive and Julia's Gmail; the log entry names each one. **Ask the client to download it** from Healthcare.gov or the carrier's member portal; the carrier is named on the member card already on file.
- 🔴 **Which document carries her 2025 income?** 🔑 **Start with the company's 2025 `Contract Labor` payee** — an amount over the 1099 threshold, paid in three Zelle transfers to an individual on the shareholder side. **If it is her, the question is answered.** Lilian stated on 2026-08-17 that the "no income" reading is wrong and that the information is in one of the documents she supplied; all four were read and none carries an income figure. **Asked, unanswered.** Nothing should be prepared until this is settled.
- 🔴 **The dependants split with her ex-husband** — who claims which child, decided jointly with the Form 8962 allocation. **Deferred by Lilian on 2026-08-17** to be analysed separately. 🔑 **What settles it is one table: each child, and the nights spent in each parent's home in 2025.** The same table decides head of household for both of them. ⓘ **The lever most people miss:** head of household, the earned income credit and the dependent-care credit follow **residence and cannot be released**; only the **child tax credit and the dependency** can be handed to the other parent, on a signed **Form 8332**. So the custodial parent can keep HOH and still give the child tax credit away.
- 🟠 **Head of household is NOT automatic for her, and it is undecided.** Three tests: unmarried at year end (the **divorce date is unknown**); **more than half the cost of keeping up a home for the year** (only **September–December** is documented, and **with no established income, who actually paid the rent is a live question** — Pub 501's worksheet splits *the amount you paid* from *the amount others paid*, so money she receives and spends counts as hers, while amounts another person pays **directly** do not); and a qualifying child in the home **more than half the year** (the organizer says all three lived with her **12 months**, which cannot sit alongside her ex-husband living with a daughter most of the year). 🔴 **And HOH is not a standard-deduction question here — filing status is the PREMIUM-TAX-CREDIT gate.** If the marriage had not ended by 31 December, **married filing separately cannot take the credit at all**. The full analysis is in his working paper (`projects/tax-returns/mykola-kozlovskyi/2025-form-1040.md`).
- 🟠 **Where she lived January–August 2025, and what it cost.** Only her own tenancy from September is documented, and head of household is tested over the **whole year**.
- Why the organizer reads **"Yes"** to *"can anyone else claim you as a dependent?"* when the answer is No — Lilian says it was not the client's error. Recorded so the correction is traceable; **not** to be put to the client.
- Whether she changed her surname (Lilian's June 2026 question, still open) — it decides the name on the return and on the e-file.
- Her own bank details for a refund. The joint organizer carried one household account; each of them now needs their own, and the "name on the account" field on hers is unusable as answered.
- Her **driver's licence** is not attached where the organizer asked for it.
- ⚖️ **For Lilian to rule: may this page name the marital circumstance at all?** [`double-mcp`](../../../.claude/skills/double-mcp/) §2.2 lists **"living apart from a spouse"** and a divorce among the facts she has **not** ruled on for a file that publishes to the Knowledge Hub, and its standing instruction is to write the *consequence* and ask. The counter-argument, and the reason the word is currently kept: §2.2 names **"the filing status"** among the tax facts a client file **may** carry, and here the filing status *is* the fact. **Raised by the independent review of PR #225, 2026-08-17.**
- **Feed two facts back into [`kolo-florida.md`](./kolo-florida.md)** — that a **2024 Form 7203 exists on the shareholder's personal 1040** (that file lists the 7203 as an open question, looking at the 1120-S), and a return cross-link to this file. ⓘ **Deliberately not done in PR #225:** another session was rewriting `kolo-florida.md` the same day, and a parallel edit there is how two sessions write contradictory guidance.
- ⛔ ~~Read `2025 4868 Ext.pdf`.~~ **Ruled out by Lilian, 2026-08-18: the information is not in it.** Recorded so no future session spends time on it — an extension form is the obvious place to look for a 2025 estimate, and it is empty here.
- ✅ ~~Open the file attached to the organizer's 1095-A question and confirm it is the 1095-A.~~ **Done 2026-08-18 — it is an insurance member ID card, not the form.**
- ✅ ~~Her ex-husband has no Client Intelligence file.~~ **Created 2026-08-18: [`mykola-kozlovskyi.md`](./mykola-kozlovskyi.md).**

### Information still needed

- [ ] Her **marital position on 31 December 2025**, and the date it changed
- [ ] Her **2025 income** — the open question above
- [ ] **The 2025 Form 1095-A itself** — established 2026-08-18 as not on file
- [ ] Whether the 2025 Marketplace policy was shared with her ex-husband, and the **allocation percentage** both returns will carry
- [ ] The **digital-asset transaction** of 2025 — what it was, and the platform statement
- [ ] The **youngest dependant's** details for 2025 (held with the dependants analysis)
- [ ] Her own **bank account** for the refund
- [ ] Her **driver's licence**
- [ ] Whether the surname changed
- [ ] Whether she was on Megabai's payroll in 2024, and what replaced it in 2025 (§5)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710644](https://app.doublehq.com/close?cid=710644)
- **Double 2025 tax project:** [cid 710644 / project 219331](https://app.doublehq.com/tax-return?cid=710644&projectId=219331)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [Julia's copy](https://drive.google.com/drive/folders/1Rknuy4zygVIynqO0b3TMFYyIHgs4XQNv) · [Maria's copy](https://drive.google.com/drive/folders/1GvrzbbyIgSKf20VauBGRJGi7jqZKQkaW)
- **Her 2025 return working paper — where every figure lives:** `projects/tax-returns/liliia-hlebova-kozlovska/2025-form-1040.md`. **The only place the firm keeps return figures**, and deliberately not published — written as a path, not a link, because this page IS published and a link there resolves to nothing.
- **Related clients:** [`mykola-kozlovskyi.md`](./mykola-kozlovskyi.md) (her ex-husband — their 2025 returns share two decisions) · [`kolo-florida.md`](./kolo-florida.md) (his S corporation — **she has no interest in it**) · [`megabai.md`](./megabai.md) (closed; the source of a past W-2 of hers)
- **Related SOPs:** none yet
