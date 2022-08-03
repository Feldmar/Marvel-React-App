import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoriesModel } from 'src/models/stories-model';

//@ts-ignore
import img from './ki3.jpg'

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
    <div className="story-card card" onClick={handler}>
      <div className="story-card-wrapper card-wrapper">
        <div className="story-image">
          <Image className='image' src={img} />
        </div>
        <div className="story-name card-name ">
          <span> {story.originalIssue.name}</span>
        </div>
      </div>      
    </div>
  )
}
export default  StoryCard;