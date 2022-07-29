import { Image } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterModel } from 'src/models/character-model';

type TProps = {
	character : CharacterModel
}

const HeroCard: FC<TProps> = ({character}) => {
	const navigate = useNavigate()
	const handler = (e: any) => {
		if (e.target.className !== 'ant-image-mask') {
			navigate(`character/${character.id}`)
		}
	}
	return (
		<div className="hero-card card" onClick={handler}>
			<div className="hero-card-wrapper card-wrapper">
				<div className="hero-image">
					<Image className='image' src={character.thumbnail.path + '/portrait_xlarge.' + character.thumbnail.extension }/>
				</div>
				<div className="hero-name card-name ">
					<span>{character.name}</span>
				</div>
			</div>      
		</div>
	)
}
export default  HeroCard;