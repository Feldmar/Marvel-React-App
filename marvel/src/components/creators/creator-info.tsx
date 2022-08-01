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
            <div className="creator-info-container info-container">
            <div className="creator-info info-card">
                {data && <CreatorCard creator={data}/>}
            </div>
            <div className="info-container-flex">
            <div className="info-name info-item"><span><b>Name:</b> {data?.firstName}</span></div>
            <div className="info-stories info-item"><span><b>Stories:</b> {data?.stories.available ? data?.stories.available : 'No stories available for this creator.'}</span>
            {data?.stories.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/stories/story/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div>
            <div className="info-events info-item"><span><b>Events:</b> {data?.events.available ? data?.events.available : 'No events available for this creator.'}</span>
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div>
            <div className="info-series info-item"><span><b>Series:</b> {data?.series.available ? data?.series.available : 'No series available for this creator.'}</span>
            {data?.series.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/series/part/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div>
            <div className="info-comics info-item"><span><b>Comics:</b> {data?.comics.available ? data?.comics.available : 'No comics available for this creator.'}</span>
            {data?.comics.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/comics/comic/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div></div></div>
        </Spin>
    )
}
export default CreatorsInfo;