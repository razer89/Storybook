import React from 'react';
import './checkbox.less';

const Checkbox = ({ label, checked }) => {
  return (
    <div className="form-check-1">
      <input
        className="form-check-input-1"
        type="checkbox"
        id={`flexCheck${label}`}
        checked={checked}
      />
      <label className="form-check-label-1" htmlFor={`flexCheck${label}`}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;