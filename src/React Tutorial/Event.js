import React from "react";
export default function PreventEvent()
{
    return(
        <form onSubmit={e=>{
            e.preventDefault();
            alert('Submitted Data!');
        }}>
<input />
    
        <button>send data</button>
        </form>
    );
    
}