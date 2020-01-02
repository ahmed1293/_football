import React, {Component} from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import {withStyles} from "@material-ui/core";
import * as axios from "axios";
import {AUTH_TOKEN} from "./_token";


const useStyles = () => ({
    scrollable: {
        maxHeight: 800,
        overflowY: 'scroll',
    }
});


class Fixtures extends Component {

    constructor(props) {
        super(props);
        this.fetchFixtures = this.fetchFixtures.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.state = {
            'fixtures': {},
        };
    }

    componentDidMount() {
        this.fetchFixtures();
    }

    async fetchFixtures() {
        const url = 'https://api.football-data.org/v2/competitions/PL/matches';
        const params = {'status': 'SCHEDULED'};
        const headers = {'X-Auth-Token': AUTH_TOKEN,};
        let response = await axios.get(url, {
            params: params,
            headers: headers
        });
        this.handleResponse(response.data);
    }

    handleResponse(data) {
        const matches = data.matches;
        let fixtures = {};
        matches.forEach(match => {
            let matchDay = match.matchday;
            !(matchDay in fixtures) && (fixtures[matchDay] = {});

            let fixture = {};
            fixture.utcDate = match.utcDate;
            fixture.home = match.homeTeam.name;
            fixture.away = match.awayTeam.name;
            fixtures[matchDay][match.id] = fixture;
        });
        this.setState({fixtures: fixtures});
    }

    render() {
        const {classes} = this.props;

        return <div>
            <List className={classes.scrollable}>
                {Object.keys(this.state.fixtures).map(
                    matchDay =>
                        <MatchDay
                            date={`Matchday ${matchDay}`}
                            fixtures={this.state.fixtures[matchDay]}
                            filters={this.props.filters}
                            key={matchDay}
                        />
                )}
            </List>
        </div>
    }
}

export default withStyles(useStyles)(Fixtures);