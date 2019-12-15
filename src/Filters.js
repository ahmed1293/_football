import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {arsenalTheme, chelseaTheme, cityTheme, liverpoolTheme, norwichTheme, spursTheme, unitedTheme} from "./themes";
import {ARSENAL, CHELSEA, CITY, LIVERPOOL, NORWICH, SPURS, UNITED} from "./constants";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
        paddingBottom: 50
    }
}));


function Filters() {
    const classes = useStyles();

    return (
        <div className={classes.buttons} align="center">
            <TeamFilter theme={arsenalTheme} team={ARSENAL}/>
            <TeamFilter theme={spursTheme} team={SPURS}/>
            <TeamFilter theme={liverpoolTheme} team={LIVERPOOL}/>
            <TeamFilter theme={cityTheme} team={CITY}/>
            <TeamFilter theme={unitedTheme} team={UNITED}/>
            <TeamFilter theme={chelseaTheme} team={CHELSEA}/>
            <TeamFilter theme={norwichTheme} team={NORWICH}/>
        </div>
    )
}


class TeamFilter extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: true
        }
    }

    handleClick() {
        const selected = this.state.selected;
        this.setState({selected: !selected});
    }

    render() {
        return <ThemeProvider theme={this.props.theme}>
            <Button variant="contained" color={this.state.selected ? "primary":""} onClick={this.handleClick}>
                {this.props.team}
            </Button>
        </ThemeProvider>
    }
}

export default Filters;