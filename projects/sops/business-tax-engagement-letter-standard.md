# Business Tax Engagement Letter — Firm Standard

> **Status:** Active · **Owner:** Julia · **Last updated:** 2026-07

> The firm's **one way** to produce a business tax-preparation engagement letter — the
> in-house replacement for GoProposal. An **interactive generator** builds the finished,
> on-brand letter from a handful of client facts: it **starts blank every time** (never
> carries another client's data), **refuses to generate with any field missing**, and
> **auto-derives** the return, the e-file form, and the filing due date from the entity
> type. The generator is embedded in this page; the engine and skill live in
> [`projects/proposal-tool/`](../proposal-tool/) (driven by the `proposal-generator` skill).

## When to use this

Any time the firm engages a **business** (C-Corporation, S-Corporation, or Partnership)
for **tax-return preparation** and needs a signed engagement letter. For an **individual
(1040)** letter or a **monthly-retainer** proposal, see the `proposal-generator` skill —
those are separate document types.

## What you fill in — the per-client fields

These are **everything that changes per client** (verified against the firm's master
template and a real filled letter — nothing else varies). The generator asks for all of
them and won't produce the PDF until each is complete:

1. **Letter date**
2. **Company (entity) name**
3. **Address — line 1**
4. **Address — line 2** (city, state, ZIP)
5. **Entity type** — C-Corporation · S-Corporation · Partnership
6. **Tax year** (e.g. 2025 → "December 31, 2025")
7. **Fee (USD)**
8. **Representative — name** (who signs for the client)
9. **Representative — title** (Manager / Partner / Member / President …)
10. **Client info-needed-by date**

## What the tool derives for you (don't enter these)

From the **entity type** alone, the letter fills in:

| Derived | C-Corporation | S-Corporation | Partnership |
|---|---|---|---|
| Return | Form **1120** | Form **1120-S** | Form **1065** |
| E-file authorization | Form **8879-C** | Form **8879-S** | Form **8879-PE** |
| Original due date | **April 15** (year + 1) | **March 15** (year + 1) | **March 15** (year + 1) |
| Prior year (trial-balance line) | tax year − 1 | tax year − 1 | tax year − 1 |

## Fixed on every letter (only change if asked)

- Cleanup / catch-up bookkeeping billed separately at **$60/hr**; advisory & planning at
  **$150/hr** under a separate agreement.
- Signer: **Julia Kononova, MBA, EA — Chief Accountant**.
- Letterhead: **Pembroke Pines, Florida · 786-318-1505**, plus the attached **Terms &
  Conditions Addendum**.

## How to produce the finished PDF

Fill the form in the embedded generator, then click **Save PDF** → your browser's print
dialog → **Save as PDF**. It builds the letter live as you type, validates every required
field, and starts blank each time. *(Save-as-PDF works in a normal browser and on the
published Hub; it is preview-only inside the claude.ai artifact sandbox.)*

**Client data never enters the repo** — company names, EINs, addresses, and dollar figures
live in the firm's systems; the finished letter goes to the client.
