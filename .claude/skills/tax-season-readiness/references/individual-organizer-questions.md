# The firm's individual (1040) tax organizer — question bank

The questions JK Accounting Group asks an individual client in the tax organizer.

> ## Provenance and coverage — read this first
>
> Captured **2026-07-30** from **one client's partially-completed organizer (~46% done)**, supplied
> by Lilian because at the time the organizer template was not readable through the Double MCP.
>
> ### ⚠️ That reason expired on 2026-08-06 — the live template IS readable now
>
> Double's MCP gained organizer tools. **`get_organizer(organizerId)` returns every slide, section,
> option list and conditional-logic rule** of a real organizer — the authoritative wording, current
> for whatever year that organizer belongs to. See [`double-mcp`](../../double-mcp/) §2.2.
>
> So this file is no longer the *only* source, and its two big caveats below (unknown year,
> incomplete coverage) are now **answerable rather than blocking**: read a live organizer instead of
> asking Lilian for a PDF. What this file is still good for is being a **stable, reviewable, cheap**
> copy — `get_organizer` is a ~120-slide payload per call, and a committed file can be diffed and
> cited.
>
> Two rules that do **not** change:
>
> - **Structure only — for THIS file.** Question wording is captured from the organizer's
>   structure, never from a client's answers. Reading answers is a separate activity, permitted
>   for analysis since 2026-08-11 under [`double-mcp`](../../double-mcp/) §2.2 — and **nothing
>   from a response ever lands in this file or any other**: it returns SSNs, driver's licenses,
>   dates of birth and bank account numbers.
> - **Never invent a question.** If wording isn't here and isn't read from a live organizer, it
>   doesn't go in.
>
> **Which tax year that organizer belongs to is unresolved.** The document is *titled* as a 2023
> organizer, yet its dependents question asks about a child "born AFTER December 31, 2024" — which
> cannot be a 2023 question. The likeliest explanation is that Double renders the **current**
> template text into every organizer instance regardless of year, but that is unconfirmed. Treat the
> wording below as current-ish and the year as unknown.
>
> **Coverage is therefore incomplete.** Only the sections the client actually reached are
> recorded: **General Information** and **Income** (the latter partially). Everything after that
> point is **not captured** — see "Known gaps" at the bottom. Sections listed there are absent
> from this file *because we haven't seen them*, not because the organizer lacks them.
>
> **Question wording is verbatim; anything else is marked.** Every question below is copied from the
> source document. Where something is an inference or an artefact of *this client's* partly-filled
> copy, it says so inline. Do not add questions from general tax knowledge — an invented question
> would later be read as the firm's own wording and asked of a real client. If a section is needed
> and isn't here, read it from a live organizer with `get_organizer` (or ask Lilian) — never write
> it from general tax knowledge.
>
> **No client data.** The source was one client's partly-filled organizer; only the question
> wording was taken. Answers, names, SSNs, dates of birth and phone numbers were deliberately
> left out and must never be added.

---

## Format facts

- **Document name pattern:** `JK {tax year} 1040 Organizer - {Client Name}`
- **Opens with:** "Welcome to your tax organizer!"
- **Structure:** slide/page based — the wording refers to "a later slide" and "the following
  page", so questions and their document uploads sit on separate pages.
- **Filed as** `{year} individual Tax Organizer.pdf` in the client's TaxDome folder (parent skill §4).
  One organizer per year is the *intent*, but Double shows clients with **2 and 3 active organizers**
  at once, so don't assume a single one — see the parent skill §5.
- **A distinct answer state exists:** *"Client marked this question as not applicable"* — that is
  not the same as unanswered, and it is not the same as "No".

---

## Section 1 — General Information

### Your name and info

| Field | Notes |
|---|---|
| First Name and Middle Initial | |
| Last Name | |
| Social Security Number | |
| Occupation | |
| Date of birth | |
| Primary Phone Number | |
| Email Address | |
| Please select the tax year for which you are completing this tax organizer | The organizer asks the client to state the year |

### Spouse

A spouse block follows, in which these fields were visible: **Occupation**, **Date of birth**,
**Primary Phone Number**, **Email Address**. ⚠️ **The full spouse field list was not visible** — it
is probably not identical to the taxpayer block above (no name or SSN field appeared), so treat this
as partial rather than "the same fields again".

| Question |
|---|
| Spouse's driver's license — "Please upload the front and back of your spouse's driver's license" |
| Did you live apart from your spouse for the last 6 months of the tax year? |
| Can anyone claim YOU as a dependent on their tax return? |

### Dependents

| Question |
|---|
| Do you have any dependents to claim on your return this year? |
| Was your main home located in the US for at least 183 days in the tax year? |
| Are you claiming a child who lived with any other adult relative for more than half of the tax year? |
| Is any of your dependents a US citizen born AFTER December 31, 2024? |

