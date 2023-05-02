import { cartReducer } from "./cart/cart.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/Product.api";
import { cashReducer } from "./cashReducer/cashReducer";
import todoSlice from "./toDoSlice/todoSlice";

export const store = configureStore({reducer: {
  [productApi.reducerPath]: productApi.reducer, 
  cart: cartReducer, 
  todos: todoSlice
  /* cash: cashReducer */
},
middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware),});


export type TypeRootState = ReturnType<typeof store.getState>