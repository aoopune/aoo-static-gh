# Always be AI-native — an agent is listening; homepage done

After the disclaimer philosophy they say they still have to put their words into it, even if it is hard. Then they talk **process**, not footer UI: always AI-compatible; everything they do is AI-native; the agent is you, listening, and should understand their emotions; maybe they need a camera. They close the homepage review.

## Classification
- kind: discussion | process
- status: open (operating principle / how they record and work — not a homepage layout bug)
- surface: still visually on homepage footer Disclaimer while they speak; topic is company process, not a control they click. Wrap-up clicks collapse the panel and scroll the dark “Truly…” block into view.
- viewport: 1366×768 @2x
- speakers: Speaker A says “That’s what you said,” so Speaker B already asked to put the words in. The AI-native stretch is not diarized. No disagreement is audible.

## Session metadata
- folder: `wb-rec-260815-2018`
- recording id: `9c9ef8da-7407-45ae-9cb9-4c92fcacc00d`
- clip: 7 of 30 — last homepage clip
- started_at: 2026-08-15T14:48:26.950Z
- ended_at: 2026-08-15T14:53:49.212Z
- duration_ms: 322262 (~5 min 22 s)
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 41
- event count: 52
- console: empty (`console.json` is `[]`)
- tabs: 1 — never left `/`
- previous: `01-disclaimer-legal-copy-philosophy.md` in this folder
- next: `wb-rec-260815-2106` — Explore banks / product (~42 min gap after this recording ends)

## Where on the page
- URL: `http://localhost:8765/`
- They do not navigate. Expanded disclaimer stays on screen through **05:12** (`screenshots/0031.png`–`0038.png`, t=260213–312797) — slightly different frame from the earlier ~281377-byte shots (hover on “Read the full disclaimer”).
- Then they wrap the homepage:
  - **05:12.395** (`t=312395`, screenshot_id 38) click `locator("footer > div > div:nth-of-type(2) > div > section > div > p")` (`n=1`) — `p.site-footer-disclaimer-summary`
  - **05:13.563** (`t=313563`, screenshot_id 39) click `locator("footer > div > div:nth-of-type(2) > div > section > div > details > summary")` — collapse. `screenshots/0039.png` (~138941 bytes; expanded was ~281551). Summary line only; full panel gone.
  - **05:14.802** scroll `y=8764.5` (up)
  - **05:15.858** (`t=315858`, screenshot_id 40) click `locator("html")` — `screenshots/0040.png`: dark `section.home-open` caption “Truly the standard way to compare home loan lenders.” (`p.home-open-caption` / `.home-open-caption-punch`), `aside.site-help-strip` “Need some help? Chat now…”, footer columns; disclaimer scrolled out of view
- Those clicks are wrap-up after the legal-copy discussion (`01`). This talk is not about those pixels.

## What they said (faithful, complete)

Bridge from the disclaimer file (same recording):

**04:07.760–04:13.900** Speaker A, citing Speaker B:
> Raw ASR / corrected (same): “Even if you don't understand, we have to put our words into it. That's what you said.”
> Write the legal-copy philosophy in actual words, even if the other person (or a reader) does not fully get it. They treat that as Speaker B’s instruction.

**04:19.100–04:31.440** Speaker A (company process):
> Raw ASR: “We have to always be AI compatible. AI native means we are also AI native. Everything we do is AI native.”
> Corrected: same. Standing rule: always AI-compatible; they themselves are AI-native; **everything they do** is AI-native.

**04:35.860–04:46.000** Speaker A:
> Raw ASR: “It's like agent is you. He is listening. An agent means we understand our emotions.”
> Corrected: “It's like [the] **agent is you**. He is listening. An agent means we understand our emotions.”
> They are speaking to / about an agent that is listening to this review. “Understand our emotions” is what they want from that setup (or what they owe the agent).

**04:52.440–04:55.460** Speaker A:
> Raw ASR / corrected (same): “Or we need to have a camera.”
> Alternative they float: a camera so (implied) the agent can see, not only hear. They do not specify webcam vs page recording. This bundle already has page screenshots + mic; no face camera.

