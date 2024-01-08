import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "light",
        fontBase: '"Poppins-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        fontCode: 'monospace',
        fontBaseWeight: '700',

        brandTitle: "Incharge Networks",
        brandUrl: "https://incharge.enghousenetworks.com/web/guest",
        brandImage: "/logo-enghouse.png",
        brandTarget: '_self',

        colorSecondary: '#003594',

    }),
  });