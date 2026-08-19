# “Zero commissions” and “Zero bias” mix bank and customer, so the words are unclear

As a customer, “commissions” first sounds like a fee taken from you, not a fee from the bank.
Then “Zero bias” asks you to switch meaning: now it is about not pushing any bank.
The block never says whether this whole stretch is website-and-bank or website-and-customer.
They said that mix makes the section hard to understand.

---
issue_id: "wb-rec-260815-1951/issue-02-zero-commissions-bias-mixed-bank-customer-context"
issue_title: "“Zero commissions” and “Zero bias” mix bank and customer, so the words are unclear"
folder: "wb-rec-260815-1951"
sequence_index: 4
recording_id: "ce85813c-385e-4259-a46a-98178da92985"
recording_started_at: "2026-08-15T14:21:00.929Z"
recording_ended_at: "2026-08-15T14:29:32.515Z"
duration_ms: 511586
page_url: "http://localhost:8765/"
page_title: "Shroffin"
on_screen_object: "h2#home-zero-title lines “Zero commissions.” and “Zero bias.”"
pinpoint: "On the homepage Zero commissions / Zero bias heading, “commissions” is read as a fee taken from the customer, then “Zero bias” forces a switch to website-and-bank (not pushing a bank); they said the section mixes those two contexts and is not easy to understand."
severity_as_spoken: "medium"
confidence: "high"
asr_conflict: true
continuation: "into_next"
continued_from_folder: null
continued_into_folder: "wb-rec-260815-2000"
related_issue_files: ["issue-01-both-zeros-visible-on-scroll-looks-broken.md","issue-03-zero-supporting-sentence-too-small-and-unclear.md"]
source_files_used: ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"]
speech_clock: ["00:00:40,760 --> 00:01:41,540"]
event_t_ms: [62882]
screenshot_files: ["screenshots/0004.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0015.png","screenshots/0020.png","screenshots/0025.png"]
tags: ["copy","wording","trust","homepage","zero-commissions","zero-bias"]
---

## Exact issue

On the homepage block **Zero commissions. / Zero bias.** (`h2#home-zero-title`), they read **commissions** as a consumer and did not know which commission: the fee taken from them, or money taken from the bank. After they decided it meant the website-and-bank commission, **Zero bias** made them switch again: which bias between website and bank? Then they realized it means the site will not push any bank.

They said they have to switch context, and “It doesn't make it easy to understand.” The whole section should be either website-and-bank or website-and-customer, not mixed.

## How the files join (required)

- time (ms and clock): **40760–101540 ms** (`00:00:40,760`–`00:01:41,540`)
- what they said (quote + audio file): audio.srt: “Somewhere, when I read the word commissions, I feel, instantly as a consumer, I don't know which commission I am talking about. I am talking about the commission that is taken from me. Which commission is this?” Later: “zero bias means, this is not going to push any bank.” “So, I have to switch. What does this do? It doesn't make it easy to understand.” “Somewhere, it should be said that either this whole section is about website and bank, or this whole section is about website and customer. It should not be mixed in the context.”
- what they did: idle on the settled Zero block; **click 62882 ms** `h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)` (Zero commissions).
- what was on screen: `screenshots/0004.png` onward: **Zero** / **commissions.** / **Zero** / **bias.** plus “So you get a fair view of every lender listed on our platform, with none ranked or pushed ahead of another.”
- what page/object: homepage `h2#home-zero-title` (pages.json heading Zero commissions. / Zero bias.)
- therefore the actual issue is: the two Zero lines mix customer-fee “commissions” with bank-push “bias,” so a reader must switch context.

## Pinpoint

On homepage **Zero commissions.** and **Zero bias.** (`h2#home-zero-title`), “commissions” is first heard as a fee taken from the customer. “Zero bias” then means not pushing a bank. They said the section never stays in one relationship (website-and-bank vs website-and-customer), so it is not easy to understand.

## Related discussion (not the issue itself)

- They then explain the intended meaning: we don’t take commission/money from the bank, so we have no bias to push a bank; ranking is customer benefit; no one can pay to change ranking. That gist is for the last sentence (issue 03).
- “At least in Shroffin, in polished English, we have to convey this gist” and “96% or 98% conversation can be done in just 300 words” is how they want the words written, not a second defect.
- ASR “Shraddhan” is Shroffin (on-screen logo).

