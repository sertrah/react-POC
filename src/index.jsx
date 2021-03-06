import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "stateManagment";
import { createBrowserHistory } from "history";
import "./index.css";
import { Router } from 'react-router-dom'
/* 
Route
import App from "./components/App";
import User from "domain/User";
import {IntlProvider} from "react-intl"; */
import ApplicationTree from "domain/ApplicationTree";

const customHistory = createBrowserHistory();

const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <ApplicationTree  locale={language} />

    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
