from urllib import response
from flask import Flask, render_template
import requests
from sqlalchemy import true
import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

app = Flask(__name__)

@app.route('/main')
def main():
    api = requests.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=S4NJFeH1hNVgFnWQAT8RkVhfjAJsoc5d")
    response = api.json()
    responding=response
    return {'api': responding}

@app.route('/time')
def hello():
    api = requests.get("http://worldtimeapi.org/api/timezone/America/New_York")
    response = api.json()
    responding=response
    return {'time': responding}

app.run(debug=true)