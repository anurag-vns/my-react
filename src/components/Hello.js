import React,{useState} from "react";
function HelloForm(props){
    const [enteredamount, setenteredamount] = useState(0);
    const amountchangehandler=(Event)=>
    {
        console.log("Amount Changed");
        console.log(Event.target.value);
        setenteredamount(Event.target.value);
    };

    return <form>
        <label>Amount</label>
        <input type="text" onChange={amountchangehandler}/>
        <h1>{enteredamount}</h1>
        
    </form>
    
}
export default HelloForm;