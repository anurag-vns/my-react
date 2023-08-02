import React from "react";
import { useState } from "react";

function FavoriteColor(){
const[color, setColor]=useState("Green");


return(
    <h1>My favorite  Color is {color}</h1>

);
}
export default FavoriteColor;