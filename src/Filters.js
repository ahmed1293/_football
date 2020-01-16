import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import * as constant from "./constants";
import {makeStyles} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";


const useStyles = makeStyles(theme => ({
    buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
        paddingBottom: 50,
        paddingTop: 50
    }
}));


export default function Filters (props) {

    const [allSelected, setAllSelected] = useState(true);

    function selectAll() {
        setAllSelected(true);
        props.addAll();
    }

    function removeAll() {
        setAllSelected(false);
        props.removeAll();
    }

    const classes = useStyles();
    return <div className={classes.buttons}>
        {constant.TEAM_THEMES.map(teamTheme =>
            <TeamFilter activate={props.addFilter} deactivate={props.removeFilter} theme={teamTheme.theme}
                        teamName={teamTheme.team} key={teamTheme.team} selected={allSelected}
            />
        )}
        <br/>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={selectAll}>All</Button>
          <Button onClick={removeAll}>None</Button>
        </ButtonGroup>
    </div>;
}


function TeamFilter(props) {

    const teamName = props.teamName;
    const [selected, setSelected] = useState(props.selected);

    // BUG: props.selected is true; click on team so state.selected becomes false;
    // click All; props.selected remains true so effect not called; state.selected remains false
    useEffect(() => {
       setSelected(props.selected);
    }, [props.selected]);

    function activate() {
        return props.activate(teamName);
    }

    function deactivate() {
        return props.deactivate(teamName);
    }

    function handleClick() {
        const newSelected = !selected;
        setSelected(newSelected);
        newSelected ? activate() : deactivate();
    }

    return <ThemeProvider theme={props.theme}>
        <Button size="small" variant="contained" color={selected ? "primary":"default"} onClick={handleClick}>
            {teamName}
        </Button>
    </ThemeProvider>
}
