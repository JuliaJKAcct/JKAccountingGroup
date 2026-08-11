# The weekend sweeps that never landed — a recovery register

> **Status:** Open — **awaiting Lilian's decision** · **Compiled:** 2026-08-11 · **Owner:** Lilian

Three weekend Client-Intelligence sweeps ran, did their work, committed it to their own branch and
pushed — and **none of them was ever merged**. This file is the durable record of what is sitting in
those branches. It is a **pointer, not a copy** — the enrichments themselves live in the commits
named below, so **this register survives a branch being renamed, but not a branch being deleted.**
Until the decision below is made, treat those three branches as **do-not-delete**: if they are
garbage-collected, 717 lines of client knowledge and 22 SOP proposals go with them.

## Why it happened (this is the part worth fixing)

The routine's own instructions end with *"commit to your working branch and push. Do NOT merge to
main… A human reviews/merges the branch."* So the sweep is **designed** to stop at a branch and wait
for a person. Meanwhile [`sop-proposals.md`](../sop-proposals.md) states the firm's actual policy:

> *Client Intelligence captures everything non-sensitive automatically (no approval needed). But a
> client's SOP is different: no SOP change is ever made without Lilian's explicit approval.*

**The two do not agree.** By policy, CI needs no approval; by mechanism, every CI enrichment waits
for a merge that nobody does. Three weeks of client knowledge stopped there. If the mechanism is
changed so the sweep merges its **own CI commits** (leaving SOP changes behind the approval gate
where they belong), the policy and the machine would finally say the same thing. **Lilian's call —
do not change the routine until she decides.**

## What is waiting, by branch

| Run | Branch | Head commit | Scope |
|---|---|---|---|
| 2026-07-25 | `claude/admiring-lamport-sm6a66` | `aa314a2` | 12 client files · **7 SOP proposals** (`SOP-2026-07-25-01…07`) · coverage-gap passes (full Gmail history for several clients) |
| 2026-08-01 | `claude/admiring-lamport-rcatsn` | `b6ec4d9` | 21 client files · **9 SOP proposals** (`SOP-2026-08-01-01…09`) |
| 2026-08-08 | `claude/admiring-lamport-iciems` | `352f7cf` | 17 client files · **6 SOP proposals** (`SOP-2026-08-08-01…06`) |

**717 added lines across ~48 client-file touches**, plus **22 SOP proposals that were never
applied**. Recover a branch's content with `git diff origin/main...<branch>`.

## The findings that carry consequences

Ordered by what it costs to keep losing them, not by client.

1. **Ecoorganic — an ownership change effective 2026-01-01.** The second owner exited (a nonresident
   shareholder is disqualifying for an S-corp), so FY2025 still issues **two K-1s** and FY2026 onward
   issues **one**. The same run established **real W-2 payroll through Gusto** (since Sept 2025, on
   top of the 1099 subcontractor labor the SOP already covers), the monthly CT **OS-114**, **CT-941**
   and **ReEmployCT** obligations, the **CT-1065/CT-1120SI composite** return tied to the nonresident
   shareholder, the **CT Annual Report** (March 31), and the annual **GL/Workers' Comp premium audit**.
   Two review-meeting flags are still unresolved: a **QBO-connected bank account the team did not
   recognize**, and a vehicle-expense account that may hold the owner's **personal Turo activity**.
2. **Mobilesource — a formal Florida DOR sales-tax audit is underway** (the auditor contacted the
   president directly, copying Julia), plus an **unrecognized USDT-linked deposit**.
3. **Kolo Florida — two Double properties contradict observed reality:** `Payroll = N/A` against an
   active weekly Gusto payroll, and `Sales Tax = Monthly` against quarterly filings. Also: the
   **Lauderhill BTR expires 2026-09-30**, and **both principals' Workers' Comp exemptions** drew
   expiration notices on 2026-06-29.
4. **Deep Tech — QuickBooks was disconnected from Double on 2026-07-21** with no logged reconnection,
   so Double-synced figures may be stale; and the owner asked to **cancel Gusto** (no employees).
5. **Pro Title — the same two shapes of mismatch:** `Payroll = N/A` against active Gusto payroll, and
   `Assigned Staff` naming someone other than the file's owner. Plus the annual **DFS title-agency
   surcharge** (January) and the quirk that some of its 1099s are issued by **Paylite**.
6. **Margate — the WF account that had been stuck in reconciliation since Mar 2025 was closed** and
   replaced, which may make that open item moot; and a QuickBooks Payments dispute reached Intuit's
   **pre-arbitration**.
7. **Atman Parts — Texas sales tax**, with eight back periods filed in one day (2026-07-16) as an
   onboarding catch-up. The legal name is still unresolved across three spellings.
8. **Intercompany loans nobody had written down:** Sunoma ↔ Magnum 152, and Lumetro → Sensustech —
   both reconciled **monthly** as standing close tasks.
9. **Google Drive folder links** were located for roughly ten clients whose files had them pending.

## Contradictions to settle before merging

- **Atman Parts' home state.** The 2026-07-25 run says **Texas**, evidenced by filed Texas returns.
  The 2026-08-01 run says **New Hampshire**, from a W-9 address, tagged low confidence. The 08-08 run
  does not resolve it. Filed returns are the stronger evidence, but this needs a human answer.
- **Kolo Florida's sales-tax cadence.** Double says monthly; the observed filings and the Drive
  watchlist say quarterly. One of the two is wrong and it is a filing obligation.
- **The runs overlap.** Each branched from `main` without the previous run's work, so the same fact
  can appear in two branches in different words. Merging them in date order and reading for
  duplicates is the safe sequence.
- **Not all of it is knowledge.** A share of the lines are "nothing new this week" log entries. Worth
  keeping the log discipline, worth knowing the volume overstates the substance.

## What happens next

Lilian reviews the above and decides (a) whether these three branches get merged, and (b) whether the
routine should merge its own CI going forward, leaving only SOP changes behind her approval. Until
then this register is the memory. **Update it — or delete it — the moment that decision lands.**
