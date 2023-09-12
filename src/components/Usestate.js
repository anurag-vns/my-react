import React,{useState, useEffect}  from "react";
function Counting(){
    const[count, setCount] = useState(0);
     
    useEffect(()=> {
      alert("useEffect");
          });
      
    
  function updatecount(){
    setCount(count+2);
  };
  
  function subtraction(){
    setCount(count-1);
  }

  function divide(){
    setCount(count/2);
  }

return(
  <div>
<p>Counting Number:{count}</p>
<button onClick={updatecount}>Click</button>
<button onClick={subtraction}>subtraction</button>
<button onClick={divide}>divide</button>
</div>

);
}
export default Counting;
