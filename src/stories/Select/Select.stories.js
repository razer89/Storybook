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
          <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
        </div>
      
        `,
      },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};