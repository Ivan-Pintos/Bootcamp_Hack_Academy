import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./reducers/ProductReducer";

const store = configureStore({
  reducer: { ProductList: ProductReducer },
});

export default store;
