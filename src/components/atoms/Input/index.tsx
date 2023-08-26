'use client';

import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * InputElement기본 props를 담은 객체
   */
  // input기본 props를 한꺼번에 넣을수 있도록 따로 추가
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  error?: boolean;
  fullWidth?: boolean;
}

const StyledInputBaseRoot = styled.div<{ $error: boolean; $fullWidth: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4375em;
  letter-spacing: 0.00938em;
  color: ${({ theme }) => `rgb(${theme.palette.customColors.main})`};
  box-sizing: border-box;
  cursor: text;
  display: inline-flex;
  align-items: center;
  position: relative;
  width: ${({ $fullWidth }) => $fullWidth && '100%'};
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
  // Error
  &.Gn-error::after,
  &.Gn-error::before {
    border-color: ${({ theme }) => theme.palette.error.main};
  }
`;

const StyledInputBaseInput = styled.input`
  font: inherit;
  letter-spacing: inherit;
  color: currentColor;
  padding: 4px 0px 5px;
  border: 0px;
  box-sizing: content-box;
  background: none;
  height: 1.4375rem;
  margin: 0;
  display: block;
  min-width: 0px;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.32)`};
  }
`;

const Input = ({ inputProps = {}, fullWidth = false, error = false, ...rest }: InputProps) => {
  return (
    <StyledInputBaseRoot
      className={`GnInputBase-root ${error ? 'Gn-error' : ''} ${
        fullWidth ? 'GnInputBase-fullWidth' : ''
      }`}
      $fullWidth={fullWidth}
      $error={error}
    >
      <StyledInputBaseInput className="GnInputBase-input" {...inputProps} {...rest} />
    </StyledInputBaseRoot>
  );
};

export default Input;
