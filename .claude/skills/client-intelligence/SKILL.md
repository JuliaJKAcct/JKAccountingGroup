---
name: client-intelligence
description: Build, enrich, audit, or review a JK Accounting Group per-client knowledge file — the durable record of everything the firm knows about a client (obligations, systems, recurring processes) that becomes the raw material for that client's SOPs. Use when creating a client file from the template, running a research/enrichment sweep across Ping / Double / Gmail / Google Drive / QuickBooks, doing the consistency + gap audit across all client files, keeping the client ↔ SOP link in sync, or (re)generating the on-brand review dashboard of all clients. Encodes the two-data-homes rule (non-sensitive knowledge + links live in the repo; secrets/PII stay in Double/Drive/QuickBooks, referenced by link), the two-zone model (Operating zone feeds the SOP; the CI-only §6 never does), the owner-with-several-businesses sweep rule (sweep by owner, assign by company/person), the incremental sweep ledger, and the Atlas review-page render engine (render/, built with the impeccable skill + the Design System). Outputs live in projects/client-intelligence/.
---

# Client Intelligence — the house way

The engine behind [`projects/client-intelligence/`](../../../projects/client-intelligence/):
one durable file per client holding everything the firm knows about them, built up
gradually and kept identical in shape for every client. It is the **raw material for
each client's SOPs** — Julia and a covering bookkeeper should be able to run a client
from the file plus the systems it links to.

**Why this exists:** the firm serves many clients, two people drive the repo in
parallel, and Lilian has explicitly asked Claude to be the **consistency guardian**
("no confíes tanto en mí"). This skill makes any session build, enrich, audit, and
present client intelligence the same way, so nothing drifts and nothing sensitive
leaks.

Read the project's own docs alongside this skill — they are the authority on content:
- [`README.md`](../../../projects/client-intelligence/README.md) — project rules + Clients index.
- [`_client-template.md`](../../../projects/client-intelligence/_client-template.md) — the canonical file shape.
- [`automation/weekend-ci-sweep.md`](../../../projects/client-intelligence/automation/weekend-ci-sweep.md) — the Saturday routine + full sweep method.
- [`automation/sweep-state.md`](../../../projects/client-intelligence/automation/sweep-state.md) — the incremental ledger.

> ⓘ **Before inferring a client's tax structure from prose, read Double's properties — and the
> RELATED client's too.** `Tax Return Type` is maintained client by client and names the form each
> one files; the form sits on **whoever files it**, so a company reported on an owner's return
> correctly carries none. An empty field on a company is a claim that it does not file, not a gap.
> The reasoning and the worked example are [`method.md`](../../../projects/pre-return-review/method.md)
> rule 10 _(Lilian, 2026-08-13)_.

## The two rules that never bend

1. **Two data homes.** The repo file holds **non-sensitive knowledge and links only**.
   Secrets and personal data — logins, passwords, full account numbers,
   **dollar figures**, personal names / emails / phones, **street addresses** — stay in
   **Double / Google Drive / QuickBooks** and are referenced by link. Never paste any of
   these into a file. (Business names, trade names, bank/software names, industry,
   entity type, service frequencies, state, and non-sensitive quirks are fine.)
   🔵 **A business EIN is NOT in that list — it may be written here.** Lilian's ruling,
   **2026-08-12**: *"los números de EIN no los considero información sensible porque son
   públicos en Sunbiz… no hay forma de esconderlo."* Florida publishes the FEI/EIN on the
   entity's own Sunbiz record, so withholding it from the repo bought nothing and cost the
   next reader the one number that identifies which entity a K-1 or a W-2 belongs to. She
   had already ruled this way once, for [`tools/redact-doc/`](../../../tools/redact-doc/),
   which deliberately preserves EINs; this propagates the same decision to the repo.
   ⚠️ **This is the business EIN and nothing else.** An **SSN or ITIN is still barred**,
   including when it is the entity's tax ID — a sole proprietor's or a single-member LLC's
   tax ID is often the owner's SSN, and that is a personal identifier that is not public
   anywhere. If you cannot tell which one a nine-digit number is, treat it as an SSN.
   ⚠️ **Write an EIN HYPHENATED — `12-3456789`.** The published-page gate in
   [`render/build.mjs`](./render/build.mjs) aborts the build on any run of nine or more bare
   digits, so an unhyphenated EIN takes down the dashboard and the Hub.
   ⚠️ **And note where it ends up:** `clients/*.md` auto-publishes to the Knowledge Hub with
   no allowlist, so an EIN written here becomes a hosted page. That is the accepted
   consequence of the ruling — it is public data — not an oversight.
