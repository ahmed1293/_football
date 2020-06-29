import React from "react";
import {MainTeam, TEAM_THEMES, TEAMS} from "../util/constants";

interface Props {
	teamFilters: Array<MainTeam>,
	addTeamFilter: (t: MainTeam) => void,
	removeTeamFilter: (t: MainTeam) => void,
	removeAllTeamFilters: () => void,
	addAllTeamFilters: () => void
}

export default function TeamFilters(props: Props) {

	const toggleAllCss = 'bg-gray-800 hover:bg-opacity-50 text-green-700 font-bold py-1 px-2 focus:outline-none w-full mb-5 border-black border';

	return <div className='m-10 w-full'>
		<div className='block w-full'>
			<div className="inline-flex w-full">
				<button className={'rounded-l ' + toggleAllCss} onClick={props.addAllTeamFilters}>All</button>
				<button className={'rounded-r ' + toggleAllCss} onClick={props.removeAllTeamFilters}>None</button>
			</div>
		</div>
		{TEAMS.map(team => {
			const theme = TEAM_THEMES[team];
			const isSelected = props.teamFilters.includes(team);
			return <button
				key={team}
				className={'font-bold py-1 px-2 w-full rounded mb-5 block focus:outline-none hover:bg-opacity-75 text-sm '
					+ (isSelected ?`${theme.bg} ${theme.text}`:'border border-black')
				}
				onClick={isSelected ? () => props.removeTeamFilter(team) : () => props.addTeamFilter(team)}
			>{team}</button>
		})}
	</div>
}
