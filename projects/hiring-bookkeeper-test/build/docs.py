"""Candidate brief + evaluator answer key.  Every figure comes from the engine."""
import os
import books as B
from engine import build, pl, R2, MONTHS

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "test-package"))
d = build()
E, eom = d["ending"], d["eom"]
P = {m: pl(d, m) for m, _ in MONTHS}


def f(x):
    return f"{x:,.2f}"


# ---- derived figures used in the prose --------------------------------------
BANK_AUG = d["bank_eom"]["2026-08"]
OUTSTANDING = B.STALE_CHECK["amount"] + 2340 + 1130
IN_TRANSIT = 10250.00
ADJ_BOOK = R2(110000 - 18500 + 4820 - 180 - 3600 - 48)
ADJ_BANK = R2(BANK_AUG + IN_TRANSIT - OUTSTANDING)
assert abs(ADJ_BOOK - ADJ_BANK) < 0.01, (ADJ_BOOK, ADJ_BANK)

inc8 = P["2026-08"]["4000"] + P["2026-08"]["4100"]
cogs8 = sum(P["2026-08"][a] for a in ("5000", "5100", "5200", "5300", "5900"))
GM = {m: round((P[m]["4000"] + P[m]["4100"] - sum(P[m][a] for a in
      ("5000", "5100", "5200", "5300", "5900"))) /
      (P[m]["4000"] + P[m]["4100"]) * 100, 1) for m, _ in MONTHS}
COGS_FIX = R2(cogs8 - 49500)
GM_FIX = round((inc8 - COGS_FIX) / inc8 * 100, 1)
LOAN_TRUE, LOAN_INT_YTD, LOAN_INT_Q = 194994.36, 9994.36, 3630.17
SAV_BANK, SAV_BOOK = 37014.00, 25000.00
CC_BANK, CC_BOOK = 34130.00, R2(-E["2100"])
exp8 = sum(P["2026-08"][a] for a in P["2026-08"]
           if a >= "6000" and B.ATYPE[a] == "Expenses")
NI8 = R2(inc8 - cogs8 - exp8 + P["2026-08"]["8100"])

CSS = """
:root{--brand:#123841;--deep:#0D2A31;--dark:#091F24;--accent:#9C6A39;--gold:#7E5430;
 --goldlt:#CFA268;--page:#F6F3EC;--paper:#FBF8F2;--surf:#fff;--ink:#0D2A31;--body:#22201A;
 --mut:#6F6857;--bd:#C5BEAD;--bds:#DAD4C6;--err:#B23A3A;--errbg:#F6E3DF;--warn:#B8841C;
 --warnbg:#F6ECD2;--ok:#2F8F5E;--okbg:#E3F1EA;--info:#2F5E8C;--infobg:#E3EAF3;
 --serif:"Source Serif 4",Georgia,"Times New Roman",serif;
 --sans:"IBM Plex Sans",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;
 --mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,monospace}
*{box-sizing:border-box}
body{margin:0;background:var(--page);color:var(--body);font:16px/1.65 var(--sans);
 -webkit-font-smoothing:antialiased}
.wrap{max-width:930px;margin:0 auto;padding:0 28px 90px}
header.hero{background:linear-gradient(160deg,var(--deep),var(--brand) 62%,#164450);
 color:#ECE6DA;padding:52px 0 46px;margin-bottom:38px}
header.hero .wrap{padding-bottom:0}
.eyebrow{font:600 11px/1 var(--sans);letter-spacing:.2em;text-transform:uppercase;
 color:var(--goldlt);margin-bottom:16px}
h1{font:600 40px/1.12 var(--serif);margin:0 0 12px;letter-spacing:-.015em}
.hero p.lede{font:400 17px/1.6 var(--sans);color:#B9CDD0;max-width:62ch;margin:0}
.hero .rule{width:56px;height:3px;background:var(--accent);margin:22px 0 0;border-radius:2px}
h2{font:600 25px/1.25 var(--serif);color:var(--ink);margin:52px 0 6px;letter-spacing:-.01em}
h2 .n{color:var(--accent);font-family:var(--mono);font-size:15px;font-weight:600;
 letter-spacing:.06em;display:block;margin-bottom:8px}
h3{font:600 17px/1.35 var(--sans);color:var(--brand);margin:30px 0 8px}
h2+p,h3+p{margin-top:6px}
p{margin:0 0 14px;max-width:74ch}
.card{background:var(--surf);border:1px solid var(--bds);border-radius:10px;
 padding:22px 26px;margin:20px 0;box-shadow:0 1px 2px rgba(9,38,44,.05)}
.card.tight{padding:16px 20px}
.quote{border-left:3px solid var(--accent);background:var(--paper);padding:16px 22px;
 margin:16px 0;font:400 17px/1.6 var(--serif);color:var(--ink)}
table{width:100%;border-collapse:collapse;font-size:14.5px;margin:14px 0}
th{font:600 11px/1.3 var(--sans);letter-spacing:.09em;text-transform:uppercase;
 color:var(--mut);text-align:left;padding:10px 10px 8px;border-bottom:1.5px solid var(--bd)}
td{padding:8px 10px;border-bottom:1px solid #EDE8DC;vertical-align:top}
td.r,th.r{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
tr.tot td{border-top:1.5px solid var(--brand);border-bottom:none;font-weight:600;
 color:var(--brand);padding-top:10px}
code,.mono{font-family:var(--mono);font-size:.9em;background:#EFEADF;padding:1px 5px;
 border-radius:4px;color:var(--gold)}
ul,ol{margin:0 0 14px;padding-left:22px;max-width:74ch}li{margin:5px 0}
.tag{display:inline-block;font:600 10.5px/1 var(--sans);letter-spacing:.08em;
 text-transform:uppercase;padding:5px 9px;border-radius:5px;vertical-align:2px}
.t-err{background:var(--errbg);color:var(--err)}.t-warn{background:var(--warnbg);color:#8A6111}
.t-ok{background:var(--okbg);color:#1F7049}.t-info{background:var(--infobg);color:#214668}
.finding{border:1px solid var(--bds);border-left:4px solid var(--accent);border-radius:8px;
 background:var(--surf);padding:18px 22px;margin:16px 0}
.finding h4{font:600 17px/1.35 var(--sans);color:var(--ink);margin:0 0 4px}
.finding .where{font:400 13.5px/1.5 var(--mono);color:var(--mut);margin:0 0 12px}
.finding dl{margin:0;display:grid;grid-template-columns:112px 1fr;gap:7px 16px;font-size:14.5px}
.finding dt{font:600 11px/1.6 var(--sans);letter-spacing:.07em;text-transform:uppercase;
 color:var(--mut)}
.finding dd{margin:0}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:18px 0}
.stat{background:var(--surf);border:1px solid var(--bds);border-radius:9px;padding:16px 18px}
.stat .k{font:600 10.5px/1.4 var(--sans);letter-spacing:.09em;text-transform:uppercase;
 color:var(--mut);margin-bottom:6px}
.stat .v{font:600 24px/1.1 var(--serif);color:var(--brand);font-variant-numeric:tabular-nums}
.stat .s{font-size:12.5px;color:var(--mut);margin-top:5px}
.panel{background:var(--deep);color:#D9E4E5;border-radius:10px;padding:24px 28px;margin:24px 0}
.panel h3{color:var(--goldlt);margin-top:0}
.panel a{color:var(--goldlt)}
.warnbox{background:var(--warnbg);border:1px solid #E3CF9A;border-radius:9px;
 padding:16px 20px;margin:20px 0;font-size:15px}
.warnbox b{color:#8A6111}
.foot{margin-top:60px;padding-top:20px;border-top:1px solid var(--bd);
 font-size:13px;color:var(--mut)}
.mock{background:var(--accent);color:#fff;text-align:center;
 font:600 11px/2.4 var(--sans);letter-spacing:.12em;text-transform:uppercase}
@media print{body{background:#fff}.wrap{max-width:none}header.hero{background:var(--deep)}
 .finding,.card,.stat{break-inside:avoid}h2{break-after:avoid}}
"""


