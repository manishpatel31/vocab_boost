FILE = "study-statistics.html"
NAME, HINDI, KIND = "Statistics · CGL JSO", "सांख्यिकी · CGL JSO", "statistics"
import lessons1, lessons2, lessons3, lessons4
from qb import QB, sp
from rest import *
LESSONS = lessons1.L + lessons2.L + lessons3.L + lessons4.L
for c in COVERS.values(): c["rows"] = [[sp(x) for x in r] for r in c["rows"]]
