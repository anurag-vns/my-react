import React,{useState} from "react";
function HelloMultipleObject()
{
	const [
	sumData, setSum] = useState({
		n1:0,
		n2:0,
    n3:0
});

const sumN1=(event)=>
{
	setSum( {
		...sumData,
		n1:Number( event.target.value),

	});
	console.log("Object Changed");

};
const sumN2=(event)=>
{
	setSum( {
		...sumData,
		n2:Number( event.target.value),

	});
	console.log("Object Changed");

};

const sumn3=(Event)=>
{
  setSum(
    {
     ...sumData,
     n3:Number(Event.target.value), 
    }
  );
  console.log("object changed");

};




	return <form>
	<label>First Number</label>
	<input type="text" onChange={sumN1}/>

	<label>Second Number</label>
	<input type="text" onChange={sumN2}/>

  <label>Third Number</label>
  <input type="text" onChange={sumn3}/>
		{sumData.n1 + sumData.n2 + sumData.n3}

	</form>
}
export default HelloMultipleObject;
