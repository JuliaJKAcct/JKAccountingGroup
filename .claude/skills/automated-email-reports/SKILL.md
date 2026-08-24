---
name: automated-email-reports
description: Set up a fully automated, unattended recurring email report — data pulled from the firm's systems, composed as an on-brand email, and sent on a schedule with no clicks. Use when someone wants to "email me/Lilian/a client this report every month / twice a month / weekly," schedule a recurring report, or turn an existing manual report into an automatic one. This is the reusable playbook that captures how we solved it the first time (Claude Code Routines + a Google Apps Script email webhook), so a new automation takes an afternoon, not a week. It reuses the firm's existing send webhook and design system. Read this before wiring up any new scheduled email. ALSO the firm's reference for ROUTINE ADMINISTRATION generally — what a session can and cannot do to any Claude Code Routine (create, read its prompt, rewrite, reschedule, disable, delete, fire; and what is UI-only: MCP connectors, the git source, the network allowlist) — so load it for "can you create/change/delete a Routine?", "can Claude edit my scheduled task?" or any question about a trigger, even one that sends no email.
---

# Automated Email Reports — the setup playbook

Turning *"send me this report automatically every month"* into a working, unattended
pipeline hits the **same six traps every time**. This skill is the map around them.
The first time we built one (the `recurring-expense-monitoring` report) we discovered
each trap the hard way; this captures the fixes so the next one is quick.

**Read the mental model, then follow the steps in order.** Most of the pieces already
exist (the send webhook, the brand system) — a new report mostly reuses them.

## Mental model (read first)

- A **Routine** (claude.ai/code/routines) is the scheduler: a cloud Claude Code
  session that fires on a cron schedule and runs a prompt **unattended** (no human in
  the loop). That prompt is the only thing that runs.
- The routine **checks out this repo at `main`** when it runs. So the *report logic*
  and the *email design* live in the repo (a **skill** + an **email template**); the
  routine prompt stays short and just points at them.
- **Design lives in the repo, never in the routine prompt.** If you paste HTML into
  the prompt, every design tweak becomes a prompt edit. Put it in a template file and
  reference it. (Exception: a one-off test before the template is merged — inline is
  a stopgap only.)
- **Sending** can't go through the Gmail connector (it's draft-only). It goes through
  a small **Google Apps Script web app** that the firm already runs — the routine
  POSTs the finished email to it over HTTPS.

## 🔧 What a SESSION can and cannot do to a Routine — tested 2026-08-18

📍 **This table is the single source for these facts.** Other files (the sweep's
[`weekend-ci-sweep.md`](../../../projects/client-intelligence/automation/weekend-ci-sweep.md) and
[`sweep-health-review.md`](../../../projects/client-intelligence/automation/sweep-health-review.md))
should **point here rather than restate it** — the failure this whole page documents is a claim
copied into five places and then falsified in one.

**Lilian's question:** *"can you create the Routines yourself and paste the prompt into them? If we
want to change one, do you need me?"* Mostly no — and the exceptions are sharp and worth knowing
before you promise anything. Every row below was **exercised or refused in a live call**, not read
off a schema.