> ⚠️ That last question carries a **hardcoded date**, and it is the clue that the source document's
> year is unresolved (see the provenance note at the top): a child born after 31 Dec 2024 is a
> **2025** question, in a document titled as a 2023 organizer. So this is *not* evidence of a stale
> date — more likely the template text is shared across years and was updated for a later season.
> Two things to confirm once, with Lilian: which year this wording actually belongs to, and that the
> date is rolled forward each season.

---

## Section 2 — Income

### Income types

**Question:** "Did you receive any of the following types of income in the tax year?"
(multi-select checkbox list)

**Helper text shown to the client:** *"Next to each type of income, we've listed common forms
typically received, which we'll ask you to upload in a later slide. If you received an income
type but have not received a form, please select the checkbox and add a description to the
relevant slide."*

| Option | Status |
|---|---|
| Self-employment (Profit&Loss And Balance Sheet) | ⚠️ **Visible in the source — most likely because this client selected it.** The wording is the firm's; its presence is not evidence about the rest of the list |
| _(the remaining options were not visible at all)_ | ❓ **Not captured** — the full option list is a known gap |

### Foreign income and foreign accounts

| Question | Helper text / attachment |
|---|---|
| **Foreign Income:** Do you have any foreign income? | "Did you earn any income from foreign countries this year? Or do you have a foreign tax credit carryover from a prior year? If so, please say how much and where it came from." |
| Did you have foreign accounts or investments that had an aggregate value of at least **$10,000** at any moment of the tax year? | "If you did, please download and complete the following template. You will be asked to upload it in the next page:" → **foreign-accounts template** (link below) |

### Other income

| Question | Helper text |
|---|---|
| **Other:** Did you receive any non-taxable income this year? | "If so, please tell us about it. Examples include: Supplemental Security Income, Child Support, Food Stamps, Welfare, Housing Assistance." |

### Business income

| Question | Notes |
|---|---|
| Does the business have a tax registration number (EIN)? | |
| Business structure | |
| Who owns the business? | One option value was visible — `Taxpayer` — but ⚠️ probably because the client picked it. The **full option list is a known gap** |
| **Profit and Loss template** — "If you own any businesses for which we do not handle the accounting, please download and complete the attached Profit & Loss template for each of those businesses. You will be asked to upload the completed template on the following page:" | → **P&L template** (link below) |
| Did you use your car for the business during the tax year? | |

---

## Templates the organizer sends clients to

Both are Google Sheets the client downloads, fills, and uploads back. The links are the ones the
organizer itself hands to clients, so they should be the **firm's blank templates** — worth
confirming once that their sharing scope is deliberate (clients must be able to open them) and that
neither has been overwritten with a filled copy.

| Template | Used for | Link |
|---|---|---|
| Foreign accounts / investments | The ≥ $10,000 aggregate foreign-account question (FBAR-type reporting) | [Google Sheets](https://docs.google.com/spreadsheets/d/1GZclIGkaZr2-8wRSWP94VXEPGj8-Rl2N/edit) |
| Profit & Loss | Businesses the client owns **where the firm does not do the accounting** | [Google Sheets](https://docs.google.com/spreadsheets/d/1kPSo6amD7g01QmA8CaUqY9VrMaWqDLfX/edit) |

---

## Known gaps — not yet captured

The source client stopped at ~46%, so nothing past "Business income" was visible. These are
**expected** to exist but are **unverified**; do not write them into the tables above without a
source.

**These gaps are now fillable without waiting on anyone** — `get_organizer(organizerId)` returns the
complete slide list of a live organizer, hidden slides included (see
[`double-mcp`](../../double-mcp/) §2.2). Anyone extending this file should read a current 2025
organizer's **structure** and record the wording verbatim, marking the date and the organizer it
came from. Structure only — never the responses:

- The full option list for the "types of income" checkbox (only self-employment was visible)
- The remaining `Business structure` / `Who owns the business?` option values
- Document-upload pages (W-2s, 1099s, K-1s and the like are referenced as "a later slide")
- Deductions, credits, itemized deductions
- Health insurance / HSA, education, retirement contributions
- Estimated tax payments already made
- Banking details for refund / direct deposit
- State-specific questions
- Any final review, attestation or signature step

**To close these:** Lilian supplies a fuller organizer — ideally a **blank/template** one, or a
client's organizer at or near 100%. If it is a client's, only the question wording gets recorded
here; answers stay out.

---

## What to keep out of this file

- Any **client's answers** — those are client data and live in Double.
- Names, SSNs, dates of birth, addresses, phone numbers, dollar figures.
- **Anything invented.** A gap listed above is a known gap; a fabricated question is a silent
  hazard, because a future session would use it as the firm's wording with a client.
