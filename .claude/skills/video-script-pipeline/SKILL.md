---
name: video-script-pipeline
description: Turn a video topic into a finished, on-brand marketing-video script plus a scene-by-scene ElevenLabs Flows production brief for JK Accounting Group. Use when the user wants to make a short-form marketing/explainer video, script a Reel/Short/TikTok/LinkedIn video, or produce a video on a tax/accounting topic (e.g. "structuring income for better tax-bracket planning"). Runs a writers'-room pipeline — Researcher → Scriptwriter → Producer → Social/Viral editor → Fact-check + Brand-guardian — to produce one locked narration script, then assembles a Flows production brief (avatar, voice clone, per-beat visuals/b-roll, sound effects, music, captions, aspect ratio, safe zones, cover frame, CTA) mapped to the ElevenLabs Flows node chain so the user can build and render the video in ElevenCreative. English only for now; structured so RU can be added later.
---

# Video Script Pipeline (topic → script → ElevenLabs Flows brief)

Take one topic and produce two things: a **locked narration script** for a short-form
marketing video, and a **Flows production brief** — a scene-by-scene spec (avatar, voice
clone, on-screen visuals, sound effects, music, captions) mapped to the **ElevenLabs Flows**
node chain so the user can build and render the video in **ElevenCreative**.

**Why the split.** The ElevenLabs *MCP server is audio-only* (TTS, voice cloning, SFX,
transcription). The video itself — avatar lip-sync, video models, SFX/music/visual overlays,
export — lives in **Flows**, which today is a **UI canvas** (programmatic/API runs are
enterprise early-access, not general). So this skill automates everything up to and including
a build-ready brief; the user runs the Flow. Everything downstream of the locked script is a
guided click-through, not a headless API call. Don't claim the skill renders the video itself.

This is a firm serving a calm, anxious audience of foreign (mainly Ukrainian/Russian-speaking)
business owners in the US. The brand voice is **a calm senior advisor — never fear, never
hype.** "Viral" here means *clear, useful, and shareable*, not clickbait. Hold that line
through every pass.

## Read these first
- `reference/content-strategy.md` — the **Trend Scout** front layer: how to pick a view-worthy,
  on-brand topic + angle (demand + delivery research); the latest opportunity report lives in
  `projects/video-generation/research/`.
- `reference/agent-roles.md` — the writers'-room roles (Trend Scout, Researcher, Scriptwriter, Producer, Social/Viral, Fact-checker, Brand-guardian): what each receives, does, and returns.
- `reference/script-frameworks.md` — hook, structure, pacing, CTA, and word-count-for-duration patterns for calm short-form finance explainers.
- `reference/compliance-and-brand.md` — the line-by-line guardrails the Fact-checker and Brand-guardian enforce (tax-content compliance + JK brand voice for video).
- `reference/flows-production-brief.md` — what ElevenLabs Flows is, its verified node chain, and how each brief field maps to a Flows node.
- `reference/script-template.md` — the output template (locked script + production brief) to fill.

## Guardrails (do not skip)
- **Real facts only.** Every tax figure, bracket, threshold, or statistic must be verified
  against an authoritative source (IRS publications first) via `WebSearch` and cited. If a
  number can't be verified, cut it — **never invent a stat, quote, or "studies show".** This
  is the brand's hardest rule and the Fact-checker's whole job.
- **Educational, not advice.** Every script carries a plain "educational, not tax/legal
  advice — talk to us about your situation" note. No guarantees, no specific-outcome promises,
  no "this cuts your taxes in half." Present planning ideas as *general* and situation-dependent.
- **Calm, not fear.** Never "the IRS will destroy you." The audience is anxious enough — we are
  the calm in the room. Kill hype, urgency-baiting, and doom framing on sight.
