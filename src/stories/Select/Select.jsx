import React from 'react';
import './select.less';

const Select = () => {
  return (
    <select className="custom-select" aria-label="Default select example">
      <option defaultValue>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  );
};

export default Select;