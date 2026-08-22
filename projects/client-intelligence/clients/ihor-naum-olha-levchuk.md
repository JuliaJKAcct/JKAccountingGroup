# Ihor Naum & Olha Levchuk

> **Status:** Active · **Owner:** Lilian · **Last updated:** 2026-08-22

> **Sensitive data lives in the firm's systems, not here.** This file holds
> non-sensitive knowledge and links only. Logins, passwords, full account numbers,
> dollar figures, and personal contact details stay in Google Drive / Double
> / QuickBooks and are referenced by link. Never paste a secret or personal data
> into this file.
> **A business EIN is the exception and MAY be written here** — it is public on Sunbiz,
> so hiding it protects nothing _(Lilian, 2026-08-12)_. An **SSN or ITIN never may**,
> including when it is the entity's tax ID. Write the EIN **hyphenated** (`12-3456789`) — nine
> bare digits trip the published-page gate and stop the build.

> **Two zones — what feeds the SOP vs what stays here.** This file is the master
> record. Its sections split into two zones:
> - **Operating (feeds the client SOP):** §1 Snapshot, §2 Contacts, §3 Systems &
>   access, §4 Obligations & recurring processes, §5 Key facts & quirks, §7 Links —
>   the standing info a covering preparer needs to run this client.
> - **Working context (CI-only — never in the SOP):** §6 — the log and outstanding
>   tasks/meeting follow-ups. Live tasks live in Double / Ping (linked), not copied
>   here.
>
> The SOP is the curated view of the **Operating** zone. See the project README
> ("Client Intelligence ↔ the client SOP") for how the two stay in sync.

## 1. Snapshot

