import { Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { usePart } from "../hooks/series-hooks";
import PartCard from "./part-card";


const PartInfo = ()=> {
    const {id} = useParams();
    const {data, loading} = usePart(id);
    console.log(data);
   
    return (
        <Spin spinning={loading}>
            <div className="part-info">
                {data && <PartCard part={data}/>}
            </div>
            <div>Name: {data?.title}</div>
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this character.'}
            {data?.stories.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.type})
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
export default PartInfo;