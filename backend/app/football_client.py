import json

import requests

from app import settings


class FootballClient:

	URL = 'https://api.football-data.org/v2/competitions'

	def __init__(self, mock_responses=False):
		self.mock_responses = mock_responses
		self._token = settings.API_TOKEN

	def get_pl_table(self):
		if self.mock_responses:
			return self._get_mock_data('mocks/pl_table.json')

		response = requests.get(
			url=f'{self.URL}/PL/standings/',
			headers={
				'X-Auth-Token': self._token
			}
		)
		return response.json()

	def get_pl_matches(self):
		if self.mock_responses:
			return self._get_mock_data('mocks/pl_matches.json')

		response = requests.get(
			url=f'{self.URL}/PL/matches/?status=SCHEDULED',
			headers={
				'X-Auth-Token': self._token
			}
		)
		return response.json()

	def _get_mock_data(self, path):
		with open(path) as _json:
			mock_data = json.load(_json)
			return mock_data
