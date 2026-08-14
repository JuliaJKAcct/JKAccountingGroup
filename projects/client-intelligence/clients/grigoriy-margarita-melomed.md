# Grigoriy & Margarita Melomed

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

> ⚠️ **NO FULL HISTORICAL SWEEP HAS RUN.** Created 2026-08-14 from Double read live plus a
> targeted Gmail pass over **2026-03 only** — the month this client's return was worked. Ping,
> Drive and every other period are **unswept**. A gap below means *not yet looked at*. There is
> **no migrated TaxDome note** for this client, so it was outside the backfill entirely; it
> surfaced only because a *different* Melomed household was being written up.

## 1. Snapshot

- **Business name:** Grigoriy & Margarita Melomed — an **individual (joint) client record**
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending — likely Florida, on the family group's footprint)_
- **Industry / what they do:** 🔴 **He is the owner/signer of [R & G Friendly Inc — "Lucky Pawn & Jewelry"](./rg-friendly.md)** and takes a **W-2** from it (§5)
- **Primary language:** _(pending — likely Russian)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** _(n/a — an individual record; the company's books are under [`rg-friendly.md`](./rg-friendly.md))_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The clients — a married couple on one joint record | Double client (link below) |
| He signs from **more than one address** — at least three are in use for this family | Double / TaxDome |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710633](https://app.doublehq.com/close?cid=710633)
- **Double case note:** none — no agency matter has been worked for this client

⚠️ **THERE ARE TWO MELOMED HOUSEHOLDS IN DOUBLE, AND A COMPANY BETWEEN THEM.** This file is
**`Grigoriy & Margarita Melomed` (710633)**. The other household is
[`Igor Melomed & Yelena Lovkina`](./igor-melomed.md) **(710635)**, and the company is
[`R & G Friendly Inc`](./rg-friendly.md) **(710589)**. **Check the client ID before writing
anywhere** — a "Melomed" fact belongs to one of three records, and the migrated TaxDome folder
named `IGOR MELOMED` belongs to the *other* household.

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where the 2025 return was signed | n/a | Signed by both spouses 2026-03-14 |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — an individual record. Any sales tax sits on [`rg-friendly.md`](./rg-friendly.md).

### Payroll
- **Applies?** No on this record. ⓘ **He is a W-2 employee of the family company**, whose payroll runs on ADP — see [`rg-friendly.md`](./rg-friendly.md).

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double)_
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — signed by both spouses **2026-03-14**, Double records `filed` with `filedAt` **2026-05-27**. ⓘ The eleven-week gap between signature and the recorded filing date is unexplained; confirm the real filing date if it ever matters.
- **Organizer status:** **Completed** _(Double)_
- **Process notes (→ future SOP):**
  - ⚠️ **Vehicle mileage needs checking against the prior year, every year.** On the 2025 return the odometer reading given for one car did not reconcile with the prior year's closing figure, and it took three exchanges to resolve: one vehicle had been **sold** and the reading he first gave belonged to the other. **Ask which car, and whether one was disposed of, before accepting a mileage figure.**
  - **He answers quickly but approximately.** The mileage exchange was corrected twice in three minutes. Read the answers together, not one at a time.

### Licenses & other filings
- **Applies?** No — on this record.

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS THE OWNER OF [R & G FRIENDLY INC — "LUCKY PAWN & JEWELRY"](./rg-friendly.md), AND TAKES A W-2 FROM IT.** His 2025 W-2 from that company is on the company's file, and he signs its 1120-S. **So this individual return and that company return are one piece of work** — the S-corp's K-1 and his W-2 both land here, and the company's return has to be settled before this one can be. Never treat the two as unrelated clients.
- ⚠️ **THREE DOUBLE RECORDS SIT ON ONE MELOMED FAMILY BUSINESS** — this household (710633), [`Igor Melomed & Yelena Lovkina`](./igor-melomed.md) (710635), and [`R & G Friendly Inc`](./rg-friendly.md) (710589). **Confirm which record a fact belongs to before writing it.** §2 carries the detail; how the two households relate to each other is **not established**.
- ⚠️ **A VEHICLE WAS SOLD DURING 2025 AND THE MILEAGE FIGURES CROSSED OVER** (2026-03-13). The odometer reading first given for one car turned out to belong to the other, which had been sold. **Check disposals before accepting mileage**, and expect the same next year.
- **This client had no migrated TaxDome note**, so the 2026-08-13 backfill never touched it and nothing here predates March 2026. The file is thin because nobody has looked, not because there is little.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created.** This client surfaced while writing up a *different* Melomed household and was found to have **no CI file at all**, despite being live and having its 2025 return filed. Built from Double read live plus a Gmail pass over March 2026. _(Worked by Lilian.)_
  - **2026-03-05 — the company's document round** (on [`rg-friendly.md`](./rg-friendly.md)) included **his 2025 W-2 from R & G Friendly Inc**.
  - **2026-03-13 — the mileage exchange.** Julia queried an odometer figure that did not match the prior year; it emerged that **one vehicle had been sold** and the reading belonged to the other. Corrected across three replies.
  - **2026-03-14 — the 2025 Form 1040 signed** by both spouses, and Julia confirmed the balance due and asked which date to schedule the payment for. 🔒 **The amount is not recorded here.**
  - **2026-05-27 — Double records the 2025 return as filed.**
- **Nothing further was found in the sources actually searched** — Double live, and Gmail across March 2026 only. **Ping, Drive and every other period have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Filing position:** Form 1040, joint; signed 2026-03-14, recorded filed 2026-05-27.
- **Income:** a **W-2 from the family company**, plus whatever the S-corp K-1 carried.
- **Watch:** vehicle disposal and mileage (§5).

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Map the Melomed group** — three Double records, one family business, and no established relationship between the two households. Until that is drawn, every "Melomed" fact is ambiguous.
- **Add this client to the weekend-sweep scope and give it a first full historical pass** — it has never been swept, and it was invisible to the backfill because it has no TaxDome note.
- **Confirm the real 2025 filing date** — signature and recorded filing are eleven weeks apart.
- **Check whether the sold vehicle was a business asset**, in which case its disposal belongs on the company return rather than here.

### Information still needed

- [ ] How this household relates to the other Melomed household
- [ ] Which state they live in, and their working language
- [ ] Whether there are dependants
- [ ] Everything before March 2026, and every source other than Double and Gmail — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710633](https://app.doublehq.com/close?cid=710633)
- **Double tax project (2025):** [tax-return?cid=710633&projectId=219321](https://app.doublehq.com/tax-return?cid=710633&projectId=219321)
- **The family company:** [`rg-friendly.md`](./rg-friendly.md) — R & G Friendly Inc, DBA Lucky Pawn & Jewelry (710589)
- **The other Melomed household:** [`igor-melomed.md`](./igor-melomed.md) (710635)
- **Migrated TaxDome notes:** **none** — this client had no `Notes` folder in the migration.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
