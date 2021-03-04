import React from "react";
import CounterButton from "./CounterButton";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../store/rootStore";
import { incrementCount, decrementCount } from "../store/counter/CounterAction";
interface AppProps {
  increment: () => void;
  decriment: () => void;
}

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: AppState) => state.counterReducer.count);
  const handleIncrement = () => dispatch(incrementCount());
  const handleDecrement = () => dispatch(decrementCount());

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontSize: "1rem" }}>
      <span>{count}</span>
      <CounterButton handleClick={handleIncrement} color={"LightGreen"}>
        Increment
      </CounterButton>
      <CounterButton handleClick={handleDecrement} color={"orange"}>
        Decrement
      </CounterButton>
    </div>
  );
};

export default HomePage;
