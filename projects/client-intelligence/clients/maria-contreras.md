# Maria Contreras

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

> ⚠️ **NEVER FULLY SWEPT — and this is the THINNEST file in the set.** Created **2026-08-14**
> from the migrated TaxDome notes plus an incremental pass from the **2026-08-08** baseline
> forward, on Lilian's instruction not to re-read history already captured. The migrated note for
> this client is **one line**. **No full historical sweep of Gmail, Drive, Ping or Double has ever
> run for her** — so almost everything below is *not yet looked at*, not *nothing there*. The
> catch-up is recorded in [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Maria Contreras — an **individual** client, not a company
- **Entity type:** Individual taxpayer — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_ — ⓘ the only Spanish-surnamed client in this backfill set, in a practice whose clients are mostly Ukrainian- and Russian-speaking. **Do not assume the language; check.**
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
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710646](https://app.doublehq.com/close?cid=710646)
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
- **Current status:** ✅ **2025 return FILED** — Double tax project "2025 Taxes" reads `filed` with `filedAt` **2026-05-25**. ⓘ That is after April 15, so **an extension was presumably on file**; nothing reachable confirms it.
- **Organizer status:** **Completed** _(Double)_
- **Process notes (→ future SOP):**
  - **Car insurance was collected as a 2024 deduction item** _(Julia, 2025-04-08)_ — the amount is in Drive. ⚠️ **Car insurance is only deductible against a business or rental use**, so this implies some activity the file does not otherwise record. **Establish what the vehicle is used for** before repeating the claim.

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

- ⚠️ **A CAR-INSURANCE DEDUCTION WAS TAKEN FOR 2024 ON A CLIENT WITH NO BUSINESS ON RECORD** _(Julia, 2025-04-08)_. Personal car insurance is not deductible on a 1040 — it needs a **business, rental or other qualifying use** behind it. Either this client has activity nobody has written down, or the item needs re-examining. **This is the single most useful thing to settle about her**, and it is the reason this file is not merely thin but *unresolved*.
- ⓘ **The whole migrated note is that one line.** Everything else here comes from Double's own columns. Treat the emptiness as unexplored, not as a client with nothing to know.
- ✅ **The 2025 return is filed** — 2026-05-25, after the April deadline, so an extension was presumably in place.
- **Do not assume her working language** from the rest of this client base. Check Double before writing to her.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created** as part of closing the seven-client gap left by the TaxDome-notes backfill. Sources: the migrated TaxDome note, Double's five planes read live, and an incremental Gmail/Ping pass from the **2026-08-08** baseline. _(Worked by Lilian.)_
  - **2025-04-08 — the one-line note.** _(Julia, migrated TaxDome notes.)_ **Car insurance for 2024**; the amount is in Drive.
  - **2026-05-25 — 2025 Form 1040 filed** _(Double tax project)_.
- **Nothing else is recorded anywhere the firm can reach.** Per Lilian's instruction of 2026-08-12, left open rather than chased or inferred.

### Tax year 2025 — the review

- **Filing position:** Form 1040, filed 2026-05-25.
- **Organizer:** Completed.

### Outstanding items (CI-only — never in the SOP)

- ⚠️ **Establish what the car insurance was deducted against** — a business, a rental, or something else. It is the one unexplained item on this client.
- **Run the one-time full historical sweep** — never done for her, and this file has almost nothing else in it.
- **Confirm whether a 2025 extension was filed** (the return went in 2026-05-25).

### Information still needed

- [ ] What she does, which state she lives in, and which language she works in
- [ ] Whether she has any business, self-employment or rental activity
- [ ] Whether there are dependants or a spouse on the return
- [ ] Everything from Gmail before 2026-08-08, Drive, Ping and prior years — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710646](https://app.doublehq.com/close?cid=710646)
- **Double tax project (2025):** [tax-return?cid=710646&projectId=219333](https://app.doublehq.com/tax-return?cid=710646&projectId=219333)
- **Migrated TaxDome notes:** Drive `4. Documents > Maria Contreras` — read 2026-08-13, written up here 2026-08-14.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
