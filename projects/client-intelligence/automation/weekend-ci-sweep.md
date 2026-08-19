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
   the assigned staff — clean and non-sensitive. **EIN / Tax ID is included since
   2026-08-12** (public on Sunbiz — Lilian's ruling). ⚠️ **But the property is named
   `EIN / Tax ID`, and for a sole proprietor or single-member LLC it may hold the OWNER'S
   SSN.** Write it only when it is plainly an EIN; if you cannot tell, skip it.

   🔴 **1b — CHASE THE FILE'S OWN OPEN ITEMS — this is a SEPARATE PASS, and skipping it is the
   defect found on 2026-08-18.** Step 1 asks the sources *"what is new?"*. That question cannot
   see a thing that was supposed to happen and did not, and it cannot see a thing that **did**
   happen but that nobody searched for. So before writing the report, **open the client file,
   read its `Outstanding items` and `Information still needed`, and take each one to the
   sources by name**:
   - **Did it arrive?** Run a *targeted* search for that specific thing — the document, the
     receipt, the reply — not a general "what changed" pass. An open item is a **query**, not a
     note to self.
   - **How old is it?** If it has not moved, say so **with its age in days** and the date it has
     been pending since. `Awaiting X` with no clock is invisible; `Awaiting X — 19 days` is not.
   - **Does it have a deadline?** A renewal, a filing date, a statute clock. Surface it while
     there is still time to act, not in the week it expires.
   - ⚖️ **Budget: ~5 extra calls per client, and prioritise.** This pass sits inside the same
     ~10–15 calls/client ceiling as step 1, so it does **not** get to chase everything: take the
     items with a **deadline** first, then the **oldest**, then the rest. **When you run out of
     budget, say which items you did not chase** — an unchased item reported as unchased is fine;
     an unchased item that prints as "no movement" is a lie the next run will inherit.

   _(**Why this exists — the run that proved it.** On 2026-08-18 Lilian asked where two BTR
   applications stood. Four things had to be found by hand, and **every one of them was a
   standing open item in a file the sweep had read**: Best Broker's issued certificate had
   **arrived by email on 2026-07-23** while the file kept saying "if it hasn't arrived yet" —
   missed by **two separate full historical Gmail passes** because nobody searched for the
   thing the file said to watch for; the same client's **Sept 30 renewal** was six weeks out
   and uncalendared; Pro Title's awaited document had been pending **19 days** with no clock on
   it; and a **risk the city had put in writing** — that operating without the receipt is
   unlawful — had been read and not recorded. The 2026-08-15 run reported both clients as
   **"no new meetings, notes, or emails"**, which was **true and useless**. Nothing was new.
   Plenty was wrong.)_

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
   that needs her.
   🔴 **A stalled client printed as an all-clear on 2026-08-15, and the template is why.**
   ⓘ *An earlier draft of this bullet said the email "had exactly two buckets". That was wrong —
   [`email-template.html`](./email-template.html) has had a **section 3 "Still needed"** all
   along. The defect is narrower and more interesting than a missing bucket:*
   - **Section 4 "Nothing new" printed whenever sections 1 & 2 were empty — regardless of
     section 3.** So a client with an open item still got the green one-liner. Now it prints
     **only when 1, 2 AND 3 are all empty.**
   - **AT A GLANCE had no colour for "quiet but not clear"** — green meant "nothing new", which
     is not the same as *nothing wrong*. A client with anything in section 3 is now **amber with
     the oldest item's age**; green is the all-clear and has to be earned.
   - **Section 3 carried gaps without clocks.** Every entry now takes **its age in days** and any
     deadline, from step 1b.

   That combination is what let both BTR clients print *"no new meetings, notes, or emails"* on
   2026-08-15 while one had a document pending 19 days and the other a renewal six weeks out.
   **A stalled matter is the normal way these fail** — nobody forgets a crisis, everybody forgets
   a wait. She approves by ID in a normal session; Claude then applies the approved
   ones (via `sop-authoring`: PR → review → merge) and marks the queue. See
   [`sop-proposals.md`](../sop-proposals.md) for the loop. **The report is not a gate** —
   nothing waits on it being read.

> 📋 **After a run: [`sweep-health-review.md`](./sweep-health-review.md)** — the post-run
> checklist and the standing diagnosis of what this routine gets wrong. **Read it before reading a
> Saturday report**, and record what the report showed. It carries what is confirmed (the sweep
> never chased its own open items), what is retracted (two confident findings of 2026-08-18 that
> review killed, one of which would have destroyed client history), and the context-ceiling
> arithmetic behind the parked subagent decision.

## What the "call budget" actually is — there is NO vendor quota here

**Asked by Lilian, 2026-08-18: are there limits on running Client Intelligence?** The honest answer
is that the numbers in this file — *"~10–15 calls per client"*, *"~5 for the chase pass"*, *"~6 full
historical passes per run"* — are **self-imposed discipline, not a quota anyone enforces.** Nothing
rejects the 200th call. Saying so plainly matters, because a session that believes it is rationing a
hard quota will quietly cut corners it did not need to cut.

| | Real limit? |
|---|---|
| **Double MCP** — the sweep's main source | ❌ **No published cap** ([`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md) §0). Not a quota |
| **Gmail · Drive · Ping · QuickBooks** | ❌ No documented cap the firm has hit |
| **Odoo MCP** — hard **50 calls/day**, firm-wide | ⚠️ Real, but **the CI sweep never touches Odoo.** This is the cap people remember; it is the wrong one for this job |
| 🔴 **One session's context window** | ✅ **THE actual ceiling.** Every tool result is text that stays in the run's context. It does not error — it degrades |
| 🔴 **The shared Claude account's usage** | ✅ Real. A sweep that burns Saturday morning leaves less for Julia's and Lilian's own sessions that day |

**The arithmetic is the point.** 48 client files × (10–15 calls for step 1, ~5 for step 1b) is
**700–1,000 tool results in a single conversation.** No context holds that. So the run does not fail
loudly — it *thins out*: the clients at the end of the roster get a shallower pass than the ones at
the start, the catch-up cap gets spent early, and the report still reads as though everything was
swept. **That is the most likely reason quality has been uneven, and it is a design problem, not a
discipline problem.**

### The strategy that is already in the repo and is not being used: subagents

[`double-mcp`](../../../.claude/skills/double-mcp/SKILL.md) §5 item 4 — *"Delegate roster-wide
sweeps to a subagent … A 120-client property sweep is one subagent, not 120 calls in the main
thread"* — **the current Routine prompt uses none.** A subagent gets its **own context**, so N
clients cost the main run N compact summaries instead of N×20 raw payloads. That is what turns
*"every client, every week, and chase every open item"* from unaffordable into routine.

⚠️ **The one carve-out, and it does not bite here:** subagents are **banned for organizer
responses** (§2.2) because each one is another copy of a client's SSNs. **A Client-Intelligence
sweep never reads organizer responses**, so the ban does not apply to this work — but any future
step that adds them would have to stay in the main thread.

🔵 **Not adopted yet, deliberately.** As of 2026-08-18 the current prompt **has never run once** —
Lilian re-pasted it during the week after Saturday 2026-08-15, and the Routine fires Saturdays only
(established further down, in *THIS FILE IS NOT THE LIVE ROUTINE*). Changing it again before its first execution would mean debugging two changes at
the same time. _(An earlier version added "and re-pasting a prompt whose credentials cannot be read back" — **that was false**; `list_triggers` returns the whole prompt, secret included, so a session can re-paste unaided.)_ **Let it run one
Saturday, read that report, then decide** — the report now states how many clients got a full pass,
how many were deferred, and how many open items went unchased, which is exactly the evidence this
decision needs. _(Lilian raised the strategy question; this is the answer parked where the next
session will find it.)_

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
| LILIIA HLEBOVA KOZLOVSKA | 710644 |
| Mykola Kozlovskyi | 709838 |
| Denys Melnyk | 764785 |
| Andrii Tymchenko | 710619 |
| VOICECAPITAL INC | 710725 |
| VOXAGO LLC | 710606 |
| YMI TRUCKING LLC | 710608 |
| ZETECH LLC | 706710 |
| OPTIC GOLD INC | 706702 |
| ONETWO STRATEGIES INC | 706701 |
| Greenair International LLC | 706688 |
| CANDRAMAS LLC | 706683 |
| AXDIGITAL LLC | 706681 |
| Airtouch LLC | 706671 |
| VITALII IVANOV & TETIANA MOGYLOVA | 710666 |
| Igor Melomed & Yelena Lovkina | 710635 |
| R & G Friendly Inc | 710589 |
| Viacheslav Honcharenko | 710665 |
| Maria Contreras | 710646 |
| Iurii Iakovenko & Alina Yakovenko | 710639 |
| Grigoriy & Margarita Melomed | 710633 |
| M5 Studio Miami | *(none — no Double account confirmed; search Double by name first, then sweep by name)* |

_Add clients here as they get CI files; keep the list small enough to respect
per-tool call limits._

> ⓘ **M5 Studio Miami has no Double id, and that is not an oversight.** It is a **company set-up**
> client (EIN application in flight, 2026-08-14) and nobody has established whether it exists in
> Double at all — so the run should **search Double by name first**, and if there is no client,
> skip that plane and sweep from Gmail / Ping / Drive. If it DOES find one, record the id in the
> **client file's §2/§7** (inside the run's commit scope) and leave this row to a human.
> **It gets no row in [`sweep-state.md`](./sweep-state.md)** — like every newly-added client, rule
> (b) gives it one full historical pass first. It will be a short one; that is fine.

