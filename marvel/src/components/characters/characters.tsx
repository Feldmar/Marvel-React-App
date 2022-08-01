import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useCharacters } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersWrapper = () => {
  	const {data, loading, filter, handlerFilter} = useCharacters();
	const [search, setSearch] = useState("");
  	console.log(loading);
	console.log(filter);
	
	const handlerPagination = (page: number, pageSize: number) => {
		console.log('page', page - 1);
		console.log('pageSize', pageSize);
		handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, name: search})
	}
	const handlerSearch = (e:any, page: number) => {		
		setSearch(e.target.value)
		handlerFilter({...filter, name: e.target.value, offset: page = 1, page: page})
	}
  	return (
		<Spin spinning={loading}>
	  		<div className="characters-wrapper" >
		  		<div className="characters-title wrapper-title">Characters</div>
		<Search
			value={search}
      		placeholder="input search text"
			onChange= {(e)=> {handlerSearch(e, 1)}}
		/>
		  		<div className="characters-block card-block">
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
				
	  		</div>
		</Spin>
 	)
}
export  default CharactersWrapper