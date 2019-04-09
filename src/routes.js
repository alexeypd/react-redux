import paths from "./paths";

import Articles from "./components/Articles/Articles";
import Comments from "./components/Comments/Comments";

export const routesList = [
  {
    path: paths.home,
    isExact: true,
    component: Articles,
  },
  {
    path: paths.comments,
    isExact: true,
    component: Comments,
  },
];

export const routes = [...routesList];
