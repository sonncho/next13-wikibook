'use client';

import React, { ReactNode, TextareaHTMLAttributes, useCallback, useState } from 'react';
import styled from 'styled-components';

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
  hasError?: boolean;
}

const StyledTextarea = styled.textarea<{ hasError?: boolean }>`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.text.primary};
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.palette.error.main : `rgba(${theme.palette.customColors.main}, 0.22)`};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  box-sizing: border-box;
  outline: none;
  padding: ${({ theme }) => theme.spacing(2, 3)};
  width: 100%;
  resize: none;
  overflow: auto;
  height: auto;
  &::placeholder {
    color: ${({ theme }) => `rgba(${theme.palette.customColors.main}, 0.32)`};
  }
`;

const Textarea = (props: TextareaProps) => {
  const { rows = 5, minRows = 5, maxRows = 10, children, hasError, onChange, ...rest } = props;
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows));

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
    <StyledTextarea
      hasError={hasError}
      rows={textareaRows}
      aria-label={rest.placeholder}
      onChange={handleChange}
      {...rest}
    >
      {children}
    </StyledTextarea>
  );
};

export default Textarea;
