/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sort",
  initialState: {},
  reducers: {
    updateSort: (state, action) => {
      state = action.payload;
      console.log(state);
      return state;
    },
    resetSort: (state, action) => {
      state = {};
      return state;
    },
  },
});

export const { updateSort, resetSort } = sortSlice.actions;
export default sortSlice.reducer;
