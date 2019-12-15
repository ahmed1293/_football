import React from 'react';
import Grid from "@material-ui/core/Grid";
import Fixture from "./Fixture";
import {makeStyles, Typography} from "@material-ui/core";
import darkTheme from "./Theme";
import {ThemeProvider} from "@material-ui/styles";
import TeamFilter from "./TeamFilter";


const tileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const useStyles = makeStyles(theme => ({
    title: {
        paddingBottom: 20,
        color: '#ffffff'
    },
    buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
        paddingBottom: 20
    }
}));


function App() {
    const classes = useStyles();

    return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
              <Typography className={classes.title} variant="h3" align="center" gutterBottom>
                  _football
              </Typography>

              <div className={classes.buttons} align="center">
                <TeamFilter team="Arsenal"/>
                <TeamFilter team="Spurs"/>
                <TeamFilter team="Liverpool"/>
                <TeamFilter team="Manchester City"/>
                <TeamFilter team="Manchester United"/>
                <TeamFilter team="Chelsea"/>
              </div>

              <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                  {tileNumber.map(fixture => <Grid item key={fixture}><Fixture/></Grid>)}
              </Grid>
          </div>
      </ThemeProvider>
  );
}

export default App;
