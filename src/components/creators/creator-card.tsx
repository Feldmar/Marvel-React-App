import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreatorsModel } from '../../models/creators-model';

type TProps = {
  creator : CreatorsModel
}

const CreatorCard: FC<TProps> = ({creator}) => {
  const navigate = useNavigate()
  const handler = (e: any) => {
    if (e.target.className !== 'ant-image-mask') {
      navigate(`creator/${creator.id}`)
    }
  }
  return (
    <div className="creator-card card" onClick={handler}>
      <div className="creator-card-wrapper card-wrapper">
        <div className="creator-image">
          <Image className='image' src={creator.thumbnail.path + '/portrait_xlarge.' + creator.thumbnail.extension }/>
        </div>
        <div className="creator-name card-name ">
          <span>{creator.firstName}</span>
        </div>
      </div>      
    </div>
  )
}
export default  CreatorCard;