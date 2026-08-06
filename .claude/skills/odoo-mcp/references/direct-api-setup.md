# Connecting to Odoo directly through its own API

The plan for replacing (or bypassing) the 50-call/day MCP connector with a direct
connection to Odoo's own API, and the step-by-step Lilian follows to set it up.

> **Status: approved, awaiting one 5-minute test, not yet built.** Lilian raised it with
> **Andres** — who built the firm's Odoo website and set up the MCP connector — and he
> confirmed **there is no problem connecting through the API** (Aug 2026). Odoo's
> documentation says otherwise for the firm's plan; **§0 explains why both can be true and how
> to settle it in five minutes.** Nothing exists yet: no user, no key, no tool.

---

## 0 · The plan question — documented policy vs. observed behaviour

### What the documentation says

Odoo's documentation, verbatim (`developer/reference/external_api`):

> *"Access to data via the external API is only available on **Custom** Odoo pricing plans.
> Access to the external API is **not available on One App Free or Standard** plans."*

**The firm is on Standard** — confirmed 2026-08-06 from the subscription page: *"Standard
Plan · 1 Users"*. Read literally, the direct API is closed.

### What is actually observed

Three facts pull the other way, and they are not weak:

1. **Andres says it works.** He set up the integration and reports the plan does include API
   access. He offered to demonstrate it.
2. **The Pantalytics MCP connector reads and writes this database from outside, today.**
   `pan_usage` on 2026-08-06 returned workspace `Gmail`, plan `Free`, **50 of 50 calls used
   that day**. If that connector speaks to Odoo over the external API — the normal mechanism
   for such tools — then external API access demonstrably works on a Standard plan.
3. **The restriction notice is not new and is not technical.** It appears identically in the
   Odoo **16, 17, 18 and 19** documentation, and it closes with *"visit the pricing page or
   reach out to your Customer Success Manager"* — the register of a **commercial condition**,
   not an enforced error path.

The most probable reading: **Odoo states this as a licensing term but does not block it at the
server.** "You are not entitled to use it" and "you cannot use it" are different claims; an
earlier version of this file reported the first as if it were the second. That was a
misjudgement — the working connector was evidence in plain sight and was under-weighted.

### How to settle it — the throwaway-key test (5 minutes, no cost)

Do not deduce it. Prove it.

1. On an **existing** user (no new user, no extra seat): **avatar → My Preferences → Account
   Security → New API Key**. Description `TEST`, **shortest duration offered**.
2. One read, nothing else — the modern endpoint needs only the key:
   ```bash
   curl -sS -X POST "https://jkaccountinggroup.odoo.com/json/2/res.company/search_read" \
     -H "Authorization: bearer $KEY" -H "Content-Type: application/json" \
     --data '{"fields": ["name"], "limit": 1}'
   ```
3. **Revoke the key immediately** on the same screen.

- **Returns the company name** → the external API works on this plan. No upgrade needed, and
  §3's Step 1–2 can use an existing user.
- **Returns a plan/authorisation error** → Custom really is required; go to the numbers below.

One more question worth asking Andres, which settles it without any test: *"when you configured
Pantalytics, did you give it an API key, or a username and password?"* An API key means the
external API is working on this plan; a username/password means the connector logs in as a web
session and proves nothing about the API.

### If Custom does turn out to be required — the numbers

All confirmed 2026-08-06 from the two vendors' own screens:

| | Price | What it gives |
|---|---|---|
| **Odoo Standard** (current) | **$31.10** /user/month · 1 user | All apps. No API, no Studio, no multi-company |
| **Odoo Custom** | **$61.00** /user/month | All apps **+ Studio + API / Multi-Company** |
| **Pantalytics Free** (current) | €0 | 50 calls/day |
| **Pantalytics Pro** | **€25** /user/month | 500 calls/day · 30-day free trial |
| **Pantalytics Max** | €100 /user/month | 10,000 calls/day |

With **one** Odoo user the comparison is unusually close:

- **Pantalytics Pro:** $31.10 + ≈€25 → **≈$59/month**, 500 calls/day, middleman stays, no Studio.
- **Odoo Custom:** **$61.00/month**, unlimited API, no middleman, **plus Studio and
  multi-company**.

Near-identical money; Custom buys strictly more. **The best combination is Odoo Custom with
Pantalytics left on Free** — still $61/month total, and it keeps the connector for the one
thing the direct API cannot do (Claude on a phone or in a browser, where no code can run).

Two forward-looking cautions: Custom's premium is **per user**, so the $30/month gap widens by
$30 for every user the firm adds; and Pantalytics bills in **euros**, so the dollar cost moves
with the exchange rate.

