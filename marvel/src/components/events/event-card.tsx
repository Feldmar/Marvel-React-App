import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventsModel } from 'src/models/events-model';

type TProps = {
	event : EventsModel
}

const EventCard: FC<TProps> = ({event}) => {
	const navigate = useNavigate()
	const handler = (e: any) => {
		if (e.target.className !== 'ant-image-mask') {
			navigate(`event/${event.id}`)
		}
	}
	return (
		<div className="event-card card" onClick={handler}>
			<div className="event-card-wrapper card-wrapper">
				<div className="event-image">
					<Image className='image' src={event.thumbnail.path + '/portrait_xlarge.' + event.thumbnail.extension }/>
				</div>
				<div className="event-name card-name ">
					<span>{event.title}</span>
				</div>
			</div>      
		</div>
	)
}
export default  EventCard;