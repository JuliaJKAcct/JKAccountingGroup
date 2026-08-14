# R & G Friendly Inc

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

> ⚠️ **NEVER FULLY SWEPT — this file starts from a narrow base.** Created **2026-08-14** from
> the migrated TaxDome notes plus an incremental pass from the **2026-08-08** baseline forward,
> on Lilian's instruction not to re-read history already captured. **No full historical sweep of
> Gmail, Drive, Ping or Double has ever run for this client.** A gap here means *not yet looked
> at*, not *nothing there*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** R & G Friendly Inc
- **Entity type:** Corporation (Inc) **taxed as an S-corp** — the firm files an **1120-S** _(Double `Tax Return Type = 1120-S`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_
- **Our engagement (services we provide):** income tax (1120-S). Bookkeeping **N/A**, no 1099 preparation, no annual report _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected today** _(2026-08-14)_. ⚠️ It was in use in 2024 (§5).

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |
| Worked the 2024 QuickBooks review | **Maria Zavarce** _(migrated note, 2024-06-05)_ |

- **Double client:** [app.doublehq.com/close?cid=710589](https://app.doublehq.com/close?cid=710589)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks | Bookkeeping (2024) | _(pending — Drive link)_ | ⚠️ **A company credit card was never connected** (§5) |
| Credit card | Business spending | _(pending)_ | The register was worked from a **pasted statement**, not a feed (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** _(pending)_ — an S-corp with an active owner normally owes reasonable compensation through payroll; nothing is recorded either way

### Bookkeeping & monthly close
- **Applies?** **`Bookkeeping = N/A` today** _(Double)_ — but QuickBooks was being worked in 2024 (§5). **Establish whether the firm still does the books, and if not, who does.**

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1120-S**, calendar year, due **March 15** _(not April 15 — an S-corp return runs a month earlier than a 1040)_
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — Double tax project "2025 Taxes" reads `filed` with `filedAt` **2026-05-25**. ⓘ That is after the March 15 deadline, so **an extension (Form 7004) was presumably on file**; nothing reachable confirms it.
- **Process notes (→ future SOP):**
  - ⚠️ **Do not assume the credit-card activity is complete in the books.** See §5 — the card has no feed, so anything not pasted in by hand is missing.

### Licenses & other filings
- **Applies?** No annual report on our side _(Double `Annual Report = false`)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- ⚠️ **THE COMPANY CREDIT CARD WAS NEVER CONNECTED IN QUICKBOOKS, AND HAD NO TRANSACTIONS THERE** _(Maria Zavarce, 2024-06-05)_. The register was worked from a **statement pasted in by hand**. **So the books are only as complete as somebody's manual paste** — any card spending nobody transcribed is simply absent, and it will not show as a gap. **Check whether the feed was ever connected before relying on a P&L for this client.**
- **An S-corp with no payroll recorded and no bookkeeping engagement is worth a second look.** `Bookkeeping = N/A` and nothing on payroll, yet the firm files the 1120-S — so the books come from somewhere else. **Find out where, and whether the owner takes reasonable compensation**; a shareholder-employee paid only in distributions is the classic S-corp exposure.
- ✅ **The 2025 return is filed** — 2026-05-25, after the March 15 S-corp deadline, so an extension was presumably in place. **Confirm the Form 7004** if it ever matters.
- **The deadline is MARCH 15, not April 15.** Written down because six of the seven clients backfilled alongside this one are 1040 filers on the April date, and this is the one that is not.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2024-06-05 — the QuickBooks review note.** _(Maria Zavarce, migrated TaxDome notes.)_ The **credit card was not connected in QuickBooks** and had no transactions there; the note carried a long pasted credit-card register. The durable fact is the **missing feed**, not the register — the figures stay in Drive.
  - **2026-05-25 — 2025 Form 1120-S filed** _(Double tax project)_.
- **Nothing else is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Filing position:** Form 1120-S, filed 2026-05-25.
- **Open:** whether the books behind it captured the credit-card activity (§5).

### Outstanding items (CI-only — never in the SOP)

- ⚠️ **Find out whether the credit card was ever connected to QuickBooks**, and if not, how card spending reaches the books today.
- **Establish who keeps the books**, given `Bookkeeping = N/A` on a company whose return we file.
- **Check the owner's reasonable-compensation position** — an S-corp with no payroll recorded.
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] What the business does, its state and its owner
- [ ] Whether payroll exists, and who runs it
- [ ] Where the bookkeeping is done
- [ ] Whether a Form 7004 extension was filed for 2025
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710589](https://app.doublehq.com/close?cid=710589)
- **Double tax project (2025):** [tax-return?cid=710589&projectId=219280](https://app.doublehq.com/tax-return?cid=710589&projectId=219280)
- **Migrated TaxDome notes:** Drive `4. Documents > R & G Friendly Inc` — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_ — the reasonable-compensation question routes to the [`reasonable-compensation` skill](../../../.claude/skills/reasonable-compensation/)
