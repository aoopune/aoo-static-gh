# Explore banks does not give loan hacks

The Explore banks page only shows today’s loan numbers for whatever you type.
They said Indian users do not want that. They want hacks that save lakhs — wait, take it in a wife’s name, get a salary slip.
Right now people must poke salary, CIBIL, and age themselves to guess those tricks.
They treated that missing advice as the real product gap, and said stuffing it into this same bank list would mess up the table below.

---
issue_id: "wb-rec-260815-2206/issue-01-explore-banks-missing-hacks-intelligence"
issue_title: "Explore banks does not give loan hacks"
folder: "wb-rec-260815-2206"
sequence_index: 14
recording_id: "125a22f8-b64d-419e-9196-9126d5f613f3"
recording_started_at: "2026-08-15T16:36:16.832Z"
recording_ended_at: "2026-08-15T16:43:07.910Z"
duration_ms: 411078
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs form (Monthly income, Property agreement value, Age, CIBIL score, Salaried/Self-employed) plus Bank options table below"
pinpoint: "On Explore banks, the loan-input form and bank table only return today’s offer for typed numbers; they said the site should instead give hacks/intelligence (wait 3 months, raise CIBIL, take in wife’s name, get a salary slip) so users do not have to poke salary, CIBIL, and age themselves."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2204"
continued_into_folder: "wb-rec-260815-2213"
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","tabs.json","viewer.css","viewer.js","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg"]
speech_clock: ["00:00:02,630 --> 00:06:50,410"]
event_t_ms: [198, 2904, 3004, 3005, 36242, 36243, 40771, 40772, 43064, 43066, 92972, 92973, 98280, 98281, 104353, 104354, 140069, 402346]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0020.jpg","screenshots/0050.jpg","screenshots/0051.jpg"]
tags: ["copy","product","intelligence","hacks","explore-banks","loan-inputs","cibil","trust"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (“Explore banks – Shroffin”), the Loan inputs card and Bank options table only answer “given these numbers, what offer do you get today.” They treated that as the wrong job for an Indian home-loan user.

They said the user does not want “tell me my loan.” The user wants “how do I get the maximum money” with small effort: wait three months and raise CIBIL, take the loan in a wife’s name, show salaried instead of self-employed, get a salary slip. Today that intelligence is missing. The user must click Monthly income, CIBIL, Age, and Salaried and mentally reverse-engineer the hacks.

Raw ASR (audio.srt): “Instead, I want that if this company gives me that intelligence,” then “For this, I need to help this website in some form.” Later: “I need to know these hacks with this tool or this short film.” Near the end, while still on this same form: “But this place is empty.” After scrolling toward the bank table: “But in this interface, Do you know what the problem is? The things below, They get approximated.”

ASR “civil” / “Sibyl” is CIBIL (they clicked `#hlc-cibil`, screenshots show “CIBIL score”). ASR “sell than self-employed” is salaried vs self-employed (they clicked Salaried).

## How the files join (required)

- time: 3005 ms (00:00:03)
  - said: “If your property value is 50 lakhs or 40 lakhs, then you have saved 5 lakhs.” (audio.srt cue 1)
  - did: click `#hlc-property-value` (Property agreement value)
  - seeing: screenshots/0001.jpg — Explore banks form, property field active
  - where: explore-banks.html, Loan inputs
  - therefore: they are still on the “what should I change to save lakhs” thread from the previous recording

- time: 36070–47350 ms (00:00:36–00:00:47)
  - said: if salary / civil score / age, how much EMI and loan; “I have gathered intelligence with these tools. Instead, I want that if this company gives me that intelligence”
  - did: click Salaried (36243), `#hlc-cibil` (40772), `#hlc-age` (43066)
  - seeing: 0006.jpg CIBIL focused; 0007.jpg Age focused; Salaried selected after the click
  - therefore: poking those three fields is how users extract intelligence today; the company should give it instead

- time: 84570–107050 ms (00:01:24–00:01:47)
  - said: Indian mentality is not “tell me my loan”; “You tell me how will I get my maximum amount of money?”; “I need to help this website in some form”
  - did: click Monthly income (92973), Age (98281), CIBIL (104354)
  - seeing: 0013.jpg / 0014.jpg / 0015.jpg — those three fields
  - therefore: the form answers the wrong question

- time: 109710–190970 ms (00:01:49–00:03:10)
  - said: 8th unique point — “We suggest you hacks”; Pareto/profit curve; lawyers’ hacks; “I need to know these hacks with this tool”
  - did: idle talk, then click Monthly income again at 140069
  - seeing: 0020.jpg and later still the same form, no hacks UI
  - therefore: hacks are missing from this tool (and they also floated an 8th homepage unique point as related talk)

- time: 287510–315390 ms (00:04:47–00:05:15)
  - said: drop CIBIL min vs max; keep one CIBIL; default 750 so the user tries 780; “But this place is empty”
  - did: idle on the form (CIBIL already a single field showing 780)
  - seeing: 0036–0040 — CIBIL score 780, no advice panel
  - therefore: the empty place is where hacks/intelligence should live; the min/max CIBIL debate is closed as related talk, not a second defect of this screen

- time: 393090–404790 ms (00:06:33–00:06:44)
  - said: otherwise we sit in this interface; “Do you know what the problem is? The things below, They get approximated.”
  - did: scroll y=429.5 at 402346
  - seeing: 0051.jpg — bank table (Canara, City Union, PNB, BOB, BOI) now in view
  - therefore: putting hacks into this same comparison UI would muddy the bank list; that placement fight continues in the next recording

## Pinpoint

On Explore banks, the Loan inputs card plus the Bank options table only show today’s bank offers for the typed monthly income, property value, age, CIBIL, and occupation. They said that is not what an Indian user wants. The user wants hacks that save lakhs with small effort. The site does not give that intelligence, so people must click those fields themselves. They cared because home loans happen a few times in a life, users will be scared of “taking out intelligence” from a cold form, and a tool that told rural/cash earners to wait for a salary slip would actually help.

## Related discussion (not the issue itself)

- Property 50 lakh vs 40 lakh, rest in black, farmer joining a company for a payslip — examples of how Indians already hack eligibility.
- Hindu undivided family: combine income and take the loan in the wife’s name (ASR “Hindu and divided family”).
- Eighth unique point at the start of the site: “We don't use market research. We suggest you hacks.” Pareto / profit curve: more result from little extra effort.
- Typical user is not “I need a loan tomorrow, these are my parameters, fastest cold loan.” Typical user takes a home loan two or three times and wants to do it comfortably.
- Lawyer analogy: a lawyer thinking of the client’s benefit would say wait three months, set up the wife’s salary/rent, get 1% off; those hacks should come from this tool or a short form (ASR “short film”).
- Close the earlier CIBIL min-vs-max debate: keep one CIBIL; put 750; the user who thinks they are 780 will type 780 and see what they are missing. That is a tactic for the same intelligence gap, not a separate “this page has two CIBIL fields” bug (the page already has one field).
- Rural / cash earners without a salary slip: tell them wait four months, take a job, get a slip, save about five lakh. “We should definitely help them.”
- If they only sit in this interface, the bank rows below get “approximated.” Next recording starts “we need a different tool” and Google Flights.

## Chronology in this recording

- 00:00:02–00:00:34 — Property-value click; 50 vs 40 lakh; black money; farmer/payslip. Screenshot 0001.
- 00:00:36–00:00:52 — Salary / CIBIL / age as DIY intelligence. Clicks: Salaried, CIBIL, Age. Screenshots 0006–0007.
- 00:00:53–00:01:24 — Wait 3 months, raise CIBIL 695→700, wife’s name, 5 lakh net.
- 00:01:24–00:01:47 — Indian mentality: don’t tell me my loan; tell me maximum money. Clicks Monthly income, Age, CIBIL. Screenshots 0013–0015.
- 00:01:49–00:03:27 — 8th unique point / hacks / Pareto; lawyers; need hacks from this tool; users should not have to feed different inputs. Click Monthly income 0020.
- 00:03:38–00:04:29 — Nobody comes for a cold next-day loan; convey “minimum effort, maximum money” from the beginning so users are not scared.
- 00:04:47–00:05:15 — Drop CIBIL min/max; one score; default 750; “this place is empty.”
- 00:05:16–00:06:32 — Hack the tool (CIBIL +20, wife/husband name, salaried vs self-employed); rural salary-slip advice.
- 00:06:33–00:06:50 — Problem of this interface: things below get approximated. Scroll; screenshot 0051. Speech cuts off on “Then.”

## Cross-recording continuation

Continues from wb-rec-260815-2204 (~6s gap). That ~2 min session ended on the same Explore banks form (CIBIL then Age clicks) with: they do not want the best parameters for a perfect loan; they want advice that saves money (raise credit, salary vs self-employed, wife’s name, “you have saved Rs. 400,000”). This recording opens on the same page with the 50-vs-40-lakh save and then names the missing company-given intelligence.

Continues into wb-rec-260815-2213 (~9s gap). This recording ends “the things below get approximated.” The next recording starts on the same URL: “Bro, we need to make a different tool… we can't just put it here,” then Google Flights price-intelligence. Same missing-advice object; they move to where it should live.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `125a22f8-b64d-419e-9196-9126d5f613f3`, start_url explore-banks.html, 411078 ms, 71 events, 52 screenshots, viewport 1366×768. Used: timeline_alignment.
- `audio.text` — full plain transcript of the hacks/intelligence ask and the “things below get approximated” close. Used: supports_issue.
- `audio.txt` — timed dump, same arc; slight wording vs srt. Used: supports_issue.
- `audio_sentences.txt` — one-block sentences of the same talk. Used: supports_issue.
- `audio.srt` — primary speech clock, cues 1–165, 00:00:02,630–00:06:50,410. Used: supports_issue, timeline_alignment.
- `audio.vtt` — same family as srt; “civil score”, “Sibyl score”, “Pareto curve”. Used: supports_issue.
- `audio.tsv` — millisecond starts/ends matching srt. Used: timeline_alignment.
- `audio.lrc` — lyric-style times of the same cues. Used: timeline_alignment.
- `audio.json` — 165 segments, language tagged `mr` (wrong; speech is Hindi/English), 1145 words, many low-probability tokens (`sell`, `civil`, `Sibyl`, `intelligence` at 100.17s p≈0.00013). Used: supports_issue, timeline_alignment.
- `audio.webm` — binary mic; not listened. Used: checked_no_extra_signal.
- `events.json` — landmark at t=198 on explore-banks.html; clicks on property, Salaried, CIBIL, Age, Monthly income (twice each for the last three); scroll t=402346 y=429.5. Used: supports_issue, timeline_alignment.
- `pages.json` — title Explore banks – Shroffin; form Loan inputs; fields Monthly income, Property agreement value, Age, CIBIL score, Occupation Salaried/Self-employed. Used: supports_issue.
- `tabs.json` — one tab, explore-banks.html the whole session. Used: timeline_alignment.
- `console.json` — `[]`, no console errors. Used: checked_no_extra_signal.
- `replay.spec.ts` — Playwright of those same locators plus long idle comments while they talked. Used: timeline_alignment.
- `index.html` — generic player shell; inlined manifest id, events, 52-shot list, empty console. No extra discussion. Used: checked_no_extra_signal.
- `viewer.js` — generic replay player, 32334 bytes. Used: checked_no_extra_signal.
- `viewer.css` — generic player chrome, 17895 bytes. Used: checked_no_extra_signal.
- `screenshots/index.json` — 52 shots, t=200–408195, all explore-banks.html. Used: timeline_alignment.
- `screenshots/0000.jpg` — start: Explore banks form, Self-employed, Regular, table headers only. Used: timeline_alignment.
- `screenshots/0001.jpg` — property-field interaction after the 50/40-lakh line. Used: supports_issue.
- `screenshots/0002.jpg`–`screenshots/0005.jpg` — periodic same form while they talk farmer/payslip. Used: timeline_alignment.
- `screenshots/0006.jpg` — CIBIL field focused after Salaried click. Used: supports_issue.
- `screenshots/0007.jpg` — Age focused while they list salary/CIBIL/age as DIY tools. Used: supports_issue.
- `screenshots/0008.jpg`–`screenshots/0012.jpg` — Salaried selected, idle during hacks talk. Used: timeline_alignment.
- `screenshots/0013.jpg` — Monthly income click during “maximum amount of money.” Used: supports_issue.
- `screenshots/0014.jpg` — Age click. Used: supports_issue.
- `screenshots/0015.jpg` — CIBIL click. Used: supports_issue.
- `screenshots/0016.jpg`–`screenshots/0019.jpg` — idle form during unique-point / Pareto talk. Used: related_discussion.
- `screenshots/0020.jpg` — Monthly income click during “how can I do my best in these parameters.” Used: supports_issue.
- `screenshots/0021.jpg`–`screenshots/0035.jpg` — same form, no hacks UI, while they talk lawyers, Indian user, CIBIL default. Used: timeline_alignment.
- `screenshots/0036.jpg`–`screenshots/0050.jpg` — still the empty form (“this place is empty”); CIBIL shows 780. Used: supports_issue.
- `screenshots/0051.jpg` — after scroll: bank table (Canara 8.80%, City Union, PNB, BOB, BOI) — “the things below.” Used: supports_issue.

## ASR notes

Transcripts agree on the hacks/intelligence ask. Conflicts resolved with click + screenshot:

- `civil` / `Sibyl` / `Sibyl score` → CIBIL. Click `#hlc-cibil`; UI label “CIBIL score”. Raw ASR quoted as civil/Sibyl.
- “it takes more to sell than self-employed” → salaried vs self-employed. Click Salaried. Word “sell” probability 0.11 in audio.json.
- “Hindu and divided family” → Hindu Undivided Family (HUF), joined to “take the home loan in the name of your wife.”
- “short film” vs “short form” — srt “short film”; likely short form/tool. Quoted raw.
- audio.json `language: "mr"` is wrong.
- End “Then, Then, Then, Then” is a cut, not a new issue. Next folder continues the interface-placement point.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2206/issue-01-explore-banks-missing-hacks-intelligence",
  "issue_title": "Explore banks does not give loan hacks",
  "folder": "wb-rec-260815-2206",
  "sequence_index": 14,
  "recording_id": "125a22f8-b64d-419e-9196-9126d5f613f3",
  "recording_started_at": "2026-08-15T16:36:16.832Z",
  "recording_ended_at": "2026-08-15T16:43:07.910Z",
  "duration_ms": 411078,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs form (Monthly income, Property agreement value, Age, CIBIL score, Salaried/Self-employed) plus Bank options table below",
  "pinpoint": "On Explore banks, the loan-input form and bank table only return today’s offer for typed numbers; they said the site should instead give hacks/intelligence (wait 3 months, raise CIBIL, take in wife’s name, get a salary slip) so users do not have to poke salary, CIBIL, and age themselves.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2204",
  "continued_into_folder": "wb-rec-260815-2213",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/index.json","tabs.json","viewer.css","viewer.js","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/0020.jpg","screenshots/0021.jpg","screenshots/0022.jpg","screenshots/0023.jpg","screenshots/0024.jpg","screenshots/0025.jpg","screenshots/0026.jpg","screenshots/0027.jpg","screenshots/0028.jpg","screenshots/0029.jpg","screenshots/0030.jpg","screenshots/0031.jpg","screenshots/0032.jpg","screenshots/0033.jpg","screenshots/0034.jpg","screenshots/0035.jpg","screenshots/0036.jpg","screenshots/0037.jpg","screenshots/0038.jpg","screenshots/0039.jpg","screenshots/0040.jpg","screenshots/0041.jpg","screenshots/0042.jpg","screenshots/0043.jpg","screenshots/0044.jpg","screenshots/0045.jpg","screenshots/0046.jpg","screenshots/0047.jpg","screenshots/0048.jpg","screenshots/0049.jpg","screenshots/0050.jpg","screenshots/0051.jpg"],
  "speech_clock": ["00:00:02,630 --> 00:06:50,410"],
  "event_t_ms": [198, 2904, 3004, 3005, 36242, 36243, 40771, 40772, 43064, 43066, 92972, 92973, 98280, 98281, 104353, 104354, 140069, 402346],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0020.jpg","screenshots/0050.jpg","screenshots/0051.jpg"],
  "tags": ["copy","product","intelligence","hacks","explore-banks","loan-inputs","cibil","trust"],
  "quotes": [
    {"clock": "00:00:47,890", "text": "Instead, I want that if this company gives me that intelligence,", "artifact": "audio.srt"},
    {"clock": "00:01:43,410", "text": "For this, I need to help this website in some form.", "artifact": "audio.srt"},
    {"clock": "00:01:57,970", "text": "We suggest you hacks.", "artifact": "audio.srt"},
    {"clock": "00:03:06,890", "text": "I need to know these hacks with this tool or this short film.", "artifact": "audio.srt"},
    {"clock": "00:05:13,190", "text": "But this place is empty.", "artifact": "audio.srt"},
    {"clock": "00:06:37,410", "text": "Do you know what the problem is?", "artifact": "audio.srt"},
    {"clock": "00:06:40,130", "text": "They get approximated.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 3005, "name": "Property agreement value", "css": "#hlc-property-value"},
    {"t_ms": 36243, "name": "Salaried", "css": "form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(1) > div > button:nth-of-type(1)"},
    {"t_ms": 40772, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 43066, "name": "Age", "css": "#hlc-age"},
    {"t_ms": 92973, "name": "Monthly income", "css": "#hlc-monthly-income"},
    {"t_ms": 98281, "name": "Age", "css": "#hlc-age"},
    {"t_ms": 104354, "name": "CIBIL score", "css": "#hlc-cibil"},
    {"t_ms": 140069, "name": "Monthly income", "css": "#hlc-monthly-income"}
  ],
  "related_discussion_present": true
}
```
