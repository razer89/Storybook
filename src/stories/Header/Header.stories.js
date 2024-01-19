import { Header } from './Header';

export default {
  title: 'Components/Navbar',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    LinkButton: {
      type: 'link',
    },
  },
};
