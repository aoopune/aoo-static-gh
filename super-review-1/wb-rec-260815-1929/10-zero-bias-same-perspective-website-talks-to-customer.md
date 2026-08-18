# “Zero bias” is fine only if the camera never leaves the customer

They like “zero bias” as a phrase. It must live in the **same** story as “zero commissions,” not a sudden switch of who is talking to whom. Today it can feel like commissions = website-to-bank, and bias = website-to-customer. They do not want that shift. The homepage should always feel like the website talking to the customer — and from that one camera, show: we don’t earn to push, we have no bias, we don’t push anyone.

## Classification
- kind: issue | copy / perspective
- status: open
- surface: homepage / `section.home-zero` / second pair “Zero bias.” / body “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- viewport: 1366×768 @2x
- speakers: Speaker A. No disagreement. Commissions-as-customer-fee is `09`. This file is the **perspective** rule and the bias line.

## Session metadata
- folder: `wb-rec-260815-1929`
- recording id: `fb743d3e-45ef-48e2-a191-4c7147d743cb`
- started_at: 2026-08-15T13:59:20.405Z
- ended_at: 2026-08-15T14:08:27.240Z
- duration_ms: 546835
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 66
- event count: 115
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Section: `section.home-zero` — they are looking at both stacked claims together.
- On-page copy:
  - “Zero bias.”
  - Body: “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- They already read the body (incomplete) at **05:47** (`08`). Here they use “no push” as the customer-facing meaning of bias.
- No new clicks. Same screenshots as `09`: full zeros poster, “bias.” under the second “Zero.”
- Screenshots: `screenshots/0041.png`–`0065.png` — both pairs visible; they talk 06:52–07:54 while ~0047–0054 are on screen (t=384198–444197)

## What they said (faithful, complete)

**06:52.760–06:58.600** Speaker A:
> Raw ASR: “Zero bias sounds good, but it should apply in the same context.”
> Corrected: same. Keep the phrase; lock the context to the commissions line.

**07:00.580–07:06.560** Speaker A (how it splits today):
> Raw ASR / corrected: “So zero commissions from the perspective of website to bank.”

**07:07.300–07:11.640** Speaker A:
> Raw ASR / corrected: “And zero bias from the perspective of website to customer.”

**07:13.560–07:15.760** Speaker A:
> Raw ASR / corrected: “But perspective should not shift.”

**07:18.700–07:23.820** Speaker A:
> Raw ASR: “The perspective, largely we want the perspective of website talking to the customer.”
> Corrected: same.

**07:27.280–07:35.240** Speaker A:
> Raw ASR: “So keeping this perspective in mind, customer will always while reading the website, think that the website is talking to them.”
> Corrected: same. The reader never thinks the site has turned aside to talk about banks in bank-language.

**07:37.360–07:43.380** Speaker A:
> Raw ASR / corrected: “Now keeping that constant, how do we show that website does not earn anything?”

**07:44.260–07:48.260** Speaker A:
> Raw ASR / corrected: “Website has no bias and website does not push anything.”

**07:49.240–07:54.980** Speaker A:
> Raw ASR / corrected: “Find better words or better structure or better way to imply the same.”

(How-we-earn / “don’t make them ask” is `09` from 07:57, then Speaker B in `11`. Ranking/push body copy is reworked in 1951.)

## First-principles problem
- What must be true: two stacked claims must share one relationship: **site → customer**. If line 1 is “we don’t take bank money” (site→bank) and line 2 is “we’re fair to you” (site→customer), the reader has to switch worlds mid-poster.
- Root vs symptom: “Zero bias sounds good” is not the bug. The bug is **mixed address**. Bias is being used as the customer-facing half of a pair whose other half is bank-facing.
- Constraints: do not drop “zero bias” as a liked phrase; do not keep a perspective shift; imply no-earn, no-bias, no-push from one camera.

## Directions they considered
- Keep “zero bias” — **lean: yes**, if context matches commissions.
- Today’s split (commissions = site↔bank, bias = site↔customer) — **reject.** “Perspective should not shift.”
- Force the whole section into **website talking to the customer**.
- From that camera, imply three facts: does not earn [to push], has no bias, does not push. Via better words, structure, or another device — no pick in this clip.
- They do not propose deleting “Zero bias.”

## Company / user / future thinking
- The customer is the only audience of the homepage. Even facts about banks must be said as something *for the reader* (fair view, no one pushed ahead), not as an aside to the industry.
- Independence is one idea, not two different contracts (bank contract vs customer contract) on two lines.
- “Does not push anything” is how they want bias to feel in the customer’s life: ranking/order is not for sale.

## Fix metadata
- Likely code owners: second `.home-zero-pair` (“bias.”) and `.home-zero-body`; may need both heading pairs rewritten together with `09` so context matches.
- Acceptance in their words: “Zero bias sounds good, but it should apply in the same context.” “Perspective should not shift.” “Website talking to the customer.” Show no-earn, no-bias, no-push while that stays constant. “Better words or better structure or better way to imply the same.”
- What NOT to do: do not keep one line in bank-speak and one in customer-speak. Do not delete “zero bias” because commissions is unclear. Do not explain the business model here (`09` / `11`).
- Open questions: can both zeros be customer-facing paraphrases of one idea (no one paid us to rank/push)? Does the body already do “no push” better than the heading “bias”?
- continues_from: `09-zero-commissions-customer-thinks-they-pay-none.md` (they pivot from “change of words” into bias/context)
- continues_in: `wb-rec-260815-1951` `02-commission-customer-vs-bank-context.md` and `03-fair-view-sentence-and-ranking.md` — mixed context restated: after commissions-from-bank, “zero bias” sounds like website↔bank bias, then they correct to “we will not push any bank”; whole section should be website↔bank **or** website↔customer, not mixed. 1951 also drafts “fair view… none ranked or pushed” and ranking that money cannot buy.

## Evidence index
- `audio.vtt` 06:52.760–07:54.980
- `screenshots/0041.png`–`0054.png`
- `events.json` idle; no extra click
- `pages.json` “Zero bias.” / body fair-view line
- Site `index.html` ~3189–3194
