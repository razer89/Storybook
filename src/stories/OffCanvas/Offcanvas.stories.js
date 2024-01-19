import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from './Offcanvas';

export default {
    title: 'Components/Offcanvas',
    component: Offcanvas,
    tags: ['autodocs'],
    parameters: {
      docs: {
        source: {
          code: `
          // Source code:
          
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              ...
            </div>
          </div>
          `,
        },
      },
    },
  };

export const Default = () => (
  <Offcanvas
    buttonText="Toggle right offcanvas"
    offcanvasId="offcanvasRight"
    offcanvasLabel="Offcanvas right"
  >
    {/* Your offcanvas content goes here */}
    {/* For example: */}
    <p>This is the content of the offcanvas.</p>
  </Offcanvas>
);