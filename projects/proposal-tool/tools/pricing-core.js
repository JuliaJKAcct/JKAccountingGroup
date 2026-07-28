// ============================================================================
// SHARED PRICING CORE — the SINGLE source of truth for the firm's monthly-fee math.
//
// Both browser tools inline this exact file (via tools/build.mjs, at the
// PRICING-CORE build placeholder): the standalone Pricing Calculator AND the
// integrated Monthly Proposal generator. They therefore CANNOT diverge — change a
// rate or formula here once and both tools update identically.
//
// Mirrors the Python engine exactly (generator-scripts/build_pricing_xlsx.py Rate
// Tables + build_client_pricing_sheet.py per-client formulas). If you change either
// side, change the other — they must always agree.
// ============================================================================
(function (global) {
  // ---- Rate tables (from build_pricing_xlsx.py — the firm's Core Pricing Matrix) ----
  const TX_TIERS = [[0,200,200],[201,225,225],[226,250,250],[251,275,275],[276,300,300],[301,325,325],[326,350,350],[351,375,375],[376,400,400],[401,425,425],[426,450,450],[451,500,500]];
  const ACCT_TIERS = [[1,5,5],[6,10,10],[11,15,15],[16,25,25],[26,30,30]];
  const FREQ = { "Monthly":1, "Bi-weekly":1.5, "Weekly":2 };
  const BANKFEED = { "Yes":1, "No / manual":2.25 };
  const LOC = { "1":1, "2":1.25, "3":1.75, "4":2, "5":2.25, "6":2.5, "7":2.75 };
  const ADV = { "Small":100, "Medium":150, "Large":200, "None":0 };
  const STDIV = { "Monthly":1, "Quarterly":3, "Annual":12 };
  const TAXDEFAULT = { "1120S":750, "1065":650, "1120":780, "none":0 };
  const FINSTMT = 16, RECON_RATE = 18.5, PER_1099 = 25, ST_RATE = 60;

  const has = x => x !== undefined && x !== null && String(x).trim() !== "";
  const num = x => { const n = parseFloat(x); return isFinite(n) ? n : 0; };
  function tierUp(n, tiers){ n = Math.floor(n); if (n <= 0) return tiers === TX_TIERS ? 200 : 0; for (const [lo,hi,val] of tiers){ if (n >= lo && n <= hi) return val; } return tiers[tiers.length-1][2]; }

  // Money formatting — shared so both tools render dollars identically.
  const fmtMoney = (n, cents) => { const neg = n < 0, v = Math.abs(n); const s = cents ? v.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}) : Math.round(v).toLocaleString("en-US"); return (neg ? "-$" : "$") + s; };
  const money  = n => fmtMoney(n, true);   // always 2 decimals
  const money0 = n => fmtMoney(n, false);  // whole dollars

  // Compute the monthly fee build-up from a plain inputs object (values are strings or
  // numbers, exactly as read from a form). Every component is 0 until its inputs are
  // present, so a blank form yields $0 — no default can leak into a client's price.
  //   inputs: { tx, freq, bankfeed, loc, accounts, finstmt, taxfee, stfreq, states,
  //             contractors, advisory, ownerpay, adjust }
  function computePricing(v){
    v = v || {};
    const recording = (has(v.tx) && has(v.freq) && has(v.bankfeed) && has(v.loc))
      ? 1 * tierUp(num(v.tx), TX_TIERS) * FREQ[v.freq] * BANKFEED[v.bankfeed] * LOC[v.loc] : 0;
    const reconcile = has(v.accounts) ? RECON_RATE * tierUp(num(v.accounts), ACCT_TIERS) : 0;
    const finstmt = v.finstmt === "Yes" ? FINSTMT : 0;
    const taxprep = has(v.taxfee) ? num(v.taxfee) / 12 : 0;
    const states = num(v.states);
    const salestax = (has(v.states) && states > 0 && has(v.stfreq)) ? ST_RATE * states / STDIV[v.stfreq] : 0;
    const advisory = ADV[v.advisory] || 0;
    const f1099 = has(v.contractors) ? PER_1099 * num(v.contractors) : 0;
    const ownerval = v.ownerpay || "";
    // Owner payroll is display-only — never summed (matches Python SUM(C19:C25)).
    const total = recording + reconcile + finstmt + taxprep + salestax + advisory + f1099;
    const adjust = num(v.adjust);
    return { recording, reconcile, finstmt, taxprep, salestax, advisory, f1099, ownerval, total, adjust, final: total + adjust };
  }

  global.JKPricing = { TX_TIERS, ACCT_TIERS, FREQ, BANKFEED, LOC, ADV, STDIV, TAXDEFAULT, computePricing, money, money0 };
})(typeof window !== "undefined" ? window : this);
