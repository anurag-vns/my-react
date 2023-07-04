import React,{useState} from "react";
function Hello(){
    const [count, setCount] = useState(0);
    

    return<p>
      <h2>Hello Count</h2>
      <h2>count={count}</h2>
      <button onClick={()=>setCount(count+1)}>Counting</button>

    </p>;
}
export default Hello;