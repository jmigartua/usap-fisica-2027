"""Two schematics of the loop in the two configurations of problem 2 (USaP Física 2026).

Same canvas, same axes window, same colour registry (ThesisFigures rules T1, G1, C1).
Outputs public/figures/config-I.svg and config-II.svg. Run: python3 tools/make_config_figures.py
"""
from pathlib import Path

import matplotlib
import numpy as np

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
from matplotlib.patches import FancyArrowPatch  # noqa: E402

BASE = 13
plt.rcParams.update({
    "text.usetex": True,
    "text.latex.preamble": r"\usepackage{amsmath}\usepackage{amssymb}",
    "font.family": "serif",
    "font.size": BASE,
    "svg.fonttype": "path",
})

# colour registry: one meaning, one colour
C_AXIS = "#555555"
C_LOOP = "#222222"
C_B = "#1f5fbf"       # magnetic field
C_N = "#2a9d3f"       # unit normal
C_OMEGA = "#d98a00"   # rotation
C_GHOST = "#9a9a9a"   # initial position

# oblique projection, y into the page
def P(x, y, z):
    return x + 0.45 * y, z + 0.32 * y

R = 1.0
WINDOW = dict(xlim=(-2.05, 2.75), ylim=(-1.45, 2.25))
FIGSIZE = (4.4, 3.35)

OUT = Path(__file__).resolve().parent.parent / "public" / "figures"
OUT.mkdir(parents=True, exist_ok=True)


def arrow(ax, p0, p1, color, lw=1.6, ms=11, ls="-", z=3):
    a = FancyArrowPatch(p0, p1, arrowstyle="-|>", mutation_scale=ms, color=color,
                        lw=lw, linestyle=ls, shrinkA=0, shrinkB=0, zorder=z)
    ax.add_patch(a)


def axes3d(ax):
    for (x, y, z), lab, dx, dy in [((1.9, 0, 0), r"$X$", 0.1, -0.05),
                                   ((0, 1.9, 0), r"$Y$", 0.08, 0.05),
                                   ((0, 0, 1.7), r"$Z$", -0.15, 0.08)]:
        arrow(ax, P(0, 0, 0), P(x, y, z), C_AXIS, lw=1.1, ms=9, z=1)
        u, v = P(x, y, z)
        ax.text(u + dx, v + dy, lab, color=C_AXIS, fontsize=BASE, ha="center", va="center")
    ax.text(*np.add(P(0, 0, 0), (-0.14, -0.14)), r"$O$", color=C_AXIS, fontsize=BASE - 1)


def loop_points(theta):
    """Circle of radius R in the XY plane rotated by theta about OY."""
    phi = np.linspace(0, 2 * np.pi, 200)
    x = R * np.cos(phi) * np.cos(theta)
    y = R * np.sin(phi)
    z = -R * np.cos(phi) * np.sin(theta)
    return P(x, y, z)


def field_arrows(ax, xy_list, label, sub):
    for x, y in xy_list:
        arrow(ax, P(x, y, -0.55), P(x, y, 0.95), C_B, lw=1.3, ms=9, z=2)
    ax.text(0.95, 1.66, label, color=C_B, fontsize=BASE, ha="left", va="center")
    if sub:
        ax.text(0.95, 1.40, sub, color=C_B, fontsize=BASE - 3, ha="left", va="center")


def base_figure():
    fig = plt.figure(figsize=FIGSIZE)
    ax = fig.add_axes([0.02, 0.02, 0.96, 0.96])
    ax.set(**WINDOW)
    ax.set_aspect("equal")
    ax.axis("off")
    axes3d(ax)
    return fig, ax


FIELD_POINTS = [(-0.55, -0.45), (0.45, -0.45), (-0.05, 0.55), (0.85, 0.35), (-0.9, 0.3)]


def config_I():
    fig, ax = base_figure()
    u, v = loop_points(0.0)
    ax.plot(u, v, color=C_LOOP, lw=2.0, zorder=4)
    # radius
    ax.plot(*zip(P(0, 0, 0), P(R * np.cos(-0.6), R * np.sin(-0.6), 0)), color=C_LOOP, lw=0.9, ls=":", zorder=4)
    ax.text(0.28, -0.42, r"$R$", color=C_LOOP, fontsize=BASE)
    field_arrows(ax, FIELD_POINTS, r"$\vec{B}(t) = 3t^{2}\,\hat{k}$", r"(SI)")
    arrow(ax, P(0, 0, 0), P(0, 0, 1.15), C_N, lw=2.2, ms=13, z=5)
    ax.text(*np.add(P(0, 0, 1.15), (-0.2, 0.08)), r"$\hat{n}$", color=C_N, fontsize=BASE + 1, ha="right")
    ax.text(-1.95, -1.1, r"espira fija en el plano $XY$", color=C_LOOP, fontsize=BASE - 2, ha="left")
    fig.savefig(OUT / "config-I.svg")
    plt.close(fig)


def config_II():
    fig, ax = base_figure()
    theta = np.radians(40)
    u0, v0 = loop_points(0.0)
    ax.plot(u0, v0, color=C_GHOST, lw=1.2, ls="--", zorder=3)
    ax.text(-1.95, -1.1, r"$t = 0$: espira en el plano $XY$", color=C_GHOST, fontsize=BASE - 2, ha="left")
    u, v = loop_points(theta)
    ax.plot(u, v, color=C_LOOP, lw=2.0, zorder=4)
    field_arrows(ax, FIELD_POINTS, r"$\vec{B}_{0} = 8.0\ \mathrm{mT}\,\hat{k}$", r"constante")
    # normal of the rotated loop
    n = (np.sin(theta), 0.0, np.cos(theta))
    arrow(ax, P(0, 0, 0), P(1.15 * n[0], 0, 1.15 * n[2]), C_N, lw=2.2, ms=13, z=5)
    ax.text(0.62, 1.0, r"$\hat{n}$", color=C_N, fontsize=BASE + 1, ha="right", va="bottom")
    # rotation about OY: arc in the XZ plane
    a = np.linspace(np.radians(95), np.radians(20), 60)
    ru, rv = P(1.35 * np.cos(a), 0, 1.35 * np.sin(a))
    ax.plot(ru, rv, color=C_OMEGA, lw=1.6, zorder=5)
    arrow(ax, (ru[-2], rv[-2]), (ru[-1], rv[-1]), C_OMEGA, lw=1.6, ms=12, z=5)
    ax.text(-1.95, 1.45, r"$\omega = 60\ \mathrm{rad/s}$", color=C_OMEGA, fontsize=BASE - 1, ha="left")
    ax.text(-1.95, 1.18, r"en torno a $OY$", color=C_OMEGA, fontsize=BASE - 3, ha="left")
    fig.savefig(OUT / "config-II.svg")
    plt.close(fig)


if __name__ == "__main__":
    config_I()
    config_II()
    print("wrote", OUT / "config-I.svg", OUT / "config-II.svg")
