import React from "react";
import { GetImage } from "./GetImage";
 function Profile()
 {
    return(
      <div>
        <h1>Hello Scientiest</h1>
    <section>
<h2> Sir Jagdish Cand Bashu</h2>
<img src={GetImage('as')}alt="Adision" width={200} height={200}/>

<ul>
  <l1>Physics and Chemist</l1>
    <b> Awardes</b>
    ( Nation Level Awards)
</ul>
    </section>
      </div>
       
    );
 }
  
 export default  Profile;