def page(title, body, favicon_note=""):
    return (f'<!doctype html><html lang="en"><head><meta charset="utf-8">'
            f'<meta name="viewport" content="width=device-width,initial-scale=1">'
            f'<title>{title}</title><style>{CSS}</style></head><body>{body}</body></html>')


# ============================================================ candidate brief ===
brief = f"""
<div class="mock">Fictional company and data — prepared for an interview exercise</div>
<header class="hero"><div class="wrap">
  <div class="eyebrow">JK Accounting Group · Practical assessment</div>
  <h1>Bookkeeping &amp; Month-End Close</h1>
  <p class="lede">A three-part exercise on a real-shaped set of books. Plan on 45–60 minutes.
  You may ask questions throughout — how you investigate matters more to us than whether every
  answer is right.</p>
  <div class="rule"></div>
</div></header>
<div class="wrap">

<h2><span class="n">The client</span>Coastal Ridge Builders LLC</h2>
<p>A residential and light-commercial general contractor in Fort Lauderdale, Florida. Single
member LLC, roughly $2.6M of annual revenue, six field crew and one office administrator.
Payroll runs through Gusto. The books are on the accrual basis in QuickBooks Online.</p>
<p>The previous bookkeeper left at the end of August. You have been handed the file and asked
to close August.</p>

<div class="grid">
  <div class="stat"><div class="k">Period under review</div><div class="v">August 2026</div>
    <div class="s">June and July are provided for comparison</div></div>
  <div class="stat"><div class="k">August revenue</div><div class="v">{f(inc8)}</div>
    <div class="s">as currently reported</div></div>
  <div class="stat"><div class="k">Bank accounts</div><div class="v">3</div>
    <div class="s">checking, savings, one business Visa</div></div>
</div>

<h2><span class="n">Your materials</span>What is in the package</h2>
<table>
<tr><th>File</th><th>What it is</th></tr>
<tr><td class="mono">01_Chart_of_Accounts.csv</td><td>The full chart of accounts</td></tr>
<tr><td class="mono">02_QuickBooks_Reports_Jun-Aug_2026.xlsx</td>
    <td>General Ledger, Journal, Trial Balance, Profit &amp; Loss by month, Balance Sheet,
        A/R and A/P Aging, Undeposited Funds detail, and the July bank reconciliation report</td></tr>
<tr><td class="mono">03_Bank_Feed_Checking_4471_Aug_2026.csv</td>
    <td>The August checking activity as the bank exported it</td></tr>
<tr><td class="mono">04_Bank_Feed_Visa_2210_Aug_2026.csv</td><td>August credit-card activity</td></tr>
<tr><td class="mono">05_Bank_Statements_Jun-Aug_2026.html</td>
    <td>Checking statements for June, July and August, the August savings statement,
        and the August Visa statement</td></tr>
</table>
<p>Work in whatever tool you are comfortable with — Excel, Google Sheets, or a QuickBooks
sandbox if you have one. We are not testing your typing speed in QBO.</p>

<h2><span class="n">Task 1 · 15–20 min</span>Bank reconciliation</h2>
<div class="quote">“Please reconcile the checking account for August. If you encounter issues,
investigate them and explain what you would do.”</div>
<p>Give us the reconciliation itself — beginning balance, cleared items, outstanding items,
ending balance — and a note on anything that did not behave the way it should have.</p>

<h2><span class="n">Task 2 · 20–25 min</span>Month-end close</h2>
<div class="quote">“Assume you are responsible for closing August for this client. Review the
books and tell us whether you are comfortable closing the month. Make any corrections you
believe you can make independently, and prepare a list of anything you need from the client
or from a reviewer.”</div>
<p>We want to see the line you draw: what you would simply fix, what you would fix and document,
and what you would refuse to touch until somebody answers a question.</p>

<h2><span class="n">Task 3 · 10–15 min</span>Financial statement review</h2>
<div class="quote">“You are about to send these August financial statements to the client.
Review them and tell me what catches your attention.”</div>
<p>Then one follow-up we will ask out loud: <b>what would you do next, before asking us or
the client?</b></p>

<div class="warnbox">
<b>Two ground rules.</b> We will not tell you how many issues are in this file, and we are not
going to confirm your findings as you go — that is the exercise. And a genuine
“I don’t know, here is how I would find out” scores better with us than a confident guess.
</div>

<h2><span class="n">Deliverable</span>What to hand back</h2>
<ol>
<li>Your August reconciliation, with the reconciling items listed.</li>
<li>A list of every issue you found: <b>what it is · where it is · what it does to the
    financials · what you would do about it</b>.</li>
<li>A separate, short list of questions for the client or the reviewer — the things you would
    not decide on your own.</li>
<li>Your read on the August financial statements, in the words you would actually use with
    a client.</li>
</ol>
<p>A spreadsheet, a document, or a clearly written email are all fine. Clarity counts.</p>

<div class="panel">
<h3>A note on this file</h3>
<p style="margin:0">Coastal Ridge Builders LLC does not exist. The company, the bank, the
customers, the vendors and every figure in this package were built for this exercise. No real
client information appears anywhere in it.</p>
</div>

<div class="foot">JK Accounting Group · Miami · Fort Lauderdale · Online<br>
Practical assessment, revision of September 2026.</div>
</div>
"""
open(f"{OUT}/06_Candidate_Brief.html", "w").write(page("Practical Bookkeeping Assessment — JK Accounting Group", brief))
print("wrote 06_Candidate_Brief.html")

