import React from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLTable} from "../services/football";
import {ALL_TEAMS} from "../util/constants";

export default function App() {

    return <div className='text-gray-400 font-sans'>
        <LeagueTable api={fetchPLTable} highlightedTeams={ALL_TEAMS}/>
    </div>
}
