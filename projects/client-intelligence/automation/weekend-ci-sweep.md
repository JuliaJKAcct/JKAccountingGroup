# Weekend Client-Intelligence sweep — Routine setup

The scheduled automation that keeps each client's [Client Intelligence](../README.md)
fresh and emails Lilian a report. Follows the firm's
[`automated-email-reports`](../../../.claude/skills/automated-email-reports/) playbook.

> **Why this is a web-UI setup, not a one-click.** A Routine created through the MCP
> `create_trigger` tool runs with **no connectors** — it can't reach Ping / Double /
> QuickBooks, so the sweep would do nothing (playbook trap #1). A routine that needs
> connectors must be created at **claude.ai/code/routines** with the connectors
> attached. The prompt and steps below make that a quick paste.

## What it does (each run)

For the scoped clients, once per week:

1. **Sweep** the connected sources for what's **new since the last run** — Ping
   Assistant (meetings, emails, calls, action items), Double (notes, tasks,
   activity, **client properties**), Gmail (**incoming and sent**), **Google Drive** (each client's folder), QuickBooks, and **the repo itself** (existing SOPs / FOLLOW-UPS / BACKLOG about the client) — non-sensitive facts only.
   Search by **both the business name and each owner's name** (see *Search
   completeness* below). **Incremental:** every search is bounded by the client's
   baseline date in [`sweep-state.md`](./sweep-state.md) — history already swept is
   never re-read, which is what keeps the run cheap as the client list grows.
   Double's **custom client properties** (`list_client_properties`) are the primary
   structured input for a client's Operating zone — service frequencies (bookkeeping,
   sales tax, payroll), tax-return type / entity, 1099 and annual-report flags, and
   the assigned staff — clean and non-sensitive (skip EIN / Tax ID).
2. **Enrich Client Intelligence** — update each client's `clients/<slug>.md`
   Operating and CI-only zones with the new durable facts (each tagged with its
   source + date). Commit to a branch `weekend-ci-sweep`, push. **Never** touches
   anything under `projects/sops/`.
3. **CI ↔ SOP sync** — for clients that have a SOP, list what changed in the CI
   Operating zone that the SOP doesn't yet reflect. **Proposals only.**
4. **Email Lilian one report** — per client: what's new in CI, and the items
   **proposed for the SOP** to approve/reject. SOP changes are applied only after
   Lilian approves, in a normal session.

**Guardrails:** non-sensitive only (secrets/PII stay in Double/Drive, referenced by
link); source every fact; scope to the client list below (tool budgets — e.g. Odoo is
50 calls/day, so it is *not* used here); read-only on the books.

## Search completeness (important — why we search by owner AND business)

A client can be **missed** if you only search one way. In Ping, a business's meetings
are often indexed **under the owner's individual contact**, not the business name (this
is exactly why the first Atman Parts sweep found nothing). And **one meeting can cover
several topics** — an owner with multiple businesses may discuss any of them in a call
titled with their personal name. So for every client, search **all of these**:

- **Business name** — e.g. "Atman Parts".
- **Each owner / principal name** — resolve them from the Double/Ping contacts, then
  search meetings and emails under each.
- **Known contact emails / domains** — for the Gmail pass.

Concretely: Ping — `resolve_person` on each owner, `search_contacts` for the business
and owners, then **`search_meetings` (org-wide, semantic) for BOTH the business name
and each owner name**, plus `list_client_meetings`. Gmail — search **`in:inbox` and
`in:sent`** by business name, owner names and contact emails, and keep whatever relates
to the client. Double — `get_client`, `list_notes`, `list_contacts` (roles),
`list_activity_log`. Never assume "not found" from a single business-name lookup.

Transcripts are auto-transcribed from mixed Russian/Ukrainian/Spanish and are often
**garbled** — use whatever is legible, tag it **low confidence** with its source, and
**discard** anything that doesn't make sense (we can't verify it; only Julia knows what
was said). Better a sourced, low-confidence note than nothing.

## Scope — clients (start set)

