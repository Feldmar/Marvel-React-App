import { useRoutes } from 'react-router-dom';
import CharactersWrapper from '../components/characters/characters';
import CharactersInfo from '../components/characters/characters-info';
import ComicsWrapper from '../components/comics/comics';
import ComicsInfo from '../components/comics/comics-info';
import CreatorsInfo from '../components/creators/creator-info';
import CreatorsWrapper from '../components/creators/creators';
import EventInfo from '../components/events/event-info';
import EventsWrapper from '../components/events/events';
import PartInfo from '../components/series/part-info';
import SeriesWrapper from '../components/series/series';
import StoriesWrapper from '../components/stories/stories';
import StoryInfo from '../components/stories/story-info';
import { TRoute } from '../types/route';
import { Paths } from './path';

export const ChartersRoutes: TRoute[] = [
  { path: '', element: <CharactersWrapper /> },
  { path: Paths.character, element: <CharactersInfo /> },
];
export const ComicsRoutes: TRoute[] = [
  { path: '', element: <ComicsWrapper /> },
  { path: Paths.comic, element: <ComicsInfo /> },
];
export const CreatorsRoutes: TRoute[] = [
  { path: '', element: <CreatorsWrapper /> },
  { path: Paths.creator, element: <CreatorsInfo /> },
];
export const EventsRoutes: TRoute[] = [
  { path: '', element: <EventsWrapper /> },
  { path: Paths.event, element: <EventInfo /> },
];
export const SeriesRoutes: TRoute[] = [
  { path: '', element: <SeriesWrapper /> },
  { path: Paths.part, element: <PartInfo /> },
];
export const StoriesRoutes: TRoute[] = [
  { path: '', element: <StoriesWrapper /> },
  { path: Paths.story, element: <StoryInfo /> },
];

export const Routes: TRoute[] = [
  { path: Paths.main, element: null },
  { path: Paths.characters, children: ChartersRoutes },
  { path: Paths.comics, children: ComicsRoutes },
  { path: Paths.creators, children: CreatorsRoutes },
  { path: Paths.events, children: EventsRoutes},
  { path: Paths.series, children: SeriesRoutes},
  { path: Paths.stories, children: StoriesRoutes },
];

function AppRouting() {
  const routesValidate = () => {
    return Routes;
  };
  const routes = useRoutes(routesValidate());
    return(
      <>
        {routes}
      </>
    )
}
export default AppRouting;
