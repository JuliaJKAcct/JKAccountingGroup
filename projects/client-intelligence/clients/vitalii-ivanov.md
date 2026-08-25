# VITALII IVANOV & TETIANA MOGYLOVA

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-25

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
> **2026-07 → 2026-08** (a targeted catch-up after the first version drew conclusions from a
> six-day window). Ping, Drive and everything earlier are **still unswept**. A gap below means
> *not yet looked at*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Vitalii Ivanov & Tetiana Mogylova — an **individual (joint) client record**, not a company
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** **In the US he is the owner behind Deep Tech Development LLC** _(Lilian, 2026-08-25, calling him its "dueño verdadero"; Double records him as its admin portal contact — ⚠️ a portal contact alone is not proof of ownership, her statement is)_ — e-commerce (robotics), trading as **"Go Robots"** on Shopify at **gorobots.us** — and he is the Double admin contact on **1701 N M ST LLC** and **Universal Trading Technology LLC** as well (§5). Abroad he holds **50% of four Ukrainian companies** (§5). ✅ **This answers what the file called "US-side activity it cannot yet name":** the **robot-purchase invoices** Lilian sent him in July 2026 are inventory for that Shopify store _(established 2026-08-25 — Double contacts + Shopify's own emails to Julia)_
- **Primary language:** 🔴 **Russian only** _(Double `Preferred language = Only Russian`)_ — write to this client in Russian, not English
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
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
- **Double case note:** none **on this individual record**. The live matter concerning him sits on his company: `CASE · Shopify — transferring store ownership to Vitalii Ivanov` — note **503544** on [Deep Tech Development LLC](./deep-tech-development.md).

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | 2025 organizer **Sent**, not completed (§4) |
| Google Drive | The foreign-entity working file | _(pending — Drive link)_ | `Form5471_ExtremePride_2025.xlsx` — one entity only (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending on this individual record — nothing recorded.)_ ⓘ **His US business activity is now named (§1) and it sells tangible goods**, but that obligation sits on the **company**, not on this 1040 record — see [`deep-tech-development.md`](./deep-tech-development.md) §4, where the sales-tax registration is itself still an open question.

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_; no QuickBooks connected

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double `Tax Return Type = 1040`)_
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return not filed.** Double's "2025 Taxes" project is **`inProgress`**, `filedAt` empty, **original** due date **2026-04-15**. ⓘ **An extension is very likely on file** — the firm ran a "File Extension" round across the roster in May 2026 — so **with a 4868 the deadline is 2026-10-15 and he is not late.** Confirm the 4868 rather than reporting him as overdue.
- **Organizer status:** **Sent** _(Double)_ — sent to the client and **not completed**. That is very likely what the return is waiting on.
- **Process notes (→ future SOP):**
  - 🔴 **A foreign-entity reporting question is open — see §5.** Whichever form applies (5471, 8865 or 8858) it **attaches to the 1040**, so `Tax Return Type = 1040` is **not** in conflict with it and must never be read as evidence that nothing is owed.

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

