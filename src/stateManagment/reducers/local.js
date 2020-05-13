import { constants } from "../actions/local";

const initialState = {
  locale: 'ja',
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHANGE_LOCALE_LANGUAGE_SUCCESS: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
}
