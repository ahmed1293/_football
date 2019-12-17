import React, {Component} from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import Divider from "@material-ui/core/Divider";
import {withStyles} from "@material-ui/core";


const useStyles = () => ({
    margins: {
        marginBottom: 10,
        marginTop: 10,
        maxWidth: 800
    },

    scrollable: {
        maxHeight: 800,
        overflowY: 'scroll',
    }
});


class Fixtures extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'fixtures': [
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
                {home: 'Arsenal FC', away: 'Chelsea FC', time: '15:00'},
            ]
        }
    }

    render() {
        const {classes} = this.props;

        return <div>
            <List className={classes.scrollable}>
                <Divider className={classes.margins} />
                <MatchDay date='12/09/1993' fixtures={this.state.fixtures}/>
                <Divider className={classes.margins} />
                <MatchDay date='11/09/1993' fixtures={this.state.fixtures}/>
            </List>
        </div>
    }
}

export default withStyles(useStyles)(Fixtures);