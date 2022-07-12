import { Pagination, Spin } from "antd";
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
		  		<div className="characters-block">
					{data?.map((character, index) => {
			  			return <HeroCard key={index} character={character} />
					})}
		  	</div>
		  	<Pagination
			defaultCurrent={1 || filter?.count }
			defaultPageSize={filter?.count ? filter?.count : 5}
			total={filter?.limit ? filter?.limit : 100}
			showSizeChanger={true}
			showQuickJumper={true}
		  	/>
	  		</div>
		</Spin>
 	)
}
export  default CharactersWrapper