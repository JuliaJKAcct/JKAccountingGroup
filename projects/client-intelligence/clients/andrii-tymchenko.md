# Andrii Tymchenko

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-13

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

- **Business name:** Andrii Tymchenko — an **individual** client, with a company alongside (§5)
- **Entity type:** Individual taxpayer (Form 1040 / 1040-NR)
- **2025 filing position:** 🔴 **Non-resident aliens — the position recorded on 2026-04-07 was Form 1040-NR, married filing separately** (§4). ⚠️ **Whether the returns were actually filed is not recorded anywhere reachable** (§6).
- **Home state:** ⚠️ **He left the United States on 2025-05-31 and moved to Spain.** Which state, if any, has a part-year claim for 2025 is _(pending)_.
- **Industry / what they do:** _(pending)_ — he has a company that had **no activity at all in 2025**
- **Primary language:** _(pending — likely Ukrainian or Russian)_
- **Our engagement (services we provide):** income tax _(pending — the rest)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-13)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| Spouse — a **joint filer for some years, but NOT 2025** (§4) | Double client |
| Children | Double client — there are dependants _(number pending)_ |

- **Double client:** [app.doublehq.com/close?cid=710619](https://app.doublehq.com/close?cid=710619)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | The 2025 organizer was worked through by phone (§6) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** 🔴 **For 2025: Form 1040-NR, filed MARRIED FILING SEPARATELY.** They were **non-resident aliens** for the year, and the IRS requires non-resident aliens to file separately — so the joint filing used in earlier years does not apply. Which return type applies for 2026 depends on where they are and the residency tests; **do not assume 1040-NR carries forward.**
- **Our role:** the firm prepares
- **Process notes (→ future SOP):**
  - ⚠️ **The company had NO ACTIVITY in 2025** — no income, no expenses — so there is **no P&L**, and the home-office document on file is **last year's, unchanged.** Both are correct for a dormant year, not omissions to chase.
  - ⚠️ **His driver's licence on file EXPIRED during 2025.** Anything that needs current photo ID will fail on it.

### Licenses & other filings
- **Applies?** _(pending)_ — the company is dormant but may still owe an annual report in its state of registration

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE FAMILY LEFT THE UNITED STATES ON 2025-05-31 AND ARE IN SPAIN.** That is what makes 2025 a **1040-NR, married filing separately** year (§4), and it changes almost everything about how this client is handled — residency, which states have a claim, and whether US filing continues at all. **Establish the current position before preparing anything for 2026.**
- ⚠️ **A Form 1095-A was requested from him, and the note says nothing about HIS OWN coverage** — only that **his wife and children were on Medicaid, not the marketplace**. Medicaid produces a 1095-B, not a 1095-A; marketplace coverage for part of the year would produce one. **So the request may be right, or it may be chasing a form that cannot exist — the note does not settle it.** Establish what coverage HE had for 2025 before asking him again.
- **His company was dormant for the whole of 2025** — no income, no expenses, no P&L. Do not read the missing P&L as an outstanding item.
- **He did not sell the car — he took it to Spain.** Recorded because a vehicle disappearing from a return usually means a sale, and here it does not.
- ⚠️ **He does not remember whether he made estimated tax payments for the year**, and said the firm would know. **Check the IRS account rather than asking him again.**

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from the migrated TaxDome notes, on Lilian's ruling of the same day authorising them to be read. _(TaxDome notes, migrated — filed under Andrii Tymchenko; note dated 2026-04-07.)_ _(Worked by Lilian.)_
  - **2026-04-07 — the 2025 tax-organizer summary call.** Lilian went through the organizer with him by phone and recorded: they **left the United States on 2025-05-31**; the **company had no activity in 2025**; he uploaded a **driver's licence that expired in 2025**; there is **no P&L** because there was no activity; the **home-office document is last year's, not updated**; **school and health insurance for the children were free or subsidised**; **his wife and children were on Medicaid, not the marketplace**; for medical expenses he has only the **payment history for his insurance premium**, and a **1095-A was requested**; he **does not remember** whether he made estimated tax payments; and he **did not sell the car — he took it to Spain**. The conclusion recorded on the note: **as non-resident aliens for 2025 they had to file 1040-NR, and separately (MFS), as the IRS requires for non-resident aliens.**
- **Nothing after 2026-04-07 is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Filing position:** 1040-NR, married filing separately, on non-resident-alien status from a 2025-05-31 departure. _(TaxDome notes, migrated; 2026-04-07.)_
- **Dependants:** children, on Medicaid, with free or subsidised schooling and health cover.
- **Business income:** none — the company was dormant.
- **Open at the time of the call:** the 1095-A request (see §5 — it may be the wrong form), and whether estimated payments were made.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle the health-coverage position before asking him for anything else.** The note requests a **1095-A** while recording **Medicaid** — those are inconsistent, and a 1095-A does not exist for Medicaid coverage.
- 🔴 **Establish where he is tax-resident now, and whether the firm still files for him at all.** He has been out of the US since 2025-05-31.
- **Check the IRS account for 2025 estimated payments** rather than asking him again.
- **Get a current photo ID** — the licence on file expired in 2025.

### Information still needed

- [ ] The company's name, state and whether it still exists / still owes filings
- [ ] Whether a state part-year return was owed for 2025
- [ ] Whether the 2025 1040-NRs were actually filed, and when
- [ ] Current residence and tax-residency position
- [ ] What else the firm does for him beyond the return

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710619](https://app.doublehq.com/close?cid=710619)
- **Migrated TaxDome notes:** Drive `4. Documents > Andrii Tymchenko > 1. Notes`, mirrored in Double at `TaxDome > Andrii Tymchenko > 1. Notes` — **two files, but one note**: `04.07.2026 - 2025 Tax organizer - summary call`, present as both a Google Doc and a `.docx` copy of the same thing. Read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
