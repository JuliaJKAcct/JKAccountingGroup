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
│   ├── marketing/                 GROUP of the firm's marketing projects — has its own CLAUDE.md persona
│   │   ├── CLAUDE.md              marketing operating-persona (auto-applies to everything below)
│   │   ├── positioning.md         shared offer positioning — the pitch + "what do you do?" (EN/RU)
│   │   ├── collateral/            on-brand marketing collateral (Active)
│   │   ├── email-branding/        team email on the Design System — signatures + email layout (Active)
│   │   ├── video-generation/      on-brand marketing video (Active)
│   │   ├── referral-offer-strategy/  front-offer + referral-partner funnel strategy (Planning)
│   │   └── consultation-booking/  "Book a Consultation" front door — routes new vs existing clients to two Odoo calendars (Active)
│   ├── reasonable-compensation/   S-corp owner-salary analysis + reports (Active)
│   ├── recurring-expense-monitoring/  twice-monthly watch for missed/abnormal client recurring payments (Active)
│   └── sops/                      firm standard operating procedures + client-task runbooks (Active)
├── .claude/
│   └── skills/    reusable Claude workflows (the "engines")
│       ├── reasonable-compensation/   drives the reasonable-comp project
│       ├── video-script-pipeline/     drives the video-generation project
│       ├── recurring-expense-monitoring/  drives the recurring-expense-monitoring project
│       ├── automated-email-reports/   reusable playbook for scheduled email automations
│       ├── email-signature/           drives the email-branding project (signatures + branded email)
│       ├── expenses-report-tie-out/   clean a QB Transaction Detail into an Expenses report that ties to the P&L
│       ├── sop-authoring/             the house way to write/restructure/review an SOP (structure + review workflow + Atlas render)
│       └── impeccable/                general UI/design skill
└── .mcp.json      MCP integrations available to Claude (see README → Integrations)
```

## Where to start for a given request

| The request is about… | Go to |
|---|---|
| Colors, fonts, logo, voice, design tokens | [`brand/`](./brand/) — `JK-Brand-Guide.md` is the authority |
| Any **marketing** work — positioning, offers, campaigns, growth (the marketing operating-persona + the firm's pitch) | [`projects/marketing/`](./projects/marketing/) — [`CLAUDE.md`](./projects/marketing/CLAUDE.md) sets the persona, [`positioning.md`](./projects/marketing/positioning.md) holds the pitch + "what do you do?" |
| Marketing assets (cards, posts, flyers, copy) | [`projects/marketing/collateral/`](./projects/marketing/collateral/) |
| Email signatures, or the on-brand look of outbound email (the whole team) — change a signature, add a teammate, edit the branded email | the [`email-signature` skill](./.claude/skills/email-signature/) → [`projects/marketing/email-branding/`](./projects/marketing/email-branding/); see its `INSTALL-GMAIL.md` to roll one out |
| S-corp reasonable salary / owner comp / a comp report | the [`reasonable-compensation` skill](./.claude/skills/reasonable-compensation/) → outputs to [`projects/reasonable-compensation/reports/`](./projects/reasonable-compensation/reports/) |
| Marketing video / a video script | the [`video-script-pipeline` skill](./.claude/skills/video-script-pipeline/) → outputs to [`projects/marketing/video-generation/scripts/`](./projects/marketing/video-generation/scripts/) |
| Firm procedures / how-we-do-X, and day-to-day client-task runbooks (client onboarding, a Business Tax Receipt filing, sales-tax registration, bookkeeping close…) | [`projects/sops/`](./projects/sops/) — client-specific data stays in your client systems, not the repo. **Writing or restructuring an SOP** goes through the [`sop-authoring` skill](./.claude/skills/sop-authoring/) (the house structure + review workflow) |
| Monitoring a client's recurring monthly payments — did a subscription / insurance / rent charge post this month, is an amount off, did a new recurring charge appear | the [`recurring-expense-monitoring` skill](./.claude/skills/recurring-expense-monitoring/) → per-client watchlists live in Google Drive, not the repo |
| A client wants an **Expenses report** that must match the **P&L**, or the expense totals on two reports don't agree (a "Transaction Detail" doesn't tie to the P&L, payroll/journal-entry lines missing) | the [`expenses-report-tie-out` skill](./.claude/skills/expenses-report-tie-out/) → cleaned `.xlsx` delivered to the user, client figures never committed |
| Automating a report as a scheduled, unattended email (send a report every month / week automatically, no clicks) | the [`automated-email-reports` skill](./.claude/skills/automated-email-reports/) — the setup playbook (Claude Code Routines + the firm's email webhook) |
| Referral partners, the front-offer/diagnostic funnel, or the "Growth Accelerator Series" workshop concept | [`projects/marketing/referral-offer-strategy/`](./projects/marketing/referral-offer-strategy/) |
| A consultation **booking** page, or the "Book a Consultation" calendars — routing new/prospective vs existing clients to different availability (Odoo Appointments; online, EN/RU) | [`projects/marketing/consultation-booking/`](./projects/marketing/consultation-booking/) |
| Capturing a new idea for later, or picking what to work on next | [`BACKLOG.md`](./BACKLOG.md) — the firm's idea parking lot |
| Something new that doesn't fit above | it's probably a **new project** — see below |

Each project has its own `README.md` with the specifics; read it before working
in that folder.

## Core conventions

- **Brand is shared and central.** All visual/branded output pulls from
  [`brand/`](./brand/). Never copy logos or redefine the palette inside a
  project — reference `brand/` instead. When output conflicts with the brand
  guide, follow the guide and say what changed.
- **Design & aesthetics run through the `impeccable` skill — by default, unprompted.**
  Any task where how it *looks* matters — signatures, collateral, reports, slides, web
  pages, diagrams, logos-in-context, layout, typography, color, polish — is done with the
  [`impeccable`](./.claude/skills/impeccable/) skill together with the Design System and
  [`brand/`](./brand/). Don't wait to be asked and don't freehand it; if the work is
  visual/aesthetic, load `impeccable` first. (This is a standing rule so it never has to
  be repeated per task.)
- **Projects are self-contained** and follow one standard shape — see
  [`projects/README.md`](./projects/README.md). Outputs live inside their
  project in an obviously-named folder.
- **Marketing work has an operating persona.** The firm's marketing projects
  are grouped under [`projects/marketing/`](./projects/marketing/); anything in
  that folder carries a senior accounting-industry marketing-strategist persona
  defined in [`projects/marketing/CLAUDE.md`](./projects/marketing/CLAUDE.md),
  which auto-loads for that subtree. The shared offer positioning — the pitch
  and "what do you do?" answer — lives at
  [`projects/marketing/positioning.md`](./projects/marketing/positioning.md).
- **Repeatable workflows are skills — and flag skill-worthy work unprompted.**
  Repeatable workflows live as skills in [`.claude/skills/`](./.claude/skills/), and
  the project README links to the skill that powers it. When a task looks like it will
  recur — a new automation, a multi-step setup we fought through, a process we might
  repeat — **proactively propose capturing it as a skill; don't wait to be asked.** The
  person you're helping may not know a skill is even possible, so naming the opportunity
  is part of the job. Build the skill only once there's a real second use in sight —
  suggest, don't manufacture skills speculatively.
- **Repo artifacts are written in English.** Everything committed — skills, SOPs,
  project docs, templates — is in English so anyone on the team using Claude Code can
  read it, whatever language the chat is in.
- **Reply in the language you're addressed in.** Match the conversation to the
  language of the user's message — Spanish → Spanish, English → English, Russian →
  Russian — and keep using it until they switch or explicitly ask for another
  language. This governs the *chat* only; committed repo artifacts stay in English
  per the rule above.
- **Client data is sensitive.** Reports and anything with client-specific
  figures are committed/pushed only when the user explicitly asks. Client watchlists,
  vendor lists, and dollar figures live in the firm's client systems (Drive / Double /
  QuickBooks), not this repo.
- **Two people work here in parallel — keep `main` and the indexes coherent.**
  Julia and Lilian both drive this repo through Claude, often in separate sessions
  at the same time, so branches and edits collide. Every session: **start from the
  latest `origin/main`** and rebase onto it before pushing (never stack on stale
  history); when a push is rejected or a merge conflicts, resolve by rebasing
  **without clobbering the other person's work** (force-push only history that's
  already merged). **Before you finish, re-check that the navigation maps still
  match reality for anything your session touched** — the actual folders under
  [`projects/`](./projects/) and the
  skills in [`.claude/skills/`](./.claude/skills/) must agree with the index tables
  that describe them: this file's Layout + "Where to start",
  [`README.md`](./README.md), [`projects/README.md`](./projects/README.md), and
  [`projects/marketing/README.md`](./projects/marketing/README.md). Keep
  [`BACKLOG.md`](./BACKLOG.md) internally consistent too (every quick-view row has a
  matching section, IDs unique). Fix broken links, orphaned folders, duplicate or
  missing entries, and status mismatches — or, when a clash is ambiguous, flag it to
  Julia rather than leaving it. A **weekly scheduled audit** (a Claude Routine,
  Monday mornings) sweeps the entire repo for this drift and can also be run on
  demand ("audit the repo") — so a working session only needs to keep the indexes
  right for what it touched, not re-audit the whole repo every time.
- **Session identity is provenance, not a wall.** The whole firm shares one Claude
  Code account, so git alone can't tell whose hands did what. It's one firm with one
  goal — **never partition the repo or the work by person**; Julia and Lilian split
  tasks, not territory. Do track *where work came from*: **Lilian identifies herself
  at the start of her sessions ("I'm Lilian"); Julia doesn't have to** — an
  unidentified session is simply firm work (in practice, usually Julia). When a
  session is Lilian's: address her (not Julia) in conversation, add a
  `Worked-by: Lilian` trailer to that session's commits, and note it on PRs the
  session opens. The point is diagnosis: when parallel sessions unknowingly touch
  the same files and changes contradict each other, the trail shows where each side
  originated so the clash can be untangled quickly.
- **Every PR gets an independent review before merge.** When you open a pull
  request, run an independent review against it first — spawn a review agent, run
  `/code-review`, or rely on the GitHub Action if one is configured — address any
  blocking findings, then merge. Never merge an unreviewed PR.

## Creating a new project (do this exactly, every time)

When asked to add a new project, keep the repo consistent by following these
steps:

1. `cp -r projects/_template projects/<new-name>` (lowercase, hyphenated,
   named for the outcome). A **marketing** project goes under
   `projects/marketing/<new-name>/` instead, so it inherits the marketing
   persona; everything else lives at `projects/<new-name>/`.
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
