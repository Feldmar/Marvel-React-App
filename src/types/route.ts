import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element?: ReactNode
    children?:  TRoute[]
    name: string //опционально
}