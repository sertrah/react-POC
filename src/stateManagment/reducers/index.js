import { combineReducers } from 'redux';
import * as fromCountries from './countries';
import * as fromUser from './user';

export default combineReducers({
  countries: fromCountries.reducer,
  user: fromUser.reducer,
});