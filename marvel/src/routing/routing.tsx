import { FC, useContext } from "react";
import { useRoutes } from "react-router-dom";
import CharactersWrapper from "../components/characters";
import CharactersInfo from "../components/characters-info";
import AppContext from "../components/context/context";

import { TRoute } from "../types/route";
import { Paths } from "./path";

export const ChartersRoutes: TRoute[] = [
    {path: '', element: <CharactersWrapper/>, name: 'Characters'},
    {path: Paths.character, element: <CharactersInfo/>, name: 'Characters1'},
]


// const TestComponent: FC<{children: any}> = ({children}) => {
//     return (
//         <>
//             {children}
//         </> 
//     )
// }

export const Routes: TRoute[] = [
    {path: Paths.main, element: null, name: 'Home'},
    {path: Paths.characters, children: ChartersRoutes, name: 'Characters'},
]


function AppRouting () {
    const context = useContext(AppContext)
    console.log(Routes);
    
    const routesValidate = () => {
        //@ts-ignore
        // if (context.role === 'user') {
        //     return Routes.filter((el) => el.userRole !== 'admin')
        // }
        return Routes
    }
    return (
        <>
            {useRoutes(routesValidate())}
            {/* <button onClick={() => {
                //@ts-ignore
                context.auhtHandler()
            }}>Login</button> */}
        </>
        )
}
export default AppRouting