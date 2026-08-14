#!/usr/bin/env node
/**
 * Self-test for the shared case engine and the two walkthroughs that use it.
 *
 *   node projects/sops/tools/selftest.mjs
 *
 * This exists because the case engine was extracted from a tool that had already
 * absorbed eight separate silent-failure fixes (dead clicks, a delete that came
 * back, a link that let `evil-doublehq.com` through, cases that clobbered each
 * other across windows). A refactor that quietly undoes one of those is the most
 * likely way this work goes wrong, and none of them announce themselves.
 *
 * It runs the PURE parts in plain Node — no browser, no dependencies:
 *   · every step a tool can emit has a label to come back to on re-import
 *   · a case survives encode → decode unchanged (round-trip)
 *   · a case with no Double link encodes EXACTLY as it did before the link
 *     field existed, so notes written by the older tool still reopen
 *   · doubleLink() accepts the real forms and rejects the hostile ones
 *   · the built .html files actually contain the inlined engine
 *
 * Exit code is non-zero on any failure, so a build script can gate on it.
 */
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadTool, loadCore, verifyTool, mix } from './verify.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(resolve(here, p), 'utf8');

let failures = 0, checks = 0;
function ok(name, cond, detail){
  checks++;
  if (cond) { if (process.env.VERBOSE) console.log('  ✓ ' + name); return; }
  failures++;
  console.error('  ✗ ' + name + (detail ? '\n      ' + detail : ''));
}
function section(t){ console.log('\n' + t); }

/* ---------------------------------------------------------------- load ---- */
// Loading and the two step-id invariants live in verify.mjs, shared with BOTH builders —
// tools/build.mjs and knowledge-hub/build-hub.mjs. A test that reimplements the thing it
// tests proves nothing: the log-trim check used to do exactly that, and `slice(-11)` was
// changed to `slice(-30)` in review with all 84 checks still green.
const { JKCase } = loadCore();
ok('case-core.js exposes JKCase', !!JKCase && typeof JKCase.createTracker === 'function');


