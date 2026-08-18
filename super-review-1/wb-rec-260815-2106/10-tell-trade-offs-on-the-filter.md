# Tell Public vs Private and Floating vs Fixed trade-offs on the filter

Same idea as concessions: don’t make the user guess. Public banks — harder application, weaker end-to-end service, better rate (~0.5). Private — better service, worse rates than public, processing fee also worse. Keep **both selected by default**, and **tell the trade-offs here**. Same for Floating and Fixed.

## Classification
- kind: product-thinking | issue (missing help)
- status: open
- surface: `#hlc-help-bank-type` / Bank type Public·Private; `#hlc-help-rate` / Floating·Fixed (“About 1–2% higher” already on Fixed)
- viewport: 1366×768 @2x
- speakers: Speaker A throughout. They are teaching the copy they want.

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
- previous: `wb-rec-260815-2018` — homepage
- next: `wb-rec-260815-2116` — loan-input sentences, not this Bank type / Rate copy

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html` after the concessions return. **No clicks** in this span (05:42–08:06 is idle + talk). They are looking at the filter rail.
- On-page Bank type i today: “Choose public banks, private banks, or both.” Rate i: “Floating can change later. Fixed stays put for a period.” Fixed chip already has “About 1–2% higher.”
- Screenshots: `0070.jpg`–`0083.png` (All selected, mixed lenders); `0080.png` (~07:14) Insurance chip highlighted while they talk; `0084.png` (~07:50) empty-looking table in the still (no click recorded — do not treat as a new filter experiment).
- They already clicked Public/Private/All and Floating/Fixed earlier (`05`).

## What they said (faithful, complete)

**07:11.560–07:21.100** Speaker A:
> Raw ASR: “The public has it. Usually the public application process is a little difficult. It is difficult.”
> Corrected: **Public** [banks]: the **application process is a little difficult**. It is difficult.

**07:24.640–07:30.100** Speaker A:
> Raw ASR: “Complete service end-to-end service is not good. But the rate is 0.5.”
> Corrected: **end-to-end service is not good. But the rate is 0.5** [percentage points better — they do not say “percent” but that is the usual public-vs-private gap they mean].

**07:31.340–07:39.140** Speaker A:
> Raw ASR: “Private service is not that good. But the rates are not as good as public. Processing fee is also not that good.”
> Corrected: **Private**: ASR first clause fights the contrast. From the next two clauses, Private **service** is the better side; **rates are not as good as public**; **processing fee is also not that good**. Keep the raw line; do not pretend they said “private service is excellent.”

**07:41.140–07:47.300** Speaker A:
> Raw ASR: “Tell me what should I select? And you keep both of them selected by default.”
> Corrected: same. **Tell me what I should select** — and **keep both selected by default** (`05`).

**07:49.820–07:56.880** Speaker A:
> Raw ASR: “Same here. You tell me the trade-offs here only. Why I should select each of them? For floating and fixed.”
> Corrected: **same here** [Rate]. Tell the **trade-offs here only**. Why should I select each — **for Floating and Fixed** (`floating` p≈0.87).

They do not write finished customer sentences in this clip. They dictate the facts.

## First-principles problem
- What must be true: default is the full set (both bank types, and they want the same inclusive default for rate). The i must say **why you would turn one off** — process, service, rate, fees — so the customer can choose, not the platform.
- Root vs symptom: “tell me what should I select?” is the symptom. Root: Bank type/Rate help is category definition, not trade-offs. Exclusive All (`05`) made it worse by forcing a pick with no advice.
- Constraints: Shroffin is not a bank. Trade-offs are typical, not a promise. Both stay on unless the user decides.

## Directions they considered
1. Public: harder process, weaker service, ~0.5 better rate.
2. Private: rates worse than public, processing fee worse; service is the other side of that trade.
3. Both on by default; explain here.
4. Same structure for Floating vs Fixed.
- Lean: this is required product copy on the filter, not a blog post.

## Company / user / future thinking
- User: independent compare means seeing **why** public vs private (and floating vs fixed) differ, then leaving both on if they want the full market.
- Company: we do not pick the bank type for them. We put the trade-offs next to the control. Zero bias — don’t hide that public process is harder or that private rates are weaker.
- Future: `11` is the Facility/overdraft version of “explain it like this.”

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-help-bank-type`, `#hlc-help-rate` (and Fixed note “About 1–2% higher”). Control defaults: `05`.
- Acceptance criteria in their words: “tell me what should I select?”; “keep both of them selected by default”; “you tell me the trade-offs here only”; “why I should select each of them — for floating and fixed”; public process difficult, service not good, rate ~0.5; private rates and processing fee not as good as public.
- What NOT to do: do not force Public **or** Private as a required pick. Do not move this essay to the Guide only (`08` already rejected that pattern). Do not invent a Shroffin ranking of banks. Do not polish their 0.5 into a guaranteed spread.
- Open questions: finished sentences (they didn’t draft). Exact 0.5 vs “about.” Whether processing-fee comparison belongs only in Charges tab — they asked for it **here** on the filter.
- Related recordings:
  - continues_from: `05` (both ticked) and `08` (tell me here)
  - continues_in: `11` overdraft explanation as the teaching model

## Evidence index
- `audio.vtt` 07:11.560–07:56.880
- `events.json`: idle after t=341696; no clicks in this span
- `screenshots/0070.jpg`–`0083.png`
- Site: `pages/explore-banks.html` `#hlc-help-bank-type`, `#hlc-help-rate`
