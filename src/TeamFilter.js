import Button from "@material-ui/core/Button";
import React, {Component} from "react";


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
        return <Button variant="contained" color={this.state.selected ? "primary":""} onClick={this.handleClick}>
            {this.props.team}
        </Button>
    }
}

export default TeamFilter;