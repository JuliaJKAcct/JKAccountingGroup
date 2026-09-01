# Artem Markarian

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-09-01

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

## 1. Snapshot

- **Business name:** Artem Markarian — an **individual** client record _(Double `Account Type: Individual`, 2026-09-01)_
- **Entity type:** n/a — individual taxpayer. **A shareholder of [ECOORGANIC USA LLC](./ecoorganic-usa.md)**, an S corporation, and **the owner the firm actually corresponds with**
- **Home state:** not recorded here. The company operates from **Darien, Connecticut**; his own residence has not been established in this file
- **Industry / what they do:** his business activity reaches the 1040 through the S corporation — **plus a second, separate activity: he hosted cars on Turo during 2025** (§5), which Julia has ruled belongs on his individual return
- **Primary language:** **Russian** — the firm's correspondence with him is in Russian
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-09-01)_. **Assigned staff: Lilian.** The firm's work for the company is a separate engagement on its own record
- **Fiscal year-end:** calendar year
- **Accounting platform:** `platform: none` — correctly. The books that matter to his return are the company's

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client himself | Double client (link below) |
| **His company** — an S corporation, and the source of his K-1 | [`ecoorganic-usa.md`](./ecoorganic-usa.md) · [Double cid 719473](https://app.doublehq.com/close?cid=719473) |
| **The second shareholder** of that company — 2025 is a **two-shareholder** year; that owner **exited effective 2026-01-01** | the company's own Double record and [`ecoorganic-usa.md`](./ecoorganic-usa.md) §2 |

- **Double client:** [app.doublehq.com/close?cid=710623](https://app.doublehq.com/close?cid=710623)
- **Double case note:** **`510952` — `CASE · 2025 Turo host activity`**, opened 2026-09-01. It carries **Turo's reply verbatim** and the client's own answer on which cars were hosted. ⛔ **One note per case — update that note, never open a second one.**

## 3. Systems & access

| System | What it's for | Where credentials live | Non-sensitive reference |
|---|---|---|---|
| Double client portal | How he receives and returns documents | _(n/a — client's own portal login)_ | **`Organizer Status: Sent`** as of 2026-09-01 — sent, not returned |
| **Turo** (host account) | The 2025 rental activity → Schedule C | _(the client's own account)_ | 🔴 **He cannot log in.** That is why the 2025 earnings figures had to come from Turo Support by email rather than from the Earnings Summary download. **Worth restoring access before the next filing season** — the per-car breakdown and every future year depend on it |
| WhatsApp / text | How Julia reaches him in practice | n/a | The 2026-09-01 answer on which cars were on Turo came back by text, in Russian |

## 4. Obligations & recurring processes

### Income tax
- **Applies?** Yes — **Form 1040**, prepared by this firm, assigned to Lilian.
- **What feeds it:**
  - 🔴 **A Schedule K-1 from [ECOORGANIC USA LLC](./ecoorganic-usa.md)** — and that company's FY2025 return is **not yet prepared** (deadline **2026-09-15**, extension filed). **His 1040 cannot be finished before it.**
  - 🔴 **A Schedule C for the 2025 Turo activity** — Julia's ruling, 2026-09-01 (§5).
  - ⚠️ **Form 7203 basis.** The company's books hold **no per-shareholder split** of contributions and distributions, and **no prior Form 7203 is held by the firm**. His **opening stock basis is line 15 of his own 2024 Form 7203**, which lives with his 2024 personal return, not the company's. **If it does not exist it has to be reconstructed** — separate, scoped work.
- **Organizer:** `Organizer Status: Sent`. ⚠️ **A company return runs off its books, not its owner's organizer** — the organizer gates *his* return, not the company's.

### 1099 filings
- **Applies?** `1099 Preparation: false` on his own record. ⚠️ **But see §5 — the Turo activity may itself have created a 1099-NEC question** if he paid the owner of the third car.

### Annual report / other filings
- **Applies?** `Annual Report: false` on this record. The company's filings sit on the company's record.

## 5. Key facts & quirks

- 🔴 **HE HOSTED CARS ON TURO IN 2025, AND IT IS HIS — NOT THE COMPANY'S.**
  **Julia's decision, 2026-09-01:** *"el income y los gastos, es decir, toda la actividad relacionada
  con Turo, pertenece a Artem y, por tanto, debe ir en su declaración individual."* So the income and
  the costs that go with it land on **his Schedule C**, and the company's Turo-related spending becomes
  **owner distributions** there. **Figures live in the company's
  [working paper](../../tax-returns/ecoorganic-usa-llc/2025-form-1120s.md) §8A and in Double note
  `510952` — never in this file.**
- 🔴 **NO FORM 1099-K WAS ISSUED FOR 2025**, and Turo said so in writing: his host earnings did not meet
  the IRS threshold. ⚠️ **Two things follow.** The income is **taxable regardless** — the absence of a
  form changes nothing. And the corroboration the firm had planned on is **gone permanently**: the plan
  was to read the **name and TIN on the 1099-K** to settle whether the Turo account is the company's or
  his personally. **There is no form, so that route does not exist** — it is settled by asking, or from
  the account registration.
- **The three cars he named** *(by text to Julia, 2026-09-01, in Russian)*: a **Hyundai Santa Fe**, an
  **Audi A6**, and — *"и пару раз сдавал товарища Хундай Kona"* — **a friend's Hyundai Kona**, rented
  out through his account a couple of times.
  🔴 **The Kona is the one that creates work.** He **cannot depreciate a car he does not own**, and its
  costs are not his. **What he received for it, what (if anything) he paid the friend, and whether that
  payment needed a Form 1099-NEC** are all open.
- ⚠️ **Turo's "reimbursements" are neither income nor a deductible expense** — Turo's own tax
  documentation says so. They stay **out** of gross receipts **and** the reimbursed portion has to come
  **out** of the fuel deduction, or the same fuel is deducted twice.
- ⚠️ **Turo vehicles are LISTED PROPERTY.** Form 4562 Part V wants **business / commuting / other
  mileage per vehicle**, and **no mileage log has been seen**.
- ⚠️ **His name appears on some of the company's vehicle finance payments, and the other shareholder's
  on the rest.** That is the firm's **first hard evidence** toward splitting the company's pooled
  owner-capital account between the two shareholders — **evidence, not proof**: the name on an ACH is
  the name on the loan, not necessarily who benefited. **Ask.** Detail in the company's working paper.
- **A per-car earnings breakdown has been requested from Turo.** Julia asked him on 2026-09-01 to reply
  to Turo by email and ask for the 2025 earnings **broken down by car** — as audit backup, and because
  it is the only thing that splits the total across three vehicles. **Pending.**

## 6. History & open questions

### Log

- 2026-09-01 — 🚗 **Turo established as his, and the documentation captured.** Working on the company's
  FY2025 return, the firm reached Turo's own answer on his 2025 host earnings — obtained by the client
  from Turo Executive Support after Julia asked him to write to them, because **he cannot log in to his
  own Turo account**. **Turo confirmed no Form 1099-K was issued for 2025.** Julia then ruled that the
  whole Turo activity — income and expenses — is **his, not the company's**, which puts it on a
  **Schedule C** in his 2025 individual return. The same day he named the cars by text: a Hyundai Santa
  Fe, an Audi A6, and **a friend's Hyundai Kona**. **A Double case note (`510952`) was opened on this
  record carrying Turo's reply verbatim and his own answer**, so the 1040 can be built from source
  documents rather than from memory. ✅ **The threshold Turo quoted was checked against irs.gov** and
  matches what the IRS publishes. **This file was created in the same pass** — he had none until now,
  despite being a named client with his own Double account. _(Worked by Lilian.)_

### Outstanding items (CI-only — never in the SOP)

- 🔴 **His 1040 cannot be completed until the company's FY2025 Form 1120-S is** — the K-1 comes from it,
  and that return is **blocked** on four counts with a **2026-09-15** deadline.
- 🔴 **The per-car earnings breakdown from Turo** — requested 2026-09-01, not yet received.
- 🔴 **Whose Turo account is it?** Not confirmed from the registration. With no 1099-K there is no
  name-and-TIN to read.
- 🔴 **The Kona:** what he received, what he paid the friend, and whether a Form 1099-NEC was owed.
- 🔴 **Form 7203 opening basis** — does his 2024 return carry one? If not, it must be reconstructed.
- ⚠️ **Turo account access** — he cannot log in. Restore it before the next season.
- ⚠️ **His residence / state** is not recorded here and has not been established.

### Information still needed

- His mileage records for the Turo cars, per vehicle, for 2025 — **business, commuting and other**.
- Whether any of the company's Turo **guest** rentals (the company paying to rent a car) were for a job
  — that is the opposite side of the platform from his hosting, and moving them wrongly throws away a
  real deduction.

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710623](https://app.doublehq.com/close?cid=710623)
- **Double case note `510952`:** [the 2025 Turo case log](https://app.doublehq.com/clients/710623/info/notes/510952)
- **His company:** [`ecoorganic-usa.md`](./ecoorganic-usa.md) · [Double cid 719473](https://app.doublehq.com/close?cid=719473)
- **The company's FY2025 working paper** (figures live there, not here): [`2025-form-1120s.md`](../../tax-returns/ecoorganic-usa-llc/2025-form-1120s.md)
