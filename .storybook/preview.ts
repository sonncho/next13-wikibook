import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import themeOptions from '../src/@core/themes/themeOptions';
import GlobalStyles from '../src/@core/styles/globalStyles';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
      /* Uncomment for theme switching support */
      themes: {
        light: themeOptions('light'),
        dark: themeOptions('dark'),
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
