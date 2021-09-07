import { configureStore } from "@reduxjs/toolkit";
import TimeSlice from "../reducers/TimeSlice";
import { combineReducers } from "redux";
import WalletSlice from "../reducers/WalletSlice";

const rootReducer = combineReducers({
  time: TimeSlice,
  wallet: WalletSlice,
});

export const Store = configureStore({
  reducer: rootReducer,
});