2. **Two zones inside each file.**
   - **Operating zone → feeds the SOP:** §1 Snapshot, §2 Contacts, §3 Systems &
     access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
   - **Working context — CI-only, NEVER in the SOP:** §6 History & open questions (the
     log, outstanding tasks, "last agreed" meeting follow-ups, info still needed).

   The SOP is the curated view of the Operating zone. **Any SOP change requires
   Lilian's explicit approval** (the weekend routine only *proposes* SOP changes; it
   never writes to `projects/sops/`).

> **A case being tracked in Double has a second home — keep them in step.** For a matter the firm
> is retracing start to finish (the Tsminibears Florida RT matter is the pilot), the client file is
> mirrored by **one running case note on the Double client**, which the team actually reads. This
> file stays the **master** — **§4/§5 for the substance, §6 for the dated log** — and the note is the
> readable view, **rewritten in place, never duplicated**. **Whenever the matter moves, update the
> note in the same pass** (not just when §6 gains a line: mirroring a log entry while §4 still says
> something contradictory is the drift PR #138 had to repair). Read this file at its latest state
> before rewriting the note — the other person's session may have moved the case — and **carry its
> caveats across**: "recommended, not agreed", "inferred, not established", "unverified" all belong
> in the note too. §7 Links records the note's title and ID. Format + rules: the
> [`double-mcp`](../double-mcp/) skill §7.

> **Answered items stay, marked — they are not deleted.** In §6 "Information still needed", tick the
> box and append the answer in plain prose on the same line (`- [x] Fiscal year-end — **December 31**
> _(client, 2026-08-06)_`). Keeping the question visible is what stops it being re-asked, and the
> git history alone doesn't surface that. **Don't strike the text through** — four files had drifted
> into different styles before this was written down. If the answer is "not answerable", say that
> and why, so nobody reopens it.

## Capture is automatic, and coverage is measured against Double

**Write what you are told, without being asked and without filtering.** Lilian, 2026-08-11:
*"nunca está de más ninguna información que se ponga ahí."* Holding a fact costs nothing and
dropping one costs a lot — the file exists so that months later she
or Julia can ask a question and get an answer that carries the whole context. A session that
discusses a client and ends without touching that client's file has lost something. Ask only when
you cannot tell which client a fact belongs to; never to defer the write.

**Answering a question is two steps, not one.** Read the file, then **close the gap since that
client's baseline** in `sweep-state.md` — Julia's Gmail (including the **Zoom transcripts that
arrive there by email**), Ping Assistant's meeting and call transcripts, Double notes/tasks/activity,
and Drive if the question needs it. Then answer, and **fold what you found back into the file in the
same session**. ⓘ Ping's **Russian/Ukrainian transcription was upgraded in Aug 2026** and Julia is
testing it — newer RU/UA transcripts should be usable where older ones were often garbled.

**Coverage is audited against Double, never against a person's client list.** Sweep `list_clients`
(all non-archived) and count a client as one we know something about when **either** `platform: qbo`
**or** a `Bookkeeping` cadence property is set — reconcile `clients/` and the sweep scope against
**that**. ⚠️ **Do not audit on `platform: qbo` alone:** a disconnected QuickBooks reads `none`, which
is Deep Tech's state while its bookkeeping is paused, so the narrow check would miss exactly the kind
of client it was written to find. This is not theoretical — the scope list had been
built from Lilian's and Maria's clients, so **every one of Liudmyla Kazannik's seven
QuickBooks-connected companies was invisible to Client Intelligence** until the audit on
2026-08-11. A client with genuinely nothing known about it may have no file; a client with a
QuickBooks connection is never that client.

## The approval line: CI saves itself, SOPs wait (Lilian, 2026-08-11)

**Never park Client Intelligence pending a review.** CI needs no approval — not to be
written, not to be merged. The weekend sweep now **merges its own CI work to `main`**;
it used to leave it on a branch for a human, and three runs (07-25, 08-01, 08-08) sat
unseen for three weeks that way — 717 lines and 22 SOP proposals. Git is the safety net:
every fact is source-tagged and dated, and anything can be reverted.

**A contradiction is recorded, not escalated.** When two sources disagree, write **both**
into the client file with their sources and mark the fact unsettled. Do not hold the
enrichment, and do not send Lilian a question to answer cold — she will not work through
a weekly list of them. **The session that actually needs the fact is the one that asks:**
name both versions, say where each came from, ask, and update the file from the answer.
_(Her words: "si te pedimos información en un momento determinado y tienes cosas
contradictorias, simplemente nos puedes explicar la fuente de la contradicción… y según
nuestra respuesta, actualizas Client Intelligence.")_ Settled answers get marked as
settled, with who settled them and when, so nobody reopens them — see Atman Parts' home
state (Texas) for the pattern.

## CI → SOP proposals (the approval loop)

A client's **SOP** never changes without Lilian's approval, so the bridge runs through a
durable queue —
[`sop-proposals.md`](../../../projects/client-intelligence/sop-proposals.md):

1. **Propose.** When enrichment finds an **Operating-zone** fact a client's SOP doesn't
   reflect (only for clients that *have* an SOP), append it to `sop-proposals.md` as
   **Pending** with an ID (`SOP-YYYY-MM-DD-NN`), client, target SOP, the change, and its
   source. **Dedup:** never add a candidate already listed in any status. Never queue
   CI-only §6 content (outstanding tasks, meeting follow-ups).
2. **Notify.** The weekend email lists the **Pending** items with their IDs.
3. **Decide.** Lilian tells Claude by ID — *"approve SOP-…-01 and -02, reject -03"* (or
   *"approve all the Ecoorganic ones"*). She never edits a file.
4. **Apply.** For each **Approved** item, edit the target SOP via the
   [`sop-authoring`](../sop-authoring/) skill (PR → independent review → merge), then set
   the row to **Applied** with the PR link. **Rejected** rows stay recorded (with the
   reason) so nothing is re-proposed.

The queue is the source of truth; the email is just the notice. See
[`sop-proposals.md`](../../../projects/client-intelligence/sop-proposals.md) for the
format and full rules.

## When a client gets a file — the trigger (don't wait to be asked)

**Working on a named client is the trigger.** Lilian's standing instruction (2026-08-11):
*"siempre que hablemos de un cliente, sobre todo un cliente que tenga cuenta en Double, todo lo
que hablemos de él debe ser guardado en Client Intelligence… esto no podemos perderlo."*

So in any session that analyses a client's organizer, drafts them a message, chases a filing,
writes them a Double note, or answers a substantive question about them: **look for
`clients/<slug>.md` and create it if it is missing** — in that same session, without being asked.
A client **with a Double account** is the clearest case: being in Double means real, ongoing work.

The bar is deliberately low — *is there anything here worth keeping?* — because the failure mode
is silent. Knowledge gets produced, the session ends, and nobody discovers the loss until the next
person starts from zero.

**Writing a Double note is not a substitute, and that is exactly how this rule was found.** In
Aug 2026 a client's information arrived as a text message and was carefully captured in a Double
note — while that client still had **no CI file at all**. The note held his figures; nothing held
what the firm had *learned* about him. Two months of that pattern and the knowledge is scattered
across notes nobody re-reads. **A note and a file are different artifacts with different jobs** —
see the boundary rule in the [`double-mcp`](../double-mcp/) skill §7.

### What a tax organizer's answers may leave in a client file

**The bar is the IDENTITY BLOCK, not the answer** _(Lilian, 2026-08-12)_.

**You may write what an organizer answer establishes as a tax fact** — the filing status, which
states the client lived in, the dependants position, the type of health coverage, which income
types they had, what carries forward. Those are the facts the return runs on and the file exists
to hold.

**Three things still never go in**, and none of them is a tax fact:
- **The identity block** — SSN/ITIN, driver's licence, bank routing and account numbers, passports
  and any other government-issued identifier, credentials, dates of birth.
- **Personal contact details** — phone, email, the street address. _(A city and state are a tax
  fact on a multi-state return and may be written; the street line is not.)_
- **Dollar figures** — barred by the older two-data-homes rule, which this ruling does not touch.
  They live in Double, Drive and QuickBooks.

**Write the fact AND the action.** *"Marketplace coverage — so Form 1095-A is required and blocks
filing; ask him for it"* is the shape: the next person knows what is true and what to do, and needs
to open nothing.

**⚠️ ONE THING LILIAN HAS NOT RULED ON — ask her, do not decide it in a session.**
The three bars above are all about **format** — data that is harmful because of what it
*enables* (identity theft, contact, financial profiling). A 1040 organizer also asks questions
whose answers are harmful because of what they **reveal**, and those are tax facts by every test
here, so the rule as written **permits** them:

> coverage that is **Medicaid** (income under ~138% FPL) or **Medicare under 65** (disability) ·
> a dependant who is **permanently and totally disabled** · **living apart from a spouse** ·
> **alimony** under a pre-2019 decree (a divorce, and who pays) · a **1099-C** or §108 insolvency ·
> a **foreign account** and its country · a spouse or dependant with an **ITIN** rather than an SSN
> (immigration status, and of a third party) · an **IP PIN** (a confirmed identity-theft victim) ·
> **gambling** winnings · a dependant who was **incarcerated**.

**Two of these are sharper for this firm than they would be elsewhere**: the client base is
foreign-born owners in a community where clients know one another, so a country of account or an
ITIN is not an abstract disclosure. And note the automated backstop does not help — `loadClients()`
matches SSN shapes and 9+ digit runs, so an **IP PIN is six digits and sails straight past it**.

**Until she rules, take the safe side and it costs almost nothing: write the CONSEQUENCE, not the
circumstance.** *"Form 1095-A is required and blocks filing"* is the whole of what the next person
needs; *"the coverage is Medicaid"* adds nothing to the work and a great deal to the page. When a
circumstance genuinely is load-bearing, **ask her** — that is what §6's provenance rule is for.
_(Raised by the independent review of 2026-08-12, tracked in [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md).)_


_(**Supersedes the rule in force 2026-08-11 → 2026-08-12:** *"what the client answered is barred
even when it is not an identifier — write the action, not the answer."* That rule was written after
a session committed a client's answers and a review caught it, and it was **right about the leak
and wrong about the boundary.** Lilian ruled on 2026-08-12 after seeing what it cost: the first
full run's most valuable output was a question the organizer had already **closed**, and the rule
made that unwritable — so the file said "go and read the organizer" and a future session had to
reopen the very thing the file existed to spare it. Her ruling on the Knowledge Hub the day before
— *"tax information on the page is fine; identifiers are not"* — is the same decision, and this
makes the two consistent instead of contradictory.)_

⚠️ **This does put a client's tax facts on a published page, and that is the decision, not an
oversight.** `clients/*.md` is auto-published to the Knowledge Hub with no allowlist, and rebuilding
the Hub is a standing, unprompted part of finishing work. **What must never reach that page is the
identity block** — that is what the two-data-homes rule and `loadClients()`'s hard abort exist for,
and neither changes.

_(The 2026-08-11 rule this replaces was itself learned by getting it wrong — the first cross-year
organizer analysis wrote a client's answers into their file and a review caught it before merge.
**What was actually wrong there was the identity block and the figures, not the tax facts.**)_

### The file has to answer the year later

Lilian's requirement (2026-08-11): she wants to be able to ask, months on, **"what happened with
this client's 2025 taxes? what problem did we have? what did they report?"** — and get the answer
from the file rather than from anyone's memory. So when a session works a client's tax year, §6
carries a **`Tax year YYYY — the review`** entry: what gated the return, every question put to the
client **and its answer once it arrives** (tick it and append the answer with the date), what the
prior-year return established, and what was decided or left open.

Prior-return facts, and what the client tells **us** when we ask, are ordinary client knowledge and
belong here. What is still barred is the identity block, personal contact details and dollar figures (above) — which
costs almost nothing, because the answer we act on is the one they give when we ask them directly.

🔴 **A DOCUMENT'S LOCATION IS NEVER WRITTEN FROM ASSUMPTION.** A path in a client file is what the
next person follows, and a wrong one sends them hunting for a file that is sitting where you did not
say. **Record the FILENAME, not just the folder** — a year folder holds many documents, and Double's
`get_file` searches by name, so a folder alone is not actionable. **If you cannot confirm where
something is, say so and ask.** _(Lilian, 2026-08-12: "si no logras encontrarlo, no es problema,
pero no lo asumas. Simplemente pregúntame y te ayudo.")_ The shape to use:
`JK Accounting Group > Others > 2025 > Form 1098 2025.jpeg`. Same rule, stated for Double notes, in
[`double-mcp`](../double-mcp/) §3.

⚠️ **These files are published** — the Knowledge Hub and this skill's own review dashboard (an
**Artifact**) both render from them. **Tax detail is fine on those pages** (Lilian, 2026-08-11 —
she has no objection to the Hub carrying it); **identifiers are not**, because the link circulates
inside the team and can travel further. That is rule 1 above, and `loadClients()` now hard-aborts
on an SSN/ITIN shape or a long digit run as a backstop (`ALLOW_SENSITIVE_ON_PUBLISHED_PAGES=1`
overrides — as a decision, never to get past the error). It scans **client files only**, and it
misses a passport or licence number, a date of birth, an address in prose, and an SSN written with
spaces or dots instead of hyphens — **rule 1 is still the real control.** See [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md).

Seeding a file from Double alone is fine — do it now and let the weekend sweep enrich it later.
Record what it was seeded from in `sweep-state.md`'s coverage-gap column so the owed sources are
visible rather than assumed done.

## Creating a client file

1. `cp projects/client-intelligence/_client-template.md projects/client-intelligence/clients/<slug>.md`
   (slug = lowercase, hyphenated business name).
2. Fill §1–§7 from the sources (below). **Keep every section, in order.** Anything you
   don't have yet gets `_(pending)_` — never drop a field.
3. Set the status line: `**Status:** … · **Owner:** <assigned staff / Firm> · **Last updated:** <YYYY-MM-DD>`.
   *Owner* = the staff member who owns the relationship (Assigned Staff in Double).
4. Add cross-links in §7 (`Related clients`) to any **owner-group siblings** (other
   companies of the same owner) — this is how an owner-group is recorded.
5. **Update the indexes in the same commit** (consistency guardian):
   - the **Clients index** table + the "N so far" count in the project README,
   - the **scope table + CLIENTS list** in `weekend-ci-sweep.md` — **unless the client
     is archived in Double / `Status: Former`**, in which case it goes in that file's
     **"Excluded — archived clients"** table instead (an archived client generates no new
     activity, so sweeping it every Saturday is wasted budget; it keeps its CI file
     because open matters and lessons outlive the engagement),
   - a **row in `sweep-state.md`** (new client → gets a full historical sweep once).

   ⚠️ **And then say the part the commit cannot do: the live Routine must be updated.** The
   Saturday sweep runs off a prompt **pasted into the web UI**, so editing the CLIENTS list here
   leaves the run sweeping the **old** list. A session that adds a client, commits, and reports
   "done" has half-finished it. Tell whoever asked, in the same breath, that the Routine at
   claude.ai/code/routines needs its prompt updated — and warn that a wholesale paste overwrites the
   real webhook URL and secret with this repo's placeholders, so those two values have to be carried
   across by hand. The mechanics are in
   [`weekend-ci-sweep.md`](../../../projects/client-intelligence/automation/weekend-ci-sweep.md)
   → *THIS FILE IS NOT THE LIVE ROUTINE*.

## Enriching — the research sweep

Sources, per client: **Ping Assistant** (`resolve_person`, `search_contacts`,
`search_meetings` org-wide semantic, `list_client_meetings`, `list_action_items`),
**Double** (`get_client`, **`list_client_properties`** — the cleanest structured input:
Assigned Staff, Entity/Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099, Annual
Report, Organizer Status; the **EIN / Tax ID** property is readable and writable to the
file since 2026-08-12 — see rule 1), `list_notes`,
`list_contacts` (roles only), `list_activity_log`; **Gmail** (`in:inbox` **and**
`in:sent`); **Google Drive** (the client's folder → link it in §7); **QuickBooks** if
useful; and **the repo itself** (existing SOPs, FOLLOW-UPS, BACKLOG).

🔴 **Searching Drive: pass `excludeContentSnippets: true`, always.** `search_files` attaches a
**content snippet to every hit by default**, so a search that merely *lists* a client's folder can
dump a document's text into the session — and every client vault has a `… Passwords` doc in it. On
2026-08-12 a routine folder listing for Ecoorganic returned that client's full credential doc,
unrequested: bank logins, QuickBooks, the state portals. **Nothing is retractable once it is in the
session.** The parameter costs nothing and prevents the whole class, so use it for **any** search
that is about finding *where* something is. Only omit it when you actually intend to read content —
and then say so first. When it happens anyway: copy no value anywhere, tell the person plainly, and
**remind them to delete the session** (in a cloud session that history sits in the firm's shared
Claude account). Keep it calm — deleting is the routine last step, not an alarm.

**Plus one source no WEEKEND SWEEP reads: the migrated TaxDome notes.** When the firm moved
off TaxDome, the notes written by hand on each client's TaxDome profile were kept — in a
`Notes` folder under the client's `TaxDome` folder in Double, and mirrored in Julia's Google
Drive. ✅ **Both verified 2026-08-13**, when the folders were walked and read: **33 folders →
22 clients**, and the Drive tree does **not** mirror Double's layout — it splits across three
parallel subtrees, two of which near-duplicate each other. Don't conclude a client has none
because a guessed path came up empty; use the inventory in the backfill doc.
🔴 **Do NOT pick these up ad hoc inside an ordinary per-client sweep, and never from the
unattended Saturday routine.** The backfill is a phased, attended job scoped in
[`automation/taxdome-notes-backfill.md`](../../../projects/client-intelligence/automation/taxdome-notes-backfill.md),
and reading the note **content** was **authorised by Lilian on 2026-08-13** — the ruling, its
scope and its limits are in [`double-mcp`](../double-mcp/)'s document rule (*"The SECOND
hole"*), which is the only place a session may take it from. **The carve-out covers these
`Notes` folders and nothing else.** Read the backfill doc first; it
also carries the source tag and the rule that **the folder a note sits in is not evidence of
its subject** (below).

**Search by BOTH the business name AND each owner/principal name** — in Ping a
business's meetings are often filed under the owner's personal contact, and one meeting
can cover several topics. Never conclude "not found" from a single business-name lookup.

### Owners with several businesses — sweep by owner, assign by company (and person)

Many clients own several companies, so facts arrive mixed. **Mandatory:**

- **Sweep at the owner level, then route by company.** Under one owner's name a source
  can carry topics about **any** of their companies, and one company's thread may mention
  **another**. Build the **owner → [companies + individual profile]** map first, gather
  everything under the owner, then **assign each fact to the specific company file it
  belongs to** — never let one company's file absorb another's.
- **Double individual profile vs. company record.** An owner's **individual** profile in
  Double is their **individual 1040** work; the **company** record is sales tax / the
  company return / 1099s. Check **all** the owner's companies **and** the individual
  profile, then place each fact where it belongs — a personal/1040 fact → the person's
  context (not a company file); a company-operations fact → that company's file.
- **Where a record was FILED is not evidence of its subject — read the content and decide.**
  Sharpest on anything inherited from **TaxDome**, which did not separate owner from company
  the way Double does: the firm ran a client's company filings and their personal matters
  together under the owner's profile, so a **company** note routinely sits under the **owner**
  (Lilian, 2026-08-12). Route it to the company's file anyway, and record where it came from.
  When a single note covers both, **split it** rather than copying the whole thing into two
  files; when you genuinely cannot tell whose it is, **ask** — a fact filed against the wrong
  client is worse than one nobody wrote down, because the next person believes it.

Tag every fact with its **source + date**. Transcripts are garbled multilingual
auto-transcriptions — use only what is legible, tag it low-confidence, discard nonsense.
**Non-sensitive facts only** (rule 1).

### Incremental sweeps (token discipline)

`sweep-state.md` records the date each client is swept through. Bound every search to
that **baseline date and later, inclusive** (Gmail `after:YYYY/MM/DD`; Ping/Double
`date >= baseline`); never re-read history before the baseline. A client with a
**Coverage gap** note owes a one-time full pass of that source; a client with no row
gets one full historical sweep, then a row. **Cap ~6 first-time/gap full passes per
run.** Advance baselines **in the same commit** as the file updates. Full rules live in
`sweep-state.md`.

## Consistency + gap audit

When asked "what's missing" (or on the weekly repo audit), sweep all of `clients/` and
check, per client: every section present and in order; `_(pending)_` on unknown fields;
the Double + Drive links present in §7; owner-group cross-links **bidirectional**
(A links B ⇒ B links A); and the client present + consistent across the README index,
`weekend-ci-sweep.md` (scope table **and** CLIENTS list), and `sweep-state.md` — slugs
and Double ids matching. **Archived / `Status: Former` clients are the deliberate
exception:** they belong in `weekend-ci-sweep.md`'s **"Excluded — archived clients"**
table and **not** in the scope table or the CLIENTS list. Their absence there is intent,
not drift — do not "fix" it by re-adding them to scope. Report gaps per client; fix index drift or flag it to Julia.

## The review dashboard (render engine)

[`render/build.mjs`](./render/) parses every `clients/<slug>.md` into structured fields
and assembles ONE self-contained, on-brand, filterable HTML page for on-screen review —
grouped by owner, with per-client service pills, systems, quirks, open items, "still to
confirm", collapsible detail, and a **Sources & live records** panel (Double / Drive
links + how to get sensitive data live). It reuses the committed **Atlas** tokens +
embedded brand fonts and was built with the **`impeccable`** skill and the
[Design System](../../../brand/design-system/DESIGN.md) — so every regeneration carries
the firm's seal. **Any visual change goes through `impeccable` + the Design System**
(standing repo rule), never freehand.

Regenerate and publish:
```
node .claude/skills/client-intelligence/render/build.mjs <repoRoot> <out.html> <as-of-date>
```
Then publish `<out.html>` with the **Artifact** tool for a private, shareable review
link (pass the existing artifact `url` to update in place and keep the same link). The
output is an Artifact **fragment** (`<title>` + `<style>` + markup + `<script>`) and is
**not committed** — it is large and fully regenerable from the files. See
[`render/README.md`](./render/README.md).

> ⚠️ **The published card is a CURATED EXTRACT, not the file — so order matters.** `clientCard()` renders only the **first four** top-level bullets of **§5** and the **first four** of **§6 "Outstanding items"**; a fifth appears nowhere, on the Hub or on the review dashboard. Order both by **consequence** — what would cause the worst mistake if someone didn't know it — and treat "where does this bullet go?" as part of adding one. A closed or historical item sitting in the first four is silently evicting live work from the team's view. The full contract is in [`render/README.md`](./render/README.md).

## Answering questions live (Julia/Lilian ask about a client) — ALWAYS sweep live first

The client file is the **index + summary + open threads** — NOT the live status, and NOT a
transcript store. So **never answer a client question from the repo file alone.** Whenever
Julia or Lilian asks *anything* about a client — "what's the status of X?", "what are we
waiting for?", "what did we last agree?", "what's happening with their return / permit /
books?" — run a **live multi-source sweep at question time**, then answer from what you find.
This is the whole point of Client Intelligence for them: the file says *where to look and
what's open*; the live sweep says *what's true right now*.

1. **Read the client file** — the summary, where things live, and §6 open items (the map).
2. **Then pull the live specifics from EVERY relevant connected system** — mandatory, not
   optional; do it proactively, without being told to check email/Drive/meetings:
   - **Gmail** — search **Julia's inbox AND sent mail** for the client + each owner/principal
     name (recent first). This is where "waiting for X / client just sent Y" actually shows up.
   - **Ping Assistant** — the client's **Zoom / meeting summaries, transcripts, and action
     items** (search by business **and** owner name) — what was actually discussed with the client.
   - **Double** — notes, client properties, questions, files, tasks (engagement status).
   - **Google Drive** — the client's folder and documents (you WILL find real documents there —
     organizers, statements, forms — even though you will NOT find "waiting-for" status notes).
     🔴 **Pass `excludeContentSnippets: true`** — `search_files` attaches a content snippet by
     default and will hand you the vault's `… Passwords` doc unasked (see the enrichment section).
   - **QuickBooks** — when the question touches their books / financials.
   - **Any other connected tool** that could hold the answer — use your full toolset.
3. **Synthesize** the file + the live findings and answer, saying where each fact came from.
   You can only retrieve what exists in a connected system; if a source has nothing or isn't
   reachable, **say so honestly** rather than answering from the stale file alone.

Never conclude "not found" from a single lookup — a client's thread is often filed under the
owner's personal name, and one meeting/email can cover several of their companies (sweep by
owner, route by company — same rule as enrichment).

