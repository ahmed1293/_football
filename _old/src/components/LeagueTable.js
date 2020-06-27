import useFetchData from "../hooks/fetchData";
import {CircularProgress, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React from "react";

export default function LeagueTable({highlightedTeams, search, service}) {
  const fetch = useFetchData(service);

  const headings = ["Position", "Team", "Played", "Won", "Drawn", "Lost", "For", "Against", "GD", "Points"];

  if (fetch.loading) {
    return <CircularProgress/>;
  }
  return <Table size="small">
    <TableHead>
      <TableRow>
        {headings.map((h) => <TableCell key={h}>{h}</TableCell>)}
      </TableRow>
    </TableHead>
    <TableBody>
      {Array.from(fetch.data).map((team) => {
        const name = team.team.name;
        const matchesSearch = (search && name.toLowerCase().includes(search.toLowerCase()));
        const highlight = (highlightedTeams.includes(name) || matchesSearch);
        return <TableRow key={team.team.id} style={highlight ? {backgroundColor: "black"}:{}}>
          <TableCell>{team.position}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>{team.playedGames}</TableCell>
          <TableCell>{team.won}</TableCell>
          <TableCell>{team.draw}</TableCell>
          <TableCell>{team.lost}</TableCell>
          <TableCell>{team.goalsFor}</TableCell>
          <TableCell>{team.goalsAgainst}</TableCell>
          <TableCell>{team.goalDifference}</TableCell>
          <TableCell><b>{team.points}</b></TableCell>
        </TableRow>
      })}
    </TableBody>
  </Table>
}