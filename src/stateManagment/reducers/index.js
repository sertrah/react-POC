import { combineReducers } from 'redux';
import * as fromCountries from './countries';
import * as fromUser from './user';
import * as fromLocal from './local';

export default combineReducers({
  countries: fromCountries.reducer,
  user: fromUser.reducer,
  localeReducer: fromLocal.reducer
});