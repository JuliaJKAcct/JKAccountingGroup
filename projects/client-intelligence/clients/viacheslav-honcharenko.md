# Viacheslav Honcharenko

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-14

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

> ⚠️ **NO FULL HISTORICAL SWEEP HAS RUN.** Created 2026-08-14; the Gmail pass covered
> **2026-03 → 2026-08 only** (a targeted catch-up run after the first version of this file drew
> conclusions from a six-day window). Ping, Drive and the years before 2026 are **still unswept**.
> A gap below means *not yet looked at*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Viacheslav Honcharenko — an **individual** client
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** **Florida** — he holds a **Broward County** business tax receipt (§5)
- **Industry / what they do:** ⚠️ **He has business activity** — a Broward County business tax receipt approved 2026-07-07, and **1099 income from at least two payers** (§5). What the business actually does is _(pending)_
- **Primary language:** **Russian** — the firm writes to him in Russian _(Lilian's 2026-04-12 email)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| **A dependent daughter**, added to the 2025 organizer | Double — 🔒 her **date of birth and SSN** are in the migrated note and are recorded **nowhere** here |
| A second adult whose driver's licence is on file _(surname spelled differently again)_ | Double / TaxDome documents |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where the 2025 organizer and documents actually live | n/a | ⚠️ 2025 organizer completed **in TaxDome on 2026-03-31**, not Double (§4) |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` mirrors the TaxDome event |
| Broward County BTExpress | Business tax receipt | n/a | Applied 2026-07-06, **approved 2026-07-07** (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** ⚠️ _(unsettled — he has a county business tax receipt and 1099 income; whether anything he does is subject to Florida sales tax has never been established)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_. ⚠️ But he has business activity (§5), so **who keeps those books, if anyone, is an open question.**

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year. ⚠️ **`Tax Return Type` says plain `1040`, but he received 1099s as a payee** (§5) — that is Schedule C or Schedule 1 territory. Both readings are recorded; **the fact is unsettled and must be confirmed, not assumed either way.**
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return not filed.** Double's "2025 Taxes" project is **`waitingOnClient`**, `filedAt` empty, **original** due date 2026-04-15. ⓘ **An extension is very likely on file** — the firm's own 2026-04-12 email to him says *"мы работаем над продлением подачи Вашей налоговой декларации"* (we are working on the extension), and Lilian assigned "File Extension" tasks across the roster in May 2026. **With a 4868 the deadline is 2026-10-15 and he is not late** — confirm the 4868 rather than repeating "overdue".
- **Organizer status:** **Completed 2026-03-31 in TaxDome.**
- **Process notes (→ future SOP):**
  - **A dependent daughter was added for 2025** _(Lilian, 2026-04-07)_ — first dependant on record, so filing status and credits may both move.

### Licenses & other filings
- **Applies?** ⚠️ **Yes — a Broward County business tax receipt**, approved 2026-07-07. County BTRs **renew annually (Florida's run to 30 September)**, so this is a recurring obligation, not a one-off.

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS NOT A PLAIN 1040 CLIENT — HE HAS BUSINESS ACTIVITY, AND DOUBLE'S COLUMNS DO NOT SHOW IT.** He uploaded **1099s from Maxrating LLC and OPTIC GOLD INC** on 2026-03-31; Liudmyla listed him among the **2025 W-9 requests for Optic Gold** in January 2026 — i.e. he is a paid contractor to another of the firm's own clients; and **Broward County approved a business tax receipt in his name on 2026-07-07**. Double still reads `Tax Return Type = 1040`, `Bookkeeping = N/A`. **Settle the Schedule C position before preparing anything.**
- 🔴 **WHAT THE 2025 RETURN IS WAITING ON IS ALREADY WRITTEN DOWN — DO NOT ASK HIM AGAIN.** Lilian emailed him on **2026-04-12** (in Russian): the firm's tax software **flagged an error in at least one of the names** while filing the extension. He replied on **2026-04-13 and 2026-04-14** through the TaxDome thread *"Недостающая информация — налоговая декларация за 2025 год"*. **Read that thread first** — the answer may already be in it.
- ⚠️ **The surname is transliterated at least three ways** — Honcharenko, Goncharenko, and `goncharencko` in his own email address; a second adult's licence on file reads **"Honarenko"**. Search every spelling before concluding a source has nothing, and expect the name mismatch to be exactly what the tax software objected to.
- ⚠️ **A dependent daughter was added for 2025** _(Lilian, 2026-04-07)_. The prior year is **not** a template: a first dependant moves filing status, the Child Tax Credit, and any care or education credits. 🔒 Her date of birth and SSN are in the migrated note and are recorded nowhere here — read them from Double if a filing needs them.
- **The 2025 organizer lives in TaxDome, not Double.** Completed there 2026-03-31, with documents (licences, 1099s, a mortgage statement, ALTA/lender documents) attached to that account.
- **He holds a Broward County business tax receipt**, so a **county BTR renewal** is a live annual obligation nobody has assigned.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version concluded "no business activity" and "nobody wrote down what the return is waiting on" from a six-day Gmail window; an independent review falsified both. A wider Gmail pass (2026-03 → 2026-08) produced the entries below. _(Worked by Lilian.)_
  - **2026-03-31 — organizer completed in TaxDome**, with documents uploaded the same day: two driver's licences (his and a second adult's), **1099s from Maxrating LLC and OPTIC GOLD INC**, a mortgage statement, and ALTA/lender documents.
  - **2026-04-07 — the migrated TaxDome note.** _(Lilian.)_ A **dependent daughter** was added to the 2025 organizer.
  - **2026-04-12 — Lilian emailed him in Russian** about the 2025 extension: the tax software **reported an error in at least one of the names**. He replied **2026-04-13** (with his name spelled out) and again **2026-04-14** asking whether there was any news.
  - **2026-07-06 → 07-07 — Broward County BTExpress**: business tax receipt applied for and **approved**.
- **2026-01-14 — earlier, and worth knowing:** Liudmyla asked Optic Gold to collect **2025 W-9s**, listing him among the payees. That is the other side of the 1099 he later uploaded.
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2026-03 forward. **Ping, Drive and everything before 2026 have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Filing position:** Form 1040, **with a dependant for the first time on record**, and **with 1099 income** whose treatment is unsettled.
- **Organizer:** Completed 2026-03-31 (TaxDome).
- **Status:** `waitingOnClient`, unfiled; extension very likely on file, unconfirmed.
- **The blocker on record:** a name mismatch the tax software rejected (2026-04-12).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Read the TaxDome thread from 2026-04-13/14 before contacting him.** The firm asked, he answered, and nobody recorded the outcome. Asking again is the failure `method.md` rule 1 exists to prevent.
- 🔴 **Settle the Schedule C position** — 1099s from two payers and a county business tax receipt, against a Double column that says plain `1040`.
- **Confirm the 2025 Form 4868 is on file**, which moves the deadline to 2026-10-15.
- **Assign the Broward County BTR renewal** — it is annual, and nobody owns it.

### Information still needed

- [ ] What the business does, and whether it needs a Schedule C
- [ ] Who the second adult on the documents is (spouse? the daughter?)
- [ ] Whether the name mismatch was resolved and the extension accepted
- [ ] Whether sales tax touches any of the activity
- [ ] Ping, Drive, and everything before 2026 — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double tax project (2025):** [tax-return?cid=710665&projectId=219349](https://app.doublehq.com/tax-return?cid=710665&projectId=219349)
- **Related — he is a 1099 payee of [OPTIC GOLD INC](./optic-gold.md)**, another client of the firm. Anything about that payment relationship touches both files.
- **Migrated TaxDome notes:** Drive `4. Documents > Viacheslav Honcharenko` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
