/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZIndex, ZIndexOptions } from './ZIndex';
import { Breakpoints, BreakpointsOptions } from './breakpoints';
import { Palette, PaletteOptions } from './palette';
import { Shadows } from './shadow';
import { Shape, ShapeOptions } from './shape';
import { Spacing, SpacingOptions } from './spacing';
import { Typography, TypographyOptions } from './typography';

export type PaletteMode = 'light' | 'dark';

export type ColorKeys =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'info'
  | 'error';

export interface Color {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

export interface SystemThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  palette?: Record<string, any>;
  shadows?: unknown;
  spacing?: SpacingOptions;
  transitions?: unknown;
  typography?: unknown;
  zIndex?: Record<string, number>;
}

interface SystemTheme {
  shape: Shape;
  breakpoints: Breakpoints;
  palette: Record<string, any> & { mode: 'light' | 'dark' };
  shadows?: unknown;
  spacing: Spacing;
  transitions?: unknown;
  typography?: unknown;
  zIndex?: unknown;
}

interface BaseTheme extends SystemTheme {
  palette: Palette;
  shadows: Shadows;
  typography: Typography;
  zIndex?: ZIndex;
}

interface ThemeOptions extends Omit<SystemThemeOptions, 'zIndex'> {
  palette?: PaletteOptions;
  shadows?: Shadows;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
}

interface Theme extends BaseTheme {}
