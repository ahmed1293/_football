import {MainTeam, TEAMS} from "../util/constants";
import {useReducer} from "react";

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


export default function useFilterReducer(): {
	search: string,
	teams: Array<MainTeam>,
	updateSearch: (s: string) => void,
	addTeam: (t: MainTeam) => void,
	removeTeam: (t: MainTeam) => void,
	addAllTeams: () => void,
	removeAllTeams: () => void
} {
	const [state, dispatch] = useReducer(reducer, initialState);

	return {
		search: state.search,
		teams: state.selectedTeams,
		updateSearch: (s) => dispatch({type: 'update search filter', value: s}),
		addTeam: team => dispatch({type: 'add team filter', team: team}),
		removeTeam: team => dispatch({type: 'remove team filter', team: team}),
		addAllTeams: () => dispatch({type: 'add all team filters'}),
		removeAllTeams: () => dispatch({type: 'remove all team filters'}),
	}
}
