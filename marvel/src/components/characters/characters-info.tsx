import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = useCharacter(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="characters-info">
                {data && <HeroCard character={data}/>}
            </div>
            <div>Name: {data?.name}</div>
            <div>Description: {data?.description ? data?.description  : 'No information available for this character.'}</div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this character.'}
            {data?.stories.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/stories/story/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this character.'}
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Series: {data?.series.available ? data?.series.available : 'No series available for this character.'}
            {data?.series.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/series/part/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this character.'}
            {data?.comics.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/comics/comic/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
        </Spin>
    )
}
export default CharactersInfo;