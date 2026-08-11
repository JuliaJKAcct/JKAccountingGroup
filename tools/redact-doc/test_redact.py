#!/usr/bin/env python3
"""
test_redact.py — every case is INVENTED. No client's data is in this file, and
none may ever be added to it (organizer-review §0 rule 7).

    python3 tools/redact-doc/test_redact.py

Run it after any change to the patterns. A redactor nobody tests is a redactor
that quietly stops redacting.
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from redact import redact  # noqa: E402

FAILURES: list[str] = []


def must_hide(label: str, text: str, secret: str) -> None:
    out, _ = redact(text)
    if secret in out:
        FAILURES.append(f"LEAK · {label}: {secret!r} survived")


def must_keep(label: str, text: str, wanted: str) -> None:
    out, _ = redact(text)
    if wanted not in out:
        FAILURES.append(f"LOST · {label}: {wanted!r} was destroyed")


# ── Must be hidden ────────────────────────────────────────────────────────────
must_hide("SSN hyphenated", "Your social security number 123-45-6789", "123-45-6789")
must_hide("SSN spaced (form boxes)", "SSN 123 45 6789 Spouse", "123 45 6789")
must_hide("SSN dotted", "SSN 123.45.6789", "123.45.6789")
must_hide("Dependent SSN", "Child A 987-65-4321 Daughter", "987-65-4321")
must_hide("Bare 9-digit account", "Account 445566778 Checking", "445566778")
must_hide("Routing labelled", "Routing number: 021000021", "021000021")
must_hide("Short acct labelled", "Account #: 8891-2245", "8891-2245")
must_hide("DOB slashed", "Date of birth 04/17/1982", "04/17/1982")
must_hide("DOB written", "D.O.B. March 3, 1975", "March 3, 1975")
must_hide("Licence labelled", "Driver's License G4471938820114", "G4471938820114")
must_hide("Long card run", "Card 4111111111111111 on file", "4111111111111111")

# ── Must survive — losing these costs the analysis ────────────────────────────
must_keep("EIN", "Employer ID Number 45-6789012 Trucking LLC", "45-6789012")
must_keep("EIN near an SSN", "SSN 123-45-6789 EIN 88-1234567", "88-1234567")
must_keep("Name", "DENYSFAKE TESTNAME Shareholder", "DENYSFAKE TESTNAME")
must_keep("Dollar amount", "Ordinary business income 148,392", "148,392")
must_keep("Tax year", "For calendar year 2024", "2024")
must_keep("Filing date", "Filed on 03/16/2026", "03/16/2026")
must_keep("Form number", "Schedule K-1 Form 1120-S", "1120-S")
must_keep("Percentage", "Shareholder percentage 33.3333", "33.3333")
must_keep("State", "Montana nonresident return", "Montana")
must_keep("NOL figure", "NOL carryforward 1,204,556", "1,204,556")

# ── The one that matters most, and the one a naive test gets wrong.
#    A HYPHENATED EIN survives on its own — no rule was ever going to eat
#    "45-6789012", so asserting it proves nothing. The load-bearing case is the
#    UNHYPHENATED EIN: nine bare digits, which the account-number rule would
#    swallow if the EIN rule did not claim it first. Test that one, and test
#    that a real account number in the same string still dies. ────────────────
for label in ("EIN", "FEIN", "Employer identification number", "Employer ID Number"):
    out, _ = redact(f"{label} 456789012 · account 445566778")
    if "456789012" not in out:
        FAILURES.append(f"LOST · unhyphenated EIN after {label!r} was eaten by the digit rule")
    if "445566778" in out:
        FAILURES.append(f"LEAK · account number survived next to a {label!r}")

# An unlabelled nine-digit run is NOT an EIN and must die.
must_hide("Unlabelled 9-digit run", "Reference 456789012 attached", "456789012")

# ── Two different SSNs must stay distinguishable ──────────────────────────────
out, _ = redact("A 111-22-3333 B 444-55-6666")
if out.count("SSN-***-**-") != 2 or "3333" not in out or "6666" not in out:
    FAILURES.append("SHAPE · two SSNs did not stay distinguishable")

# ── Wide-spaced, out of a form's separate boxes. A PDF text layer does this and
#    it is the shape most likely to slip past a tight pattern. ─────────────────
must_hide("SSN wide-spaced, labelled", "Your social security number    123   45   6789", "123   45   6789")
must_hide("SSN wide, 'SSN' label", "SSN      555  44  3333  Spouse", "555  44  3333")
must_keep("Label survives", "Social security number 123-45-6789", "Social security number")

# ── A column of amounts must NOT be eaten just because it looks like an SSN.
#    This is the cost of the loose pattern, and why it fires only when labelled.
must_keep("Amount columns survive", "Wages   125  40  1234   Interest   18", "125  40  1234")

if FAILURES:
    print(f"FAILED — {len(FAILURES)} problem(s):")
    for f in FAILURES:
        print("  " + f)
    sys.exit(1)

print("PASS — all cases redacted or preserved as intended.")
