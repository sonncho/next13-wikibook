/* eslint-disable @typescript-eslint/no-unused-vars */
import merge from 'lodash/merge';
import createBreakpoints from './createBreakpoints';
import createTypography from './createTypography';

import { Theme, ThemeOptions } from '~/types/theme';
import { TypographyOptions } from '~/types/theme/typography';

function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {},
    shadows: shadowsInput = [],
    typography: typographyInput = {},
  } = options;

  const breakpoints = createBreakpoints(breakpointsInput);
  const typography = createTypography(paletteInput, typographyInput as TypographyOptions);

  const gnTheme = merge(options, {
    breakpoints,
    typography,
  });

  args.reduce((acc, argument) => merge(acc, argument), gnTheme);

  return gnTheme as Theme;
}

export default createTheme;
