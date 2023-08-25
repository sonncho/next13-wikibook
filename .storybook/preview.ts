import type { Preview } from '@storybook/react';

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';
import themeOptions from '../src/@core/themes/themeOptions';
import createTheme from '../src/utils/theme/createTheme';
import typography from '../src/@core/themes/typography';
import '../src/app/globals.css';
import GlobalStyles from '../src/@core/styles/globalStyles';
import * as NextImage from 'next/image';

/* TODO: update import for your custom theme configurations */
// import { lightTheme, darkTheme } from '../path/to/themes';

const getTheme = (mode: 'light' | 'dark') => {
  const coreTheme = themeOptions(mode);
  let theme = createTheme(coreTheme);
  theme = createTheme(theme, { typography: { ...typography(theme) } });
  return theme;
};

const light = getTheme('light');
const dark = getTheme('dark');

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  // Adds global styles and theme switching support.
  withThemeFromJSXProvider({
    themes: {
      light,
      dark,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
