import { INCREMENT, RESET } from "actions";

export type CounterActions = {
  type: typeof INCREMENT | typeof RESET;
  num: number;
};

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export function counter(
  state = initialState,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case INCREMENT:
      console.log(state.count);
      console.log(action.num);
      return { ...state, count: state.count + action.num };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
