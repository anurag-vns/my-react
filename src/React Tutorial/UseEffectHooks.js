import { useState, useEffect } from "react";
function Counter(){
    const[count,setCount]=useState(0);
    const[calculation, setCalculation]= useState(0);

    useEffect(()=>{
        setCalculation(()=> count*2)
    },[count]);

return(
    <>
    <h1>Counting {count}</h1>
    <button onClick={()=> setCount((c)=>c+1)}>Addition</button>
    <p>calculation:{calculation}</p>
    </>
);
}

export default Counter;