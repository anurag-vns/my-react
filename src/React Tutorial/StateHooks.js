import React from "react";
import { useState } from "react";

function Counter(){
    const[count,setCount]=useState("0");
    return(
<>
<h1>{count}</h1>
<button onClick={()=>{
    setCount=(count+1);
}}>+3</button>
 
</>
    )
}
export default Counter;