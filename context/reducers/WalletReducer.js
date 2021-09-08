import { ADD_MONEY, REMOVE_MONEY } from "../actions/action.types";
export const WalletReducer = (state, action) => {
  switch (action.type) {
    case ADD_MONEY:
      state.money = state.money + action.payload;
      return state;

    case REMOVE_MONEY:
      state.money = state.money - action.payload;
      return state;
  }
};
