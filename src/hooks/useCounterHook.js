import {useState} from "react";

const UseCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);
  
    const increment = () => setValue(c => c + 1);
    const decrement = () => setValue(c => c - 1);
    const reset = () => setValue(initialValue);
  
    return { value, increment, decrement, reset };
  };

  export default UseCounter;