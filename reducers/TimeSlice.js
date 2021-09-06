import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: [],
};

export const TimeSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    addTime: (state, action) => {
      state.time = [...state.time, action.payload];
    },
    updateStatus: (state, action) => {
      const index = state.time.findIndex((time) => time.id == action.payload);
      console.log("action is ", action.payload);
      // console.log(index);
      const newArray = [...state.time];
      newArray[index].status = !newArray[index].status;
      state.time = newArray;

      console.log(index);

      //
    },
  },
});

export const { addTime, updateStatus } = TimeSlice.actions;
export const selectTime = (state) => state.time;
export default TimeSlice.reducer;
