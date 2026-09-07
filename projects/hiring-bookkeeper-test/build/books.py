"""Coastal Ridge Builders LLC - mock books for the overseas bookkeeper test.

Defines the chart of accounts, the 6/1/2026 opening balances and every
transaction for June, July and August 2026, then derives the bank's own view of
the checking account (which deliberately DIFFERS from the books in exactly the
ways the interview test wants seeded).

Nothing here is real. No client data.
"""

COMPANY = "Coastal Ridge Builders LLC"
EIN = "XX-XXXXXXX"
ADDRESS = "1840 SW 27th Terrace, Suite 210, Fort Lauderdale, FL 33312"
BANK = "Coastal First Bank, N.A."
CHECKING_MASK = "****4471"
SAVINGS_MASK = "****8802"
CARD_MASK = "****2210"

# ---------------------------------------------------------------- accounts ---
# num, name, type, detail type, statement (BS/PL), normal side (D/C)
ACCOUNTS = [
    ("1000", "Checking - Coastal First Bank 4471", "Bank", "Checking", "BS", "D"),
    ("1010", "Savings - Coastal First Bank 8802", "Bank", "Savings", "BS", "D"),
    ("1050", "Undeposited Funds", "Other Current Assets", "Undeposited Funds", "BS", "D"),
    ("1200", "Accounts Receivable (A/R)", "Accounts receivable", "Accounts Receivable (A/R)", "BS", "D"),
    ("1300", "Ask My Accountant", "Other Current Assets", "Other Current Assets", "BS", "D"),
    ("1400", "Prepaid Insurance", "Other Current Assets", "Prepaid Expenses", "BS", "D"),
    ("1500", "Equipment", "Fixed Assets", "Machinery & Equipment", "BS", "D"),
    ("1510", "Vehicles", "Fixed Assets", "Vehicles", "BS", "D"),
    ("1590", "Accumulated Depreciation", "Fixed Assets", "Accumulated Depreciation", "BS", "D"),
    ("2000", "Accounts Payable (A/P)", "Accounts payable", "Accounts Payable (A/P)", "BS", "C"),
    ("2100", "Coastal First Visa 2210", "Credit Card", "Credit Card", "BS", "C"),
    ("2200", "Payroll Liabilities", "Other Current Liabilities", "Payroll Tax Payable", "BS", "C"),
    ("2600", "Equipment Loan - Coastal First Bank", "Long Term Liabilities", "Notes Payable", "BS", "C"),
    ("3000", "Member Equity", "Equity", "Owner's Equity", "BS", "C"),
    ("3100", "Owner's Draw", "Equity", "Owner's Equity", "BS", "D"),
    ("3900", "Retained Earnings", "Equity", "Retained Earnings", "BS", "C"),
    ("4000", "Construction Income", "Income", "Service/Fee Income", "PL", "C"),
    ("4100", "Service & Repair Income", "Income", "Service/Fee Income", "PL", "C"),
    ("5000", "Job Materials", "Cost of Goods Sold", "Supplies & Materials - COGS", "PL", "D"),
    ("5100", "Subcontractors", "Cost of Goods Sold", "Cost of Labor - COGS", "PL", "D"),
    ("5200", "Direct Labor", "Cost of Goods Sold", "Cost of Labor - COGS", "PL", "D"),
    ("5300", "Equipment Rental", "Cost of Goods Sold", "Equipment Rental - COGS", "PL", "D"),
    ("5900", "Job Supplies", "Cost of Goods Sold", "Supplies & Materials - COGS", "PL", "D"),
    ("6000", "Advertising & Marketing", "Expenses", "Advertising/Promotional", "PL", "D"),
    ("6100", "Bank Charges & Fees", "Expenses", "Bank Charges", "PL", "D"),
    ("6200", "Insurance", "Expenses", "Insurance", "PL", "D"),
    ("6300", "Office Supplies & Software", "Expenses", "Office/General Administrative Expenses", "PL", "D"),
    ("6400", "Professional Fees", "Expenses", "Legal & Professional Fees", "PL", "D"),
    ("6500", "Rent & Lease", "Expenses", "Rent or Lease of Buildings", "PL", "D"),
    ("6600", "Repairs & Maintenance", "Expenses", "Repair & Maintenance", "PL", "D"),
    ("6700", "Telephone & Internet", "Expenses", "Utilities", "PL", "D"),
    ("6800", "Utilities", "Expenses", "Utilities", "PL", "D"),
    ("6900", "Vehicle & Fuel", "Expenses", "Auto", "PL", "D"),
    ("7000", "Office Wages", "Expenses", "Payroll Expenses", "PL", "D"),
    ("7100", "Payroll Taxes", "Expenses", "Taxes Paid", "PL", "D"),
    ("7500", "Meals & Entertainment", "Expenses", "Entertainment Meals", "PL", "D"),
    ("8000", "Uncategorized Expense", "Expenses", "Other Miscellaneous Service Cost", "PL", "D"),
    ("9000", "Interest Expense", "Expenses", "Interest Paid", "PL", "D"),
    ("9100", "Depreciation Expense", "Expenses", "Depreciation", "PL", "D"),
    ("8100", "Uncategorized Income", "Other Income", "Other Miscellaneous Income", "PL", "C"),
]
ANAME = {a[0]: a[1] for a in ACCOUNTS}
ATYPE = {a[0]: a[2] for a in ACCOUNTS}
ASTMT = {a[0]: a[4] for a in ACCOUNTS}
ANORMAL = {a[0]: a[5] for a in ACCOUNTS}

