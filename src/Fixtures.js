import React, {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import MatchDay from "./MatchDay";
import {makeStyles} from "@material-ui/core";
import {AUTH_TOKEN} from "./_token";
import API from "./API";


const useStyles = makeStyles({
    scrollable: {
        maxHeight: "75vh",
        overflowY: 'scroll',
        padding: 20
    }
});


export default function Fixtures(props) {

    const [fixtures, setFixtures] = useState({});

    async function fetchData() {
        const api = new API(AUTH_TOKEN);
        const fixtures = await api.fetchFixtures();
        setFixtures(fixtures);
    }

    useEffect( () => {
        fetchData();
    }, []);

    const classes = useStyles();
    return <div>
        <List className={classes.scrollable}>
            {Object.keys(fixtures).map(
                matchDay =>
                    <MatchDay day={`Matchday ${matchDay}`}
                              fixtures={fixtures[matchDay]}
                              filters={props.filters}
                              key={matchDay}
                    />
            )}
        </List>
    </div>
}
