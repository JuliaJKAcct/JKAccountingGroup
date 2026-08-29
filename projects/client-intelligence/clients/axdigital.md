# AXDIGITAL LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-29
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record — 0 notes,
> contacts, activity log — 191 entries), Gmail (full history, business name + both owner-contact
> emails), Ping (`resolve_person`, org-wide/client-scoped `search_meetings`, `search_contacts`),
> and Google Drive all checked. Fiscal year-end and primary language remain `_(pending)_`.

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

- **Business name:** AXDIGITAL LLC
- **Entity type:** **LLC**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** **Florida — Fort Lauderdale (strong signal)** — a recurring email signature from the business's day-to-day contact places the company's office in Fort Lauderdale, FL _(Gmail, 2026-08-22; exact street address withheld per confidentiality rule)_
- **Industry / what they do:** **E-commerce / marketplace selling on Amazon** — uses an A2X integration to post Amazon settlements/invoices into QuickBooks _(Gmail, recurring A2X digests, full-historical, 2026-08-22)_. ⚠️ **New 2026-08-26:** a 2025 tax-return document request from the firm asks for **Turo vehicle mileage** (multiple Turo vehicles plus one named vehicle) as of 2025-12-31 — the client also runs a **Turo car-rental operation**, not e-commerce alone. An **eBay** selling-account access handover was also underway 2026-08-26/27, so eBay is a third sales channel alongside Amazon and Turo. _(Gmail, 2026-08-26/27.)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), sales tax (**Monthly**), payroll (**Automatic**) _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
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

- **Double client:** [app.doublehq.com/close?cid=706681](https://app.doublehq.com/close?cid=706681)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(pending)_ |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(account ending in ####)_ |
| Payroll | _(pending)_ | _(pending — Drive link)_ | _(pending)_ |
| eBay | Third sales channel (alongside Amazon, Turo) | _(pending — Drive link)_ | Account-access handover to the firm underway 2026-08-26/27 _(Gmail, 2026-08-26/27)_ |
| _(add systems as needed)_ | | | |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Frequency:** **Monthly** _(same source)_
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_ <!-- e.g. monthly, due the 20th -->
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** Firm staff prepare monthly filings; several months (Apr–Aug 2026) show "no tax due" _(Gmail, 2026-08-22)_.
- **Current status:** One 2026-05 incident: sales tax was incorrectly triggered on an out-of-state (Indiana) shipment and was manually removed by staff — the firm's stated position is that out-of-state shipments don't require tax collection unless an economic-nexus revenue threshold is crossed.
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** **Yes — Automatic** _(Double client properties, 2026-08-11)_
- **Provider / frequency:** **Gusto AutoPilot**, plus a company-sponsored **401(k) plan through Human Interest**, onboarded January 2025 with at least one enrolled employee _(Gmail, 2026-08-22)_.
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** An open/unresolved 2026-08 item: the day-to-day contact asked what to do about an employee's payroll/W-2 because a work-authorization renewal for a Ukrainian worker had not come through; a call was scheduled 2026-08-10 to discuss, but no outcome/resolution was found in any source searched.

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
- **Annual report:** _(not set in Double)_ _(Double client properties, 2026-08-11)_
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

- Named in [`best-broker-realty.md`](./best-broker-realty.md) §5 as one of the entities in the **same owner-group** (the serial-entity owner).
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6.
- Two Double portal contacts (both full access); one signs consistently as the business's "Project manager," the other is linked in Ping to a combined personal-return client record with the first — consistent with the operating pair being spouses/co-owners. _(Double + Ping, 2026-08-22)_
- A term loan (~$25,000 per a 2026-05 email subject line — figure not otherwise recorded here) exists on the books; several loan-related close tasks ("Uncapped Loan," "AMAZON FIXED RATE LOAN") were marked Done in the same period.
- ✅ **The 2025 return is actively being prepared, even though Double's project status still reads Not Started.** The firm sent a document request 2026-08-26 (vehicle mileage for the Turo fleet, plus the usual items); the client's project manager replied the same day and again 2026-08-27 with documents ready in a Drive folder. `list_projects` (2026-08-29) still shows the project `notStarted` — the Double record has not caught up with the actual work in Gmail/Drive. Don't read the stale project status as "prep hasn't resumed."
- 🟡 On **2026-08-04** staff **reverted** the Double "2025 Taxes" project status from In Progress back to **Not Started** — a regression worth flagging (2025 return prep restarted or was found incomplete).
- A tax organizer ("JK 2025 Business Tax Organizer - AXDigital") was unpublished (reverted to draft) on 2026-07-31 — same day as CANDRAMAS's — while the Organizer Status property still reads "N/A (we have QBO access)." _(Double activity log, 2026-08-22)_ If something about this client seems missing, it probably is.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: 191 activity-log entries reviewed (most recent 50 in detail, plus a targeted Project-entity pull); 0 notes found. Gmail: full history by business name and both owner-contact emails. Ping: `resolve_person` on both contacts, org-wide + client-scoped `search_meetings`, `search_contacts`. Google Drive: `search_files` with `excludeContentSnippets:true` — confirmed folder + filed documents (1099s, P&L, balance sheet for FY2024). Findings folded into §1/§4/§5 above. No SOP exists for this client. Ping's semantic search for "what does this business do" surfaced no relevant, legible content.
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: 0 notes; 0 activity-log entries this window (the tax-prep activity below is happening over email/Drive, not logged in Double). Gmail: A2X daily digests (routine); a 2025 tax-return document request sent 2026-08-26 naming Turo vehicles (new business fact, now §1); an eBay account-access exchange 2026-08-26/27 (new system, now §3). `list_projects` re-checked — still `notStarted`, now flagged in §5 as stale relative to the actual work. Chase pass on all three outstanding items — results below.

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

- 🔴 **The Ukrainian employee's work-authorization/payroll question raised 2026-08-04** (call scheduled 2026-08-10) — STILL OPEN, **25 days** pending; a targeted search this window found no outcome or follow-up.
- [x] The reverted "2025 Taxes" project status (Not Started as of 2026-08-04) — **resolved as "prep resumed"**: an active document exchange for the 2025 return ran 2026-08-26/27 (§1/§5), even though the Double project record itself hasn't been updated.
- The unpublished 2025 Business Tax Organizer — confirm intent, same as CANDRAMAS; not re-chased this window (budget).

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [x] What the business actually does — e-commerce/Amazon marketplace selling (§1)
- [x] Home state — Florida, Fort Lauderdale (strong signal, §1)
- [ ] Owner's primary language; fiscal year-end
- [x] Contacts and their roles — two portal contacts, consistent with spouses/co-owners (§5)
- [ ] Bank/card feeds and where credentials live (Drive vault link) — Drive folder confirmed, credentials link still pending
- [x] Whether the client belongs to a known owner-group already profiled here — yes, the `best-broker-realty.md` serial-entity group (§5)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706681](https://app.doublehq.com/close?cid=706681)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
