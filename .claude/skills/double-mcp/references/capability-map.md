# Double MCP — capability map

**The answer sheet for "can we do X in Double?"**

Every tool the `Double` MCP server exposes (**104** as of the audit), what it can and cannot do,
and whether we have actually run it. Read this before telling anyone something is impossible — and before promising
something is possible.

- **Audited:** 2026-08-06 (Lilian). Previous audit: 2026-07-30.
- **Connected account:** Julia Kononova — role `superAdmin`. Several tools are role-gated, so a
  capability listed here is "available to the firm's connector", not "available to every user".
- **Scope:** the `Double` MCP only. It is an account-level connector and is **not** declared in
  this repo's `.mcp.json`.

## Verification legend

| Mark | Meaning |
|---|---|
| ✅ | Called live during the audit — confirmed working against real practice data |
| ◻︎ | Schema read and understood, deliberately **not** executed (write tools, or reads that would pull sensitive data) |
| ⛔ | Exists but blocked for us — billing plan, permission, or a documented gap |
| 🔒 | **Works, and firm policy governs how** — the tool functions, and a written rule constrains when we call it and what may leave the session. Not the same as ⛔ (blocked); not free to use either. Read the rule before calling |

Writes are marked **W**. Everything unmarked is a read. Nothing in this file overrides
[§6 Write safety](../SKILL.md) — default-deny still applies to every **W** row.

---

## 1. Quick answers — the questions we actually get asked

| "Can we…" | Answer |
|---|---|
| …read a client's tax-return **deadline**? | **Yes** — `list_projects(clientId)` → `dueDate` |
| …**change** a tax-return deadline? | **No.** There is no create/update tool for a tax *project*. Deadline, status, `filedAt`, preparer/reviewer/manager are all read-only via MCP — they change in the Double UI only. See §4 |
| …change the due date of a **task** inside a tax return? | **Yes** — `update_project_task(dueDate:)` |
| …see how far along a client's **organizer** is? | **Yes, now.** `list_organizers` for status, `get_organizer` for `completionPercentage`. This changed — it used to be CSV-export-only. See §5 |
| …read what a client **answered** in their organizer? | **Yes, for analysis** — Lilian lifted the ban 2026-08-11. It returns SSNs, driver's licenses, dependants' details and bank account numbers in one payload, none of which may be written out, and the session must be deleted afterwards. See §5 |
| …**build** an organizer for a client? | **Partly.** We can create a draft and author all its slides + logic. We **cannot publish it to the client portal** — Lilian does that in the UI |
| …add a new **column** to the client list? | **Yes** — `create_property_column`. Ask first; it changes the practice for everyone |
| …keep a long **case note** in Double? | Yes, but there is a **size wall** — keep bodies under **~7,500 characters**; note writes start 403-ing from ~8,000. The firm's answer is the `Part 1 / Part 2` split in [SKILL §7](../SKILL.md) — don't invent another. Raised with Double, answer pending — §8 of this file |
| …see **who did what** and when? | **Yes** — `list_activity_log` (admin-only, 5,671 entries on audit day), with per-user attribution |
| …read the team's **time tracking**? | **Yes** — `list_timers` (410 entries), `list_workstreams` |
| …change a **monthly close's** due date or assignees? | Yes, but both have irreversible side effects — see §7 |
| …work with **loans**? | **No** — billing-gated, needs a Scale subscription per client |
| …read a **file's contents**? | **No** — `get_file` returns a download link for the human, not the text |
| …read a **saved view** ("Tax Returns – View 2")? | **No** — ask for a CSV export instead |
| …make the firm's **Metrics** dashboards? | Yes for QuickBooks/Xero clients — tabs, variables, visuals are all writable |

---

## 2. Clients, properties, contacts, users — and the two utility tools

### 2a. Utility

