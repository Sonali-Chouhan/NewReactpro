import React from 'react'
import Button from '../Commoncomponent/CommonButton'
// import Button from '../common/Button'

const Login = () => {

    const onSubmit = () => {
        console.log(56, "Login")
    }
    return (
        <div className='container'>
            <p>Login</p>

            <Button handleClick={onSubmit} label='Login' />
            don't have an aaccount ? <a href="/">Register</a>

        </div>
    )
}

export default Login