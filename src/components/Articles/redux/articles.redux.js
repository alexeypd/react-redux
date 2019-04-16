import { getArticles } from '../../../utils/fakeapi/getArticles';


export const moduleName = 'articles';

export const FETCH_ARTICLES_START = `@${moduleName}/FETCH_ARTICLESS_START`;
export const FETCH_ARTICLES_SUCCESS = `@${moduleName}/FETCH_ARTICLESS_SUCCESS`;
export const FETCH_ARTICLES_FAILURE = `@${moduleName}/FETCH_ARTICLESS_FAILURE`;

const initialState = {
  data: null,
  error: null,
  isFetching: true,
};

export default function articles(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES_START:
      return { ...state, isFetching: true };
    case FETCH_ARTICLES_SUCCESS:
      return { ...state, data: payload, isFetching: false };
    case FETCH_ARTICLES_FAILURE:
      return { ...state, error: payload, isFetching: false };

    default:
      return state;
  }
}

export const fetchArticlesData = () => async (dispatch) => {
  dispatch({ type: FETCH_ARTICLES_START });

  getArticles()
    .then((response) => {
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: response.articles });
    })
    .catch((error) => {
      dispatch({ type: FETCH_ARTICLES_FAILURE, payload: error });
    });
};
