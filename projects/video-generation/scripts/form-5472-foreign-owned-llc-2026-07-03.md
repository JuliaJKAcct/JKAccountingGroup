# Form 5472 — the $25,000 foreign-owned LLC filing — video script & Flows brief

> **Topic:** Form 5472 filing trap for foreign-owned US single-member LLCs · **Goal:** educational + soft lead-gen · **Platform(s):** Reels · TikTok · Shorts · LinkedIn (9:16)
> **Duration target:** ~40s · **Language:** English · **Date:** 2026-07-03 · **Status:** Locked
> **Series:** "New to the US" #1 · **Avatar:** `{{AVATAR NAME}}` · **Voice clone:** `{{VOICE-CLONE NAME}}`

**General information, not tax/legal/accounting advice. No client relationship is created.
Whether this applies depends on your facts — talk to us about your situation.** *(Appears on-screen
in the CTA beat and in the post caption.)*

---

## 1. Research brief (verified)
- **The one idea:** If a foreign person owns a US single-member LLC, the IRS treats it as a
  corporation for **one** reporting rule, so **Form 5472** (with a pro-forma **Form 1120**) is
  generally due **even with zero income and no US clients** — and missing it carries a **$25,000
  penalty.**
- **Misconception corrected:** "My LLC made no money and has no US customers, so I have nothing to
  file." Income isn't the trigger — the money you moved to open/fund the LLC (and anything it paid
  back) is a *reportable transaction*.
- **Key verified facts (source: IRS Instructions for Form 5472, Rev. Dec 2024, irs.gov/instructions/i5472; Treas. Reg. 301.7701-2(c)(2)(vi); tax year 2026):**
  - A foreign-owned US disregarded entity is treated as a domestic corporation for the limited
    purposes of §6038A reporting → must file Form 5472.
  - No income-tax return of its own, but files a **pro-forma Form 1120** with Form 5472 attached, by
    the 1120's due date.
  - Triggered by **reportable transactions** with the foreign owner (contributions to form/fund it,
    distributions, loans, amounts paid) — so it applies even at zero income. No small-entity/de-minimis exception.
  - Needs an **EIN**; **can't be e-filed** (mail/fax only).
  - Due with the 1120 (~April 15 calendar-year), 6-month extension via **Form 7004**.
  - **Penalty $25,000** for failure to timely file / keep records; additional **$25,000 per 30 days**
    if the failure continues beyond 90 days after IRS notice; raised from $10,000 by the TCJA (tax years after 2017). **Reasonable-cause**
    relief exists (facts-and-circumstances, not guaranteed).
- **Hook angle chosen:** cold-open on the sourced number, tied to the *penalty for skipping* (not
  the filing itself).

## 2. Locked narration script
~40s · ~108 words · calm senior-advisor delivery (slightly slower than typical short-form).

| Beat | Time | Narration (verbatim) |
|---|---|---|
| **Hook** | 0:00–0:04 | "$25,000 — the penalty for skipping a US LLC filing most founders miss: Form 5472." |
| **Trap** (open loop) | 0:04–0:13 | "You earned nothing, no US clients — so nothing to file, right? Here's the part new owners miss." |
| **Real rule** (pattern interrupt) | 0:13–0:31 | "Stay with me. When a foreign person owns a US single-member LLC, the IRS treats it as a corporation for one reporting rule. So Form 5472 — with a pro-forma Form 1120 — is usually due, even at zero income." |
| **What to do** | 0:31–0:36 | "The good news: it's just an information form. File it correctly and on time — that's how you avoid the penalty." |
| **Soft CTA** | 0:36–0:40 | "Save this before you file. Not sure it's you? Ask us — that's a quick question." |

*On-screen disclaimer line (CTA beat):* "General info, not tax advice. Source: IRS Instructions for Form 5472."

