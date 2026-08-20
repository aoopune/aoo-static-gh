# Auto-pick best scheme and hide scheme name on Explore banks

When a customer qualifies for more than one scheme from the same bank, Shroffin should pick the best scheme and show that row — without putting the scheme name on screen.
This is for Explore banks Bank options table and More drawers (they opened Yes Bank: Scheme name shows only "Home Loan").
They debated women vs general schemes and PMAY, then agreed: do not add scheme-name information; auto-select the best.
Decided — both said yes at the end.

---
solution_id: "wb-rec-260816-0031/solution-02-auto-pick-best-scheme-hide-scheme-name"
solution_title: "Auto-pick best scheme and hide scheme name on Explore banks"
folder: "wb-rec-260816-0031"
sequence_index: 30
recording_id: "abd34f08-4d04-49d6-a699-6c354e5780bd"
recording_started_at: "2026-08-15T19:01:37.835Z"
recording_ended_at: "2026-08-15T19:08:12.983Z"
duration_ms: 395148
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Bank options table lender cells; Yes Bank More drawer Scheme name: Home Loan; Purpose Regular/Top-up; Filters Women applicant"
for_topic: "How Explore banks handles multiple applicable schemes per bank — selection, naming, and what the customer sees"
pinpoint: "When multiple schemes of the same bank can apply (e.g. woman eligible for general and women-only schemes, or PMAY plus another), Shroffin should auto-pick the best scheme, show that offer in the table, and not display or add scheme-name information — because the customer only pays the bank, not a named scheme."
kind: ["proposed_change", "product_principle", "idea", "user_convenience"]
decidedness: "decided"
basis: "Customer pays the bank off; if Shroffin picks the best scheme they don't need to see scheme names; showing generic product lines like Home Loan is not useful; dual eligibility (women + PMAY) should be resolved by Shroffin not by asking the customer to compare scheme names."
analog_source: "none"
linked_issue_files: ["issue-02-table-missing-scheme-names-multiple-schemes.md"]
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: []
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:02:33,860 --> 00:06:06,750"]
event_t_ms: [126904, 126905, 130243, 133399, 134973, 141675, 143790, 151658, 171485, 293756, 293757, 298155]
screenshot_files: ["screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0042.png","screenshots/0050.png"]
tags: ["schemes","table","data","women-applicant","top-up","pmaY","product-principle","convenience"]
---

## Exact solution (or idea that can also be a solution)

On Explore banks Bank options, they opened **More about Yes Bank** and said they do not know the scheme name (`audio.srt` cue 40). The drawer shows **Scheme name: Home Loan** — a generic product label, not a distinct scheme.

They walked when multiple schemes can apply (SBI general vs women-only; woman eligible for both; Canara/Canada Bank women discount vs separate women schemes; PMAY "PM Yojana" and "SCM Yojana" both applicable). Mid-debate one speaker said if multiple schemes apply they need the name to choose (`audio.srt` cues 65–67). The other countered: the customer only pays the bank off — there is no separate "scheme" to name if one best path exists (`cues 68–73`).

**Resolved product rule (decided):**

- "what should we do in Himalaya?" (ASR garble for Shroffin/product) — **"we select the best scheme and show it. Then we don't have to tell the name of the scheme."** (cues 107–113)
- Closing agreement: **"Don't select the name of the scheme. We don't have to add any information." / "Yes, we don't have to do that."** (cues 123–125)

Supporting rule they stated earlier: **"As long as there is only one scheme applicable at one time, we don't need to know the name of the scheme."** (cues 72–73) — extended by auto-pick-best so the table always presents one applicable best row per bank.

Purpose **Top-up** vs **Regular** and filter **Women applicant** were toggled to test dual-scheme cases; table still shows one row per bank (`screenshots/0027.jpg`, `0028.png`, `0042.png`).

## What this is for

Explore banks → **Bank options** table and **More** drawers — how Shroffin represents schemes when a profile (woman applicant, PMAY, top-up vs regular) could match more than one bank scheme. Issue file `issue-02-table-missing-scheme-names-multiple-schemes.md` names what's wrong today; this file is the product direction they chose.

## Why they said it that way

The customer borrows from the bank, not from a marketing scheme name. Exposing scheme names adds friction without helping if Shroffin already picks the best offer. Women eligible for both general and women schemes (and PMAY combinations) should not have to compare scheme names — Shroffin should select and surface the best outcome.

