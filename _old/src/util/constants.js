import {arsenalTheme, chelseaTheme, cityTheme, liverpoolTheme, norwichTheme, spursTheme, unitedTheme} from "./themes";

export const ARSENAL = 'Arsenal FC';
export const SPURS = 'Tottenham Hotspur FC';
export const LIVERPOOL = 'Liverpool FC';
export const CITY = 'Manchester City FC';
export const UNITED = 'Manchester United FC';
export const CHELSEA = 'Chelsea FC';
export const NORWICH = 'Norwich City FC';

export const ALL_TEAMS = [
  ARSENAL, SPURS, LIVERPOOL, CITY, UNITED, CHELSEA, NORWICH
];

export const TEAM_THEMES = [
  {theme: arsenalTheme, team: ARSENAL},
  {theme: spursTheme, team: SPURS},
  {theme: liverpoolTheme, team: LIVERPOOL},
  {theme: cityTheme, team: CITY},
  {theme: unitedTheme, team: UNITED},
  {theme: chelseaTheme, team: CHELSEA},
  {theme: norwichTheme, team: NORWICH},
];