# Hiring — Bookkeeper Practical Test

> **Status:** Active · **Owner:** Julia · **Started:** 2026-09

A complete, self-consistent set of mock QuickBooks books used to test a candidate
bookkeeper before hiring them — three months of a fictional construction company with
21 deliberate errors seeded through the bank reconciliation, the month-end close and
the financial statements, plus the bank statements to reconcile against, the candidate
brief and the evaluator's answer key.

## Purpose

The firm outsources bookkeeping overseas and needs to know, before a hire, whether a
candidate actually reviews a set of books or merely processes transactions. Reading a
CV cannot answer that; a real file with real problems in it can.

The assessment design — the three tasks, the issues to seed and the scoring rubric —
comes from *Overseas Accountant Practical Interview Test*. This project is the **books
that assessment needs**: a QuickBooks-shaped file that ties out exactly, so every
discrepancy a candidate finds is one that was put there on purpose.

The books belong to **Coastal Ridge Builders LLC**, a fictional Fort Lauderdale general
contractor. Nothing in this project touches a real client.

## What's here

```
hiring-bookkeeper-test/
├── README.md          ← you are here
├── build/             the generator — the books are code, not a hand-made spreadsheet
│   ├── books.py       chart of accounts, opening balances, every transaction
│   ├── engine.py      posts it all, derives the bank's view, ASSERTS 34 design targets
│   ├── report.py      the QuickBooks reports workbook + the import CSVs
│   ├── statements.py  the printable bank statements
│   ├── docs.py        candidate brief + evaluator answer key
│   └── minixlsx.py    a small dependency-free .xlsx writer
└── test-package/      what you actually send — start at 00_START_HERE.md
```

Read [`test-package/00_START_HERE.md`](./test-package/00_START_HERE.md) first: it says
which files go to the candidate, which never do, and how to run the exercise either on
the exports or inside a live QuickBooks Online company.

## Brand & design

The candidate brief and the answer key are on-brand — petrol teal, warm bronze, ivory,
per [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md) and the tokens in
[`../../brand/design-system/`](../../brand/design-system/), built with the
[`impeccable`](../../.claude/skills/impeccable/) skill.

The **bank statements are deliberately not on brand.** They are documents from a
fictional bank; making them look like JK output would break the exercise. They carry
their own restrained bank typography and a standing "fictional documents" banner that
disappears when printed to PDF.

## Skills & tooling

- [`impeccable`](../../.claude/skills/impeccable/) — the candidate brief and answer key.
- No skill drives this project yet. If the firm runs the test more than twice, the
  build sequence and the seeding conventions are worth capturing as one.

## Outputs

Everything in `test-package/`, all committed — it is mock data, and the point of
committing it is that the next hiring round does not start from nothing.

`ANSWER_KEY_evaluator_only.html` is committed too. **It is internal.** It is safe in the
repo and unsafe in an email to a candidate.

## Working on this / notes for AI

- **The books are generated. Never hand-edit anything in `test-package/`** — change
  `books.py` and re-run. A hand-edit will not survive the next build and, worse, will
  silently break a tie-out the exercise depends on.
- `python3 engine.py` is the gate. It asserts the balance sheet balances at all three
  month-ends, the sub-ledgers agree with their control accounts, each month's gross
  margin hits its target, and the reconciliation resolves to the cent. **If it does not
  print `0 failed`, the package is not shippable.**
- Re-run all four scripts after any change to `books.py`; the answer key quotes figures
  straight from the engine, so a stale document contradicts the books.
- **Seed a fresh variant for each candidate** once answers start circulating. Change the
  amounts, dates and payees in `books.py`; the asserts keep the books honest while you do.
- No real client, vendor, customer or figure may enter this project. If a future variant
  needs a realistic wrinkle, invent it.
