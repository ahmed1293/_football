import React from "react";
import {TEAM_THEMES, TEAMS} from "../util/constants";

export default function TeamFilters() {

	const toggleAllCss = 'bg-black hover:bg-opacity-50 text-gray-200 font-bold py-1 px-2 rounded-l focus:outline-none';

	return <div className='mt-5'>
		{TEAMS.map(team => {
			const theme = TEAM_THEMES[team];
			return <button
				key={team}
				className={
					`font-bold py-1 px-2 rounded focus:outline-none mr-3 hover:bg-opacity-75 text-sm ${theme.bg} ${theme.text}`
				}>{team}
			</button>
		})}
		<div className='block mt-5 text-center'>
			<div className="inline-flex">
				<button className={toggleAllCss}>All</button>
				<button className={toggleAllCss}>None</button>
			</div>
		</div>
	</div>
}