/* ------------------------------------------------- per-tool step coverage -- */
// The engine already console.errors on a gap; here it must FAIL the build, because
// a mislabelled step gets written into a client's Double note and read as fact.
for (const [label, file] of [['ITIN', 'itin-w7-walkthrough.src.html'],
                             ['BTR',  'btr-walkthrough.src.html']]){
  section(label + ' — ' + file);
  let tool;
  try { tool = loadTool(file); }
  catch (e){ ok(label + ' tool script evaluates', false, e.message); continue; }
  ok(label + ' tool script evaluates', true);
  ok(label + ' hands a config to the engine', !!tool.cfg);
  if (!tool.cfg) continue;

  const t = tool.tracker._internals;
  // Coverage AND one-wording-per-id, from the shared verifier the builders gate on.
  const problems = verifyTool(label, file);
  ok(label + ' every step keeps its label and its wording, whatever the answers',
     problems.length === 0, problems.join(' · '));

  // Round-trip: a case written to a note and reopened is the same case.
  const steps = tool.buildSteps(tool.cfg.genericAnswers);
  ok(label + ' the generic checklist is not empty', steps.length > 0);
  const c = t.newCase('Round-trip test', steps);
  c.steps[0].done = true; c.steps[0].date = '2026-08-14'; c.steps[0].note = 'a note';
  c.log.push({ t: '2026-08-14 09:00', x: 'something happened' });
  c.dl = 'https://app.doublehq.com/clients/123';
  const back = t.decodeCase(t.caseNoteText(c));
  ok(label + ' round-trips the reference', back.ref === c.ref);
  ok(label + ' round-trips the Double link', back.dl === c.dl);
  ok(label + ' round-trips the step count', back.steps.length === c.steps.length);
  ok(label + ' round-trips the tick, its date and its note',
     back.steps[0].done === true && back.steps[0].date === '2026-08-14' && back.steps[0].note === 'a note');
  ok(label + ' round-trips every step LABEL (no bare ids)',
     back.steps.every((s, i) => s.t === c.steps[i].t && s.ph === c.steps[i].ph),
     back.steps.filter((s, i) => s.t !== c.steps[i].t).map(s => s.id).join(', '));
  ok(label + ' a decoded case is valid to the store', t.validCase(back));

  // Backward compatibility: without a link, the encoded payload must be byte-identical
  // to what the pre-link tool wrote, or an older note stops reopening.
  const noLink = t.newCase('No link', steps);
  const code = t.encodeCase(noLink);
  const payload = JSON.parse(Buffer.from(code.slice(tool.cfg.codeTag.length), 'base64').toString('utf8'));
  ok(label + ' a case with no Double link encodes no `dl` key', !('dl' in payload));
  ok(label + ' the code carries ids and state only, never the answers',
     Object.keys(payload).sort().join(',') === 'cr,g,l,r,s,up,v');

  // What a note looks like after a human has had it in Double for three weeks. Trailing
  // text used to be folded into the payload and throw — and the error then told the user
  // to "paste the whole note, including the line at the very bottom", which is exactly
  // what they had done, so the durable copy became unopenable.
  {
    const note = t.caseNoteText(c);
    const want = (x) => x && x.ref === c.ref && x.steps.length === c.steps.length && x.steps[0].done;
    const tryDec = (s) => { try { return t.decodeCase(s); } catch (e){ return null; } };
    ok(label + ' a note with text typed under the block still opens',
       want(tryDec(note + '\nPaid the county today — JA')));
    ok(label + ' several trailing lines are ignored',
       want(tryDec(note + '\n\nnotes below\nand another line')));
    ok(label + ' an appended second block opens (the newest one wins)',
       want(tryDec(note + '\n\n' + note)));
    ok(label + ' a hard-wrapped block still opens',
       want(tryDec(note.replace(/(.{60})/g, '$1\n'))));
    ok(label + ' pasting only the code line works',
       want(tryDec(note.split('\n').pop())));
    // The pair, which is the likeliest note of all after three weeks in Double: it got
    // wrapped somewhere in transit AND somebody typed under the block. Handling either
    // fault alone still failed on both together.
    ok(label + ' a wrapped block WITH trailing text still opens',
       want(tryDec(note.replace(/(.{60})/g, '$1\n') + '\nPaid it today — JA\nand a second line')));
  }

  // Trimming the log must leave exactly 12 entries and name exactly what it discarded —
  // that marker is permanent and goes into the client's record.
  {
    const many = t.newCase('Long log', steps);
    for (let k = 0; k < 30; k++) many.log.push({ t: '2026-08-14 10:0' + (k % 10), x: 'entry ' + k });
    const before = many.log.length;
    const wouldDrop = t.trimLog(many, true);          // dry run must not touch the case
    ok(label + ' a dry run reports without mutating', many.log.length === before);
    const dropped = t.trimLog(many);
    ok(label + ' the dry run agreed with the real thing', dropped === wouldDrop);
    ok(label + ' trimming leaves 12 entries, not 13', many.log.length === 12, String(many.log.length));
    ok(label + ' the marker names what was actually discarded',
       many.log[11].x.startsWith(String(before - 11) + ' '),
       many.log[11].x + ' (of ' + before + ')');
    // Below the threshold it must do nothing at all — pushing the marker anyway made an
    // already-too-long note LONGER while reporting the problem solved.
    const few = t.newCase('Short log', steps);
    const n0 = few.log.length;
    ok(label + ' a short log is left alone', t.trimLog(few) === 0 && few.log.length === n0);
  }

  // The note is the thing that has to fit in Double.
  ok(label + ' a fresh case note is well under the Double limit',
     t.caseNoteText(noLink).length < JKCase.NOTE_LIMIT,
     t.caseNoteText(noLink).length + ' chars vs limit ' + JKCase.NOTE_LIMIT);

  // Two tools must never share a storage key or a code tag, or one would read the
  // other's cases back as its own and rebuild every label from the wrong catalogue.
  ok(label + ' declares a storage key and a code tag', !!tool.cfg.storageKey && !!tool.cfg.codeTag);
  globalThis.__seen = globalThis.__seen || { key: Object.create(null), tag: Object.create(null) };
  ok(label + ' storage key is unique across tools', !globalThis.__seen.key[tool.cfg.storageKey]);
  // A shared code tag is the subtler half: one tool would happily decode the other's
  // pasted note and rebuild every step label from the wrong catalogue.
  ok(label + ' code tag is unique across tools', !globalThis.__seen.tag[tool.cfg.codeTag]);
  globalThis.__seen.key[tool.cfg.storageKey] = 1;
  globalThis.__seen.tag[tool.cfg.codeTag] = 1;

}