# --------------------------------------------------------- opening balances ---
# 6/1/2026.  "1000" and "3900" are computed plugs - see build().
OPENING = {
    "1010": 25000.00,
    "1050": 12500.00,
    "1200": 148000.00,
    "1400": 9600.00,
    "1500": 186400.00,
    "1510": 92750.00,
    "1590": -118300.00,
    "2000": -46000.00,
    "2100": -14280.00,
    "2200": -27480.00,
    "1300": 0.00,
    "2600": -196550.00,
    "3000": -85000.00,
    "3100": 60000.00,
}
OPENING_AR = {  # customer sub-ledger at 6/1
    "Harbor Point Development": 54000.00,
    "Coral Bay Homes": 38000.00,
    "Seaside Renovations": 26000.00,
    "Meridian Property Group": 18000.00,
    "Palmetto Partners LLC": 12000.00,
}
OPENING_AP = {  # vendor sub-ledger at 6/1
    "Rivera Concrete LLC": 15000.00,
    "Peninsula Sitework LLC": 11000.00,
    "Delgado Framing Inc": 8000.00,
    "Gulf Coast Building Supply": 12000.00,
}
# Undeposited Funds sitting at 6/1 (received 5/22, never deposited)
OPENING_UF = [("2026-05-22", "Coral Bay Homes", "Check 8841 - draw #4", 12500.00)]

# Outstanding at 6/1: check written 3/14/2026, never presented.
STALE_CHECK = {"date": "2026-03-14", "num": "2041",
               "name": "Peninsula Sitework LLC",
               "memo": "Final retainage - Mangrove Cove", "amount": 3275.00}

T = []   # transactions


def tx(date, ttype, num, name, memo, lines, bank=None, card=None):
    """lines: list of (account, amount) - debit positive, credit negative."""
    assert abs(sum(a for _, a in lines)) < 0.005, (date, ttype, name, lines)
    T.append(dict(date=date, type=ttype, num=num, name=name, memo=memo,
                  lines=lines, bank=bank, card=card))


def invoice(date, num, cust, acct, amt, memo):
    tx(date, "Invoice", num, cust, memo, [("1200", amt), (acct, -amt)])


def payment(date, cust, memo, amt, hold=False):
    """Receive Payment -> Undeposited Funds.  hold=True: never deposited."""
    tx(date, "Payment", "", cust, memo, [("1050", amt), ("1200", -amt)])
    if hold:
        T[-1]["hold"] = True


def deposit(date, cust, memo, amt, bank=None):
    tx(date, "Deposit", "", cust, memo, [("1000", amt), ("1050", -amt)], bank=bank)


def bill(date, num, vend, acct, amt, memo):
    tx(date, "Bill", num, vend, memo, [(acct, amt), ("2000", -amt)])


def billpmt(date, num, vend, amt, memo, bank=None):
    ttype = "Bill Payment (Check)" if num else "Bill Payment (Check)"
    tx(date, ttype, num, vend, memo, [("2000", amt), ("1000", -amt)], bank=bank)


def spend(date, ttype, num, name, acct, amt, memo, bank=None):
    """Money out of checking, coded straight to an account."""
    tx(date, ttype, num, name, memo, [(acct, amt), ("1000", -amt)], bank=bank)


def ccharge(date, name, acct, amt, memo):
    tx(date, "Credit Card Expense", "", name, memo,
       [(acct, amt), ("2100", -amt)], card=dict(desc=memo))


