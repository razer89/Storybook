
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordions from './Accordions'; 

export default {
  title: 'Components/Accordions',
  tags: ['autodocs'],
  component: Accordions, 
  parameters: {
    docs: {
      source: {
        code: `
        
          // Your HTML markup for the accordions component:
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="card">
              <div class="card-header" id="panelsStayOpen-headingitem1">
                <h2 class="mb-0">
                  <button class="btn btn-link " type="button" data-toggle="collapse" data-target="#panelsStayOpen-collapseitem1" aria-expanded="true" aria-controls="panelsStayOpen-collapseitem1">
                    Accordion Item
                      <span class="icon" aria-hidden="true"></span>
                  </button>
                </h2>
              </div>
            <div id="panelsStayOpen-collapseitem1" class="collapse show" aria-labelledby="panelsStayOpen-headingitem1">
              <div class="card-body">
                <strong>Accordion Item</strong>
                 This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.</div>
              </div>
            </div>
          </div>
        `,
      },
    },
  },
};


const Template = (args) => <Accordions {...args} />;


export const BasicAccordions = Template.bind({});
BasicAccordions.args = {
  accordionItems: [
    {
      id: 'item1',
      label: 'Accordion Item',
      content: 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
      isExpanded: true, 
    },
  ],
};