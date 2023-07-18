import React,{useState} from "react";
function HelloCalculator() {
 
  const [expensesdata, setExpenses] = useState({
    item:'',
    Amount:0,
    tdate:''
  });

  const itemChangeHandler=(Event)=>
  {
    setExpenses ( (prevState)=>{
   return{...prevState, item:Event.target.value};
  });

  console.log(expensesdata);
};

const amountChangeHandler=(Event)=>
{
  setExpenses((prevState)=>{
  return{...prevState,amount:Number(Event.target.value)};

});
console.log(expensesdata);
};

const dateChangeHandler=(Event)=>
{
  setExpenses( (prevState)=>{
    return{...prevState,tdate: new Date(Event)};

  });
console.log(expensesdata);
};
  

  


return<form>
  <div class="form-group">
  <label for="Item">Item</label>
  <input type="item" class="form-control" onChange={itemChangeHandler} placeholder="Enter Item" id="Item"/>
  </div>

  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="amount" class="form-control" placeholder="Enter Amount" id="Amount" onChange={amountChangeHandler}/>
  </div>

  <div>
    <label for="tdate">Date</label>
    <input type="date" class="form-control" placeholder="Enter Date" id ="tdate" onChange={dateChangeHandler}/>
  </div>

  <div>
    <button type="Submit" class="btn btn-primary">Submit</button>
  </div>

</form>;


}

  export default HelloCalculator;


