#!/usr/bin/env node
// tools/odoo-api — the safe hands for Odoo's direct API.
//
//   node tools/odoo-api/odoo.mjs <command> [options]
//
// Run `help` for the command list. Every write is a dry run unless --execute is
// passed, and a write refuses to run at all until a snapshot succeeds.
//
// Built because .claude/skills/odoo-mcp/references/write-safety.md describes six
// layers of protection, and until this tool existed almost all of them were
// conventions depending on the operator remembering them. The 50-call/day MCP
// ceiling used to act as a handbrake; the direct API removes it.

import { call, searchRead, credentials, interpret401, OdooError } from './lib/client.mjs'
import { assertWriteAllowed, SafetyViolation, PROFILES, isCommittable } from './lib/safety.mjs'
import * as store from './lib/store.mjs'
import * as canary from './lib/canary.mjs'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const args = process.argv.slice(2)
const command = args[0] ?? 'help'

function flag(name, fallback = undefined) {
  const i = args.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = args[i + 1]
  return next && !next.startsWith('--') ? next : true
}
const has = (name) => args.includes(`--${name}`)

/**
 * A flag that must carry a real value.
 *
 * `flag()` returns `true` for a valueless flag, and `Number(true)` is 1 — so a
 * mistyped `--id` (value dropped) would silently target record 1. Every flag
 * whose value matters goes through this instead.
 */
function required(name, { as = 'string' } = {}) {
  const raw = flag(name)
  if (raw === undefined || raw === true) {
    throw new Error(`--${name} requires a value (got ${raw === true ? 'a bare flag' : 'nothing'})`)
  }
  if (as === 'number') {
    const n = Number(raw)
    if (!Number.isInteger(n)) throw new Error(`--${name} must be an integer, got "${raw}"`)
    return n
  }
  return raw
}

const out = (...a) => console.log(...a)
const json = (v) => out(JSON.stringify(v, null, 2))

// ── check ────────────────────────────────────────────────────────────────────
// The zero-cost pre-flight. Distinguishes "wrong environment" from "bad key",
// which a bare HTTP 401 cannot.
async function cmdCheck() {
  let creds
  try {
    creds = credentials()
  } catch (err) {
    out('✗ ' + err.message)
    process.exitCode = 1
    return
  }
  out(`Host       ${creds.url}`)
  out(`Database   ${creds.db}`)
  out(`Key        present (${creds.key.length} chars, value never displayed)`)

  try {
    const company = await call('res.company', 'search_read', { fields: ['name'], limit: 1 })
    out(`\n✓ Authenticated read succeeded → ${JSON.stringify(company)}`)
  } catch (err) {
    if (err.status === 401) {
      const { cause, explain } = interpret401(err.message)
      out(`\n✗ HTTP 401 (${cause})\n  Odoo said: ${err.message}\n  ${explain}`)
    } else {
      out(`\n✗ ${err.name}: ${err.message}`)
    }
    process.exitCode = 1
    return
  }

  // Report the write rights the key actually carries, so nobody assumes it is
  // narrower than it is.
  out('\nAccess rights carried by this key:')
  for (const model of ['website.page', 'ir.ui.view', 'res.partner', 'account.move', 'res.users']) {
    const ops = []
    for (const op of ['read', 'write', 'create', 'unlink']) {
      try {
        if (await call(model, 'has_access', { ids: [], operation: op })) ops.push(op)
      } catch {
        /* model absent on this instance */
      }
    }
    out(`  ${model.padEnd(16)} ${ops.join(', ') || '—'}`)
  }
  out('\nNote: this tool refuses to write the deny-listed models regardless of the rights above.')
}

