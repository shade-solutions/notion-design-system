import { addons } from '@storybook/manager-api';
import lightTheme from './theme';
import darkTheme from './theme-dark';

addons.setConfig({
  theme: lightTheme,
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  panelPosition: 'bottom',
});
