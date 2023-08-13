import merge from 'lodash/merge';
import { pxToRem } from './filters';
import { PaletteOptions } from '~/types/theme/palette';
import { Typography, TypographyOptions } from '~/types/theme/typography';

const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

function createTypography(
  palette: PaletteOptions,
  typography:
    | TypographyOptions
    | ((palette: PaletteOptions) => TypographyOptions)
): Typography {
  const _ref =
    typeof typography === 'function' ? typography(palette) : typography;
  const {
    fontFamily = defaultFontFamily,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
  } = _ref;

  const buildVariant = (
    fontWeight: string | number,
    size: number,
    lineHeight: number,
    letterSpacing: number
  ) => {
    return {
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      lineHeight,
      letterSpacing,
    };
  };

  const variant = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1),
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
    },
  };

  return merge(
    {
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
    },
    variant
  );
}

export default createTypography;
