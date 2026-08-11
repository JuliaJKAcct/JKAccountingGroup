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
   source + date). **Commit and merge to `main` itself** — see *The approval line*
   below. **Never** touches anything under `projects/sops/`.
3. **CI → SOP proposals** — for clients that have a SOP, append the new Operating-zone
   facts the SOP doesn't yet reflect to the queue
   [`sop-proposals.md`](../sop-proposals.md) as **Pending** (with IDs; dedup — never
   queue the same candidate twice). **Never** writes an SOP.
4. **Email Lilian one report** — per client: what was **saved** to CI (a record, not a
   request), and the **Pending SOP proposals** (with their IDs), which are the only part
   that needs her. She approves by ID in a normal session; Claude then applies the approved
   ones (via `sop-authoring`: PR → review → merge) and marks the queue. See
   [`sop-proposals.md`](../sop-proposals.md) for the loop. **The report is not a gate** —
   nothing waits on it being read.

## The approval line — CI merges itself, SOPs wait for Lilian

**Lilian's decision, 2026-08-11.** The sweep used to push its work to a branch and wait for
a human to merge it. Nobody did: three runs (2026-07-25, 08-01, 08-08) sat unmerged for
three weeks — 717 lines across ~48 client-file touches and 22 SOP proposals — until she
asked what had been piling up. Her instruction: *"configura todo para que la rutina merjee
su propio Client Intelligence. Simplemente requiere mi aprobación para los SOPs… Lo
importante es que esté todo lo más actualizado posible."*

So:

- **Client Intelligence merges itself.** The sweep commits its `clients/`, `sweep-state.md`
  and `sop-proposals.md` changes and **merges them to `main`** — no branch left waiting, no
  approval. ⚠️ **This is a deliberate, narrow carve-out from CLAUDE.md's "every PR gets an
  independent review before merge"**, and it holds *only* for an unattended sweep whose diff is
  confined to those three paths. A run that touches anything else — a skill, an SOP, this file,
  the build — is ordinary work and goes through review like everything else. This was always the written policy (see [`sop-proposals.md`](../sop-proposals.md));
  only the mechanism disagreed. Git remains the safety net: every fact is source-tagged and
  dated, and any change can be reverted.
- **SOPs still wait for Lilian.** The sweep never edits `projects/sops/`. It queues proposals
  and stops. That gate is unchanged.
- **Contradictions are recorded, not escalated — and asked at the point of use.** When a
  sweep finds two sources that disagree, it **writes both into the client file with their
  sources**, marks the fact unsettled, and moves on. It does **not** hold the enrichment and
  it does **not** send Lilian a question to answer in the abstract. **The moment someone
  actually asks for that information, the session explains where each version came from,
  asks then, and updates Client Intelligence from the answer** — because she will not have
  time to work through a weekly list of open questions, and an answer given while the fact
  is being used is worth more than one given cold. _(Lilian, 2026-08-11: "si te pedimos
  información en un momento determinado y tienes cosas contradictorias, simplemente nos
  puedes explicar la fuente de la contradicción… y según nuestra respuesta, actualizas
  Client Intelligence.")_ She may occasionally ask for the list of open contradictions
  herself; that is her initiative, not a standing obligation.

**Guardrails:** non-sensitive only (secrets/PII stay in Double/Drive, referenced by
link); source every fact; scope to the client list below (tool budgets — e.g. the Odoo
**MCP** is 50 calls/day, so it is *not* used here); read-only on the books.

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

### Owners with several businesses — sweep by owner, assign by company (and person)

Many of the firm's clients **own several companies**, so facts arrive mixed. Two rules,
both mandatory:

1. **Sweep at the owner level, then route by company.** Under one owner's name a source
   (an email, a meeting, a Drive folder) can carry topics about **any** of their
   companies, and inside one company's thread the owner may mention **another** company.
   Build the **owner → [companies + individual profile]** map first, gather everything
   under the owner across all sources, then **assign each fact to the specific company
   file it belongs to** — never let one company's file absorb another company's facts.
   (The per-file "Related clients" cross-links are how an owner-group is recorded.)
2. **Double individual profile vs. company record.** When an owner has an **individual**
   contact/profile in Double, that profile is the **owner's individual tax work (1040)**;
   the **company** record carries the company's work (sales tax, the company return,
   1099s). Facts arrive mixed under one owner — check **all** of that owner's companies
   **and** their individual profile, then place each fact where it belongs: a **personal
   / 1040** fact → the owner's individual context (not a company file); a
   **company-operations** fact → that company's file. Personal data still never lands in
   the repo — it stays in Double/Drive, referenced by link.

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
| GOSSIP MIAMI LLC | `710577` |
| Kolo Florida Inc | 706626 |
| Pro Title Agency | 706716 |
| NEVER GIVE UP KK LLC | 742803 |
| YES TEAM CORP | 706718 |
| MASCIAVE DESIGN STUDIO LLC | 706696 |
| iKids Group LLC | 706689 |
| Deep Tech Development Group LLC | 706685 |
| AURA REMODELING LLC | 706679 |
| Beemold USA LLC | 709445 |
| Sunoma Inc | 706704 |
| SENSUSTECH LLC | 706699 |
| Mobilesource Corp | 706697 |
| Margate Plumbing Inc | 706694 |
| MAGNUM 152, INC | 706693 |
| LUMETRO LLC | 706691 |
| Ecom Beavers LLC | 706686 |
| Artur Tseretsian | 752202 |
| Ihor Naum & Olha Levchuk | 710637 |
| Denys Melnyk | 764785 |
| ZETECH LLC | 706710 |
| OPTIC GOLD INC | 706702 |
| ONETWO STRATEGIES INC | 706701 |
| Greenair International LLC | 706688 |
| CANDRAMAS LLC | 706683 |
| AXDIGITAL LLC | 706681 |
| Airtouch LLC | 706671 |

