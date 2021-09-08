import { SUCCESS } from "../actions/action.types";
import moment from "moment";
export const AlertReducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      if (action.status == "success") {
        let messge = `amount of ${
          action.amount
        } was added to your wallet on ${moment().format(
          "MMMM Do YYYY, h:mm:ss a"
        )}`;
        let status = "success";
        state.message = [...state.message, { messge, status }];
        return state;
      } else if (action.status == "fail") {
        let messge = `amount of ${
          action.amount
        } amount was deducted from your wallet on ${moment().format(
          "MMMM Do YYYY, h:mm:ss a"
        )}`;
        let status = "success";
        state.message = [...state.message, { messge, status }];
        return state;
      }
  }
};
