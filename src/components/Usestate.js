import React,{useState, useEffect}  from "react";
function Counting(){
    const[count, setCount] = useState(0);

  function updatecount(){
    setCount(count+2);
  };

return(
  <div>
<p>Counting Number:{count}</p>
<button onClick={updatecount}>Click</button>

  </div>

);
}
export default Counting;
