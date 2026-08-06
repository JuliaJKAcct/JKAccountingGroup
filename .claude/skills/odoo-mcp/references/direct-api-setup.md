# Connecting to Odoo directly through its own API

The plan for replacing (or bypassing) the 50-call/day MCP connector with a direct
connection to Odoo's own API, and the step-by-step Lilian follows to set it up.

> **Status: approved in principle, BLOCKED on a pricing question, not yet built.** Lilian
> raised it with **Andres** — who built the firm's Odoo website and set up the MCP connector
> — and he confirmed **there is no problem connecting through the API** (Aug 2026). But see
> **[§0, the gate](#0--gate-the-plan-question-that-decides-everything)**: Odoo only allows
> external API access on *Custom* plans, and this repo records the firm as being on
> *Standard*. **Settle that before creating anything.** Nothing exists yet: no user, no key,
> no tool.

---

## 0 · GATE — the plan question that decides everything

Odoo's own 19.0 documentation, verbatim (`developer/reference/external_api`):

> *"Access to data via the external API is only available on **Custom** Odoo pricing plans.
> Access to the external API is **not available on One App Free or Standard** plans."*

**And [`projects/marketing/consultation-booking/README.md`](../../../../projects/marketing/consultation-booking/README.md)
records the firm as running "Odoo (Standard plan)".** If that is still accurate, the direct
API is **closed** until the subscription moves to Custom — and Custom is priced **per user,
for every user**, so it is not a small increment.

**This inverts the economics that motivated the whole idea.** Paying for a higher plan on the
MCP connector may well be cheaper than moving the firm's entire Odoo subscription to Custom.
**That comparison is Lilian's decision, and she cannot make it without the two numbers.**

**FIRST ACTION, before anything else in this file:**

1. Confirm the firm's **actual current Odoo plan** — `odoo.com` → the subscription, or Andres.
2. If it is **Standard**: get the **cost of moving to Custom** (per user × number of users),
   and the **cost of the paid tier on the MCP connector** (`pan_usage` reports the current
   plan; the provider is `mcp.pantalytics.com`). Compare, then decide.
3. If it is already **Custom**: proceed to §3.

Do not create a user or a key before this is answered. Creating the user first — as an earlier
version of this guide implied — risks paying for an extra internal seat and only discovering
at the connection test that the route was closed all along.

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

> ⚠️ **An extra internal user usually costs money** on Odoo Enterprise per-user pricing.
> Verify in `odoo.com` → the subscription, or with Andres, **before** creating it. If it does
> cost: either accept it (cleanest), or put the key on an existing non-Julia user. Lilian's
> call — surface it, do not decide for her.

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
