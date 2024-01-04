import React from 'react';
import './radios.css';

const Radio = ({ label, checked, id }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-radio"
        type="radio"
        name="flexRadioDefault"
        id={id}
        checked={checked}
      />
      <label className="form-radio-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;