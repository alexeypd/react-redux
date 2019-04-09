import paths from './paths';

import Articles from './components/Articles/Articles';
import Article from './components/Article/Article';


export const routesList = [
  {
    path: paths.home,
    isExact: true,
    component: Articles,
  },
  {
    path: paths.article,
    isExact: true,
    component: Article,
  },
];

export const routes = [...routesList];
