# Explore banks vs the homepage product — which one is faster?

Homepage is done. First move of this clip: leave the dusk “product” window for the live compare tool. They ask which is faster — Explore banks, or that homepage picture of it. They hard-reload, bounce home, and click the blue button again. One of them already had the live page open. They never say a winner.

## Classification
- kind: discussion | speed of home demo vs live tool
- status: open (they tested; no spoken verdict)
- surface: homepage hero CTA `a.home-hero-cta-primary` “Explore banks” vs live `pages/explore-banks.html`; homepage fake-browser demo (`section[aria-label="Explore banks product demo"]`)
- viewport: 1366×768 @2x
- speakers: Speaker A asks which is faster and drives the clicks. Speaker B: already opened it; “don’t tease me.” ASR is not diarized (`audio.json` language `mr`); turns from question vs reply.

## Session metadata
- folder: `wb-rec-260815-2106`
- recording id: `2c589daf-48f1-4304-8831-5a9870fea870`
- clip: 8 of 30
- started_at: 2026-08-15T15:36:22.615Z
- ended_at: 2026-08-15T15:45:24.586Z
- duration_ms: 541971 (~9 min 2 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 92 (`screenshots/0000.png`–`0091.png`)
- event count: 202
- console: empty (`console.json` is `[]`)
- tabs: 1 (`tabs.json` tab_id `1351502398`; never a second tab)
- previous: `wb-rec-260815-2018` (clip 7; footer disclaimer + AI-native; last line “home page done.”). ~42 min gap, then this clip starts on `/`.
- next: `wb-rec-260815-2116` (~44 s after this clip ends) — already on `explore-banks.html`; first click is leftover **All**, then monthly-income help copy.

## Where on the page
- URL start: `http://localhost:8765/` — homepage, title “Shroffin” (`pages.json` p1).
- Click **00:05.113** (`t=5113`): `getByRole("link", { name: "Explore banks" })` (css `main > section:nth-of-type(1) > div > div > a`, href `pages/explore-banks.html`). Nav **00:05.139** `/` → `/pages/explore-banks.html`.
- Keys **00:11.974 / 00:12.124 / 00:12.619**: Meta, Shift, `r` — Chrome hard reload. `replay.spec.ts` emits `Meta+Shift+r`.
- Nav **00:17.125** (screenshot_id 2) live page → `/`. Scroll homepage **00:20.108** y=0.
- Click **00:22.800** (screenshot_id 3) Explore banks again; nav **00:22.821** back to the live page.
- Screenshots:
  - `0000.png` (t=208) — homepage: “Get a fair view of home loans…”, blue Explore banks, dusk landscape behind a fake browser of the tool (income ₹1,00,000, property ₹62,50,000, age 35, CIBIL 780, **Salaried**, Regular, See options)
  - `0001.jpg` (t=14208) — live Explore banks after first open
  - `0002.png` (t=17125) — homepage again after the bounce
  - `0003.jpg` (t=22815) — **nav chrome only, blank white body** (second load still painting)
  - `0004.jpg` (t=32208) — live page filled in
- What the frames show: they are timing the **homepage product picture** against the **real Explore banks page**. Not a third product.

## What they said (faithful, complete)

**00:04.090–00:07.450** Speaker A:
> Raw ASR: “Explore banks and the product.”
> Corrected: same. Two things on the table: live **Explore banks**, and “the product” = the homepage demo of that page (`Explore` p≈0.56).

**00:08.590–00:09.930** Speaker A:
> Raw ASR / corrected: “Which one is faster?”
> Word probs are weak (`Which` p≈0.17, `faster?` p≈0.49) but the question matches the reload + bounce they then do.

**00:11.170–00:12.390** Speaker A:
> Raw ASR: “Reduce. Let's try.”
> Corrected: **“Reload. Let's try.”** ASR **Reduce ≈ Reload** (`Reduce.` p≈0.51). Matches Cmd+Shift+R at **00:12.619**. Not a CTA rewrite. Not “reduce motion.”

**00:13.870–00:17.510** Speaker A:
> Raw ASR: “Why? You can see it clearly even if you just open it.”
> Corrected: same (`Why?` p≈0.10). The live tool is already readable on open — they are weighing that against the homepage movie.

**00:18.470–00:20.750** Speaker B:
> Raw ASR: “I have already opened it. Don't tease me.”
> Corrected: same (`tease` p≈0.23). Banter, not a product request: B already had Explore banks open; A is making them open it again for the speed check.

They do not quote milliseconds, Lighthouse, or “the demo is slow.” They do not ask to kill the homepage demo in this beat.

## First-principles problem
- What must be true: a visitor who taps Explore banks should land on the real compare tool without wondering whether the homepage movie *is* the product. If they bother to ask “which is faster,” the live page must not feel slower than a picture of itself.
- Root vs symptom: the question is first paint of `explore-banks.html` after the hero click (blank chrome in `0003.jpg`), not homepage copy.
- Constraints: keep the homepage demo (they praise the dusk look next). Do not make them fill the form before they can see banks.

## Directions they considered
1. Open live Explore banks from the homepage CTA.
2. Hard-reload the live page.
3. Go home and click Explore banks a second time (timed open).
- Lean: the live page is already understandable on open. Which of the two is faster is **unanswered in words**.

## Company / user / future thinking
- User: one click from home should show the real compare tool at once — not a white shell, not a demo they have to “enter.”
- Company: Shroffin is the comparison platform. The homepage window is a picture of Explore banks, not a second product.
- Future: this clip starts the product review after homepage closed (`2018`). They stay on Explore banks (one concessions detour) for the rest of the ~9 minutes. `2116` never returns to this speed question.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: homepage CTA in `index.html` (`a.home-hero-cta-primary` → `pages/explore-banks.html`); first paint / shell of `pages/explore-banks.html` (nav paints before `#hlc-inputs` in `0003.jpg`).
- Acceptance criteria in their words: they can tell which is faster; “you can see it clearly even if you just open it.”
- What NOT to do: do not rip out the homepage product demo to “win” speed (they call the dark-to-light look a movie next). Do not treat “Reduce” as on-page copy.
- Open questions: which they judged faster — never said. Was the blank-body shot a one-off reload artifact or a real first-paint gap?
- Related recordings:
  - continues_from: `wb-rec-260815-2018` — disclaimer language + AI-native; closed with “home page done.”
  - continues_in: not this speed question. Rest of `2106` is the live product. Next clip `wb-rec-260815-2116` already starts on `explore-banks.html`.

## Evidence index
- `audio.vtt` / `audio.txt` / `audio.text` / `audio.tsv` / `audio.lrc` / `audio.srt` / `audio_sentences.txt` 00:04.090–00:20.750
- `audio.json` language `mr`; word “Reduce.” p≈0.51; “Which” p≈0.17
- `events.json`: click Explore banks t=5113; nav t=5139; keys t=11974–12619; nav home t=17125; click+nav t=22800 / 22821
- `replay.spec.ts`: same CTA clicks and `Meta+Shift+r`
- `screenshots/index.json` + `screenshots/0000.png`–`0004.jpg`
- `pages.json` p1 action Explore banks; p2 `explore-banks.html`
- `manifest.json` viewport 1366×768 dsf 2, duration_ms 541971
- Site: `index.html` hero CTA; `pages/explore-banks.html`
