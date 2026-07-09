<!--
  VIDEO SCRIPT + FLOWS PRODUCTION BRIEF — output template.
  Copy this file to projects/marketing/video-generation/scripts/<topic-slug>-<YYYY-MM-DD>.md and fill every
  {{PLACEHOLDER}}. Delete this comment and any unused optional rows when done. Keep the section
  order — it mirrors the pipeline hand-offs.
-->

# {{VIDEO TITLE}} — video script & Flows brief

> **Topic:** {{topic}} · **Goal:** {{awareness | educational | lead-gen}} · **Platform(s):** {{Reels/Shorts/TikTok/LinkedIn}}
> **Duration target:** {{~60s}} · **Language:** English · **Date:** {{YYYY-MM-DD}} · **Status:** {{Draft | Locked}}
> **Avatar:** {{avatar name}} · **Voice clone:** {{voice-clone name}}

**Educational information only — not tax, legal, or accounting advice. No client relationship is
created. Outcomes depend on your facts; talk to us about your situation.** *(This line must also
appear on-screen/spoken and in the caption.)*

---

## 1. Research brief (from the Researcher)
- **The one idea:** {{the single takeaway, in one sentence}}
- **Misconception it corrects:** {{the common wrong belief}}
- **Why it matters to our audience:** {{plain-English stakes}}
- **Verified facts (each with source + tax year):**
  - {{fact}} — {{source}} ({{tax year}})
  - {{fact}} — {{source}} ({{tax year}})
- **Examples used:** {{realistic example 1}}; {{example 2}}
- **Hook angle chosen:** {{which pattern + why}}

## 2. Locked narration script
The exact words spoken, in beats. Word count: {{N}} words (~{{target}}).

| Beat | Time | Narration (verbatim) |
|---|---|---|
| **Hook** | 0–3s | {{hook line, 10–14 words}} |
| **Problem / context** | {{3–8s}} | {{…}} |
| **Insight** | {{8–20s}} | {{the one idea}} |
| **Proof / payoff** | {{20–25s}} | {{sourced number / rule / mini-example}} |
| **Soft CTA** | last 3–5s | {{follow / save / resource in bio}} |

*On-screen disclaimer line:* {{short "educational, not advice" tag to display}}

## 3. Flows production brief
One row per beat. See `flows-production-brief.md` for what each field maps to in ElevenCreative.
Carry the delivery specs from §5 into every visual node (9:16 · 1080×1920).

| Beat | Type | Narration | Voice / Avatar | Visual source + prompt | SFX | Music | On-screen text / overlay | Dur |
|---|---|---|---|---|---|---|---|---|
| Hook | {{Avatar / Image→Video / VO-over-visual}} | {{words}} | {{voice clone}} / {{avatar}} | {{prompt or b-roll}} | {{cue or —}} | {{bed or —}} | {{text}} | {{s}} |
| … | | | | | | | | |

- **Music bed (whole video):** {{mood/genre/instrumentation/tempo prompt}} · length {{fixed s / auto}} — keep low & warm.
- **Global SFX note:** {{subtle cues only, or "none"}}
- **Composition / layering:** {{how avatar + music + SFX + overlays stack}}

## 4. Run it in Flows (ElevenCreative)
1. Confirm the **avatar** and **voice clone** exist (one-time). 
2. New flow → add an **Avatar** node; paste each beat's narration, pick the voice clone + avatar.
3. Set aspect ratio **9:16**, resolution 1080×1920, per-beat duration.
4. (Optional) **Image → Video** nodes for b-roll; **Lipsync** if generated visuals must speak.
5. **Sound Effects** + **Music** nodes per the brief.
6. Wire all tracks into a **Composition** node; preview.
7. Export MP4 — or **send to ElevenCreative Studio** for burned-in captions + timing.
8. Save the flow as a **template** for the next topic.

*(No API step: the Flow is run in the UI. Captions are a Studio step, not a Flows node.)*

## 5. Delivery specs
- **Aspect / resolution:** 9:16 · 1080×1920 (design core inside the central 1080×1080).
- **File:** MP4 · H.264 + AAC · 30fps.
- **Captions:** burned-in (Studio), bold high-contrast, lower-middle third; `.srt` for LinkedIn.
- **Safe zones:** ~250px top · ~400–450px bottom · ~150px right.
- **Cover frame:** dedicated 1080×1920; title {{3–5 words}} inside the central square.
- **Platform notes:** {{e.g. add a 1:1/4:5 variant if LinkedIn desktop ad reach is needed}}

## 6. Social copy
- **Post caption:** {{front-loaded value/hook line … + soft CTA}}
- **Cover / on-screen hook text:** {{3–5 words}}
- **Hashtags (3–5, targeted):** {{#tag #tag #tag}}
- **Caption disclaimer line:** Educational only — not advice. Talk to us about your situation.

## 7. Review sign-off
- **Fact-check:** {{pass — all figures sourced + year-correct / issues fixed}}
- **Brand-guard:** {{pass — calm voice, on-palette, approved avatar / issues fixed}}
- **Facts for the user to personally confirm before publishing:** {{list, or "none"}}
- **RU version:** not produced (EN-only for now).
