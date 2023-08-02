import React from "react";
import { useState } from "react";

function Car(){

    const[car, setCar]= useState({
        brand:"BMW",
        color:"Black",
        model:"BM2023",
        year:"2023"
    });



return(
    <>
    <h1> My  {car.brand}</h1>
    <p> color is {car.color} and model is {car.model} from {car.brand}</p>

</>
);
}
export default Car;