---
name: lilian-notebook
description: Capture, write, or publish a note in Lilian's Notebook (projects/lilian-notebook/) — her personal record of the lessons this firm learned the hard way, each written as the rule to follow next time. Use when Lilian says "anota esto en mi libreta" / "add this to my notebook", when she asks what the notebook already says about something, or when the notebook page needs rebuilding and republishing. NEVER propose or offer a note unprompted — Lilian ruled that out on 2026-08-13; she asks, or it does not happen. Encodes the capture rule, the required entry structure (the title IS the lesson; ID · tags · certainty · star · came-from · full-record pointer), what belongs in the notebook versus in a skill / SOP / client file / FOLLOW-UPS row, the no-client-data line, and the build-and-publish flow (one link, never a new URL). Read before adding or editing anything under projects/lilian-notebook/notes/.
---

# Lilian's Notebook — the house way

The engine behind [`projects/lilian-notebook/`](../../../projects/lilian-notebook/): Lilian's
personal notebook of **lessons**, each one written as the rule to follow next time, rendered as
**one searchable page she has bookmarked.** Read the project's
[`README.md`](../../../projects/lilian-notebook/README.md) for the layout and the link.

**Why it exists, in one line:** a lesson buried in a `FOLLOW-UPS.md` row **dies when the row is
deleted**, and a lesson buried in one client's file is invisible to the next client it applies
to. The notebook is where the knowledge outlives the case.

**Whose it is.** Lilian's, by her decision (Aug 2026) — she is the only person writing in it.
This is the repo's one deliberate exception to *never partition by person*. It isn't hidden and
it isn't secret; it just isn't addressed to anyone else. Don't file firm-wide procedure here
(see §4).

---

## 0. What Lilian actually wants in it — the filter (learned the hard way, Aug 2026)

**This is the section to get right.** The notebook shipped with 33 notes; Lilian cut it to
**four** and named the fifth she wanted written. Her words: *"El resto de las cosas son cosas
totalmente innecesarias que no tienen nada que ver con lo que quiero hacer."* So the default is
**not** "capture every lesson" — it is **capture hard, reusable knowledge and nothing else.**

**She keeps a note when it answers one of these four questions:**

| | Example she kept |
|---|---|
| **How does this system actually behave?** | Gusto files nothing, not even $0 returns, until the first check date (LN-10) |
| **What does this cost?** | Florida late RT reports: "$25 for each month a report is late", plus interest on the penalty (LN-21) |
| **What's inside the fee, and how do we price this?** | Tax prep excludes preparing the financials (LN-23) · cap the hours, take an advance (LN-22) |
| **How do I carry out this procedure?** | Moving the QuickBooks primary admin when the code goes to a phone nobody can reach (LN-34) |

**She threw out everything in these families** — do not file them here, however true they are:

- **Process hygiene and professional judgement** — *take the representative's name, get it in
  writing, verify an email address, don't rely on a verbal answer.* She knows.
- **How to communicate** — drafting, shortening, what to say to a client or a vendor.
- **Our own machinery** — the repo, git, parallel sessions, how the record is kept.
- **Argumentation and nuance about a live matter** — how to frame a letter, what a presumption
  is. That belongs in the client file, where the matter lives.
- **A single matter's running state.** A lesson is durable and applies to the *next* client; the
  current one's status is `FOLLOW-UPS.md` and the client file.

**A procedure note is welcome even when the procedure hasn't finished** — she asked for LN-34
explicitly while the handover was still open, *"para la próxima vez recordar cómo se hace"*.
Write what's established, mark it `Working assumption`, and say where it's paused.

**This filter is provisional and she said so** — *"tenemos que ir perfeccionándolo y que vayas
entendiendo lo que quiero."* **Update this section whenever she keeps, rejects or reshapes a note
in a way that sharpens the line.**

⚠️ **This filter applies to notes SHE HAS ASKED FOR — it is not a licence to offer one.** It used
to end "when a note is borderline, offer it and let her decide"; that clause is **struck**, and
rule zero below replaces it. A borderline note is simply not written unless she asks.

## 1. Rule zero — 🛑 NEVER propose a note. She asks, or it doesn't happen.

**Lilian's instruction, 2026-08-13, and it is absolute:**

> *"No me propongas más nada para mi libreta. Cuando crea que algo es necesario, yo misma te lo
> voy a decir."*

So: a session that turns up a beautiful lesson **says nothing about the notebook.** Not
*"¿lo anoto en tu libreta?"*, not a one-line offer at the end of a reply, not a hint that
something "would make a good note". **The trigger is her asking, in that session** — *"anota
esto en mi libreta"*, *"add this to my notebook"* — and nothing else.

