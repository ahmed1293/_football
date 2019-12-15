import React from 'react';
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    card: {
        minWidth: 300,
    },
    title: {
        marginBottom: 12
    },
    text: {
        fontSize: 16
    }
});


function Fixture() {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} variant="h5">
                    Arsenal vs Chelsea
                </Typography>
                <Typography className={classes.text}>
                    Premier League <br/>
                    12:45
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Fixture;