# Iurii Iakovenko & Alina Yakovenko

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

- **Business name:** Iurii Iakovenko & Alina Yakovenko — an **individual (joint) client record**, not a company
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
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
| The clients — a married couple on one joint record | Double client (link below) |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Tax organizer + document exchange | n/a | 2025 organizer **Completed** (§4) |
| Bank (for the refund/payment) | Direct deposit on the return | 🔒 Double / Drive — **never here** | The client supplied account and routing numbers (§5) |

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
- **Current status:** 🔴 **2025 return NOT FILED.** Double tax project "2025 Taxes" is **`inProgress`**, `filedAt` empty, original due date **2026-04-15** — roughly **four months past** as of this file's date.
- **Organizer status:** **Completed** _(Double)_ — so the client's side is done and the return is sitting with us.
- **Process notes (→ future SOP):**
  - **The client supplied bank details for direct deposit** _(Julia, 2025-04-08)_ — they are on file in Double/Drive and are **never written here**.

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

- 🔴 **THE CLIENT'S SIDE IS FINISHED AND THE RETURN IS STILL UNFILED, FOUR MONTHS PAST THE DEADLINE.** The organizer reads `Completed` and the project reads `inProgress` — so this one is waiting on **us**, not on them. **Confirm whether an extension is on file**, then work out what is actually outstanding.
- 🔒 **Bank routing and account numbers were supplied for the return** _(Julia, 2025-04-08)_ and are recorded **nowhere in this repo** — that is deliberate, they are identity-block data. Read them from Double/Drive when a filing needs them.
- ⚠️ **The two spouses' surnames are transliterated differently on the same record** — `Iakovenko` and `Yakovenko`. **Search both spellings** (and `Яковенко`) before concluding a source has nothing on this family; a search on one form will silently miss half.
- **This is a plain 1040 client** — no business, no bookkeeping, no payroll, no annual report.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2025-04-08 — bank details supplied.** _(Julia, migrated TaxDome notes.)_ The client provided account and routing numbers for the return. 🔒 Neither is recorded here.
- **Nothing after 2025-04-08 is recorded anywhere the firm can reach**, other than Double's own project status. Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Filing position:** Form 1040, joint.
- **Organizer:** Completed.
- **Status:** `inProgress`, unfiled — the work sits with the firm.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Confirm whether a 2025 extension was filed**, then finish the return — the client's side has been done since the organizer was completed.
- **Establish what is actually blocking it on our side**, and record it, so this does not repeat.
- **Run the one-time full historical sweep** — never done for this client.

### Information still needed

- [ ] What they do and which state they live in
- [ ] Which language they work in
- [ ] Whether there are dependants
- [ ] Whether an extension exists for 2025
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double tax project (2025):** [tax-return?cid=710639&projectId=219327](https://app.doublehq.com/tax-return?cid=710639&projectId=219327)
- **Migrated TaxDome notes:** Drive `4. Documents > Iurii Iakovenko` — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
