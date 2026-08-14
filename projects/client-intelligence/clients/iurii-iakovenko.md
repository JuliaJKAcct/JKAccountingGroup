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

> ⚠️ **NO FULL HISTORICAL SWEEP HAS RUN.** Created 2026-08-14; the Gmail pass covered
> **2024-11 → 2026-08** (a targeted catch-up after the first version drew conclusions from a
> six-day window). Ping, Drive and Double's document library are **still unswept**. A gap below
> means *not yet looked at*. The catch-up is recorded in
> [`sweep-state.md`](../automation/sweep-state.md).

## 1. Snapshot

- **Business name:** Iurii Iakovenko & Alina Yakovenko — an **individual (joint) client record**
- **Entity type:** Individual taxpayers — Form 1040 _(Double: `Account Type = Individual`, `Tax Return Type = 1040`, read 2026-08-14)_
- **Home state:** _(pending)_
- **Industry / what they do:** ⚠️ **He runs businesses** — he signs as **CEO of Semalt**, and the 2025 organizer carried workbooks for **two LLCs** (§5). SEO / digital marketing, on the names
- **Primary language:** _(pending — likely Ukrainian or Russian)_
- **Our engagement (services we provide):** individual income tax (1040). Bookkeeping **N/A**, `1099 Preparation = false`, `Annual Report = false` _(Double properties)_
- **Fiscal year-end:** calendar year
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-14)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| The clients — a married couple on one joint record | Double client (link below) |
| He is the **CEO of one of the two LLCs** and activates the portal from that account | Double / TaxDome |
| Assigned staff | **Lilian Gonzalez** _(Double)_ |

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double case note:** none — no agency matter has been worked for this client

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| **TaxDome** (legacy) | Where both organizers and all documents live | n/a | 2024 organizer completed 2025-03-10; 2025 organizer completed 2026-03-12 |
| Double client portal | The current portal | n/a | `Organizer Status = Completed` mirrors the TaxDome event |
| Bank (direct deposit) | The refund/payment on the return | 🔒 Double / Drive — **never here** | The client supplied account and routing numbers (§5) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending — depends on what the two LLCs do and where)_

### Payroll
- **Applies?** No _(Double)_

### Bookkeeping & monthly close
- **Applies?** **No — `Bookkeeping = N/A`** _(Double)_. ⚠️ He prepares his **own** figures — a P&L workbook per LLC and a home-office worksheet arrive with the organizer (§5).

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **Form 1040**, calendar year. ⚠️ **The plain `1040` in Double does not account for two LLC workbooks and a 1099-K.** Schedule C (or a partnership return sitting behind the 1040) is the obvious question. **Unsettled — confirm, don't assume.**
- **Our role:** the firm prepares and files
- **Current status:** 🔴 **2025 return not filed.** Double's "2025 Taxes" project is **`inProgress`**, `filedAt` empty, **original** due date 2026-04-15. ⓘ **An extension is very likely on file** — the firm ran a "File Extension" round across the roster in May 2026 — so **with a 4868 the deadline is 2026-10-15 and he is not late.** Confirm the 4868.
- **Organizer status:** **Completed 2026-03-12 in TaxDome.** The client's side has been done for five months; **this one is waiting on us.**
- **Process notes (→ future SOP):**
  - **What he sends, every year, unprompted:** a **P&L workbook per LLC**, a **home-office deduction** worksheet, driver's licences, and a **1099-K**. 2024 also brought a **Form 1095-A** (marketplace health cover — it blocks filing until it is in hand, so check for the 2025 one).
  - **He supplied bank details for direct deposit** _(Julia, 2025-04-08)_ — on file in Double/Drive, **never written here**.

