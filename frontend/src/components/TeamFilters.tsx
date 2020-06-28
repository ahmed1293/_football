import React from "react";
import {TEAM_THEMES, TEAMS} from "../util/constants";

export default function TeamFilters() {

	const toggleAllCss = 'bg-gray-800 hover:bg-opacity-50 text-green-700 font-bold py-1 px-2 focus:outline-none w-full mb-5 border-black border';

	return <div className='m-10 w-full'>
		<div className='block w-full'>
			<div className="inline-flex w-full">
				<button className={'rounded-l ' + toggleAllCss}>All</button>
				<button className={'rounded-r ' + toggleAllCss}>None</button>
			</div>
		</div>
		{TEAMS.map(team => {
			const theme = TEAM_THEMES[team];
			return <button
				key={team}
				className={
					`font-bold py-1 px-2 w-full rounded mb-5 block focus:outline-none hover:bg-opacity-75 text-sm ${theme.bg} ${theme.text}`
				}>{team}
			</button>
		})}
	</div>
}
