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
├── FOLLOW-UPS.md  open loops — started work waiting for a second pass (on-demand, per-person; NOT future ideas)
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
│   │   ├── consultation-booking/  the booking front door — free 10-min phone discovery call vs paid $150 consultation, on two Odoo calendars (Active)
│   │   ├── scale-your-accounting-firm/  digested notes from the "Scale Your Accounting Firm" course, by track/module/video (Active)
│   │   └── lead-magnets/          free interactive calculators + assessments — the funnel's entry point (Active)
│   ├── pre-return-review/         the firm's ANALYSIS COMPANION (Lilian's "tax preparer") — its purpose,
│   │                              and method.md: how we analyse ANYTHING, not just organizers (Active)
│   ├── reasonable-compensation/   S-corp owner-salary analysis + reports (Active)
│   ├── recurring-expense-monitoring/  twice-monthly watch for missed/abnormal client recurring payments (Active)
│   ├── proposal-tool/             in-house GoProposal alternative — branded proposals + engagement letters (Active)
│   ├── sops/                      firm standard operating procedures + client-task runbooks (Active)
│   ├── client-intelligence/       per-client knowledge base (one file per client) — the raw material for each client's SOPs (Active)
│   ├── knowledge-hub/             one on-brand, searchable index page over all SOPs, clients, Lilian's Notebook + downloadable templates, generated from the repo (Active)
│   ├── bookkeeping-kpis/          on-brand, dynamic per-client bookkeeping-performance dashboards (KPIs) → an all-clients board; sample template committed, real client figures never (Active)
│   └── lilian-notebook/           LILIAN'S personal notebook — the firm's hard knowledge (how a system behaves, what it costs, how to do a procedure), each written as the rule for next time; DELIBERATELY SMALL; one searchable page she has bookmarked (Active)
├── tools/         executable tooling (not docs) — code that DOES something
│   └── odoo-api/  safe hands for Odoo's direct API: dry-run by default, snapshot-before-write,
│                  deny-list in code, canary check, versioned snapshots + append-only audit ledger
├── .claude/
│   ├── settings.json  registers the hooks below
│   ├── hooks/     the PARALLEL-WORK SAFETY NET — see hooks/README.md for the why
│   │   ├── session-start.sh            on session start: which Odoo route this session
│   │   │                               holds, what just landed on main + which
│   │   │                               unmerged branches other sessions have in flight
│   │   └── pre-commit-drift-check.sh   on `git commit`: warns if main moved under you
│   └── skills/    reusable Claude workflows (the "engines")
│       ├── README.md                  the SKILLS INDEX — the canonical list of every skill ("do we already have one for this?")
│       ├── reasonable-compensation/   drives the reasonable-comp project
│       ├── video-script-pipeline/     drives the video-generation project
│       ├── recurring-expense-monitoring/  drives the recurring-expense-monitoring project
│       ├── automated-email-reports/   reusable playbook for scheduled email automations
│       ├── email-signature/           drives the email-branding project (signatures + branded email)
│       ├── expenses-report-tie-out/   clean a QB Transaction Detail into an Expenses report that ties to the P&L
│       ├── organizer-review/          the PRE-RETURN REVIEW COMPANION (Lilian's "tax preparer") — reads all nine sources on a client before their return — vs. the prior year, the notes and the files; outputs the grouped question list for the client
│       ├── tax-season-readiness/      which clients are ready to have taxes prepared vs still pending — reads Double's Tax Return / Organizer Status + the legacy TaxDome organizer folders (read-only)
│       ├── sop-authoring/             the house way to write/restructure/review an SOP (structure + review workflow + Atlas render)
│       ├── client-portal-guides/      illustrated client how-tos for the Double portal — the one-page visual guide (EN/RU), PDF/PNG, message copy + the SOP; screens are recreated in HTML/CSS, never screenshotted
│       ├── bookkeeping-sop/           per-client monthly-bookkeeping runbooks — the .md structure, the firm's categorization framework + color model, how they render in the Hub (Ecoorganic is the pilot)
│       ├── odoo-mcp/                  operating guide for the Odoo MCP — 50-call/day budget, chatter audit log, write-safety rules
│       ├── double-mcp/                operating guide for the Double MCP — the five data planes, TaxDome folder conventions, the audited capability map ("can we do X?"), write safety, the case-note convention
│       ├── client-intelligence/       creates/enriches/audits the per-client files + renders the review dashboard (Atlas); sweep by owner, assign by company
│       ├── knowledge-hub/             builds/extends the firm Knowledge Hub (the one page indexing all SOPs, clients + Lilian's Notebook) — preferences, curation rules, verify-before-publish gate
│       ├── bookkeeping-kpis/           drives the bookkeeping-KPIs project — on-brand dynamic per-client performance dashboards; impeccable + Design System; real client figures never committed
│       ├── lilian-notebook/            drives Lilian's Notebook — capture a lesson (PROPOSE it unprompted), the entry structure, what belongs there vs. a skill/SOP/client file, build + publish
│       ├── proposal-generator/         drives the proposal-tool project — client-ready proposals + engagement letters (the interactive business tax-prep generator, per-client fields, client data never committed)
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
| A client **proposal** or **engagement letter** — a monthly-retainer proposal, a business tax-prep engagement letter (the interactive generator), a 1040 letter, or the T&C addendum (the in-house GoProposal replacement) | the [`proposal-generator` skill](./.claude/skills/proposal-generator/) → [`projects/proposal-tool/`](./projects/proposal-tool/) — read its [`docs/methodology.md`](./projects/proposal-tool/docs/methodology.md) first; client figures stay out of the repo |
| Marketing video / a video script | the [`video-script-pipeline` skill](./.claude/skills/video-script-pipeline/) → outputs to [`projects/marketing/video-generation/scripts/`](./projects/marketing/video-generation/scripts/) |
| Firm procedures / how-we-do-X, and day-to-day client-task runbooks (client onboarding, a Business Tax Receipt filing, sales-tax registration, bookkeeping close…) | [`projects/sops/`](./projects/sops/) — client-specific data stays in your client systems, not the repo. **Writing or restructuring an SOP** goes through the [`sop-authoring` skill](./.claude/skills/sop-authoring/) (the house structure + review workflow) |
| A **client can't work the Double portal** — "how do I log in?", "where do I send you my bank details / this document?" — or someone asks for **step-by-step instructions with images** to send a client | the [`client-portal-guides` skill](./.claude/skills/client-portal-guides/) → [`projects/sops/client-guides/`](./projects/sops/client-guides/) + the SOP in [`projects/sops/`](./projects/sops/). Produces the one-page visual guide (EN + RU), the PDF for email and the PNG for WhatsApp, the message copy, and the SOP behind them. The portal screens are **recreated in HTML/CSS, never shipped as raw screenshots** (self-contained, on brand, our teal markers on Double's bronze buttons); the marked-up phone captures stay in `client-guides/reference/` as the drawing reference. Two guides exist: **first login** and **sending us information ("Qs for us")** |
| A **per-client monthly-bookkeeping runbook** — categorization rules, chart-of-accounts conventions, the 1099 process, the reviewer checklist (e.g. Ecoorganic) — or how it should look in the Hub | the [`bookkeeping-sop` skill](./.claude/skills/bookkeeping-sop/) → [`projects/sops/`](./projects/sops/) `*-bookkeeping-review.md`. Encodes the two-layer rule (the `.md` keeps max detail; the Hub is the curated visual view), the required `.md` structure, the firm's categorization framework + color model, and how it renders (via the [`knowledge-hub` skill](./.claude/skills/knowledge-hub/)) |
| Building up what we know about a **specific client** before (or while) writing their SOPs — their obligations, systems, recurring processes, "client intelligence" — captured gradually, one file per client; also **auditing** the files, **sweeping** the sources to enrich them, or **reviewing** them on the on-brand dashboard | the [`client-intelligence` skill](./.claude/skills/client-intelligence/) → [`projects/client-intelligence/`](./projects/client-intelligence/) — same structure for every client; non-sensitive knowledge lives in the repo, secrets and personal data stay in Drive/Double and are referenced by link. Feeds [`projects/sops/`](./projects/sops/) |
| Finding **which SOPs / clients we already have**, an index or "table of contents" of the firm's know-how, a shareable page to browse everything the team has documented, or **building/extending the Hub itself** (what it shows, the in-page reader, a tool, curation, publishing the link) | the [`knowledge-hub` skill](./.claude/skills/knowledge-hub/) → [`projects/knowledge-hub/`](./projects/knowledge-hub/) — one on-brand, self-contained page generated from `sops/` + `client-intelligence/` + `lilian-notebook/` (run `build-hub.mjs`); never hand-edit `index.html`. The skill holds the preferences, curation rules, and the verify-before-publish gate. Complements the [`client-intelligence`](./.claude/skills/client-intelligence/) skill's deep per-client review dashboard (the Hub is the firm-wide table of contents; that dashboard is the detailed client-review view) |
| A client's **bookkeeping KPIs / performance** — a dashboard of how a bookkeeping client's books look (health score, ranked signals & alerts, expense + revenue-vs-net charts, balance-sheet snapshot), or the board that lists all bookkeeping clients | the [`bookkeeping-kpis` skill](./.claude/skills/bookkeeping-kpis/) → [`projects/bookkeeping-kpis/`](./projects/bookkeeping-kpis/) — on-brand, dynamic, self-contained pages built with the [`impeccable`](./.claude/skills/impeccable/) skill + the Design System. Only the sample-data template is committed; a real client's figures ship as an artifact, never in the repo (Ecoorganic is the pilot) |
| Monitoring a client's recurring monthly payments — did a subscription / insurance / rent charge post this month, is an amount off, did a new recurring charge appear | the [`recurring-expense-monitoring` skill](./.claude/skills/recurring-expense-monitoring/) → per-client watchlists live in Google Drive, not the repo |
| A client wants an **Expenses report** that must match the **P&L**, or the expense totals on two reports don't agree (a "Transaction Detail" doesn't tie to the P&L, payroll/journal-entry lines missing) | the [`expenses-report-tie-out` skill](./.claude/skills/expenses-report-tie-out/) → cleaned `.xlsx` delivered to the user, client figures never committed |
| **How we analyse anything** — the firm's method for a review, a reconciliation, or working out what to ask (not tax-specific) | [`projects/pre-return-review/method.md`](./projects/pre-return-review/method.md) — nine rules Lilian set by correcting real work. Its **purpose** is [`README.md`](./projects/pre-return-review/README.md) |
| **The pre-return review — Lilian's "tax preparer"** · review ONE client before their return is prepared — "analyse this client's organizer", compare this year against last year's return, work out **what to ask the client**, or an organizer that reads "Completed" and still cannot be worked | the [`organizer-review` skill](./.claude/skills/organizer-review/) — **the companion, not a filer.** Reads **nine** sources (the client file, Double notes/files/properties, **Julia's Gmail, Google Drive, Ping**, the organizer, the prior-year return) and produces the fixed structure: a **prior-year → this-year comparison table**, findings **grouped by root cause** (one answer that leaves fifteen questions unanswered is ONE finding), a **"we already have this — don't ask for it"** guard, and the **ready-to-send question list**. Encodes the disappearance rule (a company that closed *during* the year still issues a K-1), the carryover block when the prior year was prepared elsewhere (NOL, basis, suspended losses, which states), and that a client's mistake is work to be done, not an alarm. **Load [`double-mcp`](./.claude/skills/double-mcp/) §2.2 first** — reading organizer answers has rules. Delivered in chat: **never an artifact, never committed** |
| **Tax season status** — which clients still haven't filed (2025 or any open year), which bookkeeping/QuickBooks clients are **ready** for us to prepare vs **pending**, who we're waiting on for a **tax organizer**, or what Double's `Tax Return Status` / `Organizer Status` / `Organizer Progress` columns and the legacy **TaxDome** organizer folders actually mean (including the two routes to the progress percentages — per-organizer via the MCP since Aug 2026, or the CSV export for the whole roster) | the [`tax-season-readiness` skill](./.claude/skills/tax-season-readiness/) — encodes who is actually owed an organizer (bookkeeping and Schedule-C clients are **not**), what gates each return (a company return runs off its **books** and feeds the owner's 1040 via K-1, not the reverse), the two organizer generations (TaxDome vs Double), Lilian's manual procedure for the Organizer column, and the owner↔company link. **Read-only**: never write those columns; the client list is delivered, never committed |
| Automating a report as a scheduled, unattended email (send a report every month / week automatically, no clicks) | the [`automated-email-reports` skill](./.claude/skills/automated-email-reports/) — the setup playbook (Claude Code Routines + the firm's email webhook) |
| Reading or writing anything **in Double** through the Double MCP — a client and its properties, a tax project's status, a document in a client's folders, portal contacts, transactions/reports, tasks and notes — **or keeping the running "case note" that records a problem from start to finish** (§7) | the [`double-mcp` skill](./.claude/skills/double-mcp/) — **load it before the first Double MCP call.** Knowing which of the five data planes holds a fact (`Tax Return Status` is the tax *project*, not a property), the TaxDome folder conventions, what the MCP can't reach (tax-project deadlines/status are read-only, organizer publishing, saved views, file contents, loan tools), the audited **capability map** that answers "can we do X in Double?", and the write-safety rules — including **never** writing the hand-maintained judgment columns |
| **Changing anything in Odoo through the direct API** — a website page, a view, a menu, an appointment type; or taking a **backup/baseline** of the site, **undoing** a change, or auditing **when** something broke | [`tools/odoo-api/`](./tools/odoo-api/) — run `node tools/odoo-api/odoo.mjs help`. **Every write is a dry run unless `--execute`**, and refuses without a snapshot first. Reads are free and safe; only writes are gated. Load the [`odoo-mcp` skill](./.claude/skills/odoo-mcp/) first — its [`write-safety.md`](./.claude/skills/odoo-mcp/references/write-safety.md) is what the tool enforces |
| Reading or writing anything **in Odoo** through the Odoo MCP — journal entries, invoices/bills, payments, contacts, reconciliation, accounting reports, CRM leads, appointments | the [`odoo-mcp` skill](./.claude/skills/odoo-mcp/) — **load it before the first Odoo MCP call.** The free plan allows only **50 tool calls/day**; plan the whole sequence first, batch every multi-record write, and log changes to the record's chatter |
| Referral partners, the front-offer/diagnostic funnel, or the "Growth Accelerator Series" workshop concept | [`projects/marketing/referral-offer-strategy/`](./projects/marketing/referral-offer-strategy/) |
| A **booking** page, or the firm's booking calendars — the free 10-minute phone **discovery call** vs. the paid 1-hour **$150 consultation**, each with its own availability (Odoo Appointments; EN/RU) | [`projects/marketing/consultation-booking/`](./projects/marketing/consultation-booking/) |
| Notes from the **"Scale Your Accounting Firm"** course, digesting a video transcript, or picking up work from a course track/module | [`projects/marketing/scale-your-accounting-firm/`](./projects/marketing/scale-your-accounting-firm/) |
| A **lead magnet** — a free calculator or assessment/quiz for the top of the funnel (S-corp savings, surprise tax bill, license check, foreign-account check…), or the on-brand HTML tool that powers one | [`projects/marketing/lead-magnets/`](./projects/marketing/lead-magnets/) |
| **Hard knowledge worth keeping** — "how does Gusto/QuickBooks actually behave?", "what does that penalty cost?", "how do we do this procedure again?", *"anota esto en mi libreta"* — or looking one up | the [`lilian-notebook` skill](./.claude/skills/lilian-notebook/) → [`projects/lilian-notebook/`](./projects/lilian-notebook/) — **Lilian's** personal notebook, one note per lesson written as the rule for next time, on one searchable page she has bookmarked (and a card in the Hub). **Deliberately small** — read the skill's **§0 filter** first; she cut the first 33 notes to four (plus one she asked for), and does not want process hygiene, communication advice, or repo lessons in it. A lesson is also **not** a task: tasks live in [`FOLLOW-UPS.md`](./FOLLOW-UPS.md) and get deleted when they close |
| Capturing a new idea for later, or picking what to work on next | [`BACKLOG.md`](./BACKLOG.md) — the firm's idea parking lot |
| Remembering **what you personally started but haven't finished** — "what do I have pending?" / "¿qué me quedó pendiente?" | [`FOLLOW-UPS.md`](./FOLLOW-UPS.md) — the firm's open loops. **Not** auto-shown; surface it **on request only**, and filter by the **Owner** the asker identifies as (Lilian says "soy Lilian" **or writes in Spanish**; an unidentified non-Spanish session = Julia/firm — the *Session identity is provenance* rule). Distinct from `BACKLOG.md` (future ideas). |
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
- **Everything we build is reflected in the Knowledge Hub — by default.** Every tool,
  calculator, generator, dashboard, SOP, and client file the firm builds belongs in the
  [`knowledge-hub`](./projects/knowledge-hub/) so the team finds it all in one place. This
  is the standing default (Lilian, Jul 2026): adding a new tool or SOP to the Hub is
  **part of finishing it**, run via the [`knowledge-hub` skill](./.claude/skills/knowledge-hub/) —
  not a separate ask. The only exception is when Lilian explicitly says a given thing is
  too small to warrant a Hub entry.
- **Hard knowledge worth keeping gets captured — offer it, don't wait to be asked.** When a
  session turns up **how a system actually behaves**, **what something costs**, **what's inside a
  fee**, or **how to carry out a procedure nobody had written down**, **propose a note in
  [`projects/lilian-notebook/`](./projects/lilian-notebook/) in one line**, with the title you'd
  give it, and let Lilian say yes or no. She asked for this precisely because *she* won't remember
  to ask (Lilian, Aug 2026). Never file one silently, and if a note already covers the topic, say
  so and **enrich that note** rather than adding a second.
  ⚠️ **The notebook is deliberately small — it is not a lesson dump.** Lilian cut its first 33
  notes to four: she does **not** want process hygiene ("get it in writing"), advice on how to
  communicate, lessons about our own repo machinery, or argumentation about a live matter. **Read
  §0 of the [`lilian-notebook` skill](./.claude/skills/lilian-notebook/) before proposing one** —
  it holds the filter, with what she kept and what she threw out — and when a note is borderline,
  offer it rather than file it. **The other distinction that matters:** a **task** goes in
  [`FOLLOW-UPS.md`](./FOLLOW-UPS.md) and is **deleted when it resolves**, so when a matter closes,
  ask whether it left any durable knowledge before the row disappears.
- **Know the skills we already have — check first, enrich instead of duplicate.**
  The canonical catalog of every skill is [`.claude/skills/README.md`](./.claude/skills/README.md)
  (the skills index). **Nobody remembers all of them**, so it's your job to: (a) answer
  "do we have a skill for X?" from that index; (b) **before proposing or creating a new
  skill, check the index** — if one already covers the topic, say so plainly ("we already
  have a skill for that") and **feed the new information into the existing skill** rather
  than build a parallel one; and (c) when a conversation surfaces a rule, preference, or
  lesson that belongs in an existing skill, **point it out unprompted** and offer to update
  that skill (each skill ends with an "update this skill when…" note). Keep the index in
  sync whenever a skill is added, renamed, or removed (it's part of the coherence check
  below).
- **Repo artifacts are written in English.** Everything committed — skills, SOPs,
  project docs, templates — is in English so anyone on the team using Claude Code can
  read it, whatever language the chat is in.
- **Reply in the language you're addressed in.** Match the conversation to the
  language of the user's message — Spanish → Spanish, English → English, Russian →
  Russian — and keep using it until they switch or explicitly ask for another
  language. This governs the *chat* only; committed repo artifacts stay in English
  per the rule above.
- **Lilian is practicing her English — support it, don't guess.** Lilian sometimes
  runs her sessions in English on purpose, to improve it (she has little day-to-day
  practice). Her English is still developing, so she may make mistakes or phrase a
  request in a way that isn't fully clear. When a session is Lilian's: keep your own
  English clear and simple, and **whenever anything she writes is ambiguous or you
  are not fully sure what she means, stop and ask a clarifying question instead of
  assuming** — she has explicitly asked to be asked. (This rides on top of the rule
  above: still follow whichever language she actually writes in.)
- **Drafting a message to a client: CORRECT the draft, don't rewrite it.** When Julia or
  Lilian hands you a draft to fix, translate, or shorten, the deliverable is **their**
  message with the mistakes repaired — their sentences, their order of ideas, minimally
  edited. A cleaner text of your own is the wrong answer even when it reads better.
  **"Shorter" means fewer of YOUR words**: cut your clarifications, conditionals,
  unsolicited advice, repetitions and explanations of *why*. **Never** cut the greeting and
  courtesy (in a client message that's the relationship, not filler), the sentence showing
  the firm **already tried** (it justifies asking the client to do work), their phrasing, or
  the actionable data. Format for a phone screen: a number or code on **its own line with a
  label** so it's tappable, one idea per block, and document names in **English,
  capitalized** when the client will have to say them out loud.
  _(Ecoorganic/Turo, Aug 2026 — Lilian asked for a shorter client message; the version she
  actually sent came out ~35% **longer** than the assistant's "shortened" one, because she
  kept her own text and cut only what the assistant had added. The word count was never the
  problem.)_
- **Analytical work follows the firm's method — it is not organizer-specific, and it always applies.**
  When a session **reviews, reconciles, or works out what to ask** — a client before their return, a
  bookkeeping cleanup, a matter with an agency, books that disagree with a bank —
  [`projects/pre-return-review/method.md`](./projects/pre-return-review/method.md) is the standing
  guide, and it holds nine rules Lilian set while directing and correcting real work. The short form, because
  these are the ones a session gets wrong: **look before you ask** (a gap is not a finding until you
  have searched everywhere the firm keeps things — asking for what someone already sent is worse than
  not reviewing at all); **group by root cause** (one cause is one finding, however many questions it
  generates); **show the trail** (what was reported, what is missing, what the prior period did);
  **a disappearance is a question, never a conclusion**; **derive what must exist from the client's
  structure**; **a client's mistake is work, not an alarm**; **the internal checklist is not the
  client message** (categories and code sections are how *we* classify — the client gets a plain
  question, and we ask for **facts, not the family-law paperwork that proves them**, though ordinary
  working documents are still asked for by name); **where two records disagree, show the client
  both, then ask** (recite what they told us · name each record · ask openly · then narrow, one
  question per block); and **when several small
  anomalies move together, question the frame, not just the pieces.** The purpose behind all of it is
  [`projects/pre-return-review/README.md`](./projects/pre-return-review/README.md).
- **Client data is sensitive.** Reports and anything with client-specific
  figures are committed/pushed only when the user explicitly asks. Client watchlists,
  vendor lists, and dollar figures live in the firm's client systems (Drive / Double /
  QuickBooks), not this repo.
- **Work on a client? Then that client gets a Client Intelligence file — in the same session,
  unprompted.** Lilian's standing instruction (Aug 2026): *"siempre que hablemos de un cliente,
  sobre todo un cliente que tenga cuenta en Double, todo lo que hablemos de él debe ser guardado
  en Client Intelligence… esto no podemos perderlo."* So whenever a session works on a named
  client — analysing their organizer, writing them a note, chasing a filing, answering a question
  about them — **check [`projects/client-intelligence/clients/`](./projects/client-intelligence/clients/)
  for their file and create it if it is missing**, then fold in what the session learned. A client
  **with a Double account** is the clearest case: if they are in Double, they are real, ongoing
  work. The bar is low on purpose — *is there anything here worth keeping?* — because the failure
  mode is silent: knowledge is produced, the session ends, and it is gone. **Writing a Double note
  is not a substitute** and it is exactly how this was missed: a note was written for a client who
  still had no file. Run it through the
  [`client-intelligence` skill](./.claude/skills/client-intelligence/) (the two-data-homes rule
  keeps figures, addresses and personal details out of the repo), and update the three indexes in
  the same commit.
- **Client Intelligence never waits for approval — and a contradiction is asked at the point of
  use, not in a report.** Lilian's decision (2026-08-11): **CI needs no approval to be saved or
  merged** — only **SOP** changes do (queued in
  [`sop-proposals.md`](./projects/client-intelligence/sop-proposals.md)). The weekend sweep now
  merges its own CI work to `main`; it used to leave it on a branch, and three runs sat unseen for
  three weeks. So when a session learns something durable about a client, **save it — do not park
  it pending a review.** And when two sources disagree, **write both into the file with their
  sources** and mark the fact unsettled rather than holding the enrichment or mailing her a
  question: *"si te pedimos información en un momento determinado y tienes cosas contradictorias,
  simplemente nos puedes explicar la fuente de la contradicción… y según nuestra respuesta,
  actualizas Client Intelligence."* **The moment someone actually asks for that fact, name both
  versions and where each came from, ask then, and update the file from the answer** — she will not
  work through a weekly list of open questions, and an answer given while the fact is in use is
  worth more than one given cold.
- **A Double note is the client's information, not our analysis.** Lilian's instruction (Aug 2026):
  a note carries **what the client gave us and what the team needs in order to work** — their
  figures, their statements, where their documents are, the case history. It does **not** carry our
  internal review findings, quality assessments, or the reasoning behind a conclusion. Those live in
  the [`client-intelligence`](./projects/client-intelligence/) file. Mixing the two "complica
  demasiado esas notas" and turns a working record into something the team stops reading. When a
  finding genuinely belongs in front of the team, **ask her** — she decides case by case. This
  narrows what goes in a note; it does **not** touch the [`double-mcp`](./.claude/skills/double-mcp/)
  §7 rule 10 that a note carries names, emails and figures freely.
- **Load the `double-mcp` skill before the first Double MCP call.** Double is the firm's
  practice-management platform (clients, the firm's tracking columns, tax projects, closes, tasks,
  the document library) reached through the account-level `Double` MCP connector — it is **not**
  declared in this repo's `.mcp.json`, so a `.mcp.json` review won't reveal it. Before the first
  Double call, load the [`double-mcp` skill](./.claude/skills/double-mcp/): it holds which of the
  five data planes a fact lives in (`Tax Return Status` is the tax *project*, not a property), the
  TaxDome folder conventions, what the MCP can't reach, and the **write rules — default-deny, and
  never write the hand-maintained judgment columns.** Two Double tools instruct an unprompted
  write; the skill says to override them.
  **Reading a client's organizer answers is allowed — and obliges you to tell the person before
  the first call, and to remind them to delete the session after.**
  Lilian lifted the old ban on 2026-08-11 so we can do pre-return analysis (compare a client's
  organizer against prior years and flag what's missing — a K-1 that was there last year and
  isn't now). The call returns the whole organizer in one payload, SSNs and bank details
  included, so three things bind every time: **the identity block never gets written out** (chat,
  repo, artifact, Double note, email — by existence, never by value); **you tell the person
  BEFORE the first call what it will bring into the conversation**, in plain words with no jargon
  and no `§` references, because the person asking may be **Julia, who will use this without
  knowing how any of it was built**; and **you remind them to delete the session when the work is
  done**, because in a cloud session that history sits in the firm's shared Claude account. Two
  absolute bans go with it: **never from a subagent, and never from a scheduled or unattended
  session** — a Routine has nobody to tell and nobody to delete, so every control here fails
  silently.
  **Keep both messages calm** — deleting is the routine last step of the job, and once it is done
  the firm is back to exactly the risk it had before. Written as an alarm, they teach the person
  that a capability we deliberately enabled is dangerous. The wording for both messages, and the full rule
  including why the old ban protected nothing, is
  [`double-mcp` §2.2](./.claude/skills/double-mcp/SKILL.md).
- **A matter we need to be able to retrace lives as ONE running case note in Double.** When a
  problem runs for weeks across an agency or a platform's support queue — the Tsminibears Florida
  reemployment-tax matter is the pilot — the firm keeps a single note on that Double client with
  the whole history start to finish, so anyone opens the client and reads it instead of
  reconstructing it from email (Lilian, Aug 2026). Three standing rules: **one note per case,
  rewritten in place — never a second note**; **when new information on a tracked case arrives,
  updating that note is part of the work, not a separate request** (find it with `list_notes`
  first — it must never sit on stale information); and the **repo file stays the master** (the
  [`client-intelligence`](./projects/client-intelligence/) `§6` log keeps the full detail, the
  Double note is the team-facing mirror, both updated in the same pass). Notes are in **English**
  like every artifact, and each entry names who did it — all the firm's notes post under one
  shared Double user. Not everything gets a note: Lilian says which matters do. The format and the
  rest of the mechanics are in the [`double-mcp` skill](./.claude/skills/double-mcp/) §7.
- **The Odoo MCP has a hard 50-call/day budget — load the `odoo-mcp` skill before using it.**
  The firm's Odoo ERP is reachable through the `Odoo_JK_Accounting_Group` MCP connector on a
  **free plan capped at 50 tool calls per 24 hours, shared across the whole firm.** Before the
  first Odoo MCP call in a session, load the [`odoo-mcp` skill](./.claude/skills/odoo-mcp/) and
  follow it: plan and count the whole call sequence up front, batch every multi-record write
  (`create_records`/`update_records`, never a loop of single-record calls), reuse looked-up
  IDs, and post a batched chatter note on the affected record for any change. This is a
  standing rule so the budget is respected every time — running out mid-task leaves the
  database half-changed.
- **Changing Odoo or the website? Know which route this session has, and say so out loud.**
  There is a second route to Odoo with **no** daily cap — the direct API — and its key lives
  **only** in the dedicated `odoo-api` cloud environment (the cloud icon above the message box at
  claude.ai/code). The MCP connector works from any environment; the direct API does not, and an
  environment is chosen when a session **starts** — never switched mid-session. **The [session-start hook](./.claude/hooks/session-start.sh) announces the direct
  route when a session has it — but says nothing when it does not, so silence is not evidence.**
  Check it yourself: `[ -n "$ODOO_API_KEY" ] && echo present || echo MISSING` (free — no MCP call,
  no Odoo call). **Do it before starting any change to Odoo or the website, and before any
  read big enough to matter against 50 calls.** If the key is missing, **stop and explain, in
  plain language, before doing anything** — we are on the MCP connector, capped at 50 operations a
  day for the whole firm. **Then answer what was actually asked, which is usually NOT "restart in
  `odoo-api`":** a website text/SEO/copy fix belongs in **Odoo's own web editor, by hand — zero
  calls, no limit**; a small structural change can go through the connector once its cost is
  stated; **`odoo-api` is for heavy READS**; and a scripted **write goes through
  [`tools/odoo-api/`](./tools/odoo-api/)** (built 2026-08-10 — dry-run unless `--execute`, and it
  refuses without a snapshot), which needs that environment like any direct-API work. **Never reply
  with a bare "I can't do that", and never silently fall back to the connector for work that needs
  the direct route.** _(Lilian's standing instruction, Aug 2026, with a specific reason: **Julia
  is often the one asking and does not follow this machinery** — she must never be left wondering
  why a website change cannot be made.)_ **One more trap:** in a **local CLI** session there is no cloud icon at all, so check
  `$CLAUDE_CODE_REMOTE` before sending anyone to click one. The wording to use and the full reasoning are in the
  [`odoo-mcp` skill](./.claude/skills/odoo-mcp/) §1 and
  [`write-safety.md`](./.claude/skills/odoo-mcp/references/write-safety.md).
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
  [`README.md`](./README.md), [`projects/README.md`](./projects/README.md),
  [`projects/marketing/README.md`](./projects/marketing/README.md), and the skills
  index [`.claude/skills/README.md`](./.claude/skills/README.md) (every skill folder
  has a row, no stale rows). Keep
  [`BACKLOG.md`](./BACKLOG.md) internally consistent too (every quick-view row has a
  matching section, IDs unique). Fix broken links, orphaned folders, duplicate or
  missing entries, and status mismatches — or, when a clash is ambiguous, flag it to
  Julia rather than leaving it. A **weekly scheduled audit** (a Claude Routine,
  Monday mornings) sweeps the entire repo for this drift and can also be run on
  demand ("audit the repo") — so a working session only needs to keep the indexes
  right for what it touched, not re-audit the whole repo every time.
- **The drift check — run it right before you commit, not when you branch.**
  _(Two hooks now do most of this for you — [`.claude/hooks/`](./.claude/hooks/). One briefs you at
  session start on what landed on `main` and which unmerged branches are active; the other fires on
  `git commit` and warns when `main` moved under you. They **warn, never block**, and they are a
  safety net, not a substitute — the judgement below is still yours.)_
  Starting from the latest `origin/main` is **not enough**: a long session can watch
  `main` move several PRs while it works, and the stale copy in your head is the one
  you edit. So immediately before committing:

  ```
  git fetch origin main
  git log --oneline HEAD..origin/main      # what landed while you worked
  ```

  If that returns anything, **re-read the current version of every rule you are
  changing** — the version on `main` now, not the one you read an hour ago — and ask
  whether your change still makes sense beside it.

  **Git only catches textual collisions. The dangerous conflict is semantic**: two
  sessions can write flatly contradictory guidance, in different files or different
  sections of one file, and every merge stays clean. Nothing will flag it for you.
  _(Aug 2026 — a session spent an afternoon auditing the Double MCP while three other
  PRs landed on that same subject. It wrote "never open a second note" into the
  [`double-mcp`](./.claude/skills/double-mcp/) skill: the exact opposite of the
  `Part 1 / Part 2` rule PR #143 had just established. Caught only by re-reading `main`
  before committing.)_

  Three habits that prevent the rest:

  1. **Check what's in flight before starting** — open PRs (`list_pull_requests`) and
     the last ~10 commits on `main`. If someone has work open on your topic, read it
     first and enrich it instead of writing a parallel version.
  2. **Say it in the PR when your change touches shared guidance.** A reviewer told
     *"this area moved recently, check for contradictions"* finds them; one handed a
     diff in isolation reviews the diff.
  3. **Treat [`FOLLOW-UPS.md`](./FOLLOW-UPS.md) as the highest-traffic shared file in
     the repo.** A row that looks stale to you may have been updated an hour ago by the
     other person — read it before you rewrite it, and correct a row rather than
     replacing it.
- **Session identity is provenance, not a wall.** The whole firm shares one Claude
  Code account, so git alone can't tell whose hands did what. It's one firm with one
  goal — **never partition the repo or the work by person**; Julia and Lilian split
  tasks, not territory. **The one deliberate exception, at Lilian's explicit direction
  (Aug 2026), is [`projects/lilian-notebook/`](./projects/lilian-notebook/)** — her personal
  notebook, which she alone writes in. It is not hidden and it is not a private territory
  inside the work: firm-wide *procedure* still belongs in [`projects/sops/`](./projects/sops/),
  firm-wide *guidance* in this file and the skills, and per-client facts in
  [`client-intelligence/`](./projects/client-intelligence/). Don't read it as licence to
  create a second per-person space. Do track *where work came from*: **Lilian identifies herself
  at the start of her sessions ("I'm Lilian" / "soy Lilian"); Julia doesn't have to** — an
  unidentified session is simply firm work (in practice, usually Julia). **Spanish is
  always Lilian.** Julia doesn't speak Spanish, so *any* session conducted in Spanish is
  Lilian's — treat it as hers even if she never says so (address her, not Julia).
  (English or Russian alone does *not* identify her — Lilian also runs sessions in English
  on purpose to practice, so there she still says "I'm Lilian"; when in doubt in a
  non-Spanish session, it's firm/Julia.) When a
  session is Lilian's (identified, or Spanish): address her in conversation, add a
  `Worked-by: Lilian` trailer to that session's commits, and note it on PRs the session
  opens. Keep the provenance trail **detailed** — who did each change — because that's the
  whole point: when parallel sessions unknowingly touch the same files and changes
  contradict each other, the trail shows where each side originated so the clash can be
  untangled quickly.
- **Every PR gets an independent review before merge.** When you open a pull
  request, run an independent review against it first — spawn a review agent, run
  `/code-review`, or rely on the GitHub Action if one is configured — address any
  blocking findings, then merge. Never merge an unreviewed PR.
  **One deliberate carve-out:** the unattended **weekend Client-Intelligence sweep** merges its own
  work without a review, because Lilian removed that gate for CI on 2026-08-11 and because a
  Routine has no reviewer to wait for. It holds **only** while the run's diff stays inside
  `projects/client-intelligence/clients/`, `automation/sweep-state.md` and `sop-proposals.md` — a
  run touching a skill, an SOP or any build is ordinary work and gets reviewed like everything
  else. See [`weekend-ci-sweep.md`](./projects/client-intelligence/automation/weekend-ci-sweep.md)
  → *The approval line*.
- **Self-contained HTML tools live in the Knowledge Hub, from source.** Any
  self-contained HTML tool the firm builds (e.g. the proposal generator) is
  **embedded in the [Knowledge Hub](./projects/knowledge-hub/) from its own
  `.src.html`** and gets a card in the Hub's **"Interactive tools"** band — one
  source of truth, never a hand-copied duplicate. **Whenever a tool's source
  changes, rebuild and republish the Hub, unprompted** (publishing from merged
  `main` as the last step — the one canonical Hub link, never a new one), so the
  Hub always shows the latest and stays the single place to find every tool the firm
  has built (Lilian, Jul 2026). The mechanics live in the
  [`knowledge-hub` skill](./.claude/skills/knowledge-hub/) (rule 12).

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
