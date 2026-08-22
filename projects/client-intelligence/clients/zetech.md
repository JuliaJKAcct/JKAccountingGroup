# ZETECH LLC

> **Status:** Active · **Owner:** Liudmyla · **Last updated:** 2026-08-22
>
> ✅ **First full historical sweep completed 2026-08-15** — Ping (via a synced Double meeting
> note), Gmail (inbox + sent, full history), Double (client record, notes, contacts, properties),
> Google Drive (folder existence) and the QuickBooks-connection flag all checked. Home state,
> fiscal year-end, and the Drive vault/credentials links remain `_(pending)_` — nothing in the
> reachable sources established them.

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

- **Business name:** ZETECH LLC
- **Entity type:** **LLC**; the firm's Double record says taxed as an **S-corp**, Tax Return Type **1120-S**. ⚠️ **The IRS does not hold it that way** — on 2026-04-17 they said the company appears in their system as a **sole proprietorship** (§5). **Contested, not established.** _(Double client properties, 2026-08-11)_
- **Home state:** _(pending)_
- **Industry / what they do:** **E-commerce / online retail** — sells across multiple channels (Amazon, Walmart, Shopify, WooCommerce), both B2B and B2C; sources product via Alibaba (sample shipments tracked with the firm) _(Double note "Meeting: Zetech", 2026-06-26, synced from Ping; Gmail thread "Alibaba Samples july", 2026-08-01)_
- **Primary language:** _(pending — likely Russian; correspondence with the primary contact has run in Russian, e.g. Gmail thread "Обновлённое предложение по группе Zetech", 2026-07-09)_
- **Our engagement (services we provide):** bookkeeping (**Monthly**), income tax (**1120-S**), sales tax (**Monthly**), payroll (**Automatic**) _(Double client properties, 2026-08-11)_. **Assigned staff: Liudmyla Kazannik.**
- **Fiscal year-end:** _(pending)_
- **Accounting platform:** **QuickBooks Online**, connected through Double (`platform: qbo`) _(2026-08-11)_

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Owner / primary contact | Double client (link below) — full client-admin/tax/financial/files portal access; also linked to **6 other Double client IDs**, consistent with a serial-entity owner structure (unverified — see §5) _(Double `list_contacts`, 2026-08-15)_ |
| Secondary contact (no portal access) | Double client (link below) |
| Additional contact (no portal access) | Double client (link below) |

