import React, {useEffect, useReducer} from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import {CircularProgress, makeStyles} from "@material-ui/core";
import {AUTH_TOKEN} from "./_token";
import API from "./API";


const useStyles = makeStyles({
  scrollable: {
    maxHeight: "75vh",
    overflowY: 'scroll',
    padding: 20
  }
});

function init() {
  return initialState;
}

const initialState = {fixtures: {}, loading: false};

function reducer(state, action) {
  switch (action.type) {
    case 'fetching':
      return {...initialState, loading: true};
    case 'fetched':
      return {...initialState, fixtures: action.data};
    default:
      throw new Error('Unexpected action type!');
  }
}

export default function Fixtures(props) {

  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    async function fetchData() {
      dispatch({type: 'fetching'});
      const api = new API(AUTH_TOKEN);
      const fixtures = await api.fetchFixtures();
      dispatch({type: 'fetched', data: fixtures});
    }

    fetchData();
  }, []);

  const classes = useStyles();
  if (state.loading) {
    return <CircularProgress/>;
  }
  return <div>
    <List className={classes.scrollable}>
      {Object.keys(state.fixtures).map(
        matchDay => <MatchDay day={`Matchday ${matchDay}`} fixtures={state.fixtures[matchDay]}
                              filters={props.filters} key={matchDay}/>
      )}
    </List>
  </div>
}
