import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Typography.less';

export default {
  title: 'Content/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Typography component',
      },
    },
  },
};

export const Typography = () => (
    <div>
      <h1>h1. The quick fox jumps
over the lazy dog</h1>
      <h2>h2. The quick fox jumps
over the lazy dog</h2>
      <h3>h3. The quick fox jumps
over the lazy dogg</h3>
      <h4>h4. The quick fox jumps
over the lazy dog</h4>
      <h5>body The quick fox jumps
over the lazy dog</h5>
      <h6>small The quick fox jumps
over the lazy dog</h6>
    </div>
  );