# ============================================================== answer key ===
def fin(n, sev, title, where, what, evid, fix, je, tell):
    return dict(n=n, sev=sev, title=title, where=where, what=what,
                evid=evid, fix=fix, je=je, tell=tell)


SEC1 = [
 fin("1.1", "critical", "Beginning balance is off by 3,600 — a reconciled July check was edited",
     "Check 2113 · 07/24/2026 · Rivera Concrete LLC · books show 4,800.00",
     "The July statement shows check 2113 clearing at <b>8,400.00</b>. QuickBooks now shows "
     "4,800.00. The check was reconciled in July and changed afterwards, so August opens with a "
     "beginning balance that is 3,600.00 higher than the bank's.",
     "July bank statement, Checks Paid: <code>2113 &nbsp; 07/24/2026 &nbsp; 8,400.00</code>. "
     "The July reconciliation report (workbook tab <i>Bank Rec - July 2026</i>) closed with a "
     "difference of 0.00 and a register balance of "
     f"{f(R2(eom['2026-07']['1000'] - 3600))} — which no longer agrees with the ledger.",
     "Restore the check to 8,400.00. Do <b>not</b> force the reconciliation with a balancing "
     "adjustment, and do not re-reconcile July from scratch.",
     "Dr Accounts Payable (Rivera Concrete) 3,600.00 / Cr Checking 3,600.00 — effected by "
     "correcting the existing bill payment, not by a new entry.",
     "This is the single best discriminator in the test. A weak candidate accepts the beginning "
     "balance or plugs the difference. A strong one runs the Reconciliation Discrepancy report "
     "and the Audit Log, finds who changed it and when, restores it, and says out loud that a "
     "reconciled period must never be edited silently."),
 fin("1.2", "critical", "Duplicate payment — the same 4,820.00 ACH entered twice",
     "08/12 and 08/13/2026 · Gulf Coast Building Supply · 4,820.00 each",
     "The bank shows one ACH of 4,820.00 on 08/12. QuickBooks holds two.",
     "August statement, Other withdrawals: a single "
     "<code>ACH DEBIT GULF COAST BLDG SUP &nbsp; 4,820.00</code> on 08/12.",
     "Delete the 08/13 duplicate. Checking increases 4,820.00 and part of the negative "
     "A/P (finding 2.2) unwinds.",
     "Reverses: Dr Checking 4,820.00 / Cr Accounts Payable 4,820.00.",
     "Should be found by any competent candidate. Watch whether they notice it also moves A/P."),
 fin("1.3", "high", "Check 2122 entered 180.00 short — a transposition",
     "Check 2122 · 08/19/2026 · Peninsula Sitework LLC · books 6,570.00 · bank 6,750.00",
     "Classic digit transposition: 6,<b>57</b>0 versus 6,<b>75</b>0. Cash is overstated by 180.00 "
     "and Peninsula's A/P is overstated by the same.",
     "August statement, Checks Paid: <code>2122 &nbsp; 08/19/2026 &nbsp; 6,750.00</code>.",
     "Correct the bill payment to 6,750.00.",
     "Dr Accounts Payable 180.00 / Cr Checking 180.00.",
     "The 180.00 difference divides evenly by 9 — a candidate who says “that smells like a "
     "transposition” before finding it is thinking like a reconciler, not a clerk."),
 fin("1.4", "high", "A transfer to savings booked as a fuel expense",
     "08/22/2026 · 12,000.00 · coded to 6900 Vehicle &amp; Fuel",
     "<code>ONLINE TRANSFER TO SAV 8802</code> is a movement between two of the company's own "
     "accounts. It was coded as an expense, so August fuel reads "
     f"{f(P['2026-08']['6900'])} against roughly 2,900 a month, and the savings account "
     "never received the money in the books.",
     f"The August savings statement closes at {f(SAV_BANK)}. QuickBooks shows "
     f"{f(SAV_BOOK)} — a difference of {f(R2(SAV_BANK - SAV_BOOK))}: this 12,000.00 transfer "
     "plus 14.00 of interest that was never recorded either.",
     "Re-record as a transfer, Checking → Savings, and post the interest to interest income. "
     "Then reconcile the savings account, which appears never to have been reconciled at all.",
     "Dr Savings 12,000.00 / Cr Checking 12,000.00, and reverse the 12,000.00 out of "
     "Vehicle &amp; Fuel.",
     "The savings account is the tell. A candidate who reconciles only the operating account and "
     "never opens the savings statement misses that the second half of this transfer is missing."),
 fin("1.5", "high", "A credit-card payment booked as an office expense",
     "08/25/2026 · 9,340.00 · coded to 6300 Office Supplies &amp; Software",
     "Paying down the Visa is a balance-sheet movement. Booking it to an expense double-counts "
     "the cost — once when each charge was recorded, again when the card was paid — and leaves "
     "the card liability overstated.",
     f"The August Visa statement closes at {f(CC_BANK)}. QuickBooks shows {f(CC_BOOK)} — "
     f"overstated by exactly {f(R2(CC_BOOK - CC_BANK))}.",
     "Recode the payment against the credit-card liability.",
     "Dr Coastal First Visa 9,340.00 / Cr Office Supplies &amp; Software 9,340.00.",
     "Ask them how they proved the card balance. The right answer is “I tied it to the card "
     "statement”, not “it looked about right”."),
 fin("1.6", "critical", "The same customer deposit recorded twice",
     "08/08 and 08/11/2026 · Harbor Point Development · 18,500.00 each (customer check 5521)",
     "One customer check, entered as two payments and two deposits. Cash and revenue collection "
     "are both overstated, and this is the main reason accounts receivable has gone negative.",
     "August statement shows a single <code>DEPOSIT 18,500.00</code> on 08/08. Both QuickBooks "
     "entries carry the same memo, <i>Check 5521 - inv 1846 balance</i>.",
     "Delete the 08/11 payment and its deposit. Harbor Point's A/R moves from (12,000.00) "
     "to 6,500.00 owed.",
     "Reverses: Dr Accounts Receivable 18,500.00 / Cr Checking 18,500.00.",
     "The strong candidate connects this to the negative A/R in Task 2 rather than treating "
     "them as two unrelated findings."),
 fin("1.7", "medium", "A bank fee that never reached the books",
     "08/31/2026 · MONTHLY SERVICE CHARGE · 48.00",
     "On the statement, absent from QuickBooks.",
     "August statement, Other withdrawals and debits, dated 08/31.",
     "Add it to Bank Charges &amp; Fees.",
     "Dr Bank Charges &amp; Fees 48.00 / Cr Checking 48.00.",
     "Small, and that is the point — it tests whether they work the statement line by line "
     "or only chase the big numbers."),
 fin("1.8", "high", "A check outstanding since March",
     "Check 2041 · 03/14/2026 · Peninsula Sitework LLC · 3,275.00 · never presented",
     "Five and a half months outstanding, for final retainage. Either the vendor never received "
     "it, it was lost, or it was already settled another way and the books are double-counting "
     "the liability.",
     "It appears as the only uncleared item on the July reconciliation report and is still "
     "uncleared at 08/31.",
     "Contact the vendor before doing anything. If it is genuinely dead: void it with a "
     "current-dated entry and reissue if still owed. Under Florida law an uncashed vendor cheque "
     "eventually becomes unclaimed property reportable to the state.",
     "Void in the current period — never delete a prior-period cheque that sits inside a "
     "reconciled month.",
     "Two things to listen for: that they investigate rather than immediately void, and that "
     "they do not delete it out of a closed period. Deleting is the common wrong answer."),
]

