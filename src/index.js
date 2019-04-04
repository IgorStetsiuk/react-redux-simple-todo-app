import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

console.log(typeof rootReducer);

const loggerMiddleware = state => next => action => {
  console.log("dispatching and action :", action);
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
