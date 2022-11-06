import React from "react";
import useCounter from "../hooks/useCounterHook";

const Cushook = () => {
  const counterObject = useCounter(0);
//   const [isDisabled, setIsDisabled]=useState(false)

//   if (counterObject.value === 0){
//     setIsDisabled(true)
//   }

  return (
    <div>
      <div>CUSTOM HOOK</div>
      <h1>{counterObject.value}</h1>
      <button onClick={counterObject.increment}>Increment</button>
      <button onClick={counterObject.decrement} >Decrement</button>
      <button onClick={counterObject.reset}>Reset</button>
    </div>
  );
};

export default Cushook;
