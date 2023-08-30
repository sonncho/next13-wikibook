'use client';

import { ForwardedRef, HTMLAttributes, InputHTMLAttributes, Ref, forwardRef } from 'react';
import styled from 'styled-components';
import { generateClassNames } from '~/utils/filters';
import FormControlContext from '../FormControl/FormControlContext';
import InputBase from '../InputBase';

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
  /**
   * disabled
   */
  disabled?: boolean;
}

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
            <InputBase fullWidth={fullWidth} error={error} disabled={disabled}>
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
            </InputBase>
          );
        }}
      </FormControlContext.Consumer>
    );
  }
);

export default Input;
