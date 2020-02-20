import React, {useReducer} from 'react';
import {Box, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "../util/themes";
import TeamFilters from "./TeamFilters";
import Search from "./Search";
import Fixtures from "./Fixtures";
import * as constant from "../util/constants";

function init() {
  return initialState;
}

const initialState = {
  search: '',
  teams: constant.ALL_TEAMS
};

function reducer(state, action) {
  switch (action.type) {
    case 'update search filter':
      return {...state, search: action.value};
    case 'add team filter':
      let teams = [...state.teams];
      teams.push(action.team);
      return {...state, teams: teams};
    case 'remove team filter':
      return {...state, teams: [...state.teams].filter(val => val !== action.team)};
    case 'remove all team filters':
      return {...state, teams: []};
    case 'add all team filters':
      return {...state, teams: constant.ALL_TEAMS};
    default:
      throw new Error('Unexpected action type!')
  }
}

export const FilterContext = React.createContext(null);

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState, init);

  let filters = [...state.teams];
  if (state.search.length > 0) {
    filters.push(state.search);
  }

  return <ThemeProvider theme={darkTheme}>
    <div className="App" align="center">
      <Box width="60%">
        <FilterContext.Provider value={{state, dispatch}}>
          <Typography variant="h3" align="center" color="primary" gutterBottom>_football</Typography>
          <TeamFilters/>
          <Search/>
          <Fixtures filters={filters}/>
        </FilterContext.Provider>
      </Box>
    </div>
  </ThemeProvider>;
}

