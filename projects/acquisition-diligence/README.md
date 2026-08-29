# Acquisition Diligence

> **Status:** Active · **Owner:** Julia · **Started:** 2026-08

The firm's **financial due-diligence** work for clients buying a business — the
industry benchmark references we measure a target against, and the reusable
machinery behind that kind of engagement. This is a **consulting** service line,
not tax or bookkeeping.

## Purpose

When a client asks us to review a business they are about to buy, the work is the
same shape every time: reconstruct what the seller actually earns, test whether
the reported revenue is real, and separate the operating business from the real
estate. Doing that needs a **yardstick** — what a healthy business of that type
looks like — and the yardstick is industry- and county-specific.

This project holds those yardsticks so the second engagement in an industry
doesn't start from nothing. It exists because the firm's first consulting
engagement (Aug 2026, a five-location coin-laundry portfolio) had to assemble one
from scratch.

> 🛑 **Never describe this work with assurance words.** It is consulting: not an
> audit, review, or compilation; no opinion, no assurance. Keep "verification" out
> of any service description — the report explains **procedures performed and
> findings** and is restricted to the buyer's use. _(Julia, 2026-08-28, on
> professional-standards grounds.)_

## What's here

```
acquisition-diligence/
├── README.md                                    ← you are here
└── benchmarks/
    └── coin-laundry-benchmarks.src.html         coin laundry / laundromat —
                                                 cost structure, KPI set, the three
                                                 revenue tests + a live water-method
                                                 calculator, county utility inputs,
                                                 valuation multiples, source grading
```

One file per industry. `.src.html` is the **source of truth**, self-contained and
embeddable in the Knowledge Hub the same way the proposal tools are.

## Brand & design

- Brand rules & voice: [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md)
- Design tokens / CSS: [`../../brand/design-system/`](../../brand/design-system/)
- Logos: [`../../brand/logo/`](../../brand/logo/)

Built on the Atlas design system with the
[`impeccable`](../../.claude/skills/impeccable/) skill, per the repo-wide standing
rule. Light/dark, responsive, self-contained.

## Skills & tooling

- **None dedicated yet.** If a second industry benchmark is asked for, that is the
  real second use — propose a `acquisition-diligence` skill then, not before.
- Design goes through [`impeccable`](../../.claude/skills/impeccable/); charts
  follow the `dataviz` procedure (categorical palettes are validated with its
  script, not eyeballed).
- The engagement's proposal and its "Work for Other Specialists" boundary page live
  with the [`proposal-generator`](../../.claude/skills/proposal-generator/) skill's
  output, not here.

## Outputs

Benchmark references are **committed** — they contain published industry and utility
data only.

⛔ **A specific deal's figures are never committed.** The subject company's revenue,
add-backs, utility bills, machine counts and purchase price stay in the client's
systems and in the delivered report. A benchmark page ships as a **private
artifact** when it carries anything deal-specific; the committed copy stays generic.

## Working on this / notes for AI

- **A benchmark is a screen, not evidence.** Every range here tells you whether a
  reported number is plausible and where to point the next question. The evidence is
  the metered bill, the processor settlement, the bank statement and the IRS
  transcript obtained on a seller-signed Form 4506-C. Where a benchmark and a
  document disagree, **the document governs**.
- **Grade every figure.** Each number carries Firm / Directional / Not obtained, and
  the grading is part of the deliverable — in a due-diligence report the difference
  between a citable figure and an indicative one matters more than the figure. Follow
  [`method.md`](../pre-return-review/method.md) rule 1b: a number we could not
  retrieve is recorded as **a gap with the search named**, never as an absence.
- **Geography is a cost input, not a label.** Utilities are 20–30% of a laundromat's
  revenue and are set county by county — commercial water + sewer runs roughly 3×
  more in Miami-Dade than in unincorporated Manatee County. Benchmarking a Tampa
  Bay–area store against South Florida costs produces a false finding in either
  direction. Check which county the target is actually in before using any rate.
- **Re-verify before a number goes into a client report.** Rate schedules change
  annually (most Florida utility years turn on 1 October) and multiples move.

## Open questions

- [ ] Broward County FY2026 commercial water/sewer figures — not retrieved (the
      county's rate document was unreachable from the session that built this).
- [ ] City of Bradenton's schedule, which is separate from Manatee County's.
- [ ] Whether the Coin Laundry Association / American Coin-Op *State of the Industry*
      survey should be bought outright — the operating benchmarks here are currently
      second-hand because those sources were unreachable.
