import listMarketReducer from "../redux/listMarketSlice.js";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    listMarket: listMarketReducer,
  },
});
