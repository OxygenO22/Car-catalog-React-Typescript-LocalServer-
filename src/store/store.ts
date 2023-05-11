import { cartReducer } from "./cart/cart.slice";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/Product.api";
import todoSlice from "./toDoSlice/todoSlice";
import cashSlice from "./cashReducer/cashSlice";
import { GoodsApi } from "../components/screens/goodsList/GoodsApi";
import  filterSlice  from "./toDoSlice/filterSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, 
    [GoodsApi.reducerPath]: GoodsApi.reducer, 
    cart: cartReducer, 
    todos: todoSlice,
    cash: cashSlice,
    filters: filterSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([productApi.middleware, GoodsApi.middleware]),
});


export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;