import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";
import navigationSlice from "./navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    account: accountSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
