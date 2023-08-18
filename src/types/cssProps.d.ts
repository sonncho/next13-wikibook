/* eslint-disable @typescript-eslint/ban-types */

/**
 * Responsive 속성
 * CSS 속성값을 breakpoint별로 설정
 * T는 css 속성값의 타입
 */
export type ResponsiveProp<T> = {
  base?: T;
  xs?: T; // extra-small: 0px
  sm?: T; // small: 600px;
  md?: T; // medium: 900px;
  lg?: T; // large: 1200px;
  xl?: T; // extra-large: 1536px;
};

export type Responsive<T> = T | ResponsiveProp<T>;

/**
 * Flex
 */
type SelfPosition =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'self-end'
  | 'self-start'
  | 'start';

type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start';

type ContentDistribution =
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

type CSSPropertyGlobals = '-moz-initial' | 'inherit' | 'revert' | 'unset';

export type CSSPropertyAlignItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'normal'
  | 'stretch'
  // 코드 자동 완성
  | (string & {});

export type CSSPropertyAlignContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'start'
  | 'baseline'
  | 'normal'
  | (string & {});

export type CSSPropertyJustifyItems =
  | CSSPropertyGlobals
  | SelfPosition
  | 'baseline'
  | 'left'
  | 'legacy'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {});

export type CSSPropertyJustifyContent =
  | CSSPropertyGlobals
  | ContentDistribution
  | ContentPosition
  | 'left'
  | 'normal'
  | 'right'
  | (string & {});

export type CSSPropertyFlexWrap =
  | CSSPropertyGlobals
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse';

export type CSSPropertyFlexDirection =
  | CSSPropertyGlobals
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export type CSSPropertyJustifySelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {});

export type CSSPropertyAlignSelf =
  | CSSPropertyGlobals
  | SelfPosition
  | 'auto'
  | 'baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'stretch'
  | (string & {});

/**
 * Grid
 */
type GridLine = 'auto' | (string & {});

export type CSSPropertyGridColumn =
  | CSSPropertyGlobals
  | GridLine
  | (string & {});

export type CSSPropertyGridRow = CSSPropertyGlobals | GridLine | (string & {});

export type CSSPropertyGridAutoFlow =
  | CSSPropertyGlobals
  | 'column'
  | 'dense'
  | 'row'
  | (string & {});

export type CSSPropertyGridArea = CSSPropertyGlobals | GridLine | (string & {});

export type SXProps = Array<func | object | bool> | func | object;

export type SpaceKeys =
  | 'm' // margin
  | 'mt' // margin-top
  | 'ml' // margin-left
  | 'mb' // margin-bottom
  | 'mr' // margin-right
  | 'p' // padding
  | 'pt' //padding-top
  | 'pl' // padding-left
  | 'pb' // padding-bottom
  | 'pr'; // paddring-right
