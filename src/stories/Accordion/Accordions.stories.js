
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
          // Your HTML markup for the accordions component
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <!-- Accordion Item #1 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            
            <!-- Accordion Item #2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>

            <!-- Accordion Item #3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
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
      label: 'Accordion Item #1',
      content: 'This is the first item\'s accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
      isExpanded: true, 
    },
    {
      id: 'item2',
      label: 'Accordion Item #2',
      content: 'This is the second item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
      isExpanded: false,
    },
    {
      id: 'item3',
      label: 'Accordion Item #3',
      content: 'This is the third item\'s accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.',
      isExpanded: false,
    },
  ],
};