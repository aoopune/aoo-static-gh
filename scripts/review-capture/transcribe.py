#!/usr/bin/env python3
"""Turn a saved review-capture session into timestamped text."""

from __future__ import annotations

import json
import os
import subprocess
import sys
import traceback
from pathlib import Path

import numpy as np


def write_status(session_dir: Path, state: str, **extra) -> None:
    payload = {"state": state, **extra}
    (session_dir / "status.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")


def decode_audio(path: Path) -> np.ndarray:
    from faster_whisper.audio import decode_audio as fw_decode

    audio = fw_decode(str(path), sampling_rate=16000)
    if audio.ndim > 1:
        audio = audio.mean(axis=0)
    return np.asarray(audio, dtype=np.float32)


def split_utterances(audio: np.ndarray, sample_rate: int = 16000):
    """Cut on pauses so each stretch can pick its own language."""
    frame = int(0.03 * sample_rate)
    min_silence = int(0.35 * sample_rate)
    thresh = 0.02
    rms = []
    for i in range(0, len(audio), frame):
        sl = audio[i : i + frame]
        rms.append(float(np.sqrt(np.mean(np.square(sl)))) if len(sl) else 0.0)
    silent = [v < thresh for v in rms]
    regions = []
    start = None
    silence_run = 0
    for i, is_silent in enumerate(silent):
        t = i * frame
        if not is_silent:
            if start is None:
                start = t
            silence_run = 0
        elif start is not None:
            silence_run += frame
            if silence_run >= min_silence:
                end = t - silence_run + frame
                if end - start > 0.25 * sample_rate:
                    regions.append((start, min(end, len(audio))))
                start = None
                silence_run = 0
    if start is not None and len(audio) - start > 0.25 * sample_rate:
        regions.append((start, len(audio)))
    if not regions:
        regions = [(0, len(audio))]
    for start, end in regions:
        yield start / sample_rate, audio[start:end]


def transcribe_session(session_dir: Path, model_size: str = "small") -> None:
    from faster_whisper import WhisperModel

    audio_path = None
    for name in ("audio.webm", "audio.wav", "audio.mp3", "audio.m4a"):
        candidate = session_dir / name
        if candidate.exists() and candidate.stat().st_size > 0:
            audio_path = candidate
            break
    if audio_path is None:
        write_status(session_dir, "error", message="No audio file was saved.")
        raise SystemExit("no audio")

    write_status(
        session_dir,
        "transcribing",
        message="Turning speech into text. First time downloads a language model.",
        model=model_size,
    )

    cache = Path(__file__).resolve().parent / ".models"
    cache.mkdir(exist_ok=True)
    model = WhisperModel(
        model_size,
        device="cpu",
        compute_type="int8",
        download_root=str(cache),
    )
    audio = decode_audio(audio_path)
    utterances = []
    max_n = int(18 * 16000)
    for offset, chunk in split_utterances(audio):
        if len(chunk) <= max_n:
            utterances.append((offset, chunk))
            continue
        for i in range(0, len(chunk), max_n):
            utterances.append((offset + i / 16000.0, chunk[i : i + max_n]))
    segments = []
    languages = []
    for offset, chunk in utterances:
        if float(np.sqrt(np.mean(np.square(chunk)))) < 0.004:
            continue
        segments_iter, info = model.transcribe(
            chunk,
            language=None,
            task="transcribe",
            vad_filter=False,
            beam_size=5,
            condition_on_previous_text=False,
            language_detection_segments=1,
        )
        if getattr(info, "language", None):
            languages.append(info.language)
        for seg in segments_iter:
            text = (seg.text or "").strip()
            if not text:
                continue
            segments.append(
                {
                    "start": round(offset + float(seg.start), 2),
                    "end": round(offset + float(seg.end), 2),
                    "text": text,
                    "language": getattr(info, "language", None),
                }
            )
    transcript = {
        "language": languages[0] if languages else None,
        "languages": sorted(set(languages)),
        "duration": float(len(audio) / 16000),
        "model": model_size,
        "segments": segments,
    }
    (session_dir / "transcript.json").write_text(
        json.dumps(transcript, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    lib_js = Path(__file__).resolve().parent / "build-session-md.js"
    subprocess.check_call(["node", str(lib_js), str(session_dir)])
    write_status(
        session_dir,
        "ready",
        message="Text is ready.",
        language=transcript["language"],
        segments=len(segments),
        model=model_size,
    )


def main() -> int:
    if len(sys.argv) < 2:
        print("Usage: transcribe.py <session-dir>", file=sys.stderr)
        return 2
    session_dir = Path(sys.argv[1]).resolve()
    model_size = os.environ.get("WHISPER_MODEL", "small")
    try:
        transcribe_session(session_dir, model_size=model_size)
        return 0
    except Exception as exc:
        write_status(
            session_dir,
            "error",
            message=str(exc),
            trace=traceback.format_exc()[-2000:],
        )
        raise


if __name__ == "__main__":
    raise SystemExit(main())
