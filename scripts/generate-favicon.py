#!/usr/bin/env python3
"""Generate favicon.ico and apple-icon.png from icon.svg."""

from pathlib import Path

from PIL import Image, ImageDraw

PRIMARY = "#0D4F3C"
ACCENT = "#E8A838"
SIZE = 512


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def draw_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    primary = hex_to_rgb(PRIMARY)
    accent = hex_to_rgb(ACCENT)
    radius = int(size * 0.1875)
    pad = int(size * 0.06)

    draw.rounded_rectangle((pad, pad, size - pad, size - pad), radius=radius, fill=primary)

    scale = size / 512
    box_left = int(96 * scale)
    box_top = int(176 * scale)
    box_right = int(320 * scale)
    box_bottom = int(352 * scale)
    box_radius = max(2, int(16 * scale))
    stroke = max(2, int(28 * scale))

    draw.rounded_rectangle(
        (box_left, box_top, box_right, box_bottom),
        radius=box_radius,
        outline=accent,
        width=stroke,
    )

    peak_x = int(208 * scale)
    peak_y = int(96 * scale)
    draw.line(
        [(box_left, box_top), (peak_x, peak_y), (box_right, box_top)],
        fill=accent,
        width=stroke,
    )
    draw.line([(peak_x, peak_y), (peak_x, box_top)], fill=accent, width=stroke)

    arrow_y = int(256 * scale)
    arrow_start = int(360 * scale)
    arrow_end = int(432 * scale)
    arrow_tip = int(396 * scale)
    arrow_wing = int(36 * scale)

    draw.line([(arrow_start, arrow_y), (arrow_end, arrow_y)], fill=accent, width=stroke)
    draw.line(
        [(arrow_tip, arrow_y - arrow_wing), (arrow_end, arrow_y), (arrow_tip, arrow_y + arrow_wing)],
        fill=accent,
        width=stroke,
    )

    return img


def main() -> None:
    app_dir = Path(__file__).resolve().parents[1] / "src" / "app"
    icon = draw_icon(SIZE)

    apple = icon.resize((180, 180), Image.Resampling.LANCZOS)
    apple.save(app_dir / "apple-icon.png", format="PNG")

    icon32 = icon.resize((32, 32), Image.Resampling.LANCZOS)
    icon16 = icon.resize((16, 16), Image.Resampling.LANCZOS)
    icon32.save(app_dir / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32)])
    icon32.save(app_dir / "icon.png", format="PNG")

    print(f"Generated favicon assets in {app_dir}")


if __name__ == "__main__":
    main()
