import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useStory } from "../hooks/stories-hooks";
import StoryCard from "./story-card";


const StoryInfo = ()=> {
  const {id} = useParams();
  const {data, loading} = useStory(id);
  return (
    <Spin spinning={loading}>
      <div className="story-info-container info-container">
        <div className="story-info info-card">
          {data && <StoryCard story={data}/>}
        </div>
        <div className="info-container-flex">
          <div className="info-name info-item"><span><b>Title:</b> {data?.title}</span><br />
          <span><b>Original Issue:</b> {data?.originalIssue.name}</span><br />
            <span><b>Description:</b> {data?.description ? data?.description  : 'No information available for this story.'}</span></div>
          <div className="info-events info-item"><span><b>Events:</b> {data?.events.available ? data?.events.available : 'No events available for this story.'}</span>
            {data?.events.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.resourceURI}>
                  <Link to={'/events/event/' + id}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </div>
          <div className="info-series info-item"><span><b>Series:</b> {data?.series.available ? data?.series.available : 'No series available for this story.'}</span>
            {data?.series.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.resourceURI}>
                  <Link to={'/series/part/' + id}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </div>
          <div className="info-comics info-item"><span><b>Comics:</b> {data?.comics.available ? data?.comics.available : 'No comics available for this story.'}</span>
            {data?.comics.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.resourceURI}>
                  <Link to={'/comics/comic/' + id}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </div>
          <div className="info-creators info-item"> <span><b>Creators: </b>{data?.creators.available ? data?.creators.available : 'No creators available for this story.'}</span>
            {data?.creators.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.resourceURI}>
                  <Link to={'/creators/creator/' + id}>
                    <span>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </div>
          <div className="info-characters info-item"><span><b>Characters: </b>{data?.characters.available ? data?.characters.available : 'No characters available for this story.'}</span>
            {data?.characters.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.resourceURI}>
                  <Link to={'/characters/character/' + id}>
                    <span>{item.name}</span> 
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    </Spin>
  )
}
export default StoryInfo;