SEC1_OK = [
 ("Checks 2124 (2,340.00, written 08/28) and 2125 (1,130.00, written 08/29)",
  "Legitimately outstanding at 08/31 — not errors."),
 ("The 08/31 deposit of 10,250.00", "A deposit in transit; it cleared the bank on 09/02."),
 ("Gaps in the check-number sequence (2107–2109, 2117, 2119)",
  "Void or unused stock. Worth one question, not a finding."),
]

SEC2 = [
 fin("2.1", "critical", "Accounts receivable is negative",
     f"1200 Accounts Receivable · ({f(abs(E['1200']))}) at 08/31",
     "Three customers carry credit balances: Harbor Point Development (12,000.00), "
     "Seaside Renovations (9,000.00) and Palmetto Partners LLC (7,500.00). A receivable cannot "
     "be negative — either cash was recorded twice or the client is holding customer money.",
     "A/R Aging Summary in the workbook.",
     "Harbor Point is the duplicate deposit at 1.6 — fix that first. The other two are genuine "
     "customer overpayments and belong in a <b>Customer Deposits</b> liability account, not "
     "netted against receivables.",
     "Dr Accounts Receivable 16,500.00 / Cr Customer Deposits (Other Current Liability) 16,500.00.",
     "Weak: “I'll write it off.” Strong: separates the accounting error from the real advance, "
     "and knows a customer advance is a liability."),
 fin("2.2", "critical", "Accounts payable is negative",
     f"2000 Accounts Payable · ({f(abs(E['2000']))}) at 08/31",
     "Gulf Coast Building Supply sits at (23,820.00). Payments have been recorded against A/P "
     "with no corresponding bills — the vendor is being paid on a running account and the bills "
     "were never entered.",
     "A/P Aging Summary. Rivera 4,860.00, Peninsula 16,000.00, Delgado 1,030.00 and Gulf Coast "
     "(23,820.00).",
     "Request the vendor statement, enter the missing bills, apply the payments. 4,820.00 of "
     "the negative is the duplicate at 1.2.",
     "No single entry — this is reconstruction work against the vendor statement.",
     "Listen for “I'd get the vendor statement.” A candidate who proposes a journal entry to "
     "clear a negative A/P without reconstructing it is telling you they will hide problems."),
 fin("2.3", "high", "Uncategorized accounts have balances",
     "8000 Uncategorized Expense 4,375.00 (3 items) · 8100 Uncategorized Income 2,600.00 (1)",
     "Bank-feed items accepted without being categorised: "
     "<code>PAYPAL *INST XFER 1,250.00</code> (08/10), <code>SQ *VENDOR PMT 1,875.00</code> "
     "(08/19), <code>REF 88214 1,250.00</code> (08/27), and an unmatched deposit of 2,600.00 "
     "on 08/14.",
     "General Ledger, accounts 8000 and 8100.",
     "Chase the source documents. The 2,600.00 deposit matters most — if it is a customer "
     "payment it belongs against an invoice, and revenue may currently be overstated.",
     "None until identified. These are questions for the client, not entries.",
     "Nobody can close a month with a live uncategorised balance. Say so if they do not."),
 fin("2.4", "high", "Ask My Accountant has been accumulating all quarter",
     f"1300 Ask My Accountant · {f(E['1300'])} · four items",
     "06/30 <code>PTC*BILLING 8827</code> 2,400.00 · 07/22 wire out to SRE Holdings LLC 5,600.00 · "
     "08/06 check 2131 with no payee 3,500.00 · 08/20 <code>AMEX EPAYMENT</code> 4,500.00.",
     "General Ledger, account 1300.",
     "A suspense account is a to-do list, not a resting place. The 5,600.00 outgoing wire and "
     "the blank-payee cheque should be escalated the same day they are found.",
     "None until identified.",
     "The 5,600.00 wire to an unknown party is the item that should worry them out loud. "
     "A candidate who lists all four at equal weight is not thinking about risk."),
 fin("2.5", "critical", "Every loan payment booked entirely to principal",
     "2600 Equipment Loan · payments of 3,850.00 on 06/15, 07/15 and 08/14",
     "The full payment is being debited to the loan, so no interest has ever been recorded. "
     "The P&amp;L shows <b>zero interest expense</b> for a company carrying a "
     f"{f(-E['2600'])} loan, and the loan balance is understated.",
     "General Ledger accounts 2600 and 9000. Interest Expense is 0.00 in all three months.",
     f"Per the lender's amortisation schedule the balance at 08/31 should be "
     f"{f(LOAN_TRUE)}, not {f(-E['2600'])}. Year-to-date interest of {f(LOAN_INT_YTD)} "
     f"is missing ({f(LOAN_INT_Q)} of it in June–August).",
     f"Dr Interest Expense {f(LOAN_INT_YTD)} / Cr Equipment Loan {f(LOAN_INT_YTD)}.",
     "The giveaway is a zero on the P&amp;L, not a wrong number — it tests whether they read "
     "for what is <i>absent</i>. Strong candidates ask for the amortisation schedule rather "
     "than estimating."),
 fin("2.6", "critical", "A 28,000.00 machine expensed to repairs",
     "Check 2129 · 08/07/2026 · Gulf Coast Equipment Co · 6600 Repairs &amp; Maintenance",
     "The memo reads <i>Bobcat S76 skid steer loader — serial A3W512</i>. That is a capital "
     "asset with a useful life of years, expensed in one month.",
     "General Ledger, account 6600. Fixed assets are unchanged across all three months while "
     "28,000.00 of equipment was bought — the two facts contradict each other.",
     "Capitalise to 1500 Equipment and start depreciating. Flag §179 / bonus depreciation to "
     "whoever prepares the return; the tax answer is not the bookkeeper's to decide alone.",
     "Dr Equipment 28,000.00 / Cr Repairs &amp; Maintenance 28,000.00.",
     "Also watch for the <b>second</b> repairs item — 5,900.00 on 08/14, a hydraulic pump "
     "replacement. Whether a major component replacement is a repair or a betterment is a real "
     "judgment call, and raising it is a mark of seniority."),
 fin("2.7", "high", "Owner personal spending inside business expenses",
     "08/16 Royal Palm Yacht Club 4,800.00 (7500 Meals) · 08/09 Nordstrom – Aventura 1,340.00 "
     "(6300 Office Supplies)",
     "A club membership and a department-store charge. Neither is an ordinary and necessary "
     "business expense of a general contractor.",
     "General Ledger accounts 7500 and 6300. August meals are "
     f"{f(P['2026-08']['7500'])} against roughly 570 a month.",
     "Reclassify both to Owner's Draw after confirming with the owner. Do not assume — but do "
     "not book them as business expenses while you wait, either.",
     "Dr Owner's Draw 6,140.00 / Cr Meals &amp; Entertainment 4,800.00, Cr Office Supplies "
     "&amp; Software 1,340.00.",
     "The Nordstrom charge is the harder one; the yacht club is obvious. Finding only the "
     "obvious one is a 3, not a 5."),
 fin("2.8", "high", "43,000.00 stuck in Undeposited Funds, some of it for months",
     "1050 Undeposited Funds · four items at 08/31",
     "Coral Bay Homes 12,500.00 received 05/22 (<b>101 days</b>) · Seaside Renovations 9,800.00 "
     "received 06/18 (<b>74 days</b>) · Palmetto Partners 6,700.00 received 07/29 (33 days) · "
     "Harbor Point 14,000.00 received 08/28 (3 days).",
     "Undeposited Funds tab in the workbook.",
     "Only the 08/28 item is normal. The two old ones are either money that was deposited and "
     "matched to something else — in which case income is double-counted — or cheques sitting "
     "in a drawer, which is a cash-control problem for the owner to hear about.",
     "Depends on which it is. Never simply clear the balance to force it down.",
     "The two questions that separate candidates: “was this money actually received?” and "
     "“is this the reason a deposit looks doubled?”"),
 fin("2.9", "high", "Payroll liabilities are seven months of accrual",
     f"2200 Payroll Liabilities · {f(-E['2200'])} at 08/31",
     "Monthly payroll taxes run 3,900.00 and are paid the following month, so the balance "
     "should be about one month. 23,580.00 of this has been carried since 2025 and never cleared.",
     "General Ledger, account 2200 — the balance never falls below 23,580.00 in any of the "
     "three months.",
     "Tie the balance to the Gusto tax filings and the Forms 941. If the taxes were genuinely "
     "paid, the stale balance is a bookkeeping residue to be cleared; if they were not, this is "
     "an urgent client conversation.",
     "Depends on the filings. Never write it off without them.",
     "Strong: “I would tie this to the 941s before touching it.” Weak: “I'd clear it to "
     "payroll expense.”"),
 fin("2.10", "medium", "The same vendor entered twice, under two names",
     "Gulf Coast Building Supply / Gulf Coast Building Supply LLC · "
     "Tri County Diesel / Tri-County Diesel",
     "Bills run through one record and card charges through the other, so no report shows what "
     "either vendor was really paid — and the 1099 totals will be wrong at year end.",
     "Vendor names in the General Ledger and Journal tabs.",
     "Merge each pair, keeping the record carrying the tax details.",
     "None — a vendor merge, not an entry.",
     "The 1099 consequence is the answer worth listening for."),
 fin("2.11", "high", "Prepaid insurance has never been amortised",
     f"1400 Prepaid Insurance · {f(E['1400'])} · unchanged since January",
     "A 9,600.00 annual policy paid in January and still sitting at full value in August. "
     "Insurance expense is <b>0.00</b> in all three months — a construction company with no "
     "insurance cost is not possible.",
     "General Ledger accounts 1400 and 6200.",
     "800.00 a month. Eight months should have been expensed by 08/31, leaving 3,200.00.",
     "Dr Insurance 6,400.00 / Cr Prepaid Insurance 6,400.00 (catch-up), then 800.00 a month.",
     "Another absent number rather than a wrong one. Pair it with the zero interest and zero "
     "depreciation — three P&amp;L lines that are empty and should not be."),
 fin("2.12", "high", "No depreciation has been recorded",
     "1590 Accumulated Depreciation unchanged · 9100 Depreciation Expense 0.00",
     "Three months of a fixed-asset base of 279,150.00 with no depreciation, before you even "
     "add the skid steer from 2.6.",
     "Balance Sheet and P&amp;L.",
     "Request the depreciation schedule or the prior-year Form 4562, then book monthly.",
     "Dr Depreciation Expense / Cr Accumulated Depreciation — amount per the schedule.",
     "Some firms book depreciation annually. A candidate who <i>asks</i> which convention the "
     "firm uses is right; one who silently books an estimate is not."),
 fin("2.13", "judgment", "49,500.00 of materials bought for a job that starts in September",
     "Bill GC-78515 · 08/20/2026 · Gulf Coast Building Supply",
     "The memo says it plainly: <i>Material buyout — PALMETTO BAY PHASE II (job starts "
     f"September)</i>. This single bill is the whole reason August gross margin fell to "
     f"{GM['2026-08']}%.",
     "General Ledger, account 5000, and the P&amp;L trend.",
     "Cost and revenue belong in the same period. The materials should sit in a "
     "materials-inventory or work-in-progress asset and release when the job runs. But this "
     "depends on the client's policy and their tax treatment — it is a question, not a "
     "unilateral reclass.",
     f"If reclassified: Dr Materials Inventory 49,500.00 / Cr Job Materials 49,500.00 — "
     f"August COGS falls to {f(COGS_FIX)} and gross margin returns to {GM_FIX}%.",
     "This is the top of the test. It is the same fact pattern as the optional construction "
     "scenario, and the ideal answer is: I found the cause, here is the correct treatment, "
     "and I am not making this change without confirming your policy."),
]

