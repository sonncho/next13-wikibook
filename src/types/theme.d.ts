/* eslint-disable @typescript-eslint/no-explicit-any */
//* Shape
export interface Shape {
  borderRadius: number;
}
export type ShapeOptions = Partial<Shape>;

export interface BreakpointOverrides {}

type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;

export type OverridableStringUnion<
  T extends string | number,
  U = Record<string, never>,
> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

export type Breakpoint = OverridableStringUnion<
  'xs' | 'sm' | 'md' | 'lg' | 'xl',
  BreakpointOverrides
>;

export type Keys = Breakpoint[];

export interface Breakpoints {
  keys: Breakpoint[];
  values: { [key in Breakpoint]: number };
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  only: (key: Breakpoint) => string;
  not: (key: Breakpoint) => string;
  unit?: string | undefined;
}

export interface BreakpointsOptions extends Partial<Breakpoints> {
  step?: number | undefined;
  unit?: string | undefined;
}

//* z-index Types
export interface ZIndex {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
  fab: number;
}

export type ZIndexOptions = Partial<ZIndex>;

//* Spacing Ttypes
export type SpacingOptions =
  | number
  | Spacing
  | ((abs: number) => number | string)
  | ((abs: number | string) => number | string)
  | ReadonlyArray<string | number>;
export type SpacingArgument = number | string;
export interface Spacing {
  (): string;
  (value: number): string;
  (topBottom: SpacingArgument, rightLeft: SpacingArgument): string;
  (
    top: SpacingArgument,
    rightLeft: SpacingArgument,
    bottom: SpacingArgument
  ): string;
  (
    top: SpacingArgument,
    right: SpacingArgument,
    bottom: SpacingArgument,
    left: SpacingArgument
  ): string;
}
export default function createSpacing(spacingInput?: SpacingOptions): Spacing;

//* CreateTheme Types
export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  palette?: Record<string, any>;
  shadows?: unknown;
  spacing?: SpacingOptions;
  transitions?: unknown;
  typography?: unknown;
  zIndex?: Record<string, number>;
}
export interface Theme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  palette: Record<string, any> & { mode: 'light' | 'dark' };
  shadows?: unknown;
  spacing: Spacing;
  transitions?: unknown;
  mixins?: unknown;
  typography?: unknown;
  zIndex?: unknown;
}
