import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useComics } from "../hooks/comics-hooks";
import ComicsCard from "./comics-card";

const ComicsWrapper = () => {
  	const {data, loading, filter, handlerFilter} = useComics();
	const [search, setSearch] = useState("");
  	console.log(loading);
	console.log(filter);
	
	const handlerPagination = (page: number, pageSize: number) => {
		console.log('page', page - 1);
		console.log('pageSize', pageSize);
		handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, title: search})
	}
	const handlerSerach = (e:any) => {		
		setSearch(e.target.value)
		handlerFilter({...filter, title: e.target.value})
	}
  	return (
		<Spin spinning={loading}>
	  		<div className="comics-wrapper">
		  		<div className="comics-title">Comics</div>
		  	<Search
			value={search}
      		placeholder="input search text"
			onChange={handlerSerach} 
		/>
				<div className="comics-block">
					{data?.map((comic, index) => {
			  			return <ComicsCard key={index} comic={comic} />
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
export  default ComicsWrapper