- **Business name:** Ihor Naum & Olha Levchuk — an individual (joint) client record, not a company. The couple's companies have their own files (see §7 Related clients).
- **Entity type:** Individual / sole proprietor — Form 1040 with Schedule C _(Double: Account Type = Individual, Tax Return Type = 1040-SCH C, 2026-07-30)_.
- **Home state:** _(pending, but with new supporting evidence — not yet a full contradiction resolution.)_ The related entities are Florida companies, and `aura-remodeling.md` infers Illinois from the owner's area code. **New:** a 2024-02-17 email from Olha about the **2023** tax year states the year **"started in Chicago, ended in Florida"** and that she had two different 1099s and two different W-2 employers that year _(Gmail, "Re: 2023 Taxes - P&L Template", 2024-02-17)_ — this confirms a real Illinois connection (at minimum a 2023 part-year move IL→FL), not just an area-code inference, but does **not** by itself confirm the **current** mailing/home state. Still confirm from Double for the Form 8802 mailing address, since the IRS replies by mail.
- **Industry / what they do:** Personal tax clients. Their business activity runs through the related entities in §7 (remodeling / construction). **The Schedule C is Aura Remodeling LLC** _(Lilian, 2026-08-13)_. Olha's separate 1099 Schedule C is for **physical-therapy / Pilates work** — she signs correspondence "PT, Cert. PPS Physical Therapist / Certified Pilates Practitioner" under the business name **"Best In Health"** _(Gmail signature, 2024-03-28)_.
- **Primary language:** Ukrainian _(the couple's company correspondence is in Ukrainian; the firm also uses Russian — see `aura-remodeling.md`)_.
- **Our engagement (services we provide):** Individual income tax only — Form 1040 with Schedule C — plus the one-off U.S. residency certification in §4. Bookkeeping N/A; no Form 1099 work; no annual report _(Double properties)_.
- **Fiscal year-end:** December 31
- **Accounting platform:** None — `platform: "none"` in Double on this individual record; the related companies carry their own books.

## 2. Contacts

Names, emails, and phone numbers are **personal data** — they live in Double, not
here. This section records **who plays which role**; open the Double client to get
the actual details (and Claude can pull them live when a task needs them).

| Role | Where to find them |
|---|---|
| Taxpayer / primary contact | Double client (link below) |
| Spouse (joint filer) | Double client (link below) |
| Assigned staff (firm) | **Lilian Gonzalez** _(Double property)_ |

- **Double client:** [app.doublehq.com/close?cid=710637](https://app.doublehq.com/close?cid=710637)

## 3. Systems & access

Which systems we use for this client and **where the credentials live** (a Drive
link). Never write the credential itself here.

| System | What it's for | Where credentials live (Drive link) | Non-sensitive reference |
|---|---|---|---|
| Double (client portal) | Tax project, documents, organizer status | _(n/a — firm login)_ | Client record `cid=710637` |
| TaxDome (legacy) | Where the 2025 organizer and the signed e-file authorization were collected before the Double migration | _(n/a — firm login)_ | Organizer "2025 individual Tax Organizer" |
| **MyFax** (myfax.com) | Sending forms to the IRS by fax; **holds the transmission proof** | _(n/a — firm login)_ | MyFax Central → Inbox → **Sent** folder; confirmations also arrive by email from `NoReply@myfax.com` |
| **Pay.gov** | Paying IRS user fees (e.g. the Form 8802 fee) | _(n/a — firm login)_ | Payment confirmations arrive by email from `notification@pay.gov` |

## 4. Obligations & recurring processes

### Sales tax
- **Applies?** No — individual taxpayers.

### Payroll
- **Applies?** No.

### Bookkeeping & monthly close
- **Applies?** No — Bookkeeping = N/A in Double. Our work here is tax preparation and filings, not a monthly close.

### Income tax
- **Applies?** Yes.
- **Return type(s) & deadlines:** Form 1040 (joint) with Schedule C; calendar year, due April 15.
- 🔴 **IHOR'S SCHEDULE C IS AURA REMODELING.** _(Lilian, 2026-08-13.)_ ⓘ **Olha files a second, separate Schedule C** for her own 1099 work — see the process note below. Lilian's ruling was about Ihor's; the Olha half comes from the migrated notes. **[Aura Remodeling LLC](./aura-remodeling.md) files no return of its own** — its activity is reported here. So **every piece of tax work for Aura belongs on this file**, and a tax-season list showing Aura as owing a return is wrong.
- **Our role:** We prepare and file the return.
- **Organizer status:** Completed _(Double)_ — the 2025 organizer was completed by the client in TaxDome on 2026-02-16, with supporting documents uploaded the same day.
- **Current status:** 2025 return filed — Double tax project "2025 Taxes", status `filed`, filed 2026-05-25 (due date 2026-04-15; e-file authorization signed by both spouses 2026-03-03). Whether an extension was on file is not recorded — see §6.
- **Process notes (→ future SOP):** the 2025 organizer round covered car miles, home-office deduction and a gas-expense review; a Form 1095-A was provided.
  - **Vehicle mileage is tracked per car, per year, with opening and closing odometer readings** — Ihor's for the Aura activity, Olha's for her 1099 contractor work. **A second Schedule C exists for Olha**, separate from Aura: she works as a **1099 independent contractor** with her own expense schedule (advertising/apps, meals, sport equipment and clothing, insurance) and a **home-office claim taken at 20%** of rent and utilities. **Figures and odometer readings stay in Drive** _(TaxDome notes, migrated — filed under Ihor Naum; notes dated 2025-04-08)_.

### Licenses & other filings
- **Applies?** No — individual taxpayers; no business licence or annual report is filed on this record. Any licensing obligation sits on the related company files in §7.

### U.S. residency certification — Form 8802 → Form 6166

A one-off filing, not a recurring obligation, but an **open matter** as of this file's date.

- **What it is:** Form 8802 applies for Form 6166, the IRS letter certifying U.S. tax residency — used to claim income-tax-treaty benefits or a VAT exemption abroad.
- **Who and what was requested:** filed in the name of **Ihor Naum as an individual — NOT in a company's name** · country: **Ukraine** · certification years: **2023 and 2024** _(Lilian, 2026-07-30)_.
- **Our role:** the firm prepared and transmitted the application and paid the IRS user fee; the client is handling the status call to the IRS (see §5 and §6).
- **How it was filed (2026-05-06):** user fee paid electronically through Pay.gov first, then the application faxed to the IRS at 877-824-9110 (fax filing is only permitted when the fee is paid electronically; a fee paid by check must be mailed).
- **Evidence on file #1 — Pay.gov payment confirmation:** "User Fees for U.S. Residency Certification", 2026-05-06 (email from `notification@pay.gov`).
- **Evidence on file #2 — fax:** "Form 8802 – Ihor Naum", 2026-05-06 21:11 GMT, 5 pages, 215 s, successful _(MyFax)_.
- **Evidence on file #3 — fax:** "Form 8802 WITH payment confirmation – Ihor Naum", 2026-05-06 21:36 GMT, 5 pages, 217 s, successful — the complete package (application + proof of the Pay.gov payment) _(MyFax)_.
- **Where the evidence lives:** Gmail (search `from:myfax.com "Successful transmission"`) and MyFax Central → Inbox → Sent, where the transmitted document itself can also be downloaded.
- **Status as of 2026-07-30:** no response from the IRS; roughly 12 weeks elapsed, past both the IRS's 45-day guidance and the realistic 6–10-week range. No Form 6166 received.
- ✅ **THE FORM 6166 CERTIFICATES ARRIVED — 2026-08-19.** Two documents, **"Form 6166_2024"** and **"Form 6166 Tax 2023"** (IRS Certification of U.S. Tax Residency), were uploaded 2026-08-19 into a Drive folder titled "Forms 8802" that already holds this client's Form 8802 application and its May 2026 payment confirmation. This reads as the IRS-issued certificates for **both** requested years (2023 and 2024) finally arriving — roughly 15 weeks after the 2026-05-06 filing. **This closes the "watch for IRS mail" outstanding item.** _(Found via Google Drive, 2026-08-22 sweep — the file was uploaded to a folder shared with [`aura-remodeling.md`](./aura-remodeling.md)'s AP mailbox, so this fact is recorded here, on the individual applicant's file, not there.)_ ⚠️ **Not yet confirmed:** whether these are the final, complete certificates or a partial response — worth Lilian/Julia opening them to check content, dates and any conditions before treating the matter as fully closed.

## 5. Key facts & quirks

- 🔴 **AURA REMODELING HAS NO RETURN OF ITS OWN — it is reported on Ihor's Schedule C** _(Lilian, 2026-08-13)_. That is the tax structure, not an oversight, and it means **the firm will never have a tax-preparation engagement for Aura**; the work is here. It also **settles a conflict this file and [`aura-remodeling.md`](./aura-remodeling.md) had carried since 2026-07-30** — the Form 1065 inferred there was wrong.
- **Owner group.** Ihor and Olha are the principals behind the firm's related company clients — see §7 "Related clients". Personal / 1040 facts belong in this file; company-operations facts belong in each company's file. _(Gmail + Florida DWC notice, 2026-07-30)_
- **The couple files jointly** — the 2025 e-file authorization was signed by both spouses.
- **The Form 6166 is personal, not corporate.** The certification was requested for Ihor Naum as an individual, not for any related company. The applicant of record is the person, so the IRS follow-up and any Form 2848 must be for the **individual** taxpayer — a company 2848 does not cover this application.
- **Legacy TaxDome spelling.** TaxDome carries the first name as "Ihour Naum"; Double and the tax return use "Ihor Naum". Search both spellings when hunting for documents.
- **A third related company: Megabai Florida Corp (now dissolved).** Beyond Aura Remodeling and Kolo Florida (§7), Ihor was also **Vice President of Operations (part-time)** at **Megabai Florida Corp**, with Mykola Kozlovskyi as Vice President of Finance _(Gmail, employment agreement thread, 2023-08-08; contract-title correction thread, 2023-08-11)_. Megabai Florida Corp **filed Articles of Dissolution with the state in Oct 2025** _(Gmail, "Megabai Documents", 2025-10-16)_ — it is no longer an active entity. **This means Ihor had W-2 income from Megabai** in addition to the Aura Schedule C in the years the company was active and paying him — relevant when reconciling prior-year income sources on this file. No Client Intelligence file exists for Megabai Florida Corp; given it is dissolved, a new file is likely not warranted, but the relationship is recorded here so prior-year W-2 income isn't mistaken for a missing source.
- **The firm referred the couple to immigration counsel.** 2023-12-26: the firm introduced Ihor Naum & Olha Levchuk to an immigration attorney (Michelle Canero / Canero Fadul) for "migration assistance"; a consultation was scheduled and completed in early January 2024 _(Gmail, "Introduction to Ihor Naum & Olha Levchuk" thread, 2023-12-26 to 2024-01-04)_. No outcome or current status captured — this predates the Form 8802 U.S.-residency-certification matter in §4/§5, which is the more recent, actively-tracked immigration-adjacent item.

### How to check the status of the Form 8802 (the durable know-how)

There is **no per-applicant online tracker** for Form 8802 and no case number. The
status is established in this order:

1. **Confirm the fee was actually collected** — Pay.gov → *Payment Activity*, or the card/bank statement. A collected fee is not proof the application arrived (Pay.gov charges independently), but a **non**-collected fee is a red flag.
2. **Keep the fax transmission proof** — the MyFax confirmation is the only evidence of filing. It lives in Gmail and in MyFax Central → Inbox → Sent, where the transmitted document can also be downloaded. MyFax can also export fax activity to CSV/Excel for a formal log.
3. **Compare against the IRS queue** — the IRS publishes, on its *Processing status for tax forms* page, the month of Form 8802 applications currently being processed. A fax dated later than that month means the application is simply still in line.
4. **Call the IRS** — 267-941-1000 (not toll-free), choosing the "U.S. residency" option; Mon–Fri, 6:00 a.m.–11:00 p.m. Eastern. This is the number the Form 8802 instructions themselves give, unchanged across the 2016, 2020 and October-2024 revisions.
5. **Have ready for that call** — the taxpayer's name and TIN, the exact fax date/time and page count, the Pay.gov confirmation number, and the year(s) and country(ies) requested. A Form 2848 must be on file for the firm to be told anything; the taxpayer calling in person must instead pass IRS identity authentication.

Watch-outs that go with the above:

- **Numbers that do NOT serve this purpose:** 800-829-1040 (general individual line), 866-860-4259 (Practitioner Priority Service — account matters only), and fax 681-247-3101 (international account issues, not Form 8802).
- **Never re-fax a duplicate.** A second copy opens a second file and delays processing further; the two 2026-05-06 transmissions above are exactly the situation to raise with the IRS rep.
- **Certification depends on the return for the certified year being on file.** Where it is not, Form 8802 requires a penalties-of-perjury statement instead. An application filed against a year with neither is a common reason nothing comes back — so when chasing a silent 8802, check the certified years first.
- **The IRS answers by mail only** — never email. Before escalating, rule out that a letter (or the Form 6166 itself) already reached the address on the application.
- **If a delay causes real economic harm** (e.g. foreign withholding because the 6166 is missing), the escalation route is the Taxpayer Advocate Service via Form 911. There is no expedite process for Form 8802.

## 6. History & open questions
<!-- CI-only zone: this whole section stays in Client Intelligence and never goes into the SOP. -->

### Log

- _(2026-02-16)_ — Client completed the 2025 individual Tax Organizer in TaxDome and uploaded supporting documents. _(TaxDome notifications)_
- _(2026-03-03)_ — E-file authorization signed by both spouses in TaxDome. _(TaxDome)_
- _(2026-05-06)_ — **Form 8802 filed.** IRS user fee paid through Pay.gov, then the application faxed to the IRS (877-824-9110) twice about 25 minutes apart — the second transmission being the complete package including the payment confirmation. Both transmissions reported successful by MyFax. _(Pay.gov + MyFax confirmations, Gmail)_
- _(2026-05-25)_ — 2025 tax return filed (Double tax project "2025 Taxes" → `filed`). _(Double)_
- _(2026-07-30, Lilian)_ — File created. Researched how to obtain the status of a Form 8802 filed by fax and recorded the method in §5. Located and verified the filing evidence in Gmail / MyFax (Pay.gov confirmation + both fax confirmations, 2026-05-06). Confirmed the IRS contact number (267-941-1000, "U.S. residency" option) against three revisions of the Form 8802 instructions. Lilian sent the client, by WhatsApp, everything needed to prove the fax was sent with the complete documentation — the client will place the status call to the IRS themselves.
- _(2026-07-30, Lilian)_ — Confirmed the application's scope: the certification was requested for Ukraine, tax years 2023 and 2024, in Ihor Naum's own name — not a company's.
- _(2026-08-01)_ — Weekly incremental sweep (bounded to 2026-07-30 and later): no new Double notes/activity, no new Gmail threads, and no new Ping meetings/transcripts turned up for either name or the Form 8802 matter since the baseline. Located and confirmed the client's Google Drive vault folder (§7), closing that open item. Checked FOLLOW-UPS.md item #9 (a Double duplicate-individual-record issue) against this client — confirmed via `list_clients` there is only one Double record for this couple (id 710637), so that item is about a different client, not this one. Coverage-gap note (Ping/Drive full history, full Gmail history) left as-is per this run's scope.
- _(2026-08-15, weekend sweep — full-historical catch-up, no date bound)_ — Ran the
  one-time full-historical pass owed on this client (Ping full history, Google Drive
  full search, Gmail full history — in:inbox and in:sent, no `after:` filter).
  **Ping:** `resolve_person` and `search_contacts` for both "Ihor Naum" and "Olha
  Levchuk" now resolve to a single Ping client record (`Ihor Naum & Olha Levchuk`,
  email `olhalevchuk@gmail.com`) — a change from the 2026-08-01 sweep, which found no
  match. A `search_meetings` call scoped to that Ping client ID returned **zero**
  indexed/searchable meetings for this client. A follow-up **org-wide** semantic
  search (no date bound, several query phrasings on Aura/Megabai/immigration/Form
  8802) surfaced nothing relevant to this client — all hits were other clients or
  unrelated fragments. **This closes the Ping coverage gap for this client**: there
  is a Ping client record, but it has no searchable meeting content as of this sweep.
  **Google Drive (full search, no date bound):** found the couple's Drive footprint
  is larger than previously linked — besides the "Ihor Naum" folder already in §7,
  there are at least three more legacy folders from before the TaxDome→Double
  migration ("Ihor Naum" x2 more, "OLHA LEVCHUK & IHOR NAUM", "IHOR NAUM") under
  different parent paths, plus Ihor's own W-2 PDFs and the signed 2024/2025 return
  PDFs. Not consolidated into §7 individually (too many legacy paths to be useful as
  links) — flagging that document search for this couple should check multiple
  "Ihor Naum" folder names, not just the one linked in §7. **This closes the Drive
  coverage gap** — full-history search has now been run; no `after:` bound was used.
  **Gmail (full history, in:inbox + in:sent, no `after:` filter):** this is a
  high-volume mailbox — most of the ~90 combined threads found are **Megabai Florida
  Corp** and **Kolo Florida** company correspondence (bookkeeping, payroll, workers'-
  comp exemptions, dissolution), which belongs on those companies' own files, not
  here (routing rule) — only genuinely personal/individual-1040-relevant facts were
  pulled into this file: the 2023 Illinois→Florida part-year evidence (§1), Olha's
  PT/Pilates profession (§1), the Megabai W-2/VP-of-Operations relationship and its
  Oct-2025 dissolution (§5), and the Dec-2023 immigration-counsel referral (§5). Also
  reconfirmed the Form 8802 fax/Pay.gov evidence already on file (no new content
  there). **This closes the Gmail full-history coverage gap.** **Double:** re-checked
  `get_client`, `list_client_properties`, `list_notes` (still 0 notes — matches
  prior), `list_contacts`, `list_activity_log` (22 entries, all file-management and
  the 2025 tax-project status change already reflected in §4/§6) — no new facts
  beyond what this file already had. **Repo:** re-checked `projects/sops/` (no SOP
  for this client), `FOLLOW-UPS.md` (row #12, the Form 8802 matter, already tracked
  — matches this file) and `BACKLOG.md` (no entries).
- 2026-08-13 — **The Aura routing question, answered by Lilian.** ⓘ **Her message used the spelling *Igor*; this is IHOR NAUM.** Recorded because the roster also holds an unrelated **Igor Melomed**, who has his own migrated Schedule C note and **no connection to Aura anywhere in the repo** — and because this file already documents the spelling drift (TaxDome carries *"Ihour Naum"*). The routing rests on the note sitting in Ihor's own folder, on Ihor being a principal of Aura (§7), and on his Double record carrying `Tax Return Type = 1040-SCH C`. A migrated TaxDome note titled *"2024 Aura"* sat in this client's folder holding **vehicle mileage** for the year, and it was deliberately left unrouted because it could have belonged to either this file or [`aura-remodeling.md`](./aura-remodeling.md). **Lilian settled it: Aura is reported on Ihor's Schedule C, the company files nothing itself, and so all of its tax work lives here.** A second note from the same date carries **Olha's 1099 contractor Schedule C** — her mileage, expense categories and a 20% home-office claim. **Figures stay in Drive; the durable facts are in §4 and §5.** _(TaxDome notes, migrated — filed under Ihor Naum; notes dated 2025-04-08.)_ _(Worked by Lilian.)_

- 2026-08-22 — **Weekend sweep (incremental, baseline 2026-08-15→2026-08-22).** No new Double notes/contacts/activity found. Ping: `resolve_person` still no match. Gmail: no new correspondence found by a targeted search bounded after 2026-08-15. 🔑 **The Form 6166 certificates arrived 2026-08-19** — found via a Drive search on a different client's routing check (see §4) — this is the single most consequential finding of this run for this client and resolves the standing "watch for IRS mail" item.

### Outstanding items (CI-only — never in the SOP)

- ✅ **Watch for IRS mail — ARRIVED 2026-08-19.** Both Form 6166 certificates (2023, 2024) are in Drive — see §4. Closed as a chase item; open only whether they need review for completeness (above).
- **Client was calling the IRS** (267-941-1000, "U.S. residency" option) — with the certificates now in hand this may be moot; not chased further this run.
- Ask the client to raise the possible duplicate from the two 2026-05-06 transmissions — STILL OPEN (a client-side action, not a searchable arrival), not chased this run (budget).
- Confirm the **2023 and 2024 returns were on file** when the application was transmitted — not chased this run (budget).
- Confirm a **Form 2848 for Ihor Naum as an individual** is on file — STILL OPEN/UNCONFIRMED; a targeted Gmail search found nothing relevant.
- Archive the filing evidence in the client's Drive folder as one PDF — not chased this run (budget; internal firm task, now lower priority with the certificates received).

### Information still needed

- [x] Which country and tax year(s) the Form 6166 was requested for — **Ukraine, 2023 and 2024**, in Ihor Naum's own name _(Lilian, 2026-07-30)_.
- [ ] Home state and the current mailing address on the Form 8802 — the related entities are Florida companies but `aura-remodeling.md` infers Illinois; confirm from Double, since the IRS replies by mail.
- [x] ~~Which entity the Schedule C activity belongs to~~ ✅ **Answered 2026-08-13 (Lilian): AURA REMODELING LLC.** It is reported on Ihor's Schedule C and files no income-tax return of its own; the partnership inference on `aura-remodeling.md` was wrong and is gone.
- [ ] Whether an extension (Form 4868) was filed for 2025 — the return was filed 2026-05-25, after the April 15 deadline.
- [x] Google Drive folder link for this individual client — found (§7) _(Google Drive, 2026-08-01)_.
- [x] Confirm the ownership/officer roles in the related entities (§7) — Ihor's role at **Megabai Florida Corp** confirmed as VP of Operations (part-time) via a 2023-08-08 employment-agreement email; Mykola Kozlovskyi was VP of Finance. Aura Remodeling and Kolo Florida roles were already established. Megabai dissolved Oct 2025 _(Gmail, 2026-08-15 sweep)_.
- [ ] Whether the 2023 Illinois→Florida part-year move (new evidence, §1) affects any other open-year filing beyond 2023, and whether a current mailing address confirms Florida as the couple's present home state.

## 7. Links

- **Double client:** [app.doublehq.com/close?cid=710637](https://app.doublehq.com/close?cid=710637)
- **Double tax project (2025):** [2025 Taxes](https://app.doublehq.com/tax-return?cid=710637&projectId=219325)
- **Google Drive folder (sensitive vault):** ["Ihor Naum"](https://drive.google.com/drive/folders/1PDwAHism2DEcSLojbg7gMy93BaZ85GrE) under `*QBO Clients and Individuals` — standard subfolders present (Notes, Completed organizers, Firm docs shared with client, Docs uploaded by client, Client uploaded documents) _(Google Drive, 2026-08-01)_.
- **Related clients:** [`aura-remodeling.md`](./aura-remodeling.md) (the couple are its two principals), [`kolo-florida.md`](./kolo-florida.md) (Ihor holds a Florida workers'-comp Certificate of Election to be Exempt for it) — same owner group. **Megabai Florida Corp** — a third related company (Ihor was VP of Operations, part-time; dissolved Oct 2025) has no Client Intelligence file; see §5 _(Gmail, 2026-08-15 sweep)_.
- **Related SOPs:** none — Lilian decided (2026-07-30) that the Form 8802 process does not warrant its own SOP; the know-how lives in §5 of this file.
