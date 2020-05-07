import { constants } from "../actions/cases";

/**
  TYPE
    {
      "Country": "ALA Aland Islands",
      "CountryCode": "AX",
      "Slug": "ala-aland-islands",
      "NewConfirmed": 0,
      "TotalConfirmed": 0,
      "NewDeaths": 0,
      "TotalDeaths": 0,
      "NewRecovered": 0,
      "TotalRecovered": 0,
      "Date": "2020-04-05T06:37:00Z"
    }
 */
const initialState = {
  data: null,
  error: null,
  global: null,
  date: null,
  isSummary: false,
  isLoading: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_SUMMARY_CASES: {
      return { ...state, isLoading: true };
    }
    case constants.FETCH_SUMMARY_CASES_SUCCESS: {
      return {
        ...state,
        data: action.payload.Countries,
        date: action.payload.Date,
        global: action.payload.Global,
        error: null,
        isLoading: false,
      };
    }

    case constants.FETCH_SUMMARY_CASES_ERROR: {
      return { ...state, error: "ERRORCITO", isLoading: false };
    }
    case constants.RESET_CHARACTER: {
      return initialState;
    }
    default:
      return state;
  }
}
