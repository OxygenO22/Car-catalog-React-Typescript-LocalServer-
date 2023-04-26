import { cartReducer } from "./cart/cart.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/Product.api";

export const store = configureStore({reducer: {
  [productApi.reducerPath]: productApi.reducer, cart: cartReducer, cash: cartReducer
},
middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),});


export type TypeRootState = ReturnType<typeof store.getState>