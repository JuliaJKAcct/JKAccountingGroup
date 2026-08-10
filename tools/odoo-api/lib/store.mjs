// Snapshots, the append-only history ledger, and restore.
//
// Layer 2 of write-safety.md: "no snapshot, no write" — and the versioning
// Lilian asked for, so a problem noticed weeks later can still be traced to the
// change that caused it.
//
// Why git is the version store: snapshots of website content are committed, so
// the repo's own history answers "what did this page look like on 3 August?" and
// "which change broke it?" without inventing a second versioning system. Content
// that must never enter git (client data, personal data, secrets) snapshots to a
// gitignored directory instead — see safety.isCommittable().

import { mkdir, writeFile, readFile, readdir, appendFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { searchRead, read } from './client.mjs'
import { DEPENDENTS, isCommittable } from './safety.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
export const ROOT = path.resolve(HERE, '..')
export const PUBLIC_SNAPSHOTS = path.join(ROOT, 'snapshots')
export const PRIVATE_SNAPSHOTS = path.join(ROOT, 'snapshots-private')
export const HISTORY = path.join(ROOT, 'history.jsonl')

/** Filesystem-safe UTC stamp, sortable, e.g. 2026-08-10T20-31-00Z. */
export function stamp(date = new Date()) {
  return date.toISOString().replace(/:/g, '-').replace(/\..*Z$/, 'Z')
}

function bucketFor(models) {
  return models.every((m) => isCommittable(m)) ? PUBLIC_SNAPSHOTS : PRIVATE_SNAPSHOTS
}

/**
 * Appends to the audit ledger. Append-only by construction: nothing in this tool
 * ever rewrites history.jsonl, so the record of what happened cannot be tidied up
 * after the fact.
 *
 * Values are recorded for committable models only. For anything holding client
 * data the ledger keeps the shape of the change (model, ids, field names) but not
 * the values, so the ledger itself stays safe to commit.
 */
export async function recordHistory(entry) {
  const safe = { ...entry, at: entry.at ?? new Date().toISOString() }
  if (safe.model && !isCommittable(safe.model)) {
    if (safe.before) safe.before = `«withheld — ${safe.model} may hold client data»`
    if (safe.after) safe.after = `«withheld — ${safe.model} may hold client data»`
    safe.fields = safe.fields ?? (entry.after ? Object.keys(entry.after) : undefined)
  }
  await appendFile(HISTORY, JSON.stringify(safe) + '\n', 'utf8')
  return safe
}

/** Reads the ledger back, newest last. */
export async function readHistory() {
  if (!existsSync(HISTORY)) return []
  const text = await readFile(HISTORY, 'utf8')
  return text
    .split('\n')
    .filter(Boolean)
    .map((line, i) => {
      try {
        return JSON.parse(line)
      } catch {
        return { at: '?', note: `unparseable ledger line ${i + 1}` }
      }
    })
}

/**
 * Finds everything that points at a record, so the snapshot covers the blast
 * radius rather than just the target. See safety.DEPENDENTS for why this matters
 * on website models.
 */
export async function fetchDependents(model, id) {
  const specs = DEPENDENTS[model] ?? []
  const found = {}
  for (const spec of specs) {
    const domain = [[spec.field, '=', id], ...(spec.extraDomain ?? [])]
    try {
      const rows = await searchRead(spec.model, domain, [])
      if (rows.length) found[spec.model] = { via: spec.field, note: spec.note, records: rows }
    } catch (err) {
      found[spec.model] = { via: spec.field, error: err.message }
    }
  }
  return found
}

/**
 * Captures records and their dependents to a timestamped directory.
 *
 * Returns the snapshot directory. Callers treat a thrown error as "do not write":
 * that is the mechanical form of "no snapshot, no write".
 */
export async function snapshot({ model, ids, reason, label = 'change' }) {
  const dir = path.join(bucketFor([model]), `${stamp()}__${label}`)
  await mkdir(path.join(dir, model), { recursive: true })

  const records = ids.length ? await read(model, ids, []) : []
  const dependents = {}
  for (const id of ids) dependents[id] = await fetchDependents(model, id)

  for (const record of records) {
    await writeFile(
      path.join(dir, model, `${record.id}.json`),
      JSON.stringify(record, null, 2),
      'utf8',
    )
    await writeFile(
      path.join(dir, model, `${record.id}.dependents.json`),
      JSON.stringify(dependents[record.id] ?? {}, null, 2),
      'utf8',
    )
  }

  const manifest = {
    takenAt: new Date().toISOString(),
    model,
    ids,
    reason,
    committable: isCommittable(model),
    recordCount: records.length,
    dependentModels: Object.keys(dependents[ids[0]] ?? {}),
    restoreWith: `node tools/odoo-api/odoo.mjs restore ${path.basename(dir)} ${model} <id>`,
  }
  await writeFile(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8')

  return { dir, manifest, records }
}

/**
 * What the baseline captures, and why it is not simply "every view".
 *
 * The instance carries ~2,940 `ir.ui.view` records, but ~2,760 of those ship
 * with Odoo's own modules: they are not ours to lose, and a module upgrade
 * restores them. Capturing them would add several MB of noise to every baseline
 * and bury the ~180 records that ARE ours in it.
 *
 * So the scope is what is genuinely recoverable-by-us: views bound to the
 * website (`website_id` set) or edited by hand (`arch_updated`), plus the pages,
 * menus and redirects in full — those are small and entirely the firm's.
 */
const BASELINE_SCOPE = {
  'website.page': [],
  'ir.ui.view': ['|', ['website_id', '!=', false], ['arch_updated', '=', true]],
  'website.menu': [],
  'website.rewrite': [],
}

/**
 * The site baseline, captured before a working session starts. This is the
 * "copy of the site before we begin" — the thing that makes a problem discovered
 * three weeks later still recoverable, and the input to `diff` when the question
 * becomes "when did this break?".
 */
export async function baseline({ reason = 'pre-session baseline' } = {}) {
  const dir = path.join(PUBLIC_SNAPSHOTS, `${stamp()}__baseline`)
  const counts = {}

  for (const [model, domain] of Object.entries(BASELINE_SCOPE)) {
    const rows = await searchRead(model, domain, [])
    counts[model] = rows.length
    await mkdir(path.join(dir, model), { recursive: true })
    // One file per record, so a git diff shows exactly which record changed
    // rather than one enormous blob that always looks different.
    for (const row of rows) {
      await writeFile(
        path.join(dir, model, `${row.id}.json`),
        JSON.stringify(row, null, 2),
        'utf8',
      )
    }
  }

  const manifest = {
    takenAt: new Date().toISOString(),
    kind: 'baseline',
    reason,
    counts,
    total: Object.values(counts).reduce((a, b) => a + b, 0),
    scope: BASELINE_SCOPE,
    excluded:
      'Standard Odoo module views (no website_id, never hand-edited) are not captured — ' +
      'they are restored by a module upgrade, not from here.',
  }
  await mkdir(dir, { recursive: true })
  await writeFile(path.join(dir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8')
  return { dir, manifest }
}

/** Lists snapshots newest-first, across both buckets. */
export async function listSnapshots() {
  const out = []
  for (const [bucket, base] of [
    ['public', PUBLIC_SNAPSHOTS],
    ['private', PRIVATE_SNAPSHOTS],
  ]) {
    if (!existsSync(base)) continue
    for (const name of await readdir(base)) {
      const manifestPath = path.join(base, name, 'manifest.json')
      if (!existsSync(manifestPath)) continue
      out.push({
        bucket,
        name,
        dir: path.join(base, name),
        manifest: JSON.parse(await readFile(manifestPath, 'utf8')),
      })
    }
  }
  return out.sort((a, b) => b.name.localeCompare(a.name))
}

async function loadSnapshotRecords(dir) {
  const records = new Map()
  for (const model of await readdir(dir, { withFileTypes: true })) {
    if (!model.isDirectory()) continue
    for (const file of await readdir(path.join(dir, model.name))) {
      if (!file.endsWith('.json') || file.endsWith('.dependents.json')) continue
      const body = JSON.parse(await readFile(path.join(dir, model.name, file), 'utf8'))
      records.set(`${model.name}:${body.id}`, body)
    }
  }
  return records
}

/**
 * Compares two snapshots field by field. This is the audit answer: point it at
 * the baseline from before a change and one from after, and it reports exactly
 * which records and which fields moved.
 */
export async function diff(dirA, dirB) {
  const [a, b] = [await loadSnapshotRecords(dirA), await loadSnapshotRecords(dirB)]
  const changes = { added: [], removed: [], modified: [] }

  for (const key of b.keys()) if (!a.has(key)) changes.added.push(key)
  for (const key of a.keys()) if (!b.has(key)) changes.removed.push(key)

  for (const [key, before] of a) {
    const after = b.get(key)
    if (!after) continue
    const fields = []
    for (const field of new Set([...Object.keys(before), ...Object.keys(after)])) {
      const x = JSON.stringify(before[field])
      const y = JSON.stringify(after[field])
      if (x !== y) fields.push({ field, before: before[field], after: after[field] })
    }
    if (fields.length) changes.modified.push({ key, fields })
  }
  return changes
}

/** Reads one record out of a snapshot, for restore. */
export async function recordFromSnapshot(dir, model, id) {
  const file = path.join(dir, model, `${id}.json`)
  if (!existsSync(file)) throw new Error(`Snapshot ${path.basename(dir)} has no ${model}:${id}`)
  return JSON.parse(await readFile(file, 'utf8'))
}
