import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HomePage from "./components/HomePage";
import { AppState } from "./store/rootStore";
import { incrementCount, decrementCount } from "./store/counter/CounterAction";

// interface AppProps {
//   increment: () => void;
//   decriment: () => void;
//   count: AppState;
// }

const App: React.FC = () => {
  // const dispatch = useDispatch();
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
