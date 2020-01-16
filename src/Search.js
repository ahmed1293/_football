import React from "react";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      paddingBottom: 50
    },
  },
}));


export default function Search(props) {

    function filter(event) {
        const input = event.target.value;
        props.addFilter(input);
    }

    const classes = useStyles();
    return <form className={classes.root}>
        <TextField label="Search..." onChange={filter} />
    </form>

}
