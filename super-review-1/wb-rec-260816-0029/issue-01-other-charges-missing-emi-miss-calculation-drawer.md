# Other charges has no drawer that calculates extra money for one missed EMI

On Explore banks, Other charges, overdue and EMI bounce show only static rates and rupee fees.
They said every other charge needs a drawer with a calculation inside, not just a yearly percent.
They want the extra money for a month if one EMI is missed, including the bounce fee, by clicking the underlined charge.
They said some banks charge about 24% and one miss can mean taking out double money.

---
issue_id: "wb-rec-260816-0029/issue-01-other-charges-missing-emi-miss-calculation-drawer"
issue_title: "Other charges has no drawer that calculates extra money for one missed EMI"
folder: "wb-rec-260816-0029"
sequence_index: 29
recording_id: "1ce6b2c1-5803-4478-9e29-c1f823caae0f"
recording_started_at: "2026-08-15T18:59:02.434Z"
recording_ended_at: "2026-08-15T19:01:28.697Z"
duration_ms: 146263
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks (from URL / screenshots; pages.json empty)"
on_screen_object: "Other charges table cells for Overdue charge and EMI bounce charge (and the Notes drawers under the table)"
pinpoint: "On Explore banks Other charges, overdue and EMI bounce values are not clickable calculation drawers, so a user cannot see extra rupees for one missed EMI including bounce."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "continues_from_prev"
continued_from_folder: "wb-rec-260816-0013"
continued_into_folder: null
related_issue_files: ["issue-02-banks-missing-emi-miss-penalty-labels.md"]
source_files_used: ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:07,830 --> 00:01:09,350","00:01:45,870 --> 00:02:12,850"]
event_t_ms: [7519,8630,9597,19165,29065,52798,54096,64999,72065,102798,103699,109898,115165]
screenshot_files: ["screenshots/0000.png","screenshots/0001.png","screenshots/0004.png","screenshots/0007.png","screenshots/0008.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"]
tags: ["interaction","data","trust","copy","missing-calculation"]
---

## Exact issue

On `http://localhost:8765/pages/explore-banks.html`, Other charges tab, the Overdue charge and EMI bounce charge cells are static numbers (for example CSB 24.00% p.a. overdue and ₹500 bounce; IndusInd 24.00% p.a. overdue and ₹750 bounce). They said that is not enough.

Raw ASR (`audio.srt` cue 1): "For every type of audio charge, I need a drawer and I need a calculation in the drawer." Screenshot plus the active Other charges tab make the intended phrase other charge, not audio charge.

They repeated the user job: know extra money for a month if one EMI is missed. They said some banks are a "24-step bank" (ASR; on screen CSB and IndusInd show 24.00% p.a. overdue, so 24% bank). They said even before taking a loan they would tell someone not to take that bank, because if one EMI is missed "you have to withdraw double money." They called that part of the intelligence.

They said they need a drawer like that, and they need the underlines so they can click them and do the calculations. Later they named overdue charge and EMI bounce charge as inputs that must go into those calculations: "If we click on the overdue charge, we need to do the calculations." "If one EMI is missed for a month, we need total extra money." "Including EMI bounce charge."

They focused Collapse all on the Notes block under the table (`div#hlc-charges-note`), then scrolled the Other charges grid. They did not open a per-cell calculation drawer in this recording. The joined defect is: Other charges values do not open a drawer that turns overdue plus bounce into extra rupees for one missed EMI.

## How the files join (required)

- time: 7519 ms (00:00:07.519) and speech 7830–16290 ms
- said: "For every type of audio charge, I need a drawer and I need a calculation in the drawer." (`audio.srt` cue 1; `audio.tsv` 7830–16290)
- did: focus Collapse all, `css` `div#hlc-charges-note > div > div > button`, locators `getByRole("button", { name: "Collapse all" })` (`events.json`); then scroll y=1149.5 then y=908.5
- seeing: `screenshots/0000.png` (t=199) and `screenshots/0001.png` (t=8199) — Other charges with Overdue charge and EMI bounce charge columns; Notes/Collapse all live under the table
- page/object: Explore banks, Other charges cells and the Notes drawers
- therefore: they are asking for charge drawers with calculations, which the visible static cells do not provide

- time: 27030–30210 ms
- said: "Because some banks have a 24-step bank." (`audio.srt` cue 4)
- seeing: `screenshots/0000.png` / `0004.png` — CSB Bank overdue 24.00% p.a.; later `0008.png`–`0014.png` — IndusInd Bank overdue 24.00% p.a.
- therefore: ASR 24-step is 24% overdue, used as the reason the missing rupee calculation matters