// ── map ──────────────────────────────────────────────────────────────────────
// Generates the reference the MCP connector would have shipped, by reading the
// database's own schema. Pure introspection — it cannot change anything.
async function cmdMap() {
  const model = flag('model')
  const dir = path.join(store.ROOT, 'reference')
  await mkdir(dir, { recursive: true })

  if (model && model !== true) {
    const fields = await call(model, 'fields_get', {})
    const rows = Object.entries(fields).map(([name, f]) => ({
      name,
      label: f.string,
      type: f.type,
      relation: f.relation ?? null,
      required: !!f.required,
      readonly: !!f.readonly,
    }))
    const file = path.join(dir, `${model}.json`)
    await writeFile(file, JSON.stringify(rows, null, 2), 'utf8')
    out(`${model}: ${rows.length} fields → ${path.relative(process.cwd(), file)}`)
    for (const r of rows.filter((r) => r.required)) out(`  required: ${r.name} (${r.type})`)
    return
  }

  const models = await searchRead('ir.model', [], ['model', 'name', 'transient'], { limit: 2000 })
  const listed = models
    .filter((m) => !m.transient)
    .map((m) => ({ model: m.model, name: m.name }))
    .sort((a, b) => a.model.localeCompare(b.model))
  const file = path.join(dir, 'models.json')
  await writeFile(file, JSON.stringify(listed, null, 2), 'utf8')
  out(`${listed.length} models → ${path.relative(process.cwd(), file)}`)
  out('Run with --model <name> to map one model\'s fields.')
}

// ── baseline ─────────────────────────────────────────────────────────────────
async function cmdBaseline() {
  out('Capturing the full website baseline…')
  const { dir, manifest } = await store.baseline({ reason: flag('reason', 'pre-session baseline') })
  out(`✓ ${manifest.total} records → ${path.relative(process.cwd(), dir)}`)
  for (const [model, n] of Object.entries(manifest.counts)) out(`    ${model.padEnd(16)} ${n}`)

  const sweep = await canary.sweep()
  await canary.saveBaseline(sweep)
  out('\nCanary baseline:')
  for (const r of sweep.results) out(`    ${String(r.status).padEnd(4)} ${r.path}`)
  await store.recordHistory({ op: 'baseline', dir: path.basename(dir), counts: manifest.counts })
  out('\nCommit this baseline so the history is durable — the container is ephemeral.')
}

// ── read ─────────────────────────────────────────────────────────────────────
async function cmdRead() {
  const model = flag('model')
  if (!model || model === true) throw new Error('read requires --model <name>')
  const domain = JSON.parse(flag('domain', '[]'))
  const fields = JSON.parse(flag('fields', '[]'))
  const limit = Number(flag('limit', 50))
  json(await searchRead(model, domain, fields, { limit }))
}

