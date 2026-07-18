---
name: odoo-mcp
description: Operating guide for ANY work through the Odoo MCP (the `Odoo_JK_Accounting_Group` server) — the firm's Odoo ERP. Load this BEFORE the first Odoo MCP call in a session. Use whenever a task will read or write Odoo data: journal entries, invoices, bills, payments, partners/contacts, reconciliation, taxes, accounting reports, CRM leads, appointments/calendars, products — anything "in Odoo." Encodes the hard 50-tool-calls-per-day budget on the free plan (and how to plan a task inside it), the chatter audit-log convention, the safety rules for write operations, the model map, and the call-efficient query patterns. Read this before planning any Odoo sequence so the budget is respected every time — running out mid-task leaves work half-finished.
---

# Odoo MCP — operating guide

Instructions for working with the firm's Odoo instance (JK Accounting Group) via the
**`Odoo_JK_Accounting_Group`** MCP server.

**Load this before the first Odoo MCP call.** The Odoo MCP is an account-level connector
shared by the whole firm; it is **not** declared in this repo's `.mcp.json`. This guide is
the firm's operating layer on top of it — the 50-call/day budget, the chatter audit trail,
and the write-safety rules. (The Odoo server also ships its own always-on instructions with
core-concept and app-selection guidance; this guide adds the parts that matter for *how we
operate the budget and the audit trail* — read both.)

> **Tool names.** This guide uses short tool names (`search_records`, `create_records`,
> `execute_method`, …). The actual MCP tools are prefixed `mcp__Odoo_JK_Accounting_Group__`
> — e.g. `mcp__Odoo_JK_Accounting_Group__search_records`.

---

## 1. Hard constraint: 50 MCP calls per day

This project uses the **free plan** of the Odoo MCP server. The quota is **50 tool calls per
24-hour period**, shared across everything.

Treat the quota as a real budget, not a soft guideline. Running out mid-task leaves work
half-finished and the database in an inconsistent state.

### What counts as a call

Assume **one MCP tool invocation = one call**, regardless of how much data it moves.

| Action | Calls |
|---|---|
| `search_records` returning 1 record | 1 |
| `search_records` returning 500 records | 1 |
| `get_record` for a single record | 1 |
| `create_records` creating 300 records | 1 |
| `update_records` updating 800 records | 1 |
| `post_message` (one chatter note) | 1 |
| `execute_method` | 1 |
| `list_models` / `server_info` | 1 each |

The key asymmetry: **batch tools cost the same as single-record tools.** A loop of 40
`update_record` calls burns 40 calls. One `update_records` with 40 IDs burns 1.

Failed calls still count. Validate inputs before sending.

### Budgeting rules

1. **Plan the full sequence before the first call.** Write out the intended calls, count
   them, and confirm the total fits the remaining budget.
2. **Never loop single-record tools.** Use `create_records`, `update_records`,
   `delete_records` (max 1000 per call).
3. **Fetch wide, not repeatedly.** One `search_records` with a broad domain and an explicit
   `fields` list beats several narrow searches. Filter in memory afterward — that's free.
4. **Request only the fields needed.** Doesn't save calls, but keeps responses small enough
   to actually work with.
5. **Cache within a session.** Partner IDs, account IDs, journal IDs, tax IDs are stable.
   Look them up once, reuse them. Do not re-query for something already retrieved.
6. **Don't call `list_models` or `list_resource_templates` routinely.** The model list is in
   section 4 below. Only re-check if something unexpected fails.
7. **Prefer `execute_method` over multi-step field manipulation.** Posting an entry via
   `action_post` is 1 call; replicating the state changes by hand is several and risks
   bypassing Odoo's business logic.
8. **Announce the cost before executing.** State the planned number of calls and get
   confirmation before any sequence of more than ~5.

### When the budget is tight

If the remaining quota can't cover the task, stop and say so rather than starting. Report
what was planned, the call count it needs, and what could be deferred to tomorrow.

---

## 2. Chatter logging convention

Every meaningful change to Odoo data gets a written record in the chatter of the affected
record. This is the audit trail — future reviewers (including the next session) should be
able to reconstruct what happened and why without reading logs.

### The rule

After completing a unit of work, post **one summary note** to the chatter of the most
relevant record.

Use `post_message` with `subtype_xmlid: "mail.mt_note"` — this is an internal log note. It
does **not** email followers and is hidden from portal users. Never use the default
`mail.mt_comment` for automated logging; that sends email to every follower.

### Granularity — important

`post_message` costs a call. One note per modified record will exhaust the quota fast.
**Batch the logging to match the work:**

- Modified one record → one note on that record.
- Modified many records as a single logical operation (e.g. recategorizing 60 journal
  items) → **one** note on the parent record (the journal entry, the partner, the relevant
  `account.move`) summarizing the whole operation, listing affected IDs.
- Work spanning several unrelated records → one note per logical group, not per record.

Aim for chatter notes to be roughly 10–20% of the session's call budget, not 50%.

