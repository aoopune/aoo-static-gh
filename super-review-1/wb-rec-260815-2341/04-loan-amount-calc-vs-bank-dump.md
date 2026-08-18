# Loan amount opens calculations — Bank of Maharashtra opens the dump

They prove two doors. Click **₹48,00,000** and you get the numbered Loan amount calc. Click under **Bank of Maharashtra** / **More** and you get the dump of all More details. Same cue family; two destinations. It should not be a big deal (tiny mark), but the dump must not pretend it is “more calculations.”

## Classification
- kind: issue | information architecture / two click targets
- status: open
- surface: Overview row 1: `getByRole("button", { name: "Show how loan amount for Bank of Maharashtra was calculated" })` (**₹48,00,000**); `getByRole("button", { name: "More about Bank of Maharashtra" })`; EMI `Show how emi …` is demoed in `05`. `#hlc-drawer` title switches **Loan amount** vs **More details**.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized.

## Session metadata
- folder: `wb-rec-260815-2341`
- recording id: `a22402c8-4a16-4e52-8736-ec1980e3cab1`
- clip: 25 of 30
- started_at: 2026-08-15T18:11:25.578Z
- ended_at: 2026-08-15T18:20:59.868Z
- duration_ms: 574290 (~9 min 34 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 84 (JPEG)
- event count: 128
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2
- previous: `03` (plus / don’t guess underline)
- next: `05` (tell people what is inside so they click)

## Where on the page
- **04:17.105** loan amount ₹48,00,000 (`0038.jpg`) — six-step **Loan amount** drawer: Property limit ₹48,00,000; Income allowance ₹55,000; Credit-card load ₹0; Monthly EMI available ₹54,445; Income limit **240 months** → ₹68,88,494; Lowest → ₹48,00,000. Close **04:21.291**.
- **04:30.952** More again (`0041.jpg`); Scheme chevron **04:32.847** (`0042.jpg` all seven groups collapsed); close **04:41.741** — this is the frame they call **the dump of all information**.
- ASR says “more calculations” on the bank-name path; events contradict: loan amount → calc; More → Scheme dump.
- Screenshots: `0038.jpg`–`0043.jpg`.

## What they said (faithful, complete)

**04:13.990–04:35.930** Speaker A (they click ₹48,00,000 then More to demonstrate):
> Raw ASR: “There is something. If you put it on a loan amount, it will give you more calculations. It will give you more calculations. If you put it under the bank of Maharashtra, it will give you more calculations. If you put it under the bank of Maharashtra, it will give you more calculations. It should not be a big deal. I think it is important information. This is the dump of all information.”
> Corrected: “If you put it on a **loan amount**, it will give you more **calculations**. If you put it under **Bank of Maharashtra**, it will give you **[More details]**.” ASR repeats “more calculations” on the bank-name path (second “calculations” p≈0.03). Events: loan amount → calc drawer; More → Scheme dump. They then open More and call it **the dump of all information** (`0042.jpg` seven collapsed groups). “Should not be a big deal” = the cue can be tiny (`03`).

Gap **04:35–04:45**: idle after calling it a dump; no VTT until “It is clickable” in `05`.

## First-principles problem
- What must be true: **scheme book** and **how ₹48L was calculated** stay two doors. The customer must not think they are the same click.
- Root vs symptom: both drawers exist. The failure is one cue language (“more”) covering two jobs, plus More opening a collapsed dump with no preview.
- Constraints: do not send loan-amount clicks and More clicks to the same drawer. Keep both.

## Directions they considered
- Loan amount → calculations (they demonstrate).
- Under Bank of Maharashtra → the dump of all information (they demonstrate).
- Tiny cue (`03`) is compatible with two destinations.
- Lean: keep both targets; stop treating them as one “more.”

## Company / user / future thinking
- User: clicks ₹48L expecting why that number; clicks More expecting the scheme they take to the manager (`01`). Mixing those jobs wastes the honesty layer.
- Company: calculated money (`07`) and the scheme book (`02`) are both Shroffin jobs.
- Future: `05`–`06` fix how you **label** the doors. `07` is what the loan-amount click deserves once people can find it.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: loan-amount button vs More button in `src/home-loan-compare.js`; `#hlc-drawer` title **Loan amount** vs **More details**.
- Acceptance in their words: loan amount “will give you more calculations”; under Bank of Maharashtra is “the dump of all information”; “should not be a big deal.”
- What NOT to do: do not merge calc and More into one drawer. Do not remove either. Do not add a fat column (`03`).
- Open questions: preview of the seven More details groups vs leaving them collapsed.
- Related recordings:
  - continues_from: `03`
  - continues_in: `05` (say what is inside). `07` (they settle into the calc).

## Evidence index
- `audio.vtt` 04:13.990–04:35.930
- `events.json`: loan amount t=257105; close t=261291; More t=270952; Scheme chevron t=272847; close t=281741
- `screenshots/0038.jpg`–`0043.jpg`
- `replay.spec.ts` loan-amount button then More
- On-screen: Loan amount six steps vs More details seven collapsed groups
