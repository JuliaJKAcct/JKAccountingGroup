"""Renders printable Coastal First Bank statements from the derived bank view."""
import os, datetime as dt
from collections import OrderedDict
import books as B
from engine import build, R2

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "test-package"))
d = build()
MN = {"06": "June", "07": "July", "08": "August"}


def us(x):
    return f"{x[5:7]}/{x[8:10]}/{x[0:4]}"


def m(x):
    return f"{abs(x):,.2f}"


def last_day(mo):
    return {"06": "2026-06-30", "07": "2026-07-31", "08": "2026-08-31"}[mo]


CSS = """
:root{--ink:#12212e;--mut:#5b6b7a;--rule:#d5dee6;--brand:#0d4f5c;--band:#f2f6f8;--acc:#b8892c}
*{box-sizing:border-box}
body{margin:0;background:#e9edf1;font:12px/1.5 "Helvetica Neue",Arial,sans-serif;color:var(--ink)}
.sheet{width:8.5in;min-height:11in;margin:22px auto;background:#fff;padding:.55in .6in;
       box-shadow:0 2px 14px rgba(16,32,48,.16)}
.mast{display:flex;justify-content:space-between;align-items:flex-start;
      border-bottom:2.5px solid var(--brand);padding-bottom:14px}
.bank{font:700 21px/1 Georgia,serif;color:var(--brand);letter-spacing:.2px}
.bank span{display:block;font:400 9.5px/1.5 Arial;letter-spacing:.16em;
           text-transform:uppercase;color:var(--mut);margin-top:6px}
.mast .meta{text-align:right;font-size:11px;color:var(--mut);line-height:1.7}
.mast .meta b{color:var(--ink);font-size:12px}
.who{display:flex;justify-content:space-between;margin:18px 0 4px;gap:30px}
.who .addr{font-size:12px;line-height:1.55}
.who .addr b{font-size:12.5px}
.who .acct{font-size:11px;color:var(--mut);text-align:right;line-height:1.8;white-space:nowrap}
.who .acct b{color:var(--ink);font-family:"SF Mono",Consolas,monospace;letter-spacing:.05em}
h2{font:600 11px/1 Arial;letter-spacing:.14em;text-transform:uppercase;color:var(--brand);
   margin:26px 0 0;padding-bottom:6px;border-bottom:1px solid var(--rule)}
table{width:100%;border-collapse:collapse;font-size:11.5px}
th{font:600 9.5px/1 Arial;letter-spacing:.1em;text-transform:uppercase;color:var(--mut);
   text-align:left;padding:9px 6px 7px;border-bottom:1px solid var(--rule)}
td{padding:5.5px 6px;border-bottom:1px solid #eef2f5;vertical-align:top}
.r{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
.num{font-family:"SF Mono",Consolas,monospace;font-size:11px}
tr.tot td{border-top:1.5px solid var(--ink);border-bottom:none;font-weight:700;padding-top:8px}
.summary{margin-top:18px;border:1px solid var(--rule);background:var(--band)}
.summary table{font-size:12px}
.summary td{border:none;padding:9px 16px}
.summary tr+tr td{border-top:1px solid #e2e9ee}
.summary .k{color:var(--mut)}
.summary .end td{border-top:1.5px solid var(--brand);font-weight:700;font-size:13.5px;color:var(--brand)}
.daily{display:grid;grid-template-columns:repeat(3,1fr);gap:0 34px;margin-top:8px}
.daily div{display:flex;justify-content:space-between;font-size:11px;padding:3.5px 0;
           border-bottom:1px solid #eef2f5}
.daily span:last-child{font-variant-numeric:tabular-nums}
.foot{margin-top:30px;padding-top:12px;border-top:1px solid var(--rule);
      font-size:9.5px;color:var(--mut);line-height:1.65}
.pg{float:right;font-size:9.5px;color:var(--mut)}
.note{margin-top:10px;font-size:10.5px;color:var(--mut);font-style:italic}
.mock{position:fixed;top:0;left:0;right:0;background:var(--acc);color:#fff;text-align:center;
      font:600 11px/2.2 Arial;letter-spacing:.1em;text-transform:uppercase;z-index:9}
body{padding-top:30px}
@media print{body{background:#fff;padding-top:0}.mock{display:none}
  .sheet{margin:0;box-shadow:none;width:auto;min-height:0;padding:.4in;page-break-after:always}
  .sheet:last-child{page-break-after:auto}}
"""


