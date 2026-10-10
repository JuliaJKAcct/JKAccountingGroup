# Artem Chursinov

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-10-10

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

- **Business name:** Artem Chursinov — an **individual** client record _(Double `Account Type: Individual`, 2026-10-01)_. Lilian writes the first name **"Artiom"**; Double, TaxDome and QuickBooks all spell it **Artem**
- **Entity type:** n/a — individual taxpayer. **Files JOINTLY with his wife, Ekaterina Chursinova** — the 2024 return is a joint return in both names _(file name of the filed 2024 return; both spouses signed the e-file authorization in TaxDome, 2025-08-27/28)_
- **Home state:** _(pending — not established.)_ 🆕 **The couple were OUTSIDE the United States on 2025-08-12** — the client's own words to Lilian, which is why the firm could not reach them by phone; he said they had bank access from there _(Gmail, 2025-08-12)_. Whether they are US residents living abroad, or were travelling, is not stated
- **Industry / what they do:** _(pending)_ — what did come out: in 2025 he had a phone consultation with Julia on **organising the household's taxes in the country where they are**, so that reporting to the US is easier afterwards, and asked on 2025-08-12 whether he needed a second consultation to act on it; the Zoom of 2025-08-25 was set for exactly that _(Gmail, 2025-08-12)_
- **Primary language:** **Russian** — the client wrote to Julia in Russian through the TaxDome chat (2025-08-15)
- **Our engagement (services we provide):** **Income tax only — Form 1040** _(Double: `Income Tax: true`, `Tax Return Type: 1040`, `Bookkeeping: N/A`, `1099 Preparation: false`, `Annual Report: false`, 2026-10-01)_. **Plus the FBARs** (FinCEN Form 114) — the firm filed one for each spouse for 2024. **Assigned staff in Double: Lilian.** ⚠️ The 2024 return was worked by **Julia** (TaxDome era — she held the Zoom meeting and received every notification)
- **Fiscal year-end:** calendar year
- **Accounting platform:** `platform: none` — correctly; an individual with no books

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details.

| Role | Where to find them |
|---|---|
| The client himself | Double client (link below) |
| **His wife, Ekaterina Chursinova — joint filer, and an active point of contact** | Same Double client. She activated her own TaxDome access to his account (2025-08-27), signed the 2024 e-file authorization first, and **Ping resolves this client to HER email address** — so she is at least as likely as he is to be the one answering |

