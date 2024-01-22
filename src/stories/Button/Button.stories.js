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


export const Primary = () => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <Button
        primary
        label="Primary Button"
        aria-label="Primary Button"
      />
    </div>

    <div className='usageguide' style={{ marginTop: '60px' }}>
      <div className="s670">
        <div data-hook="dodont-do" className="s671 o135---skin-5-green">
          <p className="s896 o195---size-6-medium o195---weight-4-bold s672 o135---skin-5-green">Do</p>
          <div className="s673">
            <span className="s896 o195---size-6-medium o195---weight-6-normal s674">
              <div className="s677">
                <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
                  <path d="M9,16 C5.13400675,16 2,12.8659932 2,9 C2,5.13400675 5.13400675,2 9,2 C12.8659932,2 16,5.13400675 16,9 C16,12.8659932 12.8659932,16 9,16 Z M10.9393398,7 L8.5,9.43933983 L7.06066017,8 C6.76776695,7.70710678 6.29289322,7.70710678 6,8 C5.70710678,8.29289322 5.70710678,8.76776695 6,9.06066017 L8.5,11.5606602 L12,8.06066017 C12.2928932,7.76776695 12.2928932,7.29289322 12,7 C11.7071068,6.70710678 11.232233,6.70710678 10.9393398,7 Z"></path>
                </svg>
              </div>
              Use it to communicate primary and secondary actions users can take.
            </span>
            <span className="s896 o195---size-6-medium o195---weight-6-normal s674">
              <div className="s677">
                <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18">
                  <path d="M9,16 C5.13400675,16 2,12.8659932 2,9 C2,5.13400675 5.13400675,2 9,2 C12.8659932,2 16,5.13400675 16,9 C16,12.8659932 12.8659932,16 9,16 Z M10.9393398,7 L8.5,9.43933983 L7.06066017,8 C6.76776695,7.70710678 6.29289322,7.70710678 6,8 C5.70710678,8.29289322 5.70710678,8.76776695 6,9.06066017 L8.5,11.5606602 L12,8.06066017 C12.2928932,7.76776695 12.2928932,7.29289322 12,7 C11.7071068,6.70710678 11.232233,6.70710678 10.9393398,7 Z"></path>
                </svg>
              </div>
              The .btn classes are designed to be used with the &lt;button&gt; element.<br></br> However, you can also use these classes on &lt;a&gt; or &lt;input&gt; elements (though some browsers may apply a slightly different rendering).
            </span>
          </div>
        </div>
        <div data-hook="dodont-dont" className="s671 o135---skin-3-red">
          <p className="s896 o195---size-6-medium o195---weight-4-bold s672 o135---skin-3-red">Don't</p>
          <div className="s673">
            <span className="s896 o195---size-6-medium o195---weight-6-normal s674">
              <div className="s675">
                <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18" className="s676">
                  <path d="M8.43933983,9.5 L6,7.06066017 C5.70710678,6.76776695 5.70710678,6.29289322 6,6 C6.29289322,5.70710678 6.76776695,5.70710678 7.06066017,6 L9.5,8.43933983 L11.9393398,6 C12.232233,5.70710678 12.7071068,5.70710678 13,6 C13.2928932,6.29289322 13.2928932,6.76776695 13,7.06066017 L10.5606602,9.5 L13,11.9393398 C13.2928932,12.232233 13.2928932,12.7071068 13,13 C12.7071068,13.2928932 12.232233,13.2928932 11.9393398,13 L9.5,10.5606602 L7.06066017,13 C6.76776695,13.2928932 6.29289322,13.2928932 6,13 C5.70710678,12.7071068 5.70710678,12.232233 6,11.9393398 L8.43933983,9.5 Z"></path>
                </svg>
              </div>
              Don't use buttons for non-interactive content.
            </span>
            <span className="s896 o195---size-6-medium o195---weight-6-normal s674">
              <div className="s675">
                <svg viewBox="0 0 18 18" fill="currentColor" width="18" height="18" className="s676">
                  <path d="M8.43933983,9.5 L6,7.06066017 C5.70710678,6.76776695 5.70710678,6.29289322 6,6 C6.29289322,5.70710678 6.76776695,5.70710678 7.06066017,6 L9.5,8.43933983 L11.9393398,6 C12.232233,5.70710678 12.7071068,5.70710678 13,6 C13.2928932,6.29289322 13.2928932,6.76776695 13,7.06066017 L10.5606602,9.5 L13,11.9393398 C13.2928932,12.232233 13.2928932,12.7071068 13,13 C12.7071068,13.2928932 12.232233,13.2928932 11.9393398,13 L9.5,10.5606602 L7.06066017,13 C6.76776695,13.2928932 6.29289322,13.2928932 6,13 C5.70710678,12.7071068 5.70710678,12.232233 6,11.9393398 L8.43933983,9.5 Z"></path>
                </svg>
              </div>
              Don’t use more than one primary button at a time.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
