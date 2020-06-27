from __future__ import annotations
from datetime import datetime
from typing import Any, Optional

from pydantic.main import BaseModel, BaseConfig

from app.util import to_camel


class Team(BaseModel):
    id: int
    name: str


class Match(BaseModel):
    id: int
    utc_date: str
    date: Optional[str]
    time: Optional[str]
    home_team: Team
    away_team: Team

    @classmethod
    def parse_obj(cls: Match, obj: Any) -> Match:
        match: Match = super().parse_obj(obj)
        if not match.date or not match.time:  # the api response parsed doesn't contain these fields
            _dt = datetime.strptime(match.utc_date, '%Y-%m-%dT%H:%M:%SZ')
            match.date = _dt.strftime('%A %d %B %Y')
            match.time = _dt.strftime('%H:%M')
        return match

    class Config(BaseConfig):
        alias_generator = to_camel


class TableEntry(BaseModel):
    position: int
    team: Team
    played_games: int
    won: int
    draw: int
    lost: int
    points: int
    goals_for: int
    goals_against: int
    goal_difference: int

    class Config(BaseConfig):
        alias_generator = to_camel  # useful for calling parse_obj on an api response
