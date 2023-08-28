'use client';

import { ForwardedRef, HTMLAttributes, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';
import useFormControl from '../FormControl/useFormControl';
import FormControlContext from '../FormControl/FormControlContext';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * InputElement기본 props를 담은 객체
   */
  // input기본 props를 한꺼번에 넣을수 있도록 따로 추가
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  /**
   * 에러 여부
   */
  error?: boolean;
  /**
   * 넓이
   */
  fullWidth?: boolean;
  disabled?: boolean;
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
  label + & {
    margin-top: 16px;
  }
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
  // disabled
  &.Gn-disabled {
    opacity: 1;
    -webkit-text-fill-color: ${({ theme }) => theme.palette.text.disabled};
  }
`;

const Input = forwardRef(
  (
    { inputProps = {}, fullWidth = false, disabled = false, error = false, ...rest }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <FormControlContext.Consumer>
        {(value) => {
          const rootClasses = generateClassNames('GnInputBase', [
            'root',
            fullWidth && 'fullWidth',
            (value?.error || error) && 'error',
            (value?.disabled || disabled) && 'disabled',
          ]);
          const inputClasses = generateClassNames('GnInputBase', [
            'input',
            (value?.disabled || disabled) && 'disabled',
          ]);
          return (
            <StyledInputBaseRoot className={rootClasses} $fullWidth={fullWidth} $error={error}>
              <StyledInputBaseInput
                ref={ref}
                type="text"
                className={inputClasses}
                onFocus={value?.onFocus}
                onBlur={value?.onBlur}
                onChange={value?.onChange}
                disabled={value?.disabled ?? disabled}
                {...rest}
                {...inputProps}
              />
            </StyledInputBaseRoot>
          );
        }}
      </FormControlContext.Consumer>
    );
  }
);

export default Input;
