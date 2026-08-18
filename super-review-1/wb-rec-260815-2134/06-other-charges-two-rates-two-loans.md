# Other charges: self-funds vs balance transfer — they want two rates, two loans

At the end they leave the CIBIL talk, scroll the table into view, and open **Other charges**. They look at **prepayment** (ASR “repayment”) and **self-fund**, switch the method to **balance transfer**, say it **will not change**, then: “No, no. I want 2 rates. I want 2 loans.” They click back to **Overview**, which still shows **one** Rate per bank.

## Classification
- kind: discussion | product / Other charges + Overview
- status: open
- surface: explore-banks / `section#hlc-results-shell` tabs **Other charges** / **Overview**; combobox **Prepayment method** (`th#hlc-th-prepaymentChargeDisplay` → `ownFunds` / `balanceTransfer`)
- viewport: 1366x768 @2x
- speakers: one run of talk while they click. Short “No, no” then the 2-rates / 2-loans ask. ASR unlabeled.

## Session metadata
- folder: `wb-rec-260815-2134`
- recording id: `1965821a-27df-4039-8e62-b268e8696a5b`
- clip: 11 of 30
- started_at: 2026-08-15T16:04:29.489Z
- ended_at: 2026-08-15T16:10:04.857Z
- duration_ms: 335368 (~5 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 40 (JPEG)
- event count: 53
- console: empty
- tabs: 1
- previous: `04` / `05` in this folder (one shown rate; show what is possible). Not the `2125` CIBIL-only debate.
- next: skip `wb-rec-260815-2201` (off-topic bar chat). Next real: `wb-rec-260815-2204` restates income / CIBIL / property levers, not this tab.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Sequence (events + shots):
  - **05:02.637** (`t=302637`) **focus** `#hlc-cibil` (CIBIL 780) — brief; not a value change.
  - **05:03.794** (`t=303794`) **scroll** y=**337.5** — results table into view (Age / CIBIL / occupation still in the top card).
  - **05:04.784** (`t=304784`) **click** `getByRole("tab", { name: "Other charges" })` — `0035.jpg`. Other charges active; lenders PNB, Canara, Bank of Baroda, City Union; charge columns blacked out by heuristic masks.
  - **05:07.930** (`t=307930`) **click** `getByRole("combobox", { name: "Prepayment method" })` — `0036.jpg`. Columns: Prepayment charge (self-funds / own-funds method visible), Rate change charge (Fixed → Floating), Overdue charge. PNB prepayment **2.00%**; Canara / BoB **Nil (₹0)** on that method in this shot. Canara rate-change min **₹250** / max **₹25,000**.
  - **05:12.565** (`t=312565`) **fill** Prepayment method = `balanceTransfer`.
  - **05:15.017** (`t=315017`) **click** the same combobox again — `0037.jpg`. Header shows **Balance transfer**; PNB still 2.00%; Canara prepayment now **2.00%** (was Nil); BoB prepayment **0.50%** (was Nil). So BT **did** change some charge cells.
  - **05:17.093** (`t=317093`) **click** `getByRole("tab", { name: "Overview" })` — `0038.jpg` (Overview, amount columns masked) then `0039.jpg` (t=326205): PNB **8.75%** / ₹50,00,000 / 20 yrs / ₹44,186; Canara 8.80%; BoB 9.15%; City Union 9.35%. **One Rate column.**
- Replay: `replay.spec.ts` clicks Other charges → Prepayment method → fill `balanceTransfer` → Overview.
- Live option label in current `src/home-loan-compare.js` is **Self funds** (`PREPAYMENT_METHOD_OWN`) vs **Balance transfer**. ASR said **self-fund**. Events name the control **Prepayment method**.

## What they said (faithful, complete)

**05:01.660–05:09.180** while Other charges / self-funds come up:
> Raw ASR: “The repayment charge and the self-fund will be 300.”
> Corrected: **repayment ≈ prepayment** (they open the Prepayment method control). **self-fund ≈ Self funds** (the method shown before Balance transfer). **“300”** is what ASR heard (p≈0.30); it does not match a labelled “300” on `0036.jpg` (nearby figures include Canara rate-change min **₹250** / max **₹25,000**). Keep **300** as spoken; do not invent a charge of ₹300.

**05:11.380–05:15.980** as they set Balance transfer:
> Raw ASR: “The balance transfer will not change. No, no.”
> Corrected: they **select Balance transfer** and say it **will not change** — then **no, no**. On the recording, own-funds vs BT **does** change at least Canara’s and BoB’s prepayment (Nil → 2.00% / 0.50%). Overview **rates** after they return (`0039.jpg`) are still a single percent per bank — BT did **not** change those. They do not say which number they expected to move.

**05:16.120–05:20.020**:
> Raw ASR / corrected: “I want 2 rates. I want 2 loans.”
> Immediately after the BT / “will not change” beat, they click **Overview**. They want **two rates** and **two loans**. They do not say “two columns,” “self funds vs BT side by side,” or “680 vs 700.” Those are possible readings from this clip + `05`; they only said **2 rates** and **2 loans**.

## First-principles problem
- What must be true: prepayment **method** (self funds vs balance transfer) is a real fork, and they also want **more than one rate / loan picture** at a time.
- Root vs symptom: “BT will not change” is what they said while switching a **charge** dropdown. Overview then still shows **one** Rate. The root ask at the end of the sentence is **two rates, two loans** — one view is not enough for the comparison they are trying to see (method fork, and/or `05`’s now vs raised CIBIL).
- Constraints: they used the existing Other charges tab and the existing Prepayment method select. They did not ask to remove those. They asked for **two**.

## Directions they considered
- Look at prepayment + self-funds on Other charges.
- Switch to **balance transfer**.
- Reject a “it will not change” outcome — **no, no**.
- **Two rates, two loans** — **lean**, unspecified layout.
- Return to Overview (one rate per lender still).

## Company / user / future thinking
- Company: Shroffin already splits prepayment by method; Overview does not. A visitor choosing BT vs self funds, or today’s CIBIL vs a raised CIBIL (`05`), cannot see two loan pictures without flipping a control and losing the first.
- User: they said they want two rates and two loans — two outcomes, not a single 8.75%.
- Future: `2204` restates changing parameters to save money; it does not re-open Other charges. File the 2-rates ask here so it is not lost inside the CIBIL thread. Skip `2201`.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Other charges tab (`data-group="laterCharges"`), `select` Prepayment method (`balanceTransfer` vs `ownFunds` / Self funds) in `src/home-loan-compare.js`; Overview Rate column.
- Acceptance criteria in their words: they looked at **repayment / self-fund** and **balance transfer**; then “I want 2 rates. I want 2 loans.”
- What NOT to do: do not treat this as only a CIBIL note. Do not ship a fake ₹300 from ASR. Do not assume they dismissed Other charges — they used it, then asked for two outcomes.
- Open questions: are the two rates **self funds vs BT**, **two lenders**, or **two CIBIL scenarios** from `05`? They said both “2 rates” and “2 loans” after the BT click and Overview return. Unresolved.
- Related recordings:
  - continues_from: same-session `04` / `05` (one shown rate; show what is possible).
  - continues_in: not `2201`. `2204` restates income / CIBIL / property levers, not this tab.

## Evidence index
- `audio.vtt` 05:01.660–05:20.020
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (repayment, self-fund, 300, 2 rates, 2 loans)
- `events.json`: focus `#hlc-cibil` t=302637; scroll y=337.5 t=303794; click Other charges t=304784 screenshot_id 35; click Prepayment method t=307930 screenshot_id 36; fill `balanceTransfer` t=312565; click Prepayment t=315017 screenshot_id 37; click Overview t=317093 screenshot_id 38
- `screenshots/0035.jpg`–`0039.jpg`
- `replay.spec.ts` same Other charges → BT → Overview path
- `RECAP.md` timeline 05:04–05:17
- Site: `pages/explore-banks.html` Other charges tab; `src/home-loan-compare.js` Self funds / Balance transfer options; CSS `.hlc-prepay-header-select[data-prepay-method="balanceTransfer"]`
