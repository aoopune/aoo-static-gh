# “Built around you” as a cheap accordion is a duplicate — Apple doesn’t do this

They open the Built around you rows and say the pattern is a **duplicate**: the same points already live in the dark story, and the extra words sit **below the dropdown**, not in the phone visual. It is **cheap**. Many companies do it; they have seen it; **Apple doesn’t.** Even if others kept it, it is not the normal they want. They do not know how to do it instead. They still compare: the difference is already **written on the top**.

## Classification
- kind: product / UI pattern / duplication
- status: open | unresolved (accordion rejected; replacement unknown)
- surface: homepage / `section.home-built` / `#home-built-title` / `.home-built-trigger` accordion + `.home-built-stage` visual
- viewport: 1366×768 @2x
- speakers: Speaker A (Parth) calls it cheap / duplicate / not Apple. Speaker B (Yash) — **“Yes.”** at 08:11.450. They both struggle with “I don’t know how to do it.”

## Session metadata
- folder: `wb-rec-260815-2000`
- recording id: `6be15ad6-ecbe-44e0-8c46-58dd985b7dca`
- started_at: 2026-08-15T14:30:27.912Z
- ended_at: 2026-08-15T14:39:10.279Z
- duration_ms: 522367
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
- Copy on screen (exact) — heading **Built around you.** Triggers:
  1. Guides that walk you through a home loan (open by default) — body: “These guides cover picking a bank, comparing offers, and what happens after you take the loan.”
  2. Every bank’s home loan in the same layout — body: “Interest, charges, conditions, and papers are lined up the same way for every bank, so you can compare them easily.”
  3. Browse before you give your number
  4. One application to the banks you pick
  5. Help toward what you need
- Right-hand visual: Guides cards (Before / While / After) or “Same layout” table (Bank A/B/C) when item 2 is open.
- Events + locators:
  - Focus + click **07:23.780** (t=443780) `getByRole("button", { name: "Every bank’s home loan in the same layout" })` / `locator("button#home-built-trigger-1 > span:nth-of-type(2)")` `screenshot_id`: 53.
  - Focus + click **07:27.915** (t=447915) `getByRole("button", { name: "Guides that walk you through a home loan" })` / `locator("button#home-built-trigger-0 > span:nth-of-type(1)")` `screenshot_id`: 54.
  - Scroll t=449961 y=7095, t=469858 y=6934, t=472759 y=7010 — stay on the card while they talk cheap / Apple / written on the top.
- Screenshots:
  - `screenshots/0052.png` (t=440205) — just before the click, Guides open.
  - `screenshots/0053.png` (t=444182) — **item 2 open**: “Every bank’s home loan in the same layout” + body about interest/charges/conditions/papers + right card **Same layout** table (Bank A 8.40% / B 8.55% / C 8.70%, Charges/Conditions/Papers “Shown”).
  - `screenshots/0054.png` (t=448317) — back to **Guides** open; right visual is a faint mix of guides + layout (transition).
  - `screenshots/0055.png`–`0062.png` — Guides open, Before/While/After cards, while they say duplicate / cheap / Apple / what’s the difference.
- What the PNG shows: a standard chevron accordion. Opening a row reveals a sentence that **restates** a dark-band fact (same layout = standardized view; browse before number = lead line 3; one application = apply once). The right visual repeats the left body (Guides three steps = the sentence about picking / comparing / after).

## What they said (faithful, complete)

**07:24.220–07:30.880** Speaker A (first click is happening):
> Raw ASR: “I don't know if you can see this. I don't know if you can see this. It is not just words.”
> Corrected: I don’t know if you can see this. It is **not just [the] words** — they are pointing at the **pattern** (dropdown + extra copy + side visual), not asking for a copy tweak.

**07:33.080–07:38.820** Speaker A:
> Raw ASR: “No, it is not in the phone. It is not in the phone. It is below the drop down.”
> Corrected: **No, it is not in the phone.** It is **below the dropdown.**
> Meaning: the extra explanation is not living in the earlier phone demo; it is the accordion **body under the chevron**. (Not a request to put this block inside the iPhone mock.)

