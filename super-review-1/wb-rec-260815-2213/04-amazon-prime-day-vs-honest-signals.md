# Don’t sound like Amazon Prime Day — “low” that is a sale is a scam

One of them does not trust a “prices are low” line because **sales** lie. First they say Google Flights’ “prices are low” still feels like being **fooled** — then they talk themselves into two honest states (low = this is the right price; high and unlikely to fall = forget it). Then the anti-pattern: a juicer company messaged a sale; Amazon **hypes prices before the sale**, then a **fake discount**, then another “biggest sale of the year.” That is **making a fool of the customer**. Flights’ two honest states (`02`) survive only if Shroffin’s “low” is not Prime Day theatre.

## Classification
- kind: issue | product-thinking + trust / anti-pattern
- status: open (constraint on any “low / high” line: must not be sale theatre)
- surface: explore-banks still on screen; **no Amazon UI**. This is a constraint on the Flights-style sentence from `02` and the inline suggestion from `01`.
- viewport: 1366x768 @2x
- speakers: First-person Amazon / juicer story continues the “I feel fooled” thread. ASR not diarized. Juicer seller brand is **garbled** (`Cove Air Bufa`, low word-prob). They critique **sale systems** that fool buyers — not a brief to attack Amazon staff on shroffin.com.

## Session metadata
- folder: `wb-rec-260815-2213`
- recording id: `820288e7-0391-48c1-ae98-6c895d38b144`
- clip: 15 of 30
- started_at: 2026-08-15T16:43:16.850Z
- ended_at: 2026-08-15T16:52:07.526Z
- duration_ms: 530676 (~8 min 51 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 62 (JPEG; `screenshots/0000.jpg`–`0061.jpg`)
- event count: 67
- console: empty (`console.json` is `[]`)
- tabs: 1 (never left Explore banks)
- previous: `03` (top three tips; Self-employed now selected). Analog they are testing: `02`.
- next: ~14 s silence (04:55–05:09), then `05` (intelligence codified here). Folder next: `wb-rec-260815-2222` (trust the recommendation; don’t brand it AI; Flights “prices are low” returns).

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Title: “Explore banks – Shroffin”
- Occupation **Self-employed** from `03` through the rest of the clip. Same leftover property ₹6,000, income ₹1,00,000, Canara Bank row. Idle only — no clicks in 02:25–05:09.
- Screenshots `0016.jpg`–`0035.jpg` (t≈134s–300s): unchanged Explore banks. They are talking about Flights-trust and Amazon/sales while **looking at** this comparison card, not shopping.
- What is **not** on screen: no sale badge, no Prime Day, no juicer, no Flights copy.

## What they said (faithful, complete)

**02:25.700–02:50.000** Speaker (gut check on the analog from `02`):
> Raw ASR: “I don't know about Google Flight. When they say prices are low, I feel like I am being fooled. When they say prices are low, I feel this is the right price. And when they say prices are high, unlikely to get low, forget it.”
> Corrected: **I don’t know about Google Flights.** Gut: **“prices are low” → I feel fooled.** Then they restate the two honest states: **low → this is the right price** (this is a fair moment); **high, unlikely to go down → forget it** (don’t wait for a fake drop). This is the **pro** of Flights vs Amazon’s fake sale that follows. Recut: this beat sits here, not in `02`, because `02` already called Flights a competitive advantage; this is the **trust** argument.

**02:50.320–03:12.380** (juicer message — brand ASR garbage):
> Raw ASR: “Yesterday, I got a message from Cove Air Bufa company. They sent me a juicer. They said, this is our sale. This is the price of the juicer. They said, in a year, no matter how healthy you are, we will double the difference. I don't have that much confidence.”
> Corrected: Yesterday a **juicer company** messaged (ASR **“Cove Air Bufa”** — Cove p≈0.49, Air p≈0.17, Bufa p≈0.39 — not a recoverable brand; do not invent one). Sale price for the juicer; a **year-long** promise that ASR rendered as “no matter how healthy you are, we will double the difference” (“no” p≈0.19; “healthy” is in the juicer/health-claim neighbourhood — treat the exact year-promise wording as **uncertain**). **I don’t have that much confidence.** The point is a **sale claim they do not trust**.

**03:12.380–03:46.000** (Amazon pattern):
> Raw ASR: “What Amazon does is in every sale, they hype up prices before the sale. Then they give a fake discount. I never knew that this price is the lowest for a year. So, I go to this sale and get the next sale in two months. Then they say, the biggest sale of the year. Then they give me a lower price. Then I get a bigger sale. I never knew that this was the case. I get trapped in their scam.”
> Corrected: same structure. **Hype prices before the sale → fake discount.** You never know if this is the **lowest for a year**. Next sale in **two months**; then **biggest sale of the year** at a **lower** price; then another bigger sale. **Trapped in their scam.**

**03:47.200–04:15.100**:
> Raw ASR: “I had already told you about the juicer. I would have stopped there for the sale. Because it is not about the sale. It is about making a fool out of the customer. Even in a sale, they fluctuate the prices of the same product. It is a profit for them.”
> Corrected: same. **Not about the sale — making a fool out of the customer.** Same product, **prices fluctuate** inside the sale, **profit for them**.

**04:17.220–04:55.800** (Prime Day as manufactured “never again”):
> Raw ASR: “But they say, if the sale of Prime Day is so low, you will never get the same sales for the whole year. So, I will genuinely stop for Prime Day and spend as much as I can. The company told me that if the sale is so low, they will make a difference. So, I will plan for the whole year to spend the money on Prime Day. But their sales go up in the whole year. I will take the biggest sale So, I don't believe in their sales.”
> Corrected: they **claim** Prime Day is so low you **won’t see it again all year** → a person would **plan the year’s spend** for that day. Then **sales go up the rest of the year** anyway. **I don’t believe in their sales.**
> ~14 s silence (04:55–05:09) before `05` (“this is the intelligence…”).

They do not ask to name Amazon on the site. They do not ask for a “sale” badge on Explore banks.

## First-principles problem
- What must be true: any “this is a good moment / this is low” line on Shroffin must be **true of the comparison**, not a **manufactured urgency** that trains the customer to wait for the next fake drop.
- Root vs symptom: “I feel fooled” is not a complaint about Canara Bank’s ₹48 EMI. The root is **sale theatre** (hype → fake discount → another biggest sale). Flights survives if “low” means **this is the right price** and “high, unlikely to fall” means **don’t wait**. Amazon fails that test.
- Constraints they implied: no “you will never get this again”; no fluctuating the same offer to create a discount; confidence comes from **not scamming**, which they already said about Flights (`02`).

## Directions they considered
- Reject Amazon / Prime Day / juicer-sale **as a model** for Shroffin copy.
- Keep Flights’ two honest states (`02`) as the model that does **not** make a fool of the customer — after walking through the gut “I feel fooled.”
- No UI sketched. This is a **never** for tone.

## Company / user / future thinking
- User: has been trained by marketplace sales to distrust “low” and “once a year.” If Explore banks says “this is low” the same way, they will not believe the comparison.
- Company: Shroffin is independent comparison, **no fees**, no commission-driven ranking. Sale language would fight that. Startup-core already bans manufactured urgency and guaranteed “best deal.” Critique the **sale system**, not Amazon people.
- Future: the intelligence line (`01`/`02`/`07`) must be checkable against **this table** (this income, this CIBIL, this occupation) — not a calendar of “Prime Day for loans.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: whatever ships the Flights-style / tips line (`01`–`03`, `07`) — copy and triggers, not a new Amazon widget.
- Acceptance criteria in their words: do **not** make a fool of the customer; do **not** hype then fake-discount; do **not** say you’ll never see this sale again if that isn’t true; **I don’t believe in their sales** is the test we must not fail; “low” must mean **this is the right price**, not a countdown.
- What NOT to do: do not put Prime Day, “biggest sale,” countdown, or “lowest this year” on Explore banks. Do not name Amazon in customer copy. Do not use this clip to add promotions. Do not treat “I feel fooled” as a vote to kill the Flights analog (`02` already called it an advantage).
- Open questions: who certifies that a “low at this moment” line is true (historical offers vs nearby profile vs bank rules)? `2222` continues “Google shows… these prices are low” and **don’t say AI**.
- Related recordings:
  - continues_from: `02` in this folder (Flights analog; “we don’t get scammed”).
  - continues_in: `05` (they return to intelligence on **this** page); `2222` (trust the recommendation, don’t brand it AI).

## Evidence index
- `audio.vtt` 02:25.700–04:55.800
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` (`Cove Air Bufa`, Prime Day, “fooled”)
- `events.json`: idle only in this span
- `screenshots/0016.jpg`–`0035.jpg` (unchanged Explore banks, Self-employed)
- `manifest.json`; `console.json` `[]`
