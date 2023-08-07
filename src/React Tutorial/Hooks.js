import { useState } from "react";

 function Counter() {
    const [number, setNumber] = useState(0);
  
    return (
      <>
        <h1>{number}</h1>
        <button onClick={() => {
          setNumber(number + 4);
          setNumber(n=> n+ 1);
          setNumber(n=> n+1);
        
        
        }}>Increasing Number</button>
      </>
    )
  }
  export default Counter;
  