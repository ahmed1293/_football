import React, {Component} from "react";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Fixture from "./Fixture";


const tileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

class Competition extends Component {

    render() {
        return <Grid item xs={5}>
            <div align="center">
                <Typography variant="h4" color="primary" gutterBottom>
                    {this.props.name}
                </Typography>

                <Grid container direction="row" justify="center" alignItems="center" spacing={6}>
                    {tileNumber.map(fixture => <Grid item><Fixture key={fixture}/></Grid>)}
                </Grid>
            </div>
        </Grid>
    }
}

export default Competition;