// ── write ────────────────────────────────────────────────────────────────────
// Dry run by default. The order is fixed and not negotiable:
//   safety gate → snapshot → canary before → [execute] → canary after → ledger
async function cmdWrite() {
  const model = required('model')
  const id = required('id', { as: 'number' })
  const profile = required('profile')
  const reason = required('reason')
  const execute = has('execute')
  const values = JSON.parse(required('set'))

  if (!Object.keys(values).length) throw new Error('write requires --set \'{"field": value}\'')

  // Layer 4 — the gate. Throws loudly rather than returning a value to ignore.
  assertWriteAllowed({ model, ids: [id], operation: 'write', profile })

  // Layer 2 — no snapshot, no write.
  const { dir, records } = await store.snapshot({ model, ids: [id], reason, label: `write-${model}-${id}` })
  if (!records.length) throw new Error(`${model}:${id} does not exist — nothing snapshotted, nothing written.`)
  const before = records[0]
  out(`Snapshot → ${path.relative(process.cwd(), dir)}`)
  if (dir.includes('snapshots-private')) out('  (private bucket — gitignored, must not be committed)')

  // Layer 3, verification 1 — show current → new before anything happens.
  out(`\n${execute ? 'WRITING' : 'DRY RUN — nothing will be changed'}  ${model}:${id}`)
  for (const [field, next] of Object.entries(values)) {
    out(`  ${field}`)
    out(`    current: ${JSON.stringify(before[field])}`)
    out(`    new:     ${JSON.stringify(next)}`)
  }

  const canaryBefore = await canary.sweep()

  if (!execute) {
    out('\nNothing was written. Re-run with --execute to apply.')
    out(`Undo would be: node tools/odoo-api/odoo.mjs restore ${path.basename(dir)} ${model} ${id} --profile ${profile} --reason "undo" --execute`)
    return
  }

  await call(model, 'write', { ids: [id], vals: values })
  out('\n✓ Written.')

  // Layer 3, verification 3 — measured, not eyeballed.
  const canaryAfter = await canary.sweep()
  const verdict = canary.compare(canaryBefore, canaryAfter)
  out('\nCanary check:')
  if (verdict.ok && !verdict.findings.length) out('  no change across the canary set')
  for (const f of verdict.findings) out(`  ${f.verdict.padEnd(11)} ${f.path.padEnd(22)} ${f.detail}`)
  if (!verdict.ok) {
    out('\n⚠️  REGRESSION DETECTED. Undo with:')
    out(`    node tools/odoo-api/odoo.mjs restore ${path.basename(dir)} ${model} ${id} --profile ${profile} --reason "undo" --execute`)
    process.exitCode = 1
  }

  await store.recordHistory({
    op: 'write',
    model,
    ids: [id],
    reason,
    profile,
    before: Object.fromEntries(Object.keys(values).map((f) => [f, before[f]])),
    after: values,
    snapshot: path.basename(dir),
    canary: verdict.ok ? 'clean' : 'REGRESSION',
    undo: `node tools/odoo-api/odoo.mjs restore ${path.basename(dir)} ${model} ${id} --profile ${profile} --reason "undo" --execute`,
  })
}

