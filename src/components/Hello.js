import React,{useState, useEffect} from "react";
function HelloCalculator(props) {
  const [count, setCount] = useState(0);
const[num1,setAdd1]=useState(0);
const[num2,setAdd2]=useState(0);

return<form>
  <div class="form-group">
  <label for="Item">Item</label>
  <input type="email" class="form-control" placeholder="Enter Item" id="Item"/>
  </div>

  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="amount" class="form-control" placeholder="Enter Amount" id="Amount"/>
  </div>

  <div>
    <label for="date">Date</label>
    <input type="date" class="form-control" placeholder="Enter Date" id ="Date"/>
  </div>

  <div>
    <button type="Submit" class="btn btn-primary">Submit</button>
  </div>

</form>;


}

  export default HelloCalculator;


