# Extra fields must not vanish when you open Adjust eligibility — pre-filled is fine

Right after the importance map, they open **Adjust eligibility**. The heading and top of the card jump away. They say that kind of disappearing is the problem. They also say there is **no problem if those extra fields are already filled**. They click **No** on co-applicant so the extra co-applicant boxes go away — they do not narrate that click.

## Classification
- kind: issue | layout + product (accordion / extra fields)
- status: open
- surface: explore-banks / recorded accordion `details#hlc-form-more` summary **“Adjust eligibility”** (helper: “Existing EMIs, credit cards, income share for EMIs, tenure, co-applicant”) / panel `#hlc-form-more-panel` / co-applicant `#hlc-coapplicant-row` Yes/No. Submit on the right: **See options** (`#hlc-see-options`).
- viewport: 1366x768 @2x
- speakers: Speaker A names adjustability and prefill. Click **No** is silent. ASR not diarized. `audio.json` language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2313`
- recording id: `152443cc-6acb-4cd3-848e-1e260b989c24`
- clip: 22 of 30
- started_at: 2026-08-15T17:43:51.324Z
- ended_at: 2026-08-15T17:52:30.230Z
- duration_ms: 518906 (~8 min 39 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`, `www.google.com` (not this topic)
- screenshot count: 69
- event count: 112
- console: empty
- tabs: this block stays on Explore banks
- previous: `wb-rec-260815-2304` (prefill all extra columns; do not hide usefulness) and `wb-rec-260815-2249` (show extra fields on the card; don’t hide them behind Adjust eligibility)
- next: `wb-rec-260815-2322` (Compare banks button — not this accordion)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Control: bottom of the Loan inputs card. Collapsed in `0008.jpg`: down-chevron + **Adjust eligibility** + grey list, **See options** on the right, `h1` “Explore banks.” still fully visible.
- Click/focus (speech ↔ events):
  - **01:10.648** brief focus `#hlc-property-value` (name `propertyValue`, placeholder `62,50,000`) — miss on the way to the summary, not a property edit.
  - **01:10.746** click `details#hlc-form-more > summary > span > span:nth-of-type(1) > span` (`screenshot_id` 9 → `0009.jpg`). Panel opens. Co-applicant is **Yes**; Co-app income / EMIs / card limits show **₹0** (some labels masked). `h1` “Explore banks.” is **gone from the frame** (compare `0008.jpg`, where it is centered under the nav).
  - **01:12.355** `scroll` y=**175.5** — the heading is clipped; the top of the card has moved up. This is the jump they are talking about.
  - **01:15.176** focus+click `getByRole("button", { name: "No" })` on `#hlc-coapplicant-row` (`0010.jpg`).
  - **01:16.078** `input` `#hlc-coapplicant` = `"no"`. Co-applicant extra fields grey / unused (black redaction over the emptied cells).
- Visible leftover values in the opened panel: Existing EMIs **₹555**, Credit card limits **₹0**, FOIR **55% (default)**, Tenure **20 years** (asterisk), card-load note “About **10%** counts as monthly load.”
- Screenshots: `0008.jpg` (collapsed, heading visible) → `0009.jpg` (open, Yes, heading clipped) → `0010.jpg` (No).
- Later source: current `pages/explore-banks.html` may keep extra fields always in `#hlc-form-more-panel` (no `<details>`). The **recorded** control they judged is the accordion. Do not treat today’s always-open extras as this clip shipping the fix.

## What they said (faithful, complete)

**01:10.820–01:17.660** Speaker A (while opening the row):
> Raw ASR: “Let's talk about adjustability. That it should not disappear like this. And there is no problem if it is pre-filled.”
> Corrected: “Let's talk about **Adjust eligibility**. That it should not **disappear like this**. And there is no problem if it is **pre-filled**.”
> ASR: **adjustability.** p≈0.61 — the on-screen title they click at **01:10.746** is **Adjust eligibility**. **disappear** p≈0.62; **pre-filled.** split as “pre” p≈0.12 + “-filled” p≈0.88.
> Timing: the sentence starts as they click the summary and lands while the page has scrolled (y=175.5) and the heading is clipped. “Disappear like this” is the **open** behavior — the main card / title jumping away — not a later theory. “Pre-filled” = the extra fields already having numbers (₹555 EMIs, 20 years, 55%) is **fine**; they are not asking to empty them. They then click **No** (no speech on that click). They do not rename Adjust eligibility here (that fight is 2240 / 2249).

