# JK Accounting Group

The working repository for **JK Accounting Group** — a boutique, founder-led US
accounting firm (Miami · Fort Lauderdale · online) serving Ukrainian- and
Russian-speaking business owners in the US.

This is a **monorepo of projects**, not a single-purpose repo. Marketing is one
project inside it; the repo also holds tax/accounting tooling and firm operations
work, with more to come.

> Working here with Claude? Start with [`CLAUDE.md`](./CLAUDE.md) — the
> navigation map.

## What's inside

```
brand/        Shared brand foundation — logo, brand guide, design system.
              Used by every project.
projects/     One folder per initiative (marketing, reasonable-compensation, …).
.claude/      Reusable Claude skills that power the projects.
BACKLOG.md    Firm idea parking lot — ideas captured now to build later.
FOLLOW-UPS.md Open loops — started work waiting for a second pass (on-demand, per-person).
.mcp.json     MCP integrations available to Claude in this repo (see below).
```

## Projects

| Project | What it is | Status |
|---|---|---|
| [Marketing · Collateral](./projects/marketing/collateral/) | On-brand marketing collateral generated with Claude. | Active |
| [Marketing · Email Branding](./projects/marketing/email-branding/) | Every team member's outbound email on the Design System — email-safe HTML signatures + a branded email layout. | Active |
| [Marketing · Video Generation](./projects/marketing/video-generation/) | On-brand marketing video. | Active |
| [Marketing · Referral & Offer Strategy](./projects/marketing/referral-offer-strategy/) | Front-offer and referral-partner funnel strategy — the paid diagnostic, partner pitches, and the "Growth Accelerator Series." | Planning |
| [Marketing · Consultation Booking](./projects/marketing/consultation-booking/) | The "Book a Consultation" front door — routes new vs existing clients to two Odoo Appointments calendars with different availability. Online, EN/RU. | Active |
| [Marketing · Scale Your Accounting Firm](./projects/marketing/scale-your-accounting-firm/) | Digested notes from the "Scale Your Accounting Firm" advisory program, by track/module/video, feeding into JK's marketing strategy. | Active |
| [Marketing · Lead Magnets](./projects/marketing/lead-magnets/) | Free interactive calculators + assessments for foreign-owned business founders — the marketing funnel's entry point. | Active |
| [Reasonable Compensation](./projects/reasonable-compensation/) | Defensible S-corp owner-salary analysis + branded reports. | Active |
| [Recurring-Expense Monitoring](./projects/recurring-expense-monitoring/) | Twice-monthly watch over each client's recurring payments; flags missed or abnormal charges and emails an exception report. | Active |
| [Proposal & Engagement-Letter Tool](./projects/proposal-tool/) | In-house GoProposal replacement — generates on-brand monthly proposals, tax-prep engagement letters, and a T&C addendum from the firm's pricing logic. | Active |
| [SOPs](./projects/sops/) | The firm's standard operating procedures. | Active |

The seven **Marketing** rows are one group under
[`projects/marketing/`](./projects/marketing/), which also holds the firm's
shared offer positioning and the marketing operating-persona for Claude. See
[`projects/README.md`](./projects/README.md) for the full index and the
standard every project follows.

## The brand

All visual and verbal identity lives once in [`brand/`](./brand/) and is shared
across projects — colors, typography, the logo pack, voice, and the production
design system. When anything branded conflicts with
[`brand/JK-Brand-Guide.md`](./brand/JK-Brand-Guide.md), that guide wins.

## Integrations (MCP)

Claude in this repo can connect to external tools through **MCP servers**,
declared in [`.mcp.json`](./.mcp.json). Open a Claude Code session here and
approve the server when prompted.

| Server | What it gives Claude | Package (pinned) |
|---|---|---|
| `notebooklm` | Ask questions against your [NotebookLM](https://notebooklm.google.com) notebooks, add sources, and generate audio overviews. | [`notebooklm-mcp@2.0.0`](https://github.com/PleasePrompto/notebooklm-mcp) |
| `Odoo_JK_Accounting_Group` | Read/write the firm's Odoo ERP — journal entries, invoices/bills, payments, contacts, reconciliation, accounting reports. | **Account connector** — not in `.mcp.json` |

**The Odoo connector is account-level, and rationed.** It's connected through Claude's
connectors (shared across the firm's one account), not declared in `.mcp.json`, so it won't
appear in a `.mcp.json` review. The free plan is capped at **50 tool calls per 24 hours,
shared by everyone.** Anyone using it should follow the [`odoo-mcp`
skill](./.claude/skills/odoo-mcp/) — Claude loads it when it recognizes Odoo work, and the
always-on standing rule in [`CLAUDE.md`](./CLAUDE.md) enforces the budget regardless — which
covers the call budget, the chatter audit-log convention, and the write-safety rules.

**One-time NotebookLM login.** The first time you use it, ask Claude to run the
`setup_auth` tool. It opens a **visible Chrome window** so you can sign in to
your Google account once; the login is then remembered for future sessions. Do
this in **desktop Claude Code** (where a browser can open) rather than the web
app — a headless/remote session has no screen for the login window. No API keys
or passwords are stored in this repo.

**Version is pinned on purpose.** `.mcp.json` pins `notebooklm-mcp@2.0.0` (a
reviewed release) instead of `@latest`, so the code never changes underneath us.
To update: ask Claude to check for a newer version, review it for safety, and
only then bump the pin — never auto-update a package that touches Google login
and client-adjacent data.

**Handle client data with care.** Anything sent to NotebookLM goes to Google.
Use a **dedicated** Google account (not the firm's primary one), and don't put
identifiable client data into NotebookLM without a Workspace/Enterprise plan and
the appropriate data agreement.

## Adding a new project

Copy the template and fill it in — the convention keeps every project consistent:

```bash
cp -r projects/_template projects/<new-name>
```

Full steps in [`projects/README.md`](./projects/README.md). (If you ask Claude to
create one, it follows the same steps automatically — see `CLAUDE.md`.)
