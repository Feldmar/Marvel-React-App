
import { Pagination, Spin } from "antd";
import HeroCard from "./hero-card";
import { useCharacters } from "./hooks/characters";

const CharactersWrapper = () => {
  const {data, loading, filter} = useCharacters();
  console.log(loading);
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
            current={filter?.count ? filter?.count : 1}
            pageSize={filter?.limit ? filter?.limit : 10}
            total={filter?.total}
            showSizeChanger={true}
          />
      </div>
    </Spin>
  )
}
export  default CharactersWrapper