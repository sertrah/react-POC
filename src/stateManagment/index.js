import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from './reducers';
import mySaga from './sagas/cases';
import watchForUser from './sagas/user';
import { all } from "redux-saga/effects";

// Combine sagas :D

function* rootSaga() {
  yield all([
    mySaga(),
    watchForUser()
  ])
}


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState) {
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  );
  // create store
  return createStore(
    reducer,
    initialState,
    enhancer
  );
}

const store = configureStore();

sagaMiddleware.run(rootSaga);

export { store };