"""Emits the candidate test package from the mock books."""
import csv, os, datetime as dt
from collections import defaultdict, OrderedDict
import books as B
from engine import build, verify, pl, MONTHS, R2
from minixlsx import Workbook, Style

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "test-package"))
os.makedirs(OUT, exist_ok=True)

NAVY, SLATE, GREY, LINE = "1F3A5F", "334155", "64748B", "CBD5E1"
MONEY = "#,##0.00;(#,##0.00)"
H1 = Style(bold=True, size=14, color=NAVY)
H2 = Style(bold=True, size=11, color="FFFFFF", fill=NAVY)
SUB = Style(size=9, color=GREY)
BOLD = Style(bold=True)
M = Style(fmt=MONEY)
MB = Style(bold=True, fmt=MONEY)
MBT = Style(bold=True, fmt=MONEY, border_bottom=True)
SECT = Style(bold=True, color=SLATE)


def us(d):
    return f"{d[5:7]}/{d[8:10]}/{d[0:4]}"


def money_csv(x):
    return f"{x:.2f}"


d = build()
ok, fail = verify(d)
assert not fail, fail
txns, opening, ending, eom = d["txns"], d["opening"], d["ending"], d["eom"]

# ============================================================ 1. chart of accounts
with open(f"{OUT}/01_Chart_of_Accounts.csv", "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["Account Number", "Account Name", "Account Type", "Detail Type", "Description"])
    for num, name, typ, det, _, _ in B.ACCOUNTS:
        w.writerow([num, name, typ, det, ""])

# ================================================================ sub-ledger aging
def aging(entries, payments, asof="2026-08-31", terms=30):
    """FIFO-apply payments to invoices; return (buckets, open_items)."""
    entries = sorted(entries, key=lambda e: e[0])
    pool = sum(payments)
    items = []
    for date, num, amt in entries:
        if pool >= amt - 0.005:
            pool -= amt
            continue
        items.append((date, num, R2(amt - pool)))
        pool = 0.0
    credit = R2(-pool) if pool > 0.005 else 0.0
    buckets = [0.0] * 5
    a = dt.date.fromisoformat(asof)
    for date, num, amt in items:
        due = dt.date.fromisoformat(date) + dt.timedelta(days=terms)
        od = (a - due).days
        i = 0 if od <= 0 else 1 if od <= 30 else 2 if od <= 60 else 3 if od <= 90 else 4
        buckets[i] += amt
    if credit:
        buckets[0] += credit
    return [R2(b) for b in buckets], items, credit


def sub_ledger(control, opening_map, synth_date, prefix):
    inv, pay = defaultdict(list), defaultdict(list)
    for name, amt in opening_map.items():
        inv[name].append((synth_date, f"{prefix}-opening", amt))
    for t in txns:
        for a, amt in t["lines"]:
            if a != control:
                continue
            v = amt if control == "1200" else -amt
            if v > 0:
                inv[t["name"]].append((t["date"], t["num"] or t["type"], R2(v)))
            else:
                pay[t["name"]].append(R2(-v))
    rows = []
    for name in sorted(set(list(inv) + list(pay))):
        b, items, credit = aging(inv[name], pay[name])
        rows.append((name, b, items, credit))
    return rows


ar_rows = sub_ledger("1200", B.OPENING_AR, "2026-05-20", "Prior")
ap_rows = sub_ledger("2000", B.OPENING_AP, "2026-05-20", "Prior")

# ==================================================================== 2. workbook
wb = Workbook()


def head(sh, title, sub, widths):
    sh.set_widths(widths)
    sh.add([(B.COMPANY, H1)])
    sh.add([(title, Style(bold=True, size=12, color=SLATE))])
    sh.add([(sub, SUB)])
    sh.blank()


# ---- chart of accounts
sh = wb.sheet("Chart of Accounts")
head(sh, "Chart of Accounts", "As of August 31, 2026", [10, 42, 26, 34])
sh.add(["#", "Account", "Type", "Detail type"], H2)
for num, name, typ, det, _, _ in B.ACCOUNTS:
    sh.add([num, name, typ, det])
sh.freeze = "A6"

# ---- trial balance
sh = wb.sheet("Trial Balance")
head(sh, "Trial Balance", "As of August 31, 2026", [10, 42, 16, 16])
sh.add(["#", "Account", "Debit", "Credit"], H2)
td = tc = 0.0
for num, name, *_ in B.ACCOUNTS:
    v = R2(ending[num])
    if abs(v) < 0.005:
        continue
    sh.add([num, name, (v if v > 0 else None, M), (-v if v < 0 else None, M)])
    td += max(v, 0); tc += max(-v, 0)
sh.add([None, ("TOTAL", BOLD), (R2(td), MBT), (R2(tc), MBT)])
sh.freeze = "A6"

# ---- profit & loss
sh = wb.sheet("Profit and Loss")
head(sh, "Profit and Loss", "June - August 2026 (accrual basis)", [10, 40, 15, 15, 15, 16, 12])
sh.add(["#", "Account", "Jun 2026", "Jul 2026", "Aug 2026", "Total", "% Income"], H2)
P = {m: pl(d, m) for m, _ in MONTHS}


def prow(num, indent=""):
    vals = [P[m][num] for m, _ in MONTHS]
    tot = R2(sum(vals))
    if all(abs(v) < 0.005 for v in vals):
        vals = [0.0, 0.0, 0.0]
    inc8 = P["2026-08"]["4000"] + P["2026-08"]["4100"]
    pct = P["2026-08"][num] / inc8 if inc8 else 0
    sh.add([num, indent + B.ANAME[num]] + [(R2(v), M) for v in vals]
           + [(tot, M), (round(pct * 100, 1), Style(fmt='0.0"%"'))])
    return vals + [tot]


def total_row(label, vals, strong=False):
    st = Style(bold=True, size=11, color=NAVY) if strong else BOLD
    ms = Style(bold=True, fmt=MONEY, color=NAVY if strong else None, border_bottom=True)
    inc8 = P["2026-08"]["4000"] + P["2026-08"]["4100"]
    sh.add([None, (label, st)] + [(R2(v), ms) for v in vals]
           + [(round(vals[2] / inc8 * 100, 1) if inc8 else 0, Style(bold=True, fmt='0.0"%"'))])


def agg(nums):
    out = [0.0, 0.0, 0.0, 0.0]
    for n in nums:
        for i, m in enumerate([x[0] for x in MONTHS]):
            out[i] += P[m][n]
    out[3] = sum(out[:3])
    return out


sh.add([None, ("Income", SECT)])
for n in ("4000", "4100"):
    prow(n, "   ")
inc = agg(["4000", "4100"]); total_row("Total Income", inc)
sh.add([None, ("Cost of Goods Sold", SECT)])
cogs_n = ["5000", "5100", "5200", "5300", "5900"]
for n in cogs_n:
    prow(n, "   ")
cogs = agg(cogs_n); total_row("Total Cost of Goods Sold", cogs)
gp = [R2(inc[i] - cogs[i]) for i in range(4)]
total_row("GROSS PROFIT", gp, strong=True)
sh.blank()
sh.add([None, ("Expenses", SECT)])
exp_n = [a[0] for a in B.ACCOUNTS if a[4] == "PL" and a[0] >= "6000" and a[2] == "Expenses"]
for n in sorted(exp_n):
    prow(n, "   ")
exp = agg(sorted(exp_n)); total_row("Total Expenses", exp)
ni_op = [R2(gp[i] - exp[i]) for i in range(4)]
total_row("NET OPERATING INCOME", ni_op, strong=True)
sh.blank()
sh.add([None, ("Other Income", SECT)])
prow("8100", "   ")
oth = agg(["8100"]); total_row("Total Other Income", oth)
ni = [R2(ni_op[i] + oth[i]) for i in range(4)]
total_row("NET INCOME", ni, strong=True)
sh.blank()
sh.add([None, ("Gross margin %", BOLD)]
       + [(round(gp[i] / inc[i] * 100, 1), Style(bold=True, fmt='0.0"%"')) for i in range(3)]
       + [(round(gp[3] / inc[3] * 100, 1), Style(bold=True, fmt='0.0"%"'))])
sh.freeze = "A6"

# ---- balance sheet
sh = wb.sheet("Balance Sheet")
head(sh, "Balance Sheet", "As of June 30, July 31 and August 31, 2026", [10, 42, 16, 16, 16])
sh.add(["#", "Account", "Jun 30, 2026", "Jul 31, 2026", "Aug 31, 2026"], H2)


def bs_row(num, indent="   "):
    vals = [R2(-eom[m][num] if B.ANORMAL[num] == "C" else eom[m][num]) for m, _ in MONTHS]
    sh.add([num, indent + B.ANAME[num]] + [(v, M) for v in vals])
    return vals


def bagg(nums):
    tot = [0.0, 0.0, 0.0]
    for n in nums:
        for i, m in enumerate([x[0] for x in MONTHS]):
            tot[i] += R2(-eom[m][n] if B.ANORMAL[n] == "C" else eom[m][n])
    return [R2(t) for t in tot]


def btotal(label, vals, strong=False):
    st = Style(bold=True, size=11, color=NAVY) if strong else BOLD
    ms = Style(bold=True, fmt=MONEY, color=NAVY if strong else None, border_bottom=True)
    sh.add([None, (label, st)] + [(v, ms) for v in vals])


sh.add([None, ("ASSETS", SECT)])
sh.add([None, ("   Bank Accounts", Style(italic=True, color=GREY))])
for n in ("1000", "1010"):
    bs_row(n, "      ")
btotal("   Total Bank Accounts", bagg(["1000", "1010"]))
sh.add([None, ("   Other Current Assets", Style(italic=True, color=GREY))])
for n in ("1050", "1200", "1300", "1400"):
    bs_row(n, "      ")
btotal("   Total Other Current Assets", bagg(["1050", "1200", "1300", "1400"]))
cur = bagg(["1000", "1010", "1050", "1200", "1300", "1400"])
btotal("   Total Current Assets", cur)
sh.add([None, ("   Fixed Assets", Style(italic=True, color=GREY))])
for n in ("1500", "1510", "1590"):
    bs_row(n, "      ")
fx = bagg(["1500", "1510", "1590"]); btotal("   Total Fixed Assets", fx)
ta = [R2(cur[i] + fx[i]) for i in range(3)]
btotal("TOTAL ASSETS", ta, strong=True)
sh.blank()
sh.add([None, ("LIABILITIES AND EQUITY", SECT)])
sh.add([None, ("   Current Liabilities", Style(italic=True, color=GREY))])
for n in ("2000", "2100", "2200"):
    bs_row(n, "      ")
cl = bagg(["2000", "2100", "2200"]); btotal("   Total Current Liabilities", cl)
bs_row("2600", "   ")
ll = bagg(["2600"])
tl = [R2(cl[i] + ll[i]) for i in range(3)]
btotal("   Total Liabilities", tl)
sh.add([None, ("   Equity", Style(italic=True, color=GREY))])
for n in ("3000", "3900"):
    bs_row(n, "      ")
sh.add(["3100", "      " + B.ANAME["3100"]]
       + [(R2(-eom[m]["3100"]), M) for m, _ in MONTHS])
nis = []
cum = 0.0
for m, _ in MONTHS:
    p = pl(d, m)
    cum += sum(p[a] for a in p if a in ("4000", "4100", "8100")) - \
        sum(p[a] for a in p if a not in ("4000", "4100", "8100"))
    nis.append(R2(cum))
sh.add([None, ("      Net Income (cumulative from 06/01/2026)", None)] + [(v, M) for v in nis])
eq = [R2(bagg(["3000", "3900"])[i] - R2(eom[[x[0] for x in MONTHS][i]]["3100"]) + nis[i]) for i in range(3)]
btotal("   Total Equity", eq)
tle = [R2(tl[i] + eq[i]) for i in range(3)]
btotal("TOTAL LIABILITIES AND EQUITY", tle, strong=True)
sh.blank()
sh.add([None, ("Retained Earnings carries results through 05/31/2026. Net Income is cumulative "
               "from 06/01/2026, the first day of the ledger provided.", SUB)])
for i in range(3):
    assert abs(ta[i] - tle[i]) < 0.01, (i, ta[i], tle[i])
sh.freeze = "A6"

# ---- general ledger
sh = wb.sheet("General Ledger")
head(sh, "General Ledger", "June 1 - August 31, 2026 (accrual basis)",
     [11, 20, 11, 30, 46, 26, 14, 14, 15])
sh.add(["Date", "Transaction type", "Num", "Name", "Memo / Description",
        "Split", "Debit", "Credit", "Balance"], H2)
by_acct = defaultdict(list)
for t in txns:
    accs = [a for a, _ in t["lines"]]
    for a, amt in t["lines"]:
        others = [x for x in accs if x != a]
        split = B.ANAME[others[0]] if len(set(others)) == 1 else "-Split-"
        by_acct[a].append((t, amt, split))
ACCT_HDR = Style(bold=True, size=11, color="FFFFFF", fill=SLATE)
for num, name, *_ in B.ACCOUNTS:
    rows = by_acct.get(num, [])
    if not rows and abs(opening[num]) < 0.005:
        continue
    sh.add([(f"{num}  {name}", ACCT_HDR)] + [("", ACCT_HDR)] * 8)
    bal = opening[num]
    sh.add([None, ("Beginning balance", Style(italic=True, color=GREY))] + [None] * 5
           + [None, (R2(bal), Style(fmt=MONEY, italic=True))])
    tdb = tcr = 0.0
    for t, amt, split in rows:
        bal += amt
        tdb += max(amt, 0); tcr += max(-amt, 0)
        sh.add([us(t["date"]), t["type"], t["num"], t["name"], t["memo"], split,
                (R2(amt) if amt > 0 else None, M), (R2(-amt) if amt < 0 else None, M),
                (R2(bal), M)])
    sh.add([None, (f"Total for {name}", BOLD)] + [None] * 4
           + [(R2(tdb), MBT), (R2(tcr), MBT), (R2(bal), MBT)])
    sh.blank()
sh.freeze = "A6"

# ---- journal
sh = wb.sheet("Journal")
head(sh, "Journal", "June 1 - August 31, 2026", [11, 20, 11, 30, 46, 34, 14, 14])
sh.add(["Date", "Transaction type", "Num", "Name", "Memo / Description",
        "Account", "Debit", "Credit"], H2)
for t in txns:
    first = True
    for a, amt in t["lines"]:
        sh.add([us(t["date"]) if first else None, t["type"] if first else None,
                t["num"] if first else None, t["name"] if first else None,
                t["memo"] if first else None, f"{a} {B.ANAME[a]}",
                (R2(amt) if amt > 0 else None, M), (R2(-amt) if amt < 0 else None, M)])
        first = False
sh.freeze = "A6"

# ---- agings
def aging_sheet(title, rows, label):
    s = wb.sheet(title)
    head(s, title, "As of August 31, 2026  ·  terms Net 30", [34, 15, 15, 15, 15, 15, 16])
    s.add([label, "Current", "1 - 30", "31 - 60", "61 - 90", "91 and over", "TOTAL"], H2)
    tot = [0.0] * 6
    for name, b, items, credit in rows:
        t = R2(sum(b))
        if abs(t) < 0.005 and all(abs(x) < 0.005 for x in b):
            continue
        s.add([name or "(no name)"] + [(R2(x), M) for x in b] + [(t, MB)])
        for i in range(5):
            tot[i] += b[i]
        tot[5] += t
    s.add([("TOTAL", BOLD)] + [(R2(x), MBT) for x in tot])
    s.freeze = "A6"


aging_sheet("A-R Aging Summary", ar_rows, "Customer")
aging_sheet("A-P Aging Summary", ap_rows, "Vendor")

# ---- undeposited funds
sh = wb.sheet("Undeposited Funds")
head(sh, "Undeposited Funds detail", "As of August 31, 2026", [13, 34, 46, 16, 14])
sh.add(["Date received", "Customer", "Memo", "Amount", "Days held"], H2)
asof = dt.date(2026, 8, 31)
tot = 0.0
for date, name, memo, amt in sorted(d["uf"]):
    days = (asof - dt.date.fromisoformat(date)).days
    sh.add([us(date), name, memo, (amt, M), days])
    tot += amt
sh.add([None, ("TOTAL", BOLD), None, (R2(tot), MBT)])
sh.freeze = "A6"

# ---- July reconciliation report
sh = wb.sheet("Bank Rec - July 2026")
head(sh, "Reconciliation Report - Checking 4471",
     "Statement period ending July 31, 2026  ·  reconciled 08/04/2026 by M. Alvarez", [46, 18, 18])
jul_bank = d["bank_eom"]["2026-07"]
jun_bank = d["bank_eom"]["2026-06"]
reg_then = R2(eom["2026-07"]["1000"] - 3600)
cleared_dep = sum(b["amount"] for b in d["bank"] if b["date"][:7] == "2026-07" and b["amount"] > 0)
cleared_pmt = -sum(b["amount"] for b in d["bank"] if b["date"][:7] == "2026-07" and b["amount"] < 0)
for lab, val, st in [
    ("Statement beginning balance", jun_bank, M),
    ("Cleared deposits and other credits (6)", R2(cleared_dep), M),
    ("Cleared checks and payments (24)", R2(-cleared_pmt), M),
    ("Cleared balance", R2(jun_bank + cleared_dep - cleared_pmt), MB),
    ("Statement ending balance", jul_bank, MB),
    ("DIFFERENCE", R2(jul_bank - (jun_bank + cleared_dep - cleared_pmt)), MBT),
]:
    sh.add([lab, (val, st)])
sh.blank()
sh.add([("Uncleared transactions as of 07/31/2026", SECT)])
sh.add(["Date", "Type / Num", "Payee", "Amount"], H2)
sc = B.STALE_CHECK
sh.add([us(sc["date"]), f"Check {sc['num']}", sc["name"], (sc["amount"], M)])
sh.add([None, ("Total uncleared", BOLD), None, (sc["amount"], MBT)])
sh.blank()
sh.add([("Register balance as of 07/31/2026", BOLD), (reg_then, MB)])
sh.add([("Ending balance per reconciliation", BOLD), (jul_bank, MB)])

wb.save(f"{OUT}/02_QuickBooks_Reports_Jun-Aug_2026.xlsx")

# ================================================== 3. bank feed CSVs for import
def feed(rows, path):
    with open(path, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["Date", "Description", "Amount"])
        for r in rows:
            w.writerow([us(r["date"]), r["desc"], money_csv(r["amount"])])


bank = d["bank"]
feed([b for b in bank if b["date"][:7] == "2026-08"],
     f"{OUT}/03_Bank_Feed_Checking_4471_Aug_2026.csv")
feed(bank, f"{OUT}/03b_Bank_Feed_Checking_4471_Jun-Aug_2026.csv")

# credit card feed (August)
cc = []
for t in txns:
    if not t.get("card") or t["date"][:7] != "2026-08":
        continue
    amt = dict(t["lines"])["2100"]
    cc.append(dict(date=t["date"], desc=f"{t['name']}", amount=R2(amt)))
cc.append(dict(date="2026-08-25", desc="PAYMENT THANK YOU - ACH", amount=9340.00))
cc.sort(key=lambda x: x["date"])
feed(cc, f"{OUT}/04_Bank_Feed_Visa_2210_Aug_2026.csv")

print("workbook + CSVs written to", OUT)
print("bank checking 8/31 :", f"{d['bank_eom']['2026-08']:,.2f}")
print("books checking 8/31:", f"{ending['1000']:,.2f}")

# ============================== 5. flat transaction file for a bulk importer ===
with open(f"{OUT}/07_All_Transactions_for_Import.csv", "w", newline="") as fh:
    w = csv.writer(fh)
    w.writerow(["Date", "Transaction Type", "Ref/Num", "Name", "Memo",
                "Account Number", "Account Name", "Debit", "Credit"])
    for t in txns:
        for a, amt in t["lines"]:
            w.writerow([us(t["date"]), t["type"], t["num"], t["name"], t["memo"],
                        a, B.ANAME[a],
                        money_csv(amt) if amt > 0 else "",
                        money_csv(-amt) if amt < 0 else ""])

with open(f"{OUT}/08_Opening_Balances_06-01-2026.csv", "w", newline="") as fh:
    w = csv.writer(fh)
    w.writerow(["Account Number", "Account Name", "Debit", "Credit"])
    for num, name, *_ in B.ACCOUNTS:
        v = R2(opening[num])
        if abs(v) < 0.005:
            continue
        w.writerow([num, name, money_csv(v) if v > 0 else "", money_csv(-v) if v < 0 else ""])
print("wrote 07_All_Transactions_for_Import.csv + 08_Opening_Balances_06-01-2026.csv")
