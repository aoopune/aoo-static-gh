# Compare-and-apply is not taken yet — homepage and compare are done so far

Last lines of the last clip of the 15 Aug 2026 review. **Compare and apply** as a product is **still there** but they **have not taken it yet**. What is done: **homepage and compare**. Apply-once sits on screen the whole take; they never press it.

## Classification
- kind: note | product scope / what’s done
- status: closed as a scope statement (not a UI bug)
- surface: explore-banks still; **1 selected** + blue **Apply once** visible from `0000.png` through `0055.png`. They scroll the form and table while saying this; no Apply click.
- viewport: 1366x768 @2x
- speakers: Speaker A. ASR not diarized. End of the two-person review.

## Session metadata
- folder: `wb-rec-260816-0031`
- recording id: `abd34f08-4d04-49d6-a699-6c354e5780bd`
- clip: **30 of 30** (last clip of the 15 Aug 2026 review)
- started_at: 2026-08-15T19:01:37.835Z
- ended_at: 2026-08-15T19:08:12.983Z
- duration_ms: 395148 (~6 min 35 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 56 (PNG + JPEG)
- event count: 130
- console: empty (`console.json` is `[]`)
- tabs: 1
- pages.json: 1 page (`p1`)
- viewport: 1366×768, device_scale_factor 2
- previous: `wb-rec-260816-0029` (~9 s earlier) — EMI-miss drawers / extra rupees if one EMI is missed
- next: **none** — no next recording

## Where on the page
- **06:10–06:33** they scroll: form **Explore banks.** (`0053.jpg` t=378220 — Regular, CIBIL 780, Adjust eligibility open, See options), table with Women still on (`0054.jpg` Canara Housing loan + UCO Home), then filters + UCO / Notes (`0055.png` t=394225).
- **Apply once** + **1 selected** remain in the chrome. No `click` on that button in `events.json` / `replay.spec.ts`.
- They never leave `explore-banks.html` (`tabs.json`: one tab the whole session).

## What they said (faithful, complete)

**06:22.150–06:33.510** Speaker A (clip ends):
> Raw ASR: “So, our compare and apply product. The comparison product is still there. We have not taken it yet. Home page and compare is done so far.”
> Corrected: same. **Compare** p≈0.76 then **apply** p≈0.91. **Compare-and-apply** is the **product**. **Comparison** is **still there**. They **have not taken** (built / shipped / reviewed) the **apply** half **yet**. **Homepage** (Home p≈0.47, page p≈0.65) and **compare** (p≈0.96) are **done so far**.
> “Still there” = the compare work remains in the product; apply is the **untaken** piece — not that compare was removed.

No Speaker B line after this. No next clip.

## First-principles problem
- What must be true: this review’s **done** pile is **homepage + compare**. **Apply** is explicitly **not taken yet**.
- Root vs symptom: **Apply once** on the compare table looks like the missing half. They name **scope**, not a button bug. Do not file “Apply once is broken” from this line.
- Constraints: open issues in `01`–`09` live on **compare**. They are not cancelled by “compare is done.”

## Directions they considered
- Treat **homepage** as done.
- Treat **compare** as done **so far** (this page / this review).
- Leave **compare-and-apply**’s **apply** side **untaken**.
- Lean: stop the 15 Aug review here. No extra page tour.

## Company / user / future thinking
- User: can **compare** banks on this page; **apply** (one application to chosen banks) is the named future.
- Company: do not start apply-flow work from this clip’s UI notes; they said they **have not taken it**.
- Future: **none in this review**. Next work on apply is a later session. `01`–`09` stay open **on compare**.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for a new apply flow **from this note**. `Apply once` / `js/home-loan-apply.js` exist but were **out of scope** for this review.
- Acceptance in their words: “compare and apply product”; “we have not taken it yet”; “home page and compare is done so far.”
- What NOT to do: do not implement apply because the button is visible. Do not mark `01`–`09` closed because “compare is done.” Do not invent a next recording.
- Open questions: whether “comparison product is still there” means keep compare as-is while apply is built, or compare still has the open notes in this folder.
- Related recordings:
  - continues_from: `09` (last compare-design fight) and `wb-rec-260816-0029` as previous clip
  - continues_in: **none** (end of 15 Aug 2026 review)

## Evidence index
- `audio.vtt` 06:22.150–06:33.510
- `audio.json` words: compare p≈0.76 / 0.96; apply p≈0.91; Home p≈0.47; page p≈0.65
- `events.json`: scrolls t=369981–392923; no Apply click
- `screenshots/0053.jpg`, `0054.jpg`, `0055.png`
- `tabs.json`: single tab `explore-banks.html` throughout
- On-screen: **Apply once**, **1 selected** — never pressed
