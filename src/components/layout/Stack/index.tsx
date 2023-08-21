'use client';

import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  CSSPropertyAlignItems,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  Responsive,
} from '~/types/cssProps';
import { toPropValue } from '~/utils/cssProps';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  divider?: ReactNode;
  $direction?: Responsive<CSSPropertyFlexDirection>;
  $alignItems?: Responsive<CSSPropertyAlignItems>;
  $justifyContent?: Responsive<CSSPropertyJustifyContent>;
  $spacing?: Responsive<number>;
  $flexWrap?: Responsive<CSSPropertyFlexWrap>;
  $useFlexGap?: boolean;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  & > :not(style) ~ :not(style) {
    ${(props) => !props.$useFlexGap && toPropValue('margin-left', props.$spacing, props.theme)};
  }
  ${(props) => props.$useFlexGap && toPropValue('gap', props.$spacing, props.theme, 'rem')}
  ${(props) => toPropValue('align-items', props.$alignItems, props.theme)};
  ${(props) => toPropValue('justify-content', props.$justifyContent, props.theme)};
  ${(props) => toPropValue('flex-direction', props.$direction, props.theme)}
  ${(props) => toPropValue('flex-wrap', props.$flexWrap, props.theme)}
`;

const Stack = (props: StackProps) => {
  const { children, divider, ...rest } = props;
  return (
    <StyledStack className="GnStack-root" {...rest}>
      {children}
    </StyledStack>
  );
};

export default Stack;
