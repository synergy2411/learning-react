import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Counter from "./Counter/Counter";
// import rootReducer from "./Counter/store/reducers/rootReducer";
import counterReducer from "./Counter/store/reducers/counterReducer";
import resultReducer from "./Counter/store/reducers/resultsReducer";
import logger from './Counter/store/middlewares/logger';

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    ctr: counterReducer,
    res: resultReducer,
  }),
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  // <StrictMode>
  // <App />,
  <Provider store={store}>
    <Counter />
  </Provider>,
  // </StrictMode>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
