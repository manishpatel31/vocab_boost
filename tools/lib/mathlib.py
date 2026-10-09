# Maths helpers for the question generators (primes, factors, remainders, bases …)
import math, re
from fractions import Fraction
from itertools import combinations
SUP = str.maketrans('0123456789+-−()n', '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁻⁽⁾ⁿ')
def sp(s):
    """a^b → aᵇ for plain-text questions (b = digits, n, or (…) with digits/n/+/-)."""
    return re.sub(r'\^(\([0-9n+\-−]+\)|[0-9n]+)', lambda m: m.group(1).strip('()').translate(SUP) if m.group(1).startswith('(') else m.group(1).translate(SUP), s)
def factorize(n):
    f = {}; d = 2
    while d * d <= n:
        while n % d == 0: f[d] = f.get(d, 0) + 1; n //= d
        d += 1
    if n > 1: f[n] = f.get(n, 0) + 1
    return f
def divisors(n): return [d for d in range(1, n + 1) if n % d == 0]
def isprime(n): return n > 1 and all(n % d for d in range(2, int(n ** .5) + 1))
def primes(a, b): return [p for p in range(a, b + 1) if isprime(p)]
def ndiv(n): return len(divisors(n))
def sigma(n): return sum(divisors(n))
def phi(n): return sum(1 for k in range(1, n + 1) if math.gcd(k, n) == 1)
def vp(n, p):  # power of prime p in n!
    s, q = 0, p
    while q <= n: s += n // q; q *= p
    return s
def zeros_fact(n): return vp(n, 5)
def digits_used(N): return sum(len(str(k)) for k in range(1, N + 1))
def base(n, b):
    d = '0123456789ABCDEF'; s = ''
    while n: s = d[n % b] + s; n //= b
    return s or '0'
def lcm(*a):
    r = 1
    for x in a: r = r * x // math.gcd(r, x)
    return r
