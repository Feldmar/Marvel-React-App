
import { useEffect, useState } from "react";
import { CharacterModel } from "../../models/character-model";
import { Filter } from "../../models/common";
import MarvelApi from "../../services/marvelAPI";

function useCharacters() {
    const [data, setData] = useState<[] | CharacterModel[]>([])
    const [filter, setFilter] = useState<Filter | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const getData = async () => {
        setLoading(true);
        try {               
            // const {data: {data: {results, ...rest}}} = await MarvelApi.getCharacters()
            const response = await MarvelApi.getCharacters()
            const { results, ...rest} = response.data.data
            setData(results);
            setFilter(rest)
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return {data, loading, error, filter}
}
function useCharacter(id?: string) {    
    const [data, setData] = useState<null | CharacterModel>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        if (id) {
            setLoading(true);
            (async () => {
                try {
                    const {data: {data}} = await MarvelApi.getCharacter(id)  
                    console.log(data);
                                  
                    setData(data.results[0]);
                } catch (error: any) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
              })();
        }
    }, [id])
    return {data, loading, error}
}
export { useCharacters, useCharacter }

