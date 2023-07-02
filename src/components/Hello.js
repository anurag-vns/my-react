import React,{useState} from "react";
function Hello(){
    const [count, setCount] = useState(0);
	const [a, setAdd] = useState(0);
    return<p>
        <h2>Hello</h2>
        <h2>Count = {count}</h2>
	<button onClick={() => setCount(count + 2)}>
        Counter
      </button>
    </p>;
}
export default Hello;