- time: 64510–69350 ms, scroll y=1941.5 at 64999 ms
- said: "And I need to know the underlines. I need to click them and do the calculations." (`audio.srt` cue 12)
- seeing: `screenshots/0008.png` — some overdue cells are blue links (for example DCB "Fixed amount by overdue range >"); most overdue/bounce cells are plain text
- therefore: they want those charge values (the underlines) to be clickable calculations, not only footnotes

- time: 109430–124630 ms, scroll down to y≈3207 then back up
- said: "We also need an overdue charge and EMI bounce charge." / "If we click on the overdue charge, we need to do the calculations." / "If one EMI is missed for a month, we need total extra money." / "Including EMI bounce charge." (`audio.srt` cues 19–24)
- seeing: `screenshots/0012.png`–`0014.png` — overdue percents and bounce rupees still shown as text, Notes at the bottom of the table, IndusInd 24% / ₹750 in view
- therefore: clicking overdue must compute a month’s extra rupees and add bounce; that calculation is missing

`pages.json` is `[]` and `console.json` is `[]` — no extra page title or console error. `replay.spec.ts` only records idle waits after goto, so the talk happens during idle+scroll. `audio.webm` is binary. `viewer.js` / `viewer.css` / `index.html` are the replay player, not the site.

## Pinpoint

On Explore banks → Other charges, the Overdue charge and EMI bounce charge cells (and the Notes drawers they focused via Collapse all) do not give a clickable drawer that calculates total extra money for one missed EMI for a month, including bounce. They treated that gap as intelligence the product must have before someone picks a bank, especially for 24% overdue banks where a miss can mean double money.

## Related discussion (not the issue itself)

They tied the missing calculation to bank choice: even if another bank is 0.1% cheaper on interest, do not take a bank where one missed EMI means withdrawing double money. They said that warning is also part of the intelligence. That ranking/labeling is written as a separate issue (`issue-02-banks-missing-emi-miss-penalty-labels.md`). They also said "Interest rate is extraordinary" (`audio.srt` cue 18) while still on this table — related talk that a slightly better rate is not the whole story next to overdue/bounce. They wanted the same underline-click pattern they already use for some range links (DCB overdue, Union Bank rate-change range). Previous recording `wb-rec-260816-0013` already attacked the overdue percent as "annum" that does not show next month’s total; this recording adds the drawer, the underlines, and bounce in the same total.

## Chronology in this recording

- 00:00.272–00:07.519: idle on Explore banks Other charges (`screenshots/0000.png`: City Union through IDBI; CSB 24.00% p.a. overdue already on screen).
- 00:07.519: focus Collapse all in `#hlc-charges-note`.
- 00:07.830–00:16.290: every other charge needs a drawer with a calculation.
- 00:17.370–00:26.030: extra money for a month if one EMI is missed.
- 00:27.030–00:32.850: some banks are 24% (ASR 24-step); still need extra-money figure. Scroll y=1272 at 29065 (`screenshots/0004.png`).
- 00:35.610–00:54.330: even before taking a loan, tell them not to take this bank; 0.1% cheaper interest is not enough if one miss means double money; that is intelligence.
- 00:54.730–01:09.350: repeat extra-money need; "I need a drawer like that"; click the underlines and do the calculations. Scroll y=1941.5 at 64999 (`screenshots/0008.png`).
- 01:13.930–01:35.950: bank labels (J&K vs IndusInd) — see issue 02, same table.
- 01:45.870–02:04.630: overdue and bounce must go into the calculations; click overdue → total extra money for one missed month including bounce. Scroll to table bottom y=3207 at 103699 (`screenshots/0012.png` Notes), then back through IndusInd (`screenshots/0014.png`).
- 02:09.970–02:12.850: "We also need this intelligence, which is already visible here" while scrolling up toward the top of the table (`screenshots/0015.jpg` / `0016.jpg`).
- rest of session: idle and a last scroll y=782 at 143265. No click on a charge cell.

## Cross-recording continuation

Continues from `wb-rec-260816-0013` (gap ~6 minutes, under 15). That session ended on the same Other charges table. Last speech there: they need a calculation; "This does not have a calculation"; show how an overdue is made; how much money after missing; how much charge; they have not used the money for an annum but the cell shows a yearly percent. Last non-idle events there: click overdue footnote ‡, open overdue note, click overdue cells in the table (rows 29–30 and 15). Last screenshots `0077.png`–`0081.png` show Other charges with overdue percents, including IndusInd 24.00% p.a. at the bottom of `0079.png`–`0081.png`. This folder’s first words pick up that missing calculation and specify drawers, underlines, and bounce in the total.

