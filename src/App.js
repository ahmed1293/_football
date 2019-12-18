import React, {Component} from 'react';
import {Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "./themes";
import Filters from "./Filters";
import Search from "./Search";
import Fixtures from "./Fixtures";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filteredTeams: [],
            searchText: ''
        };
        this.addTeamFilter = this.addTeamFilter.bind(this);
        this.removeTeamFilter = this.removeTeamFilter.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
    }

    addTeamFilter(team) {
        let filteredTeams = this.state.filteredTeams;
        filteredTeams.push(team);
        this.setState({filteredTeams: filteredTeams});
        console.log(`added ${team}`);
    }

    removeTeamFilter(team) {
        let filteredTeams = this.state.filteredTeams;
        this.setState({filteredTeams: filteredTeams.filter(val => val !== team)});
        console.log(`removed ${team}`);
    }

    updateSearchText(text) {
        this.setState({searchText: text});
        console.log(`search text: ${text}`);
    }

    render() {
        return (
            <ThemeProvider theme={darkTheme}>
                <div className="App" align="center">
                    <Typography variant="h3" align="center" color="primary" gutterBottom>_football</Typography>

                    <Filters addFilter={this.addTeamFilter} removeFilter={this.removeTeamFilter}/>

                    <Search filter={this.updateSearchText}/>

                    <Fixtures/>

                </div>
            </ThemeProvider>
        );
    }
}

export default App;