**Tactical note:** Pantalytics Pro carries a **30-day free trial**. Starting it unblocks the
entire queued website backlog at zero cost while the plan question is settled — worth doing
whichever way the decision goes. Check whether it requires a card and auto-renews, and note the
workspace is named `Gmail`, suggesting it was created from a Google sign-in that may be
Andres's rather than the firm's.

## 1 · Why we want it

The **50 tool calls per 24 hours** belong to the **MCP connector's free plan** — a third-party
bridge (`mcp.pantalytics.com`) between Claude and Odoo. They are **not** a limit of the firm's
Odoo subscription and **not** a limit of the Claude plan. See the skill's §1.

Odoo's own API has **no comparable daily call cap** (it does cap API keys per user — see §3,
Step 2). A lot of website work is queued (see
[`PENDING-FIXES.md`](../../../../projects/marketing/consultation-booking/PENDING-FIXES.md))
and 50 calls does not cover it — the budget hit 50/50 in a single session on 2026-08-06.

## 2 · What is already verified

Checked 2026-08-06 from a Claude Code session over plain HTTP, **no MCP calls spent**:

| Check | Result | What it proves |
|---|---|---|
| `POST /xmlrpc/2/common` → `version()`, both hosts | **200** — `19.0+e` (Odoo 19, Enterprise) | The server answers from this environment |
| `POST /jsonrpc` → `db.list` | **Access Denied** | The database list is not public. Correct behaviour |
| `POST /json/2/res.users/read` (no credentials) | **401 Unauthorized** | **The modern JSON-2 endpoint exists and is live on this instance** — 401, not 404 |
| `GET /doc` | **303** (redirects to login) | The instance's own API documentation page exists |

**What this does NOT prove:** that data calls will be *authorised*. `version()` is an
unauthenticated meta-call and is not plan-gated, so a 200 there is entirely consistent with a
Standard plan that will refuse every real data call. Only a successful authenticated read
settles §0.

## 3 · The step-by-step

*(Only after §0 is answered.)*

### Step 0 — Find the database name

Almost certainly **`jkaccountinggroup`** (it is the subdomain, and `jkaccountinggroup.odoo.com`
responds). Two ways to confirm:

1. **`odoo.com` → *My Databases*** — listed by name. Note this requires signing in as the
   **database administrator**, which may be Andres rather than Lilian.
2. **Inside Odoo:** activate developer mode (**Settings → bottom of the page → *Activate the
   developer mode***) — the database name then shows under the user's name in the avatar menu.
   Without developer mode it stays hidden.

> There is **no "About" entry** in the Odoo 19 avatar menu, whatever older guides say.

A wrong name simply makes the login fail. It breaks nothing.

### Step 1 — Create a dedicated user

> **Settings → Users & Companies → Users → New** *(no developer mode needed)*

- **Name:** `Claude API Integration`
- **Login / email:** e.g. `claude-api@jkaccountinggroup.com`
- **Access rights: the minimum.** No *Administration / Settings*.

Never put the key on Julia's user: an API key carries **exactly the power of its user**, and a
dedicated user can be revoked without touching anyone's account.

> ⚠️ **An extra internal user costs a full seat** — $31.10/month on Standard, $61.00 on
> Custom, confirmed 2026-08-06. The firm currently has **one** user, so a dedicated
> integration user **doubles the Odoo bill**. That is the real price of isolating the key.
>
> The alternative is to put the key on the existing user and accept that it carries that
> user's full power — compensating with the [`write-safety.md`](./write-safety.md) layers and
> a short key duration. **Lilian's call: surface both numbers, do not decide for her.**
> (With one user, that user is the administrator, so this is not a small trade-off.)

**Read Step 4 before choosing the access rights** — the connection test needs to be one this
user can actually perform.

### Step 2 — Generate the API key

Logged in **as that user**:

> **Avatar → My Preferences → Account Security tab → New API Key**

It asks for the password, then a description, then shows the key **once**. Needs neither
developer mode nor 2FA.

**Three things this dialog will do that surprise people:**

1. **Duration is mandatory.** Odoo will not create a key without one.
2. **A non-Settings user cannot create a never-expiring key.** The *Persistent Key* option only
   appears for a system (Settings) user — which Step 1 deliberately avoids. For a normal
   internal user the duration is **capped at 90 days**, after which the integration stops
   working with an auth error that looks exactly like a revoked key.
   **So: either accept a 90-day key and put its rotation date in the calendar, or have an
   administrator raise the maximum duration on a group assigned to this user** (the field is
   developer-mode only).
3. **A user may hold at most 10 keys** (`base.programmatic_api_keys_limit`); an eleventh fails
   with HTTP 422.

### Step 3 — Store it as environment variables

**Never in the repo. Never pasted into chat** (the conversation is stored).

