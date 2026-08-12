<!--
  CLIENT INTELLIGENCE — TEMPLATE
  Copy this file to clients/<client-slug>.md to start a new client, fill the
  header, and add a row to the Clients index in README.md.
  KEEP EVERY SECTION below, in this order, for every client. Fill what you have;
  mark anything unknown as _(pending)_. Never delete a section because it's empty.
  Never paste secrets or personal contact details here — link to Drive/Double.
  Delete this comment in the client copy.
-->

# {{Client business name}}

> **Status:** {{Prospect | Active | Paused | Former}} · **Owner:** {{assigned staff, e.g. Lilian / Julia / Maria | Firm}} · **Last updated:** {{YYYY-MM-DD}}

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

- **Business name:** _(pending)_
- **Entity type:** _(pending)_ <!-- LLC / S-corp / C-corp / Sole prop / Partnership -->
- **Home state:** _(pending)_
- **Industry / what they do:** _(pending)_
- **Primary language:** _(pending)_ <!-- EN / RU / UA / ES -->
- **Our engagement (services we provide):** _(pending)_ <!-- bookkeeping / payroll / sales tax / income tax / advisory … -->
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** _(pending)_ <!-- QuickBooks Online, etc. -->

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) |
| Bookkeeping / day-to-day contact | Double client (link below) |
| _(add roles as needed)_ | |

- **Double client:** _(pending — link)_
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(portal URL / account ending)_ |
| Bank | Statements / reconciliation | _(pending — Drive link)_ | _(account ending in ####)_ |
| Payroll | _(pending)_ | _(pending — Drive link)_ | _(pending)_ |
| _(add systems as needed)_ | | | |

## 4. Obligations & recurring processes

The recurring work the firm does for this client. **Each obligation below becomes
the raw material for that client's SOP.** Fill the ones that apply; mark the rest
"Applies? _(pending)_" or "Not applicable."

### Sales tax
- **Applies?** _(pending)_
- **Jurisdiction(s):** _(pending)_
- **Frequency & due date:** _(pending)_ <!-- e.g. monthly, due the 20th -->
- **Agency & portal:** _(pending)_
- **Form:** _(pending)_
- **Our role:** _(pending)_ <!-- we file / we prepare, client files / client handles -->
- **Current status:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** _(pending)_
- **Provider / frequency:** _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Bookkeeping & monthly close
- **Applies?** _(pending)_
- **Cadence:** _(pending)_
- **Categorization rules / quirks:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** _(pending)_
- **Return type(s) & deadlines:** _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending)_ <!-- Business Tax Receipt, annual report, BOI, etc. -->
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
> `clientCard()` — see the [render README's parsing contract](../../.claude/skills/client-intelligence/render/README.md).

- _(pending)_

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- _(YYYY-MM-DD)_ — _(pending)_

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

- _(pending — or a pointer to the live list in Double / Ping)_

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [ ] _(pending — list each missing piece here)_

## 7. Links

- **Double client:** _(pending — link)_
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
