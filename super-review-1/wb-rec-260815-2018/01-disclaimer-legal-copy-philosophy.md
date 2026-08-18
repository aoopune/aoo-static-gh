# Disclaimer should not feel like “we are not responsible”

They open the homepage footer disclaimer and say Shroffin’s legal language reads as **we are not responsible**. Everyone writes that; they want to be different. Keep the third-party facts (not a bank / NBFC / lender; do not approve, sanction, underwrite, or disburse). Add that they try hard, in the customer’s maximum benefit — like a **good lawyer** who still does not decide the case.

## Classification
- kind: issue | copy | philosophy
- status: open
- surface: homepage footer Disclaimer — `footer.site-footer` / `section.site-footer-legal` / `#footer-disclaimer` / `p.site-footer-disclaimer-summary` / `details.site-footer-disclaimer-more` / `.site-footer-disclaimer-full`
- viewport: 1366×768 @2x
- speakers: Speaker A carries the whole argument. Speaker B is in the room; at **04:12** Speaker A says “That’s what you said,” pointing the “put our words into it” line at B. ASR is not diarized (`audio.json` language tag `mr`). No spoken disagreement in this clip.

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
- previous: `wb-rec-260815-2009` — footer **UI** vs this clip’s disclaimer **philosophy** (“just the footer UI”; “no one cares”; “does it fit?”)
- next: `wb-rec-260815-2106` — Explore banks / product (~42 min gap)

## Where on the page
- URL: `http://localhost:8765/`
- Landmark: `contentinfo` “Shroffin Footer”; region “Disclaimer”; official-resources nav is visible and **not** clicked.
- Master copy: `partials/site-footer.html` (built into `index.html` via `npm run build:footer`).
- Collapsed summary (`screenshots/0000.png`, t=212): “Shroffin is not a bank or a lender. Everything shown here is for comparison. Your rate, fees, and approval are decided by the lender.” Control: `details > summary` “Read the full disclaimer”.
- **00:09.378 / 00:10.432** leftover **focus** on `#home-built-trigger-4` (`getByRole("button", { name: "Help toward what you need" })`) — from the unique-point section above; not this topic.
- **00:10.523** (`t=10523`, screenshot_id 2) **click** `locator("footer > div > div:nth-of-type(2) > div > section > div > details > summary")` (`n=1`) — expand. `screenshots/0002.png`.
- **00:13.968** scroll `y=9010` so the five legal paragraphs fit.
- **00:00–01:00**: no VTT. They inspect, then expand, then talk.
- Expanded first paragraph (live, `screenshots/0003.png`–`0038.png`): “Shroffin is not a bank, Non-Banking Financial Company (NBFC), or lender. We do not approve, sanction, underwrite, or disburse loans. We provide comparison and application assistance only. …” Then indicative-data, no-guarantee / cannot override, agreement is with the lender, features may change.
- **Not on the page:** “We are a platform that standardizes third party offerings into views that are easy for customers to comprehend.” They speak that while looking at this block. Live equivalent is only “comparison and application assistance only.”
- DevTools on the summary (`screenshots/0001.png`, t=8213): overlay on `p.site-footer-disclaimer-summary` — 14px, `#1D1D1F`, `"Google Sans Flex"`.
- Frames while they talk (speech starts **01:00.920**): `0003.png`–`0030.png` same expanded frame (~281377 bytes); `0031.png`–`0038.png` still expanded (~281796 / 281551 bytes, hover on the summary). Collapse clicks belong to `02`.
- They do not open Privacy Policy, Terms of Use, or RBI / NHB / IRDAI / helpline / Income Tax links.

## What they said (faithful, complete)

Silent inspect **00:00–01:00**: no transcript. Previous clip already sent them to “check the footer,” treated footer chrome as something “no one cares” about, and asked whether the disclaimer *fits from our perspective*.

