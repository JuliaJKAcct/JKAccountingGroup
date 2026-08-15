# Greenair International LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-15
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

- The primary contact is **also the contact for `SETATECH USA, INC.`** (Double id 706706, archived 2026-07-22, ~$40–50k/pay-period contractor payroll via Gusto) and holds a separate personal Double record. Setatech is **already tracked** in its own client-intelligence file and in `FOLLOW-UPS.md` row 35, **owned by Julia** — not part of Liudmyla's book, and not actioned here.
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

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- **Confirm the QuickBooks subscription-renewal failure (2026-03-17) was actually resolved** — nothing since the client's request for help confirms it.

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
