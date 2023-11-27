import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    // Add type prop for LinkButton
    LinkButton: {
      type: 'link',
    },
  },
};

export const LoggedOut = {
  // Add type prop for LinkButton
  LinkButton: {
    type: 'link',
  },
};
