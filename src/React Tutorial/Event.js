import React from "react";

function Button({Click,children}){
    return(
        <button onClick={Click}>{children}</button>

    );
}

function PlayButton({movieName}){
    function handlePlayClick(){
        alert(`playing $ {movieName}!`);
    }


return(
    <Button onClick={handlePlayClick}> play"{movieName}"</Button>
);
}


function UploadButton(){
    return(
        <Button onClick={()=> alert("Uploading!")}>Upload Image</Button>
    );
}
function Toolbar(){
return(
    <div>
  <PlayButton movieName="Hero"/>
  <UploadButton/>       
    </div>
);
}
export default Toolbar;
