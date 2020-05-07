import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "stateManagment";
import { createBrowserHistory } from "history";
import { Router, Route } from 'react-router-dom'
import User from "domain/User";

const customHistory = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <Route exact path="/" component={App} />
      <Route exact path="/random-user" component={User} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
