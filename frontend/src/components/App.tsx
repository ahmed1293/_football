import React from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLFixtures, fetchPLTable} from "../services/football";
import TeamFilters from "./TeamFilters";
import SearchInput from "./Search";
import Fixtures from "./Fixtures";
import useFilterReducer from "../hooks/useFilterReducer";

export default function App() {

	const filter = useFilterReducer();

	return <div className='text-gray-400 font-sans border border-green-700'>
		<div className='grid grid-cols-6 divide-y divide-green-700 row-gap-3 divide-x'>
			<div className='col-span-6 text-center'>
				<h1 className='text-4xl mt-1 text-green-700'>_football</h1>
			</div>
			<div className='col-span-6 flex justify-center'>
				<SearchInput updateSearchFilter={filter.updateSearch}/>
			</div>
			<div className='md:col-span-1 flex justify-center col-span-6'>
				<TeamFilters
					teamFilters={filter.teams}
					addAllTeamFilters={filter.addAllTeams}
					removeAllTeamFilters={filter.removeAllTeams}
					addTeamFilter={filter.addTeam}
					removeTeamFilter={filter.removeTeam}
				/>
			</div>
			<div className='md:col-span-3 flex justify-center col-span-6'>
				<LeagueTable api={fetchPLTable} teamFilters={filter.teams} searchFilter={filter.search}/>
			</div>
			<div className='md:col-span-2 flex justify-center col-span-6'>
				<Fixtures api={fetchPLFixtures} teamFilters={filter.teams} searchFilter={filter.search}/>
			</div>
		</div>
	</div>
}