# =============================================================== JUNE 2026 ===
invoice("2026-06-05", "1841", "Harbor Point Development", "4000", 68000, "Progress billing #4 - Harbor Point Phase II")
invoice("2026-06-10", "1842", "Coral Bay Homes", "4000", 52000, "Progress billing #3 - Coral Bay Lot 14")
invoice("2026-06-17", "1843", "Seaside Renovations", "4000", 45000, "Progress billing #2 - Seaside Clubhouse")
invoice("2026-06-24", "1844", "Palmetto Partners LLC", "4000", 30000, "Progress billing #1 - Palmetto Bay sitework")
invoice("2026-06-29", "1845", "Meridian Property Group", "4100", 15000, "June service & repair calls")

for d, c, m, a, *h in [
    ("2026-06-03", "Harbor Point Development", "ACH - inv 1836", 58000),
    ("2026-06-09", "Coral Bay Homes", "Check 8907 - inv 1837", 47500),
    ("2026-06-12", "Meridian Property Group", "ACH - inv 1838", 36000),
    ("2026-06-18", "Seaside Renovations", "Check 4412 - inv 1839", 9800, True),
    ("2026-06-19", "Palmetto Partners LLC", "ACH - inv 1840", 41700),
    ("2026-06-23", "Harbor Point Development", "ACH - inv 1841 partial", 39000),
    ("2026-06-26", "Coral Bay Homes", "Check 8955 - inv 1842 partial", 30000),
]:
    payment(d, c, m, a, hold=bool(h and h[0]))

for d, c, a in [("2026-06-04", "Harbor Point Development", 58000),
                ("2026-06-10", "Coral Bay Homes", 47500),
                ("2026-06-12", "Meridian Property Group", 36000),
                ("2026-06-19", "Palmetto Partners LLC", 41700),
                ("2026-06-24", "Harbor Point Development", 39000),
                ("2026-06-26", "Coral Bay Homes", 30000)]:
    deposit(d, c, "Bank deposit", a, bank=dict(desc="DEPOSIT"))

bill("2026-06-08", "RC-2261", "Rivera Concrete LLC", "5100", 16800, "Foundation & flatwork - Harbor Point")
bill("2026-06-15", "PS-1140", "Peninsula Sitework LLC", "5100", 14500, "Excavation - Coral Bay Lot 14")
bill("2026-06-22", "DF-3078", "Delgado Framing Inc", "5100", 10000, "Framing labor - Seaside Clubhouse")
bill("2026-06-26", "GC-77412", "Gulf Coast Building Supply", "5000", 30000, "Lumber & fasteners - June account")

billpmt("2026-06-05", "2101", "Rivera Concrete LLC", 22000, "Pay bill RC-2214", bank=dict(desc="CHECK 2101"))
billpmt("2026-06-12", "2102", "Gulf Coast Building Supply", 28500, "Pay bill GC-76988", bank=dict(desc="CHECK 2102"))
billpmt("2026-06-19", "2103", "Peninsula Sitework LLC", 18700, "Pay bill PS-1102", bank=dict(desc="CHECK 2103"))
billpmt("2026-06-26", "2104", "Delgado Framing Inc", 12800, "Pay bill DF-2990", bank=dict(desc="CHECK 2104"))
billpmt("2026-06-30", "", "Gulf Coast Building Supply", 10000, "ACH on account",
        bank=dict(desc="ACH DEBIT GULF COAST BLDG SUP"))

spend("2026-06-03", "Expense", "", "Southern Lumber & Truss", "5000", 8400, "Truss package - Coral Bay", bank=dict(desc="DEBIT CARD PURCHASE SOUTHERN LUMBER"))
spend("2026-06-11", "Expense", "", "Bayview Concrete Products", "5000", 6200, "Ready-mix - Harbor Point", bank=dict(desc="DEBIT CARD PURCHASE BAYVIEW CONCRETE"))
spend("2026-06-25", "Expense", "", "Tri-County Steel", "5000", 3300, "Rebar & mesh", bank=dict(desc="DEBIT CARD PURCHASE TRI COUNTY STEEL"))
ccharge("2026-06-17", "Gulf Coast Building Supply LLC", "5000", 4100, "Misc materials - card")

spend("2026-06-09", "Expense", "", "United Rentals", "5300", 2700, "Excavator rental - 2 weeks", bank=dict(desc="ACH DEBIT UNITED RENTALS"))
spend("2026-06-23", "Expense", "", "Sunbelt Rentals", "5300", 1800, "Lift rental", bank=dict(desc="ACH DEBIT SUNBELT RENTALS"))
ccharge("2026-06-06", "Home Depot Pro", "5900", 1450, "Job supplies - blades, fasteners")
ccharge("2026-06-20", "Lowe's Pro", "5900", 1550, "Job supplies - safety & consumables")

