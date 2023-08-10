//* Breakpoint Types
// export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // literal type

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

//* Spacing Ttypes

//* CreateTheme Types
