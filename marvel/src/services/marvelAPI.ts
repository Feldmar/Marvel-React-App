import axios from 'axios'
import { useEffect, useState } from 'react';
import CharacterModel from '../models/character-model';

function useRender(){
  const [characterList, setCharacterList] = useState<Array<CharacterModel>>([])
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getCharacters()
  },[])

  const hash ="e2f0393349b916df7ffebf7b48e2a7b9";
  const getCharacters = ()=>{
    let heroesArray : Array<CharacterModel> =[]
    const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=100&apikey=3cf2949e02b2b1a7f4b16606c304108c&hash=${hash}`

    axios.get(url).then((response)=>{
      response.data.data.results.forEach((item:any) => {
        heroesArray.push({
          id:item.id,
          image: item.thumbnail.path+"/portrait_fantastic."+item.thumbnail.extension,
          name:item.name
        })
        setCharacterList(heroesArray)
      });
      console.log(response, "response");
    }).catch((error)=>{
      console.error(error,"error")
    })
  }
  return {characterList, loading}
}
export default useRender;
