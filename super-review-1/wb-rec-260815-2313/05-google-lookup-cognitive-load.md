# They Googled “cognitive load” — to name the extra mental work of sentences

After Tesla / “don’t worry,” one founder says **there is a cognitive load**, isn’t sure the other knows the term (“the way you showed me”), and opens Google. The query is **cognitive load** (typed as far as `cognitive loa` in `oq=`). The captured still is dark-mode Google with that phrase in the search box; results had not painted yet. They bounce back, then hit Google again once results exist, then return to Explore banks and apply the term to **sentences** (`06`).

## Classification
- kind: lookup | discussion (term check)
- status: open (the lookup itself is done; the product rule is `06`)
- surface: off-site `https://www.google.com/search?q=cognitive+load` (new tab), then back to `http://localhost:8765/pages/explore-banks.html`. Not a Shroffin UI bug.
- viewport: 1366x768 @2x
- speakers: Speaker A introduces the term and says they don’t know if the other knows it. ASR not diarized. `audio.json` language tag: `mr`.

## Session metadata
- folder: `wb-rec-260815-2313`
- recording id: `152443cc-6acb-4cd3-848e-1e260b989c24`
- clip: 22 of 30
- started_at: 2026-08-15T17:43:51.324Z
- ended_at: 2026-08-15T17:52:30.230Z
- duration_ms: 518906 (~8 min 39 s)
- start_url: `http://localhost:8765/pages/explore-banks.html`
- hosts: `localhost:8765`, **`www.google.com`**
- screenshot count: 69 — Google is **`screenshots/0044.png`** only
- event count: 112 (4 `tab_switch`, 1 `navigation` to Google, 3 Google landmark snapshots)
- console: empty
- tabs: tab `1351502398` Explore banks ↔ tab `1351502409` Google (`tabs.json` 5 entries)
- previous: same-take `04`
- next: same-take `06` (they use the term on real sentences)

## Where on the page
- From Explore banks they **scroll** first: **04:43.665** y=20, **04:44.229** y=0, **04:46.031** y=151.5 (`0043.jpg` — card with Adjust eligibility still open; Monthly income / Property visible again).
- **04:49.343** `tab_switch` from Explore banks (`fromTabId` 1351502398) to a new tab (`toTabId` 1351502409, `toUrl` null at switch).
- **04:50.804** landmark `[p2]` `https://www.google.com/search/warmup.html` — “Warmup Page” (recorder warmup, not a user destination).
- **04:52.854** landmark `[p3]` Google Search (query URL, title still “Google Search”).
- **04:53.091** `navigation` to  
  `https://www.google.com/search?q=cognitive+load&oq=cognitive+loa&…`  
  (`screenshot_id` 44). Landmark `[p4]` title **“cognitive load - Google Search”**.
- **`0044.png`** (t=293091): Google **dark mode**. Search box text **“cognitive load”**. Logo, Sign in, empty dark body (shot before results). `oq=cognitive+loa` = they typed it; this is not a random open. `mask_rects`: `[]`.
- **04:59.505** back to Explore banks → **05:01.063** Google again → **05:02.329** Explore banks for the rest of the take (`0045.jpg` onward = same card as before).
- Second Google visit (`landmark_snapshot` t=301071) **does** have results: headings “Cognitive load”, “Cognitive Load Theory”, NNGroup “What is Cognitive Load?”, Wikipedia, The Decision Lab, Laws of UX, ScienceDirect, PMC. They still **do not read a result aloud**.
- Time on Google: about **04:49.343–05:02.329** (~13 s), of which the loaded search URL is ~04:53–04:59 then a one-second return with results present.

## What they said (faithful, complete)

**04:38.960–04:53.020** Speaker A (why they search):
> Raw ASR: “There is a cognitive load. There is a cognitive load. I don't know if you know. The way you showed me. I don't know.”
> Corrected: same. They **repeat** the term. First “There is a cognitive load” is clearer; the repeat “There” p≈0.01. “I don’t know if you know” = checking whether the other founder knows **cognitive load**. “The way you showed me” (**showed me.** p≈0.27/0.31) = one of them had already shown the idea; they still look it up. Tab switch at **04:49.343** sits on this line. They do not read a Google result aloud (none is visible in `0044.png`; the later results snapshot is silent).

Then silence on Google; speech resumes at **05:02.030** on Explore banks (`06`).

No disagreement. No Shroffin URL change except the tab bounce.

## First-principles problem
- What must be true: they needed a **shared name** for “this sentence makes the brain work too hard.” They did not trust memory; they searched the public term.
- Root vs symptom: visiting Google is not the product issue. The root they are reaching for is extra mental work in **words** (`06`) and in **reading order** (`01` / `07`).
- Why Google: confirm **cognitive load** (query + `oq=cognitive+loa`). Not a competitor site, not a bank, not a thesaurus for “See options.”

## Directions they considered
- Name the problem as cognitive load; verify on Google. Lean: this is the term they will use for the rest of the take.
- They do not stay to quote Wikipedia, NNGroup, or Laws of UX. They come back and apply it to their own lines.

## Company / user / future thinking
- User: every extra word is work. They are about to judge Shroffin copy by that.
- Company: founders are aligning on a UX word, not adding a “cognitive load” label to the site.
- Future: `06` is the actual copy rule. Do not ship a definition tooltip because they Googled it.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: none for the Google tab. Copy owners for the **use** of this term: homepage unique-point / hero sentences (`06`) and Explore banks reading order (`01` / `07`).
- Acceptance criteria in their words: they wanted the term **cognitive load** on the table. The search proves the string (`q=cognitive+load`, `oq=cognitive+loa`).
- What NOT to do: do not invent other Google queries (only this one is in events/pages/tabs). Do not treat warmup.html as a user destination (recorder [p2]). Do not claim they read a result — `0044.png` is empty; the second visit has results in `pages.json` but no speech.
- Open questions: which founder had “shown” the term earlier (“the way you showed me”) — not in this recording’s files.
- Related recordings:
  - continues_from: same-take `04` (mass-market / don’t worry — then they still care how hard sentences are).
  - continues_in: same-take `06` immediately (“the sentences I tell you. The cognitive load increases.”). Session next `2322` does not continue the Google tab.

## Evidence index
- `audio.vtt` 04:38.960–04:53.020
- `events.json`: tab_switch t=289343; warmup landmark t=290804; Google Search landmark t=292854; navigation t=293091; tab_switch t=299505 / 301063 / 302329
- `tabs.json`: tab 1351502409 Google URLs
- `pages.json` [p2] warmup, [p3] Google Search, [p4] “cognitive load - Google Search” (second visit has result headings)
- `RECAP.md` same hosts/pages
- `manifest.json` `hosts` includes `www.google.com`; `urls` include both search URLs
- `screenshots/0043.jpg` (before), **`0044.png`** (Google, empty dark body), `0045.jpg` (back)
- `replay.spec.ts`: `page.goto` Google cognitive load
