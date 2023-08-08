// eslint-disable-next-line import/no-unresolved
import { Roboto } from 'next/font/google';
import { DefaultTheme } from 'styled-components';

import breakpoints from './breakpoints';
import palette from './palette';
import shadows from './shadows';
import spacing from './spacing';

import { PaletteMode } from './types';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const themeOptions = (mode: PaletteMode): DefaultTheme => {
  const themeConfig = {
    palette: palette(mode),
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    shape: {
      borderRadius: 6,
    },
    ...spacing,
    breakpoints: breakpoints(),
    shadows: shadows(mode),
  };

  console.log(themeConfig);

  return themeConfig;
};

export default themeOptions;
