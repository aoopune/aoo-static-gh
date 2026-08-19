# Table does not show scheme names or multiple schemes of the same bank

On Explore banks, the bank table and the Yes Bank More drawer do not show a real scheme name — only a generic product such as Home Loan.
They said they cannot tell which scheme they are looking at, and the table cannot show two schemes of the same bank.
They walked women vs general schemes and PMAY: a woman can be eligible for more than one scheme at once and must be told.
They also talked about auto-picking the best scheme and hiding the name — that is their debate, not a second issue.

---
issue_id: "wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes"
issue_title: "Table does not show scheme names or multiple schemes of the same bank"
folder: "wb-rec-260816-0031"
sequence_index: 30
recording_id: "abd34f08-4d04-49d6-a699-6c354e5780bd"
recording_started_at: "2026-08-15T19:01:37.835Z"
recording_ended_at: "2026-08-15T19:08:12.983Z"
duration_ms: 395148
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options table lender cells (scheme/product line under the bank name) and Yes Bank More drawer (Scheme name: Home Loan); Purpose Regular/Top-up; Filters Women applicant"
pinpoint: "On Explore banks, the table and Yes Bank More drawer do not show a real scheme name, and they cannot show two applicable schemes of the same bank, so a customer who qualifies for more than one (women vs general, PMAY) cannot see or choose."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-01-charge-notes-legal-jargon-not-friendly-lawyer.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:02:22,300 --> 00:06:06,750"]
event_t_ms: [126904,126905,130243,133399,134973,141675,143790,151658,171485,293756,293757,298155]
screenshot_files: ["screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0042.png"]
tags: ["data","copy","schemes","table","filters","women-applicant","top-up"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html`, Bank options, they opened **More about Yes Bank**. The drawer’s Scheme block shows **Scheme name: Home Loan** — a generic product line, not a distinct scheme.

Raw ASR (`audio.srt` cue 40): "I don't even know the name of the scheme." Cue 43: "But where are the multiple schemes?" Cue 59: "You can't use any bank of the same bank in this table." Cue 65–67: if multiple schemes can apply, they need the scheme name so they can decide which to go through.

They clicked **Top-up** (Purpose) and later **Women applicant**. The table still shows one row per bank. They said SBI has a general scheme and a special scheme for women; a woman with the right profile is eligible for both. They said Canara Bank (ASR “Canada Bank”) housing loan gives women a discount, not a different scheme, but the bank has written that the scheme is only for women. Many banks have different schemes only for women; women are also eligible through normal schemes.

They asked what to do “in Himalaya” (raw ASR): either pick the best scheme and hide the name, or make the woman aware that two schemes should be selected (they named PM Yojana and SCM Yojana). They ended: do not put the scheme name; do not add that information — but that is their proposed product rule. The defect they attacked on screen is that the table and drawer do not show scheme names or two applicable schemes of the same bank.

## How the files join (required)

- time: **126905–151658 ms** (`00:02:06,905`–`00:02:31,658`)
- said: "I don't even know the name of the scheme." / "Unless a bank has multiple schemes." / "But where are the multiple schemes?" (`audio.srt` cues 40–43)
- did: click More about Yes Bank **126905**; open drawer details 3, 5, nested 1, 1, 3; close on `#hlc-drawer-backdrop` **151658**
- seeing: `screenshots/0018.png`–`0023.png` Yes Bank More drawer — Scheme name Home Loan, Facility Term loan, Purpose Regular
- page/object: Explore banks Bank options + Yes Bank drawer
- therefore: they cannot see a real scheme name on the row or in More

- time: **167100–231720 ms** (`00:02:47,100`–`00:03:51,720`)
- said: you had selected top-up; these are top-up schemes; I take a home loan or a top-up — am I eligible for two schemes of the same bank; you cannot use any bank of the same bank in this table; only one scheme is applicable; if multiple can apply we need the name (`audio.srt` cues 46–67)
- did: click **Top-up** at **171485**; table switches to Top-up products (`screenshots/0027.jpg`, `0028.png`)
- therefore: Purpose Top-up vs Regular is a filter, not two schemes of the same bank in the table; the table still cannot show two schemes of one bank

- time: **243850–366750 ms** (`00:04:03,850`–`00:06:06,750`)
- said: SBI general vs women; woman eligible for both; Canara (ASR Canada) discount vs “this scheme is only for women”; many banks have women-only schemes; women also eligible through normal schemes; if eligible through multiple she must know two schemes should be selected — PM Yojana and SCM Yojana; they also say pick the best and then do not tell the name (`audio.srt` cues 76–125)
- did: click **Women applicant** **293756** (`screenshots/0042.png`); click **Regular** **298155**
- seeing: filters Women applicant checked; table still one row per bank (Canara / UCO in later shots)
- therefore: dual eligibility (women + general, PMAY) is not shown as two schemes the customer can see or select

Closing talk **382150–393510 ms** about compare-and-apply product not taken yet is session wrap-up, not this table defect.

`console.json` is `[]`. Player files add no talk.

## Pinpoint

On Explore banks, lender rows and the Yes Bank More drawer show a generic product name (Home Loan / Union Home / Baroda Top Up Loan) instead of a scheme name, and the table cannot show two schemes of the same bank. They treated that as wrong because a woman (or a PMAY applicant) can be eligible for more than one scheme at once and must know both, but the page never surfaces that.

## Related discussion (not the issue itself)

- Top-up vs Regular: one person thought Top-up meant two schemes of the same bank; the other said Top-up is only when you do not have a home loan, then corrected: Regular vs Top-up is a purpose selection, and the table still shows one scheme per bank.
- “Not upfront?” / “No.” — they do not need the scheme name if only one scheme can apply at a time.
- “The customer only has to pay the bank off. But there is no scheme.” — if one scheme applies, name is optional.
- Canara Bank (ASR Canada Bank): women get a discount; there are not different schemes; but the bank wrote “this scheme is only for women.” They disagreed with that writing.
- “What should we do in Himalaya?” (raw ASR): pick the best scheme and show it, then do not tell the name — versus the woman must be aware two schemes should be selected (PM Yojana and SCM Yojana).
- Closing: “Don't select the name of the scheme. We don't have to add any information. Yes, we don't have to do that.”
- Last minute: compare-and-apply product still not taken; homepage and compare done so far. Wrap-up, not a second issue.

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:02:06 | 126905 | (about to ask scheme name) | More about Yes Bank | 0018.png drawer |
| 00:02:10–00:02:23 | 130243–143790 | He is the bank’s attribute | open drawer sections | 0019–0023.png Scheme Home Loan |
| 00:02:31 | 151658 | don't know the scheme name | close drawer | 0024.png |
| 00:02:47–00:02:54 | 167100–174680 | you had selected top-up; these are top-up schemes | click Top-up 171485 | 0027.jpg |
| 00:03:00–00:03:51 | 180760–231720 | two schemes of same bank? table can't; need name if multiple apply | scroll table | 0028–0031.png Top-up rows |
| 00:04:03–00:05:21 | 243850–321790 | SBI women vs general; Canara discount vs women-only scheme | idle on Top-up table | 0032–0041.png |
| 00:04:53 | 293756 | woman applicant / top-up applicant | check Women applicant | 0042.png |
| 00:04:58 | 298155 | let's go through it now | click Regular | 0043.jpg |
| 00:05:23–00:06:06 | 323910–366750 | Himalaya: pick best vs two schemes PM + SCM; then don't add the name | idle; Regular + Women | 0044–0052.png Canara/UCO |
| 00:06:22–00:06:33 | 382150–393510 | compare-and-apply not taken yet | scroll | 0053–0055.png wrap-up |

## Cross-recording continuation

**From wb-rec-260816-0029:** that folder ended on EMI-miss drawers and penalty labels on Other charges. This scheme-name topic starts only after they finish the legal-notes talk (~02:22). New issue. Not a continuation of 0029.

**Into next:** NONE. Last folder. They close the scheme debate (“we don't have to add any information”) then wrap the review (homepage and compare done). Topic does not continue.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — Explore banks, 395148 ms, 130 events, 56 shots. Used for: `timeline_alignment`
- `audio.json` — segments 36–125 scheme/top-up/women talk; `language` `mr` wrong. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — same timed lines. Used for: `timeline_alignment`
- `audio.srt` — cues 36–125 this issue; 126–130 wrap-up. Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — plain transcript of scheme-name debate. Used for: `supports_issue`
- `audio.tsv` — ms 142300–366750. Used for: `timeline_alignment`
- `audio.txt` — timed dump. Used for: `timeline_alignment`
- `audio.vtt` — same family. Used for: `timeline_alignment`
- `audio.webm` — binary mic. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — one-block including scheme names / SBI women / PM Yojana. Used for: `supports_issue`
- `console.json` — `[]`. Used for: `checked_no_extra_signal`
- `events.json` — Yes Bank More, drawer details, Top-up, Women applicant, Regular. Used for: `supports_issue`, `timeline_alignment`
- `index.html` — player shell; inlined events include those clicks; no extra talk. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — Bank options; Purpose Regular / Top-up actions. Used for: `supports_issue`
- `replay.spec.ts` — Yes Bank More, drawer, Top-up, Women applicant, Regular. Used for: `timeline_alignment`
- `screenshots/0000.png`–`screenshots/0017.png` — Other charges notes (issue 01). Used for: `checked_no_extra_signal`
- `screenshots/0018.png` — t=127306 Yes Bank More. Used for: `supports_issue`
- `screenshots/0019.png`–`screenshots/0023.png` — drawer Scheme name Home Loan. Used for: `supports_issue`
- `screenshots/0024.png`–`screenshots/0025.png` — drawer closed, table. Used for: `timeline_alignment`
- `screenshots/0026.png` — form Purpose Regular/Top-up. Used for: `supports_issue`
- `screenshots/0027.jpg` — after Top-up click. Used for: `supports_issue`
- `screenshots/0028.png`–`screenshots/0041.png` — Top-up Other charges, one row per bank. Used for: `supports_issue`
- `screenshots/0042.png` — Women applicant checked. Used for: `supports_issue`
- `screenshots/0043.jpg` — Regular click. Used for: `timeline_alignment`
- `screenshots/0044.png`–`screenshots/0052.png` — Regular + Women; Canara / UCO still one row each. Used for: `supports_issue`
- `screenshots/0053.jpg`–`screenshots/0055.png` — wrap-up. Used for: `checked_no_extra_signal`
- `screenshots/index.json` — 56 shots. Used for: `timeline_alignment`
- `tabs.json` — one Explore banks tab. Used for: `timeline_alignment`
- `viewer.css` — generic player (17895 bytes). Used for: `checked_no_extra_signal`
- `viewer.js` — generic player (32334 bytes). Used for: `checked_no_extra_signal`

## ASR notes

Same sentence family across srt/vtt/tsv/text/txt/sentences. `audio.json` `language` `mr` ignored.

Conflicts resolved by screen + click (quotes stay raw):

1. **“Canada Bank”** while later shots show **Canara Bank** housing loan. (ASR likely meant: Canara Bank.)
2. **“Himalaya”** (~05:23). No such label on screen. Quote raw; they are asking what the product should do.
3. **“SCM Yojana”** next to **“PM Yojana”**. Quote raw; on-screen filters show Women applicant, not those names.
4. **“You can't use any bank of the same bank in this table.”** Joined to one-row-per-bank table = cannot show two schemes of one bank.
5. **“He is the bank’s attribute.”** Joined to Yes Bank drawer fields (bank attribute, not scheme name).

## JSON
```json
{
  "issue_id": "wb-rec-260816-0031/issue-02-table-missing-scheme-names-multiple-schemes",
  "issue_title": "Table does not show scheme names or multiple schemes of the same bank",
  "folder": "wb-rec-260816-0031",
  "sequence_index": 30,
  "recording_id": "abd34f08-4d04-49d6-a699-6c354e5780bd",
  "recording_started_at": "2026-08-15T19:01:37.835Z",
  "recording_ended_at": "2026-08-15T19:08:12.983Z",
  "duration_ms": 395148,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options table lender cells (scheme/product line under the bank name) and Yes Bank More drawer (Scheme name: Home Loan); Purpose Regular/Top-up; Filters Women applicant",
  "pinpoint": "On Explore banks, the table and Yes Bank More drawer do not show a real scheme name, and they cannot show two applicable schemes of the same bank, so a customer who qualifies for more than one (women vs general, PMAY) cannot see or choose.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-01-charge-notes-legal-jargon-not-friendly-lawyer.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:02:22,300 --> 00:06:06,750"],
  "event_t_ms": [126904,126905,130243,133399,134973,141675,143790,151658,171485,293756,293757,298155],
  "screenshot_files": ["screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0042.png"],
  "tags": ["data","copy","schemes","table","filters","women-applicant","top-up"],
  "quotes": [
    {"clock": "00:02:33,860","text": "I don't even know the name of the scheme.","artifact": "audio.srt"},
    {"clock": "00:02:40,960","text": "But where are the multiple schemes?","artifact": "audio.srt"},
    {"clock": "00:03:26,660","text": "You can't use any bank of the same bank in this table.","artifact": "audio.srt"},
    {"clock": "00:03:42,180","text": "if there can be multiple schemes applicable, then we need to know the name of the scheme","artifact": "audio.srt"},
    {"clock": "00:04:20,310","text": "There are two schemes of SBI.","artifact": "audio.srt"},
    {"clock": "00:04:23,990","text": "There is a scheme for general public and a special scheme for women.","artifact": "audio.srt"},
    {"clock": "00:05:00,170","text": "In Canada Bank's housing loan, women are given discounts.","artifact": "audio.srt"},
    {"clock": "00:05:23,910","text": "what should we do in Himalaya?","artifact": "audio.srt"},
    {"clock": "00:05:39,890","text": "If a woman is eligible through multiple schemes, she must be aware that two schemes should be selected.","artifact": "audio.srt"},
    {"clock": "00:06:01,310","text": "We don't have to add any information.","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 126905, "name": "More about Yes Bank", "css": "tbody#hlc-compare-body > tr:nth-of-type(33) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button > span:nth-of-type(2) > svg > path"},
    {"t_ms": 171485, "name": "Top-up", "css": "form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > button:nth-of-type(2)"},
    {"t_ms": 293756, "name": "Women applicant", "css": "aside#hlc-filters-panel > div:nth-of-type(3) > fieldset:nth-of-type(2) > div > label:nth-of-type(1) > input"},
    {"t_ms": 298155, "name": "Regular", "css": "form#hlc-inputs > div:nth-of-type(1) > div:nth-of-type(4) > div > div:nth-of-type(2) > div > button:nth-of-type(1)"}
  ],
  "related_discussion_present": true
}
```
