import React, { useState } from 'react';
import Modal from './Modal';

export default {
    title: 'Components/Modals',
    tags: ['autodocs'],
    component: Modal,
    parameters: {
      layout: 'centered',
    },
  };
  
  const Template = (args) => {
    const [showModal, setShowModal] = useState(false);
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    return (
      <>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>
  
        {/* Conditionally render Bootstrap Modal content */}
        {showModal && (
          <Modal show={showModal} handleClose={handleCloseModal}>
            <p>Modal Content 1</p>
            <p>Modal Content 2</p>
            <p>Modal Content 3</p>
            <p>Modal Content 4</p>
          </Modal>
        )}
      </>
    );
  };
  
  export const OpenModal = Template.bind({});
  OpenModal.args = {};
  OpenModal.parameters = {
    docs: {
      source: {
        code: `
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        `,
      },
    },
  };
  