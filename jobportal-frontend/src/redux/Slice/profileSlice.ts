import { createSlice } from "@reduxjs/toolkit";
import { updateUserProfile } from "../../Services/ProfileService";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {},
  reducers: {
    changeProfile: (state, action) => {
      state = updateUserProfile(action.payload);
      return action.payload;
    },
    setProfile: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { changeProfile, setProfile } = profileSlice.actions;
export default profileSlice.reducer;
