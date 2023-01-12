import React from "react"
// import './index.css'
const InputField =({value,label,placeholder ,type,onChange,name})=>{
  const handleChange = (e) => {
        const { value,name } = e.target;
        onChange({
        
          [name]: value,
        });
      };

return(
  <div className="form-group">
        {label && <label htmlFor="input-field">{label}</label>}
       <input
    

          type={type}
          value={value}
          name={name}
          className="form-control"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
)
}
export default InputField;