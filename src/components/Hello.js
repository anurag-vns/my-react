import React,{useState} from "react";
function MyCar()
{
  const[car, setCar]= useState({brand:"BMW",Model:"Mustong", Year:"2022",color:"Red"});
  return(
<>
    <h1>My Car Name is {car.brand}</h1>
    <p>
      it is model  {car.Model} and color is {car.color} from  {car.Year}.
    </p>
   </>
  )
}
  export default MyCar;