| Client | Double id |
|---|---|
| Atman Parts | 763909 |
| BEST BROKER REALTY LLC | 706712 |
| ECOORGANIC USA LLC | 719473 |
| Kolo Florida Inc | 706626 |
| Pro Title Agency | 706716 |
| NEVER GIVE UP KK LLC | 742803 |
| YES TEAM CORP | 706718 |
| MASCIAVE DESIGN STUDIO LLC | 706696 |
| iKids Group LLC | 706689 |
| Deep Tech Development LLC | 706685 |
| AURA REMODELING LLC | 706679 |
| Beemold USA LLC | 709445 |
| Sunoma Inc | 706704 |
| SENSUSTECH LLC | 706699 |
| Mobilesource Corp | 706697 |
| Margate Plumbing Inc | 706694 |
| MAGNUM 152, INC | 706693 |
| LUMETRO LLC | 706691 |
| Ecom Beavers LLC | 706686 |

_Add clients here as they get CI files; keep the list small enough to respect
per-tool call limits._

## Schedule

- **Saturday 06:00 America/New_York.** In cron (UTC): **`0 10 * * 6`** during EDT
  (summer). Note: fixed-UTC cron means it fires at 05:00 ET in winter (EST) — adjust
  to `0 11 * * 6` in winter if the exact 6 AM matters.

## Web-UI setup (claude.ai/code/routines → New)

