import {  Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/characters-hooks";
import HeroCard from "./hero-card";

const CharactersInfo = ()=> {
  const {id} = useParams();
  const {data, loading} = useCharacter(id);
  
  return (
    <Spin spinning={loading}>
      <div className="characters-info-container info-container">
        <div className="characters-info info-card">
          {data && <HeroCard character={data} />}
        </div>
        <div className="info-container-flex">
          <div className="info-name info-item"><span><b>Name: </b>{data?.name}</span>
            <div><span><b>Description:</b> {data?.description ? data?.description  : 'No information available for this character.'}</span></div></div>
          <div className="info-stories info-item"><span><b>Stories:</b> {data?.stories.available ? data?.stories.available : 'No stories available for this character.'}</span>
            {data?.stories.items.map((item) => {
              const id = item.resourceURI.split('/').at(-1)
              return (
                <li key={item.name}>
                  <Link to={'/stories/story/' + id}><span>{item.name}</span></Link>
                </li>
              )
            })}
          </div>
          <div className="info-events info-item"><span><b>Events:</b> {data?.events.available ? data?.events.available : 'No events available for this character.'}</span>
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
          <div className="info-series info-item"><span><b>Series: </b>{data?.series.available ? data?.series.available : 'No series available for this character.'}</span> 
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
          <div className="info-comics info-item"><span><b>Comics:</b> {data?.comics.available ? data?.comics.available : 'No comics available for this character.'}</span>
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
        </div>
      </div>
    </Spin>
  )
}
export default CharactersInfo;