⚠️ **This reverses the rule that ran Aug 2026 → 2026-08-13**, which said to propose a note
unprompted because "she will not remember to ask." **The judgement was never the problem — the
asking was.** She had already cut the notebook's first 33 notes to four (§0); the proposals kept
coming anyway, and this is what stopped them. **Do not reintroduce it in a softer form** ("just
flagging in case…"), and do not treat a particularly good lesson as an exception. There is no
threshold above which offering becomes acceptable.

**Two things are still part of the job, and neither is a proposal:**

1. **Answering from the notebook.** When she asks about a topic a note already covers, answer
   *from the note* and give its ID, so the notebook proves itself.
2. **Putting the lesson in its real home — silently, as usual.** A repeatable workflow belongs
   in a [skill](../), a procedure in an [SOP](../../../projects/sops/), a client fact in that
   client's [Client Intelligence](../../../projects/client-intelligence/) file, an unfinished
   thread in [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md). Those routes are untouched by this rule
   and are where a session's learning should land. **The notebook is hers; the rest of the repo
   is the firm's.**

When she *does* ask for a note, §0's filter and §2's structure still apply, and if a note
already covers the topic, say so and **enrich that note** rather than adding a second (§5).

## 2. Writing the entry

Copy a block from
[`notes/_entry-template.md`](../../../projects/lilian-notebook/notes/_entry-template.md) into
the right category file. The structure is not cosmetic — `render/build.mjs` parses it.

```
## LN-00 — The lesson, as the rule, in one line   (use the next real ID — see rule 4)
- **Tags:** two to four · lowercase · dot-separated
- **Certainty:** Established | Firm rule | Working assumption
- **Star:** yes | no
- **Added:** YYYY-MM-DD
- **Came from:** the client, matter or session that taught it — and the date
- **Detail:** where the full record lives

**What happened.** …

**The rule.** …
```

**Lists are supported, and a procedure note should use one.** A block whose first line starts
`1.` / `2.` renders as numbered steps (teal counters in the margin); `-` renders as bullets. The
label may also carry a suffix — `**The rule — the order, and why it's that order.**` — so a
procedure note can say what kind of rule it is; only the keyword `The rule` / `What happened`
picks the bucket, and the whole label is stripped from the rendered text.

Hard rules:

1. **The title IS the lesson**, written as the rule, in the imperative. Not *"The Gusto
   problem"* → *"Gusto files nothing, not even $0 returns, until the first check date"*. The
   page shows titles and rules with nothing expanded, so a title that only names the topic
   makes the list useless.
2. **`**The rule.**` is mandatory** — the build throws without it. It must stand alone: it
   renders un-expanded, so it can't depend on the story above it.
3. **`**What happened.**` is the evidence, and it must be concrete** — names, dates, amounts,
   who said what. Two to four sentences. Enough that the rule is obviously true and the
   situation is recognisable next time.
4. **IDs are global and never reused — take the next number above the highest that has EVER
   existed**, which is not the same as the highest currently in `notes/`, because notes get
   pruned (§5). Check `git log -p projects/lilian-notebook/notes/` if the answer isn't obvious.
   The build fails on a duplicate but cannot catch a *reused* number, so this one is on you.
5. **Certainty is exactly one of three values, and the build enforces it** — they render as a
   pill: `Established` (we verified it), `Firm rule` (Julia's or Lilian's standing decision),
   `Working assumption` (our best reading, not confirmed). Anything else fails the build. Nuance
   goes in the body, never in the pill. **Never label something Established that a person hasn't
   actually confirmed, and never let a note's TITLE assert more than its evidence** — if the
   client file lists a question as open, the note has to say so too. The notebook's whole value
   is that Lilian can trust the label. *(Aug 2026: LN-21 shipped claiming the Florida penalty
   accrues "per report" and stamped `Established`, while `tsminibears.md` recorded
   per-report-vs-per-month-overall as an open question. Caught in review.)*
   ⚠️ **Every metadata field is one line, no trailing commentary, and no blank line between
   them** — the parser stops at the first blank line, and an unknown or misspelled field name is
   a build error rather than a silently-dropped value.
6. **`Detail:` points at the full record; it doesn't duplicate it.** The case history stays in
   the client file, the skill, or the Double note. Keep repo-relative links in the Markdown
   (they work on GitHub); the render turns them into plain reference text on purpose, since the
   page is read from a shareable link where a repo path would 404.
7. **Star = Lilian's marked pages.** Set it when the note is one she'd want on the first page
   of a paper notebook. Default `no`; it's hers to set, so ask rather than assume.

## 3. Categories

| File | Holds |
|---|---|
| `platforms.md` | How the systems behave — Gusto, QuickBooks, Double, Odoo — and the procedures for working in them |
| `costs.md` | What things cost, how a job is priced, what is and isn't inside a fee |

**Two, on purpose.** It started with five; the three that held process, communication and
repo lessons were deleted with their notes when Lilian cut the notebook to what she actually
wanted (§0). A new category is **a new `notes/*.md` + a row in `CATEGORIES`** in
`render/build.mjs` (the build fails loudly on a notes file with no row) — but **don't create one
speculatively.** Add it when a real note has nowhere to go, and expect `agencies.md` to come back
the first time a note is purely about an agency's own rules rather than the cost of them.

## 4. What belongs here vs. somewhere else

The notebook is **a lesson index, not a fourth system of record.** Get this wrong and it
becomes the thing nobody trusts.

| If it is… | It goes… |
|---|---|
| A lesson — "next time, do X" | **here** |
| A task waiting on someone | [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) — and the lesson it taught comes here |
| A future idea to build | [`BACKLOG.md`](../../../BACKLOG.md) |
| A step-by-step procedure anyone must follow | [`projects/sops/`](../../../projects/sops/) via [`sop-authoring`](../sop-authoring/) |
| A fact about one client | [`client-intelligence/`](../../../projects/client-intelligence/) |
| A rule that governs how Claude works | the relevant skill, or `CLAUDE.md` |

**Promotion, not migration.** When a note turns out to be a rule the whole firm needs, put it
where the firm will meet it — a skill, an SOP, `CLAUDE.md` — **and leave it here**, as the
notebook's record of how we found out. Say so in the note's `Detail:` line. Don't delete notes:
if one is superseded, rewrite it and note what changed (git keeps the trail).

**No client secrets, figures, or personal data.** Client business names and what happened are
fine — they're already in `FOLLOW-UPS.md` and the client files. Their dollar figures,
account numbers, logins and personal contact details stay in Double / Drive / QuickBooks.
Amounts that *are* the lesson — a published penalty rate, a fee cap — are fine. **English**,
like every repo artifact, whatever language the session ran in.

## 5. Editing, and pruning

Prefer editing to adding. Two lessons about the same trap, in different words, is how a notebook
stops being worth opening.

- **Rewrite in place**, keep the ID, and set `- **Updated:** YYYY-MM-DD` (the page shows
  "added · updated").
- **A superseded note gets corrected, not left standing** — someone will read it and act on
  it. If its certainty drops, say why in the body.
- If two notes have converged, **merge into the lower ID** and delete the other.

**Pruning is normal and it is Lilian's call.** She curates this hard (§0) — she removed 29 of the
first 33 notes in one pass. When she says a note is unnecessary, **delete it**; git history keeps
it, so nothing is lost and it can be restored by name. Never delete one on your own initiative,
and never quietly re-add one she removed.

- **IDs are never reused, even after a deletion** (§2 rule 4). `LN-33` was written and then cut,
  so the next note was `LN-34`.
- **The build catches the fallout of a deletion inside notes:** it fails if any surviving note
  points at an `LN-##` that no longer exists — in the body **or** in `Detail:` / `Came from:`.
  Fix the sentence, usually by folding the useful half of the retired note into the survivor,
  rather than restoring a note Lilian dropped.
- ⚠️ **It cannot check prose OUTSIDE `notes/`.** After pruning, grep the repo for the retired ID
  — this skill, the project README and `CLAUDE.md` have all cited a note by number.
  `grep -rn "LN-##" --include=*.md .` takes a second and a dangling pointer is, in this skill's
  own words, worse than no pointer at all.

## 6. Build, verify, publish

```bash
node projects/lilian-notebook/render/build.mjs      # → notebook.html + scratch/notebook.artifact.html
node projects/knowledge-hub/build-hub.mjs           # the Hub embeds the same page — rebuild it too
```

Then, before publishing — the same gate as the Hub, because one thrown parse error ships a
blank page:

1. The build printed the note count and it **matches what you expect.** It fails loudly on a
   duplicate ID, a missing `**The rule.**` paragraph, an unregistered category file, and a
   cross-reference to an `LN-##` that no longer exists — read the error, don't work around it.
2. Open `notebook.html` in a browser and **click something**: type in the search box, hit a
   category chip, expand a note, follow a `#LN-##` link. Content must be visible **with JS
   off** too — the page renders every note by default and JS only filters.
3. Check it in **dark and at phone width**. The sticky control bar sits at `top:56px` because
   that is `atlas.css`'s `.bar` height; if the toolbar ever changes height, that number moves
   with it.

**Publish to the one link** — `https://claude.ai/code/artifact/90247f17-4bb0-4e06-b867-a52a8ff1b6ff`.
Point the Artifact tool at `scratch/notebook.artifact.html` **and pass that URL as `url`**. Omitting `url` mints
a second link — which already happened once to the Hub. Publish from **merged `main`**, and
republish after every change to a note, unprompted: Lilian's bookmark has to be current or the
notebook is worse than the paper one.

## 7. Update this skill when…

- **Lilian keeps or rejects a note in a way that sharpens the §0 filter** — that section is the
  whole value of this skill, and she said explicitly it's still being tuned.
- Lilian establishes a new preference about how her notebook reads or what a note must carry.
- A category is added, renamed, or retired (update §3 **and** `CATEGORIES` in the build).
- The entry format changes in `render/build.mjs` (§2 must match the parser, or the build breaks).
- The publish flow changes (a new link, a new capability flag).