**05:00.390–05:09.660** Speaker A:
> Raw ASR: “That is truly AI native. You become AI native. Your life is compatible with an agent.”
> Corrected: same. “Truly AI native” = the listening-agent / emotions / (maybe) camera bar. Then “you become AI native” and “your life is compatible with an agent” — they do not mark whether “you” is the founders, the company, or the customer. Do not pick one; they said all three sentences.

**05:17.860–05:20.380** Speaker A (homepage close, not a UI ticket):
> Raw ASR: “Home run done. Time for a home page done.”
> Corrected: “**Homepage** done. Time for a **homepage** done.” ASR **home run → homepage** (`Home` p≈0.48, `run` p≈0.43). Second sentence is clear: homepage review is finished. Next recording `wb-rec-260815-2106` starts on Explore banks / product. No further homepage issues in this clip.

They do not name a model, a tool, or a site feature to build. They do not ask to add a camera widget on shroffin.com. This is how they want to work and to be understood.

## First-principles problem
- What must be true: their intent has to exist as **words** (and maybe picture), in a form an agent can use — including emotion, not only clicks. “AI-native” here is a way of working: everything they do should be compatible with an agent that is listening.
- Root vs symptom: not a footer bug. The nearby thing on screen is still the disclaimer; the real subject is capture and company habit so later work (including this audit) can hear what they meant.
- Constraints: they already believe an agent is listening (“agent is you”). They would rather over-explain in words than leave the philosophy implicit. After that they stop the homepage pass.

## Directions they considered
- Always be AI-compatible; they are AI-native; everything they do is AI-native.
- Put words in even if someone does not understand (Speaker B’s line).
- Treat the listening agent as “you”; it should get their emotions.
- Optional: add a camera — “or we need to have a camera” — as what would make it “truly AI native.”
- Then stop the homepage pass: “homepage done.”
- Lean: process / capture principle. Not a page redesign.

## Company / user / future thinking
- **Company:** they want Shroffin (and this co-founder review) to run as an AI-native practice — compatible with agents by default, not as a one-off. “Everything we do is AI native.”
- **User:** if “you become AI native / your life is compatible with an agent” includes the customer, they did not spell out a product. Do not invent an in-app agent from this clip.
- **Future:** camera so agents can read more than audio; keep putting intent into words. After this sentence they leave the homepage (gap, then Explore banks).

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: **none on the homepage footer.** This is how they record and brief agents. If a later ask turns “camera” into a capture-tool change, that is the recorder / review setup, not `index.html`. Wrap-up locators (collapse only, not a product ticket): `footer … section > div > p`, `details > summary`, `locator("html")`; visible after scroll: `section.home-open` / `p.home-open-caption`, `aside.site-help-strip`.
- Acceptance criteria in their words: “put our words into it”; “always be AI compatible”; “everything we do is AI native”; “agent is you / he is listening”; understand emotions; “truly AI native”; “your life is compatible with an agent.” Homepage: “homepage done.”
- What NOT to do: do not ship a website camera, chatbot, or “AI native” marketing line from this clip. Do not treat this as a disclaimer rewrite (that is `01-disclaimer-legal-copy-philosophy.md`). Do not keep hunting homepage issues in this folder after they said the homepage is done.
- Open questions: is “you” the founders, the company, the customer, or the listening agent? Do they want a face camera on future review recordings? Unanswered here.
- Related recordings:
  - continues_from: `01-disclaimer-legal-copy-philosophy.md` in this folder (“put our words into it”)
  - continues_in: `wb-rec-260815-2106` — they leave the homepage for Explore banks / product. Do not invent that session’s findings here.

## Evidence index
- `audio.vtt` / `audio.txt` 04:07.760–05:20.380
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` (ASR: `Home run` → homepage; language `mr`)
- `events.json`: idle until t=312395; click summary `p`; click `details > summary`; scroll y=8764.5; click `html` t=315858 screenshot_id 40
- `screenshots/0031.png`–`0038.png` (still on expanded disclaimer) then `0039.png` (collapsed) then `0040.png` (`section.home-open` “Truly…” + help strip + footer columns)
- `replay.spec.ts`: `section > div > p` click → `details > summary` click → `html` click
- `manifest.json` viewport 1366×768, dsf 2; `tabs.json` one tab `http://localhost:8765/` the whole time
