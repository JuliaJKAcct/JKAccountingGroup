---
name: automated-email-reports
description: Set up a fully automated, unattended recurring email report — data pulled from the firm's systems, composed as an on-brand email, and sent on a schedule with no clicks. Use when someone wants to "email me/Lilian/a client this report every month / twice a month / weekly," schedule a recurring report, or turn an existing manual report into an automatic one. This is the reusable playbook that captures how we solved it the first time (Claude Code Routines + a Google Apps Script email webhook), so a new automation takes an afternoon, not a week. It reuses the firm's existing send webhook and design system. Read this before wiring up any new scheduled email.
---

# Automated Email Reports — the setup playbook

Turning *"send me this report automatically every month"* into a working, unattended
pipeline hits the **same five traps every time**. This skill is the map around them.
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

## The five traps (and the fix for each)

| # | Trap | Why it bites | Fix |
|---|---|---|---|
| 1 | **No connectors in the scheduled run** | Routines created via the MCP `create_trigger` tool run with **no MCP connectors and no ToolSearch** — the run can't reach Double / Drive / Gmail. | Create the routine in the **web UI** (claude.ai/code/routines) and **attach the connectors there**. Connectors are included by default only for web-UI routines. |
| 2 | **Gmail is draft-only** | The Gmail MCP can create a draft but has **no send tool**, so an unattended run can't actually mail anything. | Send through the firm's **Apps Script email webhook** (below). The routine POSTs JSON; the script sends via `MailApp`. |
| 3 | **Duplicate emails** | An unattended agent can loop (e.g. once per client) or retry, so the report arrives 2–5×. | **Two layers:** (a) the webhook **de-dupes** identical sends (CacheService fingerprint); (b) the prompt says **exactly once — one POST, one recipient, stop on `{"ok":true}`**. |
| 4 | **Network egress blocks the webhook** | The routine's environment has a network policy; if it doesn't allow the webhook host, the POST fails. | In the routine's **environment settings**, allow `script.google.com` and `script.googleusercontent.com` (a small **Custom** allowlist — you don't need "Full access"). |
| 5 | **The email loses the brand** | Told to "compose an email," an unattended run improvises generic HTML and the design system disappears. | Commit an **email-safe HTML template** to the repo and tell the run to **fill it**, not invent one. See `reference/` in `recurring-expense-monitoring` for a worked example. |

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
