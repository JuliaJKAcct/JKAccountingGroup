# Correcting a miscategorised transaction — re-categorise, or post a journal entry?

> **Status:** Active · **Owner:** Lilian · **Started:** 2026-09-03
> **Applies to:** any client's books in QuickBooks Online, bookkeeping and tax-prep work alike.

## The question this answers

A transaction is in the wrong account. There are two ways to fix it, and they are not
interchangeable:

- **Re-categorise** — open the transaction, change the category field. The books end up correct and
  clean, with no extra rows.
- **Post a correcting journal entry** — leave the original exactly as it was, and move the amount
  with a visible entry that carries its own memo.

**Most people pick by habit. Pick by whether anyone will need to retrace it.**

---

## §1 · The rule

> 🔑 **A miscategorisation is corrected by RE-CATEGORISING while the books are still working
> material, and by a VISIBLE JOURNAL ENTRY once they have been reported on or a return is being
> built from them.**

| Situation | Route |
|---|---|
| The month is still open, nobody has seen a report off it, no return depends on it | ✅ **Re-categorise.** One field, clean books, no clutter |
| A report has gone to the client, the owner or another preparer off these figures | 🔴 **Journal entry** |
| A tax return is being prepared from these books | 🔴 **Journal entry** |
| The transaction is part of a thread somebody will want to reconstruct — a dispute, an analysis, a question that has been going back and forth | 🔴 **Journal entry** |
| The period is closed or reconciled and the change would touch amount, date or bank account | 🔴 **Journal entry**, and check the reconciliation |

⚖️ **Both routes end in the same balances.** The choice is entirely about whether the *change itself*
is findable afterwards.

---

## §2 · Why — and the premise that usually needs correcting first

**People reach for the journal entry saying "otherwise no evidence is left". That premise is
wrong, and correcting it makes the conclusion stronger rather than weaker.**

✅ **QuickBooks DOES record the edit.** Re-categorising writes to the transaction's **Audit
History**: who changed it, when, which field, old value → new value. Nothing is hidden.

🔑 **The problem is not that the evidence is missing. It is that it sits where nobody will look.**
Somebody opening the books next year to understand a figure does not think *"let me check the audit
history of a transaction from June"*. They read the account register and the Journal report. **A
journal entry is in both. An edit is in neither.**

> 🔑 **Lilian, 2026-09-03, setting this rule:** *"si una persona viene después y mira estos libros,
> especialmente Julia, entienda qué pasó, porque si simplemente la recategorizo, no va a quedar
> evidencia."*

⚠️ **The corollary, and it is the reason this SOP exists at all:** a correcting entry that is
**balanced and unexplained is no better than the edit it replaced.** The firm has a worked example —
a five-figure year-end journal entry on a client's books with an **empty memo**. Its audit history
was complete: who posted it, when, every line. It told nobody what the amount contained, and
reconstructing it took days. **Visibility without explanation is not traceability.**

---

## §3 · How to post one

**Three things, none optional.**

### ① One decision per entry

⛔ **Never combine a bookkeeping correction with a substantive reclassification in one entry.** They
are different decisions, made for different reasons, and somebody may later need to reverse one
without the other. Two entries, two memos, two numbers.

🔑 **Number them so the relationship is visible.** Where an existing entry is `2025-ADJ`, a
correction that supports a later reclassification numbered `2025-ADJ-2` is `2025-ADJ-2A` — the
suffix says *this belongs with that one*. ⛔ **Never reuse a number.** QuickBooks will accept two
entries with the same journal number and the Journal report then shows two different entries under
one identifier, which is the exact confusion the numbering exists to prevent.

### ② A note on every line, and a memo on the entry

**Each line's Description says where THAT amount came from** — its subtraction, its multiplication,
the date and vendor that identify it. **The header memo says what happened and why.** Keep the line
descriptions to about one line of text: the Journal report and the account register truncate long
ones, and a description cut off in the middle of a subtraction is worse than a short one.

**The memo's shape:**

```
<one line: what this entry is>

WHAT HAPPENED.   the facts - dates, vendors, amounts, which account it was in
                 and which it should have been in, and what the mistake did to
                 each account.

WHY IT IS CORRECTED HERE rather than by re-categorising the original.

EFFECT.          what moves, what does not, and whether any return is touched.

Prepared by JK Accounting Group, <date>.
```

🔑 **Write it for someone who has never seen the transaction and cannot ask you.** That is the whole
test.

### ③ Tick `Is Adjusting Journal Entry?`

**It changes no figure.** What it does is put every adjustment the firm made into **one report** —
*Adjusting Journal Entries*, and the *Adjusted Trial Balance*. 🔑 **That gives the next person
somewhere to look without knowing to look**, which is the point of the whole procedure.

---

## §4 · What it does NOT excuse

- ⛔ **A correcting entry is not a substitute for telling the client's owner or the reviewer.** The
  books explain *what*; a note to them explains *why we were in there at all*. **Do both.**
- ⛔ **It does not make a wrong correction right.** Decide first whether the original categorisation
  is actually wrong — see the firm's rule that nothing another preparer categorised is moved unless
  it is **necessary** or an **obvious** error.
- ⛔ **It does not fix a broken reconciliation.** If the original transaction's amount, date or bank
  account is wrong, that is a different problem and the reconciliation has to be re-checked.
  *(Changing only the expense category never affects a bank or card reconciliation — the bank side
  of the transaction is untouched.)*

---

## Where this came from

**Ecoorganic USA LLC, FY2025**, while preparing the Form 1120-S. A credit-card refund from a
dealership had been categorised to fuel when it was a refund of repair work. The one-field fix was
proposed; Lilian asked for the journal-entry route instead, for traceability, and set the rule above.
The same session posted a second, separate entry for the substantive reclassification — which is
where **one decision per entry** comes from. ⛔ **The amounts are deliberately not here** — client
figures live in [`projects/tax-returns/`](../tax-returns/) only, and this file publishes to the
Knowledge Hub.

**Related:** [`form-1120s-preparation.md`](./form-1120s-preparation.md) ·
the [`bookkeeping-sop` skill](../../.claude/skills/bookkeeping-sop/) ·
the [`tax-return-sop` skill](../../.claude/skills/tax-return-sop/) §4A-M, whose mirror scan is how a
refund sitting in the wrong account gets found in the first place.