ccharge("2026-06-02", "Meta / Google Ads", "6000", 1200, "June ad spend")
spend("2026-06-30", "Expense", "", BANK, "6100", 95, "Account analysis fee", bank=dict(desc="SERVICE CHARGE"))
ccharge("2026-06-04", "Amazon Business", "6300", 480, "Office supplies")
ccharge("2026-06-16", "Intuit / Microsoft 365", "6300", 670, "Software subscriptions")
spend("2026-06-10", "Check", "2105", "Sunshine CPA Group", "6400", 950, "Monthly accounting", bank=dict(desc="CHECK 2105"))
spend("2026-06-01", "Expense", "", "Palm Ridge Commercial", "6500", 4500, "June yard & office rent", bank=dict(desc="ACH DEBIT PALM RIDGE COMM"))
ccharge("2026-06-12", "Tri County Diesel", "6600", 1600, "Service - F-550 #3")
spend("2026-06-24", "Check", "2106", "Ace Mobile Truck Repair", "6600", 1150, "Brake service - dump truck", bank=dict(desc="CHECK 2106"))
ccharge("2026-06-05", "Comcast Business", "6700", 685, "Internet & phone")
spend("2026-06-08", "Expense", "", "Florida Power & Light", "6800", 1240, "Yard & office electric", bank=dict(desc="ACH DEBIT FPL DIRECTDEBIT"))
ccharge("2026-06-30", "WEX Fleet", "6900", 2820, "Fuel - June")
ccharge("2026-06-18", "Various - job site meals", "7500", 540, "Crew meals")

tx("2026-06-30", "Journal Entry", "JE-0601", "Gusto Payroll", "June payroll",
   [("5200", 21000), ("7000", 12000), ("7100", 3900), ("1000", -33000), ("2200", -3900)],
   bank=dict(desc="GUSTO PAYROLL 060126"))
spend("2026-06-15", "Expense", "", "EFTPS", "2200", 3900, "May payroll tax deposit", bank=dict(desc="ACH DEBIT EFTPS TAX PYMT"))

spend("2026-06-15", "Expense", "", BANK, "2600", 3850, "Equipment loan payment", bank=dict(desc="ACH DEBIT COASTAL FIRST LOAN PMT"))
spend("2026-06-20", "Expense", "", "Coastal First Visa 2210", "2100", 14280, "Credit card payment", bank=dict(desc="ACH DEBIT COASTAL FIRST VISA PMT"))
spend("2026-06-28", "Expense", "", "Owner", "3100", 12000, "Owner distribution", bank=dict(desc="ACH DEBIT ONLINE XFER TO DDA 9902"))
spend("2026-06-30", "Expense", "", "Unknown", "1300", 2400, "Unidentified ACH - needs review", bank=dict(desc="ACH DEBIT PTC*BILLING 8827"))

# =============================================================== JULY 2026 ===
invoice("2026-07-06", "1846", "Harbor Point Development", "4000", 72000, "Progress billing #5 - Harbor Point Phase II")
invoice("2026-07-13", "1847", "Coral Bay Homes", "4000", 48000, "Progress billing #4 - Coral Bay Lot 14")
invoice("2026-07-20", "1848", "Meridian Property Group", "4000", 46000, "Progress billing #1 - Meridian warehouse")
invoice("2026-07-27", "1849", "Palmetto Partners LLC", "4000", 32000, "Progress billing #2 - Palmetto Bay sitework")
invoice("2026-07-31", "1850", "Seaside Renovations", "4100", 17000, "July service & repair calls")

for d, c, m, a, *h in [
    ("2026-07-02", "Harbor Point Development", "ACH - inv 1841 balance", 61000),
    ("2026-07-08", "Coral Bay Homes", "Check 9012 - inv 1842 balance", 44000),
    ("2026-07-14", "Seaside Renovations", "ACH - inv 1843", 52500),
    ("2026-07-17", "Meridian Property Group", "ACH - inv 1845", 38000),
    ("2026-07-22", "Palmetto Partners LLC", "ACH - inv 1844", 34800),
    ("2026-07-29", "Palmetto Partners LLC", "Check 2207 - inv 1849 deposit", 6700, True),
    ("2026-07-30", "Harbor Point Development", "ACH - inv 1846 partial", 31000),
]:
    payment(d, c, m, a, hold=bool(h and h[0]))

for d, c, a in [("2026-07-02", "Harbor Point Development", 61000),
                ("2026-07-09", "Coral Bay Homes", 44000),
                ("2026-07-15", "Seaside Renovations", 52500),
                ("2026-07-17", "Meridian Property Group", 38000),
                ("2026-07-23", "Palmetto Partners LLC", 34800),
                ("2026-07-31", "Harbor Point Development", 31000)]:
    deposit(d, c, "Bank deposit", a, bank=dict(desc="DEPOSIT"))