1. **Repository:** this repo. **Schedule:** `0 10 * * 6`.
2. **Connectors (trap #1 — do it here):** attach **Double**, **Ping Assistant**,
   **Gmail**, **Google Drive**, **QuickBooks**, and **GitHub** (to push the branch). If a connector isn't
   available in the routines UI, the sweep uses whatever is attached and notes the
   gap in the report.
3. **Environment / network (trap #4):** a **Custom** allowlist that permits the email
   webhook host — `script.google.com` and `script.googleusercontent.com`.
4. **Prompt:** paste the block below. **Put the webhook URL + secret in the prompt
   only — never in this repo.** (Reuse the firm's existing "JK Email Sender" webhook.)
5. **Test first:** set the recipient to yourself, add the `TEST RUN` line, run it
   manually, confirm the email arrives **once** and the run says the webhook returned
   `{"ok":true}`. Then remove the `TEST RUN` line and set the recipient to
   `lilian@jkaccountinggroup.com`.

## Routine prompt (paste into the web-UI routine)

```
You are the JK Accounting Group weekend Client-Intelligence sweep. Today's date is the run date. The repo is checked out at main.

READ FIRST: projects/client-intelligence/README.md (especially "Keeping Client Intelligence fresh" and "Client Intelligence <-> the client SOP"), projects/client-intelligence/_client-template.md, projects/client-intelligence/automation/sweep-state.md (the incremental ledger), and each client's current file — so you only ADD genuinely new, non-sensitive facts and never duplicate.

INCREMENTAL SWEEP (token discipline — this is a hard rule): sweep-state.md records the date each client is already swept through. Bound EVERY search to that client's baseline date AND LATER, INCLUSIVE of the baseline day itself (items can land later the same day a sweep ran; the one-day overlap is deliberate and duplicates are prevented because you read the client file first and only add what's new): Gmail with after:YYYY/MM/DD (inclusive of that day), Ping meetings dated on-or-after the baseline, Double notes/activity created on-or-after it. Never re-read anything from BEFORE the baseline date. Exceptions: (a) a client whose row lists a Coverage gap owes that source a one-time full historical pass — do it, then clear the note (that pass may exceed the per-client call bound once; expected); (b) a client in the list with NO row in sweep-state.md gets a one-time full historical sweep, then a row. At the end, update sweep-state.md baselines (run date) for every client fully swept, IN THE SAME COMMIT as the client-file updates; if the run fails partway, only advance the clients you finished.

CLIENTS (name -> Double id):
- Atman Parts -> 763909
- BEST BROKER REALTY LLC -> 706712
- ECOORGANIC USA LLC -> 719473
- Kolo Florida Inc -> 706626
- Pro Title Agency -> 706716
- NEVER GIVE UP KK LLC -> 742803
- YES TEAM CORP -> 706718
- MASCIAVE DESIGN STUDIO LLC -> 706696
- iKids Group LLC -> 706689
- Deep Tech Development LLC -> 706685
- AURA REMODELING LLC -> 706679
- Beemold USA LLC -> 709445
- Sunoma Inc -> 706704
- SENSUSTECH LLC -> 706699
- Mobilesource Corp -> 706697
- Margate Plumbing Inc -> 706694
- MAGNUM 152, INC -> 706693
- LUMETRO LLC -> 706691
- Ecom Beavers LLC -> 706686

FOR EACH CLIENT:
1. Sweep for what is NEW since the client's baseline in sweep-state.md (inclusive of the baseline day — this ledger is the ONLY bound; ignore the file's "Last updated" for bounding), searching by BOTH the business name AND each owner/principal name (a person can have several businesses, and a meeting titled with a person's name may discuss the business):
   - Ping: resolve_person on each owner/contact; search_contacts for the business and owners; search_meetings (org-wide, semantic userQuery) for BOTH "<business>" and each "<owner>"; list_client_meetings. Transcripts are garbled multilingual auto-transcriptions — use only what is legible, tag it low-confidence with its source, discard nonsense.
   - Gmail: search BOTH in:inbox and in:sent by business name, owner names and contact emails/domains; keep anything that relates to this client.
   - Double: get_client; list_client_properties (STRUCTURED source — Assigned Staff, Entity/Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099 Preparation, Annual Report, Organizer Status; the cleanest input for the Operating zone — but SKIP the "EIN / Tax ID" property, it is sensitive); list_notes; list_contacts (ROLES only); list_activity_log. QuickBooks if useful.
   - Google Drive: search for the client's folder (usually one per client, under the firm's shared drive) and put its LINK in the file's §7 "Google Drive folder"; do NOT copy sensitive file contents into the repo.
   - The repo itself: check projects/sops/, FOLLOW-UPS.md and BACKLOG.md for any existing content about the client and fold in what's relevant.
   Keep it bounded (~10-15 calls/client).
2. Update clients/<slug>.md with new DURABLE, NON-SENSITIVE facts, each tagged (source, date). Operating zone (S1-5, S7) = facts a covering bookkeeper needs. CI-only zone (S6) = outstanding tasks / follow-ups (as pointers to Double/Ping). NEVER write secrets, logins, full account numbers, EINs, dollar figures, or personal names/emails/phones -- those stay in Double/Drive, referenced by link. Update "Last updated".
3. Do NOT modify anything under projects/sops/. Instead, for clients with a SOP, note which new Operating-zone facts the SOP does not yet reflect -- these are PROPOSALS for Lilian.

THEN:
- Commit the client-intelligence changes to a branch named weekend-ci-sweep (create or reset from main), with a clear message, and push it. Nothing else.
- Compose ONE email by FILLING the committed template at projects/client-intelligence/automation/email-template.html (keep its table/inline-style structure and section order exactly; do not invent a new design) and POST it exactly once to the webhook:
  URL: <WEBHOOK_URL>   SECRET: <WEBHOOK_SECRET>   TO: lilian@jkaccountinggroup.com
  Subject: "Client Intelligence — weekly sweep <run date>"
  Body per client: what's new in CI (with sources) + items PROPOSED for the SOP (approve/reject). Include the weekend-ci-sweep branch name.
- EXACTLY ONCE: one POST, one recipient. Stop when the webhook returns {"ok":true}. Do not retry on success.

If a source/connector is unavailable, say so in the report rather than guessing.
```

## The email template (built)

[`email-template.html`](./email-template.html) — the on-brand, email-safe template
the routine fills (built Jul 2026 with the `impeccable` skill on the Atlas design
system, following the shape of the proven
[`recurring-expense-monitoring` template](../../../.claude/skills/recurring-expense-monitoring/reference/email-template.html)).
Per-client section order: **Proposed for the SOP** (bronze — the action;
reply-to-approve) → **New in CI — saved** (blue, source-tagged) → **Still needed**
(amber list) → **Nothing new** (green one-liner). Sample content is fictional; the
run replaces it with the real swept clients.

## Still to build

- Eventually, fold the sweep logic into the `client-intelligence` skill (IDEA-15) so
  the prompt just says "follow the client-intelligence skill."
