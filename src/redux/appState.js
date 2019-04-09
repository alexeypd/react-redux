export const moduleName = 'appState';

export const SWITCH_MODE = `@${moduleName}/SWITCH_MODE`;

const initialState = {};

export default function appState(state = initialState, { type, payload }) {
  switch (type) {
    case SWITCH_MODE:
      return { ...state, mode: payload };

    default:
      return state;
  }
}

export const switchModeAction = data => ({ type: SWITCH_MODE, payload: data });
