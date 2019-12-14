import {blue} from "@material-ui/core/colors";
import {createMuiTheme} from "@material-ui/core";


const darkTheme = createMuiTheme({
    palette: {
        primary: {
          main: '#880e4f',
        },
        secondary: blue,
        background: {
            main: '#333333'
        }
    }
});

export default darkTheme;