### Licenses & other filings
- **Applies?** _(pending)_ — two LLCs will each owe an annual report in their state of registration; **nothing records who files them.**

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **HE IS NOT A PLAIN 1040 CLIENT — TWO LLCs SIT BEHIND THIS RETURN.** With the 2025 organizer he uploaded **`YourSeoBoard_LLC_2025.xlsx` and `Semalt_LLC_2025.xlsx`** (2026-03-12), and he signs the firm's documents from a **CEO** address at one of them. Double still reads `Tax Return Type = 1040`, `Bookkeeping = N/A`. **Establish how each LLC is taxed and which schedules the 1040 actually carries** before preparing anything.
- 🔴 **THE CLIENT'S SIDE HAS BEEN FINISHED SINCE 2026-03-12 AND THE RETURN IS STILL UNFILED.** Organizer `Completed`, project `inProgress` — **the hold is on us, not on him.** Confirm the extension (which moves the deadline to 2026-10-15), then find out what is actually outstanding and record it, because nothing does.
- ⚠️ **A Form 1095-A was on the 2024 file** — marketplace health coverage, which **blocks filing** until it is in hand. **Check whether the 2025 one has arrived**; it is the single most common reason a return like this stalls.
- ⚠️ **The two spouses' surnames are transliterated differently on one record** — `Iakovenko` and `Yakovenko`, and his own licence file reads **`Hakovenko`**. **Search all three** (and `Яковенко`) before concluding a source has nothing; a single-spelling search silently misses half the family.
- 🔒 **Bank routing and account numbers were supplied for the refund** _(Julia, 2025-04-08)_ and are recorded **nowhere here** — read them from Double/Drive when a filing needs them.
- **He does his own bookkeeping and hands over finished workbooks.** Useful to know before offering a service he already performs — and a reason to sanity-check the figures rather than take them as reconciled.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-14 — **File created**, then **corrected the same day.** The first version published "a plain 1040 client — no business" from a six-day Gmail window; an independent review falsified it. A wider pass produced the entries below. _(Worked by Lilian.)_
  - **2025-02-17 / 2025-04-08 — portal accounts activated** from two different addresses, one of them a company CEO address.
  - **2025-03-10 — the 2024 organizer completed**, with a **Form 1095-A**, a **1099-K**, a **P&L workbook**, a **home-office deduction** worksheet and both licences.
  - **2025-04-08 — the 2024 return signed** by both spouses; the migrated TaxDome note records that **he supplied bank details** for it.
  - **2026-03-12 — the 2025 organizer completed**, with **`YourSeoBoard_LLC_2025.xlsx`** and **`Semalt_LLC_2025.xlsx`**.
- **Nothing further was found in the sources actually searched** — Double live, and Gmail from 2024-11 forward. **Ping, Drive and Double's document library have never been swept**, so this is a statement about the search, not about the world.

### Tax year 2025 — the review

- **Filing position:** Form 1040, joint — **with two LLCs behind it**, treatment unsettled.
- **Organizer:** Completed 2026-03-12.
- **Status:** `inProgress`, unfiled; the work sits with the firm.
- **Watch:** whether a 2025 Form 1095-A exists, as it did for 2024.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish how `YourSeoBoard LLC` and `Semalt LLC` are taxed** — disregarded, partnership or S-corp — and which schedules the 1040 therefore carries. Everything else about this return follows.
- 🔴 **Find out what is blocking the return on our side** and record it. The client finished in March; five months of silence is not documented anywhere.
- **Check for a 2025 Form 1095-A** — the 2024 return had one, and it blocks filing.
- **Confirm the 2025 Form 4868 is on file**, which moves the deadline to 2026-10-15.

### Information still needed

- [ ] Each LLC's state, tax classification and annual-report position
- [ ] Which state the couple lives in, and their working language
- [ ] Whether there are dependants
- [ ] Whether either LLC needs a separate return the firm is not preparing
- [ ] Ping, Drive, and Double's documents — never swept

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710639](https://app.doublehq.com/close?cid=710639)
- **Double tax project (2025):** [tax-return?cid=710639&projectId=219327](https://app.doublehq.com/tax-return?cid=710639&projectId=219327)
- **Migrated TaxDome notes:** Drive `4. Documents > Iurii Iakovenko` — read 2026-08-13.
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending)_
