import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { usePart } from "../hooks/series-hooks";
import PartCard from "./part-card";


const PartInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = usePart(id);
   
    return (
        <Spin spinning={loading}>
            <div className="part-info-container info-container">
            <div className="part-info info-card">
                {data && <PartCard part={data}/>}
            </div>
            <div className="info-container-flex">
            <div className="info-name info-item"><span><b>Name:</b> {data?.title}</span><br />
            <span><b>Description:</b> {data?.description ? data?.description  : 'No information available for this part.'}</span></div>
            <div className="info-events info-item"><span><b>Events:</b> {data?.events.available ? data?.events.available : 'No events available for this part.'}</span>
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
            <div className="info-stories info-item"><span><b>Stories:</b> {data?.stories.available ? data?.stories.available : 'No stories available for this part.'}</span>
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
            <div className="info-comics info-item"><span><b>Comics:</b> {data?.comics.available ? data?.comics.available : 'No comics available for this part.'}</span>
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
            <div className="info-creators info-item"><span><b>Creators:</b> {data?.creators.available ? data?.creators.available : 'No creators available for this part.'}</span>
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
            </div>
            <div className="info-characters info-item"> <span><b>Characters:</b> {data?.characters.available ? data?.characters.available : 'No characters available for this part.'}</span>
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
            </div></div></div>
        </Spin>
    )
}
export default PartInfo;