### Note format

```
[Automated — Claude] <short action summary>
What: <what changed, in one or two sentences>
Scope: <record IDs / counts / date range affected>
Why: <the request or reason driving the change>
Reversal: <how to undo, if the change is reversible>
```

Keep it plain and factual. Body is HTML — plain strings get escaped by Odoo, so use `<br/>`
or `<p>` tags for line breaks rather than `\n`.

### What always gets logged

- Any `create`, `update`, or `delete` on accounting records
- Any `execute_method` that changes record state (posting, reconciling, validating,
  cancelling)
- Reconciliation decisions, including the reasoning where a judgment call was made
- Anything that would look unexplained to someone reviewing the record in six months

### What doesn't need logging

- Pure reads (`search_records`, `get_record`, report handlers)
- Failed operations that changed nothing — report those in conversation instead

---

## 3. Safety rules for write operations

- **Never delete accounting records** (`account.move`, `account.move.line`,
  `account.payment`) without explicit per-operation confirmation. Posted entries generally
  should not be deleted at all — reverse them.
- **Confirm before any bulk write.** State the model, the record count, the specific fields
  changing, and the old-to-new values before executing.
- **Check the lock date** before writing to any period. Odoo enforces this, but a failed
  write still costs a call.
- **Multi-company:** this instance has multiple companies. Always confirm which
  `company_id` a record belongs to before writing. Cross-company contamination is painful
  to unwind.
- **Never write to `res.users`, `res.groups`, `ir.model.access`, or `ir.rule`.** Permission
  changes go through the Odoo UI by a human.
- Prefer reversal over deletion, and draft over posted, whenever there's a choice.

---

## 4. Available models

All models on the instance are exposed via MCP — roughly 450, with no per-model allowlist
configured. Note that `list_models` reports `operations: null` for every model, meaning
granular permissions aren't published through MCP. **Actual write access is governed by the
Odoo user tied to the API key**, and a permission failure will surface as a failed call
(which still costs quota). When in doubt about write access to an unfamiliar model, ask
rather than probing.

The ones that matter for this project:

**Accounting core**
`account.move` (journal entries, invoices, bills) · `account.move.line` (journal items —
this is where most real queries live) · `account.payment` · `account.journal` ·
`account.account` · `account.bank.statement` · `account.bank.statement.line` ·
`account.full.reconcile` · `account.partial.reconcile` · `account.tax` ·
`account.fiscal.position` · `account.asset` · `account.loan` · `account.loan.line` ·
`account.analytic.account` · `account.analytic.line`

**Reporting handlers**
`account.balance.sheet.report.handler` · `account.general.ledger.report.handler` ·
`account.trial.balance.report.handler` · `account.cash.flow.report.handler` ·
`account.aged.receivable.report.handler` · `account.aged.payable.report.handler` ·
`account.partner.ledger.report.handler` · `account.bank.reconciliation.report.handler` ·
`l10n_us.tax.report.handler` · `l10n_us.1099_box`

**Contacts and structure**
`res.partner` · `res.partner.bank` · `res.company` · `res.currency` · `res.currency.rate`

**Products and sales**
`product.template` · `product.product` · `product.pricelist` · `crm.lead` · `crm.stage`

**Communication and scheduling**
`mail.message` · `mail.activity` · `mail.template` · `calendar.event` ·
`appointment.type` · `appointment.slot` · `whatsapp.message` · `whatsapp.template`

**HR**
`hr.employee` · `hr.job` · `hr.department`

---

## 5. Query patterns

**Find journal items for a partner in a date range** — 1 call:

```
search_records(
  model="account.move.line",
  domain=[["partner_id","=",<id>],
          ["date",">=","2026-01-01"],
          ["date","<=","2026-06-30"],
          ["parent_state","=","posted"]],
  fields=["date","account_id","debit","credit","name","move_id"]
)
```

**Resolve names to IDs once, then reuse.** One `search_records` on `res.partner` returning
all relevant partners with `["id","name","vat"]` beats a lookup per transaction.

**Post a journal entry** — create then post, 2 calls:

```
create_record(model="account.move", values={...})
execute_method(model="account.move", method="action_post", ids=[<id>])
```

**Reverse an entry** — use `execute_method` with the reversal wizard rather than deleting
and recreating. Preserves the audit trail and costs fewer calls.

**Idempotent writes** — for imports that might run twice, prefer `import_records` with an
`__import__.<your_id>` external ID. Re-running matches on the external ID instead of
creating duplicates.

---

## 6. Session checklist

Before starting:
- [ ] Confirm how many calls have already been used today
- [ ] Write out the planned call sequence and count it
- [ ] Confirm the plan fits the remaining budget

While working:
- [ ] Batch every multi-record write
- [ ] Reuse cached IDs instead of re-querying
- [ ] Confirm before bulk writes and before any deletion

Before finishing:
- [ ] Post chatter note(s) summarizing what changed, at the right granularity
- [ ] Report total calls used and what remains
