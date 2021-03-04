import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter/CounterReducer";

export const rootReducers = combineReducers({ counterReducer });

export type AppState = ReturnType<typeof rootReducers>;

export const store = createStore(rootReducers);
