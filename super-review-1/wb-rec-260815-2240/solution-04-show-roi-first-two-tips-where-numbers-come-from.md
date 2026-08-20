# Show ROI first and add two tips for where numbers come from

Changing income, property value, or age should cascade visibly in the form and table.
They want ROI (rate) shown before other shifts, not hidden until you guess.
Two tips should explain where calculated numbers come from.
Borrowed warning: unlike Google sites, one field here should not orphan data.

---
solution_id: "wb-rec-260815-2240/solution-04-show-roi-first-two-tips-where-numbers-come-from"
solution_title: "Show ROI first and add two tips for where numbers come from"
folder: "wb-rec-260815-2240"
sequence_index: 18
recording_id: "a82e9a9f-c11f-4376-881d-25a436d5e6f5"
recording_started_at: "2026-08-15T17:10:04.687Z"
recording_ended_at: "2026-08-15T17:19:10.273Z"
duration_ms: 545586
page_url: "http://localhost:8765/pages/explore-banks.html"
page_title: "Explore banks – Shroffin"
on_screen_object: "Loan inputs fields (Monthly income, Property agreement value, Age) and Rate column on bank table"
for_topic: "Explore banks field cascade, rate/ROI visibility, and calculation transparency"
pinpoint: "On Explore banks they said you cannot take all pieces of the first information—change income then property then age and monthly income and ROI change—but tell me ROI first; we need two tips because we do not know where numbers come from."
kind: ["proposed_change", "idea", "borrowed_pattern"]
decidedness: "decided"
basis: "Trust and comprehension: user must see rate/ROI and provenance when inputs change, not discover surprises."
analog_source: "other"
linked_issue_files: ["issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md"]
severity_as_spoken: "unstated"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_solution_files: ["solution-03-three-tooltips-two-table-rows-at-one-glance.md"]
source_files_used: ["_theme-cards.json", "audio.json", "audio.lrc", "audio.srt", "audio.text", "audio.tsv", "audio.txt", "audio.vtt", "audio.webm", "audio_sentences.txt", "console.json", "events.json", "index.html", "manifest.json", "pages.json", "replay.spec.ts", "tabs.json", "viewer.css", "viewer.js", "screenshots/0000.jpg", "screenshots/0001.jpg", "screenshots/0002.jpg", "screenshots/0003.jpg", "screenshots/0004.jpg", "screenshots/0005.jpg", "screenshots/0006.jpg", "screenshots/0007.jpg", "screenshots/0008.jpg", "screenshots/0009.jpg", "screenshots/0010.jpg", "screenshots/0011.jpg", "screenshots/0012.jpg", "screenshots/0013.jpg", "screenshots/0014.jpg", "screenshots/0015.jpg", "screenshots/0016.jpg", "screenshots/0017.jpg", "screenshots/0018.jpg", "screenshots/0019.jpg", "screenshots/0020.jpg", "screenshots/0021.jpg", "screenshots/0022.jpg", "screenshots/0023.jpg", "screenshots/0024.jpg", "screenshots/0025.jpg", "screenshots/0026.jpg", "screenshots/0027.jpg", "screenshots/0028.jpg", "screenshots/0029.jpg", "screenshots/0030.jpg", "screenshots/0031.jpg", "screenshots/0032.jpg", "screenshots/0033.jpg", "screenshots/0034.jpg", "screenshots/0035.jpg", "screenshots/0036.jpg", "screenshots/0037.jpg", "screenshots/0038.jpg", "screenshots/0039.jpg", "screenshots/0040.jpg", "screenshots/0041.jpg", "screenshots/0042.jpg", "screenshots/0043.jpg", "screenshots/0044.jpg", "screenshots/0045.jpg", "screenshots/0046.jpg", "screenshots/0047.jpg", "screenshots/0048.jpg", "screenshots/0049.jpg", "screenshots/0050.jpg", "screenshots/0051.jpg", "screenshots/0052.jpg", "screenshots/0053.jpg", "screenshots/0054.jpg", "screenshots/0055.jpg", "screenshots/0056.jpg", "screenshots/0057.jpg", "screenshots/0058.jpg", "screenshots/0059.jpg", "screenshots/0060.jpg", "screenshots/0061.jpg", "screenshots/0062.jpg", "screenshots/0063.jpg", "screenshots/0064.jpg", "screenshots/0065.jpg", "screenshots/0066.jpg", "screenshots/index.json"]
speech_clock: ["00:04:49,360-00:05:48,640", "289360-348640ms"]
event_t_ms: [378089, 379909, 383488]
screenshot_files: ["screenshots/0041.jpg", "screenshots/0043.jpg", "screenshots/0045.jpg", "screenshots/0052.jpg"]
tags: ["interaction", "trust", "ROI", "tips", "cascade"]
---