Does not continue into `wb-rec-260816-0031` (~9s gap). Next session starts on the same URL but a different complaint: symbols/legal language versus a friendly lawyer, MCLR/BPLR, how the rate is decided. First events there focus/click rate-change and bounce note marks (`th#hlc-th-emiBounceChargeDisplay`, `th#hlc-th-rateChangeChargeDisplay`) and expand charge notes. That is a new problem, not this drawer-calculation issue.

## Evidence by file (every file in the folder — no omissions)

- `audio.json` — Whisper segments 1–12 and 18–25, language `mr` (wrong for this English/Hindi mix), low probability on "audio" (0.82) and "24-step"/"bank"; trailing `text` matches the drawer/calculation talk. Used as `supports_issue` and ASR conflict source.
- `audio.lrc` — same timed lines as srt, including drawer, 24-step, underlines, overdue/bounce. `supports_issue`.
- `audio.srt` — primary speech clock; cues 1–12 and 18–24 are this issue; cue 25 related intelligence. `supports_issue`.
- `audio.text` — untimed full transcript with the same drawer and extra-money lines. `supports_issue`.
- `audio.tsv` — millisecond starts/ends used to line speech with events (7830, 17370, 27030, 64510, 109430, 114310, 119490, 122950). `timeline_alignment`.
- `audio.txt` — Whisper timed dump, same wording as srt. `supports_issue`.
- `audio.vtt` — same cues as srt. `supports_issue`.
- `audio.webm` — binary mic (2350857 bytes); not transcribed here; speech taken from text artifacts. `checked_no_extra_signal`.
- `audio_sentences.txt` — one paragraph of the same transcript. `supports_issue`.
- `console.json` — `[]`; no console errors during the talk. `checked_no_extra_signal`.
- `events.json` — 58 events; only non-idle interaction is focus Collapse all at 7519 ms, then scrolls through Other charges (y 697→3207→692). No click on an overdue/bounce cell in this folder. `supports_issue` / `timeline_alignment`.
- `index.html` — replay shell; inlined manifest id `1ce6b2c1-5803-4478-9e29-c1f823caae0f`, start URL explore-banks, 58 events, 17 screenshots; no extra discussion. `checked_no_extra_signal`.
- `manifest.json` — id, URL, 2026-08-15T18:59:02.434Z–19:01:28.697Z, 146263 ms, viewport 1366×768, mic true, pages_count 0. `timeline_alignment`.
- `pages.json` — `[]`; no landmark names; object named from screenshots + events CSS. `checked_no_extra_signal`.
- `replay.spec.ts` — goto explore-banks.html then only idle comments; confirms they talked without further recorded clicks. `timeline_alignment`.
- `screenshots/0000.png` — Other charges start; CSB 24.00% p.a. overdue; bounce rupees; Notes not yet in view. `supports_issue`.
- `screenshots/0001.png` — after Collapse all focus; Bank of Maharashtra selected; overdue/bounce columns. `supports_issue`.
- `screenshots/0002.png` — Axis through Central Bank Other charges. `timeline_alignment`.
- `screenshots/0003.jpg` — same table; heuristic masks at top; periodic jpeg. `timeline_alignment`.
- `screenshots/0004.png` — Canara 0% overdue (capped), CSB 24.00% p.a., DCB overdue as a blue range link. `supports_issue`.
- `screenshots/0005.png` — same band as 0004. `timeline_alignment`.
- `screenshots/0006.png` — same band as 0004. `timeline_alignment`.
- `screenshots/0007.png` — DCB through Indian Bank; IDFC overdue is a long condition, not a calculator. `supports_issue`.
- `screenshots/0008.png` — ICICI through Karnataka; IndusInd 24% / ₹750; J&K 0.20% / ₹200. `supports_issue`.
- `screenshots/0009.png` — Indian Bank through Kotak; same IndusInd/J&K contrast while they ask for underlines. `supports_issue`.
- `screenshots/0010.png` — Indian Overseas through Nainital. `timeline_alignment`.
- `screenshots/0011.png` — HDFC through J&K. `timeline_alignment`.
- `screenshots/0012.png` — RBL through Yes Bank plus Notes / Collapse all / Prepayment charge — the drawer pattern they pointed at. `supports_issue`.
- `screenshots/0013.png` — J&K through PNB during overdue+bounce calculation talk. `supports_issue`.
- `screenshots/0014.png` — IndusInd row highlighted; 24.00% p.a. overdue and ₹750 bounce. `supports_issue`.
- `screenshots/0015.jpg` — scrolled back to Axis–Bank of Maharashtra; "intelligence already visible". `related_discussion`.
- `screenshots/0016.jpg` — same top of table at 140199 ms. `related_discussion`.
- `screenshots/index.json` — 17 shots, t/reason/url; used to pick nearest shot ≤ speech time. `timeline_alignment`.
- `tabs.json` — one tab, explore-banks.html for the whole session. `timeline_alignment`.
- `viewer.css` — 17895 bytes, generic replay chrome, no session talk. `checked_no_extra_signal`.
- `viewer.js` — 32334 bytes, generic replay player, no session talk. `checked_no_extra_signal`.

