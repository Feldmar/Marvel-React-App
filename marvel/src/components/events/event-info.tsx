import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { useEvent } from "../hooks/events-hooks";
import EventCard from "./event-card";


const EventInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = useEvent(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="event-info">
                {data && <EventCard event={data}/>}
            </div>
            <div>Name: {data?.title}</div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this character.'}
            {data?.stories.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.type})
                    </li>
                    ))}
            </div>
    
            <div>Series: {data?.series.available ? data?.series.available : 'No series available for this character.'}
            {data?.series.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.resourceURI})
                    </li>
                    ))}
            </div>
            <div >Comics: {data?.comics.available ? data?.comics.available : 'No comics available for this character.'}
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
export default EventInfo;