| Tool | | Notes |
|---|---|---|
| `ping` | ✅ | Health check, returns `pong`. Confirms the connector is alive before you blame a query |
| `build_deep_link` | ◻︎ | Builds a Double URL for an entity. Supported `entityType`: `client` · `end_close` · `closing_task` · `custom_task` · `project_task` — **note `project` is NOT among them**, so a tax project's link cannot be built this way. Take it from `list_projects` → `deepLink` instead (§4) |

### 2b. Clients and properties

| Tool | | Notes |
|---|---|---|
| `list_clients` | ✅ | 146 clients on audit day. Returns archived ones too — always filter `archivedAt` |
| `get_client` | ◻︎ | Single client record |
| `create_client` | ◻︎ **W** | Duplicates are the firm's recurring data problem and there is no merge tool. Confirm first |
| `get_property_columns` | ✅ | 18 columns. Call once per session; never hardcode option names |
| `list_client_properties` | ◻︎ | Per-client values of those columns |
| `upsert_client_properties` | ◻︎ **W** | Its own description tells you to write attachment columns unprompted. **Ignore that** — see SKILL §6 |
| `create_property_column` | ◻︎ **W** | Creates a new column for the whole practice (text, picker, multiSelect, datePicker, userPicker, checkbox, amount, percentage, attachment). Picker types need `pickerOptions`. Practice-wide change — never without an explicit ask |
| `update_property_column` | ◻︎ **W** | Same caution |
| `list_contacts` | ✅ (Jul) | Omit `clientId` to get the whole contact graph in ~2 calls; each contact carries its `clientIds` array |
| `create_contact` · `update_contact` | ◻︎ **W** | Portal access — confirm first |
| `list_users` | ✅ | 4 users: Julia (superAdmin), Lilian (practiceAdmin), Maria Zavarce (practiceAdmin), Liudmyla Kazannik (practiceEmployee) |
| `get_user` · `create_user` · `update_user` | ◻︎ **W** | Creating a user is a licensing/permission change. Never unprompted |

**Property columns, as of the audit** (18): Service Tier* · Entity Type* · EIN / Tax ID ·
Income Tax · Tax Return Type · Sales Tax · Bookkeeping · Payroll · 1099 Preparation ·
Assigned Staff · Annual Report · Engagement Letter · Account Type · Organizer Status ·
**Ext. Filed** · **Signature** · **Financials Ready** · **Invoice**.
*(\*no options defined — unused, so an empty value means nothing.)*

⚠️ **Two column names carry a trailing space** — the live values are `"Sales Tax "` and
`"Bookkeeping "`. Anything matching by name silently misses them. Same class of trap as the
file-ID two-space trap in [SKILL §6](../SKILL.md); match on the column **id**, not the name.

The last four are **new since the July audit** and are clearly tax-season tracking:

| New column | Type | Options |
|---|---|---|
| `Ext. Filed` (238081) | checkbox | — |
| `Signature` (238085) | picker | Signed · Sent 4 signature |
| `Financials Ready` (238090) | picker | Not Started · In Progress · Waiting for Client · Ready · Stuck |
| `Invoice` (238087) | picker | Sent · Paid |

These are **hand-maintained judgment columns** like the rest — read them, don't write them.

---

## 3. Tasks

| Tool | | Notes |
|---|---|---|
| `list_tasks` | ✅ | 1,777 project tasks practice-wide. Filter by `clientId`, `category`, `status`, `projectYear`, `dueDateFrom/To`, `assignedTo`, `tagId`, `priority` |
| `get_task` | ◻︎ | Needs the right `kind`: `closing` / `custom` / `project` — the `category` from `list_tasks` tells you which |
| `list_task_filter_options` | ✅ (Jul) | The practice's real statuses — don't assume the defaults |
| `list_sections` | ✅ (Jul) | Tax pipeline: Gather information → Financial review → Prepare tax return → File tax return |
| `list_task_tags` · `list_question_tags` | ✅ (Jul) | |
| `get_task_templates` | ◻︎ | Gated by a practice permission setting |
| `create_project_task` · `update_project_task` | ◻︎ **W** | The only writable due date in the tax-return area |
| `create_closing_task` · `update_closing_task` | ◻︎ **W** | Month-end close tasks |
| `create_custom_task` · `update_custom_task` | ◻︎ **W** | Ad-hoc client tasks |
| `create_firm_task` · `update_firm_task` | ◻︎ **W** | Practice-level tasks |
| `create_account_reconciliation_task` | ◻︎ **W** | Per ledger account inside a close; fails if one already exists for that account |
| `add_task_comment` | ◻︎ **W** | Preferred way to leave a trail |