It goes in the **Claude Code environment's** configuration. Docs:
`code.claude.com/docs/en/claude-code-on-the-web`.

```
ODOO_URL      = https://jkaccountinggroup.odoo.com
ODOO_DB       = jkaccountinggroup
ODOO_USER     = claude-api@jkaccountinggroup.com     # not needed by JSON-2, kept for reference
ODOO_API_KEY  = (the key)
```

Lilian asked to be walked through this screen live rather than handed a menu path — when she
gets there, ask what she sees and guide from that.

### Step 4 — Prove the connection with a read that needs no permissions

**Use the modern JSON-2 API** (see §4 on why not XML-RPC). The key is a bearer token — there
is no separate authenticate step and no uid:

```bash
curl -sS -X POST "$ODOO_URL/json/2/res.users/read" \
  -H "Authorization: bearer $ODOO_API_KEY" \
  -H "X-Odoo-Database: $ODOO_DB" \
  -H "Content-Type: application/json" \
  --data '{"ids": [], "fields": ["login", "name"]}'
```

Reading the calling user's own record needs **no group at all**, so a success proves the
credentials and the plan, and a failure means what it says.

> **Do not use `website.page` for this test.** In Odoo 19 that model has a single ACL row,
> granted only to the **Website → Designer/Editor** group. A minimal user gets an
> `AccessError`, which reads like "the connection failed" and sends the reader debugging a key
> that is perfectly fine. Website reads belong in Step 5.

### Step 5 — Enable writing, when Lilian says so

She grants the **Website** group. Now `website.page` and `ir.ui.view` become readable, and the
first write is small and reversible, executed under every rule in
[`write-safety.md`](./write-safety.md).

## 4 · Use JSON-2, not XML-RPC

Odoo's 19.0 documentation carries a deprecation notice on the RPC page:

> *"Both the XML-RPC and JSON-RPC APIs at endpoints `/xmlrpc`, `/xmlrpc/2` and `/jsonrpc` are
> scheduled for removal in **Odoo 22 (fall 2028) and Online 21.1 (winter 2027)**."*

The firm is on **Odoo Online**, which upgrades itself — so the **winter 2027** date is the one
that applies. Building on XML-RPC means building it twice.

**The replacement, already live on this instance (verified 401, not 404):**

```
POST /json/2/<model>/<method>
Authorization:  bearer <API key>
X-Odoo-Database: <database>          (optional)
Content-Type:   application/json
```

The body carries `ids`, the method's parameters, and optionally `context`. The instance's own
**`/doc`** page lists the models, fields and methods actually available on this database — a
better reference than any general documentation.

The old XML-RPC form (`common.authenticate` → uid → `execute_kw`) still works today and is
fine as a fallback, but new code should not start there.

## 5 · What still has to be built

A small tool in the repo — `tools/odoo-api/` — so no session reinvents it:

- authenticate from the environment variables (never from arguments, never logged);
- **dry-run by default** — a real write needs an explicit, separate flag;
- the model allow-list and deny-list from [`write-safety.md`](./write-safety.md) enforced **in
  code**, not by good intentions;
- snapshot-before-write **including the record's dependents** (see write-safety Layer 2), with
  the ready-made undo;
- the post-write HTTP canary check against a recorded baseline.

Build it **before** the first write, not after.

## 6 · Two questions Lilian asked, answered here so they don't get re-asked

**Why do MCP connectors exist at all, if API keys exist?** They solve different problems. The
API is *capability*; MCP is *standardised, discoverable access for an AI*. Three real reasons
the connector still earns its place: (a) the API is a door, not a map — someone must know the
model and field names and write the code, while an MCP connector ships described tools ready
to use; (b) **not every surface can run code** — Claude Code has a shell, but Claude in a
browser or on a phone does not, and there a connector is the only route; (c) the connector
authenticates without handing anyone a raw key, and can log and rate-limit centrally. Plus the
commercial reason: that convenience can be packaged and sold, which is what Pantalytics does.
**And now a fourth, discovered the hard way:** a connector can reach a database whose own
pricing plan would not permit direct external API access — which may be exactly why Andres
chose it.

**Why does Odoo show the API key only once?** Because Odoo **does not store the key** — only a
hash of it, like a password (confirmed in Odoo's source: the key is hashed on creation and
never kept in plain text). If it could show the key again, it would mean a readable copy
exists, and anyone reaching the database, a backup, or an admin session would harvest *every*
key at once. Storing only the hash means Odoo can verify a key without being able to
reconstruct it. The practical consequence is healthy: a lost key is not "recovered", it is
**revoked and replaced** in thirty seconds. If there is ever any doubt about where a key has
been seen — revoke it and make a new one, no deliberation.
