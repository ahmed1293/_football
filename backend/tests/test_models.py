from app.models import Match, Team


def test_can_create_match_from_api_response():
    match = Match.from_api_matchday_obj(match_data={
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
    })

    assert match.id == 264657
    assert match.date == 'Monday 29 June 2020'
    assert match.time == '19:00'
    assert match.home == Team(id=354, name='Crystal Palace FC')
    assert match.away == Team(id=328, name='Burnley FC')
