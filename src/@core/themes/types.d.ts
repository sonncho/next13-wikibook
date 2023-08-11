// styled.d.ts
import 'styled-components';
import { Breakpoints } from '~/types/theme';

export type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';
export type PaletteMode = 'light' | 'dark';

export interface IPaletteCode {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface IPalette {
  mode: PaletteMode;
  customColors: {
    main: string;
    tableHeaderBg: string;
  };
  common: {
    black: string;
    white: string;
  };
  primary: IPaletteCode;
  secondary: IPaletteCode;
  success: IPaletteCode;
  error: IPaletteCode;
  warning: IPaletteCode;
  info: IPaletteCode;
  grey: {
    [key in number | string]: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  divider: string;
  background: {
    paper: string;
    default: string;
  };
  action: {
    [key in string]: string;
  };
}
export type Shadows = [
  'none',
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

// we'll use a very simple theme with  palette and colors
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: IPalette;
    shape: {
      borderRadius: number;
    };
    spacing: (...args: number[]) => string;
    breakpoints: Breakpoints;
    shadows: Shadows;
    typography: {
      fontFamily: string;
    };
  }
}
