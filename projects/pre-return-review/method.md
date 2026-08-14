# How the firm analyses — the rules that are not about tax organizers

These came out of building the [pre-return review](./README.md), but **none of them depends
on there being a tax organizer.** They apply to a bookkeeping cleanup, a matter with a tax
agency, a client whose books disagree with their bank, or any other review where the firm
has to work out what is true and what to ask.

They are kept here, outside any one skill, because a rule locked inside a workflow only
fires when that workflow is loaded — and Lilian's point stands: *"puedo necesitarlas para
otras cosas, ya que no son exclusivas de Organizer."*

Every rule below is dated and attributed. Where it came from **correcting** something, the
correction is recorded with what it replaced, because the wrong version is the useful part.

> **Why these examples are real, and how that squares with the invented-example rule.** The
> [`organizer-review` skill](../../.claude/skills/organizer-review/) §0 rule 7 says every example
> **in a skill** must be invented — because a skill teaches a procedure, and reaching for the
> client in front of you is how a real client's answers end up committed. **This file is the
> opposite kind of document.** A rule here is only trustworthy if you can see *what happened that
> made someone write it*, so its cases are the real ones, **de-identified**: no name, no figures,
> no identifiers, and nothing sourced from an organizer response. That is a deliberate difference
> between the two files, not an oversight in either.

---

## 1 · Look before you ask

**A gap is not a finding until you have looked for the answer everywhere the firm keeps
things.** The client file, the platform's notes and files, email, the shared drive, meeting
notes.

Asking someone for what they already sent is worse than not running the review: it spends
the goodwill needed for the questions that genuinely matter, and it tells them nobody read
what they sent.

So every review carries an explicit **"already in hand"** section — what we have, **where it
came from**, and what it substitutes for. Not just as a guard: the person running the review
is often not the person who gathered the material, and if the review does not surface it,
they conclude it is missing and ask again.