_Add clients here as they get CI files; keep the list small enough to respect
per-tool call limits._

> ⚠️ **The last seven were missing for a structural reason worth remembering.** This list was built
> from **Lilian's and Maria's** clients, so **every client assigned to Liudmyla Kazannik fell outside
> it** — seven QuickBooks-connected companies with no Client Intelligence at all until 2026-08-11.
> **When scope is derived from who owns the work, it inherits that person's blind spots.** The check
> that catches it: `list_clients` filtered to `platform: qbo` is the firm's real bookkeeping roster —
> reconcile this table against it, not against anyone's client list.

**Excluded from the sweep — archived clients.** A client archived in Double gets no
new activity, so sweeping it every Saturday wastes budget. These have a CI file and a
README row but are deliberately **not** in the scope table above:

| Client | Double id | Why it still has a file |
|---|---|---|
| Tsminibears LLC | 706709 | Archived 2026-06-08, but an **open Florida reemployment-tax penalty matter** and a firm-wide Gusto lesson are recorded in it |

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
- GOSSIP MIAMI LLC -> 710577
- Kolo Florida Inc -> 706626
- Pro Title Agency -> 706716
- NEVER GIVE UP KK LLC -> 742803
- YES TEAM CORP -> 706718
- MASCIAVE DESIGN STUDIO LLC -> 706696
- iKids Group LLC -> 706689
- Deep Tech Development Group LLC -> 706685
- AURA REMODELING LLC -> 706679
- Beemold USA LLC -> 709445
- Sunoma Inc -> 706704
- SENSUSTECH LLC -> 706699
- Mobilesource Corp -> 706697
- Margate Plumbing Inc -> 706694
- MAGNUM 152, INC -> 706693
- LUMETRO LLC -> 706691
- Ecom Beavers LLC -> 706686
- Artur Tseretsian -> 752202
- Ihor Naum & Olha Levchuk -> 710637
- Denys Melnyk -> 764785
- ZETECH LLC -> 706710
- OPTIC GOLD INC -> 706702
- ONETWO STRATEGIES INC -> 706701
- Greenair International LLC -> 706688
- CANDRAMAS LLC -> 706683
- AXDIGITAL LLC -> 706681
- Airtouch LLC -> 706671

FOR EACH CLIENT:
1. Sweep for what is NEW since the client's baseline in sweep-state.md (inclusive of the baseline day — this ledger is the ONLY bound; ignore the file's "Last updated" for bounding), searching by BOTH the business name AND each owner/principal name (a person can have several businesses, and a meeting titled with a person's name may discuss the business). OWNERS WITH SEVERAL BUSINESSES (mandatory): sweep at the OWNER level across ALL their entities, then ROUTE each fact to the specific company file it belongs to — a Double INDIVIDUAL profile is that owner's individual 1040 work, while the COMPANY record is sales tax / the company return / 1099s, so put personal/1040 facts in the person's context and company-operations facts in that company's file, and never let one company's file absorb another company's facts or the owner's personal data:
   - Ping: resolve_person on each owner/contact; search_contacts for the business and owners; search_meetings (org-wide, semantic userQuery) for BOTH "<business>" and each "<owner>"; list_client_meetings. Transcripts are garbled multilingual auto-transcriptions — use only what is legible, tag it low-confidence with its source, discard nonsense.
   - Gmail: search BOTH in:inbox and in:sent by business name, owner names and contact emails/domains; keep anything that relates to this client.
   - Double: get_client; list_client_properties (STRUCTURED source — Assigned Staff, Entity/Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099 Preparation, Annual Report, Organizer Status; the cleanest input for the Operating zone — but SKIP the "EIN / Tax ID" property, it is sensitive); list_notes; list_contacts (ROLES only); list_activity_log. QuickBooks if useful.
   - Google Drive: search for the client's folder (usually one per client, under the firm's shared drive) and put its LINK in the file's §7 "Google Drive folder"; do NOT copy sensitive file contents into the repo.
   - The repo itself: check projects/sops/, FOLLOW-UPS.md and BACKLOG.md for any existing content about the client and fold in what's relevant.
   Keep it bounded (~10-15 calls/client).
