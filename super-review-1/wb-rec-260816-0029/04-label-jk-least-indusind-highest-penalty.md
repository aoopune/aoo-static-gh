# Labels on banks: J&K least penalty for a missed EMI, IndusInd highest

After the reject-on-double rule (`02`) and the underline click (`03`), they want **labels on the bank**. Example they name: **Jammu and Kashmir Bank** = one of the **least** penalties for EMI misses; **IndusInd** (ASR Indus land) = one of the **highest**. “We need to tell this to the **intelligence**.” The table already shows 0.20% vs 24.00%; they want that contrast **named**.

## Classification
- kind: issue | labeling / intelligence input
- status: open
- surface: explore-banks / **Other charges** rows **IndusInd Bank (Home Loan)** and **Jammu and Kashmir Bank (Housing Loan)** in the Overdue charge column. On screen together in `0008.png`–`0011.png`, and again in `0013.png` / `0014.png`.
- viewport: 1366x768 @2x
- speakers: Speaker A (“We need to put labels…” — register shifts from “I” to “We”; still one speaker). ASR not diarized. No Speaker B.

## Session metadata
- folder: `wb-rec-260816-0029`
- recording id: `1ce6b2c1-5803-4478-9e29-c1f823caae0f`
- clip: 29 of 30
- started_at: 2026-08-15T18:59:02.434Z
- ended_at: 2026-08-15T19:01:28.697Z
- duration_ms: 146263 (~2 min 26 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 17
- event count: 58
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: same take `03` (underlines on these same rows)
- next: same take `05` (dump-scroll to table foot; “Interest rate is extraordinary”)

## Where on the page
- Scroll **down** the Other charges list to the I–K banks. **01:04.999** y=1941.5 (`0008.png`); **01:12.065** y=2201; **01:17.363** y=2253 (`0009.png`) as they say Jammu and Kashmir / IndusInd. **01:27.997** y=1866 (`0011.png` t=92200) — pair still in view.
- On-screen pair (do not invent other numbers):

  | Bank | Overdue (this take) | EMI bounce | Grace in subnote |
  |---|---|---|---|
  | **IndusInd Bank** Home Loan | **24.00% p.a.** or ₹100, whichever is higher | **₹750** | No charge up to **3 days** late |
  | **Jammu and Kashmir Bank** Housing Loan | **0.20% p.a.** or ₹200, whichever is higher | **₹200** | No charge up to **15 days** late |

- CSB is also **24.00% p.a.** earlier (`01`); they do **not** name CSB in this span. They name **IndusInd** as the high example while that row is in view.
- No click on either row. Header still says **1 selected** (Bank of Maharashtra from the start). Later stills can look as if IndusInd or J&K is highlighted — `events.json` has **no** checkbox click. Do not treat that as a recorded selection change.
- Neighbours in the same stills: IDFC FIRST **12.00% p.a. or ₹300**, 7-day grace; Karnataka **3.00% p.a.**; Karur Vysya **5.00% p.a.**; Kotak **8.00% p.a.**
- Screenshots: `0008.png`–`0011.png` (t=66199–92200).

## What they said (faithful, complete)

**01:13.930–01:33.030** Speaker A:
> Raw ASR: “We need to put labels on the bank. For example, Jammu and Kashmir Bank. It is one of the least penalty for EMI misses bank. And Indus land bank is one of the highest penalties for EMI misses bank.”
> Corrected: “We need to put **labels** on the bank. For example, **Jammu and Kashmir Bank**. It is one of the **least penalty** for EMI-miss banks. And **IndusInd** Bank is one of the **highest penalties** for EMI-miss banks.”
> ASR **Indus land** (p≈0.59 / 0.60) → **IndusInd** (row on screen). **Jammu** p≈0.81, **Kashmir** p≈0.86. They say **one of** the least / **one of** the highest — not “the only.”

**01:34.670–01:35.950** Speaker A:
> Raw ASR: “We need to tell this to the intelligence.”
> Corrected: same. The least/highest **labels** are inputs to the `02` intelligence (don’t take the double-on-a-miss bank), not decoration.

~10 s of dump-scroll follows (y=1958 → 3207) with no ASR; they land on Yes Bank and say “Interest rate is extraordinary” (`05`). Do not invent talk in that gap.

## First-principles problem
- What must be true: the visitor can **see who is gentle vs savage on a missed EMI** without scanning every % p.a. J&K vs IndusInd is the worked example.
- Root vs symptom: 0.20% vs 24.00% already sits in the column (symptom: the data is there). The root they name is a **label** the **intelligence** can speak (“least penalty” / “highest penalty”).
- Constraints: labels are **for EMI misses**, not for rate. Keep grace and bounce as part of the story (`06` adds bounce into the rupee total). Do not pretend CSB was the named high bank in this sentence.

## Directions they considered
- Put **labels on the bank** (least vs highest EMI-miss penalty).
- Example pair: **J&K** least, **IndusInd** highest.
- **Tell this to the intelligence** (`02`).
- Lean: naming the extremes. They do not ask to remove IndusInd from the list.

## Company / user / future thinking
- User: 24.00% p.a. vs 0.20% p.a. is easy to miss in a long alphabetical list; a label is the glance.
- Company: intelligence that only ranks **rate** will still recommend a 24% overdue bank that is 0.1% cheaper (`02`). Penalty labels are how that intelligence is allowed to **refuse** a bank.
- Future: `06` wants overdue **plus bounce** in the extra-money total (IndusInd bounce ₹750 vs J&K ₹200 is part of “highest”). `07` says this intelligence is already visible in the table spread. 0031 does not continue this label; it goes to language / schemes.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Other-charges row chrome + intelligence copy. Data already in overdue/bounce displays (`tests/run-unit.js` already asserts IndusInd `24.00% p.a.` and J&K `0.20% p.a.`). Do not hard-code two bank names if the real min/max can be derived — they said **one of** least / **one of** highest.
- Acceptance criteria in their words: “put labels on the bank”; “Jammu and Kashmir Bank… least penalty for EMI misses”; “IndusInd… highest penalties”; “tell this to the intelligence.”
- What NOT to do: do not label from rate. Do not invent “Indus land” as a bank. Do not skip bounce/grace when calling someone “highest” (`06`). Do not only tooltip; they said **labels on the bank**.
- Open questions: one badge per extreme vs a scale. Whether CSB (also 24.00% p.a., no “or ₹” / 3-day note in the early stills) shares the “highest” label. Sort vs badge.
- Related recordings:
  - continues_from: same take `02` (intelligence = reject on miss cost), `03` (they are looking at these underlined cells)
  - continues_in: same take `05` (another overdue type at the foot), `06` (bounce in the total)

## Evidence index
- `audio.vtt` 01:13.930–01:35.950
- `audio.json` segments 13–17 (Jammu/Kashmir; Indus land; intelligence)
- `events.json`: scrolls y=1941.5–2253 t=64999–77363; y=1866 t=87997
- `screenshots/0008.png`–`0011.png`
- `tests/run-unit.js`: IndusInd 24.00% p.a. + ₹100 + 3 days; J&K 0.20% p.a. + ₹200 + 15 days
- On-screen: IndusInd **24.00% p.a. or ₹100** / 3 days / bounce **₹750**; J&K **0.20% p.a. or ₹200** / 15 days / bounce **₹200**
