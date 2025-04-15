import "./Counter.css";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);


  const inc = ()=>{
    setCount((prevCount)=>{
        return prevCount+1 ;
    });
  }

  const dec = ()=>{
    setCount((prevCount)=>{
        if(prevCount!=0)
          return prevCount-1 ;
        return prevCount ;
    });
  }

  const reset = ()=>{
    setCount(0);
  }

  return (
    <div className="counter">
      <div className="count">
        <h1>{count}</h1>
      </div>
      <div className="button-container">
        <button className="button" onClick={inc}>Increment</button>
        <button className="button" onClick={dec}>Decrement</button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
