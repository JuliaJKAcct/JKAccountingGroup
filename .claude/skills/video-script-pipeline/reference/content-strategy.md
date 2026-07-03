# Content strategy — the Trend Scout layer

This is the **front** of the pipeline. It answers a different question than the Researcher:

- **Trend Scout (this stage):** *"What should we make, and how should we deliver it, to get views —
  on-brand?"* — demand + delivery research across the accounting/tax feed.
- **Researcher (later stage):** *"For the topic we picked, what's the accurate substance?"* — depth
  on a chosen topic.

Its output is a **Content Opportunity Brief** — a ranked set of topics, each with a JK-specific
angle, an on-brand hook, a format, platform fit, and a compliance flag — from which you pick the
next video. The latest full report lives in
[`projects/video-generation/research/`](../../../../projects/video-generation/research/); read the
most recent one before scouting fresh, and refresh it roughly **quarterly and before each filing
season.**

## The standing strategic thesis (apply it every time)
The big-creator lane (shock numbers, "loopholes," fear) is **saturated, distrusted, and under IRS
scrutiny** (Dirty Dozen; social-media-advice penalties). That backlash is JK's opening:

- **Adopt the structure, never the content.** Borrow the mechanic (3-second hook, one idea,
  captions, one real sourced number, tight pacing) — never the secrets, shock-$0, or fear.
- **JK's calm, licensed, bicultural voice is the differentiator.** The flagship lane is
  **myth-correction** ("this went viral and it's incomplete — here's the real rule"). The unfair
  advantage is **foreign / Russian- & Ukrainian-speaking founders** (Form 5472, ITIN/EIN, the S-corp
  residency gate, "open a US LLC and pay zero tax" debunks).
- **~70/30 evergreen-to-timely.** Build a durable evergreen library + a recurring debunk franchise;
  layer timely (law-change) clips on top, timed 2–3 months ahead of each peak.

## The method (how the opportunity report is produced)
A fan-out research pass — best run as a `Workflow` for a full refresh (see the pattern below), or
as a handful of `WebSearch` passes for a quick single-topic angle check.

1. **Sweep — 5 parallel angles:**
   - *Creators & formats* — who gets views and the reusable format/hook patterns behind it.
   - *Breakout & high-demand topics* — news-driven (law changes, IRS updates, deadlines), evergreen
     high-demand, and seasonal.
   - *JK niche* — foreign/immigrant + RU/UA founder topics, and the competitive gap.
   - *Delivery mechanics* — what makes finance video retain, and what's overdone/compliance-risky.
   - *Search demand* — durable, searchable evergreen questions (great for Shorts).
2. **Verify — per candidate topic:** genuine demand? JK-appropriate and safe? Then refine the
   **piggyback angle**, a concrete **on-brand hook**, a **format**, **platform fit**, and the
   **compliance flag**. Drop anything rated *avoid*.
3. **Synthesize — rank** into the Content Opportunity Brief: executive summary, delivery playbook,
   ranked opportunities, niche opportunities, series concepts, and an avoid-list.

## The piggyback-angle formula
For any trending topic, JK's angle = **take the claim the audience has already seen, then add the
part generic creators skip** — usually one of:
- the **eligibility fine print** (who it does and doesn't apply to; residency/SSN/entity gates),
- the **bicultural misread** ("not taxed" heard as "don't report"; "it works like back home"),
- the **honest limit** (documentation, fair-market rates, sunset dates, phase-outs), or
- the **higher-value correction** (a 1099-K doesn't change what you owe; reasonable salary comes
  before S-corp savings).
Then a calm hook (10–14 words, no fear), a format, and the sourced figure to anchor it.

## Confidence & integrity rules (non-negotiable)
- **Demand is qualitative.** Do **not** fabricate or assert view/follower counts or engagement
  stats. If you cite a number, it must be sourced; otherwise describe traction qualitatively and
  label confidence. Creator-tool benchmarks (3s-hold %, caption lift) are directional, not audited.
- **Every tax figure is re-verified against IRS primary sources on production day** — rates are
  year-indexed and several provisions are temporary with MAGI phase-outs. The opportunity brief's
  compliance flags feed straight into the pipeline's Fact-checker (`compliance-and-brand.md`).
- **Stay on-brand:** calm, no fear, no "secret/loophole" framing; correct the idea, never mock the
  creator; never repost a face without rights.

## Workflow sketch (for a full refresh)
Fan out the 5 sweep angles in parallel → dedupe candidate topics → verify each in parallel (drop
*avoid*) → synthesize a ranked report → save to `projects/video-generation/research/<date>-content-opportunity-report.md`.
Keep agents grounded with the JK context (audience, calm voice, platforms) and the integrity rules
above. (The 2026-07-03 report was produced exactly this way.)

## Output → hand-off
The Trend Scout stage ends by **picking one opportunity** (or letting the user pick) and passing its
**topic + JK angle + hook + format + platform + compliance flag** into the pipeline's intake, so the
Researcher and the writers' room build on a chosen, view-worthy angle rather than a cold topic.
