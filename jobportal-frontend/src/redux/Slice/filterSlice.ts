/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {},
  reducers: {
    updateFilter: (state, action) => {
      state = { ...state, ...action.payload };
      console.log(state);
      return state;
    },
    resetFilter: (state, action) => {
      state = {};
      return state;
    },
  },
});

export const { updateFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
