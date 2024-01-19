import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "light",
        fontBase: '"Poppins-Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        fontCode: 'monospace',
        fontBaseWeight: '700',

        brandTitle: "InCharge Storybook",
        brandUrl: "https://incharge.enghousenetworks.com/web/guest",
        brandImage: "/logo.svg",
        brandTarget: '_self',

        colorPrimary: '#003594',
        colorSecondary: '#585C6D',

        // UI
        appBg: '#e9ebec',
        appContentBg: '#ffffff',
        appPreviewBg: '#ffffff',
        appBorderColor: '#585C6D',
        appBorderRadius: 4,

        // Text colors
        textColor: '#10162F',
        textInverseColor: '#ffffff',

        // Toolbar default and active colors
        barTextColor: '#FFF',
        barSelectedColor: '#585C6D',
        barBg: '#003594',
    }),
});