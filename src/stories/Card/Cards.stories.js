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
                <h5 class="card-title">
                  Card title
                </h5>
                  <p class="card-text">
                    Card link
                  </p>
                    <a href="#" class="card-link">
                      Another link
                    </a>
             </div>
          </div>
        `,
      },
    },
  };
