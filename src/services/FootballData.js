import * as axios from "axios";


export default class footballData {

  constructor(token) {
    this.token = token;
  }

  async fetchFixtures(source) {
    const url = 'https://api.football-data.org/v2/competitions/PL/matches';
    const params = {'status': 'SCHEDULED'};
    const headers = {'X-Auth-Token': this.token};

    let response = await axios.get(url, {
      params: params,
      headers: headers,
      cancelToken: source.token
    });
    return this.handleResponse(response.data)
  }

  // TODO: flag old, rescheduled, matchdays (check currentMatchDay in response)
  handleResponse(data) {
    const matches = data.matches;
    let fixtures = {};
    // split fixtures into match days
    matches.forEach(match => {
      let matchDay = match.matchday;
      !(matchDay in fixtures) && (fixtures[matchDay] = []);

      let fixture = {};
      fixture.utcDate = new Date(match.utcDate);
      fixture.home = match.homeTeam.name;
      fixture.away = match.awayTeam.name;
      fixtures[matchDay].push(fixture);
    });
    return fixtures;
  }

}