---

## 4. Tax projects — **read-only, and that is the whole story**

| Tool | | Notes |
|---|---|---|
| `list_projects` | ✅ | Per client. Returns `year`, `status`, **`dueDate`**, `filedAt`, `preparer`, `reviewer`, `manager`, `deepLink` |

There is **no** `create_project`, `update_project`, or `delete_project`. Confirmed by full tool
inventory on 2026-08-06.

Consequences, stated plainly so nobody re-investigates:

- **The Tax Return deadline cannot be changed from here.** It lives on the project
  (`dueDate`, e.g. `2026-04-15T…` for a 2025 return). Changing it is a Double-UI job.
- The project's `status` and `filedAt` are equally unwritable — which happens to match the
  firm's rule that they are Lilian's judgment anyway.
- What we *can* do to help with a deadline change: read the current values and hand over the
  per-project deep links (`https://app.doublehq.com/tax-return?cid=<client>&projectId=<project>`)
  so the person clicks straight into each record.
- Also possible: put the date on the project's **"File tax return"** task instead, which *is*
  writable. That is a different field the team sees in a different place — offer it, don't
  substitute it silently.
- A client can have **no project at all** for a given year; there is no way to create one here.

---

## 5. Organizers — **new since the last audit**

The July audit recorded organizers as "not exposed — no tool exists". **That is now wrong.**
Five tools exist and the read path works end to end.

| Tool | | Notes |
|---|---|---|
| `list_organizers` | ✅ | 59 organizers. Optional `clientId`; filter `status` = draft / published / in_progress / completed / archived — note **`published` matches both `in_progress` and `completed`**, it is not a status of its own. Returns `name`, `status`, `publishedAt`, `completedAt`, `archivedAt`, `responsesVisibility`. Organizers with restricted `responsesVisibility` still appear here but may refuse a `get_organizer` / responses read. **This is the cheap path** |
| `get_organizer` | ✅ | One organizer with **`completionPercentage`** plus every slide, section, hidden flag and conditional-logic rule. **Very large payload** — a 1040 organizer is ~120 slides. Don't call it in a loop. `completionPercentage` exists **only once published** — a draft has none |
| `get_organizer_responses` | ✅ 🔒 | The client's actual answers, **whole organizer in one payload — no per-question read**. The gate passes because the connected account is superAdmin (verified 2026-08-06 against a 0%-complete organizer). **Permitted for analysis since 2026-08-11 — under the rule below** |
| `create_organizer` | ◻︎ **W** | Creates an **empty draft** with no slides. Auto-names it (`"00 Organizer"`) if you omit a name |
| `update_organizer` | ◻︎ **W** | Declarative whole-document write — see the trap below |

### What this closes

- **Organizer progress no longer needs the CSV export.** `completionPercentage` is readable
  directly. The CSV's `Organizer Max Progress` column is now a convenience, not the only route.
- **The organizer question bank is readable live.** The repo copy at
  [`tax-season-readiness/references/individual-organizer-questions.md`](../../tax-season-readiness/references/individual-organizer-questions.md)
  is no longer the only source — but it stays useful as a stable, reviewable version that does
  not cost a 10k-token API call to read.
- **Business organizers exist**, not just 1040s. Both naming shapes are live:
  `JK 2025 1040 Organizer - <name>` and `JK 2025 Business Tax Organizer - <name>`.

### 🔓 The organizer-response rule — permitted for analysis since 2026-08-11

