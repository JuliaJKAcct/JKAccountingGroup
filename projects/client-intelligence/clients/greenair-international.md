# Greenair International LLC

> **Status:** Active _(⚠️ but see the 🔴 flag in §5 — the Double record was archived and QuickBooks disconnected 2026-09-09/10, and remains archived as of 2026-09-26, now 16 days with zero movement; this needs a human decision on whether "Active" still applies)_ · **Owner:** Liudmyla · **Last updated:** 2026-09-26
>
> ✅ **First full historical sweep completed 2026-08-15** — Gmail (inbox + sent, full history,
> back to 2025-09), Double (client record, notes — none exist — contacts, properties), Google
> Drive (folder + file listing) and the QuickBooks-connection flag all checked. Ping's org-wide
> search returned no legible content scoped to this client. What the business actually does, its
> home state, and fiscal year-end remain `_(pending)_`.

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

- **Business name:** Greenair International LLC
- **Entity type:** **LLC**, taxed as an **S-corp** — Tax Return Type **1120-S** _(Double client properties, 2026-08-11)_
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**) _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — full client-admin/tax/financial/files portal access. **Also the contact for `SETATECH USA, INC.`** (Double id 706706, archived 2026-07-22) and has a separate personal Double record (id 710626) — already tracked in [`setatech-usa.md`](./setatech-usa.md) and [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) row 35, and **owned by Julia, not Liudmyla** — cross-reference only, no action needed here. _(Double `list_contacts` + `get_client`, 2026-08-15)_ |
| _(add roles as needed)_ | Only one Double portal contact is on file for this client |

