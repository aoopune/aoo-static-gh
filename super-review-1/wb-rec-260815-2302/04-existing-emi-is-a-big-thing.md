# Existing EMI is a big thing — they click that field

After the rejection story they name the cause: they **get card to card** but not **such a card**, **because this existing EMI is a big thing**.
They **focus and click** the Existing EMIs box (₹555, leftover) while saying it.
Helper on the page: it **lowers how much new loan you can get**.
Utilization / FOIR as “also one thing” is the next breath (`05`).

## Classification
- kind: issue | product
- status: open
- surface: explore-banks / `#hlc-existing-emis` inside `details#hlc-form-more` / label **Existing EMIs** / help “Lowers how much new loan you can get.”
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. No second speaker on these lines.

## Session metadata
- folder: `wb-rec-260815-2302`
- recording id: `1c3a6e22-3a9a-475d-8d5b-350dfe605171`
- clip: 20 of 30
- started_at: 2026-08-15T17:32:34.848Z
- ended_at: 2026-08-15T17:34:36.510Z
- duration_ms: 121662 (~2 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 19
- event count: 34
- console: empty
- tabs: 1
- previous: `03` (card rejected despite salary/score; education); `wb-rec-260815-2249` `05` (existing EMI is **not for everyone**, but still a real number when it exists)
- next: `05` (credit utilization / FOIR — “this is also one thing”)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Extra block **open**. First extra row: **Existing EMIs** ₹**555** (from 2240; they do not retype).
- `0006.jpg` (t=40202) is the still over the ~6 s pause after `03`’s “Oh my god!” — same open card, no new click yet.
- Click/focus (speech ↔ events):
  - **00:42.881** focus `#hlc-existing-emis`
  - **00:42.882** / **00:43.073** two clicks on that textbox (`0007.jpg`, t=43289) — blue underline under **₹ 555**
- `0008.jpg`–`0010.jpg` (t=52201–68203) keep that field focused while they talk utilization/FOIR (`05`) and trust (`06`). No `input`/`fill` — value stays 555.
- On-page help (pages.json): “Lowers how much new loan you can get.” Not required in the recording.

## What they said (faithful, complete)

**00:38.600–00:41.000** Speaker A:
> Raw ASR: “I get card to card, but I don't get such a card.”
> Corrected (cautious): they **do** get **card to card** (other cards / some cards — “card”+“to”+“card” are strong: 0.67 / 0.91 / 0.996) but **not such a card** (the Scapia/HDFC one from `03`). Do not rewrite as a brand we did not hear.
> Recut: this line sits **after** a 6 s pause and **before** they name existing EMI; it is the effect, not a second rejection story.

**00:42.160–00:44.920** Speaker A:
> Raw ASR / corrected: “Because this **existing EMI** is a big thing.”
> **existing** ~0.83, **EMI** ~0.85. Timed with the click on `#hlc-existing-emis`. **This** = the field they are pointing at, and the reason a card/home-loan picture without obligations is incomplete (`03`).

They do not say everyone has an EMI (2249 `05`: not for everyone). They say when it exists, it is **a big thing** — it must be in the comparison (`02`), not lost in a closed dropdown (`01`).

## First-principles problem
- What must be true: **existing monthly obligations** change how much new home loan a bank will give — and, in their example, which credit cards come through. Salary and CIBIL without EMI is the same trap as the card story (`03`).
- Root vs symptom: the field already exists. The root they are arguing is **importance** — it cannot be treated as a tiny optional afterthought if missing it causes a **surprise** (`06`).
- Constraints they implied: it is a big thing; 2249 still said it is not for everyone. Both can be true: situational **and** high-stakes when present.

## Directions they considered
- Close the card analogy by pointing at Existing EMIs and calling it a **big thing**.
- They do not change 555. They do not mandate the asterisk in this sentence (`07` will say “this is all mandatory”).
- Next breath (`05`) adds utilization / FOIR as **also** one thing.

## Company / user / future thinking
- User: may skip a collapsed row and think income + score is enough, then the bank counts current EMIs and the offer dies — trust (`06`).
- Company: full picture includes **current EMIs**. Independent comparison cannot hide a big obligation behind Adjust eligibility.
- Future: 2304 wants pre-fill + a mark of **how important** this column is (stars/meter). Do not delete the field to shorten the form (`01`).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-existing-emis` in `pages/explore-banks.html`, help for Existing EMIs, eligibility that subtracts existing EMIs. Accordion `#hlc-form-more` is the hide (`01`).
- Acceptance criteria in their words: “I get card to card, but I don't get such a card.” “this existing EMI is a big thing.”
- What NOT to do: do not drop Existing EMIs from the dropdown math (`02`). Do not force every customer to invent an EMI (2249 `05`: not for everyone). Do not ship leftover ₹555 as a default. Do not treat the 10% card-load line as this click — that is `05`.
- Open questions: required vs optional is `07` / 2249 `04`. Importance UI is 2304.
- Related recordings:
  - continues_from: `03`; `wb-rec-260815-2249` `05` (not for everyone)
  - continues_in: `05` (utilization / FOIR); `06` (surprise/trust); `wb-rec-260815-2304` (importance of columns)

## Evidence index
- `audio.vtt` 00:38.600–00:44.920
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (card to card; existing EMI)
- `events.json`: focus+click `#hlc-existing-emis` t=42881–43073, screenshot_id 7
- `screenshots/0006.jpg` (pause) / `0007.jpg`–`0010.jpg` (₹555 underlined)
- `pages.json`: Existing EMIs required false; help “Lowers how much new loan you can get.”
- `replay.spec.ts`: `#hlc-existing-emis` clicks
- Site `pages/explore-banks.html`: `#hlc-existing-emis`
