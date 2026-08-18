# Arrange the (i) tooltips — then actually read them

Inside the opened extra-fields block they point at the grey **(i)** marks. First: **arrange** all these tooltips. Then: maybe don’t read them all. Then they change their mind: **read it**. They click Credit card limits, Tenure, and Existing EMIs. The Existing EMIs popover that stays open says the new loan gets smaller; they do not quote that sentence aloud — they use the open tip as the start of the “public is stupid” talk (`04`).

## Classification
- kind: issue | UX (tooltip layout) + process (they insist on reading)
- status: open
- surface: explore-banks / `#hlc-form-more-panel` help buttons: `About Credit card limits` (`#hlc-help-card-limits`), `About Tenure` (`#hlc-help-tenure`), `About Existing EMIs` (`#hlc-help-existing-emis`). Recorded clicks land on the SVG circle inside `.hlc-field-help`.
- viewport: 1366x768 @2x
- speakers: Speaker A: arrange / let’s not read. Someone (A or B): “I haven’t read it myself.” Other: “No, read it.” Then “Yes, read it.” ASR not diarized. `audio.json` language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2313`
- recording id: `152443cc-6acb-4cd3-848e-1e260b989c24`
- clip: 22 of 30
- started_at: 2026-08-15T17:43:51.324Z
- ended_at: 2026-08-15T17:52:30.230Z
- duration_ms: 518906 (~8 min 39 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`, `www.google.com`
- screenshot count: 69
- event count: 112
- console: empty
- tabs: still Explore banks
- previous: same take `02` (panel just opened)
- next: same take `04` (they keep the EMI tooltip open and talk audience)

## Where on the page
- URL: `http://localhost:8765/pages/explore-banks.html`
- Panel still open from `02`. Co-applicant **No**. Values unchanged (EMIs ₹555, cards ₹0, FOIR 55%, tenure 20).
- Click/focus:
  - **01:25.016** focus+click combobox “Share of credit card limits counted as monthly load” (`name=cardLoadPct`, `0012.jpg`) — the **10%** control, not the (i). No speech about 10% in this span. Still no popover in the still.
  - **01:29.708 / 01:30.336 / 01:30.980** three clicks on Credit card limits (i) (`About Credit card limits`, `0013.jpg`–`0015.jpg`). Stills do **not** show a popover — they clicked the same mark three times and the tip did not sit in the frame.
  - **01:34.076–01:35.458** focus `About Tenure` + three clicks on Tenure (i) (`0016.jpg`–`0018.jpg`). Same: no Tenure popover visible in those stills.
  - **01:37.643** click `main > div > div > div` (`0019.jpg`) — dismiss / click-away. Card still open; no popover.
  - **01:40.688–01:44.588** scrolls y=197 → 283.5 → 276 → **331.5** (table comes back into view). `0020.jpg` (t=106198): Age / CIBIL / Occupation / Purpose at the top of the card; income/property scrolled off; table PNB **9.85%** / ₹5,400 / 20 / ₹52 now unmasked.
  - **01:46.943** focus+click `About Existing EMIs` (`0021.jpg`). `0022.jpg` (t=116198) shows the popover: **“Lowers how much new loan you can get. Learn more.”**
- Site copy for those popovers (current HTML; matches what `pages.json` and `0022.jpg` show for EMIs):
  - Credit card limits: “Part of this counts as monthly load — the limit, not what you owe.” + Learn more
  - Tenure: “Years to repay. Changes your EMI.” + Learn more
  - Existing EMIs: “Lowers how much new loan you can get.” + Learn more
- They do **not** read those sentences into the mic. After “Yes, read it” they go into `04`.

## What they said (faithful, complete)

**01:31.260–01:35.200** Speaker A (while poking Credit card / Tenure (i)):
> Raw ASR: “Let's arrange all these tooltips. Let's not read all the tooltips.”
> Corrected: same. **arrange** p≈0.48; **tooltips.** p≈0.84 then 0.95. Two asks: (1) **arrange** the (i) popovers (layout / stacking — they click three times on the same marks, and Credit card / Tenure tips never paint in the stills). (2) a first impulse **not** to read every one.

