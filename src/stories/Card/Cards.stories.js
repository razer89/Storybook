import React from 'react';
import Cards  from './Cards'; 

export default {
  title: 'Components/Cards',
  component: Cards,
  tags: ['autodocs'],
};

export const BasicCard = () => (
  <Cards
    title="Card title"
    text="Card link"
    link1={{ label: 'Another link', url: '#' }}
  />
);

BasicCard.parameters = {
    docs: {
      source: {
        code: `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Card link</p>
                <a href="#" class="card-link">Another link</a>
            </div>
            </div>
  
        // Your CSS styles

          .card-body {
            border-bottom: 1px solid #c8cdd0;
            background: #ebf2ff;
            color: #393f41;
            padding: 15px;
            font-size: 16px;
            line-height: 1.2;
            font-family: 'Poppins-Regular',-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
            width: 658px;
            height: 150.7px;
        }

            .card-body:hover {
                background: #e9ebec;
            }

            .card {
                --bs-card-border-color: none !important;
            }

            .card-title {
                color: #393f41 !important;
                font-size: 16px;
                line-height: 1.2;
                font-family: 'Poppins-Regular',-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
                margin-bottom: 10px !important;
                margin-top: 10px;
            }

            .card-text {
                color: #003594;
                text-decoration: underline;
                font-family: 'Poppins-Regular',-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
                padding: 10px 0 10px 0;
                cursor: pointer;
            }

            .card-link {
                color: #003594;
                margin-right: 10px;
                text-decoration: none;
                text-transform: uppercase;
                cursor: pointer;
                font-family: Poppins-Regular,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
                font-size: 16px;
                line-height: 1.2;
            }
        `,
      },
    },
  };
