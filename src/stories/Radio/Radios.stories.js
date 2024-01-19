import React from 'react';
import Radios from './Radios';

export default {
  title: 'Forms/Radio',
  tags: ['autodocs'],
  component: Radios,
  parameters: {
    docs: {
      source: {
        code: `
          // Your HTML markup for the radios component (used on Shop)
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Default radio
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
            </label>
          </div>
        `,
      },
    },
  },
};

const Template = (args) => (
  <>
    <Radios {...args} label="Default radio" id="flexRadioDefault1" />
    <Radios {...args} label="Default checked radio" id="flexRadioDefault2" checked />
  </>
);

export const DefaultRadios = Template.bind({});
DefaultRadios.args = {};