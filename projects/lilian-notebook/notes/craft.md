# How we work

Lessons about the firm's own machinery — the repo, the record, who owns a matter, and how
work gets lost.

## LN-28 — A client leaving doesn't close the matter. The firm owns what happened inside the engagement
- **Tags:** responsibility · former clients
- **Certainty:** Firm rule
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Tsminibears — archived 2026-06-08, penalties from Q2/Q3 2025
- **Detail:** [`tsminibears.md` §6](../../client-intelligence/clients/tsminibears.md)

**What happened.** The client was archived in Double and the relationship ended. The penalty
periods fall **inside** the engagement — so the firm still owns the resolution, and a note had
to be written into the record specifically so nobody later closed the matter on the grounds
that the client had left.

**The rule.** The test is **when the exposure arose**, not who the client is today. And when
that's the situation, **write the reasoning into the record** — otherwise the next person to
open the file sees "Former client · Archived" and reasonably stops.

## LN-29 — A lesson buried in an open-loop row dies when the row is closed
- **Tags:** repo · record-keeping · this-notebook
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Why this notebook exists (Lilian, 2026-08-06)
- **Detail:** [`FOLLOW-UPS.md`](../../../FOLLOW-UPS.md) · [`README.md`](../README.md)

**What happened.** The best lesson the firm learned in Aug 2026 — LN-01, the orphaned payroll
quarters — was living in two places: one client's file, and a `FOLLOW-UPS.md` row. Follow-up
rows are **deleted when they resolve**, on purpose, to keep that list short. So the day the
Tsminibears matter closes, the most expensive thing it taught us goes with it.

**The rule.** A lesson and a task are different objects with different lifespans. The task
lives in `FOLLOW-UPS.md` and gets deleted; **the lesson comes here and stays.** So when a
matter closes, ask what it taught before deleting the row — and when a lesson shows up
mid-session, capture it then, not later.

## LN-30 — Git merges contradictory guidance without complaining
- **Tags:** repo · parallel work · git
- **Certainty:** Established
- **Star:** yes
- **Added:** 2026-08-06
- **Came from:** Aug 2026 — a Double MCP audit landing beside three other PRs on the same subject
- **Detail:** [`CLAUDE.md`](../../../CLAUDE.md) — the drift check

**What happened.** A session spent an afternoon auditing the Double MCP while three other PRs
landed on that same subject. It wrote *"never open a second note"* into the skill — the exact
opposite of the `Part 1 / Part 2` rule a PR had just established. **Every merge was clean.**
Nothing flagged it. It was caught only by re-reading `main` before committing.

**The rule.** Git catches textual collisions; the dangerous conflict is **semantic** — two
sessions writing flatly contradictory guidance in different files, with no overlap to
conflict on. So immediately before committing, not when you branch:
`git fetch origin main && git log --oneline HEAD..origin/main`. If anything comes back,
**re-read the current version of every rule you're changing** — the one on `main` now, not
the one you read an hour ago.

## LN-31 — One matter, one running note — rewritten in place, never duplicated
- **Tags:** double · notes · record-keeping
- **Certainty:** Firm rule
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** The Tsminibears case note (485230), Aug 2026
- **Detail:** [`double-mcp` skill §7](../../../.claude/skills/double-mcp/)

**What happened.** A matter that runs for weeks across an agency's queue becomes
unreconstructable from email. The fix: one note on the Double client carrying the whole
history start to finish, so anyone opens the client and reads it. The first version of that
note understated the situation and was corrected the same day — in place.

**The rule.** **One note per case, rewritten in place** — never a second note. When new
information arrives on a tracked matter, updating that note is **part of the work, not a
separate request** (find it with `list_notes` first — it must never sit on stale
information). The repo file stays the master; the Double note is the team-facing mirror, and
both get updated in the same pass. Notes are in English, and each entry names who did it,
because the whole firm posts under one shared Double user.

## LN-32 — Before starting on a shared file, look at what's already in flight
- **Tags:** repo · parallel work · prs
- **Certainty:** Established
- **Star:** no
- **Added:** 2026-08-06
- **Came from:** The parallel-work safety net, Aug 2026
- **Detail:** [`.claude/hooks/`](../../../.claude/hooks/) · [`CLAUDE.md`](../../../CLAUDE.md)

**What happened.** Two people drive this repo through Claude at the same time, and the
highest-traffic file in it is `FOLLOW-UPS.md` — 19 changes in four days. A row that looks
stale may have been updated an hour ago by the other person.

**The rule.** Open PRs and the last ~10 commits on `main` **before** starting; if someone has
work open on your topic, **enrich theirs instead of writing a parallel version.** On a shared
file, **correct a row rather than replacing it.** And when a change touches shared guidance,
say so in the PR — a reviewer told *"this area moved recently, check for contradictions"*
finds them; one handed a diff in isolation reviews the diff.
