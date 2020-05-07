import { constants } from "../actions/user";

const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_USER: {
      return { ...state, isLoading: true };
    }
    case constants.FETCH_USER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false,
      };
    }

    case constants.FETCH_USER_ERROR: {
      return { ...state, error: "ERRORCITO", isLoading: false };
    }
    case constants.RESET_CHARACTER: {
      return initialState;
    }
    default:
      return state;
  }
}
