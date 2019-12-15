import {blue} from "@material-ui/core/colors";
import {createMuiTheme} from "@material-ui/core";


export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#ffffff',
        },
        secondary: {
          main: '#880e4f',
        },
    }
});

export const arsenalTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#DB0007',
       },
   }
});

export const spursTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#132257',
       },
   }
});

export const liverpoolTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#C8102E',
           contrastText: '#F6EB61'
       },
   }
});

export const cityTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#6CABDD',
           contrastText: '#ffffff'
       },
   }
});

export const unitedTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#DA291C',
           contrastText: '#000000'
       },
   }
});

export const chelseaTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#034694',
       },
   }
});

export const norwichTheme = createMuiTheme({
   palette: {
       primary: {
           main: '#00a650',
           contrastText: '#fff200'
       },
   }
});