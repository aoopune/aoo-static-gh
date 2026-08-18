# Processing fee in one sentence — fixed or variable, not “successful disbursement”

They walk in from the last clip’s Indian Bank **₹2,500** drawer, close it, and open the Processing fees **\*** note. First ask: **what is a processing fee — one sentence.** A draft — “fixed or variable… for each successful loan disbursement” — is killed: **there is no success.** It is **non-refundable.** Pay the **full fee** on a **sanction letter** (ASR: function letter), not only on a successful application.

## Classification
- kind: issue | copy / meaning
- status: open
- surface: Charges tab / `th#hlc-th-processingFee` (“Open note for mark *”) and Notes accordion **Processing fees (\*)**. On-screen * copy is the login-fee paragraph, not a definition. Table is sorted processing-fee ascending; while they talk they have scrolled to the **dear** end (ICICI / Kotak / RBL **₹96,000**, IDFC FIRST **₹1,44,000**).
- viewport: 1366x768 @2x
- speakers: Speaker A dictates the sentence and the vetoes. Short **“Yes” / “Okay”** likely Speaker B. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260816-0004`
- recording id: `08aa721b-3f2e-484c-b39e-58b789d21095`
- clip: 27 of 30
- started_at: 2026-08-15T18:34:46.547Z
- ended_at: 2026-08-15T18:43:30.319Z
- duration_ms: 523772 (~8 min 44 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 72 (`0000.jpg`–`0001.jpg`, then `0002.png`–`0071.png`)
- event count: 128 (22 clicks, 13 scrolls, 15 focus, 77 idle)
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2355` (~5 s earlier) — three indexes / two stars on these same Charges headers; clip ended on **Show how processing fees for Indian Bank was calculated** (₹2,500). That drawer is still open at this clip’s start.
- next: `wb-rec-260816-0013` (~3 s later) — back on Charges, then government-charge cards duplicated.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” → **Bank options** → tab **Charges** (Overview / Charges / Other charges). Filter **Bank type** All / Public / Private (All selected). Co-applicant **No**. **Apply once** at the table.
- **00:00** leftover drawer from 2355 (`0000.jpg`): **Processing fee · Indian Bank · IB Home Loan** — 1. Flat fee **₹2,500**; “Processing fee shown **₹2,500**”; foot: login fee bundled, “not broken out separately yet.” Table behind: Indian Bank ₹2,500, Nainital ₹4,000, Karur Vysya ₹5,000, Bank of India ₹9,600, Canara / IDBI ₹10,000.
- **00:04.708** click `#hlc-drawer-backdrop` — drawer gone (`0001.jpg`). Charges columns: Processing fees (\*) / Property check charges (\*) / Government charges (^). Govt **₹30,518** on every visible row.
- **00:10.712** click `th#hlc-th-processingFee > button` (“Open note for mark *”). Scrolls **00:12.329** / **00:13.696** take them off the cheap end.
- On-page * copy while they define it (`0003.png`–`0010.png`, t=20–88 s — same frame, they are talking, not clicking):
  - **Processing fees (\*):** “Part of the processing fee is often taken upfront as a login fee to file the application. The amount differs by bank and is included in the processing fee shown — we don’t list it separately yet.”
  - **Property check charges (\*):** “GST applicable. Typical industry average. Exact fees may differ by lender.”
  - **Government charges (^):** “Government charges shown include charges that apply across India and charges specific to Maharashtra.”
  - Visible lenders in that span: ICICI / Kotak / RBL **₹96,000**; IDFC FIRST **₹1,44,000**. Notes **Collapse all** is on.
- They do **not** edit the note. They argue with it. Cheap-end Indian Bank ₹2,500 is **not** in view for this speech.

## What they said (faithful, complete)

**00:20.340–00:29.860** Speaker A, with B:
> Raw ASR: “So, first I want to know what is a processing fee. What is it? I don't know. Yes. But I want to know one sentence.”
> Corrected: same. First job of the * note is a **one-sentence** meaning. “I don't know” = the customer (and they) still don’t have it. **“Yes”** (p≈0.21 on the preceding beat) = B agreeing they still need the sentence.

**00:30.740–00:39.680** Speaker A (trying a sentence):
> Raw ASR: “This is a fixed fee or a variable fee taken by the bank for each successful loan disbursement.”
> Corrected: same shape. **Fixed or variable**, taken by the bank — they keep that. **Successful loan disbursement** is the half they immediately kill. **variable** p≈0.94; **successful** p≈0.92.

