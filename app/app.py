from flask import Flask, render_template

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

words = ['слова', 'из', 'фласка']

@app.route('/')
def play_hat():
    return render_template('index.html', words=words)
