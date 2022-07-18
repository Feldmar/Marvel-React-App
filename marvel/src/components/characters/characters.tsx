import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useCharacters } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersWrapper = () => {
  	const {data, loading, filter, handlerFilter} = useCharacters();
	const [search, setSearch] = useState("");
	const[currentPage, setCurrentPage] = useState(1)
	const [perPage] = useState(10)
  	console.log(loading);
	console.log(filter);
	
	const lastIndex = currentPage * perPage;
	const firstIndex = lastIndex - perPage;
	const currentC= data?.slice(firstIndex,lastIndex)
	const handlerPagination = (page: number, pageSize: number) => {
		console.log('page', page - 1);
		console.log('pageSize', pageSize);
		handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, name: search})
	}
	const handlerSerach = (e:any) => {		
		setSearch(e.target.value)
		handlerFilter({...filter, name: e.target.value})
	}
  	return (
		<Spin spinning={loading}>
	  		<div className="characters-wrapper" >
		  		<div className="characters-title">Characters</div>
		<Search
			value={search}
      		placeholder="input search text"
			onChange={handlerSerach} 
			
    	/>
	{/* .filter((item)=> item.name.toLowerCase().includes(search)) */}
		  		<div className="characters-block">
					{data?.map((character, index) => {
			  			return <HeroCard key={index} character={character} />
					})}
		</div>
		  	<Pagination 
				current={filter?.page}
				total={filter?.total}
				pageSize={filter?.limit ? filter?.limit : 10}
				onChange={handlerPagination}
			/>
				{/* <Pagination
					perPage={perPage}
					totalC={data?.length}
          />  */}
	  		</div>
		</Spin>
 	)
}
export  default CharactersWrapper