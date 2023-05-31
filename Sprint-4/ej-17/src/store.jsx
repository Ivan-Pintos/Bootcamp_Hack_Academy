import { configureStore } from "@reduxjs/toolkit";

import CountReducer from "./reducers/CountReducer.jsx";

const store = configureStore({
  reducer: { Count: CountReducer },
});

export default store;
