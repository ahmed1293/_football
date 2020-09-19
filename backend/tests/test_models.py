from app.models import Match, Team, TableEntry
from app.util import KickOffTime


def test_can_create_match_from_api_response():
    match = Match.parse_obj({
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
    ko_time = KickOffTime.from_utc_date(match.utc_date)
    assert match.date == ko_time.date
    assert match.time == ko_time.time
    assert match.home_team == Team(id=354, name='Crystal Palace FC')
    assert match.away_team == Team(id=328, name='Burnley FC')


def test_can_create_table_entry_from_api_response():
    table_entry = TableEntry.parse_obj({
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
    })

    assert table_entry.position == 2
    assert table_entry.team == Team(id=65, name='Manchester City FC')
    assert table_entry.played_games == 31
    assert table_entry.won == 20
    assert table_entry.draw == 3
    assert table_entry.lost == 8
    assert table_entry.goals_for == 77
    assert table_entry.goals_against == 33
    assert table_entry.goal_difference == 44
