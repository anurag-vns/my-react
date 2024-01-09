import React, { useState } from "react";
import Header from "./Projectcontact/Header";
import AddContact from "./Projectcontact/AddContact";
import ContactList from "./Projectcontact/ContactList";


function App() {
  const[contact, setContact]= useState([])

  const  addContact=(data)=>{ 
   setContact([data])
  }


  return (
<div>
<Header></Header>
<AddContact  addContact={addContact}></AddContact>
<ContactList></ContactList>
</div>



);
} 
export default App;

