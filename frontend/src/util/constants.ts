
export const ARSENAL = 'Arsenal FC';
export const SPURS = 'Tottenham Hotspur FC';
export const LIVERPOOL = 'Liverpool FC';
export const CITY = 'Manchester City FC';
export const UNITED = 'Manchester United FC';
export const CHELSEA = 'Chelsea FC';
export const NORWICH = 'Norwich City FC';

export type MainTeam = 'Arsenal FC' | 'Tottenham Hotspur FC' | 'Liverpool FC' |
	'Manchester City FC' | 'Manchester United FC' | 'Chelsea FC' | 'Norwich City FC';

export const TEAMS: Array<MainTeam> = [
  ARSENAL, SPURS, LIVERPOOL, CITY, UNITED, CHELSEA, NORWICH
];

export const TEAM_THEMES: Record<string, {bg: string, text: string}> = {
	[ARSENAL]: {
		bg: 'bg-afc-home',
		text: 'text-afc-text'
	},
	[SPURS]: {
		bg: 'bg-thfc-home',
		text: 'text-thfc-text'
	},
	[LIVERPOOL]: {
		bg: 'bg-lfc-home',
		text: 'text-lfc-text'
	},
	[CITY]: {
		bg: 'bg-mcfc-home',
		text: 'text-mcfc-text'
	},
	[UNITED]: {
		bg: 'bg-mufc-home',
		text: 'text-mufc-text'
	},
	[CHELSEA]: {
		bg: 'bg-cfc-home',
		text: 'text-cfc-text'
	},
	[NORWICH]: {
		bg: 'bg-ncfc-home',
		text: 'text-ncfc-text'
	}
}
