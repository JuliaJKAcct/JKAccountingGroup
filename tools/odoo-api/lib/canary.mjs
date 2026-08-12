// Layer 3, verification 3 — the after-check nobody does.
//
// Checking only the page you edited is not enough: Odoo pages share templates, so
// a change can break something else entirely. The canary set is fetched before
// and after every change and compared.
//
// These are plain HTTP requests, not API calls. They cost nothing, so repeat them
// as many times as it takes to be sure.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { ROOT } from './store.mjs'

/** The minimum set from write-safety.md Layer 3. */
export const CANARY_PATHS = [
  '/',
  '/pricing',
  '/consultation',
  '/ua/konsultatsiia',
  '/appointment/1',
  '/appointment/3',
]

const BASELINE_FILE = path.join(ROOT, 'canary-baseline.json')

async function probe(base, urlPath) {
  const started = Date.now()
  try {
    const res = await fetch(`${base}${urlPath}`, { redirect: 'manual' })
    const body = await res.text()
    return {
      path: urlPath,
      status: res.status,
      bytes: body.length,
      ms: Date.now() - started,
    }
  } catch (err) {
    return { path: urlPath, status: 0, error: err.message, ms: Date.now() - started }
  }
}

/** Fetches every canary page once. */
export async function sweep(base = process.env.ODOO_URL) {
  if (!base) throw new Error('ODOO_URL is not set; cannot run the canary sweep.')
  const results = []
  for (const p of CANARY_PATHS) results.push(await probe(base.replace(/\/+$/, ''), p))
  return { takenAt: new Date().toISOString(), base, results }
}

export async function saveBaseline(sweepResult) {
  await mkdir(path.dirname(BASELINE_FILE), { recursive: true })
  await writeFile(BASELINE_FILE, JSON.stringify(sweepResult, null, 2), 'utf8')
  return BASELINE_FILE
}

export async function loadBaseline() {
  if (!existsSync(BASELINE_FILE)) return null
  return JSON.parse(await readFile(BASELINE_FILE, 'utf8'))
}

/**
 * Compares a fresh sweep against the recorded baseline.
 *
 * The test is NOT "everything returns 200" — some canaries are legitimately
 * broken today (/appointment/1 and /appointment/3 return 500). The test is: no
 * page may get WORSE than its baseline, and the pages the change was meant to fix
 * must get better.
 */
export function compare(baselineSweep, currentSweep) {
  const before = new Map(baselineSweep.results.map((r) => [r.path, r]))
  const findings = []

  // `status: 0` means the probe itself failed (DNS, timeout, reset). It is NOT a
  // verdict about the page, and it must never be treated as one — in either
  // direction. A failed baseline probe cannot license "it was already broken",
  // and a failed current probe cannot license "no change".
  const probed = (r) => r.status !== 0
  const ok = (r) => r.status >= 200 && r.status < 400

  for (const now of currentSweep.results) {
    const was = before.get(now.path)
    if (!was) {
      findings.push({ path: now.path, verdict: 'new', detail: `not in baseline (HTTP ${now.status})` })
      continue
    }

    if (!probed(now)) {
      findings.push({
        path: now.path,
        verdict: 'UNVERIFIED',
        detail: `probe failed now (${now.error ?? 'no response'}) — cannot confirm this page is intact`,
      })
      continue
    }
    if (!probed(was)) {
      // No trustworthy baseline. If the page is fine now, say so quietly; if it
      // is not, escalate rather than downgrade to "changed" on a technicality.
      findings.push({
        path: now.path,
        verdict: ok(now) ? 'no-baseline' : 'REGRESSION',
        detail: `baseline probe had failed (${was.error ?? 'no response'}); now HTTP ${now.status}`,
      })
      continue
    }

    if (ok(was) && !ok(now)) {
      findings.push({ path: now.path, verdict: 'REGRESSION', detail: `HTTP ${was.status} → ${now.status}` })
    } else if (!ok(was) && ok(now)) {
      findings.push({ path: now.path, verdict: 'fixed', detail: `HTTP ${was.status} → ${now.status}` })
    } else if (was.status !== now.status) {
      findings.push({ path: now.path, verdict: 'changed', detail: `HTTP ${was.status} → ${now.status}` })
    } else if (was.bytes > 0 && (now.bytes ?? 0) === 0) {
      // A 200 with an empty body is the worst kind of break: the status says
      // healthy and the page is gone. Never let this pass as "no change".
      findings.push({
        path: now.path,
        verdict: 'REGRESSION',
        detail: `HTTP ${now.status} but the body is now EMPTY (was ${was.bytes} bytes)`,
      })
    } else if (was.bytes > 0 && Math.abs(now.bytes - was.bytes) / was.bytes > 0.25) {
      // Same status, very different size — the page still answers but its content
      // moved a lot. Worth a human look rather than an automatic pass.
      findings.push({
        path: now.path,
        verdict: 'size-shift',
        detail: `${was.bytes} → ${now.bytes} bytes (>25%)`,
      })
    }
  }

  // UNVERIFIED is not a pass. "We could not check" and "it is fine" are different
  // answers, and only one of them justifies walking away from a live write.
  const blocking = findings.filter((f) => f.verdict === 'REGRESSION' || f.verdict === 'UNVERIFIED')
  return { ok: blocking.length === 0, regressions: blocking, findings }
}
