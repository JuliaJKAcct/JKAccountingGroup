# SETATECH USA, INC.

> **Status:** ⚠️ **Archived in Double — but operating** · **Owner:** Firm · **Last updated:** 2026-08-14

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
> **2026-07 → 2026-08** (a targeted catch-up after the first version read one day of a five-week
> pattern as a new emergency). Ping, Drive and everything before July 2026 are **still unswept**.
> The catch-up is recorded in [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** SETATECH USA, INC.
- **Entity type:** Corporation (Inc) — ⚠️ **federal tax classification NOT RECORDED.** Double has **no `Tax Return Type`** for this client while `Income Tax = true` (§4)
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_ — the client's own domain is `setatech.global`; it takes **card payments through QuickBooks** at a scale that had its processing limit raised in July 2026
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** on Double — **Bookkeeping monthly · Sales tax quarterly · Payroll monthly · Income tax yes**. ⚠️ **What is still actually being done is the open question** (§5)
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** ⚠️ **Double says `platform: none`, and that is WRONG** — a **QuickBooks Online company exists** for this client (§3). Payroll and contractor payments run on **Gusto**.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Client-side principal — the Gusto and QuickBooks account holder | Double client / Gusto |
| Director of Sales | Double client / Drive _(recorded in the migrated note, 2025-03-07)_ |
| **An outside CPA firm**, given Gusto admin and QuickBooks accountant access in Aug 2026 — **then removed from Gusto two days later** | Gmail (§6); the firm sent the QuickBooks invitation itself |
| Assigned staff | 🔴 **Julia Kononova** _(Double)_ — the only one of the seven backfilled clients not assigned to Lilian |

- **Double client:** [app.doublehq.com/close?cid=706706](https://app.doublehq.com/close?cid=706706)
- **Double case note:** none yet — ⚠️ **a handover to another firm would deserve one**, if that is what this is (§5)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **Gusto** | Payroll + automated contractor payments | 🔒 Drive vault — **never here** | ⚠️ **Blocked on an outstanding balance since ~2026-07-24** (§5) |
| **QuickBooks Online** | The books, and **card payment processing** | 🔒 Drive vault | ⚠️ **Exists, though Double records `platform: none`.** An outside accountant was invited in Aug 2026 |
| Bank | Payroll debits | 🔒 Drive vault | A bank account failed verification in early Aug 2026 and was re-verified (§6) |
| Double client portal | Document exchange | n/a | Client record **archived** 2026-07-22 |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** **Quarterly** _(Double)_. ⚠️ Whether it is still being filed after the archive is unknown.

### Payroll
- **Applies?** **Monthly** _(Double)_, on **Gusto**, including **automated contractor payments**.
- ⚠️ **Currently blocked** on an outstanding Gusto balance (§5). ✅ **The team WAS paid** — it is the firm's *debit* that bounced, not the payroll.

### Bookkeeping & monthly close
- **Applies?** **Monthly** _(Double)_. The books are in **QuickBooks Online**, which Double does not show as connected — **relink or correct the record.**

### Income tax
- **Applies?** **Yes** _(Double `Income Tax = true`)_
- **Return type(s) & deadlines:** ⚠️ **NOT RECORDED — and this is a genuine gap, not the "files nothing" pattern.** Double has **no `Tax Return Type`** while `Income Tax = true`. Per [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) §1b that combination **goes to review, never to a conclusion**: an unticked-or-absent field is corroboration at most, and here the income-tax service is *on*, so nothing points at "no return". **There is also no owner record in Double to read across to**, which §1b makes the ❌ case outright. **Ask Lilian or Julia which form this company files.**
- **Current status:** Double's 2025 tax project reads **`filed`** with **`filedAt` empty**. The two disagree; read both, trust neither alone. **Confirm the 2025 return was filed, and when.**

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **ARCHIVED IN DOUBLE ON 2026-07-22 WHILE STILL OPERATING — AND THE MOST LIKELY READING IS A HANDOVER TO ANOTHER FIRM.** Two days after the archive, Gusto began sending "payroll is blocked" reminders (07-24, 07-25, 07-26, 08-04, 08-13) to the client **and to four people here**. Then on **2026-08-03 the firm itself invited an outside CPA firm into this client's QuickBooks as accountant**, and the same person was made a **Gusto admin** — and **removed from Gusto on 08-05**. **Nobody wrote down what the archive meant.** Settle it: is the engagement over, transferring, or neither — and if it is over, take the firm off Gusto's notifications and close out the recurring filings.
- ⚠️ **THE PAYROLL BLOCK IS NOT AN EMERGENCY, AND THE FIRST VERSION OF THIS FILE SAID IT WAS.** Gusto's own message of **2026-08-03** reads: *"The team was paid as planned, but our debit(s) failed because the bank rejected them."* **Employees and contractors were paid.** What is outstanding is the balance Gusto could not collect; a bank account was under verification on 08-04. The 08-13 message is the **fifth** identical automated reminder, not a new event. It still needs resolving — it is not a crisis.
- ⚠️ **NO `Tax Return Type` IS RECORDED, AND `Income Tax = true`.** This is the **counter-case** to the empty-field rule, not the Aura case: the income-tax service is on, so the absence cannot mean "files nothing", and there is no owner record to read across to. **Send it to review — ask which form this company files** (§4).
- ⚠️ **DOUBLE'S `platform: none` IS WRONG — a QuickBooks Online company exists**, and it processes card payments (its limit was raised in July 2026). Anyone concluding "no books connected" from the Double record will be wrong.
- **The 2025 tax project says `filed` but carries no `filedAt`.** Do not treat 2025 as closed on the status alone.
- **The engagement on file is full-service** — monthly bookkeeping, quarterly sales tax, monthly payroll, income tax. **If the client really has left, several filings may still be owed for the stub period.**

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version read the 2026-08-13 Gusto alert as a new emergency and claimed staff were unpaid; an independent review showed it was the fifth reminder in a five-week pattern and that the team had been paid. The wider pass produced the entries below. _(Worked by Lilian.)_
  - **2025-03-07 — the migrated TaxDome note.** _(Lilian.)_ Records the Director of Sales.
  - **2026-05-15 — Double client record created.**
  - **2026-07-20 — QuickBooks raised the company's card-payment processing limit** — evidence of an operating business, addressed to the client-side principal.
  - **2026-07-17 → 07-22 — an open Double task** ("ACH/Wire Account") appears in Julia's daily digests.
  - **2026-07-22 — Double client record ARCHIVED.** **No reason is recorded anywhere reachable.**
  - **2026-07-24, 07-25, 07-26 — Gusto: "payroll is blocked"**, to the client and four people at the firm. The same message repeats.
  - **2026-08-03 — Gusto explains it:** *"The team was paid as planned, but our debit(s) failed because the bank rejected them."* The same day, an **outside CPA firm was made a Gusto admin**, and **the firm sent that firm a QuickBooks accountant invitation**, which was accepted.
  - **2026-08-04 — Gusto verifying the company's bank account** after repeated bank errors; another blocked-payroll reminder.
  - **2026-08-05 — the outside CPA was REMOVED as a Gusto admin**, two days after being added. A second QuickBooks invitation went out the same day.
  - **2026-08-13 — the fifth blocked-payroll reminder**, plus a failed **automated contractor payment**. No response is recorded.
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2026-07 forward. **Ping, Drive and everything earlier have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Status:** Double says `filed`, with no filing date. Unconfirmed.
- **Return type:** unknown — not recorded (§4).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle what the 2026-07-22 archive meant** — engagement ended, transferring to the other CPA firm, or an administrative tidy-up. Everything below depends on the answer, and the added-then-removed Gusto admin says it is not settled on the client's side either.
- 🔴 **Resolve or hand off the Gusto balance**, and either way **take the firm off the notification list** if it is no longer our payroll. Five automated reminders have gone unanswered.
- 🔴 **Get the `Tax Return Type` recorded**, and correct `platform` — a QuickBooks company exists. Both errors mis-sort this client in every report.
- **Run the one-time full historical sweep, and work out which of the four recurring services still owe a final filing** if the engagement ended — plus confirm the 2025 return was actually filed. ⚠️ **This client is excluded from the weekend routine while archived, so nobody will do the sweep automatically** — it needs a person.

### Information still needed

- [ ] Why the Double record was archived, and by whom
- [ ] Whether the outside CPA firm has taken over, and from when
- [ ] What the company does, its state, and its owner
- [ ] Which income-tax form it files
- [ ] Ping, Drive, and everything before July 2026 — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706706](https://app.doublehq.com/close?cid=706706) — **archived 2026-07-22**
- **Double tax project (2025):** [tax-return?cid=706706&projectId=219897](https://app.doublehq.com/tax-return?cid=706706&projectId=219897)
- **Migrated TaxDome notes:** Drive `*QBO Clients and Individuals > SETATECH USA INC` (and the `*Dupplicated` copy) — read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
