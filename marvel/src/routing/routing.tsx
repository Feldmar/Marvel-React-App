import { useRoutes } from 'react-router-dom';
import CharactersWrapper from 'src/components/characters/characters';
import CharactersInfo from 'src/components/characters/characters-info';
import ComicsWrapper from 'src/components/comics/comics';
import ComicsInfo from 'src/components/comics/comics-info';
import CreatorsInfo from 'src/components/creators/creator-info';
import CreatorsWrapper from 'src/components/creators/creators';
import EventInfo from 'src/components/events/event-info';
import EventsWrapper from 'src/components/events/events';
import PartInfo from 'src/components/series/part-info';
import SeriesWrapper from 'src/components/series/series';
import StoriesWrapper from 'src/components/stories/stories';
import StoryInfo from 'src/components/stories/story-info';
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
export const CreatorsRoutes: TRoute[] = [
    { path: '', element: <CreatorsWrapper />, name: 'Creators' },
    { path: Paths.creator, element: <CreatorsInfo />, name: 'Creators1' },
];
export const EventsRoutes: TRoute[] = [
    { path: '', element: <EventsWrapper />, name: 'Events' },
    { path: Paths.event, element: <EventInfo />, name: 'Events1' },
];
export const SeriesRoutes: TRoute[] = [
    { path: '', element: <SeriesWrapper />, name: 'Seies' },
    { path: Paths.part, element: <PartInfo />, name: 'Part' },
];
export const StoriesRoutes: TRoute[] = [
    { path: '', element: <StoriesWrapper />, name: 'Stories' },
    { path: Paths.story, element: <StoryInfo />, name: 'Story' },
];
export const Routes: TRoute[] = [
    { path: Paths.main, element: null, name: 'Home' },
    { path: Paths.characters, children: ChartersRoutes, name: 'Characters' },
    { path: Paths.comics, children: ComicsRoutes, name: 'Comics' },
    { path: Paths.creators, children: CreatorsRoutes, name: 'Creators' },
    { path: Paths.events, children: EventsRoutes, name: 'Events' },
    { path: Paths.series, children: SeriesRoutes, name: 'Series' },
    { path: Paths.stories, children: StoriesRoutes, name: 'Stories' },
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
