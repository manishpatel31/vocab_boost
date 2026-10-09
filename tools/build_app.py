"""Build a chapter app (study-*.html) from its data in tools/apps/<name>/.

    python3 tools/build_app.py clock

Each app folder has an app.py that sets FILE, NAME, HINDI, KIND and imports
LESSONS, QB, HEAT, TILES, PAIRS, COVERS, FIND and APP from its other files.
The page itself is study-trigonometry.html with its data block swapped out; the shared
engine and look come from study-core.js and study-core.css.
"""
import json, os, sys

TOOLS = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(TOOLS)
TEMPLATE = "study-trigonometry.html"


def build(name):
    folder = os.path.join(TOOLS, "apps", name)
    sys.path[:0] = [folder, os.path.join(TOOLS, "lib")]
    import app as A

    L = A.LESSONS
    assert [l["id"] for l in L] == ["L%d" % i for i in range(1, len(L) + 1)], "lesson ids must be L1, L2, …"
    ids = {l["id"] for l in L}
    assert all(q[0] in ids for q in A.QB), "a question points to a missing lesson"
    assert all(h[2] in ids for h in A.HEAT), "a HEAT row points to a missing lesson"
    assert all(r[2] in ids for r in A.FIND["rows"]), "a FIND row points to a missing lesson"
    texts = [q[1] for q in A.QB]
    dup = {t for t in texts if texts.count(t) > 1}
    assert not dup, "repeated question text (ids would clash): %s" % list(dup)[:3]

    J = lambda o: json.dumps(o, ensure_ascii=False)
    out = ["const LESSONS = [", ",\n".join(J(l) for l in L), "//@@L\n];",
           "const QB = [", ",\n".join(J(q) for q in A.QB), "//@@Q\n];"]
    for k in ("HEAT", "TILES", "PAIRS", "COVERS", "FIND", "APP"):
        out.append("const %s = %s;" % (k, J(getattr(A, k))))
    data = "\n".join(out) + "\n"

    src = open(os.path.join(ROOT, TEMPLATE), encoding="utf8").read()
    a = src.index("const LESSONS = [")
    b = src.index('</script>\n<script src="study-core.js')
    html = src[:a] + data + src[b:]
    html = html.replace("<title>Trigonometry</title>", "<title>%s</title>" % A.NAME)
    html = html.replace('<div class="brand">Trigonometry<small>त्रिकोणमिति · SSC maths workbook</small></div>',
                        '<div class="brand">%s<small>%s · SSC %s workbook</small></div>' % (A.NAME, A.HINDI, A.KIND))
    assert "त्रिकोणमिति" not in html, "template title was not replaced"
    open(os.path.join(ROOT, A.FILE), "w", encoding="utf8").write(html)
    print("%s: %d lessons, %d questions, %d KB" % (A.FILE, len(L), len(A.QB), len(html.encode()) // 1024))


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: python3 tools/build_app.py <app folder in tools/apps>")
    build(sys.argv[1])
