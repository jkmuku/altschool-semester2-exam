import React, {useState} from "react";
import useCounter from "../../hooks/useCounterHook";
import styles from "./CustomHook.module.css"

const Cushook = () => {
  const counterObject = useCounter(0);
  const [input, setInput] = useState(0)

//   const [isDisabled, setIsDisabled]=useState(false)

//   if (counterObject.value === 0){
//     setIsDisabled(true)
//   }

    function handleSubmit(e){
      e.preventDefault();
      counterObject.setValue(Number(input))
    }

  return (
    <div className={styles.container}>
      <div>CUSTOM HOOK</div>
      <h1>{counterObject.value}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={event => setInput(event.target.value)} />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={counterObject.increment}>Increment</button>
      <button onClick={counterObject.decrement} >Decrement</button>
      <button onClick={counterObject.reset}>Reset</button>
    </div>
  );
};

export default Cushook;
