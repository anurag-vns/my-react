import React, { useState } from "react";
export default function AddContact(addContact){
    const[contactData, setContactData]=useState({name:"",email:""});
    const handleChange=(e)=>{
        if(e.target.name==="name"){
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData, email:e.target.value})
        }
    }

    const handleAdd=()=>{
        if(contactData.name===""||contactData.email===""){
            alert("Please fill the All Information")
            return
        }
      addContact(contactData)
    }
    return(
<div>
    <div>Add Contact</div>
    <form>
        <label>Name</label><br/>
        <input type="text" placeholder=" Enter Name" name="name" value={contactData.name} onChange={handleChange}></input><br/>
        <label>Email</label><br/>
        <input type="eamail" placeholder="Enter Email" name="email" value={contactData.email} onChange={handleChange}></input>
    </form>
    <button onClick={handleAdd}>Add Contact</button>
</div>
    );
}
