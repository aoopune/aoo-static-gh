# First job is save money — Google Flights analog; intelligence is cheap; give a comfortable table

Still in the Indian Bank property-check drawer they change job: **you have to save money** — that is the **first** thing. Public-bank rupees here are **one of the cheapest fees**. They reach for **Google Flights**: sit in a chair, search and check, don’t work like a broker. **Intelligence has become cheap** (said four times). Give a **comfortable table**.

## Classification
- kind: issue | product / positioning of the Charges table
- status: open
- surface: Charges table + Indian Bank property-check drawer still open (`0016.png`–`0030.png`) until Close **04:19.486**. They are looking at cheap processing fees (Indian Bank **₹2,500**) while talking Flights / intelligence.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. Repeats (“comfortable table,” “I can do a broker,” “so cheap”) are A insisting.

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
- next: `wb-rec-260816-0013` (~3 s later) — “this is also intelligence. To save money.” (floating / CIBIL)

## Where on the page
- Drawer still **Property check charges · Indian Bank · IB Home Loan** (`0016.png`–`0030.png`): Legal ₹4,000 / Title ₹4,400 / Valuation ₹4,900 / Total **₹13,300**. Table behind: processing fees sorted ascending — Indian Bank ₹2,500, Nainital ₹4,000, Karur Vysya ₹5,000, Bank of India ₹9,600, Canara / IDBI ₹10,000, Bank of Maharashtra ₹12,000.
- No Google Flights UI. Analog is spoken only.
- **04:19.486** they Close this drawer and open Canara processing fee (`06`) — moving from “cheapest” to “maximum applied / highest.”

## What they said (faithful, complete)

**02:52.890–03:09.210** Speaker A:
> Raw ASR: “You have to save money. The first thing you have to do is save money. Don't worry, we have the same page. We have the same page.”
> Corrected: **Save money** is the **first** thing (said twice). “Don't worry, we have the same page” — keep raw; likely “we’re on the same page” / this page **is** that job. Do not invent a second URL.

**03:17.080–03:24.800** Speaker A:
> Raw ASR: “This is one of the cheapest fees.”
> Corrected: same. Matches the **low** end of Processing fees on screen (Indian Bank ₹2,500 and neighbours), not DCB/IDFC.

**03:27.040–03:41.570** Speaker A:
> Raw ASR: “Google flight service. What is the name of this app? Search and check.”
> Corrected: **Google Flights**. ASR **Google** p≈0.21, **flight** p≈0.52, **service** p≈0.08. Analog: compare fares, cheapest visible, sit and check. “What is the name of this app? Search and check” = they are naming that analog (search + check), not a new Shroffin feature name.

**03:51.850–04:15.820** Speaker A:
> Raw ASR: “I have to sit in a chair. I haven't done anything. You have to give a comfortable table. You have to give a comfortable table. If you are a broker, I can do a broker. I can do a broker.” (×4)
> Corrected: **Sit in a chair**; the user **hasn’t done anything** (shouldn’t have to work). Give a **comfortable table** (the compare table — first **comfortable** p≈0.69; the immediate repeat of “comfortable table” is near-zero probability but they said the phrase twice). **If you are a broker, I can do a broker** (last **broker** p≈0.999) — intelligence on this table does the broker’s job; do not invent a broker product. Four repeats = insist, not four designs.

**04:19.720–04:24.660** Speaker A (as they close / move on):
> Raw ASR: “Intelligence has become cheap. It has become so cheap.” (×4)
> Corrected: same. **Intelligence has become cheap** (**Intelligence** p≈0.35) — so the table can carry what used to need a broker. This is the product thesis for labels in `06`, not a price cut on EMI.

## First-principles problem
- What must be true: Charges is a **save-money** surface first — cheapest visible, like Flights — without making the user **do broker work**.
- Root vs symptom: a dense rupee table without “cheapest / this is the job” still makes people work. The root is **intelligence on the table** (cheap to provide now), not a prettier drawer.
- Constraints: `04` already forbade fake saving (brother’s report). Real saving = compare banks. Comfortable **table**, not a new app name.

## Directions they considered
- First thing: **save money**.
- Call out **one of the cheapest fees** (the low end they are looking at).
- **Google Flights** analog: search and check, sit in a chair, don’t work.
- **Comfortable table** (×2).
- Broker work replaced by the table.
- **Intelligence has become cheap** (×4) — so use it.
- Lean: this is the job of Explore banks Charges, not a side blog.

## Company / user / future thinking
- User: should save by **seeing** cheap vs dear banks, not by skipping mandatory fees (`02`/`04`).
- Company: Shroffin is independent comparison — full picture, banks compete. Flights analog = make that competition **legible** without a broker.
- Future: `06` is the other half — **label the highest** processing-fee banks. Next clip says (garbled ASR) they return to **intelligence to save money** on floating/fixed / CIBIL — same thesis, next charges.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Charges table intelligence (cheapest / save-money cues), not a new page. Pair with `06` highest labels so both ends of the column speak.
- Acceptance criteria in their words: “the first thing you have to do is save money”; “one of the cheapest fees”; “Google Flights”; “comfortable table”; “intelligence has become cheap.”
- What NOT to do: do not save money by hiding mandatory fees (`02`/`04`). Do not ship a fake “broker mode.” Do not name the product “Search and check.” Do not treat “same page” as a new URL.
- Open questions: visual form of “cheapest” (sort is already ascending; they still want intelligence). How Flights-like the Charges tab should feel vs Overview.
- Related recordings:
  - continues_from: `04` (same drawer; fake save vs real save)
  - continues_in: `06` (highest labels — the other end of save money); `wb-rec-260816-0013` — “this is also intelligence. To save money.”

## Evidence index
- `audio.vtt` 02:52.890–04:24.660
- `audio.json`: **Google** p≈0.21, **flight** p≈0.52; **comfortable** / **broker** / **Intelligence**
- `events.json`: idle in Indian Bank property-check drawer; Close t=259486
- `screenshots/0016.png`–`0031.png`
- On-screen cheap processing: Indian Bank **₹2,500** at top of sort
