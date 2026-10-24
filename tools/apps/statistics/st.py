# Helpers for the Statistics question bank and lessons: the Q() checker, number formatting and
# the statistics every numeric question is computed with (standard library only).
import math, re
from decimal import Decimal, ROUND_HALF_UP
from fractions import Fraction
from itertools import combinations, permutations, product
from statistics import NormalDist
from mathlib import sp

QB = []
_HY = 0


def Q(l, q, o, e, chk=None, hy=False):
    """o[0] is the right answer; '@' = fill it from chk. chk (if given) must equal o[0].
    hy=True marks a high-yield question (shown as a tag and a Practice filter)."""
    o = [str(x) for x in o]
    if o[0] == '@':
        assert chk is not None, q
        o[0] = str(chk)
    elif chk is not None:
        assert str(chk) == o[0], (q, chk, o[0])
    assert len(o) == 4 and len(set(o)) == 4, (q, o)
    assert all(x.strip() for x in o), (q, o)
    row = [l, sp(q), [sp(x) for x in o], sp(e)]
    if hy: row.append("p")
    QB.append(row)


def fmt(x, d=2):
    """Round half-up to d decimals and drop trailing zeros: 12.50 -> 12.5, 3.00 -> 3."""
    if isinstance(x, Fraction): x = Decimal(x.numerator) / Decimal(x.denominator)
    v = Decimal(repr(x) if isinstance(x, float) else str(x)).quantize(Decimal(1).scaleb(-d), rounding=ROUND_HALF_UP)
    s = format(v, "f")
    if "." in s: s = s.rstrip("0").rstrip(".")
    if s in ("-0", ""): s = "0"
    return s.replace("-", "−")


def fx(x, d=2):
    """Fixed decimals (keeps trailing zeros): 0.5 -> 0.50."""
    if isinstance(x, Fraction): x = Decimal(x.numerator) / Decimal(x.denominator)
    v = Decimal(repr(x) if isinstance(x, float) else str(x)).quantize(Decimal(1).scaleb(-d), rounding=ROUND_HALF_UP)
    return format(v, "f").replace("-", "−")


def Fr(a, b=1):
    f = Fraction(a, b) if not isinstance(a, Fraction) else a / b
    return str(f.numerator) if f.denominator == 1 else "%d/%d" % (f.numerator, f.denominator)


F = Fraction

# ---------- descriptive ----------
def mean(x, w=None):
    if w is None: return F(sum(F(v) for v in x), len(x))
    return F(sum(F(a) * b for a, b in zip(x, w)), sum(w))


def median(x):
    s = sorted(x); n = len(s)
    return F(s[n // 2]) if n % 2 else F(s[n // 2 - 1] + s[n // 2], 2)


def mode(x):
    c = {v: x.count(v) for v in x}; m = max(c.values())
    r = [v for v in c if c[v] == m]
    assert len(r) == 1, "no single mode"
    return r[0]


def pvar(x, w=None):
    m = mean(x, w)
    if w is None: return sum((F(v) - m) ** 2 for v in x) / len(x)
    return sum(b * (F(a) - m) ** 2 for a, b in zip(x, w)) / sum(w)


def svar(x):
    m = mean(x); return sum((F(v) - m) ** 2 for v in x) / (len(x) - 1)


def sd(v): return math.sqrt(v)


def gm(x): return math.prod(x) ** (1 / len(x))


def hm(x, w=None):
    if w is None: return F(len(x)) / sum(F(1, 1) / F(v) for v in x)
    return F(sum(w)) / sum(F(b) / F(a) for a, b in zip(x, w))


def md(x, about=None):
    a = mean(x) if about is None else F(about)
    return sum(abs(F(v) - a) for v in x) / len(x)


def grouped_mid(lo, h, k): return [lo + h * i + F(h, 2) for i in range(k)]


def g_median(L, h, f, cf, N):
    """L + (N/2 − cf)/f × h"""
    return F(L) + (F(N, 2) - cf) / F(f) * h


def g_mode(L, h, f1, f0, f2):
    return F(L) + F(f1 - f0, 2 * f1 - f0 - f2) * h


def g_part(L, h, f, cf, pos):
    return F(L) + (F(pos) - cf) / F(f) * h


def moments_about(x, a, r): return sum((F(v) - a) ** r for v in x) / len(x)


# ---------- correlation and regression ----------
def cov(x, y):
    mx, my = mean(x), mean(y)
    return sum((F(a) - mx) * (F(b) - my) for a, b in zip(x, y)) / len(x)


def pearson(x, y): return float(cov(x, y)) / math.sqrt(pvar(x) * pvar(y))


def ranks(x):
    """average ranks, rank 1 = largest"""
    s = sorted(x, reverse=True); r = []
    for v in x:
        pos = [i + 1 for i, t in enumerate(s) if t == v]
        r.append(F(sum(pos), len(pos)))
    return r


def spearman_d2(rx, ry): return sum((F(a) - F(b)) ** 2 for a, b in zip(rx, ry))


def spearman(rx, ry, cf=0):
    n = len(rx); return 1 - 6 * (spearman_d2(rx, ry) + cf) / F(n * (n * n - 1))


def tie_cf(x):
    c = {}
    for v in x: c[v] = c.get(v, 0) + 1
    return sum(F(m ** 3 - m, 12) for m in c.values() if m > 1)


def byx(x, y): return cov(x, y) / pvar(x)


def bxy(x, y): return cov(x, y) / pvar(y)


# ---------- probability ----------
def C(n, r): return math.comb(n, r)


def binom(n, p, k): return C(n, k) * p ** k * (1 - p) ** (n - k)


def poisson(m, k): return math.exp(-m) * m ** k / math.factorial(k)


N01 = NormalDist()
def Phi(z): return N01.cdf(z)


# ---------- time series and index numbers ----------
def mov_avg(x, k):
    return [F(sum(x[i:i + k]), k) for i in range(len(x) - k + 1)]


def centred(x, k):
    m = mov_avg(x, k); return [(m[i] + m[i + 1]) / 2 for i in range(len(m) - 1)]


def lsq(t, y):
    """least squares y = a + b t"""
    n = len(t); mt, my = mean(t), mean(y)
    b = sum((F(a) - mt) * (F(c) - my) for a, c in zip(t, y)) / sum((F(a) - mt) ** 2 for a in t)
    return my - b * mt, b


def laspeyres(p0, p1, q0): return F(sum(F(a) * c for a, c in zip(p1, q0)), sum(F(a) * c for a, c in zip(p0, q0))) * 100


def paasche(p0, p1, q1): return F(sum(F(a) * c for a, c in zip(p1, q1)), sum(F(a) * c for a, c in zip(p0, q1))) * 100


def fisher(p0, p1, q0, q1): return math.sqrt(laspeyres(p0, p1, q0) * paasche(p0, p1, q1))
