# Write concessions on the filter — range, stack, and an i on each chip

They cannot get what “concessions” means from the filter i, so they follow Learn more onto the Guide concessions page. They like the page (“Nice, bro”) and then correct the woman-applicant rule: not only first name / sole owner — there can be several names; she has to be **one of them**. Back on Explore banks they say: don’t take the user somewhere else. Write it in the concessions help. Give the **range** of cuts, stacking (woman + green home), and an i on **each** chip — including what insurance concessions are.

## Classification
- kind: issue | product-thinking + copy
- status: open
- surface: Filters Concessions `#hlc-concessions-label` i + `Learn more` → `pages/concessions.html#bank-rates` (`ul.guide-perk-grid`); chips Women applicant / Green home / Insurance
- viewport: 1366×768 @2x
- speakers: Speaker A leads. Speaker B: “Nice, bro” on the guide page.

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
- next: `wb-rec-260815-2116` — input help sentences, not concessions chips

## Where on the page
- Explore banks URL, then **04:42.427** (`t=282427`) → `http://localhost:8765/pages/concessions.html#bank-rates`.
- Clicks before leaving:
  - **04:27.040 / 04:27.729** (shots 52–53) Concessions i `svg > circle`
  - **04:31.755** Filters region
  - **04:33.574–04:40.138** more i svg circle/rect (shots 55–59) — “What is the matter?”
  - **04:42.406** (shot 60) `getByRole("link", { name: "Learn more" })` — popover link `concessions.html#bank-rates`
- On concessions: heading “What can lower your home loan rate?”; grid: Woman as primary applicant (0.05–0.10%; sole owner or **first name on the property papers**); Salary with the same bank; Existing savings or loan customer; Green home.
- Click **05:12.378** (shot 64) `section#bank-rates … ul > li:nth-of-type(3) > span:nth-of-type(2)` — third perk’s body (Existing savings…) while they are **talking** first-name / woman-applicant copy (grid cell vs speech may not match).
- Scroll **04:42.995** y=552 on concessions; later **05:34.818** y=0 (hero) — that scroll is `09`.
- Return **05:41.696** (shot 69) → explore-banks.
- Screenshots: `0052.jpg`–`0059.jpg` (filter i struggle); `0060.png`–`0066.png` (rate-discount grid); `0069.jpg`–`0080.png` (back on filters while they dictate i-copy).
- Filter popover today: “Turns on rate cuts that apply to you.” + Learn more — that is what they reject as enough.

## What they said (faithful, complete)

**04:34.580–04:51.130** Speaker A (repeated):
> Raw ASR: “What is the matter? What is the matter? What are the concessions?” (× several)
> Corrected: same. The i is not answering. They want **what concessions are**.

**04:51.130–04:54.330** Speaker A (on the guide grid):
> Raw ASR: “First name on the property means index 2 is the first.”
> Corrected: they are reading **“first name on the property.”** ASR **“means index 2 is the first”** is garbled (`means` p≈0.03; `index` p≈0.94). On-page: “She is usually the sole owner or the first name on the property papers.”

**04:58.830–05:04.590** Speaker A:
> Raw ASR: “Means, there can be multiple names on the property. She has to be one of them. One of them.”
> Corrected: same. **Not** sole / first-only. Several names allowed; the woman has to be **one of them**.

**05:17.590–05:23.230** Speaker B:
> Raw ASR / corrected: “Nice, bro. Nice, bro.”
> Praise for the concessions **guide** page itself.

*(05:25–05:37 “no back / this is mobile” is `09`, spoken on this same Guide page before they return.)*

**05:59.480–06:05.160** Speaker A (back on Explore banks):
> Raw ASR: “She has to be an individual. You shouldn't take this to someone else.”
> Corrected: she has to be [named as] an **individual** [on the papers]. **Don’t take this** (the explanation) **to someone else** — don’t send the user to the Guide.

**06:11.300–06:25.060** Speaker A:
> Raw ASR: “Write in the concessions that this is not the case. You can get 0.05 to 0.3 or 0.2 means you can give them the entire range of total discounts.”
> Corrected: **write it in the concessions** [filter help]. “This is not the case” = don’t rely on the other page / don’t keep the too-strict first-name-only rule without the “one of the names” truth. Show the **entire range** of total discounts (**0.05 to 0.3 or 0.2** — they are approximating stacked cuts, not only 0.05–0.10 per chip).

