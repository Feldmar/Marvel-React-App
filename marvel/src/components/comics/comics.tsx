import { Pagination, Spin } from "antd";
import { useComics } from "../hooks/comics-hooks";
import ComicsCard from "./comics-card";

const ComicsWrapper = () => {
  	const {data, loading, filter} = useComics();
  	console.log(loading);
	  console.log(filter);
  	return (
		<Spin spinning={loading}>
	  		<div className="comics-wrapper">
		  		<div className="comics-title">Comics</div>
		  		<div className="comics-block">
					{data?.map((comic, index) => {
			  			return <ComicsCard key={index} comic={comic} />
					})}
		  	</div>
		  	<Pagination
			defaultCurrent={1 || filter?.count }
			defaultPageSize={filter?.count ? filter?.count : 5}
			total={filter?.limit ? filter?.limit : 100}
			showSizeChanger={true}
			showQuickJumper={true}
		  	/>
	  		</div>
		</Spin>
 	)
}
export  default ComicsWrapper