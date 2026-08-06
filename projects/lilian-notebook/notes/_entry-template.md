<!--
  NOTEBOOK ENTRY — TEMPLATE
  Copy the block below, verbatim, into the right category file in notes/ and fill it in.
  It is written to PARSE AS-IS: every metadata field is one line, with no trailing comment
  after the value, and there is no blank line between fields. The build rejects anything else —
  an unknown field name, a Certainty outside the three values, a missing field, or a blank line
  in the middle of the block. That is deliberate: a field lost to a typo used to vanish silently.

  Field notes (these live HERE, in the comment, never inside the block):
    Tags        two to four, lowercase, separated by " · "
    Certainty   exactly one of: Established | Firm rule | Working assumption
                Established = we verified it · Firm rule = Julia's or Lilian's standing decision
                Working assumption = our best reading, not confirmed. Say what isn't confirmed
                in the body, not in this field — it renders as a small pill.
    Star        yes | no — "yes" is a page Lilian would want marked in a paper notebook. Hers to
                decide, so ask rather than assume.
    Updated     optional; add it when you rewrite a note in place, and keep the original Added.
    Detail      optional but nearly always wanted: where the FULL record lives (client file +
                section, a skill, a Double note ID). Don't duplicate the record here.

  IDs are global and never reused: take the next number above the highest LN-## that has EVER
  existed — check `git log -p projects/lilian-notebook/notes/`, not just the current files.

  Read §0 of the lilian-notebook skill before adding anything: the notebook is deliberately
  small, and most true lessons do NOT belong in it.

  Delete this whole comment in the real entry.
-->

## LN-00 — The lesson, written as the rule, in one line
- **Tags:** tag-one · tag-two · tag-three
- **Certainty:** Established
- **Star:** no
- **Added:** YYYY-MM-DD
- **Came from:** the client, matter or session that taught it — and the date
- **Detail:** where the full record lives

**What happened.** Two to four sentences of the actual story — enough that the rule below is
obviously true, and enough to recognise the same situation next time. Concrete: names, dates,
amounts, who said what.

**The rule.** What to do differently. This is the part that shows without expanding anything, so
it has to stand alone. Imperative, specific, and if there's a cost or a deadline attached, say it.

<!--
  A PROCEDURE note ("how you do X") is written as a numbered list instead, and may label the
  block. Both of these parse; the list may follow a lead-in line on the same block:

## LN-00 — How to carry out the thing
- **Tags:** tag-one · tag-two
- **Certainty:** Working assumption
- **Star:** yes
- **Added:** YYYY-MM-DD
- **Came from:** where it was worked out

**What happened.** Why the obvious route doesn't work, and where this one came from.

**The rule — the order, and why it's that order.** Do these in order:
1. First step, and the reason it comes first.
2. Second step.
3. The step everyone forgets.

  Only the keyword "The rule" / "What happened" picks the section; the rest of the label is
  stripped from the rendered page. A list starts on "1." or "-" — a paragraph that merely opens
  with a number ("2026. was the first year…") stays a paragraph.
-->
