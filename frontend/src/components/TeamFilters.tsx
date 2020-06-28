import React from "react";
import {TEAM_THEMES, TEAMS} from "../util/constants";

export default function TeamFilters() {
	return <div className='mt-5'>
		{TEAMS.map(team => {
			const theme = TEAM_THEMES[team];
			return <button
				className={
					`font-bold py-1 px-2 rounded mr-3 hover:bg-opacity-75 ${theme.bg} ${theme.text}`
				}>{team}
			</button>
		})}
	</div>
}
