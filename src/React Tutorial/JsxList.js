import React from "react";
function JsxList(){
  const Person={
    name:'Amit',
    theme:{
      backgroungcolor:'black',
      color:'pink'
    }
  };

    return(
        <div style={Person.theme}>
          <h2>{Person.name} How are you</h2>
        <img src="images (1).jpg" alt="Amit" />
        
<ul>
<li>Hello Young Pepole</li>
<li>How are you</li>
</ul>
        
        </div>
    );


}
export default JsxList;