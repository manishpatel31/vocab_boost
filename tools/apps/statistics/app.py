FILE = "study-statistics.html"
NAME, HINDI, KIND = "Statistics · CGL JSO", "सांख्यिकी · CGL JSO", "statistics"
from lessons1 import L as L1
from lessons2 import L as L2
from lessons3 import L as L3
from qb import QB, sp
from rest import *
LESSONS = L1 + L2 + L3
for c in COVERS.values(): c["rows"] = [[sp(x) for x in r] for r in c["rows"]]
