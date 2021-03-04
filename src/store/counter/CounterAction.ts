import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./models/actions";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT_COUNTER,
  };
};
