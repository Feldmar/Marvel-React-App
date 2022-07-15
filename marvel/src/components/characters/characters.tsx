import { Pagination, Spin } from "antd";
import Search from "antd/lib/transfer/search";
import { useCharacters } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersWrapper = () => {
  	const {data, loading, filter} = useCharacters();
  	console.log(loading);
	  console.log(filter);
  	return (
		<Spin spinning={loading}>
	  		<div className="characters-wrapper">
		  		<div className="characters-title">Characters</div>
				  <Search
      placeholder="search"
    //   onSearch={onSearch}
    //   style={{
    //     width: 200,
    //   }}
    />
		  		<div className="characters-block">
					{data?.map((character, index) => {
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