## Chronology in this recording

| Clock | t ms | Said | Did | Screenshot |
|---|---|---|---|---|
| 00:00:40–00:00:55 | 40760–55800 | Word commissions: as a consumer, which commission — the one taken from me? | idle on Zero block | 0005.png |
| 00:01:02 | 62882 | (still on commissions) | click Zero commissions span | 0008.png |
| 00:00:56–00:01:17 | 56020–77500 | Then: website-from-bank commission; then Zero bias — which bias; then: it means we won’t push any bank | idle | 0008–0009.png |
| 00:01:19–00:01:41 | 79340–101540 | I have to switch; not easy to understand; whole section should be website-bank or website-customer, not mixed | idle | 0010–0012.png |

## Cross-recording continuation

**From wb-rec-260815-1950:** silent false start on the same Zero view; no speech about commissions/bias. This issue starts here.

**Into wb-rec-260815-2000:** they return to “Zero commission, zero bias. We have already said this” while arguing the four story slides are repeating themselves. Same heading, continued as already-said copy, not a new object.

## Evidence by file (every file in the folder — no omissions)

- `manifest.json` — homepage session, 511586 ms, 62 screenshots. Used for: `timeline_alignment`
- `audio.json` — segments ~40.7–101.5s commissions/bias/context-switch; language `mr` ignored. Used for: `supports_issue`, `timeline_alignment`
- `audio.lrc` — timed commissions/bias lines. Used for: `timeline_alignment`
- `audio.srt` — primary quotes for this issue. Used for: `supports_issue`, `timeline_alignment`
- `audio.text` — same commissions/bias paragraph. Used for: `supports_issue`
- `audio.tsv` — ms 40760–101540. Used for: `timeline_alignment`
- `audio.txt` — timed dump. Used for: `timeline_alignment`
- `audio.vtt` — same family. Used for: `timeline_alignment`
- `audio.webm` — binary mic; not listened. Used for: `checked_no_extra_signal`
- `audio_sentences.txt` — one-block commissions/bias talk. Used for: `supports_issue`
- `console.json` — `[]`. Used for: `checked_no_extra_signal`
- `events.json` — click 62882 on `h2#home-zero-title` span. Used for: `supports_issue`, `timeline_alignment`
- `index.html` — player shell; inlined click locator. Used for: `checked_no_extra_signal`, `timeline_alignment`
- `pages.json` — heading Zero commissions. / Zero bias. Used for: `supports_issue`
- `replay.spec.ts` — click that heading span. Used for: `timeline_alignment`
- `screenshots/0000.png`–`screenshots/0003.png` — dual bare Zeros before copy is readable. Used for: `timeline_alignment`
- `screenshots/0004.png`–`screenshots/0025.png` — settled **Zero commissions. Zero bias.** during this talk. Used for: `supports_issue`
- `screenshots/0008.png` — interaction shot at the heading click. Used for: `supports_issue`
- `screenshots/0026.png`–`screenshots/0061.png` — later Best of all / journey blocks. Used for: `checked_no_extra_signal`
- `screenshots/index.json` — 0004+ are the 155755-byte Zero-block frames. Used for: `timeline_alignment`
- `tabs.json` — one tab homepage. Used for: `timeline_alignment`
- `viewer.css` — generic player 17895 bytes. Used for: `checked_no_extra_signal`
- `viewer.js` — generic player 32334 bytes. Used for: `checked_no_extra_signal`

## ASR notes

srt/vtt/text agree on “which commission is this” and “website and bank” vs “website and customer.” `audio.json` word “bias,” ~0.34. “Shraddhan” later is Shroffin (logo). Language tag `mr` ignored.

