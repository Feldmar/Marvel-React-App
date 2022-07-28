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
export default StoryInfo;