// ── restore ──────────────────────────────────────────────────────────────────
async function cmdRestore() {
  const [, snapName, model, rawId] = args
  const id = Number(rawId)
  const execute = has('execute')
  if (!snapName || !model || !rawId || !Number.isInteger(id)) {
    throw new Error(
      'usage: restore <snapshot-name> <model> <id> --profile <p> --reason "why" [--execute]',
    )
  }
  // No default profile. `write` makes the caller declare one; an undo that
  // silently declared "website" for itself would satisfy Layer 4's allow-list
  // without anyone choosing it.
  const profile = required('profile')
  const reason = required('reason')
  const all = await store.listSnapshots()
  const snap = all.find((s) => s.name === snapName)
  if (!snap) throw new Error(`No snapshot named ${snapName}. Run \`snapshots\` to list them.`)

  const saved = await store.recordFromSnapshot(snap.dir, model, id)
  const live = (await call(model, 'read', { ids: [id], fields: [] }))[0]
  if (!live) throw new Error(`${model}:${id} no longer exists. A restore cannot recreate a deleted record here.`)

  // Only writable scalar fields go back; computed and relational-set fields are
  // reported rather than forced.
  const fields = await call(model, 'fields_get', {})
  const restorable = {}
  const skipped = []
  for (const [field, savedValue] of Object.entries(saved)) {
    const meta = fields[field]
    if (field === 'id' || !meta || meta.readonly) continue
    if (['one2many', 'many2many'].includes(meta.type)) {
      if (JSON.stringify(savedValue) !== JSON.stringify(live[field])) skipped.push(field)
      continue
    }
    const value = meta.type === 'many2one' && Array.isArray(savedValue) ? savedValue[0] : savedValue
    const liveValue = meta.type === 'many2one' && Array.isArray(live[field]) ? live[field][0] : live[field]
    if (JSON.stringify(value) !== JSON.stringify(liveValue)) restorable[field] = value
  }

  if (!Object.keys(restorable).length) {
    out(`${model}:${id} already matches snapshot ${snapName}. Nothing to restore.`)
    if (skipped.length) out(`(relational fields not compared automatically: ${skipped.join(', ')})`)
    return
  }

  out(`${execute ? 'RESTORING' : 'DRY RUN — nothing will be changed'}  ${model}:${id} → ${snapName}`)
  for (const [field, value] of Object.entries(restorable)) {
    out(`  ${field}\n    now:     ${JSON.stringify(live[field])}\n    restore: ${JSON.stringify(value)}`)
  }
  if (skipped.length) out(`\n  ⚠ relational fields differ and are NOT restored automatically: ${skipped.join(', ')}`)

  if (!execute) {
    out('\nNothing was written. Re-run with --execute to apply.')
    return
  }

  // A restore is a write like any other, and gets the identical treatment. It is
  // tempting to exempt it — "we are only putting things back" — but the record's
  // CURRENT state is what an undo destroys, and the state being restored may
  // itself be the mistake. So: same gate, same snapshot, same canary.
  assertWriteAllowed({ model, ids: [id], operation: 'write', profile })

  const undoOfUndo = await store.snapshot({
    model,
    ids: [id],
    reason: `pre-restore state, before rolling back to ${snapName}`,
    label: `restore-${model}-${id}`,
  })
  out(`\nSnapshot of the CURRENT state → ${path.relative(process.cwd(), undoOfUndo.dir)}`)

  const canaryBefore = await canary.sweep()
  await call(model, 'write', { ids: [id], vals: restorable })
  out('✓ Restored.')

  const verdict = canary.compare(canaryBefore, await canary.sweep())
  out('\nCanary check:')
  if (!verdict.findings.length) out('  no change across the canary set')
  for (const f of verdict.findings) out(`  ${f.verdict.padEnd(13)} ${f.path.padEnd(22)} ${f.detail}`)
  if (!verdict.ok) {
    out('\n⚠️  REGRESSION DETECTED — the restore made something worse. Roll it back with:')
    out(`    node tools/odoo-api/odoo.mjs restore ${path.basename(undoOfUndo.dir)} ${model} ${id} --profile ${profile} --reason "undo the undo" --execute`)
    process.exitCode = 1
  }

  await store.recordHistory({
    op: 'restore',
    model,
    ids: [id],
    reason,
    profile,
    before: Object.fromEntries(Object.keys(restorable).map((f) => [f, live[f]])),
    after: restorable,
    snapshot: path.basename(undoOfUndo.dir),
    restoredFrom: snapName,
    canary: verdict.ok ? 'clean' : 'REGRESSION',
    undo: `node tools/odoo-api/odoo.mjs restore ${path.basename(undoOfUndo.dir)} ${model} ${id} --profile ${profile} --reason "undo the undo" --execute`,
  })
}

// ── the rest ─────────────────────────────────────────────────────────────────
async function cmdCanary() {
  const base = await canary.loadBaseline()
  const now = await canary.sweep()
  if (!base) {
    out('No baseline recorded yet. Showing the current sweep; run `baseline` to record it.')
    for (const r of now.results) out(`  ${String(r.status).padEnd(4)} ${r.path}  ${r.bytes ?? 0} bytes`)
    return
  }
  const verdict = canary.compare(base, now)
  out(`Baseline taken ${base.takenAt}`)
  for (const r of now.results) out(`  ${String(r.status).padEnd(4)} ${r.path}`)
  out(verdict.findings.length ? '\nDifferences vs baseline:' : '\nNo differences vs baseline.')
  for (const f of verdict.findings) out(`  ${f.verdict.padEnd(11)} ${f.path.padEnd(22)} ${f.detail}`)
  if (!verdict.ok) process.exitCode = 1
}

async function cmdSnapshots() {
  const all = await store.listSnapshots()
  if (!all.length) return out('No snapshots yet. Run `baseline` before the first working session.')
  for (const s of all) {
    const m = s.manifest
    out(`${s.name}  [${s.bucket}]  ${m.kind ?? m.model ?? ''} ${m.total ?? m.recordCount ?? ''}`)
    if (m.reason) out(`    ${m.reason}`)
  }
}

