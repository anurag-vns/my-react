import React,{useState} from "react";
function MyCar()
{
  const[car, setCar]= useState({brand:"BMW",Model:"Mustong", Year:"2022",color:"Red"});

  const updatecolor=()=>{
    setCar(previousstate =>{
      return{...previousstate,color:"blue"}
    });
  }
  return(
<>
    <h1>My Car Name is {car.brand}</h1>
    <p>
      it is model  {car.Model} and color is {car.color} from  {car.Year}.
    </p>
    <button type="button" onClick={updatecolor}>Blue</button>
   </>
  )
}
  export default MyCar;


