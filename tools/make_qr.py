"""QR codes for the three presentations, as SVG.

A slide whose job is to hand three URLs to a room has to work from the back row:
the URL in readable type for anyone typing it, and a code for anyone with a
phone. Regenerate after a repository rename:

    python3 tools/make_qr.py

Dark modules on transparent, so the light card behind them supplies the quiet
zone. Error correction M: enough to survive a projector, small enough to stay
coarse and scannable at slide size.
"""
import pathlib
import qrcode
import qrcode.image.svg

BASE = "https://jmigartua.github.io/usap-fisica-2027/"
DECKS = {
    "qr-informativa": BASE,
    "qr-enunciados": BASE + "enunciados/",
    "qr-hallazgos": BASE + "hallazgos/",
}
OUT = pathlib.Path(__file__).resolve().parents[1] / "public" / "figures"

for name, url in DECKS.items():
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M,
                      box_size=10, border=0)
    q.add_data(url)
    q.make(fit=True)
    img = q.make_image(image_factory=qrcode.image.svg.SvgPathImage)
    path = OUT / f"{name}.svg"
    img.save(str(path))
    # The factory writes a fixed pixel size; a viewBox makes it scale to the slot.
    svg = path.read_text()
    svg = svg.replace('<svg ', '<svg preserveAspectRatio="xMidYMid meet" ', 1)
    path.write_text(svg)
    print(f"{name:18s} {q.modules_count}x{q.modules_count} modules  {url}")
