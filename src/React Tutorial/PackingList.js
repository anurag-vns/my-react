import React from "react";
function Item({name, ispacked}){
    return<li>{name}</li>
}
function PackingList(){
    return(

        <section>
            <h2>Avaliable Here Packing List</h2>
<ul>

<Item ispacked ={true} name= "keyboard" />


<Item ispacked={true} name="Mouse" />
<Item ispacked={true} name="Monitor" />
<Item ispacked={false} name="None of These" />

</ul>

        </section>
    );
}
export default PackingList;