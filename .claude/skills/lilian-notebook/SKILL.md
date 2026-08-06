---
name: lilian-notebook
description: Capture, write, or publish a note in Lilian's Notebook (projects/lilian-notebook/) — her personal record of the lessons this firm learned the hard way, each written as the rule to follow next time. Use when Lilian says "anota esto en mi libreta" / "add this to my notebook", when she asks what the notebook already says about something, when a session turns up a lesson worth keeping (propose the entry unprompted — that is the point of this skill), or when the notebook page needs rebuilding and republishing. Encodes the capture rule, the required entry structure (the title IS the lesson; ID · tags · certainty · star · came-from · full-record pointer), what belongs in the notebook versus in a skill / SOP / client file / FOLLOW-UPS row, the no-client-data line, and the build-and-publish flow (one link, never a new URL). Read before adding or editing anything under projects/lilian-notebook/notes/.
---

# Lilian's Notebook — the house way

The engine behind [`projects/lilian-notebook/`](../../../projects/lilian-notebook/): Lilian's
personal notebook of **lessons**, each one written as the rule to follow next time, rendered as
**one searchable page she has bookmarked.** Read the project's
[`README.md`](../../../projects/lilian-notebook/README.md) for the layout and the link.

**Why it exists, in one line:** a lesson buried in a `FOLLOW-UPS.md` row **dies when the row is
deleted**, and a lesson buried in one client's file is invisible to the next client it applies
to. The notebook is where the lesson outlives the case (that's note LN-29).

**Whose it is.** Lilian's, by her decision (Aug 2026) — she is the only person writing in it.
This is the repo's one deliberate exception to *never partition by person*. It isn't hidden and
it isn't secret; it just isn't addressed to anyone else. Don't file firm-wide procedure here
(see §4).

---

## 1. Rule zero — propose the note; don't wait to be asked

**Whenever a session turns up something that would cost the firm again, offer to write it
down.** Lilian's whole reason for asking for this: she will not remember to ask.

The tell is any of these:
- The firm was **surprised** by how an agency, a platform, or a vendor behaves.
- Something **cost money or weeks** that a written rule would have prevented.
- A **conclusion turned out to be wrong** ("raw GitHub URLs never work" — they do).
- A method proved itself and would work again (*how* to verify a vendor's claim, not just what
  the claim was).
- Lilian says *"esto hay que recordarlo"*, *"apunta esto"*, or explains something she's
  clearly explained before.

Offer it in one line — *"¿lo anoto en tu libreta como LN-33?"* — with the title you'd give it,
so she can say yes without reading a draft. **She approves; you never file one silently.** And
if a note already covers it, say so and **enrich that note** instead of adding a second
(§5).

Going the other way is part of the job too: when she asks about a topic the notebook already
covers, answer *from the note* and give its ID, so the notebook proves itself.

## 2. Writing the entry

Copy a block from
[`notes/_entry-template.md`](../../../projects/lilian-notebook/notes/_entry-template.md) into
the right category file. The structure is not cosmetic — `render/build.mjs` parses it.

```
## LN-33 — The lesson, as the rule, in one line
- **Tags:** two to four · lowercase · dot-separated
- **Certainty:** Established | Firm rule | Working assumption
- **Star:** yes | no
- **Added:** YYYY-MM-DD
- **Came from:** the client, matter or session that taught it — and the date
- **Detail:** where the full record lives

**What happened.** …

**The rule.** …
```

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
4. **IDs are global and never reused.** Next ID = the highest `LN-##` anywhere in `notes/`,
   plus one. The build fails on a duplicate.
5. **Certainty is exactly one of three short values** — they render as a pill:
   `Established` (we verified it), `Firm rule` (Julia's or Lilian's standing decision),
   `Working assumption` (our best reading, not confirmed). Nuance goes in the body, never in
   the pill. **Never label something Established that a person hasn't actually confirmed** —
   the notebook's value is that Lilian can trust the label.
6. **`Detail:` points at the full record; it doesn't duplicate it.** The case history stays in
   the client file, the skill, or the Double note. Keep repo-relative links in the Markdown
   (they work on GitHub); the render turns them into plain reference text on purpose, since the
   page is read from a shareable link where a repo path would 404.
7. **Star = Lilian's marked pages.** Set it when the note is one she'd want on the first page
   of a paper notebook. Default `no`; it's hers to set, so ask rather than assume.

## 3. Categories

| File | Holds |
|---|---|
`agencies.md` | IRS, state and city agencies — how they behave, what they gate on, what to get in writing |
`platforms.md` | Gusto, QuickBooks, Double, Odoo, Turo, Gmail — vendor and tooling traps |
`costs.md` | What things actually cost, and where the firm's money leaks |
`clients.md` | Writing to them, what only they can do, what needs their consent first |
`craft.md` | The firm's own machinery — the repo, the record, who owns a matter |

A new category is **a new `notes/*.md` + a row in `CATEGORIES`** in `render/build.mjs` — the
build fails loudly on a notes file with no row. Don't add one for a single note; five broad
categories she can hold in her head beat twelve precise ones she has to guess between.

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
fine — they're already in `FOLLOW-UPS.md` and the client files. Their dollar figures, EINs,
account numbers, logins and personal contact details stay in Double / Drive / QuickBooks.
Amounts that *are* the lesson — a published penalty rate, a fee cap — are fine. **English**,
like every repo artifact, whatever language the session ran in.

## 5. Editing an existing note

Prefer this to adding a new one. Two lessons about the same trap, in different words, is how a
notebook stops being worth opening.

- **Rewrite in place**, keep the ID, and set `- **Updated:** YYYY-MM-DD` (the page shows
  "added · updated").
- **A superseded note gets corrected, not left standing** — someone will read it and act on
  it. If its certainty drops, say why in the body.
- If two notes have converged, **merge into the lower ID** and delete the other; mention the
  retired ID in the survivor so an old link isn't a mystery.

## 6. Build, verify, publish

```bash
node projects/lilian-notebook/render/build.mjs      # → notebook.html + scratch/notebook.artifact.html
node projects/knowledge-hub/build-hub.mjs           # the Hub embeds the same page — rebuild it too
```

Then, before publishing — the same gate as the Hub, because one thrown parse error ships a
blank page:

1. The build printed the note count and it **matches what you expect** (it fails loudly on a
   duplicate ID, a missing rule paragraph, or an unregistered category file — read the error,
   don't work around it).
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

- Lilian establishes a new preference about how her notebook reads, what a note must carry, or
  what belongs in it.
- A category is added, renamed, or retired (update §3 **and** `CATEGORIES` in the build).
- The entry format changes in `render/build.mjs` (§2 must match the parser, or the build breaks).
- The publish flow changes (a new link, a new capability flag).
