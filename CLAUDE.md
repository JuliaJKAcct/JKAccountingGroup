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
├── brand/         SHARED foundation: logo, brand guide, design system.
│                  Used by every project. Never duplicate this into a project.
├── projects/      one folder per initiative (see projects/README.md)
│   ├── _template/                 copy this to start a new project
│   ├── marketing/                 on-brand marketing collateral (Active)
│   ├── reasonable-compensation/   S-corp owner-salary analysis + reports (Active)
│   ├── video-generation/          on-brand marketing video (Planning)
│   └── sops/                      firm standard operating procedures (Planning)
└── .claude/
    └── skills/    reusable Claude workflows (the "engines")
        ├── reasonable-compensation/   drives the reasonable-comp project
        └── impeccable/                general UI/design skill
```

## Where to start for a given request

| The request is about… | Go to |
|---|---|
| Colors, fonts, logo, voice, design tokens | [`brand/`](./brand/) — `JK-Brand-Guide.md` is the authority |
| Marketing assets (cards, posts, flyers, copy) | [`projects/marketing/`](./projects/marketing/) |
| S-corp reasonable salary / owner comp / a comp report | the [`reasonable-compensation` skill](./.claude/skills/reasonable-compensation/) → outputs to [`projects/reasonable-compensation/reports/`](./projects/reasonable-compensation/reports/) |
| Marketing video | [`projects/video-generation/`](./projects/video-generation/) (planning) |
| Firm procedures / how-we-do-X | [`projects/sops/`](./projects/sops/) (planning) |
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
- **Client data is sensitive.** Reports and anything with client-specific
  figures are committed/pushed only when the user explicitly asks.

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