> ⓘ **Six of the TaxDome-backfill seven are above; the seventh — SETATECH USA (706706) — is in the
> archived-exclusion table below, and that placement is DELIBERATELY UNDER REVIEW.** It is archived
> in Double, which is the normal reason to exclude, but its **Gusto payroll was live and blocked on
> 2026-08-13** with the firm copied in. **If the engagement turns out to be live, move it up into
> this table** — the exclusion rule assumes an archived client generates no activity, and this one
> is currently generating some.

> ⚠️ **The last seven were missing for a structural reason worth remembering.** This list was built
> from **Lilian's and Maria's** clients, so **every client assigned to Liudmyla Kazannik fell outside
> it** — seven QuickBooks-connected companies with no Client Intelligence at all until 2026-08-11.
> **When scope is derived from who owns the work, it inherits that person's blind spots.** The check
> that catches it: reconcile this table against `list_clients` (all non-archived), counting a client
> in when **either** `platform: qbo` **or** a `Bookkeeping` cadence property is set — never against
> anyone's client list. **`platform: qbo` alone is not enough**: a disconnected QuickBooks reads
> `none` (Deep Tech's state while its bookkeeping is paused), so the narrow check would miss exactly
> the kind of client it targets.

> **Catch-up priority — the queue is now ten deep against a ~6-full-pass cap, so state the order
> rather than let list position decide it.** **First: Artur Tseretsian and Ihor Naum & Olha Levchuk**
> — deferred twice already, and the ledger records the promise. **Then Liudmyla's seven** (added
> 2026-08-11), **then the TaxDome-backfill seven** (added 2026-08-14 — they have had six days of
> Gmail/Ping and nothing before that, so their full pass is owed in full). A run that spends its
> whole cap on the new arrivals breaks a commitment that is written down, which is worse than a
> client waiting one more week.
> ⚠️ **The queue is now ~16 full passes deep against a ~6-per-run cap, so it takes about three runs
> to clear** — and the cap exists for a reason, so the answer is patience and order, not raising it.
> **Two clients in the newest group have live 2025 returns unfiled** (Vitalii Ivanov, Viacheslav
> Honcharenko) — if that starts to matter before their turn comes, sweep them by hand rather than
> jumping the queue.

