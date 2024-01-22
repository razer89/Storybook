import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './alerts.less';

const Alert = ({ type, message, additionalInfo }) => (
  <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
    <strong className="alert-strong">{message}</strong>
    {additionalInfo && <p className="alert-paragraph">{additionalInfo}</p>}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export default Alert;