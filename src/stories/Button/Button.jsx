import React from 'react';
import PropTypes from 'prop-types';
import './button.less';

export const Button = ({ type, primary, backgroundColor, size, label, dropdown, ...props }) => {
  const btnClass = primary ? 'btn-primary' : 'btn-secondary';
  const dropdownClass = dropdown ? 'dropdown-toggle' : '';
  const sizeClass = size === 'small' ? 'btn-sm' : (size === 'large' ? 'btn-lg' : '');

  return (
    <button
      type={type}
      className={`btn ${btnClass} ${sizeClass} ${dropdownClass}`}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit', 'link']),
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  dropdown: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  dropdown: false,
  onClick: undefined,
};