**Excluded from the sweep — archived clients.** A client archived in Double gets no
new activity, so sweeping it every Saturday wastes budget. These have a CI file and a
README row but are deliberately **not** in the scope table above:

| Client | Double id | Why it still has a file |
|---|---|---|
| MAYS EXPRESS SERVICE LLC | 710582 | **Former** — business closed 2025-12-31. Kept because the FDOR refused to close its sales-tax and reemployment-tax accounts (Dec 2025 payroll/sales tax unsubmitted) and **nothing records it resolving** — case note 491838 |
| MEGABAI | *(none)* | **Former** — company closed and **was never migrated to Double**, so there is no client to sweep and no note to keep. The file is the firm's only record of it _(Lilian, 2026-08-12)_ |
| Tsminibears LLC | 706709 | Archived 2026-06-08, but an **open Florida reemployment-tax penalty matter** and a firm-wide Gusto lesson are recorded in it |
| SETATECH USA, INC. | 706706 | Archived 2026-07-22 — ⚠️ **but not quiet.** Gusto reported its **payroll blocked on an outstanding balance** on 2026-08-13, to the client and four people at the firm. **Excluded provisionally only**: settle whether the engagement is actually over, and if it is not, move it into the scope table above _(created 2026-08-14)_ |

## Schedule

- 🔴 **The LIVE Routine runs `0 7 * * 6` — Saturdays 07:00 UTC, i.e. 03:00 ET in summer**
  _(read from the trigger 2026-08-14; this is the authority)_.
- ⚠️ **This file previously specified `0 10 * * 6` (06:00 ET) and that is NOT what is running** —
  three hours earlier than documented, and the setup steps below would have recreated the wrong
  one. **Whether 03:00 was deliberate or a mis-set is unknown**; the live value is recorded here
  rather than "corrected", because nobody established which is intended. If 06:00 ET is wanted,
  change the Routine, not just this line. _(Fixed-UTC cron also means it drifts an hour in winter.)_

## Web-UI setup (claude.ai/code/routines → New)

1. **Repository:** this repo. **Schedule:** `0 7 * * 6` — what is actually running; see the
   Schedule section above before changing it.
