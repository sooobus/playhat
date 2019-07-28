import pandas as pd
import numpy as np

class Words:
    def __init__(self, csv_filename):
        self.df = pd.read_csv(csv_filename,
                              names=["index", "word", "freq", "good"],
                              index_col="index")
        self.df = self.df[self.df["good"] == 1]

    def size(self):
        return self.df.shape[0]

    def get_random(self, n):
        return list(np.random.choice(self.df.word, n))
