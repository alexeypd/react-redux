export const moduleName = 'appState';

export const CHANGE_INITIAL_RENDER = `@${moduleName}/CHANGE_INITIAL_RENDER`;

const initialState = {
  isInitialRender: true,
};

export default function appState(state = initialState, { type }) {
  switch (type) {
    case CHANGE_INITIAL_RENDER:
      return { ...state, isInitialRender: false };

    default:
      return state;
  }
}

export const changeInitialRender = () => (dispatch) => {
  dispatch({ type: CHANGE_INITIAL_RENDER });
};
