import React from "react";
import { useState } from "react";

function Car(){

    const[brand, setBrand]= useState("BMW");
    const[color, setColor]= useState("Black");
    const [model, setModel]=useState("BM2023");
    const[year, setYear]=useState("2023");



return(
    <>
    <h1>Brand Name is  {brand}</h1>
    <p>it  is  {color}  model  {model} from year   {year}</p>

</>
);
}
export default Car;