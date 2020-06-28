import React from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLTable} from "../services/football";
import {ALL_TEAMS} from "../util/constants";
import Spinner from "./Spinner";

export default function App() {

    return <div className='text-gray-400 font-sans text-center h-full'>
		 <div className='grid grid-cols-2 divide-y divide-gray-200 divide-opacity-25 row-gap-5'>
			 <div className='col-span-2'>
				 <h1 className='text-4xl mt-4'>_football</h1>
			 </div>
			 <div className='col-span-2'>
				 Buttons...
			 </div>
			 <div className='col-span-2'>
				 Search...
			 </div>
			 <div className='col-span-1'>
				 <Spinner/>
			 </div>
			 <div className='col-span-1'>
				 <LeagueTable api={fetchPLTable} highlightedTeams={ALL_TEAMS}/>
			 </div>
		 </div>
    </div>
}
