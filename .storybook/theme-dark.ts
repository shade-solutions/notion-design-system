import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  
  // Brand
  brandTitle: 'Notion Design System',
  brandUrl: 'https://github.com/shade-solutions/notion-design-system',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#2383e2',
  colorSecondary: '#ffffff',

  // UI
  appBg: '#191919',
  appContentBg: '#191919',
  appBorderColor: '#373c41',
  appBorderRadius: 3,

  // Typography
  fontBase: '"ui-sans-serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif',
  fontCode: 'Monaco, Menlo, "Ubuntu Mono", monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#37352f',

  // Toolbar default and active colors
  barTextColor: '#9b9998',
  barSelectedColor: '#2383e2',
  barBg: '#2f3437',

  // Form colors
  inputBg: '#2f3437',
  inputBorder: '#373c41',
  inputTextColor: '#ffffff',
  inputBorderRadius: 3,
});
