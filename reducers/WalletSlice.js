import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  wallet: null,
  message: [],
  minimum: 10,
};

export const WalletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addMoney: (state, action) => {
      state.wallet = state.wallet + action.payload;
    },
    addAlert: (state, action) => {
      const successMsg = ` ₹${
        action.payload.money
      } has been CREDITED to your wallet on ${moment().format(
        "MMMM Do YYYY, h:mm:ss a"
      )}`;
      const FailMsg = `Amount has been DEBITED from your wallet`;
      if (action.payload.msg == "success") {
        state.message = [...state.message, successMsg];
      } else if (action.payload.msg == "fail") {
        state.message = [...state.message, FailMsg];
      }
    },
    debitMoney: (state, action) => {
      state.wallet = state.wallet - state.minimum;
    },
  },
});

export const { addMoney, addAlert, debitMoney } = WalletSlice.actions;
export const WalletMoney = (state) => state.wallet;
export const Alerts = (state) => state.wallet.message;
export default WalletSlice.reducer;
