import { useEffect, useState } from "react";
import { Filter } from "../../models/common";
import { EventsModel } from "../../models/events-model";
import MarvelApi from "../../services/marvelAPI";

function useEvents() {
  const [data, setData] = useState<[] | EventsModel[]>([])
  const [filter, setFilter] = useState<Filter>({offset: 0, limit: 10, page: 1})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)
    
  const getData = async (params?: Filter) => {
    setLoading(true);
    try {               
      const response = await MarvelApi.getEvents(params ? params : filter)
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
function useEvent(id?: string) {    
  const [data, setData] = useState<null | EventsModel>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    if (id) {
      setLoading(true);
      (async () => {
        try {
          const {data: {data}} = await MarvelApi.getEvent(id)  						
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
export { useEvents, useEvent }

