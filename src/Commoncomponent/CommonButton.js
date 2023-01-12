import React from 'react';
// import './index.css'

const buttonStyle = {
    margin: '10px 0',
    background: 'blue',
    color: 'white',
    borderRadius: '10px',
    width: '7vw',
    height: '9vh',
    fontSize: 'large',
    border: '2px solid blue',
};

const Button = ({ label, handleClick }) => (
    <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={handleClick}
    >
        {label}
    </button>
);

export default Button;