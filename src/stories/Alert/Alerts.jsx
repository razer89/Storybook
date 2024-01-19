import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './alerts.less';

const Alert = ({ type, message, additionalInfo }) => (
    <div className={`alert alert-${type} alert-dismissible fade show d-flex align-items-center`} role="alert">
      <div>
        <div className='alert-content'>
        <strong className="alert-strong">{message}</strong>
        {additionalInfo && <p className="alert-paragraph">{additionalInfo}</p>}
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );

export default Alert;