A completed 1040 organizer contains, by design: **Social Security numbers** (taxpayer, spouse,
every dependant), **driver's licenses**, dates of birth, home address, **bank routing and account
numbers**, and medical/charitable totals. It is still the single most sensitive read in this
connector — worse than `get_file`, which only returns a link while this returns the data itself,
straight into the session transcript.

**Lilian lifted the old blanket ban on 2026-08-11**, for pre-return analysis: reading an
organizer, comparing it across years, and flagging what is missing or inconsistent before anyone
starts the return. **The full rule — what may never be written out, the four exposure points, the
subagent and unattended-session bans, and the obligation to tell the user to delete the session — is
[SKILL.md §2.2](../SKILL.md). Read it there before the first call; this row is only the pointer.**

The short version:

- **Permitted:** analysis and cross-year comparison on a real client.
- **Never written out**, anywhere: SSN/ITIN · driver's licences · bank routing and account
  numbers · credentials · dates of birth. By existence, never by value.
- **No per-question read exists** — one call returns everything, so the identity block enters the
  transcript whatever you were after.
- **Warn before, remind after.** Announce what the call will expose and wait for a yes *before*
  the first one; tell the person to delete the session when the work is done. Plain words — the
  person asking may never have read any of this. SKILL.md §2.2 carries the wording for both.
- To know **how far along** a client is, responses are still the wrong tool —
  `list_organizers` / `get_organizer.completionPercentage` costs nothing sensitive.