## JSON
```json
{
  "issue_id": "wb-rec-260815-1951/issue-02-zero-commissions-bias-mixed-bank-customer-context",
  "issue_title": "“Zero commissions” and “Zero bias” mix bank and customer, so the words are unclear",
  "folder": "wb-rec-260815-1951",
  "sequence_index": 4,
  "recording_id": "ce85813c-385e-4259-a46a-98178da92985",
  "recording_started_at": "2026-08-15T14:21:00.929Z",
  "recording_ended_at": "2026-08-15T14:29:32.515Z",
  "duration_ms": 511586,
  "page_url": "http://localhost:8765/",
  "page_title": "Shroffin",
  "on_screen_object": "h2#home-zero-title lines “Zero commissions.” and “Zero bias.”",
  "pinpoint": "On the homepage Zero commissions / Zero bias heading, “commissions” is read as a fee taken from the customer, then “Zero bias” forces a switch to website-and-bank (not pushing a bank); they said the section mixes those two contexts and is not easy to understand.",
  "severity_as_spoken": "medium",
  "confidence": "high",
  "asr_conflict": true,
  "continuation": "into_next",
  "continued_from_folder": null,
  "continued_into_folder": "wb-rec-260815-2000",
  "related_issue_files": ["issue-01-both-zeros-visible-on-scroll-looks-broken.md","issue-03-zero-supporting-sentence-too-small-and-unclear.md"],
  "source_files_used": ["manifest.json","audio.json","audio.lrc","audio.srt","audio.text","audio.tsv","audio.txt","audio.vtt","audio.webm","audio_sentences.txt","console.json","events.json","index.html","pages.json","replay.spec.ts","screenshots/0000.png","screenshots/0001.png","screenshots/0002.png","screenshots/0003.png","screenshots/0004.png","screenshots/0005.png","screenshots/0006.png","screenshots/0007.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0011.png","screenshots/0012.png","screenshots/0013.png","screenshots/0014.png","screenshots/0015.png","screenshots/0016.png","screenshots/0017.png","screenshots/0018.png","screenshots/0019.png","screenshots/0020.png","screenshots/0021.png","screenshots/0022.png","screenshots/0023.png","screenshots/0024.png","screenshots/0025.png","screenshots/0026.png","screenshots/0027.png","screenshots/0028.png","screenshots/0029.png","screenshots/0030.png","screenshots/0031.png","screenshots/0032.png","screenshots/0033.png","screenshots/0034.png","screenshots/0035.png","screenshots/0036.png","screenshots/0037.png","screenshots/0038.png","screenshots/0039.png","screenshots/0040.png","screenshots/0041.png","screenshots/0042.png","screenshots/0043.png","screenshots/0044.png","screenshots/0045.png","screenshots/0046.png","screenshots/0047.png","screenshots/0048.png","screenshots/0049.png","screenshots/0050.png","screenshots/0051.png","screenshots/0052.png","screenshots/0053.png","screenshots/0054.png","screenshots/0055.png","screenshots/0056.png","screenshots/0057.png","screenshots/0058.png","screenshots/0059.png","screenshots/0060.png","screenshots/0061.png","screenshots/index.json","tabs.json","viewer.css","viewer.js"],
  "speech_clock": ["00:00:40,760 --> 00:01:41,540"],
  "event_t_ms": [62882],
  "screenshot_files": ["screenshots/0004.png","screenshots/0008.png","screenshots/0009.png","screenshots/0010.png","screenshots/0015.png","screenshots/0020.png","screenshots/0025.png"],
  "tags": ["copy","wording","trust","homepage","zero-commissions","zero-bias"],
  "quotes": [
    {"clock": "00:00:41,640","text": "when I read the word commissions, I feel, instantly as a consumer, I don't know which commission I am talking about.","artifact": "audio.srt"},
    {"clock": "00:00:52,520","text": "that is taken from me. Which commission is this?","artifact": "audio.srt"},
    {"clock": "00:01:13,380","text": "Then I feel, no, no, zero bias means, this is not going to push any bank.","artifact": "audio.srt"},
    {"clock": "00:01:22,300","text": "What does this do? It doesn't make it easy to understand.","artifact": "audio.srt"},
    {"clock": "00:01:27,580","text": "Somewhere, it should be said that either this whole section is about website and bank, or this whole section is about website and customer. It should not be mixed in the context.","artifact": "audio.srt"}
  ],
  "clicks": [
    {"t_ms": 62882, "name": "Zero commissions heading span", "css": "h2#home-zero-title > span:nth-of-type(1) > span:nth-of-type(2)"}
  ],
  "related_discussion_present": true
}
```
