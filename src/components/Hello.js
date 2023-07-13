import React,{useState} from "react";
function MyInput()
{
  const[text, Settext]= useState("Hello");
  function handlechange(e)
  {
    Settext(e.target.value);
      
  }
  return(
    <>
    <input value={text} onchange={handlechange}/>
    <p> You Typed:{text} </p>
    <button onClick={()=>Settext("Hello")}>reset</button>
    </>
  );
}
  export default MyInput;


