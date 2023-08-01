import React from "react";

function Button({Click,children}){
    return(
        <button onClick={Click}>{children}</button>

    );
}

function Toolbar(){
return(
    <div>
 <Button Click={()=>alert('Playing!')}>Play Moviee</Button> 
<Button Click={()=> alert('Uploading')}>Upload Image</Button>
    </div>
);
}
export default Toolbar;
