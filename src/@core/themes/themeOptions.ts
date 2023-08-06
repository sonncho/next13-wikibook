// eslint-disable-next-line import/no-unresolved
import { DefaultTheme } from 'styled-components';

import palette from './palette';
import spacing from './spacing';

import { PaletteMode } from './types';

const themeOptions = (mode: PaletteMode): DefaultTheme => {
  const themeConfig = {
    palette: palette(mode),
    shape: {
      borderRadius: 8,
    },
    ...spacing,
  };

  return themeConfig;
};

export default themeOptions;
