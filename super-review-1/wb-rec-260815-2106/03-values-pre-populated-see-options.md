# Values are already there — they can click See options at once

They ask whether the numbers on the Explore banks card were typed in for the demo. Answer: they are already there; that is how the page is. They click Age and CIBIL, then See options, without filling anything. “Perfect.”

## Classification
- kind: praise | product behavior
- status: not-a-bug
- surface: Explore banks form `#hlc-inputs` / `#hlc-age`, `#hlc-cibil` / button `#hlc-see-options` (label **See options** in the recording; later source says **Compare banks**)
- viewport: 1366×768 @2x
- speakers: Speaker A asks if values are pre-populated. Speaker B: they are already there; this is how it is. Then A: I can click it directly — Perfect.

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1
- previous: `wb-rec-260815-2018` — homepage demo already showed the same sample numbers
- next: `wb-rec-260815-2116` — criticises the **sentences under** these fields, not the fact that values exist

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- On-page values (same as homepage demo): Monthly income **₹ 1,00,000**; Property agreement value **₹ 62,50,000**; Age **35** years; CIBIL **780**; Purpose **Regular**. Occupation on the live shots (`0004.jpg`, `0008.jpg`) is **Self-employed** selected. Homepage demo in `0000.png` showed **Salaried**. Current `explore-banks.html` ships Salaried `aria-pressed="true"`. They do not comment on that mismatch — do not “fix” it from this clip.
- Clicks:
  - **01:04.474** (`t=64474`, shot 9) `#hlc-age` / `getByRole("textbox", { name: "Age*" })` placeholder 35
  - **01:05.564** (`t=65564`, shot 10) `#hlc-cibil` / CIBIL score, placeholder 780
  - **01:11.592** (`t=71592`) `#hlc-see-options` “See options”; **submit** `#hlc-inputs` t=71593 (shot 11)
- Scroll after submit: **01:13.167** y=633.5 → **01:15.445** y=0 → **01:17.144** y=335.5 → **01:18.810** y=454 → **01:19.777** y=504 → **01:20.710** y=576.5 as the table comes in.
- Screenshots:
  - `0008.jpg` (t=64209) — card with defaults
  - `0009.jpg` (t=64875) — Age focused, 35 still there
  - `0010.jpg` (t=65968) — CIBIL 780
  - `0011.jpg` (t=71994) — after See options: Filters rail + lender table (loan amount ₹50,00,000 / tenure 20 on rows)
- What is visible: they never type. Defaults are enough to run compare.

## What they said (faithful, complete)

**00:58.920–01:00.900** Speaker A:
> Raw ASR / corrected: “Are these values pre-populated?”

**01:03.540–01:05.220** Speaker A:
> Raw ASR / corrected: “Did you just put them in?”
> Meaning: did someone type these for the recording, or does the page ship with them?

**01:05.860–01:08.220** Speaker B:
> Raw ASR: “They are already there. This is how it is.”
> Corrected: same (`already` p≈0.06 — weak, but the next line and the clicks confirm built-in defaults, not a one-off paste).

**01:09.280–01:13.080** Speaker A:
> Raw ASR: “If I open this page, I can directly click on it. Perfect.”
> Corrected: if I open this page, I can **directly click** [See options]. Perfect. (`Perfect.` p≈0.78)

**01:16.080–01:16.800** Speaker A (or B):
> Raw ASR / corrected: “Perfect.”

They do not ask to empty the fields, change 1,00,000 / 62,50,000 / 35 / 780, or hide See options until the user types.

## First-principles problem
- What must be true: a first open of Explore banks should already have enough numbers that See options works in one click. Browse before you give a phone number still holds — these are example figures, not identity.
- Root vs symptom: praise of **defaults + an enabled CTA**, not of any one rupee amount.
- Constraints: keep pre-fill. Do not add a blank-form gate.

## Directions they considered
- Confirm defaults are real, then click through. No other direction. Nothing dismissed except the worry that the numbers were a demo fake.

## Company / user / future thinking
- User: land, see plausible income / property / age / CIBIL, hit See options, get a bank table. No homework first.
- Company: this is the compare tool working as “look through everything at your own pace” — sample inputs, not a lead form.
- Future: `wb-rec-260815-2116` will criticise the **sentences under** these fields (monthly income, property agreement value), not the fact that values exist.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-monthly-income`, `#hlc-property-value`, `#hlc-age`, `#hlc-cibil`, `#hlc-see-options` (recorded label **See options**; live submit may now read **Compare banks**).
- Acceptance criteria in their words: values are already there; “if I open this page, I can directly click on it”; “Perfect.”
- What NOT to do: do not ship an empty required form that blocks See options. Do not treat this praise as a request to change the default numbers.
- Open questions: Occupation default (Self-employed on live shots vs Salaried on the homepage mock and current HTML) — unspoken. Leave it.
- Related recordings:
  - continues_from: `02` same white card; homepage demo already showed the same numbers in `2018`’s world
  - continues_in: `04` after the table is up. Input **copy** continues in `wb-rec-260815-2116`

## Evidence index
- `audio.vtt` 00:58.920–01:16.800
- `events.json`: click Age t=64474 shot 9; CIBIL t=65564 shot 10; See options + submit t=71592–71593
- `screenshots/0008.jpg`–`0011.jpg`
- `pages.json` p2 form “Loan inputs”
- `replay.spec.ts` `#hlc-age`, `#hlc-cibil`, `#hlc-see-options`
- Site: `pages/explore-banks.html` default values
