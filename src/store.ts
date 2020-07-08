import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "reducer";

const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
};

export function useStore(initialState) {
  return useMemo(() => initStore(initialState), [initialState]);
}
