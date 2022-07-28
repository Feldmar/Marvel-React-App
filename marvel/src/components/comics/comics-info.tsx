import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useComic } from "../hooks/comics-hooks";
import ComicsCard from "./comics-card";

const ComicsInfo = () => {
    const {id} = useParams();
    const {data, loading} = useComic(id);
    return (
        <Spin spinning={loading}>
            <div className="comics-info">
                {data && <ComicsCard comic={data}/>}
            </div>
            <div>Description: {data?.description ? data?.description  : 'No information available for this comics.'}</div>
            <div>Characters: {data?.characters.available ? data?.characters.available : 'No characters available for this comics.'}
                {data?.characters.items.map((item,index) => (
                    <li key={index}>
                        {item.name} ({ item.resourceURI})
                    </li>
                    ))} </div>
           <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this comics.'}
            {data?.stories.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/stories/story/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this comics.'}
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            {/* <div>Series: {data?.series.name ? data?.series.name : 'No series available for this comics.'}
            {data?.series.resourceURI.map((item:any) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/series/part/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div> */}
            <div>Creators: {data?.creators.available ? data?.creators.available : 'No creators available for this comics.'}
            {data?.creators.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/creators/creator/' + id}>{item.name}</Link>
                    </li>
                )
            })}</div>

        </Spin>
    )
}
export default ComicsInfo;