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

## The two rules that never bend

1. **Two data homes.** The repo file holds **non-sensitive knowledge and links only**.
   Secrets and personal data — logins, passwords, full account numbers, **EINs**,
   **dollar figures**, personal names / emails / phones, **street addresses** — stay in
   **Double / Google Drive / QuickBooks** and are referenced by link. Never paste any of
   these into a file. (Business names, trade names, bank/software names, industry,
   entity type, service frequencies, state, and non-sensitive quirks are fine.)
2. **Two zones inside each file.**
   - **Operating zone → feeds the SOP:** §1 Snapshot, §2 Contacts, §3 Systems &
     access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links.
   - **Working context — CI-only, NEVER in the SOP:** §6 History & open questions (the
     log, outstanding tasks, "last agreed" meeting follow-ups, info still needed).

   The SOP is the curated view of the Operating zone. **Any SOP change requires
   Lilian's explicit approval** (the weekend routine only *proposes* SOP changes; it
   never writes to `projects/sops/`).

## CI → SOP proposals (the approval loop)

CI captures everything non-sensitive automatically. A client's **SOP** never changes
without Lilian's approval, so the bridge runs through a durable queue —
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
   - the **scope table + CLIENTS list** in `weekend-ci-sweep.md`,
   - a **row in `sweep-state.md`** (new client → gets a full historical sweep once).

## Enriching — the research sweep

Sources, per client: **Ping Assistant** (`resolve_person`, `search_contacts`,
`search_meetings` org-wide semantic, `list_client_meetings`, `list_action_items`),
**Double** (`get_client`, **`list_client_properties`** — the cleanest structured input:
Assigned Staff, Entity/Tax Return Type, Sales Tax, Bookkeeping, Payroll, 1099, Annual
Report, Organizer Status; **skip the EIN / Tax ID property**), `list_notes`,
`list_contacts` (roles only), `list_activity_log`; **Gmail** (`in:inbox` **and**
`in:sent`); **Google Drive** (the client's folder → link it in §7); **QuickBooks** if
useful; and **the repo itself** (existing SOPs, FOLLOW-UPS, BACKLOG).

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
and Double ids matching. Report gaps per client; fix index drift or flag it to Julia.

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

## Answering questions live (Julia/Lilian ask about a client)

The file is the **index + summary + open threads**, not a transcript store. To answer a
specific question ("what did we last agree with X?", "status of the permits?"):
1. **Read the client file** — the summary, where things live, and §6 open items.
2. **Pull the specifics live** from the connected systems — Ping (meetings / action
   items), Gmail, Double notes, Drive, QuickBooks.
You can only retrieve what exists in a connected system; say so honestly when it doesn't.

### Getting sensitive data (day-to-day)

Sensitive values are deliberately **not** in the repo. When someone needs one — an EIN,
an address, a login location, a contact email — **fetch it live** from Double (contacts,
properties, notes) or Google Drive (the client's folder) and give it **in the chat**;
**never commit it** to the repo. The file's §7 links are the fast path to where it
lives. This keeps the repo clean while making Claude the firm's quick retrieval tool.

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
