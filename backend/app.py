from flask import Flask
from flask_login import login_required
import requests


app = Flask(__name__)

@app.route('/news')
def news():
    api = requests.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=S4NJFeH1hNVgFnWQAT8RkVhfjAJsoc5d")
    response = api.json()
    responding=response
    return {'api': responding}

@app.route('/time')
def time():
    api = requests.get("http://worldtimeapi.org/api/timezone/America/New_York")
    response = api.json()
    responding=response
    return {'time': responding}

if __name__ == "__main__":
    app.run(debug=True)