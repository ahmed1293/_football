from datetime import datetime
from typing import Dict, List

import requests
from fastapi import FastAPI

from app import settings
from app.models import Match, Team

app = FastAPI()


@app.get('/')
def home():
    return {
        "author": "Ahmed Al-Jawahiry",
        "app": "_football",
        "description": "info i care about for teams i care about"
    }


@app.get('/football/PL/matches', response_model=Dict[str, List[Match]])
def matches():
    response = requests.get(
        url=f'{settings.FOOTBALL_DATA_URL}/PL/matches/?status=SCHEDULED',
        headers={
            'X-Auth-Token': settings.API_TOKEN
        }
    )
    data = response.json()
    match_days = {}
    for match in data['matches']:
        match_day = match['matchday']
        if match_day not in match_days:
            match_days[match_day] = []
        match_days[match_day].append(Match.from_api_matchday_obj(match))
    return match_days
