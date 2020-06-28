import React from 'react';
import LeagueTable from "./LeagueTable";
import {fetchPLFixtures, fetchPLTable} from "../services/football";
import {TEAMS} from "../util/constants";
import TeamFilters from "./TeamFilters";
import SearchInput from "./Search";
import Fixtures from "./Fixtures";

export default function App() {

    return <div className='text-gray-400 font-sans border border-green-700'>
		 <div className='grid grid-cols-6 divide-y divide-green-700 row-gap-3 divide-x'>
			 <div className='col-span-6 text-center'>
				 <h1 className='text-4xl mt-1 text-green-700'>_football</h1>
			 </div>
			 <div className='col-span-6 flex justify-center'>
				 <SearchInput/>
			 </div>
			 <div className='md:col-span-1 flex justify-center col-span-6'>
				 <TeamFilters/>
			 </div>
			 <div className='md:col-span-3 flex justify-center col-span-6'>
				 <LeagueTable api={fetchPLTable} highlightedTeams={TEAMS}/>
			 </div>
			 <div className='md:col-span-2 flex justify-center col-span-6'>
				 <Fixtures api={fetchPLFixtures} filters={[]}/>
			 </div>
		 </div>
    </div>
}
