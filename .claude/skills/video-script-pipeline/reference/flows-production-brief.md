# The Flows production brief — how the script becomes a video

This is the artifact that lets the locked script actually get made. It maps each beat of the
script to the **ElevenLabs Flows** nodes the user wires up in **ElevenCreative**. Fill it into
the table in `script-template.md`.

> **Accuracy note.** Flows is a 2026 product and its canvas UI evolves. The node set and chain
> below are the parts corroborated across ElevenLabs' docs and blog (see citations at the end of
> this file). Where the exact in-canvas label or preset isn't pinned down, this file says so —
> don't assert specifics the user can't find. When in doubt, the Flows Agent side panel (a
> natural-language co-editor built into the canvas) can stub the pipeline from a plain-language
> description of this brief.

## What ElevenLabs Flows is (and isn't, for us)
Flows is a **node-based visual canvas** inside ElevenCreative. Each node is either a
**generative-model node** (Text to Speech, Image Generation, Video, Avatar, Music, Sound
Effects) or a **utility node** (Lipsync, Upscale, Composition). You connect an upstream node's
output port to a downstream node's input port; re-running one node only re-renders its
downstream path (non-destructive iteration). It integrates the full ElevenLabs audio stack plus
**dozens** of third-party image/video models.

What this means for our workflow:
- **The video is built in the UI, by a human.** There is **no general API** to run a Flow yet
  (programmatic execution is "planned"/enterprise early-access). So this brief is a build sheet,
  not something the skill executes.
- **Captions are NOT a Flows node.** Burned-in captions/subtitles are produced in **ElevenCreative
  Studio** (the timeline editor) after the Flow, or via the standalone Subtitles product. The
  brief still specs caption style — just know it's a Studio step.
- **The MCP is audio-only.** If you want to pre-generate the voiceover programmatically (TTS with
  the voice clone) you can do that via the ElevenLabs MCP and import the audio; the avatar
  lip-sync and everything visual still happen in Flows.

## The verified node chain (script → finished video)
1. **Prerequisites (one-time):** confirm the persistent **Avatar** identity and the **Professional
   Voice Clone** already exist in the account. Both are reused on every video — never recreated
   per script.
2. **Start a flow:** ElevenCreative → Flows → new flow (blank, a saved template, or the
   Inspiration gallery). Optionally describe this brief to the **Flows Agent** to stub the chain.
3. **Voice + avatar (the talking head):** add an **Avatar** node and use its integrated
   Text-to-Speech — paste the beat's narration, pick the **voice clone**, pick the **avatar
   identity**; voice and lip-synced video render together. *Alternate:* a standalone **Text to
   Speech** node → wire its audio into the Avatar node, when you want to tune the voiceover
   independently of the visual.
4. **Visual settings:** on the Avatar/Video node set **aspect ratio** (vertical for
   Reels/Shorts/TikTok), resolution, and **duration**. (Aspect ratio/resolution don't change
   credit cost; duration does. The exact preset buttons aren't pinned — treat aspect ratio as an
   adjustable setting that may depend on the chosen model.) Output is MP4 (+ high-res stills).
5. **B-roll / non-avatar visuals (optional):** **Image Generation** node (prompt and/or reference
   image) → animate with a **Video** node; to make generated b-roll speak, feed a speech node +
   the visual into a **Lipsync** node. Match the master aspect ratio.
6. **Sound effects:** a **Sound Effects** node — text prompt + duration (~0.5–30s; leave blank to
   let the model infer) + a prompt-influence value. Keep SFX subtle; this is a calm brand.
7. **Music bed:** a **Music** node — a descriptive prompt (genre, mood, instrumentation, tempo,
   use case) + length. Keep it low, warm, non-dramatic.
8. **Compose:** wire every track into a **Composition** node — the central preview where the
   avatar/video, music, SFX, and overlays layer together.
9. **Iterate non-destructively:** change wording → re-run only the TTS/Avatar node; change the
   bed → re-run only Music. Optionally **Upscale** before export.
10. **Export:** download the Composition as **MP4** for a finished cut, **or** send assets to
    **ElevenCreative Studio** for burned-in captions, precise timing, and manual track layering,
    then export. Save the finished flow as a **reusable template** for the next topic.
11. **(Scale, optional):** duplicate inside the canvas and swap one input (script, hook, later a
    voice/language) to spin variants. No external/API batch runs yet.

## Brief fields (per scene/beat)
Fill one row per beat in the template. Fields marked *plan* are planning-only; the rest map to a node.

| Field | What it captures | Flows node |
|---|---|---|
| Beat # + timecode | Scene order and running runtime vs. duration budget (e.g. 0–3s hook) | *plan* |
| Beat role | Hook / Problem / Insight / Proof / CTA — keeps the spine intact | *plan* |
| Narration (exact words) | The verbatim voiceover for the beat; must fit the word budget | Avatar (integrated TTS) / Text to Speech — text |
| Voice | The Professional Voice Clone; note model (e.g. Eleven v3) + language (EN now) | Avatar / Text to Speech — voice |
| Avatar identity | Which persistent avatar delivers it | Avatar — identity |
| Beat production type | Avatar talking-head / Image→Video b-roll / voiceover-over-visual | Avatar / Image / Video / TTS |
| Aspect ratio + resolution | 9:16 · 1080×1920 master, consistent across nodes | node settings |
| Scene duration | Per-beat seconds (drives cost + keeps total in the sweet spot) | Avatar / Video — duration |
| Visual source + prompt | For non-avatar beats: image/video prompt or reference b-roll | Image Generation / Video — prompt |
| Lipsync mapping | Which audio feeds which visual, if a generated visual must speak | Lipsync — audio + visual |
| SFX cue | Prompt + duration (0.5–30s) + prompt-influence; keep subtle | Sound Effects |
| Music direction | Mood/genre/instrumentation/tempo prompt + length; warm, low | Music |
| On-screen text / overlay | Numbers, labels, b-roll overlays and how layers stack | Composition |
| Caption spec | Burned-in style/placement — **produced in Studio, not Flows** | ElevenCreative Studio |
| Cover / first frame | Dedicated 1080×1920 cover, 3–5 word title inside the central square | export/Studio |
| Export + delivery | MP4 codec/quality; download vs send-to-Studio; target platform(s) | Composition / export |
| Compliance status | Confirms the beat passed fact-check + brand gate | *review* |

Delivery specs (aspect ratio, duration, captions, safe zones, cover) come from
`script-frameworks.md`'s platform section — carry those exact numbers into the brief so the video
is publish-ready, not just rendered.

## Citations (for the Flows facts here)
- https://elevenlabs.io/docs/eleven-creative/products/flows
- https://elevenlabs.io/blog/introducing-flows-in-elevencreative
- https://elevenlabs.io/blog/introducing-flows-agent
- https://elevenlabs.io/docs/overview/capabilities/image-video/avatars · https://elevenlabs.io/blog/introducing-avatars
- https://elevenlabs.io/docs/eleven-creative/products/studio · https://elevenlabs.io/docs/eleven-creative/products/music
- https://elevenlabs.io/docs/overview/capabilities/sound-effects · https://elevenlabs.io/docs/eleven-creative/products/templates
