import React from "react";
import {TableEntry} from "../util/types";
import Spinner from "./Spinner";
import {useQuery} from "react-query";

interface Props {
	api: () => Promise<Array<TableEntry>>
	highlightedTeams: Array<string>
}

const HEADINGS = ['Position', 'Team', 'Played', 'Won', 'Drawn', 'Lost', 'For', 'Against', 'GD', 'Points'];

export default function LeagueTable(props: Props) {

	const {data, status} = useQuery('league-table', props.api, {
		refetchOnWindowFocus: false
	});

	if (status === 'loading') {
		return <Spinner/>;
	}
	return <div className='m-10'>
		<table className='bg-gray-900 table-auto'>
			<thead className='text-left'>
				<tr className='text-xs border-solid border-2'>
					{HEADINGS.map(h => <th key={h} className='px-4 py-2'>{h}</th>)}
				</tr>
			</thead>
			<tbody>
				{data && data.map(entry => <tr
					key={entry.position}
					className={'text-sm border-b border-black ' + (
						props.highlightedTeams.includes(entry.team.name) ? 'bg-black text-white':''
					)}
				>
					<td className='px-4 py-2'>{entry.position}</td>
					<td className='px-4 py-2'>{entry.team.name}</td>
					<td className='px-4 py-2'>{entry.playedGames}</td>
					<td className='px-4 py-2'>{entry.won}</td>
					<td className='px-4 py-2'>{entry.draw}</td>
					<td className='px-4 py-2'>{entry.lost}</td>
					<td className='px-4 py-2'>{entry.goalsFor}</td>
					<td className='px-4 py-2'>{entry.goalsAgainst}</td>
					<td className='px-4 py-2'>{entry.goalDifference}</td>
					<td className='px-4 py-2'>{entry.points}</td>
				</tr>)}
			</tbody>
		</table>
	</div>
}
