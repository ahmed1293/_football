import json
import re

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
