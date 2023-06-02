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
      state.map((market) =>
        market.id === action.payload.id
          ? market.products.push({
              id:
                market.products.length !== 0
                  ? market.products[market.products.length - 1].id + 1
                  : 1,
              selected: false,
              name: action.payload.product,
            })
          : market
      );
    },
    removeProduct(state, action) {
      console.log(action.payload.productId);
      return state.map((market) =>
        market.id === action.payload.mercadoId
          ? {
              ...market,
              products: market.products.filter(
                (product) => product.id !== action.payload.productId
              ),
            }
          : market
      );
    },
    selectProduct(state, action) {
      return state.map((market) => {
        return market.id === action.payload.mercadoId
          ? {
              ...market,
              products: market.products.map((product) =>
                product.id === action.payload.productId
                  ? { ...product, selected: !product.selected }
                  : product
              ),
            }
          : market;
      });
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
