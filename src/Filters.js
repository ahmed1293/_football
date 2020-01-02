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
        paddingBottom: 50,
        paddingTop: 50
    }
});


class Filters extends Component {

    constructor(props) {
        super(props);
        this.teams = [
            {theme: arsenalTheme, name: ARSENAL},
            {theme: spursTheme, name: SPURS},
            {theme: liverpoolTheme, name: LIVERPOOL},
            {theme: cityTheme, name: CITY},
            {theme: unitedTheme, name: UNITED},
            {theme: chelseaTheme, name: CHELSEA},
            {theme: norwichTheme, name: NORWICH},
        ]
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.buttons}>
                {this.teams.map(team =>
                    <TeamFilter activate={this.props.addFilter} deactivate={this.props.removeFilter}
                                theme={team.theme} teamName={team.name} key={team.name}
                    />
                )}
            </div>
        )
    }
}


class TeamFilter extends Component {

    constructor(props) {
        super(props);
        this.teamName = this.props.teamName;
        this.state = {
            selected: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
    }

    activate() {
        return this.props.activate(this.teamName);
    }

    deactivate() {
        return this.props.deactivate(this.teamName);
    }

    handleClick() {
        const selected = !this.state.selected;
        this.setState({selected: selected});
        selected ? this.activate() : this.deactivate();
    }

    render() {
        return <ThemeProvider theme={this.props.theme}>
            <Button
                size="small"
                variant="contained"
                color={this.state.selected ? "primary":"default"}
                onClick={this.handleClick}
            >
                {this.props.teamName}
            </Button>
        </ThemeProvider>
    }
}

export default withStyles(useStyles)(Filters);