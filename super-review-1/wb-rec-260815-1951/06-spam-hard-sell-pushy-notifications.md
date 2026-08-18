# Spam calls, hard sell, pushy notifications — three labels overlap; the promise is no urgency

The next dark block says you can look through everything at your own pace without spam calls, a hard sell, or pushy notifications. One founder asks what those three actually are and how they differ. They unpack them with examples (document chasing, WhatsApp, unnecessary calls), notice spam and hard sell overlap, then say the section’s real job: **we don’t make urgency** — we bring everything; you go at your pace; no chasing.

## Classification
- kind: discussion
- status: open (three labels unclear / overlapping; gist stated, copy not locked)
- surface: homepage / `section.home-best` / `#home-best-title` / `p.home-best-body` (“without spam calls, a hard sell, or pushy notifications.”)
- viewport: 1366×768 @2x
- speakers: Speaker A reads the line and asks. Speaker B defines hard sell (document chase, said three times), push notifications (WhatsApp), spam (unnecessary calls). Then they note the overlap (data sold so others call). Speaker A states the gist they want the section to say.

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
- Section: `section.home-best` (fourth child of `.home-story-dark`)
- On-page copy:
  - h2: “Best of all, you can look through everything at your own pace,”
  - p: “without spam calls, a hard sell, or pushy notifications.” (three `.home-best-body-line` spans)
- Scroll into this block: **04:06.860** (`t=246860`) y=**5611.5**
- Click (pointing at the three-part line): **04:18.251** (`t=258251`) `locator("main > div > section:nth-of-type(4) > div > div > div > p > span:nth-of-type(2)")` — the **“a hard sell,”** span. screenshot_id 31 = `screenshots/0031.png`.
- Screenshots:
  - `0029.png` (t=244207) — leaving zeros: “Zero bias.” still large; “Best of all,” peeking at the bottom
  - `0030.png` (t=252208) — full Best-of-all block
  - `0031.png` (t=258654, click) through `0042.png` (t=350218) — they stay here for the whole unpack
- What the PNGs show: dark charcoal; “Best of all,” smaller white; “you can look through everything at your own pace,” muted gray; then large white “without spam calls, a hard sell, or pushy notifications.” No extra explanation on the page of what those three are. They click the middle phrase while asking how hard sell differs.

## What they said (faithful, complete)

**04:06.810–04:13.390** Speaker A (reads the section):
> Raw ASR: “Best of all, you can look through everything at your pace without spam calls, hard sell or push notifications.”
> Corrected to on-page: “Best of all, you can look through everything at your **own** pace, without spam calls, **a** hard sell, or **pushy** notifications.”
> ASR dropped “own,” “a,” and “pushy.”

**04:15.210–04:23.150** Speaker A (asks Speaker B):
> Raw ASR: “I want to ask you what is the significance of these three things? What is the difference between these three things? Spam call, hard sell. How is hard sell different? Hard sell.”
> Corrected: same. They are not sure the three labels earn three slots. “Hard sell” at the end is A handing the word to B (or repeating it so B answers).

**04:26.330–04:35.250** Speaker B (example, on purpose three times):
> Raw ASR: “You didn't send the documents. You didn't send the documents. You didn't send the documents. They are hard sell.”
> Corrected: **hard sell** = being chased because you didn’t send the documents — the same nag repeated. The triple repeat **is** the example of pressure, not a stutter.

**04:35.810–04:41.670** Speaker B:
> Raw ASR: “Push notifications means on WhatsApp it is pre-uploaded”
> Corrected: **pushy notifications** ≈ WhatsApp messages that are already written / blasted (“pre-uploaded”). They map the website’s “pushy notifications” to **WhatsApp chase**, not to a phone OS notification toggle.

**04:45.590–04:51.210** Speaker B:
> Raw ASR: “Spam calls are unnecessary calls.”
> Corrected: same.

**04:53.450–05:02.530** (VTT does not split speakers; sense is synthesis after B’s defs):
> Raw ASR: “Spam call and hard sell are a bit intersected. Spam call is basically where we sell our data and those people call them.”
> Corrected: spam and hard sell **overlap**. Extra meaning they attach to spam: **selling the customer’s data** so other people call. That is their industry contrast (what they refuse), not something the current line says. “We sell our data” = the **bad** marketplace pattern, not a claim that Shroffin does this.

Long pause ~**05:02–05:16** (no speech).

**05:16.570–05:33.990** Speaker A (what the section must actually say):
> Raw ASR: “Basically, what we have to say from this section is that we don't make any urgency for any thing. We will bring you everything and you can do things at your pace.”
> Corrected: the section’s job is: **we don’t create urgency**. We bring everything; you do it at your pace.

**05:38.170–05:46.010** Speaker A:
> Raw ASR: “You won't get unnecessary calls or you won't have to sell anything. We won't send you notifications asking you to buy or sell.”
> Corrected: no unnecessary calls; you won’t be sold to. We won’t send notifications asking you to buy. ASR “sell anything” / “buy or sell” = hard-sell / buy-the-loan pressure, not a stock-trading product.

**05:48.330–05:51.990** Speaker A:
> Raw ASR: “We will bring you everything and you can do it at your pace.”
> Corrected: same — they repeat the pace line as the spine.

They do not ask to delete this section in this span (that comes next, as part of “four sections”). They do not lock replacement copy beyond this gist.

## First-principles problem
- What must be true: the reader should feel **no pressure and no junk contact** — look through at their own pace.
- Root vs symptom: three punchy nouns (spam / hard sell / pushy notifications) don’t explain themselves and **intersect**. The root promise is one: no urgency theatre; everything is here; pace is yours.
- Constraint: keep “at your own pace.” Don’t rely on three labels that the founders themselves had to define out loud.

## Directions they considered
1. Keep three distinct horrors — but they could not keep them cleanly apart (spam ∩ hard sell).
2. Working definitions (internal, not locked UI copy):
   - Hard sell = document chasing (“you didn’t send the documents” ×3)
   - Pushy notifications = WhatsApp pre-written / blasted
   - Spam calls = unnecessary calls; also (they add) selling data so others call
3. Rewrite the **job** of the section: no urgency; we bring everything; your pace; no unnecessary calls; no notifications asking you to buy.
- Pros of three labels: they name real pains a shopper has lived.
- Cons: overlap; “hard sell” and “pushy” need a founder to explain; “spam” may drag in “do you sell data?” (the 1929 trust trap).
- Lean: gist over the three-way split. They did not vote to keep all three labels.

## Company / user / future thinking
- User: has lived spam, document nagging, and WhatsApp blasts. They may not parse “hard sell” vs “pushy notifications” as three different Shroffin promises.
- Company: Shroffin is not a bank and should not behave like a lead-selling marketplace. Pull, not push (startup-core). One founder used “we sell our data” as the **bad** pattern they refuse — not as homepage copy.
- Future: `wb-rec-260815-2000` asks whether “no spam calls” is **new** information vs already covered by “look through before you give a number.” This clip is the meaning unpack; 2000 is the uniqueness / trim decision.

## Fix metadata
- Code owners: `section.home-best` / `#home-best-title` / `.home-best-body` / `.home-best-body-line` in `index.html` / `content/pages/home.body.html`.
- Acceptance in their words: say we don’t make urgency; we bring everything; you do it at your pace; no unnecessary calls; we won’t send notifications asking you to buy. The three labels should not need a founder to explain them.
- What NOT to do: do not add a glossary on the page. Do not invent three new buzzwords. Do not turn this into a legal anti-spam policy. Do not treat Speaker B’s definitions as locked UI copy. Do not put “we sell data” on the site as a denial that reopens “then how do you earn?”
- Open: keep three examples under one gist, or drop to the gist only?
- continues_from: not covered in 1929 (1929 stopped on zeros / commission / pay).
- continues_in: `wb-rec-260815-2000` — “you won’t get spam calls” as new vs already-said look-through / phone number; they click this same `home-best` line again.

## Evidence index
- `audio.vtt` 04:06.810–05:51.990
- `audio.txt` / `audio.text` / `audio.tsv` same span
- `events.json` scroll t=246860 y=5611.5; click t=258251 screenshot_id 31
- `screenshots/0029.png`–`0042.png` (`0030.png` / `0031.png` show the full line)
- `pages.json` heading “Best of all, you can look through everything at your own pace,”
- `replay.spec.ts` click on `main > div > section:nth-of-type(4) > … > p > span:nth-of-type(2)`
- Site `#home-best-title`, `.home-best-body-line`
