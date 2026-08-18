# Name 50 lakh vs 40 lakh and they will shrink the agreement and pay the rest in black

This take starts on the same argument as the last one: do not publish a winning number. The first example here is **property**. If someone hears that 50 lakh versus 40 lakh **saves ₹5 lakh**, they will make it happen — a smaller figure on the sale agreement, a talk with the builder, and the rest paid **in black**.

They click the property box as they say it. The box still shows leftover **₹6,000**, not 50 lakh or 40 lakh. They never type those amounts. The story is what a person would **do** if the site named them.

## Classification
- kind: discussion | product (incentive on Property agreement value)
- status: open
- surface: explore-banks / Loan inputs (`form#hlc-inputs`) / `#hlc-property-value` (Property agreement value*). Helper in the recording: “Sets the ceiling on the loan against this house. Use the sale agreement price.”
- viewport: 1366x768 @2x
- speakers: Speaker A (same reviewer as `wb-rec-260815-2204`, speaking as the customer). ASR is not diarized (`audio.json` language tag `mr`; spoken mix is English with Indian loan vocabulary). Speaker B is not heard on this opening.

## Session metadata
- folder: `wb-rec-260815-2206`
- recording id: `125a22f8-b64d-419e-9196-9126d5f613f3`
- clip: 14 of 30
- started_at: 2026-08-15T16:36:16.832Z
- ended_at: 2026-08-15T16:43:07.910Z
- duration_ms: 411078 (~6 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 52 (JPEG; `screenshots/0000.jpg`–`0051.jpg`)
- event count: 71
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `wb-rec-260815-2204` ended 2026-08-15T16:36:10.834Z (~6 s earlier) — “don’t tell me the best parameters”; CIBIL 750 / six months / pay slip / wife’s name / ₹4 lakh saved. This clip is the next breath of that speech.
- next in this folder: `02` (farmer → company → pay slip). After this recording: `wb-rec-260815-2213` starts 2026-08-15T16:43:16.850Z (~9 s later) — “we need to make a different tool.”

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Section: `h1` “Explore banks.” then form **Loan inputs** (`#hlc-inputs`)
- Field they point at: Property agreement value `#hlc-property-value` — HTML default/placeholder `62,50,000`; **on screen this clip: ₹6,000** (leftover from earlier local use). They do **not** type 50 lakh or 40 lakh.
- Other visible leftovers (unchanged this beat): Monthly income **₹1,00,000**; Age **35**; CIBIL **780**; Occupation **Self-employed**; Purpose **Regular**; Adjust eligibility collapsed; **See options** (live HTML may now say Compare banks — recording label is See options)
- Click/focus:
  - **00:02.904** brief focus `#hlc-age`
  - **00:03.004–00:03.005** focus+click `#hlc-property-value` (`screenshot_id` 1 → `0001.jpg`) as the 50L / 40L / black talk starts
- Scroll: none (`y=0`). Table body still below the fold; Overview headers (Lenders / Rate / Loan amount / Tenure / EMI) sit at the bottom of the shot. Black mask bars at the bottom of frames are recorder heuristics, not page UI.
- Screenshots: `0000.jpg` (t=200) start — Self-employed, property ₹6,000; `0001.jpg` (t=3309) property focused; `0002.jpg`–`0004.jpg` (t=12200–28200) still on that field through builder / black.

## What they said (faithful, complete)

Silent inspect **00:00–00:02.6**: no VTT. Idle, then speech. 2204 had just ended on wife’s name → save ₹4 lakh.

**00:02.630–00:09.190** Speaker A:
> Raw ASR: “If your property value is 50 lakhs or 40 lakhs, then you have saved 5 lakhs.”
> Corrected: same. Spoken as the user reacting to a **named** property figure. They do not explain why 50 vs 40 yields **5** lakh (not 10). Do not invent stamp-duty / LTV / tax math. The prize they keep using this clip is **₹5 lakh saved**. Word “50” is weak in `audio.json` (~0.13); “40 lakhs” and “saved” are strong. Treat 50/40 as the pair they meant, matching the property field they clicked.

**00:09.990–00:13.270** Speaker A:
> Raw ASR / corrected: “So, I will find a way to make it happen.”
> Same incentive as 2204: name a winning parameter → the user manufactures it.

**00:13.490–00:18.930** Speaker A:
> Raw ASR: “I will take a small property. I will talk to the builder and make an agreement. I will give the rest in black.”
> Corrected: same. **Small property** = a smaller **declared / agreement** value (the field they clicked), not necessarily a smaller house. **Talk to the builder** = get the sale agreement written to that number. **Black** = cash / unaccounted portion of an Indian home purchase (gap between real price and agreement price) — not the CSS colour, not a bank product.

No Speaker B. No pixel complaint. They do not ask to delete the property field or to change the helper sentence in this beat. Occupation / pay-slip follows in `02`.

## First-principles problem
- What must be true: Property agreement value is the **sale-agreement price** the bank uses as a ceiling. If the site (or Shroffin’s mouth) implies that a lower or different agreement value **saves lakhs**, users will split the deal: white on paper, rest in cash.
- Root vs symptom: ₹6,000 on screen is leftover junk, not the bug. The root is the same **incentive** as 2204: publishing a winning property number becomes a cheat sheet for agreement vs black.
- Constraints they implied: they still want rupee savings named as **outcomes** (5 lakh). They refuse **coaching the input** that produces them. Black-money structuring is described as what people **will do**, not as a how-to to ship.

## Directions they considered
- Proof of 2204’s rule, applied to this field: 50L vs 40L → save 5L → smaller declared property + builder agreement + rest in black.
- Lean: treat as a real product-incentive issue, not a taste nit.
- They do **not** pick UI here (no second property field, no “agreement vs market” toggle). Farmer / pay-slip is `02`. “Give intelligence instead of a target” is `03`.

## Company / user / future thinking
- **Debate they walk in with:** 2204 said do not tell “best parameters” because people will game them. This clip’s first move is not to drop that rule — it is to **show the next game**. Example: property 50 lakh vs 40 lakh → ₹5 lakh.
- **User, as they model them:** hunting a cheaper home-loan **deal**, willing to rewrite the agreement with the builder and pay cash off-books if that is what “saves 5 lakh.” Pros of naming the figure: the save is concrete. Cons they act out: the person will **make it happen** off-books.
- **Company:** Shroffin compares banks on the agreement value the customer types. If marketing or this card **names** a better property number, it stops being a picture of the market and becomes a **structuring guide**. That fights independent, transparent comparison.
- **Future:** they will later want Shroffin to **give intelligence** (`03`) and even an 8th unique point of “hacks” (`04`). Those wants sit in tension with this example. Do not resolve that tension in this file. 2213 will argue the hacks product cannot just sit inside this form.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `#hlc-property-value` and its helper in `pages/explore-banks.html`. Any empty-state or “typical value” copy that implies a **winning** property figure. Not the table chrome. Not leftover ₹6,000.
- Acceptance criteria in their words: if you tell them 50 lakh or 40 lakh saves 5 lakh, they will take a small property, talk to the builder, and give the rest in black. Do not hand them that target.
- What NOT to do: do not “fix” leftover ₹6,000 as if it were this issue. Do not delete the property field. Do not ship a “how to pay the rest in black” tutorial in this clip’s name. Do not rewrite earlier agreement-vs-valuation copy (`wb-rec-260815-2116`) here unless that copy **names a winning number**.
- Open questions: how to explain that agreement value **sets the loan ceiling** (already on the helper) without implying “type a smaller number to save 5 lakh.” How this example is allowed as **intelligence** later without becoming the cheat sheet 2204 forbade.
- Related recordings:
  - continues_from: `wb-rec-260815-2204` (`01-dont-tell-best-parameters-users-will-game.md`). Earlier: `wb-rec-260815-2116` property “which value / agreement vs valuation.”
  - continues_in: `02` (farmer → pay slip); `03` (company should give intelligence); architecture of a different tool: `wb-rec-260815-2213`.

## Evidence index
- `audio.vtt` 00:02.630–00:18.930
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` / `audio.srt` / `audio.lrc` same span (50/40 lakhs; black)
- `events.json`: focus age t=2904; focus+click `#hlc-property-value` t=3004/3005
- `pages.json` / `RECAP.md`: Property agreement value; “Use the sale agreement price.”
- `screenshots/index.json` + `0000.jpg`–`0004.jpg` (esp. `0001` property focused)
- `manifest.json` viewport 1366×768, dsf 2; `console.json` `[]`; `tabs.json` 1 tab
- `replay.spec.ts`: `#hlc-property-value` click
- Site `pages/explore-banks.html`: `#hlc-property-value` (live default `62,50,000`; recording showed ₹6,000)
