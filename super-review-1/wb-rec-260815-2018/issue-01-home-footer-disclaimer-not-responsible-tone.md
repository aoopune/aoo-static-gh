# Home footer Disclaimer reads like “we are not responsible”

The home-page footer Disclaimer sounds like Shroffin is washing its hands.
The rest of the site feels like “we are there for you,” but this block feels like “we are not responsible for anything.”
They still want it to say they are not the bank — just not in a cold legal-escape voice.
They compared it to a good lawyer: not the judge, but still standing with you.

---
issue_id: "wb-rec-260815-2018/issue-01-home-footer-disclaimer-not-responsible-tone"
issue_title: "Home footer Disclaimer reads like “we are not responsible”"
folder: "wb-rec-260815-2018"
sequence_index: 7
recording_id: "9c9ef8da-7407-45ae-9cb9-4c92fcacc00d"
recording_started_at: "2026-08-15T14:48:26.950Z"
recording_ended_at: "2026-08-15T14:53:49.212Z"
duration_ms: 322262
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Home footer region Disclaimer: summary paragraph plus expanded details behind “Read the full disclaimer”"
pinpoint: "On the home page footer Disclaimer (expanded), they said the wording reads as Shroffin washing its hands — “we are not responsible” — which clashes with the rest of the site’s “we are there for customers” vibe; they still want the legal limit (not a bank / do not approve, sanction, underwrite, or disburse) but the tone should feel like standing with the customer."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260815-2009"
continued_into_folder: null
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png"]
speech_clock: ["00:01:00,920 --> 00:04:01,360","60920-241360"]
event_t_ms: [211,9378,10432,10523,13968,312395,313563,314802,315858]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0008.png","screenshots/0022.png","screenshots/0031.png","screenshots/0038.png","screenshots/0039.png"]
tags: ["copy","trust","disclaimer","tone","footer"]
---

## Exact issue

On `http://localhost:8765/` (title Shroffin), they opened the footer **Disclaimer** and treated its wording as wrong.

They said the rest of the site so far feels like Shroffin is there for customers, but this Disclaimer feels like Shroffin is not responsible for anything. Raw ASR (`audio.srt` 02:46.300–02:59.520): “Basically, the entire vibe given by the website so far is how we are there for the customers. An entire vibe given by the disclaimer is how we are not responsible for anything.”

They were not asking to drop the legal limit. They read the limit aloud (raw ASR 01:38.880–01:46.400): “We do not approve sanction underwrite or disbursed language. Shroffin is not a bank, NBFC or letter.” Screenshot plus the live summary paragraph show that “letter” is ASR for **lender**, and “language” is them commenting on that wording (word probability 0.007 in `audio.json`). The on-screen summary is the “not a bank / NBFC / lender” and “we do not approve, sanction, underwrite, or disburse” block under the heading **Disclaimer**.

What they treated as the defect is the **tone**: it feels like legally doing away with obligations. Raw ASR (03:17.140–03:25.360): “The language shouldn't feel like legally doing away with obligations. We are not responsible, we are not responsible.” They wanted: although legally they are not the lender, they still try to stand with the customer.

## How the files join (required)

- **time:** 10523 ms (00:00:10.523) then idle-talk from 60920 ms (00:01:00.920) through 241360 ms (00:04:01.360)
- **what they said:** Opening (raw ASR `audio.srt` 01:00.920): “Overall, I feel that Shroffin's language is such that we are not responsible.” Peak contrast at 02:46–02:59 (website vibe vs disclaimer vibe). Desired tone at 03:00–03:37.
- **what they did:** `click` at t=10523 on `footer > div > div:nth-of-type(2) > div > section > div > details > summary` (expand “Read the full disclaimer”). Then a long idle stretch while they talked. Later `click` at t=312395 on the Disclaimer `p`, then `click` at t=313563 on the same `summary` (collapse).
- **what was on screen:** `screenshots/0000.png` / `0001.png` — footer Disclaimer collapsed. `0002.png` — expanded after the first click. `0003.png`–`0038.png` — expanded Disclaimer held on screen for the whole language talk. `0039.png` — collapsed again.
- **what page/object:** URL `http://localhost:8765/`; `pages.json` landmark region **Disclaimer** inside contentinfo **Shroffin Footer**; heading **Disclaimer**.
- **therefore the actual issue is:** the home footer Disclaimer copy reads as a legal wash-hands (“we are not responsible”), which they said clashes with the rest of the site.

