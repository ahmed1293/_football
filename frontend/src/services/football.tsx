import {TableEntry} from "../util/types";


export async function fetchPLTable(): Promise<Array<TableEntry>> {
	const response = await fetch('http://localhost:8000/football/PL/table');
   return await response.json()
}
