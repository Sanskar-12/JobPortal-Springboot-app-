import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import profileReducer from "./Slice/profileSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export type IRootUserState = ReturnType<typeof store.getState>;
