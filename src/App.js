import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {darkTheme,} from "./themes";
import Filters from "./Filters";
import Search from "./Search";
import Fixtures from "./Fixtures";


const titleStyle = makeStyles({
    title: {
        paddingBottom: 20,
    }
});


function App() {
    const classes = titleStyle();

    return (
      <ThemeProvider theme={darkTheme}>
          <div className="App" align="center">
              <Typography className={classes.title} variant="h3" align="center" color="primary" gutterBottom>
                  _football
              </Typography>

              <Filters/>

              <Search/>

              <Fixtures/>

          </div>
      </ThemeProvider>
  );
}

export default App;
