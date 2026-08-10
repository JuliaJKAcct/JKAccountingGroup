// Write-safety rules, enforced in code.
//
// This file is the machine-readable form of
// .claude/skills/odoo-mcp/references/write-safety.md — specifically Layer 4
// ("hard limits inside the tool"), which until now existed only as a convention.
//
// The rule for changing anything here: change write-safety.md in the same commit,
// or the two drift apart and the document stops describing the code.

/**
 * Layer 4, rule 8 — the absolute deny-list.
 *
 * Never writable by automation, whatever the task, whoever asks. Permission
 * changes are done by a human in the Odoo UI.
 */
export const DENY_WRITE = new Set(['res.users', 'res.groups', 'ir.model.access', 'ir.rule'])

/**
 * Accounting records are never deleted by automation. Posted entries are
 * reversed, not removed — reversal preserves the audit trail.
 */
export const DENY_DELETE = new Set([
  'account.move',
  'account.move.line',
  'account.payment',
  ...DENY_WRITE,
])

/**
 * Layer 4, rule 7 — the per-task allow-list.
 *
 * A task declares the models it may write. Anything outside refuses, even if
 * asked directly. `website` is the profile the queued backlog needs.
 */
export const PROFILES = {
  website: ['website.page', 'ir.ui.view', 'website.menu', 'website.rewrite'],
  booking: ['appointment.type', 'appointment.slot'],
  none: [],
}

/**
 * Layer 4, rule 10 — the volume brake.
 *
 * Website writes are one record at a time (rule 9). Everything else stops and
 * asks above this count rather than running a loop nobody is watching.
 */
export const MAX_RECORDS_PER_WRITE = 1
export const MAX_RECORDS_OTHER = 5

/**
 * Which snapshots may be committed to the repo.
 *
 * The repo is the version history Lilian asked for, and git gives that for free
 * — but only for content that is safe to commit. Models holding client data,
 * personal data, or secrets snapshot to a gitignored directory instead and never
 * enter git. See CLAUDE.md, "Client data is sensitive".
 */
const COMMITTABLE = new Set([
  'website.page',
  'ir.ui.view',
  'website.menu',
  'website.rewrite',
  'website',
  'appointment.type',
  'appointment.slot',
  'product.template',
  'product.product',
])

/** True when a snapshot of this model may live in git. */
export function isCommittable(model) {
  return COMMITTABLE.has(model)
}

/**
 * Records that point at the target and would be affected by changing or deleting
 * it. Layer 2, rule 5: snapshot the record AND its dependents.
 *
 * The website relations are the dangerous ones. Odoo cascades
 * `website.page.view_id` → `ir.ui.view`, so deleting a view SILENTLY deletes the
 * page pointing at it, taking its URL, menu entries, published flag and SEO
 * fields with it. Re-creating the view does not bring the page back.
 */
export const DEPENDENTS = {
  'ir.ui.view': [
    { model: 'ir.ui.view', field: 'inherit_id', note: 'restrict — a delete fails outright if any view inherits' },
    { model: 'website.page', field: 'view_id', note: 'CASCADE — deleting the view deletes the page' },
    { model: 'ir.model.data', field: 'res_id', extraDomain: [['model', '=', 'ir.ui.view']] },
  ],
  'website.page': [
    { model: 'website.menu', field: 'page_id' },
    { model: 'ir.model.data', field: 'res_id', extraDomain: [['model', '=', 'website.page']] },
  ],
}

export class SafetyViolation extends Error {
  constructor(message, rule) {
    super(message)
    this.name = 'SafetyViolation'
    this.rule = rule
  }
}

/**
 * The gate every write passes through. Throws rather than returning false — a
 * refusal must be impossible to ignore by forgetting to check a return value.
 */
export function assertWriteAllowed({ model, ids = [], operation = 'write', profile = 'none' }) {
  if (operation === 'unlink' && DENY_DELETE.has(model)) {
    throw new SafetyViolation(
      `Refusing to delete ${model}. It is on the absolute deny-list: accounting records are ` +
        `reversed, never deleted, and permission models are changed by a human in the UI.`,
      'layer-4-rule-8',
    )
  }

  if (DENY_WRITE.has(model)) {
    throw new SafetyViolation(
      `Refusing to write ${model}. Permission and user models are never written by automation ` +
        `(write-safety.md Layer 4, rule 8). Do this in the Odoo UI.`,
      'layer-4-rule-8',
    )
  }

  const allowed = PROFILES[profile]
  if (!allowed) {
    throw new SafetyViolation(
      `Unknown safety profile "${profile}". Known profiles: ${Object.keys(PROFILES).join(', ')}.`,
      'layer-4-rule-7',
    )
  }
  if (!allowed.includes(model)) {
    throw new SafetyViolation(
      `Refusing to write ${model}: it is not in the "${profile}" profile ` +
        `(allowed: ${allowed.join(', ') || 'nothing'}). Declare a profile that includes it, ` +
        `deliberately, rather than widening this one.`,
      'layer-4-rule-7',
    )
  }

  const isWebsite = PROFILES.website.includes(model)
  const limit = isWebsite ? MAX_RECORDS_PER_WRITE : MAX_RECORDS_OTHER
  if (ids.length > limit) {
    throw new SafetyViolation(
      `Refusing to ${operation} ${ids.length} records of ${model} in one operation ` +
        `(limit ${limit}). ${isWebsite ? 'Website writes are one record at a time.' : 'Split the work and confirm each step.'}`,
      isWebsite ? 'layer-4-rule-9' : 'layer-4-rule-10',
    )
  }

  return true
}
