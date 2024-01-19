import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  parameters: {
    docs: {
      source: {
        code: `
          // Your HTML markup for the checkbox component
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label" for="flexCheckChecked">
                Checked checkbox
            </label>
          </div>
        `,
      },
    },
  },
};

const Template = (args) => (
  <>
    <Checkbox {...args} label="Default checkbox" />
    <Checkbox {...args} label="Checked checkbox" checked />
  </>
);

export const Checkboxes = Template.bind({});
Checkboxes.args = {};