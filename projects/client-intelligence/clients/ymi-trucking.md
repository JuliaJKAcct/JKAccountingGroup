# YMI TRUCKING LLC

> **Status:** Active · **Owner:** Firm · **Last updated:** 2026-08-29

> ✅ **First full historical sweep completed 2026-08-29** (Ping org-wide, Gmail full history, Drive, Double activity log — all unbounded). See §6 log for what each source added.

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

- **Business name:** YMI TRUCKING LLC
- **Entity type:** LLC **taxed as an S-corp** — the firm files an **1120-S** _(the 2025 extension was a Form 7004 for an 1120-S)_
- **Home state:** ⚠️ **INDIANA — but the IRS has TEXAS on record.** See §5; this is the live problem on this client.
- **Industry / what they do:** ✅ **Confirmed — an active motor-carrier (trucking) operation**, not dormant: lease-to-purchase agreements for a truck and trailer, DOT driver-qualification checks (MVR/PSP), and a dispatch/scheduling system, all found in Drive _(2026-08-29)_
- **Primary language:** _(pending — inferred English)_ — every piece of correspondence found (Gmail, Double) is in English _(2026-08-29, not independently confirmed with the client)_
- **Our engagement (services we provide):** income tax (1120-S) — **plus payroll**, see §4 _(2026-08-29)_
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** Double `platform: none` — **no QuickBooks connected** _(2026-08-12)_. Payroll runs on **Gusto** (§4)

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact — portal admin | Double client (link below) — **also runs a related trucking company, Prime Road Carriers Inc, on the same portal contact** (§5) |
| Previous accountant | Contacted by Julia in March 2026 (§6) — details _(pending)_ |
| Company mailbox | `info@ymitrucking.com` _(role only — see Double for the address)_ |

