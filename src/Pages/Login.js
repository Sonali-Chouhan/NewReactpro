import React, { useState } from 'react'
import Button from '../Commoncomponent/CommonButton'
import InputField from '../Commoncomponent/FormInput';
// import Button from '../common/Button'
import './index.css';

const Login = () => {
  const [inputValue,setInputValue]= useState({
    email: "",
    password: "",
    confirmPassword: "" 
  })

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value, })
};

    const onSubmit = () => { 
        var items = JSON.parse(localStorage.getItem("formdata"));
        console.log(877,items)   
    }
    
    return (
        <div className='container'>
            <p>Login</p>
            <form>
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
            <Button handleClick={onSubmit} label='Login'/>
            don't have an aaccount ? <a href="/">Register</a>

        </div>
    )
}

export default Login