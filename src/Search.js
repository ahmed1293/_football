import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      paddingBottom: 50
    },
  },
});


class Search extends Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
    }

    filter(event) {
        const input = event.target.value;
        this.props.addFilter(input);
    }

    render() {
        const {classes} = this.props;

        return <form className={classes.root}>
            <TextField label="Search..." onChange={this.filter} />
        </form>
    }
}

export default withStyles(useStyles)(Search); // this is weird...