// Odoo JSON-2 client.
//
// The key is read from the environment and never returned, logged, or written to
// a file. Every error message that could echo it is scrubbed on the way out.
//
// Targets the modern JSON-2 endpoint (`/json/2/<model>/<method>`, bearer token).
// XML-RPC and JSON-RPC are deprecated and scheduled for removal from Odoo Online
// in winter 2027 — see .claude/skills/odoo-mcp/references/direct-api-setup.md §4.

const REQUIRED_VARS = ['ODOO_URL', 'ODOO_DB', 'ODOO_API_KEY']

export class OdooError extends Error {
  constructor(message, { status, name, model, method } = {}) {
    super(message)
    this.name = 'OdooError'
    this.status = status
    this.odooName = name
    this.model = model
    this.method = method
  }
}

/**
 * Reads credentials from the environment.
 *
 * Throws with an actionable message when the key is absent, because the failure
 * that follows otherwise is a 401 that is indistinguishable from a bad key.
 */
export function credentials() {
  const missing = REQUIRED_VARS.filter((v) => !process.env[v])
  if (missing.length) {
    throw new OdooError(
      `Missing environment variable(s): ${missing.join(', ')}.\n` +
        `The API key lives only in the dedicated \`odoo-api\` cloud environment.\n` +
        `If this session started in another environment, the key is absent by design —\n` +
        `switch environments and start a new session (variables are copied at startup only).`,
    )
  }
  return {
    url: process.env.ODOO_URL.replace(/\/+$/, ''),
    db: process.env.ODOO_DB,
    key: process.env.ODOO_API_KEY,
  }
}

/** Removes the API key from any string before it can reach a log or the screen. */
function scrub(text, key) {
  if (!key || typeof text !== 'string') return text
  return text.split(key).join('«API-KEY-REDACTED»')
}

/**
 * One JSON-2 call.
 *
 * `params` carries the method's own arguments (ids, domain, fields, values…).
 * Returns the parsed result, or throws an OdooError carrying Odoo's own error
 * name so callers can distinguish an AccessError from an Unauthorized.
 */
export async function call(model, method, params = {}) {
  const { url, db, key } = credentials()
  const endpoint = `${url}/json/2/${model}/${method}`

  let response
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${key}`,
        'X-Odoo-Database': db,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
  } catch (cause) {
    throw new OdooError(`Network failure reaching ${endpoint}: ${scrub(cause.message, key)}`, {
      model,
      method,
    })
  }

  const text = await response.text()
  let body
  try {
    body = text ? JSON.parse(text) : null
  } catch {
    throw new OdooError(
      `Odoo returned a non-JSON response (HTTP ${response.status}): ${scrub(text, key).slice(0, 300)}`,
      { status: response.status, model, method },
    )
  }

  if (!response.ok) {
    // Odoo puts the exception class in `name` and the human text in `message`.
    // The two 401s below mean completely different things — see interpret401().
    const name = body?.name ?? 'unknown'
    const message = body?.message ?? text
    throw new OdooError(scrub(message, key), { status: response.status, name, model, method })
  }

  return body
}

/**
 * A 401 from Odoo has two distinct causes that share a status code AND an
 * exception name. Only the message separates them, verified against the live
 * instance (2026-08-10, recorded in the odoo-mcp skill §1).
 */
export function interpret401(message = '') {
  if (/use an API Key with a Bearer/i.test(message)) {
    return {
      cause: 'no-key',
      explain:
        'No key was sent. The session is almost certainly in the wrong environment — ' +
        'the key lives only in `odoo-api`. Switch environments and start a new session.',
    }
  }
  if (/Invalid apikey/i.test(message)) {
    return {
      cause: 'bad-key',
      explain:
        'A key was sent and Odoo rejected it. It is mistyped, revoked, or expired. ' +
        'Odoo never shows a key twice, so an expired key is replaced, not recovered.',
    }
  }
  return { cause: 'unknown', explain: 'Unrecognised 401. Capture the full body before acting.' }
}

/** Convenience read. Never mutates. */
export async function searchRead(model, domain = [], fields = [], opts = {}) {
  return call(model, 'search_read', { domain, fields, ...opts })
}

/** Convenience count. Never mutates. */
export async function searchCount(model, domain = []) {
  return call(model, 'search_count', { domain })
}

/** Reads records by id. Never mutates. */
export async function read(model, ids, fields = []) {
  return call(model, 'read', { ids, fields })
}
