# Home-loan journey lines use too many words and too many phrases

They like this dark block’s story: re-engineered journey, whole market in one view, look before sharing a number, pick banks and they compete.
They still want the same facts in fewer, simpler sentences — one subject, one predicate — so a reader spends less effort.
Line 1 is fine. Line 2 should be shorter. “Before you give your phone number” sounds crude. Line 4 also fails the simple-sentence test.
They were pointing at this block while saying that.

---
issue_id: "wb-rec-260815-1929/issue-02-journey-section-copy-too-complex"
issue_title: "Home-loan journey lines use too many words and too many phrases"
folder: "wb-rec-260815-1929"
sequence_index: 2
recording_id: "fb743d3e-45ef-48e2-a191-4c7147d743cb"
recording_started_at: "2026-08-15T13:59:20.405Z"
recording_ended_at: "2026-08-15T14:08:27.240Z"
duration_ms: 546835
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "Dark homepage block under heading “We completely re-engineered your home loan journey.” with three following lines about the market view, looking before giving a phone number/email, and picking banks / applying once / they compete"
pinpoint: "The four-line journey story is coherent but too wordy and too clause-heavy; they want simpler polished English, especially lines 2–4, including less crude “give your phone number” wording."
severity_as_spoken: "high"
confidence: "high"
asr_conflict: true
continuation: "standalone"
continued_from_folder: null
continued_into_folder: null
related_issue_files: ["issue-03-transparent-supporting-lines-add-no-value.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"]
speech_clock: ["00:01:00,940 --> 00:03:56,500"]
event_t_ms: [40073, 41574, 43508, 44307, 52042, 53908, 55208, 56841, 58875, 63487, 242829, 246141, 250498, 252407, 254786, 254952]
screenshot_files: ["screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png"]
tags: ["copy","wording","complexity","homepage"]
---

## Exact issue

On the home page dark block headed **We completely re-engineered your home loan journey.** they like the story order, but say the four sentences can say the same thing with far fewer words and with simple subject–predicate sentences. Line 1 is acceptable. Line 2 (“entire market sits in one standardized view, built so you can cross-examine…”) should be simplified (they offer “see the entire market in one comparable view”). Line 3’s “before you give your phone number or email” sounds crude; they want something like “before we ask you for your details.” Line 4 (“You pick your banks, apply once to all of them, and they compete for you”) fails the simple-sentence test; they try “Pick your banks and apply in one shot, and let them compete for you.”

## How the files join (required)

- time: 60940–236500 ms (00:01:00–00:03:56)
- what they said: audio.srt cues 6–27; they quote each line then judge it
- what they did: scroll onto this block ~40073–58875 ms; click the section at 63487 ms (`main > div > section:nth-of-type(1)`); later click the copy and `#home-lead-title` at 242829–254952 ms while still talking through rewrites
- what was on screen: screenshots/0007.png–0030.png show the four lines (1 and 4 bright, 2 and 3 dimmer)
- what page/object: pages.json heading “We completely re-engineered your home loan journey.”
- therefore: the issue is this block’s copy — too long, too many phrases, one crude phrase — not the product demo above it

ASR: “home-grown journey” (audio.json p≈0.42) vs pages.json/screenshots “home loan journey” — used home loan. “they complete for you” vs later “they compete for you” and on-screen “they compete for you” — used compete. “view build” / “cross-examine” match the on-screen “built so you can cross-examine.”

## Pinpoint

Homepage journey block: keep the four-beat story, but rewrite lines 2–4 into shorter, one-clause, polished English; drop crude “give your phone number.”

## Related discussion (not the issue itself)

They like the coherence. Example rewrites are suggestions, not extra issues. After this they thought scrolling felt slow, then took it back (“No, there is no such problem with scrolling”) — not an issue. “We have to act as a cursor / phone / text” is how they want to review, not a site defect. Related later: Transparent supporting lines (issue-03) is a different block.

## Chronology in this recording

- 00:01:00 — enter this section; like the story
- 00:01:23–00:01:56 — want fewer words, simple sentences
- 00:02:05–00:02:48 — line 1 good; line 2 simplify
- 00:02:51–00:03:13 — line 3 phone-number wording crude
- 00:03:14–00:03:56 — line 4 not a simple sentence; example rewrites
- 00:04:00–00:04:30 — false-alarm scroll lag, then review-method talk

## Cross-recording continuation

