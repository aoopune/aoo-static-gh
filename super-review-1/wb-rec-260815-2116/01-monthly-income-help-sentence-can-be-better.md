# Monthly income help starts with “Sets” — that verb fails

They open the first field’s **i** and read the line aloud: “how much loan banks can offer you.” They call it the **main eligibility** sentence, say twice that it can be better, and name the craft fault: **the sets don’t work.** No replacement sentence is drafted here.

## Classification
- kind: issue | copy
- status: open
- surface: Explore banks / `form#hlc-inputs` / `#hlc-monthly-income` / `button[aria-label="About Monthly income"]` / `#hlc-help-monthly-income` `.hlc-field-help-text`
- viewport: 1366×768 @2x
- speakers: Speaker A reads the popover and names the **sets** problem. ASR is not diarized. Speaker B is not heard on this span.

## Session metadata
- folder: `wb-rec-260815-2116`
- recording id: `cff0d45a-1eff-4415-a374-98232f3208a8`
- clip: 9 of 30
- started_at: 2026-08-15T15:46:08.706Z
- ended_at: 2026-08-15T15:55:10.521Z
- duration_ms: 541815 (~9 min 2 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 95 (`0000.png`–`0001.png`, then `0002.jpg`–`0094.jpg`)
- event count: 183 (kinds: click, focus, idle, landmark_snapshot, scroll)
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- ASR: `audio.json` language `en`; first speech **01:06.120** (silent ~66 s before that)
- previous: `wb-rec-260815-2106` ended 15:45:24Z (~44 s earlier) — filter **i**s; last line “You should explain it like this. We should learn this.” They left the live tool on filters (Bank type **Private**, Rate **Fixed**).
- next: `wb-rec-260815-2125` starts 15:55:21Z (~11 s later) on **CIBIL**, not this sentence.

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` — title “Explore banks – Shroffin”
- Session opens on the **results** rail, not the form: `screenshots/0000.png` (t=188) Bank type **Private**, Rate **Fixed**, Facility **Term loan**, Overview tab, “Data last checked on 14 July 2026”, table body blank.
- **00:07.075** focus Term loan; **00:07.148–00:07.149** focus+click `getByRole("button", { name: "All" })` (`aside#hlc-filters-panel` … Bank type). `0001.png` (t=7478): **All** selected; still on filters.
- **00:44.948** click `main > div > header > h1 > span` — back to the Loan inputs card (`0006.jpg`).
- Monthly income **i**: focus **00:51.102** `getByRole("button", { name: "About Monthly income" })`; clicks **00:51.103 / 00:51.645 / 00:51.913** (SVG circles, `0007.jpg`–`0008.jpg`); again **01:09.688 / 01:11.016 / 01:11.554**; speech starts **01:06** with the popover already in play.
- On-page popover (`#hlc-help-monthly-income`, confirmed on `0009.jpg` t=60189 and `0014.jpg` t=80189):
  - “**Sets how much loan banks can offer you. Use take-home, not CTC.**”
  - “Learn more” → `guide.html#loan-amount`
- Rest of card (unchanged this beat): Monthly income ₹1,00,000; Property agreement value ₹62,50,000; Age 35 years; CIBIL 780; Occupation **Self-employed**; Purpose **Regular**; **Adjust eligibility** closed (“Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”); **See options**.
- What the frames show: they are auditing the **income i**, not typing, not opening Adjust eligibility.

## What they said (faithful, complete)

**01:06.120–01:17.720** Speaker A:
> Raw ASR: “So this sentence, how much loan banks can offer you. You stay home, not CDC.”
> Corrected: “So this sentence, **how much loan banks can offer you**. **Use take-home, not CTC.**”
> ASR: **You stay home, not CDC ≈ Use take-home, not CTC** (`stay` p≈0.80, `home` p≈0.97, `CDC.` p≈0.54). Matches the popover on `0009.jpg` / `0014.jpg`. Not CIBIL (that field is 780 on the same card; next clip). **CDC ≈ CTC** (cost to company).

**01:17.960–01:33.380** Speaker A:
> Raw ASR / corrected: “This sentence can be better. This is your **main eligibility criteria**. I don’t know.”
> “I don’t know” is him still hunting a rewrite, not dismissing the field.

**01:33.380–01:39.340** Speaker A:
> Raw ASR / corrected: “The sentence can be better. The problem with this sentence is that **the sets don’t work.**”
> On-page first word is **Sets**. `sets` p≈0.62.

They do not offer a new sentence in this span. Customer-voice “why monthly income?” and keeping take-home vs CTC continue in `02`. The same **sets** fail is named again on the property popover in `03`.

## First-principles problem
- What must be true: the first help line on the first required field must tell a stranger, in one read, what this number **does** to the loan they came to compare. They call it **main eligibility**, so it cannot sound like an internal calculator caption.
- Root vs symptom: “the sentence can be better” is the symptom. Root: the line is built as a system statement (**Sets** X) instead of a person-facing reason.
- Constraints they implied: keep the meaning (this number is what banks use for how much loan they can offer). Do not leave **sets**. Do not treat this as a small tooltip nit.

## Directions they considered
- One direction: rewrite the sentence; **sets** is the named failure.
- No alternate wording is locked. Lean: real copy bug on the primary field, not taste.

## Company / user / future
- User: arrives to compare banks; the first ask is monthly income. The **i** must make that ask feel like eligibility they understand.
- Company: Shroffin is a comparison platform, not a lender. This line is **indicative** for the table — banks still decide. The copy must not sound like Shroffin is sanctioning the loan.
- Future: they will run the same sentence test on every **i** on this card (`06`). Age already uses “Sets the longest tenure…”. Same family. Next recording jumps to CIBIL input, not this rewrite.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-help-monthly-income` `.hlc-field-help-text` (and any shared help-copy source if this string is duplicated).
- Acceptance criteria in their words: “this sentence can be better”; “this is your main eligibility criteria”; “the sets don’t work.”
- What NOT to do: do not drop take-home vs CTC (they keep that in `02`). Do not rewrite the Monthly income **label**. Do not map CDC→CIBIL.
- Open questions: the replacement sentence is not drafted here; `02` adds the customer questions the new line must answer.
- Related recordings:
  - continues_from: `wb-rec-260815-2106` — “tell the trade-offs here”; “you should explain it like this” on filter **i**s. They now apply that to Loan inputs.
  - continues_in: this folder `02` (why income / take-home not CTC), `03` (same **sets** on property), `06` (rest of the form). Next session `wb-rec-260815-2125` is CIBIL.

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.text` / `audio.lrc` / `audio.srt` / `audio.tsv` / `audio_sentences.txt` 01:06.120–01:39.340
- `audio.json` language `en`; words `CDC.` p≈0.54; `sets` p≈0.62
- `events.json`: All t=7149; `h1 > span` t=44948; About Monthly income t=51102–71554
- `replay.spec.ts`: `#hlc-filters-panel` All; then Monthly income SVG clicks
- `pages.json` / `RECAP.md` form help: “Sets how much loan banks can offer you. Use take-home, not CTC.”
- `screenshots/index.json` + `0000.png`–`0001.png` (filters), `0009.jpg` / `0014.jpg` (popover)
- `manifest.json` viewport 1366×768 dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- Site `pages/explore-banks.html` `#hlc-help-monthly-income`
