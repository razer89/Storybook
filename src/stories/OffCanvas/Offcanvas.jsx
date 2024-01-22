import React from 'react';
import './Offcanvas.less';

const Offcanvas = ({ buttonText, offcanvasId, offcanvasLabel, children }) => (
  <>
    <button
      className="btn btn-primary"
      type="button"
      data-toggle="modal"
      data-target={`#${offcanvasId}`}
    >
      {buttonText}
    </button>

    <div className="modal fade" id={offcanvasId} tabIndex="-1" role="dialog" aria-labelledby={`${offcanvasId}Label`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-end" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${offcanvasId}Label`}>{offcanvasLabel}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Offcanvas;