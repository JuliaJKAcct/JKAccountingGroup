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
| Secrets & personal data | Logins, passwords, full account numbers, dollar figures, contact names/emails/phones | **Google Drive / Double / QuickBooks** — referenced here by **link**, never pasted |
| **Business EIN** | The entity's own FEI/EIN | **This file** — public on Sunbiz _(Lilian, 2026-08-12)_. An **SSN/ITIN is not**, even when it is the entity's tax ID |

So a client file **describes the process and points to where the sensitive value
lives** (a Drive link, the Double client). Claude can open those links live when a
task actually needs the value — but the value is never committed to the repo.

**Never commit:** passwords/logins, full account or routing numbers, SSNs/ITINs,
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
  emails, calls, action items), Double (notes, tasks, activity, properties), Gmail
  (**incoming and sent**), **Google Drive** (each client's folder), QuickBooks, and the
  repo itself — and updates each client's CI file with the **durable,
  non-sensitive** facts (secrets / PII stay in Double / Drive, linked). It searches by
  **both the business name and each owner's name** (an owner can have several
  businesses, and a meeting titled with a person's name may discuss the business), so a
  client is never missed. Every auto-added item notes its **source and date**, and git
  makes it reversible. The sweep is **incremental**: a committed ledger
  ([`automation/sweep-state.md`](./automation/sweep-state.md)) records the date each
  client is already swept through, and every search is bounded to the baseline date
  and later — history is never re-read, so each weekly run costs only the new days
  per client, however much history accumulates (a newly added client gets one full
  historical pass, then joins the ledger).
- **Then it reports, it doesn't decide.** The same run produces the CI↔SOP sync and
  **emails Lilian a report**: what's new in each client's CI, and the items
  **proposed for the SOP**. SOP changes are never applied without her approval.
- **At query time — ALWAYS sweep live (mandatory; the real-time path Julia & Lilian rely on between weekend runs).**
  When Julia or Lilian asks *anything* about a client — status, "what are we waiting for?",
  "what did we last agree?" — Claude does **not** answer from the CI file alone. It reads the
  file (the map), then runs a **live multi-source sweep at that moment**: Julia's **Gmail**
  (inbox **and** sent), **Ping** (Zoom / meeting summaries + action items), **Double** (notes,
  properties, files, tasks), **Google Drive** (the client's documents), **QuickBooks**, and any
  other connected tool — because the *live* status lives in those systems, not in the file (the
  file deliberately holds no "waiting-for" state). It says where each fact came from and is
  honest when a source has nothing. See the `client-intelligence` skill → "Answering questions
  live" for the exact, required protocol.

**Guardrails.** Scope the sweep to **active clients** (those with CI files / a
priority list), not the whole book, to respect tool budgets (e.g. the Odoo **MCP's**
50 calls / day). Never commit sensitive data. Note the source of each fact. **Past Claude chat
sessions are not a sweepable source** — only what's written to the repo / Double /
Ping / QuickBooks persists; that is why this file exists.

Built as the scheduled form of the `client-intelligence` skill (IDEA-15), using the
[`automated-email-reports`](../../.claude/skills/automated-email-reports/) playbook
for the email. The exact routine prompt + web-UI setup steps live in
[`automation/weekend-ci-sweep.md`](./automation/weekend-ci-sweep.md).

> **The sweep merges its own work (Lilian, 2026-08-11).** It used to stop at a branch and
> wait for a human, and three runs (07-25, 08-01, 08-08) sat unmerged for three weeks that
> way. **Client Intelligence needs no approval** — the sweep commits and merges to `main`
> itself. **SOP changes still wait for Lilian**, queued in
> [`sop-proposals.md`](./sop-proposals.md). And **contradictions are recorded with both
> sources rather than escalated**: whoever next needs that fact explains where each version
> came from, asks then, and updates the file from the answer. See
> [`automation/weekend-ci-sweep.md`](./automation/weekend-ci-sweep.md) → *The approval line*.

## What's here

```
client-intelligence/
├── README.md              ← you are here (rules + Clients index)
├── _client-template.md    ← the canonical structure — copy it to start a client
├── sop-proposals.md       ← the CI→SOP approval queue (Pending → Approved/Applied or Rejected)
├── automation/
│   ├── weekend-ci-sweep.md  ← the Saturday sweep Routine (prompt + web-UI setup)
│   ├── sweep-state.md       ← incremental ledger: how far each client is swept (never re-read history)
│   ├── taxdome-notes-backfill.md ← the migrated TaxDome profile notes — scoped, not started
│   └── email-template.html  ← the on-brand, email-safe report template the routine fills
└── clients/               ← one file per client (37 so far — see the Clients index below)
```

## Clients

| Client | File | Owner | Status |
|---|---|---|---|
| Atman Parts | [`clients/atman-parts.md`](./clients/atman-parts.md) | Lilian | In progress — sales tax next |
| Artur Tseretsian | [`clients/artur-tseretsian.md`](./clients/artur-tseretsian.md) | Lilian | In progress — 1040 Schedule C categorization (2023–2025) |
| Denys Melnyk | [`clients/denys-melnyk.md`](./clients/denys-melnyk.md) | Lilian | In progress — 2025 1040, first year with us. **S-corp shareholder in three trucking entities**, with a large NOL carried forward from 2024. 🔴 **He answered the review on 2026-08-12 and the return is now blocked on one thing:** he worked in only one of the three companies, and holds **no K-1 and no W-2** for the income it paid him — he cannot obtain either, so **the route is a decision for Lilian and Julia, not a question for him** (§5). ⚠️ **Which company it was is itself unconfirmed** — and **the client SAYS that company has filed for bankruptcy** — ⚠️ Lilian does not treat that as reliable, so the public docket has to settle it; **if** true, the K-1 may never exist at all. ⚠️ **There is not a single tax document from ANY of the three.** The disposal question is answered (no sale, still a shareholder, K-1s still owed); the wife's Schedule C, the 1099s and residence are answered (Montana closed); the 1095-A blocker is back to a question. **Two Double notes** — his figures, and a briefing for Julia |
| BEST BROKER REALTY LLC | [`clients/best-broker-realty.md`](./clients/best-broker-realty.md) | Lilian | In progress — BTR captured |
| ECOORGANIC USA LLC | [`clients/ecoorganic-usa.md`](./clients/ecoorganic-usa.md) | Lilian | In progress — has a bookkeeping SOP **and a separate monthly CT sales-tax runbook**; 2025 1120-S in progress, Turo documents outstanding, QuickBooks primary-admin handover paused mid-change (two users on purpose — see §3). 🔴 **New 2026-08-12:** nine months of 2025 with no sales-tax return on file and **two unopened DRS notices** (a proposed assessment goes final if unprotested), and the **basis for filing zero has never been recorded** for a business with revenue |
| Kolo Florida Inc | [`clients/kolo-florida.md`](./clients/kolo-florida.md) | Lilian | ⚠️ **Winding down — company closing, no longer a client** (Lilian, 2026-08-11). July 2026 is the last sales-tax filing; account closures in progress. The owner's individual 1040 engagement is separate and continues |
| Pro Title Agency | [`clients/pro-title-agency.md`](./clients/pro-title-agency.md) | Lilian | In progress — BTR captured |
| NEVER GIVE UP KK LLC | [`clients/never-give-up-kk.md`](./clients/never-give-up-kk.md) | Lilian | In progress — enriched (Double + Gmail) |
| YES TEAM CORP | [`clients/yes-team-corp.md`](./clients/yes-team-corp.md) | Lilian | In progress — enriched (Double + Gmail) |
| MASCIAVE DESIGN STUDIO LLC | [`clients/masciave-design-studio.md`](./clients/masciave-design-studio.md) | Lilian | In progress — enriched (Double + Gmail) |
| iKids Group LLC | [`clients/ikids-group.md`](./clients/ikids-group.md) | Lilian | In progress — enriched (Double + Gmail); **has a bookkeeping SOP** (seed) — the AP mailbox we work monthly + the autopaid water bill |
| Deep Tech Development Group LLC | [`clients/deep-tech-development.md`](./clients/deep-tech-development.md) | Lilian | In progress — enriched (Double + Gmail) |
| AURA REMODELING LLC | [`clients/aura-remodeling.md`](./clients/aura-remodeling.md) | Lilian | In progress — enriched (Double + Gmail) |
| Beemold USA LLC | [`clients/beemold-usa.md`](./clients/beemold-usa.md) | Maria | In progress — Maria's process guide integrated |
| Sunoma Inc | [`clients/sunoma-inc.md`](./clients/sunoma-inc.md) | Maria | In progress — Maria's process guide integrated |
| SENSUSTECH LLC | [`clients/sensustech.md`](./clients/sensustech.md) | Maria | In progress — Maria's process guide integrated |
| Mobilesource Corp | [`clients/mobilesource-corp.md`](./clients/mobilesource-corp.md) | Maria | In progress — Maria's process guide integrated |
| Margate Plumbing Inc | [`clients/margate-plumbing.md`](./clients/margate-plumbing.md) | Maria | In progress — Maria's process guide integrated |
| MAGNUM 152, INC | [`clients/magnum-152.md`](./clients/magnum-152.md) | Maria | In progress — Maria's process guide integrated |
| Andrii Tymchenko | [`clients/andrii-tymchenko.md`](./clients/andrii-tymchenko.md) | Firm | Left the US 2025-05-31 → **1040-NR (MFS)**; dormant company; a 1095-A requested against Medicaid cover |
| MAYS EXPRESS SERVICE LLC | [`clients/mays-express.md`](./clients/mays-express.md) | Firm | **Former** — business closed 2025-12-31. FDOR account closure **refused and unresolved**; note **491838** |
| MEGABAI | [`clients/megabai.md`](./clients/megabai.md) | Firm | **Former** — company closed, **no Double account**, so no case note. Reemployment-tax closure unconfirmed |
| VOICECAPITAL INC | [`clients/voicecapital.md`](./clients/voicecapital.md) | Firm | **IRS has no S-election** — C-corp to them; 2023 return unprocessed; note **491840** |
| VOXAGO LLC | [`clients/voxago.md`](./clients/voxago.md) | Firm | FDOR review open — late 2024 periods, **court fees**, annual report; note **491841** |
| YMI TRUCKING LLC | [`clients/ymi-trucking.md`](./clients/ymi-trucking.md) | Firm | An unexplained 7004 filing + **IRS address in the wrong state**; note **491842** |
| ZETECH LLC | [`clients/zetech.md`](./clients/zetech.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| OPTIC GOLD INC | [`clients/optic-gold.md`](./clients/optic-gold.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| ONETWO STRATEGIES INC | [`clients/onetwo-strategies.md`](./clients/onetwo-strategies.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| Greenair International LLC | [`clients/greenair-international.md`](./clients/greenair-international.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| CANDRAMAS LLC | [`clients/candramas.md`](./clients/candramas.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| AXDIGITAL LLC | [`clients/axdigital.md`](./clients/axdigital.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| Airtouch LLC | [`clients/airtouch.md`](./clients/airtouch.md) | Liudmyla | ⚠️ **Seed (2026-08-11)** — Double properties only; owes a full first sweep |
| LUMETRO LLC | [`clients/lumetro.md`](./clients/lumetro.md) | Maria | In progress — enriched |
| Ecom Beavers LLC | [`clients/ecom-beavers.md`](./clients/ecom-beavers.md) | Maria | In progress — enriched |
| Ihor Naum & Olha Levchuk | [`clients/ihor-naum-olha-levchuk.md`](./clients/ihor-naum-olha-levchuk.md) | Lilian | In progress — 1040 filed; Form 8802 pending at the IRS |
| GOSSIP MIAMI LLC | [`clients/gossip-miami.md`](./clients/gossip-miami.md) | Lilian | In progress — tax-prep only; financial-statement cleanup quoted separately and under way. ⚠️ **The business has been SOLD** — nothing about the sale documented, and a **2025 1099-NEC is likely owed** (payee classification unconfirmed) with no W-9 (live status in §6) |
| Tsminibears LLC | [`clients/tsminibears.md`](./clients/tsminibears.md) | Maria | **Former** — archived in Double 2026-06-08; Florida RT penalty matter **open**. Closing the account is dead; the plan is to ask the DOR to **move the effective date** — **on the call**, since a third agent said it can be done and asked for no documentation; a written request (with a **reasonable-cause penalty waiver** as its alternative ask) is only the fallback. **⏳ Waiting on the POA — the 08-04 send never arrived, re-sent 2026-08-06 to `AcctMaint@floridarevenue.com` — then Lilian calls** |

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
- **The engine:** the [`client-intelligence`](../../.claude/skills/client-intelligence/)
  skill — the house way to create a client file from the template, run the research
  sweep (Ping / Double / Gmail / Drive / QuickBooks; sweep by owner, assign by
  company/person), run the consistency + gap audit, keep the client ↔ SOP link in sync,
  and answer live questions about a client. Built v1 Jul 2026 (IDEA-15); improved over
  time.
- **The review page:** a browsable, on-brand dashboard of every client is generated by
  the skill's render engine
  ([`render/build.mjs`](../../.claude/skills/client-intelligence/render/)) and published
  as a private Artifact for review — grouped by owner, with services, systems, quirks,
  open items, and a "how to get sensitive data live" panel. Regenerate + republish when
  files change.

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
