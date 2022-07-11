import { Spin } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import HeroCard from "./hero-card";
import { useCharacter } from "./hooks/characters";

const CharactersInfo = () => {
    const {id} = useParams();
    const {data, loading} = useCharacter(id);
    
    return (
        <Spin spinning={loading}>
            <div className="characters-info">
                {data && <HeroCard character={data}/>}
            </div>
        </Spin>
    )
}
export default CharactersInfo;