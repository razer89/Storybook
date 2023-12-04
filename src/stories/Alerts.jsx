import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './alerts.css';

const Alert = ({ type, icon, message, additionalInfo }) => (
    <div className={`alert alert-${type} alert-dismissible fade show d-flex align-items-center`} role="alert">
      {renderIcon(icon, type)}
      <div>
        <div className='alert-content'>
        <strong className="alert-strong">{message}</strong>
        {additionalInfo && <p className="alert-paragraph">{additionalInfo}</p>}
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );

const renderIcon = (icon, type) => {
    const iconClassName = `bi bi-${icon} me-2 ${type === 'primary' ? '.bi-info-circle-fill' : 'bi-check-circle-fill'}`;
    return <i className={iconClassName} role="img" aria-label={type}></i>;
  };

export default Alert;