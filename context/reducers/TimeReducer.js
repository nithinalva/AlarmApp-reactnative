import { ADD_TIME, UPDATE_STATUS } from "../actions/action.types";
export const TimeReducer = (state, action) => {
  switch (action.type) {
    case ADD_TIME:
      return [...state, action.payload];
    case UPDATE_STATUS:
      const index = state.findIndex((time) => time.id == action.payload);
      const newArray = [...state];
      // console.log(newArray[index]);
      newArray[index].status = !newArray[index].status;
      return newArray;
  }
};
