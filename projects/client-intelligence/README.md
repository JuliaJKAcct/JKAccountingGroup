# Client Intelligence

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-07

A durable, per-client knowledge base — one file per client holding everything the
firm knows about how we serve them: who they are, what entities they run, their
recurring obligations, the systems we use for them, and the processes we follow.
Built up **gradually** (weeks and months) as we gather information from the client
and from Julia, so that when we sit down to write each client's **SOPs** the raw
material is already here.

## Purpose

Client knowledge shouldn't live in one person's head or in a single document that
can be lost, moved, or overwritten. This project keeps it **in the repo**, where:

- **Nothing is lost** — git keeps every version; any change can be restored.
- **Every change is attributed** — who changed what, and when.
- **Two people don't collide** — parallel edits are merged or flagged, never
  silently overwritten (the risk of a shared Google Doc where the last save wins).

This is the firm's **reference layer** — the *facts* about each client. It feeds
the **procedure layer** in [`../sops/`](../sops/) (the step-by-step *how-to*
runbooks). Collect a client's facts once here; each SOP then pulls the specifics
it needs. (This is the "Client Intelligence" idea from
[`../../BACKLOG.md`](../../BACKLOG.md) and [`../../FOLLOW-UPS.md`](../../FOLLOW-UPS.md),
now made real.)

## The two data homes (read before adding anything)

The repo holds **knowledge + links**. The firm's systems hold the **secrets and
personal data**. Every fact goes to the right home:

| Kind of information | Example | Where it lives |
|---|---|---|
| Non-sensitive knowledge | Entity type, what they do, filing frequency, due dates, which portal/form, the process steps, our engagement | **This file** (the repo) |
| Secrets & personal data | Logins, passwords, full account numbers, EINs, dollar figures, contact names/emails/phones | **Google Drive / Double / QuickBooks** — referenced here by **link**, never pasted |

So a client file **describes the process and points to where the sensitive value
lives** (a Drive link, the Double client). Claude can open those links live when a
task actually needs the value — but the value is never committed to the repo.

**Never commit:** passwords/logins, full account or routing numbers, EINs, SSNs,
dollar figures, personal contact details, or filled-in forms. When in doubt, link
to Drive/Double instead of typing it here.

## Same structure for every client (this is the point)

Every client file is a **copy of [`_client-template.md`](./_client-template.md)** and
keeps **the same sections in the same order** — always. Only the *fill level*
differs from client to client, never the shape. We won't have every fact for every
client at the same time, and that's fine: unknown fields stay as visible
placeholders so the gap is obvious.

- **Start a new client:** copy `_client-template.md` to `clients/<client-slug>.md`,
  fill the header, add a row to the **Clients** index below.
- **Mark gaps, don't delete sections.** An unknown value is written `_(pending)_`.
  Never remove a section because it's empty — leave the placeholder so we can see
  what's still owed.
- **Keep `Last updated` current** on every substantive edit.

## Claude keeps it consistent — don't rely on memory

Lilian's explicit ask: **Claude is responsible for consistency**, not the human.
No one can watch every client at once or remember which fact is missing where. So,
**on request ("what's missing per client?" / "¿qué falta por cliente?") — and, once
scheduled, automatically** — Claude runs a **completeness audit** across
`clients/`:

1. **Structure check** — every client file has the full template section set (no
   section dropped, none renamed), in order.
2. **Gap report** — for each client, list the `_(pending)_` fields and its
   **"Information still needed"** checklist, so we know exactly what to gather next.
3. **Report back** per client — filled vs. pending — and flag any drift to fix.

This makes "every client has the same structure" a checkable rule, not a hope.

## Client Intelligence ↔ the client SOP (staying linked, no drift)

Client Intelligence and a client's **SOP** are two documents with two jobs, built
from **one source of truth** so they never quietly disagree:

- **This CI file is the master record** of everything we know about the client.
- **The client SOP** (in [`../sops/`](../sops/)) is the **curated operating view** —
  everything a covering bookkeeper needs to run the client day-to-day (accounts,
  where credentials live [links], how to file sales tax, how to renew the company,
  categorization quirks). It is built from this file's **Operating** zone, links back
  here, and this file lists it under §7 Links.

**What goes where** — the boundary that keeps the wrong info out of the SOP:

| Zone in the CI file | Feeds the SOP? | Examples |
|---|---|---|
| **Operating** — §1–5, §7 | **Yes** | entity, systems + credential links, sales-tax / renewal / bookkeeping process, standing quirks |
| **Working context** — §6 | **No — CI-only** | history log, open questions, **outstanding tasks from Julia's last meeting** (live in Double / Ping, linked) |

So volatile things — the latest meeting follow-ups, outstanding tasks — stay in the
CI-only zone and **never** reach the SOP.

**Sources feed the CI file.** What you tell Claude, and what Claude finds in **Ping
Assistant** (emails, phone / Zoom calls, action items) or Double, flows **into this
file**: durable facts go to the Operating zone (and are then proposed for the SOP);
live tasks stay as a pointer to Double / Ping.

