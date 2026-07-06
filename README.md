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
.mcp.json     MCP integrations available to Claude in this repo (see below).
```

## Projects

| Project | What it is | Status |
|---|---|---|
| [Marketing](./projects/marketing/) | On-brand marketing collateral generated with Claude. | Active |
| [Reasonable Compensation](./projects/reasonable-compensation/) | Defensible S-corp owner-salary analysis + branded reports. | Active |
| [Video Generation](./projects/video-generation/) | On-brand marketing video. | Planning |
| [SOPs](./projects/sops/) | The firm's standard operating procedures. | Planning |

See [`projects/README.md`](./projects/README.md) for the full index and the
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

| Server | What it gives Claude | Package |
|---|---|---|
| `notebooklm` | Ask questions against your [NotebookLM](https://notebooklm.google.com) notebooks, add sources, and generate audio overviews. | [`notebooklm-mcp`](https://github.com/PleasePrompto/notebooklm-mcp) |

**One-time NotebookLM login.** The first time you use it, ask Claude to run the
`setup_auth` tool. It opens a **visible Chrome window** so you can sign in to
your Google account once; the login is then remembered for future sessions. Do
this in **desktop Claude Code** (where a browser can open) rather than the web
app — a headless/remote session has no screen for the login window. No API keys
or passwords are stored in this repo.

## Adding a new project

Copy the template and fill it in — the convention keeps every project consistent:

```bash
cp -r projects/_template projects/<new-name>
```

Full steps in [`projects/README.md`](./projects/README.md). (If you ask Claude to
create one, it follows the same steps automatically — see `CLAUDE.md`.)
