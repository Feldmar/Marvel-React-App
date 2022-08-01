import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useComic } from "../hooks/comics-hooks";
import ComicsCard from "./comics-card";

const ComicsInfo = () => {
    const {id} = useParams();
    const {data, loading} = useComic(id);
    const seriesId = data?.series.resourceURI.split('/').at(-1)
    return (
        <Spin spinning={loading}>
            <div className="comics-info-container info-container">
            <div className="comics-info info-card">
                {data && <ComicsCard comic={data}/>}
            </div>
            <div className="info-container-flex">
            <div className="info-name info-item">
                <span><b>Title:</b> {data?.title} </span> <br />
                <span><b>Description:</b> {data?.description ? data?.description  : 'No information available for this comics.'}</span></div>
            <div className="info-characters info-item"><span><b>Characters: </b>{data?.characters.available ? data?.characters.available : 'No characters available for this comics.'}</span>
            {data?.characters.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/characters/character/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })} </div>
            <div className="info-series info-item"><span><b>Series:</b></span>
            <li key={data?.series.name}>
                        <Link to={'/series/part/' + seriesId}>
                            <span>{data?.series.name}</span>
                            </Link>
                    </li>
            </div>
           <div className="info-stories info-item"><span><b>Stories:</b> {data?.stories.available ? data?.stories.available : 'No stories available for this comics.'}</span>
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
            <div className="info-events info-item"><span><b>Events:</b> {data?.events.available ? data?.events.available : 'No events available for this comics.'}</span>
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
            <div className="info-creators info-item"><span><b>Creators:</b> {data?.creators.available ? data?.creators.available : 'No creators available for this comics.'}</span>
            {data?.creators.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/creators/creator/' + id}>
                            <span>{item.name}</span>
                            </Link>
                    </li>
                )
            })}</div></div></div>
        </Spin>
    )
}
export default ComicsInfo;