**01:00.920–01:13.020** Speaker A:
> Raw ASR: “Overall, I feel that Shroffin's language is such that we are not responsible.”
> Corrected: same. Diagnosis of the **disclaimer** language: it reads as “we are not responsible.”

**01:15.400–01:19.380** Speaker A:
> Raw ASR / corrected (same): “But everyone is like this. Can we do something different?”
> Industry-standard dodge; they still want a distinctive stance.

**01:20.500–01:32.040** Speaker A:
> Raw ASR: “We can tell them that we are not really responsible because we are third party. But we try a lot. We try to work within your maximum benefit.”
> Corrected: “We can tell them that we are not really responsible because we are **a** third party. But we try a lot. We try to work **in / for** your **maximum benefit**.”
> Keep the third-party limit; add effort and customer benefit.

**01:36.180–01:46.400** Speaker A (reading the live legal lines):
> Raw ASR: “It's like... Shroffin... We do not approve sanction underwrite or disbursed language. Shroffin is not a bank, NBFC or letter.”
> Corrected: “It's like… Shroffin… ‘We do not approve, sanction, underwrite, or **disburse**’ language. Shroffin is not a bank, NBFC, or **lender**.”
> ASR: **disbursed → disburse**; **letter → lender** (`letter.` p≈0.60). Trailing “language.” is very weak (p≈0.007) — they are naming the **disclaimer phrasing**, not a new product word. Matches on-page: “We do not approve, sanction, underwrite, or disburse loans.” / “not a bank, Non-Banking Financial Company (NBFC), or lender.”

**01:49.220–01:59.160** Speaker A (proposed identity, **not** current footer):
> Raw ASR / corrected (same): “We are a platform that standardizes third party offerings into views that are easy for customers to comprehend.”
> What they want said: platform + standardize third-party (bank) offerings + easy views. Not on the live disclaimer.

**02:00.600–02:29.540** Speaker A:
> Raw ASR: “We do not approve sanction underwrite or disbursed loans. But what we try is we try our best from all the data we have and from all the interactions we get on what it might look like for the customer. How banks will disbursed loans for the customer. How banks will underwrite loans for the customer. We try our best to understand, to guide you in this financial... We are not taking responsibility.”
> Corrected: “We do not approve, sanction, underwrite, or **disburse** loans. But what we try is we try our best from all the data we have and from all the interactions we get on what it might look like for the customer. How banks will **disburse** loans for the customer. How banks will underwrite loans for the customer. We try our best to understand, to guide you in this financial [journey]… We are not taking [legal] responsibility.”
> They want the block to admit they still work — from data + lender interactions — to show what underwriting and disbursal might look like, and to guide, without claiming the bank’s legal responsibility.

**02:29.800–02:36.380** Speaker A:
> Raw ASR / corrected (same): “But we are telling them that we try our best to take the responsibility. But ultimately it's in your hands.”
> Two sentences they want held at once: try to take the **care** responsibility; the final call stays with the customer (and the lender / judge in the analogy).

**02:38.000–02:43.980** Speaker A (ASR repeats the same cue three times):
> Raw ASR: “Sometimes we say that we are very smart.” ×3
> Corrected: one aside about how the **rest of the site** can sound — not a second legal sentence. Whisper duplicated the cue. Immediately they contrast website vibe vs disclaimer vibe.

**02:46.300–03:16.440** Speaker A (vibe clash + desired vibe):
> Raw ASR: “Basically, the entire vibe given by the website so far is how we are there for the customers. An entire vibe given by the disclaimer is how we are not responsible for anything. So what I feel the vibe should be from the disclaimer is that although we are not responsible for anything, we genuinely feel it is in our responsibility to be true to our customer, to be honest to our customer, to work in the best interest of the customer.”
> Corrected: same. **Praise (implied):** the homepage body already feels “we are there for the customers.” **Issue:** the disclaimer undoes it. Desired vibe: although not [legally] responsible for anything, they genuinely feel it is their responsibility to be true, honest, and work in the customer’s best interest.

