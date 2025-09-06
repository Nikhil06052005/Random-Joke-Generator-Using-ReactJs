import {useState, useEffect} from 'react';

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () =>{
        setCount(count+1);
    };

    useEffect((function printSomething(){
        console.log("This is a side-effect");
    }))
  return (
    <>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>+1</button>
    </>
  );
}
