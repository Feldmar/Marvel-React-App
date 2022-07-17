import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useState } from "react";
import { useCharacters } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersWrapper = () => {
  	const {data, loading, filter} = useCharacters();
	const [search, setSearch] = useState("")
  	console.log(loading);
	console.log(filter);
	
	
  	return (
		<Spin spinning={loading}>
	  		<div className="characters-wrapper" >
		  		<div className="characters-title">Characters</div>
		<Search
      	placeholder="input search text"
		onChange={(e) => setSearch((e.target as HTMLInputElement).value)} 
    />
		  		<div className="characters-block">
					{data?.filter((item)=> item.name.toLowerCase().includes(search)).map((character, index) => {
			  			return <HeroCard key={index} character={character} />
					})}
		</div>
		  	
				<Pagination
            defaultCurrent={filter?.count || 1}
            defaultPageSize={filter?.count ? filter?.count : 10}
            total={filter?.limit}
            showSizeChanger={true}
						showQuickJumper={true}
						// onChange={}
          /> 
	  		</div>
		</Spin>
 	)
}
export  default CharactersWrapper