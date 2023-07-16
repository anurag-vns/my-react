import React,{useState} from "react";
function MyName()
{
  const[name,setName]=useState("Anurag");
  const[job,setJob]=useState("Software Developer");
  const[age,setAge]=useState("34");
  const[address,setAddress]=useState("MZP");
  return(
<>
    <h1>My Name is {name}</h1>
    <p>
      Job profile is {job} age is {age} from {address}.
    </p>
   </>
  )
}
  export default MyName;


