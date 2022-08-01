import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEvent } from "../hooks/events-hooks";
import EventCard from "./event-card";


const EventInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = useEvent(id);

    return (
        <Spin spinning={loading}>
            <div className="characters-info-container info-container">
            <div className="event-info  info-card">
                {data && <EventCard event={data}/>}
            </div>
            <div className="info-container-flex">

            <div className="info-name info-item"><span><b>Name:</b> {data?.title}</span></div>
            <div className="info-stories info-item"><span><b>Stories: </b>{data?.stories.available ? data?.stories.available : 'No stories available for this event.'}</span>
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
            <div className="info-characters info-item"><span><b>Characters:</b> {data?.characters.available ? data?.characters.available : 'No characters available for this event.'}</span>
            {data?.characters.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/characters/character/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div>
            <div className="info-series info-item"><span><b>Series:</b> {data?.series.available ? data?.series.available : 'No series available for this event.'}</span>
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
            <div className="info-comics info-item"><span><b>Comics:</b> {data?.comics.available ? data?.comics.available : 'No comics available for this event.'}</span>
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
            </div>
            <div className="info-creators info-item"><span><b>Creators:</b> {data?.creators.available ? data?.creators.available : 'No creators available for this event.'}</span>
            {data?.creators.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/creators/creator/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}
            </div></div></div>
        </Spin>
    )
}
export default EventInfo;