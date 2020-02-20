import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import {FilterContext} from "./App";


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      paddingBottom: 50
    },
  },
}));


export default function Search() {

  const {dispatch} = useContext(FilterContext);

  function filter(event) {
    dispatch({type: 'update search filter', value: event.target.value});
  }

  const classes = useStyles();
  return <form className={classes.root}>
    <TextField label="Search..." onChange={filter}/>
  </form>

}
