/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Responsive, ResponsiveProp } from '~/types/cssProps';
import { ColorKeys, Theme } from '~/types/theme';

const SPACING_KEYS = [
  'margin',
  'marginTop',
  'marginLeft',
  'marginBottom',
  'marginRight',
  'padding',
  'paddingTop',
  'paddingLeft',
  'paddintRight',
  'paddingBottom',
];

/**
 * CSS Style 생성.
 * @param propKey CSS Key (ex. 'margin')
 * @param prop CSS Value (ex. 3)
 * @param theme 정의한 theme객체 (ex. { palette: {...}, spacing: {...}, ...})
 * @param unit CSS Value 단위 (ex. 'px')
 * @returns CSS Style (ex. 'margin: 1.8rem;')
 */
export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: Theme,
  unit?: string
) {
  if (prop === undefined) return undefined;
  if (isResponsivePropType(prop)) {
    const result = [];
    for (const responsiveKey in prop) {
      if (responsiveKey === 'base') {
        //default
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme
          )};`
        );
      } else if (
        responsiveKey === 'xs' ||
        responsiveKey === 'sm' ||
        responsiveKey === 'md' ||
        responsiveKey === 'lg' ||
        responsiveKey === 'xl'
      ) {
        // 미디어 쿼리 스타일
        const breakpoint = theme?.breakpoints.values[responsiveKey];
        const style = `${propKey}: ${toThemeValueIfNeeded(
          propKey,
          prop[responsiveKey],
          theme,
          unit
        )}`;
        result.push(
          `@media screen and (min-width: ${breakpoint}px) {${style}}`
        );
      }
    }
    return result.join('\n');
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`;
}

function toThemeValueIfNeeded<T>(
  propKey: string,
  value: T,
  theme?: Theme,
  unit?: string
) {
  if (theme && SPACING_KEYS.includes(propKey)) {
    return theme.spacing(value as number);
  }
  if (theme && isColorThemeKeys(value)) {
    return theme.palette[value as string].main;
  }
  if (theme && isSizePropType(propKey)) {
    return unit ? `${value}${unit}` : `${value}px`;
  }
  return value;
}

/**
 * 반응형 prop 존재 여부
 * @param prop
 * @returns boolean
 */
function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    prop &&
    (prop.base !== undefined ||
      prop.xs !== undefined ||
      prop.sm !== undefined ||
      prop.md !== undefined ||
      prop.lg !== undefined ||
      prop.xl !== undefined)
  );
}

function isSizePropType(prop: any) {
  return (
    prop &&
    (prop !== 'width' ||
      prop !== 'height' ||
      prop !== 'min-height' ||
      prop !== 'min-width')
  );
}

/**
 * Color Key 존재여부 체크
 * @param prop
 * @returns boolean
 */
function isColorThemeKeys(prop: any): prop is ColorKeys {
  const ColorKeys = [
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'error',
  ];
  return ColorKeys.filter((value) => value === prop).length > 0;
}
