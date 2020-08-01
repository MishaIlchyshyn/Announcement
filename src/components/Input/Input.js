import React from "react";

const Input = ({ name, onChange, value, label, ...props }) => {
  return (
    <div>
      <input name={name} onChange={onChange} value={value} {...props} />
    </div>
  );
};

export default Input;
