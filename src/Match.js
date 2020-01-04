import {ListItemText} from "@material-ui/core";
import React from "react";



function Match(props) {

    return (
        <ListItemText
            primary={`${props.home} vs ${props.away}`} secondary={props.time}
            primaryTypographyProps={{'color': 'primary'}}
        />
    )
}

export default Match;