def sheet(title, mo, acct_label, mask, rows, opening, sections, daily=True, extra_note=""):
    """rows: list of dicts date/desc/amount/num already filtered to the month."""
    dep = [r for r in rows if r["amount"] > 0]
    wdr = [r for r in rows if r["amount"] < 0]
    tin = sum(r["amount"] for r in dep)
    tout = -sum(r["amount"] for r in wdr)
    close = R2(opening + tin - tout)
    h = []
    h.append('<div class="sheet">')
    h.append(f'''<div class="mast"><div class="bank">Coastal First Bank<span>Member FDIC &nbsp;·&nbsp; Equal Housing Lender</span></div>
      <div class="meta"><b>{acct_label}</b><br>Statement period<br>
      {us(f"2026-{mo}-01")} &ndash; {us(last_day(mo))}<br>Page <span class="pg2">1 of 1</span></div></div>''')
    h.append(f'''<div class="who"><div class="addr"><b>{B.COMPANY}</b><br>{B.ADDRESS.replace(", ","<br>",0)}</div>
      <div class="acct">Account number &nbsp;<b>{mask}</b><br>
      Statement date &nbsp;<b>{us(last_day(mo))}</b><br>
      Questions? &nbsp;<b>(954) 555-0180</b></div></div>''')
    h.append(f'''<div class="summary"><table>
      <tr><td class="k">Beginning balance {us(f"2026-{mo}-01")}</td><td class="r">{m(opening)}</td></tr>
      <tr><td class="k">Deposits and other credits &nbsp;({len(dep)})</td><td class="r">{m(tin)}</td></tr>
      <tr><td class="k">Withdrawals, checks and debits &nbsp;({len(wdr)})</td><td class="r">&minus;{m(tout)}</td></tr>
      <tr class="end"><td>Ending balance {us(last_day(mo))}</td><td class="r">{m(close)}</td></tr>
      </table></div>''')

    if sections and dep:
        h.append('<h2>Deposits and other credits</h2><table><tr><th style="width:88px">Date</th>'
                 '<th>Description</th><th class="r" style="width:110px">Amount</th></tr>')
        for r in sorted(dep, key=lambda x: x["date"]):
            h.append(f'<tr><td class="num">{us(r["date"])}</td><td>{r["desc"]}</td>'
                     f'<td class="r">{m(r["amount"])}</td></tr>')
        h.append(f'<tr class="tot"><td></td><td>Total deposits and credits</td>'
                 f'<td class="r">{m(tin)}</td></tr></table>')

    checks = sorted([r for r in wdr if r["num"].isdigit()], key=lambda x: int(x["num"]))
    other = sorted([r for r in wdr if not r["num"].isdigit()], key=lambda x: x["date"])
    if checks:
        h.append('<h2>Checks paid</h2><table><tr><th style="width:90px">Check no.</th>'
                 '<th style="width:100px">Date paid</th><th>Reference</th>'
                 '<th class="r" style="width:110px">Amount</th></tr>')
        prev = None
        for r in checks:
            gap = "*" if prev is not None and int(r["num"]) != prev + 1 else " "
            prev = int(r["num"])
            h.append(f'<tr><td class="num">{r["num"]}<span style="color:#b8892c">{gap}</span></td>'
                     f'<td class="num">{us(r["date"])}</td><td>Check</td>'
                     f'<td class="r">{m(r["amount"])}</td></tr>')
        h.append(f'<tr class="tot"><td></td><td></td><td>Total checks paid ({len(checks)})</td>'
                 f'<td class="r">{m(sum(-r["amount"] for r in checks))}</td></tr></table>'
                 '<div class="note">* indicates a break in check-number sequence.</div>')
    if other:
        h.append('<h2>Other withdrawals and debits</h2><table><tr><th style="width:88px">Date</th>'
                 '<th>Description</th><th class="r" style="width:110px">Amount</th></tr>')
        for r in other:
            h.append(f'<tr><td class="num">{us(r["date"])}</td><td>{r["desc"]}</td>'
                     f'<td class="r">{m(r["amount"])}</td></tr>')
        h.append(f'<tr class="tot"><td></td><td>Total other withdrawals and debits</td>'
                 f'<td class="r">{m(sum(-r["amount"] for r in other))}</td></tr></table>')

    if daily:
        run, days = opening, OrderedDict()
        for r in sorted(rows, key=lambda x: x["date"]):
            run = R2(run + r["amount"])
            days[r["date"]] = run
        h.append('<h2>Daily ending balance</h2><div class="daily">')
        for k, v in days.items():
            h.append(f'<div><span>{us(k)}</span><span>{m(v)}</span></div>')
        h.append('</div>')
    h.append(f'''<div class="foot">{extra_note}
      In case of errors or questions about your electronic transfers, telephone us at (954) 555-0180 or write
      Coastal First Bank, N.A., PO Box 44120, Fort Lauderdale FL 33340, as soon as you can. We must hear from
      you no later than 60 days after we sent you the FIRST statement on which the problem appeared.
      <br><br>Please examine this statement promptly and report any discrepancy within 30 days.</div>''')
    h.append('</div>')
    return "\n".join(h)