- 🔴 **HE HOLDS 50% OF FOUR UKRAINIAN COMPANIES — A FOREIGN-ENTITY REPORTING QUESTION IS OPEN ON ALL FOUR, AND IT IS LIVE WORK.** ⚠️ **Which form is not settled, and the file must not pretend it is.** Two things stop it being automatic: **50% is not a majority** — Form 5471's control category needs *more than* 50%, and a CFC needs US shareholders to hold *more than* 50% of vote or value, so at exactly 50% with a non-US co-owner it may not apply at all (acquisition-year categories can still bite); and a Ukrainian **ТОВ is an LLC-type entity**, so for US purposes it may be a corporation (**5471**), a partnership (**8865**) or disregarded (**8858**) depending on classification. **A working file already exists in Drive (`Form5471_ExtremePride_2025.xlsx`), so somebody has already reached a view on one of them.** Establish the position for **each** of the four, and what has been filed for prior years — the penalty for a missed foreign-entity form is **per form, per year** and among the harshest in the code. ⓘ A **`form-5471-tax-analysis` skill exists** — it is a personal/synced skill, **not** in this repo's `.claude/skills/`, so a session that cannot see it should ask for it rather than improvise.
- 🔴 **THE 2025 RETURN IS UNFILED AND THE ORGANIZER WAS NEVER COMPLETED.** The project sits `inProgress` with the organizer still in `Sent`, past the **original** 2026-04-15 date. ⚠️ **Do not report him as four months overdue without checking the extension** — the firm ran a roster-wide "File Extension" round in May 2026, and a 4868 moves the deadline to **2026-10-15**.
- 🔵 **HE OWNS THE US COMPANIES THE FIRM ALREADY WORKS — and one of them has a live, blocked handover.** He is the Double admin contact on **Deep Tech Development LLC** (the Shopify "Go Robots" store, `gorobots.us`), **1701 N M ST LLC** and **Universal Trading Technology LLC**, as well as on this individual record. **Deep Tech's Shopify store is registered under Julia and is being transferred to him**; the transfer is **blocked** pending Shopify's permanent closure of the store's Balance account, requested 2026-08-25 with no ETA — the whole trail is on Deep Tech's file and in Double note **503544**, not here. **His company matters belong in [`deep-tech-development.md`](./deep-tech-development.md), not in this file** — this bullet exists so nobody reads this record as though he had no US business. _(Double contacts + Shopify emails to Julia, 2026-08-25.)_
- **Write to this client in RUSSIAN.** Double records `Preferred language = Only Russian`. It is the only client file so far carrying that property, and it means English correspondence will not land.
- **The four companies, with their registration dates** _(Irina Jandieri, 2025-08-18)_: **ТОВ Бест Вей Фудс** (2018-07-30) · **ТОВ Екстрим Прайд** (2019-06-05) · **ТОВ 34-й градус** (2020-07-04) · **ТОВ Юкрейн Анлімітед Трейдинг** (2020-11-17). The Drive working file names **Extreme Pride**, so that is the one already under analysis.
- ✅ **THE FIRM'S ADDRESS IS THIS COUPLE'S MAIL-OF-RECORD — treat it as answered, not open.** USPS Informed Delivery digests addressed to the spouse arrive at Julia's inbox **daily** (observed continuously through July and August 2026), and the firm has forwarded her physical mail on to her. **So an IRS notice for this couple lands here**, and somebody at the firm has to watch for it — that is an obligation, not a curiosity.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version stated the Form 5471 position as settled and left the mail-of-record question open; an independent review caught the overreach and a wider Gmail pass answered the second. _(Worked by Lilian.)_
  - **2025-08-18 — the ownership note.** _(Irina Jandieri, migrated TaxDome notes.)_ He holds **50% of four Ukrainian companies**, with each company's registration date (§5).
  - **2026-07-13 — Lilian forwarded him the letters received at Julia's address** — the firm's own mail-of-record arrangement, in his own correspondence.
  - **2026-07-28 — Lilian sent him invoices for robot purchases** _(in Russian)_. The first sign of US-side activity on this file. ⓘ **ANSWERED 2026-08-25** — they are inventory for his company **Deep Tech Development LLC**'s Shopify store (`gorobots.us`); see the 2026-08-25 entry below.
  - **Throughout July and August 2026 — USPS Informed Delivery digests** addressed to the spouse arrive at the firm's inbox daily.
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2026-07 forward. **Ping, Drive and everything earlier have never been swept**, so this is a statement about the search, not about the world.
- 2026-08-25 — **Established that he is the owner behind the firm's Deep Tech / "Go Robots" work**, while recording
  the Shopify store-ownership transfer being worked for that company. Double's portal contacts put him as admin on
  **Deep Tech Development LLC**, **1701 N M ST LLC**, **Universal Trading Technology LLC** and this individual
  record; Shopify's billing emails to Julia name the store **Deep Tech Development / gorobots.us**. That closes the
  "robot purchases" question this file had carried since 2026-07-28 and names the US-side activity §1 could not.
  **The Shopify matter itself is recorded on the company** — [`deep-tech-development.md`](./deep-tech-development.md)
  and Double note **503544** — not duplicated here. _(Worked by Lilian.)_
  - ⓘ **A loose thread this turned up, and it is an INFERENCE, not a finding.** The external Ukrainian
    finance-team contact who holds portal access to Deep Tech and to two of his other US entities uses an
    email domain that matches one of his **four Ukrainian companies** (**ТОВ 34-й градус**). If that is the
    same organisation it links the Ukrainian finance team to a company inside the open foreign-entity
    question above — **but it rests on the domain name alone and nobody has checked it.** Worth one question
    when that work is picked up. _(Double contacts, 2026-08-25.)_

### Tax year 2025 — the review

- **Status:** in progress, unfiled, organizer sent but not completed.
- **Preparer:** Irina Jandieri _(Double)_.
- **The open question that dominates the year:** which foreign-entity form, if any, each of the four Ukrainian companies requires (§5).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle the foreign-entity reporting position for each of the four companies**, for 2025 and prior years — **5471, 8865 or 8858 depending on classification**, and 50% may put some of them outside 5471 entirely. Start from the existing Drive working file, which shows a view was already taken on one.
- 🔴 **Confirm the 2025 Form 4868**, then chase the organizer — it is still in `Sent`, and he works in Russian only.
- **Assign someone to watch the physical mail** — the firm is this couple's mail-of-record (§5), so IRS correspondence lands here.
- ~~Find out what the "robot purchases" are (2026-07-28)~~ — **answered 2026-08-25:** they are inventory for **Deep Tech Development LLC**'s Shopify store (`gorobots.us`, the "Go Robots" brand), which he owns. Forwarding those vendor invoices to him is a standing part of that company's bookkeeping relationship.
- **Run the one-time full historical sweep** — Ping, Drive and everything before July 2026 have never been swept.

### Information still needed

- [ ] What they do in the US, their home state, and whether either has US business activity — **partly answered 2026-08-25:** **he** has US business activity (he owns Deep Tech Development LLC and is the admin contact on two more US entities — §5). **Still open: their home state**, and whether **Tetiana Mogylova** has any US activity of her own.
- [ ] Which of the four Ukrainian companies are still active, and their current ownership percentages
- [ ] What foreign-entity forms have been filed to date, and for which years
- [ ] Whether a 2025 extension exists
- [ ] Everything from Gmail, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710666](https://app.doublehq.com/close?cid=710666)
- **Double tax project (2025):** [tax-return?cid=710666&projectId=219350](https://app.doublehq.com/tax-return?cid=710666&projectId=219350)
- **Migrated TaxDome notes:** Drive `*QBO Clients and Individuals > VITALII IVANOV` (and the `*Dupplicated` copy) — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_ — holds `Form5471_ExtremePride_2025.xlsx`
- **Related clients (owner group):** [Deep Tech Development LLC](./deep-tech-development.md) — his US e-commerce company (Shopify "Go Robots"), where his company-side matters are recorded. **1701 N M ST LLC** and **Universal Trading Technology LLC** have no CI file yet.
- **Related SOPs:** _(pending)_
