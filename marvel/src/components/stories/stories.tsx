import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useStories } from "../hooks/stories-hooks";
import StoryCard from "./story-card";

const StoriesWrapper = () => {
  	const {data, loading, filter, handlerFilter} = useStories();
	const [search, setSearch] = useState("");
  	console.log(loading);
	console.log(filter);
	
	const handlerPagination = (page: number, pageSize: number) => {
		console.log('page', page - 1);
		console.log('pageSize', pageSize);
		handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, name: search})
	}
	const handlerSerach = (e:any, page: number) => {		
		setSearch(e.target.value)
		handlerFilter({...filter, name: e.target.value, offset: page = 1, page: page})
	}
  	return (
		<Spin spinning={loading}>
	  		<div className="stories-wrapper" >
		  		<div className="stories-title">stories</div>
		<Search
			value={search}
      		placeholder="input search text"
			onChange= {(e)=> {handlerSerach(e, 1)}}
		/>
		  		<div className="stories-block">
					{data?.map((story, index) => {
			  			return <StoryCard key={index} story={story} />
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
export  default StoriesWrapper