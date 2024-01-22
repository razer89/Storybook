import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Modal } from 'react-bootstrap';
import './modal.less';


const BootstrapModal = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header>
        <Modal.Title>Modal Title</Modal.Title>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-dialog-content">{children}</div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClose}
        >
          Close
        </button>
        <div style={{ width: '5px' }} />
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapModal;