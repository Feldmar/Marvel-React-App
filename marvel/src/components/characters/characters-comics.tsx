import { Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacterComics } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersComics = () => {
    const {id} = useParams();
    const {data, loading} = useCharacterComics(id);
	
    return (
        <Spin spinning={loading}>
            <div className="characters-comics-info">
            </div>
            <div>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this character.'}
            {data?.comics.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.resourceURI})
                    </li>
                    ))}
            </div>
        </Spin>
    )
}
export default CharactersComics;

