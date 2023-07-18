import React,{useState} from "react";
function HelloCalculator(props) {
  const [expensesdata, setExpenses] = useState({item:'',Amount:0,tdate:''});

  const itemChangeHandler=(Event)=>
  {
    setExpenses = (Event.target.value);
   console.log(Event.target.value);
  };

return<form>
  <div class="form-group">
  <label for="Item">Item</label>
  <input type="item" class="form-control" onChange={itemChangeHandler} placeholder="Enter Item" id="Item"/>
  </div>

  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="amount" class="form-control" placeholder="Enter Amount" id="Amount"/>
  </div>

  <div>
    <label for="tdate">Date</label>
    <input type="date" class="form-control" placeholder="Enter Date" id ="tDate"/>
  </div>

  <div>
    <button type="Submit" class="btn btn-primary">Submit</button>
  </div>

</form>;


}

  export default HelloCalculator;


