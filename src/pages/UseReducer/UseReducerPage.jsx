import React from "react";
import { useReducer } from "react";
import countReducer from "../../hooks/useReducerHook";
import styles from "./UseReducer.module.css"

const Reducer = () => {
  const [count, dispatch] = useReducer(countReducer, 0);
  return (
    <div className={styles.container}>
      <div>Reducer</div>
      <h1>{count}</h1>
      {/* <div>
        <input type="number" onChange={(e) => dispatch("setValue")} />
        <button onClick={(e) => dispatch()} > setValue</button>
        </div> */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    
    </div>
  );
};

export default Reducer;
