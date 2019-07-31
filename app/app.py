from flask import Flask, render_template
from model.words import Words

# Set up custom delimiters to avoid Vue.js conflict.
class CustomFlask(Flask):
  jinja_options = Flask.jinja_options.copy()
  jinja_options.update(dict(
    block_start_string='(%',
    block_end_string='%)',
    variable_start_string='((',
    variable_end_string='))',
    comment_start_string='(#',
    comment_end_string='#)',
  ))

app = CustomFlask(__name__)

word_gen = Words("model/word_lists/onegin.csv")


@app.route('/')
def play_hat():
    return render_template('index.html', words=word_gen.get_random(500), words_num=word_gen.size())
