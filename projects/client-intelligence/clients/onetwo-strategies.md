# ONETWO STRATEGIES INC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-29
>
> ✅ **First full historical sweep completed 2026-08-15** — Gmail (inbox + sent, full history),
> Double (client record, notes — none exist — contacts, properties), Google Drive (folder + file
> listing) and the QuickBooks-connection flag all checked. Ping's org-wide search returned no
> legible content scoped to this client. Home state, fiscal year-end and confirmation of the
> business's actual activity are still `_(pending)_`.

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

- **Business name:** ONETWO STRATEGIES INC
- **Entity type:** **Corporation (Inc)**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending — likely a consulting business, based on the primary contact's email domain `onetoconsult.com`; not otherwise confirmed. The firm has been invited as a "finance resource" on the client's Amazon Business account, 2026-08-04, so some retail purchasing runs through Amazon.)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), payroll (**Automatic**), the annual report _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — full client-admin/tax/financial/files portal access _(Double `list_contacts`, 2026-08-15)_ |
| Second contact (full access) | Double client (link below) — also linked to **1 other Double client ID**, not otherwise identified this sweep |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=706701](https://app.doublehq.com/close?cid=706701)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | Not applicable (§4) |
| Bank | Statements / reconciliation / payroll debits | _(pending — Drive link)_ | **Bank of America** business-lending account ("Business Adv Customized Cash Rewards"), ending **1421**; payroll debits come from a **different** account ending **4889** _(Gmail BofA + Gusto notifications, 2026-08-15)_ |
| Payroll | Gusto, semi-monthly AutoPilot | _(pending — Drive link)_ | Pay periods run 1st–15th / 16th–end of month. ⚠️ **Direct-deposit speed was slowed from 2-day to 4-day, effective 2026-06-26** — payroll must now be submitted **4 business days** ahead of payday. |
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
- **Applies?** **Yes — Automatic** _(Double client properties, 2026-08-11)_
- **Provider / frequency:** **Gusto**, semi-monthly AutoPilot (1st–15th, 16th–end of month), debited from the account ending 4889 _(Gmail Gusto notifications, recurring Jun–Aug 2026)_
- **Our role:** _(pending — firm receives every payroll notification; whether we run it or only monitor is unconfirmed)_
- **Process notes (→ future SOP):** ⚠️ **AutoPilot has failed to run cleanly more than once.** In the week of 2026-06-25 it could not auto-run the 06/16–06/30 pay period (a pending Gusto to-do blocked it, needing manual login), and separately a payroll debit for the 06/01–06/15 period failed outright. **Check that AutoPilot actually completed each pay period** rather than assuming the automatic notification means success — and remember the direct-deposit speed is now 4 business days, not 2 (§3).

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
- **Annual report:** Yes _(Double client properties, 2026-08-11)_ — **2026 annual report confirmed filed** (Drive copy dated 2026-01-09)
- **Organizer Status (Double, hand-maintained by Lilian):** Sent
- **What & when:** Two **"Business information changes"** documents dated **2026-05-14** exist in Drive — likely a Sunbiz filing updating the company's registered info, content not reviewed this sweep.
- **Process notes (→ future SOP):** _(pending)_

### _(Add other recurring obligations as needed)_

## 5. Key facts & quirks

- ⚠️ **CONTRADICTION, unsettled — the return that §5's own K-1 blocker says can't be finished shows as FILED in Double.** `list_projects` (2026-08-29) shows the "2025 Taxes" project with **status `filed`, `filedAt` 2026-07-03**, preparer Liudmyla Kazannik. That predates this and last week's sweep — it was not new activity, just never checked against this file before. It directly conflicts with the very next bullet (the two missing K-1s and the unentered home-office deduction, from a 2026-04-13 client call, still open 138 days on with no arrival recorded). Two live possibilities, neither confirmed: the return was filed without those K-1 items (on the extension, closing out incomplete), or they arrived through a channel this sweep hasn't found and the file's "still open" framing is stale. **Do not assume either — ask before treating the K-1 chase as moot or the "filed" status as reliable.** _(Double `list_projects`, cross-checked against the file's existing §5, 2026-08-29.)_
- 🔴 **TWO K-1s WERE MISSING FOR THE 2025 RETURN — from 2242 Monroe LLC and Porcupine Partnership.** Recorded on a client call of **2026-04-13**, alongside a **home-office deduction that had not been entered in QuickBooks or on the return.** The 2025 return was **extended** and an extension payment made; a Q1 2026 estimate was paid manually through the IRS. **Nothing records the K-1s arriving.** A partnership K-1 that never comes is the classic cause of a return that cannot be finished — chase both before anything else here. _(TaxDome notes, migrated — filed under OneTwoStrategies INC; note dated 2026-04-13.)_
- ⚠️ **Payroll (Gusto AutoPilot) has failed to run cleanly on more than one occasion, and its direct-deposit speed just got slower.** A pay period couldn't auto-run and a separate debit failed outright, both in the week of 2026-06-25; then on 2026-06-26 Gusto slowed the deposit speed from 2-day to 4-day, so payroll must now be submitted 4 business days ahead. Treat "no notification" as no longer proof payroll ran. _(Gmail Gusto notifications, Jun 2026.)_
- **A salary increase and a change to additional withholding were discussed on the same call** — raising the owner's annual salary and doubling additional withholding to cover the tax need. **Whether either was actually implemented is unrecorded.** Figures are in Double / the client's payroll records.
- A **2026 Accountable Plan document exists in Drive** (dated 2026-03-10), which pre-dates the 2026-04-13 call that flagged an unentered home-office deduction — likely the intended mechanism for that reimbursement. **Confirm it is actually being used and posted to QuickBooks**, not just drafted.

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- A file named **`ONETWO STRATEGIES REEMPLOYEMENT TAX.pdf`** exists in Drive, dated **2024-07-25** — suggests a past Florida reemployment-tax matter, similar in kind to the Tsminibears case the firm tracks with a running Double case note. **No Double case note exists for this client** (`list_notes` returned zero), and the file's content was not opened this sweep (out of scope/budget) — flag for a follow-up read.
- **Assigned to Liudmyla Kazannik.** First full historical sweep completed 2026-08-15 — see §6.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-13 — **TaxDome notes read (Phase 2).** One note, new: a client call of **2026-04-13** recording the 2025 extension and its payment, a manually-paid Q1 2026 estimate, a discussed salary increase and withholding change, and — the part that gates the return — **two missing K-1s (2242 Monroe LLC and Porcupine Partnership) and an unentered home-office deduction**. Now §5. _(TaxDome notes, migrated — filed under OneTwoStrategies INC.)_ _(Worked by Lilian.)_
- 2026-08-15 — **First full historical sweep (weekend CI sweep).** Read the full Gmail history for "OneTwo Strategies" / "onetoconsult" / "Liudmyla Kazannik" (Gusto payroll notices including two AutoPilot failures and a deposit-speed change, a Bank of America reference, an Amazon Business invite, QuickBooks-invoice traffic), Double's client record/contacts/properties (zero Double notes exist for this client), and the client's Drive folder (the 2026 annual report, two "Business information changes" filings, a 2026 Accountable Plan document, and a 2024 reemployment-tax document not yet reviewed). No SOP exists yet for this client. Added: the payroll provider/cadence and its recent failures (§3/§4/§5), the Accountable Plan document possibly tied to the home-office gap (§5), and the reemployment-tax document flag (§5). Ping's org-wide search returned no legible, client-scoped content. Home state, fiscal year-end and confirmed business activity remain unknown. _(Worked by weekend CI sweep, 2026-08-15.)_

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending)_

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** Double: 0 activity-log entries — no bookkeeping/close activity found at all this window, in contrast to Zetech/Optic Gold, which both show routine August close work (sales tax N/A for this client, so a sales-tax-task absence was expected, but nothing else logged either). Chase pass on all four outstanding items — results above, all still open.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: **0 activity-log entries again** — a second consecutive week with no logged bookkeeping/close activity at all. `list_projects` was checked for the first time this sweep (not a routine incremental item, done to support the chase) and surfaced the filed-vs-missing-K-1s contradiction now in §5. Gmail: routine Bank of America wire-transfer-advice and Gusto AutoPilot notices only; nothing on the K-1s, the home-office deduction, the salary/withholding change, or the reemployment-tax PDF. Chase pass on all four outstanding items — results below, all still open; ages updated.

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- **Chase the two missing K-1s** (2242 Monroe LLC, Porcupine Partnership) / home-office deduction — STILL OPEN, **138 days** pending since 2026-04-13, no arrival found. ⚠️ **But see the new §5 contradiction** — Double's own project record shows the 2025 return already filed 2026-07-03, which this open item assumes cannot have happened. Resolve which is true before treating either as settled.
- **Read the 2024 `ONETWO STRATEGIES REEMPLOYEMENT TAX.pdf`** — its Drive last-viewed timestamp is still 2025-03-17, confirming it remains unopened; not opened this sweep either (content stays out of scope).
- **Confirm whether the discussed salary increase / withholding change was implemented** — STILL OPEN, targeted search found only unrelated correspondence.
- **Confirm the Accountable Plan is actually posted to QuickBooks** — STILL OPEN; not re-checked this sweep (budget; the filed-return contradiction took priority).

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] What the business actually does, its home state, and the owner's language
- [x] Contacts and their roles (portal contacts are in Double) — two contacts, both full access
- [x] Bank feeds identified (Bank of America lending account + a separate payroll-debit account) — credentials link still pending
- [ ] Fiscal year-end
- [ ] Whether the client belongs to a known owner-group already profiled here (the second contact is linked to one other, unidentified Double client ID)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706701](https://app.doublehq.com/close?cid=706701)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
