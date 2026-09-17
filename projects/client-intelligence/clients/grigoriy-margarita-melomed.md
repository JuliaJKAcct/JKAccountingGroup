# Grigoriy & Margarita Melomed

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-09-12

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

> ✅ **First full historical sweep completed 2026-09-12** — Ping (org-wide `resolve_person` +
> `search_meetings` for both spouses: **zero results about this household**, corroborating
> [`rg-friendly.md`](./rg-friendly.md)'s 2026-08-29 finding of `recentMeetingCount: 0`); Gmail
> (full, unbounded — the correspondence with Julia runs back to **2023-01-12**, far earlier than
> the 2026-03 window this file previously covered); Google Drive (the personal `Grigoriy Melomed`
> folder walked in full, including its `2024` subfolder); Double (`get_client`, properties,
> contacts, `list_notes` — still **zero notes** — and the full `list_activity_log`, 11 entries).
> See §6 log for what each source turned up. There is still **no migrated TaxDome note** for this
> client (outside the 2026-08-13 backfill entirely).

## 1. Snapshot

- **Business name:** Grigoriy & Margarita Melomed — an **individual (joint) client record**
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending — likely Florida, on the family group's footprint)_
- **Industry / what they do:** ✅ **SETTLED 2026-08-29 (mirrored here 2026-09-12): Grigoriy & Margarita Melomed OWN [R & G Friendly Inc — "Lucky Pawn & Jewelry"](./rg-friendly.md).** A full historical sweep of that company's own file, run jointly with [`igor-melomed.md`](./igor-melomed.md) at the owner level, found **no connection whatsoever** to the other Melomed household — R & G Friendly is this couple's company alone. He is its officer and holds a W-2 from it; the two returns were signed the same day, 2026-03-14.
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
- ✅ **Corroborating detail found 2026-09-12 (Double `list_contacts`):** Margarita's own portal-contact record carries **`clientIds: [710633, 710589]`** — she is directly linked to *both* this personal record **and** R & G Friendly Inc's Double client. Grigoriy's contact record carries only `[710633]`. This is independent, structural confirmation of the ownership settled in §1/§5 (a portal contact is not linked to a company by accident).

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
- **Applies?** No on this record. ⓘ **He is a W-2 employee of the family company** — that payroll, and the system it runs on, are on [`rg-friendly.md`](./rg-friendly.md).

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year, due April 15 _(Double)_
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — signed by both spouses **2026-03-14**, Double records `filed` with `filedAt` **2026-05-27**. ⓘ **Do not read the 74-day gap as a late filing** — the sibling company record shows the same pattern (§6), which points at a batch status update in Double. Confirm the real date only if it matters.
- **Organizer status:** **Completed** _(Double)_
- **Process notes (→ future SOP):**
  - ⚠️ **Vehicle mileage needs checking against the prior year, every year.** While working the 2025 return the odometer reading given for one car did not reconcile with the prior year's closing figure, and it took three exchanges to resolve: one vehicle **had been sold** and the reading he first gave belonged to the other. _(Which year the sale fell in was never pinned down.)_ **Ask which car, and whether one was disposed of, before accepting a mileage figure.**
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

- ✅ **SETTLED 2026-08-29, mirrored here 2026-09-12 — THIS RETURN AND [R & G FRIENDLY INC'S](./rg-friendly.md) 1120-S ARE ONE PIECE OF WORK, AND GRIGORIY & MARGARITA OWN THE COMPANY.** A 2025 W-2 from the company in his name was filed with the company's 2025 documents (2026-03-05), the company's 1120-S and this 1040 were signed the same day (2026-03-14, same address), and Margarita's own Double portal-contact record is linked to **both** clients (§2). R & G Friendly Inc's own full historical sweep, run jointly with the *other* Melomed household's file, found **no connection whatsoever** between that household and this company. **This closes the ownership question this file used to carry as open.**
- ✅ **THE THREE-HOUSEHOLD FAMILY-GROUP FRAMING IS RETIRED.** This file used to say three Double records — this household (710633), [`Igor Melomed & Yelena Lovkina`](./igor-melomed.md) (710635), and [`R & G Friendly Inc`](./rg-friendly.md) (710589) — belonged to "one Melomed family group." **They do not.** R & G Friendly Inc is Grigoriy & Margarita's alone; Igor Melomed's household is a **separate, unrelated** family that happens to share a surname. Its own confirmed businesses are Sunoma Inc and Magnum 152, Inc — nothing to do with this household or with pawnbroking. See [`rg-friendly.md`](./rg-friendly.md) §5 and [`igor-melomed.md`](./igor-melomed.md) for the full settlement.
- ⚠️ **A VEHICLE HAD BEEN SOLD AND THE MILEAGE FIGURES CROSSED OVER** (established 2026-03-13, while working the 2025 return). The odometer reading first given for one car turned out to belong to the other, which had been sold. ⚠️ **Which tax year the sale fell in is NOT established** — that is exactly what Outstanding item 4 asks. 🔎 **A lead, found 2026-09-12, not opened:** the client's personal Drive folder's `2024` subfolder holds a document named **`honda.pdf`**, uploaded in **three identical copies** (same file size each time) alongside his 2024 W-2 and Margarita's 1099. A vehicle document filed under the **2024** tax-year folder is consistent with — but does not by itself prove — the sale having fallen in **2024**. Nobody has opened the file to confirm. **Check disposals before accepting a mileage figure**, and expect the same next year.
- **This client had no migrated TaxDome note**, so the 2026-08-13 backfill never touched it. ⚠️ **Superseded 2026-09-12:** the earlier note that "nothing here predates March 2026" is no longer accurate — a full Gmail sweep found direct correspondence with Julia running back to **2023-01-12**, and Drive/Double confirm the relationship is a long-standing one (see §6).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created.** This client surfaced while writing up a *different* Melomed household and was found to have **no CI file at all**, despite being live and having its 2025 return filed. Built from Double read live plus a Gmail pass over March 2026. _(Worked by Lilian.)_
  - **2026-03-05 — the company's document round** (on [`rg-friendly.md`](./rg-friendly.md)) included **his 2025 W-2 from R & G Friendly Inc**.
  - **2026-03-13 — the mileage exchange.** Julia queried an odometer figure that did not match the prior year; it emerged that **one vehicle had been sold** and the reading belonged to the other. Corrected across three replies.
  - **2026-03-14 — the 2025 Form 1040 signed** by both spouses, and Julia confirmed the balance due and asked which date to schedule the payment for. 🔒 **The amount is not recorded here.**
  - **2026-05-27 — Double records the 2025 return as filed.** ⓘ **Do not read the 74-day gap as a late filing.** [`rg-friendly.md`](./rg-friendly.md) shows the same pattern — signed 2026-03-14, recorded filed 2026-05-25 — and **two returns signed the same day whose `filedAt` land two days apart in late May look far more like a batch status update in Double than like two independent late filings.** Read the pair before drawing anything from either.
- **Nothing further was found in the sources actually searched** — Double live, and Gmail across March 2026 only. **Ping, Drive and every other period have never been swept**, so this is a statement about the search, not about the world.
- 2026-09-12 — **First full historical sweep.** Findings by source:
  - **Ping** (`resolve_person` on both spouses, org-wide `search_meetings` for "Grigoriy Melomed" and "Margarita Melomed"): **zero results about this household** — every hit returned was about an unrelated client or topic. Corroborates [`rg-friendly.md`](./rg-friendly.md)'s 2026-08-29 finding of `recentMeetingCount: 0` for the same family.
  - **Double** (`get_client`, properties, contacts, `list_notes`, full `list_activity_log`): still **zero notes**. The activity log (11 entries, full history) shows the Double client itself was **created 2026-05-19 by Maria Zavarce** as "Grigoriy Melomed", then **renamed to "Grigoriy & Margarita Melomed" on 2026-05-27** the same moment the 2025 project was marked Filed — both by Lilian. Contacts confirm Margarita's cross-link to R & G Friendly Inc (§2).
  - **Gmail** (full history, unbounded — no baseline existed): correspondence with Julia runs back to **2023-01-12**, continuing through 2023 (Jan, Mar, Aug, Sep), 2024 (Feb–Dec, including the FL DOR item below and the ADP "insufficient-pay" exchange already known from §5/§6), and 2025 (Feb–Aug). 🔎 **New: an earlier, separate-looking Florida DOR contact, 2024-10-23 → 2024-11-22.** Sharon Wood and Angela Hibbert (Florida Department of Revenue) sent Grigoriy and Julia an **encrypted "Power of Attorney form"** message (2024-10-23, unopened — Microsoft Purview protected message) and further correspondence through 2024-11-22. This is **different senders** than the 2025 audit documented in [`rg-friendly.md`](./rg-friendly.md) §4 (Trevor Holden, May–Jul 2025) and the 2025-08-25 encrypted "Communication" (Erika Gonzalez-Solis) already flagged there as unopened. **Not established** whether this is an earlier phase of the same sales-tax matter or a separate one — the message is encrypted and was not opened. **Flagged for [`rg-friendly.md`](./rg-friendly.md), which is out of this sweep's assigned scope to edit** — its FL DOR audit timeline may need to extend back to October 2024.
  - **Google Drive** (`excludeContentSnippets: true`): the personal `Grigoriy Melomed` folder holds `1. Completed organizers`, `Taxes` (with a `2024` subfolder plus top-level 2024/2025 combined-return PDFs), `Firm docs shared with client`, `Private` (empty), and `Client uploaded documents`. The `2024` subfolder's contents are the 2024 source documents: `W2 Grigory Melomed.pdf`, `wgreg1.pdf`, `margarita 1099.pdf` (×2, duplicate upload), three copies of `honda.pdf` (§5), `medic.pdf` and `dlri.pdf` (not opened — filenames suggest a medical/insurance document and a driver's licence; identity documents are never opened per the redaction rule), and a 2025 receipt. ⚠️ **A naming-collision negative:** a title search for "Margarita" also surfaced Merrill-brokerage 1099-DIV/1099-INT and Form-1095-A documents for **"Margarita and Andrey"** — a different person (this Margarita's husband is Grigoriy, not Andrey). **Not this client's documents** — recorded so nobody attributes them here by mistake.
  - **Repo** (`grep` across `projects/sops/`, `FOLLOW-UPS.md`, `BACKLOG.md`): no hits in `sops/` or `BACKLOG.md`. `FOLLOW-UPS.md` row 33 names this client (historical — the 2026-08-12 discovery that this client had no CI file; closed 2026-08-14). ⚠️ **Not actioned, and outside this sweep's scope:** the 2026-08-29 R & G Friendly sweep's own note records that the ownership correction (Grigoriy & Margarita, not Igor) still needs to be reflected in `README.md`'s Clients index and in `FOLLOW-UPS.md` row 33 — flagged again here, still open.

### Tax year 2025 — the review

- **Filing position:** Form 1040, joint; signed 2026-03-14, recorded filed 2026-05-27.
- **Income:** a **W-2 from the family company**, plus whatever an S-corp K-1 carried. ⚠️ **That combination does not explain the mileage** (§6, outstanding item 4).
- **Watch:** vehicle disposal and mileage (§5).

### Outstanding items (CI-only — never in the SOP)

- ✅ ~~Map the Melomed group~~ — **ANSWERED 2026-08-29, mirrored here 2026-09-12:** R & G Friendly Inc belongs to Grigoriy & Margarita alone; Igor Melomed's household is unrelated (§1/§5).
- ✅ ~~Give this client its first full historical pass~~ — **DONE 2026-09-12.** Ping (zero results), Gmail (full history to 2023-01-12), Drive (personal folder walked in full), Double (full activity log + notes + contacts). See §6 log.
- **Confirm the real 2025 filing date if it ever matters** — 74 days between signature and `filedAt`, and the sibling record shows the same pattern (§6). *Not chased this run — low priority, no budget spent on it.*
- 🔴 **Work out which schedule the vehicle mileage belongs on, and in which year the sale fell.** ⚠️ **A return of W-2 wages plus an S-corp K-1 has no use for mileage at all** — unreimbursed employee vehicle expense is suspended for 2025 — so either there is a Schedule C or E nobody has recorded, or the vehicle belongs on the **company's** return. §1 currently records the engagement as 1040-only. 🔎 **A lead exists (§5): `honda.pdf` ×3 sits in the 2024 Drive folder** — narrows the likely year but was not opened to confirm.
- 🔎 **Ask Lilian or Julia to open the encrypted 2024-10-23 → 2024-11-22 Florida DOR "Power of Attorney form" correspondence (§6)** and confirm whether it is an earlier phase of the 2025 sales-tax audit already documented on [`rg-friendly.md`](./rg-friendly.md), or a separate matter. Not opened this sweep (encrypted Microsoft Purview message).
- **Feed the ownership settlement and the earlier FL DOR correspondence finding back into [`rg-friendly.md`](./rg-friendly.md)** — both concern that file more than this one but were found while sweeping this client; not edited here as it is outside this sweep's assigned scope (already swept 2026-08-29).

### Information still needed

- [x] ~~Who owns R & G Friendly Inc~~ — **ANSWERED 2026-08-29: Grigoriy & Margarita Melomed** (§1/§5)
- [x] ~~How this household relates to the other Melomed household~~ — **ANSWERED 2026-08-29: unrelated** (§1/§5)
- [ ] Which state they live in, and their working language — searched Double properties, Gmail and Drive folder names this run; none state it explicitly
- [ ] Whether there are dependants — not found in any source searched
- [x] ~~Everything before March 2026, and every source other than Double and Gmail~~ — **first full historical sweep completed 2026-09-12** (Ping, Gmail, Drive, Double all read; see §6 log)

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710633](https://app.doublehq.com/close?cid=710633)
- **Double tax project (2025):** [tax-return?cid=710633&projectId=219321](https://app.doublehq.com/tax-return?cid=710633&projectId=219321)
- **The family company:** [`rg-friendly.md`](./rg-friendly.md) — R & G Friendly Inc, DBA Lucky Pawn & Jewelry (710589)
- **The other Melomed household:** [`igor-melomed.md`](./igor-melomed.md) (710635)
- **Migrated TaxDome notes:** **none** — this client had no `Notes` folder in the migration.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
