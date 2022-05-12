import { configureStore } from "@reduxjs/toolkit";
import navigationSlice from "./navigationSlice";

const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
