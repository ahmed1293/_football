import React from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLTable} from "../services/football";
import {TEAMS} from "../util/constants";
import Spinner from "./Spinner";
import TeamFilters from "./TeamFilters";

export default function App() {

    return <div className='text-gray-400 font-sans h-full'>
		 <div className='grid grid-cols-2 divide-y divide-gray-200 divide-opacity-25 row-gap-5'>
			 <div className='col-span-2 text-center'>
				 <h1 className='text-4xl mt-4'>_football</h1>
			 </div>
			 <div className='col-span-2 flex justify-center'>
				 <TeamFilters/>
			 </div>
			 <div className='col-span-2 flex justify-center'>
				 Search...
			 </div>
			 <div className='col-span-1 flex justify-center'>
				 <Spinner/>
			 </div>
			 <div className='col-span-1 flex justify-center'>
				 <LeagueTable api={fetchPLTable} highlightedTeams={TEAMS}/>
			 </div>
		 </div>
    </div>
}
