import React from "react";
import {ListItemText, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
  heading: {
    marginBottom: 20,
    marginTop: 20,
    maxWidth: "100%",
    backgroundColor: '#2d2d2d'
  }
});


function MatchDay({fixtures, filters, day}) {

  const classes = useStyles();

  if (filters.length > 0) {
    fixtures = fixtures.filter(fixture => {
      return filters.find(
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
          {day}
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

function FixturesInDay({fixtures, date}) {

  return <>
    <Typography variant="h6" align="center" color="secondary" gutterBottom>{date}</Typography>

    {
      fixtures.map((fixture, i) => {
        const time = fixture.utcDate.toTimeString().substr(0, 5);
        return <ListItemText primary={`${fixture.home} vs ${fixture.away}`} secondary={time} key={i}
                             primaryTypographyProps={{'color': 'primary'}}/>;
      })
    }

  </>

}

export default MatchDay;