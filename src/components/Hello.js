import React,{useState, useEffect} from "react";
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 500);
  });

  return <h1> Count Starting {count} times!</h1>;
}

  export default Timer;


