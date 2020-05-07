/**
 * Action types
 */
const FETCH_SUMMARY_CASES = 'FETCH_SUMMARY_CASES';
const FETCH_SUMMARY_CASES_SUCCESS = 'FETCH_SUMMARY_CASES_SUCCESS';
const FETCH_SUMMARY_CASES_ERROR = 'FETCH_SUMMARY_CASES_ERROR';

const FETCH_ALL_CASES = 'FETCH_ALL_CASES';
const FETCH_ALL_CASES_SUCCESS = 'FETCH_ALL_CASES_SUCCESS';
const FETCH_ALL_CASES_ERROR = 'FETCH_ALL_CASES_ERROR';

const RESET_CASES  = 'RESET_CASES  ';


export const constants = {
  FETCH_SUMMARY_CASES,
  FETCH_SUMMARY_CASES_SUCCESS,
  FETCH_SUMMARY_CASES_ERROR,
  FETCH_ALL_CASES,
  FETCH_ALL_CASES_SUCCESS,
  FETCH_ALL_CASES_ERROR,
  RESET_CASES ,
};


function fetchCharacterByID(countries) {
  return {
    type: FETCH_SUMMARY_CASES_SUCCESS,
    payload: countries
  }
}

export const characterActions = { fetchCharacterByID }