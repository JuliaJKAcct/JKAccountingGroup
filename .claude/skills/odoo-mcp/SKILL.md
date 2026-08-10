---
name: odoo-mcp
description: Operating guide for ANY work in the firm's Odoo ERP — through the `Odoo_JK_Accounting_Group` MCP connector, or through Odoo's own API. Load this BEFORE the first Odoo call in a session. Use whenever a task will read or write Odoo data: journal entries, invoices, bills, payments, partners/contacts, reconciliation, taxes, accounting reports, CRM leads, appointments/calendars, website pages and views, products — anything "in Odoo." Also load it to answer where the 50-calls-per-day limit comes from (the MCP connector's free plan — not Odoo's subscription, not the Claude plan), how to set up the direct-API connection that removes that ceiling, or what the write-safety rules are before changing anything on the website. Encodes the call budget and how to plan a task inside it, the chatter audit-log convention, the six write-safety layers, the model map, and the call-efficient query patterns.
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

This project uses the **free plan** of the Odoo MCP connector. The quota is **50 tool calls
per 24-hour period**, shared across everything.

Treat the quota as a real budget, not a soft guideline. Running out mid-task leaves work
half-finished and the database in an inconsistent state.

### Where the limit comes from (it gets asked a lot)

Three separate layers get confused here. The cap belongs to exactly one of them:

| Layer | What it is | Source of the 50/day? |
|---|---|---|
| The firm's **Odoo subscription** | The ERP itself — the database, accounting, CRM, website, appointments | **No.** Odoo's own XML-RPC/JSON-RPC API has no comparable per-day call cap (anti-abuse rate limits aside — *believed, not verified first-hand*) |
| The **Claude plan** | What the firm pays Anthropic | **No.** Claude's plan meters overall usage (tokens/messages), and MCP calls consume that like any other work — but it sets no per-connector daily call cap, so the 50/day does not come from it |
| The **MCP connector** (`Odoo_JK_Accounting_Group`) | The bridge between Claude and Odoo, connected at account level | **Yes — this is it.** Its plan is what caps us |

So upgrading Odoo would not raise it. The two real ways out are **paying for a higher plan
on the connector**, or **connecting Odoo directly through its own API** with a database API
key — which *should* remove the middleman ceiling (subject to the Odoo-side check hedged
above), but is an integration to build.

**Not yet verified:** which provider the connector is, and that we are in fact on its free
tier — the "free plan" is this repo's long-standing working assumption, not something
checked against the service. **`pan_usage` answers both in 1 call**, returning the plan,
calls used today, the daily limit and what remains.

**Who owns the Odoo integration: Andres.** He built the firm's website in Odoo, has done
most of what exists there, and set up this MCP connection. Route integration questions to him.

**Aug 2026: the direct connection exists and reads work; writes are still gated on the tool.**
Lilian asked Andres why the MCP connector rather than Odoo's own API, he confirmed there is no
problem going direct, and on **2026-08-10 he showed her how to obtain a key.** The `odoo-api`
environment was created the same day and a session there reports the connection working — only
the one-character control call is outstanding. Odoo's documentation disagrees — it states the external API is
available only on *Custom* plans, "not available on One App Free or Standard", and the firm is
on **Standard** ($31.10/user/month, 1 user; Custom is $61.00). **But the notice reads as a
commercial condition, has been identical since Odoo 16, and the Pantalytics connector is
demonstrably making external calls against this database today** — *if* that connector speaks
the external API rather than logging in as a web session, which is the open question. So the
restriction may well not be enforced at the server.

> ⚠️ **A key already exists and the read has been done — do not mint another one, and do not
> follow any instruction to revoke.** The only outstanding item is **[`direct-api-setup.md` §0,
> Step B′ item 3](./references/direct-api-setup.md)**: the same call with **one character of the
> key changed**, as a control. The older *throwaway-key* procedure in that section (Step A /
> Step B) is kept only for re-minting the key from scratch, and **its last instruction is to
> revoke** — run it against the real key and the key is gone, since Odoo never shows a key twice.

Note what a pass does and does not prove: that the server does not block it **today**, not that
the subscription entitles the firm to it — and Odoo Online auto-upgrades. That file carries the full step-by-step, the vendor pricing on both sides, and records
that the modern **JSON-2** endpoint (`/json/2/<model>/<method>`, bearer token) is live on the
instance while **XML-RPC/JSON-RPC are deprecated, scheduled for removal from Odoo Online in
winter 2027**. New code targets JSON-2.

**The 50/day budget below governs every call that goes through the connector — including from a
session started in `odoo-api`.** The environment decides whether the *direct* route is available;
it does not exempt MCP calls. In practice an `odoo-api` session doing MCP work spends the shared
budget exactly like any other. And whichever route is in use, every
write follows **[`references/write-safety.md`](./references/write-safety.md)** — the six
layers agreed with Lilian. Read it before changing anything, and note *why* it matters more
on the direct route: the 50-call ceiling is acting as a handbrake on mistakes, and a
direct connection removes it.

