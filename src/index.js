import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { todoReducer } from "./redux/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(todoReducer,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
root.render(
  <Provider store={store}>
   
    <App />
  </Provider>
);
