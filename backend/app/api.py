from datetime import datetime

import requests
from fastapi import FastAPI

from app import settings

app = FastAPI()


@app.get('/')
def home():
    return {
        "author": "Ahmed Al-Jawahiry",
        "app": "_football",
        "description": "info i care about for teams i care about"
    }


@app.get('/football/PL/matches')
def matches():
    response = requests.get(
        url=f'{settings.FOOTBALL_DATA_URL}/PL/matches/?status=SCHEDULED',
        headers={
            'X-Auth-Token': settings.API_TOKEN
        }
    )
    data = response.json()
    match_days = {}
    for match_day in data['matches']:
        match_day_no = match_day['matchday']
        if match_day_no not in match_days:
            match_days[match_day_no] = []
        _datetime = datetime.strptime(match_day['utcDate'], '%Y-%m-%dT%H:%M:%SZ')
        match_days[match_day_no].append({
            'date': _datetime.strftime('%A %d %B %Y'),
            'time': _datetime.strftime('%H:%M'),
            'home': match_day['homeTeam'],
            'away': match_day['awayTeam'],
        })
    return match_days
