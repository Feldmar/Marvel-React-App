import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoriesModel } from 'src/models/stories-model';

type TProps = {
	story : StoriesModel
}

const StoryCard: FC<TProps> = ({story}) => {
	const navigate = useNavigate()
	const handler = (e: any) => {
		if (e.target.className !== 'ant-image-mask') {
			navigate(`story/${story.id}`)
		}
	}
	return (
		<div className="story-card" onClick={handler}>
			<div className="story-card-wrapper">
				<div className="story-image">
					<Image className='image' src="https://www.meme-arsenal.com/memes/7d661030bf7dd4b3754e1a8b682220b4.jpg" />
				</div>
				<div className="story-name">
					{story.title}
				</div>
			</div>      
		</div>
	)
}
export default  StoryCard;