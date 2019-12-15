import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import {ThemeProvider} from "@material-ui/styles";


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

export default TeamFilter;