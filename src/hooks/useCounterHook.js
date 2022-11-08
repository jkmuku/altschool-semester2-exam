import {useState} from "react";

const UseCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const increment = () => setValue(c => c + 1);
    const decrement = () => setValue(c => c > 0 ? c - 1 : 0 );
    const reset = () => {setValue(initialValue || 0)};
  
    return { value, increment, decrement, reset, setValue };
  };

  export default UseCounter;