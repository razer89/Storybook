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
            <div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
                <strong>Holy guacamole!</strong><p>Here is some additional information.</p>
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <strong>Holy guacamole!</strong><p>Here is some additional information.</p>
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                <strong>Holy guacamole!</strong><p>Here is some additional information.</p>
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                <strong>Holy guacamole!</strong><p>Here is some additional information.</p>
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
      icon="info-circle-fill"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const SuccessAlert = () => (
    <Alert
      type="success"
      icon="check-circle-fill"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const WarningAlert = () => (
    <Alert
      type="warning"
      icon="exclamation-triangle-fill"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );
  
  export const DangerAlert = () => (
    <Alert
      type="danger"
      icon="exclamation-circle-fill"
      message="Holy guacamole!"
      additionalInfo="Here is some additional information."
    />
  );