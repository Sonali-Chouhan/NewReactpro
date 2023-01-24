import React, { useEffect, useState } from "react";
import Button from "../Commoncomponent/CommonButton";
import InputField from "../Commoncomponent/FormInput";
import './index.css';

function Register() {
   
    const [inputValue, setInputValue] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputValue({ ...inputValue, [name]: value, })
    };

    const onHandleClick = () => {
        var items = JSON.parse(localStorage.getItem("formdata"));
        items = items ? items : []
        localStorage.setItem('formdata', JSON.stringify([...items, inputValue]))
        setInputValue({ ...inputValue, name: "", lastName: "", email: "", password: "", confirmPassword: "" })
    }

    
    return (
        <div className="container">
            <h2>  Registration Form</h2>
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
                    type="text"
                    value={inputValue.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    label="Last Name"
                    onChange={handleChange}
                />
                <InputField
                    type="email"
                    name="email"
                    value={inputValue.email}
                    placeholder="Add Email"
                    label="Email"
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    value={inputValue.password}
                    name="password"
                    placeholder="Password"
                    label="Password"
                    onChange={handleChange}
                />
                <InputField
                    type="text"
                    value={inputValue.confirmPassword}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    onChange={handleChange}
                />
            </form>
            <Button handleClick={onHandleClick} label='submit' />
            Already have an aaccount ? <a href="/Login">Login</a>
        </div>
    )
}
export default Register;