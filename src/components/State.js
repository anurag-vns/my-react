import React from "react";
import { useState } from "react";

function FavoriteColor(){
const[color, setColor]=useState("Green");


return(
    <>
    <h1>My favorite  Color is {color}</h1>
    <button  type="button" onClick={()=>setColor("blue")}>Blue</button>
    <button type="button" onClick={()=> setColor("Red")}>Red</button>
    <button type="button" onClick={()=>setColor("Pink")}>Pink</button>

</>
);
}
export default FavoriteColor;