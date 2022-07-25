import { useRoutes } from 'react-router-dom';
import CharactersWrapper from 'src/components/characters/characters';
import CharactersInfo from 'src/components/characters/characters-info';
import ComicsWrapper from 'src/components/comics/comics';
import ComicsInfo from 'src/components/comics/comics-info';
import { TRoute } from '../types/route';
import { Paths } from './path';

export const ChartersRoutes: TRoute[] = [
    { path: '', element: <CharactersWrapper />, name: 'Characters' },
    { path: Paths.character, element: <CharactersInfo />, name: 'Characters1' },
];

export const ComicsRoutes: TRoute[] = [
    { path: '', element: <ComicsWrapper />, name: 'Comics' },
    { path: Paths.comic, element: <ComicsInfo />, name: 'Comics1' },
];

export const Routes: TRoute[] = [
    { path: Paths.main, element: null, name: 'Home' },
    { path: Paths.characters, children: ChartersRoutes, name: 'Characters' },
    { path: Paths.comics, children: ComicsRoutes, name: 'Comics' },
];

function AppRouting() {
    const routesValidate = () => {
        return Routes;
    };
    const routes = useRoutes(routesValidate());
    console.log(Routes);
    return(
        <>
            {routes}
        </>
    )
}
export default AppRouting;
