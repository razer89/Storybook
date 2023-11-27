import React from 'react';
import ColorPalette from './ColorPalette';

export default {
  title: 'Components/Colours',
  component: ColorPalette,
  parameters: {
    layout: 'centered',
  },
};

const brandColors = {
  primary: '#003594',
  secondary: '#6AB8D4',
};

const accentColors = {
  primary: {
    accent1: '#ADCAFF',
    accent2: '#85AFFF',
    accent3: '#337AFF',
    accent4: '#004FE0',
    accent5: '#00153B',
    accent6: '#000E29',
  },
  secondary: {
    accent1: '#DDF1F8',
    accent2: '#B0D9E8',
    accent3: '#235C80',
    accent4: '#184C60',
    accent5: '#12333F',
    accent6: '#091A20',
  },
};

const neutralColors = {
  lightGrey: {
    lightGrey1: '#FFFFFF',
    lightGrey2: '#F4F5F6',
    lightGrey3: '#E9EBEC',
    lightGrey4: '#D4D8DA',
    lightGrey5: '#C8CDD0',
    lightGrey6: '#BEC3C6',
    lightGrey7: '#A8AFB3',
  },
  darkGrey: {
    darkGrey1: '#879197',
    darkGrey2: '#687378',
    darkGrey3: '#555E62',
    darkGrey4: '#393F41',
    darkGrey5: '#1C1F21',
    darkGrey6: '#121416',
    darkGrey7: '#090A0B',
  },
};

const sentimentColors = {
  inform: {
    inform1: '#EBF2FF',
    inform2: '#ADCAFF',
    inform3: '#1F6DFF',
    inform4: '#004FE0',
    inform5: '#00153B',
  },
  success: {
    success1: '#D6FFE9',
    success2: '#85FFBE',
    success3: '#00C65E',
    success4: '#0D8249',
    success5: '#002913',
  },
  warning: {
    warning1: '#FFEBD6',
    warning2: '#FFCE99',
    warning3: '#FF9628',
    warning4: '#522A00',
    warning5: '#291500',
    warning6: '#E4CF0F',
  },
  error: {
    warning1: '#FCEAEA',
    warning2: '#F19393',
    warning3: '#E42C2C',
    warning4: '#A21515',
    warning5: '#360707',
  },
};

export const ColourPalette = () => (
  <ColorPalette
    brandColors={brandColors}
    accentColors={accentColors}
    neutralColors={neutralColors}
    sentimentColors={sentimentColors}
  />
);