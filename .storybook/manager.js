import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "light",

        brandTitle: "Incharge Networks",
        brandUrl: "https://incharge.enghousenetworks.com/web/guest",
        brandImage: "/logo-enghouse.png",
        brandTarget: '_self',
    }),
  });