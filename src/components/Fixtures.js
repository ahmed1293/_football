import React from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import {CircularProgress, makeStyles} from "@material-ui/core";
import useFetchData from "../hooks/fetchData";


const useStyles = makeStyles({
  scrollable: {
    maxHeight: "75vh",
    overflowY: 'scroll',
    padding: 20
  }
});

export default function Fixtures({filters}) {

  const fetch = useFetchData();

  const classes = useStyles();
  if (fetch.loading) {
    return <CircularProgress/>;
  }
  return <div>
    <List className={classes.scrollable}>
      {Object.keys(fetch.data).map(matchDay =>
        <MatchDay day={`Matchday ${matchDay}`} fixtures={fetch.data[matchDay]} filters={filters} key={matchDay}/>
      )}
    </List>
  </div>
}