`console.json` is `[]` (no extra runtime signal). `tabs.json` stays on this one home tab. `viewer.js` / `viewer.css` / player `index.html` add no discussion.

## Pinpoint

On the Shroffin home page footer, the **Disclaimer** summary and the expanded “Read the full disclaimer” panel are the object. They said that block’s language makes Shroffin sound not responsible, like legally stepping away, while the rest of the page has been telling customers Shroffin is there for them. They still want the facts (not a bank, NBFC, or lender; they do not approve, sanction, underwrite, or disburse). They want the same block to also feel like Shroffin tries to be true, honest, and on the customer’s side — because that is how they think a first-time visitor should feel at launch.

## Related discussion (not the issue itself)

- They said everyone writes disclaimers this way, and asked whether Shroffin can sound different (`audio.srt` 01:15.400–01:19.380).
- They drafted replacement lines while looking at the expanded text: still say they are a third party / not the lender, then “but we try a lot” / work for the customer’s maximum benefit; they are a platform that standardizes third-party offerings into views customers can comprehend; they try from data and interactions to show how banks may underwrite and disburse; they are not taking the bank’s responsibility, but they try to take responsibility, and ultimately it is in the customer’s hands (`audio.srt` 01:20.500–02:36.380). That draft is related talk, not a second defect.
- “Sometimes we say that we are very smart” three times (`audio.srt` 02:38.000–02:43.980) — low ASR confidence (`audio.json` “smart.” down to 0.12). Used as setup for the vibe contrast, not a separate control.
- **Good lawyer analogy** (`audio.srt` 03:37.460–04:01.360): a lawyer is not responsible for what the judge decides, but a good lawyer stands with you and inspires confidence. Same issue, not a new one.
- After the lawyer analogy they said even if people do not understand, they still have to put Shroffin’s own words into it (`audio.srt` 04:07.760–04:13.900). Then they talked about always being “AI compatible” / “AI native,” an agent listening, understanding emotions, or needing a camera (`audio.srt` 04:19.100–05:09.660). That is a writing-principle aside on the same Disclaimer, not a missing camera on the page. They did not point at a camera control.
- Close of the home-page pass (`audio.srt` 05:17.860–05:20.380): “Home run done. Time for a home page done.” (ASR also “Home run”; they are wrapping the home page.)

## Chronology in this recording

| Clock | Said | Did | Screenshot |
|---|---|---|---|
| 00:00.211 | (no speech yet) | `landmark_snapshot` home; region Disclaimer present | `0000.png` footer, Disclaimer collapsed |
| 00:09.378 / 00:10.432 | — | `focus` leftover on `#home-built-trigger-4` “Help toward what you need” | still footer in view |
| 00:10.523 | — | `click` Disclaimer `details > summary` (expand) | `0002.png` expanded |
| 00:13.968 | — | `scroll` y=9010 (footer) | `0003.png` onward: expanded Disclaimer |
| 01:00.920–01:13.020 | “Overall, I feel that Shroffin's language is such that we are not responsible.” | idle on expanded Disclaimer | `0008.png` |
| 01:15–01:32 | Can they sound different; third party but they try | idle | `0009.png`–`0010.png` |
| 01:36–02:04 | Read/quote: do not approve/sanction/underwrite/disburse; not a bank, NBFC, or lender | idle | `0011.png`–`0013.png` |
| 02:04–02:36 | Draft: try from data; guide; not taking responsibility but try; ultimately in your hands | idle | `0014.png`–`0019.png` |
| 02:38–02:44 | “Sometimes we say that we are very smart” (×3) | idle | `0020.png` |
| 02:46–02:59 | Website vibe vs disclaimer vibe | idle | `0021.png`–`0022.png` |
| 03:00–03:37 | Disclaimer should feel responsible-in-spirit, not a legal escape | idle | `0023.png`–`0026.png` |
| 03:37–04:01 | Good-lawyer analogy | idle | `0027.png`–`0029.png` |
| 04:07–05:09 | Put their own words in; AI compatible / agent / camera aside | idle; `0031.png`–`0037.png` slightly different bytes (selection/hover on “disclaimer”) | `0030.png`–`0037.png` |
| 05:12.395 | — | `click` Disclaimer `p` | `0038.png` still expanded |
| 05:13.563 | — | `click` `summary` (collapse) | `0039.png` collapsed |
| 05:14.802 | — | `scroll` y=8764.5 | — |
| 05:15.858 | — | `click` `html` | `0040.png` (bytes drop; not a new topic) |
| 05:17.860–05:20.380 | “Home run done. Time for a home page done.” | idle | after collapse |