**03:17.140–03:37.240** Speaker A:
> Raw ASR: “The language shouldn't feel like legally doing away with obligations. We are not responsible, we are not responsible. The language should feel like although legally we are not responsible, we try our best to make it so that you have the best way possible dealing with them.”
> Corrected: same. “Them” = the banks / lenders. Must not sound like washing hands of obligations. Keep the legal limit; add “we try our best so you have the best way possible dealing with [lenders].”

**03:37.460–04:01.360** Speaker A (guiding analogy):
> Raw ASR: “It is like as if you are dealing with a good lawyer. Lawyer is not responsible for what case or judge will decide. But a good lawyer is there by your side to guide you through that entire journey. Of course, he does not assume the responsibility of the decision, of the judgement. But a good lawyer inspires confidence in you.”
> Corrected: “It is like as if you are dealing with a **good lawyer**. [A] lawyer is not responsible for what case or [what the] judge will decide. But a good lawyer is there by your side to guide you through that entire journey. Of course, he does not assume the responsibility of the decision, of the judgement. But a good lawyer inspires confidence in you.”
> Acceptance picture: guide the journey; do not own the judgment; still inspire confidence.

**04:07.760–04:13.900** Speaker A, attributing Speaker B:
> Raw ASR / corrected (same): “Even if you don't understand, we have to put our words into it. That's what you said.”
> Write this philosophy in actual disclaimer words, even if it is hard. Speaker B already asked for that. AI-native / “agent is listening” after this is `02`.

They do not dictate a full replacement paragraph, a lawyer-reviewed draft, or pixel changes. They do not praise the current disclaimer wording. They do praise the rest of the site’s “there for the customers” vibe and want the footer to match it.

## First-principles problem
- What must be true: the footer still tells the truth — Shroffin is a **home-loan comparison** platform, not a bank, NBFC, or lender; it does not approve, sanction, underwrite, or disburse. The **same** block must not feel like “we are not responsible for anything.” It should feel like a good lawyer: beside you, guiding, honest, working in your interest, not owning the judge’s (lender’s) decision. Final outcome stays “in your hands.”
- Root vs symptom: cold / generic legal tone is the symptom. The root is a **vibe split** — homepage body says “we are there for you”; the disclaimer says “not our problem,” which is what “everyone” writes. They want the same legal facts in a voice that still takes a duty of care.
- Constraints they implied: do not become a lender on paper; do not assume sanction / underwrite / disburse; do stay third-party; do try “a lot” / “maximum benefit” / “best interest”; put it in words even if it is hard to understand.

## Directions they considered
- Keep the live legal facts they read aloud: not a bank / NBFC / lender; do not approve, sanction, underwrite, or disburse.
- Name the role: third party; **platform that standardizes third-party offerings into views customers can comprehend** (spoken; not on page today). Current page equivalent is only “comparison and application assistance.”
- Add effort: “we try a lot”; work for the customer’s maximum benefit; try their best from data + lender interactions to show what underwriting and disbursal might look like; guide the financial journey.
- Hold two sentences at once: “we are not taking [legal] responsibility” **and** “we try our best to take the [care] responsibility”; “ultimately it’s in your hands.”
- Target vibe: although legally not responsible, they feel a responsibility to be true, honest, and in the customer’s best interest. Must not feel like “legally doing away with obligations” / repeating “we are not responsible.”
- North-star analogy: good lawyer — not responsible for what the judge decides; beside you for the whole journey; does not assume the judgment; inspires confidence.
- Lean: rewrite **tone** (and add the platform / try-our-best layer). Not a footer-layout ticket (that was the previous clip). Not “delete the disclaimer.”

