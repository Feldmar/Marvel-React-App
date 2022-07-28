import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useStory } from "../hooks/stories-hooks";
import StoryCard from "./story-card";


const StoryInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = useStory(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="story-info">
                {data && <StoryCard story={data}/>}
            </div>
            <div>Name: {data?.title}</div>
            <div>Description: {data?.description ? data?.description  : 'No information available for this story.'}</div>
            <div>Events: {data?.events.available ? data?.events.available : 'No events available for this story.'}
            {data?.events.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/events/event/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Series: {data?.series.available ? data?.series.available : 'No series available for this story.'}
            {data?.series.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/series/part/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this story.'}
            {data?.comics.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/comics/comic/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Creators: {data?.creators.available ? data?.creators.available : 'No creators available for this story.'}
            {data?.creators.items.map((item) => {
                const id = item.resourceURI.split('/').at(-1)
                return (
                    <li key={item.name}>
                        <Link to={'/creators/creator/' + id}>{item.name}</Link>
                    </li>
                )
            })}
            </div>
            <div>Characters: {data?.characters.available ? data?.characters.available : 'No characters available for this story.'}
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
export default StoryInfo;