bill("2026-07-09", "RC-2318", "Rivera Concrete LLC", "5100", 18200, "Slab & curbs - Meridian")
bill("2026-07-16", "PS-1188", "Peninsula Sitework LLC", "5100", 15400, "Site clearing - Palmetto Bay")
bill("2026-07-23", "DF-3141", "Delgado Framing Inc", "5100", 10000, "Framing labor - Coral Bay")
bill("2026-07-28", "GC-78033", "Gulf Coast Building Supply", "5000", 32000, "Lumber & hardware - July account")

billpmt("2026-07-07", "2110", "Gulf Coast Building Supply", 24000, "Pay bill GC-77412 partial", bank=dict(desc="CHECK 2110"))
billpmt("2026-07-14", "2111", "Rivera Concrete LLC", 16800, "Pay bill RC-2261", bank=dict(desc="CHECK 2111"))
billpmt("2026-07-21", "2112", "Peninsula Sitework LLC", 14500, "Pay bill PS-1140", bank=dict(desc="CHECK 2112"))
# --- SEEDED: reconciled July check later edited from 8,400.00 down to 4,800.00
billpmt("2026-07-24", "2113", "Rivera Concrete LLC", 4800, "Pay bill RC-2318 partial",
        bank=dict(desc="CHECK 2113", amount=8400))
billpmt("2026-07-28", "2114", "Delgado Framing Inc", 12900, "Pay bill DF-3078", bank=dict(desc="CHECK 2114"))
billpmt("2026-07-31", "", "Gulf Coast Building Supply", 15000, "ACH on account",
        bank=dict(desc="ACH DEBIT GULF COAST BLDG SUP"))

spend("2026-07-06", "Expense", "", "Southern Lumber & Truss", "5000", 9100, "Truss & panel package", bank=dict(desc="DEBIT CARD PURCHASE SOUTHERN LUMBER"))
spend("2026-07-13", "Expense", "", "Bayview Concrete Products", "5000", 6800, "Ready-mix - Meridian", bank=dict(desc="DEBIT CARD PURCHASE BAYVIEW CONCRETE"))
spend("2026-07-27", "Expense", "", "Tri-County Steel", "5000", 3300, "Rebar", bank=dict(desc="DEBIT CARD PURCHASE TRI COUNTY STEEL"))
ccharge("2026-07-20", "Gulf Coast Building Supply LLC", "5000", 4200, "Misc materials - card")

spend("2026-07-10", "Expense", "", "United Rentals", "5300", 3200, "Excavator & compactor", bank=dict(desc="ACH DEBIT UNITED RENTALS"))
spend("2026-07-24", "Expense", "", "Sunbelt Rentals", "5300", 1800, "Lift rental", bank=dict(desc="ACH DEBIT SUNBELT RENTALS"))
ccharge("2026-07-07", "Home Depot Pro", "5900", 1600, "Job supplies")
ccharge("2026-07-21", "Lowe's Pro", "5900", 1400, "Job supplies")

ccharge("2026-07-02", "Meta / Google Ads", "6000", 1200, "July ad spend")
spend("2026-07-31", "Expense", "", BANK, "6100", 110, "Account analysis fee", bank=dict(desc="SERVICE CHARGE"))
ccharge("2026-07-06", "Amazon Business", "6300", 545, "Office supplies")
ccharge("2026-07-16", "Intuit / Microsoft 365", "6300", 695, "Software subscriptions")
spend("2026-07-10", "Check", "2115", "Sunshine CPA Group", "6400", 1100, "Monthly accounting", bank=dict(desc="CHECK 2115"))
spend("2026-07-01", "Expense", "", "Palm Ridge Commercial", "6500", 4500, "July yard & office rent", bank=dict(desc="ACH DEBIT PALM RIDGE COMM"))
ccharge("2026-07-11", "Tri-County Diesel", "6600", 2150, "Hydraulic hose & service - excavator")
spend("2026-07-25", "Check", "2116", "Ace Mobile Truck Repair", "6600", 1250, "Tires - service truck", bank=dict(desc="CHECK 2116"))
ccharge("2026-07-06", "Comcast Business", "6700", 685, "Internet & phone")
spend("2026-07-08", "Expense", "", "Florida Power & Light", "6800", 1390, "Yard & office electric", bank=dict(desc="ACH DEBIT FPL DIRECTDEBIT"))
ccharge("2026-07-31", "WEX Fleet", "6900", 2960, "Fuel - July")
ccharge("2026-07-17", "Various - job site meals", "7500", 615, "Crew meals")

