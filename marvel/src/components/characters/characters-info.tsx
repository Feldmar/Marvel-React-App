import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersInfo = () => {
    const {id} = useParams();
    const {data, loading} = useCharacter(id);
    return (
        <Spin spinning={loading}>
            <div className="characters-info">
                {data && <HeroCard character={data}/>}
            </div>
            <div>{data?.name}</div>
            <div>{data?.description ? data?.description  : 'No information available for this character.'}</div>
            {/* <div>{data?.events}</div> */}
        </Spin>
    )
}
export default CharactersInfo;