SEC3 = [
 ("Gross margin 42% → 40% → 19%", "The headline. One bill explains all of it (2.13). "
  f"Remove it and August returns to {GM_FIX}%."),
 (f"Repairs &amp; Maintenance {f(P['2026-08']['6600'])} against 2,750 and 3,400",
  "28,000.00 of capital equipment (2.6) plus a 5,900.00 component replacement."),
 (f"Professional fees {f(P['2026-08']['6400'])} against roughly 1,000",
  "14,500.00 entity restructuring and loan-covenant work — ask whether any of it is a "
  "capitalisable organisation or loan cost; 2,750.00 annual tax preparation; 750.00 legal. "
  "Large but not obviously wrong: the right response is to ask, not to flag it as an error."),
 (f"Vehicle &amp; Fuel {f(P['2026-08']['6900'])} against roughly 2,900", "The transfer at 1.4."),
 (f"Office Supplies &amp; Software {f(P['2026-08']['6300'])} against roughly 1,200",
  "The card payment at 1.5 plus the personal charge at 2.7."),
 (f"Meals &amp; Entertainment {f(P['2026-08']['7500'])} against roughly 570", "The club membership at 2.7."),
 ("Interest, insurance and depreciation are all 0.00",
  "Three expenses that must exist and do not (2.5, 2.11, 2.12)."),
 (f"Undeposited Funds {f(E['1050'])}", "Larger than a month of collections should ever leave "
  "sitting undeposited (2.8)."),
 (f"A/R ({f(abs(E['1200']))})", "A negative asset (2.1)."),
 (f"Ask My Accountant {f(E['1300'])}", "An unexplained balance sheet account (2.4)."),
 ("Fixed assets unchanged while 28,000.00 of equipment was bought",
  "The balance sheet contradicts the cash out (2.6)."),
 ("Revenue 210,000 → 215,000 → 225,000", "Real growth, no issue. A candidate who flags this "
  "as an anomaly is pattern-matching rather than thinking."),
]


