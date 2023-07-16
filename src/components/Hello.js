import React,{useState} from "react";
function MyColor()
{
  const[color,setcolor]=useState("Red");
  return(
    <>
    <h1>My color is {color}</h1>
    <button type="button" onClick={()=> setcolor("bule")}>Blue</button>
    <button type="button" onClick={()=> setcolor("Orange")}>Orange</button>
    <button type="button" onClick={()=> setcolor("Sky Blue")}>SkyBlue</button>
    <button type="button" onClick={()=>setcolor("Pink")}>Pink</button>
    </>
  )
}
  export default MyColor;