/* ------------------------------------------- BTR: the checklist must prune -- */
// The case is what gets pasted into the client's Double note, so it has to agree with the
// preparation sheet built from the same answers. It used to ignore `existing` and `city`
// entirely: a renewal was handed five BTExpress steps for an application nobody was going
// to make, and a business outside Hollywood got Hollywood's URL and "$25 plus the
// classification tax" baked in, with none of the caveat the sheet prints on screen.
section('BTR — the checklist prunes on what the client already holds, and on the city');
{
  const tool = loadTool('btr-walkthrough.src.html');
  const base = tool.cfg.genericAnswers;
  const ids = (o) => tool.buildSteps(Object.assign({}, base, o)).map((s) => s.id);
  const first = ids({}), renew = ids({ existing: 'both' }),
        hasCounty = ids({ existing: 'county' }), elsewhere = ids({ city: 'broward' });
  ok('a first filing carries the full BTExpress sequence',
     ['ctyapply', 'ctyconfirm', 'ctyapproved'].every((k) => first.includes(k)));
  ok('a RENEWAL carries no BTExpress application steps',
     !['ctyapply', 'ctyconfirm', 'ctyapproved'].some((k) => renew.includes(k)), renew.join(','));
  ok('a renewal renews instead — and still pays',
     ['ctyrenew', 'ctypay', 'cityrenew'].every((k) => renew.includes(k)), renew.join(','));
  ok('a client already holding the county receipt confirms the account rather than reapplying',
     !hasCounty.includes('ctyapply') && hasCounty.includes('ctyactive'), hasCounty.join(','));
  ok('a business outside Hollywood gets NO Hollywood city steps',
     !['cityapply', 'citypay', 'citynotify'].some((k) => elsewhere.includes(k)), elsewhere.join(','));
  ok('…it gets generic municipal steps instead',
     ['localapply', 'localpay', 'localreview'].every((k) => elsewhere.includes(k)), elsewhere.join(','));
  ok('…and the county half is unchanged, because that part IS county-wide',
     ['ctyapply', 'ctyconfirm'].every((k) => elsewhere.includes(k)));

  // The two axes cross, and both have to be read. A client already holding the CITY
  // receipt used to get a checklist identical to a first filing — telling the team, in
  // that client's Double note, to reapply and re-pay for something they already have.
  const heldCity = ids({ existing: 'city' });
  ok('a client already holding the city receipt does not refile it',
     !['cityapply', 'citypay', 'cityuploads'].some((k) => heldCity.includes(k)), heldCity.join(','));
  ok('…it confirms the held receipt, and the county half is what is outstanding',
     heldCity.includes('cityheld') && heldCity.includes('ctyapply'), heldCity.join(','));
  ok('…and there is no city-review round for an application nobody filed',
     !['cityreview', 'citynotify', 'localreview'].some((k) => heldCity.includes(k)), heldCity.join(','));

  // Intake and prep have to prune too. They used to ignore both axes, so a client already
  // holding the city receipt was still told to choose a Business Classification and prepare
  // city uploads — in the CASE, which is what gets pasted into Double without the sheet's
  // caveat beside it.
  ok('a first filing classifies and prepares every upload',
     ['classify', 'entitypdf', 'locpdf', 'masterlease', 'licpdf'].every((k) => ids({ sublet: 'yes', regulator: 'dbpr', licence: 'yes' }).includes(k)));
  ok('a client holding the city receipt is not asked to classify or prepare city uploads',
     !['classify', 'locpdf', 'masterlease'].some((k) => heldCity.includes(k)), heldCity.join(','));
  ok('…but still prepares entity proof, which the county filing needs',
     heldCity.includes('entitypdf'));
  const renewSteps = ids({ existing: 'both' });
  ok('a renewal prepares no uploads at all',
     !['entitypdf', 'locpdf', 'masterlease', 'licpdf'].some((k) => renewSteps.includes(k)), renewSteps.join(','));
  ok('…and still renews both halves',
     ['ctyrenew', 'cityrenew', 'cityrenewpay'].every((k) => renewSteps.includes(k)), renewSteps.join(','));

  const elsewhereRenew = ids({ city: 'broward', existing: 'both' });
  ok('a renewal OUTSIDE Hollywood renews rather than applying',
     elsewhereRenew.includes('localrenew') && !elsewhereRenew.includes('localapply'),
     elsewhereRenew.join(','));
}

/* ------------------------------------------------------------ doubleLink -- */
section('doubleLink() — only a real Double URL may become a live link');
const good = ['https://doublehq.com/x', 'https://app.doublehq.com/clients/1', 'https://APP.DOUBLEHQ.COM/c/2'];
const bad = [
  'https://evil-doublehq.com/x',        // the `\b` regex bug this replaced let this through
  'https://doublehq.com.evil.com/x',
  'https://doublehq.com@evil.com/x',    // userinfo trick — host is evil.com
  'https://notdoublehq.com/x',
  'http://doublehq.com/x',              // not https
  'javascript:alert(1)',
  'data:text/html,<script>alert(1)</script>',
  'https://xdoublehq.com/x',
  '//doublehq.com/x',
  'doublehq.com/x',
  '', '   ', 'https://'
];
good.forEach((u) => ok('accepts ' + u, JKCase.doubleLink(u) !== ''));
bad.forEach((u) => ok('rejects ' + JSON.stringify(u), JKCase.doubleLink(u) === ''));

/* -------------------------------------------------------- built artefacts -- */
section('Built standalones carry the engine inlined');
for (const f of ['itin-w7-walkthrough.html', 'btr-walkthrough.html']){
  let built = '';
  try { built = read(f); } catch (e){ ok(f + ' exists (run build.mjs)', false, e.message); continue; }
  ok(f + ' has no unresolved build placeholder', !built.includes('/*__CASE_CORE__*/'));
  ok(f + ' contains the engine', built.includes('global.JKCase = {'));
  ok(f + ' is self-contained (no external http(s) asset)',
     !/\b(?:src|href)\s*=\s*["']https?:/i.test(built.replace(/<a\b[^>]*>/gi, '')));
}

/* -------------------------------------------------------------- verdict --- */
console.log('\n' + (failures ? '✗ ' + failures + ' of ' + checks + ' checks FAILED'
                              : '✓ all ' + checks + ' checks passed'));
process.exit(failures ? 1 : 0);
