"""QR codes for every published deck, as SVG.

A slide whose job is to hand URLs to a room has to work from the back row: the
URL in readable type for anyone typing it, and a code for anyone with a phone.

Nothing about this project is written here. The decks, their order and the site
address all come from decks.json, under the same rule the build uses: the first
deck that is not a draft takes the site root, the rest hang off it at
/<file without .md>/. Reorder decks.json and rerun:

    python3 tools/make_qr.py

The system Python refuses to install `qrcode` (PEP 668), so this needs a venv:

    python3 -m venv .venv && .venv/bin/pip install qrcode
    .venv/bin/python tools/make_qr.py

Dark modules on transparent, so the light card behind them supplies the quiet
zone. Error correction M: enough to survive a projector, small enough to stay
coarse and scannable at slide size.
"""
import json
import pathlib

import qrcode
import qrcode.image.svg

ROOT = pathlib.Path(__file__).resolve().parents[1]
MANIFEST = json.loads((ROOT / "decks.json").read_text(encoding="utf-8"))

site = MANIFEST.get("site", {})
BASE = site.get("baseUrl")
if not BASE:
    owner, repo = site.get("owner", ""), site.get("repo", "")
    BASE = f"https://{owner}.github.io/{repo}/"
if not BASE.endswith("/"):
    BASE += "/"

# Same rule as tools/build_all.mjs: index 0 owns the root.
published = [d for d in MANIFEST["decks"] if not d.get("draft")]
DECKS = {}
for i, deck in enumerate(published):
    name = deck["out"].removesuffix(".md")
    DECKS[f"qr-{name}"] = BASE if i == 0 else f"{BASE}{name}/"

OUT = ROOT / "public" / "figures"
OUT.mkdir(parents=True, exist_ok=True)

for name, url in DECKS.items():
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M,
                      box_size=10, border=0)
    q.add_data(url)
    q.make(fit=True)
    img = q.make_image(image_factory=qrcode.image.svg.SvgPathImage)
    img.save(str(OUT / f"{name}.svg"))
    print(f"{name:<18} {q.modules_count}x{q.modules_count} modules  {url}")

print(f"\n{len(DECKS)} códigos en {OUT.relative_to(ROOT)}")