tx("2026-07-31", "Journal Entry", "JE-0701", "Gusto Payroll", "July payroll",
   [("5200", 22000), ("7000", 12000), ("7100", 3900), ("1000", -34000), ("2200", -3900)],
   bank=dict(desc="GUSTO PAYROLL 070126"))
spend("2026-07-15", "Expense", "", "EFTPS", "2200", 3900, "June payroll tax deposit", bank=dict(desc="ACH DEBIT EFTPS TAX PYMT"))

spend("2026-07-15", "Expense", "", BANK, "2600", 3850, "Equipment loan payment", bank=dict(desc="ACH DEBIT COASTAL FIRST LOAN PMT"))
spend("2026-07-20", "Expense", "", "Coastal First Visa 2210", "2100", 15095, "Credit card payment", bank=dict(desc="ACH DEBIT COASTAL FIRST VISA PMT"))
spend("2026-07-26", "Expense", "", "Owner", "3100", 12000, "Owner distribution", bank=dict(desc="ACH DEBIT ONLINE XFER TO DDA 9902"))
spend("2026-07-22", "Expense", "", "SRE Holdings", "1300", 5600, "Outgoing wire - purpose unknown", bank=dict(desc="WIRE OUT SRE HOLDINGS LLC"))

# ============================================================= AUGUST 2026 ===
invoice("2026-08-05", "1851", "Harbor Point Development", "4000", 76000, "Progress billing #6 - Harbor Point Phase II")
invoice("2026-08-12", "1852", "Coral Bay Homes", "4000", 54000, "Progress billing #5 - Coral Bay Lot 14")
invoice("2026-08-19", "1853", "Meridian Property Group", "4000", 48000, "Progress billing #2 - Meridian warehouse")
invoice("2026-08-26", "1854", "Palmetto Partners LLC", "4000", 32000, "Progress billing #3 - Palmetto Bay sitework")
invoice("2026-08-31", "1855", "Coral Bay Homes", "4100", 15000, "August service & repair calls")

for d, c, m, a, *h in [
    ("2026-08-04", "Coral Bay Homes", "ACH - inv 1847", 47000),
    ("2026-08-08", "Harbor Point Development", "Check 5521 - inv 1846 balance", 18500),
    ("2026-08-11", "Harbor Point Development", "Check 5521 - inv 1846 balance", 18500),   # SEEDED duplicate
    ("2026-08-13", "Harbor Point Development", "ACH - inv 1851 partial", 42000),
    ("2026-08-18", "Seaside Renovations", "ACH - inv 1850 + advance", 34700),
    ("2026-08-19", "Palmetto Partners LLC", "ACH - inv 1849 balance", 30300),
    ("2026-08-21", "Meridian Property Group", "ACH - inv 1848", 35250),
    ("2026-08-25", "Coral Bay Homes", "Check 9188 - inv 1852 partial", 24500),
    ("2026-08-28", "Harbor Point Development", "Check 5560 - inv 1851 partial", 14000, True),
    ("2026-08-31", "Meridian Property Group", "ACH - inv 1853 partial", 10250),
]:
    payment(d, c, m, a, hold=bool(h and h[0]))

deposit("2026-08-04", "Coral Bay Homes", "Bank deposit", 47000, bank=dict(desc="DEPOSIT"))
deposit("2026-08-08", "Harbor Point Development", "Bank deposit", 18500, bank=dict(desc="DEPOSIT"))
deposit("2026-08-11", "Harbor Point Development", "Bank deposit", 18500, bank=dict(skip=True))  # SEEDED
deposit("2026-08-13", "Harbor Point Development", "Bank deposit", 42000, bank=dict(desc="DEPOSIT"))
deposit("2026-08-18", "Seaside Renovations", "Bank deposit", 34700, bank=dict(desc="DEPOSIT"))
deposit("2026-08-19", "Palmetto Partners LLC", "Bank deposit", 30300, bank=dict(desc="DEPOSIT"))
deposit("2026-08-21", "Meridian Property Group", "Bank deposit", 35250, bank=dict(desc="DEPOSIT"))
deposit("2026-08-25", "Coral Bay Homes", "Bank deposit", 24500, bank=dict(desc="DEPOSIT"))
deposit("2026-08-31", "Meridian Property Group", "Bank deposit", 10250,
        bank=dict(desc="DEPOSIT", date="2026-09-02"))   # deposit in transit

