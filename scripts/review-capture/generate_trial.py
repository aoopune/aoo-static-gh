#!/usr/bin/env python3
"""Create a short mixed-language trial session and transcribe it."""

from __future__ import annotations

import json
from pathlib import Path
from datetime import datetime, timezone

from gtts import gTTS
import numpy as np
from faster_whisper.audio import decode_audio
import wave


ROOT = Path(__file__).resolve().parents[2]
SESSION_ID = "2026-08-14T00-00-00Z-trial0"
SESSION_DIR = ROOT / "review-sessions" / SESSION_ID

SENTENCES = [
    ("en", "This Apply once button is too small on the phone."),
    ("hi", "यह फिल्टर बटन दबाने में मुश्किल है।"),
    ("mr", "हे तुलना पृष्ठ अधिक स्पष्ट हवे."),
]


def write_wav(path: Path, audio: np.ndarray, sample_rate: int = 16000) -> None:
    pcm = np.clip(audio, -1.0, 1.0)
    pcm = (pcm * 32767.0).astype(np.int16)
    with wave.open(str(path), "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(sample_rate)
        wav.writeframes(pcm.tobytes())


def main() -> None:
    SESSION_DIR.mkdir(parents=True, exist_ok=True)
    pieces = []
    pause = np.zeros(int(16000 * 0.7), dtype=np.float32)
    for lang, text in SENTENCES:
        tts = gTTS(text=text, lang=lang, slow=False)
        part = SESSION_DIR / f"part-{lang}.mp3"
        tts.save(str(part))
        pieces.append(np.asarray(decode_audio(str(part), sampling_rate=16000), dtype=np.float32))
        pieces.append(pause)
        part.unlink()
    audio = np.concatenate(pieces)
    write_wav(SESSION_DIR / "audio.wav", audio)
    mp3_path = SESSION_DIR / "audio.mp3"
    if mp3_path.exists():
        mp3_path.unlink()

    meta = {
        "id": SESSION_ID,
        "startedAt": datetime.now(timezone.utc).isoformat(),
        "initialPage": "/",
        "viewport": {"w": 1280, "h": 800},
        "userAgent": "trial-script",
    }
    (SESSION_DIR / "meta.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
    events = [
        {"t": 0, "type": "start", "url": "/"},
        {"t": 1500, "type": "click", "url": "/", "label": "Apply once", "selector": "a.apply-once"},
        {"t": 4000, "type": "mark", "url": "/", "lastClick": {"label": "Apply once", "selector": "a.apply-once"}},
        {"t": 7000, "type": "page", "url": "/pages/home-loan-compare.html"},
        {
            "t": 9000,
            "type": "mark",
            "url": "/pages/home-loan-compare.html",
            "lastClick": {"label": "Filters", "selector": "button.filters"},
        },
    ]
    (SESSION_DIR / "events.jsonl").write_text(
        "\n".join(json.dumps(ev) for ev in events) + "\n",
        encoding="utf-8",
    )
    print("Wrote trial session", SESSION_DIR)


if __name__ == "__main__":
    main()
