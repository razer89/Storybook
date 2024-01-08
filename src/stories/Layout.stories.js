import React from 'react';
import Layout from './Layout';

export default {
  title: 'Guidelines/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const LayoutGuide = Template.bind({});
LayoutGuide.args = {};
LayoutGuide.storyName = 'Guidelines';