import { combineReducers } from "redux";
import { CounterState, counter } from "./counter";

export type RootState = {
  counter: CounterState;
};

export default combineReducers({
  counter,
});