**00:39.680–00:54.240** both:
> Raw ASR: “There is no success. It is non-refundable. There is no success. Okay. For each successful application. Not only successful. There is only one application. There is only one successful application. Okay.”
> Corrected: **There is no success** (said twice; second **success** p≈0.97). Do **not** hang the fee on successful **disbursement** or only on a successful application. It is **non-refundable**. “Not only successful.” “Only one application” / “only one successful application” = they are fighting the wording, not inventing a second product. **“Okay”** = B.

**00:55.580–01:01.780** Speaker A, B yes:
> Raw ASR: “There is a function letter. If you want to work with it, you have to pay the full fee. Yes.”
> Corrected: “There is a **sanction letter**. If you want to work with it, you have to pay the **full fee**.” ASR **function** p≈0.29, **letter** p≈0.80. Home-loan English + “pay the full fee to work with it” → **sanction letter**, not a software function. Trigger they name: you pay the full (non-refundable) fee to proceed on the sanction — not “successful disbursement.” **“Yes”** p≈0.28 = B.

They then loop “I want to know what is this processing fee” into `02` (avoid / mandatory).

## First-principles problem
- What must be true: the customer can answer **what is a processing fee** in **one sentence** before comparing ₹2,500 with ₹1,44,000.
- Root vs symptom: the * note today explains **login fee bundled in**, not what the fee **is**, when it is due, or that it is not a success bonus. They opened that exact paragraph, scrolled to the dear banks, and still said “I don't know.” The rejected “successful disbursement” line is the wrong root (success), not a missing asterisk.
- Constraints they implied: keep **fixed or variable**; keep **non-refundable**; attach payment to **sanction letter** / proceeding, not to disbursement success. Login-fee bundling can stay as a second fact — they did not delete it here.

## Directions they considered
- One sentence first: what it is.
- Fixed **or** variable, taken by the bank.
- Explicit veto: **no “successful disbursement”** / not only successful.
- State **non-refundable**.
- Name **sanction letter**; pay the **full fee** if you want to work with it.
- Lean: copy they are dictating, not a layout nit.

## Company / user / future thinking
- User: lands on Charges, sees rupees (here the **₹96,000 / ₹1,44,000** cluster), still “I don't know” what the column **is**.
- Company: Shroffin is independent comparison — the first honesty job on this column is meaning, not only a login-fee footnote.
- Future: `02` adds mandatory / can I avoid; `03` splits private vs public min/variable and “there is no guide.” Do not treat this clip as closed after one sentence.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `PROCESSING_FEE_LOGIN_NOTE` in `src/home-loan-compare.js` (the * paragraph they had open); Charges notes render around `hlc-charge-note-`; drawer foot on `calculationKey === "processingFee"`; `th#hlc-th-processingFee` * control.
- Acceptance criteria in their words: “I want to know one sentence”; “fixed fee or a variable fee”; “there is no success”; “it is non-refundable”; “sanction letter”; “pay the full fee.”
- What NOT to do: do not ship “for each successful loan disbursement.” Do not replace the definition with only the login-fee * note. Do not invent amounts in the sentence. Do not leave ASR “function letter” in UI. Do not write the sentence as if they were still looking at Indian Bank ₹2,500 — that drawer was closed.
- Open questions: exact one-sentence wording (they rejected a draft; they did not lock a replacement line). Whether sanction-letter timing is true for every bank they list. How “only one application” should sit next to **Apply once**.
- Related recordings:
  - continues_from: `wb-rec-260815-2355` — Apple-style underlined marks / two stars on this same Notes area; they now say what the * note must **mean**
  - continues_in: `02` (mandatory / avoid), `03` (private vs public; no guide)

## Evidence index
- `audio.vtt` 00:20.340–01:01.780
- `audio.json` words: **function** p≈0.29; **successful** / **success**; **variable** p≈0.94
- `events.json`: leftover processing-fee focus t=4604 (₹2,500); backdrop t=4708; `th#hlc-th-processingFee` click t=10712; scrolls t=12329 / 13696
- `screenshots/0000.jpg` (leftover Indian Bank drawer), `0001.jpg` (Charges after close), `0002.png` (mid-table after * click), `0003.png`–`0010.png` (dear cluster + login-fee Notes)
- `replay.spec.ts`: backdrop, then `th#hlc-th-processingFee > button`
- `pages.json` / `RECAP.md`: Explore banks, Charges headings, Loan inputs still on the page
- `manifest.json` viewport 1366×768 dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site: `PROCESSING_FEE_LOGIN_NOTE` — login fee bundled; **not** a definition of processing fee
