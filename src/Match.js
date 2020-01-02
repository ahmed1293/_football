import {ListItemText} from "@material-ui/core";
import React from "react";



function Match(props) {

    let visible = props.filters.find(
        filter => {
            let home = props.home.toLowerCase();
            let away = props.away.toLowerCase();
            let filterLower = filter.toLowerCase();
            return home.includes(filterLower) || away.includes(filterLower)
        }
    );

    if (!props.filters.length) {
        visible = true;
    }

    if (visible) {
        return (
            <ListItemText
                primary={`${props.home} vs ${props.away}`} secondary={props.time}
                primaryTypographyProps={{'color': 'primary'}}
            />
        )
    }
    return null;
}

export default Match;