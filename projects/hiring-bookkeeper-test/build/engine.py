"""Posts the books, derives the bank's view, and asserts every design target."""
import books as B
from collections import defaultdict, OrderedDict

R2 = lambda x: round(x + 0.0, 2)
MONTHS = [("2026-06", "Jun 2026"), ("2026-07", "Jul 2026"), ("2026-08", "Aug 2026")]


def build():
    txns = sorted(B.T, key=lambda t: (t["date"], t["type"], t["num"] or "", t["name"]))

    # ---- pass 1: net movement, to solve the two opening plugs -----------------
    move = defaultdict(float)
    for t in txns:
        for a, amt in t["lines"]:
            move[a] += amt

    opening = dict(B.OPENING)
    opening["1000"] = R2(110000.00 - move["1000"])      # checking must end at 110,000
    opening["3900"] = 0.0
    plug = -sum(opening.values())                        # opening TB must balance
    opening["3900"] = R2(plug)
    for a, _, _, _, _, _ in B.ACCOUNTS:
        opening.setdefault(a, 0.0)

    # ---- balances -------------------------------------------------------------
    bal = {a: opening[a] for a in opening}
    by_month = {m: defaultdict(float) for m, _ in MONTHS}
    eom = OrderedDict()
    cur = 0
    for t in txns:
        m = t["date"][:7]
        for a, amt in t["lines"]:
            bal[a] += amt
            by_month[m][a] += amt
    # month-end balances
    run = dict(opening)
    for m, _ in MONTHS:
        for a in run:
            run[a] += by_month[m][a]
        eom[m] = dict(run)

    ending = dict(run)

    # ---- sub-ledgers ----------------------------------------------------------
    ar = defaultdict(float, B.OPENING_AR)
    ap = defaultdict(float, B.OPENING_AP)
    for t in txns:
        for a, amt in t["lines"]:
            if a == "1200":
                ar[t["name"]] += amt
            if a == "2000":
                ap[t["name"]] -= amt          # A/P credit-normal -> show positive owed
    uf = list(B.OPENING_UF)
    for t in txns:
        if t.get("hold"):
            uf.append((t["date"], t["name"], t["memo"], R2(dict(t["lines"])["1050"])))

    # ---- the bank's own view of the checking account --------------------------
    bank = []
    for t in txns:
        amt = dict((a, v) for a, v in t["lines"]).get("1000")
        if amt is None or not t.get("bank"):
            continue
        bk = t["bank"]
        if bk.get("skip"):
            continue
        bank.append(dict(date=bk.get("date", t["date"]),
                         desc=bk.get("desc", t["type"].upper()),
                         amount=R2(-bk["amount"] if (bk.get("amount") and amt < 0)
                                   else (bk.get("amount") or amt)),
                         num=t["num"]))
    bank += [dict(d, num="") for d in B.BANK_ONLY]
    # the stale check left the books before June but never reached the bank
    bank = [b for b in bank if b["date"] <= "2026-08-31"]
    bank.sort(key=lambda b: (b["date"], -abs(b["amount"])))

    bank_open = R2(opening["1000"] + B.STALE_CHECK["amount"])
    bstate, brun = OrderedDict(), bank_open
    for m, _ in MONTHS:
        for b in bank:
            if b["date"][:7] == m:
                brun += b["amount"]
        bstate[m] = R2(brun)

    return dict(txns=txns, opening=opening, by_month=by_month, eom=eom,
                ending=ending, ar=dict(ar), ap=dict(ap), uf=uf,
                bank=bank, bank_open=bank_open, bank_eom=bstate)


def pl(d, m):
    """Signed P&L amounts for one month, income positive."""
    out = {}
    for a, *_ in ((x[0],) for x in B.ACCOUNTS):
        pass
    for acc in B.ACCOUNTS:
        a = acc[0]
        if B.ASTMT[a] != "PL":
            continue
        v = d["by_month"][m][a]
        out[a] = R2(-v if B.ANORMAL[a] == "C" else v)
    return out


