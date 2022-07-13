import { useEffect, useState } from "react";
import { ComicsModel } from "../../models/comics-model";
import { Filter } from "../../models/common";
import MarvelApi from "../../services/marvelAPI";

function useComics() {
    const [data, setData] = useState<[] | ComicsModel[]>([])
    const [filter, setFilter] = useState<Filter | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    const getData = async () => {
        setLoading(true);
        try {               
            // const {data: {data: {results, ...rest}}} = await MarvelApi.getCharacters()
            const response = await MarvelApi.getComics()
            const { results, ...rest} = response.data.data
            setData(results);
            setFilter(rest)
            console.log(results)
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

function useComic(id?: string) {    
    const [data, setData] = useState<null | ComicsModel>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)

    useEffect(() => {
        if (id) {
            setLoading(true);
            (async () => {
                try {
                    const {data: {data}} = await MarvelApi.getComic(id)  
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
export { useComics, useComic }