import React from 'react';
import Grid from "@material-ui/core/Grid";
import Fixture from "./Fixture";
import {Typography} from "@material-ui/core";
import darkTheme from "./Theme";
import {ThemeProvider} from "@material-ui/styles";


const tileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <div className="App">
            <Typography variant="h3" align="center" color="primary" gutterBottom>
                _football
            </Typography>
            <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
                {tileNumber.map(fixture => <Grid item key={fixture}><Fixture/></Grid>)}
            </Grid>
        </div>
      </ThemeProvider>
  );
}

export default App;
