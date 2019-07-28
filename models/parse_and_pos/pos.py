import sys
import pandas as pd

from pymorphy2 import MorphAnalyzer
from collections import Counter
from nltk.tokenize import TweetTokenizer

tknzr = TweetTokenizer()
morph = MorphAnalyzer()

f = open(sys.argv[1])
c = Counter()

for line in f:
    for w in tknzr.tokenize(line):
        hyp = morph.parse(w)[0]
        if 'NOUN' in hyp.tag:
            c[hyp.normal_form] += 1

print(len(c))

pd.DataFrame.from_dict(c, orient="index").reset_index().to_csv(sys.argv[2])
