import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useSeries } from "../hooks/series-hooks";
import PartCard from "./part-card";

const SeriesWrapper = () => {
  	const {data, loading, filter, handlerFilter} = useSeries();
	const [search, setSearch] = useState("");
  	console.log(loading);
	console.log(filter);
	
	const handlerPagination = (page: number, pageSize: number) => {
		console.log('page', page - 1);
		console.log('pageSize', pageSize);
		handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, title: search})
	}
	const handlerSerach = (e:any, page: number) => {		
		setSearch(e.target.value)
		handlerFilter({...filter, title: e.target.value, offset: page = 1, page: page})
	}
  	return (
		<Spin spinning={loading}>
	  		<div className="series-wrapper" >
		  		<div className="series-title wrapper-title">Series</div>
		<Search
			value={search}
      		placeholder="input search text"
			onChange= {(e)=> {handlerSerach(e, 1)}}
		/>
		  		<div className="series-block card-block">
					{data?.map((part, index) => {
			  			return <PartCard key={index} part={part} />
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
export  default SeriesWrapper