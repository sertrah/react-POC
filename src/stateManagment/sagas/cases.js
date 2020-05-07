import { call, put, takeLatest } from 'redux-saga/effects'
import {apiCovid} from '../../services/covid19';
import { constants } from 'stateManagment/actions/cases';

function* fetchSummaryCases(action = "") {
   try {
      const summaryCases = yield call(apiCovid.getGlobalSummary, action);
      console.log("[1]", summaryCases);
      
      yield put({type: constants.FETCH_SUMMARY_CASES_SUCCESS, payload: summaryCases});
   } catch (e) {
      yield put({type: constants.FETCH_SUMMARY_CASES_ERROR, message: e.message});
   }
}

function* fetchAllCases(action = "") {
   try {
      const allCases = yield call(apiCovid.getAll, action);
      yield put({type: constants.FETCH_ALL_CASES_SUCCESS, payload: allCases});
   } catch (e) {
      yield put({type: constants.FETCH_ALL_CASES_ERROR, message: e.message});
   }
}

function* mySaga() {
  yield takeLatest(constants.FETCH_SUMMARY_CASES, fetchSummaryCases);
}

export default mySaga;