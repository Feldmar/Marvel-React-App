import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComicsModel } from 'src/models/comics-model';

type TProps = {
	comic : ComicsModel
}

const ComicsCard: FC<TProps> = ({comic}) => {
	const navigate = useNavigate()
	const handler = (e: any) => {
		if (e.target.className !== 'ant-image-mask') {
			navigate(`comic/${comic.id}`)
		}
	}
	return (
		<div className="comics-card" onClick={handler}>
			<div className="comics-card-wrapper">
				<div className="comics-image">
					<Image className='image' src={comic.thumbnail.path + '/portrait_xlarge.' + comic.thumbnail.extension}/>
				</div>
				<div className="comics-name">
					{comic.title}
				</div>
			</div>      
		</div>
	)
}
export default  ComicsCard;