- **Double client:** [app.doublehq.com/close?cid=706710](https://app.doublehq.com/close?cid=706710)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| QuickBooks Online (via Double) | Bookkeeping ledger | _(pending — Drive link)_ | Connected — `platform: qbo` _(2026-08-11)_. Sales channels sync in via **A2X** (Shopify/eBay/Amazon payouts) _(Gmail "Zetech A2X", 2026-07-28)_ |
| Sales-tax portal | Filing sales tax | _(pending — Drive link)_ | _(pending)_ |
| Bank | Payroll debits / Direct Pay | _(pending — Drive link)_ | **Wells Fargo**, account ending **1937** (payroll debit account) _(Gmail Gusto/Wells Fargo notifications, Jul–Aug 2026)_ |
| Payroll | Gusto, weekly **AutoPilot** (automatic), runs every Friday | _(pending — Drive link)_ | _(Gmail Gusto notifications, recurring through Jul–Aug 2026)_ |
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
- **Our role:** _(pending)_ <!-- we file / we prepare, client files / client handles -->
- **Current status:** July 2026 sales-tax report filed and paid — first confirmed filing on record for this client _(Gmail + Google Drive, 2026-08-18/19)_.
- **Process notes (→ future SOP):** _(pending)_

### Payroll
- **Applies?** **Yes — Automatic** _(Double client properties, 2026-08-11)_
- **Provider / frequency:** **Gusto**, weekly AutoPilot, runs every Friday for the prior week's pay period; debited from the Wells Fargo account ending 1937 _(Gmail Gusto notifications, recurring Jul–Aug 2026)_. The Aug 8–14 pay period ran and confirmed without a failure notice _(Gmail, 2026-08-17/18)_.
- **Our role:** _(pending — firm appears to receive every payroll notification; whether we run it or only monitor is unconfirmed)_
- **Process notes (→ future SOP):** At least one payroll run was **manually canceled and re-run** in the same week (2026-07-14/15 and 2026-07-21/22) — cause not recorded. Worth a standing check that AutoPilot actually completed each week.

### Bookkeeping & monthly close
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Cadence:** **Monthly**
- **Categorization rules / quirks:** Multi-channel e-commerce (Amazon, Walmart, Shopify, WooCommerce, eBay) synced into QuickBooks via **A2X**. ⚠️ **A2X payment-gateway mapping for eBay/Amazon payouts was wrong in July 2026** — journal entries had to be deleted from QBO and remapped before re-posting; confirm mapping is correct each month before relying on A2X's auto-posted JEs. _(Gmail "Zetech A2X" thread, mariaf@jkaccountinggroup.com, 2026-07-28)_
- **Process notes (→ future SOP):** _(pending)_

### Income tax
- **Applies?** **Yes** _(Double client properties, 2026-08-11)_
- **Return type(s) & deadlines:** **1120-S** per Double — ⚠️ but see §5: the IRS's own record says sole proprietorship. **Reconcile before filing.**; deadlines _(pending)_
- **Our role:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### Licenses & other filings
- **Applies?** _(pending — only the annual-report flag below is known; local licences, BTRs and any BOI obligation are unchecked)_
- **Annual report:** _(not set in Double)_ _(Double client properties, 2026-08-11)_
- **Organizer Status (Double, hand-maintained by Lilian):** Completed
- **What & when:** _(pending)_
- **Process notes (→ future SOP):** _(pending)_

### _(Add other recurring obligations as needed)_

## 5. Key facts & quirks

- 🔴 **THE IRS HAS THIS COMPANY IN ITS SYSTEM AS A "SOLE PROPRIETORSHIP".** Told to Lilian on the call of **2026-04-17**. She asked for a letter stating it and **the IRS said they do not issue that kind of document**, so there is nothing on paper. **Check what the firm actually files for this entity against that classification before the next return** — a mismatch between the IRS's record and the return type is exactly what caused the rejections at Optic Gold and Voicecapital. _(TaxDome notes, migrated — filed under ZETECH LLC; note dated 2026-04-17.)_

Anything the team must know to serve this client well — special preferences,
watch-outs, one-off arrangements, history that affects the work.

> ⚠️ **Order these by consequence — only the first FOUR are published.** Both the Knowledge
> Hub and the client-intelligence review dashboard render **only the first four top-level
> bullets** of this section (and of §6's "Outstanding items"); a fifth never appears on
> either. So put first whatever would cause the worst mistake if someone didn't know it —
> **not** the oldest, and **not** whatever was added last. **Adding a bullet is a decision
> about where it goes**; appending to the end means the team never sees it. The cap lives in
> `clientCard()` — see the [render README's parsing contract](../../../.claude/skills/client-intelligence/render/README.md).

- ⚠️ **A2X's payment-gateway mapping for eBay/Amazon payouts posted wrong journal entries to QBO in July 2026** — they were deleted and had to be remapped before re-posting. Check A2X's mapping each month before trusting its auto-posted JEs, especially after any change to sales channels. _(Gmail "Zetech A2X" thread, mariaf@jkaccountinggroup.com, 2026-07-28.)_
- **Multi-channel e-commerce business** — sells on Amazon, Walmart, Shopify and WooCommerce (B2B and B2C), sources product via Alibaba. Payroll runs through Gusto on weekly AutoPilot. _(Double note "Meeting: Zetech", 2026-06-26; Gmail, recurring Jul–Aug 2026.)_
- A **`Zetech Holding LLC`** also exists in Double (id `717754`, no QuickBooks connected) — **confirmed as a separate billing entity**: the firm invoiced ZETECH HOLDING LLC and ZETECH LLC on two different QuickBooks invoices, paid separately on 2026-07-09. The **relationship between the two entities themselves is still not established** _(to verify)_. A `zetech-consolidation` skill is available in the firm's Claude environment (it is **not** in this repo), which suggests consolidation work has been done for this client before — **unverified**.
- The primary contact's Double portal login is also linked to **6 other Double client IDs** beyond Zetech and Zetech Holding — a serial-entity structure like the one already flagged at Optic Gold/best-broker-realty. **Which companies those are is not established** — out of scope for this sweep (this is the client's own group, not Liudmyla's book of business). _(Double `list_contacts`, 2026-08-15.)_
- **Assigned to Liudmyla Kazannik.** First full historical sweep completed 2026-08-15 (Ping, Gmail, Double, Drive, QuickBooks-platform check) — see §6.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log
A running, dated record as we build this profile.

- 2026-08-11 — **File created (seed).** Built from Double's structured client properties during the coverage audit Lilian asked for. **The reason it did not exist before is structural, not accidental:** the weekend sweep's scope list was assembled from Lilian's and Maria's clients, so **every client assigned to Liudmyla was outside it** — seven QuickBooks-connected companies in total. All seven are now in scope. _(Worked by Lilian.)_
- 2026-08-13 — **TaxDome notes read (Phase 2).** One note, new: on **2026-04-17** the IRS told Lilian the company appears in their system as a **sole proprietorship**, and **refused to issue any letter saying so**. Now §5. _(TaxDome notes, migrated — filed under ZETECH LLC.)_ _(Worked by Lilian.)_
- 2026-08-15 — **First full historical sweep (weekend CI sweep).** Read the Double meeting note (a Ping-synced call from 2026-06-26 covering the business's e-commerce model and structure questions), the full Gmail history for "Zetech" and "Liudmyla Kazannik" (Gusto payroll notices, the A2X/QBO mapping issue, the Zetech Holding LLC billing, a July fee-proposal conversation), Double's client record/notes/contacts/properties, and confirmed Drive folders exist for this client. No SOP exists yet for this client. Added: the business's e-commerce model (§1), payroll provider and cadence (§3/§4), the A2X mapping quirk (§4/§5), confirmation that Zetech Holding LLC bills separately (§5), and that the primary contact's portal login spans 6 other Double client IDs (§5). Ping's own `resolve_person`/`search_meetings` tools returned no clean transcript content for this client (org-wide search returned garbled, unrelated results) — the Double-synced meeting note was the usable Ping-sourced material. _(Worked by weekend CI sweep, 2026-08-15.)_

### Tax year YYYY — the review
<!-- Add one per tax year the firm reviews for this client. Records what gated the return,
     every question put to the client AND its answer once it arrives, what a prior-year
     return established, and what was decided. The client's TAX FACTS belong here whatever
     source established them, the organizer included (Lilian, 2026-08-12); the identity block,
     contact details and dollar figures never do (double-mcp §2.2). See the organizer-review skill. -->

- _(pending)_

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** July sales tax was filed and paid (Gmail + Drive confirmation, 2026-08-18/19) — first confirmed sales-tax activity for this client. The Aug 8–14 Gusto AutoPilot payroll run confirmed without a failure notice. A W-9 was uploaded to Drive 2026-08-17. August month-end close moved to In Progress and the "Monthly Sales Taxes" task marked Done. Chase pass on all four outstanding items — results above.

### Outstanding items (CI-only — never in the SOP)
Open follow-ups from meetings / emails / calls — e.g. what Julia discussed last,
tasks owed. Keep the **live** list in Double tasks / Ping action items and point to
it here; these never go into the client SOP.

- **Confirm the A2X eBay/Amazon mapping fix held** — STILL OPEN, 25 days pending since 2026-07-28, no deadline. A targeted search found no message after the 2026-07-28 remap note. (A separate, unrelated A2X support ticket about B2B invoice formatting, opened 2026-06-10, was resolved 2026-07-14 — a different issue, not evidence the eBay/Amazon fix held.)
- **Client pushed back on an updated group fee proposal** (`#JKA1204-v3`) — STILL OPEN, 44 days pending since 2026-07-09, no deadline. No follow-up email found.
- **The IRS sole-proprietorship-vs-1120-S mismatch (§5) is still unresolved** — no correspondence found on this matter since the 2026-04-17 call it originates from; it is an internal reconciliation item with no natural external counterparty thread to chase.
- Whether the firm actually **runs** this client's payroll or only monitors Gusto's AutoPilot notifications — STILL unconfirmed; no clarifying communication found.

### Information still needed
The checklist of what's not captured yet — this is what the completeness audit
reports for this client.

- [x] What the business actually does, and (partially) the owner's language — home state still unknown
- [x] Whether the client belongs to a known owner-group already profiled here — assigned to Liudmyla Kazannik's book; the client's OWN serial-entity group (6 other Double IDs linked to the primary contact) is separate and unresolved
- [ ] Contacts' precise roles (portal contacts are in Double; role labels beyond "primary/admin" not yet distinguished)
- [ ] Bank/card feeds and where credentials live (Drive vault link)
- [ ] Fiscal year-end
- [ ] Whether Liudmyla keeps working notes for this client that should feed this file

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=706710](https://app.doublehq.com/close?cid=706710)
- **Double case note** _(only if this client has a matter being tracked start to finish — see the [`double-mcp`](../../../.claude/skills/double-mcp/) skill §7):_ _(note title + ID)_
- **Google Drive folder (sensitive vault):** _(pending — link)_
- **Related SOPs:** _(pending — links into ../sops/ once written)_
