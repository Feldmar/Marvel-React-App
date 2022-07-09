
import CharacterModel from "../models/character-model";
import useRender from "../services/marvelAPI";
import HeroCard from "./hero-card";

const CharactersWrapper = () => {
  const {characterList, loading} = useRender();
  console.log(characterList);
  return (
    <div className="characters-wrapper">
      <div className="characters-title">Characters</div>
      <div className="characters-block">
      {characterList.length > 0 && characterList.map((item: CharacterModel, index: number) => {
        return <HeroCard key={index} character={item} />
      })}
    
      </div>
    </div>
  )
}
export  default CharactersWrapper