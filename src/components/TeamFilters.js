import Button from "@material-ui/core/Button";
import React, {useContext, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import * as constant from "../util/constants";
import {makeStyles} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {FilterContext} from "./App";


const useStyles = makeStyles(theme => ({
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingBottom: 50,
    paddingTop: 50
  }
}));


export default function TeamFilters() {

  const [allSelected, setAllSelected] = useState(true);
  const {dispatch} = useContext(FilterContext);

  function selectAll() {
    setAllSelected(true);
    dispatch({type: 'add all team filters'});
  }

  function removeAll() {
    setAllSelected(false);
    dispatch({type: 'remove all team filters'});
  }

  const classes = useStyles();
  return <div className={classes.buttons}>
    {constant.TEAM_THEMES.map(teamTheme =>
      <TeamFilter theme={teamTheme.theme} teamName={teamTheme.team} key={teamTheme.team} selected={allSelected}/>
    )}
    <br/>
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={selectAll}>All</Button>
      <Button onClick={removeAll}>None</Button>
    </ButtonGroup>
  </div>;
}


function TeamFilter({teamName, theme}) {

  const {state, dispatch} = useContext(FilterContext);

  function handleClick() {
    const action = state.teams.includes(teamName) ? 'remove team filter' : 'add team filter';
    dispatch({type: action, team: teamName});
  }

  return <ThemeProvider theme={theme}>
    <Button size="small" variant="contained" color={state.teams.includes(teamName) ? "primary" : "default"}
            onClick={handleClick}>
      {teamName}
    </Button>
  </ThemeProvider>
}