## How the files join (required)

- **153860–168880 ms** (`00:02:33,860`–`00:02:48,880`)
  - said: don't know scheme name; where are multiple schemes; top-up selection (`audio.srt` cues 40–46)
  - did: click More about Yes Bank 126905 ms; open drawer sections
  - seeing: `screenshots/0018.png`–`0020.png` — drawer Scheme name: Home Loan
  - **finding:** generic scheme line is not useful; need multi-scheme logic

- **171485–212280 ms** (`00:02:51,485`–`00:03:32,280`)
  - said: eligible for two schemes same bank; table can't show two; only one applicable at a time; name not needed upfront (`cues 52–63`)
  - did: click **Top-up** 171485 ms
  - seeing: `screenshots/0027.jpg`, `0028.png` — Top-up products, still one row per bank
  - **finding:** Purpose filter ≠ two schemes; product must pick one best row

- **243850–366750 ms** (`00:04:03,850`–`00:06:06,750`)
  - said: SBI general vs women; dual eligibility; pick best scheme hide name; PMAY both selected example; final yes (`cues 76–125`)
  - did: Women applicant checkbox 293756 ms; back to Regular 298155 ms
  - seeing: `screenshots/0042.png`, `0050.png` — Women applicant filter, Canara/UCO rows
  - **finding:** decided — auto-pick best, no scheme name on UI

## Pinpoint

On Explore banks, when multiple schemes from one bank could apply (women + general, PMAY stacks, etc.), Shroffin should automatically select the best scheme, display that single bank row, and not show or add scheme-name information — because the customer pays the bank and Shroffin should do the scheme choice for them.

## Related discussion (not the solution itself)

- Debate: if multiple schemes applicable, temporarily argued scheme names needed to choose (cues 65–67) — **overturned** by auto-pick-best decision.
- "Not upfront?" / "No." — scheme name unnecessary when one scheme applies.
- Canara Bank (ASR "Canada Bank"): women get discount in one scheme vs banks with separate women-only schemes; women also eligible via normal schemes.
- PM Yojana and SCM Yojana (ASR) — example where two government schemes could both apply; mid-debate "she must be aware two schemes should be selected" (cues 114–119) vs final hide-name rule — they chose hide-name + Shroffin picks best.
- Top-up vs Regular confusion: one speaker thought Top-up means two schemes of same bank; corrected as purpose selection only.
- "He is the bank's attribute" (cues 36–39) — scheme is attribute of bank row, not separate product customer picks by name.

## Chronology in this recording

| Clock | Speech | Action | Screenshot |
|---|---|---|---|
| 02:33 | Don't know scheme name | More Yes Bank 126905 ms | 0018–0020.png |
| 02:47 | Top-up schemes? | scroll up | 0025–0026.png |
| 02:51 | Two schemes same bank? | Top-up click 171485 ms | 0027.jpg |
| 04:03–05:51 | SBI women schemes; PMAY; pick best | idle + Women applicant 293756 ms | 0030–0042.png |
| 06:00–06:06 | Don't add scheme name — agreed | idle | 0044–0055.png |

## Cross-recording continuation

**Standalone.** No scheme-name continuation from `wb-rec-260816-0029` (that folder was EMI-miss charges). Next folder: NONE.

## Evidence by file (every raw recorder file in the folder — no omissions)

- **manifest.json** — explore-banks session metadata; `timeline_alignment`
- **audio.json** — segments 40–125 for scheme debate; `supports_solution`
- **audio.lrc / audio.srt / audio.text / audio.tsv / audio.txt / audio.vtt / audio_sentences.txt** — scheme speech reconciled across artifacts; `supports_solution`
- **audio.webm** — binary; not played; `binary_audio_untranscribed_use_text_artifacts`
- **console.json** — empty; `checked_no_extra_signal`
- **events.json** — Yes Bank More, Top-up, Women applicant events; `supports_solution`
- **index.html** — inlined bundle; `player_shell_with_inlined_json_fully_read`
- **pages.json** — Bank options, Filters regions; `timeline_alignment`
- **replay.spec.ts** — More drawer, Top-up, Women applicant replay; `supports_solution`
- **screenshots/index.json** — 56 entries; interaction shots 127306–298166 ms; `timeline_alignment`
- **screenshots/0000.png–0055.png** — all read; 0018–0020 drawer, 0027–0028 Top-up, 0042/0050 Women filter; periodic shots idle on table; `supports_solution`
- **tabs.json** — single explore-banks tab; `timeline_alignment`
- **viewer.css / viewer.js** — generic player confirmed; `player_chrome_fully_read_confirmed`

