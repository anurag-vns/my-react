import React, { useState } from 'react';


function TodoList(){
    const[activity,setActivity]=useState("");
    const[listData, setListData]= useState([]);
    function addActivity(){
//setListData([...listData,activity])
//console.log(listData)
setListData((listData)=>{
    const updatedList=[...listData,activity]
    console.log(updatedList)
    setActivity('');
    return updatedList
})
    }
    return(
        <>
        <div>
       <div>TodoList</div> 
       <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
       <button onClick={addActivity}>Add</button> 
       <p className='list-heading'>here is your list:{")"}</p> 
       {listData!=[]&& listData.map((data,i)=>{
        return
       }}
    </div>
    </>
    )

}
export default TodoList;