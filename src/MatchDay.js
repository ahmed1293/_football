import React from "react";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Match from "./Match";


const useStyles = makeStyles({
    margins: {
        marginBottom: 10,
        marginTop: 10,
        maxWidth: 800
    },
});


function MatchDay(props) {

    const classes = useStyles();

    return (
        <div>
            <Divider className={classes.margins}/>
            <Typography variant="h6" align="center" color="secondary" gutterBottom>
                {props.date}
            </Typography>
            {
                Object.keys(props.fixtures).map(
                    (key, i) => {
                        const fixture = props.fixtures[key];
                        return <Match
                            home={fixture.home} away={fixture.away} time={fixture.utcDate}
                            filters={props.filters} key={i}
                        />
                    }
            )}
        </div>
    )
}

export default MatchDay;