- **Double client:** [app.doublehq.com/close?cid=710608](https://app.doublehq.com/close?cid=710608)
- **Double case note:** `CASE · IRS — the unexplained 2025 Form 7004, and the Texas address` — note **491842**

## 3. Systems & access

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| ATX (tax software) | Preparing and e-filing the return | n/a — firm software | Rejected the 2025 7004 as already filed (§5) |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | Account ending **6023** is what Gusto debits payroll from _(Gmail, 2026-08-29)_. A separate bank statement in Julia's Drive is what revealed the Texas address (§5) |
| **Gusto** | **Payroll — biweekly, on AutoPilot** _(confirmed 2026-08-29)_ | n/a | Runs automatically every two weeks; the firm (Julia/Lilian/Maria) is copied on every pay-period notice |
| Dispatch / scheduling ("OCAC") | Trip/load scheduling | _(pending)_ | An "OCAC_Schedule Report" is produced monthly in Drive (Marko's own drive) |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** _(pending)_

### Payroll
- **Applies?** ✅ **Yes — via Gusto, on AutoPilot, biweekly** _(confirmed 2026-08-29 — Double records nothing under Payroll; the column is incomplete, same pattern seen on the Melomed-family companies this run)_
- **Our role:** the firm (Julia/Lilian/Maria) is copied on every Gusto pay-period, invoice and account-issue notice; no evidence the firm runs payroll itself
- **Process notes (→ future SOP):** a Gusto→QuickBooks account-mapping sync issue was flagged 2026-08-12 ("Finish mapping accounts with QuickBooks Online integration") — odd, since Double records `platform: none`; worth confirming whether a QuickBooks connection exists that Double doesn't show (the same discrepancy found on R & G Friendly Inc this run)

### Bookkeeping & monthly close
- **Applies?** _(pending)_ — Double shows no QuickBooks connection

### Income tax
- **Applies?** **Yes**
- **Return type(s) & deadlines:** **1120-S**
- **Our role:** the firm prepares and files
- **Current status:** ✅ **2025 return FILED** — Double's "2025 Taxes" project shows `filed`, `filedAt` **2026-07-30** _(confirmed 2026-08-29)_ — comfortably inside the extended (Form 7004) Sept 15 deadline. This **answers** the fourth outstanding item below: the return was filed by the extended deadline.
- **Process notes (→ future SOP):**
  - ✅ **The IRS confirms RECEIVING a Form 7004 for 2025, electronically, on 2026-03-14** — so the extension is on their system. ⚠️ **Acceptance was only assured verbally**; no written confirmation was ever obtained (§6). ⚠️ **But nobody at the firm filed it and the previous accountant says they did not either** (§5). Treat the extension as valid — the IRS has it — while treating **who filed it** as unresolved.
  - **The IRS could not issue a confirmation while the 7004 was still processing.** The agent's assurance was verbal. If written proof is ever needed, it has to be requested later.
  - ✅ **A Form 2848 (power of attorney) was drafted for this client on 2026-03-15** — the day before the IRS call that surfaced the extension/Texas-address issue (§6) — found in Drive 2026-08-29. Consistent with the firm needing POA on file to speak with the IRS about the account.

### Licenses & other filings
- **Applies?** _(pending)_

## 5. Key facts & quirks

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE IRS HAS A TEXAS ADDRESS FOR A COMPANY THAT OPERATES IN INDIANA — STILL UNRESOLVED AFTER A FULL HISTORICAL SWEEP.** Found on **2026-03-16** — not from the client, but from a **bank statement in Julia's Drive**. Julia's account is that the company is **still in Indiana** and has taken a **new mailing address in Texas**. **So the two facts may both be true and the IRS record may even be current** — nobody established which. A full sweep of Gmail, Drive, Ping and Double on 2026-08-29 found **nothing further on this question** — it was never raised again after the March call. **Settle it before assuming an IRS letter went astray**, and settle it before filing anything with an address on it.
- 🔴 **SOMEBODY FILED A FORM 7004 FOR 2025 AND THE FIRM STILL DOES NOT KNOW WHO — UNRESOLVED.** ATX rejected the firm's own 7004 saying one had already been filed; **Julia checked with the previous accountant and it was not them**; the **IRS confirmed receiving one electronically on 2026-03-14**. An unexplained electronic filing against a company's EIN is worth understanding — it is either an unknown third party with the company's details, or something the client did without telling us. No new evidence surfaced this sweep.
- 🔵 **The owner runs a SECOND, related trucking company on the same portal contact — Prime Road Carriers Inc.** _(Confirmed 2026-08-29, Gmail + Drive.)_ The portal contact is linked to **seven** Double client records; Gmail shows YMI Trucking and **Prime Road Carriers Inc** run near-identical Gusto payroll, share a consolidated internal financial workbook (2024), and are copied to the same small group of people every time. **Prime Road Carriers Inc has no Client Intelligence file yet** — flag for a future owner-level sweep; this file only records what belongs to YMI Trucking itself.
- ✅ **The 2025 return WAS filed by the extended deadline** — Double shows `filed`, 2026-07-30, well inside the Sept 15 extended date (§4). The provenance of the 7004 is still open (bullet 2); whether the return itself made it in on time is now settled, and no written confirmation of the extension's own acceptance exists (the IRS never issues one while a 7004 is processing, and none was chased afterwards).

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- 2026-08-13 — **File created** from Lilian's own call notes, kept on her phone before the firm used Claude. _(Lilian's iCloud notes, migrated — folder "YMI Trucking"; note dated 2026-03-16.)_ The operational detail — the IRS agent's name and ID, the fax line — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2026-03-16 — IRS call, prompted by a rejected e-file.** The firm tried to e-file the **Form 7004** for the 2025 1120-S and got a notification saying it **had already been filed**. Julia contacted the **previous accountant**, who said it was not them. The firm called the IRS, which confirmed it **received the 7004 electronically on 2026-03-14**. The agent could not issue any confirmation while it was still processing but **assured Lilian there would be no problem**, since the IRS did have it. On the same call it emerged that **the address in the IRS's records is in TEXAS**, while the company operates in **Indiana** — Lilian traced the Texas address to a **bank statement in Julia's Drive**. Julia's position is that the company is still in Indiana with a new Texas mailing address.
- **Nothing between 2026-03-16 and this sweep changed the Texas/Indiana or 7004-filer questions.** Per Lilian's instruction of 2026-08-12, both stay open rather than chased or inferred.
- 2026-08-29 — **First full historical sweep.** Findings, by source:
  - **Ping** (`resolve_person`, org-wide `search_meetings` for the business name and both portal-contact names, `list_action_items`, `get_client_details`): **zero recorded meetings, zero action items** — `recentMeetingCount: 0`. This client has never had a Zoom/phone call captured by Ping.
  - **Gmail** (full history, no date bound; business name, portal-contact names, both known email domains): **~200+ threads**, almost all routine Gusto payroll/invoice notices for **both** YMI Trucking and the related **Prime Road Carriers Inc**, running back to at least 2022 (Drive) / 2024 (Gmail). The one substantive personal-name hit (an Aug 2026 thread from the owner to Julia) turned out to be the **owner's own personal Illinois W-2 withholding letter** — unrelated to this company and correctly left out of this file.
  - **Google Drive** (`excludeContentSnippets: true`): folders going back to **2022** — signed/unsigned Lease-to-Purchase agreements for a truck and trailer, a 2023 vehicle-loan disclosure, a 2025 insurance master certificate, a driver MVR/PSP authorization (2025), a monthly dispatch "OCAC" schedule report, a 2024 consolidated financial workbook covering **both** YMI Trucking and Prime Road Carriers Inc, and the 2026-03-15 Form 2848 draft. None of it bears on the Texas/Indiana address question specifically.
  - **Double** (`list_activity_log`, full history — 9 entries total): confirms the 2025 return moved to `filed` on 2026-07-30. No entries relate to the address or the 7004 filer.

### Tax year 2025 — the review

- **Status:** filed 2026-07-30, inside the extended (7004) Sept 15 deadline. The 7004's own provenance (who filed it) and the IRS's Texas address are both still open — see §5.

### Outstanding items (CI-only — never in the SOP)

- 🔴 **Establish the company's correct legal and mailing address, and what the IRS should hold.** Ask the client directly rather than inferring from a bank statement. If the IRS record needs changing, a **Form 8822-B** is the usual route. _(Open since 2026-03-16 — 166 days as of this sweep. No deadline attached.)_
- 🔴 **Find out who filed the 2025 Form 7004 on 2026-03-14.** Not the firm, not the previous accountant. Ask the client whether they or anyone else filed it. _(Open since 2026-03-16 — 166 days.)_
- [x] **Confirm the 2025 return was actually filed by the extended deadline** — **YES, 2026-07-30** _(Double activity log, confirmed 2026-08-29)_.
- **Get written confirmation the 2025 extension was formally accepted** — an IRS transcript would show it. Only a verbal assurance exists; low priority now that the return itself is confirmed filed on time.
- **Consider whether Prime Road Carriers Inc (the owner's other trucking company) needs its own Client Intelligence file** — it has none yet, and this sweep found it referenced throughout YMI Trucking's own Gmail/Drive history.

### Information still needed

- [ ] The correct current address, and the reason for the Texas mailing address
- [ ] Who the owner is, and which language they work in _(inferred English from correspondence, not confirmed)_
- [ ] Whether the firm also does bookkeeping / sales tax here (payroll is now confirmed — Gusto, §4)
- [ ] Which state filings the company owes (Indiana, and Texas if it has nexus there)
- [x] Everything from Gmail, Drive, Ping and the books — **first full historical sweep run 2026-08-29; see log above**

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710608](https://app.doublehq.com/close?cid=710608)
- **Double case note:** `CASE · IRS — the unexplained 2025 Form 7004, and the Texas address` — note **491842**
- **Migrated TaxDome notes (Drive):** `4. Documents > YMI Trucking LLC > 1. Notes`. **Read 2026-08-13.** It covers the same matter written up above from Lilian's phone notes and adds no new facts.
- **Google Drive folder (sensitive vault):** `JK Accounting Group` (Julia's Drive) → **YMI Trucking LLC** folder — confirmed present 2026-08-29; also a separate shared drive tree owned by the portal contact (`prc.inc.marko@gmail.com`) covering both YMI Trucking and Prime Road Carriers Inc
- **Related clients (owner group):** **Prime Road Carriers Inc** — same portal contact, no CI file yet (flagged in §5)
- **Related SOPs:** _(pending)_