| | Session? | Notes |
|---|---|---|
| **Create** a Routine (`create_trigger`) | ✅ | Cron or one-shot; fresh session per fire, or bound to an existing one |
| **Read** its full prompt (`list_triggers`) | ✅ | Returns the **entire prompt body** — see the warning below. ⚠️ Two caveats: it **defaults to 20 entries**, and it **hides one-shot Routines that have already fired** unless you pass `include_completed: true`. A Routine you cannot see may simply be filtered out |
| **Rewrite** the prompt (`update_trigger`) | ⚠️ **ONLY on a Routine a session created** | 🔴 **`created_via` gates the WRITE, not just connectors — tested 2026-08-24.** `update_trigger` on the weekly CI sweep (`created_via: http_api`) is refused outright: *"Agents can only update routines they created (via create_trigger). A routine's own session may still disable itself (enabled=false only)."* So **the firm's two real automations — the CI sweep and the recurring-expense monitor — can be READ by a session but only re-pasted by a person in the UI.** A `meta_mcp` Routine rewrites fine. 🛑 **When you can write, the write REPLACES the prompt wholesale**, so finish by re-reading it and confirming the real webhook URL and secret are still there (below) |
| **Reschedule / rename / disable** | ✅ on `meta_mcp` · ❓ **inferred, NOT tested, on `http_api`** | All of these go through `update_trigger`, so the `created_via` gate above *probably* reaches them — but **only the PROMPT write was actually attempted on 2026-08-24, and this table does not promote an inference to a fact** (that is the error the whole row above documents). The refusal text does name one exception explicitly: a Routine's **own** session may set `enabled=false`. 🛑 **If you need to move the sweep off 03:00 ET** — a live open question below — **TRY IT rather than reading "cannot" here, and record what happened.** Fields: `cron_expression`, `run_once_at`, `name`, `enabled`, `model` |
| **Delete** | ✅ on `meta_mcp` · ❓ **untested on `http_api`** | A **separate tool**, `delete_trigger` — there is no delete flag on `update_trigger`. ⚠️ **Nobody has tried deleting an `http_api` Routine and this table will not guess**: the `update_trigger` refusal is about *updating*, and a destructive test on a live automation is not one to run casually. Assume it may refuse the same way. Disabling is not deleting: a dormant Routine the firm believes is gone is worse than either |
| **Fire it now** (`fire_trigger`) | ✅ | Optionally with extra text appended for that one run |
| 🔴 **Attach MCP connectors** (Gmail, Double, Drive…) | ❌ | *"the connectors parameter is not available for this organization"* — a flat refusal, **not** a permissions issue in the calling session |
| 🔴 **Attach a git source** (a repo checkout) | ❌ | `create_trigger` has **no parameter for it at all**, and `update_trigger` cannot add one later |
| 🔴 **Set the network-egress allowlist** | ❌ | No parameter. And for *this* skill it is load-bearing — trap #4: the POST to `script.google.com` is blocked unless that host is allowed in the environment, so **a session-made email Routine composes its report and cannot send it** |

### The tell is `created_via`, and it is visible in `list_triggers`

- **`http_api`** — created in the **routines UI**. These carry `sources` (the repo) *and*
  `mcp_connections`. The firm's two working automations are both this: the weekly CI sweep (7
  connectors) and the recurring-expense monitor (4).
- **`meta_mcp`** — created **from a session**. These carry **neither**. All three of the firm's
  session-made Routines are in this state.

