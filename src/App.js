import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import React,{useState} from "react";
// import InputField from "./Commoncomponent/FormInput"

// function App() {
//   const [inputValue, setInputValue] =useState({
//     name:"",
//     price:""
//   })
//   const handleChange = (input) => {
   
   
//       setInputValue({ name: input.name, price: input.price });

     
  
// };
// console.log(123,inputValue)
  
//   return (
//     <div className="App">
     
//     <form>
//     <InputField
//         type="text"
//         value={inputValue.name}
//         name="name"
//         placeholder="Product Name"
//         label="Name"
//         onChange={handleChange}
//       />
//       <InputField
//         type="number"
//         name="price"
//         value={inputValue.price}
//         placeholder="Add Price"
//         label="Price"
//         onChange={handleChange}
//       />
//     </form>

//     </div>
//   );
// }

// export default App;
