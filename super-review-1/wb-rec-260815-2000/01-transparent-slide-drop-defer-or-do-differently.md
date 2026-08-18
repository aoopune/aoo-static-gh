# The whole “Transparent, like never before” slide is unnecessary

After the lead’s three facts, the next full-screen is only “Transparent, like never before.” They already know they are transparent. The slide has nothing else on it, so they would drop it, park it for later, or do it some other way — they do not pick which.

## Classification
- kind: product / copy / layout
- status: open | unresolved (drop vs later vs different — no pick)
- surface: homepage / `section.home-clear` / `#home-clear-title` / outlined “Transparent,” + “like never before.”
- viewport: 1366×768 @2x (desktop only in this recording)
- speakers: Speaker A (Parth, still walking the page from the 1951 nine-minute review) leads. Speaker B (Yash) is present; no disagreement on this beat.

## Session metadata
- folder: `wb-rec-260815-2000`
- recording id: `6be15ad6-ecbe-44e0-8c46-58dd985b7dca`
- started_at: 2026-08-15T14:30:27.912Z
- ended_at: 2026-08-15T14:39:10.279Z
- duration_ms: 522367 (~8.7 min)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events_count: 172
- screenshots_count: 63
- console_count: 0
- tabs_count: 1
- pages_count: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Copy on screen (exact):
  - Previous dark block (`section.home-lead`): “We completely re-engineered your home loan journey.” then three lines — standardized view / look through before phone or email / pick banks and apply once.
  - This block (`section.home-clear`, `h2#home-clear-title`): hollow outline **Transparent,** then solid **like never before.**
- Events + locators:
  - Scroll t=9457 y=2402, t=10190 y=2463 — into this sticky pin.
  - Click **00:12.323** (t=12323) `locator("h2#home-clear-title > span:nth-of-type(1)")` — the outlined word “Transparent,”. `screenshot_id`: 2.
  - Scroll t=37824 y=1806 — they go **back up** to the lead’s four lines while saying “we are told our own qualities.”
  - Scroll t=43791 y=2480.5, t=51690 y=2577 — back onto Transparent.
- Screenshots:
  - `screenshots/0000.png` (t=204) — lead: four stacked lines, first and last bright white, middle two dimmer.
  - `screenshots/0001.png` (t=8205) — still on the lead as they start talking.
  - `screenshots/0002.png` (t=12729, click) — full viewport: outlined Transparent, / like never before. / grey body under it.
  - `screenshots/0003.png` (t=22204), `0004.png` (t=30206) — same slide while they call it self-explanatory.
  - `screenshots/0005.png` (t=40205) — lead again (qualities vs benefits).
  - `screenshots/0006.png` (t=48205) — Transparent again (“maybe we don’t need this section”).
- What the PNG shows: one idea, huge type, almost no other information. The outline-type trick is the whole show.

## What they said (faithful, complete)

**00:02.460–00:12.380** Speaker A:
> Raw ASR: “In this section, there are three things that we are told. In the next section, we are told that we are transparent like never before.”
> Corrected: In this section (the re-engineered lead) there are **three things** we are told. In the **next** section we are told we are **transparent like never before.**

**00:12.420–00:17.760** Speaker A (click is on “Transparent,” at 00:12.323):
> Raw ASR: “Okay, we are transparent, but I don't think we should do an entire slide.”
> Corrected: same. They accept the claim. They reject giving it a **whole slide**.

**00:20.200–00:28.360** Speaker A:
> Raw ASR: “Because there is nothing else. I mean, this is just a self-explanatory point.”
> Corrected: same. The slide is empty of new fact. “Transparent” explains itself.

**00:31.720–00:41.720** Speaker A (viewport has jumped back to the lead — `0005.png`):
> Raw ASR: “We are told our own qualities. Now, we are told how different we are or what are the benefits of us.”
> Corrected: The lead tells **our own qualities**. Then this next block is supposed to tell **how we are different / what the benefits are**.

**00:42.420–00:44.700** Speaker A:
> Raw ASR: “Now, we are told that we are like brothers.”
> Corrected: “Now we are told that we are **transparent**.” (“like brothers” is ASR for the on-screen “like never before” / transparent claim. Not a family metaphor.)

**00:48.620–00:55.800** Speaker A:
> Raw ASR: “Maybe we don't need this section. Or we can add this section later. Or we can try to do it in a different way.”
> Corrected: same three options, unpicked:
> 1. Drop the section.
> 2. Defer it (add later).
> 3. Do it differently (not a full self-explanatory slide).

They do not argue. The next sentence in the same block is a separate beat (`02`).

## First-principles
- What must be true: a full-screen only earns its keep if it carries a **new** fact, or a fact that cannot be said in the previous block.
- Root vs symptom: the hollow “Transparent,” type is not the complaint. The complaint is **an entire sticky viewport for a word they have already implied**.
- Constraint: 1929 **liked** this headline. This clip does not unsay that like — it says the **slide as a section** is still too much. Keep the like; do not treat “drop the section” as “hate the words.”

## Directions they considered
- Drop the section now.
- Add it later (not on this homepage pass).
- Keep the idea, change the form (not a dedicated slide).
- Lean: none chosen. All three stay live.

## Company / user / future thinking
- Company: they already believe they are transparent. Repeating the adjective is not how they want to prove it.
- User: a visitor who just read three concrete lead facts does not need a pause that only restates a quality.
- Future: if transparency is shown by the product (no commission, no bias, look-through without a number), the adjective slide becomes leftover.

## Fix metadata
- Likely code owners: `index.html` `section.home-clear` ~3166–3177; CSS `.home-clear*` ~361–430 (`min-height: 175svh` hold, sticky pin, outline `.home-clear-word`); dark band `.home-story-dark` ~173–190; scrub/boot `js/shroffin-home-boot.js` / `js/shroffin-home-stance.js`.
- Acceptance in their words: “I don't think we should do an entire slide”; “there is nothing else”; “self-explanatory”; “maybe we don't need this section” **or** “add this section later” **or** “do it in a different way.”
- What NOT to do: do not only restyle the outline font and call it fixed. Do not delete the claim from the company’s mouth if they later want it in another form. Do not treat this as a vote against the 1929 like of the headline itself.
- Open questions: drop / later / different — still open.
- continues_from: `wb-rec-260815-1929` `07-transparent-headline-liked-supporting-lines-add-no-value.md` (liked the headline; already doubted the block). `wb-rec-260815-1951` `07-four-story-sections-trim.md` (can we trim some of these four dark sections?).
- continues_in: `02` (the leftover sentence on this same slide). Later in this clip `05` (Transparent sitting in the **middle** of the four is the layout problem). `wb-rec-260815-2009` (refactor the four dark sections once Help is counted as a seventh unique point).

## Evidence index
- `audio.vtt` 00:02.460–00:55.800
- `events.json` click t=12323; scrolls t=9457, 10190, 37824, 43791, 51690
- `screenshots/0000.png`–`0006.png`
- `pages.json` heading / region “Transparent, like never before.”
- `replay.spec.ts` clicks `h2#home-clear-title > span:nth-of-type(1)`
- `index.html` `section.home-clear`
