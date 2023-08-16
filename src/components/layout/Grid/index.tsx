'use client';

/**
 * Grid with flex inherit Box
 */

import React from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from '../Box';
import {
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
  Responsive,
} from '~/types/cssProps';

interface GridProps extends BoxProps {
  alignItems?: Responsive<CSSPropertyAlignItems>;
  alignContent?: Responsive<CSSPropertyAlignContent>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  justifyItems?: Responsive<CSSPropertyJustifyItems>;
  flexWrap?: Responsive<CSSPropertyFlexWrap>;
  flexDirection?: Responsive<CSSPropertyFlexDirection>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  justifySelf?: Responsive<CSSPropertyJustifySelf>;
  alignSelf?: Responsive<CSSPropertyAlignSelf>;
  order?: Responsive<string>;
  children: React.ReactNode;
}

const StyledGrid = styled(Box)``;

const Grid = (props: GridProps) => {
  const { children, ...rest } = props;
  return <StyledGrid {...rest}>{children}</StyledGrid>;
};

export default Grid;
