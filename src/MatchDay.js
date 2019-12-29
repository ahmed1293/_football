import React, {Component} from "react";
import {ListItemText, Typography} from "@material-ui/core";



class MatchDay extends Component {

    // TODO: give each item a key
    render() {
        return <div>
            <Typography variant="h6" align="center" color="secondary" gutterBottom>
                {this.props.date}
            </Typography>
            {this.props.fixtures.map(
                fixture => <ListItemText
                    primary={`${fixture.home} vs ${fixture.away}`}
                    secondary={fixture.time}
                    primaryTypographyProps={{'color': 'primary'}}
                />
            )}
        </div>
    }
}

export default MatchDay;