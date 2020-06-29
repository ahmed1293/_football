import {useQuery} from "react-query";
import Spinner from "./Spinner";
import React from "react";
import {FixturesResponse} from "../services/football";
import {matchesFilter} from "../util/util";
import {Match} from "../util/types";


interface Props {
	api: () => Promise<FixturesResponse>
	teamFilters: Array<string>,
	searchFilter: string
}


export default function Fixtures(props: Props) {

	const {data, status} = useQuery('fixtures', props.api, {
		refetchOnWindowFocus: false
	});

	function filterMatches(matches: Array<Match>): Array<Match> {
		return matches.filter(m => {
			const homeTeamMatch = matchesFilter(m.homeTeam.name, props.teamFilters, props.searchFilter);
			const awayTeamMatch = matchesFilter(m.awayTeam.name, props.teamFilters, props.searchFilter);
			return homeTeamMatch || awayTeamMatch;
		});
	}

	if (status === 'loading') {
		return <Spinner/>;
	}
	return <div className='h-screen overflow-y-scroll w-full m-10'>
		{data && Object.entries(data).map(entry => {
			const matchDayNo = entry[0];
			const datesToMatches = entry[1];
			return <div key={matchDayNo} className='mb-5 bg-b'>
				<span className='font-bold text-sm'>Matchday {matchDayNo}</span>
				{Object.entries(datesToMatches).map(dateToMatches => {
					const date = dateToMatches[0];
					const matches = filterMatches(dateToMatches[1]);

					if (matches.length === 0) return null;
					return <div key={date} className='mt-5 ml-8'>
						<div className='font-bold text-red-600'>{date}</div>
						{matches.map(match => <div key={match.id} className='ml-5 mt-2'>
							<span>{match.homeTeam.name}</span>
							<span className='bg-gray-800 text-green-700 text-xs font-bold rounded p-1 m-3'>{match.time}</span>
							<span>{match.awayTeam.name}</span>
						</div>)}
					</div>
				})}
			</div>
		})}
	</div>
}
