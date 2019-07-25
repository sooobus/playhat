import pymorphy2
import sys
from collections import Counter

morph = pymorphy2.MorphAnalyzer()
f = open(sys.argv[1])
c = Counter()

for line in f:
    for w in line.split(" "):
        hyp = morph.parse(w)[0]
        if 'NOUN' in hyp.tag:
            c[hyp.normal_form] += 1

print(c)