def render_findings(items):
    out = []
    tagmap = {"critical": ("t-err", "Critical"), "high": ("t-warn", "High"),
              "medium": ("t-info", "Medium"), "judgment": ("t-ok", "Judgment")}
    for x in items:
        cls, lbl = tagmap[x["sev"]]
        out.append(f"""<div class="finding">
  <h4>{x['n']} &nbsp; {x['title']} &nbsp;<span class="tag {cls}">{lbl}</span></h4>
  <p class="where">{x['where']}</p>
  <dl>
    <dt>What it is</dt><dd>{x['what']}</dd>
    <dt>Evidence</dt><dd>{x['evid']}</dd>
    <dt>Correct fix</dt><dd>{x['fix']}</dd>
    <dt>Entry</dt><dd>{x['je']}</dd>
    <dt>What it tells you</dt><dd>{x['tell']}</dd>
  </dl></div>""")
    return "\n".join(out)


RUBRIC = [
 ("Technical accounting", "Misses basic accounting treatment", "Handles common items correctly",
  "Understands nuance, materiality, matching and classification"),
 ("QBO proficiency", "Needs significant navigation help", "Comfortable with standard workflow",
  "Drills down efficiently, traces activity, uses reports intelligently"),
 ("Reconciliation / troubleshooting", "Forces the reconciliation or guesses",
  "Finds common discrepancies", "Traces root causes and protects prior reconciliations"),
 ("Financial statement review", "Checks only obvious balances", "Reviews P&amp;L and Balance Sheet",
  "Identifies trends, anomalies and business implications"),
 ("Problem-solving / investigation", "Immediately asks others", "Performs some independent checks",
  "Forms hypotheses, tests them, documents findings, then escalates"),
 ("Attention to detail", "Misses seeded issues", "Finds most issues",
  "Finds subtle inconsistencies and follows through"),
 ("Independent judgment", "Needs constant direction", "Handles routine decisions",
  "Knows what to fix, what to document and what needs approval"),
 ("Communication", "Unclear or overly technical", "Explains findings adequately",
  "Communicates issue, impact, evidence and next step clearly"),
 ("Escalation judgment", "Escalates everything or nothing", "Usually knows when to ask",
  "Investigates first, escalates only genuine judgment calls"),
]

