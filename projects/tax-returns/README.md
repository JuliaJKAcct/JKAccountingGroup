# Tax Returns — the firm's working papers

> **Status:** 🟢 **Active** · **Owner:** Lilian · **Created:** 2026-08-17

## Purpose

**This is where the numbers live.** For every return the firm prepares, one file records
**what went on each line, where each figure came from, what was decided and why** — so that
months or years later anybody can reopen it and retrace the whole return without
reconstructing it from memory or from a chat that no longer exists.

Lilian's reason, 2026-08-17: *"si en un futuro necesito repasar qué fue lo que pusimos, las
tablas que introdujimos, de dónde salieron esos valores, todo este cálculo y análisis, quisiera
conservarlo. Es lo que nos permite volver atrás, revisar y ver por qué se hizo cada cosa."*

**It exists because sessions are deleted.** A return prepared with a session's help produces
hours of reasoning that is worth more than the finished PDF — the derivations, the traps, the
judgement calls. Without this folder, all of it dies when the session is closed.

## 🔴 Its SECOND audience: the reviewer

**These were written so a future session could pick a return back up. They now have a second reader, and
she matters more.**

🔑 **Lilian prepares a return with a session; Julia reviews it afterwards and was not in the room.**
Without this folder she gets a finished PDF and no reasoning, and Lilian has to explain every choice from
the beginning. **With it, the session briefs her directly.**

🛠️ **So when a return comes back for review, the working paper is opened BEFORE the PDF** — it holds
the decisions, who made each one, the alternative that was not taken, and where every figure came from.
📌 **Write them for someone who was not in the conversation**: a decision with no name and no date on it
is a decision the reviewer has to re-make. The procedure is
[`tax-return-sop`](../../.claude/skills/tax-return-sop/) **§4C**.

## What this is NOT

- ❌ **Not the return.** The filed PDF lives in Double (`Tax Return Filed > <year>`). This is the
  **working paper** behind it.
- ❌ **Not client intelligence.** [`projects/client-intelligence/`](../client-intelligence/) holds
  what the firm *knows about a client* — obligations, systems, history. It holds **no dollar
  figures** and that rule does not change. This folder holds the **figures for one return**.
- ❌ **Not published.** The Knowledge Hub renders `client-intelligence/clients/` and `sops/`.
  **It does not read this folder, and it must not be made to.** ⚠️ **"Not published" is the rule; "not
  team-facing" is no longer true and the clause is struck** — ⛔ ~~These are working papers, not
  team-facing documents.~~ 🔑 **The `.md` is a working paper; the ONE rendered briefing beside it
  (below) is handed to the reviewer.** **Handed over, never hosted.**

## 🛑 The line: what may be written here, and what never may

**✅ IN — this is the whole point:**

- Every **line number and its amount**, on every form and schedule
- The **formula** behind each computed figure, and the **report and account** behind each read one
- 🆕 **The ENTRY ROUTE — where each figure is actually TYPED in the tax software** _(Lilian,
  2026-08-19)_, because most lines on a computed form cannot be typed where they appear. ⚠️ **Mark
  it as the software's, not the IRS's** — screens move between versions, and the source line is the
  tax fact
- 🆕 **What actually happened in the software** — a warning and why it was dismissed, a defect found
  and how it was fixed, a statement that had to be attached. **A year from now this is the only
  record that the software was ever argued with**
- The **decisions**: what was chosen, who chose it, and what the alternative was
- **Open questions** left at filing, and anything to carry into next year
- 🆕 🔗 **THE HANDOFF — what flows to ANOTHER return** _(Lilian, 2026-08-21)_, in **§8** of an
  entity return's paper: the tables the owner's 1040 must receive **with their entry route**, what
  this side **cannot** supply, and what must **match** on both. ⛔ **Asking for the company is not
  asking for the owner** — the other return is a separate request on a separate day, and §8 is
  what makes that possible without redoing the work. **It is written down and not merely said,
  because she may open the 1040 weeks later and the session will be gone**
- The **EIN** *(public on Sunbiz — Lilian, 2026-08-12; write it hyphenated)*
- **Shareholder names** *(Lilian: "los nombres no son datos sensibles")*

**⛔ NEVER — no exception, and no "just this once":**

