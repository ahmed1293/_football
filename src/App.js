import React, {Component} from 'react';
import {Box, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "./themes";
import Filters from "./Filters";
import Search from "./Search";
import Fixtures from "./Fixtures";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: {
                search: '',
                teams: []
            },
        };
        this.addTeamFilter = this.addTeamFilter.bind(this);
        this.removeTeamFilter = this.removeTeamFilter.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    addTeamFilter(team) {
        let filteredTeams = [...this.state.filters.teams];
        filteredTeams.push(team);
        const search = this.state.filters.search;
        this.setState({filters: {
            search: search,
            teams: filteredTeams
        }});
    }

    removeTeamFilter(team) {
        let filteredTeams = [...this.state.filters.teams];
        const search = this.state.filters.search;
        this.setState({filters: {
            search: search,
            teams: filteredTeams.filter(val => val !== team)
        }});
    }

    updateSearchText(text) {
        this.setState({filters: {
            search: text,
            teams: this.state.filters.teams
        }});
    }

    render() {
        let allFilters = [...this.state.filters.teams];
        if (this.state.filters.search.length > 0) {
            allFilters.push(this.state.filters.search);
        }

        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App" align="center">
                    <Box width="60%">
                        <Typography variant="h3" align="center" color="primary" gutterBottom>_football</Typography>

                        <Filters addFilter={this.addTeamFilter} removeFilter={this.removeTeamFilter}/>

                        <Search addFilter={this.updateSearchText}/>

                        <Fixtures filters={allFilters}/>
                    </Box>
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
