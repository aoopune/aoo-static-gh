# Extra eligibility questions are hidden instead of shown as columns

On Explore banks, extra loan questions (existing EMIs, credit cards, income share, tenure, co-applicant) sit behind “Adjust eligibility,” not as columns on the bank list.
They said those extras should be shown directly; the bank table only has about four or five columns, and opening the extra block makes the form huge.
The same extras look optional, but they said skipping them still blocks the customer and the answers change the loan amount and EMI a lot.
They asked why the important ones are not mandatory, and walked each extra: existing EMI and credit cards are not for everyone; income share / an upper limit are; co-applicant is not.

---
issue_id: "wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns"
issue_title: "Extra eligibility questions are hidden instead of shown as columns"
folder: "wb-rec-260815-2249"
sequence_index: 19
recording_id: "55f40b18-3bf3-46a3-b169-7adabe6886b1"
recording_started_at: "2026-08-15T17:19:17.338Z"
recording_ended_at: "2026-08-15T17:21:34.102Z"
duration_ms: 136764
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs details#hlc-form-more (“Adjust eligibility”) extras, and Bank options table columns (Lenders, Rate, Loan amount, Tenure, EMI)"
pinpoint: "On Explore banks, extra eligibility inputs (Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant) are collapsed under Adjust eligibility instead of shown as columns; they are treated as optional even though they change loan amount and EMI, and Tenure is required but lives inside that optional-looking block."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "both"
continued_from_folder: "wb-rec-260815-2240"
continued_into_folder: "wb-rec-260815-2302"
related_issue_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:01,210 --> 00:00:37,950","00:00:59,050 --> 00:02:07,770"]
event_t_ms: [184,1994,1995,1996,5031,6728,15088,16698,35476,35477,38432,42631,45532,59854,61021,61465,66595,80139,96787]
screenshot_files: ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"]
tags: ["layout","copy","interaction","data","eligibility","optional-vs-required","table-columns"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html` (title Explore banks – Shroffin), extra loan questions live inside collapsed **Adjust eligibility** (`details#hlc-form-more`): Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant.

They said to **show the columns here, directly**, instead of “adjusting the availability” (raw ASR). The control on screen is **Adjust eligibility**. After they clicked **See options** (`#hlc-see-options`), the Bank options table showed five columns: Lenders, Rate, Loan amount, Tenure (yrs), EMI. They counted “only 4 columns here,” then “5 columns,” and called showing the extras “a big challenge.” Opening Adjust eligibility made the card so large they said “See how big it has become.”

They then called the same extras **optional columns** the customer may fill or skip — “But if they don't fill, they can't go.” They asked “Why do they have to come here?” and “Then why is there no mandating?” because the customer already decides loan amount and EMI, and those extras “make a big difference.” In `pages.json`, Tenure is required (`*`) while Existing EMIs, FOIR, and co-applicant fields are not; Tenure still sits inside this optional-looking disclosure.

They walked each extra against that form: expenses are the same for everyone; Existing EMI is not for everyone; credit card limits are not for everyone; everyone needs the “upper limit” / share of income, which differs by bank; nobody on a 10-year tenure asks for a 15-year limit; co-applicant is not for everyone. “In general, people only fill the upper limit.”

## How the files join (required)

- time (ms and clock): **1210–16510 ms** (`00:00:01,210`–`00:00:16,510`)
- what they said (quote + audio file): audio.srt cue 1–2: “What we need to do is, instead of adjusting the availability, we need to show the columns here.” / “Directly. There are only 4 columns here.” Cue 3: “5 columns.”
- what they did: focus+click **See options** at **1994–1995 ms**, submit `#hlc-inputs` at **1996 ms**; scroll y=214 at **5031 ms**; click `details#hlc-form-more` summary at **6728 ms** and **15088 ms**
- what was on screen: `screenshots/0000.jpg` (t=185) Adjust eligibility open (Existing EMIs, Credit card limits ₹0, FOIR 55% default, Tenure 20, Co-applicant No); `screenshots/0001.jpg` (t=2397) five-column bank table; `screenshots/0002.jpg` (t=7134) extras collapsed over the table; `screenshots/0003.jpg` (t=15490) extras open again
- what page/object: Explore banks; Loan inputs form + Bank options table
- therefore the actual issue is: extra eligibility questions are hidden behind Adjust eligibility instead of shown as columns, and the results table only has four or five columns

- time (ms and clock): **21550–37950 ms** (`00:00:21,550`–`00:00:37,950`)
- what they said: “It will be a big challenge.” “We have to show the culture.” “See how big it has become.” “We have to show the banks.” “We have to show the banks and intelligence.” “And this is mostly the case that the customer does not ask for the bank.”
- what they did: idle on the open extras (`0004.jpg` t=24186, `0005.jpg` t=32186); See options again at **35477 ms** (`0006.jpg` table); click form-more at **42631 ms** (`0007.jpg` collapsed)
- what was on screen: extra fields filling the card, then the five-column table
- therefore: opening the extra block makes the form huge, while they still need to show banks (and “intelligence”) as columns — customers do not come asking for a bank name

- time (ms and clock): **59050–127770 ms** (`00:00:59,050`–`00:02:07,770`)
- what they said: “These are basically optional columns that we want the customer to fill or not fill.” “But if they don't fill, they can't go.” “Why do they have to come here?” “It makes a big difference.” “They have to decide their loan amount.” “How much is the EMI?” “They decide everything.” “Then why is there no mandating?” Then field-by-field: expenses; Existing EMI not for everyone; credit card limits not for everyone; everyone needs the upper limit; share of income differs by bank; 10-year vs 15-year; co-applicant not for everyone; people only fill the upper limit
- what they did: clicks on `details#hlc-form-more` at **59854, 61021, 66595, 80139, 96787 ms** while talking (no typing of those fields in this recording)
- what was on screen: `0009.jpg` / `0011.jpg` / `0012.jpg` / `0015.jpg`–`0018.jpg` show Existing EMIs, Credit card limits (“About 10% counts as monthly load”), Share of income / FOIR 55% (default), Tenure* 20 years, Co-applicant No
- what page/object: Adjust eligibility extras on Loan inputs
- therefore: extras are presented as optional, but they said skipping still blocks progress and the answers change loan amount and EMI

If a file added no new fact at that moment (empty console, player chrome, binary audio, idle gaps), it still timed the session or confirmed there was no extra runtime error.

## Pinpoint

On Explore banks, extra eligibility inputs inside **Adjust eligibility** (`details#hlc-form-more`: Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant) are collapsed instead of shown as columns next to the bank list. They said to show those columns directly; the Bank options table only has Lenders, Rate, Loan amount, Tenure, EMI. They also said those extras are optional columns the customer may skip, yet “if they don't fill, they can't go,” loan amount and EMI change a lot, and there is “no mandating.” They cared because the customer already decides loan amount and EMI, the formula/questions are getting bigger, and most people only fill an “upper limit” — so hiding bank-changing extras behind an optional disclosure is the wrong design.

## Related discussion (not the issue itself)

- Showing the extras will be “a big challenge”; opening Adjust eligibility already made the form “so big.”
- They still have to “show the banks” and “the banks and intelligence” (raw ASR `intelligence`; word probability ~0.49).
- “The customer does not ask for the bank” — people decide loan amount and EMI, not a bank name first.
- “Because the formula is getting bigger.” “There are so many questions.”
- Expenses: “everyone has the same amount.”
- Existing EMI “is very less” / “it is not for everyone.”
- Credit card limits “are not for everyone.”
- “Everyone needs the upper limit” joined to on-screen **Share of income for EMIs / FOIR** at 55% (default).
- Share of income “does not belong to anyone” but “everyone differs according to the bank.”
- “No one on the 10-year side says that I want the 15-year limit” while Tenure shows 20 years.
- Co-applicant “is not for everyone”; “How does this co-applicant make a difference?”
- “In general, people only fill the upper limit.” “And if it is more, then it is more.”
- Closing aside, not part of the issue: “This guy is playing a song.” (`00:02:13,070`)

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:00 | 184–185 | (session start) | landmark on Explore banks; Adjust eligibility already open | 0000.jpg |
| 00:00:01–00:00:16 | 1210–16510 | Show columns here directly, not “adjusting the availability”; only 4 columns, then 5 | See options 1995; submit 1996; scroll 5031; toggle form-more 6728 | 0001.jpg table; 0002.jpg collapsed |
| 00:00:15 | 15088 | (still on columns / size) | click form-more summary nth-of-type(2) | 0003.jpg expanded |
| 00:00:18–00:00:37 | 18870–37950 | 5 columns; big challenge; show culture; how big it has become; show banks and intelligence; customer does not ask for the bank | idle on expanded form; See options 35477; scroll 38432 | 0004–0006.jpg |
| 00:00:42 | 42631 | (gap, then optional-columns talk ~59s) | toggle form-more | 0007.jpg collapsed over table |
| 00:00:45–00:00:52 | 45532–52186 | (idle) | scroll toward top of card | 0008.jpg “Explore banks.” + collapsed extras + table headers |
| 00:00:59–00:01:22 | 59050–82570 | Optional columns; if they don’t fill they can’t go; why come here; loan amount / EMI; why no mandating | form-more 59854, 61021 | 0009–0010.jpg |
| 00:01:23–00:01:41 | 83830–101390 | Formula getting bigger; so many questions; expenses; Existing EMI not for everyone | form-more 66595; idle | 0011–0013.jpg |
| 00:01:42–00:02:07 | 102090–127770 | Credit cards not for everyone; everyone needs upper limit; share of income; differs by bank; 10 vs 15 year; co-applicant; people only fill upper limit | form-more 80139, 96787; idle | 0014–0018.jpg |
| 00:02:13 | 133070 | “This guy is playing a song.” | idle | 0019.jpg same expanded form |

## Cross-recording continuation

**From wb-rec-260815-2240** (~7s gap). That session ended on the same Explore banks card: they were renaming **Adjust eligibility** toward additional columns / attributes / parameters, arguing **See options** should sit below that block and be centered, and they had just typed **Existing EMIs**. Last speech: See options should be a button below Adjust eligibility and in the center. Last clicks: `#hlc-existing-emis` then `details#hlc-form-more`. Last shots `screenshots/0062.jpg`–`0066.jpg` show the same extras and five-column table. This folder’s first line continues that thought: instead of adjusting eligibility, show the columns here.

**Into wb-rec-260815-2302** (~11 min gap, under 15 min; last topic here matches first topic there). 2302 starts still on Explore banks with Adjust eligibility open (`screenshots/0000.jpg`): “So we have to drop down so that the form doesn't get too big.” “Correct. But actually these things have to be affected.” Then existing EMI as “a big thing,” debt utilization / fixed obligation, and later co-applicant Yes/No. Same extra-fields vs form-size vs they-must-affect-results argument.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — id `55f40b18-3bf3-46a3-b169-7adabe6886b1`, start_url Explore banks, duration_ms 136764, events_count 43, screenshots_count 20, viewport 1366×768, mic true. Used for: `timeline_alignment`
- `audio.json` — 35 segments, language tag `mr` (wrong; speech is Hindi/English about this page), word-level times; “availability” probability ~0.078; “culture” ~0.45; “intelligence” ~0.49. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — same cues as srt with lyric timestamps. Used for: `timeline_alignment`
- `audio.srt` — primary speech clock; quotes from cues 1–34 (issue) and 35 (aside). Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — plain transcript of optional columns / mandating / field walk. Used for: `supports_issue`
- `audio.tsv` — millisecond start/end for every cue (1210–135470). Used for: `timeline_alignment`
- `audio.txt` — timed dump same as srt/vtt. Used for: `timeline_alignment`
- `audio.vtt` — same family as srt. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — one-block transcript of the same talk. Used for: `supports_issue`
- `console.json` — `[]`, no console errors. Used for: `checked_no_extra_signal`
- `events.json` — landmark headings Loan inputs / Bank options; clicks only See options and `details#hlc-form-more` (no field typing this session). Used for: `supports_issue`, `timeline_alignment`
- `index.html` — player shell; HTML comment inlines this session id, Explore banks URL, event list, 20 screenshot index rows; no extra discussion. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — title Explore banks – Shroffin; Loan inputs: Existing EMIs optional, Share of income for EMIs / FOIR optional, Tenure required, Co-applicant income/EMIs optional. Used for: `supports_issue`
- `replay.spec.ts` — Playwright replay of See options twice and repeated `hlc-form-more` clicks. Used for: `timeline_alignment`
- `screenshots/0000.jpg` — t=185 start; Adjust eligibility expanded; extras visible; See options. Used for: `supports_issue`
- `screenshots/0001.jpg` — t=2397 after See options; five-column bank table (Canara Bank 8.80%, loan ₹5,400, tenure 20, EMI ₹48). Used for: `supports_issue`
- `screenshots/0002.jpg` — t=7134; extras collapsed over table. Used for: `supports_issue`
- `screenshots/0003.jpg` — t=15490; extras expanded again (4-columns / 5-columns speech). Used for: `supports_issue`
- `screenshots/0004.jpg` — t=24186 periodic; expanded form (“how big”). Used for: `supports_issue`
- `screenshots/0005.jpg` — t=32186 periodic; same expanded form. Used for: `supports_issue`
- `screenshots/0006.jpg` — t=35880 after second See options; table again. Used for: `supports_issue`
- `screenshots/0007.jpg` — t=43034 collapsed extras over table. Used for: `supports_issue`
- `screenshots/0008.jpg` — t=52186; “Explore banks.” heading; collapsed extras; table headers. Used for: `supports_issue`
- `screenshots/0009.jpg` — t=60186; expanded during “optional columns” speech. Used for: `supports_issue`
- `screenshots/0010.jpg` — t=61423; collapsed with table (Canara EMI ₹48). Used for: `timeline_alignment`
- `screenshots/0011.jpg` — t=67000; expanded; Existing EMIs visible. Used for: `supports_issue`
- `screenshots/0012.jpg` — t=76186; expanded; field walk. Used for: `supports_issue`
- `screenshots/0013.jpg` — t=80540; collapsed with table during “so many questions.” Used for: `timeline_alignment`
- `screenshots/0014.jpg` — t=90186; collapsed; credit-card / upper-limit talk nearby. Used for: `timeline_alignment`
- `screenshots/0015.jpg` — t=97188; expanded as they name Existing EMI / credit cards. Used for: `supports_issue`
- `screenshots/0016.jpg` — t=106187; expanded; FOIR 55%, Co-applicant No. Used for: `supports_issue`
- `screenshots/0017.jpg` — t=116186; expanded; tenure / co-applicant talk. Used for: `supports_issue`
- `screenshots/0018.jpg` — t=124186; expanded; “people only fill the upper limit.” Used for: `supports_issue`
- `screenshots/0019.jpg` — t=132186; same form during “playing a song” aside. Used for: `checked_no_extra_signal`
- `screenshots/index.json` — 20 shots, t/reason/url/mask_rects; all localhost Explore banks. Used for: `timeline_alignment`
- `tabs.json` — one tab, Explore banks for the whole session. Used for: `timeline_alignment`
- `viewer.css` — generic replay player styles (17895 bytes); no session talk. Used for: `checked_no_extra_signal`
- `viewer.js` — generic replay player script (32334 bytes); no session talk. Used for: `checked_no_extra_signal`

## ASR notes

`audio.srt`, `audio.vtt`, `audio.tsv`, `audio.text`, `audio.txt`, and `audio_sentences.txt` share the same sentences. `audio.json` segment text is the same family, with small phrasing swaps in the concatenated `text` field.

Conflicts resolved by screen + click (quotes stay raw):

1. **“adjusting the availability”** (word “availability” probability ~0.078) vs on-screen **Adjust eligibility** and previous folder’s “adjust eligibility.” Pinpoint uses eligibility. (ASR likely meant: eligibility.)
2. **“We have to show the culture.”** (probability ~0.45) right after “show the columns” / “big challenge.” (ASR likely meant: calculator or columns.)
3. **“banks and intelligence”** (probability ~0.49). Could be eligibility; quote raw.
4. **“upper limit”** while **Share of income for EMIs / FOIR 55% (default)** is on screen. Join treats it as that cap.
5. `audio.json` `language`: `mr`. Speech is mixed English/Hindi about this page; language tag ignored.
6. End line “This guy is playing a song.” is an aside, not a site issue.

## JSON
```json
{
  "issue_id": "wb-rec-260815-2249/issue-01-adjust-eligibility-hidden-not-shown-as-columns",
  "issue_title": "Extra eligibility questions are hidden instead of shown as columns",
  "folder": "wb-rec-260815-2249",
  "sequence_index": 19,
  "recording_id": "55f40b18-3bf3-46a3-b169-7adabe6886b1",
  "recording_started_at": "2026-08-15T17:19:17.338Z",
  "recording_ended_at": "2026-08-15T17:21:34.102Z",
  "duration_ms": 136764,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Loan inputs details#hlc-form-more (“Adjust eligibility”) extras, and Bank options table columns (Lenders, Rate, Loan amount, Tenure, EMI)",
  "pinpoint": "On Explore banks, extra eligibility inputs (Existing EMIs, Credit card limits, Share of income for EMIs / FOIR, Tenure, Co-applicant) are collapsed under Adjust eligibility instead of shown as columns; they are treated as optional even though they change loan amount and EMI, and Tenure is required but lives inside that optional-looking block.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "both",
  "continued_from_folder": "wb-rec-260815-2240",
  "continued_into_folder": "wb-rec-260815-2302",
  "related_issue_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg","screenshots/0019.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:01,210 --> 00:00:37,950","00:00:59,050 --> 00:02:07,770"],
  "event_t_ms": [184,1994,1995,1996,5031,6728,15088,16698,35476,35477,38432,42631,45532,59854,61021,61465,66595,80139,96787],
  "screenshot_files": ["screenshots/0000.jpg","screenshots/0001.jpg","screenshots/0002.jpg","screenshots/0003.jpg","screenshots/0004.jpg","screenshots/0005.jpg","screenshots/0006.jpg","screenshots/0007.jpg","screenshots/0008.jpg","screenshots/0009.jpg","screenshots/0010.jpg","screenshots/0011.jpg","screenshots/0012.jpg","screenshots/0013.jpg","screenshots/0014.jpg","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/0017.jpg","screenshots/0018.jpg"],
  "tags": ["layout","copy","interaction","data","eligibility","optional-vs-required","table-columns"],
  "quotes": [
    {"clock": "00:00:01,210","text": "What we need to do is, instead of adjusting the availability, we need to show the columns here.","artifact": "audio.srt"},
    {"clock": "00:00:13,930","text": "Directly. There are only 4 columns here.","artifact": "audio.srt"},
    {"clock": "00:00:18,870","text": "5 columns.","artifact": "audio.srt"},
    {"clock": "00:00:23,330","text": "See how big it has become.","artifact": "audio.srt"},
    {"clock": "00:00:25,990","text": "We have to show the banks.","artifact": "audio.srt"},
    {"clock": "00:00:33,710","text": "And this is mostly the case that the customer does not ask for the bank.","artifact": "audio.srt"},
    {"clock": "00:00:59,050","text": "These are basically optional columns that we want the customer to fill or not fill.","artifact": "audio.srt"},
    {"clock": "00:01:06,330","text": "But if they don't fill, they can't go.","artifact": "audio.srt"},
    {"clock": "00:01:07,710","text": "Why do they have to come here?","artifact": "audio.srt"},
    {"clock": "00:01:12,590","text": "They have to decide their loan amount.","artifact": "audio.srt"},
    {"clock": "00:01:21,150","text": "Then why is there no mandating?","artifact": "audio.srt"},
    {"clock": "00:01:37,390","text": "Existing EMI is very less.","artifact": "audio.srt"},
    {"clock": "00:01:42,090","text": "The credit card limits are not for everyone.","artifact": "audio.srt"},
    {"clock": "00:01:44,390","text": "But everyone needs the upper limit.","artifact": "audio.srt"},
    {"clock": "00:01:46,670","text": "This is the share of income.","artifact": "audio.srt"},
    {"clock": "00:01:55,590","text": "This co-applicant is not for everyone.","artifact": "audio.srt"},
    {"clock": "00:02:02,090","text": "In general, people only fill the upper limit.","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 1995, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 6728, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 15088, "name": "Adjust eligibility summary (nth-of-type 2)", "css": "details#hlc-form-more > summary > span > span:nth-of-type(2)"},
    {"t_ms": 35477, "name": "See options", "css": "#hlc-see-options"},
    {"t_ms": 42631, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 59854, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 61021, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"},
    {"t_ms": 66595, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 80139, "name": "Adjust eligibility summary", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1)"},
    {"t_ms": 96787, "name": "Adjust eligibility summary span", "css": "details#hlc-form-more > summary > span > span:nth-of-type(1) > span"}
  ],
  "related_discussion_present": true
}
```
