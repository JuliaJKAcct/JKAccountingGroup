# Airtouch LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-22
>
> ✅ **First full historical sweep completed 2026-08-22** — Double (client record — 0 notes,
> contacts, activity log — 161 entries plus targeted Project/Organizer pulls), Gmail (full
> history, business name + all owner-linked emails, plus "AIRTOUCH FLORIDA LLC"), Ping
> (`resolve_person`, `search_contacts`, org-wide/client-scoped `search_meetings`), and Google
> Drive all checked. Home state is inferred only from the Florida LLC/annual-report context, not
> independently confirmed; fiscal year-end and primary language remain `_(pending)_`.

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

- **Business name:** Airtouch LLC
- **Entity type:** **LLC**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
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
| Owner / primary contact | Double client (link below) |
| Bookkeeping / day-to-day contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** [app.doublehq.com/close?cid=706671](https://app.doublehq.com/close?cid=706671)
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
- **Provider / frequency:** **Gusto AutoPilot**; payroll notices go to firm staff + one of the two principal contacts _(Gmail, 2026-08-22)_.
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
- **Organizer Status (Double, hand-maintained by Lilian):** Completed
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

- 🔴 **Possible second/related Florida entity, unresolved.** A Florida filing-service vendor has been sending escalating "past due 2026 Annual Report / risk of administrative dissolution" notices to the firm since at least mid-August 2026 for an entity named **"AIRTOUCH FLORIDA LLC"** (Florida Division of Corporations document/EID **L25000085751**), with an earlier "renewal due" notice from March 2026. This document/EID is **different** from a separate, unrelated Florida-filing marketing email for **"AIRTOUCH LLC"** itself (document/EID **L23000016132**), which is current on its own 2027 filing. A 2026-07-30 official Florida Division of Corporations notice ("Intent to Administratively Dissolve or Revoke") addressed to the firm references **2 records**, without naming them. **Reported as found, not resolved**: not established whether "AIRTOUCH FLORIDA LLC" is a second entity belonging to the same owners that the firm should also track, or a differently-owned, similarly-named company whose compliance mail is reaching the firm's inbox by vendor error. _(Gmail, full-historical, 2026-08-22)_
- A Form 8594 (Asset Acquisition Statement) filed in this client's Drive folder is named for "Airtouch Beauty Bar" — suggests the business may operate, or has acquired the assets of, a beauty-bar/salon business. Inferred from a filename only (Drive contents not opened); flag for confirmation rather than treat as settled.
- ⚠️ **"Organizer Status" property reads Completed, but a full-historical Organizer-entity activity-log search returned ZERO results** for this client — no create/publish/unpublish/delete trail, unlike CANDRAMAS and AXDIGITAL where that trail is visible. Reported as an unexplained gap, not resolved.
- Named in [`best-broker-realty.md`](./best-broker-realty.md) §5 as one of the entities in the **same owner-group** (the serial-entity owner).
- **Assigned to Liudmyla Kazannik.** Her clients were absent from Client Intelligence entirely until 2026-08-11 — see §6.
- Four Double portal contacts: two with full admin/tax/financial/files access (both also linked in Ping to one combined personal-return client record together, consistent with co-owners/business partners); one with financial-access-only (likely a spouse of one of the two, who separately forwarded a business-insurance proposal in June 2026); one with no portal-access flags set, associated by shared surname/email domain with one of the two principal contacts (a marketing-role contact). _(Double + Ping + Gmail, 2026-08-22)_
- The Double "2025 Taxes" project status is **Filed** (set 2026-05-25) — ahead of CANDRAMAS (In Progress) and AXDIGITAL (reverted to Not Started).
- Engagement began **May 2024** (signed proposal via the firm's proposal tool) — the longest-standing client of the three researched in this pass. If something about this client seems missing, it probably is.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-22 — **First full historical sweep (weekend CI sweep, unbounded).** Double: 161 activity-log entries reviewed plus targeted Project- and Organizer-entity pulls; 0 notes found. Gmail: full history by business name and all owner-linked emails, plus a targeted "AIRTOUCH FLORIDA LLC" search that surfaced the possible-second-entity finding (§5). Ping: `resolve_person` on both principals, `search_contacts`, org-wide + client-scoped `search_meetings` — zero indexed results, Ping appears to have no meaningfully searchable content for this client at all. Google Drive: `search_files` with `excludeContentSnippets:true` — three folders located (including one from 2024), plus the Form 8594 and a 2025 balance sheet. Findings folded into §5 above. No SOP exists for this client.

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

- 🔴 **Confirm whether "AIRTOUCH FLORIDA LLC" (EID L25000085751) is a second entity of this owner-group or an unrelated company's mail reaching the firm by error** — the escalating dissolution-risk notices need a decision before the risk becomes real.
- Reconcile the "Organizer Status = Completed" property against the missing Organizer-entity activity-log trail.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] What the business actually does — a Form 8594 filename suggests a beauty-bar/salon acquisition, not confirmed (§5)
- [ ] Home state — inferred from FL LLC/annual-report context only, not independently confirmed
- [x] Contacts and their roles — four portal contacts, roles distinguished (§5)
- [ ] Bank/card feeds and where credentials live (Drive vault link)
- [ ] Fiscal year-end; owner's primary language
- [x] Whether the client belongs to a known owner-group already profiled here — yes, the `best-broker-realty.md` serial-entity group (§5)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706671](https://app.doublehq.com/close?cid=706671)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