async function cmdDiff() {
  const [, a, b] = args
  const all = await store.listSnapshots()
  const find = (n) => all.find((s) => s.name === n) ?? (() => { throw new Error(`No snapshot ${n}`) })()
  if (!a || !b) throw new Error('usage: diff <snapshot-a> <snapshot-b>')
  const changes = await store.diff(find(a).dir, find(b).dir)
  out(`Added:    ${changes.added.length}`)
  for (const k of changes.added) out(`  + ${k}`)
  out(`Removed:  ${changes.removed.length}`)
  for (const k of changes.removed) out(`  - ${k}`)
  out(`Modified: ${changes.modified.length}`)
  for (const m of changes.modified) {
    out(`  ~ ${m.key}`)
    for (const f of m.fields) out(`      ${f.field}: ${JSON.stringify(f.before)} → ${JSON.stringify(f.after)}`)
  }
}

async function cmdHistory() {
  const entries = await store.readHistory()
  if (!entries.length) return out('The ledger is empty.')
  for (const e of entries.slice(-Number(flag('limit', 30)))) {
    out(`${e.at}  ${String(e.op).padEnd(9)} ${e.model ?? ''} ${e.ids ? JSON.stringify(e.ids) : ''}`)
    if (e.reason) out(`    why:  ${e.reason}`)
    if (e.canary) out(`    canary: ${e.canary}`)
    if (e.undo) out(`    undo: ${e.undo}`)
  }
}

function cmdHelp() {
  out(`tools/odoo-api — safe access to Odoo's direct API

  check                     Pre-flight: credentials, one read, and the rights the key carries
  map [--model <name>]      Generate the schema reference from the database itself (read-only)
  baseline [--reason ...]   Full website snapshot + canary baseline. Run before a working session
  read --model <m> [--domain '[]'] [--fields '[]'] [--limit 50]
  write --model <m> --id <n> --set '{"f": v}' --profile <p> --reason "..." [--execute]
  restore <snapshot> <model> <id> --profile <p> --reason "..." [--execute]
  canary                    Re-sweep the canary pages and compare against the baseline
  snapshots                 List every snapshot, newest first
  diff <snapshot-a> <snapshot-b>
  history [--limit 30]      The append-only audit ledger

Safety profiles: ${Object.keys(PROFILES).join(', ')}
Writes are DRY RUN unless --execute is given, and always refuse without a snapshot.
A restore is a write: same gate, same snapshot, same canary — no exemption for "putting it back".
Deny-listed for writes, always: res.users, res.groups, ir.model.access, ir.rule.
Deletion of account.move / account.move.line / account.payment is refused outright.`)
}

const COMMANDS = {
  check: cmdCheck,
  map: cmdMap,
  baseline: cmdBaseline,
  read: cmdRead,
  write: cmdWrite,
  restore: cmdRestore,
  canary: cmdCanary,
  snapshots: cmdSnapshots,
  diff: cmdDiff,
  history: cmdHistory,
  help: cmdHelp,
}

try {
  // hasOwn, not a bare lookup: `odoo.mjs toString` would otherwise resolve an
  // inherited Object.prototype method, call it, and exit 0 having done nothing.
  const run = Object.hasOwn(COMMANDS, command) ? COMMANDS[command] : undefined
  if (!run) {
    out(`Unknown command "${command}".\n`)
    cmdHelp()
    process.exitCode = 1
  } else {
    await run()
  }
} catch (err) {
  if (err instanceof SafetyViolation) {
    console.error(`\n⛔ REFUSED (${err.rule})\n${err.message}\n`)
    process.exitCode = 2
  } else if (err instanceof OdooError) {
    console.error(`\n✗ Odoo ${err.status ?? ''} ${err.odooName ?? ''}\n${err.message}\n`)
    process.exitCode = 1
  } else {
    console.error(`\n✗ ${err.message}\n`)
    process.exitCode = 1
  }
}
