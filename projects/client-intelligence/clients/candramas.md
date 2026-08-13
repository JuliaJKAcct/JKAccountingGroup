# CANDRAMAS LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-13
>
> ⚠️ **SEED — created 2026-08-11 from Double's structured client properties only.** No Gmail,
> Ping, Drive or QuickBooks pass has been run on this client yet. It is in the weekend-sweep
> scope from now on, so the gaps below fill themselves; until then treat every `_(pending)_`
> as genuinely unknown rather than not applicable.

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
- **Provider / frequency:** _(pending)_
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

- 🔴 **THE S-ELECTION TOOK EFFECT 2024-01-01, NOT 2023-01-01 — SO 2023 IS A C-CORP YEAR AT THE IRS, AND AN 1120-S WAS FILED FOR IT.** Established on the IRS call of **2026-02-04**. The previous accountant mailed the Form 2553 in early March 2023 and the IRS received it **after the 15 March cut-off**, which pushes the election to the following year. **The exposure is a failure-to-file penalty on a Form 1120 for 2023 that nobody filed** — and the 2023 1120-S was never accepted or processed, so from the IRS's side it may not exist at all. **Do not treat 2023 as a settled year.**
- 🔴 **A late Form 2553 was MAILED OUT to fight for the 2023 date, and no outcome is recorded.** That was the firm's chosen route (§6 sets out both options and why). **Assume it is unresolved** and check with the IRS before doing anything with 2023.
- ⚠️ **The IRS could not say WHY it rejected the 2023 effective date, or when the form actually arrived.** The "received after 15 March" explanation is **the agent's guess, not an IRS finding** — Lilian pressed for the arrival date and they would not give one. Treat it as the working theory, not as fact.
- ⚠️ **Reaching this IRS unit is hard.** Lilian called the number on the IRS's own letter **several times with no answer** and had to leave a voicemail. Budget for that, and do not read silence as the matter being closed.
- **Financials Ready = Ready** in Double _(2026-08-11)_ — the tax-season property is set, so the books are considered done for the return.
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6. If something about this client seems missing, it probably is.
- **Everything outside the S-election history is still only Double's property columns** — nothing else here came from email, a call, Drive or the books.

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
  - **Outcome: the package was MAILED OUT.** Nothing after that is recorded anywhere the firm can reach. Per Lilian's instruction of 2026-08-12, it is left open rather than chased or inferred.

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

- **Everything about this client beyond Double's property columns is still unknown** — who the contacts are, what the business does, which bank feeds exist, its quirks. The next weekend sweep should treat this as a full historical pass, not an incremental one.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] What the business actually does, its home state, and the owner's language
- [ ] Contacts and their roles (portal contacts are in Double)
- [ ] Bank/card feeds and where credentials live (Drive vault link)
- [ ] Fiscal year-end
- [ ] Whether the client belongs to a known owner-group already profiled here
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706683](https://app.doublehq.com/close?cid=706683)
- **Double case note:** `CASE · IRS Form 2553 — the S-election took effect a year late` — note **491844**
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
