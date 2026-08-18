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

## What this is NOT

- ❌ **Not the return.** The filed PDF lives in Double (`Tax Return Filed > <year>`). This is the
  **working paper** behind it.
- ❌ **Not client intelligence.** [`projects/client-intelligence/`](../client-intelligence/) holds
  what the firm *knows about a client* — obligations, systems, history. It holds **no dollar
  figures** and that rule does not change. This folder holds the **figures for one return**.
- ❌ **Not published.** The Knowledge Hub renders `client-intelligence/clients/` and `sops/`.
  **It does not read this folder, and it must not be made to.** These are working papers, not
  team-facing documents.

## 🛑 The line: what may be written here, and what never may

**✅ IN — this is the whole point:**

- Every **line number and its amount**, on every form and schedule
- The **formula** behind each computed figure, and the **report and account** behind each read one
- The **decisions**: what was chosen, who chose it, and what the alternative was
- **Open questions** left at filing, and anything to carry into next year
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
    └── <year>-<form>.md          e.g. 2025-form-1120s.md
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

## Related

- The procedure: [`projects/sops/form-1120s-preparation.md`](../sops/form-1120s-preparation.md)
- What the firm knows about the client: [`projects/client-intelligence/`](../client-intelligence/)
- Reading a client's own document safely: [`tools/redact-doc/`](../../tools/redact-doc/)
