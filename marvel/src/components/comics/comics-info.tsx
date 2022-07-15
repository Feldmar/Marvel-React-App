import { Spin } from "antd";
import { useParams } from "react-router-dom";
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
            <div>Stories: {data?.stories.available ? data?.stories.available : 'No stories available for this comics.'}
                {data?.stories.items.map((item,index) => (
                    <li key={index}>
                        {item.name} ({item.type || item.resourceURI})
                    </li>
                    ))}       </div>
            <div>Series: {data?.series.name  ? data?.series.name  : 'No series available for this comics.'}</div>
            <div>Creators: {data?.creators.available ? data?.creators.available : 'No series available for this comics.'}
                {data?.creators.items.map((item,index) => (
                <li key={index}>
                    {item.name} ({item.role})
                    </li>
                    ))}</div>
            <div>Prices: {data?.prices.price ? data?.prices.price : 'No prices available for this comics'}</div>

        </Spin>
    )
}
export default ComicsInfo;