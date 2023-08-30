import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';

interface InputBaseProps {
  children: ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

const StyledInputBase = styled.div<{ $fullWidth: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  color: ${({ theme }) => `rgb(${theme.palette.customColors.main})`};
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  /* border-radius: 4px; */
  width: ${({ $fullWidth }) => $fullWidth && '100%'};
  label + & {
    margin-top: 16px;
  }
  &::before {
    border-bottom: 1px solid ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.22)`};
    left: 0px;
    bottom: 0px;
    content: ' ';
    position: absolute;
    right: 0px;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
  &:focus-within::after {
    transform: scaleX(1) translateX(0px);
  }
  &::after {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
    left: 0px;
    bottom: 0px;
    content: '';
    position: absolute;
    right: 0px;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
  // disabled
  &.Gn-disabled::before {
    border-bottom-style: dotted;
  }
  // Error
  &.Gn-error::after,
  &.Gn-error::before {
    border-color: ${({ theme }) => theme.palette.error.main};
  }
`;

const InputBase = ({
  children,
  error = false,
  fullWidth = false,
  disabled = false,
}: InputBaseProps) => {
  const classes = generateClassNames('InputBase', [
    'root',
    error && 'error',
    fullWidth && 'fullWidth',
    disabled && 'disabled',
  ]);
  return (
    <StyledInputBase className={classes} $fullWidth={fullWidth}>
      {children}
    </StyledInputBase>
  );
};

export default InputBase;
