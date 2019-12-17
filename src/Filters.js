import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {arsenalTheme, chelseaTheme, cityTheme, liverpoolTheme, norwichTheme, spursTheme, unitedTheme} from "./themes";
import {ARSENAL, CHELSEA, CITY, LIVERPOOL, NORWICH, SPURS, UNITED} from "./constants";
import {withStyles} from "@material-ui/core";


const useStyles = theme => ({
    buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
        paddingBottom: 50
    }
});


class Filters extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.buttons}>
                <TeamFilter theme={arsenalTheme} teamName={ARSENAL}/>
                <TeamFilter theme={spursTheme} teamName={SPURS}/>
                <TeamFilter theme={liverpoolTheme} teamName={LIVERPOOL}/>
                <TeamFilter theme={cityTheme} teamName={CITY}/>
                <TeamFilter theme={unitedTheme} teamName={UNITED}/>
                <TeamFilter theme={chelseaTheme} teamName={CHELSEA}/>
                <TeamFilter theme={norwichTheme} teamName={NORWICH}/>
            </div>
        )
    }
}


class TeamFilter extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            selected: false
        }
    }

    handleClick() {
        const selected = this.state.selected;
        this.setState({selected: !selected});
    }

    render() {
        return <ThemeProvider theme={this.props.theme}>
            <Button size="small" variant="contained" color={this.state.selected ? "primary":""} onClick={this.handleClick}>
                {this.props.teamName}
            </Button>
        </ThemeProvider>
    }
}

export default withStyles(useStyles)(Filters);