- **Double client:** [app.doublehq.com/close?cid=710622](https://app.doublehq.com/close?cid=710622)
- **2025 tax project:** [projectId 219312](https://app.doublehq.com/tax-return?cid=710622&projectId=219312)
- **Double case note:** none — no note exists on this client (checked 2026-10-01)

## 3. Systems & access

| System | What it's for | Where credentials live | Non-sensitive reference |
|---|---|---|---|
| Double client portal | Organizer + document exchange (2026 →) | _(n/a — client's own portal login)_ | `JK 2025 1040 Organizer`, organizer id `141416`, published 2026-06-22 |
| TaxDome (legacy, until the 2026 migration) | Where the 2024 return was organized, chatted and signed | _(retired)_ | Both spouses had activated access to the account |
| Google Drive (Julia) | The migrated TaxDome folders | n/a | Folder `Artem Chursinov` — `1. Completed Tax organizers`, `Client uploaded documents`, `Firm docs shared with client`, `Private`. **No `Notes` folder.** A second folder of the same name in Maria's Drive holds one file, `Aug-15-2025, 2-42 PM.pdf` (by its name and date, the TaxDome chat of that day — **not opened**) |

## 4. Obligations & recurring processes

### Income tax
- **Applies?** Yes — **Form 1040, married filing jointly**, prepared by this firm.
- **Return type(s) & deadlines:** 🔴 **Tax year 2025 is ON EXTENSION — the extended deadline is 2026-10-15.** A `2025 4868 Ext.pdf` is filed in Double (`JK Accounting Group > … > 2025`), and the `Extension Filed` task was marked Done on 2026-05-25. ⚠️ **The Double tax project still shows `dueDate` 2026-04-15** — the original date, never moved to the extended one; read the deadline from here, not from the project.
- **Our role:** we prepare and e-file.
- **What feeds it:** a **Form 1095-A (Marketplace coverage) for 2025 — filed in Double 2026-10-09** _(Double, 2026-10-09)_; and a **foreign-income** component — the client filled the firm's `Foreign Income Template` for 2024 (two versions: 2025-06-12 and 2025-08-15). Whatever produced foreign income in 2024 should be asked about again for 2025.
- **Process notes (→ future SOP):** _(pending)_

### FBAR (FinCEN Form 114)
- **Applies?** **Yes for 2024 — one FBAR per spouse, filed by the firm and accepted by FinCEN on 2025-08-28.** So they hold foreign accounts.
- 🔴 **2025 FBARs are due the same day as the extended return — 2026-10-15** (the automatic FBAR extension date). **That date does not move again.** Nothing on file shows the 2025 FBARs have started.

### 1099 filings / annual report
- **Applies?** No — `1099 Preparation: false`, `Annual Report: false`.

## 5. Key facts & quirks

- 🟡 **UPDATE 2026-10-10 — THE CLIENT HAS WOKEN UP, FIVE DAYS BEFORE THE DEADLINE.** On **2026-10-08 the client opened the 2025 organizer twice** (18:31 and 21:50 UTC) and, between those, **removed seven attachments from it** — foreign bank statements for 2025 (a Russian-bank statement and a report file; the wife's personal accounts at **two Georgian banks**, which the client's own file names say were also shown in 2024) and a PDF of the 2024 Foreign Income Template — i.e. he is **re-doing the uploads**, not abandoning them _(Double activity log, 2026-10-08)_. On **2026-10-09 Lilian saved a Form 1095-A for 2025 into the 2025 folder** — so the household had Marketplace health coverage in 2025 and the return needs the premium-tax-credit reconciliation _(Double activity log, 2026-10-09)_. The Double project is still **Not Started** and no preparer is assigned. ⬇️ _The original 2026-10-01 finding follows, kept for the record._
- 🔴 **THE 2025 RETURN AND BOTH 2025 FBARs ARE DUE 2026-10-15, AND AS OF 2026-10-01 NOTHING HAD STARTED.** The 2025 organizer was published on 2026-06-22 and is at **0% complete** after more than three months; every task in the 2025 tax project is `notStarted`; no preparer is assigned; no document for 2025 has been uploaded; and no email from the client since August 2025 turned up in a search of Julia's Gmail.
- 🔴 **THEY HAVE FOREIGN ACCOUNTS AND FOREIGN INCOME.** Two FBARs for 2024 and the firm's Foreign Income Template — so the 2025 return and the FBARs both need the year's foreign-account maximum balances and the foreign income, which only the client can supply.
- ⚠️ **His wife is as much the contact as he is.** She activated her own access in TaxDome, signed first, and is the email Ping knows the client by. Write to both.
- ⚠️ **The Double tax project's status was set back.** Lilian moved `2025 Taxes` to In Progress on 2026-05-25 (when the extension was recorded); **Julia moved it back to Not Started on 2026-08-04.** No reason is recorded anywhere that was searched.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2025-04-11 → 2025-04-22 — two consultation invoices raised and paid (QuickBooks notifications in Julia's Gmail). The client activated his TaxDome account on 2025-04-13 and uploaded two images through the **2024 individual Tax Organizer** the same day.
- 2025-06-12 — the client uploaded `Foreign Income Template.xlsx` in TaxDome.
- 2025-08-13 — a further invoice raised and paid; Julia scheduled a Zoom meeting for 2025-08-25, which the client accepted.
- 2025-08-15 — in the TaxDome chat "Preparing your return" the client asked, in Russian, whether he could send the data as a Google Sheets link, then uploaded `Foreign Income Template 2.xlsx`.
- 2025-08-12 → 2025-08-15 — 🆕 **recovered from Julia's Gmail (this was not in the file).** 2025-08-12: Lilian wrote (Russian) that the firm urgently needed information because **Julia was about to go on maternity leave** and they wanted to finish early; the firm had tried to phone both spouses without success and asked whether **the wife's bank accounts** were in order or the household was still waiting on a bank. The client answered the same day that **they were not in the US**, that they had access to the bank and could send everything, and asked whether he needed a second consultation with Julia about organising taxes in their country; Lilian offered **2025-08-25 11:00 (Miami)** and he accepted. 2025-08-14/15: Lilian sent through TaxDome the foreign-bank-accounts document he had filled in and asked him to check it was complete; he replied that **one account was still missing**, asked whether he could send his offline version, and uploaded it into the TaxDome chat the same day (the `Foreign Income Template 2` upload). _(Gmail, 2025-08-12 to 2025-08-15)_
- 2025-08-25 — Zoom meeting with Julia ("Artem Chursinov's Zoom Meeting"). No Ping transcript was found for it.
- 2025-08-27 — the wife activated her own TaxDome access; the return-preparation invoice was raised and paid the next day.
- 2025-08-28 — **both 2024 FBARs submitted and accepted by FinCEN** (acknowledgement to Julia). **The 2024 joint return's e-file authorization was signed by both spouses** in TaxDome (`2024 CHURSINOVandCHURSINOVAARTEMandEKATERINA.pdf`).
- 2025-12-01 — TaxDome's automatic "Return has been e-filed" message and a review request went out to both spouses. ⚠️ **That is a pipeline automation, not an IRS acknowledgement** — no IRS acceptance for the 2024 return was found in Julia's Gmail; the acceptance would be in ATX.
- 2026-05-19 — client record created in Double by Maria (TaxDome migration); 2026-06-02 the TaxDome files were migrated into the Double file library and Lilian filed the 2024 return and the 2025 extension into their year folders.
- 2026-05-25 — Lilian recorded the **2025 extension (Form 4868)** as filed and moved the 2025 project to In Progress.
- 2026-06-22 — Lilian published the **JK 2025 1040 Organizer** to the client portal (after deleting a stray `00 Organizer` draft).
- 2026-08-04 — Julia moved the 2025 project back to **Not Started**.
- 2026-10-01 — **File created** by a session at Lilian's request (*"¿en qué estado estábamos con Artiom Chursinov y su declaración?"*). **There was no prior file and no prior session record in the repo** — if an earlier session worked on him, nothing from it was saved. **Sources read:** Double (client, properties, tax project, tasks, notes, organizer metadata incl. completion %, file names, activity log), Julia's Gmail (all mail naming him or either spouse's address), Ping (client-scoped meeting + email search — **nothing found**), Google Drive (file names only). **Not read:** the content of any document, and the organizer's answers (there are none — 0%).

- 2026-10-10 — **FULL (unbounded) first sweep.** Sources: Double (client, properties, notes, full activity log, contacts, projects, tasks, file list — no organizer tool used), Julia's Gmail (every thread naming either spouse's name or address, paged to the end; earliest 2025-04-11, latest 2025-12-01 apart from a Double task digest), Ping (client- and person-scoped; **no meeting transcript or email found for this client**), Google Drive (name and full-text search; metadata only). 🔴 **What moved since 2026-10-01** (all from the Double activity log): on **2026-10-08 the client opened the organizer twice and removed seven attachments** (foreign bank statements for 2025 and a copy of the 2024 Foreign Income Template) — a re-upload in progress, **not** completion; the portal contact record was touched the same day; on **2026-10-09 Lilian filed a 2025 Form 1095-A in the 2025 folder**. The organizer's completion percentage was **not read** (organizer tools are out of this sweep's scope), so it is unknown whether 0% still holds. **Nothing else** — no email from either spouse after 2025-08-28 (the TaxDome-era pipeline messages of 2025-12-01 excepted), no note, no task moved, the 2025 project still Not Started with no preparer, due date in Double still the original 2026-04-15 while the real deadline is **2026-10-15**. 🆕 Two things the 2026-10-01 file lacked: the 2025-08 email exchange (above) and that the household was **abroad** in Aug 2025. _(Double, Gmail, Ping, Drive, 2026-10-10)_
  **Chase pass (ages as of 2026-10-10):**
  - 🔴 **2025 joint 1040 + both 2025 FBARs — due 2026-10-15, FIVE DAYS OUT.** Client activity began 2026-10-08; no preparer assigned; project Not Started. **Who owns it is still not recorded** (Double assigns Lilian; the 2024 work was Julia's).
  - **Why Julia set the project back to Not Started on 2026-08-04** — 67 days; a search of the Double activity log and Gmail found no reason.
  - **IRS acceptance of the 2024 return** — a Gmail search (all mail naming either spouse, unbounded, 2026-10-10) did not find an IRS acknowledgement; 2025-12-01 TaxDome message is an automation only. Confirm in ATX. Pending since 2025-12-01 (313 days).
  - **Home state / occupation / which countries hold the income** — still not established (see §1: abroad in Aug 2025; accounts in at least Russia and Georgia by file name only).

### Tax year 2025 — the review

- **Not started.** No pre-return review has been run: the organizer carries no answers (0%) and no 2025 document has arrived. **Comparison base when it does:** the filed 2024 joint return, `2024 CHURSINOVandCHURSINOVAARTEMandEKATERINA.pdf`, in the Double file library — read only through the redactor, on request.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **The 2025 joint return and the two 2025 FBARs — due 2026-10-15 (5 days).** As of 2026-10-01 the organizer was at 0% and nothing for 2025 had arrived; **since 2026-10-08 the client is active in the organizer (re-uploading foreign statements) and a 2025 Form 1095-A is filed** (§5, §6 log 2026-10-10). **Who owns the chase is not recorded** (Double assigns Lilian; the 2024 work was Julia's).
- **Why the 2025 project was set back to Not Started on 2026-08-04** — Julia's change; no reason found.
- **IRS acceptance of the 2024 return** — not seen in any source read; confirm in ATX.
- **Home state, occupation, source of the foreign income** — not established.

### Information still needed

- [ ] Home state
- [ ] Occupation / what produces the household's income
- [ ] Where the foreign income and the foreign accounts are (country, type) — the 2024 Foreign Income Template would answer part of it; not opened
- [ ] IRS acceptance of the 2024 return

## 7. Links

- **Double client:** [cid 710622](https://app.doublehq.com/close?cid=710622) · [2025 tax project](https://app.doublehq.com/tax-return?cid=710622&projectId=219312) · [2025 organizer](https://app.doublehq.com/clients/710622/portal/organizers/141416)
- **Double case note:** none
- **Google Drive folder (sensitive vault):** [Artem Chursinov — Julia's migrated TaxDome folder](https://drive.google.com/drive/folders/1ixDn9Fr0ty2KNS5mppZOgl5xFemSao3n)
- **Related SOPs:** none
