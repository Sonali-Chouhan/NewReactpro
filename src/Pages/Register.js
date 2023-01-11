import React, { useState } from "react";
import Button from "../Commoncomponent/CommonButton";
// import Button from "../common/Button";
import InputField from "../Commoncomponent/FormInput";
import './index.css';
// import '../App.css';
function Register(){
    const [inputValue, setInputValue] = useState({
        name: "",
        price: ""
    })
    const handleChange = (input) => {
        setInputValue({ name: input.name, price: input.price })
    };
    const onHandleClick =()=>{
console.log(767,inputValue)
    }
    return(
        <div className="container">
         Registration Form
         <form>
                <InputField
                    type="text"
                    value={inputValue.name}
                    name="name"
                    placeholder="Product Name"
                    label="Name"
                    onChange={handleChange}
                />
                <InputField
                    type="number"
                    name="price"
                    value={inputValue.price}
                    placeholder="Add Price"
                    label="Price"
                    onChange={handleChange}
                />
            </form>
         <Button handleClick={onHandleClick} label='submit'/>
         Already have an aaccount ? <a href="/Login">Login</a>
        </div>
    )
}
export default Register;