key = f"""
<div class="mock">Evaluator copy — do not send to the candidate</div>
<header class="hero"><div class="wrap">
  <div class="eyebrow">JK Accounting Group · Evaluator pack</div>
  <h1>Answer key &amp; scoring</h1>
  <p class="lede">Coastal Ridge Builders LLC — August 2026. Twenty-one seeded issues across the
  three tasks, what each one proves, and what a 1, a 3 and a 5 sound like.</p>
  <div class="rule"></div>
</div></header>
<div class="wrap">

<div class="warnbox"><b>Before the session.</b> Send the candidate the brief and the five package
files, and nothing else. Do not say how many issues exist — the count is the test. If they ask
whether a specific finding is right, tell them you will discuss it at the end.</div>

<h2><span class="n">Orientation</span>How this file was built</h2>
<p>The books tie out exactly: three months of a general contractor, June through August 2026,
every entry balanced, every report internally consistent. The errors are not noise — each one is
a specific behaviour we want to observe, and each has a correct answer.</p>
<div class="grid">
  <div class="stat"><div class="k">Checking per books 08/31</div><div class="v">{f(E['1000'])}</div>
    <div class="s">before any correction</div></div>
  <div class="stat"><div class="k">Checking per bank 08/31</div><div class="v">{f(BANK_AUG)}</div>
    <div class="s">August statement, closing</div></div>
  <div class="stat"><div class="k">Corrected book balance</div><div class="v">{f(ADJ_BOOK)}</div>
    <div class="s">what a correct reconciliation lands on</div></div>
  <div class="stat"><div class="k">August as reported</div><div class="v">({f(abs(NI8))})</div>
    <div class="s">net loss on {f(inc8)} of revenue</div></div>
</div>

<h3>The reconciliation, worked</h3>
<table>
<tr><th>Step</th><th class="r">Amount</th></tr>
<tr><td>Balance per books, 08/31/2026</td><td class="r">{f(E['1000'])}</td></tr>
<tr><td>Less duplicate deposit 08/11 &nbsp;<span class="mono">(1.6)</span></td><td class="r">(18,500.00)</td></tr>
<tr><td>Add back duplicate ACH 08/13 &nbsp;<span class="mono">(1.2)</span></td><td class="r">4,820.00</td></tr>
<tr><td>Less correction to check 2122 &nbsp;<span class="mono">(1.3)</span></td><td class="r">(180.00)</td></tr>
<tr><td>Less restoration of check 2113 &nbsp;<span class="mono">(1.1)</span></td><td class="r">(3,600.00)</td></tr>
<tr><td>Less unrecorded bank fee &nbsp;<span class="mono">(1.7)</span></td><td class="r">(48.00)</td></tr>
<tr class="tot"><td>Adjusted balance per books</td><td class="r">{f(ADJ_BOOK)}</td></tr>
</table>
<table>
<tr><th>Step</th><th class="r">Amount</th></tr>
<tr><td>Balance per bank statement, 08/31/2026</td><td class="r">{f(BANK_AUG)}</td></tr>
<tr><td>Add deposit in transit 08/31 (cleared 09/02)</td><td class="r">10,250.00</td></tr>
<tr><td>Less outstanding checks 2041, 2124, 2125</td><td class="r">({f(OUTSTANDING)})</td></tr>
<tr class="tot"><td>Adjusted balance per bank</td><td class="r">{f(ADJ_BANK)}</td></tr>
</table>
<p>The two sides agree at <b>{f(ADJ_BOOK)}</b>. Anything else is not reconciled, however
confidently it is presented.</p>

<h2><span class="n">Task 1</span>Bank reconciliation — 8 seeded issues</h2>
{render_findings(SEC1)}
<div class="card tight"><h3 style="margin-top:0">Not errors — do not let them be counted as finds</h3>
<table><tr><th>Item</th><th>Why it is fine</th></tr>
{"".join(f"<tr><td>{a}</td><td>{b}</td></tr>" for a, b in SEC1_OK)}</table></div>

<h2><span class="n">Task 2</span>Month-end close — 13 seeded issues</h2>
<p>The question behind this section is the one in the source material: does the candidate believe
that a reconciled bank account means a closed month, or do they work the whole balance sheet?
<b>The correct overall answer is that August cannot be closed.</b> A candidate who says
“yes, I'm comfortable closing” has failed the section regardless of how many items they found.</p>
{render_findings(SEC2)}

<h2><span class="n">Task 3</span>Financial statement review</h2>
<p>Reported August: revenue {f(inc8)}, gross margin {GM['2026-08']}%, and a
<b>net loss of {f(abs(NI8))}</b> — a month that billed {f(inc8)} and still lost money.
Nearly every figure below is a symptom of something already found in Task 2 — the point is
whether they connect the statement back to the transaction.</p>
<table><tr><th>What should catch their eye</th><th>What is behind it</th></tr>
{"".join(f"<tr><td>{a}</td><td>{b}</td></tr>" for a, b in SEC3)}</table>

<div class="panel"><h3>The follow-up question</h3>
<p>“What would you do next, before asking me or the client?” Strong answers name concrete
moves: drill into the account, compare against prior months, open the source transaction, check
the bank statement or the invoice, look at how similar items were treated before, check for a
recurring entry — <i>then</i> escalate what is genuinely a judgment or a client question.</p>
<p style="margin-bottom:0">The optional construction scenario in the source material is the same
fact pattern as finding 2.13. If they solved 2.13 well, you do not need to run it.</p></div>

<h2><span class="n">Scoring</span>Rubric — 9 categories, 5 points each, 45 total</h2>
<table>
<tr><th style="width:23%">Category</th><th>1 · Weak</th><th>3 · Competent</th><th>5 · Strong</th>
<th class="r" style="width:64px">Score</th></tr>
{"".join(f"<tr><td><b>{a}</b></td><td>{b}</td><td>{c}</td><td>{e}</td><td class='r'>&nbsp;</td></tr>"
         for a, b, c, e in RUBRIC)}
<tr class="tot"><td colspan="4">Total</td><td class="r">&nbsp; / 45</td></tr>
</table>

<div class="card"><h3 style="margin-top:0">Reading the result</h3>
<table>
<tr><th style="width:110px">Findings</th><th>Reading</th></tr>
<tr><td><b>Under 8</b></td><td>Not ready to work unsupervised. They are processing, not reviewing.</td></tr>
<tr><td><b>8 – 13</b></td><td>Competent bookkeeper. Would need a reviewer on every close.</td></tr>
<tr><td><b>14 – 18</b></td><td>Strong. Can be trusted with a close and a review checklist.</td></tr>
<tr><td><b>19 +</b></td><td>Rare. Check they also drew the right line on what <i>not</i> to fix alone.</td></tr>
</table>
<p style="margin-bottom:0">Weight the count less than these four behaviours: they did
<b>not</b> force the reconciliation (1.1); they said August <b>cannot</b> be closed; they asked
before reclassifying the 49,500.00 (2.13); and they investigated the 5,600.00 unknown wire (2.4)
rather than listing it flatly. Per the source material, weight problem-solving, independent
judgment and financial review above raw QBO speed — button-clicking can be taught.</p></div>

<h2><span class="n">Notes</span>Evaluator record</h2>
<div class="card">
<table>
<tr><td style="width:200px"><b>Candidate</b></td><td>&nbsp;</td></tr>
<tr><td><b>Date</b></td><td>&nbsp;</td></tr>
<tr><td><b>Issues found</b></td><td>&nbsp; / 21</td></tr>
<tr><td><b>Rubric total</b></td><td>&nbsp; / 45</td></tr>
<tr><td><b>Top strengths</b></td><td>&nbsp;</td></tr>
<tr><td><b>Key concerns</b></td><td>&nbsp;</td></tr>
<tr><td><b>Would you trust this person to close a client independently? Why?</b></td><td>&nbsp;</td></tr>
</table></div>

<div class="foot">JK Accounting Group · evaluator copy · September 2026.<br>
Coastal Ridge Builders LLC is fictional. No client data appears in this package.</div>
</div>
"""
open(f"{OUT}/ANSWER_KEY_evaluator_only.html", "w").write(
    page("Answer key & scoring — evaluator copy", key))
print("wrote ANSWER_KEY_evaluator_only.html")
print(f"  reconciles at {f(ADJ_BOOK)}   findings: {len(SEC1)} + {len(SEC2)} = {len(SEC1)+len(SEC2)}")
