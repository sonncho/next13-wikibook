'use client';

import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * InputElement기본 props를 담은 객체
   */
  // input기본 props를 한꺼번에 넣을수 있도록 따로 추가
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const StyledInputBaseRoot = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
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
  &::before {
    border-bottom: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.7)`};
    left: 0px;
    bottom: 0px;
    content: ' ';
    position: absolute;
    right: 0px;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
  &::after {
    border-bottom: 2px solid rgb(144, 202, 249);
    left: 0px;
    bottom: 0px;
    content: '';
    position: absolute;
    right: 0px;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }
`;

const StyledInputBaseInput = styled.input<InputProps>`
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
`;

const Input = (props: InputProps) => {
  const { inputProps = {}, ...rest } = props;
  return (
    <StyledInputBaseRoot className="GnInputBase-root">
      <StyledInputBaseInput className="GnInputBase-input" {...inputProps} {...rest} />
    </StyledInputBaseRoot>
  );
};

export default Input;
