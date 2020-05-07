import { call, put, takeLatest } from 'redux-saga/effects'
import { userService } from '../../services/randomServices/user';
import { constants } from 'stateManagment/actions/user';

function* fetchUser(action = "") {
   try {
      const randomCard = yield call(userService.getUser, action);      
      yield put({type: constants.FETCH_USER_SUCCESS, payload: randomCard});
   } catch (e) {
      yield put({type: constants.FETCH_USER_ERROR, message: e.message});
   }
}

function* watchForUser() {
  yield takeLatest(constants.FETCH_USER, fetchUser);
}

export default watchForUser;