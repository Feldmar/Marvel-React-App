import { Pagination, Spin } from "antd";
import { useStories } from "../hooks/stories-hooks";
import StoryCard from "./story-card";

const StoriesWrapper = () => {
  const {data, loading, filter, handlerFilter} = useStories();

  const handlerPagination = (page: number, pageSize: number) => {
    handlerFilter({limit: pageSize, offset: (page - 1) * 10, page: page})
  }

  return (
    <Spin spinning={loading}>
      <div className="stories-wrapper" >
        <div className="stories-title wrapper-title">Stories</div>
        <div className="stories-block card-block">
          {data?.map((story, index) => {
            return <StoryCard key={index} story={story} />
          })}
        </div>
        <Pagination 
          current={filter?.page}
          total={filter?.total}
          pageSize={filter?.limit ? filter?.limit : 10}
          onChange={handlerPagination}
        />
      </div>
    </Spin>
   )
}
export  default StoriesWrapper