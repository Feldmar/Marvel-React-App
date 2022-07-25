import { Spin } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersInfo = ()=> {
    const {id} = useParams();
    const navigate = useNavigate()
    const {data, loading} = useCharacter(id);
    console.log(data);
    
    const handler = (e: any) => {
		if (true) {
			// navigate(`${character.id}/comics?`)
		}
	}
    return (
        <Spin spinning={loading}>
            <div className="characters-info">
                {data && <HeroCard character={data}/>}
            </div>
            <div>Name: {data?.name}</div>
            <div>Description: {data?.description ? data?.description  : 'No information available for this character.'}</div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this character.'}
            {data?.stories.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.type})
                    </li>
                    ))}
            </div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this character.'}
            {data?.events.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.resourceURI})
                    </li>
                    ))}
            </div>
            <div>Series: {data?.series.available ? data?.series.available : 'No series available for this character.'}
            {data?.series.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.resourceURI})
                    </li>
                    ))}
            </div>
            <div onClick={handler}>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this character.'}
            {data?.comics.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/comics/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
        </Spin>
    )
}
export default CharactersInfo;