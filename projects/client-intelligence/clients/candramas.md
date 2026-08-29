# CANDRAMAS LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-29
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record, notes, contacts,
> activity log — 154 entries), Gmail (full history, business name + owner email), Ping
> (`resolve_person` + org-wide/client-scoped `search_meetings`), and Google Drive all checked.
> Home state, fiscal year-end, primary language and the industry remain `_(pending)_` — nothing
> in the reachable sources established them.

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

- **Business name:** CANDRAMAS LLC
- **Entity type:** **LLC**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), payroll (**Monthly**), the annual report _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Bookkeeping / day-to-day contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=706683](https://app.doublehq.com/close?cid=706683)
- **Double case note:** `CASE · IRS Form 2553 — the S-election took effect a year late` — note **491844**

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(pending)_ |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(account ending in ####)_ |
| Payroll | _(pending)_ | _(pending — Drive link)_ | _(pending)_ |
| _(add systems as needed)_ | | | |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** **No — N/A** _(Double client properties, 2026-08-11)_
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_ <!-- e.g. monthly, due the 20th -->
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** _(pending)_ <!-- we file / we prepare, client files / client handles -->
- **Current status:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** **Yes — Monthly** _(Double client properties, 2026-08-11)_
- **Provider / frequency:** **Gusto**, recurring monthly cycle; the sole Double portal contact is the payroll administrator _(Gmail, full-historical, 2026-08-22)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Bookkeeping & monthly close
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Cadence:** **Monthly**
- **Categorization rules / quirks:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Return type(s) & deadlines:** **1120-S**; deadlines _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending — only the annual-report flag below is known; local licences, BTRs and any BOI obligation are unchecked)_
- **Annual report:** Yes _(Double client properties, 2026-08-11)_
- **Organizer Status (Double, hand-maintained by Lilian):** N/A (we have QBO access)
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### _(Add other recurring obligations as needed)_

## 5. Key facts & quirks

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- 🔴 **THE S-ELECTION TOOK EFFECT 2024-01-01, NOT 2023-01-01 — SO 2023 IS A C-CORP YEAR AT THE IRS, AND AN 1120-S WAS FILED FOR IT.** Established on the IRS call of **2026-02-04**. What is **established** is that the IRS records the election as effective 2024-01-01 and would not explain why. The agent's *likely* account — that the previous accountant's form arrived after the 15 March cut-off — is the working theory only (next bullets). **The exposure is a failure-to-file penalty on a Form 1120 for 2023 that nobody filed** — and the 2023 1120-S was never accepted or processed, so from the IRS's side it may not exist at all. **Do not treat 2023 as a settled year.**
- 🔴 **A late Form 2553 was MAILED OUT to fight for the 2023 date, and no outcome is recorded.** That was the firm's chosen route (§6 sets out both options and why). **Assume it is unresolved** and check with the IRS before doing anything with 2023.
- ⚠️ **The IRS could not say WHY it rejected the 2023 effective date, or when the form actually arrived.** The "received after 15 March" explanation is **the agent's guess, not an IRS finding** — Lilian pressed for the arrival date and they would not give one. Treat it as the working theory, not as fact.
- ⚠️ **Reaching this IRS unit is hard.** Lilian called the number on the IRS's own letter **several times with no answer** and had to leave a voicemail. Budget for that, and do not read silence as the matter being closed.
- **Financials Ready = Ready** in Double _(2026-08-11)_ — the tax-season property is set, so the books are considered done for the return.
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6.
- The sole Double portal contact is also linked, in Ping, to a combined personal record with a second individual (a spouse) — consistent with "Director"/"originally partner" language surfaced in a client meeting (see log). _(Double + Ping, 2026-08-22)_
- The **previous accounting firm** that filed the 2023 Form 2553/1120-S is Illinois-based; it supplied proof-of-filing documentation when the firm followed up in Feb 2026 — corroborates and sources the existing case note 491844 rather than changing its conclusion. _(Gmail, 2026-08-22)_
- Engagement began **2025-04-29** (signed Letter of Engagement via the firm's proposal tool). _(Gmail, 2026-08-22)_
- A tax organizer ("JK 2025 Business Tax Organizer - Candramas") existed in Double, was **unpublished** (reverted to draft) 2026-07-31 and then **deleted** 2026-08-17 (both by staff) — even though the client's Organizer Status property reads "N/A (we have QBO access)". Worth knowing this history exists even though the property itself never changed. _(Double activity log, 2026-08-22)_
- ✅ **The 2025 Form 1120-S has been prepared and sent for client sign-off.** Double's "2025 Taxes" project moved from **In Progress → Waiting on Client Approval** on **2026-08-25** (by Lilian). This resolves the prior "not yet filed" open item into an active wait on the client, not the firm. _(Double `list_activity_log`, 2026-08-29.)_
- ⚠️ **A live payroll-processing issue, unresolved as of this sweep.** Gusto flagged the August payroll as **1 day late** on 2026-08-28 (due/heads-up reminders had already gone out 2026-08-24 and 2026-08-26), addressed to the client contact and the whole firm distribution. No confirmation that payroll was actually run was found before this sweep's window closed (2026-08-29) — check it was resolved rather than assuming the AutoPilot pattern caught it. _(Gmail, Gusto notifications, 2026-08-24/26/28.)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-13 — **The Form 2553 effective-date matter written up.** _(Lilian's iCloud notes, migrated — folder "Candramas"; note dated 2026-03-16, recording an IRS call of 2026-02-04.)_ The operational detail — the IRS agent, the phone line, the exact contents of the letter to send — is in the **Double case note** (§7). _(Worked by Lilian.)_
  - **2026-02-04 — IRS call.** The agent's explanation for why the S-election reads **2024-01-01** rather than **2023-01-01**: the IRS received the Form 2553 **after 15 March 2023**, and **what counts is the date the IRS receives it, not the date it is mailed**. It arrived, apparently, in the last week of March. Lilian told them the previous accountant had mailed it on **6 March** — the date the form was signed. ⚠️ **Her note writes that mailing date as `03.06.2024`, which cannot be right for a 2023 deadline; it reads as a slip for 2023. Check the form itself before relying on the date.** The agent **could not give the actual arrival date, nor the reason the 2023 date was refused.**
  - **2026-02-04 — the two routes the IRS set out.** ① **Accept that the company was a C-corp in 2023** — which brings a **large penalty for not filing Form 1120 on time** — and run as an S-corp from 2024-01-01. ② **Fight for the 2023 date by filing a late Form 2553.** Either in two stages (send the late 2553 with the explanation; once the acceptance letter arrives, re-send the 2023 1120-S with an explanatory letter and, optionally, a Form 2848), or **everything in one package to the same address the 1120-S normally goes to**.
  - ⚠️ **The trap inside route ②, and it is the reason the previous accountant had to be contacted.** Because the 2023 1120-S was never accepted or processed, **it disappears from the IRS's system** — so it looks as though it was never filed at all. The package therefore has to carry **evidence that it was filed** (the return copy or the submission confirmation), and **the owner had to go back to the previous accountant to obtain it.**
  - **The Form 2848 in the package is optional and has a specific purpose** — it is what makes the IRS direct its questions to the firm instead of phoning the owner.
  - **Outcome: the package was MAILED OUT.** Nothing after that was found in the sources searched. ⚠️ **Read that as a statement about the SOURCES SEARCHED, not about the world** — this file was built from the migrated notes plus Double, with **no full historical sweep of Gmail, Drive or Ping**. _(Qualifier added 2026-08-14, after an independent review showed the same phrasing on other files was concealing live work.)_ Per Lilian's instruction of 2026-08-12, it is left open rather than chased or inferred.
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: 154 activity-log entries reviewed (most recent 50 in detail, plus a targeted Project-entity pull); 2 notes read in full. Gmail: full history by business name and owner email. Ping: `resolve_person` on the owner, org-wide + client-scoped `search_meetings`. Google Drive: `search_files` with `excludeContentSnippets:true`. Findings folded into §4/§5/outstanding items above. No SOP exists for this client. Ping's semantic search returned no legible description of the business itself — only the topic list from one garbled recorded meeting.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: both case notes unchanged (`updatedAt` still 2026-08-13 and 2026-06-04); **8 activity-log entries** this window — seven client-portal transaction questions resolved by Liudmyla (2026-08-28, routine bookkeeping) and one project-status change (2025 Taxes → Waiting on Client Approval, 2026-08-25, now §5). Gmail: a new Gusto "payroll late" escalation (2026-08-24/26/28, now §5) and a routine invoice. Ping: a targeted search for a Candramas monthly-meeting/tax-approval update returned no legible, client-scoped result. Chase pass on the Form 2553 outcome question — still no correspondence found.

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending)_

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **New, unresolved: confirm the 2026-08-28 "payroll late" Gusto notice for the Aug 1–31 cycle was actually cleared** — 1 day pending as of this sweep's cutoff (2026-08-29); no confirmation-of-run email found yet.
- [x] The 2025 Form 1120-S is prepared — Double's "2025 Taxes" project moved **In Progress → Waiting on Client Approval** on **2026-08-25**. Now waiting on the client, not the firm.
- The client **declined the next scheduled monthly accounting meeting invite** on 2026-08-20 — worth a follow-up.
- The Form 2553 effective-date matter (§5/§6) — outcome still not recorded anywhere the firm can reach; no new correspondence found 2026-08-22→29.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] What the business actually does — Ping's semantic search returned no legible description; a recorded internal meeting (2026-06-04) touches on business/ownership paperwork, an installment-agreement/income-tax discussion, property insurance, and communication-channel preferences (Telegram vs WhatsApp) but is heavily garbled — low confidence, topic list only
- [x] Contacts and their roles — one portal contact, linked in Ping to a combined personal record with a spouse (§5)
- [ ] Bank/card feeds and where credentials live (Drive vault link) — Drive folders located and confirmed to exist, contents not opened
- [ ] Fiscal year-end; home state (weak FL signal only); primary language
- [ ] Whether the client belongs to a known owner-group already profiled here
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706683](https://app.doublehq.com/close?cid=706683)
- **Double case note:** `CASE · IRS Form 2553 — the S-election took effect a year late` — note **491844**
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
