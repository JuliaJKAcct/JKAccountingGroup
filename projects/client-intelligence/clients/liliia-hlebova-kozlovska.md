# Liliia Hlebova Kozlovska

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-17

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
- **Entity type:** n/a — individual taxpayer. She holds **no interest in any company the firm serves** (see §5)
- **Home state:** Florida — **Sunny Isles Beach, Miami-Dade County** _(2025 organizer + 2024 filed return, 2026-08-17)_
- **Industry / what they do:** n/a. Occupation as she states it herself: **"Housewife"** on the 2025 organizer, **"other"** on a September-2025 insurance application _(2026-08-17)_
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
| Ex-husband — **his own separate Double client**, and the counterparty on every 2025 decision that has to match | [`Mykola Kozlovskyi`, cid 709838](https://app.doublehq.com/close?cid=709838) |

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
- **Return type(s) & deadlines:** 1040, calendar year. **2024 was filed jointly with Mykola Kozlovskyi**; **2025 is the first year she files separately** (§5).
- **Our role:** the firm prepares and files. Assigned staff: **Lilian**.
- **Process notes (→ future SOP):**
  - **2025 tax project:** [`2025 Taxes`, cid 710644 / project 219331](https://app.doublehq.com/tax-return?cid=710644&projectId=219331) — status `notStarted` as at 2026-08-17. The ex-husband's own 2025 project was already `inProgress` on the same date, so **his return is ahead of hers** and the shared decisions in §5 have to be settled before his is finalised.
  - **An extension exists for 2025** — a Form 4868 sits in both her and his Double file libraries. **Its contents have not been read**; whether it carries an estimated liability or a payment is open (§6).
  - Organizer status is hand-maintained by Lilian and reads **Completed** for 2025 — but see §5: "Completed" here does not mean workable.

### Licenses & other filings
- **Applies?** No.

## 5. Key facts & quirks

<!-- ORDER MATTERS: the client card renders only the FIRST FOUR bullets of this
     section. Keep live, consequential work at the top and let settled or
     historical items sink. See .claude/skills/client-intelligence/SKILL.md. -->

- 🔴 **SHE IS DIVORCED, AND THE 2025 ORGANIZER SAYS "MARRIED" — correct it before anything is prepared.** _(Lilian, 2026-08-17.)_ The organizer also answers **"No"** to *"did you live apart from your spouse for the last 6 months of the tax year?"*, which is the answer that would decide a Head-of-Household branch, so **both answers are unusable as filed**. 2024 was a **joint** return; 2025 is her **first separate** one. The **date of the divorce has not been established anywhere the firm can reach** — and the filing status turns on her position at **31 December 2025**, so that date is a prerequisite, not a detail. ⓘ The earliest internal record of the separation is a comment by Maria Zavarce on the firm's bookkeeping client list, **2026-05-29** ("New ex").
- 🔴 **SHE HAS NO CONNECTION TO KOLO FLORIDA INC — so none of the 2024 carryovers are hers.** _(Lilian, 2026-08-17, and the papers agree: the 2024 Form 7203 names **Mykola** as the shareholder.)_ The 2024 joint return generated a **net operating loss** and a **qualified-business-income loss carryforward**, and **both arose entirely from his** K-1 from [Kolo Florida Inc](./kolo-florida.md) and his Uber Schedule C. **Nothing carries forward onto her 2025 return.** ⚠️ **Record the decision on both returns rather than leaving it implicit** — taken by default on hers, the carryforward would be duplicated or lost.
- 🔴 **THE MARKETPLACE POLICY IS WHAT GATES THIS RETURN, and it cannot be settled on her side alone.** She had **Marketplace (government-subsidised) coverage** in both 2024 and 2025, reconciled on **Form 8962**, and the return is **rejected without it**. In 2024 the household was covered on **one policy for five people** and answered "no allocation". After the divorce that route is gone: if she and Mykola shared a policy in 2025, **Part IV requires an allocation percentage they both agree on**, and **both returns must carry the same figure**. The dependants split changes the tax family size, which changes the calculation — so **the 8962 and the dependants decision are one decision, not two**.
- 🔴 **HER 2025 INCOME IS UNRESOLVED — the organizer says none, and Lilian says that is wrong.** The organizer answers **"None of the above"** to sources of income, and her own income on the **2024 joint return was nil** (every income item there — the W-2 as the firm's own filename labels it, the Uber Schedule C, the K-1 — is Mykola's). On **2026-08-17 Lilian stated the "no income" reading is incorrect and that the information is in one of the documents she supplied.** ⚠️ **It was not found there.** All four were read in full that day (see §6) and none carries an income figure. **Do not prepare on the organizer's answer, and do not assume nil** — this is the open question at the top of §6.
- ⚠️ **"Organizer Status: Completed" is true and useless here.** The 2025 organizer reads **66/66** and is a completed PDF on file, yet several sections are part-answered (*General Dependent information* 1 of 6, *Address* 6 of 7, *Sources of income & Uploads* 2 of 3), one dependant's whole section is blank, and the marital status is wrong. **Treat the column as "the client pressed submit", never as "we can work this."**
- ⚠️ **She uploads documents to the wrong questions, and it is systematic enough to check every time.** On the 2025 organizer a **residential lease renewal and two photos** are attached to the question asking for her **driver's licence** — so the licence is, as far as the organizer shows, **not on file**. By the same token the file attached to the **1095-A** question **must be opened and confirmed** before anyone relies on it.
- **Three children, all of them hers and Mykola's, all under 17 at the end of 2025** — Svitlana, Anna and **Anastasia** (the youngest; she is the "Nastiia" of Lilian's June 2026 Double note, and her section of the 2025 organizer is empty). All three were claimed on the **2024 joint** return for the child tax credit, each with twelve months in the home.
- **With no earned income, dependants are worth nothing to her directly — their value on this return is the 8962.** The refundable credits the household received for 2024 (earned income credit and the additional child tax credit) both **require earned income**, and all of it was Mykola's. So a child moved onto her return produces **no refundable credit**; what it does change is the **tax family size on Form 8962**. That is the axis the dependants analysis has to run on. _(Deferred by Lilian, 2026-08-17 — see §6.)_
- **Nobody can claim HER as a dependent** _(Lilian, 2026-08-17)_ — the 2025 organizer answers **"Yes"** to that question and **the answer is wrong**; correct it to **No**. Lilian's instruction is that this was not the client's mistake; **why it reads "Yes" is still open** (§6), so do not re-ask the client and do not treat the organizer's answer as evidence of anything.
- **She moved into her own rented apartment in Sunny Isles Beach in September 2025** — a renter's insurance policy in her sole name took effect **12 September 2025**, quoted **27 August 2025**. That is a **documented date** for the household change, not something to ask her for. Three different apartment numbers appear across the 2024 return, the 2025 organizer and that policy.
- **She has had employment income in the past, through a firm client that has since closed.** In April 2024 Julia sent her a **W-2 from [Megabai](./megabai.md)** — a company whose Florida reemployment-tax (payroll) account the firm wound down with a requested effective date at the **end of Q3 2024**. So her wage income ended around then, which is why the 2024 and 2025 organizers show none. ⓘ Whether the single W-2 on the 2024 joint return was his or hers is **not established from the return itself**; the firm's own filename in Drive labels it as his.
- **Household telephone is in her name, not his** — a Metro/T-Mobile account with two lines, the main one cancelled **5 November 2025**, replaced by a different carrier for November and December. The 2024 return's household phone number is one of her lines.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- **2026-06-22 (Lilian)** — Double note *"2025 Tax return"* created, and a Double comment raised to Julia: information missing for one dependant (Nastiia).
- **2026-06-27 (Lilian)** — Emailed Julia a five-point read on the 2025 return: no income source reported; the dependants split with Mykola needs deciding; the joint organizer left only **one** bank account so each of them now needs their own; a question about whether she changed her surname after the divorce; and a belief that the 1095-A had been forgotten this year. **Four of the five still stand. The 1095-A one is closed — see below.**
- **2026-08-17 (Lilian)** — Double note *"2025 Tax return - info"* created, recording the household's 2025 telephone cost month by month. Four documents uploaded to `JK Accounting Group > Others > 2025`.
- **2026-08-17 (Lilian)** — **Pre-return review run** (the [`organizer-review`](../../../.claude/skills/organizer-review/) skill). Sources read: this file (it did not exist — created by this review), Double notes, files, properties and tax project for her **and** for Mykola, Julia's Gmail, Google Drive, Ping, the **2025 organizer**, and the **2024 filed return** through [`tools/redact-doc/`](../../../tools/redact-doc/). Ping held nothing on this client; Drive held only empty folders in her name.
  - ⓘ **Method note, so the negative is not read as bigger than it is:** the Gmail sweep was by client and owner names and by both known addresses as `from:`/`to:`. It returned overwhelmingly **Kolo** correspondence with Mykola and **almost no direct correspondence with her**. That is a claim about those searches, not about the world.
  - ⓘ **A scope correction worth keeping:** the two PDFs in `Tax Return Filed` share a filename and are **different years** — one sits in the `2023` folder and one in `2024`. Only the **2024** one was opened, per the one-year rule. A session that matches on the filename alone will open the wrong return.
- **2026-08-17 (Lilian)** — Read the four `Others > 2025` documents in full, including eleven scanned pages the redactor could not extract. **They are two things, and neither is income:** two screenshots of her own Metro/T-Mobile account (the substantiation for the telephone note), and a complete **Citizens HO-4 renter's-insurance package** for the new apartment — application, primary-residence affirmation and payment coupon. Reported back to Lilian; the income question stays open.

### Tax year 2025 — the review

- **What gates the return.** Two things. **(1)** The **Form 8962 / Marketplace allocation**, which cannot be settled without Mykola and which blocks e-filing outright. **(2)** Her **2025 income**, which the organizer reports as nil and which Lilian says is wrong (§5).
- **Established from the 2024 filed return** (read 2026-08-17): filed **jointly**; her own income **nil**; the household's income was a W-2, an **Uber Schedule C in Mykola's name with no expenses claimed at all**, and a **K-1 from Kolo Florida Inc, also his**; three dependants, all claimed for the child tax credit; refundable **earned income credit** and **additional child tax credit** both received, both resting on his earned income; **Marketplace coverage reconciled on Form 8962** with a small excess advance credit repaid; a **net operating loss** and a **QBI loss carryforward** generated, both his; **no estimated payments**; **no state return** (Florida).
- **What changed in the organizer, 2024 → 2025.** Marital status still answered *Married* (wrong). Digital assets moved from **No** to **Yes** — and because "no income" closed that branch, **no detail was ever requested**, so a disposal may be unreported. Coverage still Marketplace. Direct deposit moved from a savings account to a checking account at a different bank, with the "name on the account" field filled in with the product name rather than a name.
- **Questions put to the client:** **none yet — nothing has been sent.** The list was drafted 2026-08-17 and held pending the income answer and the dependants decision. Drafted, in order: how things stood at home during 2025 and on 31 December; who lived in the home and for how many months; whether she had any income in 2025; what the telephone and renter's-insurance costs relate to; whether the Marketplace policy was shared with Mykola in 2025; how the two of them agreed to split it; and what the digital-asset transaction actually was. A request for Anastasia's details is held back with the dependants analysis.
- **Decided:** she carries **no** NOL and **no** QBI carryforward (Lilian). **Nobody can claim her as a dependent**; the organizer's "Yes" is corrected to **No** (Lilian). **Not decided:** the dependants split, deliberately deferred by Lilian to be analysed on its own.
- ✅ **Closed by this review:** the 1095-A is **not** missing — a file **is** attached to that question on the 2025 organizer, which answers point 5 of Lilian's June email. **It still has to be opened and confirmed**, because this client attaches documents to the wrong questions (§5).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Which document carries her 2025 income?** Lilian stated on 2026-08-17 that the "no income" reading is wrong and that the information is in one of the documents she supplied; all four were read and none carries an income figure. **Asked, unanswered.** Nothing should be prepared until this is settled.
- 🔴 **The dependants split with Mykola** — who claims which child, decided jointly with the Form 8962 allocation. **Deferred by Lilian on 2026-08-17** to be analysed separately.
- 🟠 **Read `2025 4868 Ext.pdf`** (in both her and his Double file libraries). An extension carries an estimate of the year's tax and any payment made with it — the one unread place a 2025 income figure could be sitting.
- 🟠 **Open the file attached to the organizer's 1095-A question and confirm it is the 1095-A.**
- Why the organizer reads **"Yes"** to *"can anyone else claim you as a dependent?"* when the answer is No — Lilian says it was not the client's error. Recorded so the correction is traceable; **not** to be put to the client.
- Whether she changed her surname after the divorce (Lilian's June 2026 question, still open) — it decides the name on the return and on the e-file.
- Her own bank details for a refund. The joint organizer carried one household account; each of them now needs their own, and the "name on the account" field on hers is unusable as answered.
- Her **driver's licence** is not attached where the organizer asked for it.

### Information still needed

- [ ] The **date of the divorce**, and her marital position on 31 December 2025
- [ ] Her **2025 income** — the open question above
- [ ] Whether the 2025 Marketplace policy was shared with Mykola, and the **allocation percentage** both returns will carry
- [ ] The **digital-asset transaction** of 2025 — what it was, and the platform statement
- [ ] **Anastasia's** details for 2025 (held with the dependants analysis)
- [ ] Her own **bank account** for the refund
- [ ] Her **driver's licence**
- [ ] Whether the surname changed

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710644](https://app.doublehq.com/close?cid=710644)
- **Double 2025 tax project:** [cid 710644 / project 219331](https://app.doublehq.com/tax-return?cid=710644&projectId=219331)
- **Double case note:** none — ordinary return preparation, not a tracked matter
- **Google Drive folder (sensitive vault):** [Julia's copy](https://drive.google.com/drive/folders/1Rknuy4zygVIynqO0b3TMFYyIHgs4XQNv) · [Maria's copy](https://drive.google.com/drive/folders/1GvrzbbyIgSKf20VauBGRJGi7jqZKQkaW)
- **Related clients:** [`kolo-florida.md`](./kolo-florida.md) (her ex-husband's S corporation — **she has no interest in it**) · [`megabai.md`](./megabai.md) (closed; the source of her past W-2)
- **Related SOPs:** none yet
