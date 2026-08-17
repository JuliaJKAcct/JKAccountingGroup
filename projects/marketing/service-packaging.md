# Monthly service packaging

> **Purpose.** How the firm's monthly engagements are packaged and sold — the
> three plans, what is in every one of them, what climbs between them, what is
> sold separately, and how an upgrade is justified to a client. This is the
> shared source of truth for the website pricing page, the proposal, and the
> sales conversation. It governs *what the offer is*;
> [`positioning.md`](./positioning.md) governs *why the firm*, and
> [`../../brand/JK-Brand-Guide.md`](../../brand/JK-Brand-Guide.md) governs how it
> looks and sounds.
>
> **Status:** Approved architecture (Julia, 2026-08-17) — pending the bounded
> allowances in §7 and the website build. Prices are the existing working
> baseline, unchanged.

## 1. Why this exists — the problem with the live page

The live pricing page sells three plans as three quantities of the same
ingredient list. Fifteen rows, of which **eight are word-for-word identical**
across all three plans. The visible differences are bookkeeping cadence, payroll
cadence, a report quota, a Q&A quota, a quality label on the tax return, and a
response-time promise.

| Row | Essential $725 | Growth $1,497 | Premier $2,497 |
|---|---|---|---|
| Bookkeeping | Monthly | Biweekly | Weekly |
| Payroll | Owner only | Biweekly, ≤5 employees | **Weekly — no limit** |
| Custom reports | ✓ | Limited | Unlimited |
| Income tax return | **Basic** | Standard | **Elite** |
| Q&A | Basic | Limited | Unlimited |
| Response time | **96 hours** | 48 hours | 24 hours |
| 8 further rows | identical | identical | identical |

So the page asks a buyer to pay **$1,772/month more** for more frequent
bookkeeping and a faster reply — and cadence is the cheapest thing the firm
does. The predictable question is *"why would I pay $2,497 when the $725 plan
already includes most of the same things?"*

Three of those rows are actively harmful and are removed outright:

1. **"Response Time — 96 Hours."** The firm's single strongest differentiator is
   access to a senior advisor who speaks the client's language. The page
   advertises **four days** on the plan most new clients enter on, and turns
   communication into something rationed by price. Communication is the promise,
   not the upsell.
2. **"Income Tax Return — Basic."** It tells an Essential client the firm will
   prepare them a lesser return. Nobody wants a basic tax return, and for a tax
   firm this is the most damaging line on the page after response time.
3. **"Custom Reports — Unlimited"** and **"Payroll — Weekly"** with no
   headcount limit. Open-ended promises the firm will not honour: a 50-employee
   company qualifies for in-house weekly payroll today, at $2,497.

## 2. The architecture — one ladder, one menu

The page fails because it puts two unrelated things on a single axis:

- **How much work the business generates** — transactions, employees, states,
  entities, AP volume. This is *horizontal*. It is **cost**.
- **How deep the relationship is** — whether the firm records your history,
  plans your year with you, or sits in your decisions. This is *vertical*. It is
  **value**.

Mixing them means a high-transaction client with no advisory needs gets pushed
into the top plan where he does not belong, and a sophisticated small client is
stuck at the bottom. So they are split:

> **The ladder** — three plans, vertical. You buy one whole level of
> relationship. It cannot be unbundled.
>
> **The menu** — add-on modules, horizontal. Priced separately, added on top of
> any plan.

This is what delivers the "clients cannot pick and choose" requirement without
rigidity: the choice a client gets is **additive, never subtractive**.

## 3. The band above the plans — what every client gets

Printed once, above the three cards, before any plan is read:

> **Every plan includes direct access to your advisor — WhatsApp, email, or
> phone, in your language. We reply within one business day. On every plan,
> always.**

This matches the "within one business day" standard already carried in
[`referral-offer-strategy/strategy.md`](./referral-offer-strategy/strategy.md)
and turns the firm's best asset into the reason to choose it rather than a
reason to upgrade.

⚠️ **The guardrail, stated once on the page:** unlimited *access* is not
unlimited *work*. — *"Ask us anything, any time — always included. Work that
follows from the answer is scoped and quoted."* Without this line, "communication
always included" becomes free projects, which is exactly where a firm bleeds.

Also included on every plan, and therefore never a differentiator:

- Bookkeeping kept current — at the cadence the business's volume needs
- Monthly financial statements
- **Owner payroll** — set up, run, and filed (the S-corp requirement handled)
- The business tax return, prepared and filed
- Sales tax returns, 1099s, annual report filing
- Cash balance monitoring

**Employee payroll is not on this list.** It is a genuine plan-level difference
and it is stated on the cards: none on Essential, up to five employees on
Advisory and Strategic (§7).

## 4. What actually climbs