### Getting sensitive data (day-to-day)

Sensitive values are deliberately **not** in the repo. When someone needs one —
an address, a login location, a contact email — **fetch it live** from Double (contacts,
properties, notes) or Google Drive (the client's folder) and give it **in the chat**;
**never commit it** to the repo. The file's §7 links are the fast path to where it
lives. This keeps the repo clean while making Claude the firm's quick retrieval tool.

## Related

- [`organizer-review`](../organizer-review/) — **the pre-return review companion** (Lilian's "tax preparer"). It reads this skill's client files as source 1 and writes back the `Tax year YYYY — the review` entry. If someone asks to review a client *before their return*, that skill drives; this one governs what may be written down.

## Files this skill touches

- `projects/client-intelligence/clients/<slug>.md` — the per-client files (create/enrich).
- `projects/client-intelligence/_client-template.md` — the shape (don't drift from it).
- `projects/client-intelligence/README.md` — Clients index + rules (keep in sync).
- `projects/client-intelligence/automation/` — the weekend routine + sweep ledger.
- `.claude/skills/client-intelligence/render/build.mjs` — the review-page engine.

## Still to build (v1 → later)

- Fold the weekend-sweep prompt into this skill so the routine just says "follow the
  client-intelligence skill" (the routine still needs its connectors attached in the
  web UI — see the automation doc).
- A per-owner index file (owner → companies + individual profile) once the owner-group
  map is worth materializing beyond the per-file cross-links.
- Service → SOP deep-linking on the dashboard as SOPs get written (structure already
  supports it via §7 "Related SOPs").
