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
        </Spin>
    )
}
export default ComicsInfo;