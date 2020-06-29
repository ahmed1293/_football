import React, {useReducer} from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLFixtures, fetchPLTable} from "../services/football";
import {MainTeam, TEAMS} from "../util/constants";
import TeamFilters from "./TeamFilters";
import SearchInput from "./Search";
import Fixtures from "./Fixtures";

type State = {
	search: string,
	selectedTeams: Array<MainTeam>
}

type Action = { type: 'update search filter', value: string }
	| { type: 'add team filter' | 'remove team filter', team: MainTeam }
	| { type: 'remove all team filters' | 'add all team filters' }

const initialState: State = {
	search: '',
	selectedTeams: TEAMS
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'update search filter':
			return {...state, search: action.value};
		case 'add team filter':
			let teams = [...state.selectedTeams];
			teams.push(action.team);
			return {...state, selectedTeams: teams};
		case 'remove team filter':
			return {...state, selectedTeams: [...state.selectedTeams].filter(val => val !== action.team)};
		case 'remove all team filters':
			return {...state, selectedTeams: []};
		case 'add all team filters':
			return {...state, selectedTeams: TEAMS};
		default:
			throw new Error('Unexpected action type!')
	}
}


export default function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	return <div className='text-gray-400 font-sans border border-green-700'>
		<div className='grid grid-cols-6 divide-y divide-green-700 row-gap-3 divide-x'>
			<div className='col-span-6 text-center'>
				<h1 className='text-4xl mt-1 text-green-700'>_football</h1>
			</div>
			<div className='col-span-6 flex justify-center'>
				<SearchInput updateSearchFilter={(s) => dispatch({type: 'update search filter', value: s})}/>
			</div>
			<div className='md:col-span-1 flex justify-center col-span-6'>
				<TeamFilters
					teamFilters={state.selectedTeams}
					addAllTeamFilters={() => dispatch({type: 'add all team filters'})}
					removeAllTeamFilters={() => dispatch({type: 'remove all team filters'})}
					addTeamFilter={team => dispatch({type: 'add team filter', team: team})}
					removeTeamFilter={team => dispatch({type: 'remove team filter', team: team})}
				/>
			</div>
			<div className='md:col-span-3 flex justify-center col-span-6'>
				<LeagueTable api={fetchPLTable} teamFilters={state.selectedTeams} searchFilter={state.search}/>
			</div>
			<div className='md:col-span-2 flex justify-center col-span-6'>
				<Fixtures api={fetchPLFixtures} teamFilters={state.selectedTeams} searchFilter={state.search}/>
			</div>
		</div>
	</div>
}
