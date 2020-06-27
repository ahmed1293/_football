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
    assert data['32'] == [
        {
            'date': 'Sunday 28 June 2020',
            'time': '15:30',
            'home': {"id": 346, "name": "Watford FC"},
            'away': {"id": 340, "name": "Southampton FC"}
        },
        {
            'date': 'Monday 29 June 2020',
            'time': '19:00',
            'home': {"id": 354, "name": "Crystal Palace FC"},
            'away': {"id": 328, "name": "Burnley FC"}
        },
    ]
    assert data['33'] == [
        {
            'date': 'Tuesday 30 June 2020',
            'time': '19:15',
            'home': {"id": 397, "name": "Brighton & Hove Albion FC"},
            'away': {"id": 66, "name": "Manchester United FC"}
        }
    ]
