import React, {Component} from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";


const useStyles = () => ({
    margins: {
        marginBottom: 10,
        marginTop: 10,
        maxWidth: 800
    },

    scrollable: {
        maxHeight: 800,
        overflowY: 'scroll',
    }
});


const RESPONSE = [
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
    {home: 'Norwich FC', away: 'Sheffield United FC', time: '17:30'},
];


class Fixtures extends Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
        this.filterFixture = this.filterFixture.bind(this);
        this.fixtures = RESPONSE;
        this.state = {
            'filteredFixtures': this.fixtures
        };
    }

    componentDidMount() {
        // fetch fixtures
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const searchChanges = prevProps.filters.search !== this.props.filters.search ;
        const listChanges = prevProps.filters.teams.length !== this.props.filters.teams.length;
        if (searchChanges || listChanges) {
            this.filter();
        }
    }

    filter() {
        const teamFilters = [...this.props.filters.teams];

        if (!teamFilters.length && !this.props.filters.search) {
            this.setState({filteredFixtures: this.fixtures});
            return
        }

        teamFilters.push(this.props.filters.search);
        const filteredFixtures = this.fixtures.filter(
            fixture => this.filterFixture(fixture, teamFilters)
        );
        this.setState({filteredFixtures: filteredFixtures});
    }

    filterFixture(fixture, teams) {
        return teams.find(
            filter => {
                const home = fixture.home.toLowerCase();
                const away = fixture.away.toLowerCase();
                const filterLower = filter.toLowerCase();
                return home.includes(filterLower) || away.includes(filterLower)
            }
        );
    }

    render() {
        const {classes} = this.props;

        return <div>
            <List className={classes.scrollable}>
                <Divider className={classes.margins} />
                <MatchDay date='12/09/1993' fixtures={this.state.filteredFixtures}/>
                <Divider className={classes.margins} />
                <MatchDay date='11/09/1993' fixtures={this.state.filteredFixtures}/>
            </List>
        </div>
    }
}

export default withStyles(useStyles)(Fixtures);