standalone. Not discussed in `wb-rec-260815-1928` (silent). Not carried into `wb-rec-260815-1950` (already on Zero).

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — homepage session 546835 ms; `timeline_alignment`
- `audio.json` — segments 6–27 and words home-grown / compete; `supports_issue`
- `audio.lrc` — same lines; `supports_issue`
- `audio.srt` — cues 6–27 quoted; `supports_issue`
- `audio.text` — same; `supports_issue`
- `audio.tsv` — 60940–236500 ms; `supports_issue`
- `audio.txt` — same; `supports_issue`
- `audio.vtt` — same; `supports_issue`
- `audio.webm` — binary mic; `timeline_alignment`
- `audio_sentences.txt` — same; `supports_issue`
- `console.json` — empty; `checked_no_extra_signal`
- `events.json` — scrolls onto block; clicks 63487, 242829, 246141, 252407, 254786, 254952; `supports_issue`
- `index.html` — player shell; `checked_no_extra_signal`
- `pages.json` — journey heading and region; `supports_issue`
- `replay.spec.ts` — locators for `section:nth-of-type(1)` and `#home-lead-title`; `supports_issue`
- `tabs.json` — stayed on `/`; `timeline_alignment`
- `viewer.css` — generic player; `checked_no_extra_signal`
- `viewer.js` — generic player; `checked_no_extra_signal`
- `screenshots/index.json` — 0007–0030 at ~62–238 s; `timeline_alignment`
- `screenshots/0000.png`–`0006.png` — earlier hero/demo; `checked_no_extra_signal`
- `screenshots/0007.png`–`0030.png` — four journey lines on screen while they rewrite; `supports_issue`
- `screenshots/0031.png`–`0032.png` — heading-only during later scroll; `timeline_alignment`
- `screenshots/0033.png`–`0065.png` — later sections; `checked_no_extra_signal`

## ASR notes

Chose screenshot/pages.json “home loan journey” over ASR “home-grown.” Chose “compete” from later speech + on-screen line over earlier “complete.” TSV paraphrases differ from SRT; SRT+screenshot used for the four on-screen sentences.

## JSON

```json
{
  "issue_id": "wb-rec-260815-1929/issue-02-journey-section-copy-too-complex",
  "issue_title": "Home-loan journey lines use too many words and too many phrases",
  "folder": "wb-rec-260815-1929",
  "sequence_index": 2,
  "recording_id": "fb743d3e-45ef-48e2-a191-4c7147d743cb",
  "recording_started_at": "2026-08-15T13:59:20.405Z",
  "recording_ended_at": "2026-08-15T14:08:27.240Z",
  "duration_ms": 546835,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "Dark homepage block under heading “We completely re-engineered your home loan journey.” with three following lines about the market view, looking before giving a phone number/email, and picking banks / applying once / they compete",
  "pinpoint": "The four-line journey story is coherent but too wordy and too clause-heavy; they want simpler polished English, especially lines 2–4, including less crude “give your phone number” wording.",
  "severity_as_spoken": "high",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "standalone",
  "continued_from_folder": null,
  "continued_into_folder": null,
  "related_issue_files": ["issue-03-transparent-supporting-lines-add-no-value.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","tabs.json","viewer.css","viewer.js","screenshots/index.json","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/0062.png","screenshots/0063.png","screenshots/0064.png","screenshots/0065.png"],
  "speech_clock": ["00:01:00,940 --> 00:03:56,500"],
  "event_t_ms": [40073, 41574, 43508, 44307, 52042, 53908, 55208, 56841, 58875, 63487, 242829, 246141, 250498, 252407, 254786, 254952],
  "screenshot_files": ["screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png"],
  "tags": ["copy","wording","complexity","homepage"],
  "quotes": [
    {"clock": "00:01:23,840 --> 00:01:31,780", "text": "But I feel we can convey the same amount of information using a lot less words by keeping the English polished still,", "artifact": "audio.srt"},
    {"clock": "00:01:52,680 --> 00:01:56,140", "text": "It should be simple, one subject, one predicate as much as possible.", "artifact": "audio.srt"},
    {"clock": "00:02:55,620 --> 00:03:01,820", "text": "So this before you give your phone number sounds a bit crude to me. This can become polished English as well.", "artifact": "audio.srt"},
    {"clock": "00:03:20,280 --> 00:03:23,060", "text": "Again, it fails my test of being a simple sentence.", "artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 63487, "name": "journey section", "css": "main > div > section:nth-of-type(1) > div > div > div"},
    {"t_ms": 246141, "name": "first paragraph in journey block", "css": "main > div > section:nth-of-type(1) > div > div > div > div > p:nth-of-type(1)"},
    {"t_ms": 254952, "name": "home-lead-title", "css": "#home-lead-title"}
  ],
  "related_discussion_present": true
}
```