- **On-brand.** Voice, and any visual direction in the brief, follow
  [`brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md): petrol teal / ivory / rare
  bronze, Source Serif 4 + IBM Plex Sans + mono kicker, real faces only (the avatar is the
  approved face — no stock/AI people), no invented testimonials.
- **The user's assets are fixed inputs.** They already have an ElevenLabs **avatar** and
  **voice clone** — reference them; don't propose recreating them.
- **English only for now.** Write natively in English. Keep the structure so a Russian version
  can be produced later without rework (note where RU would slot in), but don't machine-translate.

## Workflow

### Step 0 — Content strategy (pick a topic + angle) — *optional / periodic*
Run the **Trend Scout** (`content-strategy.md`) when there's no topic in hand, or when the user
wants a view-worthy idea. Read the latest report in `projects/video-generation/research/` and pick
an opportunity, **or** refresh it with the demand+delivery sweep. Hand the pipeline a **content
brief**: the topic, the JK angle (the part generic creators skip), an on-brand hook, a format,
platform fit, and the compliance flag. **Skip this step if the user already has a topic + angle** —
go straight to intake. The compliance flag from here becomes a required check for the Fact-checker.

### Step 1 — Intake
Confirm the topic and gather the few parameters that steer the script. (If Step 0 ran, the topic +
angle + hook + format + platform are already chosen — just confirm and fill any gaps.) Use `AskUserQuestion`
for the choices; accept plain answers for the rest. Collect:
- **Topic** (required) — e.g. "Structuring income for better tax-bracket planning."
- **Goal/angle** — awareness / educational / lead-gen (drives the CTA).
- **Target platform(s)** — Instagram Reels, YouTube Shorts, TikTok, LinkedIn (default: vertical
  9:16 for all; see `script-frameworks.md` + brief for per-platform notes).
- **Duration target** — ~30s / ~60s / ~90s (default ~60s). This sets the word budget.
- **CTA** — what the viewer should do (book a consult / follow / DM / visit site).
- **Avatar + voice-clone names** — the exact ElevenLabs identities to reference in the brief.
- **Must-include points or sources** — anything the user specifically wants covered, and any
  angle to avoid.
If the user just gives a topic, proceed with the defaults above and say what you assumed.

### Step 2 — Research (Researcher)
Run the **Researcher** role (`agent-roles.md`). Using `WebSearch`, gather the substance: the
real tax mechanics for the topic, current IRS figures/brackets/thresholds (with the tax year),
the common misconception to bust, 2–3 concrete relatable examples, and the single sharpest
"one idea" the video should land. **Every figure gets a source.** Output: a short **research
brief** (facts + citations + the one-idea + suggested hook angles). Do not write the script yet.

### Step 3 — Draft (Scriptwriter)
Run the **Scriptwriter** role. Turn the research brief into a first full narration script for
the target duration, using the structures in `script-frameworks.md` (strong 3-second hook →
one clear idea → proof → plain CTA). Written for the **ear**, in the brand's calm voice, within
the word budget for the duration. Mark the hook, the beats, and the CTA.

### Step 4 — Producer pass (Producer)
Run the **Producer** role. Tighten structure and pacing: sharpen the hook, cut anything that
isn't the one idea, fix spoken cadence, ensure the CTA is earned and specific, confirm it fits
the duration. Returns a tightened script + a note on what changed and why.

### Step 5 — Social/viral pass (Social/Viral editor)
Run the **Social/Viral** role. Add on-brand retention: a scroll-stopping (but honest) opening
line, an open loop, one pattern interrupt, and platform-native phrasing — **calm and clear, not
clickbait or fear.** Also drafts the caption copy, on-screen text/cover-frame line, and
hashtags. Returns the punched-up script + social copy.

### Step 6 — Review: Fact-check + Brand-guardian (run both)
Run the **Fact-checker** and **Brand-guardian** roles against the current script (they can run
in parallel). Fact-checker verifies every claim/number against a source and flags/corrects
anything unverifiable per `compliance-and-brand.md`. Brand-guardian checks voice, no-fear/no-
hype, the educational-not-advice note, and visual direction against the brand guide. **If either
returns blocking issues, apply the fixes and re-run that reviewer** before locking. Only a
clean pass locks the script.

### Step 7 — Assemble the final script + Flows production brief
Copy `reference/script-template.md` and fill it out:
- **Locked narration script** — the final spoken words, timed to the beats.
- **Flows production brief** — per `flows-production-brief.md`, a scene-by-scene table mapping
  each beat to Flows nodes: avatar + voice-clone (talking-head), on-screen visuals / b-roll,
  sound-effect cues, music mood, captions, plus delivery specs (aspect ratio, duration, safe
  zones, cover frame, CTA card) and the platform variant notes.
- **Run-it-in-Flows steps** — the verified node chain the user follows in ElevenCreative.
- **Social copy** — caption, on-screen hook text, hashtags, and the educational-not-advice line.

### Step 8 — Save the output
Save to `projects/video-generation/scripts/<topic-slug>-<YYYY-MM-DD>.md` (slug = lowercase,
hyphenated topic; create the folder if missing). Tell the user the path. **Don't commit or
push unless the user asks** — scripts are working output, like the reasonable-comp reports.

### Step 9 — Summarize in chat
Give the hook line, the one idea, the CTA, and the "next: open Flows, [node chain]" steps. Call
out any facts the user should personally double-check before publishing, and note that this is
EN-only (RU can follow).

## Notes
- Roles can be run as distinct subagents (via the `Agent` tool) for genuine separation of
  perspective, or as sequential focused passes in one context — either is fine; keep the
  hand-offs (research brief → draft → tightened → punched-up → reviewed → assembled) explicit.
- Keep the video's *one idea* sacred — every pass should make it sharper, not add more topics.
  If the user wants to cover three things, that's three videos.
- The Flows render is a human step today. If ElevenLabs ships general Flows API access, the
  assemble step is where programmatic triggering would attach — note it, don't fake it now.
