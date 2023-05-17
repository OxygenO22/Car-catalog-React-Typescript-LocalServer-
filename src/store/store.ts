import authSlice from "./authorization/authSlice"; 
import { cartReducer } from "./cart/cart.slice";
import cashSlice from "./cashReducer/cashSlice";
import { configureStore } from "@reduxjs/toolkit";
import  filterSlice  from "./toDoSlice/filterSlice";
import { GoodsApi } from "../components/screens/goodsList/GoodsApi";
import { productApi } from "./product/Product.api";
import todoSlice from "./toDoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, 
    [GoodsApi.reducerPath]: GoodsApi.reducer, 
    cart: cartReducer, 
    todos: todoSlice,
    cash: cashSlice,
    filters: filterSlice,
    authorization: authSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([productApi.middleware, GoodsApi.middleware]),
});


export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;