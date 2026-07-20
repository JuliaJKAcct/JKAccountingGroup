# Projects

Each subfolder here is one **project** — a self-contained initiative for JK
Accounting Group. The marketing projects are grouped under
[`marketing/`](./marketing/); marketing is not the purpose of the repo.
Projects share the firm's [`brand/`](../brand/) foundation and the skills in
[`.claude/skills/`](../.claude/skills/).

## Index

| Project | What it is | Status |
|---|---|---|
| [`marketing/collateral/`](./marketing/collateral/) | Generate on-brand marketing collateral (cards, posts, flyers, copy) with Claude. | Active |
| [`marketing/email-branding/`](./marketing/email-branding/) | Put every team member's outbound email on the Design System — email-safe HTML signatures + a branded email layout. | Active |
| [`marketing/video-generation/`](./marketing/video-generation/) | Script on-brand short-form videos and produce ElevenLabs Flows production briefs (topic → script → brief), via the `video-script-pipeline` skill. | Active |
| [`marketing/referral-offer-strategy/`](./marketing/referral-offer-strategy/) | Front-offer and referral-partner funnel strategy — the paid diagnostic assessment, partner-specific pitches, and the "Growth Accelerator Series" workshop concept. | Planning |
| [`marketing/consultation-booking/`](./marketing/consultation-booking/) | The "Book a Consultation" front door — routes new/prospective vs existing clients to two Odoo Appointments calendars with different availability. Online, EN/RU. | Active |
| [`marketing/scale-your-accounting-firm/`](./marketing/scale-your-accounting-firm/) | Digested notes from the "Scale Your Accounting Firm" advisory program, by track/module/video, feeding into JK's marketing strategy. | Active |
| [`marketing/lead-magnets/`](./marketing/lead-magnets/) | Free interactive calculators + assessments for foreign-owned business founders — the marketing funnel's entry point. On-brand self-contained HTML tools. | Active |
| [`reasonable-compensation/`](./reasonable-compensation/) | Determine & document a defensible S-corp owner salary; outputs branded HTML reports. | Active |
| [`recurring-expense-monitoring/`](./recurring-expense-monitoring/) | Twice-monthly watch over each client's recurring payments; flags missed or abnormal charges and emails an exception report, via the `recurring-expense-monitoring` skill. Watchlists live in Google Drive, not the repo. | Active |
| [`proposal-tool/`](./proposal-tool/) | In-house GoProposal replacement — generates on-brand monthly-engagement proposals, tax-prep engagement letters, and a T&C addendum from the firm's pricing logic (Node docx-js + Python engine). Client data stays out of the repo. | Active |
| [`sops/`](./sops/) | The firm's standard operating procedures and day-to-day client-task runbooks (e.g. Business Tax Receipt filings), written and reviewed via the [`sop-authoring`](../.claude/skills/sop-authoring/) skill. Client-specific data stays in the firm's client systems, not the repo. | Active |

> The first seven rows are the **marketing group** — they live under
> [`marketing/`](./marketing/), which also holds the firm's shared offer
> [`positioning.md`](./marketing/positioning.md) and a
> [`CLAUDE.md`](./marketing/CLAUDE.md) that gives Claude a marketing-strategist
> persona for any work in that subtree.

> Keep this table current — it's the fastest map of the repo. `_template/` is not
> a project; it's the starter you copy.

## The project standard

Every project follows the same shape so the repo stays predictable:

1. **Location & name** — lives at `projects/<name>/` (a marketing project nests
   under `projects/marketing/<name>/` so it inherits the marketing persona). Use
   a lowercase, hyphenated name that describes the *outcome* (`video-generation`,
   not `videos`; `reasonable-compensation`, not `rc`).
2. **A `README.md`** using the standard sections from
   [`_template/README.md`](./_template/README.md): title + status line, Purpose,
   What's here, Brand & design, Skills & tooling, Outputs, Working on this.
3. **Brand comes from `brand/`** — never copy logos or redefine colors inside a
   project. Reference `../../brand/` instead.
4. **Outputs live in the project** — in an obviously-named folder (`reports/`,
   `videos/`, `output/`). Note in the README whether they're committed.
5. **Reusable engines are skills** — if a project has a repeatable Claude
   workflow, it belongs in [`.claude/skills/`](../.claude/skills/) and the
   project README links to it.

## Adding a new project

```bash
cp -r projects/_template projects/<new-name>
```

Then fill in `projects/<new-name>/README.md`, add a row to the **Index** table
above, and add the project to the map in the root [`CLAUDE.md`](../CLAUDE.md).
That's it — Claude is instructed (in `CLAUDE.md`) to follow exactly these steps
when you ask it to create a new project, so everything stays consistent.
