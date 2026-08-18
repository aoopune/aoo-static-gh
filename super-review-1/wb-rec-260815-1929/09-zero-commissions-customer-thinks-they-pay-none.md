# “Zero commissions” is easy to read as “you pay us nothing”

They like the intent of this block: Shroffin is an independent platform, does not take commissions from anyone to push them, and has no built-in tilt toward any bank. The phrase “zero commissions” does not land that way for a customer. A shopper may think *they* pay no commission — that the site is asking none from them — instead of thinking the site earns none from the bank. They want a change of words. They also insist: imply that the site does not earn to push, without making the reader ask how Shroffin earns. Speaker B then challenges that bind (`11`).

## Classification
- kind: issue | copy
- status: open
- surface: homepage / `section.home-zero` / first pair “Zero commissions.” (`.home-zero-rest`) / independence intent of the zeros poster
- viewport: 1366×768 @2x
- speakers: Speaker A states the wording bug and the “don’t make them ask how you earn” constraint. Speaker B is silent until **08:08** (`11`). No disagreement on the misread of “commissions.”

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
- Same `section.home-zero` as `08`, now with full copy visible.
- On-page heading they are judging: “Zero commissions.”
- Scroll: they remain on the completed poster. One small move at **06:50.732** (`t=410732`) y=**4282** (from 4411.5) — still this section. No further clicks after the Zero click in `08`.
- Screenshots (06:03 onward):
  - `screenshots/0042.png`–`0049.png` — full “Zero commissions / Zero bias” + fair-view body
  - `screenshots/0050.png` (t=410197) — after the small scroll; “Zero” bright, “commissions.” / “bias.” quieter gray
  - `screenshots/0051.png`–`0065.png` — same completed poster through the rest of the clip
- What is visible: they are staring at the word **commissions** in huge type while they argue what a customer hears.

## What they said (faithful, complete)

**06:03.450–06:08.190** Speaker A:
> Raw ASR: “I definitely like the whole intent of this page, which is to showcase that”
> Corrected: same. “This page” = this homepage block / the zeros story, not a different URL.

**06:09.550–06:11.810** Speaker A:
> Raw ASR / corrected: “we are an independent platform.”

**06:12.150–06:15.310** Speaker A:
> Raw ASR / corrected: “We don't take commissions from anyone to push them.”

**06:15.430–06:18.090** Speaker A:
> Raw ASR / corrected: “And we don't have inherent bias towards any bank.”

**06:18.090–06:26.570** Speaker A:
> Raw ASR: “But this zero commissions, I don't think it comes across easily to the customer.”
> Corrected: same.

**06:27.470–06:32.670** Speaker A:
> Raw ASR / corrected: “I don't think as a customer, I will easily understand what commission means over here.”

**06:33.470–06:36.790** Speaker A:
> Raw ASR / corrected: “I might feel like a customer has to pay no commission.”

**06:39.500–06:43.760** Speaker A:
> Raw ASR: “As a customer, I might feel like they are asking no commission from me.”
> Corrected: same — *the site is charging me nothing*, not *the site is paid nothing by banks*.

**06:44.060–06:47.120** Speaker A:
> Raw ASR / corrected: “Instead of thinking that they are earning no commission from the bank.”

**06:48.080–06:52.340** Speaker A:
> Raw ASR / corrected: “So I want some change of words over here.”

(Bias / camera lock continues in `10` from 06:52. The “imply, don’t explain how we earn” constraint is the last part of that same speech.)

**07:37.360–07:43.380** Speaker A (after locking “website talking to the customer” in `10`):
> Raw ASR: “Now keeping that constant, how do we show that website does not earn anything?”
> Corrected: same. Show “we don’t earn [from banks / to push]” without leaving the customer-facing camera.

**07:44.260–07:48.260** Speaker A:
> Raw ASR / corrected: “Website has no bias and website does not push anything.”

**07:49.240–07:54.980** Speaker A:
> Raw ASR / corrected: “Find better words or better structure or better way to imply the same.”

**07:57.180–07:59.980** Speaker A:
> Raw ASR: “Without letting the customer know that how do they earn?”
> Corrected: without making the customer focus on *how Shroffin earns* / without spelling out the business model here.

**07:59.980–08:04.340** Speaker A:
> Raw ASR / corrected: “So that they don't question how they are earning.”

They do not name a replacement word for “commissions” in this clip. Speaker B’s “Why? What is the problem?” and the sell-data / trust / pay-cuts hunt is `11`.

## First-principles problem
- What must be true: the customer should hear “we are not paid by banks to push anyone,” not “this site is free of fees *for me*.”
- Root vs symptom: “Zero commissions” is the symptom word. The root is **who the commission is between**. Customers default to website↔customer money. The intended fact is website↔bank money (no pay-to-push).
- Constraints: keep the independence intent; stay in “website talking to the customer” (`10`); imply no bank pay-to-push **without** a how-we-earn explainer on this poster (`11` is why that last constraint is hard).

## Directions they considered
- Keep the intent: independent platform; no commissions from anyone to push them; no inherent bias (detail in `10`). Lean: liked.
- Change the words for “zero commissions.” Lean: **required.** No candidate locked here.
- Imply the same (no earn-to-push, no bias, no push) by better words, structure, or another device. Lean: yes.
- Do **not** use this block to explain how Shroffin earns, so people do not ask. Speaker B immediately asks why that is a problem (`11`).

## Company / user / future thinking
- Shroffin is not a bank. The homepage has to say they are **independent** and do not take money to push a listed lender.
- The customer always reads as “this site is talking to me.” Money words will be heard as *my* bill unless the copy blocks that.
- Independence is the point of the section. The word “commission” is failing that point.

## Fix metadata
- Likely code owners: first `.home-zero-pair` rest span (“commissions.”) and possibly `.home-zero-body`; copy only unless structure changes with `10` / `11`.
- Acceptance in their words: intent stays — “independent platform,” “don't take commissions from anyone to push them.” Customer must not think “I pay no commission” / “they are asking no commission from me.” They should be able to think “earning no commission from the bank.” “Change of words.” Imply it “without letting the customer [get stuck on] how do they earn” so “they don't question how they are earning.”
- What NOT to do: do not “fix” by adding a how-we-earn paragraph on this poster. Do not drop independence. Do not assume “commission” is clear. Do not treat the two-zero animation (`08`) as the wording fix.
- Open questions: what word replaces commissions? Is “earn nothing” even sayable, or only “no one pays us to push”?
- continues_from: `08-two-zeros-on-screen-felt-broken.md`
- continues_in: `wb-rec-260815-1951` `02-commission-customer-vs-bank-context.md` — restates “which commission? taken from me vs taken from the bank,” then tries “we don’t take commission / any money from the bank.” File 1951’s new drafts there; this file owns the first full statement of the misread. Related: `11` in this folder (Speaker B’s earn/trust challenge).

## Evidence index
- `audio.vtt` 06:03.450–06:52.340 and 07:37.360–08:04.340
- `events.json` idle on zeros; scroll t=410732 y=4282
- `screenshots/0042.png`–`0065.png`
- `pages.json` “Zero commissions.”
- Site `index.html` ~3184–3194
