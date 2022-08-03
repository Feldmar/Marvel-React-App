import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useCreators } from "../hooks/creators-hooks";
import CreatorCard from "./creator-card";

const CreatorsWrapper = () => {
  const {data, loading, filter, handlerFilter} = useCreators();
  const [search, setSearch] = useState("");
  
  const handlerPagination = (page: number, pageSize: number) => {
    handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page, firstName: search})
  }
  const handlerSearch = (e:any, page: number) => {		
    setSearch(e.target.value)
    handlerFilter({...filter, firstName: e.target.value, offset: page = 1, page: page})
  }
  return (
    <Spin spinning={loading}>
      <div className="creators-wrapper" >
        <div className="creators-title wrapper-title">Creators</div>
        <Search
          value={search}
          placeholder="input search text"
          onChange= {(e)=> {handlerSearch(e, 1)}}
        />
        <div className="creators-block card-block">
          {data?.map((creator, index) => {
            return <CreatorCard key={index} creator={creator} />
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
export  default CreatorsWrapper