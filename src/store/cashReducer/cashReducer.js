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

/* interface ICash {
  cash: number
} */

const initialState/* : ICash */ = {
  cash: 5
};

export const cashSlice = createSlice({
  name: "cash",
  initialState,
  reducers: {
    addCash: (state = initialState, action) => {
      return state + action.payload;
  },
    getCash: (state, action) => {
      return state - action.payload;
  },}
});

export const cashReducer = cashSlice.reducer;
export const cashAction = cashSlice.actions;