**01:40.930–01:48.690** both (they reverse):
> Raw ASR: “I haven't read it myself. No, read it. Yes, read it.”
> Corrected: same. One founder admits they have not read the tooltip text (**haven't read** p≈0.61/0.91). The other insists: **read it** (“No, read” p≈0.26/0.03 — weak ASR, but “it.” p≈0.71). Then agreement: **yes, read it** (“Yes,” p≈0.01; “read it.” p≈0.64/0.90). This is a review method, not a rewrite of one sentence yet. The EMI popover is the one left open (`0022.jpg`) when `04` starts.

No layout mock beyond “arrange.” No complaint about the word “FOIR” here. No “Learn more” navigation (they stay on explore-banks).

## First-principles problem
- What must be true: the (i) marks are the quiet teachers `01` allowed instead of a lecture. They have to be **readable** (arranged, not fighting the grid) and the team has to **know what they say**.
- Root vs symptom: clicking the same (i) three times with no popover in the still is a symptom of tips that don’t present cleanly. The root they name is **arrangement**. The second root is process: unread tooltips cannot be the intelligence system.
- Constraints: they almost skipped reading, then forbade skipping. Do not treat “let’s not read” as the decision — they overruled it.

## Directions they considered
- Arrange all tooltips. Lean: yes.
- Skip reading them all → **rejected**. Read them.
- They open three: card limits, tenure, existing EMIs. They do not open Monthly income / Property / Age / CIBIL (i) in this clip.

## Company / user / future thinking
- User: the (i) is how they were supposed to get smart without a class (`01`). If the tip is messy or the founders haven’t read it, that channel is fake.
- Company: these sentences are product, not decoration. `04` will argue most visitors won’t be impressed by fine print — that is a later audience point, not permission to leave tips unarranged.
- Future: they do not rewrite “Lowers how much new loan you can get” in this clip. Capture copy changes only if a later take actually reads a sentence aloud and rejects it.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `.hlc-field-help` / `.hlc-field-help-popover` in `pages/explore-banks.html` (and shared help CSS/JS). Fields they actually opened: `#hlc-help-card-limits`, `#hlc-help-tenure`, `#hlc-help-existing-emis`.
- Acceptance criteria in their words: “let’s arrange all these tooltips”; then “read it.”
- What NOT to do: do not delete the (i) marks (they are the non-lecture channel from `01`). Do not rewrite EMI/tenure/card copy in this file’s name — they didn’t quote it. Do not treat the 10% card-load click as a rate-policy issue; they didn’t talk about 10%.
- Open questions: what “arrange” means in pixels (stacking, collision with See options, collision with the table). Whether every (i) on the main card is in scope or only the extra-fields row they clicked.
- Related recordings:
  - continues_from: same take `01` (form teaches without a lecture) and `02` (panel open). Earlier helper-copy work lives in 2116 / 2125, not re-opened here.
  - continues_in: same take `04` (EMI tip still open; audience / foolproof). Not `2322`.

## Evidence index
- `audio.vtt` 01:31.260–01:48.690
- `audio.json`: **arrange** p≈0.48; **tooltips.** p≈0.84/0.95
- `events.json`: card-load combobox t=85016; Credit card (i) ×3 t=89708 / 90336 / 90980; Tenure (i) ×3 t=94078 / 94693 / 95458; click-away t=97643; Existing EMIs (i) t=106943; scrolls y=197–331.5 t=100688–104588
- `screenshots/0011.jpg`–`0022.jpg` (esp. `0022.jpg` EMI popover; `0013.jpg`/`0016.jpg` with no visible tip despite clicks)
- `pages.json` actions “About Credit card limits”, “About Tenure”, “About Existing EMIs”
- `replay.spec.ts` matching SVG-circle locators
- Site popover ids `#hlc-help-card-limits`, `#hlc-help-tenure`, `#hlc-help-existing-emis`
