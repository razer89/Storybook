import React from 'react';
import { Button } from './Button';
import { withA11y } from '@storybook/addon-a11y';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button', 'aria-label': 'Primary Button',
};

// Source code explanation for Primary Button Story
Primary.storyName = 'Primary Button';
Primary.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-primary">Primary Button</button>

      // Your CSS styles for the primary button component
        .btn-primary {
        color: #fff;
        background-color: #003594;
        border-radius: 4px;
        padding: 8px 24px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #003594;
      }
      `,
    },
  },
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  primary: true,
  label: 'Primary Button (Hover)',
  variant: 'hover',
  style: {
    backgroundColor: '#00153B',
  },
};

// Source code explanation for Primary Button (Hover) Story
PrimaryHover.storyName = 'Primary Button (Hover)';
PrimaryHover.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-primary">Primary Button</button>

      // Your CSS styles for the primary button on hoover component
       .btn-primary:hover {
        background-color: #F4F5F6;
      }
      `,
    },
  },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  primary: true,
  label: 'Primary Button (Disabled)',
  disabled: true,
};

// Source code explanation for Primary Button (Disabled) Story
PrimaryDisabled.storyName = 'Primary Button (Disabled)';
PrimaryDisabled.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-primary">Primary Button</button>

      // Your CSS styles for the primary button on hoover component
        .btn-primary:disabled {
        background-color: #E9EBEC;
        border: 1px solid #C8CDD0;
        color: #687378; 
      }
      `,
    },
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
};

// Source code explanation for Secondary Button Story
Secondary.storyName = 'Secondary Button';
Secondary.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-secondary">Secondary Button</button>

      // Your CSS styles for the secondary button component
        .btn-secondary {
        color: #003594;
        background-color: transparent;
        border-radius: 4px;
        padding: 8px 24px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #003594;
      }
      `,
    },
  },
};

export const SecondaryHover = Template.bind({});
SecondaryHover.args = {
  label: 'Secondary Button (Hover)',
  variant: 'hover',
  style: {
    backgroundColor: '#F4F5F6', 
  },
};

// Source code explanation for Secondary Button (Hover) Story
SecondaryHover.storyName = 'Secondary Button (Hover)';
SecondaryHover.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-secondary">Secondary Button (Hover)</button>

      // Your CSS styles for the secondary button on hoover component
        .btn-secondary:hover {
        background-color: #F4F5F6;
      }
      `,
    },
  },
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  label: 'Secondary Button (Disabled)',
  disabled: true,
};

// Source code explanation for Secondary Button (Disabled) Story
SecondaryDisabled.storyName = 'Secondary Button (Disabled)';
SecondaryDisabled.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-secondary">Secondary Button (Disabled)</button>

      // Your CSS styles for the secondary button disabled component
        .btn-secondary:disabled {
        background-color: #F4F5F6;
        border: 1px solid #C8CDD0;
        color: #687378;
      }
      `,
    },
  },
};

export const Dropdown = Template.bind({});
Dropdown.args = {
  dropdown: true,
  label: 'Dropdown Button',
};

// Source code explanation for Dropdown Button Story
Dropdown.storyName = 'Dropdown Button';
Dropdown.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown Button</button>

      // Your CSS styles for the dropdown button component
        .btn.dropdown-toggle {
        color: #1c1f21;
        background-color: #FFF;
        border-radius: 4px;
        padding: 8px 24px;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        border: 1px solid #687378;
      }
      `,
    },
  },
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  type: 'link',
  label: 'Link Button',
  className: 'btn btn-link',
};

// Source code explanation for Link Button Story
LinkButton.storyName = 'Link Button';
LinkButton.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-link">Link Button</button>

      // Your CSS styles for the link button component
      .btn.btn-link {
        color: #003594;
        background-color: transparent;
        cursor: pointer;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
      }
      
      .btn.btn-link:hover {
        text-decoration: underline;
        outline: 0;
        cursor: pointer;
        color:#003594;
      }
      `,
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};

// Source code explanation for Large Button Story
Large.storyName = 'Large Button';
Large.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-secondary">Large Button</button>

      // Your CSS styles for the large button component
        .btn-secondary:large {
        font-size: 16px;
        padding: 8px 22px;
      }
      `,
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

// Source code explanation for Small Button Story
Small.storyName = 'Small Button';
Small.parameters = {
  docs: {
    source: {
      code: `
      <button type="button" class="btn btn-secondary">Small Button</button>

      // Your CSS styles for the small button component
        .btn-secondary:small {
        font-size: 13px;
        padding: 4px 10px;
      }
      `,
    },
  },
};
