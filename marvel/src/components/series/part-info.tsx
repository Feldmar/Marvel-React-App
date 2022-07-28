import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { usePart } from "../hooks/series-hooks";
import PartCard from "./part-card";


const PartInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = usePart(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="part-info">
                {data && <PartCard part={data}/>}
            </div>
            <div>Name: {data?.title}</div>
            <div>Description: {data?.description ? data?.description  : 'No information available for this part.'}</div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this part.'}
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this part.'}
            {data?.stories.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/stories/story/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this part.'}
            {data?.comics.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/comics/comic/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Creators: {data?.creators.available ? data?.creators.available : 'No creators available for this part.'}
            {data?.creators.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/creators/creator/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Characters: {data?.characters.available ? data?.characters.available : 'No characters available for this part.'}
            {data?.characters.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/characters/character/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
        </Spin>
    )
}
export default PartInfo;