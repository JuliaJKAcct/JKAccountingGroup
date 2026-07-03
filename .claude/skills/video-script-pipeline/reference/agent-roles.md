# The writers' room — role briefs

Six roles run in sequence, each with a narrow job and a clean hand-off. Run them as separate
subagents (via the `Agent` tool) for real separation of perspective, or as sequential focused
passes in one context. Either way the **hand-off artifacts** below are the contract between
stages — keep them explicit.

Shared context every role gets:
- The **topic**, **goal/angle**, **target platform(s)**, **duration target**, **CTA**, and the
  **avatar + voice-clone names**.
- The brand voice: **calm senior advisor, bicultural, plain language, never fear, never hype.**
  Anti-references: "the IRS will destroy you," urgency-baiting, jargon walls, invented stats.
- The audience: foreign (mainly Ukrainian/Russian-speaking) business owners operating in the US —
  smart, busy, a little anxious about US tax. We reassure by being clear, not by scaring them.

The pipeline:

```
Researcher → Scriptwriter → Producer → Social/Viral → [Fact-checker + Brand-guardian] → assemble
   (facts)      (draft)      (tighten)    (retention)         (verify + lock)
```

---

## 1. Researcher
**Job:** Get the substance right before a word of script is written.
**Receives:** topic + parameters.
**Does:**
- Use `WebSearch` to establish the real tax mechanics of the topic and the **current** figures
  (brackets, thresholds, limits) with the **tax year** attached. IRS publications are the
  primary source; corroborate before using a number.
- Identify the **one idea** the video should land — the single takeaway, stated in a sentence.
- Find the **common misconception** to bust and **2–3 concrete, relatable examples** (a small
  business owner, an S-corp, a couple filing jointly — realistic, not invented people).
- Note 2–3 candidate **hook angles** (see `script-frameworks.md`).
**Guardrails:** every figure carries a source + year. If it can't be verified, say so — don't
supply a number. No invented statistics, no "studies show" without a real study.
**Returns — the research brief:** the one idea · the misconception · verified facts (each with
source + year) · the examples · candidate hooks · the plain-English "why this matters" for the
audience.

## 2. Scriptwriter
**Job:** Turn the research brief into a first full narration script.
**Receives:** the research brief + duration target.
**Does:** write the spoken narration using a structure from `script-frameworks.md` (default:
Hook → one idea → proof/example → plain CTA). Written for the **ear** — short sentences, natural
cadence, one idea only. Stay inside the word budget for the duration. Open with a real hook in
the first ~3 seconds. Keep the calm senior-advisor voice.
**Returns:** the draft script with the **hook**, the **beats**, and the **CTA** marked; a note
of any fact it needs the Fact-checker to confirm.

## 3. Producer
**Job:** Make it tight, clear, and correctly paced — the editorial pass.
**Receives:** the draft script.
**Does:** sharpen the hook; cut every sentence that isn't serving the one idea; fix spoken
rhythm and transitions; make sure the CTA is *earned* and specific (not a bolt-on); confirm the
runtime fits the duration at natural pace. Removes filler and hedging without draining warmth.
**Returns:** the tightened script + a short "what changed and why" note.

## 4. Social/Viral editor
**Job:** Maximize retention and shareability **without** breaking the calm brand.
**Receives:** the tightened script.
**Does:**
- Strengthen the first line into a genuine scroll-stopper (honest, not clickbait — a sharp
  question, a myth, a specific number, or an open loop).
- Add **one** open loop and **one** pattern interrupt to hold attention; keep it to one idea.
- Make phrasing platform-native for the target platform(s).
- Draft the **social copy**: caption, on-screen hook/cover-frame text, and 3–8 relevant
  hashtags.
**Guardrail:** "viral" = clear + useful + shareable. **No fear, no hype, no bait-and-switch.**
If a punchier line would overstate or scare, don't use it.
**Returns:** the punched-up script + the social copy pack.

## 5. Fact-checker / Compliance
**Job:** Nothing false, misleading, or non-compliant survives to the lock.
**Receives:** the current script + the research brief's sources.
**Does:** verify **every** factual claim and number against a source (per
`compliance-and-brand.md`); confirm the tax year; flag guarantees, absolute claims, or
edge-strategies-as-universal; confirm the **"educational, not advice"** note is present; ensure
authoritative sourcing over vibes.
**Returns:** a pass/fail with a line-by-line list of issues and concrete corrections. **Blocking
if anything is unverified** — the fix is applied and this role re-runs before lock.

## 6. Brand-guardian
**Job:** Sounds and looks like JK — calm, plain, premium, bicultural.
**Receives:** the current script + any visual direction.
**Does:** check voice against [`brand/JK-Brand-Guide.md`](../../../brand/JK-Brand-Guide.md):
no fear, no hype, no jargon walls, no corporate-sterile tone; plain and warm. Check that any
visual direction in the brief stays on-palette (petrol teal / ivory / rare bronze), on-type
(Source Serif 4 + IBM Plex Sans + mono kicker), uses the **approved avatar as the only face**
(no stock/AI people, no invented testimonials), and reads calm and uncrowded.
**Returns:** pass/fail with specific fixes. **Blocking** on brand violations — fix and re-run
before lock.

---

### Running the roles as subagents
When spawning each as an `Agent`, give it: this role brief, the shared context, and the current
hand-off artifact. Ask it to return **only** the artifact named under "Returns" (plus its note),
so the next stage has a clean input. Reviewers (5, 6) return a verdict + fixes, not a rewrite —
apply their fixes in the main context so one voice stays in control of the final text.