**06:26.960–06:32.020** Speaker A:
> Raw ASR: “And some concessions can even stack up. Like woman and greenhouse.”
> Corrected: some concessions **stack**. Like **woman and green home**. ASR **greenhouse ≈ green home** (`greenhouse.` p≈0.65; on-page chip “Green home”).

**06:34.700–06:43.560** Speaker A:
> Raw ASR: “But each of these options also need to have their own eye information. Because why take it to someone else?”
> Corrected: each option needs its **own i** (`eye` p≈0.30). Why send people away?

**06:50.270–06:54.470** Speaker A:
> Raw ASR: “Because I need to know what insurance concessions are.”
> Corrected: same. Insurance chip has no own explanation.

**06:56.890–07:10.960** Speaker A:
> Raw ASR: “And you don't even need to write … Not even here.”
> Corrected: you don’t even need to write [that full Guide page] **here** [in the filter] as a destination — keep the facts on the i. Fragmented; they are closing the “don’t leave” point, not asking to delete the Guide.

## First-principles problem
- What must be true: ticking Women / Green home / Insurance should be possible with the rule **on that chip**. The table is the product; the Guide can exist, but the filter must not depend on leaving it.
- Root vs symptom: “What are the concessions?” is the symptom. Root: one thin popover + Learn more, no per-chip i, and Guide copy that says sole/first-name only.
- Constraints: stay independent (don’t pretend Shroffin sets the bank’s rule). Give ranges and stacking honestly. Woman = one of the names, not only first.

## Directions they considered
1. Follow Learn more (they do).
2. Soften woman-applicant: multiple names; she is one of them; individual.
3. Put the explanation in the filter concessions help — don’t send people away.
4. Full stacked range (~0.05–0.2/0.3).
5. Per-chip i, including Insurance.
- Lean: Guide page is good (“nice, bro”) and still not a substitute for in-filter help.

## Company / user / future thinking
- User: must know *why* to tick Women / Green home / Insurance **before** leaving compare. Stacking matters for the rate they will see.
- Company: Shroffin explains third-party cuts; we don’t invent a bank rule. “Usually first name” over-claims vs “one of the names.”
- Future: `10` is the same “tell me here” pattern for Public/Private and Floating/Fixed. `09` is the missing Back after this detour.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-help-concessions` (today: “Turns on rate cuts that apply to you.” + Learn more); per-chip help on Women / Green home / Insurance; Guide copy `pages/concessions.html` `#bank-rates` woman perk (“sole owner or the first name…”).
- Acceptance criteria in their words: “what are the concessions?” answered on the filter; “you shouldn’t take this to someone else”; “write in the concessions”; entire range of total discounts; “some concessions can even stack… woman and green home”; “each of these options also need to have their own i”; “I need to know what insurance concessions are”; woman = “one of them” among multiple names.
- What NOT to do: do not make Learn more the only way to understand the chips. Do not delete the Guide (they praised it). Do not keep sole/first-name as the only rule if they said she must be **one of** the names. Do not skip Insurance.
- Open questions: exact stacked ceiling (0.2 vs 0.3). Whether salary-account / existing-customer cuts from the Guide also become chips (they did not ask to add chips).
- Related recordings:
  - continues_from: `07` (same i pattern)
  - continues_in: `09` no Back on the Guide; `10` same “tell me here” for bank type and rate

## Evidence index
- `audio.vtt` 04:34.580–05:04.590, 05:17.590–05:23.230, 05:59.480–07:10.960
- `audio.json` “greenhouse.” p≈0.65; “index” p≈0.94; “eye” p≈0.30
- `events.json` Concessions i t=267040–280138; Learn more t=282406; nav t=282427; perk click t=312378; nav back t=341696
- `screenshots/0052.jpg`–`0066.png`, `0069.jpg`–`0080.png`
- `pages.json` p3 `concessions.html#bank-rates`
- Site: `pages/explore-banks.html` `#hlc-help-concessions`; `pages/concessions.html` `.guide-perk-grid`
