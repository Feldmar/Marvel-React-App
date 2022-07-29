import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useCreator } from "../hooks/creators-hooks";
import CreatorCard from "./creator-card";

const CreatorsInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = useCreator(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="creator-info">
                {data && <CreatorCard creator={data}/>}
            </div>
            <div>Name: {data?.firstName}</div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this creator.'}
            {data?.stories.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/stories/story/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this creator.'}
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Series: {data?.series.available ? data?.series.available : 'No series available for this creator.'}
            {data?.series.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/series/part/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this creator.'}
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
export default CreatorsInfo;