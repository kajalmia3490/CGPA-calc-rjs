import React from "react";
import './Input.css';

const InputText = ({ title, semester, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event, semester);
  };

  return (
    <div>
      <label>
        {title}
      </label> <br></br>
      <input
        className="input"
        type="number"
        value={value}
        onChange={handleChange} />

    </div>
  );
};

export default InputText;