**07:45.990–07:54.290** Speaker A:
> Raw ASR: “It is just a duplicate. We should put it here. We should put it here. And it will scroll.”
> Corrected: It is just a **duplicate.** [If we must keep the idea] we should put it **here** [in the story above], and it will **scroll** [with that story] — not as a second accordion.

**07:59.530–08:11.510** both:
> Raw ASR: “It is cheap. Many companies do it. I have seen it. Apple doesn't do it. Yes.”
> Corrected: same. **It is cheap. Many companies do it. I have seen it. Apple doesn’t do it.** Speaker B: **Yes.**

**08:13.410–08:24.410** Speaker A (and overlapping “I don’t know”):
> Raw ASR: “Even if they have kept it. It is not normal. I don't know how to do it. I don't know how to do it. I can't do it.”
> Corrected: Even if [other companies] have kept it, it is **not normal** [for what we want]. **I don’t know how to do it.** I can’t [solve the replacement in this sitting].

**08:28.050–08:37.990** Speaker A (clip ends here):
> Raw ASR: “And when we compare. Actually I have seen it. But it is written on the top. It is not seen on the top. What is the difference?”
> Corrected: And when we **compare** [these rows to the dark story]: actually I have seen it — but **it is written on the top.** [If] it is not seen on the top, what is the difference?
> The accordion labels are the **same facts already written above** (standardized view, browse before number, apply once). If the top already said it, the dropdown has no difference. If the top did **not** show it, then the accordion is doing work — but they believe the top already has it.

2009 continues on this same card: Help is a **seventh unique** point; other rows are supplementary to the six; then they talk about scrapping Scattered / refactoring the four dark sections. This clip’s job is: **do not ship this as a cheap accordion duplicate.**

## First-principles
- What must be true: a second UI that repeats the story is not “more product.” It is the same facts with a chevron.
- Root vs symptom: chevron animation is not the issue. **Duplication + a generic FAQ pattern** is the issue. Apple is the quality bar they named, not a request to copy an Apple page.
- Constraint: `07` liked font, color, spacing of this section. Replacing the accordion must not throw that away. Help (row 5) is **not** dismissed here as duplicate — 2009 will call it unique.

## Directions they considered
- Don’t keep it as this accordion.
- Put the facts in the scrolling story instead.
- Not in the phone demo.
- Not “many companies” FAQ.
- Replacement: unknown (“I don’t know how to do it”).
- Lean: reject this pattern; do not invent a new widget in this audit.

## Company / user / future thinking
- User: clicking five rows to re-read the homepage is work they should not need.
- Company: they want to look unlike the default fintech accordion. Apple is the named counter-example.
- Future: 2009 will mine this list for Help + supplementary lines, then scrap the rest of the lower page (Scattered, etc.).

## Fix metadata
- Likely code owners: `index.html` `section.home-built` ~3215–3340+ (triggers `#home-built-trigger-0` … `-4`, bodies, `.home-built-stage`); CSS `.home-built*` ~1041–1169; `js/shroffin-home-built.js`.
- Acceptance in their words: “it is just a duplicate”; “it is below the dropdown”; “it is cheap”; “many companies do it”; “Apple doesn’t do it”; “it is written on the top”; “what is the difference?”
- What NOT to do: do not restyle the chevron and call it premium. Do not move this accordion into the phone demo. Do not delete Help because other rows are duplicate. Do not implement a new pattern they said they cannot design in this sitting — wait for a chosen direction.
- Open questions: what replaces the accordion; how Help is shown once it is the seventh unique point (2009).
- continues_from: `07` (keep type/spacing). `04`/`06` (facts belong in the story).
- continues_in: `wb-rec-260815-2009` (Help toward what you need = 7th unique; other rows map back to earlier points; scrap Scattered; refactor four dark sections).

## Evidence index
- `audio.vtt` 07:24.220–08:37.990
- `events.json` click t=443780 `#home-built-trigger-1`; click t=447915 `#home-built-trigger-0`
- `screenshots/0053.png`–`0062.png`
- `pages.json` actions for the five Built buttons
- `replay.spec.ts` those two clicks
- `js/shroffin-home-built.js`
