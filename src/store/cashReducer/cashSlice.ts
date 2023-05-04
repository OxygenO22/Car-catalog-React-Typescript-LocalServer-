import { createSlice } from "@reduxjs/toolkit";

export const cashSlice = createSlice({
  name: "cash",
  initialState: {
    cash: 5
  },
  reducers: {
    addCash: (state, action) => {
      state.cash += 5;
  },
    getCash: (state, action) => {
      state.cash -= 5;
  },}
});

export const {addCash, getCash} = cashSlice.actions;
export default cashSlice.reducer;