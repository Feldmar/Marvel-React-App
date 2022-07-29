export type MarvelList<T> = {
    count: number,
    limit: number,
    offset: number,
    results: T,
    total: number
}
export type Filter = {
    count?: number,
    limit: number,
    offset: number,
    total?: number,
    page?: number,
    name?: string
    title?: string,
    firstName?: string,
}