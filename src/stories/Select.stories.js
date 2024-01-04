import React from 'react';
import Select from './Select';

export default {
  title: 'Forms/Select',
  tags: ['autodocs'],
  component: Select,
  parameters: {
    docs: {
      source: {
        code: `
          // Your HTML markup for the select component
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        `,
      },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};