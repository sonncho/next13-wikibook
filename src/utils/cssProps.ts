/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Responsive, ResponsiveProp } from '~/types/cssProps';
import { Theme } from '~/types/theme';

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

export function toPropValue<T>(
  propKey: string,
  prop?: Responsive<T>,
  theme?: Theme
) {
  if (prop === undefined) return undefined;
  if (isResponsivePropType(prop)) {
    const result = [];
    for (const responsiveKey in prop) {
      if (responsiveKey === 'xs') {
        //default
        result.push(
          `${propKey}: ${toThemeValueIfNeeded(
            propKey,
            prop[responsiveKey],
            theme
          )}`
        );
      } else if (
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
          theme
        )}`;

        result.push(`@media screen and (min-width: ${breakpoint}) {${style}}`);
      }
    }
    return result.join('\n');
  }
  return `${propKey}: ${toThemeValueIfNeeded(propKey, prop, theme)};`;
}

function toThemeValueIfNeeded<T>(propKey: string, value: T, theme?: Theme) {
  if (theme && SPACING_KEYS.includes(propKey)) {
    console.log(theme.spacing(value as number));
    return theme.spacing(value as number);
  }
}

/**
 * 반응형 prop 존재 여부
 * @param prop
 * @returns boolean
 */
function isResponsivePropType<T>(prop: any): prop is ResponsiveProp<T> {
  return (
    (prop && prop.xs !== undefined) ||
    prop.sm !== undefined ||
    prop.md !== undefined ||
    prop.lg !== undefined ||
    prop.xl !== undefined
  );
}
