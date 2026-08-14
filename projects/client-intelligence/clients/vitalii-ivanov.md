# VITALII IVANOV & TETIANA MOGYLOVA

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

> ⚠️ **NEVER FULLY SWEPT — this file starts from a narrow base.** It was created on
> **2026-08-14** from the migrated TaxDome notes plus an incremental pass from the
> **2026-08-08** baseline forward, on Lilian's instruction not to re-read history already
> captured. **No full historical sweep of Gmail, Drive, Ping or Double has ever run for this
> client** — they were outside every previous sweep's scope. So a gap here means *not yet
> looked at*, not *nothing there*. The one-time catch-up is owed and recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Vitalii Ivanov & Tetiana Mogylova — an **individual (joint) client record**, not a company
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending in the US)_ — abroad, he holds **50% of four Ukrainian companies** (§5)
- **Primary language:** 🔴 **Russian only** _(Double `Preferred language = Only Russian`)_ — write to this client in Russian, not English
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, no 1099 preparation, no annual report _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The clients — a married couple filing jointly | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |
| Preparer on the 2025 return | **Irina Jandieri** _(Double tax project)_ — also the author of the 2025 note in §6 |

- **Double client:** [app.doublehq.com/close?cid=710666](https://app.doublehq.com/close?cid=710666)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | 2025 organizer **Sent**, not completed (§4) |
| Google Drive | The Form 5471 working file | _(pending — Drive link)_ | `Form5471_ExtremePride_2025.xlsx` (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No _(no US business activity recorded for them personally)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_; no QuickBooks connected

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double `Tax Return Type = 1040`)_
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return NOT FILED.** Double tax project "2025 Taxes" is **`inProgress`**, `filedAt` empty, original due date **2026-04-15** — so it is roughly **four months past the original deadline** as of this file's date. **Whether an extension was filed is not recorded anywhere reachable** (§6).
- **Organizer status:** **Sent** _(Double)_ — sent to the client and **not completed**. That is very likely what the return is waiting on.
- **Process notes (→ future SOP):**
  - 🔴 **Form 5471 almost certainly applies — see §5.** It attaches to the 1040; it is not a separate return, so `Tax Return Type = 1040` is **not** in conflict with it and must not be read as evidence that no 5471 is owed.

### Licenses & other filings
- **Applies?** _(pending)_ — nothing recorded on the US side

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE HOLDS 50% OF FOUR UKRAINIAN COMPANIES — THIS IS FORM 5471 TERRITORY AND IT IS LIVE WORK, NOT HISTORY.** A US person owning 50% of a foreign corporation is squarely in Form 5471 filing territory, and **there are four of them**. A working file already exists in Drive (`Form5471_ExtremePride_2025.xlsx`), so somebody has started at least one. **Establish which of the four are owed a 5471 for 2025, and whether any were filed for prior years** — the penalty for a missed 5471 is **per form, per year**, and it is one of the harshest in the code. ⓘ A **`form-5471-tax-analysis` skill exists** for this work — it is a personal/synced skill, **not** in this repo's `.claude/skills/`, so a session that cannot see it should ask for it rather than improvise.
- 🔴 **THE 2025 RETURN IS UNFILED AND THE ORGANIZER WAS NEVER COMPLETED.** The project sits `inProgress` roughly four months past the 2026-04-15 deadline, with the organizer still in `Sent`. **Check whether an extension is on file before doing anything else** — nothing in any reachable source says one was.
- **Write to this client in RUSSIAN.** Double records `Preferred language = Only Russian`. It is the only client file so far carrying that property, and it means English correspondence will not land.
- **The four companies, with their registration dates** _(Irina Jandieri, 2025-08-18)_: **ТОВ Бест Вей Фудс** (2018-07-30) · **ТОВ Екстрим Прайд** (2019-06-05) · **ТОВ 34-й градус** (2020-07-04) · **ТОВ Юкрейн Анлімітед Трейдинг** (2020-11-17). The Drive working file names **Extreme Pride**, so that is the one already under analysis.
- **USPS Informed Delivery digests addressed to TETIANA arrive at Julia's firm inbox** _(observed 2026-08-12 and 2026-08-13)_. Recorded as an observation, not a conclusion — it may mean the firm's address is her mail-of-record, or simply that Julia is on the notification. **Worth settling**, because it determines where an IRS letter for this couple actually lands.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2025-08-18 — the ownership note.** _(Irina Jandieri, migrated TaxDome notes.)_ Recorded that he holds **50% of four Ukrainian companies**, with each company's registration date (§5).
  - **2026-08-12 / 2026-08-13 — USPS Informed Delivery digests for TETIANA** arrived at the firm's inbox. No action recorded.
- **Nothing else is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Status:** in progress, unfiled, organizer sent but not completed.
- **Preparer:** Irina Jandieri _(Double)_.
- **The open question that dominates the year:** the Form 5471 position on four foreign corporations.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle the Form 5471 position for 2025 — and for the prior years.** Four companies at 50%. Find out what has already been filed and what has not; a missed 5471 is penalised per form, per year.
- 🔴 **Find out whether an extension was filed for 2025**, then chase the organizer — it is still in `Sent`.
- **Settle whether the firm's address is this couple's mail-of-record**, given the USPS digests (§5). It decides where an IRS notice goes.
- **Run the one-time full historical sweep** — Gmail, Drive, Ping and Double have never been swept for this client.

### Information still needed

- [ ] What they do in the US, their home state, and whether either has US business activity
- [ ] Which of the four Ukrainian companies are still active, and their current ownership percentages
- [ ] What has been filed on Form 5471 to date, and for which years
- [ ] Whether a 2025 extension exists
- [ ] Everything from Gmail, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710666](https://app.doublehq.com/close?cid=710666)
- **Double tax project (2025):** [tax-return?cid=710666&projectId=219350](https://app.doublehq.com/tax-return?cid=710666&projectId=219350)
- **Migrated TaxDome notes:** Drive `*QBO Clients and Individuals > VITALII IVANOV` (and the `*Dupplicated` copy) — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_ — holds `Form5471_ExtremePride_2025.xlsx`
- **Related SOPs:** _(pending)_
