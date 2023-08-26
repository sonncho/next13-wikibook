'use client';

import React, { ReactNode, TextareaHTMLAttributes, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { Size } from '~/types';
import { capitalize, getClassNames } from '~/utils/filters';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
  /**
   * 최소 행수
   */
  minRows?: number;
  /**
   * 최대 행수
   */
  maxRows?: number;
  error?: boolean;
  /**
   * 사이즈
   */
  size?: Size;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 앞쪽 decorator
   */
  startDecorator?: ReactNode;
  /**
   * 뒤쪽 decorator
   */
  endDecorator?: ReactNode;
}

//* Textarea size style
const getSizeStyle = ($size: Size) => {
  switch ($size) {
    case 'small': {
      return css`
        font-size: 0.875rem;
        padding: 7px 0 7px 8px;
      `;
    }
    case 'large': {
      return css`
        font-size: 1.125rem;
        padding: 11px 0 11px 16px;
      `;
    }
    default: {
      return css`
        font-size: 1rem;
        padding: 7px 0 7px 12px;
      `;
    }
  }
};

const StyledTextareaWrapper = styled.div<{
  $error: boolean;
  $size: Size;
}>`
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.palette.error.main : `rgba(${theme.palette.customColors.main}, 0.22)`};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding-inline-start: 0.75rem;
  padding-block: calc(0.5rem - 1px);
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  cursor: text;
  line-height: 1.5;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  ${(props) => getSizeStyle(props.$size)}
  &:focus-within::before {
    --Textarea-focused: 1;
  }
  &::before {
    box-sizing: border-box;
    content: '';
    display: block;
    position: absolute;
    pointer-events: none;
    inset: 0px;
    z-index: 1;
    border-radius: inherit;
    margin: calc(1px * -1);
    box-shadow: var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * 2px)
      ${({ theme }) => theme.palette.primary.light};
  }
  &.Gn-disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.palette.action.disabledBackground};
    color: ${({ theme }) => theme.palette.action.disabled};
    pointer-events: none;
  }
`;

const StyledTextarea = styled.textarea<{ $error?: boolean }>`
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  border: 0;
  outline: none;
  padding: 0 12px 0 0;
  width: 100%;
  resize: none;
  overflow: auto;
  height: auto;
  &::placeholder {
    color: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.32)`};
  }
`;

const StyledDecorator = styled.div`
  display: flex;
  color: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.22)`};
  cursor: initial;
  &.GnTextarea-startDecorator {
    margin: 0px 7px 8px -5px;
  }
  &.GnTextarea-endDecorator {
    margin: 8px 7px 0px -5px;
  }
`;

const Textarea = ({
  children,
  rows = 3,
  minRows = 3,
  maxRows = 5,
  size = 'medium',
  onChange,
  error = false,
  disabled = false,
  startDecorator,
  endDecorator,
  ...rest
}: TextareaProps) => {
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));
  const className = getClassNames('Textarea', [`size${capitalize(size)}`]);
  console.assert(!(rows < minRows), 'Textarea: rows should be generater then minRows');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 20;
      const previousRows = e.target.rows;

      e.target.rows = minRows; //행수 초기화

      //현재행수
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);
      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }
      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }
      // 최대를 넘지 않게 행수 초기화
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows);
      onChange && onChange(e);
    },
    [onChange, minRows, maxRows]
  );

  return (
    <StyledTextareaWrapper
      className={`${className} ${disabled ? 'Gn-disabled' : ''}`}
      $size={size}
      $error={error}
    >
      {startDecorator && (
        <StyledDecorator className="GnTextarea-startDecorator">{startDecorator}</StyledDecorator>
      )}
      <StyledTextarea
        className={`GnTextarea-textarea`}
        rows={textareaRows}
        aria-label={rest.placeholder}
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        disabled={disabled}
        {...rest}
      >
        {children}
      </StyledTextarea>
      {endDecorator && (
        <StyledDecorator className="GnTextarea-endDecorator">{endDecorator}</StyledDecorator>
      )}
    </StyledTextareaWrapper>
  );
};

export default Textarea;