- **Double client:** [app.doublehq.com/close?cid=706688](https://app.doublehq.com/close?cid=706688)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_. ⚠️ The QuickBooks **subscription failed to renew** around 2026-03-15 — the client forwarded Intuit's "we couldn't renew your subscription" notice to Julia asking for help (2026-03-17); resolution not recorded. _(Gmail, 2026-08-15.)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | Not applicable (§4) |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(account ending in ####)_ |
| Payroll | Not applicable (§4) | _(pending — Drive link)_ | _(pending)_ |
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
- **Applies?** **No — N/A** _(Double client properties, 2026-08-11)_
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
- **Annual report:** No _(Double client properties, 2026-08-11)_
- **Organizer Status (Double, hand-maintained by Lilian):** Sent
- **What & when:** **1099s** — the firm prepared 1099s for **tax years 2023 and 2024** (Gmail, "2023/2024 1099", sent 2025-12-16). Prior-year returns for **2023 and 2024** also exist in the client's Drive folder.
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

- 🔴 **STILL ARCHIVED as of 2026-09-26, still no explanation found, and this is now the THIRD consecutive weekly sweep to flag it for a human decision.** `get_client` (2026-09-26) confirms the record's `archivedAt` remains **2026-09-10T19:41:19Z**, `platform: none`, connection status `archived` — byte-for-byte unchanged from both the 2026-09-10 event and the 2026-09-19 re-check; nobody has touched it in either direction in 16 days. **This client needs Lilian or Julia to decide: move it to `weekend-ci-sweep.md`'s exclusion table (a deliberate wind-down), or investigate and reverse it (a mistake).** A CI sweep cannot make that call and cannot edit that file itself — flagging again, prominently, for a third straight week.
- 🔴 **STILL ARCHIVED as of 2026-09-19** _(superseded by the bullet above; kept for the record)_. `get_client` (2026-09-19) confirmed the record's `archivedAt` remains **2026-09-10T19:41:19Z**, `platform: none`, connection status `archived` — unchanged from the 2026-09-10 event.
- 🔴 **ORIGINALLY FLAGGED 2026-09-09/10: the Double record was DISCONNECTED and then ARCHIVED.** `list_activity_log` (as read 2026-09-12) showed **`client_disconnected` on 2026-09-09 (by Julia Kononova)** — this almost certainly means the QuickBooks connection itself, given the long-open, never-resolved QuickBooks-subscription-renewal-failure item below — followed by **`client_archived` on 2026-09-10 (by Lilian Gonzalez)**. ⚠️ **A search of this window's Gmail (bounded, business name + contact name) found NO explanation** — no email thread mentions why, and no reply exists to the original 2026-03-17 "could not renew" forward. **The client also has an unexplained overlap**: its 2025 Business Tax Organizer was **opened by the client contact on 2026-09-07**, three days before the archival — an organizer being actively worked the same week the account was wound down is worth a human's attention. This may be the resolution (in the negative) of the standing "confirm the QuickBooks renewal was fixed" open item — or it may be unrelated (e.g. an end-of-engagement decision). **Flagging for Lilian/Julia rather than assuming either.**
- The primary contact is **also the contact for `SETATECH USA, INC.`** (Double id 706706, archived 2026-07-22, runs contractor payroll via Gusto — figures stay in Double/Gusto, not here) and holds a separate personal Double record. Setatech is **already tracked** in its own client-intelligence file and in `FOLLOW-UPS.md` row 35, **owned by Julia** — not part of Liudmyla's book, and not actioned here. _(Note: Setatech's own Gusto payroll troubles are continuing as of 2026-09-11 — a contractor payment failed to process — but that is Setatech's matter, tracked in its own file, not Greenair's.)_
- The client's **QuickBooks subscription failed to auto-renew** around 2026-03-15; the client asked the firm for help (2026-03-17). Whether it was resolved is not recorded — see §6.
- The firm has prepared this client's **1099s for tax years 2023 and 2024**, and prior-year returns for both years exist in Drive.
- **Assigned to Liudmyla Kazannik.** First full historical sweep completed 2026-08-15 — see §6.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-15 — **First full historical sweep (weekend CI sweep).** Read the full Gmail history for "Greenair" / "Liudmyla Kazannik" back to 2025-09 (recurring monthly-invoice payments, a 2023/2024 1099 email, a QuickBooks subscription-renewal failure, and — via the contact's other correspondence — confirmation that the primary contact is also Setatech USA's contact), Double's client record/contacts/properties (zero Double notes exist for this client), and the client's Drive folder (2023 and 2024 prior-year returns). No SOP exists yet for this client. Added: the 1099/prior-return history (§4/§5), the QuickBooks renewal lapse (§3/§5/§6), and the cross-reference to Setatech USA (§2/§5 — already tracked elsewhere, not new scope). Ping's org-wide search returned no legible, client-scoped content. What the business does, its home state and fiscal year-end remain unknown. _(Worked by weekend CI sweep, 2026-08-15.)_

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending)_

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** Double: 0 activity-log entries this window, consistent with the Gmail correspondence gap found (nothing client-specific since 2026-04-02). Chase pass on the one outstanding item — now flagged as a live risk, not just unconfirmed (see below).
- 2026-08-29 — **Weekend sweep (incremental, baseline 2026-08-22→2026-08-29).** Double: 0 activity-log entries again. Gmail: a business-name search bounded to this window returned **no client-specific result at all** — not even automated invoice/payment noise, which had continued monthly through 2026-04-02. The silence now runs from 2026-04-02 through 2026-08-29, essentially five months. Chase pass on the one outstanding item — still open, age updated below.
- 2026-09-12 — **Weekend sweep (incremental, baseline 2026-08-29→2026-09-12; the 2026-09-05 run never completed — see `sweep-state.md`).** Double: **major, unexplained change** — bookkeeping tasks moved In Progress on 2026-09-01 (routine), then the client's 2025 Business Tax Organizer was opened by the contact on 2026-09-07, then the client record was **disconnected 2026-09-09** and **archived 2026-09-10** (now §5, flagged for a human decision). Gmail: a bounded search (business name + contact name, after:2026/08/29) returned **zero results** — the correspondence silence, previously ~5 months, now runs unbroken through this sweep, and no email explains the disconnection/archival either. Ping: `search_meetings` scoped to "Greenair International"/QuickBooks returned only pre-baseline, unrelated garbled content. Chase pass on the one outstanding item — see below; its status is now entangled with the archival finding.
- 2026-09-26 — **Manual incremental sweep, baseline 2026-09-19→2026-09-26.** Double: `get_client` re-confirms the record is **still archived** (`archivedAt` unchanged at 2026-09-10T19:41:19Z, `platform: none`) — 16 days now with zero movement in either direction; `list_activity_log` for this window returned **zero entries**; `list_notes` still zero. Gmail: a bounded search ("Greenair" + "Blacker", after:2026/09/19) returned **zero client-specific results** — the correspondence silence, running since 2026-04-02, is now **essentially six months** (≈177 days), through today; the only match at all was the firm's own weekly CI-sweep digest. Google Drive not independently re-searched this pass (no reason to expect a change given the archived state and the unbroken Gmail silence; budget). Ping not re-queried this pass (same non-result pattern on every prior sweep; budget). **The archival decision remains open and is now 16 days old with zero movement — see §5's top bullet.** No new facts found this window.
- 2026-09-19 — **Manual incremental sweep, baseline 2026-09-12→2026-09-19.** Double: `get_client` re-confirms the record is **still archived** (`archivedAt` unchanged at 2026-09-10T19:41:19Z, `platform: none`) — nobody has touched it in either direction; `list_activity_log` for this window returned **zero entries** (an archived client generates no activity, as expected); `list_notes` still zero; `list_client_properties` unchanged (Organizer Status still Sent, Annual Report still false); `list_contacts` unchanged (Blair Blacker, also the Setatech USA and personal-record contact, per the existing cross-reference). Gmail: a bounded search ("Greenair" + "Blacker", after:2026/09/12) returned **zero client-specific results** — the correspondence silence, running since 2026-04-02, is now **unbroken for over five and a half months**, through today. Google Drive: `search_files` (`excludeContentSnippets:true`, title contains "Greenair") re-run this pass — the same folders and 2023/2024 prior-year returns as every prior sweep; **no new 2025 document, no explanation of the disconnection/archival, and nothing dated after 2026-05-29.** ⚠️ **The Drive correspondence/document gap is NOT closed — it is now the same length or longer than last run's ~5 months**, contrary to what this run was asked to check; report it as unclosed, not as resolved. Ping: org-wide `search_meetings` for "Greenair disconnected archived QuickBooks" returned no legible, client-scoped result (same non-result pattern as every prior sweep for this client). **The archival decision remains open and is now 9 days old with zero movement in any direction — see §5's top bullet.**

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- 🔴 **Confirm the QuickBooks subscription-renewal failure (2026-03-17) was actually resolved** — STILL OPEN, **≈193 days** pending since 2026-03-17, and **still overtaken by events**: the QuickBooks connection remains disconnected and the client remains archived as of 2026-09-26 (§5). A targeted search (2026-09-26) again found only the original "Could not renew…help please…" forward, no reply or resolution email, and nothing explaining the disconnection/archival either. **This is no longer a passive wait-and-recheck item — it needs Lilian/Julia to say what happened and whether the engagement is ending.**
- 🔴 **THE ARCHIVAL DECISION ITSELF — unresolved for 16 days.** Nobody has decided whether Greenair belongs in `weekend-ci-sweep.md`'s exclusion table (deliberate wind-down) or should be reconnected (a mistake). A CI sweep cannot make or act on this decision. **Flagging for a third straight week — see §5's top bullet.**

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] What the business actually does, its home state, and the owner's language
- [x] Contacts and their roles (portal contacts are in Double) — one contact, full access
- [ ] Bank/card feeds and where credentials live (Drive vault link)
- [ ] Fiscal year-end
- [x] Whether the client belongs to a known owner-group already profiled here — the contact also runs Setatech USA (already tracked separately, owned by Julia)
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706688](https://app.doublehq.com/close?cid=706688)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