## Exact solution (or idea that can also be a solution)

They walk a cascade scenario: put income, change property value, change age—monthly income falls and ROI changes. Direction: show ROI first, and add two tips explaining where numbers come from. ASR says 'Google sites don't have the same information'—likely a spreadsheet/site without shared state; applied as warning that putting one fact somewhere must not lose track of others. API aside at 00:05:49 is implementation talk in related discussion, not a separate solution.

## What this is for

Explore banks field cascade, rate/ROI visibility, and calculation transparency. On-screen: Loan inputs fields (Monthly income, Property agreement value, Age) and Rate column on bank table.
Issue file(s) name the defect; this file is the direction: issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md.

## Why they said it that way

Trust and comprehension: user must see rate/ROI and provenance when inputs change, not discover surprises.

## How the files join (required)

- **time:** 312460ms / 00:05:12
- **what they said:** Suppose I put the income there… ROI will change. But before that, tell me what is the ROI?… We need two tips. (audio.srt / audio.tsv)
- **what they did:** click #hlc-see-options 378089ms; click/input #hlc-age 379909–383488ms; scroll to table 0045 (events.json / replay.spec.ts)
- **what was on screen:** 0041/0052 — Rate column 8.80%–11.00% visible on table; form fields above
- **what page/object:** Monthly income, Property agreement value, Age, Rate column — http://localhost:8765/pages/explore-banks.html
- **therefore the actual finding is:** Show ROI/rate first when inputs change; add two tips for number provenance.

## Pinpoint

On Explore banks they said you cannot take all pieces of the first information—change income then property then age and monthly income and ROI change—but tell me ROI first; we need two tips because we do not know where numbers come from.

## Related discussion (not the solution itself)

ASR 'ROI' likely rate of interest in home-loan table. 'Google sites' ASR may mean Google Sheets. API mention: first time API available vs front-end only.

## Chronology in this recording

- 00:04:49 — can't take all pieces of first information
- 00:05:12 — income → property → age cascade
- 00:05:21 — tell me ROI first
- 00:05:34 — Google sites comparison
- 00:05:47 — we need two tips

## Cross-recording continuation

Standalone.

## Evidence by file (every raw recorder file in the folder — no omissions)

