import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alert from './Alerts';

export default {
    title: 'Components/Alerts',
    tags: ['autodocs'],
    parameters: {
      docs: {
        source: {
            code: `
            // Source code for Alerts component:
            <div class="alert alert-primary alert-dismissible fade show" role="alert">
               <strong>Holy guacamole!</strong>
                Here is some additional information.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>

            <div class="alert alert-success alert-dismissible fade show" role="alert">
               <strong>Holy guacamole!</strong>
                Here is some additional information.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>

            <div class="alert alert-warning alert-dismissible fade show" role="alert">
               <strong>Holy guacamole!</strong>
                Here is some additional information.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>

            <div class="alert alert-danger alert-dismissible fade show" role="alert">
               <strong>Holy guacamole!</strong>
                Here is some additional information.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
            </div>
            `,
          },
        description: {
          component: 'Bootstrap Alerts component',
        },
      },
    },
  };
  
  export const PrimaryAlert = () => (
    <Alert
      type="primary"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const SuccessAlert = () => (
    <Alert
      type="success"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const WarningAlert = () => (
    <Alert
      type="warning"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const DangerAlert = () => (
    <Alert
      type="danger"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );