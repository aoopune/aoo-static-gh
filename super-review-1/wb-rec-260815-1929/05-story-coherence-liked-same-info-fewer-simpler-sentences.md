# They like the story’s plot — they want the same facts in fewer, simpler sentences

Once they reach the dark block that starts “We completely re-engineered your home loan journey,” they like how the story hangs together: re-engineered journey → whole market in one view so you can compare → decide before giving a phone number → you pick and the banks compete for you. Then, in the same breath, they say a shopper should get that same information with fewer words, still-polished English, and less mental work. One subject, one predicate. They keep line 1, and they try spoken rewrites of lines 2–4. They do not pick a final line.

## Classification
- kind: praise (plot) + issue (sentences)
- status: open (copy); plot itself is liked / not-a-bug
- surface: homepage / `.home-story-dark` / `section.home-lead` / `h2#home-lead-title` / `.home-lead-stack` / four `.home-lead-line` (two `.home-lead-soft`)
- viewport: 1366×768 @2x
- speakers: Speaker A walks every line. Speaker B not heard here. No disagreement.

## Session metadata
- folder: `wb-rec-260815-1929`
- recording id: `fb743d3e-45ef-48e2-a191-4c7147d743cb`
- started_at: 2026-08-15T13:59:20.405Z
- ended_at: 2026-08-15T14:08:27.240Z
- duration_ms: 546835
- start_url: `http://localhost:8765/`
- hosts: `localhost:8765`
- screenshot count: 66
- event count: 115
- console: empty
- tabs: 1
- viewport: 1366×768, device_scale_factor 2

## Where on the page
- URL: `http://localhost:8765/`
- Live copy in `.home-lead-stack` (`index.html` ~3151–3163):
  1. “We completely re-engineered your home loan journey.”
  2. “Now, the entire market sits in one standardized view, built so you can cross-examine rates, rules, and fine print at a glance.”
  3. “You can look through every lender before you give your phone number or email.”
  4. “You pick your banks, apply once to all of them, and they compete for you.”
- Scroll into the block:
  - **00:55.208** y=1234
  - **00:56.841** y=1355
  - **00:58.875** y=1595.5 — they stay parked here through the whole workshop until ~04:00
- Click (pointing, not navigating): **01:03.487** (`t=63487`) `locator("main > div > section:nth-of-type(1) > div > div > div")` — screenshot_id 8 (`screenshots/0008.png`)
- Screenshots:
  - `screenshots/0006.png` (t=52195) — demo still up; first story line peeking
  - `screenshots/0007.png` (t=62195) — four lines on charcoal; 1 and 4 bright white, 2 and 3 muted gray (scroll highlight / `.home-moment`)
  - `screenshots/0008.png` (t=63892, interaction) — same stack
  - `screenshots/0009.png`–`0028.png` — same four-line block the entire time they rewrite aloud
- What is visible: they are reading the live English, not a draft overlay. Line 2 is the longest. Gaps between lines are large. Nav stays on the light bar.

## What they said (faithful, complete)

### They like the plot

**01:00.940–01:11.580** Speaker A:
> Raw ASR: “In this section, I like the coherence of the story. We have completely re-engineered your journey.”
> Corrected: “In this section, I like the coherence of the story. We have completely re-engineered your [home loan] journey.”

**01:13.000–01:15.560** Speaker A:
> Raw ASR: “The entire market sits so you can compare.”
> Corrected: paraphrase of line 2 — the entire market sits [in one view] so you can compare.

**01:15.560–01:23.480** Speaker A:
> Raw ASR: “You can decide before giving your phone number, and you pick and they complete for you. I like this.”
> Corrected: “You can decide before giving your phone number, and you pick and they **compete** for you. I like this.”
> ASR: **complete for you → compete for you**.

### Same information, less work for the reader

**01:23.840–01:31.780** Speaker A:
> Raw ASR: “But I feel we can convey the same amount of information using a lot less words by keeping the English polished still,”
> Corrected: same. Same facts; fewer words; English still polished.

**01:33.160–01:38.560** Speaker A:
> Raw ASR: “and also by consuming a lot less context or brain power of the consumer that is reading it.”
> Corrected: same. The reader should not have to spend so much mental energy.

**01:40.320–01:52.260** Speaker A:
> Raw ASR: “So somewhere, what I feel is a sentence shouldn't be too complex in a way that it has multiple phrases.”
> Corrected: a sentence should not stack multiple phrases.

**01:52.680–01:56.140** Speaker A:
> Raw ASR / corrected: “It should be simple, one subject, one predicate as much as possible.”

**01:58.700–02:05.720** Speaker A:
> Raw ASR / corrected: “So if you look from that lens at all these sentences, we can definitely optimize quite a bit over here.”

### Line 1 — keep

**02:05.720–02:10.820** Speaker A:
> Raw ASR: “The first sentence looks good to me. We've completely re-engineered your home-grown journey.”
> Corrected: “The first sentence looks good to me. We've completely re-engineered your **home loan** journey.”
> ASR: **home-grown → home loan**. Live page already says “home loan.”

### Line 2 — too complex; two spoken shapes

**02:12.560–02:18.440** Speaker A:
> Raw ASR: “Now the entire market sits in one standardized view build so you can cross-examine. This can be simplified a lot.”
> Corrected: reading the live line (“…one standardized view, **built so** you can cross-examine…”). “This can be simplified a lot.”
> ASR: **build so → built so**.

**02:18.620–02:26.800** Speaker A (alt A):
> Raw ASR / corrected: “Something like, see the entire market in one comparable view.”

