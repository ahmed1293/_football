

export interface Team {
	id: number
	name: string
}

export interface Match {
	id: number
	utcDate: string
	date: string
	time: string
	homeTeam: Team
	awayTeam: Team
}

export interface TableEntry {
	position: number
	team: Team
	playedGames: number
	won: number
	draw: number
	lost: number
	points: number
	goalsFor: number
	goalsAgainst: number
	goalDifference: number
}
