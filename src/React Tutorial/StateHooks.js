import React from "react";
import { useState } from "react";

function Car(){

    const[car, setCar]= useState({
        brand:"BMW",
        color:"Black",
        model:"BM2023",
        year:"2023"
    });

const updatecolor=()=>{
    setCar(previousState=>{
        return{...previousState,color:"Green"}
    });
}

return(
    <>
    <h1> My  {car.brand}</h1>
    <p> color is {car.color} and model is {car.model} from {car.brand}</p>
<button type="button" onClick={updatecolor}>Update Color</button>
</>
);
}
export default Car;