bill("2026-08-07", "GC-78390", "Gulf Coast Building Supply", "5000", 12500, "Lumber - Coral Bay")
bill("2026-08-10", "RC-2402", "Rivera Concrete LLC", "5100", 19000, "Slab - Meridian warehouse")
bill("2026-08-17", "PS-1231", "Peninsula Sitework LLC", "5100", 16000, "Grading - Palmetto Bay")
bill("2026-08-20", "GC-78515", "Gulf Coast Building Supply", "5000", 49500,
     "Material buyout - PALMETTO BAY PHASE II (job starts September)")   # SEEDED early buy
bill("2026-08-24", "DF-3266", "Delgado Framing Inc", "5100", 10000, "Framing labor - Meridian")

billpmt("2026-08-05", "2120", "Gulf Coast Building Supply", 32000, "Pay bill GC-78033", bank=dict(desc="CHECK 2120"))
billpmt("2026-08-12", "", "Gulf Coast Building Supply", 4820, "ACH - invoice GC-78390 partial",
        bank=dict(desc="ACH DEBIT GULF COAST BLDG SUP"))
billpmt("2026-08-13", "", "Gulf Coast Building Supply", 4820, "ACH - invoice GC-78390 partial",
        bank=dict(skip=True))                                            # SEEDED duplicate
billpmt("2026-08-14", "2121", "Rivera Concrete LLC", 18200, "Pay bill RC-2318 balance", bank=dict(desc="CHECK 2121"))
billpmt("2026-08-19", "2122", "Peninsula Sitework LLC", 6570, "Pay bill PS-1188 partial",
        bank=dict(desc="CHECK 2122", amount=6750))                       # SEEDED wrong amount
billpmt("2026-08-21", "2123", "Delgado Framing Inc", 11270, "Pay bill DF-3141", bank=dict(desc="CHECK 2123"))
billpmt("2026-08-26", "", "Gulf Coast Building Supply", 40680, "ACH on account",
        bank=dict(desc="ACH DEBIT GULF COAST BLDG SUP"))
billpmt("2026-08-28", "2124", "Rivera Concrete LLC", 2340, "Pay bill RC-2402 partial", bank=dict(skip=True))
billpmt("2026-08-29", "2125", "Peninsula Sitework LLC", 1130, "Pay bill PS-1231 partial", bank=dict(skip=True))

spend("2026-08-06", "Expense", "", "Southern Lumber & Truss", "5000", 12400, "Truss package - Meridian", bank=dict(desc="DEBIT CARD PURCHASE SOUTHERN LUMBER"))
spend("2026-08-13", "Expense", "", "Bayview Concrete Products", "5000", 9850, "Ready-mix - Meridian slab", bank=dict(desc="DEBIT CARD PURCHASE BAYVIEW CONCRETE"))
spend("2026-08-24", "Expense", "", "Tri-County Steel", "5000", 8200, "Structural steel - Meridian", bank=dict(desc="DEBIT CARD PURCHASE TRI COUNTY STEEL"))
spend("2026-08-27", "Expense", "", "Southern Lumber & Truss", "5000", 9200, "Framing package - Palmetto Bay", bank=dict(desc="DEBIT CARD PURCHASE SOUTHERN LUMBER"))
ccharge("2026-08-18", "Gulf Coast Building Supply LLC", "5000", 5600, "Misc materials - card")

spend("2026-08-07", "Expense", "", "United Rentals", "5300", 2400, "Compactor rental", bank=dict(desc="ACH DEBIT UNITED RENTALS"))
spend("2026-08-21", "Expense", "", "Sunbelt Rentals", "5300", 1600, "Lift rental", bank=dict(desc="ACH DEBIT SUNBELT RENTALS"))
ccharge("2026-08-06", "Home Depot Pro", "5900", 1700, "Job supplies")
ccharge("2026-08-20", "Lowe's Pro", "5900", 1300, "Job supplies")

ccharge("2026-08-03", "Meta / Google Ads", "6000", 1200, "August ad spend")
spend("2026-08-31", "Expense", "", BANK, "6100", 85, "Account analysis fee", bank=dict(desc="SERVICE CHARGE"))
ccharge("2026-08-05", "Amazon Business", "6300", 520, "Office supplies")
ccharge("2026-08-17", "Intuit / Microsoft 365", "6300", 680, "Software subscriptions")
ccharge("2026-08-09", "Nordstrom - Aventura", "6300", 1340, "Supplies")                  # SEEDED personal
spend("2026-08-25", "Expense", "", "Coastal First Visa 2210", "6300", 9340,
      "Credit card payment", bank=dict(desc="ACH DEBIT COASTAL FIRST VISA PMT"))          # SEEDED miscoded CC pmt
