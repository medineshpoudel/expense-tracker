import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import '../src/stories/assets/css/all.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    dark: { ...themes.dark },
    light: { ...themes.light },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    if (useDarkMode()) {
      document.getElementById('app-theme')?.setAttribute('href', 'AppDark.css');
    } else {
      document.getElementById('app-theme')?.setAttribute('href', 'AppLight.css');
    }

    return <Story />;
  },
];
