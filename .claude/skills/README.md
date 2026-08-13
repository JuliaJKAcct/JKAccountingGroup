# Skills index — everything we've already built

This is the **canonical list of every Claude skill in this repo**. Its job is to answer,
at a glance, *"do we already have a skill for this?"* — so we **feed and improve** an
existing skill instead of quietly building a second one that does the same thing.

**How to use it**
- Ask any session *"¿tenemos un skill para X?" / "what skills do we have?"* and it answers
  from this list.
- Before proposing or creating a **new** skill, a session checks here first. If one already
  covers the topic, it says so plainly — *"ya tenemos un skill para eso"* — and offers to
  **enrich that skill** with the new information rather than duplicate it.
- When a conversation surfaces a rule, preference, or lesson that belongs in an existing
  skill, that's a cue to update the skill (each skill ends with an "update this skill when…"
  note).

Each skill lives in `.claude/skills/<name>/SKILL.md`; open that file for the full detail.
The one-liners below are just the "when to reach for it."

## Bookkeeping & accounting

| Skill | Reach for it when… |
|---|---|
| [`bookkeeping-sop`](./bookkeeping-sop/) | Writing/updating a **per-client monthly-bookkeeping runbook** — categorization rules, chart-of-accounts conventions, the 1099 process, the reviewer checklist — and how it should look in the Hub. *(Builds on `sop-authoring`, feeds `knowledge-hub`. Ecoorganic is the pilot.)* |
| [`bookkeeping-kpis`](./bookkeeping-kpis/) | Building/updating an on-brand, dynamic **bookkeeping-performance dashboard** for a client — headline numbers, a health score, ranked signals & alerts, expense + revenue-vs-net charts, a balance-sheet snapshot — and the all-clients board. *(Always via `impeccable` + the Design System; real client figures never committed. Ecoorganic is the pilot.)* |
| [`reasonable-compensation`](./reasonable-compensation/) | Determining/justifying an **S-corp owner's reasonable salary** and producing the branded, print-ready report. |
| [`expenses-report-tie-out`](./expenses-report-tie-out/) | Turning a QuickBooks **Transaction Detail into an Expenses report that ties to the P&L** (or diagnosing why two reports don't agree). |
| [`recurring-expense-monitoring`](./recurring-expense-monitoring/) | The mid-month / month-end check that a client's **recurring monthly payments** actually posted — flagging missing, abnormal, or newly-appeared charges. |
| [`organizer-review`](./organizer-review/) | **The pre-return review companion — Lilian's "tax preparer"** (it never files anything). Reviewing **one client before their return is started** — reconciling everything the firm holds — the client file, Double notes/files/properties, **Julia's Gmail, Google Drive, Ping**, the organizer and the prior-year return — and turning it into **one grouped list of questions to send back**. Encodes the fixed output shape (a prior-year → this-year comparison table, findings grouped by root cause, a "we already have this — don't ask" guard, the client question list), the six detection families, and the carryover block when the prior year was prepared elsewhere. *(Sits under [`tax-season-readiness`](./tax-season-readiness/), which answers **who** is ready. Delivered in chat — never an artifact, never committed.)* |
| [`tax-season-readiness`](./tax-season-readiness/) | Working out **which clients we can prepare a return for and which are still pending** — who is actually owed an organizer (bookkeeping and Sch C clients are not), what gates each return (a company return runs off its books and feeds the owner's 1040 via K-1, not the reverse), Double's Tax Return / Organizer Status columns, and the legacy TaxDome organizer folders. *(Read-only: those columns are hand-maintained by Lilian. The client list is delivered, never committed.)* |

## Proposals & client documents

| Skill | Reach for it when… |
|---|---|
| [`proposal-generator`](./proposal-generator/) | Creating a client-ready **proposal or engagement letter** — the in-house GoProposal replacement. Business tax-prep engagement letters go through the **interactive generator tool** (starts blank, validates every field); also covers the individual (1040) letter and the monthly-retainer proposal (one bundled fee, bilingual RU/EN, e-signature). Also **what a proposal excludes** — financial-statement (P&L) prep is quoted outside the proposal, as its own invoice. *(Encodes the per-client field list + auto-derived return/Form-8879/due-date logic; client data never committed.)* |

## SOPs & firm knowledge

| Skill | Reach for it when… |
|---|---|
| [`sop-authoring`](./sop-authoring/) | Writing, restructuring, or reviewing **any firm SOP** the house way — the required structure, the review workflow, and the Atlas render. |
| [`client-portal-guides`](./client-portal-guides/) | A client **doesn't know how to do something in the Double portal** and needs step-by-step instructions **with images** — log in, send us a document, ask us something. Produces the one-page visual guide (EN + RU), the PDF/PNG for email or WhatsApp, the message copy, and the SOP behind them. *(House rule: portal screens are **recreated in HTML/CSS**, never shipped as raw screenshots. Builds on `sop-authoring` + `impeccable`, feeds `knowledge-hub`.)* |
| [`client-intelligence`](./client-intelligence/) | Building, enriching, or auditing the **per-client knowledge files**, and rendering the client review dashboard. *(Feeds the client's SOPs.)* |
| [`knowledge-hub`](./knowledge-hub/) | Building or extending the **firm Knowledge Hub** — the one on-brand page indexing every SOP, client + Lilian's Notebook, its in-page reader, and tools like the Chart-of-Accounts builder. *(Reuses the `client-intelligence` engine.)* |
| [`lilian-notebook`](./lilian-notebook/) | Writing or looking up a **lesson learned the hard way** in Lilian's Notebook — when she asks (*"anota esto en mi libreta"*), or to answer what a note already says. 🛑 **Never propose one unprompted** — Lilian ruled that out on 2026-08-13; she asks, or it doesn't happen. *(Lilian's personal record; a lesson, not a task — tasks go in `FOLLOW-UPS.md`.)* |

## Marketing & content

| Skill | Reach for it when… |
|---|---|
| [`social-media-posts`](./social-media-posts/) | Planning, writing, or reviewing an **Instagram / Facebook post**, carousel, Story, Reel caption, content plan, or the profile bio. Carries the firm's social content rules — the three pillars (expertise · personality · proof), the **50/20/20/10 monthly mix**, one named action per post, 3–4 posts a week over bursts, and the **client-confidentiality limits on publishing results**. *(Rules live in [`projects/marketing/social-content-playbook.md`](../../projects/marketing/social-content-playbook.md); production route in `collateral/social-post-workflow.md`.)* |
| [`video-script-pipeline`](./video-script-pipeline/) | Turning a topic into an **on-brand marketing-video script** + an ElevenLabs production brief. *(A Reel still takes its pillar, mix slot and CTA from `social-media-posts`.)* |
| [`email-signature`](./email-signature/) | Creating, updating, or rolling out the **firm email signature** and the branded-email template. |

## Design

| Skill | Reach for it when… |
|---|---|
| [`impeccable`](./impeccable/) | **Any work where how it looks matters** — design, redesign, polish, audit, layout, color, typography, motion. Load it for all visual/UI work, by default. |

## Automation & integrations

| Skill | Reach for it when… |
|---|---|
| [`automated-email-reports`](./automated-email-reports/) | Setting up a **scheduled, unattended recurring email report** (no clicks) — Claude Code Routines + the firm's email webhook. |
| [`odoo-mcp`](./odoo-mcp/) | **Any read/write in Odoo** — through the MCP connector or Odoo's own API. Load it *before the first Odoo call* (where the 50-call/day cap comes from, the chatter audit-log convention, the **write-safety layers** (six by design; Layer 1 waived, the rest enforced in code by `tools/odoo-api/` — the file tags each), and the step-by-step for the **direct-API connection** that removes the cap). |
| [`double-mcp`](./double-mcp/) | **Any read/write in Double** through the MCP — load it *before the first Double call*. The five data planes (client record vs properties vs tax projects vs organizers vs file library), the TaxDome-migration folder conventions, the audited **capability map** (`references/capability-map.md`) that answers "can we do X in Double?" — including what is read-only (tax-return deadlines) and what is blocked (organizer publishing, loan tools) — the **organizer-response rule** (§2.2 — readable for analysis since Aug 2026; the identity block never written out, and the session gets deleted afterwards), write-safety + the file-ID two-space trap, roster-sweep efficiency, and the **case-note convention** (§7 — the one running note per case that the team reads, updated in place, never duplicated). Carries `references/capability-map.md` (every tool, audited) and `references/note-size-limit-support-request.md` (the drafted request about the ~8,000-character note-body 403). |

---

**Keep this index in sync.** When a skill is added, renamed, or removed, update this table in
the same change (it's part of the [`CLAUDE.md`](../../CLAUDE.md) nav-map coherence check, and
the weekly repo audit sweeps it). This file and the `.claude/skills/` folder must always
agree.
