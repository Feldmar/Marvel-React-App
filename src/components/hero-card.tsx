import CharacterModel from '../models/character-model';

interface PropTypes {
  character : CharacterModel
}

const HeroCard = (props: PropTypes) => {
  return (
    <div className="hero-card">
      <div className="hero-card-wrapper">
      <div className="hero-image">
      <img src={props.character.image} alt={props.character.name}></img>
      </div>
      <div className="hero-name">
      {props.character.name}
      </div>
      </div>      
    </div>
  )
}
export default  HeroCard;