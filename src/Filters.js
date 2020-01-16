import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {arsenalTheme, chelseaTheme, cityTheme, liverpoolTheme, norwichTheme, spursTheme, unitedTheme} from "./themes";
import * as constant from "./constants";
import {withStyles} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";


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
            {theme: arsenalTheme, name: constant.ARSENAL},
            {theme: spursTheme, name: constant.SPURS},
            {theme: liverpoolTheme, name: constant.LIVERPOOL},
            {theme: cityTheme, name: constant.CITY},
            {theme: unitedTheme, name: constant.UNITED},
            {theme: chelseaTheme, name: constant.CHELSEA},
            {theme: norwichTheme, name: constant.NORWICH},
        ];
        this.state = {
            allSelected: true
        };
        this.selectAll = this.selectAll.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    selectAll() {
        this.setState({allSelected: true});
        this.props.addAll();
    }

    removeAll() {
        this.setState({allSelected: false});
        this.props.removeAll();
    }


    render() {
        const {classes} = this.props;

        return (
            <div className={classes.buttons}>
                {this.teams.map(team =>
                    <TeamFilter activate={this.props.addFilter} deactivate={this.props.removeFilter} theme={team.theme}
                                teamName={team.name} key={team.name} selected={this.state.allSelected}
                    />
                )}
                <br/>
                <ButtonGroup size="small" aria-label="small outlined button group">
                  <Button onClick={this.selectAll}>All</Button>
                  <Button onClick={this.removeAll}>None</Button>
                </ButtonGroup>
            </div>
        )
    }
}


class TeamFilter extends Component {

    constructor(props) {
        super(props);
        this.teamName = this.props.teamName;
        this.state = {
            selected: this.props.selected
        };
        this.handleClick = this.handleClick.bind(this);
        this.activate = this.activate.bind(this);
        this.deactivate = this.deactivate.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selected !== this.props.selected) {
            this.setState({selected: this.props.selected});
        }
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