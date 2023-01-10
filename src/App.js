import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"

function App() {
 const [state, setstate] = useState("")
 const handleClick=()=>{
  setstate("hello")
 }
  return (
    <div className="App">
      <h1>{state}</h1>
    <button onClick={()=>handleClick()}>
     click mewerrrrrrrrrrrrrrrrrrrrrrrr
    </button>
    </div>
  );
}

export default App;