**02:33.400–02:48.440** Speaker A (alt B — keep rates / rules / fine print):
> Raw ASR: “We have something like one standardized view that helps you compare rates, rules, and fine print across the entire market.”
> Corrected: same. They are not throwing away rates, rules, and fine print — they are trying to say that without “sits in… built so you can cross-examine… at a glance.”

### Line 3 — “give your phone number” feels crude

**02:51.080–02:55.000** Speaker A:
> Raw ASR / corrected: “The next one, you can look through every lender before you give your phone number or email.”

**02:55.620–03:01.820** Speaker A:
> Raw ASR / corrected: “So this ‘before you give your phone number’ sounds a bit crude to me. This can become polished English as well.”

**03:01.940–03:09.060** Speaker A:
> Raw ASR / corrected: “Something like before we ask you for your details or before you are asked to surrender your contact information.”

**03:09.900–03:13.780** Speaker A:
> Raw ASR / corrected: “Before you need to give up some information or something of that sort.”

Three politeness tries, none chosen: (1) before we ask you for your details, (2) before you are asked to surrender your contact information, (3) before you need to give up some information.

### Line 4 — fails the simple-sentence test; three “one shot” tries

**03:14.840–03:19.860** Speaker A:
> Raw ASR / corrected: “And the next sentence, you pick your banks, apply once to all of them, and they compete for you.”

**03:20.280–03:23.060** Speaker A:
> Raw ASR / corrected: “Again, it fails my test of being a simple sentence.”

**03:24.580–03:37.870** Speaker A (alt A):
> Raw ASR: “So an example of a simple sentence here would be, choose your pick and apply in one shot, let them compete for you.”
> Corrected: same. “Choose your pick” is a spoken example, not a polish pass.

**03:42.480–03:46.880** Speaker A (alt B):
> Raw ASR / corrected: “Pick your banks and apply in one shot, and let them compete for you.”

**03:50.700–03:55.340** Speaker A (alt C):
> Raw ASR / corrected: “Apply in one shot to your entire selection, and let them compete for you.”

**03:55.520–03:56.500** Speaker A:
> Raw ASR / corrected: “Something of this sort.”

They do not lock a winner. Next they think scrolling is slow, then take it back (`06`).

## First-principles problem
- What must be true: a first-time reader can take in four beats — re-engineered journey, one comparable market view, browse before contact details, pick once and banks compete — without decoding stacked clauses.
- Root vs symptom: the symptom is long or crude sentences. The root is their rule: one subject, one predicate; extra phrases cost “brain power.” Line 1 already passes. Line 2 packs sits-in / built-so / cross-examine / at a glance. Line 3’s “give your phone number” feels crude, not only long. Line 4 chains pick + apply + they compete.
- Constraints: keep the information and the polish; do not dump the plot; do not make the English slangy.

## Directions they considered
- Keep the four-beat story. Lean: “I like this.”
- Shorten and simplify through the one-subject / one-predicate lens. Lean: required.
- Line 1: keep.
- Line 2: short “see the entire market in one comparable view,” **or** a standardized view that helps you compare rates, rules, and fine print across the entire market. No pick.
- Line 3: replace “before you give your phone number” with a politer ask (three tries). Lean: live phrase is crude; polish it. No pick among the three.
- Line 4: split around “apply in one shot” + “let them compete for you” (three tries). Lean: current line fails the test; something in this family.
- Spoken drafts are examples (“something of this sort”), not ship copy.

## Company / user / future thinking
- The customer is a person reading, not a banker. Copy should spend less of their attention.
- “Polished English” stays even while shortening — they do not want crude (“give your phone number”).
- Banks competing for the customer after one apply is how they want the company to feel. Do not drop that beat to make a short sentence.
- Unique information vs wording continues in `wb-rec-260815-1951`: they still call this a coherent story, then say the **sentence formation** is not coherent, and they list the unique facts (comparable market; see without giving information; flip the game so banks compete).

## Fix metadata
- Likely code owners: `section.home-lead` / `#home-lead-title` and the three following `.home-lead-line` paragraphs in `index.html` (~3156–3159), `content/pages/home.body.html`, `templates/layouts/home.html`. Motion/scrub on `.home-moment` / `data-home-scrub="lead"` can stay; this is copy.
- Acceptance in their words: keep “the coherence of the story”; “the same amount of information using a lot less words”; “English polished still”; “a lot less context or brain power”; “simple, one subject, one predicate as much as possible”; first sentence “looks good”; line 2 “simplified a lot”; line 3 not “crude”; line 4 passes the simple-sentence test; “something of this sort.”
- What NOT to do: do not throw away the four-beat plot. Do not keep “before you give your phone number” as the polite version. Do not ship “choose your pick” as final. Do not treat this file as finished because 1951 talks about the same block — 1951 adds unique-info / trim-sections; this clip owns the line-by-line workshop.
- Open questions: which line-2 shape? which line-3 politeness? which line-4 “one shot” variant?
- continues_from: `wb-rec-260815-1928` (abort)
- continues_in: `wb-rec-260815-1951` (`06-four-story-sections-trim.md`, `07-story-unique-info-and-sentence-formation.md`) — same story, later “do we need these four sections?” and “sentence formation is not that coherent.” Also related: 1951’s 300-word / polished-English note.

## Evidence index
- `audio.vtt` 01:00.940–03:56.500
- `audio.tsv` 60940–236500 (`home-grown`, `complete`, `build so`)
- `events.json`: scrolls t=55208, 56841, 58875; click t=63487 screenshot_id 8; idle on y=1595.5 through ~04:00
- `screenshots/0007.png`–`0028.png`
- `pages.json` heading + region “We completely re-engineered your home loan journey.”
- Site `index.html` ~3150–3163
