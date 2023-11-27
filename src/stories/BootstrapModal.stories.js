import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import BootstrapModal from './BootstrapModal';
import { Button } from 'react-bootstrap';

export default {
    title: 'Components/Modals',
    tags: ['autodocs'],
    component: BootstrapModal,
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
          className="storybook-button storybook-button--primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Open Modal
        </button>
  
        {/* Conditionally render Bootstrap Modal content */}
        {showModal && (
          <BootstrapModal show={showModal} handleClose={handleCloseModal}>
            <p>Modal Content 1</p>
            <p>Modal Content 2</p>
            <p>Modal Content 3</p>
            <p>Modal Content 4</p>
          </BootstrapModal>
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
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
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
  
          // Your CSS styles for the modal component
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          .btn-close {
              color: #1c1f21; 
              font-size: 16px;
              opacity: .8;
              font-weight: 400;
            }
          
            .btn-close:hover {
              opacity: 1;
            }
          
            .modal-title {
              font-size: 1.7rem;
              font-weight: 500;
              color: #393F41;
              font-family: 'Poppins', sans-serif;
              line-height: 1.7rem;
            }
          
            .modal-content {
              border-radius: .3rem;
              border: 1px solid rgba(0,0,0,0.2);
              background-color: #FFF;
            }
          
            .modal-header {
              border-bottom: 1px solid #CCC;
              padding: 24px;
            }
          
            .modal-footer {
              border-top: 1px solid #CCC;
              justify-content: center;
              padding: .75rem;
            }
          
            .modal-body {
              background: linear-gradient(0deg,rgba(32,32,32,.05),rgba(32,32,32,.05)),#fff;
              padding: 32px;
            }
          
            .modal-dialog-content {
              background: #FFF;
              padding: 32px;
            }
        `,
      },
    },
  };
  