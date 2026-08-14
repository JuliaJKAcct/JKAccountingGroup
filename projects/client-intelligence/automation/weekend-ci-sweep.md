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
| M5 Studio Miami | ⚠️ **unknown — no Double account confirmed** (added 2026-08-14) |

_Add clients here as they get CI files; keep the list small enough to respect
per-tool call limits._

> ⓘ **M5 Studio Miami is in scope but has no Double id, and that is not an oversight.** It is a
> **company set-up** client (EIN application in flight as of 2026-08-14) and nobody has yet
> established whether it exists in Double at all — so the Double plane of the sweep has nothing
> to address. **Sweep it from Gmail / Ping / Drive by name**, and the first run that finds a
> Double client should write the id into this row. **It is low priority against the catch-up
> queue below**: a company being formed this week has almost no history to sweep, so it should
> never displace a client that has been waiting.

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
> ✅ **The CLIENTS list below is NOT the only route, and this correction matters.** The prompt
> **currently live in the web UI does not contain a client list at all** — it instructs the run to
> read *this file* for "the CLIENTS list (every client + Double id)". **So adding a client to the
> scope table above already reaches the live Routine without anyone re-pasting anything.** Keep the
> inline list below in sync anyway, because a future paste would carry it. _(Established
> 2026-08-14 by reading the live trigger, correcting a `FOLLOW-UPS` row that said the Routine was
> running a hardcoded old list.)_
>
> ⚠️ **What IS stale in the live prompt, and what a re-paste actually fixes** — three rulings from
> **2026-08-11** that never reached it: it still says **"Do NOT merge to main"** (Lilian removed the
> approval gate for Client Intelligence, and three runs sat unseen on branches because of exactly
> this line); it carries **no contradictions rule**; and its email is framed as a **request for
> decisions** rather than a **record of what was saved**.
>
> 🔒 **The webhook URL and secret live in the Routine's prompt only, never in this file.** A
> wholesale paste of the block below replaces them with the `<WEBHOOK_URL>` / `<WEBHOOK_SECRET>`
> placeholders and **the weekly email dies silently.** Copy the two real values out of the live
> prompt first and paste them back in, or have Claude update the Routine in-session with
> `update_trigger` (which takes a `prompt` parameter) so they never have to be retyped.

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
- Andrii Tymchenko -> 710619
- VOICECAPITAL INC -> 710725
- VOXAGO LLC -> 710606
- YMI TRUCKING LLC -> 710608
- ZETECH LLC -> 706710
- OPTIC GOLD INC -> 706702
- ONETWO STRATEGIES INC -> 706701
- Greenair International LLC -> 706688
- CANDRAMAS LLC -> 706683
- AXDIGITAL LLC -> 706681
- Airtouch LLC -> 706671
- VITALII IVANOV & TETIANA MOGYLOVA -> 710666
- Igor Melomed & Yelena Lovkina -> 710635
- R & G Friendly Inc -> 710589
- Viacheslav Honcharenko -> 710665
- Maria Contreras -> 710646
- Iurii Iakovenko & Alina Yakovenko -> 710639
- Grigoriy & Margarita Melomed -> 710633
  (SETATECH USA, INC. -> 706706 is archived in Double and deliberately NOT swept — see the exclusion table above; revisit if the engagement turns out to be live.)

FOR EACH CLIENT:
1. Sweep for what is NEW since the client's baseline in sweep-state.md (inclusive of the baseline day — this ledger is the ONLY bound; ignore the file's "Last updated" for bounding), searching by BOTH the business name AND each owner/principal name (a person can have several businesses, and a meeting titled with a person's name may discuss the business). OWNERS WITH SEVERAL BUSINESSES (mandatory): sweep at the OWNER level across ALL their entities, then ROUTE each fact to the specific company file it belongs to — a Double INDIVIDUAL profile is that owner's individual 1040 work, while the COMPANY record is sales tax / the company return / 1099s, so put personal/1040 facts in the person's context and company-operations facts in that company's file, and never let one company's file absorb another company's facts or the owner's personal data:
   - Ping: resolve_person on each owner/contact; search_contacts for the business and owners; search_meetings (org-wide, semantic userQuery) for BOTH "<business>" and each "<owner>"; list_client_meetings. Transcripts are garbled multilingual auto-transcriptions — use only what is legible, tag it low-confidence with its source, discard nonsense.
   - Gmail: search BOTH in:inbox and in:sent by business name, owner names and contact emails/domains; keep anything that relates to this client.
   - Double: get_client; list_client_properties (STRUCTURED source — Assigned Staff, Entity/Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099 Preparation, Annual Report, Organizer Status; the cleanest input for the Operating zone — "EIN / Tax ID" IS included, it is public on Sunbiz, BUT that property can hold an owner's SSN for a sole prop / SMLLC, so write it only when it is plainly an EIN); list_notes; list_contacts (ROLES only); list_activity_log. QuickBooks if useful.
   - Google Drive: search for the client's folder (usually one per client, under the firm's shared drive) and put its LINK in the file's §7 "Google Drive folder"; do NOT copy sensitive file contents into the repo.
   - The repo itself: check projects/sops/, FOLLOW-UPS.md and BACKLOG.md for any existing content about the client and fold in what's relevant.
   Keep it bounded (~10-15 calls/client).
2. Update clients/<slug>.md with new DURABLE, NON-SENSITIVE facts, each tagged (source, date). Operating zone (S1-5, S7) = facts a covering bookkeeper needs. CI-only zone (S6) = outstanding tasks / follow-ups (as pointers to Double/Ping). NEVER write secrets, logins, full account numbers, SSNs/ITINs, dollar figures, or personal names/emails/phones -- those stay in Double/Drive, referenced by link. A business EIN IS allowed (public on Sunbiz). Update "Last updated".
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