2. **Connectors (trap #1 — do it here):** attach **Double**, **Ping Assistant**,
   **Gmail**, **Google Drive**, **QuickBooks**. ⓘ **The live Routine's attached connectors, read
   2026-08-14:** Double · Gmail · Google Calendar · Google Drive · QuickBooks · Odoo · Ping
   Assistant — **and no GitHub connector.** Git access comes from the environment's configured
   **repository source** (this repo, with an outcome branch), not from an MCP connector, so the
   absence is expected and not a fault. If a connector isn't available in the routines UI, the
   sweep uses whatever is attached and notes the gap in the report.
3. **Environment / network (trap #4):** a **Custom** allowlist that permits the email
   webhook host — `script.google.com` and `script.googleusercontent.com`.
4. **Prompt:** paste the block below. **Put the webhook URL + secret in the prompt
   only — never in this repo.** (Reuse the firm's existing "JK Email Sender" webhook.)
5. **Test first:** set the recipient to yourself, add the `TEST RUN` line, run it
   manually, confirm the email arrives **once** and the run says the webhook returned
   `{"ok":true}`. Then remove the `TEST RUN` line and set the recipient to
   `lilian@jkaccountinggroup.com`.

## ⚠️ THIS FILE IS NOT THE LIVE ROUTINE — but it IS where the live Routine gets the client list

**Two halves, and they were run together as one claim until 2026-08-14.**

🔴 **Editing the PROMPT below changes nothing on its own.** The Routine at
**claude.ai/code/routines** holds **its own copy**, pasted in when it was created. Until someone
updates it, the Saturday run keeps following the **old** instructions — including
*"Commit the client-intelligence changes … to your working branch and push. Do NOT merge to main"*,
the line that left three weeks of Client Intelligence stranded. (Quoted exactly, so it can be
searched for in the live Routine to check whether the update has happened.)

🔵 **RESOLVED 2026-08-18 for the stranded run, and the assumption underneath this section turned out to be BACKWARDS.** Lilian produced the live prompt on 2026-08-18. It is **richer than the copy this file was carrying**, not staler: it already said *"GET THEM ONTO main YOURSELF"*, and it carries a whole **COVERAGE CHECK** step that the repo's block did not have at all. **So "the repo is ahead, the Routine is behind" was wrong in both directions at once**, and this file spent days telling readers the opposite of the truth about its own most important section.
> ✅ **ANSWERED by Lilian, 2026-08-18 — the prompt was updated AFTER that run, and the new one has never executed.** She replaced it during the week following Saturday 2026-08-15, from a version produced in another session. The Routine fires **Saturdays only**, so **as of 2026-08-18 the current prompt has not run once.** That fully explains the contradiction: the 2026-08-15 run executed the *old* prompt — the one carrying *"Do NOT merge to main"* — and its report was accurate about the instructions it actually had. **Nothing overrode anything, and nothing is broken here.**
> ⓘ **Two consequences worth holding on to.** First, **the next Saturday run is the first real test** of the merge rule, the coverage check and step 1b at once — read that report properly rather than skimming it. Second, and more generally: **a Routine's behaviour lags its prompt by up to a week**, so a run's output is evidence about the prompt that was live *when it fired*, never about the one sitting there now. This session spent real effort diagnosing a "regression" that was simply a prompt newer than its last execution.
> ✅ **The block below is now the 2026-08-18 version, and it is the same text Lilian was given to paste**, so the two finally agree. Keep them in sync from here: when this block changes, the Routine still needs the paste (the credentials are the reason — see below).

🔴 **THE 2026-08-15 RUN'S WORK WAS STRANDED, AND IS NOW RECOVERED (PR #235, merged 2026-08-18).** This is no longer a
theoretical risk in a warning box — it is a live loss, and the run said so itself. Its email to
Lilian closed with: *"All Client-Intelligence changes are committed and pushed to branch
`claude/admiring-lamport-fzaj4y` (**not merged to main this run, per this run's instructions**)."*
**"Per this run's instructions" is the stale prompt talking.** On `origin/main` at 2026-08-18 that
branch is unmerged and holds **6 commits · 25 files · +456 lines** — 23 client files, `sweep-state.md`
and `sop-proposals.md`, including two long-deferred coverage gaps finally cleared (Artur Tseretsian,
Ihor Naum & Olha Levchuk) and four first-ever sweeps of Liudmyla's seed clients. **Merging was
sanctioned without review** — the diff was entirely inside the carve-out below, and Lilian authorised it on
2026-08-18. Two additive conflicts against `main` were resolved by **keeping both sides**, which is now a
rule in the prompt: never drop another session's rows to clear a conflict.
⚠️ **And the baselines went with it**, which was the compounding part: while it sat, `sweep-state.md` on
`main` still read **2026-08-08** for those clients, so the loss was invisible from `main` and the next run
would have re-bought four expensive first-time historical passes against a cap of ~6.
🔴 **The measurable damage it was doing, found the same day:** **19 of 48** client files had no row in the
ledger. Recovering the branch took that to **4** — its rows for ZETECH, Optic Gold, Onetwo Strategies and
Greenair had been sitting on the branch all along.

⚠️ **RETRACTED 2026-08-18, same day, by the independent review — there was no second leak, and the
numbers behind it were wrong.** This block claimed that "4 of 48 client files have no ledger row and
are therefore invisible to the routine forever." **Both halves were false**, and the retraction is
kept because the reasoning error is the useful part:

- **The count was wrong.** The check matched client names against the *whole file* of
  `sweep-state.md`, so it counted the names listed in its closing **"THREE GROUPS DELIBERATELY HAVE
  NO ROW HERE"** prose as if they were table rows. The real figures: **48 client files · 28 dated
  rows · 20 files with no row.** Not 4.
- **The diagnosis was backwards.** A missing ledger row does not make a client invisible — **all 48
  files are named in the scope or exclusion tables below**, so the routine reaches every one of
  them. A row is a **search bound**, and its absence is the signal that says *never swept, give a
  full historical pass*. Rule (b) already handles it.
- **The proposed fix was actively harmful** and would have merged: *"any session that creates a
  client file adds its row in the same commit."* That is the precise instruction the
  **2026-08-14 correction** removed from the [`client-intelligence`](../../../.claude/skills/client-intelligence/SKILL.md)
  skill, whose own note says following it *"would have destroyed the history of 14 clients across
  two backfills."* A row dated today bounds the next run to *after* today and erases everything
  before it.

**What is actually true, and it is a queue problem rather than a coverage one:** 20 clients are owed
a first full historical pass, the cap is ~6 per run, and the deferral order is not recorded anywhere
durable. That is step 2c's job and it is worth watching.
🔵 **The genuine finding of 2026-08-18 survives untouched:** the sweep never chased its own open
items (step 1b). Nothing above weakens that.

⛔ **CORRECTED 2026-08-18 (same day, by review) — A SESSION *CAN* SAFELY DO THE RE-PASTE.** This
block said the opposite and was **wrong**: it claimed *"nothing exposed to a session can READ the
current prompt — `list_triggers` returns id, name, cron, enabled state and next run, and there is
no `get_trigger`."* **`list_triggers` returns the ENTIRE prompt body**, verified by calling it —
`job_config.ccr.events[0].data.message.content`, ~9 KB, **webhook secret and URL included** (the
recurring-expense Routine leaks the same pair). So the correct procedure is: **read the live prompt,
lift the two real values out of it, write the new prompt back with them in place.** Nothing here
needs a human at a screen. _(A session still asks before rewriting a live scheduled job — that is
confirm-before-acting, not a technical limit.)_
⚠️ **And the security note is the inverse of what this file assumed:** the secret is **one tool call
away** for any session holding the Claude-Code-Remote MCP. Keeping placeholders out of git stays
right — git history is permanent and far more widely readable — but **do not describe the value as
unreachable.** If that matters, rotate it in the Apps Script and in both Routines.
_(Historical, and the reason this is written up rather than quietly edited:)_ The note below suggests having Claude update the
Routine in-session with `update_trigger` "so they never have to be retyped". **That does not work
as written.** `update_trigger` can *write* a prompt, but **nothing exposed to a session can READ the
current one** — `list_triggers` returns id, name, cron, enabled state and next run, and **there is
no `get_trigger`**. The webhook URL and secret exist **only** inside that prompt. So a session that
rewrites it **destroys the credentials it cannot see**, and the failure is the silent one step 3
warns about: the sweep starts merging correctly and the weekly email simply stops arriving.
**The re-paste therefore needs a human to supply the two values**, or someone to read them out of
the web UI first. Written down because the advice below reads as though a session could just fix
this, three sessions have presumably tried, and the rule has now survived a week longer than the
run it broke.

✅ **But editing the SCOPE TABLE above DOES reach the live run** _(established 2026-08-14 by
reading the trigger itself)_. The live prompt carries **no client list**; it instructs the run to
read *this file* for "the CLIENTS list (every client + Double id)". **So adding a client to the
scope table is complete on its own** — it is only the *prompt* that needs a human.
⚠️ **Which half applies is not obvious from the outside**, and getting it backwards produced a
`FOLLOW-UPS` row asserting that thirteen newly-scoped clients were being skipped when they were
not. **Say which half you changed.**

⚠️ **Do NOT paste this block wholesale — you would break the weekly email.** The block carries
`<WEBHOOK_URL>` and `<WEBHOOK_SECRET>` as **placeholders**; the real values exist **only inside the
Routine** and are deliberately absent from this repo (step 4 above). So the update is:

1. **Copy the live Routine's current webhook URL and secret out of its prompt first.**
2. Paste the block below over the old prompt.
3. **Put those two real values back** where the placeholders sit.

Skip step 3 and the sweep will merge its Client Intelligence correctly and then **silently fail to
send the report** — the worst shape of failure, because nothing looks broken.

**So whenever this block changes, the change is not done until the Routine is updated.** Say so out
loud to whoever asked, and treat it as part of the task, not a follow-up.

**Last change needing a re-paste: 2026-08-11** — the **merge-your-own-CI rule**, the
**contradiction rule**, and the **email becoming a record rather than a request**. ⚠️ **Clients in
scope are NOT on that list** — they reach the run through the scope table above without a paste
_(corrected 2026-08-14)_.

## Routine prompt (paste into the web-UI routine)

> ⓘ **The Routine is called "Client Intelligence — weekly sweep"** (`trig_015LaKrto6FDKyUwHmZywqjS`),
> cron `0 7 * * 6` — **Saturdays 07:00 UTC**, i.e. 03:00 Eastern in summer. It runs in the
> `env_01DoJ5xZw49eoRfUWThp8rKU` environment with the Double, Gmail, Calendar, Drive, QuickBooks,
> Odoo and Ping connectors attached, and notifies by **push**.
>
> ✅ **There is no CLIENTS list in the prompt, and that is deliberate.** The prompt
> **currently live in the web UI does not contain a client list at all** — it instructs the run to
> read *this file* for "the CLIENTS list (every client + Double id)". **So adding a client to the
> scope table above already reaches the live Routine without anyone re-pasting anything.**
> ⚠️ **The 2026-08-18 rewrite REMOVED the inline list** — the scope table above is now the only client list, so a session hunting for a "CLIENTS list" inside the prompt is looking for something deliberately deleted, not something truncated. _(Established
> 2026-08-14 by reading the live trigger, correcting a `FOLLOW-UPS` row that said the Routine was
> running a hardcoded old list.)_
>
> ✅ **CORRECTED 2026-08-18 — the live prompt is NOT stale on those three rulings.** This paragraph
> used to say it still carried *"Do NOT merge to main"*, no contradictions rule, and a
> request-shaped email. **Lilian re-pasted it during the week after Saturday 2026-08-15**, and the
> version she confirmed carries all three — plus a COVERAGE CHECK this file did not have. The run
> that stranded its work on 2026-08-15 executed the **previous** prompt and described its own
> instructions accurately.
> ⚠️ **What a re-paste buys NOW is different:** the 2026-08-18 additions — the step 1b chase pass,
> the corrected 2b/2c coverage directions, the ledger-row rule, and the conditional email subject.
> **It still needs a human**, for the credential reason below.
>
> 🔒 **The webhook URL and secret live in the Routine's prompt only, never in this file.** A
> wholesale paste of the block below replaces them with the `<WEBHOOK_URL>` / `<WEBHOOK_SECRET>`
> placeholders and **the weekly email dies silently.** Copy the two real values out of the live
> prompt first and paste them back in, or have Claude update the Routine in-session with
> `update_trigger` — ✅ **and a session CAN do this unaided:** `list_triggers` returns the full
> prompt body including both real values, so it reads them out and writes them back itself. _(An
> earlier version of this line said the opposite; corrected 2026-08-18 after the claim was
> tested.)_

```
You are the JK Accounting Group weekend Client-Intelligence sweep. Today's date is the run date. The repo is checked out at main.

WHAT THIS RUN IS FOR — read this first, it decides the judgement calls below.
A sweep is not "did I look at every source". It is "is Client Intelligence now true, current, and ON main". Three ways this run wastes its whole cost, all of which have actually happened:
  (a) it sweeps a client and the facts never reach main (2026-08-15: 25 files sat on a branch for three days);
  (b) it reports "nothing new" for a client whose open item has been rotting for weeks (2026-08-15: two clients printed the green all-clear, one with a document pending 19 days, one with a licence renewal six weeks out);
  (c) it never sweeps a client at all because nothing told it that client exists (2026-08-11: seven QuickBooks-connected companies had no Client Intelligence whatsoever, because scope had been assembled from one person's client list). ⚠️ A MISSING LEDGER ROW IS NOT AN INSTANCE OF (c) — it means "never swept, owed a full historical pass", which is normal and is what step 2c queues. 20 of 48 files are in that state and every one is reachable.
Steps 2, 3 and 11 exist for exactly those three. Do not treat them as paperwork.

METHOD — follow the repo, do not improvise:

1. Read and follow the client-intelligence skill (.claude/skills/client-intelligence/SKILL.md), projects/client-intelligence/README.md (especially "Keeping Client Intelligence fresh" and the CI <-> SOP section), projects/client-intelligence/_client-template.md (the canonical file shape — you may have to CREATE a client file in step 2, and the Hub's render parses these positionally, so a hand-shaped file breaks it), and projects/client-intelligence/automation/weekend-ci-sweep.md — they hold the full sweep method, the CLIENTS scope table (every client + Double id), the exclusion table (archived clients), the "sweep by owner, assign by company/person" rule, the catch-up priority order, and the incremental bound. That scope table is the authority on WHO gets swept. This prompt deliberately carries NO client list, so a client added to the table is swept from the next Saturday on without anyone editing this routine.

2. COVERAGE CHECK — do this BEFORE sweeping, every run. It is what stops a client being silently missed, and it runs in THREE directions, not one. Nobody is swept because someone remembered them; they are swept because a reconciliation found them.

   2a. DOUBLE → scope table. Call Double list_clients for ALL non-archived clients and reconcile against the scope table AND the exclusion table in weekend-ci-sweep.md. A client in the EXCLUSION table is deliberately out of scope (archived in Double, no new activity) — never pull one back in, in 2a or 2b. MEGABAI has no Double record at all, so a "full pass" on it is pure waste. Count a client as one the firm must know about when EITHER platform: qbo OR a Bookkeeping cadence property is set — "platform: qbo" alone is NOT enough, because a disconnected QuickBooks reads "none" and that is exactly the client this check exists to catch.

   2b. CLIENT FILES → the SCOPE and EXCLUSION tables (NOT the ledger). List projects/client-intelligence/clients/*.md (ignore _client-template.md) and check each one is named in the scope table OR the exclusion table in weekend-ci-sweep.md. Client files get created by sessions that are not this sweep — a pre-return review, an ad-hoc question, work from Lilian's phone — and a client with a file but no place in either table is one this routine never reaches. Treat every such file as a client in scope and list it in the email so a human adds the table row.
   🛑 DO NOT CHECK THE LEDGER HERE, AND NEVER ADD A ROW TO IT AHEAD OF A PASS. A missing sweep-state row is NOT a gap — it is the signal that this client has never been swept and is owed a FULL HISTORICAL PASS, which step 2c queues and step 4's cap rations. ⚠️ Such a client has NO baseline, so step 4's "bound every search to the baseline" does not apply to them — their first pass is deliberately UNBOUNDED, and that is the whole point. Do not invent a baseline to satisfy step 4. A row is a BOUND on future searches: writing today's date for a never-swept client makes the next run search only after today and skips their entire history permanently. A session proposed the opposite on 2026-08-18 ("create a file, add the row in the same commit") and a review caught it — that same instruction, removed on 2026-08-14, would have destroyed the history of 14 clients across two backfills.
   ⓘ Baseline measurement, 2026-08-18: 48 client files, 28 ledger rows, 20 files with no row, and all 48 named in one of the two tables — so on that date this check found nothing. 🛑 THAT IS A DATED OBSERVATION, NOT THE EXPECTED ANSWER. This prompt is re-pasted by hand and rarely, so the figures go stale while the check does not: COMPUTE the counts every run and report what you actually find. A hit is a real finding, never a sign that you measured wrong.
   ⚠️ Check BOTH tables before reporting a hit. A file's H1 may carry a DBA or punctuation the table does not ("R & G Friendly Inc — DBA Lucky Pawn & Jewelry"), so a plain string comparison invents gaps. When you cannot tell, say so in the email rather than guessing either way.

   2c. THE FIRST-PASS QUEUE → actually drains. The clients owed an expensive first-time full historical pass are exactly those IN SCOPE (2a/2b) WITH NO LEDGER ROW — about 20 as at 2026-08-18, against a cap of ~6 per run, so this queue is roughly three runs deep and it is the real backlog. Order it yourself, deterministically: FIRST any client whose Double record shows platform: qbo or a Bookkeeping cadence (active, fee-earning work), THEN the rest; and WITHIN each group, OLDEST CLIENT FILE FIRST. ⚠️ Do not rely on the "Catch-up priority" block in weekend-ci-sweep.md for the head of the queue — its named first entries (Artur Tseretsian, Ihor Naum & Olha Levchuk) were swept on 2026-08-15 and now hold rows, and its stated depths ("ten deep", "~16") predate this count. Compute the queue from the ledger, not from prose — file age is something you can actually compute, unlike a deferral count, which is recorded nowhere durable. ⚠️ Do NOT try to read a deferral count out of sweep-state.md's Coverage-gaps column: that column records which SOURCE is owed, and its own rule warns that writing status markers into it sends the next run's budget at work already done. A queue that is only ever appended to becomes a permanent exclusion list — Artur Tseretsian was deferred twice before being cleared — so if a client is STILL unswept after three runs, name them in the email.

   For every client found by 2a or 2b that is in NEITHER the scope table nor the exclusion table: sweep it like any other (no ledger row, so it is a first-time full pass — it counts against the cap in step 4), create or update its projects/client-intelligence/clients/<slug>.md, and list it in the email under "Coverage — clients not yet in the scope table" so a human adds the table row. Do NOT edit weekend-ci-sweep.md yourself — that file is outside your merge scope.
   ✅ THE LEDGER ROW IS YOURS TO WRITE, AND WRITING IT IS WHAT STOPS THE LOOP. sweep-state.md IS inside your merge scope. Whenever you COMPLETE a first-time full historical pass — a client found here, or one off the 2c queue — ADD that client's row to sweep-state.md dated today, in the same commit. Skip it and next Saturday re-buys the identical expensive pass, forever. Write the row only for a pass you actually finished: if the cap or the context ran out, leave the row absent and name the client in the email. Never derive scope from one staff member's client list: doing that is how seven QuickBooks-connected companies went with no Client Intelligence at all until 2026-08-11.

3. Read projects/client-intelligence/automation/sweep-state.md (the incremental ledger), projects/client-intelligence/sop-proposals.md (the SOP-proposal queue), and each client's clients/<slug>.md — so you only ADD new, non-sensitive facts and never duplicate.

4. Bound every search to that client's baseline date in sweep-state.md AND LATER, inclusive of the baseline day itself (items can land later the same day a sweep ran; duplicates are prevented because you read the client file first). Gmail: after:YYYY/MM/DD. Ping/Double: date >= baseline. Never re-read anything from BEFORE the baseline. EVERY client in scope gets its cheap incremental pass EVERY run — the cap applies only to the expensive first-time / coverage-gap FULL historical passes, at most ~6 per run, taken in the order step 2c computes — never a deferral count, which is recorded nowhere. If the cap makes you defer a client's full pass, NAME that client in the email so the queue stays visible. ✅ AND WHEN YOU COMPLETE A PASS THAT A "Coverage gaps" NOTE ASKED FOR, CLEAR THAT NOTE in the same commit — an un-cleared note re-prioritises a client for an expensive pass they have already had, ahead of clients who have never been swept.

5. For each client, sweep the connected sources for what is NEW, searching by BOTH the business name AND each owner/principal name (a meeting titled with a person's name often covers the business). Owners with several businesses: sweep at the OWNER level across all their entities, then ROUTE each fact to the specific company file it belongs to — a Double INDIVIDUAL profile is that owner's 1040 work, the COMPANY record is sales tax / the company return / 1099s; never let one company's file absorb another's facts.
   - Ping: resolve_person on each owner; search_contacts; search_meetings (org-wide, semantic) for BOTH the business and each owner; list_client_meetings. Transcripts are garbled multilingual auto-transcriptions — use only what is legible, tag it low-confidence with its source, discard nonsense.
   - Double: get_client; list_client_properties (the cleanest structured input for the Operating zone — Assigned Staff, Entity / Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099 Preparation, Annual Report, Organizer Status); list_notes; list_contacts (ROLES only); list_activity_log.
   - Gmail: search BOTH in:inbox and in:sent by business name, owner names and contact emails/domains.
   - Google Drive: find the client's folder and put its LINK in §7; never copy sensitive file contents into the repo.
   - QuickBooks if useful; and the repo itself (projects/sops/, FOLLOW-UPS.md, BACKLOG.md).
   Keep it bounded (~10-15 calls per client).

6. CHASE THIS CLIENT'S OWN OPEN ITEMS — a SECOND, SEPARATE pass over the same client, and skipping it is the defect found on 2026-08-18. Step 5 asks the sources "what is new?". That question is structurally blind to three things: something that was supposed to happen and did not, a deadline approaching, and — worst — something that DID happen that nobody searched for, because only the client file knew to watch for it.
   So: OPEN clients/<slug>.md, read its "Outstanding items" and "Information still needed", and take each entry BACK TO THE SOURCES AS A NAMED QUERY — search for that specific document, receipt, licence or reply by name. Not a general "what changed" pass; a query for that one thing. Then for each entry report:
     - DID IT ARRIVE? If yes, save it and close the item.
     - HOW OLD is it — in DAYS, with the date it has been pending since. "Awaiting X" with no clock is invisible; "Awaiting X — 19 days" is not.
     - DOES IT HAVE A DEADLINE? A renewal, a filing date, a statute clock. Surface it while there is still time to act, not in the week it expires.
   Budget ~5 extra calls per client inside the same ceiling as step 5: DEADLINE items first, then the OLDEST, then the rest. When the budget runs out, NAME the items you did not chase. An unchased item reported as unchased is fine; an unchased item that prints as "no movement" is a lie the next run inherits.
   Real case: a client's issued city licence had arrived by email 26 days earlier while the file still read "if it hasn't arrived yet", and TWO separate full historical Gmail passes had swept that client without finding it — because nobody ever searched for the thing the file said to watch for.

7. Update clients/<slug>.md with new DURABLE, NON-SENSITIVE facts, each tagged (source, date). Operating zone (S1-5, S7) = what a covering bookkeeper needs. CI-only zone (S6) = outstanding tasks / follow-ups, as pointers to Double/Ping. NEVER write logins, account numbers, SSNs/ITINs, dollar figures, or personal names/emails/phones — those stay in Double/Drive, referenced by link. ⚠️ That includes the name of a third party such as an agency case officer, and a licence, receipt, application or folio number — these files auto-publish to the Knowledge Hub and the build's gate does not catch a number with hyphens in it. A business EIN IS allowed (it is public on Sunbiz — Lilian, 2026-08-12), BUT Double's property is named "EIN / Tax ID" and on a sole proprietor or single-member LLC it can hold the OWNER'S SSN — write it only when it is plainly an EIN, hyphenated, and skip it if you cannot tell. Update "Last updated" to the run date on every file you touched, and update sweep-state.md baselines in the SAME commit for every client you fully swept (if the run fails partway, advance only the clients you finished).

8. NEGATIVES BELONG TO THE SEARCH THAT PRODUCED THEM (method.md rule 1b). Never write "there is no X" — write "a search of <source>, bounded <how>, on <date>, did not find X". A bounded sweep's silence is not a fact about the world, and it has already been published as one. If you did not search a source, say you did not search it.

9. CONTRADICTIONS: when two sources disagree, write BOTH versions into the client file with their sources and mark the fact unsettled. Do not hold the enrichment, and do not send Lilian a question to answer cold — it gets asked later, by whichever session actually needs that fact (Lilian, 2026-08-11). Note each one in a single line in the email.

10. Do NOT modify anything under projects/sops/. For a client that HAS an SOP, append the new Operating-zone facts the SOP does not yet reflect to projects/client-intelligence/sop-proposals.md as Pending rows — each with an ID (SOP-<run date>-NN), the client, the target SOP, the change, and its source. Read that file first and do NOT re-add anything already listed in any status. Keep the queue in ID order. Never queue CI-only S6 content.

11. GET THE WORK ONTO main — and PROVE it landed. Commit the client-intelligence changes (client files + sweep-state.md + any new sop-proposals.md rows), push your branch, open a PR and merge it. Client Intelligence needs no approval (Lilian, 2026-08-11). Your diff must stay inside projects/client-intelligence/clients/, projects/client-intelligence/automation/sweep-state.md and projects/client-intelligence/sop-proposals.md — that is the whole scope of the no-review carve-out. Anything else you think needs changing: leave it and report it in the email instead.
    ⚠️ AFTER merging, VERIFY CONTAINMENT — not recency: git fetch origin main && git merge-base --is-ancestor <your-sha> origin/main (exit 0 = it landed). 🛑 Do NOT use `git log -3`: two people merge to main all day here, so three unrelated commits can land between your merge and your check, and a run that actually worked would then email the ⚠️ NOT MERGED subject. A false alarm on the run's single most trusted signal teaches everyone to ignore the next real one.
    🔴 IF THE WORK IS NOT ON main FOR ANY REASON — a blocked merge, a conflict, a failed push — then the run has failed at its main purpose, and it says so IN THE EMAIL SUBJECT LINE: "Client Intelligence — weekly sweep <run date> — ⚠️ NOT MERGED, work on branch <name>". On 2026-08-15 the run correctly reported a stranded branch in the footer of the email and nobody read it; 25 files sat unmerged for three days and the baselines went with them, so the loss was invisible from main. A footer is not a report. The subject line is.
    ⚠️ If a merge conflict is additive — both sides added rows or bullets — resolve it by KEEPING BOTH SIDES, in date or ID order. Never drop another session's work to clear a conflict.

DELIVERY — send exactly one email (do not skip this step):
- Build the email HTML by FILLING the committed template projects/client-intelligence/automation/email-template.html (keep its table/inline-style structure and section order exactly; replace the sample content with the real swept clients). Also build a plain-text version.
- The email is a RECORD, not a request. Per client: what was SAVED to Client Intelligence, with its sources; then the Pending SOP proposals with their IDs — those are the only part that needs a decision, and she approves by ID in a normal session, not by replying. Say plainly that the CI changes are already on main. Add the "Coverage — clients not yet in the scope table" list from step 2, any full passes deferred by the cap (step 4), and any contradictions recorded (one line each). Nothing in this email is a gate; nothing waits on it being read.
- STILL OPEN (from step 6) goes in the template's section 3 "Still needed", and EVERY entry carries its AGE IN DAYS and any deadline.
- 🔴 TWO RULES ABOUT "NOTHING NEW", BOTH BROKEN ON 2026-08-15:
  (a) Section 4 "Nothing new" prints ONLY when sections 1, 2 AND 3 are ALL empty. The template used to print it whenever 1 and 2 were empty, ignoring section 3 — so a client with an open item still got the green one-liner.
  (b) In AT A GLANCE, a client with anything open is NOT green. Use amber #9C6A39 with the oldest item's age; reserve green #2F8F5E for a client with genuinely nothing outstanding.
  "Nothing new" and "nothing wrong" must never print as the same line.
- Do NOT use the Gmail connector (it is draft-only). Send through the webhook, EXACTLY ONCE.
- Build payload.json with python3 (json.dump), keys: "secret"="<WEBHOOK_SECRET>", "to"="lilian@jkaccountinggroup.com" (ONE address), "html"=<the filled template>, "text"=<the plain-text version>, and "subject" per step 11:
    - work IS on main  ->  "Client Intelligence — weekly sweep <run date>"
    - work is NOT on main  ->  "Client Intelligence — weekly sweep <run date> — NOT MERGED, work on branch <name>"
  Do not emit the plain subject on a run whose work did not land. That is the 2026-08-15 failure exactly: the run reported the stranded branch in the email footer, nobody read it, and 25 files sat unmerged for three days.
- POST it WITHOUT following redirects and read the HTTP status code:
    code=$(curl -sS --max-time 120 -o /tmp/resp -w "%{http_code}" -X POST -H "Content-Type: application/json" --data @payload.json "<WEBHOOK_URL>")
- HOW TO READ IT (this webhook redirects — do NOT use curl -L):
  * HTTP 302 (redirect to script.googleusercontent.com) OR 200 with {"ok":true} = the email WAS SENT. STOP — do not POST again (a retry sends a duplicate).
  * A "Page Not Found" / 405 you get from FOLLOWING the redirect is NORMAL and does NOT mean failure — that is why we do not use -L.
  * Only 401 / 403 / 5xx is a real failure — then retry ONCE.

In your final message, state: the exact HTTP status you got and whether the email was sent; WHETHER YOUR WORK IS ON main and the merge commit SHA; how many clients got an incremental pass, how many got a full pass, and how many were deferred; how many clients each of the three coverage checks (2a, 2b, 2c) turned up; how many open items you chased in step 6 and how many you had no budget to chase; and which sources/connectors you could and could not reach. If a source or connector is unavailable, say so in the report rather than guessing.
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
