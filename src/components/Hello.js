import React,{useState} from "react";
function Hello() {
    const [Car, setCar] = useState("Volvo");
  
    const handleChange = (event) => {
    setCar(event.target.value)
    }
  
    return (
      <form>
        
        <select value={Car} onChange={handleChange}>
            <option value= "Ford">Ford</option>
            <option value= "Volvo">Volvo</option>
            <option value="Honda city">HondaCity</option>
            <option value="Thar">Thar</option>
        </select>
      </form>
    )
  }
    

export default Hello;