import { combineReducers } from "redux";
import { CounterState, counter } from "./counter";

export type RootState = {
  sequence: CounterState;
};

export default combineReducers({
  counter,
});