_(Lilian, 2026-08-11: "puede ser que yo haya recopilado la información del cliente y la haya
guardado en diferentes sitios… tú necesitas decir que esa información está y de dónde lo
obtuvimos.")_

## 2 · Group by root cause

**One cause is one finding, however many questions it generates.** Fifteen missing documents
caused by one wrong answer are one finding with fifteen asks — not fifteen findings.

A list that is not grouped is not analysis; it is a transcription of symptoms, and it buries
the thing that actually has to be decided.

_(Lilian, 2026-08-11, correcting a review that listed fifteen: "agrupar un poco esto, hacerlo
un poco más entendible y no tan extenso.")_

## 3 · Show the trail

**A finding nobody can follow is not usable.** State what was reported, what is missing, and
what the prior period did — all three — so the reader understands the point without opening
anything.

*"Housing deductions unclear"* is not a finding. *"They reported X, the supporting document
is not attached, and the prior year has none either because that return took the standard
deduction"* is.

_(Lilian, 2026-08-11.)_

## 4 · A disappearance is a question, never a conclusion

Something that was there last period and is not there now is **always** worth asking about,
and **never** worth concluding about. The absence has at least two explanations and usually
the innocent one is wrong.

The tax case that makes this concrete: a company that closed **during** the year still issues
a K-1 for that year. It only genuinely disappears if the client left, or it closed in a
**prior** year. Clients routinely assume the opposite.

**The general form:** when something vanishes, ask *what changed, and on what date* — the
date is usually the whole answer.

_(Lilian, 2026-08-11 — the case that started this whole project.)_

## 5 · Derive what must exist from the structure

**A client's structure dictates which documents must exist, whether or not anyone mentions
them.** Work forward from what you know about them and ask for what the structure requires.
This is what a person does automatically and a checklist never does.

The worked example: someone who owns an S corporation is owed a K-1 every year including a
loss year, plus wages if they work there and take money out — **and the K-1 cannot exist
until that company's own return is prepared and filed**, which makes the entity return a
prerequisite rather than a parallel task.

**The general form:** *what does being this kind of client necessarily produce?* Then check
whether it is here.

_(Lilian, 2026-08-11: "por tanto, debía haber recibido un W-2 y un K-1. Supongo. Corrígeme si
estoy equivocada." She was not wrong.)_

## 6 · A client's mistake is work, not an alarm

Clients are not accountants. They will classify things wrongly, misread a question, and hand
over a list that mixes what is deductible with what is not. **This is normal and it is not a
problem.**

Take what they give as raw input, reclassify it, and ask only about what genuinely cannot be
resolved. Something that is simply wrong gets dropped quietly — nobody is told off, and it
does not become a finding.

**Write findings as work to be done, never as an alarm.** A review that reads as a list of
the client's failings is a review nobody wants to send.

_(Lilian, 2026-08-11: "el hecho de que él haya cometido un error no quiere decir que no
podamos trabajar o que se cree un gran problema. Simplemente analizamos la información y
tomamos medidas.")_

## 7 · The internal checklist is not the client message

**Categories, code sections and edge cases are how *we* classify an answer. The client gets a
plain question and room to explain.**

Listing the possibilities at someone — especially the grave ones — reads as cold, floats
possibilities nobody raised, and gets a box ticked instead of the story you need.

_(Lilian, 2026-08-11, correcting a draft that offered a client a menu of marital statuses:
"no voy a ponerle cosas catastróficas como viudo… es demasiada información. Simplemente
decirle que especifique.")_

**Its documents case:** ask for **facts**, not the paperwork that proves them. The firm does
not open by asking a client for custody orders, decrees or court documents — ask who lived
where and for how many months. The legal instrument informs how we *treat* the answer; it is
raised only if the answer makes it unavoidable. _(Same date: "no preguntamos por ese tipo de
documento.")_

⚠️ **Family-law paperwork only — this does NOT extend to ordinary working documents.** A mileage
log, a basis computation, a finance agreement, a prior-year return, a statement: those are asked
for **by name**, and should be. The rule is about not opening a client relationship by demanding
their court records — not about being shy of asking for the documents the work needs.

_(One firm-specific consequence, not a change to this rule: a **filed tax return** may be asked for
like anything else — but look in the firm's own systems first. Since 2026-08-11 a session reads the
latest prior-year return straight from Double through a redactor, so asking a client for a year we
already hold is exactly the rule-1 failure above. The
[`organizer-review` skill](../../.claude/skills/organizer-review/) §1 source 9 has the route and the
limits.)_

## 8 · Where two records disagree, show the client both — then ask

**This is the shape that gets an explanation instead of a one-word answer.** A bare question
gets a bare answer and resolves nothing.

Four moves, in order:

1. **Recite what they told us**, in their words — the half of the picture they already agree
   with, and proof that someone read it.
2. **State what we see**, naming each record and its date.
3. **Ask the open question** — their explanation usually answers things you did not think to ask.
4. **Then narrow** to the specific facts, **one question per block**, never run together.

**Say plainly that it does not add up.** Hiding the reason behind a neutral question wastes
the exchange: someone who does not know why you are asking has no idea how much detail you
need. That is honesty, not accusation.

**Showing your working is not diagnosing.** Never tell them what is *wrong* with their
answer; do tell them which records you are comparing and what does not line up. The first
puts them on the defensive; the second recruits them.

_(Lilian's own phrasing model, 2026-08-11, ending "porque aquí hay algo raro.")_

## 9 · When the pieces move together, question the frame — not just the pieces

Several small anomalies that each look minor may be one large change nobody named. Before
resolving them one by one, ask whether the **thing they all sit inside** has changed.

The case that produced it (de-identified): a dependant that dropped off, a first mention of child
support, and a move between states — three small puzzles separately, and together a signal that a
marriage may have ended, which decides far more than the dependant line that raised it.

**The general form:** *if all of these were true at once, what would explain them?* Then ask
that.

_(Lilian, 2026-08-11 — the catch a checklist never makes.)_

---

## 10 · Ask the record before you infer — and read related records as a set

**The firm keeps a structured answer to most "what is this client?" questions, and it is
faster and better than reasoning from prose. Go there first.** In Double, the client's
**custom properties** carry the shape of the engagement — `Account Type`, `Income Tax`, and
above all **`Tax Return Type`, which names the form that client actually files.** Lilian
maintained those column by column, client by client _(2026-08-13: "me tomé el trabajo de
actualizarlas uno a uno, así que ahí dice el tax form que presentan cada uno")_. **A guess
built from emails, folder names or a company's legal form is not evidence when a maintained
field is one call away.**

**The second half is what makes it work: read the RELATED records together, not one at a
time.** These clients come in groups — a person and their companies — and a fact recorded on
one member is often the answer for another. **An absence on one record can be the answer
rather than a gap**, once you look at the record next to it.

The worked example. **Aura Remodeling** carries `Account Type: Company`, `Income Tax: false`,
and **no `Tax Return Type` at all**. Read alone that looks like missing data, and two separate
sweeps filled the hole by inference — one concluding a two-owner LLC filing a partnership
return, the other recording Schedule C activity on the owner. Both were written down, both
contradicted each other, and the clash sat open for a fortnight. **Read as a pair it resolves
immediately:** the owner, **Ihor Naum**, carries `Account Type: Individual`, `Income Tax:
true`, **`Tax Return Type: 1040-SCH C`**. The company has no form because **it files nothing**;
its activity is reported on his Schedule C. **The properties were right the whole time.**

**The general form:** *is this already recorded somewhere maintained — on this record, or on
the one it belongs to?* Ask that before constructing an answer. And when a field is empty,
ask **what its emptiness means for this kind of record** before calling it a gap.

**But read an absence only where the record is actually maintained**, and that has to be
established, not assumed: on a client nobody has filled in yet, the same emptiness means
"unknown", and the related record is usually just as empty — which is the same gap twice, not
a confirmation. **The pair only resolves when the neighbouring record carries something that
accounts for the absence.** Otherwise the absence is a question, and rule 1 applies to it like
any other.

⚠️ **The corollary, because it is what actually went wrong:** an inference and a maintained
field can coexist in the repo for weeks without anyone noticing, because **git merges
contradictory guidance without complaint**. Two files here even said in writing that one of
the two readings had to be wrong — and that note alone changed nothing. **A contradiction
someone has already written down is not a resolved contradiction; it is an open task.**

_(Lilian, 2026-08-13, after settling the Aura structure and then telling the session where the
answer had been all along. The property values above were verified live the same day.)_

## How these grow

Same protocol as everything else — the [`organizer-review` skill](../../.claude/skills/organizer-review/) §6:

- **Four kinds of rule, four homes.** Domain (how a thing behaves) · method (**this file**) ·
  relationship (how we speak to a client — also this file) · **case fact, which belongs in the
  client's own file and never here.** The test: *would this still be true for a client I have
  never met?*
- **Every rule carries who set it, when, and the case.** So a future session can tell a
  **decision** from an **inference**. An inference written in the voice of a rule is how a
  policy nobody agreed to ends up enforced.
- **A correction outranks a proposal**, and is recorded with what it replaced.

**Add a rule here when it would serve a review that has nothing to do with tax returns.**
Otherwise it belongs in the workflow skill.
