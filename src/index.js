import React from "react";
import ReactDOM from "react-dom";

// provider
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// reducers
import reducers from "./reducers";
import App from "./components/app";

import thunk from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
