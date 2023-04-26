import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/* const defaultState = {
  cash: 5,
};

export const cashReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
}; */

const initialState = {cash: 5};

export const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {addCash: (state, action) => {
    return { ...state, cash: state.cash + action.payload };
  },
  getCash: (state, action) => {
    return { ...state, cash: state.cash - action.payload };
  },}
});

export const cartReducer = cashSlice.reducer;
export const cartAction = cashSlice.actions;