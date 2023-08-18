'use client';

/**
 * Grid with flex inherit Box
 */

import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  // order?: Responsive<string>;
  children: React.ReactNode;
  spacing?: number;
  container?: boolean;
  item?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
interface StyledGridProps extends HTMLAttributes<HTMLDivElement> {
  $spacing?: number;
  $container: boolean;
  $item: boolean;
  $xs?: number;
  $sm?: number;
  $md?: number;
  $lg?: number;
  $xl?: number;
}

const getResponsiveQuery = (width: number, value: number) => {
  return css`
    @media (min-width: ${width}px) {
      flex-basis: ${8.33333 * value}%;
      flex-grow: 0;
      max-width: ${8.33333 * value}%;
    }
  `;
};

const StyledGrid = styled('div')<StyledGridProps>`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;

  // spacing styles
  ${({ theme, $spacing, $container }) => {
    const getSpacing = $spacing && theme.spacing($spacing);
    return $container && getSpacing
      ? css`
          margin-top: -${getSpacing};
          margin-left: -${getSpacing};
          width: calc(100% + ${getSpacing});
          > .GnGrid-item {
            padding-left: ${getSpacing};
            padding-top: ${getSpacing};
          }
        `
      : css`
          width: 100%;
        `;
  }}

  // responsive styles when grid type is item
  ${(props) => {
    const { theme, $xs = 1, $sm, $md, $lg, $xl } = props;
    const result = [];
    // xs is default
    result.push(css`
      flex-basis: ${8.33333 * $xs}%;
      flex-grow: 0;
      max-width: ${8.33333 * $xs}%;
    `);

    if (props.$item) {
      if ($sm)
        result.push(getResponsiveQuery(theme.breakpoints.values.sm, $sm));
      if ($md)
        result.push(getResponsiveQuery(theme.breakpoints.values.md, $md));
      if ($lg)
        result.push(getResponsiveQuery(theme.breakpoints.values.md, $lg));
      if ($xl)
        result.push(getResponsiveQuery(theme.breakpoints.values.md, $xl));
      return result;
    }
    return false;
  }}
`;

const Grid = (props: GridProps) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    spacing,
    container = false,
    item = false,
    children,
    ...rest
  } = props;
  const getClassName = container ? 'GnGrid-container' : item && 'GnGrid-item';
  return (
    <StyledGrid
      $spacing={spacing}
      $container={container}
      $item={item}
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
