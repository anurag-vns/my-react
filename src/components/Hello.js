import React,{useState} from "react";
function Hello(props){
    const [count, setCount] = useState(0);
    const[num1,setAdd1]=useState(0);
    const[num2,setAdd2]=useState(0);
    

    return<p>
      <h2>Hello Count</h2>
      <h2>count={count}</h2>
      <button onClick={()=>setCount(count+1)}>Counter</button>
      <h2>First Number</h2>
      <input type="Number" onChange={Event=>setAdd1(Event.target.value)}/>
      <h2>Second Number</h2>
      <input type="Number" onChange={Event=>setAdd2(Event.target.value)}/>
<h2>{num1}</h2>
<h2>{num2}</h2>
<h2>TOTAL  {Number(num1)+Number(num2)}</h2>
<h2>SUBTRACTION{Number(num1)-Number(num2)}</h2>
<h2>MULTIPLICATION{Number(num1)*Number(num2)}</h2>
<h2>DIVIDE{Number(num1)/Number(num2)}</h2>

    </p>;
}
export default Hello;