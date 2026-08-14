# Igor Melomed & Yelena Lovkina

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

- **Business name:** Igor Melomed & Yelena Lovkina — an **individual (joint) client record**, not a company
- **Entity type:** Individual taxpayers — Form 1040. ⚠️ **Double records `1040`, and the firm's own 2023 working papers are a Schedule C** (§5) — the two are not reconciled
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_ — he ran a **self-employed business** in 2023 (Schedule C)
- **Primary language:** _(pending — likely Russian)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, no 1099 preparation, no annual report _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The clients — a married couple on one joint record | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710635](https://app.doublehq.com/close?cid=710635)
- **Double case note:** none — no agency matter has been worked for this client

⚠️ **THERE ARE TWO MELOMED HOUSEHOLDS IN DOUBLE — pick the right one.** This file is
**`Igor Melomed & Yelena Lovkina` (710635)**. The other is **`Grigoriy & Margarita Melomed`
(710633)**, a separate client with its own record and no file of its own. The migrated TaxDome
folder is named `IGOR MELOMED`, which routes here. **Never merge the two, and check the ID before
writing anywhere.**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | 2025 organizer **Sent**, not completed (§4) |
| Google Drive | The 2023 Schedule C working figures | _(pending — Drive link)_ | Revenue, COGS, home-office computation (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_ — depends on what the Schedule C business actually did

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double `Tax Return Type = 1040`)_. ⚠️ **See §5 — a Schedule C was prepared for 2023 and the column does not say so.**
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return NOT STARTED.** Double tax project "2025 Taxes" is **`notStarted`**, no preparer assigned, `filedAt` empty, original due date **2026-04-15** — roughly **four months past** as of this file's date.
- **Organizer status:** **Sent** _(Double)_ — sent and not completed. That is the likely hold.
- **Process notes (→ future SOP):**
  - **A home-office deduction was computed for 2023 from total square footage vs. one room.** If the same claim is made again, the method and the measurements should be reused — they are in Drive.

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

- ⚠️ **DOUBLE SAYS `1040`; THE FIRM'S OWN 2023 WORKING PAPERS ARE A SCHEDULE C — AND NOBODY HAS RECONCILED THEM.** Julia worked 2023 Schedule C figures for this client _(2024-10-14)_: revenue, cost of goods sold, office supplies, client entertainment and a home-office computation. Double's `Tax Return Type` says plainly `1040`, with no Schedule C marker. **Both are recorded here with their sources and the fact is left UNSETTLED** — the business may have ended between 2023 and now, or the column may simply predate this. **Ask before assuming either**; do not "fix" the Double column on the strength of a two-year-old working paper.
- 🔴 **THE 2025 RETURN HAS NOT BEEN STARTED AND THE ORGANIZER WAS NEVER COMPLETED.** `notStarted`, no preparer, four months past the deadline, organizer still `Sent`. **Check for an extension first.**
- ⚠️ **TWO MELOMED HOUSEHOLDS EXIST IN DOUBLE** — `Igor Melomed & Yelena Lovkina` (710635, this file) and `Grigoriy & Margarita Melomed` (710633). **Confirm the client ID before writing anything anywhere.** §2 carries the detail.
- **An open classification question was never answered** _(Julia, 2024-10-14)_: a **customer-appreciation / company-events** expense that she was unsure how to classify. It is still unresolved, and it will recur if the business is still running. Client entertainment at restaurants sat alongside it — the two are treated very differently, so the answer matters.
- **All 2023 figures stay in Drive** — revenue, COGS, the office-supplies total and the square footages. Only the method and the open questions live here.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2024-10-14 — the 2023 Schedule C working note.** _(Julia, migrated TaxDome notes.)_ Recorded revenue, cost of goods sold, office supplies, **a customer-appreciation / company-events item Julia was unsure how to classify**, client entertainment at restaurants, and a **home office computed from total vs. one-room square footage**. Figures in Drive.
- **Nothing after 2024-10-14 is recorded anywhere the firm can reach**, other than Double's own project status. Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Status:** not started, unfiled, organizer sent but not completed.
- **The question to settle first:** whether the Schedule C business still exists, which decides what the 2025 return even looks like.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Settle whether there is still a Schedule C business**, and reconcile that with Double's `Tax Return Type = 1040`. Everything else about 2025 follows from the answer.
- 🔴 **Confirm whether a 2025 extension was filed**, then chase the organizer — it is still in `Sent`, and the project has no preparer.
- **Answer the 2023 classification question** — customer appreciation / company events, sitting unanswered since Julia raised it.
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] What the Schedule C business is, and whether it is still operating
- [ ] Which state they live in and which language they work in
- [ ] Whether there are dependants
- [ ] Whether an extension exists for 2025
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710635](https://app.doublehq.com/close?cid=710635)
- **Double tax project (2025):** [tax-return?cid=710635&projectId=219323](https://app.doublehq.com/tax-return?cid=710635&projectId=219323)
- **The OTHER Melomed household (not this client):** [app.doublehq.com/close?cid=710633](https://app.doublehq.com/close?cid=710633) — `Grigoriy & Margarita Melomed`, no file of its own
- **Migrated TaxDome notes:** Drive `*QBO Clients and Individuals > IGOR MELOMED` — read 2026-08-13, written up here 2026-08-14. _(This client appears in the `*QBO` subtree only, not in `*Dupplicated`.)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
