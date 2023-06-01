import { createSlice } from "@reduxjs/toolkit";

const listMarketSlice = createSlice({
  name: "list_market",
  initialState: [
    {
      id: 1,
      name: "Frutería",
      createdDate: Date(),
      products: [
        { id: 1, name: "Bananas", selected: false },
        { id: 2, name: "Manzanas", selected: true },
        { id: 3, name: "Frutillas", selected: false },
        { id: 4, name: "Sandías", selected: true },
      ],
    },
    {
      id: 2,
      name: "Verdulería",
      createdDate: Date(),
      products: [
        { id: 1, name: "Tomates", selected: false },
        { id: 2, name: "Zanahorias", selected: true },
        { id: 3, name: "Espinacas", selected: false },
      ],
    },
    {
      id: 3,
      name: "Supermercado ",
      createdDate: Date(),
      products: [
        { id: 1, name: "Cereales", selected: false },
        { id: 2, name: "Galletas", selected: false },
      ],
    },
  ],

  reducers: {
    addMarket(state, action) {
      return [...state, action.payload];
    },
    removeMarket(state, action) {
      return state.filter((market) => market.id !== action.payload);
    },
    addProduct(state, action) {
      return state.map((market) =>
        market.id === action.payload.id
          ? (market.products = action.payload.product)
          : market
      );
    },
    removeProduct(state, action) {
      return state.map((mercado) => mercado.id === action.payload.mercadoId)
        ? mercado.products.filter(
            (product) => product.id !== action.payload.productId
          )
        : mercado;
    },
    selectProduct(state, action) {
      return state.map((mercado) => mercado.id === action.payload.mercadoId)
        ? mercado.products.map((product) =>
            product.id !== action.payload.productId
              ? (product.selected = !product.selected)
              : product
          )
        : mercado;
    },
  },
});
const { actions, reducer } = listMarketSlice;
export const {
  addMarket,
  removeMarket,
  addProduct,
  removeProduct,
  selectProduct,
} = actions;
export default reducer;