### Helper issue files

- **issue-02-table-missing-scheme-names-multiple-schemes.md** — `cross_link` + `timestamp_map`
- **issue-01-charge-notes-legal-jargon-not-friendly-lawyer.md** — `not_used` for this solution

## ASR notes

- "Himalaya" (cue 107) — product/code name garble; context is Shroffin Explore banks behavior.
- "Canada Bank" — Canara Bank from screenshot lender list.
- "PM Yojana" / "SCM Yojana" — likely PMAY and a second government scheme acronym; kept raw ASR spellings in quotes.
- "You can't use any bank of the same bank in this table" (cue 59) — ASR garble; meaning: table cannot show two schemes of the same bank at once.

## JSON

```json
{
  "solution_id": "wb-rec-260816-0031/solution-02-auto-pick-best-scheme-hide-scheme-name",
  "solution_title": "Auto-pick best scheme and hide scheme name on Explore banks",
  "folder": "wb-rec-260816-0031",
  "sequence_index": 30,
  "recording_id": "abd34f08-4d04-49d6-a699-6c354e5780bd",
  "recording_started_at": "2026-08-15T19:01:37.835Z",
  "recording_ended_at": "2026-08-15T19:08:12.983Z",
  "duration_ms": 395148,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks – Shroffin",
  "on_screen_object": "Bank options table lender cells; Yes Bank More drawer Scheme name: Home Loan; Purpose Regular/Top-up; Filters Women applicant",
  "for_topic": "How Explore banks handles multiple applicable schemes per bank — selection, naming, and what the customer sees",
  "pinpoint": "When multiple schemes of the same bank can apply (e.g. woman eligible for general and women-only schemes, or PMAY plus another), Shroffin should auto-pick the best scheme, show that offer in the table, and not display or add scheme-name information — because the customer only pays the bank, not a named scheme.",
  "kind": ["proposed_change", "product_principle", "idea", "user_convenience"],
  "decidedness": "decided",
  "basis": "Customer pays the bank off; if Shroffin picks the best scheme they don't need to see scheme names; showing generic product lines like Home Loan is not useful; dual eligibility (women + PMAY) should be resolved by Shroffin not by asking the customer to compare scheme names.",
  "analog_source": "none",
  "linked_issue_files": ["issue-02-table-missing-scheme-names-multiple-schemes.md"],
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0029.jpg","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.jpg","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.jpg","screenshots/0054.jpg","screenshots/0055.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:02:33,860 --> 00:06:06,750"],
  "event_t_ms": [126904, 126905, 130243, 133399, 134973, 141675, 143790, 151658, 171485, 293756, 293757, 298155],
  "screenshot_files": ["screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0027.jpg","screenshots/0028.png","screenshots/0042.png","screenshots/0050.png"],
  "tags": ["schemes","table","data","women-applicant","top-up","pmaY","product-principle","convenience"],
  "quotes": [
    {"clock": "00:02:33,860", "text": "I don't even know the name of the scheme.", "artifact": "audio.srt"},
    {"clock": "00:05:31,890", "text": "but we select the best scheme and show it.", "artifact": "audio.srt"},
    {"clock": "00:05:35,650", "text": "Then we don't have to tell the name of the scheme.", "artifact": "audio.srt"},
    {"clock": "00:06:00,210", "text": "Don't select the name of the scheme.", "artifact": "audio.srt"},
    {"clock": "00:06:02,110", "text": "Yes, we don't have to do that.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 126905, "name": "More about Yes Bank", "css": "tbody#hlc-compare-body > tr:nth-of-type(33) > td:nth-of-type(1) > div > div > div:nth-of-type(2) > button"},
    {"t_ms": 171485, "name": "Top-up", "css": "form#hlc-inputs Purpose Top-up button"},
    {"t_ms": 293756, "name": "Women applicant", "css": "aside#hlc-filters-panel Women applicant checkbox"}
  ],
  "related_discussion_present": true
}
```