## Company / user / future thinking
- **Company:** they want Shroffin to sound like a third-party **comparison** platform that standardizes bank offerings — not like a bank and not like a generic “we are not liable” wall. Duty they claim: be true, honest, work in the customer’s best interest; try to understand how banks underwrite and disburse from data and interactions. The rest of the site already sells “we are there for customers” (and sometimes “we are very smart”); they do not want the footer to contradict that. Brand docs already use a “financial lawyer on the customer’s side” mental model; they reached the same picture from this footer, they did not name the doc.
- **User:** should feel guided and confident, as with a good lawyer — not abandoned by a disclaimer. They still decide; the lender still decides sanction. “Ultimately it’s in your hands.” The extra they want is the *best way possible of dealing with the banks*.
- **Future:** be different from “everyone” else’s legal copy. Write the philosophy in words even if it is hard. They do not say “become a bank” in this clip; they stay a platform.

## Fix metadata (for a later simple, elegant, architecturally sound fix)
- Likely code owners: `partials/site-footer.html` → `footer.site-footer` / `section.site-footer-legal` / `#footer-disclaimer` / `p.site-footer-disclaimer-summary` / `details.site-footer-disclaimer-more` / `.site-footer-disclaimer-full` (synced into `index.html` and other pages via `npm run build:footer`). Standing legal facts also live in brand startup-core compliance disclaimer — keep one source of truth for facts + tone.
- Acceptance criteria in their words: do not feel like “we are not responsible” / “legally doing away with obligations”; although legally not responsible, “we genuinely feel it is in our responsibility to be true… honest… work in the best interest of the customer”; “a good lawyer inspires confidence”; still “we do not approve, sanction, underwrite, or disburse”; “not a bank, NBFC, or lender”; “ultimately it’s in your hands”; third party / platform that standardizes third-party offerings into comprehensible views; “we try a lot” / maximum benefit / best from data and interactions.
- What NOT to do: do not drop the not-a-bank / NBFC / lender facts. Do not write as if Shroffin approves, sanctions, underwrites, or disburses. Do not treat this as footer UI, padding, or “move the disclaimer” (`wb-rec-260815-2009` already said footer UI is not the point). Do not invent a full legal rewrite in this audit. Do not add guarantees of approval or “best deal.”
- Open questions: exact sentences (they brainstormed; no paste-ready draft). Whether “we try our best to take the responsibility” survives legal review. Whether “standardizes third-party offerings…” belongs in the disclaimer, the summary line, or elsewhere on the site. Whether the collapsed summary must carry the new vibe, or only the expanded panel.
- Related recordings:
  - continues_from: `wb-rec-260815-2009/08-footer-ui-legal-not-the-disclaimer-story.md` — footer UI vs this philosophy; “everyone knows this is just legal stuff / compliance”; “from our perspective does it fit or not?”
  - continues_in: `02-ai-native-agent-listening.md` in this folder (put words into it → AI-native / agent listening; then “homepage done”). `wb-rec-260815-2106` leaves the homepage for Explore banks. Do not invent later legal drafts.

## Evidence index
- `audio.vtt` / `audio.txt` 01:00.920–04:13.900
- `audio.text` / `audio_sentences.txt` / `audio.tsv` / `audio.lrc` / `audio.json` (ASR: `letter`, `disbursed`, `NBFC`; language `mr`)
- `events.json`: leftover focus `#home-built-trigger-4` t=9378 / 10432; click summary t=10523 screenshot_id 2; scroll y=9010 t=13968; idle through the talk
- `screenshots/0000.png`–`0038.png` (collapsed → DevTools on summary → expanded full disclaimer)
- `pages.json`: region “Disclaimer”; `contentinfo` “Shroffin Footer”
- `replay.spec.ts`: same `details > summary` click, then later `section > div > p`
- `manifest.json` viewport 1366×768, dsf 2
- Site `partials/site-footer.html` / `index.html`: `#footer-disclaimer`, `.site-footer-disclaimer-summary`, `.site-footer-disclaimer-full`
