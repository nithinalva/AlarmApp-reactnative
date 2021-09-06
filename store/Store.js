import { configureStore } from "@reduxjs/toolkit";
import TimeSlice from "../reducers/TimeSlice";

export const Store = configureStore({
  reducer: {
    time: TimeSlice,
  },
});
