from __future__ import annotations

from typing import Any, Optional

from pydantic.main import BaseModel, BaseConfig

from app.util import to_camel, KickOffTime


class Team(BaseModel):
	id: int
	name: str


class Match(BaseModel):
	id: int
	utc_date: str
	matchday: int
	date: Optional[str]
	time: Optional[str]
	home_team: Team
	away_team: Team

	@classmethod
	def parse_obj(cls: Match, obj: Any) -> Match:
		match: Match = super().parse_obj(obj)
		ko_time = KickOffTime.from_utc_date(match.utc_date)
		match.date = ko_time.date
		match.time = ko_time.time
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