## Cross-recording continuation

**Continues from `wb-rec-260815-2009` (gap ~7s).** That session ended on the same home footer. Last speech there: they had just been told the home page was done, then “No, check the footer now”; “Footer UI, no one cares”; “It is not a disclaimer”; “We have to show it at some different place”; “does it fits or not? It should not.” / “Yes, it does.” Last screenshots `0063.png`–`0067.png` show the same Disclaimer, still collapsed, with the inspector on the footer / `p.site-footer-disclaimer-lede` / `details.site-footer-disclaimer-more`. Last non-idle moves are scrolls to y≈8764 (footer). This folder starts already on that footer and **opens** “Read the full disclaimer,” then the language/tone critique. Placement-vs-care talk lives in 2009; the wording/tone defect is named here.

**Does not continue into `wb-rec-260815-2106` (gap ~42 min).** This folder closes the home page (“Home run done. Time for a home page done.”). 2106 begins on the home hero, then they click **Explore banks** and talk about that product (“Explore banks and the product,” which is faster, pre-filled values, Public/Private). New topic after a break.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `9c9ef8da-7407-45ae-9cb9-4c92fcacc00d`, start_url `http://localhost:8765/`, 2026-08-15T14:48:26.950Z–14:53:49.212Z, duration_ms 322262, 52 events, 41 screenshots, 1 page, 1 tab, mic true, viewport 1366×768. Used for `timeline_alignment`.
- `audio.srt` — primary speech clock; quotes above. `supports_issue`.
- `audio.tsv` — same cues in ms (60920–320380). `timeline_alignment`.
- `audio.vtt` / `audio.lrc` / `audio.txt` / `audio.text` / `audio_sentences.txt` — same English transcript family as srt (no extra issue). `checked_no_extra_signal`.
- `audio.json` — 45 segments, `language: "mr"` (wrong; speech is English). Word times + low probabilities for “letter” (0.597), “language.” (0.007), “smart.”, “Home run”. `supports_issue` + ASR notes.
- `audio.webm` — binary mic, 5185144 bytes; not listened. `checked_no_extra_signal`.
- `events.json` — expand click t=10523 on footer `details > summary`; later clicks t=312395 (`p`), t=313563 (`summary`); URL always home. `supports_issue`.
- `pages.json` — title Shroffin; landmark region **Disclaimer**; footer **Shroffin Footer**. Names the object. `supports_issue`.
- `tabs.json` — one tab 1351502398 on `http://localhost:8765/` the whole session. `timeline_alignment`.
- `console.json` — `[]`. `checked_no_extra_signal`.
- `replay.spec.ts` — Playwright replay: goto home, click the same footer `summary`, wait on the Disclaimer `p`, click `p`, click `summary`, click `html`. `timeline_alignment`.
- `index.html` — player shell; comment inlines this session’s id, timestamps, 52 events, 41 shots, empty console; script tags still placeholders. No extra talk. `checked_no_extra_signal`.
- `viewer.js` (32334 bytes) — generic Workbooks player. `player_chrome_fully_read_confirmed`. `checked_no_extra_signal`.
- `viewer.css` (17895 bytes) — generic player styles. `player_chrome_fully_read_confirmed`. `checked_no_extra_signal`.
- `screenshots/index.json` — 41 shots, t=212–316261, all url `http://localhost:8765/`, mask_rects empty. `timeline_alignment`.
- `screenshots/0000.png` (t=212 start) — footer, Disclaimer collapsed, “Read the full disclaimer” down. `supports_issue`.
- `screenshots/0001.png` (t=8213) — same footer; inspector on the Disclaimer summary paragraph. `supports_issue`.
- `screenshots/0002.png` (t=10834 interaction) — Disclaimer expanded after the summary click. `supports_issue`.
- `screenshots/0003.png`–`screenshots/0030.png` (t=20213–252213, identical 281377 bytes) — expanded Disclaimer held while they talked. Each used as `supports_issue` / `timeline_alignment`.
- `screenshots/0031.png`–`screenshots/0037.png` (t=260213–308213, 281796 bytes) — same expanded Disclaimer; “disclaimer” in the toggle looks selected/hovered during the AI-native aside. `related_discussion`.
- `screenshots/0038.png` (t=312797) — still expanded at the `p` click. `supports_issue`.
- `screenshots/0039.png` (t=313966) — collapsed after the second summary click. `timeline_alignment`.
- `screenshots/0040.png` (t=316261) — after `html` click; smaller file; not a new defect they named. `checked_no_extra_signal`.

