# Property check is the bank’s legal, title, valuation — they will not take your brother’s report

They leave processing fee, scroll back to the cheap end, and open **Indian Bank** property check. They already “know how much.” The avoid instinct returns: **I have checked the property; my brother is my lawyer.** They name the three rows: **legal and technical**, **title search report**, **title is clear**. Then: this is **mandatory**; **the bank does it**; **even if you have done it, the report will not be accepted by the bank.**

## Classification
- kind: issue | copy / meaning
- status: open
- surface: Charges / Property check charges drawer for **Indian Bank · IB Home Loan**. Click **02:08.253** “Show how property check charges for Indian Bank was calculated” (table **₹13,300**); **02:12.671** click step 1 amount (`div#hlc-drawer-body … span:nth-of-type(2)` — **Legal and technical ₹4,000**). Later they reopen the same kind of drawer for **SBI** and **Punjab & Sind Bank** (`08`).
- viewport: 1366x768 @2x
- speakers: Speaker A walks the workaround and the veto. ASR not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72
- event count: 128
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2355` (~5 s earlier)
- next: `wb-rec-260816-0013` (~3 s later) — opens SBI property check again within seconds, then government charges.

## Where on the page
- **02:00.329** scroll back to the cheap end (`0014.png`): Indian Bank processing **₹2,500** / property **₹13,300**; Nainital / Karur Vysya / Bank of India / Canara / IDBI / Bank of Maharashtra. Bank type **All**, Rate **Floating**.
- **02:08** `tbody#hlc-compare-body > tr:nth-of-type(1) > td:nth-of-type(3)` — first row **Indian Bank**, property check **₹13,300**.
- Drawer on screen (`0015.png`, `0016.png`):
  1. **Legal and technical:** ₹4,000
  2. **Title search report:** ₹4,400
  3. **Valuation:** ₹4,900
  4. **Total:** ₹4,000 + ₹4,400 + ₹4,900 = **₹13,300**
  - “Property check charges shown: **₹13,300**”
  - Foot: “Typical industry average for legal, title-search, and valuation checks. GST is extra. Exact fees may differ by lender.”
- They stay in this drawer until **04:19.486** Close — covering `05` save-money / Google Flights talk as well (`0016.png`–`0030.png` are the same drawer).
- Later: **07:01.377** SBI property check (Legal ₹5,200 / Title ₹5,300 / Valuation ₹4,600 = ₹15,100); **07:43.712** Punjab & Sind (₹4,800 / ₹4,600 / ₹5,300 = ₹14,700).

## What they said (faithful, complete)

**02:00.500–02:19.330** Speaker A (as they open Indian Bank):
> Raw ASR: “Property check charge. I know how much. I have checked the property. Legal and technical. My brother is my lawyer. That's why I have written. That's why I have written.”
> Corrected: same. Amount is already known (₹13,300 on the table). Workaround they voice: **I already checked**; **my brother is my lawyer** (**brother** p≈0.59) — so why pay. “That's why I have written” = they are putting that objection into the product copy (or pointing at the labels they wrote).

**02:19.530–02:28.290** Speaker A, on the three lines:
> Raw ASR: “Legal and technical means, legal and technical. Title search report. Title is clear.”
> Corrected: same. **Legal and technical** is what it says (they insist on the words). **Title search report**; **title is clear** = what that row is for. On-screen labels match; ASR does not need a bank rename.

**02:31.530–02:47.030** Speaker A:
> Raw ASR: “This is mandatory. The bank does it. Even if you have done it, the report will not be accepted by the bank. The customer has to be fully proofed.”
> Corrected: **This is mandatory** (p≈0.99). **The bank does it. Even if you have done it, the report will not be accepted by the bank.** “Fully proofed” (p≈0.69) → **fully proved** (title / legal proof) — do not invent a KYC product. Same avoid-question as processing fee (`02`), different answer: **bank’s own** legal, title, valuation; **not** your brother’s report.

They close this drawer only after the save-money / Flights talk (`05`). At **07:00.580–07:06.060** they come back: “Property check charges and technical guidance search” → **legal and technical** + **title search** (ASR **technical** p≈0.0007, **guidance** p≈0.08, **search** p≈0.03). That second pass is layout (`08`), not a new meaning.

## First-principles problem
- What must be true: the customer sees **why** this rupee exists — bank-instructed legal, title, valuation — and that a **private lawyer’s report is not a substitute**.
- Root vs symptom: listing ₹13,300 without that rule invites “my brother is my lawyer.” The foot already says industry average / GST extra; it does **not** say the bank will not accept your report.
- Constraints: keep the three named rows. Keep “typical average / GST extra” as data honesty. Add the **mandatory / bank does it / won’t accept yours** fact they dictated.

## Directions they considered
- Name **legal and technical**, **title search**, title clear.
- Write: **mandatory**; **the bank does it**.
- Explicit: even if you already did it, **the bank will not accept that report**.
- Lean: same honesty job as processing-fee mandatory (`02`), on this column.

## Company / user / future thinking
- User: tries to save this money the same way they try to avoid processing fee — DIY / family lawyer.
- Company: independent comparison still has to say when a saving is **fake**. Accepting “bring your brother’s report” would be a lie.
- Future: `05` is real saving (pick cheaper banks / intelligence). `wb-rec-260816-0013` opens **SBI property check** again within seconds, then government charges — meaning continues; layout continues in `08`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `PROPERTY_CHECK_NOTE`, `PROPERTY_CHECK_CHARGE_NAMES` (**Legal and technical / Title search report / Valuation**) in `src/home-loan-compare.js`; drawer foot on `propertyCheckCharges`.
- Acceptance criteria in their words: “my brother is my lawyer”; “this is mandatory”; “the bank does it”; “even if you have done it, the report will not be accepted by the bank.”
- What NOT to do: do not imply the customer can substitute their own lawyer’s title search. Do not delete the three-row breakdown. Do not treat “industry average” as the full meaning.
- Open questions: whether every lender truly refuses third-party reports (they stated it as the rule). How this sits next to GST-extra.
- Related recordings:
  - continues_from: `02` (avoid / mandatory — now on property check)
  - continues_in: `05` (still in this drawer: save money); `08` (SBI / Punjab & Sind drawers — bar flow); `wb-rec-260816-0013` (SBI property check again, then government charges)

## Evidence index
- `audio.vtt` 02:00.500–02:47.030; 07:00.580–07:06.060
- `audio.json`: **brother** p≈0.59; **mandatory** p≈0.99; **proofed** p≈0.69; later **guidance search** very low
- `events.json`: Indian Bank property check t=128253 (₹13,300); click legal-and-technical amount t=132671; Close t=259486
- `screenshots/0014.png`–`0016.png` (Indian Bank ₹13,300); later `0055.png`–`0056.png` (SBI); `0061.png`–`0062.png` (Punjab & Sind)
- `replay.spec.ts`: `tr:nth-of-type(1) > td:nth-of-type(3)`; drawer `span:nth-of-type(2)`
- On-screen three rows + foot: typical average, GST extra — **not** “bank won’t take your report”
