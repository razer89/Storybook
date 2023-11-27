import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './modal.css';


const BootstrapModal = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body> <div className="modal-dialog-content">
          {children}
        </div></Modal.Body>
      <Modal.Footer>
      <button
          type="button"
          className="storybook-button storybook-button--secondary" onClick={handleClose}>
          Close
        </button>
        <div style={{ width: '5px' }} />
        <button
        type="button"
        className="storybook-button storybook-button--primary">Save</button>
      </Modal.Footer>
    </Modal>
  );
};

export default BootstrapModal;