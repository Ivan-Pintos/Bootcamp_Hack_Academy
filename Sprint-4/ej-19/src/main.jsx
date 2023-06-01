import React from "react";
import ReactDOM from "react-dom/client";
import listMarketReducer from "./redux/listMarketSlice.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
const store = configureStore({
  reducer: {
    listMarket: listMarketReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
