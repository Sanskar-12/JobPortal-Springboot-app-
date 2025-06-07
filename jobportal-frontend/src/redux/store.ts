import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import profileReducer from "./Slice/profileSlice";
import filterReducer from "./Slice/filterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type IRootUserState = ReturnType<typeof store.getState>;
