# Compliance & brand gate

The two review roles enforce this file line-by-line before a script locks. **Fact-checker /
Compliance** owns Part A; **Brand-guardian** owns Part B. Either can block; a blocking issue is
fixed and the reviewer re-runs before the script is locked.

This matters more here than for most marketing: the firm is a **US accounting practice** giving
**tax** information to an anxious audience. A wrong number or an over-promise isn't just off-brand,
it's a liability. When in doubt, cut the claim or route it to a licensed human.

---

## Part A — Compliance (Fact-checker)

For each flagged line, output: **the offending line · the rule it breaks (with citation) ·
severity (block / advisory) · a compliant rewrite.**

**A1. Disclaimer gate — BLOCK if missing.** Every asset carries, spoken or on-screen **and** in
the caption, a general-education disclaimer: *educational information only, not tax/legal/accounting
advice, creates no client relationship, outcomes depend on your facts, consult a qualified
professional.* BLOCK any script that gives the viewer **personalized direction** ("elect S-corp,"
"set your salary at $X") without a "depends on your facts / talk to a professional" qualifier.
*(Circular 230 §10.37 permits an accurate limitations statement — this is it.)*

**A2. No guarantees / specific-outcome promises — rewrite to conditional.** Flag and rewrite any
of: *guarantee(d), will save, always, never pay, zero/no tax, eliminate, risk-free, 100%, promise,*
or any specific $ or % savings promised to the general viewer. Convert to hedged language: "may,"
"can, if you qualify," "in many cases," "talk to your CPA to see whether this fits." *(AICPA ET
1.600.001 "unjustified expectations"; Circular 230 §10.30; FTC substantiation — an objective claim
needs a reasonable basis before it's published.)*

**A3. Sourced, year-correct figures — BLOCK if unsourced or stale.** Every quantitative tax fact
(brackets, standard deduction, contribution limits, §179/bonus %, QBI thresholds, mileage, FICA/SE
wage base, estate/gift exclusion) must trace to a **named primary source** (a specific IRS Rev.
Proc., IRS Publication, or IRC section) **and** state the applicable **tax year** on screen. Reject
any figure not mappable to a source. Reject "average American saves $__" / "X% of businesses
overpay" stats without a citable dataset. Content is current as of its production year — a prior
year's number must never be shown as current.

**A4. Every strategy gets its eligibility condition — BLOCK if presented as universal.** For each
named strategy (S-corp reasonable-comp split, Augusta/§280A(g), hiring your kids, QBI/§199A, cost
segregation, real-estate-professional status, retirement stacking): require (a) the key qualifying
condition/limit stated **in-line** ("if you have an S-corp," "up to 14 days," "the salary must be
reasonable"), (b) **no absolute verbs,** and (c) a "this isn't for everyone / confirm it applies to
you" beat. Reject any "secret/loophole the IRS doesn't want you to know" framing.

**A5. No fear / urgency / IRS-threat — BLOCK.** Flag scare hooks, doom language, IRS-threat framing,
and false scarcity/deadlines ("only today," "before they close this loophole") unless the deadline
is a **real, cited** statutory/filing date. Require calm, plain, empowering framing and an
invitation-style CTA. *(This is also the brand's hardest voice rule — see Part B.)*

**A6. Credential & holding-out accuracy — route to human if unclear.** Flag any "CPA" / "CPA firm" /
licensed-professional or "best/#1/top-rated" claim for verification against **who is actually
speaking** and where the firm is licensed (Florida Ch. 473 / Rule 61H1 for the Miami/Fort
Lauderdale base). Don't imply IRS endorsement or licensure the firm lacks; "online nationwide" reach
must not imply multi-state licensure it doesn't hold.

**A7. Testimonials & fee claims — BLOCK until substantiated.** Any testimonial or client-savings
figure must be genuine and substantiated, carry a "results vary / not typical" disclosure when a
dollar figure appears, and disclose any paid/material connection with an on-camera endorser.
*(FTC 16 CFR Part 255; 2024 fake-review rule.)* Any advertised fee or "free" offer must be honored
for 30 days after last publication *(Circular 230 §10.30)*. Reject invented/composite client results
presented as real.

Route borderline items (specific fee claims, testimonials, multi-state-licensure implications, novel
or aggressive strategies) to a **licensed human**, not auto-approval.

**Sources:** Circular 230 [§10.30](https://www.law.cornell.edu/cfr/text/31/10.30) ·
[AICPA Code of Professional Conduct](https://pub.aicpa.org/codeofconduct/ethicsresources/et-cod.pdf) ·
[FTC advertising substantiation](https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation) ·
[FTC Endorsement Guides 16 CFR 255](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255) ·
[IRS](https://www.irs.gov/tax-professionals/frequently-asked-questions) · Florida Ch. 473 / Board Rule 61H1.

---

## Part B — Brand (Brand-guardian)

Check against [`brand/JK-Brand-Guide.md`](../../../../brand/JK-Brand-Guide.md). The voice is
**bicultural fluency · quiet command · genuinely on your side** — a calm senior advisor.

**Voice — must:**
- Sound like a calm senior advisor: plain language, specific, human. "We are the calm in the room."
- Stay warm and reassuring — the audience is anxious about US tax; we lower the temperature.

**Voice — never:**
- Fear-based tax marketing ("The IRS will destroy you!"), hype, hard-sell, or urgency-baiting.
- Jargon walls, corporate-sterile / faceless tone.
- AI-slop: invented stats, fake testimonials, "studies show" without a study.

**Visual direction in the brief — must:**
- On-palette: petrol teal `#123841` / soft ivory / **bronze used once** on the single key element,
  ~60/32/8 teal/ivory/bronze. Bronze is never a background or decoration.
- On-type: Source Serif 4 (headlines) + IBM Plex Sans (body) + the **mono uppercase kicker** for
  labels. Nothing else.
- **The approved avatar is the only face.** No stock or AI people, no invented humans. Logo, if
  shown, is an approved Medallion file — not boxed, not recolored, not distorted.
- Calm and uncrowded — generous space, one clear focal point, soft corners. Deep-teal panels with
  ivory text for emphasis moments.

**Bilingual note:** English only for now. When RU is added, write it **natively**, never
machine-translated; match quality, not word-for-word parity. Fonts already carry Cyrillic subsets.

**Return:** pass/fail + specific fixes. Block on any voice or brand violation; the fix is applied and
this role re-runs before lock.