> **Applied review fixes (both reviewers' own wording):** (1) hook now ties **$25,000 to skipping
> the filing**, not to the form itself (the form is free); (2) "what to do" softened to "file it
> **correctly** and on time" so it doesn't imply timeliness alone guarantees avoidance. The
> reportable-transaction *trigger* mechanic stays in the caption to protect the one-idea discipline
> (narration keeps the "usually / even at zero income" hedge).

## 3. Flows production brief
Avatar-led throughout (the approved avatar is the only face). Carry 9:16 · 1080×1920 into every
node. Keep SFX subtle and music low/warm — this is the calm brand. See
[`flows-production-brief.md`](../../../.claude/skills/video-script-pipeline/reference/flows-production-brief.md)
for how each field maps to a node.

| Beat | Type | Voice / Avatar | On-screen visual + overlay | SFX | Music | Dur |
|---|---|---|---|---|---|---|
| Hook | Avatar talking-head | `{{VOICE-CLONE}}` / `{{AVATAR}}` | Deep-teal panel; huge **"$25,000"** in ivory with the **$ figure in bronze** (the one bronze accent); "Form 5472" mono lower-third pops as said | one soft low tone on the number reveal | calm warm bed fades in | ~4s |
| Trap | Avatar talking-head | same | Two ticked cards — "$0 income ✓" / "no US clients ✓" — then open-loop caption "the part new owners miss" | gentle paper/whoosh on "right?" | bed continues low | ~9s |
| Real rule | Avatar talking-head (quick zoom-in on "Stay with me") | same | Simple diagram "Your LLC → treated as a corporation (for one rule)"; **"Form 5472"** and **"pro-forma Form 1120"** lower-thirds appear as each is spoken | none (let the point land) | bed continues | ~18s |
| What to do | Avatar talking-head | same | Reassure cards: "it's an information form" → "file correctly + on time ✓" | soft affirmative tick | bed warms slightly | ~5s |
| Soft CTA | Avatar talking-head | same | "Save 🔖 before you file"; **"NEW TO THE US · 01"** mono badge; disclaimer line; small JK emblem (corner, not boxed) | soft "save" click | bed resolves | ~4s |

- **Music node (whole video):** *"calm, warm, low ambient underscore — soft piano/Rhodes and a light
  pad, unhurried, reassuring, no drama or tension; ~40 seconds."* Keep it well under the voice.
- **SFX:** only the three subtle cues above (Sound Effects node: short prompt + ~0.5–1s duration,
  low prompt-influence). No stingers, no whooshes on every cut.
- **Composition:** avatar track + music bed + the 3 SFX + text/graphic overlays layered in the
  Composition node; preview there.

## 4. Run it in Flows (ElevenCreative)
1. Confirm the **avatar** (`{{AVATAR NAME}}`) and **voice clone** (`{{VOICE-CLONE NAME}}`) exist.
2. New flow → **Avatar** node; paste each beat's narration, select the voice clone + avatar. Set
   **9:16**, 1080×1920, and the per-beat duration (or one ~40s render with the full narration).
3. Add the **Sound Effects** node(s) for the three cues; add the **Music** node with the bed prompt.
4. (Optional) an **Image Generation → Video** node if you want the "LLC → corporation" diagram as
   animated b-roll rather than a static overlay; match 9:16.
5. Wire avatar + music + SFX + overlays into a **Composition** node; preview.
6. **Export MP4**, or **send to ElevenCreative Studio** to burn in captions (bold IBM Plex Sans,
   ivory with dark stroke, lower-middle third, word-by-word) and add the "Form 5472" / "Form 1120"
   lower-thirds on the exact words. Export an **.srt** for LinkedIn.
7. Save the flow as a **"New to the US" template** so #2, #3… are drop-ins (swap script + cover).

*(No API step — the Flow is run in the UI; captions are a Studio step, not a Flows node.)*

## 5. Delivery specs
- **Aspect / resolution:** 9:16 · 1080×1920 (keep the avatar + all text inside the central 1080×1080).
- **File:** MP4 · H.264 + AAC · 30fps.
- **Captions:** burned-in (Studio), bold high-contrast, lower-middle third; `.srt` for LinkedIn.
- **Safe zones:** ~250px top · ~400–450px bottom · ~150px right (keep the "$25,000" and lower-thirds clear of UI).
- **Cover frame (1080×1920):** deep-teal; "**$25,000 penalty founders miss**" (Source Serif 4, ivory,
  bronze on "$25,000"); mono kicker "NEW TO THE US · 01"; small JK emblem — all inside the central square.
- **Platform notes:** same 9:16 master everywhere; on LinkedIn lead the caption with the founder-facing
  line and rely on captions (mute-first). If a LinkedIn *desktop ad* is ever needed, cut a 1:1/4:5 variant.

## 6. Social copy
- **Post caption:** *New to the US #1: your US LLC may owe a filing you've never heard of — Form 5472.
  If you're a foreign owner of a US single-member LLC, this one's easy to miss. It can be due even
  with no income and no US clients, because it's triggered by money moving between you and your LLC —
  like the funds you wire in just to open it. It's filed with a pro-forma Form 1120. The calm part:
  it's just an information form, and filing it correctly and on time keeps you clear of the $25,000
  penalty. Save this before you file. Not sure it applies to you? That's a quick question for us.
  General information, not tax advice. Source: IRS Instructions for Form 5472.*
- **Cover / on-screen hook text:** $25,000 penalty founders miss
- **Hashtags (3–5):** #Form5472 #USLLC #foreignfounders #newtotheUS #LLCtaxes
- **Caption disclaimer line:** General information, not tax advice — talk to us about your situation.

## 7. Review sign-off
- **Fact-check:** **PASS** — every figure verified against IRS Instructions for Form 5472 (Rev. Dec
  2024). Two advisory refinements applied (penalty-vs-filing hook wording; "correctly and on time").
- **Brand-guard:** **PASS after fix** — calm senior-advisor voice, no fear/hype/loophole; disclaimer
  + IRS source present; series-opener framing works. The single flagged line (hook conflation) is fixed.
- **Facts to personally confirm on production day** *(rates are year-indexed; re-pull i5472):*
  - The **$25,000** penalty and the **$25,000-per-30-days** continuation are unchanged in the current
    (2026) instructions.
  - The **exact filing due date** for the tax year named (weekends/holidays shift ~April 15).
  - The current **mail/fax address** for the pro-forma 1120 + 5472 (Ogden, UT M/S 6112; fax
    855-887-7737) and that **e-file** is still unavailable for these filings.
  - That any real example founder actually had a **reportable transaction** that year (a truly dormant
    LLC is an edge case — this is why the CTA points to a quick question, not "everyone must file").
- **RU version:** not produced (EN-only for now) — this is a clean candidate for an RU/UA re-voice.
