import { Reducer, Action } from "redux";
import {
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from "./models/actions";
import { counter } from "./models/counter";

const defaultState: counter = {
  count: 0,
};

export const counterReducer: Reducer<counter, Action> = (
  state = defaultState,
  action: CounterActionTypes
) => {
  const nextCount = {
    count: state.count,
  };
  switch (action.type) {
    case INCREMENT_COUNTER:
      nextCount.count = state.count + 1;
      return nextCount;
    case DECREMENT_COUNTER:
      nextCount.count = state.count - 1;
      return nextCount;
    default:
      return state;
  }
};
