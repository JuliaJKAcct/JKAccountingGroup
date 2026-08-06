# Connecting to Odoo directly through its own API

The plan for replacing (or bypassing) the 50-call/day MCP connector with a direct
connection to Odoo's own API, and the step-by-step Lilian follows to set it up.

> **Status: approved, not yet built.** Lilian raised it with **Andres** — who built the
> firm's Odoo website and set up the MCP connector — and he confirmed **there is no problem
> connecting through the API** (Aug 2026). Nothing has been created yet: no user, no key, no
> tool. When Lilian says "let's do the Odoo API", start at [§3](#3--the-step-by-step) and
> walk her through it one step at a time.

---

## 1 · Why

The **50 tool calls per 24 hours** belong to the **MCP connector's free plan** — a
third-party bridge (`mcp.pantalytics.com`) between Claude and Odoo. They are **not** a limit
of the firm's Odoo subscription and **not** a limit of the Claude plan. See the skill's §1.

Odoo's own API is **included in the subscription, costs nothing extra, and has no daily call
cap**. A lot of website work is queued (see
[`projects/marketing/consultation-booking/PENDING-FIXES.md`](../../../../projects/marketing/consultation-booking/PENDING-FIXES.md))
and 50 calls does not cover it — the budget hit 50/50 in a single session on 2026-08-06.

## 2 · What is already verified

Checked 2026-08-06 from a Claude Code session, over plain HTTP, **no MCP calls spent**:

| Check | Result |
|---|---|
| `POST /xmlrpc/2/common` → `version()` on `https://www.jkaccountinggroup.com` | **200** — `server_version: 19.0+e` (Odoo 19, Enterprise) |
| Same on `https://jkaccountinggroup.odoo.com` | **200**, identical response |
| `POST /jsonrpc` → `db.list` | **Access Denied** — the database list is not public. Correct and expected on Odoo Online |

So: **the API endpoint is reachable from the session environment and the server answers.**
Only credentials are missing. No module to install, nothing to enable.

> The unauthenticated `version()` call proves reachability only. Authenticated access
> additionally requires a paid Odoo subscription — the firm is on Enterprise 19, so this is
> expected to be fine, but it is not proven until the first successful login.

## 3 · The step-by-step

### Step 0 — Find the database name

Almost certainly **`jkaccountinggroup`** (it is the subdomain, and `jkaccountinggroup.odoo.com`
responds). Two ways for Lilian to confirm without asking Andres:

1. **`odoo.com` → her account → *My Databases*** — listed there by name. Most reliable.
2. **Inside Odoo:** avatar menu → ***About*** — the dialog shows the version and the database
   name.

A wrong name simply makes the login fail. It breaks nothing.

### Step 1 — Create a dedicated user

> **Settings → Users & Companies → Users → New**

- **Name:** `Claude API Integration`
- **Login / email:** e.g. `claude-api@jkaccountinggroup.com`
- **Access rights: the minimum.** No *Administration / Settings*. **Do not grant website-edit
  rights yet** — that happens at Step 5, after the read-only test passes.

Never put the key on Julia's user: an API key carries **exactly the power of its user**, and a
dedicated user can be revoked without touching anyone's account.

> ⚠️ **Check the cost first.** On Odoo Enterprise an extra **internal user usually costs money**
> on the subscription. Verify in `odoo.com` → the subscription, or with Andres, **before**
> creating it. If it does cost: either accept it (cleanest), or put the key on an existing
> non-Julia user. This is Lilian's call — surface it, do not decide for her.

### Step 2 — Generate the API key

Logged in **as that new user**:

> **Avatar → My Profile → Account Security tab → New API Key**

It asks for the password, then shows the key **once**. Copy it immediately.

### Step 3 — Store it as environment variables

**Never in the repo. Never pasted into chat** (the conversation is stored).

It goes in the **Claude Code environment's** configuration — the same place the environment's
repository and variables are set. Docs: `code.claude.com/docs/en/claude-code-on-the-web`.

```
ODOO_URL      = https://jkaccountinggroup.odoo.com
ODOO_DB       = jkaccountinggroup
ODOO_USER     = claude-api@jkaccountinggroup.com
ODOO_API_KEY  = (the key)
```

Lilian asked to be walked through this screen live rather than handed a menu path — when she
gets there, ask what she sees and guide from that.

### Step 4 — Read-only test

Authenticate and run one harmless read (list the website's pages). If it works, the connection
is proven **and it still cannot write anything**.

```python
# authenticate → uid, then execute_kw for the read
common = ServerProxy(f"{URL}/xmlrpc/2/common")
uid    = common.authenticate(DB, USER, API_KEY, {})
models = ServerProxy(f"{URL}/xmlrpc/2/object")
models.execute_kw(DB, uid, API_KEY, 'website.page', 'search_read',
                  [[]], {'fields': ['name', 'url', 'is_published'], 'limit': 20})
```

### Step 5 — Enable writing, when Lilian says so

She adds the website-edit right to the user. Then the **first write is small and reversible**,
executed under every rule in [`write-safety.md`](./write-safety.md).

## 4 · What still has to be built

A small tool in the repo — `tools/odoo-api/` — so no session reinvents it:

- authenticate from the environment variables (never from arguments, never logged);
- **dry-run by default** — a real write needs an explicit, separate flag;
- the model allow-list and deny-list from [`write-safety.md`](./write-safety.md) enforced **in
  code**, not by good intentions;
- snapshot-before-write to a timestamped file, with the ready-made undo command;
- the post-write HTTP canary check.

Build it **before** the first write, not after.

## 5 · Two questions Lilian asked, answered here so they don't get re-asked

**Why do MCP connectors exist at all, if API keys exist?** They solve different problems. The
API is *capability*; MCP is *standardised, discoverable access for an AI*. Three real reasons
the connector still earns its place: (a) the API is a door, not a map — someone must know the
model and field names and write the code, while an MCP connector ships described tools ready
to use; (b) **not every surface can run code** — Claude Code has a shell, but Claude in a
browser or on a phone does not, and there a connector is the only route; (c) the connector
authenticates without handing anyone a raw key, and can log and rate-limit centrally. Plus the
commercial reason: that convenience can be packaged and sold, which is what Pantalytics does.
The firm simply doesn't need it here, because this environment has both a shell and a key.

**Why does Odoo show the API key only once?** Because Odoo **does not store the key** — only a
hash of it, like a password. If it could show the key again, it would mean a readable copy
exists, and anyone reaching the database, a backup, or an admin session would harvest *every*
key at once. Storing only the hash means Odoo can verify a key without being able to
reconstruct it. The practical consequence is healthy: a lost key is not "recovered", it is
**revoked and replaced** in thirty seconds. If there is ever any doubt about where a key has
been seen — revoke it and make a new one, no deliberation.
