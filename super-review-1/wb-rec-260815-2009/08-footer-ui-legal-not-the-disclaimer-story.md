# Footer UI is legal furniture — “no one cares”; do not mix this with disclaimer philosophy

They call the homepage unique-point pass done and look at the footer. One co-founder reaches to click a link; the other stops them: only the footer UI, not a tour of destinations. Footer is legal/compliance chrome. “No one cares.” If some of that information actually matters to Shroffin, show it somewhere else. They leave “does this even fit?” hanging. The next recording is the disclaimer’s *voice*. This clip is layout and attention — not that rewrite.

## Classification
- kind: discussion
- status: open (UI stance); disclaimer rewrite **not** decided here
- surface: homepage / `footer.site-footer` (columns Guide / Tools / Company / Support / Connect, Disclaimer, official-resource links)
- viewport: 1366×768 @2x
- speakers: Speaker A tries to close (“home page is done”), then talks legal / no one cares / show important bits elsewhere. Speaker B: “No, check the footer now”; “No, no, just the footer UI”; “Yes, it is okay”; last word “Yes, it does.” ASR is not diarized; the last “it should not / yes it does” is a live split.

## Session metadata
- folder: `wb-rec-260815-2009`
- recording id: `e5ccc985-647d-47ca-bd54-67b8bb2a8319`
- clip: 6, 15 Aug 2026, Yash + Parth, `http://localhost:8765/`
- started_at: 2026-08-15T14:39:23.871Z
- ended_at: 2026-08-15T14:48:19.960Z
- duration_ms: 536089
- screenshot count: 68; event count: 166; console empty; tabs: 1
- viewport: 1366×768 @2x
- next recording starts ~7 s later: `wb-rec-260815-2018` at 2026-08-15T14:48:26.950Z

## Where on the page
- URL: `http://localhost:8765/`
- Landmark: contentinfo “Shroffin Footer”; region “Disclaimer”; navigation “Official resources”
- Visible copy in screenshots:
  - Help strip still above
  - Footer columns: Guide, Tools, Company, Support, Connect
  - Disclaimer summary: “Shroffin is not a bank or a lender. Everything shown here is for comparison. Your rate, fees, and approval are decided by the lender.”
  - Control: “Read the full disclaimer”
  - Copyright 2026; RBI / NHB / IRDAI / National Consumer Helpline / Income Tax Department
- Scroll: **08:11.884** y=0 (jump to top) then **08:16.479** y=8764.5 (straight back to footer)
- They inspect footer parts; they do **not** follow a link:
  - `screenshots/0062.png` — brief jump to hero (y=0) with inspector on `div.spd-safari-toolbar` (product demo chrome — leftover inspect, not a new demo issue)
  - `screenshots/0063.png` — inspector on a footer `li` (About)
  - `screenshots/0064.png` — inspector on `footer.site-footer` (~1366×515)
  - `screenshots/0065.png`–`0067.png` — disclaimer + `details.site-footer-disclaimer-more` (“Read the full disclaimer”)
- Click: **none** in this span after 04:32. Speaker B blocked “then click the link.” `replay.spec.ts` has no footer-link click.

## What they said (faithful, complete)

**08:12.370–08:16.490** both:
> Raw ASR: “Okay, home page is done. No, check the footer now. Okay.”
> Corrected: Speaker A tries to close the homepage unique-point pass. Speaker B: check the footer now. Speaker A agrees.

**08:19.790–08:30.990** both:
> Raw ASR: “Then click the link. No, no, just the footer UI. Footer UI, no one cares. It is not a disclaimer. No one cares. No one cares.”
> Corrected: someone starts to click through a footer link. Speaker B: no — **just the footer UI**. Footer UI: **no one cares**. “It is not a disclaimer” in the same breath as “no one cares” means the *link columns / chrome* are not the disclaimer essay, and visitors do not sit with this furniture. They are **not** saying the legal block is absent (it is on screen). They are **not** starting the 2018 philosophy of how disclaimer copy should feel.

