import { useEffect, useState } from "react";
import { ComicsModel } from "../../models/comics-model";
import { Filter } from "../../models/common";
import MarvelApi from "../../services/marvelAPI";

function useComics() {
  const [data, setData] = useState<[] | ComicsModel[]>([])
  const [filter, setFilter] = useState<Filter>({offset: 0, limit: 10, page: 1})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  const getData = async (params?: Filter) => {
    setLoading(true);
    try {               
      const response = await MarvelApi.getComics(params ? params : filter)
      const { results, ...rest} = response.data.data
      setData(results);
      const newFilter = {
        ...rest,
        page: params?.page ? params?.page : 1
      } as Filter
      setFilter(newFilter)
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handlerFilter = (params: Filter) => {
    getData(params)
  }
  return {data, loading, error, filter, handlerFilter}
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