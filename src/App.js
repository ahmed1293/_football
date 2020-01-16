import React, {useState} from 'react';
import {Box, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "./themes";
import Filters from "./Filters";
import Search from "./Search";
import Fixtures from "./Fixtures";
import * as constant from "./constants";



export default function App() {

    const [filters, setFilters] = useState({
        search: '',
        teams: constant.ALL_TEAMS
    });

    function addTeamFilter(team) {
        let filteredTeams = [...filters.teams];
        filteredTeams.push(team);
        const search = filters.search;
        setFilters({search: search, teams: filteredTeams});
    }

    function addAllTeamFilters() {
        const search = filters.search;
        setFilters({search: search, teams: constant.ALL_TEAMS});
    }

    function removeTeamFilter(team) {
        let filteredTeams = [...filters.teams];
        const search = filters.search;
        setFilters({
            search: search,
            teams: filteredTeams.filter(val => val !== team)
        });
    }

    function removeAllTeamFilters() {
        const search = filters.search;
        setFilters({search: search, teams: []});
    }

    function updateSearchText(text) {
        setFilters({search: text, teams: filters.teams});
    }

    let allFilters = [...filters.teams];
    if (filters.search.length > 0) {
        allFilters.push(filters.search);
    }

    return <ThemeProvider theme={darkTheme}>
        <div className="App" align="center">
            <Box width="60%">
                <Typography variant="h3" align="center" color="primary" gutterBottom>_football</Typography>

                <Filters addFilter={addTeamFilter} removeFilter={removeTeamFilter}
                         addAll={addAllTeamFilters} removeAll={removeAllTeamFilters}/>

                <Search addFilter={updateSearchText}/>

                <Fixtures filters={allFilters}/>
            </Box>
        </div>
    </ThemeProvider>;
}

