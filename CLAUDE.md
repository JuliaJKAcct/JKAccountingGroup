# CLAUDE.md — how to navigate this repo

This is the **JK Accounting Group** working repository. It is a **monorepo of
projects** for a boutique, founder-led US accounting firm (Miami · Fort
Lauderdale · online) serving Ukrainian- and Russian-speaking business owners in
the US.

> **Important mental model:** this repo is **not** a marketing repo. Marketing is
> just one project inside it. The repo holds many kinds of work for the firm —
> some marketing, much of it not (e.g. tax/accounting tooling like the
> reasonable-compensation analysis). Don't assume a request is about marketing.

## Layout

```
/
├── README.md      human-facing overview + project index
├── CLAUDE.md      you are here — the navigation map
├── BACKLOG.md     firm idea parking lot — captured ideas we'll build later
├── brand/         SHARED foundation: logo, brand guide, design system.
│                  Used by every project. Never duplicate this into a project.
├── projects/      one folder per initiative (see projects/README.md)
│   ├── _template/                 copy this to start a new project
│   ├── marketing/                 on-brand marketing collateral (Active)
│   ├── reasonable-compensation/   S-corp owner-salary analysis + reports (Active)
│   ├── video-generation/          on-brand marketing video (Active)
│   ├── recurring-expense-monitoring/  twice-monthly watch for missed/abnormal client recurring payments (Active)
│   └── sops/                      firm standard operating procedures + client-task runbooks (Active)
├── .claude/
│   └── skills/    reusable Claude workflows (the "engines")
│       ├── reasonable-compensation/   drives the reasonable-comp project
│       ├── video-script-pipeline/     drives the video-generation project
│       ├── recurring-expense-monitoring/  drives the recurring-expense-monitoring project
│       ├── automated-email-reports/   reusable playbook for scheduled email automations
│       └── impeccable/                general UI/design skill
└── .mcp.json      MCP integrations available to Claude (see README → Integrations)
```

## Where to start for a given request

| The request is about… | Go to |
|---|---|
| Colors, fonts, logo, voice, design tokens | [`brand/`](./brand/) — `JK-Brand-Guide.md` is the authority |
| Marketing assets (cards, posts, flyers, copy) | [`projects/marketing/`](./projects/marketing/) |
| S-corp reasonable salary / owner comp / a comp report | the [`reasonable-compensation` skill](./.claude/skills/reasonable-compensation/) → outputs to [`projects/reasonable-compensation/reports/`](./projects/reasonable-compensation/reports/) |
| Marketing video / a video script | the [`video-script-pipeline` skill](./.claude/skills/video-script-pipeline/) → outputs to [`projects/video-generation/scripts/`](./projects/video-generation/scripts/) |
| Firm procedures / how-we-do-X, and day-to-day client-task runbooks (client onboarding, a Business Tax Receipt filing, sales-tax registration, bookkeeping close…) | [`projects/sops/`](./projects/sops/) — client-specific data stays in your client systems, not the repo |
| Monitoring a client's recurring monthly payments — did a subscription / insurance / rent charge post this month, is an amount off, did a new recurring charge appear | the [`recurring-expense-monitoring` skill](./.claude/skills/recurring-expense-monitoring/) → per-client watchlists live in Google Drive, not the repo |
| Automating a report as a scheduled, unattended email (send a report every month / week automatically, no clicks) | the [`automated-email-reports` skill](./.claude/skills/automated-email-reports/) — the setup playbook (Claude Code Routines + the firm's email webhook) |
| Capturing a new idea for later, or picking what to work on next | [`BACKLOG.md`](./BACKLOG.md) — the firm's idea parking lot |
| Something new that doesn't fit above | it's probably a **new project** — see below |

Each project has its own `README.md` with the specifics; read it before working
in that folder.

## Core conventions

- **Brand is shared and central.** All visual/branded output pulls from
  [`brand/`](./brand/). Never copy logos or redefine the palette inside a
  project — reference `brand/` instead. When output conflicts with the brand
  guide, follow the guide and say what changed.
- **Projects are self-contained** and follow one standard shape — see
  [`projects/README.md`](./projects/README.md). Outputs live inside their
  project in an obviously-named folder.
- **Repeatable workflows are skills** in [`.claude/skills/`](./.claude/skills/);
  the project README links to the skill that powers it.
- **Repo artifacts are written in English.** Everything committed — skills, SOPs,
  project docs, templates — is in English so anyone on the team using Claude Code can
  read it, whatever language the chat is in.
- **Client data is sensitive.** Reports and anything with client-specific
  figures are committed/pushed only when the user explicitly asks. Client watchlists,
  vendor lists, and dollar figures live in the firm's client systems (Drive / Double /
  QuickBooks), not this repo.
- **Before you finish, check structure and indexes.** Confirm files landed in the
  right folders and that the index tables (this file's Layout + "Where to start", and
  `projects/README.md`) reflect the change.
- **Every PR gets an independent review before merge.** When you open a pull
  request, run an independent review against it first — spawn a review agent, run
  `/code-review`, or rely on the GitHub Action if one is configured — address any
  blocking findings, then merge. Never merge an unreviewed PR.

## Creating a new project (do this exactly, every time)

When asked to add a new project, keep the repo consistent by following these
steps:

1. `cp -r projects/_template projects/<new-name>` (lowercase, hyphenated,
   named for the outcome).
2. Fill in `projects/<new-name>/README.md` using the template's standard
   sections (Status line, Purpose, What's here, Brand & design, Skills &
   tooling, Outputs, Working on this).
3. Add a row to the **Index** table in
   [`projects/README.md`](./projects/README.md).
4. Add the project to the **Layout** tree and the **Where to start** table in
   this file.
5. If the project needs a repeatable Claude workflow, create it as a skill in
   [`.claude/skills/`](./.claude/skills/) and link it from the project README.

The goal: a project created tomorrow looks and reads exactly like the ones here.
