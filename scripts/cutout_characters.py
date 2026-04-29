#!/usr/bin/env python3
from __future__ import annotations

from io import BytesIO
from pathlib import Path
from typing import Iterable

from PIL import Image

try:
    from rembg import remove
except ImportError as exc:  # pragma: no cover
    raise SystemExit(
        "Missing dependency: rembg. Install with: pip install rembg pillow onnxruntime"
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = ROOT / "public" / "raw-cards"
OUT_DIR = ROOT / "public" / "characters"
OUTPUT_HEIGHT = 1400
VALID_CODES = {
    "STAC",
    "STAV",
    "STIC",
    "STIV",
    "SFAC",
    "SFAV",
    "SFIC",
    "SFIV",
    "MTAC",
    "MTAV",
    "MTIC",
    "MTIV",
    "MFAC",
    "MFAV",
    "MFIC",
    "MFIV",
}


def iter_raw_cards() -> Iterable[Path]:
    if not RAW_DIR.exists():
      return []
    return sorted(
        path
        for path in RAW_DIR.iterdir()
        if path.is_file() and path.stem.upper() in VALID_CODES and path.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}
    )


def preprocess(image: Image.Image) -> Image.Image:
    width, height = image.size
    left = int(width * 0.14)
    top = int(height * 0.06)
    right = int(width * 0.88)
    bottom = int(height * 0.96)
    return image.crop((left, top, right, bottom))


def cutout(path: Path) -> Image.Image:
    original = Image.open(path).convert("RGBA")
    cropped = preprocess(original)
    cropped_bytes = BytesIO()
    cropped.save(cropped_bytes, format="PNG")
    fg_bytes = remove(cropped_bytes.getvalue())
    foreground = Image.open(BytesIO(fg_bytes)).convert("RGBA")
    bbox = foreground.getbbox()
    if bbox:
        foreground = foreground.crop(bbox)

    scale = OUTPUT_HEIGHT / foreground.height
    resized = foreground.resize(
        (max(1, int(foreground.width * scale)), OUTPUT_HEIGHT),
        Image.LANCZOS,
    )

    canvas_width = max(int(OUTPUT_HEIGHT * 0.9), resized.width + 120)
    canvas = Image.new("RGBA", (canvas_width, OUTPUT_HEIGHT + 80), (0, 0, 0, 0))
    x = (canvas.width - resized.width) // 2
    y = canvas.height - resized.height - 20
    canvas.alpha_composite(resized, (x, y))

    final_bbox = canvas.getbbox()
    return canvas.crop(final_bbox) if final_bbox else canvas


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    processed = []

    for raw_card in iter_raw_cards():
        code = raw_card.stem.upper()
        result = cutout(raw_card)
        out_path = OUT_DIR / f"{code}.png"
        result.save(out_path)
        processed.append(out_path.name)

    if not processed:
        print(f"No raw cards found in {RAW_DIR}")
        return

    print("Generated transparent character PNGs:")
    for name in processed:
        print(f" - {name}")


if __name__ == "__main__":
    main()
