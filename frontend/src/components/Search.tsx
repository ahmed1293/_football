import React from "react";


export default function SearchInput(props: {updateSearchFilter: (s: string) => void}) {

	return <div className='mt-5 w-1/2'>
		<input
			className="shadow appearance-none border border-green-700 rounded w-full py-2 px-3 bg-black
			text-gray-300 leading-tight focus:outline-none focus:outline-none"
			type="text"
			placeholder="Search..."
			onChange={(e) => props.updateSearchFilter(e.target.value)}
		/>
	</div>

}