- **_theme-cards.json** — issue card map helper; cross-checked pinpoints.
- **audio.json** — transcript reconciled with srt for same cues.
- **audio.lrc** — transcript reconciled with srt for same cues.
- **audio.srt** — quotes at 00:04:49,360-00:05:48,640.
- **audio.text** — transcript reconciled with srt for same cues.
- **audio.tsv** — transcript reconciled with srt for same cues.
- **audio.txt** — transcript reconciled with srt for same cues.
- **audio.vtt** — transcript reconciled with srt for same cues.
- **audio.webm** — binary mic; not played; text artifacts used.
- **audio_sentences.txt** — transcript reconciled with srt for same cues.
- **console.json** — empty array; no console errors.
- **events.json** — clicks/focus at [378089, 379909, 383488].
- **index.html** — player shell with inlined manifest/events/screenshots.
- **manifest.json** — metadata/timeline for Explore banks session.
- **pages.json** — metadata/timeline for Explore banks session.
- **replay.spec.ts** — metadata/timeline for Explore banks session.
- **tabs.json** — metadata/timeline for Explore banks session.
- **viewer.css** — generic replay player chrome; no session talk.
- **viewer.js** — generic replay player chrome; no session talk.
- **screenshots/0000.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0001.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0002.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0003.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0004.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0005.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0006.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0007.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0008.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0009.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0010.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0011.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0012.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0013.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0014.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0015.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0016.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0017.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0018.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0019.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0020.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0021.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0022.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0023.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0024.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0025.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0026.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0027.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0028.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0029.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0030.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0031.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0032.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0033.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0034.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0035.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0036.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0037.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0038.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0039.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0040.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0041.jpg** — t from index; used in join for Explore banks field cascade, rate/ROI vi.
- **screenshots/0042.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0043.jpg** — t from index; used in join for Explore banks field cascade, rate/ROI vi.
- **screenshots/0044.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0045.jpg** — t from index; used in join for Explore banks field cascade, rate/ROI vi.
- **screenshots/0046.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0047.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0048.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0049.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0050.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0051.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0052.jpg** — t from index; used in join for Explore banks field cascade, rate/ROI vi.
- **screenshots/0053.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0054.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0055.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0056.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0057.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0058.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0059.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0060.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0061.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0062.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0063.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0064.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0065.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/0066.jpg** — periodic/interaction shot; timeline alignment for session.
- **screenshots/index.json** — 67 shots indexed; tied speech to nearest t.

### Helper issue files

- **issue-01-explore-banks-not-obvious-at-a-glance.md** — timestamp_map / cross_link
- **issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md** — timestamp_map / cross_link
- **issue-03-adjust-eligibility-not-simple-english.md** — timestamp_map / cross_link
- **issue-04-adjust-eligibility-looks-unopenable-but-is-dropdown.md** — timestamp_map / cross_link
- **issue-05-see-options-label-unclear.md** — timestamp_map / cross_link
- **issue-06-see-options-not-below-centered.md** — timestamp_map / cross_link

## ASR notes

ROI used while table header is Rate; Google sites likely Sheets/spreadsheet reference.

