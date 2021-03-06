from typing import Dict, List

from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.football_client import FootballClient
from app.models import Match, TableEntry

app = FastAPI()

app.add_middleware(
	CORSMiddleware,
	allow_origins=["http://localhost:3000"],
	allow_credentials=True,
	allow_methods=["GET"],
	allow_headers=["*"],
)


@app.get('/')
def home():
	return {
		"author": "Ahmed Al-Jawahiry",
		"app": "_football",
		"description": "info i care about for teams i care about"
	}


@app.get('/football/PL/matches', response_model=Dict[str, Dict[str, List[Match]]])
def matches():
	client = FootballClient()
	data = client.get_pl_matches()

	matchdays = {}

	for match_obj in data['matches']:
		match = Match.parse_obj(match_obj)

		if match.matchday not in matchdays:
			matchdays[match.matchday] = {}

		if match.date not in matchdays[match.matchday]:
			matchdays[match.matchday][match.date] = []

		matchdays[match.matchday][match.date].append(match)
	return matchdays


@app.get('/football/PL/table', response_model=List[TableEntry])
def table():
	client = FootballClient()
	data = client.get_pl_table()

	# possible to get home/away tables, but we want total
	total_table = [_table for _table in data['standings'] if _table['type'] == 'TOTAL'][0]['table']
	return [TableEntry.parse_obj(entry) for entry in total_table]
