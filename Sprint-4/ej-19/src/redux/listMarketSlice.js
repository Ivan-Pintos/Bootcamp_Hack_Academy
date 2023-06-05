import { createSlice, nanoid } from "@reduxjs/toolkit";

const listMarketSlice = createSlice({
  name: "list_market",
  initialState: [
    {
      id: nanoid(),
      name: "Frutería",
      createdDate: Date(),
      products: [
        { id: nanoid(), name: "Bananas", selected: false },
        { id: nanoid(), name: "Manzanas", selected: true },
        { id: nanoid(), name: "Frutillas", selected: false },
        { id: nanoid(), name: "Sandías", selected: true },
      ],
    },
    {
      id: nanoid(),
      name: "Verdulería",
      createdDate: Date(),
      products: [
        { id: nanoid(), name: "Tomates", selected: false },
        { id: nanoid(), name: "Zanahorias", selected: true },
        { id: nanoid(), name: "Espinacas", selected: false },
      ],
    },
    {
      id: nanoid(),
      name: "Supermercado ",
      createdDate: Date(),
      products: [
        { id: nanoid(), name: "Cereales", selected: false },
        { id: nanoid(), name: "Galletas", selected: false },
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
        market.id === action.payload.marketId
          ? market.products.push({
              id: action.payload.productId,
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
      return state.map((market) =>
        market.id === action.payload.mercadoId
          ? {
              ...market,
              products: market.products.map((product) =>
                product.id === action.payload.productId
                  ? { ...product, selected: !product.selected }
                  : product
              ),
            }
          : market
      );
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