2. Update clients/<slug>.md with new DURABLE, NON-SENSITIVE facts, each tagged (source, date). Operating zone (S1-5, S7) = facts a covering bookkeeper needs. CI-only zone (S6) = outstanding tasks / follow-ups (as pointers to Double/Ping). NEVER write secrets, logins, full account numbers, EINs, dollar figures, or personal names/emails/phones -- those stay in Double/Drive, referenced by link. Update "Last updated".
3. Do NOT modify anything under projects/sops/. Instead, for a client that HAS an SOP, append the new Operating-zone facts the SOP does not yet reflect to projects/client-intelligence/sop-proposals.md as Pending rows, each with an ID (SOP-<run date>-NN), the client, the target SOP, the change, and its source. Read that file first and do NOT re-add a candidate already listed in any status (dedup). Never queue CI-only §6 content.

THEN:
- Commit the client-intelligence changes (client files + sweep-state.md + any new sop-proposals.md rows) AND MERGE THEM TO main YOURSELF. Client Intelligence needs no approval (Lilian, 2026-08-11) — work left on a branch is work nobody sees, and three runs were lost that way. Push a branch, open a PR, and merge it; if the merge is blocked, say so in the email with the branch name. Do NOT touch projects/sops/ — SOP changes stay behind Lilian's approval and go in sop-proposals.md as Pending.
- CONTRADICTIONS: when two sources disagree, write BOTH into the client file with their sources and mark the fact unsettled — do not hold the enrichment and do not send Lilian a question to answer cold. It gets asked later, by whichever session actually needs that fact.
- Compose ONE email by FILLING the committed template at projects/client-intelligence/automation/email-template.html (keep its table/inline-style structure and section order exactly; do not invent a new design).
  Subject: "Client Intelligence — weekly sweep <run date>"   TO: lilian@jkaccountinggroup.com
  Body per client: what was SAVED to CI (with sources — a record, not a request) + the Pending SOP proposals with their IDs (the only part needing a decision). Note any contradictions recorded, in one line each, so she can ask about them if she ever wants to. Say that the CI changes are already on main.
- SEND through the webhook EXACTLY ONCE — one POST, one recipient. Use `<WEBHOOK_URL>` and `<WEBHOOK_SECRET>` — the real values go in **this routine's prompt only**, never in the repo. Build payload.json with python3 (json.dump; keys `"secret"=<WEBHOOK_SECRET>`, `"to"`, `"subject"`, `"html"`, `"text"`), then:
    code=$(curl -sS --max-time 120 -o /tmp/resp -w "%{http_code}" -X POST -H "Content-Type: application/json" --data @payload.json "<WEBHOOK_URL>")
  IMPORTANT — how to read the result (this webhook redirects; do NOT use curl -L):
  * HTTP 302 (redirect to script.googleusercontent.com) OR 200 with {"ok":true} = the email WAS SENT. STOP — do not POST again (a retry sends a duplicate).
  * A "Page Not Found" / 405 you get from FOLLOWING the redirect is NORMAL and does NOT mean failure — that is why we do not use -L.
  * Only 401 / 403 / 5xx is a real failure — then retry ONCE.
  Report the exact HTTP status code you got.

If a source/connector is unavailable, say so in the report rather than guessing.
```

## The email template (built)

[`email-template.html`](./email-template.html) — the on-brand, email-safe template
the routine fills (built Jul 2026 with the `impeccable` skill on the Atlas design
system, following the shape of the proven
[`recurring-expense-monitoring` template](../../../.claude/skills/recurring-expense-monitoring/reference/email-template.html)).
Per-client section order: **Proposed for the SOP** (bronze — the Pending proposals,
each with its ID; approve by ID in a session, not by replying to the email) → **New in
CI — saved** (blue, source-tagged) → **Still needed**
(amber list) → **Nothing new** (green one-liner). Sample content is fictional; the
run replaces it with the real swept clients.

## Still to build

- Eventually, fold the sweep logic into the `client-intelligence` skill (IDEA-15) so
  the prompt just says "follow the client-intelligence skill."
