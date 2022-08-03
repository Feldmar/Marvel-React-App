import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SeriesModel } from '../../models/series-model';

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
    <div className="part-card card" onClick={handler}>
      <div className="part-card-wrapper card-wrapper">
        <div className="part-image">
          <Image className='image' src={part.thumbnail.path + '/portrait_xlarge.' + part.thumbnail.extension }/>
        </div>
        <div className="part-name card-name ">
          <span>{part.title}</span>
        </div>
      </div>      
    </div>
  )
}
export default  PartCard;