spend("2026-08-05", "Check", "2126", "Marlin & Associates PA", "6400", 14500,
      "Entity restructuring & loan covenant review", bank=dict(desc="CHECK 2126"))
spend("2026-08-18", "Check", "2127", "Sunshine CPA Group", "6400", 2750, "2025 tax return preparation", bank=dict(desc="CHECK 2127"))
spend("2026-08-27", "Check", "2128", "Baker Legal PLLC", "6400", 750, "Lien release review", bank=dict(desc="CHECK 2128"))
spend("2026-08-03", "Expense", "", "Palm Ridge Commercial", "6500", 4500, "August yard & office rent", bank=dict(desc="ACH DEBIT PALM RIDGE COMM"))
spend("2026-08-07", "Check", "2129", "Gulf Coast Equipment Co", "6600", 28000,
      "Bobcat S76 skid steer loader - serial A3W512", bank=dict(desc="CHECK 2129"))       # SEEDED capex expensed
ccharge("2026-08-14", "Tri-County Diesel", "6600", 5900, "Hydraulic pump replacement - excavator")
spend("2026-08-21", "Check", "2130", "Ace Mobile Truck Repair", "6600", 1850, "Transmission service", bank=dict(desc="CHECK 2130"))
spend("2026-08-26", "Check", "2132", "Bayside Welding & Fab", "6600", 1250, "Trailer deck repair", bank=dict(desc="CHECK 2132"))
ccharge("2026-08-05", "Comcast Business", "6700", 710, "Internet & phone")
spend("2026-08-07", "Expense", "", "Florida Power & Light", "6800", 1455, "Yard & office electric", bank=dict(desc="ACH DEBIT FPL DIRECTDEBIT"))
ccharge("2026-08-29", "WEX Fleet", "6900", 3050, "Fuel - August")
spend("2026-08-22", "Expense", "", BANK, "6900", 12000,
      "Transfer", bank=dict(desc="ONLINE TRANSFER TO SAV 8802"))                          # SEEDED transfer as expense
ccharge("2026-08-16", "Royal Palm Yacht Club", "7500", 4800, "Annual membership")         # SEEDED personal
ccharge("2026-08-19", "Various - job site meals", "7500", 620, "Crew meals")

spend("2026-08-10", "Expense", "", "", "8000", 1250, "", bank=dict(desc="ACH DEBIT PAYPAL *INST XFER"))
spend("2026-08-19", "Expense", "", "", "8000", 1875, "", bank=dict(desc="DEBIT CARD PURCHASE SQ *VENDOR PMT"))
spend("2026-08-27", "Expense", "", "", "8000", 1250, "", bank=dict(desc="ACH DEBIT REF 88214"))
tx("2026-08-14", "Deposit", "", "", "Unmatched bank deposit",
   [("1000", 2600), ("8100", -2600)], bank=dict(desc="DEPOSIT"))

tx("2026-08-31", "Journal Entry", "JE-0801", "Gusto Payroll", "August payroll",
   [("5200", 23000), ("7000", 12000), ("7100", 3900), ("1000", -35000), ("2200", -3900)],
   bank=dict(desc="GUSTO PAYROLL 080126"))
spend("2026-08-14", "Expense", "", "EFTPS", "2200", 3900, "July payroll tax deposit", bank=dict(desc="ACH DEBIT EFTPS TAX PYMT"))

spend("2026-08-14", "Expense", "", BANK, "2600", 3850, "Equipment loan payment", bank=dict(desc="ACH DEBIT COASTAL FIRST LOAN PMT"))
spend("2026-08-27", "Expense", "", "Owner", "3100", 12000, "Owner distribution", bank=dict(desc="ACH DEBIT ONLINE XFER TO DDA 9902"))
spend("2026-08-06", "Check", "2131", "", "1300", 3500, "Payee not recorded - needs review", bank=dict(desc="CHECK 2131"))
spend("2026-08-20", "Expense", "", "Unknown", "1300", 4500, "Unidentified ACH - needs review", bank=dict(desc="ACH DEBIT AMEX EPAYMENT"))

# --------------------------------------------- items only the bank knows about ---
BANK_ONLY = [
    dict(date="2026-08-31", desc="MONTHLY SERVICE CHARGE", amount=-48.00),
]
SAVINGS_BANK = [
    dict(date="2026-06-30", desc="INTEREST PAID", amount=4.00),
    dict(date="2026-07-31", desc="INTEREST PAID", amount=4.00),
    dict(date="2026-08-22", desc="ONLINE TRANSFER FROM DDA 4471", amount=12000.00),
    dict(date="2026-08-31", desc="INTEREST PAID", amount=6.00),
]
