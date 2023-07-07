import { configureStore } from "@reduxjs/toolkit";
import DatesSlice from "./slices/dates/datesSlice";

export const store = configureStore({
  reducer: {
    dates: DatesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
