# Co-applicant Yes adds more fields — they say it increases the loan amount

They click **Co-applicant → Yes**. Extra income / EMIs / card-limit rows appear.
ASR has them not wanting to **give ideas to any applicant**; **Yesterday** is noise (~0.02).
Then: **because it increases the loan amount.**
They never open the **i** help. Counting and “who pays” — then they click **No** — are `09`.

## Classification
- kind: discussion | product (co-applicant expand + effect)
- status: open
- surface: explore-banks / `#hlc-coapplicant-row` pills **No** / **Yes**; hidden `#hlc-coapplicant`; when Yes: Co-applicant income, Co-applicant EMIs, Co-applicant card limits (`#hlc-coapplicant-fields`). Recording `pages.json` (Co-applicant income, popover not opened): “Added to yours for eligibility.”
- viewport: 1366x768 @2x
- speakers: Speaker A on applicant / loan amount. ASR not diarized. Language tag `mr` — later “applicant” lines are messy; the **Yes click** is the anchor.

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
- previous: `07` (all mandatory / do everything); `wb-rec-260815-2249` `05` (co-applicant is not for everyone; “how does this co-applicant make a difference?”)
- next: `09` (count / who pays; they click **No**)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Extra block **open**, Co-applicant **No** through `0013.jpg` (t=84202).
- **01:27.684** focus+click **Yes** (`div#hlc-coapplicant-row … button:nth-of-type(2)`), `0014.jpg` (t=88086)
- **01:28.588** fill `#hlc-coapplicant` = `"yes"`
- Visible after Yes: Co-applicant **income** ₹0, **EMIs** ₹0, **card limits** ₹0 (redaction boxes on some labels in `0014.jpg` / `0015.jpg`).
- **01:30.822** scroll `y=333.5` — extra block + new rows push the card; table header (Overview / Apply once) enters the bottom of `0015.jpg` (t=96202).
- They do not type rupee amounts in the new fields.

## What they said (faithful, complete)

**01:22.370–01:25.330** Speaker A:
> Raw ASR: “Yesterday, I didn't want to give ideas to any applicant.”
> Corrected: **Yesterday** ≈ **0.02** — discard that word. Rest: they **didn’t want to give ideas to any applicant**. **applicant** ~0.90. Two seconds later they click **co-applicant Yes**. Read **applicant** as **co-applicant / a second applicant**, not a random third party. **Give ideas** is **not** cleaned to a specific verb — could be details, prompts, or “put another person on the form.” Do not rewrite as a “don’t give gaming ideas” rule unless they say that (they don’t here).

**01:26.670–01:28.510** Speaker A:
> Raw ASR: “Because… I don't want to give ideas to any other applicant.”
> Corrected: same caution. **other** ~0.70; **applicant** ~0.85. Repeats the reluctance while **Yes** is being clicked (01:27.684).

**01:28.970–01:30.170** Speaker A:
> Raw ASR: “Oh my god!” (weak ~0.25–0.31) — reaction to the **expanded** extra fields, not a new requirement.

**01:30.950–01:32.670** Speaker A:
> Raw ASR: “Because it increases the loan amount.”
> Corrected: same. **loan** ~0.32 / **amount** **0.93**. Matches co-applicant help: second income **raises** how much they can borrow. **Because** ~0.07, **it** ~0.05 — the **it** is still the Yes / co-applicant, given the click. This answers 2249’s “how does this co-applicant make a difference?” Matches the recorded income help (**added** to eligibility), not a new formula they stated.

They do not praise or reject the extra co-applicant inputs beyond size + loan-amount effect. Counting and “who pays” are `09`.

## First-principles problem
- What must be true: a co-applicant is a **second person** whose income (and EMIs) change **loan amount**. Turning Yes must **show that effect** and the extra questions it needs.
- Root vs symptom: three new ₹0 fields are the symptom of Yes. The root is: co-applicant is high-impact (`increases the loan amount`) and **not for everyone** (2249 `05`), so Yes cannot be the default — and skipping Yes cannot fake a joint loan (`06`).
- Constraints they implied: reluctance to involve another applicant; still, Yes **increases loan amount**; form gets taller (scroll).

## Directions they considered
- Click Yes and look at the extra rows.
- Name the effect: **increases the loan amount**.
- They do **not** leave Yes on (`09` clicks No).
- They do not draft new help copy in this span.

## Company / user / future thinking
- User: may not want to pull in a spouse/parent just to fill boxes; they still need to **see** that a second income grows the loan.
- Company: honest comparison — joint income is not a hidden boost. Say what Yes does (amount up; more fields).
- Future: 2304 will say if an applicant says yes, **take their details** and make them feel useful. 2304 importance/stars can mark co-applicant as high-consequence without forcing Yes. Do not auto-turn Yes.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-coapplicant` pills, `#hlc-coapplicant-fields`, co-applicant income / EMIs / card limits; eligibility add-income / subtract-EMIs.
- Acceptance criteria in their words: didn’t want to give ideas to any [other] applicant; **it increases the loan amount.**
- What NOT to do: do not default Co-applicant to Yes. Do not hide the extra fields after Yes. Do not invent “Yesterday” as a product date. Do not treat leftover ₹0 co-income as a filled example.
- Open questions: exact meaning of “give ideas.” Whether help should state the amount effect more loudly (2249 already asked how it makes a difference).
- Related recordings:
  - continues_from: `07`; `wb-rec-260815-2249` `05`
  - continues_in: `09` (No; who pays); `wb-rec-260815-2304` `06` (if applicant says yes, take their details)

## Evidence index
- `audio.vtt` 01:22.370–01:32.670
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (Yesterday ~0.02; applicant strong; loan amount)
- `events.json`: Yes click t=87684; fill yes t=88588; scroll y=333.5 t=90822
- `screenshots/0013.jpg` (No) / `0014.jpg`–`0015.jpg` (Yes + extra fields)
- `replay.spec.ts`: Yes button; `#hlc-coapplicant` fill yes
- `pages.json`: Co-applicant income help “Added to yours for eligibility.” (listed even while No at session start; **i** not opened)
- Site `pages/explore-banks.html`: `#hlc-coapplicant-row`, `#hlc-coapplicant-fields`
