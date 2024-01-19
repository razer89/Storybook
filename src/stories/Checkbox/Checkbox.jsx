import React from 'react';
import './checkbox.less';

const Checkbox = ({ label, checked }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`flexCheck${label}`}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={`flexCheck${label}`}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;