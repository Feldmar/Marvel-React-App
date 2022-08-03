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