**So the rule is simple: a Routine that must read a mailbox, a calendar or Double, that needs a
checkout waiting for it, or that must reach the internet (this skill's webhook included) — has to be
created by a person in the UI.** Everything else, ask a session.

🔴 **AND THE SAME FIELD GATES WRITES — found 2026-08-24, and it costs more than it looks.** A
session cannot `update_trigger` an `http_api` Routine at all; the refusal is explicit that agents
may only update Routines they themselves created. **The two Routines that actually run this firm are
both `http_api`**, so the whole loop is: a session can *read* the live prompt, *draft* the new one,
and *check* it — but **a person has to paste it.** Plan for that: when a session rewrites one of
these prompts, it should hand over a ready-to-paste block **with the real webhook values already
substituted in**, and say plainly that nothing changes until the paste happens. ⚠️ **This is exactly
where the 2026-08-11 failure came from** — the repo copy was edited, everyone believed the change
had shipped, and the sweep ran three weeks on the old instruction.

⚠️ **A session-made Routine is not useless, but it must be written to survive its own poverty.**
Give it two things: **clone the repo itself** (*"locate the repo, or clone `<url>`"* — the
repo-coherence audit has run that way since July), and an instruction to **say out loud in its first
paragraph what it could not reach**, rather than reporting a silent gap. A scheduled session that
reports *"no reply found"* for a mailbox it could not open is worse than one that reports nothing.

### 🔒 And the security fact nobody had noticed

**`list_triggers` returns the prompt body verbatim — including the webhook URL and secret.** Both of
the firm's `http_api` Routines carry the same pair in plain text inside their prompts, so **any
session holding the Claude-Code-Remote MCP can read that credential in one call.**

Two consequences:

1. ✅ It is what makes a re-paste safe: read the live values out, write them back in — **by whoever
   is doing the pasting.** On a `meta_mcp` Routine a session does the whole thing; on an `http_api`
   one (both of the firm's real automations) the session reads and drafts and **a person pastes**,
   per the `created_via` write gate above.
   _(An earlier claim that reading was impossible — "there is no `get_trigger`" — was **wrong**, and
   it parked two real decisions behind an imaginary blocker. There is indeed no `get_trigger`;
   `list_triggers` simply does the job. ⚠️ But the correction then over-reached in the other
   direction and asserted a session could rewrite **any** prompt; that was untested on `http_api`
   and is false. **Both errors are the same error** — a capability asserted from one observation.)_
   🛑 **ALWAYS END A WRITE BY RE-READING IT.** `update_trigger` replaces the prompt wholesale, and
   the failure is the silent one this skill's trap #6 exists for: paste the **repo** copy, which
   carries `<WEBHOOK_URL>` / `<WEBHOOK_SECRET>` placeholders, and the sweep still runs, still
   merges, and the weekly email just stops arriving. **Call `list_triggers` again and confirm both
   literal values are present in what you wrote.**
   🔒 **And handle the credential like one.** Reading it puts it in that session's transcript, which
   lives in the firm's **shared** Claude account. So: **never echo the value into a reply**, never
   commit it, and **delete the session when the job is done** — the same discipline
   [`double-mcp`](../double-mcp/SKILL.md) §2.2 sets for organizer reads, for the same reason.
2. ⚠️ Keeping `<WEBHOOK_SECRET>` placeholders out of this repo stays right — **git history is
   permanent and far more widely readable** — but do not describe the value as *hidden*. If it ever
   matters, **rotate it** in the Apps Script and in every Routine that carries it.

🛑 **Reading and rewriting a live scheduled job is still something you ASK about first.** It is an
outward-facing change to something that runs unattended — confirm-before-acting, not a technical
limit.

## The six traps (and the fix for each)

| # | Trap | Why it bites | Fix |
|---|---|---|---|
| 1 | **No connectors in the scheduled run** | Routines created via the MCP `create_trigger` tool run with **no MCP connectors and no ToolSearch** — the run can't reach Double / Drive / Gmail. | Create the routine in the **web UI** (claude.ai/code/routines) and **attach the connectors there**. Connectors are included by default only for web-UI routines. |
| 2 | **Gmail is draft-only** | The Gmail MCP can create a draft but has **no send tool**, so an unattended run can't actually mail anything. | Send through the firm's **Apps Script email webhook** (below). The routine POSTs JSON; the script sends via `MailApp`. |
| 3 | **Duplicate emails** | An unattended agent can loop (e.g. once per client) or retry, so the report arrives 2–5×. | **Two layers:** (a) the webhook **de-dupes** identical sends (CacheService fingerprint); (b) the prompt says **exactly once — one POST, one recipient, stop on `{"ok":true}`**. |
| 4 | **Network egress blocks the webhook** | The routine's environment has a network policy; if it doesn't allow the webhook host, the POST fails. | In the routine's **environment settings**, allow `script.google.com` and `script.googleusercontent.com` (a small **Custom** allowlist — you don't need "Full access"). |
| 5 | **The email loses the brand** | Told to "compose an email," an unattended run improvises generic HTML and the design system disappears. | Commit an **email-safe HTML template** to the repo and tell the run to **fill it**, not invent one. See `reference/` in `recurring-expense-monitoring` for a worked example. |
| 6 | **The repo copy of the prompt is not the live one** | A web-UI routine holds its **own pasted copy** of the prompt. Editing the version committed to the repo changes nothing, so a change everyone believes shipped keeps not happening — the JK weekend sweep ran three weeks on a superseded instruction this way (2026-08-11). | **Treat re-pasting as part of the edit, not a follow-up:** say it out loud in the same turn, and date the last change that needs it next to the block. ⚠️ **Never paste wholesale** — the repo's copy carries `<WEBHOOK_URL>` / `<WEBHOOK_SECRET>` placeholders, so carry the real values across or the send dies silently. Better: `update_trigger` (the Routines MCP) takes a `prompt`; **`list_triggers` is what reads the live one back** — `update_trigger` has no read path. |

## Steps

### 1. Build the report generator as a skill
The recurring job's *logic* (what data to read, how to evaluate it, what the report
says) belongs in a **skill** in `.claude/skills/`, not in the routine prompt. The
routine then just says "use the `<name>` skill; follow it." Keep the skill **read-only**
on the firm's systems unless it genuinely must write.

### 2. Build the email as an email-safe template
Email HTML is **not** web HTML — Gmail/Outlook strip most of it. Commit a template
that is:
- **Table-based layout**, **all styles inline** (no `<div>`/flexbox/class CSS, no
  `box-shadow`/`border-radius` as the accent mechanism, no gradients).
- **No SVG and no remote images** (Gmail strips SVG and defers images) — render the
  logo as a **type lockup** (wordmark + service line), not the Medallion SVG.
- **Web-safe font fallbacks first**: `Georgia` (serif headings), `Arial` (body),
  `Courier`/monospace (kicker) — the brand's Source Serif 4 / IBM Plex won't load in
  most mail clients, so the fallbacks are what actually render.
