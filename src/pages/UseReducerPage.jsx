import React from "react";
import { useReducer } from "react";
import countReducer from "../hooks/useReducerHook";

const Reducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <div>Reducer</div>
      <h1 style={{ fontSize: "11rem" }}>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Reducer;
