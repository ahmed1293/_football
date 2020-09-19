import calendar
import json
import re
import time
from dataclasses import dataclass

from app import settings


def respond_if_local(mock_data_path: str):
	def decorator(function):
		def wrapper(*args, **kwargs):
			if settings.LOCAL:
				with open(mock_data_path) as data:
					mock_data = json.load(data)
					return mock_data
			return function(*args, **kwargs)

		return wrapper

	return decorator


def to_camel(string: str) -> str:
	return re.sub(r'_([a-z])', lambda m: m.group(1).upper(), string)


@dataclass
class KickOffTime:
	date: str
	time: str

	@classmethod
	def from_utc_date(cls, utc_date: str):
		utc_dt = time.strptime(utc_date, '%Y-%m-%dT%H:%M:%SZ')
		utc_seconds = calendar.timegm(utc_dt)
		local_dt = time.localtime(utc_seconds)

		local_date = time.strftime('%A %d %B %Y', local_dt)
		local_time = time.strftime('%H:%M', local_dt)
		return cls(date=local_date, time=local_time)
