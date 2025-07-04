import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#191919',
        },
        {
          name: 'notion-light',
          value: '#f7f6f3',
        },
        {
          name: 'notion-dark',
          value: '#2f3437',
        },
      ],
    },
  },
};

export default preview;