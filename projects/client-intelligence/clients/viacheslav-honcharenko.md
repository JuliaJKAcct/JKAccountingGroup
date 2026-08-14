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

> ⚠️ **NEVER FULLY SWEPT — this file starts from a narrow base.** Created **2026-08-14** from
> the migrated TaxDome notes plus an incremental pass from the **2026-08-08** baseline forward,
> on Lilian's instruction not to re-read history already captured. **No full historical sweep of
> Gmail, Drive, Ping or Double has ever run for this client.** A gap here means *not yet looked
> at*, not *nothing there*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Viacheslav Honcharenko — an **individual** client, not a company
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending — likely Ukrainian or Russian)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, no 1099 preparation, no annual report _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The client | Double client (link below) |
| **A dependent daughter**, added to the 2025 organizer | Double — ⚠️ her **date of birth and SSN** are in the migrated note and are recorded **nowhere** in this repo (§5) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | 2025 organizer **Completed** (§4) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No _(no business activity recorded)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double)_
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return NOT FILED.** Double tax project "2025 Taxes" is **`waitingOnClient`**, `filedAt` empty, original due date **2026-04-15** — roughly **four months past** as of this file's date.
- **Organizer status:** **Completed** _(Double)_ — ⚠️ so the return is **not** waiting on the organizer. Something else was asked of the client and never came back. **Find out what.**
- **Process notes (→ future SOP):**
  - **A dependent daughter was added to the 2025 organizer** _(Lilian, 2026-04-07)_ — so 2025 is the first year with a dependant, and the credits and filing status may both change from the prior year.

### Licenses & other filings
- **Applies?** No

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE ORGANIZER IS COMPLETE AND THE RETURN IS STILL UNFILED, FOUR MONTHS PAST THE DEADLINE.** `waitingOnClient` on a client whose organizer reads `Completed` means the hold is **something specific that was asked for afterwards** — not the questionnaire. **Establish what was asked, and whether an extension is on file**; nothing reachable records either.
- ⚠️ **A DEPENDENT DAUGHTER WAS ADDED FOR 2025** _(Lilian, 2026-04-07)_. Treat the prior year as **not** a template: a first dependant can move filing status, the Child Tax Credit and any education or care credits. 🔒 **Her date of birth and SSN are in the migrated note and are deliberately recorded nowhere here** — read them from Double if a return actually needs them.
- **This is a plain 1040 client** — no business, no bookkeeping, no payroll, no annual report. The whole engagement is the one return.
- **The name transliterates several ways** (Honcharenko / Goncharenko / Гончаренко). Search on more than one spelling before concluding a source has nothing.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2026-04-07 — the 2025 organizer note.** _(Lilian, migrated TaxDome notes.)_ A **dependent daughter** was added to the 2025 tax organizer.
- **Nothing after 2026-04-07 is recorded anywhere the firm can reach**, other than Double's own project status. Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Filing position:** Form 1040, **with a dependant for the first time on record**.
- **Organizer:** Completed.
- **Status:** `waitingOnClient`, unfiled.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Find out what the return is waiting on.** The organizer is complete, so `waitingOnClient` points at a specific follow-up request nobody wrote down.
- 🔴 **Confirm whether a 2025 extension was filed.** Four months past the deadline with no filing recorded.
- **Check the dependant's effect on the 2025 return** — first year with a daughter claimed.
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] What he does and which state he lives in
- [ ] Which language he works in
- [ ] What the outstanding client request is
- [ ] Whether an extension exists for 2025
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710665](https://app.doublehq.com/close?cid=710665)
- **Double tax project (2025):** [tax-return?cid=710665&projectId=219349](https://app.doublehq.com/tax-return?cid=710665&projectId=219349)
- **Migrated TaxDome notes:** Drive `4. Documents > Viacheslav Honcharenko` — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