## ASR notes

Transcripts agree on the issue in substance. Conflicts:

- `audio.json` `language` is `mr`. Speech is English. Ignored.
- Brand: srt/text say “Shroffin”; `audio.json` sometimes “Shroffin's”. On-screen brand is **Shroffin**. Quoted raw ASR; object named Shroffin.
- “NBFC or letter” (srt 01:42.820) vs screenshot/HTML **lender**. Used lender in the pinpoint; quoted “letter” as raw ASR.
- “disbursed language” — `audio.json` word “language.” probability 0.007. Join: they are talking about that Disclaimer wording, then they repeat the same verbs with “loans.” Quoted raw ASR.
- srt “Sometimes we say that we are very smart” ×3 vs json same; low probability. Kept as related talk.
- Close line: srt “Home run done. Time for a home page done.” vs json “Home run done. Time for a home page done.” Same wrap of the home page.
- json full `text` slightly paraphrases some cues vs srt; **srt/tsv used as the speech clock**; json used for word times and probabilities.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2018/issue-01-home-footer-disclaimer-not-responsible-tone",
  "issue_title": "Home footer Disclaimer reads like “we are not responsible”",
  "folder": "wb-rec-260815-2018",
  "sequence_index": 7,
  "recording_id": "9c9ef8da-7407-45ae-9cb9-4c92fcacc00d",
  "recording_started_at": "2026-08-15T14:48:26.950Z",
  "recording_ended_at": "2026-08-15T14:53:49.212Z",
  "duration_ms": 322262,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Home footer region Disclaimer: summary paragraph plus expanded details behind “Read the full disclaimer”",
  "pinpoint": "On the home page footer Disclaimer (expanded), they said the wording reads as Shroffin washing its hands — “we are not responsible” — which clashes with the rest of the site’s “we are there for customers” vibe; they still want the legal limit (not a bank / do not approve, sanction, underwrite, or disburse) but the tone should feel like standing with the customer.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260815-2009",
  "continued_into_folder": null,
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png"],
  "speech_clock": ["00:01:00,920 --> 00:04:01,360","60920-241360"],
  "event_t_ms": [211,9378,10432,10523,13968,312395,313563,314802,315858],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0008.png","screenshots/0022.png","screenshots/0031.png","screenshots/0038.png","screenshots/0039.png"],
  "tags": ["copy","trust","disclaimer","tone","footer"],
  "quotes": [
    {"clock": "00:01:00,920", "text": "Overall, I feel that Shroffin's language is such that we are not responsible.", "artifact": "audio.srt"},
    {"clock": "00:02:46,300", "text": "Basically, the entire vibe given by the website so far is how we are there for the customers.", "artifact": "audio.srt"},
    {"clock": "00:02:54,540", "text": "An entire vibe given by the disclaimer is how we are not responsible for anything.", "artifact": "audio.srt"},
    {"clock": "00:03:17,140", "text": "The language shouldn't feel like legally doing away with obligations.", "artifact": "audio.srt"},
    {"clock": "00:03:37,460", "text": "It is like as if you are dealing with a good lawyer.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 10523, "name": "Read the full disclaimer (details summary)", "css": "footer > div > div:nth-of-type(2) > div > section > div > details > summary"},
    {"t_ms": 312395, "name": "Disclaimer summary paragraph", "css": "footer > div > div:nth-of-type(2) > div > section > div > p"},
    {"t_ms": 313563, "name": "Read the full disclaimer (collapse)", "css": "footer > div > div:nth-of-type(2) > div > section > div > details > summary"}
  ],
  "related_discussion_present": true
}
```
