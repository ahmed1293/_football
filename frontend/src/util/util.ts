

export function matchesFilter(teamName: string, teamFilters: Array<string>, searchStr: string) {
	const inSelectedTeams = teamFilters.includes(teamName);
	const matchesSearch = searchStr.length > 0 && teamName.toLowerCase().includes(searchStr.toLowerCase());
	return inSelectedTeams || matchesSearch;
}