## ASR notes

Transcripts agree on the drawer/calculation demand. Conflicts:

1. `audio charge` (srt/tsv/json, word "audio" probability 0.82) vs screen Other charges. Used other charge because the tab, columns, and later "overdue charge and EMI bounce charge" match the screen, not audio.
2. `24-step bank` (srt cue 4; json segment 4 "24-step bank") vs 24.00% p.a. overdue on CSB and IndusInd. Used 24% bank.
3. `withdraw double money` (srt) vs json segment 8 "withdraw double money" / trailing text "withdraw double money". Same meaning; quoted srt.
4. json language `mr` is wrong; speech is English with Indian bank names.
5. json segment 2 word order differs slightly from srt cue 2; srt matches tsv. Used srt.
6. "underlines" is consistent across artifacts; on screen some charge cells are blue links, most are not underlined — they still named underlines as the click target for calculations.

## JSON

```json
{
  "issue_id": "wb-rec-260816-0029/issue-01-other-charges-missing-emi-miss-calculation-drawer",
  "issue_title": "Other charges has no drawer that calculates extra money for one missed EMI",
  "folder": "wb-rec-260816-0029",
  "sequence_index": 29,
  "recording_id": "1ce6b2c1-5803-4478-9e29-c1f823caae0f",
  "recording_started_at": "2026-08-15T18:59:02.434Z",
  "recording_ended_at": "2026-08-15T19:01:28.697Z",
  "duration_ms": 146263,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks (from URL / screenshots; pages.json empty)",
  "on_screen_object": "Other charges table cells for Overdue charge and EMI bounce charge (and the Notes drawers under the table)",
  "pinpoint": "On Explore banks Other charges, overdue and EMI bounce values are not clickable calculation drawers, so a user cannot see extra rupees for one missed EMI including bounce.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "continues_from_prev",
  "continued_from_folder": "wb-rec-260816-0013",
  "continued_into_folder": null,
  "related_issue_files": ["issue-02-banks-missing-emi-miss-penalty-labels.md"],
  "source_files_used": ["audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","manifest.json","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.jpg","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.jpg","screenshots/0016.jpg","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:07,830 --> 00:01:09,350","00:01:45,870 --> 00:02:12,850"],
  "event_t_ms": [7519,8630,9597,19165,29065,52798,54096,64999,72065,102798,103699,109898,115165],
  "screenshot_files": ["screenshots/0000.png","screenshots/0001.png","screenshots/0004.png","screenshots/0007.png","screenshots/0008.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png"],
  "tags": ["interaction","data","trust","copy","missing-calculation"],
  "quotes": [
    {"clock": "00:00:07,830", "text": "For every type of audio charge, I need a drawer and I need a calculation in the drawer.", "artifact": "audio.srt"},
    {"clock": "00:00:17,370", "text": "Because I need to know how much extra money I need for a month if my one EMI is missed.", "artifact": "audio.srt"},
    {"clock": "00:00:27,030", "text": "Because some banks have a 24-step bank.", "artifact": "audio.srt"},
    {"clock": "00:00:46,850", "text": "But don't take this bank, because if even one EMI is missed, you have to withdraw double money.", "artifact": "audio.srt"},
    {"clock": "00:01:04,510", "text": "And I need to know the underlines. I need to click them and do the calculations.", "artifact": "audio.srt"},
    {"clock": "00:01:54,310", "text": "If we click on the overdue charge, we need to do the calculations.", "artifact": "audio.srt"},
    {"clock": "00:01:59,490", "text": "If one EMI is missed for a month, we need total extra money.", "artifact": "audio.srt"},
    {"clock": "00:02:02,950", "text": "Including EMI bounce charge.", "artifact": "audio.srt"}
  ],
  "clicks": [{"t_ms": 7519, "name": "Collapse all", "css": "div#hlc-charges-note > div > div > button"}],
  "related_discussion_present": true
}
```