No Speaker B on this block. No pixel values. They do not say the extra fields should stay hidden.

## First-principles problem
- What must be true: the extra eligibility fields can exist and even come **already filled**. Opening them must not **eat** the picture the user was just using (heading, primary fields, importance grammar from `01`).
- Root vs symptom: the symptom is “it disappeared.” The root is the accordion + scroll: `details#hlc-form-more` grows, the viewport jumps (y=175.5), the thing they were ranking vanishes. Prefill is not the bug — they explicitly allow it.
- Constraints they implied: keep prefill (2304); don’t make the extra block a vanishing trick. 2249 already said put the extra columns **on** the card; this clip adds **don’t jump the rest away** when that block is shown.

## Directions they considered
- Name the failure: adjustability that **disappears like this** (the open/scroll). Lean: real bug, not taste.
- Prefill: **no problem**. Continues 2304 (prefill extras so people will actually fill them).
- They click Co-applicant **No** after opening — a demo of extra UI appearing/going away — but they do not narrate that click. Do not treat “set co-applicant to No” as the product request.

## Company / user / future thinking
- User: they will open “more” if they must. They will not forgive the page for stealing the form they were reading. Filled defaults are a relief, not a trap, if the fields look useful (`01` / 2304).
- Company: hiding intelligence behind a drawer fights the “become intelligent while filling” rule in `01`. Shroffin already argued (2249) to show the extra columns. This is the motion/layout half of that.
- Future: `2322` will rename the submit to Compare banks. Do not mix that with this accordion. Current repo HTML may no longer use `<details>` for `#hlc-form-more`; the **recorded** control is what they judged.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `pages/explore-banks.html` `#hlc-form-more` / `#hlc-form-more-panel` / `#hlc-coapplicant-row` / `#hlc-see-options`, plus whatever scroll/open behavior grows the card.
- Acceptance criteria in their words: “it should not disappear like this”; “there is no problem if it is pre-filled.”
- What NOT to do: do not empty the extra fields to “simplify.” Do not treat the property-value miss-focus as a property-copy issue. Do not rename Adjust eligibility in this file (2240 `09` / `11`, 2249 `01`). Do not change See options here (`2322`).
- Open questions: is “disappear” only the scroll jump, or also extra fields hiding again when Co-applicant is No? Speech is timed on the **open**, before **No**. 2249’s “show them directly” would remove the open step entirely.
- Related recordings:
  - continues_from: `wb-rec-260815-2304` (prefill extras); `wb-rec-260815-2249` `01` (show extra fields; don’t hide behind Adjust eligibility); `wb-rec-260815-2240` `09`/`11` (name + See options placement).
  - continues_in: not `2322` for this accordion. Same-take `03` stays inside the opened panel to click tooltips.

## Evidence index
- `audio.vtt` 01:10.820–01:17.660
- `audio.json`: **adjustability.** p≈0.61; **disappear** p≈0.62
- `events.json`: focus `#hlc-property-value` t=70648; click `details#hlc-form-more > summary` t=70746; scroll y=175.5 t=72355; click No t=75176; fill `#hlc-coapplicant` `"no"` t=76078
- `replay.spec.ts`: same locators (`details#hlc-form-more > summary`; `getByRole("button", { name: "No" })`)
- `screenshots/0008.jpg`–`0010.jpg`
- `pages.json` form fields Existing EMIs / FOIR / Tenure / co-applicant
- Site: `#hlc-form-more`, `#hlc-form-more-panel`, `#hlc-coapplicant`
