import React from "react";
function AlertButton({message,children}){
    return(
        <button onClick={()=> alert (message)}>{children}</button>
    );
}

 function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing">Play Movee</AlertButton>
            <AlertButton message="Uploading">Upload Image</AlertButton>
        </div>
    );
}

export default Toolbar;
