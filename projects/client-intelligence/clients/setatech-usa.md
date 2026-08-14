# SETATECH USA, INC.

> **Status:** ⚠️ **Archived in Double — but not quiet** · **Owner:** Firm · **Last updated:** 2026-08-14

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

> ⚠️ **NEVER FULLY SWEPT — this file starts from a narrow base.** Created **2026-08-14** from
> the migrated TaxDome notes plus an incremental pass from the **2026-08-08** baseline forward,
> on Lilian's instruction not to re-read history already captured. **No full historical sweep of
> Gmail, Drive, Ping or Double has ever run for this client.** A gap here means *not yet looked
> at*, not *nothing there*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** SETATECH USA, INC.
- **Entity type:** Corporation (Inc) — ⚠️ **federal tax classification NOT RECORDED** (§5). Double has **no `Tax Return Type`** for this client.
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_ — the client's own domain is `setatech.global`
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** **Bookkeeping monthly · Sales tax quarterly · Payroll monthly · Income tax yes** _(Double properties)_ — a full-service engagement, which is what makes the archive (§5) hard to read
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_. Payroll runs on **Gusto** (§3).

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Director of Sales — **Angela Saturno** | Double client / Drive _(Lilian, 2025-03-07)_ |
| Client-side contact on the Gusto alerts | a `@setatech.global` address, cc'd with the firm _(Gmail, 2026-08-13)_ |
| Assigned staff | 🔴 **Julia Kononova** _(Double)_ — the only one of these seven clients not assigned to Lilian |

- **Double client:** [app.doublehq.com/close?cid=706706](https://app.doublehq.com/close?cid=706706)
- **Double case note:** none yet — ⚠️ **the Gusto payroll block may become one** (§6)

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **Gusto** | Payroll + contractor payments | _(pending — Drive link)_ | 🔴 **Payroll is BLOCKED** on an outstanding balance (§5) |
| Double client portal | Document exchange | n/a | Client record **archived** 2026-07-22 |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** **Yes — quarterly** _(Double)_. ⚠️ Whether it is still being filed after the archive is unknown.

### Payroll
- **Applies?** **Yes — monthly** _(Double)_, run through **Gusto**, including **contractor payments**.
- 🔴 **Currently blocked** — see §5.

### Bookkeeping & monthly close
- **Applies?** **Yes — monthly** _(Double)_. No QuickBooks connected, so the books run somewhere else — **establish where**.

### Income tax
- **Applies?** **Yes** _(Double `Income Tax = true`)_
- **Return type(s) & deadlines:** ⚠️ **NOT RECORDED — and this one is a real gap, not the "files nothing" shape.** Double has **no `Tax Return Type`** for this company while `Income Tax = true`, i.e. *we do prepare their income tax* but no form is named. Per [`tax-season-readiness`](../../../.claude/skills/tax-season-readiness/) §1b that combination goes to **review**, never to a conclusion. **Ask Lilian which form this company files.**
- **Current status:** Double's 2025 tax project reads **`filed`** — but **`filedAt` is empty**. Those two disagree, and the skill's rule is to read both and trust neither alone. **Confirm the 2025 return was actually filed, and when.**

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

- 🔴 **ARCHIVED IN DOUBLE ON 2026-07-22 — AND ITS PAYROLL IS STILL RUNNING, AND CURRENTLY BLOCKED.** On **2026-08-13**, three weeks after the archive, Gusto emailed that **the company's payroll is blocked over an outstanding balance on the Gusto account**, and separately that **an automated contractor payment could not be processed**. The alert went to the client **and to four people at the firm** (Julia, Lilian, Liudmyla, Maria). **So either the archive is wrong, or the firm is still on a live payroll it has stopped tracking.** Settle which before anything else — a blocked payroll means employees and contractors are not being paid.
- 🔴 **NO `Tax Return Type` IS RECORDED, AND `Income Tax = true`.** That combination is **not** the "this company files nothing" pattern (which needs the income-tax service to be off and the form to sit on an owner). It reads as *we prepare their income tax and nobody wrote down which form* — a genuine gap. **Ask; do not infer.** _(This is the first live case since the rule was written on 2026-08-13 — and it is the counter-case, not the Aura case.)_
- ⚠️ **The 2025 tax project says `filed` but carries no `filedAt` date.** Do not treat 2025 as a closed year on the strength of the status alone.
- **The engagement on file is full-service** — monthly bookkeeping, quarterly sales tax, monthly payroll and income tax — which is a lot of recurring obligation to have gone quiet. **If the client really has left, several filings may still be owed for the stub period**; if it has not, four services are unattended.
- **Angela Saturno is the Director of Sales** _(Lilian, 2025-03-07 — migrated TaxDome note)_. Contact details in Double/Drive.
- **This is the only one of the seven backfilled clients assigned to Julia** rather than Lilian, which matters for who to ask about it.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2025-03-07 — the contact note.** _(Lilian, migrated TaxDome notes.)_ Angela Saturno is the Director of Sales.
  - **2026-05-15 — Double client record created.**
  - **2026-07-22 — Double client record ARCHIVED.** No reason is recorded anywhere reachable.
  - **2026-08-13 — Gusto: payroll blocked.** Two separate messages the same day — an **automated contractor payment could not be processed**, and **payroll is blocked because of an outstanding balance on the Gusto account**. The second went to the client and to four people at the firm. **No response or action is recorded.**
- **Nothing else is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Status:** Double says `filed`, with no filing date. Unconfirmed.
- **Return type:** unknown — not recorded (§4).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle the archive-vs-live contradiction, today.** The record was archived 2026-07-22; the payroll is blocked as of 2026-08-13 with the firm cc'd. **A blocked payroll is people not getting paid.** Decide whether the firm still acts here, and tell the client either way.
- 🔴 **Get the `Tax Return Type` recorded** — `Income Tax = true` with no form named is a gap that will silently mis-sort this client in every readiness report.
- **Confirm the 2025 return was filed and get the date** — the status and `filedAt` disagree.
- **Establish where the bookkeeping actually lives**, since `Bookkeeping = Monthly` but no QuickBooks is connected.
- **If the engagement did end**, work out which of the four recurring services still owe a final filing.
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] Why the Double record was archived, and by whom
- [ ] What the company does, its state, and its owner
- [ ] Which income-tax form it files
- [ ] Where the books are kept
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706706](https://app.doublehq.com/close?cid=706706) — **archived**
- **Double tax project (2025):** [tax-return?cid=706706&projectId=219897](https://app.doublehq.com/tax-return?cid=706706&projectId=219897)
- **Migrated TaxDome notes:** Drive `*QBO Clients and Individuals > SETATECH USA INC` (and the `*Dupplicated` copy) — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
