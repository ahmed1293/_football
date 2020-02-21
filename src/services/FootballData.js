import * as axios from "axios";
import {AUTH_TOKEN} from "../_token";


export async function fetchFixtures(source) {
  const url = 'https://api.football-data.org/v2/competitions/PL/matches';
  const params = {'status': 'SCHEDULED'};
  const headers = {'X-Auth-Token': AUTH_TOKEN};

  let response = await axios.get(url, {
    params: params,
    headers: headers,
    cancelToken: source.token
  });

  // TODO: flag old, rescheduled, matchdays (check currentMatchDay in response)
  const matches = response.data.matches;
  let fixtures = {};
  // split fixtures into match days
  matches.forEach(match => {
    let matchDay = match['matchday'];
    !(matchDay in fixtures) && (fixtures[matchDay] = []);

    let fixture = {};
    fixture.utcDate = new Date(match.utcDate);
    fixture.home = match['homeTeam'].name;
    fixture.away = match['awayTeam'].name;
    fixtures[matchDay].push(fixture);
  });
  return fixtures;
}

export async function fetchStandings(source) {
  const url = 'https://api.football-data.org/v2/competitions/PL/standings';
  const headers = {'X-Auth-Token': AUTH_TOKEN};

  let response = await axios.get(url, {
    headers: headers,
    cancelToken: source.token
  });

  const standings = response.data['standings'];
  const total = standings.filter(s => s.type === "TOTAL")[0];

  return total.table;
}


