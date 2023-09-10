import React, { useEffect, useState } from "react";
function Form(){

    const data={name:"", email:"", password:""};
    const[item, setItem]=useState(data);
    const[flag,setFlag]=useState(false)

    useEffect(()=>{
        console.log("Registerd")
    },[flag])


   function handletop(e){
    setItem({...item,[e.target.name]: [e.target.value]} )
   

   }
   console.log("item",item);

   function handleSubmit(e){
    e.preventDefault();
    if(!item.name|| !item.email || !item.password){
        alert("All field is compulsary")
    }
    else{
        setFlag(true)
    }
   } 
   return(
    <>
    <pre>{(flag)? <h2>Hello{item.name},You Have Registered Successfully</h2>:"" }</pre>
    
<form className="form" onSubmit={handleSubmit}>
    <div className="header">
        <h1>Registration Form</h1>
    </div>

    <div>
        <input type="text" placeholder="Enter Your Name" name="name" value={item.name} onChange={handletop}></input>
     </div>
     <div>
           <input type="text" placeholder="Enter Your Email" name="email" value={item.email} onChange={handletop}></input>
    </div>

    <div>
        <input type="text" placeholder="Enter Your Password" name="password" value={item.password } onChange={handletop}></input>
    </div>

    <div>
        <button type="submit">Submit</button>
    </div>
</form>
</>
    );
}
export default Form;