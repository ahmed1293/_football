import re
import responses

from app import settings

API_URL_REGEX = re.compile(f'.*{settings.FOOTBALL_DATA_URL}.*')


def test_get_matches(client, mocked_responses):
    mocked_responses.add(responses.GET, API_URL_REGEX, status=200, json={
        "matches": [
            {
                "id": 264659,
                "utcDate": "2020-06-28T15:30:00Z",
                "matchday": 32,
                "homeTeam": {
                    "id": 346,
                    "name": "Watford FC"
                },
                "awayTeam": {
                    "id": 340,
                    "name": "Southampton FC"
                },
            },
            {
                "id": 264657,
                "utcDate": "2020-06-29T19:00:00Z",
                "matchday": 32,
                "homeTeam": {
                    "id": 354,
                    "name": "Crystal Palace FC"
                },
                "awayTeam": {
                    "id": 328,
                    "name": "Burnley FC"
                },
            },
            {
                "id": 264658,
                "utcDate": "2020-06-30T19:15:00Z",
                "status": "SCHEDULED",
                "matchday": 33,
                "homeTeam": {
                    "id": 397,
                    "name": "Brighton & Hove Albion FC"
                },
                "awayTeam": {
                    "id": 66,
                    "name": "Manchester United FC"
                },
            },
        ]
    })

    response = client.get('/football/PL/matches')
    assert response.status_code == 200
    data = response.json()
    assert len(data['32']) == 2
    assert len(data['33']) == 1


def test_get_table(client, mocked_responses):
    mocked_responses.add(responses.GET, API_URL_REGEX, status=200, json={
        "standings": [
            {
                "type": "TOTAL",
                "table": [
                    {
                        "position": 1,
                        "team": {
                            "id": 64,
                            "name": "Liverpool FC",
                            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
                        },
                        "playedGames": 31,
                        "won": 28,
                        "draw": 2,
                        "lost": 1,
                        "points": 86,
                        "goalsFor": 70,
                        "goalsAgainst": 21,
                        "goalDifference": 49
                    },
                    {
                        "position": 2,
                        "team": {
                            "id": 65,
                            "name": "Manchester City FC",
                            "crestUrl": "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"
                        },
                        "playedGames": 31,
                        "won": 20,
                        "draw": 3,
                        "lost": 8,
                        "points": 63,
                        "goalsFor": 77,
                        "goalsAgainst": 33,
                        "goalDifference": 44
                    },
                ]
            },
            {
                "type": "NOT_TOTAL",
                "table": []
            }
        ]
    })

    response = client.get('/football/PL/table')
    data = response.json()
    assert len(data) == 2
