from datetime import datetime

from pydantic.main import BaseModel


class Team(BaseModel):
    id: int
    name: str


class Match(BaseModel):
    id: int
    date: str
    time: str
    home: Team
    away: Team

    @classmethod
    def from_api_matchday_obj(cls, match_data: dict):
        _datetime = datetime.strptime(match_data['utcDate'], '%Y-%m-%dT%H:%M:%SZ')
        return cls(
            id=match_data['id'],
            date=_datetime.strftime('%A %d %B %Y'),
            time=_datetime.strftime('%H:%M'),
            home=Team(**match_data['homeTeam']),
            away=Team(**match_data['awayTeam'])
        )
