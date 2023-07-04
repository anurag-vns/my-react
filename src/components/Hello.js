import React,{useState} from "react";
function Hello(){
    const [count, setCount] = useState(0);
    const[sub,setSubt]=useState(0);
	const [a, setAdd] = useState(0);
    const[b, setSubtraction]=useState(0);
    

    return<p>
        <h2>Hello Count</h2>
        <h2>Count = {count}</h2>
	<button onClick={() => setCount(count + 2)}>
        Counter
      </button>
      <h2>Hello sub</h2>
      <h2> sub={sub}</h2>
      <button onClick={()=>setSubt(sub-1)}>Subtraction</button>

    </p>;
}
export default Hello;