pages = []
bank = d["bank"]
run = d["bank_open"]
for mo in ("06", "07", "08"):
    rows = [r for r in bank if r["date"][:7] == f"2026-{mo}"]
    pages.append(sheet(f"{MN[mo]} 2026", mo, "Business Checking", B.CHECKING_MASK, rows, run, True))
    run = d["bank_eom"][f"2026-{mo}"]

# savings - August only
sav_rows = [dict(r, num="") for r in B.SAVINGS_BANK if r["date"][:7] == "2026-08"]
sav_open = R2(25000.00 + sum(r["amount"] for r in B.SAVINGS_BANK if r["date"] < "2026-08-01"))
pages.append(sheet("August 2026", "08", "Business Money Market Savings", B.SAVINGS_MASK,
                   sav_rows, sav_open, True,
                   extra_note="Interest paid year to date: $34.20. &nbsp;"))

# visa - August
cc_rows = []
for t in sorted(B.T, key=lambda x: x["date"]):
    if t.get("card") and t["date"][:7] == "2026-08":
        cc_rows.append(dict(date=t["date"], desc=t["name"].upper(), num="",
                            amount=R2(-dict(t["lines"])["2100"])))
cc_prev = 16050.00
cc_pay = 9340.00
cc_charges = sum(r["amount"] for r in cc_rows)
cc_new = R2(cc_prev + cc_charges - cc_pay)
cc = ['<div class="sheet">']
cc.append(f'''<div class="mast"><div class="bank">Coastal First Bank<span>Business Visa &nbsp;·&nbsp; Member FDIC</span></div>
  <div class="meta"><b>Business Visa Signature</b><br>Statement period<br>
  08/01/2026 &ndash; 08/31/2026<br>Payment due 09/22/2026</div></div>''')
cc.append(f'''<div class="who"><div class="addr"><b>{B.COMPANY}</b><br>{B.ADDRESS}</div>
  <div class="acct">Account number &nbsp;<b>{B.CARD_MASK}</b><br>Credit limit &nbsp;<b>$60,000.00</b><br>
  Available credit &nbsp;<b>${25870.00:,.2f}</b></div></div>''')
cc.append(f'''<div class="summary"><table>
  <tr><td class="k">Previous balance</td><td class="r">{m(cc_prev)}</td></tr>
  <tr><td class="k">Payments and credits</td><td class="r">&minus;{m(cc_pay)}</td></tr>
  <tr><td class="k">Purchases and charges &nbsp;({len(cc_rows)})</td><td class="r">{m(cc_charges)}</td></tr>
  <tr><td class="k">Interest charged</td><td class="r">0.00</td></tr>
  <tr class="end"><td>New balance 08/31/2026</td><td class="r">{m(cc_new)}</td></tr>
  </table></div>''')
cc.append('<h2>Transactions</h2><table><tr><th style="width:88px">Date</th><th>Description</th>'
          '<th class="r" style="width:110px">Amount</th></tr>')
cc.append(f'<tr><td class="num">08/25/2026</td><td>PAYMENT RECEIVED &ndash; THANK YOU</td>'
          f'<td class="r">&minus;{m(cc_pay)}</td></tr>')
for r in cc_rows:
    cc.append(f'<tr><td class="num">{us(r["date"])}</td><td>{r["desc"]}</td>'
              f'<td class="r">{m(r["amount"])}</td></tr>')
cc.append(f'<tr class="tot"><td></td><td>New balance</td><td class="r">{m(cc_new)}</td></tr></table>')
cc.append('<div class="foot">Minimum payment due $1,706.50 by 09/22/2026. '
          'Paying only the minimum will increase the interest you pay and the time it takes to '
          'repay your balance.</div></div>')
pages.append("\n".join(cc))

html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Coastal First Bank statements — Jun–Aug 2026</title><style>{CSS}</style></head><body>
<div class="mock">Fictional documents — interview exercise only — no real bank, company or person</div>
{"".join(pages)}
</body></html>"""
open(f"{OUT}/05_Bank_Statements_Jun-Aug_2026.html", "w").write(html)
print("statements written:", f"{OUT}/05_Bank_Statements_Jun-Aug_2026.html")
for mo in ("06", "07", "08"):
    print(f"  checking {mo}: ending {d['bank_eom'][f'2026-{mo}']:>12,.2f}")
print(f"  savings 8/31: {R2(sav_open + sum(r['amount'] for r in sav_rows)):>12,.2f}")
print(f"  visa 8/31   : {cc_new:>12,.2f}")
