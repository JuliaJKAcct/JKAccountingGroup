# The firm's individual (1040) tax organizer — question bank

The questions JK Accounting Group asks an individual client in the tax organizer.

> ## Provenance and coverage — read this first
>
> Captured **2026-07-30** from one **2023** organizer that a client had **partially completed
> (~46%)**, supplied by Lilian because the organizer template is **not readable through the
> Double MCP** ([`double-mcp`](../../double-mcp/) §2).
>
> **Coverage is therefore incomplete.** Only the sections the client actually reached are
> recorded: **General Information** and **Income** (the latter partially). Everything after that
> point is **not captured** — see "Known gaps" at the bottom. Sections listed there are absent
> from this file *because we haven't seen them*, not because the organizer lacks them.
>
> **Nothing here is inferred.** Every question below is verbatim from the source document. Do not
> add questions from general tax knowledge — an invented question would later be read as the
> firm's own wording. If a section is needed and isn't here, ask Lilian for a fuller organizer.
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
- **Per client per year:** one organizer, e.g. the completed PDFs filed as
  `2025 individual Tax Organizer.pdf` (see the parent skill's §4).
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

The same block repeats for the spouse — **Occupation**, **Date of birth**, **Primary Phone
Number**, **Email Address**.

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

> ⚠️ That last question's date is **hardcoded to a specific year** in the 2023 organizer we saw.
> Worth checking it is rolled forward each season rather than left stale.

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
| Self-employment (Profit&Loss And Balance Sheet) | ✅ verified in the source |
| _(the remaining options in this checkbox list were not visible)_ | ❓ not captured |

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
| Who owns the business? | Verified option value: `Taxpayer` (the other options weren't visible) |
| **Profit and Loss template** — "If you own any businesses for which we do not handle the accounting, please download and complete the attached Profit & Loss template for each of those businesses. You will be asked to upload the completed template on the following page:" | → **P&L template** (link below) |
| Did you use your car for the business during the tax year? | |

---

## Templates the organizer sends clients to

Both are Google Sheets the client downloads, fills, and uploads back.

| Template | Used for | Link |
|---|---|---|
| Foreign accounts / investments | The ≥ $10,000 aggregate foreign-account question (FBAR-type reporting) | [Google Sheets](https://docs.google.com/spreadsheets/d/1GZclIGkaZr2-8wRSWP94VXEPGj8-Rl2N/edit) |
| Profit & Loss | Businesses the client owns **where the firm does not do the accounting** | [Google Sheets](https://docs.google.com/spreadsheets/d/1kPSo6amD7g01QmA8CaUqY9VrMaWqDLfX/edit) |

---

## Known gaps — not yet captured

The source client stopped at ~46%, so nothing past "Business income" was visible. These are
**expected** to exist but are **unverified**; do not write them into the tables above without a
source:

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
