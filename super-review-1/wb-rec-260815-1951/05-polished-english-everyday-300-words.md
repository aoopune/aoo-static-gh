# Polished English means everyday words — about 300 words of vocabulary, not a page length

After locking the gist of the zeros block, they define what “polished English” means for Shroffin. It is not fancy writing. A normal user should get it. Almost all of a conversation (they say about 96–98%) can be said with a small everyday vocabulary — they say “just 300 words.” Don’t use those big words.

## Classification
- kind: product-thinking
- status: open (standing writing rule, not a one-line patch)
- surface: homepage copy generally; spoken while still on `section.home-zero`, then applied to later lines
- viewport: 1366×768 @2x
- speakers: Speaker A: “We have used polished English.” Speaker B: “Normal users will understand.” Speaker A: “Yes…” and the 300-word definition. Short agreement, then A specifies.

## Session metadata
- folder: `wb-rec-260815-1951`
- recording id: `ce85813c-385e-4259-a46a-98178da92985`
- started_at: 2026-08-15T14:21:00.929Z
- ended_at: 2026-08-15T14:29:32.515Z
- duration_ms: 511586
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- events: 91 · screenshots: 62 · console: 0 · tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Still visually on the zeros poster (`0024.png`–`0026.png`). They are not pointing at a dictionary, a settings screen, or a word-count. This is a writing rule for the site.
- Scroll at **03:36.195** y=4952.5 and **03:37.929** y=4830 — small nudge as they finish the gist and this rule; still the same dark column.
- `0026.png` (t=220206) still shows Zero commissions / Zero bias + fair-view body.
- They then read the next block’s copy (`06`) using this rule as the test.

## What they said (faithful, complete)

**03:35.580–03:36.920** Speaker A:
> Raw ASR: “We have used polished English.”
> Corrected: same — they are already aiming at polished English for the gist they just formed (`04`).

**03:38.200–03:39.520** Speaker B:
> Raw ASR: “Normal users will understand.”
> Corrected: same. Test = everyday readers, not specialists. This is agreement, not a rival definition.

**03:40.080–03:43.700** Speaker A:
> Raw ASR: “Yes, polished English means we have to understand it”
> Corrected: yes — polished English means **[the reader]** can understand it. “We have to understand it” = the user has to get it, not “we the founders understand our own jargon.”

**03:45.010–03:54.360** Speaker A:
> Raw ASR: “but something like 96% or 98% conversation can be done in just 300 words in English.”
> Corrected: rough bar: **96% or 98% of [what we need to say / a conversation] can be done in just 300 words in English.** This is a ceiling on rare/hard words — **vocabulary size**, not “the homepage must be 300 words long.”

**03:55.620–03:58.580** Speaker A:
> Raw ASR: “We don't have to use those big words.”
> Corrected: same.

**04:00.620–04:02.220** Speaker A:
> Raw ASR: “We have to understand”
> Corrected: [the reader] has to understand — the sentence trails off; next they read “Best of all…” (`06`).

They do not list banned words. They do not name a style-guide file. They do not count the page.

## First-principles problem
- What must be true: Shroffin homepage English should be understandable to a normal home-loan shopper, using a small everyday vocabulary, while still sounding finished (“polished”) — not academic, not crude.
- Root vs symptom: “polished” can be misread as impressive vocabulary. They define it as **clarity in few common words**. 1929 already wanted fewer, simpler sentences that stay polished; this clip defines **which** English that is.
- Constraint: keep polish (finished, calm). Don’t swap in jargon to sound independent, fair, or smart.

## Directions they considered
- Only this definition: ~96–98% of the conversation in ~300 English words; no big words; normal users understand.
- Speaker B’s contribution: the **who** (normal users). Speaker A’s contribution: the **how** (small everyday vocabulary).
- Lean: apply this to the zeros gist and to later homepage lines (spam/hard sell, story section). Not a vote between two styles.

## Company / user / future thinking
- User: a normal home-loan shopper in India, not a banker or a copywriter.
- Company: “polished English” is a product constraint for Shroffin, not decoration. Matches startup-core: plain language a stranger understands in one read.
- Future: `wb-rec-260815-2000` asks “how many minimum words are needed for each point” — that is **compression per unique fact**, not a restatement of the 300-word **vocabulary** idea. Do not collapse the two.

## Fix metadata
- Code owners: homepage story copy in `index.html` / `content/pages/home.body.html` (`.home-lead`, `.home-clear`, `.home-zero`, `.home-best`) and whatever copy source of truth the team uses. Not a CSS change.
- Acceptance in their words: “Normal users will understand.” Polished English = understandable. “We don't have to use those big words.” Most of the conversation in a small everyday word set (~300 words).
- What NOT to do: do not “polish” by adding rarer words. Do not truncate meaning just to hit a 300-word **page** length — they meant vocabulary, not a homepage cap. Do not treat 300 as a measured corpus they handed over.
- Open: no word list. 300 is an illustration.
- continues_from: `wb-rec-260815-1929` `05-story-sentence-simplification.md` — same information, fewer words, English still polished, one subject / one predicate.
- continues_in: `wb-rec-260815-2000` minimum words per unique point — related compression, different unit.

## Evidence index
- `audio.vtt` 03:35.580–04:02.220
- `audio.txt` / `audio.text` / `audio.tsv` same span
- `screenshots/0024.png`–`0026.png`
- `events.json` scrolls t=216195 / 217929