**Staying in sync — the guardrail.** The planned `client-intelligence` skill
(IDEA-15 in [`../../BACKLOG.md`](../../BACKLOG.md)) runs a **CI ↔ SOP sync check**: it
compares this file's Operating zone against the SOP and flags drift both ways, and
checks that no CI-only content leaked into the SOP. It **detects and proposes**; a
person approves what actually moves — because "does this belong in the SOP?" is a
judgment call. Run it on demand ("is client X in sync?") and, later, as a weekend
Claude Routine, so nothing ends up in one place and not the other.

**Decided:** the CI file and the SOP are **two separate, interlinked documents** (so
the SOP stays clean), and **no change is ever added to a SOP without Lilian's
approval** — Claude proposes, Lilian decides.

## Keeping Client Intelligence fresh (periodic auto-enrichment)

Decided approach: **the repo is kept warm by a periodic automatic sweep**, not
rebuilt from scratch at every question.

- **Primary — a weekend Claude Routine.** On a schedule (weekends), Claude sweeps the
  connected sources for what's **new since the last run** — Ping Assistant (meetings,
  emails, calls, action items), Double (notes, tasks, activity), QuickBooks — and
  updates each client's CI file with the **durable, non-sensitive** facts (secrets /
  PII stay in Double / Drive, linked). Every auto-added item notes its **source and
  date**, and git makes it reversible.
- **Then it reports, it doesn't decide.** The same run produces the CI↔SOP sync and
  **emails Lilian a report**: what's new in each client's CI, and the items
  **proposed for the SOP**. SOP changes are never applied without her approval.
- **Complement — a freshness check at query time.** When someone asks about a client,
  Claude can still do a quick "anything new since the last sweep?" top-up, so answers
  are current between runs.

**Guardrails.** Scope the sweep to **active clients** (those with CI files / a
priority list), not the whole book, to respect tool budgets (e.g. Odoo's 50 calls /
day). Never commit sensitive data. Note the source of each fact. **Past Claude chat
sessions are not a sweepable source** — only what's written to the repo / Double /
Ping / QuickBooks persists; that is why this file exists.

Built as the scheduled form of the `client-intelligence` skill (IDEA-15), using the
[`automated-email-reports`](../../.claude/skills/automated-email-reports/) playbook
for the email. The exact routine prompt + web-UI setup steps live in
[`automation/weekend-ci-sweep.md`](./automation/weekend-ci-sweep.md).

## What's here

```
client-intelligence/
├── README.md              ← you are here (rules + Clients index)
├── _client-template.md    ← the canonical structure — copy it to start a client
├── automation/
│   └── weekend-ci-sweep.md  ← the Saturday sweep Routine (prompt + web-UI setup)
└── clients/               ← one file per client (see the Clients index above)
    ├── atman-parts.md
    ├── best-broker-realty.md
    ├── ecoorganic-usa.md
    ├── kolo-florida.md
    └── pro-title-agency.md
```

## Clients

| Client | File | Owner | Status |
|---|---|---|---|
| Atman Parts | [`clients/atman-parts.md`](./clients/atman-parts.md) | Lilian | In progress — sales tax next |
| BEST BROKER REALTY LLC | [`clients/best-broker-realty.md`](./clients/best-broker-realty.md) | Lilian | In progress — BTR captured |
| ECOORGANIC USA LLC | [`clients/ecoorganic-usa.md`](./clients/ecoorganic-usa.md) | Lilian | In progress — has a bookkeeping SOP |
| Kolo Florida Inc | [`clients/kolo-florida.md`](./clients/kolo-florida.md) | Lilian | In progress — skeleton only |
| Pro Title Agency | [`clients/pro-title-agency.md`](./clients/pro-title-agency.md) | Lilian | In progress — BTR captured |

## Brand & design

Internal reference documents — no visual output. Not applicable. (If a client
profile is ever turned into a presented document, apply the shared
[`../../brand/`](../../brand/).)

## Skills & tooling

- **Contacts & client systems:** [Double](https://app.doublehq.com) (contacts,
  financials) and Google Drive (the sensitive vault the files link to). Claude
  reads these live when a task needs a value.
- **Feeds:** the [`sop-authoring`](../../.claude/skills/sop-authoring/) skill — a
  client's intelligence is the input when we write that client's SOPs in
  [`../sops/`](../sops/).
- **Proposed engine (not built yet):** a `client-intelligence` skill that (a)
  creates a new client from the template and (b) runs the consistency + gap audit
  the same way in any session. Build it once we have a second client to prove the
  workflow (tracked as **IDEA-15** in [`../../BACKLOG.md`](../../BACKLOG.md)).

## Outputs

The per-client Markdown files in `clients/`, committed here as the firm's durable
client knowledge. Non-sensitive by construction — secrets and personal data stay in
Drive/Double/QuickBooks and are referenced by link.

## Working on this / notes for AI

- **Keep every client file on the template.** Same sections, same order; fill what
  you have, mark the rest `_(pending)_`, never drop a section.
- **Guard consistency actively.** When asked what's missing, audit all of
  `clients/` and report gaps per client (see "Claude keeps it consistent" above).
- **Never commit sensitive data or personal contact details.** Link to Drive/Double
  instead. This file names the client business and non-sensitive operational facts
  only.
- **"Done" for a client** = enough captured that we can write their SOPs without
  going back to ask the basics.
