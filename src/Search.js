import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 800,
    },
  },
});


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'input': ''
        }
    }


    render() {
        const {classes} = this.props;

        return <form className={classes.root}>
            <TextField label="Search..." name="input" value={this.state.input} />
        </form>
    }
}

export default withStyles(useStyles)(Search); // this is weird...