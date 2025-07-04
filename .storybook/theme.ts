import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  
  // Brand
  brandTitle: 'Notion Design System',
  brandUrl: 'https://github.com/shade-solutions/notion-design-system',
  brandImage: '/logo.svg',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#2383e2',
  colorSecondary: '#37352f',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e9e9e7',
  appBorderRadius: 3,

  // Typography
  fontBase: '"ui-sans-serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif',
  fontCode: 'Monaco, Menlo, "Ubuntu Mono", monospace',

  // Text colors
  textColor: '#37352f',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#6f6e69',
  barSelectedColor: '#2383e2',
  barBg: '#f7f6f3',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e9e9e7',
  inputTextColor: '#37352f',
  inputBorderRadius: 3,
});
