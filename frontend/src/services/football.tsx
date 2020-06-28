import {Match, TableEntry} from "../util/types";


export async function fetchPLTable(): Promise<Array<TableEntry>> {
	const response = await fetch('http://localhost:8000/football/PL/table');
   return await response.json();
}

// Response: {matchday_1: {date_1: [matches], date_2: [matches], ...}, matchday_2: ...}
export type FixturesResponse = Record<string, Record<string, Array<Match>>>;
export async function fetchPLFixtures(): Promise<FixturesResponse> {
	const response = await fetch('http://localhost:8000/football/PL/matches');
   return await response.json();
}
