import requests

from app import settings
from app.util import respond_if_local


class FootballClient:
	URL = 'https://api.football-data.org/v2/competitions'

	def __init__(self):
		self._token = settings.API_TOKEN

	@respond_if_local(mock_data_path='mocks/pl_table.json')
	def get_pl_table(self):
		response = requests.get(
			url=f'{self.URL}/PL/standings/',
			headers={
				'X-Auth-Token': self._token
			}
		)
		return response.json()

	@respond_if_local(mock_data_path='mocks/pl_matches.json')
	def get_pl_matches(self):
		response = requests.get(
			url=f'{self.URL}/PL/matches/?status=SCHEDULED',
			headers={
				'X-Auth-Token': self._token
			}
		)
		return response.json()