**08:31.630–08:38.950** Speaker A, Speaker B:
> Raw ASR: “We have to show it at some different place. If that is important to us. So the footer is still the same information. Yes, it is okay.”
> Corrected: if a piece of footer information actually matters to the company, show it somewhere else (in the product / story), not only down here. The footer can stay the same information. Speaker B: yes, it is okay (as footer furniture).

**08:40.410–08:55.400** both:
> Raw ASR: “Everyone knows this is just legal stuff. Compliance. No, from our perspective does it fits or not? It should not. Yes, it does.”
> Corrected: everyone knows this is legal / compliance. Then they ask, from *Shroffin’s* perspective, whether this footer (or this disclaimer stance) **fits** the site they just reviewed. One voice: it should not [fit — the legal “we’re not responsible” vibe vs the helpful homepage]. Other voice: “Yes, it does.” The clip **ends on that disagreement**. They do not rewrite a sentence here.

Do **not** mix this file with `wb-rec-260815-2018`:
- 2018 is: language should not feel like legally doing away with obligations; not a bank/NBFC/lender; try our best; lawyer analogy.
- This clip is: homepage-done, inspect footer **UI** only, nobody reads this for the product story.

## First-principles problem
- What must be true: footer columns and compliance links are expected legal chrome. They are not where unique points live. Anything the company actually wants the customer to *feel* must be said in the pages above.
- Root vs symptom: “no one cares” is about **attention**, not about deleting the law. The root tension — helpful homepage vs “we are not responsible” — is named in the last seconds, not solved.
- Constraints: do not click-tour the links in this review; do not treat footer UI as a unique-point surface.

## Directions they considered
- Inspect footer UI only, do not click through links — **yes**.
- Leave footer information as-is for legal furniture — “yes, it is okay.”
- If something is important, show it in a different place — **yes**, as a rule.
- Does this legal block *fit* the brand? — **unresolved** (should not / yes it does). Continues next clip.

## Company / user / future thinking
- Company: Shroffin is not a bank or lender (on-page disclaimer). The homepage they just designed is “we are there for you.” Those two stances are about to collide — in 2018, not here.
- User: people know footers are legal stuff; they will not learn unique points here.
- Future: rewrite / re-voice the disclaimer in the next clip; do not invent that rewrite from this clip’s last ten seconds.

## Fix metadata
- Likely code owners: `footer.site-footer` in `index.html` / shared chrome (`site-chrome.js` / footer partial); disclaimer in `.site-footer-disclaimer` / `p.site-footer-disclaimer-summary` / `details.site-footer-disclaimer-more`.
- Acceptance in their words: review “just the footer UI”; don’t treat it as a place anyone cares to read for product story; move important messages elsewhere if they matter; legal/compliance can remain recognizable as legal.
- What NOT to do: do not delete the disclaimer because “no one cares.” Do not start rewriting “we are not a bank” from this clip — that is `wb-rec-260815-2018`. Do not follow footer links as part of this issue. Do not mix help-strip padding (`07`) into this file.
- Open questions: does the current disclaimer *fit* the helpful homepage? Split on the last lines; continues next.
- continues_from: `07-help-strip-stick-to-footer.md` (“check the footer”); homepage unique-point pass in `06`
- continues_in: `wb-rec-260815-2018` (`01-disclaimer-legal-copy-philosophy.md` — not a bank/NBFC/lender; try our best; should not feel like legally doing away with obligations). AI-native agent listening is 2018’s second file, not this footer-UI beat.

## Evidence index
- `audio.vtt` / `audio.txt` 08:12.370–08:55.400
- `events.json`: scroll t=491884 y=0; t=496479 y=8764.5; no click after 04:32
- `screenshots/0062.png`–`0067.png` (footer, disclaimer, inspector on `footer.site-footer` and `details.site-footer-disclaimer-more`)
- `pages.json`: contentinfo “Shroffin Footer”; region “Disclaimer”
- `index.html`: `.site-footer-disclaimer-summary` “Shroffin is not a bank or a lender…”
- Cross-clip: `wb-rec-260815-2018/audio.txt` starts on “we are not responsible” / third-party / lawyer analogy — that talk is **not** this file
