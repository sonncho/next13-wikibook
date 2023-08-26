'use client';

import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { generateClassNames } from '~/utils/filters';

export type DividerTextAlign = 'center' | 'right' | 'left';
export type DividerOrientation = 'vertical' | 'horizontal';
interface DividerProps {
  children?: ReactNode;
  $textAlign?: DividerTextAlign;
  $orientation?: DividerOrientation;
  $flexItem?: boolean;
  $variant?: 'inset' | 'fullWidth' | 'middle';
  $component?: 'li';
}

const StyledDivider = styled.hr<DividerProps>`
  margin: ${({ $variant }) => ($variant === 'middle' ? '0px 16px' : '0px')};
  display: ${({ $flexItem }) => !$flexItem && 'flex'};
  flex-direction: ${({ $orientation, children }) =>
    $orientation === 'vertical' && children && 'column'};
  flex-shrink: 0;

  //border 스타일
  ${(props) =>
    props.children
      ? css`
          text-align: center;
          border: 0;
          &::before,
          &::after {
            content: '';
            align-self: center;
            border-top: ${({ theme }) =>
              props.$orientation === 'horizontal' && `thin solid ${theme.palette.divider}`};
            border-left: ${({ theme }) =>
              props.$orientation === 'vertical' && `thin solid ${theme.palette.divider}`};
          }
          &::before {
            ${props.$orientation === 'horizontal' ? 'width' : 'height'}: ${props.$textAlign ===
            'left'
              ? '10%'
              : props.$textAlign === 'right'
              ? '90%'
              : '100%'};
          }
          &::after {
            ${props.$orientation === 'horizontal' ? 'width' : 'height'}: ${props.$textAlign ===
            'left'
              ? '90%'
              : props.$textAlign === 'right'
              ? '10%'
              : '100%'};
          }
        `
      : css`
          border-width: 0px 0px thin;
          border-style: solid;
          border-color: ${({ theme }) => theme.palette.divider};
        `}

  // Divider 방향
  ${(props) =>
    props.$orientation === 'vertical' &&
    props.$flexItem &&
    css`
      margin: ${!props.children && '8px 0px'};
      border-width: 0px thin 0px 0px;
      height: auto;
      align-self: stretch;
    `}
`;

const StyledDividerWrapper = styled.span<{ children: ReactNode; $orientation: DividerOrientation }>`
  display: inline-block;
  padding-left: calc(9.6px);
  padding-right: calc(9.6px);
  padding: ${({ $orientation }) => $orientation === 'vertical' && 'calc(9.6px)'};
`;

const DividerWrapper = ({
  children,
  $orientation = 'horizontal',
}: {
  children: ReactNode;
  $orientation: DividerOrientation;
}) => {
  return (
    <StyledDividerWrapper $orientation={$orientation} className="GnDivider-wrapper">
      {children}
    </StyledDividerWrapper>
  );
};

const Divider = (props: DividerProps) => {
  const {
    children,
    $component,
    $orientation = 'horizontal',
    $textAlign = 'center',
    $variant = 'fullWidth',
    ...rest
  } = props;
  const classes = generateClassNames('GnDivider', ['root', $variant]);

  return (
    <StyledDivider
      as={children ? 'div' : $component}
      className={classes}
      role={children ? 'seperator' : 'presentation'}
      $textAlign={$textAlign}
      $orientation={$orientation}
      {...rest}
    >
      {children && <DividerWrapper $orientation={$orientation}>{children}</DividerWrapper>}
    </StyledDivider>
  );
};

export default Divider;
