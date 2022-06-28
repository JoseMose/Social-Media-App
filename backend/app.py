from typing_extensions import Required
from flask import Flask, appcontext_popped

app = Flask(__name__)

@app.route('/main')
def main_page():
    Hello = "Hello World!"
    return Hello


app.run()