import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeriesModel } from 'src/models/series-model';

type TProps = {
	part : SeriesModel
}

const PartCard: FC<TProps> = ({part}) => {
	const navigate = useNavigate()
	const handler = (e: any) => {
		if (e.target.className !== 'ant-image-mask') {
			navigate(`part/${part.id}`)
		}
	}
	return (
		<div className="part-card" onClick={handler}>
			<div className="part-card-wrapper">
				<div className="part-image">
					<Image className='image' src={part.thumbnail.path + '/portrait_xlarge.' + part.thumbnail.extension }/>
				</div>
				<div className="part-name">
					{part.title}
				</div>
			</div>      
		</div>
	)
}
export default  PartCard;