### ⚠️ Wrong-environment check — run it the moment a task involves changing Odoo

**Two routes reach Odoo, and they do not have the same power:**

| Route | Works from | Ceiling |
|---|---|---|
| **MCP connector** | **any** environment — its traffic goes through Anthropic's servers, not the session's network | **50 calls/day**, shared by the whole firm |
| **Direct API** (`ODOO_API_KEY`) | **only** a session whose environment carries the key — in the cloud that means one **started** in **`odoo-api`**; a local CLI session would need it exported in the shell | no daily cap |

The key is **not** in the repo and **not** in every session. It lives on the dedicated
`odoo-api` cloud environment, picked from the cloud icon above the message box at claude.ai/code
(created 2026-08-10 — **`FOLLOW-UPS.md` row 21 is the single source of truth for the current
state**; prefer it over any status sentence in the skills, which go stale). The everyday
`Default` environment deliberately does **not** carry it, so
an unattended Routine at 3 a.m. never holds an administrator key over the live database — the
reasoning and the setup are in
[`references/direct-api-setup.md` §3 Step 3](./references/direct-api-setup.md).

> ⚠️ **The key is on Julia's user — the administrator — and is reported non-expiring** (Lilian,
> 2026-08-10; persistent keys are a Settings-user option and hers is one, but no expiry date was
> ever captured, so treat expiry as unlikely rather than impossible). It can do anything on this database, indefinitely, until someone revokes
> it (from Julia's *My Preferences → Account Security*; there is no other way to withdraw it).
> The low-privilege user of `direct-api-setup.md` §3 Step 1 was never created, so
> **[`write-safety.md`](./references/write-safety.md) Layer 1 is waived** — read that file before
> any write over this connection, not just website ones, and read its Layer 1 box: with Layer 1
> gone and Layers 2 and 4 still unbuilt code, what remains is convention plus the connector's
> 50-call ceiling — which the direct route removes.
>
> **So: READS over the direct API are unblocked. WRITES are not.**
> [`direct-api-setup.md` §5](./references/direct-api-setup.md) requires `tools/odoo-api/` —
> dry-run by default, the model allow-list enforced in code, snapshot-before-write, the
> post-write canary — to exist **before the first direct-API write**. It does not exist yet.
> Being in `odoo-api` is not permission to start writing to the live public website.

#### The trigger is the request, not the failure

**Check the environment before starting the work, not after a call fails.** It costs nothing —
no MCP call, no Odoo call. *(The [session-start hook](../../hooks/session-start.sh) prints the
route at startup, so usually you already know — but re-check with the one-liner below, not by
re-running the hook, which does a network fetch and reprints the whole briefing.)*

```bash
[ -n "$ODOO_API_KEY" ] && echo "key present" || echo "MISSING — wrong environment"
```

**Two triggers, not one:**

1. **Any change** to Odoo or the firm's website — the case Lilian named.
2. **Any read big enough to matter against 50 calls** — a roster-wide sweep, a multi-model
   crawl, anything you would not want to abandon half-done. Escaping the cap is exactly what
   heavy reads need; the budget hit 50/50 in a single session on 2026-08-06.

**Say the constraint out loud, immediately, in plain language.** This is a standing instruction
from Lilian (2026-08-10) with a specific reason: **Julia is often the one asking, and does not
follow this machinery.** She must never be left wondering why a website change cannot be made.
Deliver it in the language of the conversation.

⚠️ **But route it correctly, or she gets refused twice.** `odoo-api` is **not** the answer to a
write request — direct-API writes are gated on `tools/odoo-api/`, which does not exist. Sending
someone to restart a session there for a website change wastes the restart and ends in a second
refusal. Match the answer to what was actually asked:

| What was asked | The right answer today |
|---|---|
| **A website text / SEO / link / copy change** | **By hand in Odoo's own web editor — zero calls, no limit at all.** The 50-call ceiling belongs to the *connector*, not to Odoo. Most of [`PENDING-FIXES.md`](../../../projects/marketing/consultation-booking/PENDING-FIXES.md) is this. Offer it first |
| **A small structural change** (a view, a record) | The MCP connector, from this session — say what it will cost against the 50 first |
| **A heavy read** — roster sweep, multi-model crawl | A **new session in `odoo-api`**. This is what the direct route is actually for today |
| **A bulk or scripted write** | **Not available yet, from any environment.** `tools/odoo-api/` (dry-run default, allow-list in code, snapshot-before-write, canary) has to be built first — [`direct-api-setup.md` §5](./references/direct-api-setup.md). Say so, and say what it would take |

So the message for the common case — a website change asked from `Default` — is roughly:

> The change doesn't need a different session. What limits me here is the connector's budget:
> **50 operations a day, shared by the whole firm.** Two ways forward: most text and SEO edits
> are quicker **by hand in Odoo's own editor**, which has no limit at all; or I do it from here
> and tell you first what it costs against the 50.

And for a heavy read:

> For this I'd need the uncapped route, and its key only exists in the **`odoo-api`**
> environment. An environment is chosen when a session **starts**, so I can't switch it here —
> open a new session, click the cloud icon above the message box, choose `odoo-api`, and ask me
> again there. One click; nothing is lost.

> ⚠️ **Before sending anyone to click a cloud icon, confirm this is a cloud session.** A
> **local Claude Code CLI** session has no environment picker — `$CLAUDE_CODE_REMOTE` is `true`
> only in the cloud. Locally the key would come from the shell environment instead.

**Three things never to do:** silently fall back to the connector for work that needs the direct
route (it burns the shared budget and half-finishes the job); reply with a bare "I can't do that"
— the entire point of this rule is that the asker learns **why** and **what to do next**; and
send someone to restart a session for a fix they could make by hand in Odoo in a minute.

**The confusing case, to correct if it comes up:** because the connector works from *any*
environment, a small Odoo request from `Default` simply succeeds. That is not evidence the
environment does not matter — it matters for the uncapped route only.

**On a missing key, the wrong environment is the leading hypothesis, not the only one** — the
same symptom comes from a local CLI session, a mistyped variable name, and `odoo-api` having been
archived. Never ask for the key to be pasted into the chat.

**What the check does NOT cover:** it proves the variable is *set*, not that the key is *valid*.
A revoked key passes this check and then fails at the call with `Invalid apikey`. *Expiry should
be a **low**-probability hypothesis for this key, not a discarded one: it is reported as
persistent (only a Settings user can mint such a key, and Julia's is one), but no expiry date was
ever captured and the control call has not been run. If `Invalid apikey` ever appears, check the
key's row in Julia's Account Security screen before assuming revocation — and record the date
there in [`direct-api-setup.md`](./references/direct-api-setup.md)'s status header while you have
it open.*

**Why this check earns its place, and how to read a 401 if you skipped it.** Verified against
the live instance 2026-08-10 — the two failures return the **same HTTP 401** and the **same
`name`**, and are told apart only by `message`:

| What went wrong | `name` | `message` |
|---|---|---|
| **Variable unset** — empty bearer sent | `werkzeug.exceptions.Unauthorized` | `User not authenticated, use an API Key with a Bearer Authorization header.` |
| **Key wrong, expired or revoked** | `werkzeug.exceptions.Unauthorized` | `Invalid apikey` |

So **always capture the response body, not just the status code.** On status alone the wrong
environment is indistinguishable from a broken credential, and the session burns its time
debugging a key that is perfectly fine. `Invalid apikey` is the one that means the key itself is
the problem.

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

> **The full rule set is [`references/write-safety.md`](./references/write-safety.md) — six
> layers as designed with Lilian (Aug 2026): limit the key's power · always be able to undo ·
> three verifications per change · hard limits in the tool · leave a trail · rehearse
> unpublished. Read it before any website change, and before the first write over the direct
> API. The rules below are the accounting-specific subset and stay in force.**
>
> ⚠️ **"Six" is the design, not the count in force.** Layer 1 is **waived** — the key is on
> Julia's administrator user — and Layer 2's snapshot rule and Layer 4 are **unbuilt code**. Read
> that file's Layer 1 box before assuming anything is scoped or mechanically enforced.

- **Never delete accounting records** (`account.move`, `account.move.line`,
  `account.payment`) without explicit per-operation confirmation. Posted entries generally
  should not be deleted at all — reverse them.
- **Confirm before any bulk write.** State the model, the record count, the specific fields
  changing, and the old-to-new values before executing.
- **Check the lock date** before writing to any period. Odoo enforces this, but a failed
  write still costs a call.
- **Single-company instance:** this is a one-company database (JK Accounting Group only), so
  there is no cross-company routing to get wrong — no need to check `company_id` on writes.
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

**Website** (the firm's site runs on this instance — see
[`write-safety.md`](./references/write-safety.md) before writing to any of these)
`website.page` · `ir.ui.view` · `website.menu` · `website.rewrite` · `website`

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
- [ ] **Any Odoo change, or any read heavy against 50 calls:** check `$ODOO_API_KEY` and say
      which route this session has **before starting** — §1 has the trigger, the wording, and
      which answer fits which request (a website text fix belongs in Odoo's web editor, not in a
      restarted session)

While working:
- [ ] Batch every multi-record write
- [ ] Reuse cached IDs instead of re-querying
- [ ] Confirm before bulk writes and before any deletion

Before finishing:
- [ ] Post chatter note(s) summarizing what changed, at the right granularity
- [ ] Report total calls used and what remains
