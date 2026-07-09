# Video Generation

> **Status:** Active · **Owner:** Julia · **Started:** 2026

Produce on-brand short-form marketing **videos** for JK Accounting Group — from a topic to a
finished narration script and a build-ready **ElevenLabs Flows** production brief.

## Purpose

Extend the firm's marketing output from static assets into short-form video (social clips,
explainers, promos) while keeping everything on-brand and, eventually, bilingual EN/RU. Sister
project to [`collateral/`](../collateral/), focused on motion.

The hard part of video isn't rendering — it's getting a **tight, accurate, on-brand script** and a
clear plan for the visuals. This project's engine (the `video-script-pipeline` skill) runs a
writers'-room pipeline over a topic and hands off a locked script plus a scene-by-scene brief; the
video itself is rendered in **ElevenCreative Flows** (a UI canvas — see below).

## What's here

```
video-generation/
├── README.md          ← you are here
├── research/          ← content-opportunity reports: what to make + how (demand/trend research)
└── scripts/           ← generated output: <topic-slug>-<YYYY-MM-DD>.md (script + Flows brief)
```

The workflow has two layers: a **Trend Scout** front layer decides *what to make and how to deliver
it* (output → `research/`), then the writers'-room pipeline turns a chosen topic + angle into a
script + Flows brief (output → `scripts/`). Start from the latest report in
[`research/`](./research/) to pick a view-worthy, on-brand topic.

## Brand & design

Follows the shared brand: [`../../../brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md) (colors,
type, logo, voice). Motion should feel **calm and premium — no hype, no fear.** The voice is a calm
senior advisor; "viral" here means clear and useful enough to share, never clickbait. The firm's
existing **avatar** is the only on-screen face (no stock/AI people).

## Skills & tooling

- **[`video-script-pipeline`](../../../.claude/skills/video-script-pipeline/)** — the engine. **Trend
  Scout** (picks a view-worthy, on-brand topic + angle) → Researcher → Scriptwriter → Producer →
  Social/Viral editor → Fact-check + Brand-guardian → a locked script and an ElevenLabs Flows
  production brief. The Trend Scout method is in the skill's `reference/content-strategy.md`; its
  output reports land in [`research/`](./research/).

**On ElevenLabs:** the video (avatar lip-sync, SFX, music, visuals, export) is built in
**ElevenCreative Flows**, a node-based UI canvas — there is **no general API** to run a Flow yet
(programmatic execution is enterprise early-access / planned). The ElevenLabs **MCP server is
audio-only** (TTS, voice cloning, SFX). So the pipeline automates everything up to a build-ready
brief; the Flow is run by hand in ElevenCreative. Captions are added in ElevenCreative **Studio**,
not on the Flows canvas.

## Outputs

Generated scripts + briefs land in [`scripts/`](./scripts/) as
`<topic-slug>-<YYYY-MM-DD>.md`. Treat them like the reasonable-comp reports: **working output,
committed/pushed only when Julia asks.** Rendered video files (large media) are **not** committed —
keep them in ElevenLabs / local storage and note the link in the script file if useful.

## Working on this / notes for AI

- Start from the [`video-script-pipeline` skill](../../../.claude/skills/video-script-pipeline/) — read
  its `SKILL.md` before producing anything.
- **One idea per video.** If a topic has three points, that's three videos.
- **Real facts only** — every tax figure needs a source + tax year; no invented stats. The
  Fact-checker gate is non-negotiable, and every video carries the "educational, not advice" line.
- **EN only for now.** Structure leaves room for a native RU version later — never machine-translate.
- The user already has an ElevenLabs **avatar** and **voice clone**; reference them, don't recreate.
- "Done" = a locked script + a filled Flows brief in `scripts/`, reviewed clean by fact-check and
  brand-guard, with the run-it-in-Flows steps the user can follow.