- **On brand**: pull colors/proportion from [`brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md)
  and use the **impeccable** skill for the design pass. Respect its bans (no
  side-stripe borders, no per-section mono kicker, no gradient text, no glassmorphism)
  — use tinted-background callouts and the mono kicker **once** at the masthead.
- **Contrast**: body text ≥ 4.5:1; darken small semantic labels so they clear AA too.

A worked, production example lives at
[`../recurring-expense-monitoring/reference/email-template.html`](../recurring-expense-monitoring/reference/email-template.html)
— copy its shape for a new report.

### 3. Stand up (or reuse) the email-send webhook
The firm runs **one** Apps Script web app ("JK Email Sender") that any automation can
POST to — **reuse it**; you rarely need a new one. If you do need one, the code is in
[`reference/email-webhook.gs`](reference/email-webhook.gs). Deploy notes:
- Paste the code into a new Apps Script project → **Deploy → New deployment → Web app**.
- **Execute as:** *me* (the firm account). **Who has access:** *Anyone* (the secret,
  not Google auth, is what protects it — see below).
- Copy the `/exec` **web-app URL**. Generate a **fresh random secret** and put it in
  the script's `SECRET` constant.
- To update the code later: **Deploy → Manage deployments → (pencil) Edit → New
  version**. A brand-new deployment gives a *different* URL — editing keeps the URL.
- **Gotcha:** if the deploy screen shows *Page Not Found* / `authuser=1`, you're
  signed into multiple Google accounts. Open it in a **private/incognito window signed
  into only the firm account**.

### 4. Create the Routine in the web UI
At **claude.ai/code/routines → New**:
- **Repository:** this repo. **Schedule (cron):** e.g. `0 9 1,20 * *` = 09:00 on the
  1st and the 20th. ("Last day of month" isn't expressible in cron — schedule day **1**
  and have the prompt evaluate the *previous* month.)
- **Connectors:** attach every service the run needs (Double, Google Drive, Gmail,
  QuickBooks…). **This is trap #1 — do it here.**
- **Environment / network:** allow the webhook host (trap #4): a **Custom** policy with
  `script.google.com` and `script.googleusercontent.com`.

### 5. Write the routine prompt
Keep it short; it orchestrates, it doesn't contain the design. Use the skeleton in
[`reference/routine-prompt-skeleton.md`](reference/routine-prompt-skeleton.md). It must
cover: run context (date/period), which skill to follow, data sources + IDs, **compose
from the committed template**, and the **exactly-once delivery contract**. Put the
**webhook URL and secret in the prompt only** — never in the repo.

### 6. Test, then go live
- Add a first line: `TEST RUN — evaluate <a fixed recent complete month> regardless of
  today's date. Remove this line after the first successful test.`
- Set the recipient to **yourself** first. **Run it manually** from the routine page.
- Confirm: it arrived **once**, **on brand**, with **real data**, and the run's final
  message says the webhook returned `{"ok":true}` and that it reached the data sources.
- Then flip to production: **remove the TEST line** and **change the recipient** to the
  real person. Nothing else changes.

### 7. Guardrails
- **Secrets never in the repo.** Webhook URL + secret live in the routine prompt /
  Apps Script only. Scan before committing anything.
- **No client data in the repo.** Templates use **fictional** sample data; real
  figures stay in the firm's systems.
- **Read-only** on the firm's books unless writing is the explicit job.
- **Review before merge.** Any repo change (skill, template) gets an independent review
  before the PR is merged — the firm's standing rule.

## Why this shape (the reasoning, so you can adapt it)
- The webhook exists **because Gmail can't send unattended**, and SMTP is blocked by
  the HTTPS-only egress proxy — an HTTPS Apps Script endpoint is the one path out.
- De-dupe is **belt-and-suspenders**: the prompt can still misbehave, so the webhook is
  the backstop; the webhook could be hit by a retry, so the prompt is the first line.
- The template is committed (not generated) because an unattended model, asked to
  "make it look good," produces something different every run — consistency requires a
  fixed artifact.

## Files in this skill
- [`reference/email-webhook.gs`](reference/email-webhook.gs) — the Apps Script web-app
  code (secret check + de-dupe + send). Deploy once; reuse across automations.
- [`reference/routine-prompt-skeleton.md`](reference/routine-prompt-skeleton.md) — a
  fill-in-the-blanks routine prompt with the exactly-once delivery contract.
