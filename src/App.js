import React from 'react';
import Grid from "@material-ui/core/Grid";
import Fixture from "./Fixture";
import {makeStyles, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "./themes";
import Filters from "./Filters";
import Competition from "./Competition";


const titleStyle = makeStyles({
    title: {
        paddingBottom: 20,
    }
});


function App() {
    const classes = titleStyle();

    return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
              <Typography className={classes.title} variant="h3" align="center" color="primary" gutterBottom>
                  _football
              </Typography>

              <Filters/>

              <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                  <Competition titleTheme={classes.title} name="Premier League"/>
                  <Competition titleTheme={classes.title} name="Europe"/>
              </Grid>
          </div>
      </ThemeProvider>
  );
}

export default App;