| Never | Where it belongs |
|---|---|
| **SSN or ITIN** — including an entity's tax ID when it is one | the return itself, in Double |
| **Bank, credit-card, routing or account numbers** | Double / the bank |
| **Home / residential street addresses** | Double |
| **Dates of birth** | Double |
| **Logins, passwords, PTINs, EFINs, signature PINs** | the firm's password vault |
| **The client's own documents** — a return PDF, an organizer, a statement | Double, and read through [`tools/redact-doc/`](../../tools/redact-doc/) |

A **business** address is fine; a **person's** is not. If you are unsure which a figure is, it
does not go in.

## Shape

```
projects/tax-returns/
├── README.md                     ← you are here
├── _workpaper-template.md        copy this to start a new return
└── <client-slug>/                same slug as in client-intelligence/clients/
    ├── <year>-<form>.md          e.g. 2025-form-1120s.md    ← the working paper
    └── <year>-briefing-<topic>.html / .pdf                  ← OPTIONAL, see below
```

One file per **return**, not per client — a client with a 1120-S and an owner 1040 gets one file
each, and next year gets its own.

## Working on this

1. Copy `_workpaper-template.md` into `<client-slug>/<year>-<form>.md`.
2. Fill it **as you prepare**, not afterwards. The value is in the sourcing, and sourcing written
   from memory a week later is the thing this folder exists to replace.
3. When the return is filed, record the filing date and leave the open questions **open** — a
   question that was never answered is information too.
4. Cross-link: the client's [`client-intelligence`](../client-intelligence/) file gets a line in
   its §6 log saying the return was prepared and pointing here. **The knowledge goes there; the
   figures stay here.**

## Brand & design

**Mostly not applicable — with ONE deliberate exception.** The working papers themselves are
plain Markdown, read in the repo: not rendered, not published, not team-facing.

🔵 **The exception is a REVIEWER BRIEFING**, rendered from a working paper and living beside it in the
same folder. **It exists because the firm already produces one**, and this section used to deny it:
[`gossip-miami-llc/2025-briefing-open-items.html`](./gossip-miami-llc/2025-briefing-open-items.html) /
`.pdf`, the nine-point briefing produced for **Julia** on 2026-08-27 on the Atlas template. **Its rules:**

- **One per return, in that return's own folder**, rendered from that return's working paper. ⓘ *The `<topic>` in the filename above names what the briefing covers, so it reads as a title — **not** a licence for several briefings on one return: a second pass **supersedes the file in place**, as the Gossip one does.*
- **Built with [`impeccable`](../../.claude/skills/impeccable/) and the Design System**, like everything the firm renders.
- 🔴 **Marked `Internal briefing · client-confidential` in its header** — as the Gossip one is.
- ⛔ **Still NOT published**: never the Knowledge Hub, never sent to a client. **A hosted URL is a separate
  question** and goes to [`tax-return-sop`](../../.claude/skills/tax-return-sop/) §4C — *ask, do not reason*.
- ⛔ **The ⛔ list below binds it exactly as it binds the `.md`** — and a rendered file needs the identity
  check run **on the rendered output**, not only on its source.

## Skills & tooling

- The procedure that produces them: [`projects/sops/form-1120s-preparation.md`](../sops/form-1120s-preparation.md) — its **§15A** makes writing the file part of preparing the return
- Reading a client's own document safely: [`tools/redact-doc/`](../../tools/redact-doc/)

## Outputs

**Committed Markdown, one file per return, private to the repo** — plus, optionally, **one rendered
reviewer briefing beside it** *(Brand & design, above)*. ⛔ **Nothing here is published, sent to a
client, or rendered into the Knowledge Hub** — the briefing included; it is a file handed to a
reviewer, not a link. ⚠️ **There is no automated gate on this folder** —
`assertNoSensitiveData()` scans `client-intelligence/clients/` only. The ⛔ list above is enforced
by whoever writes the file.

## Related

- The procedure: [`projects/sops/form-1120s-preparation.md`](../sops/form-1120s-preparation.md)
- What the firm knows about the client: [`projects/client-intelligence/`](../client-intelligence/)
- Reading a client's own document safely: [`tools/redact-doc/`](../../tools/redact-doc/)