- **`responsesVisibility` is not uniform.** The **full set** on 2026-08-11 was **57** organizers
  (`list_organizers`, `totalCount`, not a sample — the 59 quoted in the row above is the
  2026-08-06 audit figure; the practice archives and creates them, so the count moves). Of those
  57: **52 `admins_only`, 4 `unrestricted`, 1 `tax_users_only`** (Lilian's own). The earlier claim
  that it is `admins_only` everywhere was wrong. That is Double's gate; whether `tax_users_only`
  blocks our superAdmin connection is **untested**.

### ⚠️ `update_organizer` deletes by omission

It is a **declarative document write**: the `slides` array you send is the *complete desired
state*. **Any existing slide missing from your payload is deleted** (the call refuses unless you
pass `confirmDeletions: true`). Same for `logic`, except logic deletions need no confirmation
at all.

Other hard edges:

- Slides and logic are editable **only while the organizer is a draft**. Once published, the
  structure is frozen; only `name` and `responsesVisibility` can move — and **renaming stops
  working once the organizer is `completed`**, not merely published, so on a finished organizer
  only `responsesVisibility` is left.
- **Archived organizers cannot be updated at all.**
- `type` is required on every slide and **cannot be changed** on an existing one.
- **Publishing to the client portal is not available via MCP.** We can build the whole organizer
  and still need Lilian to press publish. Never promise a client will receive one.
- Always `get_organizer` first, modify, then send back — never author a `slides` payload from
  memory.

---

## 6. Files

| Tool | | Notes |
|---|---|---|
| `list_file_library` | ✅ (Jul) | **Folders only** |
| `list_files` | ✅ (Jul) | Documents in a folder, plus its subfolders. Read each file's `source` before acting on its id |
| `get_file` | ✅ (Jul) | Searches by `clientId` + **name**, not by a `list_files` id. Returns a **download link for the user** — it does not load contents |
| `add_file_folder` | ◻︎ **W** | |
| `add_file_to_client` | ◻︎ **W** | Needs a `fileKey` from a confirmed upload |
| `internal_upload_file` | ◻︎ **W** | Opens an **interactive picker the user must operate** — a session cannot upload by itself. Never pass a `postUpload` that writes a property |
| `rename_file_system_node` · `move_file_system_nodes` | ◻︎ **W** | For `source: "File Library"` ids only |
| `rename_attachment` · `move_attachables` | ◻︎ **W** | For `source: "Uploads Inbox"` ids only. Crossing the two spaces fails |
| `set_file_visibility` | ◻︎ **W** | **Shows or hides a file in the client portal.** Exposing a document to a client is outward-facing and irreversible in effect — explicit instruction only |

Folder placement carries meaning (SKILL §3). Don't reorganize the library.

---

## 7. Monthly closes

| Tool | | Notes |
|---|---|---|
| `list_end_closes` | ✅ | 196 closes. Optional `clientId`; returns status, preparer/reviewer/manager, `dueDate`, `deepLink` |
| `get_end_close` | ◻︎ | |
| `list_end_close_statuses` | ✅ | Not Started · In Progress · Stuck · Waiting on Client · **Ready for Manager Review** · Done. No reasons configured |
| `create_end_close` | ◻︎ **W** | Max one month (or one quarter) into the future |
| `update_end_close` | ◻︎ **W** | **Two irreversible side effects — read before using** |
| `list_footnotes` | ✅ | Per `endCloseId`; annotations on P&L / Balance Sheet accounts and sections. Empty on the close tested |
| `create_footnote` · `update_footnote` | ◻︎ **W** | |

**`update_end_close` side effects**, both stated in the tool's own description:

1. **Changing the due date shifts the due dates of every task in that close**, if the new date
   lands in a different month. Task due dates are stored relative to the close's due month.
2. **Changing preparer / reviewer / manager reassigns every closing and custom task for the
   period**, sign-offs included, and subscribes the new assignee to the client's notification
   digest. The tool calls this **irreversible**.

Neither is a "just try it" operation. Say what will happen, get a yes, then do it.

---

## 8. Notes, comments, questions

| Tool | | Notes |
|---|---|---|
| `list_notes` | ✅ (Aug) | **Always call this before writing a case note** — one note per matter, rewritten in place (SKILL §7) |
| `create_note` · `update_note` | ✅ (Aug) **W** | Body is **HTML**; plain text will not render. Works on archived clients. **⚠️ Size wall — keep bodies under ~7,500 characters; 403 from ~8,000 up.** See below |
| `list_comments` | ◻︎ | Filter by client, task, thread, `transactionExternalId`, date range, or one of 15 comment types |
| `add_task_comment` · `add_transaction_comment` | ◻︎ **W** | |
| `get_questions` | ◻︎ | Client **questions/requests** — not organizer answers. Types: userToContact, contactToUser, transaction, receipt, bankFeedTransaction |
| `add_question` · `update_question` | ◻︎ **W** | A question goes to the *client*. Outward-facing — explicit instruction only |

### ⚠️ The note size wall

Note writes fail with **HTTP 403** once the body gets large. **Keep a note body under ~7,500
characters** — that is the firm's working ceiling, and title plus JSON escaping count toward it.
Applies to every `create_note` / `update_note`, not only case notes.

The measured boundary, the `list_notes`-first recovery after a 403, and the `Part 1 / Part 2 / …`
split discipline all live in **[SKILL §7](../SKILL.md)** — the single home for them, since the
boundary has not been bracketed tightly and will move if Double answers. **Read §7 before working
around this; do not invent a second approach.** Raised with Double 2026-08-06 — see the
open-requests section below.

---

## 9. Transactions & reports (QuickBooks behind Double)

| Tool | | Notes |
|---|---|---|
| `get_transactions` · `get_transactions_count` | ✅ (Jul) | Filter by account, dimension, type, date range, free text |
| `get_similar_transactions` | ◻︎ | **Underused and valuable.** Given one transaction's `externalId`, returns historical transactions with the same payee/description **plus `payeeStats` and `accountStats`** — e.g. "this vendor is coded to Rent or Lease 88% of the time". Made for categorization work; feeds the [`bookkeeping-sop`](../../bookkeeping-sop/) skill |
| `get_transaction_accounts` | ◻︎ | Full chart of accounts, including inactive |
| `get_transaction_types` · `get_transaction_dimensions` | ◻︎ | Dimensions: vendor, customer, employee, class, location, department, project |
| `get_profit_loss_report` · `get_balance_sheet_report` · `get_cash_flow_report` | ✅ (Jul) | |
| `get_ap_aging_report` · `get_ar_aging_report` | ◻︎ | |
| `get_expenses_by_vendor_report` · `get_sales_by_customer_report` | ◻︎ | |

These carry real client figures. They can be read freely for the firm's own work; they are
**never committed to this repo**.

### ⚠️ Bank Feeds are NOT here

Double has a **Bank Feeds** screen — the connected accounts' raw transactions, categorized inside
Double, with the categorization flowing through to QuickBooks. **No MCP tool reaches it.**
`get_transactions` above is the **posted ledger**: every row is already a real QBO transaction
with both sides of the entry, and it carries **no review-state field** at all. The only traces of
the feed in the connector are the `bankFeedTransaction` comment type (`list_comments`) and the
`bankFeedTransactionQuestion` question type (`get_questions`) — enough to discuss an item whose id
you already hold, not to list or categorize one.

So: **a session cannot work a client's bank feed**, and cannot tell you what is left to
categorize. The firm's own complaint about that screen — that categorized, pending and
merely-suggested items are indistinguishable, where QuickBooks splits them into *For review* and
*Categorized* — is raised with Double; see [`FOLLOW-UPS.md`](../../../../FOLLOW-UPS.md) row 23.

---

## 10. Metrics dashboards — QuickBooks / Xero clients only

| Tool | | Notes |
|---|---|---|
| `list_metrics_tabs` | ✅ | Built-in tabs (`ProfitLoss`, `BalanceSheet`, `CashFlow`, `isDefault: true`, not editable) plus custom ones |
| `list_metrics_variables` | ◻︎ | Rows of a tab. **Always look ids up** — never build them from account names; they keep `&` and the `:` sub-account separator |
| `list_metrics_visuals` | ◻︎ | |
| `create_metrics_tab` · `update_metrics_tab` · `delete_metrics_tab` | ◻︎ **W** | |
| `create_metrics_variable` · `update_metrics_variable` · `delete_metrics_variable` | ◻︎ **W** | |
| `create_metrics_visual` · `update_metrics_visual` · `delete_metrics_visual` · `reorder_metrics_visuals` | ◻︎ **W** | |

This is a real alternative to building a KPI page by hand — the charts live inside Double where
the team already works. Worth weighing against the
[`bookkeeping-kpis`](../../bookkeeping-kpis/) approach when someone asks for a client dashboard;
neither replaces the other (Metrics is in-product, the KPI page is on-brand and shareable).

---

## 11. Time tracking

| Tool | | Notes |
|---|---|---|
| `list_timers` | ✅ | 410 entries. Filter by user, client, workstream, date, billable. Role-scoped: standard users see only their own |
| `add_timer` | ◻︎ **W** | |
| `list_workstreams` | ✅ | Client: Sales Tax · Annual Report · Admin · Payroll · Year End · Cleanup. Firm: Admin · Tax returns · **CLAUDE-CODE** · Education · Meeting |

Trap: timers on a monthly close carry a synthetic `workStreamId` like `close-07-2026` with a
**null** `workStreamName` — it will not match anything from `list_workstreams`. Handle it, don't
treat it as bad data.

---

## 12. Activity log — the provenance trail

| Tool | | Notes |
|---|---|---|
| `list_activity_log` | ✅ | 5,671 entries. **Admin-only** (practiceAdmin / superAdmin). Filter by client, user, contact, entity, entityId, action, timestamp range. Each entry names the person, with email |
| `list_activity_log_actions` | ◻︎ | The valid `action` values |

Entities covered: Task · ProjectTask · NonClosingTask · Client · Close · EndClose · Project ·
**Organizer** · Transaction · File · FileSystemNode · Comment · Footnote · PropertyColumn ·
Timer · User · Email · SignOff · Setting · Template · ApiKey · AIChat · AIPrompt ·
ClientPortalPost · Accrual · Practice.

This is the honest answer to "who changed this?" — including when two parallel sessions
contradict each other. It is also a reminder that **our own writes are logged and attributed**.

---

## 13. Loans — ⛔ not available to us

| Tool | | Notes |
|---|---|---|
| `list_loans` · `get_loan` · `list_loan_payments` · `preview_loan_schedule` · `get_loan_reconciliation_balance` | ⛔ | `BILLING_ACCESS_DENIED` — *"this client is not on a plan that includes this feature… needs a Scale subscription"* |
| `create_loan` | ⛔ **W** | Same gate — and it stays a **write** the day the gate lifts. Default-deny applies to it then, not "it's in the unlocked pile now" |

The gate is **per client**, so it is possible another client is on a plan that allows it. The one
tested was not. Don't build anything on loan tools without checking first.

---

## 14. Still not available

| Not available | What to do instead |
|---|---|
| **Creating or updating a tax project** (deadline, status, `filedAt`, preparer) | Double UI. Hand over deep links — §4. **Requested from Double 2026-08-06** (see below) |
| **Publishing an organizer** to the client portal | Build the draft, then Lilian publishes — §5 |
| **Editing a published organizer's** slides or logic | Frozen once published |
| **Saved views** ("Tax Returns – View 2") | Rebuild from properties + projects, or ask for the CSV export (SKILL §2.1) |
| **File contents** | `get_file` gives a link for the human |
| **Loan tools** | Billing-gated — §13 |
| **Merging duplicate clients** | No tool. Prevention only |
| **Bank Feeds** — listing or categorizing a client's feed | Not exposed; the ledger endpoint shows posted entries only — §9 |

---

## Open requests with Double

**Sent 2026-08-06** by Lilian, as one reply to **Allison Millea** (Implementation Specialist at
Double, `allison@doublehq.com`) on her open *"Checking in before our 8/18 wrap-up"* thread —
Julia and Maria in copy. Two asks in that one email. The next call with Double is **17–18 Aug
2026** (her message says Aug 17, her subject line says 8/18 — the date itself is unconfirmed).

| Ask | Why | Status |
|---|---|---|
| **A *for review* / *categorized* split in Bank Feeds** (plus: will QuickBooks → Double ever sync, and will feed items reach the MCP?) | The screen mixes categorized, pending and suggested items, so the queue cannot be worked — see §9 and FOLLOW-UPS row 23 | To raise — thread or the 17–18 Aug call |
| **A write on the tax project's `dueDate`** | After extensions are filed the deadline moves for much of the roster at once (1120-S/1065 Mar 15 → Sep 15; 1040/1120 Apr 15 → Oct 15). The firm wants to say *"for every client with `Ext. Filed` checked, set the extended date for their return type"* — everything needed to decide that is already readable, only the write is missing | Sent, awaiting reply |
| **Raise or document the note size limit** | The 403 above — it caps the case notes the team relies on | Sent, awaiting reply |

If either lands, this file and [SKILL](../SKILL.md) both change. The **deadline write** flips §4
and the quick-answer table here, plus SKILL §1 ("The tax project is READ-ONLY — including the
deadline") and SKILL §2. The **note limit** retires the `Part 1 / Part 2` split in SKILL §7 and the
size-wall warning in §8 of this file.
Both are tracked in [`FOLLOW-UPS.md`](../../../../FOLLOW-UPS.md) (rows 19 and 22). The note-size
ask has its own evidence file —
[`note-size-limit-support-request.md`](./note-size-limit-support-request.md) — which records what
was sent and, importantly, that it **has** been sent.

---

## Keeping this file honest

Re-run the audit when someone hits a surprise, and at minimum whenever:

- a tool call fails in a way this file says it shouldn't;
- Double ships new tools (they arrive silently — organizers did, between July and August 2026);
- a new property column appears (`get_property_columns` is one call);
- the practice's plan changes and the loan tools unblock.

The audit itself is cheap: read the tool inventory, call the read-only ones with the smallest
page size, read the schemas of the write ones without calling them, and update the ✅/◻︎/⛔ marks
and the counts. Record the date at the top.
