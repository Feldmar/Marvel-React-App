import { FC, useContext } from "react";
import { useRoutes } from "react-router-dom";
import CharactersWrapper from "../components/characters";
import CharactersInfo from "../components/characters-info";
import AppContext from "../components/context/context";
// import Books from "../books";
// import Characters from "../characters";
// import CharactersF from "../characters/characters-f";
// import FormComponent from "../components/form";
// import AppContext from "../context/context";

import { TRoute } from "../types/route";
import { Paths } from "./path";

export const ChartersRoutes: TRoute[] = [
    {path: '', element: <CharactersWrapper/>, name: 'Characters'},
    {path: Paths.character, element: <CharactersInfo/>, name: 'Characters1'},
]


// const TestComponent: FC<{children: any}> = ({children}) => {
//     return (
//         <>
//             <div>extra Books</div>
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
        
        return Routes
    }
    return (
        <>
            {useRoutes(routesValidate())}
            
        </>
        )
}
export default AppRouting