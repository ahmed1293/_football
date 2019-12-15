import {blue} from "@material-ui/core/colors";
import {createMuiTheme} from "@material-ui/core";


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#880e4f',
        },
        secondary: blue
    }
});

export default darkTheme;