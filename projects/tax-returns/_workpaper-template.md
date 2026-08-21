# \<Client\> — \<Form\> · \<Year\>

> **Status:** 🟡 In preparation / 🟢 Filed \<date\> · **Prepared by:** \<name\> · **Reviewed by:** \<name\>
> **Client Intelligence:** [`clients/<slug>.md`](../../client-intelligence/clients/<slug>.md)
> **Procedure:** [`sops/<sop>.md`](../../sops/<sop>.md)

> ⛔ **No SSN/ITIN, no bank or card numbers, no home addresses, no dates of birth, no logins.**
> See [the folder README](../README.md). The EIN and shareholder names are fine.

---

## 0 · The year in one paragraph

\<What happened to this business this year, in plain words — the thing a reader needs before any
number makes sense. Start-up? Wind-down? A method change? A departure?\>

## 1 · Source documents used

| Document | Basis | Date pulled | Notes |
|---|---|---|---|
| Profit & Loss \<year\> | Accrual / Cash | | |
| Balance Sheet at \<date\> | | | |
| General Ledger \<year\> | | | ⚠️ check the basis matches the other two |
| Prior-year **filed** return | — | | The authority for every carried-forward figure |
| Prior-year depreciation schedule / 4562 | — | | |

## 2 · Adjusting entries made before preparing

| # | Entry | Amount | Why | Who decided |
|---|---|---|---|---|
| | | | | |

_(If none, say so — "none" is a finding.)_

---

## 3 · The forms, line by line

**Legend:** 📖 read from a report · ƒ calculated · 🔒 carried from the prior return

### \<Form / Schedule\>

| Line | Concept | Value | Where it came from |
|---|---|---|---|
| | | | |

_(Repeat one table per form, in the order they are prepared. Every non-zero line gets a row.
A line that is deliberately **blank** and might look like an omission gets a row too, saying why.)_

---

## 4 · Decisions taken, and the alternative

| # | Decision | Chosen | The alternative | Who decided · when |
|---|---|---|---|---|
| | | | | |

**Anything a reviewer or the IRS could reasonably ask "why did you do that?" belongs here.**

## 5 · Tie-out checks

| Check | Result |
|---|---|
| | ✅ / ⚠️ |

## 6 · Open at filing

- [ ] \<Question that was never answered — say what would settle it\>

## 7 · Carry into next year

| What | Value | Feeds |
|---|---|---|
| | | \<next year's line\> |

**This section is the one next year's preparer reads first.**

## 8 · 🔗 What flows to ANOTHER return — the handoff

> **Whenever this return feeds another one.** Usually an entity → its owners; delete it only if
> nothing here travels to a return someone else will prepare.

🛑 **AN ENTITY RETURN IS ONLY HALF THE JOB, AND THE OTHER HALF IS A SEPARATE REQUEST**
_(Lilian, 2026-08-21)_: *"Si te digo que preparo el tax return de una compañía, no preparo el del
dueño… Prefiero terminar una cosa y, cuando estoy segura de que está bien, entonces podemos
centrarnos en la otra."*

⛔ **Do NOT prepare the owner's return here.** ✅ **Do leave it READY** — this section is what she
opens when she comes back to the 1040, possibly weeks later and certainly in a different session.

**Recipient:** \<name — one block per recipient\> · **Their working paper:**
`projects/tax-returns/<slug>/<year>-form-XXXX.md` — ⓘ **if it already exists, this section is the
RECONCILIATION between the two, not a first draft.**

### 8A · The tables to carry across

| # | What | Value | 🛠️ Where it is ENTERED on the 1040 | Status |
|---|---|---|---|---|
| 1 | \<Schedule K-1, **box by box** — walk every box that carries a figure\> | | \<the K-1 input screen\> | ✅ ready |
| 2 | \<a figure that a §6 blocker can still move\> | | | 🔴 **PROVISIONAL — becomes \<x\> if \<blocker\> closes the other way** |
| 3 | \<the entity's NAME and EIN, the ownership %, the passive/non-passive call\> | | | ⚠️ **trivial here, unreachable from the other return without reopening these books** |

### 8B · 🔴 What this side CANNOT supply — inputs the 1040 must bring

**Some figures on the owner's return do not exist on the company's**, so they are named here rather
than guessed:

| What | Why it is not here | Where it comes from |
|---|---|---|
| **Form 7203 line 1 — beginning stock basis** | 🔑 **Form 7203 is filed with the SHAREHOLDER's 1040, not with this return** | **last year's Form 7203 line 15** — check the prior year's working paper in `projects/tax-returns/` **first**; if the firm did not prepare it, it is a question for the client |

### 8C · What must MATCH on both returns

| The figure | Here | On the 1040 | Why it must agree |
|---|---|---|---|
| | | | |

### 8D · Before the other return is TRANSMITTED

⚠️ **Not "before it is started."** The other return can legitimately be worked first — to size an
extension payment, for instance. 🔑 **The test is whether the figures handed over are FINAL.**

- [ ] 🔴 **Every §6 blocker that MOVES a handed-over figure is closed** — ⛔ **name them here**, and
      distinguish them from the blockers that gate only this return
- [ ] **This return is transmitted and ACCEPTED first** — a K-1 from an unfiled return can still move
- [ ] 🔗 **The other return is its OWN request** — its own phase 1 review, and its own permission to
      open **that person's** prior-year return _(CLAUDE.md; preparing this one did not)_
- [ ] 📌 **A back-link to this section is written into the recipient's working paper**, so the
      pointer exists in both directions