Not speed of reply — **initiative**. Who starts the conversation, and how often
the firm comes to the client:

| | **Essential** | **Advisory** | **Strategic** |
|---|---|---|---|
| | You can always reach us. | *and* we come to you every quarter. | *and* we're in the decision before you make it. |
| Engagement | After the fact — the year closes clean | During the year — while there is still time to act | Before the decision — consequences evaluated in advance |
| Who you get | The team keeps the books right, senior-backed | Your advisor, in the room, on a rhythm | Senior involvement on demand, plus coordination with your other professionals |

## 5. The three plans

Each plan carries **the same six labelled rows in the same order**, so a buyer
can compare them line for line without a feature grid. The rows that genuinely
differ — payroll, tax planning, advisory rhythm — are the ones that carry the
price. *(Julia, 2026-08-17: the source brief's tier copy is the right shape but
too abstract to buy from; these rows are what "worked on, with the details
outlined" means.)*

### ESSENTIAL — $725+/month · *Stay compliant.*

**Best for:** owners who mainly want dependable accounting and tax compliance
handled correctly.

**Core promise:** your accounting stays current, required filings are handled,
and you know what needs your attention.

- **Accounting foundation** — bookkeeping kept current and monthly financial
  statements.
- **Tax & compliance** — the business tax return, sales tax returns, 1099s, and
  the annual report — all filed on time.
- **Payroll** — **owner payroll only.** Set up, run, and filed: the S-corp
  requirement handled. *Employee payroll is not included on this plan.*
- **Tax planning** — a **year-end review** before the year closes, focused on
  accuracy, compliance, and anything that needs action.
- **Advisory rhythm** — that annual review is the scheduled touchpoint.
- **Access** — reach your advisor any time; reply within one business day. *Same
  on every plan.*

**Do not position it as:** an advisory or CFO relationship.

### ADVISORY — $1,497+/month · *Stay ahead.* — the hero plan

**Best for:** established owners who want proactive tax planning and regular
conversations through the year.

**Core promise:** we help you deal with tax and financial issues while there is
still time to act — not after the year is over.

- **Accounting foundation** — everything in Essential, unchanged.
- **Tax & compliance** — everything in Essential, unchanged.
- **Payroll** — owner payroll **plus employee payroll, up to five employees**,
  at the cadence you choose.
- **Tax planning** — **proactive, during the year.** Your position reviewed
  while there is still time, with the actions worth taking named while they can
  still be taken.
- **Advisory rhythm** — **quarterly planning sessions** (results, what's coming,
  the decisions on the horizon), plus an **owner & entity review**: compensation,
  distributions, and structure revisited as the business changes. Reporting built
  around the questions you actually ask.
- **Access** — same as every plan.

**Do not position it as:** business coaching, forecasting, or KPI consulting.

### STRATEGIC — $2,497+/month · *Make decisions with an advisor beside you.*

**Best for:** more complex businesses whose owners want senior involvement
before significant decisions.

**Core promise:** bring us in before the decision is made, so the consequences
can be weighed in advance.

- **Accounting foundation** — everything in Advisory, unchanged.
- **Tax & compliance** — everything in Advisory, unchanged.
- **Payroll** — owner payroll plus employee payroll, **up to five employees**
  (the firm's ceiling — see §7).
- **Tax planning** — everything in Advisory, **plus planning around each
  significant decision** rather than only on the quarterly cycle.
- **Advisory rhythm** — quarterly sessions **plus senior-level involvement on
  demand**, and **coordination** with your attorney, lender, investment advisor,
  or foreign accountant.
- **Access** — same as every plan.

Concrete examples, on the page, so the promise has edges:

- Evaluate the tax implications before a major equipment or real-estate purchase.
- Revisit owner compensation, distributions, and entity structure as things change.
- Talk through a significant transaction *before* you commit to it.
- Coordinate the tax position with your attorney, lender, or foreign accountant.

**Do not position it as:** fractional CFO services. Strategic includes **the
conversation**; producing the deliverable is the Controller add-on (§6).

### The detailed comparison

Lower on the page, for buyers who want the specifics. It supports the decision;
it must not lead it.

| | **Essential** | **Advisory** | **Strategic** |
|---|---|---|---|
| Bookkeeping & monthly financials | ✓ | ✓ | ✓ |
| Business tax return · sales tax · 1099s · annual report | ✓ | ✓ | ✓ |
| Cash balance monitoring | ✓ | ✓ | ✓ |
| Owner payroll | ✓ | ✓ | ✓ |
| **Employee payroll** | **—** | **up to 5** | **up to 5** |
| Tax planning | Year-end review | Proactive, during the year | + around each significant decision |
| Scheduled sessions | Annual review | Quarterly | Quarterly + on demand |
| Owner & entity review | — | ✓ | ✓ |
| Coordination with your other professionals | — | — | ✓ |
| Access & response time | Same on every plan | Same on every plan | Same on every plan |

## 6. The menu — sold separately, added to any plan

Removed from the plans and priced as add-ons (Julia, 2026-08-17):

| Add-on | What it is |
|---|---|
| **Accounts payable / bill pay** | Vendor bills received, scheduled, and paid on your approval. |
| **Invoicing & collections** | Customer invoicing, statements, and follow-up on what's owed. |
| **Employee payroll on Essential** | The only payroll that is ever an add-on. Employee payroll belongs to the plans (§5) — an Essential client who hires staff normally moves to Advisory, and this exists for the one who genuinely should not. |
| **Fractional controller / CFO** | The deliverables: financial packages for banks and lenders, management reporting, forecasting, KPI reporting. |
| **Additional states** | Sales-tax registration and filing beyond the first state. |
| **Additional entities** | Each additional company is its own engagement. |
| **Catch-up / cleanup bookkeeping** | One-time, priced on the state of the books. |
| **Personal tax return (owner's 1040)** | Never part of a monthly plan — the firm's standing rule, see [`proposal-generator`](../../.claude/skills/proposal-generator/). |

**The line between Strategic and the Controller add-on** — one sentence, usable
on a call:

> **Strategic includes the conversation. The Controller add-on includes the
> deliverable.**

Talking through the tax and financial implications of a loan is Strategic.
*Building the financial package the bank wants to see* is paid controller work.
This is a deliberate departure from the source brief, which placed "prepare
financial information for financing conversations" inside the top tier — the
firm is not selling capability it has not built out.

**No grandfathering is needed.** Bill pay and invoicing & collections are listed
on all three live plans today, but no current client is actually receiving them
(Julia, 2026-08-17), so removal is clean.

## 7. Payroll — three different things the live page conflates

1. **Owner payroll.** Required for every S-corp client (reasonable
   compensation), already carried at $0 in the internal pricing engine.
   **Every plan, permanently.** Worded as a benefit, not a line item: *"Owner
   payroll run and filed — the S-corp requirement handled."*
2. **Employee payroll.** A **plan-level differentiator, not a menu item**
   *(Julia, 2026-08-17)* — the clearest concrete difference between Essential
   and the plans above it, and it belongs on the cards:

   | Essential | Advisory | Strategic |
   |---|---|---|
   | **No employee payroll** | Up to **5 employees** | Up to **5 employees** |

   What is *not* a differentiator is **cadence**. Weekly, biweekly or
   semi-monthly is the client's operational choice, never a tier — that is the
   distinction the live page gets backwards, selling "Biweekly" against "Weekly"
   as if frequency were value.

   Between Advisory and Strategic the payroll line is deliberately identical:
   five is the firm's ceiling everywhere, and what separates those two plans is
   advisory depth, not headcount.
3. **The ceiling — 5 employees** *(Julia, 2026-08-17)*. Above five, the firm
   does not run payroll in-house. The answer is not "no": the client is set up
   on a payroll platform and the firm supervises and records it — a smaller,
   separately-scoped service. This is what stops a 15- or 50-employee company
   qualifying for in-house payroll under a plan.

**Every allowance is bounded.** No unbounded promise survives on the page. The
following bounds carry the same principle across the rest of the plan and still
need Julia's sign-off before the page is built:

| Included | Proposed bound | Beyond it |
|---|---|---|
| Employee payroll (Advisory · Strategic) | 5 employees | Platform setup + supervision, scoped separately |
| 1099 filing | 10 contractors | $25 per additional contractor (matches the internal engine) |
| Sales tax | 1 state | Priced per additional state |
| Entities | 1 | Each additional entity is its own engagement |

## 8. Justifying the upgrade

The upgrade is justified by **a fact about the client's business, not a feeling
about the service**. Then nobody has to sell it — you point at the condition.
Each card carries a *"Move up when…"* line:

**→ Move to Advisory when:**
you elected S-corp · you hired your first employee · you're taking distributions
· you added a second state or a second entity · you're buying equipment or a
vehicle · the business is genuinely profitable now.

> *"On Essential we make sure last year is right. Once you're making real money,
> the decisions during the year are worth more than the report after it."*

**→ Move to Strategic when:**
you're going for financing · you're buying real estate · a partner or investor
is coming in · you're running multiple entities · there's foreign ownership or a
foreign structure · you're buying or selling a business.

> *"You're now making decisions where being wrong costs more than a year of
> fees."*

This device is honest, it does the selling on its own, and it makes the ladder
read as **stages of a business** rather than tiers of a product.

## 9. How the page should be ordered

1. **The access band** (§3) — the promise, before any plan is read.
2. **Three plan cards** — name, promise line, who it's for, starting price, the
   *"Move up when…"* line, CTA. **Advisory is the visual hero.**
3. **The four outcome categories** — Accounting & Compliance · Tax Planning ·
   Advisory Rhythm · Decision Support.
4. **The add-on menu** (§6) — presented as *"Add what your business needs"*, not
   as things missing from the plans.
5. **Detailed comparison** — collapsed / lower on the page, for buyers who want
   the operational specifics. It supports the decision; it must not lead it.
6. **The qualification note:** *"All plans include the accounting foundation
   appropriate for your business. Exact scope and pricing are based on
   transaction volume, payroll, number of entities, filing requirements, and
   overall complexity."*

Prices stay **"Starting at"** — scope genuinely varies per client, and the
proposal is where it is finalized.

## 10. Website copy

Plan names stay in English in both languages — they are product names. The
promise lines are written natively in each, not translated word-for-word (brand
guide, bilingual rule).

### English

> **Every plan includes direct access to your advisor — WhatsApp, email, or
> phone, in your language. We reply within one business day. On every plan,
> always.**

**ESSENTIAL — Stay compliant.**
Reliable accounting and tax compliance for businesses that need the fundamentals
handled properly. *Starting at $725/month.*

**ADVISORY — Stay ahead.**
Accounting, plus proactive tax planning and regular advisory throughout the
year — so nothing is a surprise at tax time. *Starting at $1,497/month.*

**STRATEGIC — Make decisions with an advisor beside you.**
For more complex businesses that want senior-level guidance and deeper planning
before the decisions that matter. *Starting at $2,497/month.*

> All plans include the accounting foundation appropriate for your business.
> Exact scope and pricing are based on transaction volume, payroll, number of
> entities, filing requirements, and overall complexity.

### Russian

> **В каждом плане — прямая связь с вашим советником: WhatsApp, почта или
> телефон, на вашем языке. Отвечаем в течение одного рабочего дня. В каждом
> плане, всегда.**

**ESSENTIAL — Спокойствие по закону.**
Надёжная бухгалтерия и налоговая отчётность для бизнеса, которому нужно, чтобы
основное было сделано правильно и вовремя. *От $725 в месяц.*

**ADVISORY — На шаг впереди.**
Бухгалтерия плюс налоговое планирование в течение года и регулярные встречи —
чтобы к налоговому сезону не осталось сюрпризов. *От $1 497 в месяц.*

**STRATEGIC — Решения вместе с советником.**
Для более сложного бизнеса, которому нужен опытный советник рядом и глубокое
планирование до того, как решение принято. *От $2 497 в месяц.*

> В каждый план входит бухгалтерская основа, соответствующая вашему бизнесу.
> Точный объём и стоимость зависят от количества операций, зарплатных выплат,
> числа компаний, требований по отчётности и общей сложности.

## 11. Internal consequence — the pricing engine

[`pricing-core.js`](../proposal-tool/tools/pricing-core.js) prices advisory at
**$100 / $150 / $200** by *company size*, and derives most of the fee from
transaction volume and **bookkeeping frequency** (Monthly ×1, Bi-weekly ×1.5,
Weekly ×2).

The moment the ladder is sold as advisory depth rather than cadence, the
mechanical justification for the price gap disappears from the internal math
too. With identical bookkeeping, the entire **$1,772** Essential→Strategic gap
becomes advisory — against a line that currently maxes at $200.

So the engine needs an explicit **tier layer on top of the volume-based floor**:
the matrix computes the production floor (what the work costs), the plan sets the
advisory layer, and the quoted "Starting at" price must never fall below the
floor. Otherwise the calculator and the website will tell a client two different
stories. Not blocking the page; it lands when the engine is next touched, and
the Python engine (`build_pricing_xlsx.py`) must move with it —
[`methodology.md`](../proposal-tool/docs/methodology.md) requires the two sides
to agree.

Note also that removing bill pay and invoicing & collections from the plans
removes real labour from every engagement while the fees stay put — the $725
entry price becomes *more* defensible, not less.

## 12. Open items

1. **The bounded allowances in §7** (1099s, states, entities) need Julia's
   sign-off before the page is built.
2. **The website build itself** — the Odoo pricing page has not been touched.
3. **The pricing engine tier layer** (§11).
4. **The proposal tool** should draw its "what's included" narrative from this
   file once the page is live, so proposal and website cannot drift.

---

*Source: the "Monthly Service Packaging" brief (Aug 2026), reviewed and revised
against the live pricing page with Julia, 2026-08-17. The brief's diagnosis and
three-level structure were adopted; its access ladder, its placement of
financing deliverables in the top tier, and its silence on bounded allowances
were not.*
