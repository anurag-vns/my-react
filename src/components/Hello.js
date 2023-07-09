import React,{useState} from "react";
function Hello() {
    const [textarea, setTextarea] = useState(0);
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
  
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    );
  }
    

export default Hello;