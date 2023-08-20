'use client';

/**
 * Grid with flex inherit Box
 */

import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  CSSPropertyAlignItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifyContent,
  Responsive,
} from '~/types/cssProps';
import { Theme } from '~/types/theme';
import { toPropValue } from '~/utils/cssProps';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  $spacing?: Responsive<number>;
  $rowSpacing?: Responsive<number>;
  $columnSpacing?: Responsive<number>;
  $container?: boolean;
  $item?: boolean;
  $columns?: Responsive<number>;
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
  $direction?: Responsive<CSSPropertyFlexDirection>;
  $justifyContent?: Responsive<CSSPropertyJustifyContent>;
  $alignItems?: Responsive<CSSPropertyAlignItems>;
}

const getItemWidthStyle = (width?: number, value?: number, isResponsive?: boolean) => {
  if (value === undefined || width === undefined) return;
  const cssStyle = css`
    flex-basis: ${8.33333 * value}%;
    flex-grow: 0;
    max-width: ${8.33333 * value}%;
  `;
  const result = isResponsive
    ? css`
        @media (min-width: ${width}px) {
          ${cssStyle}
        }
      `
    : css`
        ${cssStyle}
      `;

  return result;
};

const getSpacingStyle = (spacing?: Responsive<number>, theme?: Theme) => {
  if (spacing === undefined || theme === undefined) return;

  const spacingStyle = [];
  const defaultStyle = (factor: string) => {
    return css`
      margin-top: -${factor};
      margin-left: -${factor};
      width: calc(100% + ${factor});
      > .GnGrid-item {
        padding-left: ${factor};
        padding-top: ${factor};
      }
    `;
  };
  const responsiveStyle = (breakpoint: number, spacing: string) => {
    return css`
      @media (min-width: ${breakpoint}px) {
        ${defaultStyle(spacing)}
      }
    `;
  };

  if (typeof spacing === 'number') {
    const factorSpacing = theme.spacing(spacing);
    spacingStyle.push(defaultStyle(factorSpacing));
  }
  if (typeof spacing === 'object') {
    for (const responsiveKey in spacing) {
      const breakpoint = theme.breakpoints.values[responsiveKey];
      const spacingValue = theme.spacing(spacing[responsiveKey]);
      if (responsiveKey === 'xs') {
        spacingStyle.push(defaultStyle(spacingValue));
      } else {
        spacingStyle.push(responsiveStyle(breakpoint, spacingValue));
      }
    }
  }
  return spacingStyle;
};

const StyledGrid = styled('div')<GridProps>`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  // spacing styles
  ${(props) => props.$container && props.$spacing && getSpacingStyle(props.$spacing, props.theme)}

  // responsive styles when grid type is item
  ${(props) => {
    const { theme, $xs = 1, $sm, $md, $lg, $xl } = props;
    const result = [];
    if (props.$item) {
      if ($xs) result.push(getItemWidthStyle(theme.breakpoints.values.xs, $xs, false));
      if ($sm) result.push(getItemWidthStyle(theme.breakpoints.values.sm, $sm, true));
      if ($md) result.push(getItemWidthStyle(theme.breakpoints.values.md, $md, true));
      if ($lg) result.push(getItemWidthStyle(theme.breakpoints.values.md, $lg, true));
      if ($xl) result.push(getItemWidthStyle(theme.breakpoints.values.md, $xl, true));
      return result;
    }
    return false;
  }}

  ${(props) => props.$container && toPropValue('flex-direction', props.$direction, props.theme)}
  ${(props) =>
    props.$container && toPropValue('justify-content', props.$justifyContent, props.theme)}
  ${(props) => props.$container && toPropValue('align-items', props.$alignItems, props.theme)}
`;

//* Grid Component
const Grid = (props: GridProps) => {
  const { $xs = 1, $columns = 12, $container = false, $item = false, children, ...rest } = props;
  const getClassName = props.$container ? 'GnGrid-container' : props.$item && 'GnGrid-item';
  return (
    <StyledGrid
      $xs={$xs}
      $columns={$columns}
      $container={$container}
      $item={$item}
      className={`GnGrid-root ${getClassName}`}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;