def verify(d):
    ok, fail = [], []

    def chk(label, got, want, tol=0.005):
        got, want = R2(got), R2(want)
        (ok if abs(got - want) < tol else fail).append((label, got, want))

    e = d["ending"]
    chk("Checking 8/31", e["1000"], 110000)
    chk("A/R 8/31", e["1200"], -7000)
    chk("Undeposited Funds 8/31", e["1050"], 43000)
    chk("A/P 8/31", -e["2000"], -1930)
    chk("Ask My Accountant 8/31", e["1300"], 16000)
    chk("Equipment loan 8/31", -e["2600"], 185000)
    chk("Payroll liabilities 8/31", -e["2200"], 27480)
    chk("Credit card 8/31", -e["2100"], 43470)
    chk("Fixed assets unchanged", d["by_month"]["2026-08"]["1500"] + d["by_month"]["2026-08"]["1510"], 0)
    chk("Trial balance ends balanced", sum(e.values()), 0)
    chk("Opening TB balanced", sum(d["opening"].values()), 0)
    chk("UF detail ties", sum(u[3] for u in d["uf"]), 43000)
    chk("A/R sub-ledger ties", sum(d["ar"].values()), -7000)
    chk("A/P sub-ledger ties", sum(d["ap"].values()), -1930)

    tgt = {"2026-06": (210000, 121800, 42.0), "2026-07": (215000, 129000, 40.0),
           "2026-08": (225000, 182250, 19.0)}
    for m, _ in MONTHS:
        p = pl(d, m)
        inc = p["4000"] + p["4100"]
        cogs = sum(p[a] for a in ("5000", "5100", "5200", "5300", "5900"))
        ti, tc, tg = tgt[m]
        chk(f"{m} income", inc, ti)
        chk(f"{m} COGS", cogs, tc)
        chk(f"{m} gross margin %", round((inc - cogs) / inc * 100, 1), tg, tol=0.051)
    p8 = pl(d, "2026-08")
    chk("Aug repairs", p8["6600"], 37000)
    chk("Aug professional fees", p8["6400"], 18000)
    chk("Aug uncategorized expense", p8["8000"], 4375)
    chk("Aug interest expense", p8["9000"], 0)
    chk("Aug depreciation", p8["9100"], 0)
    chk("Aug insurance expense", p8["6200"], 0)
    chk("Aug office supplies", p8["6300"], 11880)
    chk("Aug vehicle & fuel", p8["6900"], 15050)
    chk("Aug meals", p8["7500"], 5420)
    chk("Aug other income", p8["8100"], 2600)

    # reconciliation proof
    adj = (110000
           + B.STALE_CHECK["amount"] + 2340 + 1130      # outstanding checks
           - 10250                                      # deposit in transit
           + 4820                                       # duplicate ACH not at bank
           - 18500                                      # duplicate deposit not at bank
           - 180                                        # check 2122 cleared 180 higher
           - 48                                         # unrecorded bank fee
           - 3600)                                      # July check edited down
    chk("Bank 8/31 = books +/- seeded items", d["bank_eom"]["2026-08"], adj)
    return ok, fail


if __name__ == "__main__":
    d = build()
    ok, fail = verify(d)
    for l, g, w in ok:
        print(f"  OK   {l:<42} {g:>14,.2f}")
    for l, g, w in fail:
        print(f"  FAIL {l:<42} got {g:>13,.2f}  want {w:>13,.2f}")
    print(f"\n{len(ok)} passed, {len(fail)} failed")
    print(f"\nOpening checking 6/1 : {d['opening']['1000']:>14,.2f}")
    print(f"Opening ret. earnings: {d['opening']['3900']:>14,.2f}")
    print(f"Bank opening 6/1     : {d['bank_open']:>14,.2f}")
    for m, lbl in MONTHS:
        print(f"{lbl}: books {d['eom'][m]['1000']:>12,.2f}   bank {d['bank_eom'][m]:>12,.2f}"
              f"   diff {d['eom'][m]['1000']-d['bank_eom'][m]:>11,.2f}")
