'use client';

/**
 * Grid with flex inherit Box
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
  CSSPropertyAlignItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifyContent,
  Responsive,
} from '~/types/cssProps';
import { toPropValue } from '~/utils/cssProps';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  spacing?: Responsive<number>;
  container?: boolean;
  item?: boolean;
  columns?: Responsive<number>;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  direction?: Responsive<CSSPropertyFlexDirection>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  alignItems?: Responsive<CSSPropertyAlignItems>;
}
interface StyledGridProps extends HTMLAttributes<HTMLDivElement> {
  $spacing?: Responsive<number>;
  $container: boolean;
  $item: boolean;
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

const getResponsiveWidth = (width?: number, value?: number, isResponsive?: boolean) => {
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

const getResponsiveSpacing = (width?: number, spacing?: string) => {
  if (width === undefined || spacing === undefined) return;
  return css`
    @media (min-width: ${width}px) {
      margin-top: -${spacing};
      margin-left: -${spacing};
      width: calc(100% + ${spacing});
      > .GnGrid-item {
        padding-left: ${spacing};
        padding-top: ${spacing};
      }
    }
  `;
};

const StyledGrid = styled('div')<StyledGridProps>`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  ${(props) => props.$container && toPropValue('flex-direction', props.$direction, props.theme)}
  ${(props) =>
    props.$container && toPropValue('justify-content', props.$justifyContent, props.theme)}
  ${(props) => props.$container && toPropValue('align-items', props.$alignItems, props.theme)}

  // spacing styles
  ${(props) => {
    const { theme, $spacing, $container } = props;

    const spacingStyle = [];

    if (typeof $spacing === 'number') {
      const getSpacing = $spacing && theme.spacing($spacing);
      console.log(getSpacing);
      spacingStyle.push(css`
        margin-top: -${getSpacing};
        margin-left: -${getSpacing};
        width: calc(100% + ${getSpacing});
        > .GnGrid-item {
          padding-left: ${getSpacing};
          padding-top: ${getSpacing};
        }
      `);
    }

    if (typeof $spacing === 'object') {
      for (const responsiveKey in $spacing) {
        console.log(responsiveKey);
        const breakpoint = theme.breakpoints.values[responsiveKey];
        const spacing = theme.spacing($spacing[responsiveKey]);
        console.log(breakpoint);
        if (responsiveKey === 'xs') {
          spacingStyle.push(css`
            margin-top: -${spacing};
            margin-left: -${spacing};
            width: calc(100% + ${spacing});
            > .GnGrid-item {
              padding-left: ${spacing};
              padding-top: ${spacing};
            }
          `);
        } else {
          spacingStyle.push(getResponsiveSpacing(breakpoint, spacing));
        }
      }
    }

    return $container && spacingStyle;
  }}

  // responsive styles when grid type is item
  ${(props) => {
    const { theme, $xs = 1, $sm, $md, $lg, $xl } = props;
    const result = [];

    if (props.$item) {
      if ($xs) result.push(getResponsiveWidth(theme.breakpoints.values.xs, $xs, false));
      if ($sm) result.push(getResponsiveWidth(theme.breakpoints.values.sm, $sm, true));
      if ($md) result.push(getResponsiveWidth(theme.breakpoints.values.md, $md, true));
      if ($lg) result.push(getResponsiveWidth(theme.breakpoints.values.md, $lg, true));
      if ($xl) result.push(getResponsiveWidth(theme.breakpoints.values.md, $xl, true));
      return result;
    }
    return false;
  }}
`;

//* Grid Component
const Grid = (props: GridProps) => {
  const {
    xs = 1,
    sm,
    md,
    lg,
    xl,
    columns = 12,
    spacing,
    container = false,
    item = false,
    direction,
    justifyContent,
    alignItems,
    children,
    ...rest
  } = props;
  const getClassName = container ? 'GnGrid-container' : item && 'GnGrid-item';
  return (
    <StyledGrid
      $spacing={spacing}
      $container={container}
      $direction={direction}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $item={item}
      $columns={columns}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      className={`GnGrid-root ${getClassName}`}
      {...rest}
    >
      {children}
    </StyledGrid>
  );
};

export default Grid;
