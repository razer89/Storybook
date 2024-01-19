import React from 'react';
import './Offcanvas.less';

const Offcanvas = ({ buttonText, offcanvasId, offcanvasLabel, children }) => (
  <>
    <button
      className="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target={`#${offcanvasId}`}
      aria-controls={offcanvasId}
    >
      {buttonText}
    </button>

    <div className="offcanvas offcanvas-end" tabIndex="-1" id={offcanvasId} aria-labelledby={`${offcanvasId}Label`}>
      <div className="offcanvas-header">
        <h5 id={`${offcanvasId}Label`}>{offcanvasLabel}</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {children}
      </div>
    </div>
  </>
);

export default Offcanvas;