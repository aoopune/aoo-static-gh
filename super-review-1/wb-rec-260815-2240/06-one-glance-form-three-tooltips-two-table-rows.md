# At one glance: this form, three tooltips, and at least two table rows — so you know how the page was made

They want the Explore banks page to explain itself without a tour. Somewhere on this page, in one look: the form, **three tooltips**, and **at least two rows** of the comparison table. When the form is filled you get the tips; there is a table at the bottom to compare. That is the “tool design” they said they were already asking for.

## Classification
- kind: issue | layout + product (first-run understanding)
- status: open
- surface: explore-banks / `#hlc-inputs` + Bank options table. Field help buttons (`button.hlc-field-help`, “About …”). Table rows (Canara Bank + next lenders).
- viewport: 1366x768 @2x
- speakers: Speaker A. Speaker B not heard on this block. ASR is not diarized.

## Session metadata
- folder: `wb-rec-260815-2240`
- recording id: `a82e9a9f-c11f-4376-881d-25a436d5e6f5`
- clip: 18 of 30
- started_at: 2026-08-15T17:10:04.687Z
- ended_at: 2026-08-15T17:19:10.273Z
- duration_ms: 545586 (~9 min 6 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`
- screenshot count: 67
- event count: 127
- console: empty
- tabs: 1
- previous: `wb-rec-260815-2231`
- next: `wb-rec-260815-2249`

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- On-page pieces they name:
  - “This form” = Loan inputs card (already filled; income still has the blue underline from `05`).
  - “Three tool tips” = the grey **(i)** buttons on field labels (`About Monthly income`, `About Property agreement value`, `About Age`, etc.). They ask for **three** visible, not all of them open. The card already shows an (i) on every primary field.
  - “At least two rows of tables” = Bank options table under Overview. At rest `0032.jpg` shows **Canara Bank** fully; after a small scroll `0041.jpg` (t=362206) shows Canara + **City Union Bank** (8.85%, tenure 20, EMI ₹48).
- Click: none in this span. Income was focused at 03:59; they do not open any (i).
- Scroll: **04:38.732** y=287 (down toward table), **04:40.166** y=106 (back up) — while they say “if you put it here” / table at the bottom. Matches “form + table in one glance” hunting.
- Screenshots: `0032.jpg`–`0040.jpg` (t=280224–352208) — card + Overview header + Canara row. They are looking at a page that **already** has form + (i) icons + a table; they want that trio **readable in one glance**, not a new third module.

## What they said (faithful, complete)

**03:58.220–04:25.080** Speaker A:
> Raw ASR: “Also, if you want to show that... In the next section... I want to do something. Somewhere on this page... Tool design. Somewhere on this page, this form. Three tool tips. And at least two rows of tables. If you see one... At one glance, you will know how this page was made. That's what I was saying.”
> Corrected: same. “Next section” = they are still on Explore banks, talking about **this** page’s composition (form → tips → table), not a new URL (`In` ~0.07, `next` ~0.06). “Tool design” is low-confidence (`Tool` ~0.03) but they immediately list the three pieces. “How this page was made” = you can **see the mechanism**: inputs, a few explanations, results. Not “how we coded it.”

**04:28.810–04:33.150** Speaker A:
> Raw ASR / corrected: “You will know when you see it. When the form is filled, you will get the tips. And there is a table at the bottom to compare.”
> Sequence they want understood: filled form → tips → compare table underneath. `tips.` is very low-confidence (~0.03) — the word still matches the “three tool tips” they just named.

They do not say which three (i) to open, do not ask for a coach overlay, and do not ask to hide filters. “At least two rows” is a minimum so the table reads as a **list of banks**, not a single leftover line. Later (`08`) they also say “we need two tips” — record both counts; do not collapse.

## First-principles problem
- What must be true: a first look at Explore banks should contain **form + a little help + more than one bank row**, so the visitor can infer the product (put numbers → understand a field → compare lenders) without being told.
- Root vs symptom: the pieces already exist (filled card, many (i)s, table below). The root is **whether they share one glance** (viewport / density / what is open), not missing features.
- Constraints they implied: three tips, not a wall of popovers; ≥2 table rows; form already filled (`05`); table stays at the bottom to compare.

## Directions they considered
- Compose the page so one glance = form + 3 tooltips + ≥2 rows.
- Tips appear in the context of a **filled** form.
- Lean: this is the tool-design they “were already saying,” not a new product.
- They do not choose *which* three fields get open tips in this clip.

## Company / user / future thinking
- User: should not need a walkthrough. Seeing a filled profile, a few explanations, and two bank lines should be enough to know what Shroffin is.
- Company: this is the opinionated first screen (`01`/`03`) — they decide the demo composition instead of asking users how the page should be taught.
- Future: `07` adds live change-as-you-type; `08` says some of that intelligence may need an API. `09`–`11` then attack the **See options / Adjust eligibility** chrome that sits between form and table.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: Explore banks layout in `pages/explore-banks.html` + compare CSS — `#hlc-inputs`, `.hlc-field-help` popovers, results table. Viewport at 1366×768 must keep form + ≥2 lender rows without a hunt.
- Acceptance criteria in their words: somewhere on this page, this form, three tooltips, at least two rows of tables; at one glance you know how this page was made; when the form is filled you get the tips; table at the bottom to compare.
- What NOT to do: do not add a fifth page section or a modal tour. Do not open every (i). Do not remove the table from below the form.
- Open questions: which three tooltips. Whether tips should be **open** on land or merely **visible as icons** — they say “you will get the tips” when the form is filled. Two tips (`08`) vs three here.
- Related recordings:
  - continues_from: this clip `05` (pre-fill so they understand the profile).
  - continues_in: this clip `07` (you cannot take all of the first information at once; changing a field should show the next state).

## Evidence index
- `audio.vtt` 03:58.220–04:33.150
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.json` same span
- `events.json`: scroll y=287 then y=106 at t=278732 / 280166
- `screenshots/0032.jpg`–`0040.jpg`; two-row table clearer in `0041.jpg` (slightly later)
- `pages.json`: About Monthly income / Property / Age help buttons; Bank options
- Site `pages/explore-banks.html`: `#hlc-inputs`, `.hlc-field-help`, bank table