## JSON
```json
{
  "solution_id": "wb-rec-260815-2240/solution-04-show-roi-first-two-tips-where-numbers-come-from",
  "solution_title": "Show ROI first and add two tips for where numbers come from",
  "folder": "wb-rec-260815-2240",
  "sequence_index": 18,
  "recording_id": "a82e9a9f-c11f-4376-881d-25a436d5e6f5",
  "recording_started_at": "2026-08-15T17:10:04.687Z",
  "recording_ended_at": "2026-08-15T17:19:10.273Z",
  "duration_ms": 545586,
  "page_url": "http://localhost:8765/pages/explore-banks.html",
  "page_title": "Explore banks \u2013 Shroffin",
  "on_screen_object": "Loan inputs fields (Monthly income, Property agreement value, Age) and Rate column on bank table",
  "for_topic": "Explore banks field cascade, rate/ROI visibility, and calculation transparency",
  "pinpoint": "On Explore banks they said you cannot take all pieces of the first information\u2014change income then property then age and monthly income and ROI change\u2014but tell me ROI first; we need two tips because we do not know where numbers come from.",
  "kind": [
    "proposed_change",
    "idea",
    "borrowed_pattern"
  ],
  "decidedness": "decided",
  "basis": "Trust and comprehension: user must see rate/ROI and provenance when inputs change, not discover surprises.",
  "analog_source": "other",
  "linked_issue_files": [
    "issue-02-form-fields-dont-carry-first-inputs-or-show-roi.md"
  ],
  "severity_as_spoken": "unstated",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_solution_files": [
    "solution-03-three-tooltips-two-table-rows-at-one-glance.md"
  ],
  "source_files_used": [
    "_theme-cards.json",
    "audio.json",
    "audio.lrc",
    "audio.srt",
    "audio.text",
    "audio.tsv",
    "audio.txt",
    "audio.vtt",
    "audio.webm",
    "audio_sentences.txt",
    "console.json",
    "events.json",
    "index.html",
    "manifest.json",
    "pages.json",
    "replay.spec.ts",
    "tabs.json",
    "viewer.css",
    "viewer.js",
    "screenshots/0000.jpg",
    "screenshots/0001.jpg",
    "screenshots/0002.jpg",
    "screenshots/0003.jpg",
    "screenshots/0004.jpg",
    "screenshots/0005.jpg",
    "screenshots/0006.jpg",
    "screenshots/0007.jpg",
    "screenshots/0008.jpg",
    "screenshots/0009.jpg",
    "screenshots/0010.jpg",
    "screenshots/0011.jpg",
    "screenshots/0012.jpg",
    "screenshots/0013.jpg",
    "screenshots/0014.jpg",
    "screenshots/0015.jpg",
    "screenshots/0016.jpg",
    "screenshots/0017.jpg",
    "screenshots/0018.jpg",
    "screenshots/0019.jpg",
    "screenshots/0020.jpg",
    "screenshots/0021.jpg",
    "screenshots/0022.jpg",
    "screenshots/0023.jpg",
    "screenshots/0024.jpg",
    "screenshots/0025.jpg",
    "screenshots/0026.jpg",
    "screenshots/0027.jpg",
    "screenshots/0028.jpg",
    "screenshots/0029.jpg",
    "screenshots/0030.jpg",
    "screenshots/0031.jpg",
    "screenshots/0032.jpg",
    "screenshots/0033.jpg",
    "screenshots/0034.jpg",
    "screenshots/0035.jpg",
    "screenshots/0036.jpg",
    "screenshots/0037.jpg",
    "screenshots/0038.jpg",
    "screenshots/0039.jpg",
    "screenshots/0040.jpg",
    "screenshots/0041.jpg",
    "screenshots/0042.jpg",
    "screenshots/0043.jpg",
    "screenshots/0044.jpg",
    "screenshots/0045.jpg",
    "screenshots/0046.jpg",
    "screenshots/0047.jpg",
    "screenshots/0048.jpg",
    "screenshots/0049.jpg",
    "screenshots/0050.jpg",
    "screenshots/0051.jpg",
    "screenshots/0052.jpg",
    "screenshots/0053.jpg",
    "screenshots/0054.jpg",
    "screenshots/0055.jpg",
    "screenshots/0056.jpg",
    "screenshots/0057.jpg",
    "screenshots/0058.jpg",
    "screenshots/0059.jpg",
    "screenshots/0060.jpg",
    "screenshots/0061.jpg",
    "screenshots/0062.jpg",
    "screenshots/0063.jpg",
    "screenshots/0064.jpg",
    "screenshots/0065.jpg",
    "screenshots/0066.jpg",
    "screenshots/index.json"
  ],
  "speech_clock": [
    "00:04:49,360-00:05:48,640",
    "289360-348640ms"
  ],
  "event_t_ms": [
    378089,
    379909,
    383488
  ],
  "screenshot_files": [
    "screenshots/0041.jpg",
    "screenshots/0043.jpg",
    "screenshots/0045.jpg",
    "screenshots/0052.jpg"
  ],
  "tags": [
    "interaction",
    "trust",
    "ROI",
    "tips",
    "cascade"
  ],
  "quotes": [
    {
      "clock": "00:04:51,020",
      "text": "You can't take all the pieces of the first information.",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:05:21,360",
      "text": "But before that, tell me what is the ROI?",
      "artifact": "audio.srt"
    },
    {
      "clock": "00:05:47,980",
      "text": "We need two tips.",
      "artifact": "audio.srt"
    }
  ],
  "clicks": [
    {
      "t_ms": 378089,
      "name": "see events.json",
      "css": ""
    },
    {
      "t_ms": 379909,
      "name": "see events.json",
      "css": ""
    },
    {
      "t_ms": 383488,
      "name": "see events.json",
      "css": ""
    }
  ],
  "related_discussion_present": true
}
```
