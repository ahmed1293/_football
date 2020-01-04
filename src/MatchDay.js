import React from "react";
import {Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Match from "./Match";


const useStyles = makeStyles({
    heading: {
        marginBottom: 20,
        marginTop: 20,
        maxWidth: "100%",
        backgroundColor: '#2d2d2d'
    }
});


function MatchDay(props) {

    const classes = useStyles();

    let fixtures = props.fixtures;

    if (props.filters.length > 0) {
        fixtures = fixtures.filter(fixture => {
            return props.filters.find(
                filter => {
                    let home = fixture.home.toLowerCase();
                    let away = fixture.away.toLowerCase();
                    let filterLower = filter.toLowerCase();
                    return home.includes(filterLower) || away.includes(filterLower)
                }
            )
        });
    }

    fixtures.sort((a, b) => {
        return a.utcDate - b.utcDate;
    });

    let days = {};
    fixtures.forEach((fixture) => {
        const day = fixture.utcDate.getDate();
        !(day in days) && (days[day] = []);

        days[day].push(fixture);
    });

    if (Object.keys(days).length > 0) {
        return (
            <div>
                <Typography className={classes.heading} variant="h5" align="center" color="primary" gutterBottom>
                    {props.day}
                </Typography>
                {
                    Object.keys(days).map(day => {
                        const date = days[day][0].utcDate.toDateString();
                        const fixturesOnDay = days[day];
                        return <FixturesInDay key={day} date={date} fixtures={fixturesOnDay}/>
                    })
                }
            </div>
        )
    }
    return null;
}

function FixturesInDay(props) {

    return <>
        <Typography variant="h6" align="center" color="secondary" gutterBottom>
            {props.date}
        </Typography>

        {
            props.fixtures.map((fixture, i) => {
                const time = fixture.utcDate.toTimeString().substr(0, 5);
                return <Match home={fixture.home} away={fixture.away} time={time} key={i}/>
            })
        }

    </>

}

export default MatchDay;